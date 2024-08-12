import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// import { gifsData } from "../../data/gifsData";

import { createClient } from "contentful";



export const ProjectCard = ({ gif, alt, movie, index }) => {

  const gifsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    gifsRef.current.forEach((img) => {
      observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  // const [gifs, setGifs] = useState([])

  const client = createClient({ space:"aiq65mdd4z0n",
  accessToken: "Z2lHQjf_FrbnJ1hGncG_zVSXV3W__vjORPAWGv94T8Q"})

  // useEffect(() => {
  //   const getAllEntries = async () => {
  //     try {
  //       await client.getEntries().then((entries) => {
  //         console.log(entries);
  //         setGifs(entries)
  //       })
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getAllEntries()
  // }, [])


  const projectName = alt
    .replace(/_/gi, " ")
    .replace(/^\w/, (c) => c.toUpperCase());

  return (
    // {gifs}
    <li className={styles.project_card}>
      <Link to={`/movies/${movie.id}`}>
        <div className={styles.image_container}>
          {/* <LazyLoad height={200} offset={100} once> */}
            <img src={gif} alt={alt} loading="eager"
            key={index}
            data-src={gif}
            ref={(el) => (gifsRef.current[index] = el)}
             />
          {/* </LazyLoad> */}
          <div className={styles.gif_overlay}>
            <div className={styles.content}>
              <span>{projectName}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

ProjectCard.propTypes = {
  gif: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
