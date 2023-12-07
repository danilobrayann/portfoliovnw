import {SobreSection,DivImagem,DivTexto,Btn} from '../sobre/styles'
import Eu from '../../img/eu.jpg'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
export default function Sobre() {



    useEffect(() => {
    
        ScrollReveal({ 
          reset: true,
          distance: '100px',
          duration: 2000,
          delay: 800
        });
    
       
        ScrollReveal().reveal('h3,h1,span', { origin: 'right' });
        ScrollReveal().reveal('a,p', { origin: 'left' });
    
       
        return () => ScrollReveal().destroy();
      }, []); 





    return (
        <SobreSection id='sobre' >
            <DivImagem>
                <img src={Eu} alt="foto" />
            </DivImagem>
            <DivTexto>
                <h1>Sobre <span>Mim</span></h1>
                <h3><span>Developer</span> Full Stack !</h3>
                <p>Tenho conhecimento e experiência em diversas linguagens e tecnologias de programação, incluindo <span> HTML,
                CSS, JavaScript, React, Node.js e APIs.</span> Com minhas habilidades em 🖥desenvolvimento Full Stack🚀, posso
                trabalhar tanto no lado do cliente quanto no servidor, proporcionando uma experiência completa e fluida
                para os usuários.
                
                Tenho uma abordagem orientada a resultados e sou capaz de transformar ideias em produtos finais de alta
                qualidade. Além disso, estou sempre aprendendo e me atualizando com as últimas tendências e melhores
                práticas de desenvolvimento, a fim de fornecer soluções eficientes e escaláveis.

                Estou animado com a oportunidade de contribuir para sua equipe de desenvolvimento, trazendo meu
                entusiasmo, habilidades técnicas e dedicação total ao mundo do código</p>
                <Btn href="https://api.whatsapp.com/send/?phone=5571996738280&text=ol%C3%A1+tudo+bem%2C+me+chamo+Danilo+e+sou+Desenvolvedor&type=phone_number&app_absent=0">Fale comigo ?</Btn>
            </DivTexto>
          
        </SobreSection>
    )
}