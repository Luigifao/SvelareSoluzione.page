import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function ProblemaSection() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);

    return (
        <section>
            <p>Essa é a realidade da arbitragem — e empresas inteligentes já estão se beneficiando dela para crescer com segurança e destaque no mercado.
            </p>
            
        </section>

    )

}

export default ProblemaSection;