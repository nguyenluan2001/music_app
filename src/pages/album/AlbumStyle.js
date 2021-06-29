import styled from "styled-components"
export const AlbumContainer = styled.div`
table
`
export const AlbumInfo = styled.div`
display:flex;
align-items:center;
color:white;
img{
    border-radius:10px;
}
.info{
    padding-left:4%;
    .name{
        font-size:1.5rem;
        font-weight:bold;

    }
    .genres{
        background:${({theme})=>theme=="dark"?'#3c3e4d':"#f6f6f6"};
        border-radius:5px;
        text-align:center;
        padding:.5rem;
        font-weight:bold;
    }
}
`
export const Playlist = styled.table`
width:100%;
color:white;
margin-top:2rem;
tr
{
    td{
        border-bottom:1px solid #252a3c;
        padding:2% 0%;
        svg{
            cursor:pointer;
        }
    }
   
}

`