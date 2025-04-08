import Image from "next/image";
import Link from "next/link";
import GitHub from "../../public/profIcons/Github-Dark.svg";
import Zenn from "../../public/profIcons/logo.png";
import X from "../../public/profIcons/X.svg";
import LinkedIn from "../../public/profIcons/LinkedIn.svg";
import Discord from "../../public/profIcons/Discord.svg";

const Links = () => {
  return (
    <div className="flex justify-center">
      <div
        className="flex justify-around items-center w-[400px] bg-blue-200
      drop-shadow-[0_5px_5px_rgba(0,0,0,0.50)] rounded-[15px] py-2 "
      >
        <Link href="https://www.linkedin.com/in/%E5%B9%B8%E6%A8%B9-%E9%9D%92%E6%9F%B3-b3b945349/">
          <Image
            src={LinkedIn}
            alt="Zennのアイコン"
            width={43}
            height={43}
            className="hover:scale-115 object-cover"
          />
        </Link>
        <Link href="https://zenn.dev/kimuchi">
          <Image
            src={Zenn}
            alt="Zennのアイコン"
            width={43}
            height={43}
            className="hover:scale-115 object-cover"
          />
        </Link>
        <Link href="https://github.com/HukuKaich0u" target="_blank">
          <Image
            src={GitHub}
            alt="Zennのアイコン"
            width={43}
            height={43}
            className="hover:scale-115 object-cover"
          />
        </Link>
        <Link href="https://discord.gg/dEH6YPDK" target="_blank">
          <Image
            src={Discord}
            alt="GitHubのアイコン"
            width={43}
            height={43}
            className="hover:scale-115 object-cover"
          />
        </Link>
        <Link href="https://x.com/HukuKaich0u" target="_blank">
          <Image
            src={X}
            alt="Xのアイコン"
            width={50}
            height={50}
            className="hover:scale-115 object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default Links;
