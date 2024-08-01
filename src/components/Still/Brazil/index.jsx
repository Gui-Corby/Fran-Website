import { BrazilPhotos } from "../../../data/stillData.js";
import styles from "./styles.module.scss";


export const Brazil = () => {
    const images = BrazilPhotos

    return (
        <section className={styles.brazil_section}>
            <h1>Personal</h1>
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