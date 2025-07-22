import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './LeiArbitragem.module.css';
import arrow from '@/assets/img/right-arrow.png';

function LeiArbitragem() {

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
                <div className={styles.infoContent}>
                    <h1>LEI N° 9.307/1996</h1>
                    <h2>LEI DE ARBITRAGEM</h2>
                </div>
                <div className={styles.infoContent1}>
                    <p>Autoriza a resolução de conflitos relativos a direitos patrimoniais disponiveis por meio de árbitros escolhidos pelas partes.</p>
                </div>
            </div>

            <div className={styles.content1}>
                <div className={styles.card}><p>BENS</p></div>
                <img src={arrow} alt="" />
                <div className={styles.card1}><p>ARBITRAGEM</p></div>
                <img src={arrow} alt="" />
                <div className={styles.card2}><p>DIVÓRCIO</p></div>
            </div>

            <div className={styles.content2}>
                <div className={styles.infocontent2}>
                    <p>Embora a dissolução do vínculo conjulgal(estado civil em si) ainda dependa de averbação no Cartório de Registro Civil, todos os efeitos patrimoniais decorrentes do divórcio concensual podem ser definidos por arbitragem, especialmente a partilha de bens, pagemento de valores, cesaão de direitos e obrigações.</p>

                </div>

            </div>


        </section>


    );

}

export default LeiArbitragem;