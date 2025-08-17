import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './contato.module.css';
import whatsappIcon from '/src/assets/img/whatsappIcon.png';


function ContatoSection() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);

    const handleWhatsAppClick = () => {
        const phoneNumber = "+553196051534"; 
        const message = "Olá! Gostaria de blindar meus contratos com arbitragem ";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className={styles.container}>
            <div className={styles.content} data-aos="fade-up">
                <div className={styles.title}>
                    <h1>Contato</h1>
                </div>
                
                <div className={styles.callToAction} data-aos="fade-right">
                    <h2>📣 FAÇA AGORA O QUE SUA CONCORRÊNCIA VAI FAZER DEPOIS</h2>
                    <p>Você não precisa esperar o problema surgir para agir. Proteja sua empresa agora, sem custo algum, com o apoio da equipe Svelare.</p>
                </div>

                <div className={styles.contactInfo} data-aos="fade-left">
                    <h3>📞 Fale com um especialista</h3>
                    <p>Clique no botão abaixo, entre em contato e solicite minutas contratuais com cláusula arbitral gratuita para seus contratos atuais e futuros.</p>
                </div>

                <div className={styles.buttons} data-aos="fade-up">
                    <div className={styles.contractText}>
                        👉 Quero blindar meus contratos com arbitragem
                    </div>
                    
                    <button 
                        className={styles.whatsappButton}
                        onClick={handleWhatsAppClick}
                    >
                        <img src={whatsappIcon} alt="WhatsApp" />
                        👉 Fale agora com a Svelare no WhatsApp
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ContatoSection;
