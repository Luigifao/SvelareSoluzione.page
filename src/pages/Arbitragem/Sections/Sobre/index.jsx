import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './Sobre.module.css';
import checkIcon from '/src/assets/img/check.png';
import SobreImage from '/src/assets/img/SobreSection.png';




function SobreSection() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);

    return (
        <section className={styles.container}>
              <div className={styles.title}>
                    <h1>Sobre a Svelare</h1>
                </div>
            <div className={styles.content}>
              
                <div className={styles.description}>
                    <p>A Câmara Arbitral Svelare LTDA nasceu com o compromisso de tornar a arbitragem acessível, moderna e eficaz para todos os empresários brasileiros, independentemente do porte.
                    </p>
                    <br />
                    <p>Com sede em Belo Horizonte, mas atuação 100% digital, a Svelare atua com imparcialidade, ética e foco em resultados — sempre com profissionais experientes, prazos curtos e processos confidenciais.
                    </p>
                    <br />
                    <p>Na Svelare, você tem:</p>
                    <ul>
                        <li><img src={checkIcon} alt="" />Atendimento personalizado e humanizado;</li>
                        <li><img src={checkIcon} alt="" />Plataforma online e transparente;</li>
                        <li><img src={checkIcon} alt="" />Árbitros especializados no seu setor;</li>
                        <li><img src={checkIcon} alt="" />Sentença proferida com rapidez e segurança.</li>
                        <li><img src={checkIcon} alt="" />Custo acessível, proporcional ao valor da causa;</li>
                    </ul>
                </div>
                <div className={styles.content2}>
                    <img src={SobreImage} alt="" />
                </div>


            </div>




        </section>



    );
}
export default SobreSection;