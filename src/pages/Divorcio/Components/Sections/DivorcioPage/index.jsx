import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './DivorcioPage.module.css';
import fundo from '@/assets/img/fundos.jpg';






function DivorcioPage() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easin
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);


    return (

        <section style={{
            backgroundImage: `url(${fundo})`,
            backgroundSize: 'cover',
            height: '100vh',
        }} className={styles.container}>


            <div className={styles.blackFilter}></div>
            <div className={styles.black2Filter}></div>
            <div className={styles.yellowFilter}></div>


            <div className={styles.content}>
                <h1>DIVÓRCIO</h1>
                <h2>EXTRAJUDICIAL POR ARBITRAGEM</h2>

                <p>CÂMARA ARBITRAL SVELARE LTDA</p>
            </div>
        </section>



    );


}

export default DivorcioPage;