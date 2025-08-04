import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Main.module.css';
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Importação direta da imagem
import logomarca from '/src/assets/img/logomarca.png';

function Main() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);

    const handleContactClick = () => {
        // Navegar para a seção de contato
        const contatoSection = document.querySelector('#contato');
        if (contatoSection) {
            contatoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleGuiaInventarioClick = () => {
        navigate('/guia-inventario');
    };

    return (
        <main className={styles.mainPage}>
            <div className={styles.container}>
                <div className={`${styles.logoMain} animate__animated`}>
                    {/* Uso da imagem importada */}
                    <img src={logomarca} alt="logomarca" />
                </div>

                <div className={styles.text}>
                    <p className="animate__animated">A Justiça do futuro</p>
                    <h1 className="animate__animated"> Rápida, acessível e online. A SVELARE resolve conflitos com validade judicial, sem filas e com sigilo absoluto.</h1>
                    <button className="animate__animated" onClick={handleContactClick}
                        style={{ cursor: 'pointer' }}>
                        QUERO ENTRAR EM CONTATO
                    </button>
                  
                </div>
            </div>

            <div className={styles.carrousel}>
                <div className={styles.carrouselWrapper}>
                    <div className={styles.carrouselItem}>
                        <h1>+60</h1>
                        <h2>Número de clientes</h2>
                    </div>
                    <div className={styles.carrouselItem}>
                        <h1>+800</h1>
                        <h2>Processos na plataforma</h2>
                    </div>
                    <div className={styles.carrouselItem}>
                        <h1>+500</h1>
                        <h2>Processos finalizados</h2>
                    </div>
                    <div className={styles.carrouselItem}>
                        <h1>+26</h1>
                        <h2>Seções de mediação</h2>
                    </div>
                    <div className={styles.carrouselItem}>
                        <h1>+800</h1>
                        <h2>Clientes</h2>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
