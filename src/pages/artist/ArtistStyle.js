import styled from "styled-components"
import {Link} from "react-router-dom"
export const ArtistInfo=styled.div`
display:flex;
align-items:center;
img{
    border-radius:50%;
}
`
export const Info=styled.div`
color:white;
margin-left:2rem;
.name{
    font-size:2rem;
    font-weight:bold;
}
.follow_btn{
    padding:.3rem 1rem;
    background:white;
    border-radius:10px;
    margin-top:1rem;
    border:none;
    outline:none;
   
}
`
export const RelatedItem=styled(Link)`
img{
    border-radius:10px;
}
.name{
    color:white;
    font-size:1.1rem;
    font-weight:bold;
}
text-decoration:none;
&:hover{
    text-decoration:none;
}
`