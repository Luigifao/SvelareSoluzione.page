import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './Setenca.module.css';
import fundo from '@/assets/img/setencaFundo.png';
import imgDireito from '@/assets/img/direito.png';

function SetencaArbitral() {

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
                <div className={styles.title}>
                    <h1>ART. 515</h1>
                    <h2>TÍTULOS EXECUTIVOS JUDICIAIS</h2>
                </div>
                <div className={styles.subtitle}>
                    <h2>VII - A SETENÇA ARBITRAL.</h2>
                </div>
                <div className={styles.description}>
                    <div className={styles.content1}>
                        <p>A validade da setença arbitral é reconhecida pelo Código de processo Civil, conforme o art. 515, VII.</p>
                    </div>
                    <div className={styles.content2}>
                        <p>Assim, a setença arbitral possui força de  decisão judicial, podendo ser ultilizada diretamente para registros, transferências e cumprimento forçado de obrigações. Sua execução segue as mesmas regras de uma setença proferida por um juiz togado.</p>
                    </div>
                </div>

            </div>
            <div className={styles.image}>
                <img src={fundo} alt="" />
            </div>
            <div className={styles.image2}>   
                <img src={imgDireito} alt="" />
            </div>





        </section>


    );

}

export default SetencaArbitral;