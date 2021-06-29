import styled from "styled-components"
export const AppContainer = styled.div`

`
export const MainContent = styled.div`
background:${({ theme }) => theme == 'dark' ? '#11162a' : 'white'};
margin-left:15vw;
min-height:100vh;
padding:2% 3%;
@media screen and (max-width:900px)
{
    margin:0;
}
.open_sidebar{
    display:none;
    text-align:center;
    font-size:1.5rem;
    @media screen and (max-width:900px)
    {
        display:block;
    }
}
`