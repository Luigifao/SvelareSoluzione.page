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


    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Clausula-Arbitral-Svelare.pdf';
        link.download = 'Clausula-Arbitral-Svelare.pdf'; // Nome do arquivo baixado
        link.click();
    };

      const handleDownload1 = () => {
        const link = document.createElement('a');
        link.href = '/Compromisso-Arbitral-Svelare.pdf';
        link.download = 'Compromisso-Arbitral-Svelare.pdf'; // Nome do arquivo baixado
        link.click();
    };

    return (
        <section className={styles.parceiros} id="parceiros" >
            <div className={styles.card} data-aos="fade-right">
                <div className={styles.imgParceiros}>
                    <img src={iconParceiros} alt="IconParceiros" />
                    <h1>AREA DE DOWNLOADS</h1>
                </div>
                <div className={styles.subtitle}>
                    <h2>Download dos Termos </h2>
                </div>
                <div className={styles.line}></div>
            </div>


            <div className={styles.downloads}>

            <ul>
            <li><button className={styles.downloadButton} onClick={handleDownload}>
                <div className={styles.docs}>
                    <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Termo Clausula Arbitral
                </div>
                <div className={styles.download}>
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                </div>
            </button></li>

            <li><button className={styles.downloadButton} onClick={handleDownload1}>
                <div className={styles.docs}>
                    <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Termo Compromisso Arbitral
                </div>
                <div className={styles.download}>
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                </div>
            </button>
            </li>
            </ul>


        </div>




        </section>
    )

}

export default Parceiros;