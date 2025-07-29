import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './About.module.css';
import logo from '@/assets/img/logomarcaatt.png';
import minilogo from '@/assets/img/logo.png';

function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={minilogo} alt="" />
            </div>
            <div className={styles.imageContainer}>
                <img src={logo} alt="" />

            </div>
            <div className={styles.content}>
                <h1>O QUE É?</h1>
                <p>o divórcio extrajudicial por arbitragem é uma alternativa moderna, segura e plenamente legal para a dissolução de vìnculos matrimoniais. O procedimento é realizado fora do Poder Judiciário, com base na autonomia das partes e amparo legal reconhecido no ordenamento jurídico brasileiro.</p>
            </div>

            <div className={styles.content2}>
                <p><span className={styles.hypertext}>Na Câmara Arbitral SVELARE LTDA</span>, o divórcio é conduzido com total sigilo, agilidade e economia, promovendo às partes uma experiência desburocratizada, respeitosa e juridicamente eficaz. Ao optar pela arbitragem, evita-se a morosidade judicial e as formalidades cartorárias, sem abrir mão da validade plena da decisão.</p>
            </div>

            
        </section>
    );
}

export default About;


