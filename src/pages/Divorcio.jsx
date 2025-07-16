import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

function Divorcio(){

 useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);


    return(
        
        <section>
            <h1>ola</h1>

        </section>

    );



}

export default Divorcio;