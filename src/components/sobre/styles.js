import styled from "styled-components";

export const SobreSection = styled.section`
background-color:#323946;
height:100vh;
display:flex;
justify-content:center;
align-items:center;

`

export const DivImagem = styled.div`
margin-right:30px;
background-color:#323946;
img{
    width:15vw;
    border-radius: 5.8rem;

    
}
`

export const DivTexto = styled.div`
background-color:#323946;
h1{
    background-color:#323946;
    font-size:53px;
    color:white;
    font-family:Agbalumo;
    
}

span{
    background-color:#323946;
color: #009760;  
}

h3{
    background-color:#323946;
    font-size:30px;
    color:white;
    font-family:Agbalumo;   
}

p{
    background-color:#323946;
    width:40vw;
    font-size:20px;
    color:white;
    span{
        background-color:#323946;
color: #009760; 
font-family:Agbalumo; 
font-weight:700;
}
}
`
export const  Btn = styled.a`

display: inline-block;
    padding: 1.2rem 2.8rem;
    background: #009760;
    border-radius: 4rem;
    box-shadow: 0 0 1rem #009760;
    font-size: 1.5rem;
    color: white;
    letter-spacing: .1rem;
    font-weight: 600;
    transition: .5s ease;
    text-decoration:none ;
  margin-top:20px;
    
    &:hover{
        box-shadow:none;
    }
`