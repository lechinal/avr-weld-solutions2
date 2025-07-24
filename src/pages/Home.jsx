import Hero from "../components/sections/Hero.jsx";
import ServicesOverview from "../components/sections/ServicesOverview.jsx";
import Statistics from "../components/sections/Statistics.jsx";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <ServicesOverview />
      <Statistics />
    </div>
  );
}