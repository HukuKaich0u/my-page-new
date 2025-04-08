import Image from "next/image";
import styles from "./RotatePictures.module.css";
import Graduation from "../../public/profIcons/graduation.jpg";
import Diploma from "../../public/profIcons/diploma.jpg";
import FoieGras from "../../public/profIcons/foiegras.jpg";
import Duck from "../../public/profIcons/duck.jpg";
import Appetizer from "../../public/profIcons/appetizer.jpg";
import Tagliatelle from "../../public/profIcons/tagliatelle.jpg";
import Drink from "../../public/profIcons/drink.jpg";

const AboutRotation = () => {
  return (
    <div className="flex items-center justify-center h-[300px]">
      <div className={styles.wrap}>
        <ul className={styles.slideshow}>
          <Image
            src={Graduation}
            alt="fromUnsplash"
            width={200}
            height={200}
            className={styles.content}
          />
          <Image
            src={Diploma}
            alt="fromUnsplash"
            width={200}
            height={200}
            className={styles.content}
          />
          <Image
            src={FoieGras}
            alt="fromUnsplash"
            width={200}
            height={150}
            className={styles.content}
          />
          <Image
            src={Duck}
            alt="fromUnsplash"
            width={200}
            height={150}
            className={styles.content}
          />
          <Image
            src={Appetizer}
            alt="fromUnsplash"
            width={200}
            height={150}
            className={styles.content}
          />
          <Image
            src={Tagliatelle}
            alt="fromUnsplash"
            width={200}
            height={150}
            className={styles.content}
          />
          <Image
            src={Drink}
            alt="fromUnsplash"
            width={200}
            height={150}
            className={styles.content}
          />
        </ul>{" "}
      </div>
    </div>
  );
};

export default AboutRotation;
