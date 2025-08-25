import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './Pratica.module.css';

function PraticaSection() {

 useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);

    
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Clausula-Arbitral-Svelare.pdf';
        link.download = 'Clausula-Arbitral-Svelare.pdf'; // Nome do arquivo baixado
        link.click();
    };


    return (

        <section className={styles.container}>
            <div className={styles.content}>
            <div className={styles.title}>
                <h1>COMO FUNCIONA NA PRÁTICA?</h1>
            </div>
            <br />
            <div className={styles.description}>
            <p>É simples. Você insere em seus contratos a seguinte cláusula:</p>
            <br />
            <p>“As partes elegem a Câmara Arbitral Svelare LTDA, inscrita no CNPJ sob o nº 57.809.109/0001-91, como única e exclusiva responsável pela resolução de quaisquer conflitos oriundos deste contrato, por meio de arbitragem, nos termos da Lei nº 9.307/96, renunciando expressamente a qualquer outro foro, por mais privilegiado que seja.”</p>
            <br />
            <p>Pronto. Seu contrato está blindado.
                Se um dia surgir um conflito, ele será resolvido diretamente pela Svelare — com agilidade, neutralidade, e sem a dor de cabeça da justiça comum.
            </p>
            </div>
            <button className={styles.downloadButton} onClick={handleDownload}>
                            <div className={styles.docs}>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                >
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                                Termo Clausula Arbitral
                            </div>
                            <div className={styles.download}>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                        </button>
            </div>



        </section>




    );

}
export default PraticaSection;