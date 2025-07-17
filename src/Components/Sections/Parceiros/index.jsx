import React, { useState, useEffect } from "react";
import styles from './Parceiros.module.css';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import iconParceiros from '/src/assets/img/parceirosIcon.png';

function Parceiros() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);

    return (
        <section className={styles.parceiros} id="parceiros" >
            <div className={styles.card} data-aos="fade-right">
                <div className={styles.imgParceiros}>
                    <img src={iconParceiros} alt="IconParceiros" />
                    <h1>PARCEIROS</h1>
                </div>
                <div className={styles.subtitle}>
                    <h2>Conheça nossos parceiros</h2>
                </div>
                <div className={styles.line}></div>
            </div>


        </section>
    )

}

export default Parceiros;