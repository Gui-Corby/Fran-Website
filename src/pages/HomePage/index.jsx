import { Header } from "../../components/Header";
import { gifs } from "../../assets/utils/loadGifs";
import { gifsData } from "../../data/gifsData";
import { ProjectCard } from "../../components/ProjectCard";
import moviesData from "../../assets/moviesData.json";
import styles from "./styles.module.scss";

export const HomePage = () => {
  const homePageGifs = gifsData.homePage
    .map((gifName) => gifs.find((g) => g.alt === gifName.replace(".gif", "")))
    .filter((gif) => gif !== undefined);

  return (
    <main>
      <Header />

      <section className={styles.gifs_section}>
        <div className={styles.gifs_container}>
          <ul className={styles.gifs_list}>
            {homePageGifs.map((gif, index) => (
             
              <ProjectCard
                key={index}
                gif={gif.src}
                alt={gif.alt}
                movie={moviesData.movies[index]}
              />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
