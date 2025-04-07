import Image from "next/image";
import styles from "./RotatePictures.module.css";
import Graduation from "../../public/graduation.jpg";
import Diploma from "../../public/diploma.jpg";
import Celebration from "../../public/celebration.jpg";
import FoieGras from "../../public/foiegras.jpg";
import Duck from "../../public/duck.jpg";
import Appetizer from "../../public/appetizer.jpg";
import Tagliatelle from "../../public/tagliatelle.jpg";
import Drink from "../../public/drink.jpg";

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
