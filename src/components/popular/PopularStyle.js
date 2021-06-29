import styled from "styled-components"
export const PopularContainer = styled.div`

`
export const Overlay = styled.div`
width:100%;
height:100%;
position:absolute;
left:0;
right:0;
background:url('https://maocmusic.netlify.app/static/media/popular-genres.6ded9f25.jpeg');
background-size:cover;
background-position:right top;
`
export const Text = styled.div`
z-index:3;
p:first-child{
    color:yellow;
    font-size:2rem;
    font-weight:bold;
}
p:last-child{
    font-size:2.2rem;
    font-weight:bold;
    color:white;
}
`
export const WrapImage = styled.div`

height:470px;
border-radius:20px;
display:flex;
justify-content:center;
align-items:center;
position:relative;
overflow:hidden;
&:hover{
    ${Overlay}{

        filter: blur(8px);
    }
    
}
`

