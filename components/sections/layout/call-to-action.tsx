"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons/Icons";
import { ModalAppointment } from "@/components/modals/modal-appointment";

export const CallToAction = () => {
  return (
    <section className="bg-azure py-16 px-4 justify-items-center">
      <div className="container lg:grid lg:grid-cols-2 text-center lg:text-left place-items-center">
        <div className="lg:col-start-1">
          <h3 className="font-medium text-white tracking-tighter leading-4xl lg:leading-5xl lg:text-5xl text-4xl ">
            Ben je klaar om met vertrouwen en de juiste kennis beslissingen te
            nemen op de vastgoedmarkt van Zuid-Lombok?
          </h3>
          <p className="font-normal leading-tight text-gray-300 text-xl mt-4 mb-8 lg:mb-0">
            Neem vandaag nog contact met ons op voor een vrijblijvend gesprek en
            zet de eerste stap richting het realiseren van jouw vastgoedplannen.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <ModalAppointment title="Even kletsen?" available />
            <div className="flex flex-row items-center justify-center">
              <Icons.whatsapp className="text-nature-foreground mr-1 h-6 w-6" />
              <Link href={siteConfig.links.whatsapp}>
                <p className="text-white font-bold my-4 hover:text-fresh-foreground transition hover:cursor-pointer">
                  of stuur me een berichtje.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
