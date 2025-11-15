"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

import { ContactForm } from "@/components/forms/contact-form";
import { Mail, PhoneCall } from "lucide-react";

const people = [
  {
    id: 1,
    name: "Jochgem van Delft",
    designation: "Oprichter & Vastgoedontwikkelaar",
    image: "/avatars/portrait_2.jpg",
  },
  // {
  //   id: 2,
  //   name: "Robert Johnson",
  //   designation: "Cyber Security Advisor",
  //   image: "/avatars/portrait_2.jpg",
  // },
];

export const ContactSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        // chnage the bg to bg-black-100, so it matches the bg color and will blend in
        className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background
          "
      />
      <div className="flex flex-row items-center justify-center py-20 px-6">
        <div className="relative max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 place-items-center">
          <div className="col-span-1">
            <div className="flex flex-col gap-4 justify-center items-start">
              <h1 className="text-primary lg:leading-84px] font-medium tracking-tight text-6xl md:text-[64px] lg:text-[84px]">
                Meer weten?
              </h1>
              <p className="text-primary text-lg md:text-xl lg:text-2xl">
                Investeren op Lombok is een avontuur op zich. De komende jaren
                bieden dé kans om in te stappen in een snelgroeiende en zeer
                rendabele vastgoedmarkt. Wij staan klaar om je te begeleiden bij
                elke stap.
              </p>
              <div className="text-muted-foreground font-light text-base">
                We staan voor je klaar en zijn altijd bereikbaar via telefoon of
                e-mail als je vragen hebt of ondersteuning nodig hebt over
                Investeren op Lombok. Ook als je meer wilt weten over onze
                villa's, grondpercelen of lopende projecten.
              </div>
              <div className="flex flex-col sm:flex-row justify-between w-full">
                <AnimatedTooltip items={people} />
                <div className="flex justify-start items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <p className="text-primary text-sm font-bold my-4 hover:text-sky transition cursor-pointer">
                    <a href="mailto:info@investereninlombok.nl">
                      info[at]investereninlombok.nl
                    </a>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <PhoneCall className="h-5 w-5" />
                  <p className="text-primary text-sm font-bold my-4 hover:text-sky transition cursor-pointer">
                    <a href="tel:+31627330867">+31 627 330 867</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-start">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
