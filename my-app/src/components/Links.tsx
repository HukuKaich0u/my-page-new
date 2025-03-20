import Image from "next/image";
import githubIcon from "../../public/github.png";
import zennIcon from "../../public/logo.png";
import xIcon from "../../public/twitter.png";
import Link from "next/link";

const Links = () => {
  return (
    <div className="flex justify-center">
      <div
        className="flex justify-around items-center w-[300px] bg-white 
      drop-shadow-[0_5px_5px_rgba(0,0,0,0.50)] rounded-[15px] py-2 px-4"
      >
        <Link href="https://zenn.dev/kimuchi" target="_blank">
          <Image
            src={zennIcon}
            alt="Zennのアイコン"
            width={50}
            height={50}
            className="hover:scale-115 object-cover"
          />
        </Link>
        <Link href="https://github.com/HukuKaich0u" target="_blank">
          <Image
            src={githubIcon}
            alt="GitHubのアイコン"
            width={50}
            height={50}
            className="hover:scale-115 object-cover"
          />
        </Link>
        <Link href="https://x.com/HukuKaich0u" target="_blank">
          <Image
            src={xIcon}
            alt="Xのアイコン"
            width={30}
            height={30}
            className="hover:scale-115 object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default Links;
