"use client";

import * as React from "react";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "../icons/Icons";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const formSchema = z.object({
    name: z.string().min(1, "Vul je naam in").max(30),
    email: z
      .string()
      .min(1, { message: "E-mail is verplicht" })
      .email({ message: "Ongeldig e-mailadres" }),
    phone: z
      .string()
      .min(8, { message: "Voer een geldig telefoonnummer in" })
      .regex(/^[0-9+\s()-]*$/, {
        message: "Alleen cijfers en + zijn toegestaan",
      }),
    question: z.string().min(8, "Stel hier je vraag."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      question: "",
    },
  });

  const { reset } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { name, email, phone, question } = values;

    try {
      setIsSubmitting(true);
      await axios.post(`/api/quickcontact`, {
        name,
        email,
        phone,
        question,
      });
      toast("Formuliertje verstuurd, ik neem zo snel mogelijk contact op.");
      setIsSubmitting(false);
      reset();
    } catch {
      toast.error("Uh oh! Er ging iets mis.");
    }
  };

  return (
    <div className="w-full gap-8">
      <Card className="shadow-xl border-t shadow-fresh-foreground/60 border">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Contactformulier
          </CardTitle>
          <CardDescription>
            Ik neem binnen 24 uur contact met je op (tenzij het weekend of een
            nationale feestdag is, in welk geval het iets langer kan duren, je
            weet hoe dat gaat. 🤞
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4 mt-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-2">Naam</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        disabled={isSubmitting}
                        placeholder="Naam"
                        autoCapitalize="none"
                        autoComplete="name"
                        autoCorrect="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-2" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-2">E-mailadres</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        disabled={isSubmitting}
                        placeholder="naam@email.nl"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-2" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-2">
                      Telefoonnummer
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="phone"
                        disabled={isSubmitting}
                        placeholder="+31 6 1234 5678"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-2" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-2">
                      Waar kan ik je mee helpen?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        id="question"
                        disabled={isSubmitting}
                        placeholder="Stel hier je vraag ..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-2" />
                  </FormItem>
                )}
              />
              <FormDescription className="text-center">
                Ik neem je privacy serieus, dus ik gebruik je persoonsgegevens
                alleen voor administratieve doeleinden en om de producten en
                services te leveren die je bij me opvraagt. Voor informatie over
                hoe ik omga met de bescherming je persoonsgegevens, bekijk mijn{" "}
                <Link className="hover:underline font-bold" href="/privacy">
                  privacyverklaring
                </Link>
                .
              </FormDescription>
            </form>
          </Form>
          <div className="flex mt-4 justify-center">
            <Button
              onClick={form.handleSubmit(onSubmit)}
              className="w-full"
              type="submit"
              variant="sky"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.save className="mr-2 h-4 w-4" />
              )}{" "}
              Verzenden
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
