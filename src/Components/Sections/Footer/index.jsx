import { useEffect } from "react";
import styles from './Footer.module.css';
import AOS from "aos";
import "aos/dist/aos.css";
import iconWhasapp from "/src/assets/img/whatsappIcon.png"
import iconInstagram from "/src/assets/img/instagramImg.png"

function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);

    return (

        <footer className={styles.footer}>
            <div className={styles.container}>
            <div className={styles.contentImg}>
                <img src={iconInstagram} alt="instaIcon" />
                <img src={iconWhasapp} alt="zapIcon" />
            </div>
            <div className={styles.content}>
                <p>Copyright 2024. Todos os Direitos Reservados. Svelare Soluzione. Desenvolvido por @dev_luigifernando & @Ryuzz9</p>

            </div>
            </div>



        </footer>


    );


}

export default Footer