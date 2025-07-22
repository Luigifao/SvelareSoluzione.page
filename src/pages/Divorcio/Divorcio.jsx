import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Main from './Components/Main';
import Section from './Components/Sections/DivorcioPage';
import About from './Components/Sections/About';
import LeiArbitragem from './Components/Sections/LeiDeArbitragem';
import SetencaArbitral from './Components/Sections/SetencaArbitral';
import Requisitos from './Components/Sections/Requisitos';
import Setenca2 from './Components/Sections/SetencaArbitral2';

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
        <Section />
        <About />
        <LeiArbitragem />
        <SetencaArbitral />
        <Requisitos />
        <Setenca2 />
        </>



    );



}

export default Divorcio;