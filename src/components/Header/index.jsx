import { DropdownMenu } from "../DropDownMenu";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <section className={styles.header_section}>
      <header>
        <Link to="/">
          <h1>Francis Corby Ceschin</h1>
        </Link>

        <div className={styles.header_right}>
          <DropdownMenu />

          <Link to="/Equipment">
            <button>Equipment</button>
            </Link>

          <Link to="/ContactPage">
            <button>Contact</button>
          </Link>
        </div>
      </header>
    </section>
  );
};
