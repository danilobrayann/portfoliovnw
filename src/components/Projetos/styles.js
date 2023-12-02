import styled from "styled-components";

export const SectionProjetos = styled.section`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
height:100vh;

h2{
color:white;

margin-bottom: 1.0rem;
font-size:3.5rem;
font-family:Agbalumo;
span{
    color:#009760;
}
}

`
export const Divh2 = styled.div`
margin-top:10rem;


`
export const DivImg =styled.div`

display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 2.5rem;
img{
    border-radius:5rem;
   
}
`

export const DivIcon = styled.div`
display:flex;
justify-content:center;
align-items:center;


a{
    font-size:4rem;
    color:#ffff;
  
    padding:1.5rem;
}

i{
  
}
`