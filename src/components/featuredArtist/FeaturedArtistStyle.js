import styled from "styled-components"
import {Link} from "react-router-dom"
export const FeaturedContainer=styled.div`

`
export const ListFeatureds=styled.div`
display:grid;
grid-template-columns:repeat(6,1fr);
grid-gap:20px 10px;
@media screen and (max-width:900px)
{
    grid-template-columns:repeat(3,1fr);

}

`
export const FeaturedItemContainer=styled(Link)`
background:url('${({background_img})=>background_img}');
height:200px;
border-radius:10px;
display:flex;
justify-content:center;
align-items:flex-end;
overflow:hidden;
text-decoration:none;
transition:all 0.2s ease-in-out;
&:hover{
    text-decoration:none;
    transform:translateY(-10px);

}
.name{
    color:white;
    text-align:center;
    font-weight:bold;
    background:gray;
    width:100%;
    padding:.3rem 0;
}
`