import React, { useState, useEffect } from "react";
import styles from './Atuacao.module.css';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import atuacaoIcon from '/src/assets/img/atuacaoicon.png';
import setaIcon from '/src/assets/img/setaIcon.png';
import whatsappIcon from '/src/assets/img/iconWhatsapp.png';


function Atuacao() {
    

    const [isLarge, setIsLarge] = useState(false);
    const [isLarge1, setIsLarge1] = useState(false);
    const [isLarge2, setIsLarge2] = useState(false);
    const [isRotated, setIsRotaded] = useState(false);
    const [isRotated1, setIsRotaded1] = useState(false);
    const [isRotated2, setIsRotaded2] = useState(false);

    //função para aumentar o card
    const toggleCardSize = () => {
        setIsLarge(!isLarge);
        

    }
    const toggleCardSize1 = () => {
        setIsLarge1(!isLarge1);

    }
    const toggleCardSize2 = () => {
        setIsLarge2(!isLarge2);
        setIsRotaded2(!isRotated2);

    }

    //funçao para girar a seta
    const handleClick = () => {
        setIsRotaded(!isRotated);
    }
    const handleClick1 = () => {
        setIsRotaded1(!isRotated1);
    }

    const handleWhatsAppClick = () => {
        // Redirecionar para WhatsApp
        const phoneNumber = "+55319605-1534"; // Substitua pelo número real
        const message = "Olá! Gostaria de falar com um especialista da Svelare sobre os serviços de atuação (Extrajudicial, Arbitragem e Mediação).";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
 
 // Inicializa o AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);

    return (

        <section className={styles.atuacao} data-aos="fade-up" id="atuacao">
            <div className={styles.imgatuacao}>
                <img src={atuacaoIcon} alt="atuacaoimg" />
                <h1>ATUAÇÃO</h1>
            </div>
            <p>Veja como poderei te ajudar</p>
            <div className={styles.line}>
            </div>
            <div className={`${styles.card} ${isLarge ? styles.largeCard : ''}`}>
                <div className={styles.imgCard}>
                    <img src={setaIcon} alt="setaIcon" />
                </div>
                <div className={styles.imgCard2}>
                    <img src={setaIcon} alt="setaIcon" />
                </div>
                <div className={styles.infoCard}>
                    <h1>EXTRAJUDICIAL</h1>
                    <div className={`${styles.textCard} ${isLarge ? styles.contentOn : ''}`}>
                        <p>• Definição: Processos e acordos realizados fora do âmbito judicial, sem a necessidade de intervenção do poder judiciário. <br /> <br />• Exemplos de Aplicação: Divórcios amigáveis, inventários, reconhecimento de paternidade, entre outros procedimentos onde as partes estão em consenso. <br /> <br /> • Vantagens: Menor custo, maior rapidez, confidencialidade e menor formalidade.</p>
                    </div>
                </div>
                <button onClick={toggleCardSize} className={styles.btn}>
                    saiba mais <img src="./src/assets/img/setaIcon.png" alt="" />
                </button>
            </div>

            {/* card 2 */}
            <div className={`${styles.card} ${isLarge1 ? styles.largeCard1 : ''}`}>
                <div className={styles.imgCard}>
                    <img src={setaIcon} alt="setaIcon" />
                </div>
                <div className={styles.imgCard2}>
                    <img src={setaIcon} alt="setaIcon" />
                </div>
                <div className={styles.infoCard}>
                    <h1>ARBRITAGEM</h1>
                    <div className={`${styles.textCard} ${isLarge1 ? styles.contentOn1 : ''}`}>
                        <p>• Definição: Método de resolução de conflitos em que as partes escolhem um ou mais árbitros, que atuam como juízes privados para decidir a questão. <br /> <br />• Exemplos de Aplicação: Disputas comerciais, contratos complexos, questões societárias. <br /> <br /> Vantagens: Decisões finais e vinculantes, especialização dos árbitros no assunto em disputa, confidencialidade.</p>
                    </div>
                </div>
                <button onClick={toggleCardSize1} className={styles.btn}>
                    saiba mais <img src={setaIcon} alt="" />
                </button>
            </div>

            {/* card 3 */}
            <div className={`${styles.card} ${isLarge2 ? styles.largeCard2 : ''}`}>
                <div className={styles.imgCard}>
                    <img src={setaIcon} alt="setaIcon" />
                </div>
                <div className={styles.imgCard2}>
                    <img src={setaIcon} alt="setaIcon" />
                </div>
                <div className={styles.infoCard}>
                    <h1>MEDIAÇÃO</h1>
                    <div className={`${styles.textCard} ${isLarge2 ? styles.contentOn2 : ''}`}>
                        <p>• Definição: Processo voluntário onde um mediador imparcial ajuda as partes a chegarem a um acordo mútuo, sem impor uma decisão.• Exemplos de Aplicação: Conflitos familiares, disputas de vizinhança, questões trabalhistas. <br /> <br />• Vantagens: Promove o diálogo e a cooperação, solução amigável e duradoura, rapidez e baixo.
                        </p>
                    </div>
                </div>
                <button onClick={toggleCardSize2} className={styles.btn}>
                    saiba mais <img src={setaIcon} alt=""  className={`${styles.arrow} ${isRotated2 ? styles.rotated : ""}`}/>
                </button>
            </div>
            <button className={styles.btn2} onClick={handleWhatsAppClick}><img src={whatsappIcon} alt="zapIcon" />FALAR COM UM ESPECIALISTA</button>
        </section>


    )


}

export default Atuacao