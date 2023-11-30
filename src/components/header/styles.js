import styled from "styled-components";

export const Nav = styled.nav`


display:flex;
justify-content:space-between;
align-items:center;
margin: 0px 80px;

h2{
    font-family:Agbalumo;
    color:white;
    font-size: 2.5rem;
    font-weight:700;
}
b{
    color:#009760;
}
`
export const ListaNav = styled.ul`
list-style:none ;
display:flex;
justify-content:space-around;
width:30vw;


li{
    font-family:Agbalumo;
    font-size:18px;
    color:white;
    cursor: pointer;
    &:hover{
        color:#009760;
        background-color:transparent;
        box-shadow: #009760 0px 20px 30px -3px;
    }
}
`

