import { Header } from "../../components/Header";
import { Brazil } from "../../components/Still/Brazil";
import { Friends } from "../../components/Still/Friends";
import { Kids } from "../../components/Still/Kids";
import { LincolnCenter } from "../../components/Still/LincolnCenter";
import { NYC } from "../../components/Still/NYC";
import { NYFashionWeek } from "../../components/Still/NYFashionWeek";


export const Other = () => {
  return (
    <>
      <Header />
      <section className="other_section">
        <LincolnCenter />
        <NYFashionWeek />
        <Brazil />
        <Friends />
        <Kids />
        <NYC />
      </section>
    </>
  );
};
