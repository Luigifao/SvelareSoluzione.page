import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './Solucao.module.css';
import shield from '/src/assets/img/escudo.png';
import sucesso from '/src/assets/img/sucesso.png';

function SolucaoSection() {

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
                <img src={shield} alt="" />
                <h1>A SOLUÇÃO: A CLÁUSULA ARBITRAL</h1>
            </div>
            <div className={styles.description}>
                <p>Ao inserir uma cláusula compromissória nos seus contratos, você passa a resolver eventuais conflitos diretamente pela Câmara Arbitral Svelare, com total eficiência, imparcialidade e sem depender da Justiça comum.
                </p>
                <br />
                <p>E o melhor: essa inclusão é totalmente gratuita. Você só arca com os custos se houver um conflito — e, mesmo assim, de forma muito mais rápida e acessível do que na via judicial.
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles.contentItem}>
                    <div className={styles.title2}>
                        <h2>7 MOTIVOS PARA ADOTAR A CLÁUSULA ARBITRAL HOJE</h2>
                    </div>
                    <ul className={styles.list}>
                        <li>
                            <div className={styles.card}>
                                <div className={styles.img}><img src={sucesso} alt="" /></div>
                                <div className={styles.textBox}>
                                    <div className={styles.textContent}>
                                        <p className={styles.h1}>Sem custo para incluir
                                        </p>

                                    </div>
                                    <p className={styles.p}>A cláusula pode ser inserida em qualquer contrato sem gerar custo algum. Você previne o problema sem pagar nada por isso.
                                    </p>
                                    <div>
                                    </div></div></div>
                        </li>
                        <li>
                            <div className={styles.card}>
                                <div className={styles.img}><img src={sucesso} alt="" /></div>
                                <div className={styles.textBox}>
                                    <div className={styles.textContent}>
                                        <p className={styles.h1}>Sem custo para incluir
                                        </p>

                                    </div>
                                    <p className={styles.p}>A cláusula pode ser inserida em qualquer contrato sem gerar custo algum. Você previne o problema sem pagar nada por isso.
                                    </p>
                                    <div>
                                    </div></div></div>
                        </li>
                        <li>
                            <div className={styles.card}>
                                <div className={styles.img}><img src={sucesso} alt="" /></div>
                                <div className={styles.textBox}>
                                    <div className={styles.textContent}>
                                        <p className={styles.h1}>Sem custo para incluir
                                        </p>

                                    </div>
                                    <p className={styles.p}>A cláusula pode ser inserida em qualquer contrato sem gerar custo algum. Você previne o problema sem pagar nada por isso.
                                    </p>
                                    <div>
                                    </div></div></div>
                        </li>
                        <li>
                            <div className={styles.card}>
                                <div className={styles.img}><img src={sucesso} alt="" /></div>
                                <div className={styles.textBox}>
                                    <div className={styles.textContent}>
                                        <p className={styles.h1}>Sem custo para incluir
                                        </p>

                                    </div>
                                    <p className={styles.p}>A cláusula pode ser inserida em qualquer contrato sem gerar custo algum. Você previne o problema sem pagar nada por isso.
                                    </p>
                                    <div>
                                    </div></div></div>
                        </li>
                        <li>
                            <div className={styles.card}>
                                <div className={styles.img}><img src={sucesso} alt="" /></div>
                                <div className={styles.textBox}>
                                    <div className={styles.textContent}>
                                        <p className={styles.h1}>Sem custo para incluir
                                        </p>

                                    </div>
                                    <p className={styles.p}>A cláusula pode ser inserida em qualquer contrato sem gerar custo algum. Você previne o problema sem pagar nada por isso.
                                    </p>
                                    <div>
                                    </div></div></div>
                        </li>
                        <li>
                            <div className={styles.card}>
                                <div className={styles.img}><img src={sucesso} alt="" /></div>
                                <div className={styles.textBox}>
                                    <div className={styles.textContent}>
                                        <p className={styles.h1}>Sem custo para incluir
                                        </p>

                                    </div>
                                    <p className={styles.p}>A cláusula pode ser inserida em qualquer contrato sem gerar custo algum. Você previne o problema sem pagar nada por isso.
                                    </p>
                                    <div>
                                    </div></div></div>
                        </li>
                        <li>
                            <div className={styles.card}>
                                <div className={styles.img}><img src={sucesso} alt="" /></div>
                                <div className={styles.textBox}>
                                    <div className={styles.textContent}>
                                        <p className={styles.h1}>Sem custo para incluir
                                        </p>

                                    </div>
                                    <p className={styles.p}>A cláusula pode ser inserida em qualquer contrato sem gerar custo algum. Você previne o problema sem pagar nada por isso.
                                    </p>
                                    <div>
                                    </div></div></div>
                        </li>
                    </ul>
                </div>

            </div>


        </section>
    );

}
export default SolucaoSection;