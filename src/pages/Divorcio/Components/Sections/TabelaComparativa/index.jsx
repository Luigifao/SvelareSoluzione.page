import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './Tabela.module.css';

function TabelaComparativa() {

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
                    <h1>TABELA COMPARATIVA</h1>
                </div>
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
            <td>Custos com advogado</td>
            <td>Até 20% do valor</td>
            <td>Em média 10%</td>
            <td className={styles.destaque}>Facultativo<br/>Fixo em 6%</td>
          </tr>
          <tr>
            <td>Taxas e encargos</td>
            <td>Judiciais</td>
            <td>Emolumentos cartorários</td>
            <td className={styles.destaque}>Sem taxas ocultas</td>
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


    );


}

export default TabelaComparativa;