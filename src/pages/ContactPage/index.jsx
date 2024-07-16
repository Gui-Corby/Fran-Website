import { Header } from "../../components/Header";
import styles from "./styles.module.scss";

export const ContactPage = () => {
  return (
    <>
      <main>
        <section className={styles.contact_page_container}>
          <Header />

          <div className={styles.contact_middle}>
            <div className={styles.middle_left}>
              <p>Commercials + Music videos</p>
              <p>Francis Ceschin</p>
              <p>example@email.com</p>
            </div>

            <div className={styles.middle_right}>
              <p>Film & Television</p>
              <p>"Diff Person"</p>
            </div>
          </div>
        </section>
      </main>

      <section className={styles.footer_container}>
        <footer>
          <span>Personal</span>
          <p>francorbyceschin@gmail.com</p>
        </footer>
      </section>
    </>
  );
};
