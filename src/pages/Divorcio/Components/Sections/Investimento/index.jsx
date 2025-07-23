import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './Investimento.module.css';
import balanca from '@/assets/img/balanca.png';

function Investimento() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);

    return (
        <section className={styles.container}>

            <div className={styles.box}>
                <div className={styles.image}>
                    <img src={balanca} alt="" />
                </div>

            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>INVESTIMENTO</h1>
                </div>
                <div className={styles.description}>
                    <p>A SVELARE LTDA adota uma pólitica de custos transparente e acessível. Os honorários correspondem a <span>R$ 3.000,00 (três mil reais)</span>em casos sem partilha de bens, ou 6% (seis por cento) sobre o valor total dos bens a serem partilhados.</p>
                </div>
                <div className={styles.description2}>
                    <p>Esse valor engloba:</p>
                    <ul>
                        <li>Condução completa do procedimento arbitral;</li>
                        <li>Elaboração da sentença arbitral com força de decisão judicial;</li>
                        <li>Realização de audiências virtuais ou presenciais, conforme o caso;</li>
                        <li>Suporte documental e orientação júridica básica</li>
                    </ul>

                </div>
            </div>
        </section>
    );
}

export default Investimento;
