import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './SetencaArbitral2.module.css';

function SetencaArbitral2() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);


    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>SENTENÇA ARBITRAL</h1>
                </div>
                <div className={styles.subtitle}>
                    <h2>A setença arbitral que homologa o divórcio possui força de decisão judicial e é plenamente eficaz para:</h2>
                </div>
                <div className={styles.cards}>
                <div className={styles.card1}>
                    <p>Averbação da dissolução do casamento junto ao Cartório de Registro Civil;</p>
                </div>
                <div className={styles.card2}>
                    <p>Regularização da partilha de bens em cartórios e órgãos competentes;</p>
                </div>
                <div className={styles.card3}>
                    <p>Trânsferencia de veículos, ímoveis, valores e direitos patrimoniais</p>
                </div>
                </div>
            </div>


        </section>


    );

}

export default SetencaArbitral2;

