import { NYCPhotos } from "../../../data/stillData";
import styles from "./styles.module.scss";


export const NYC = () => {
    const images = NYCPhotos;

    return (
        <section className={styles.nyc_section}>
            <div className={styles.content}>
                <div className={styles.content_photos}>
                    {images.map((photo, index) => (
                        <img key={index} src={photo} alt="" />
                    ))}
                </div>
            </div>
        </section>
    )
}