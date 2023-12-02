import Carrosel from "../carrosel";
import { SectionProjetos } from "./styles";
import iphone from "../../img/iphone13.png";
import Hambuguer from '../../img/hamburguer.png'
import { DivImg,DivIcon,Divh2 } from "./styles";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
export default function Projetos() {

  useEffect(() => {
    
    ScrollReveal({ 
      reset: true,
      distance: '100px',
      duration: 2000,
      delay: 800
    });

   
    ScrollReveal().reveal('h3,span,i', { origin: 'top' });
    ScrollReveal().reveal('img,a', { origin: 'bottom' });

   
    return () => ScrollReveal().destroy();
  }, []); 


  return (
    <>
      <Carrosel />
      <SectionProjetos id="projetos">
        <Divh2><h2>
          Meus <span>Projetos - Web</span>{" "}
        </h2></Divh2>
        
        <DivImg>
          <div>
            <img src={iphone} alt="" />
            <DivIcon >
              <a
                href="https://github.com/danilobrayann/Page-Iphone/tree/main"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://page-iphone.vercel.app/" target="_blank">
                <i class="bx bxs-upvote"></i>
              </a>
            </DivIcon>

          </div>
          

          <div>
            <img src={Hambuguer} alt="" />
            <DivIcon >
              <a
                href="https://github.com/danilobrayann/hamburguerDelivery"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://hamburguer-delivery.vercel.app/" target="_blank">
                <i class="bx bxs-upvote"></i>
              </a>
            </DivIcon>

          </div>



          <div>
            <img src={iphone} alt="" />
            <DivIcon >
              <a
                href="https://github.com/danilobrayann/hamburguerDelivery"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://hamburguer-delivery.vercel.app/" target="_blank">
                <i class="bx bxs-upvote"></i>
              </a>
            </DivIcon>

          </div>

          <div>
            <img src={iphone} alt="" />
            <DivIcon >
              <a
                href="https://github.com/danilobrayann/hamburguerDelivery"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://hamburguer-delivery.vercel.app/" target="_blank">
                <i class="bx bxs-upvote"></i>
              </a>
            </DivIcon>

          </div>
        
        </DivImg>
      </SectionProjetos>
    </>
  );
}
