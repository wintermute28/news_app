import styles from "./styles.module.css";
import LatestNews from '../../copmonents/LatestNews/LatestNews'
import NewsByFilters from "../../copmonents/NewsByFilters/NewsByFilters";

const Main = () => {



  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default Main;