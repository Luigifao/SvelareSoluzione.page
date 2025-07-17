import React from 'react'
import "./GuiaInventarioModule.css"

export default function Inventario() {
  return (
    <div className="inventario">
      <header className="header">
        <h1>SVELARE CÂMARA ARBITRAL</h1>
        <h2>Inventário Extrajudicial por Arbitragem</h2>
      </header>

      <div className="box">
        <h3>O QUE É?</h3>
        <p>
          O inventário extrajudicial por arbitragem é uma solução moderna,
          eficaz e absolutamente legal para a partilha de bens deixados por
          pessoa falecida. Trata-se de um procedimento realizado fora do Poder
          Judiciário, conduzido com base na autonomia das partes e regulamentado
          por normas jurídicas plenamente reconhecidas no ordenamento brasileiro.
        </p>
        <p>
          Na Câmara Arbitral SVELARE LTDA, esse procedimento é conduzido com
          total sigilo, agilidade e economia, proporcionando às partes
          interessadas uma experiência segura, objetiva e muito menos
          burocrática do que as alternativas tradicionais. Ao optar pela via
          arbitral, evita-se a morosidade dos tribunais e as formalidades
          cartorárias, sem abrir mão da validade jurídica plena da decisão.
        </p>
      </div>

      <div className="box">
        <h3>Base Legal</h3>
        <p><strong>Lei nº 9.307/1996 – Lei de Arbitragem:</strong> Autoriza a resolução de conflitos relativos a direitos patrimoniais disponíveis por meio de árbitros escolhidos pelas partes.</p>
        <p><strong>Art. 515 – Títulos Executivos Judiciais:</strong> VII – A sentença arbitral. Confere à sentença arbitral o mesmo valor jurídico de uma sentença proferida por um juiz estatal, permitindo sua utilização como título executivo judicial.</p>
      </div>

      <div className="box">
        <h3>Requisitos para Inventário</h3>
        <ul>
          <li>Capacidade e consenso dos herdeiros (maiores e capazes).</li>
          <li>Ausência de testamento registrado em nome do falecido.</li>
          <li>Compromisso arbitral – termo assinado pelas partes.</li>
          <li>Documentação essencial:</li>
          <ul className="nested">
            <li>Certidão de óbito.</li>
            <li>RG e CPF dos herdeiros.</li>
            <li>Certidão negativa de testamento (CNJ).</li>
            <li>Comprovação dos bens (imóveis, veículos, contas, aplicações).</li>
            <li>Certidões fiscais e ITCMD quitado.</li>
          </ul>
        </ul>
      </div>

      <div className="box">
        <h3>Prazo</h3>
        <p>Até <strong>90 dias corridos</strong>.</p>
      </div>

      <div className="box">
        <h3>Investimento</h3>
        <p>
          Honorários de <strong>6%</strong> sobre o valor total do espólio
          (bens, valores e direitos), já incluindo custas administrativas. Valor
          mínimo fixo de R$ 3.000,00.
        </p>
        <p>O pacote cobre:</p>
        <ul>
          <li>Condução completa do procedimento arbitral.</li>
          <li>Elaboração da sentença arbitral com força judicial.</li>
          <li>Audiências (virtuais ou presenciais).</li>
          <li>Suporte documental e orientação jurídica básica.</li>
        </ul>
      </div>

      <div className="box table-box">
        <h3>Tabela Comparativa</h3>
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

      <div className="box">
        <p className="conclusao">
          Optar pelo inventário por arbitragem na Câmara SVELARE LTDA é escolher
          uma solução moderna, segura e eficiente para a partilha de bens.
          Diferentemente do processo judicial lento, público e burocrático ou do
          inventário cartorial limitado e moroso, a arbitragem oferece rapidez,
          sigilo absoluto, menor custo e total autonomia das partes.
        </p>
        <p className="footer">SVELARE CÂMARA ARBITRAL — Soluções legais com humanidade, agilidade e sigilo.</p>
      </div>
    </div>
  )
}























// import React, { useState } from 'react';
// import styles from './GuiaInventario.module.css';
// import Header from '../Components/Header';
// import Footer from '../Components/Sections/Footer';

