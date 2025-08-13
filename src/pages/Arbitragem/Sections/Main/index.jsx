import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './Main.module.css';
import direito from '/src/assets/img/direito.png';


function Main() {

     useEffect(() => {
            AOS.init({
                duration: 1000, // Duração da animação
                easing: "ease-in-out", // Tipo de easing
                once: true, // Animação ocorre apenas uma vez
            });
        }, []);
    
    return (
        <main className={styles.mainPage}>
            <div className={styles.container}>
                <h1> ARBITRAGEM: A CHAVE PARA EMPRESÁRIOS QUE QUEREM PROTEGER, AGILIZAR E VALORIZAR SEUS NEGÓCIOS</h1>
                <p>Transforme conflitos em soluções rápidas, sigilosas e sem burocracia — sem custo inicial.
                </p>
                <br />
                <p>Imagine resolver um conflito contratual em apenas 3 meses, com total sigilo, sem precisar contratar um advogado litigante, sem enfrentar filas, custas judiciais, audiências frustradas ou decisões imprevisíveis de juízes que sequer compreendem a lógica do seu negócio.
                </p>
            </div>
            <div className={styles.imgContainer}>
            <img src={direito} alt="" />
            </div>
        </main>

    )



}
export default Main;