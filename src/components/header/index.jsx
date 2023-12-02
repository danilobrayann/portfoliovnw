
import { Nav, ListaNav,A } from './styles';

export default function Header() {
 

  return (
    <Nav>
      <h2 href='#inicio' >Meu <b>Portfolio</b></h2>
      
      <ListaNav >
        <A href='#'>Inicio</A>
        <A href="#sobre" >Sobre</A>
        <A href='#projetos'>Projetos</A>
        <A>Habilidades</A>
        <A>Contatos</A>
      
      </ListaNav>
    </Nav>
  );
}
