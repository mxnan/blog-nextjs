import { Database } from "@/lib/types/supabase";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

 

  try {
    if (id === "*") {
      const { data, error } = await supabase
        .from("blog")
        .select("id")
        .eq("is_published", true)
        .limit(10);

      if (error) throw error;
      return Response.json({ data });

    } else if (id) {
      // First, check if the blog exists, regardless of its published status
      const { data: blogExists, error: existsError } = await supabase
        .from("blog")
        .select("is_published")
        .eq("id", id)
        .single();

      if (existsError) {
        if (existsError.code === 'PGRST116') {
        
          return new Response(JSON.stringify({ error: "Blog not found" }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
          });
        }
        throw existsError;
      }

      if (!blogExists.is_published) {
      
        return new Response(JSON.stringify({ error: "Blog not found" }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // If the blog exists and is published, fetch all its data
      const { data, error } = await supabase
        .from("blog")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

   
      return Response.json({ data });
    }

    // If no id is provided
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
  
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}