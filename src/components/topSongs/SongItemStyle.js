import styled from "styled-components"
export const SongItemContainer=styled.div`
display:grid;
grid-template-columns:1fr 5fr 2fr 1fr 1fr;
color:white;
margin-bottom:.5rem;
background:${({theme})=>theme=='dark'?'#3c3e4d':'#f6f6f6'};
border-radius:10px;
padding:0.5rem;
align-items:center;
svg{
    cursor:pointer;
}
`
export const Info=styled.div`
padding-left:1rem;
p{
    margin:0;
}
p:first-child{
    font-size:1.1rem;
    font-weight:bold;
    color:${({theme})=>theme=='dark'?"white":"black"}
}
p:last-child{
    color:tomato;
}
`