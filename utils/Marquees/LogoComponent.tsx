'use client';

import Image from "next/image";

interface LogoComponentProps {
    dark?: boolean;
    height: number;
    width: number;
    src: string | null | undefined;
    alt: string;
    desc?: string;
}

const LogoComponent: React.FC<LogoComponentProps> = ({ dark, height, width, src, alt, desc }) => {
  return ( 
    <div className="flex flex-col">      
      <Image 
        className={`px-4 md:px-10 ${dark ? "opacity-75" : "opacity-100"} w-[90%] md:w-[100%] h-[90%] md:h-[100%] object-contain`}
        height={height}
        width={width}
        alt={alt} 
        src={src || '/images/placeholder.png'}
      />
      {!dark ? 
        <div className="mt-2">
          <p className={`${dark ? "text-gray-400" : "text-gray-900" } mr-2 md:mr-0 text-[12px] md:text-[13px] opacity-75 text-center font-light`}>
              {desc}
          </p>
        </div> 
        : null
      }
    </div>
   );
}
 
export default LogoComponent;