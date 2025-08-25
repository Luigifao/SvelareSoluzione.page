import React, { useState, useEffect } from "react";
import styles from './Contato.module.css';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import iconContato from '/src/assets/img/iconContato.png';

function Contato() {

    const [labelText, setLabelText] = useState("");

    const handleButtonClick = () => {
        setLabelText("Quero Ingressar em um processo")

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //pegando elementos pelo id formulario de contato
        const nome = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("whatsapp").value.trim();
        const mensagem = document.getElementById("message").value.trim();

        //verificar campo se esta vazio
        if (!nome || !email || !telefone || !mensagem) {
            alert("Todos os campos devem ser preenchidos!");
            return;
        }
        //caixa de retorno se for true
        alert("Formulário enviado com sucesso!");
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);



    return (
        <section className={styles.contato} id="contato">
            <div className={styles.container} data-aos="fade-in">

                <div className={styles.tituloContato}>
                    <img src={iconContato} alt="iconContato" />
                    <h1>FALE CONOSCO</h1>

                </div>

                <div className={styles.subtitle}>
                    <h2>CONTATO</h2>
                    <div className={styles.line}></div>


                    <p>Selecione abaixo o motivo
                        de seu contato:</p>
                    <button className={styles.btn} onClick={handleButtonClick}>Quero ingressar em um processo</button>
                    <button className={styles.btn}>Quero ingressar em um processo</button>
                    <button className={styles.btn}>Quero ingressar em um processo</button>
                    <button className={styles.btn}>Quero ingressar em um processo</button>
                </div>




            </div>
            <div className={styles.conntainer2} data-aos="fade-in">
                <div className={styles.logo}>

                    <div className={styles.formulario} data-aos="fade-right">
                        <h2>Preencha com seus dados <br />abaixo</h2>
                        <div className={styles.formularioInfo}>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="text" className={styles.inputText}></label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="NOME"
                                />
                                <label htmlFor="text" className={styles.inputText}></label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="email"
                                    name="name"
                                    placeholder="Email"
                                />
                                <label htmlFor="text" className={styles.inputText}></label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="whatsapp"
                                    name="name"
                                    placeholder="Whatsapp"
                                />
                                <label htmlFor="message" className={styles.inputText}></label>
                                <textarea
                                    className={styles.input}
                                    type="text"
                                    id="message"
                                    name="name"
                                    rows="5"
                                    placeholder="Mensagem"
                                    value={labelText}
                                    onChange={(e) => setLabelText(e.target.value)}
                                />
                                <button className={styles.btn2} type="submit">Enviar Mensagem</button>
                            </form>



                        </div>
                    </div>
                </div>

            </div>





        </section>

    )

}

export default Contato;