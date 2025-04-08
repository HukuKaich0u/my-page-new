import Image from "next/image";
import styles from "./RotatePictures.module.css";
import Training from "../../public/profIcons/training.jpg";
import Ski1 from "../../public/profIcons/ski1.jpeg";
import Ski2 from "../../public/profIcons/ski2.jpg";
import Coding from "../../public/profIcons/coding.jpg";
import SportsDay from "../../public/profIcons/sportsday.jpg";
import Dinner from "../../public/profIcons/dinner.jpg";
// https://pengi-n.co.jp/column/design/horizontal-slideshow/#%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B
const HomeRotation = () => {
  return (
    <div className="flex items-center justify-center h-[300px]">
      <div className={styles.wrap}>
        <ul className={styles.slideshow}>
          <Image
            src={Training}
            alt="fromUnsplash"
            width={200}
            height={200}
            className={styles.content}
          />
          <Image
            src={Ski1}
            alt="fromUnsplash"
            width={200}
            height={200}
            className={styles.content}
          />
          <Image
            src={Ski2}
            alt="fromUnsplash"
            width={200}
            height={200}
            className={styles.content}
          />
          <Image
            src={Coding}
            alt="fromUnsplash"
            width={200}
            height={200}
            className={styles.content}
          />
          <Image
            src={SportsDay}
            alt="fromUnsplash"
            width={200}
            height={200}
            className={styles.content}
          />
          <Image
            src={Dinner}
            alt="fromUnsplash"
            width={200}
            height={200}
            className={styles.content}
          />
        </ul>
      </div>
    </div>
  );
};

export default HomeRotation;
