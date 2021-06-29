import styled from "styled-components"
export const SidebarContainer=styled.div`
width:15vw;
height:100vh;
position:fixed;
background:${({theme})=>theme=='dark'?'#2c3856':'#f3f3f5'};
padding-top:4%;
@media screen and (max-width:900px)
{
    display:none;
}
`