// components/InvestorNote.tsx
import React from "react";
import { Info } from "lucide-react";

export const InvestorNote = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 py-4 sm:py-8 md:py-10">
        <div className="flex items-start gap-1">
          <div className="shrink-0 mt-0.5">
            <Info className="w-4 h-4 text-warning" />
          </div>
          <div className="text-xs sm:text-sm">
            <p className="font-normal leading-relaxed">
              Bij <span className="font-medium">InvestereninLombok.nl</span>{" "}
              staan we je bij tijdens <strong>elke stap</strong> van het proces.
              Voor groepen investeerders zoeken we samen ideale locaties en
              richten we, indien gewenst, PMA-structuren op voor investeerders
              of nominees en aandeelhouders. Zo wordt het mogelijk om
              <em> gefractioneerd te investeren</em> in vastgoedprojecten op
              Lombok op een veilige en professionele manier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
