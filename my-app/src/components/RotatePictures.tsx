import Image from "next/image";
import UrbanPict from "../../public/urban-vintage-78A265wPiO4-unsplash.jpg";
import styles from "./RotatePictures.module.css";

const RotatePictures = () => {
  return (
    <div className="flex items-center justify-center">
      <div className={styles.wrap}>
        <ul className={styles.slideshow}>
          <Image
            src={UrbanPict}
            alt="fromUnsplash"
            width={200}
            height={200}
            className={styles.content}
          />
          <Image
            src={UrbanPict}
            alt="fromUnsplash"
            width={200}
            height={200}
            className={styles.content}
          />
          <Image
            src={UrbanPict}
            alt="fromUnsplash"
            width={200}
            height={200}
            className={styles.content}
          />
          <Image
            src={UrbanPict}
            alt="fromUnsplash"
            width={200}
            height={200}
            className={styles.content}
          />
          <Image
            src={UrbanPict}
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

export default RotatePictures;
