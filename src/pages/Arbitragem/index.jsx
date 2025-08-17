import React from 'react';
import Main from './Sections/Main';
import Header from '../../Components/Header';
import ProblemaSection from './Sections/ProblemaSection';
import SolucaoSection from './Sections/SolucaoSection';
import PraticaSection from './Sections/PraticaSection';
import SobreSection from './Sections/Sobre';
import MercadoSection from './Sections/MercadoSection';
import ContatoSection from './Sections/Contato';
import Footer from '../../Components/Sections/Footer';





function Arbitragem() {

    return(
        <>
        <Header />
        <Main />
        <ProblemaSection />
        <SolucaoSection />
        <PraticaSection />
        <SobreSection />
        <MercadoSection />
        <ContatoSection />
        <Footer />
        
        
        </>

    )

}

export default Arbitragem;