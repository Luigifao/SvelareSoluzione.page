import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './Solucao.module.css';
import shield from '/src/assets/img/escudo.png';

function SolucaoSection() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <img src={shield} alt="" />
                <h1>A SOLUÇÃO: A CLÁUSULA ARBITRAL</h1>
            </div>
            <div className={styles.description}>
                <p>Ao inserir u</p>
            </div>

        </section>
    );

}
export default SolucaoSection;