// function GuiaInventario() {
//     const [formData, setFormData] = useState({
//         nomeCompleto: '',
//         cpf: '',
//         telefone: '',
//         email: '',
//         endereco: '',
//         tipoBem: '',
//         descricaoBem: '',
//         valorEstimado: '',
//         localizacao: '',
//         observacoes: '',
//         dataInventario: '',
//         responsavel: ''
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Dados do formulário:', formData);
//         // Aqui você pode adicionar a lógica para enviar os dados
//     };

//     return (
//         <>
//             <Header />
//             <main className={styles.guiaInventarioPage}>
//                 <div className={styles.container}>
//                     {/* Cabeçalho da página */}
//                     <div className={styles.pageHeader}>
//                         <div className={styles.logoSection}>
//                             <div className={styles.logoPlaceholder}>
//                                 <span>SVELARE</span>
//                             </div>
//                         </div>
//                         <div className={styles.titleSection}>
//                             <h1>GUIA DE INVENTÁRIO</h1>
//                             <p className={styles.subtitle}>Sistema de Gestão de Bens e Patrimônio</p>
//                         </div>
//                     </div>

//                     {/* Seção de Informações Pessoais */}
//                     <div className={styles.section}>
//                         <h2 className={styles.sectionTitle}>
//                             <span className={styles.sectionNumber}>01</span>
//                             INFORMAÇÕES PESSOAIS
//                         </h2>
//                         <div className={styles.formGrid}>
//                             <div className={styles.inputGroup}>
//                                 <label htmlFor="nomeCompleto">Nome Completo</label>
//                                 <input
//                                     type="text"
//                                     id="nomeCompleto"
//                                     name="nomeCompleto"
//                                     value={formData.nomeCompleto}
//                                     onChange={handleInputChange}
//                                     className={styles.inputField}
//                                     placeholder="Digite seu nome completo"
//                                 />
//                             </div>
//                             <div className={styles.inputGroup}>
//                                 <label htmlFor="cpf">CPF</label>
//                                 <input
//                                     type="text"
//                                     id="cpf"
//                                     name="cpf"
//                                     value={formData.cpf}
//                                     onChange={handleInputChange}
//                                     className={styles.inputField}
//                                     placeholder="000.000.000-00"
//                                 />
//                             </div>
//                             <div className={styles.inputGroup}>
//                                 <label htmlFor="telefone">Telefone</label>
//                                 <input
//                                     type="tel"
//                                     id="telefone"
//                                     name="telefone"
//                                     value={formData.telefone}
//                                     onChange={handleInputChange}
//                                     className={styles.inputField}
//                                     placeholder="(00) 00000-0000"
//                                 />
//                             </div>
//                             <div className={styles.inputGroup}>
//                                 <label htmlFor="email">E-mail</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     className={styles.inputField}
//                                     placeholder="seu.email@exemplo.com"
//                                 />
//                             </div>
//                         </div>
//                         <div className={styles.inputGroup}>
//                             <label htmlFor="endereco">Endereço Completo</label>
//                             <textarea
//                                 id="endereco"
//                                 name="endereco"
//                                 value={formData.endereco}
//                                 onChange={handleInputChange}
//                                 className={styles.textareaField}
//                                 placeholder="Rua, número, bairro, cidade, estado, CEP"
//                                 rows="3"
//                             ></textarea>
//                         </div>
//                     </div>

