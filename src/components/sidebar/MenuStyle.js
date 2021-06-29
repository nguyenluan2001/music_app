import styled from "styled-components"
export const MenuContainer=styled.ul`
list-style-type:none;
`
export const MenuItem=styled.li`
padding:5% 0%;
a{
    color:${({theme})=>theme=='dark'?'white':'black'};
    text-decoration:none;
    font-size:1.1rem;
    &:hover{
        color:${({theme})=>theme=='dark'?'hsla(0,0%,100%,.6)':'#4ab2a9'};
    }
}
`