import { LincolnCenterGifs, lincolnCenterImgs } from "../../../data/stillData.js";
import styles from "./styles.module.scss";

export const LincolnCenter = () => {
  const images = lincolnCenterImgs;
  const gifs = LincolnCenterGifs;

  return (
    <section className={styles.lincoln_center_section}>
      <h1>Lincoln Center</h1>

      <div className={styles.content}>
        <div className={styles.content_photos}>
          {images.map((photo, index) => (
            <img key={index} src={photo} alt="" />
          ))}
        </div>

        <div className={styles.content_gifs}>
            {gifs.map((gif, index) => (
                <img key={index} src={gif} alt="" />
            ))}
        </div>
      </div>
    </section>
  );
};
