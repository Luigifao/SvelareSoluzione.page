import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './Mercado.module.css';


function MercadoSection() {

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
                    <h1> O MERCADO NÃO ESPERA: EMPRESAS PREPARADAS SAEM NA FRENTE
                    </h1>
                </div>

                <p>No mundo dos negócios, quem se antecipa vence.
                    Empresas que utilizam a arbitragem conseguem:
                </p>
                <br />
                <ul className={styles.list}>
                    <li>Reduzir riscos contratuais;</li>
                    <li>Tomar decisões com mais tranquilidade;</li>
                    <li>Aumentar sua credibilidade no mercado;</li>
                    <li>Fechar parcerias com mais segurança.</li>
                </ul>
            </div>



        </section>



    );


}

export default MercadoSection;
