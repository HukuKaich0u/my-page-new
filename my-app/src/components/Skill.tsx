import Image from "next/image";

const Skill = (props) => {
  const { name, children } = props;
  return (
    <div className="relative group inline-block">
      <Image width={40} height={40} src={name} alt={name} className="m-2" />
      <div
        className="absolute top-full mb2 left-1/2 transform -translate-x-1/2 
                  bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 
                  group-hover:opacity-100 transition pointer-events-none"
      >
        {children}
      </div>
    </div>
  );
};

export default Skill;
