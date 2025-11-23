"use client";

import * as React from "react";
import Image from "next/image";
import { nl } from "date-fns/locale/nl";

import * as z from "zod";
import axios from "axios";
import { useState, ReactNode } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Icons } from "../icons/Icons";

import { toast } from "sonner";
import { Combobox } from "@/components/ui/combobox";
import { DatePicker } from "@/components/ui/date-picker";
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
  title: ReactNode;
  available?: boolean;
  navbar?: boolean;
  sky?: boolean;
  width?: boolean;
}

export const ModalAppointment = ({
  title,
  available,
  navbar,
  sky,
  width,
}: ModalProps) => {
  const times = [
    { label: "9:00", value: "9:00" },
    { label: "10:00", value: "10:00" },
    { label: "11:00", value: "11:00" },
    { label: "12:00", value: "12:00" },
    { label: "13:00", value: "13:00" },
    { label: "14:00", value: "14:00" },
    { label: "15:00", value: "15:00" },
    { label: "16:00", value: "16:00" },
    { label: "17:00", value: "17:00" },
    { label: "19:00", value: "19:00" },
    { label: "20:00", value: "20:00" },
    { label: "21:00", value: "21:00" },
  ];

  const items = [
    {
      id: "buying",
      label: "Aankopen van bestaand vastgoed",
    },
    {
      id: "own_villa",
      label: "Eigen villa laten bouwen",
    },
    {
      id: "invest_projects",
      label: "Collectief investeren in projecten",
    },
    {
      id: "management",
      label: "Vastgoed management",
    },
    {
      id: "other",
      label: "Anders",
    },
  ] as const;

  const router = useRouter();

  const formSchema = z.object({
    firstname: z.string().min(1, "Vul je voornaam in").max(30),
    lastname: z.string().min(1, "Vul je achternaam in").max(30),
    email: z
      .string()
      .min(1, "Email is verplicht")
      .email("Ongeldig e-mail adres"),
    phone: z
      .string()
      .min(8, { message: "Voer een geldig telefoonnummer in" })
      .regex(/^[0-9+\s()-]*$/, {
        message: "Alleen cijfers en + zijn toegestaan",
      }),
    type: z.string().min(1, "Vul dit verplichte veld in"),
    selectedDate: z.date({
      error: "Kies een datum",
    }),
    time: z.string().min(2, "Kies een tijd"),
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "Selecteer ten minste 1 waarde.",
    }),
    travelled: z.string().min(1, "Vul dit verplichte veld in"),
    when: z.string().min(1, "Vul dit verplichte veld in"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      type: "",
      time: "",
      selectedDate: undefined,
      items: ["buying"],
      travelled: "",
      when: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const { reset } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const {
      firstname,
      lastname,
      email,
      phone,
      type,
      selectedDate,
      time,
      items,
      travelled,
      when,
    } = values;

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
      await axios.post(`/api/appointment`, {
        firstname,
        lastname,
        email,
        phone,
        type,
        selectedDate: convertUTCToLocalDate(selectedDate),
        time,
        items,
        travelled,
        when,
      });
      toast(
        "Afspraak gemaakt, ik neem zo snel mogelijk contact op en stuur je een meeting link op je mail.",
        { description: `${selectedDate} op ${time}` }
      );
      setIsSubmitting(false);
      reset();
      setOpen(false);
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
      max-h-[90dvh]
      p-0
      grid-rows-[auto_minmax(0,1fr)_auto]
      overflow-hidden
    "
      >
        {/* HEADER */}
        <DialogHeader className="p-6 pb-2 space-y-3">
          <DialogTitle className="text-base sm:text-lg leading-tight">
            Laten we eens kennismaken.
          </DialogTitle>

          <DialogDescription className="text-sm leading-relaxed">
            Vul hier alle velden in en klik op{" "}
            <span className="font-semibold">'Verzenden'</span>.
          </DialogDescription>

          {/* CONTACT CARD */}
          <div className="pt-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <Image
                  className="w-10 h-10 rounded-full"
                  src="/avatars/portrait_2.jpg"
                  alt="Avatar"
                  width={250}
                  height={250}
                />

                <span
                  className={`
                absolute top-0 start-7 w-3.5 h-3.5 border-2 border-background rounded-full
                ${available ? "bg-nature" : "bg-destructive"}
              `}
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-primary truncate">
                  Jochgem van Delft
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  <a
                    className="hover:underline"
                    href="mailto:jochgem@investereninlombok.nl"
                  >
                    jochgem@investereninlombok.nl
                  </a>
                </p>
              </div>

              <span
                className={`
              inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full
              ${
                available
                  ? "bg-nature text-nature-foreground"
                  : "bg-destructive-foreground text-destructive"
              }
            `}
              >
                <span
                  className={`
                w-2 h-2 me-1 rounded-full
                ${available ? "bg-nature-foreground" : "bg-destructive"}
              `}
                />
                {available ? "Beschikbaar" : "Niet beschikbaar"}
              </span>
            </div>

            <div className="flex items-center text-xs text-muted-foreground">
              <Icons.clock className="mr-2 h-4 w-4" />
              30 minuten of meer …
            </div>

            <div className="flex items-center text-xs text-muted-foreground">
              <Icons.course className="mr-2 h-4 w-4" />
              Je ontvangt een Google Meet link binnen 24 uur.
            </div>
          </div>
        </DialogHeader>

        {/* FORM CONTENT (scrolling area) */}
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
                        placeholder="Achternaam"
                        autoComplete="family-name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-1">E-mailadres</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="naam@email.nl"
                        autoComplete="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-1">
                      Telefoonnummer
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="+31 6 1234 5678" {...field} />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />

              {/* Type investeerder */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-1">
                      Onder welke categorie investeerder val je?
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Maak een keuze" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="private">
                              Particuliere investeerder
                            </SelectItem>
                            <SelectItem value="business">
                              Zakelijke investeerder
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />

              {/* Date */}
              <FormField
                control={form.control}
                name="selectedDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-1">Datum & Tijd</FormLabel>
                    <FormControl>
                      <DatePicker
                        fieldvalue="Kies een datum"
                        locale={nl}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />

              {/* Time */}
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Combobox
                        fieldvalue="Kies een tijd die je goed uitkomt"
                        options={times}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />

              {/* Agenda items */}
              <FormField
                control={form.control}
                name="items"
                render={() => (
                  <FormItem>
                    <div className="mb-3">
                      <FormLabel className="text-base">
                        Afspraak onderwerp(en)
                      </FormLabel>
                      <FormDescription>
                        Selecteer hieronder waarover we het kunnen hebben.
                      </FormDescription>
                    </div>

                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          const checked = field.value?.includes(item.id);
                          return (
                            <FormItem className="flex items-start space-x-3">
                              <FormControl>
                                <Checkbox
                                  checked={checked}
                                  onCheckedChange={(isChecked) =>
                                    isChecked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value.filter(
                                            (v) => v !== item.id
                                          )
                                        )
                                  }
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}

                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />

              {/* Have you travelled */}
              <FormField
                control={form.control}
                name="travelled"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-1">
                      Ben je al in Indonesië?
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Maak een keuze" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="yes">Jazeker</SelectItem>
                            <SelectItem value="no">Nee, nog niet</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />

              {/* When are you traveling */}
              <FormField
                control={form.control}
                name="when"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-1">
                      Wanneer wil je naar Indonesië afreizen?
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Maak een keuze" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="asap">
                              Zo snel mogelijk.
                            </SelectItem>
                            <SelectItem value="three_months">
                              Binnen 3 maanden.
                            </SelectItem>
                            <SelectItem value="six_months">
                              Binnen 6 maanden.
                            </SelectItem>
                            <SelectItem value="no_idea">
                              Ik heb nog geen idee.
                            </SelectItem>
                            <SelectItem value="already">
                              Ik ben al in Indonesië.
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />

              <FormDescription className="pt-2">
                Ik neem je privacy serieus — je gegevens worden alleen gebruikt
                om de diensten te leveren die je aanvraagt.
              </FormDescription>
            </form>
          </Form>
        </div>

        {/* FOOTER */}
        <DialogFooter className="p-4">
          <Button
            onClick={form.handleSubmit(onSubmit)}
            type="submit"
            variant="sky"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Icons.spinner className="h-4 w-4 animate-spin" />
            ) : (
              <Icons.save className="h-4 w-4" />
            )}
            Verzenden
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
