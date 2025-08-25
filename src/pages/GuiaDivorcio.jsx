import React, { useState, useEffect } from 'react';
import styles from './GuiaInventario.module.css';
import Header from '../Components/Header';
import Footer from '../Components/Sections/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function GuiaDivorcio() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            anchorPlacement: 'top-bottom'
        });
    }, []);

    return (
        <>
            <Header />
            <div className={styles.container}>
                <header
                    className={styles.hero}
                    data-aos="fade-down"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                >
                    <h1
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        SVELARE CÂMARA ARBITRAL
                    </h1>
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="800"
                    >
                        DIVÓRCIO EXTRAJUDICIAL POR ARBITRAGEM
                    </h2>
                </header>

                <section
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                >
                    <h3
                        data-aos="slide-right"
                        data-aos-duration="800"
                        data-aos-delay="1200"
                    >
                        O que é?
                    </h3>
                    <p
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="1400"
                    >
                        o divórcio extrajudicial por arbitragem é uma alternativa moderna, segura e plenamente legal para a dissolução de vínculos matrimoniais. O procedimento é realizado fora do Poder Judiciário, com base na autonomia das partes e amparo legal reconhecido no ordenamento jurídico brasileiro.
                    </p>
                    <p
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="1600"
                    >Na Câmara Arbitral SVELARE LTDA, o divórcio é conduzido com total sigilo, agilidade e economia, promovendo às partes uma experiência desburocratizada, respeitosa e juridicamente eficaz. Ao optar pela arbitragem, evita-se a morosidade judicial e as formalidades cartorárias, sem abrir mão da validade plena da decisão.
                    </p>
                </section>

                <div
                    className={styles.boxes}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="1800"
                >
                    <div
                        className={styles.lawBox}
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="2000"
                    >
                        <h4>LEI N° 9.307/1996</h4>
                        <p>Lei de Arbitragem</p>
                        <p>
                            Autoriza a resolução de conflitos relativos a direitos patrimoniais disponíveis por meio de árbitros escolhidos pelas partes.
                        </p>
                        <p>BENS</p>
                        <p>ARBITRAGEM</p>
                        <p>DIVÓRCIO</p>

                        <p>Embora a dissolução do vínculo conjugal (estado civil em si) ainda dependa de averbação no Cartório de Registro Civil, todos os efeitos patrimoniais decorrentes do divórcio consensual podem ser definidos por arbitragem, especialmente a partilha de bens, pagamento de valores, cessão de direitos e obrigações.</p>
                    </div>
                    <div
                        className={styles.arbBox}
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="2200"
                    >
                        <h4>ART. 515 – TÍTULOS EXECUTIVOS JUDICIAIS</h4>
                        <p>VII – A SENTENÇA ARBITRAL.</p>
                        <p>
                            A validade da sentença arbitral é reconhecida pelo Código de processo Civil, conforme o art. 515, VII.
                        </p>
                        <p>Assim, a sentença arbitral possui força de decisão judicial, podendo ser utilizada diretamente para registros, transferências e cumprimento forçado de obrigações. Sua execução segue as mesmas regras de uma sentença proferida por um juiz togado.</p>
                    </div>
                </div>



                <section
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="2800"
                >
                    <h3
                        data-aos="slide-right"
                        data-aos-duration="800"
                        data-aos-delay="3000"
                    >
                        REQUISITOS PARA O DIVÓRCIO
                    </h3>
                    <ul
                        className={styles.checklist}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="3200"
                    >
                        <li
                            data-aos="slide-up"
                            data-aos-duration="600"
                            data-aos-delay="3400"
                        >
                            <strong>Consenso das partes:</strong> ambos os cônjuges devem estar de acordo com o divórcio e, se houver bens, sobre sua partilha;
                        </li>
                        <li
                            data-aos="slide-up"
                            data-aos-duration="600"
                            data-aos-delay="3600"
                        >
                            <strong>Capacidade civil:</strong> as partes devem ser plenamente capazes;
                        </li>
                        <li
                            data-aos="slide-up"
                            data-aos-duration="600"
                            data-aos-delay="3800"
                        >
                            <strong>Ausência de filhos menores ou incapazes</strong> (salvo se já houver acordo judicial válido quanto à guarda, visitas e alimentos);
                        </li>
                        <li
                            data-aos="slide-up"
                            data-aos-duration="600"
                            data-aos-delay="3800"
                        >
                            <strong>Compromisso arbitral assinado:</strong> formalizando a escolha pela via arbitral;
                        </li>
                        <li
                            data-aos="slide-up"
                            data-aos-duration="600"
                            data-aos-delay="4000"
                        >
                            <strong>Documentação necessária:</strong>
                            <ul>
                                <li>Documentos pessoais (RG, CPF, comprovante de residência);</li>
                                <li>Certidão de casamento atualizada;</li>
                                <li>Comprovante de Residência;</li>
                                <li>Documentação dos bens partilháveis;</li>
                                <li>Comprovantes de regularidade fiscal, quando necessário.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section
                    className={styles.twoCols}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="4200"
                >
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="4400"
                    >
                        <h3>SENTENÇA ARBITRAL</h3>
                        <p><strong>A sentença arbitral que homologa o divórcio possui força de decisão judicial e é plenamente eficaz para:</strong></p>
                        <p>Averbação da dissolução do casamento junto ao Cartório de Registro Civil;</p>
                        <p>Regularização da partilha de bens em cartórios e órgãos competentes;</p>
                        <p>Transferência de veículos, imóveis, valores e direitos patrimoniais</p>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="4600"
                    >
                        <h3>Investimento</h3>
                        <p>
                            A SVELARE LTDA adota uma política de custos transparente e acessível. Os honorários correspondem a <span>R$ 3.000,00 (três mil reais)</span> em casos sem partilha de bens, ou 6% (seis por cento) sobre o valor total dos bens a serem partilhados.
                        </p>
                        <p>Esse valor engloba:</p>
                        <ul>
                            <li>Condução completa do procedimento arbitral;</li>
                            <li>Elaboração da sentença arbitral com força de decisão judicial;</li>
                            <li>Realização de audiências virtuais ou presenciais, conforme o caso;</li>
                            <li>Suporte documental e orientação jurídica básica</li>
                        </ul>
                    </div>
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="4800"
                >
                    <h3
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="5000"
                    >
                        Tabela Comparativa
                    </h3>
                    <div
                        className={styles.tableWrapper}
                        data-aos="fade-in"
                        data-aos-duration="1200"
                        data-aos-delay="5200"
                    >
                         <table className={styles.tabela}>
        <thead>
          <tr>
            <th>Aspecto</th>
            <th>Judicial</th>
            <th>Cartorial</th>
            <th>Arbitragem (SVELARE)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tempo médio</td>
            <td>6 a 24 meses</td>
            <td>1 a 3 meses</td>
            <td className={styles.destaque}>Até 30 dias</td>
          </tr>
          <tr>
            <td>Sigilo do procedimento</td>
            <td>Público</td>
            <td>Parcial</td>
            <td className={styles.destaque}>Totalmente sigiloso</td>
          </tr>
          <tr>
            <td>Audiências</td>
            <td>Presenciais</td>
            <td>Não há</td>
            <td className={styles.destaque}>Online ou presenciais</td>
          </tr>
          <tr>
            <td>Custos</td>
            <td>Até 20% do valor</td>
            <td>Em média 10%</td>
            <td className={styles.destaque}>Facultativo</td>
          </tr>
          <tr>
            <td>Taxas e encargos</td>
            <td>Judiciais</td>
            <td>Emolumentos cartorários</td>
            <td className={styles.destaque}>Fixo em 6%</td>
          </tr>
          <tr>
            <td>Burocracia</td>
            <td>Elevada</td>
            <td>Moderada</td>
            <td className={styles.destaque}>Mínima</td>
          </tr>
          <tr>
            <td>Validade da decisão</td>
            <td>Judicial</td>
            <td>Escritura pública</td>
            <td className={styles.destaque}>Sentença com força judicial</td>
          </tr>
        </tbody>
      </table>

                    </div>
                </section>

                <footer
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="5400"
                >
                    <p
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="5600"
                    >
                        O divórcio extrajudicial por arbitragem é a forma mais moderna, rápida e privada de resolver uma situação delicada como o fim do vínculo matrimonial. Na SVELARE LTDA, garantimos agilidade (até 30 dias), sigilo absoluto, custo acessível e segurança jurídica plena.
                    </p>
                    <p
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="5800"
                    >
                        Soluções legais com humanidade, agilidade e sigilo.
                    </p>
                </footer>
            </div>
            <Footer />
        </>
    );
}