'use client';

import Marquee from "react-fast-marquee";
import LogoComponent from "../LogoComponent";

interface LanguageLogosProps {
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  gradient: boolean;
  gradientColor: string;
}

const LanguageLogos: React.FC<LanguageLogosProps> = ({
    speed,
    direction,
    gradient,
    gradientColor
 }) => {
  return ( 
      <div className="py-4">
        <Marquee gradientWidth={20} autoFill={true} speed={speed} direction={direction} gradient={gradient} gradientColor={gradientColor}>
            <LogoComponent dark={false} height={100} width={100} src='/images/techstack_logos/Typescript.png' alt='rest' desc="Typescript"/>
            <LogoComponent dark={false} height={100} width={100} src='/images/techstack_logos/Javascript.png' alt='rest' desc="Javascript"/>
            <LogoComponent dark={false} height={100} width={74} src='/images/techstack_logos/Java.png' alt='rest' desc="Java"/>
            <LogoComponent dark={false} height={100} width={103} src='/images/techstack_logos/Rest.png' alt='rest' desc="Rest API"/>
            <LogoComponent dark={false} height={100} width={189} src='/images/techstack_logos/PHP.png' alt='php' desc="PHP"/>
            <LogoComponent dark={false} height={100} width={100} src='/images/techstack_logos/Wordpress.png' alt='wordpress' desc="Wordpress"/>
            <LogoComponent dark={false} height={100} width={107} src='/images/techstack_logos/Json.png' alt='json' desc="JSON"/>
            <LogoComponent dark={false} height={100} width={136} src='/images/techstack_logos/Docker.png' alt='docker' desc="Docker"/>
            <LogoComponent dark={false} height={100} width={89} src='/images/techstack_logos/GraphQL.png' alt='graphql' desc="GraphQL"/>
            <LogoComponent dark={false} height={100} width={103} src='/images/techstack_logos/Kubernetes.png' alt='kubernetes' desc="Kubernetes"/>
            <LogoComponent dark={false} height={100} width={100} src='/images/techstack_logos/Tailwind.png' alt='tailwind' desc="Tailwind CSS"/>
            <LogoComponent dark={false} height={100} width={100} src='/images/techstack_logos/React.png' alt='react' desc="React" />
            <LogoComponent dark={false} height={100} width={166} src='/images/techstack_logos/NextJS.png' alt='next' desc="Next.js"/>
            <LogoComponent dark={false} height={100} width={89} src='/images/techstack_logos/NodeJS.png' alt='node' desc="Node.js"/>
            <LogoComponent dark={false} height={100} width={83} src='/images/techstack_logos/Prisma.png' alt='prisma' desc="Prisma"/>
            <LogoComponent dark={false} height={100} width={349} src='/images/techstack_logos/MongoDB.png' alt='mongodb' desc="MongoDB"/>
            <LogoComponent dark={false} height={100} width={101} src='/images/techstack_logos/Python.png' alt='python' desc="Pyhton"/>
      </Marquee>
    </div>
   );
}
 
export default LanguageLogos;