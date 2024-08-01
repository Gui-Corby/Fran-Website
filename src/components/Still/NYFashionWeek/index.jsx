import styles from "./styles.module.scss";
import { NYFWGif, NYFWImgs } from "../../../data/stillData.js";

export const NYFashionWeek = () => {
    const images = NYFWImgs;
    const gifs = NYFWGif;

    return (
        <section className={styles.NYFW_section}>
            <h1>New York Fashion Week</h1>
            <div className={styles.content}>
                <div className={styles.content_gifs}>
                    {gifs.map((gif, index) => (
                        <img key={index} src={gif} alt="" />
                    ))}
                </div>

                <div className={styles.content_photos}>
                    {images.map((photo, index) => (
                        <img key={index} src={photo} alt="" />
                    ))}
                </div>
            </div>
        </section>
    )

}