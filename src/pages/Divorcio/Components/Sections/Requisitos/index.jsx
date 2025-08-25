import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './Requisitos.module.css';

function Requisitos() {

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
                    <h1>REQUISITOS PARA O DIVÓRCIO</h1>
                </div>
                <div className={styles.containerCard}>
                <div className={styles.card1}>
                    <h1>1</h1>
                    <p>Consenso das partes: ambos os cônjuges devem estar de acordo com o divórcio e, se houver bens, sobre sua partilha;</p>
                </div>
                <div className={styles.card2}>
                    <h1>2</h1>
                    <p>Capacidade civil: as partes devem ser plenamente capazes;</p>
                </div>
                <div className={styles.card3}>
                    <h1>3</h1>
                    <p>Ausência de filhos menores ou incapazes (salvo se já houver acordo judicial válido quanto à guarda, visitas e alimentos);</p>
                </div>
                <div className={styles.card4}>
                    <h1>4</h1>
                    <p>Compromisso arbitral assinado: formalizando a escolha pela via arbitral;</p>
                </div>
                <div className={styles.card5}>
                    <h1>5</h1>
                    <p>Documentação necessaria:</p>
                    <ul>
                        <li>Documentos pessoais (RG, CPF, comprovante de residência);</li>
                        <li>Certidão de casamento atualizada;</li>
                        <li>Comprovante de Residência;</li>
                        <li>Documentação dos bens partilháveis;</li>
                        <li>Comprovantes de regularidade fiscal, quando necessário.</li>
                    </ul>
                </div>
                 </div>

            </div>


        </section>



    );
}

export default Requisitos;