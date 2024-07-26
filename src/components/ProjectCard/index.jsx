import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import styles from "./styles.module.scss";
import { gifsData } from "../../data/gifsData";

export const ProjectCard = ({ gif, alt }) => {
  const projectName = alt
    .replace(/_/gi, " ")
    .replace(/^\w/, (c) => c.toUpperCase());

  return (
    <li className={styles.project_card}>
      <div className={styles.image_container}>
        <LazyLoad height={200} offset={100} once>
          <img src={gif} alt={alt} loading="lazy" />
        </LazyLoad>
        <div className={styles.gif_overlay}>
          <div className={styles.content}>
            <span>{projectName}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

ProjectCard.propTypes = {
  gif: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
