import React, { useState, useEffect } from "react";
import styles from './Sobre.module.css';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import iconAboutUs from '/src/assets/img/iconAboutUs.png';

function Sobre() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);


    return (
        <section className={styles.sobre} id="sobre">
            <div className={styles.card} data-aos="fade-right">
                <div className={styles.infoCard} data-aos="fade-right">
                    <img src={iconAboutUs} alt="cardIcon" />
                    <h1>SOBRE O ESCRITÓRIO</h1>
                </div>
                <div className={styles.subInfo} data-aos="fade-right">
                    <h2>Somos a maior plataforma de arbitragem 100% digital do Brasil</h2>
                    <div className={styles.line}></div>
                    <h3 className={styles.destaque}>Diretor e fundador: Henrique de Oliveira e Silva</h3>
                    <p>Sou empresário com atuação voltada à Arbitragem e à mediação de controvérsias, com ampla experiência em negociações e na resolução extrajudicial de litígios. Acredito que a maioria dos conflitos contemporâneos pode ser solucionada de forma célere, eficaz e menos onerosa, sem a necessidade de recorrer ao moroso e burocrático sistema judicial.</p>
                    
                    <p>Foi com essa convicção que fundei a Svelare, uma câmara arbitral comprometida com a democratização do acesso à Justiça e com a promoção de soluções práticas, sigilosas e descomplicadas para empresas e particulares. Nossa missão é oferecer um ambiente seguro, imparcial e acessível para que as partes envolvidas encontrem, com autonomia e responsabilidade, a melhor solução para seus impasses.</p>

                    <h1>Por que optar pela Arbitragem em vez do Judiciário</h1>

                    <p>Em um cenário marcado pela morosidade e pela complexidade do sistema judicial, a arbitragem surge como uma alternativa moderna, eficaz e estratégica para a resolução de conflitos. Ao escolher a arbitragem, as partes optam por um procedimento mais célere, sigiloso e flexível, conduzido por especialistas na matéria em disputa.</p>

                    <p>Diferente do Judiciário, onde os processos costumam se arrastar por anos e ficam sujeitos à publicidade e à rigidez processual, a arbitragem oferece soluções personalizadas, com prazos reduzidos e total confidencialidade. Além disso, as decisões arbitrais têm força de sentença judicial, sendo definitivas e vinculantes.</p>

                    <p>Optar pela arbitragem é escolher um caminho mais inteligente, eficiente e alinhado com as necessidades do mundo empresarial e das relações modernas. É priorizar resultados concretos com menos burocracia, mais controle e muito mais agilidade.</p>

                </div>

            </div>


        </section>


    )



}

export default Sobre