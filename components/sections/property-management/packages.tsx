"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";

export const Packages = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col gap-6 ">
        <Badge variant="muted">Goed ondehouden en verhuurklaar</Badge>

        <h3 className="text-4xl lg:text-5xl font-light tracking-tight">
          Onze <span className="text-sky font-medium">packages</span>
        </h3>

        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
          Kies het pakket dat bij jouw behoeften past, en laat ons de rest
          verzorgen.
        </p>

        <div className="py-20">
          <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
            {/* Package 1 */}
            <div className="border border-border rounded-2xl p-8 flex flex-col gap-5 hover:shadow-md transition bg-white">
              {/* Header line */}
              <div className="border-t border-sky/30 w-12 mb-2"></div>

              <h3 className="text-base font-semibold tracking-wider uppercase">
                Maintenance Package
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Perfect voor eigenaren die basiszorg en periodiek beheer wensen.
              </p>

              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Maandelijks onderhoud</li>
                <li>• Standaard rapportages</li>
                <li>• Overdag support</li>
              </ul>

              <p className="text-2xl font-semibold tracking-tight mt-6">
                €99 / maand
              </p>
            </div>

            {/* Package 2 — Highlighted */}
            <div className="relative border border-primary rounded-2xl p-8 flex flex-col gap-5 shadow-md bg-secondary">
              {/* Badge */}
              <span className="absolute -top-3 left-4 bg-primary text-white text-[11px] px-3 py-1 rounded-md tracking-wide font-medium shadow-sm">
                MOST POPULAR
              </span>

              <div className="border-t border-primary w-12 mb-2"></div>

              <h3 className="text-base font-semibold tracking-wider uppercase">
                Full Package
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Compleet beheer voor hoge bezetting en zorgeloze verhuur.
              </p>

              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Volledig property management</li>
                <li>• Marketing & boekingen</li>
                <li>• 24/7 support</li>
              </ul>

              <p className="text-2xl font-semibold tracking-tight mt-6">
                €199 / maand
              </p>
            </div>

            {/* Package 3 */}
            <div className="border border-border rounded-2xl p-8 flex flex-col gap-5 hover:shadow-md transition bg-white">
              <div className="border-t border-sky/30 w-12 mb-2"></div>

              <h3 className="text-base font-semibold tracking-wider uppercase">
                Premium Package
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Voor high-end villa’s die maximale kwaliteit en rendement
                vereisen.
              </p>

              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Premium guest experience</li>
                <li>• Dynamische prijsstrategie</li>
                <li>• Wekelijkse inspecties</li>
              </ul>

              <p className="text-2xl font-semibold tracking-tight mt-6">
                €299 / maand
              </p>
            </div>
          </div>
        </div>

        {/* <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {samodules.map((item) => (
            <SAModule key={item.step} {...item} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

const SAModule = ({
  step,
  title,
  description,
  icon,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="relative rounded-sm border border-border p-5 bg-muted/60 hover:bg-secondary transition-colors overflow-hidden">
      <span className="absolute top-2 right-3 text-5xl font-bold text-primary/20 select-none">
        {step}
      </span>

      <div className="flex items-center gap-2 relative z-10">
        {icon}
        <h4 className="text-base font-semibold">{title}</h4>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mt-3 relative z-10">
        {description}
      </p>
    </div>
  );
};
