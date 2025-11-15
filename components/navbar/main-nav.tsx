"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
// import { Logo } from "../utils/logo";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons/Icons";

export const MainNav = () => {
  const pathname = usePathname();

  // Villa management toevoegen? //

  return (
    <div className="mr-4 hidden md:flex">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Diensten</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full bg-[url(/navigation/services-nav.jpg)] select-none flex-col justify-end p-6 no-underline outline-none focus:shadow-md"
                      href="/diensten"
                    >
                      <div className="mt-0 mb-2">
                        <h3 className="text-xl text-white tracking-tight font-bold leading-tight">
                          Wat doen we?
                        </h3>
                      </div>
                      <p className="text-white text-xs font-normal leading-tight">
                        Wij regelen aankoop, papierwerk, bouwtoezicht en verhuur
                        van je investering in Zuid-Lombok. Helemaal op afstand.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/diensten/aankoopbegeleiding"
                  title="Aankoopbegeleiding"
                >
                  Lombok biedt volop kansen voor investeerders die vastgoed
                  willen aankopen. De prijzen liggen nog aanzienlijk lager dan
                  in Bali, terwijl de waarde gestaag stijgt door toeristische
                  groei en verbeterde infrastructuur. Investeringen in Lombok
                  zijn ideaal voor wie gericht is op lange termijn
                  waardestijging of toekomstige projectontwikkeling.
                </ListItem>
                <ListItem
                  href="/diensten/project-ontwikkeling"
                  title="Project ontwikkeling"
                >
                  Deelname aan vastgoedprojecten in Lombok is ook bijzonder
                  aantrekkelijk. Denk aan de ontwikkeling van villa's, resorts
                  of commerciële complexen die inspelen op de groeiende vraag
                  van toeristen en expats. Projectinvesteringen leveren vaak
                  sneller rendement op via verhuurinkomsten of gedeelde
                  winstparticipatie.
                </ListItem>
                <ListItem
                  href="/diensten/property-management"
                  title="Property Management"
                >
                  Of je nu een luxe villa of een tweede huis bezit in Kuta of
                  Zuid-Lombok, onze flexibele managementpakketten dekken alles:
                  van onderhoud en personeel tot gastservices en
                  opbrengstoptimalisatie. Kies het pakket dat bij jouw behoeften
                  past, en laat ons de rest verzorgen.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Aanbod</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-2">
                <ListItem href="/aanbod/off-plan" title="Off-plan">
                  Nog niet gebouwd, je investeert op tekening of in de
                  planningsfase. Een goedkoper instapmoment.
                </ListItem>
                <ListItem href="/aanbod/in-aanbouw" title="In aanbouw">
                  Objecten momenteel in ontwikkeling, de bouw is bezig.
                  Oplevering meestal binnen 3 tot 12 maanden.
                </ListItem>
                <ListItem href="/aanbod/bestaand" title="Bestaand">
                  Reeds gebouwd (leegstaand of verhuurd). Direct rendement
                  (huurinkomsten vanaf dag één).
                </ListItem>
                <ListItem href="/aanbod/land" title="Land">
                  ** Hierachter komt een klein aanbod van huurvillas 1 maand
                  commissie **
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/updates">Updates</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/over-ons">Over ons</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>{" "}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-normal tracking-wide uppercase">
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-xs font-light leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function ListItemOne({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-normal tracking-wide uppercase">
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-3 text-xs font-light leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
