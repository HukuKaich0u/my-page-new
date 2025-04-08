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
            alt="Graduation from my highschool"
            width={200}
            height={200}
            className={styles.content}
          />
          <Image
            src={Diploma}
            alt="Diploma of my highschool"
            width={200}
            height={200}
            className={styles.content}
          />
          <Image
            src={FoieGras}
            alt="Foie Gras at lacoccinella"
            width={200}
            height={150}
            className={styles.content}
          />
          <Image
            src={Duck}
            alt="We went to the wrong restaurant with Takashi lol"
            width={200}
            height={150}
            className={styles.content}
          />
          <Image
            src={Appetizer}
            alt="Appetizer at lacoccinella"
            width={200}
            height={150}
            className={styles.content}
          />
          <Image
            src={Tagliatelle}
            alt="Tagliatelle at lacoccinella"
            width={200}
            height={150}
            className={styles.content}
          />
          <Image
            src={Drink}
            alt="Drink at las"
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
