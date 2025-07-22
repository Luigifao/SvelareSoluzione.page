import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './Main.module.css';
import logo from "/src/assets/img/logomarca.png";
import ParticlesBackground from '../ParticlesBackground';


function Main() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);

    return (

        <>

          
            <main className={styles.mainPage}>

                <div className={styles.image}>
                    <img src={logo} alt="logo" />
                </div>
                
            </main>

        </>


    );

}

export default Main;