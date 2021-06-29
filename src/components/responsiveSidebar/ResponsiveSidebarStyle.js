import styled from "styled-components"
export const ResponsiveSidebarContainer=styled.div`
width:100vw;
height:100vh;
background:${({theme})=>theme=='dark'?'#2c3856':"#f3f3f5"};
// display:${({showSidebar})=>showSidebar?'block':"none"};
transform:${({showSidebar})=>!showSidebar?'translateY(-1000px)':"translateY(0px)"};
transition:transform 0.5s ease-in-out;
position:fixed;
left:0;
right:0;
top:0;
bottom:0;
z-index:10;
.close_menu{
    font-size:2rem;
    padding:10px;
    cursor:pointer;
}
@media screen and (min-width:900px)
{
    display:none;
}
`
export const Menu=styled.ul`
list-style-type:none;
padding:0;
`
export const MenuItem=styled.li`
font-size:2rem;
a{
    color:${({theme})=>theme=='dark'?'white':'black'};
    text-decoration:none;
    &:hover{
        color:yellow;
    }
}
`
export const WrapMenu=styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
height:100%;
`