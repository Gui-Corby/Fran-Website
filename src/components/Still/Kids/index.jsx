import { kidsPhotos } from "../../../data/stillData"
import styles from "./styles.module.scss"


export const Kids = () => {
    const images = kidsPhotos;

    return (
        <section className={styles.kids_section}>
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