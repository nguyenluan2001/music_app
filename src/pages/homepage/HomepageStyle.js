import styled from "styled-components"
export const HomepageContainer=styled.div``
export const MiddleContent=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-column-gap:40px;
@media screen and (max-width:900px)
{
    display:block;
}
`