//                     {/* Seção de Dados do Bem */}
//                     <div className={styles.section}>
//                         <h2 className={styles.sectionTitle}>
//                             <span className={styles.sectionNumber}>02</span>
//                             DADOS DO BEM
//                         </h2>
//                         <div className={styles.formGrid}>
//                             <div className={styles.inputGroup}>
//                                 <label htmlFor="tipoBem">Tipo de Bem</label>
//                                 <select
//                                     id="tipoBem"
//                                     name="tipoBem"
//                                     value={formData.tipoBem}
//                                     onChange={handleInputChange}
//                                     className={styles.selectField}
//                                 >
//                                     <option value="">Selecione o tipo de bem</option>
//                                     <option value="imovel">Imóvel</option>
//                                     <option value="veiculo">Veículo</option>
//                                     <option value="joia">Joia/Objeto de Valor</option>
//                                     <option value="eletronico">Eletrônico</option>
//                                     <option value="movel">Móvel</option>
//                                     <option value="outros">Outros</option>
//                                 </select>
//                             </div>
//                             <div className={styles.inputGroup}>
//                                 <label htmlFor="valorEstimado">Valor Estimado (R$)</label>
//                                 <input
//                                     type="number"
//                                     id="valorEstimado"
//                                     name="valorEstimado"
//                                     value={formData.valorEstimado}
//                                     onChange={handleInputChange}
//                                     className={styles.inputField}
//                                     placeholder="0,00"
//                                     step="0.01"
//                                 />
//                             </div>
//                         </div>
//                         <div className={styles.inputGroup}>
//                             <label htmlFor="descricaoBem">Descrição Detalhada do Bem</label>
//                             <textarea
//                                 id="descricaoBem"
//                                 name="descricaoBem"
//                                 value={formData.descricaoBem}
//                                 onChange={handleInputChange}
//                                 className={styles.textareaField}
//                                 placeholder="Descreva detalhadamente o bem (marca, modelo, características, estado de conservação, etc.)"
//                                 rows="4"
//                             ></textarea>
//                         </div>
//                         <div className={styles.inputGroup}>
//                             <label htmlFor="localizacao">Localização Atual do Bem</label>
//                             <input
//                                 type="text"
//                                 id="localizacao"
//                                 name="localizacao"
//                                 value={formData.localizacao}
//                                 onChange={handleInputChange}
//                                 className={styles.inputField}
//                                 placeholder="Onde o bem está localizado atualmente"
//                             />
//                         </div>
//                     </div>

//                     {/* Seção de Observações */}
//                     <div className={styles.section}>
//                         <h2 className={styles.sectionTitle}>
//                             <span className={styles.sectionNumber}>03</span>
//                             OBSERVAÇÕES ADICIONAIS
//                         </h2>
//                         <div className={styles.formGrid}>
//                             <div className={styles.inputGroup}>
//                                 <label htmlFor="dataInventario">Data do Inventário</label>
//                                 <input
//                                     type="date"
//                                     id="dataInventario"
//                                     name="dataInventario"
//                                     value={formData.dataInventario}
//                                     onChange={handleInputChange}
//                                     className={styles.inputField}
//                                 />
//                             </div>
//                             <div className={styles.inputGroup}>
//                                 <label htmlFor="responsavel">Responsável pela Avaliação</label>
//                                 <input
//                                     type="text"
//                                     id="responsavel"
//                                     name="responsavel"
//                                     value={formData.responsavel}
//                                     onChange={handleInputChange}
//                                     className={styles.inputField}
//                                     placeholder="Nome do responsável"
//                                 />
//                             </div>
//                         </div>
//                         <div className={styles.inputGroup}>
//                             <label htmlFor="observacoes">Observações Gerais</label>
//                             <textarea
//                                 id="observacoes"
//                                 name="observacoes"
//                                 value={formData.observacoes}
//                                 onChange={handleInputChange}
//                                 className={styles.textareaField}
//                                 placeholder="Informações adicionais relevantes para o inventário"
//                                 rows="4"
//                             ></textarea>
//                         </div>
//                     </div>

//                     {/* Seção de Ações */}
//                     <div className={styles.actionSection}>
//                         <button type="button" className={styles.btnSecondary}>
//                             Salvar Rascunho
//                         </button>
//                         <button type="submit" className={styles.btnPrimary} onClick={handleSubmit}>
//                             Finalizar Inventário
//                         </button>
//                     </div>

//                     {/* Rodapé informativo */}
//                     <div className={styles.infoFooter}>
//                         <div className={styles.infoCard}>
//                             <h3>📋 Documentos Necessários</h3>
//                             <ul>
//                                 <li>RG e CPF do solicitante</li>
//                                 <li>Comprovante de residência</li>
//                                 <li>Documentos do bem (quando aplicável)</li>
//                                 <li>Notas fiscais ou recibos</li>
//                             </ul>
//                         </div>
//                         <div className={styles.infoCard}>
//                             <h3>⚖️ Informações Legais</h3>
//                             <p>
//                                 Este inventário segue as normas estabelecidas pelo Código Civil 
//                                 e legislação específica. Todos os dados fornecidos são de 
//                                 responsabilidade do declarante.
//                             </p>
//                         </div>
//                         <div className={styles.infoCard}>
//                             <h3>📞 Suporte</h3>
//                             <p>
//                                 Em caso de dúvidas, entre em contato com nossa equipe 
//                                 através do telefone (11) 9999-9999 ou email: 
//                                 suporte@svelare.com.br
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//             <Footer />
//         </>
//     );
// }

// export default GuiaInventario;
