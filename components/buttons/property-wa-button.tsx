import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

<a
  href={`https://wa.me/${agentPhoneIntl}?text=${encodeURIComponent(
    `Hello ${agentName}, I’m interested in ${code}.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="w-full flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white">
    <MessageCircle className="h-5 w-5" />
    Contact via WhatsApp
  </Button>
</a>;
