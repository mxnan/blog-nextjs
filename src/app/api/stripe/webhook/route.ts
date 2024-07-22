import { headers } from "next/headers";
import { buffer } from "stream/consumers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SK_KEY!);

const endpointSecret = process.env.ENDPOINT_SECRET!;
export async function POST(request: any) {
  let event;
  const rawBody = await buffer(request.body);
  try {
    const sig = headers().get("stripe-signature");

    event = stripe.webhooks.constructEvent(rawBody, sig!, endpointSecret);
  } catch (err: any) {
    return Response.json(
      { error: "Webhook signature verification failed." + err?.message },
      { status: 400 }
    );
    return;
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntentSucceeded = event.data.object;
      console.log("paymentIntentSucceeded", paymentIntentSucceeded);

      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  return Response.json({});
}


//video 4:01 update user table . 