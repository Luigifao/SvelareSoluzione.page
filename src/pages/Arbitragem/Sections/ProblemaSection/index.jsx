import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./ProblemaSection.module.css";
import warning from '/src/assets/img/warning.png'

function ProblemaSection() {

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
                <div className={styles.text}>
                <p>Essa é a realidade da arbitragem — e empresas inteligentes já estão se beneficiando dela para crescer com segurança e destaque no mercado.
                </p>
                </div>
                <div className={styles.title}>
                    <img src={warning} alt="" />
                    <h1>O PROBLEMA QUE VOCE DEVE EVITAR</h1>
                </div>
                <div className={styles.description}>
                    <p>Todo empresário sabe: assinar um contrato é facil. <br /> Dificil é resolver um conflito quando ele aparece.</p>
                    <br />
                    <p>Mais difícil ainda é depender do Judiciário, que sofre com:</p>
                    <br />
                    <ul>
                        <li><p>Morosidade Cronica (média de 5 a 8 anos para resolver ações simples);</p></li>
                        <li><p>Exposição pública de documentos estratégicos</p></li>
                        <li><p>Insegurança juridica e decisões imprevisíveis;</p></li>
                        <li><p>Custos ocultos com peritos, audiências, recursos e sucumbência;</p></li>
                        <li><p>Danos à reputação e às relações comerciais</p></li>
                    </ul>
                    <br />
                    <p>Você não pode permitir que um impasse destrua sua credibilidade ou paralise seu faturamento</p>

                </div>
            </div>

        </section>

    )

}

export default ProblemaSection;