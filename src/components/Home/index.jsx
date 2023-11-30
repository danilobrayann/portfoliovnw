import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import {HomeSection,Social,DivTexto,DivImg,Btn} from '../Home/styles'
import eu from '../../img/eu.jpg'


export default function Home() {


    useEffect(() => {
    
        ScrollReveal({ 
          reset: true,
          distance: '100px',
          duration: 2000,
          delay: 800
        });
    
       
        ScrollReveal().reveal('section,div,h3,h1,p', { origin: 'top' });
        ScrollReveal().reveal('img,a', { origin: 'bottom' });
    
       
        return () => ScrollReveal().destroy();
      }, []); 

     


    return (
        <HomeSection>
            <Social>
                <a href="https://github.com/danilobrayann" target="_blank"><i class='bx bxl-github'></i></a>
                <a href="https://api.whatsapp.com/send/?phone=5571996738280&text=ol%C3%A1+tudo+bem%2C+me+chamo+Danilo+e+sou+Desenvolvedor&type=phone_number&app_absent=0" target="_blank"><i class='bx bxl-whatsapp'></i></a>
                <a href="https://www.linkedin.com/in/danilosantosdeveloper/" target="_blank"><i class='bx bxl-linkedin'></i></a>
                <a href="https://play.google.com/store/apps/developer?id=Danilo+Brayann" target="_blank"><i class='bx bxl-play-store'></i></a>
            </Social>
            <DivTexto>
            <h3>Iai, Beleza? Me-Chamo</h3>
            <h1>Danilo Souza</h1>
            <h3>Eu Sou <span >Desenvolvedor Full Stack</span></h3>
            <p>🖥Desenvolvedor Full Stack 🚀
                Dedicação Total ao Código
                Permita-me apresentar como um desenvolvedor Full Stack apaixonado pela arte do desenvolvimento. Desde
                que comecei a estudar Análise e Desenvolvimento de Sistemas, descobri uma verdadeira paixão por criar
                soluções inovadoras e funcionais.</p>
                <Btn href="#">Dowloand CV</Btn>
           
            </DivTexto>
            <DivImg>
                <img src={eu} alt="minha foto" />
            </DivImg>
           
            
        </HomeSection>
    )
}