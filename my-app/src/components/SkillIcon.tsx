import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type SkillProps = {
  name: StaticImageData;
  description: string;
  children: ReactNode;
};

const SkillIcon = (props: SkillProps) => {
  const { name, description, children } = props;
  return (
    <div className="relative group inline-block">
      <Image
        width={40}
        height={40}
        src={name}
        alt={description}
        className="m-2"
      />
      <div
        className="absolute top-full mb-2 left-1/2 transform -translate-x-1/2 
                  bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 
                  group-hover:opacity-100 transition pointer-events-none group-active:opacity-100"
      >
        {children}
      </div>
    </div>
  );
};

export default SkillIcon;
