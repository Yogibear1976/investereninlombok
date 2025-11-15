'use client';

import Marquee from "react-fast-marquee";
import LogoComponent from "../LogoComponent";

interface MobileLogosProps {
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  gradient: boolean;
  gradientColor: string;
}

const MobileLogos: React.FC<MobileLogosProps> = ({
    speed,
    direction,
    gradient,
    gradientColor
 }) => {
  return ( 
      <div className="py-4">
        <Marquee gradientWidth={20} autoFill={true} speed={speed} direction={direction} gradient={gradient} gradientColor={gradientColor}>
        <LogoComponent dark={false} height={100} width={74} src='/images/techstack_logos/Java.png' alt='rest' desc="Java"/>
        <LogoComponent dark={false} height={100} width={100} src='/images/techstack_logos/React.png' alt='react' desc="React Native" />
        <LogoComponent dark={false} height={100} width={89} src='/images/techstack_logos/NodeJS.png' alt='node' desc="Node.js"/>
        <LogoComponent dark={false} height={100} width={112} src='/images/techstack_logos/Swift.png' alt='swift' desc="Swift"/>
        <LogoComponent dark={false} height={100} width={100} src='/images/techstack_logos/Nativescript.png' alt='native script' desc="Native Script"/>
        <LogoComponent dark={false} height={100} width={102} src='/images/techstack_logos/Ionic.png' alt='ionic' desc="Ionic"/>
        <LogoComponent dark={false} height={100} width={89} src='/images/techstack_logos/Flutter.png' alt='flutter' desc="Flutter"/>
      </Marquee>
    </div>
   );
}
 
export default MobileLogos;