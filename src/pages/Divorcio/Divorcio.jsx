import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Main from './Components/Main';

function Divorcio() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);


    return (
        <>
        <Main />

        </>



    );



}

export default Divorcio;