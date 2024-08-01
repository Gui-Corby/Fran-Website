import moviesData from "../../assets/moviesData.json";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import poster from "../../assets/photos/cib_poster.jpg";





export const MoviePage = () => {
  //   const params = useParams();
  const { id } = useParams();
  //   console.log("Params from URL:", params);
  //   console.log("Movie ID from URL:", id);
  //   console.log("Movies Data:", moviesData);

  const movie = moviesData.movies.find((m) => m.id === id);
  // console.log("Found Movie:", movie);

  const isOdd = movie.photos.length % 2 !== 0;

  if (!movie.movieUrl) {
    return (
      <>
        <Header />
        <div className={styles.unpublished_container}>
          <h1>Coming soon</h1>
          <img src={poster} alt="" />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <section className={styles.movie_section}>
        <h1>{movie.title}</h1>
        <div
          className={styles.movie_container}
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
        >
          <iframe
            src={movie.movieUrl}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title={movie.title}
          ></iframe>
        </div>
      </section>

      {movie.photos && movie.photos.length > 0 && (
        <section className={styles.movie_photos_section} >
          {/* <h1>Behind the scenes</h1> */}
          <div className={styles.photos_container}>
            {movie.photos.map((photo, index) => (
              <img key={index} src={photo} alt=""
              className={isOdd && index === movie.photos.length - 1 ? styles.last_image_odd : ''} />
            ))}
          </div>
        </section>
      )}

      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
};
