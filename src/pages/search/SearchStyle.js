import styled from "styled-components"
import {Link} from "react-router-dom"
export const ArtistItem = styled(Link)`
padding-right:20px;
.wrap_img{
    border-radius:50%;
    transition:transform 0.5s infinite;
    overflow:hidden;
    img{
        width:100%;
        &:hover{
            transform:scale(1.05);
        }
    }
}
text-align:center;
`