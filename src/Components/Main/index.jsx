import { useEffect } from "react";
import styles from './Main.module.css';
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";


function Main() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);



    return (
        <main
            className={styles.mainPage}>
            <div className={styles.container}>
                <div className={`${styles.logoMain} animate__animated`} >
                    <img src="./src/assets/img/logomarca.png" alt="logomarca" />
                </div>

                <div className={styles.text}>
                    <p className="animate__animated">A Justiça do futuro</p>
                    <h1 className="animate__animated">Resolução de leeds de forma rápida</h1>
                    <button className="animate__animated">QUERO ENTRAR EM CONTATO</button>
                </div>
            </div>

            <div className={styles.carrousel}>
                <div className={styles.carrouselWrapper}>
                    <div className={styles.carrouselItem}>
                        <h1>+60</h1>
                        <h2>Número de clientes</h2>
                    </div>
                    <div className={styles.carrouselItem}>
                        <h1>+800</h1>
                        <h2>Processos na plataforma</h2>
                    </div>
                    <div className={styles.carrouselItem}>
                        <h1>+500</h1>
                        <h2>Processos finalizados</h2>
                    </div>
                    <div className={styles.carrouselItem}>
                        <h1>+26</h1>
                        <h2>Seções de mediação</h2>
                    </div>
                    <div className={styles.carrouselItem}>
                        <h1>+800</h1>
                        <h2>Clientes</h2>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
