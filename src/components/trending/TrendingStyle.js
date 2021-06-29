import styled from "styled-components"
import {Link} from "react-router-dom"
export const TrendingContainer=styled.div`

`
export const TrendItemContainer=styled(Link)`
img{
    border-radius:10px;
}
.name{
    color:${({theme})=>theme=='dark'?'white':'black'};
    font-size:1.1rem;
    font-weight:bold;
}
`