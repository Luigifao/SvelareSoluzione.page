import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './DivorcioPage.module.css';




function DivorcioPage() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easin
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);
    

    return (

        <section className={styles.container}>


            <div className={styles.content}>
            <h1>DIVÓRCIO</h1>
            <h2>EXTRAJUDICIAL POR ARBITRAGEM</h2>

            <p>CÂMARA ARBITRAL SVELARE LTDA</p>
            </div>
        </section>



    );


}

export default DivorcioPage;