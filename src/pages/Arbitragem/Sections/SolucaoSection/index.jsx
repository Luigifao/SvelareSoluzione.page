import { useEffect } from "react";
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
            <div className={styles.title} data-aos="fade-right">
                <img src={shield} alt="" />
                <h1>A SOLUÇÃO: A CLÁUSULA ARBITRAL</h1>
            </div>
            <div className={styles.description} data-aos="fade-right">
                <p>Ao inserir uma cláusula compromissória nos seus contratos, você passa a resolver eventuais conflitos diretamente pela Câmara Arbitral Svelare, com total eficiência, imparcialidade e sem depender da Justiça comum.
                </p>
                <br />
                <p>E o melhor: essa inclusão é totalmente gratuita. Você só arca com os custos se houver um conflito — e, mesmo assim, de forma muito mais rápida e acessível do que na via judicial.
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles.contentItem} data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="0.6">
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
                                        <p className={styles.h1}>Mais profissionalismo e confiança

                                        </p>

                                    </div>
                                    <p className={styles.p}>Empresas que adotam a arbitragem transmitem credibilidade e seriedade aos seus clientes, parceiros e investidores. Isso valoriza sua marca e facilita negociações estratégicas.

                                    </p>
                                    <div>
                                    </div></div></div>
                        </li>
                        <li>
                            <div className={styles.card}>
                                <div className={styles.img}><img src={sucesso} alt="" /></div>
                                <div className={styles.textBox}>
                                    <div className={styles.textContent}>
                                        <p className={styles.h1}>Rapidez que protege seu caixa

                                        </p>

                                    </div>
                                    <p className={styles.p}>A arbitragem resolve o conflito, em média, em até 120 dias. É tempo suficiente para você seguir com o seu negócio sem comprometer faturamento ou crescimento.


                                    </p>
                                    <div>
                                    </div></div></div>
                        </li>
                        <li>
                            <div className={styles.card}>
                                <div className={styles.img}><img src={sucesso} alt="" /></div>
                                <div className={styles.textBox}>
                                    <div className={styles.textContent}>
                                        <p className={styles.h1}>Decisões feitas por especialistas

                                        </p>

                                    </div>
                                    <p className={styles.p}>Os árbitros são profissionais escolhidos conforme o setor de atuação das partes. Nada de decisões genéricas: aqui, quem julga entende sua realidade.


                                    </p>
                                    <div>
                                    </div></div></div>
                        </li>
                        <li>
                            <div className={styles.card}>
                                <div className={styles.img}><img src={sucesso} alt="" /></div>
                                <div className={styles.textBox}>
                                    <div className={styles.textContent}>
                                        <p className={styles.h1}>Sigilo absoluto
                                        </p>

                                    </div>
                                    <p className={styles.p}>Enquanto ações judiciais expõem contratos e estratégias na internet, a arbitragem é privada. Proteja sua reputação e evite desgaste.


                                    </p>
                                    <div>
                                    </div></div></div>
                        </li>
                        <li>
                            <div className={styles.card}>
                                <div className={styles.img}><img src={sucesso} alt="" /></div>
                                <div className={styles.textBox}>
                                    <div className={styles.textContent}>
                                        <p className={styles.h1}>Sentença com força judicial

                                        </p>

                                    </div>
                                    <p className={styles.p}>A sentença arbitral tem o mesmo peso legal de uma sentença do juiz. Mas sem os entraves da justiça comum e com mais segurança para execução.

                                    </p>
                                    <div>
                                    </div></div></div>
                        </li>
                        <li>
                            <div className={styles.card}>
                                <div className={styles.img}><img src={sucesso} alt="" /></div>
                                <div className={styles.textBox}>
                                    <div className={styles.textContent}>
                                        <p className={styles.h1}>Vantagem competitiva

                                        </p>

                                    </div>
                                    <p className={styles.p}>Negócios que adotam cláusula arbitral se tornam mais atrativos, mais preparados e mais respeitados. Você se posiciona à frente da concorrência.

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