import styled from "styled-components";
import {Link} from "react-router-dom"
export const DiscoverContainer=styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
grid-gap: 30px 30px;
@media screen and (max-width:900px)
{
    grid-template-columns:repeat(2,1fr);

}
`
export const GenreItem=styled(Link)`
height:200px;
background:url('${({background})=>background}') no-repeat;
background-size:cover;
display:flex;
justify-content:center;
align-items:center;
border-radius: 20px;
transition: transform 0.3s ease-in-out;
span{
    font-size:2rem;
    font-weight:bold;
    color:white;
}
&:hover{
    text-decoration:none;
    transform:translateX(10px) translateY(-10px);
}
`
