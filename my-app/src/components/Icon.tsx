import Image from "next/image";
import facePicture from "../..//public/IMG_3496.jpeg";
import mapPin from "../../public/location.png";

const Icon = () => {
  return (
    <div className="flex flex-col items-center p-3">
      <Image
        src={facePicture}
        alt="自分の顔写真"
        width={180}
        height={180}
        className="rounded-full object-cover drop-shadow-[0_5px_5px_rgba(0,0,0,0.50)]"
      />
      <p className="font-bold text-2xl text-white mt-2 p-1">Koki Aoyagi</p>
      <p className="font-bold text-xl opacity-70 p-1">@kokiaoyagi</p>
      <p className="font-bold p-1">
        Tech ⚪︎ Hobbies ⚪︎ Food ⚪︎ Fitness
      </p>{" "}
      <div className="flex items-center text-[15px] opacity-70 font-bold">
        <Image
          src={mapPin}
          alt="位置情報のアイコン"
          width={25}
          height={25}
          className="p-1"
        />
        <p>Tokyo, Japan🇯🇵</p>
      </div>
    </div>
  );
};

export default Icon;
