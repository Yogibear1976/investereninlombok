'use client';

import Marquee from "react-fast-marquee";
import LogoComponent from "./LogoComponent";

interface MarqueeSliderLogosProps {
  speed?: number;
  // gradient: boolean;
  // gradientColor: string;
}

const MarqueeSliderLogos: React.FC<MarqueeSliderLogosProps> = ({
    speed,
    // gradient,
    // gradientColor
 }) => {
  return ( 
        <Marquee autoFill={true} speed={speed}>
            <LogoComponent dark height={100} width={81} src='/images/tech_logos/Flutter.png' alt='flutter'/>
            <LogoComponent dark height={100} width={99} src='/images/tech_logos/GraphQL.png' alt='graphql'/>
            <LogoComponent dark height={100} width={100} src='/images/tech_logos/Typescript.png' alt='typescript'/>
            <LogoComponent dark height={100} width={136} src='/images/tech_logos/Tailwind_new.png' alt='tailwind'/>
            <LogoComponent dark height={100} width={166} src='/images/tech_logos/Next.png' alt='next'/>
            <LogoComponent dark height={100} width={99} src='/images/tech_logos/Node.png' alt='node' />
            <LogoComponent dark height={100} width={99} src='/images/tech_logos/Prisma.png' alt='prisma' />
            <LogoComponent dark height={100} width={300} src='/images/tech_logos/MongoDB.png' alt='mongodb' />
            <LogoComponent dark height={100} width={167} src='/images/tech_logos/AWS.png' alt='aws' />
            <LogoComponent dark height={100} width={94} src='/images/tech_logos/Numpy.png' alt='numpy'/>
            <LogoComponent dark height={100} width={90} src='/images/tech_logos/TensorFlow.png' alt='tesnorflow' />
            <LogoComponent dark height={100} width={99} src='/images/tech_logos/Python.png' alt='python' />
        </Marquee>
   );
}
 
export default MarqueeSliderLogos;