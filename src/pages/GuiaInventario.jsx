import React, { useState } from 'react';
import styles from './GuiaInventario.module.css';
import Header from '../Components/Header';
import Footer from '../Components/Sections/Footer';

export default function GuiaInventario() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1>SVELARE CÂMARA ARBITRAL</h1>
          <h2>INVENTÁRIO EXTRAJUDICIAL POR ARBITRAGEM</h2>
        </header>

      <section>
        <h3>O que é?</h3>
        <p>
          O inventário extrajudicial por arbitragem é uma solução moderna, eficaz e
          absolutamente legal para a partilha de bens deixados por pessoa falecida. Trata-se de
          um procedimento realizado fora do Poder Judiciário, conduzido com base na autonomia das
          partes e regulamentado por normas jurídicas plenamente reconhecidas no ordenamento
          brasileiro.
        </p>
        <p>
          Na Câmara Arbitral SVELARE LTDA, esse procedimento é conduzido com total sigilo,
          agilidade e economia, proporcionando às partes interessadas uma experiência segura,
          objetiva e muito menos burocrática do que as alternativas tradicionais. Ao optar pela
          via arbitral, evita-se a morosidade dos tribunais e as formalidades cartorárias, sem
          abrir mão da validade jurídica plena da decisão.
        </p>
      </section>

        <div className={styles.boxes}>
          <div className={styles.lawBox}>
            <h4>LEI Nº 9.307/1996</h4>
          <p>Lei de Arbitragem</p>
          <p>
            Autoriza a resolução de conflitos relativos a direitos patrimoniais disponíveis por
            meio de árbitros escolhidos pelas partes.
          </p>
          </div>
          <div className={styles.arbBox}>
            <h4>ART. 515 – TÍTULOS EXECUTIVOS JUDICIAIS</h4>
          <p>VII – A SENTENÇA ARBITRAL.</p>
          <p>
            Confere à sentença arbitral o mesmo valor jurídico de uma sentença proferida por um
            juiz estatal, permitindo sua utilização como título executivo judicial – ou seja, é
            uma decisão que produz efeitos imediatos e pode ser registrada, executada e exigida
            judicialmente, se necessário.
          </p>
        </div>
      </div>

      <section>
        <p>
          Portanto, havendo consenso entre os herdeiros, ausência de testamento e plena capacidade
          civil, é não apenas possível, mas plenamente legal, legítimo e recomendado realizar o
          inventário pela via arbitral.
        </p>
      </section>

      <section>
        <h3>Requisitos para Inventário</h3>
        <ul className={styles.checklist}>
          <li>
            <strong>Capacidade e consenso:</strong> Todos os herdeiros devem ser maiores de idade,
            plenamente capazes e estar de comum acordo quanto à partilha dos bens.
          </li>
          <li>
            <strong>Ausência de testamento:</strong> Não deve haver testamento registrado em nome
            do falecido.
          </li>
          <li>
            <strong>Compromisso arbitral:</strong> Os interessados devem firmar o compromisso
            arbitral, manifestando sua vontade de resolver a questão pela via da arbitragem.
          </li>
          <li>
            <strong>Documentação essencial:</strong>
            <ul>
              <li>Certidão de óbito;</li>
              <li>Documentos pessoais dos herdeiros (RG e CPF);</li>
              <li>Certidão negativa de testamento emitida pelo CNJ;</li>
              <li>
                Documentação comprobatória dos bens do espólio (imóveis, veículos, contas
                bancárias, aplicações financeiras etc.);
              </li>
              <li>
                Comprovantes de regularidade fiscal, especialmente o recolhimento do ITCMD e
                certidões.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className={styles.twoCols}>
        <div>
          <h3>Prazo</h3>
          <p>Até <strong>90 DIAS CORRIDOS</strong></p>
        </div>
        <div>
          <h3>Investimento</h3>
          <p>
            A SVELARE LTDA adota uma política de custos transparente e acessível. Os honorários
            correspondem a 6% sobre o valor total do espólio, compreendendo bens, valores e
            direitos a título de honorários e custas administrativas. Valor mínimo de
            R$ 3.000,00.
          </p>
          <p>Esse valor engloba:</p>
          <ul>
            <li>Condução completa do procedimento arbitral;</li>
            <li>Elaboração da sentença arbitral com força de decisão judicial;</li>
            <li>Realização de audiências (virtuais ou presenciais);</li>
            <li>Suporte documental e orientação jurídica básica.</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Tabela Comparativa</h3>
        <div className={styles.tableWrapper}>
          <table>
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
                <td>Até 90 dias</td>
              </tr>
              <tr>
                <td>Sigilo do procedimento</td>
                <td>Público</td>
                <td>Parcial</td>
                <td>Totalmente sigiloso</td>
              </tr>
              <tr>
                <td>Audiências</td>
                <td>Presenciais</td>
                <td>Não há</td>
                <td>Online ou presenciais</td>
              </tr>
              <tr>
                <td>Custos com advogado</td>
                <td>Até 20% do valor</td>
                <td>Em média 10%</td>
                <td>Fixo em 6%</td>
              </tr>
              <tr>
                <td>Taxas e encargos</td>
                <td>Judiciais</td>
                <td>Emolumentos cartorários</td>
                <td>Sem taxas ocultas</td>
              </tr>
              <tr>
                <td>Burocracia</td>
                <td>Elevada</td>
                <td>Moderada</td>
                <td>Mínima</td>
              </tr>
              <tr>
                <td>Validade da decisão</td>
                <td>Judicial</td>
                <td>Escritura pública</td>
                <td>Sentença com força judicial</td>
              </tr>
              <tr>
                <td>Controle das partes</td>
                <td>Limitado</td>
                <td>Moderado</td>
                <td>Elevado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer>
        <p>
          Optar pelo inventário por arbitragem na Câmara SVELARE LTDA é escolher uma solução
          moderna, segura e eficiente para a partilha de bens. Diferentemente do processo judicial
          lento, público e burocrático ou do inventário cartorial limitado e ainda moroso, a
          arbitragem oferece rapidez, sigilo absoluto, menor custo e total autonomia das partes.
        </p>
        <p>Soluções legais com humanidade, agilidade e sigilo.</p>
      </footer>
      </div>
      <Footer />
    </>
  );
}