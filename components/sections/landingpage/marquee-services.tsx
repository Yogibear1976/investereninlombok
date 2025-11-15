import React from "react";
import MarqueeSliderServices from "@/utils/Marquees/MarqueeSliderServices";

export const MarqueeServices = () => {
  return (
    <main>
      <div className="relative py-4 md:py-2">
        <MarqueeSliderServices
          speed={40}
          mar_one="tot 70% goedkoper dan Bali"
          mar_two="projectontwikkeling"
          mar_three="waardestijging 8-12%"
          mar_four="verhuurmanagement"
          mar_five="transparantie"
          mar_six="duurzaam"
        />
      </div>
    </main>
  );
};
