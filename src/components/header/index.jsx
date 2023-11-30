import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Nav, ListaNav } from './styles';

export default function Header() {
  useEffect(() => {
    
    ScrollReveal({ 
      reset: true,
      distance: '100px',
      duration: 3000,
      delay: 300
    });

   
    ScrollReveal().reveal('nav, h2, li, ul', { origin: 'left' });

   
    return () => ScrollReveal().destroy();
  }, []); 

  return (
    <Nav>
      <h2>Meu <b>Portfolio</b></h2>
      <ListaNav>
        <li>Inicio</li>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Habilidades</li>
        <li>Contatos</li>
      </ListaNav>
    </Nav>
  );
}
