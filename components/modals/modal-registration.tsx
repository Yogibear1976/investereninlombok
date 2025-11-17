"use client";

import * as React from "react";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "../icons/Icons";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface ModalProps {
  title: string;
  available?: boolean;
  navbar?: boolean;
  sky?: boolean;
  width?: boolean;
}

export const ModalRegistration = ({
  title,
  navbar,
  sky,
  width,
}: ModalProps) => {
  const router = useRouter();

  const formSchema = z.object({
    email: z
      .string()
      .min(1, "Email is verplicht")
      .email("Ongeldig e-mail adres"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const { reset } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email } = values;

    const convertUTCToLocalDate = (date: Date) => {
      if (!date) {
        return date;
      }
      const numberOfMlSeconds = date?.getTime();
      const addMlSeconds = 60 * 60 * 2000;
      const newDateObj = new Date(numberOfMlSeconds + addMlSeconds);
      return newDateObj;
    };

    try {
      setIsSubmitting(true);
      await axios.post(`/api/registration`, {
        email,
      });
      setIsSubmitting(false);
      reset();
      setOpen(false);
      router.push(`/thankyou?email=${email}`); // niet nodig, denk ik.
      toast("Geregistreerd als potentieel investeerder, check je email.");
    } catch {
      toast.error("Uh oh! Er ging iets mis.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={width ? "w-full" : "block"}
          variant={sky ? "sky" : "secondary"}
          size={navbar ? "xs" : "default"}
        >
          {title}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="
      sm:max-w-[425px]
      p-0
      max-h-[85dvh]
      grid-rows-[auto_minmax(0,1fr)_auto]
      overflow-hidden
    "
      >
        {/* HEADER */}
        <DialogHeader className="p-6 pb-2 space-y-3">
          <DialogTitle className="text-base sm:text-lg leading-tight">
            Ontvang updates over nieuwe projecten.
          </DialogTitle>

          <DialogDescription className="text-sm leading-relaxed">
            Blijf als eerste op de hoogte van nieuwe villa's, grondpercelen en
            lopende bouwprojecten in Zuid-Lombok. Laat hieronder je e-mailadres
            achter.{" "}
            <span className="font-semibold">
              Geen spam, alleen waardevolle updates.
            </span>
          </DialogDescription>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icons.email className="h-4 w-4" />
            <p>Je ontvangt direct een gratis PDF in je mail.</p>
          </div>
        </DialogHeader>

        {/* FORM (scrollable content area) */}
        <div className="px-6 pb-4 overflow-y-auto">
          <Form {...form}>
            <form className="space-y-4 mt-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-1">E-mailadres</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="naam@email.nl"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        {/* FOOTER BUTTON */}
        <DialogFooter className="p-4">
          <Button
            onClick={form.handleSubmit(onSubmit)}
            className="w-full"
            variant="sky"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Icons.spinner className="h-4 w-4 animate-spin" />
            ) : (
              <Icons.save className="h-4 w-4" />
            )}
            Ontvang updates
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
