import styled from "styled-components";

export const HomeSection = styled.section`
padding:20px;
display:flex;
align-items:center;
height:100vh;

`

export const Social = styled.div`
display:flex;
flex-direction:column;

height:35vh;
gap:15px;
a{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    background: transparent;
    border: .4rem solid #009760;
    border-radius: 50%;
    font-size: 1.8rem;
    color: white;
  text-decoration:none;
 margin:5px 5px 0px 2px;

    transition: ease .8s;
    &:hover{
    background:#009760  ;
    box-shadow: 0 0 1rem #009760;
    
    }
i{
    border-radius:100%;
    font-size: 2.0rem;
    &:hover{
        color:#009760;
    }
}
 
}

`

export const DivTexto = styled.div`
margin: 15px;

h1{
    font-size:53px;
    color:white;
}


h3{
    font-size:32px;
    color:white;
    font-family:Agbalumo;
}

p{
   
   margin-top:30px;
   color:white;
   width:55vw;
   font-size:18px;
   font-weight:500;
}


span{
color: #009760;  
}

`

export const DivImg = styled.div`

 width:80vw;
 height:80vh;
 display:flex;
    justify-content:center;
    align-items:center;
img{
   
    width:20vw;
    border-radius:55px;
    
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