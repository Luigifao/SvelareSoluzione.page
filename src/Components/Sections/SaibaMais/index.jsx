import React, { useState, useEffect } from "react";
import styles from './SaibaMais.module.css';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import saibaMaisIcon from '/src/assets/img/saibaMaisIcon.png';
import iconCard from '/src/assets/img/iconCard.png';
function SaibaMais() {

    // Inicializa o AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);

    return (

        <section className={styles.saibaMais} id="saiba">
            <div className={styles.info}data-aos="fade-right">
                <div className={styles.subInfo}data-aos="fade-right">
                    <img src={saibaMaisIcon} alt="" />
                    <h1>SAIBA MAIS</h1>
                </div>
                <div className={styles.line}></div>

                <h2>A importância de contratar um especialista</h2>
                <div className={styles.line1}></div>
                <p>Contratar um árbitro especialista lhe oferece uma série de vantagens em relação a um profissional generalista. A especialização permite um conhecimento mais aprofundado das leis, jurisprudências e práticas específicas da área em questão. Isso resulta em uma representação mais eficaz, uma compreensão mais aguçada das nuances legais e uma capacidade superior de antecipar e resolver problemas específicos</p>

            </div>
            <div className={styles.cardTable}>
                <ul>
                    <li>
                        <div className={styles.card} data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            <img src={iconCard} alt="iconCard" />
                            <p>Expertise</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.card} data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            <img src={iconCard} alt="iconCard" />
                            <p>Eficiência</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.card} data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            <img src={iconCard} alt="iconCard" />
                            <p>Resultados</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )


}

export default SaibaMais;