import styles from "./Home.module.css";
import savings from "../../img/Savings.png";

import LinkButton from "../layouts/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Estimate</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar projeto" />
      <img src={savings} alt="Savings" />
    </section>
  );
}

export default Home;
