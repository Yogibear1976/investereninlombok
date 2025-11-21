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

        <div className="py-20 bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)]">
          <section className="w-full py-16">
            <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 px-4">
              {/* <!-- PACKAGE 1 — BASIC --> */}
              <div className="border border-border bg-white p-8 rounded-2xl flex flex-col gap-5 hover:shadow-md transition">
                <div className="border-t border-sky/30 w-12 mb-2"></div>

                <h3 className="text-base font-semibold tracking-wider uppercase">
                  Maintenance Package
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Perfect for owners who need essential upkeep and structured
                  support.
                </p>

                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Monthly maintenance</li>
                  <li>• Standard reporting</li>
                  <li>• Daytime support</li>
                </ul>

                <div className="mt-6">
                  <p className="text-xs text-muted-foreground uppercase">
                    from
                  </p>
                  <p className="text-2xl font-semibold tracking-tight">
                    IDR 1.200.000
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">/ month</p>
                </div>
              </div>

              {/* <!-- PACKAGE 2 — MOST POPULAR --> */}
              <div className="relative border border-primary bg-secondary p-8 rounded-2xl flex flex-col gap-5 shadow-md transition">
                <span className="absolute -top-3 left-4 bg-primary text-white text-[11px] px-3 py-1 rounded-md tracking-wide font-medium shadow-sm">
                  MOST POPULAR
                </span>

                <div className="border-t border-primary w-12 mb-2"></div>

                <h3 className="text-base font-semibold tracking-wider uppercase">
                  Full Package
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Complete management for owners renting their villa short-term.
                </p>

                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• All Maintenance Services</li>
                  <li>• Professional listing creation</li>
                  <li>• Multi-platform sync</li>
                  <li>• Dynamic pricing management</li>
                  <li>• 24/7 guest communication</li>
                  <li>• Check-in/out coordination</li>
                </ul>

                <div className="mt-6">
                  <p className="text-xs text-muted-foreground uppercase">
                    from
                  </p>
                  <p className="text-2xl font-semibold tracking-tight">
                    IDR 3.200.000
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">/ month</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold uppercase mb-1">
                    Management Fees
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    14% of rental income
                  </p>

                  <h4 className="text-sm font-semibold uppercase mt-4 mb-1">
                    Performance Bonuses
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    • Occupancy &gt; 70%: +2% commission
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Occupancy &gt; 85%: +4% commission
                  </p>
                </div>
              </div>

              {/* <!-- PACKAGE 3 — PREMIUM --> */}
              <div className="border border-border bg-white p-8 rounded-2xl flex flex-col gap-5 hover:shadow-md transition">
                <div className="border-t border-sky/30 w-12 mb-2"></div>

                <h3 className="text-base font-semibold tracking-wider uppercase">
                  Premium Package
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tailored for luxury villas demanding top-tier service and
                  maximum ROI.
                </p>

                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Premium guest experience</li>
                  <li>• Advanced revenue management</li>
                  <li>• Weekly in-person inspections</li>
                  <li>• Dedicated villa manager</li>
                </ul>

                <div className="mt-6">
                  <p className="text-xs text-muted-foreground uppercase">
                    from
                  </p>
                  <p className="text-2xl font-semibold tracking-tight">
                    IDR 5.500.000
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">/ month</p>
                </div>
              </div>
            </div>
          </section>
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
