'use client';

import Marquee from "react-fast-marquee";
import LogoComponent from "../LogoComponent";

interface HostingLogosProps {
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  gradient: boolean;
  gradientColor: string;
}

const HostingLogos: React.FC<HostingLogosProps> = ({
    speed,
    direction,
    gradient,
    gradientColor
 }) => {
  return ( 
      <div className="py-4">
        <Marquee gradientWidth={20} autoFill={true} speed={speed} direction={direction} gradient={gradient} gradientColor={gradientColor}>
            <LogoComponent dark={false} height={100} width={168} src='/images/techstack_logos/AWS.png' alt='aws' desc="AWS"/>
            <LogoComponent dark={false} height={100} width={100} src='/images/techstack_logos/DigitalOcean.png' alt='digital ocean' desc="Digital Ocean"/>
            <LogoComponent dark={false} height={100} width={115} src='/images/techstack_logos/Vercel.png' alt='vercel' desc="Vercel"/>
            <LogoComponent dark={false} height={100} width={97} src='/images/techstack_logos/Ubuntu.png' alt='ubuntu' desc="Ubuntu"/>
            <LogoComponent dark={false} height={100} width={88} src='/images/techstack_logos/Nginx.png' alt='nginx' desc="Nginx"/>
            <LogoComponent dark={false} height={100} width={106} src='/images/techstack_logos/Vimexxx.png' alt='vimexxx' desc="Vimexxx"/>
      </Marquee>
    </div>
   );
}
 
export default HostingLogos;