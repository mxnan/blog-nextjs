import React, { useTransition } from "react";
import { Button } from "../ui/button";
import { PiLightningDuotone } from "react-icons/pi";
import { useUser } from "@/lib/store/user";
import LoginIcon from "../nav/login-icon";
import { checkout } from "@/lib/actions/stripe";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { loadStripe } from "@stripe/stripe-js";

export default function Checkout() {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const user = useUser((state) => state.user);

  const handleCheckout = (e: any) => {
    e.preventDefault();
    startTransition(async () => {
      const data = JSON.parse(
        await checkout(user?.user_metadata?.email!, location.origin + pathname)
      );
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
      );
      await stripe?.redirectToCheckout({
        sessionId: data.id,
      });
    });
  };

  
  return (
    <form
      className={cn("h-56 w-full flex items-center justify-center", {
        "animate-pulse": isPending,
      })}
      onSubmit={handleCheckout}
    >
      <Button
        variant="ghost"
        className="flex flex-col p-10 gap-5 ring-2 ring-lightmode dark:ring-darkmode"
      >
        <span className="flex items-center gap-4 text-2xl font-bold">
          <PiLightningDuotone
            className={cn(
              "w-6 h-6 text-lightmode dark:text-darkmode",
              !isPending ? "animate-pulse" : "animate-spin"
            )}
          />
          Upgrade to Pro
        </span>
        <span className="font-title text-2xl font-bold">
          Unlock all blog content
        </span>
      </Button>
    </form>
  );
}
