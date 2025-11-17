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
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface ModalProps {
  title: string;
  property: string;
  navbar?: boolean;
  sky?: boolean;
  width?: boolean;
}

export const ModalProperty = ({
  title,
  property,
  navbar,
  sky,
  width,
}: ModalProps) => {
  const router = useRouter();

  const formSchema = z.object({
    firstname: z.string().min(1, "Vul je voornaam in").max(30),
    lastname: z.string().min(1, "Vul je achternaam in").max(30),
    email: z
      .string()
      .min(1, "Email is verplicht")
      .email("Ongeldig e-mail adres"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const { reset } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { firstname, lastname, email } = values;

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
      await axios.post(`/api/brochure`, {
        firstname,
        lastname,
        email,
        property,
      });
      setIsSubmitting(false);
      reset();
      setOpen(false);
      //   router.push(`/thankyou?email=${email}`);
      toast(
        "Aanvraag ontvangen. De brochure is onderweg naar je inbox. Bedankt voor je interesse."
      );
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
            Ontvang de investeringsbrochure.
          </DialogTitle>

          <DialogDescription className="text-sm leading-relaxed">
            Hierin uitgebreide informatie over{" "}
            <span className="font-bold text-sky">{property}</span>. Je vindt
            onder meer rendement (ROI), huurprognoses, marktanalyses en
            verwachte waardestijging op de lange termijn.
          </DialogDescription>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icons.email className="h-4 w-4" />
            <p>Je ontvangt de brochure direct in je mailbox.</p>
          </div>
        </DialogHeader>

        {/* FORM (scrollable center area) */}
        <div className="px-6 pb-4 overflow-y-auto">
          <Form {...form}>
            <form className="space-y-4 mt-2">
              {/* Voornaam */}
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-1">Voornaam</FormLabel>
                    <FormControl>
                      <Input
                        id="firstname"
                        placeholder="Voornaam"
                        autoComplete="given-name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />

              {/* Achternaam */}
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-1">Achternaam</FormLabel>
                    <FormControl>
                      <Input
                        id="lastname"
                        placeholder="Achternaam"
                        autoComplete="family-name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />

              {/* E-mailadres */}
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
                        autoComplete="email"
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
            Ontvang alle informatie
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
