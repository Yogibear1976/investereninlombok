'use client';

import Marquee from "react-fast-marquee";
import LogoComponent from "../LogoComponent";

interface DataScienceLogosProps {
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  gradient: boolean;
  gradientColor: string;
}

const DataScienceLogos: React.FC<DataScienceLogosProps> = ({
    speed,
    direction,
    gradient,
    gradientColor
 }) => {
  return ( 
      <div className="py-4">
        <Marquee gradientWidth={20} autoFill={true} speed={speed} direction={direction} gradient={gradient} gradientColor={gradientColor}>
        <LogoComponent dark={false} height={100} width={101} src='/images/techstack_logos/Python.png' alt='python3' desc="Python 3"/>
        <LogoComponent dark={false} height={100} width={263} src='/images/techstack_logos/Kaggle.png' alt='kaggle' desc="Kaggle" />
        <LogoComponent dark={false} height={100} width={100} src='/images/techstack_logos/Keras.png' alt='Keras' desc="Keras"/>
        <LogoComponent dark={false} height={100} width={94} src='/images/techstack_logos/Numpy.png' alt='numpy' desc="NumPy"/>
        <LogoComponent dark={false} height={100} width={83} src='/images/techstack_logos/PyTorch.png' alt='pytorch' desc="PyTorch"/>
        <LogoComponent dark={false} height={100} width={90} src='/images/techstack_logos/TensorFlow.png' alt='tensorflow' desc="TensorFlow"/>
      </Marquee>
    </div>
   );
}
 
export default DataScienceLogos;