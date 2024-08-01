import { friendsPhotos } from "../../../data/stillData";
import styles from "./styles.module.scss"


export const Friends = () => {
    const images = friendsPhotos;

    return (
        <section className={styles.friends_section}>
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