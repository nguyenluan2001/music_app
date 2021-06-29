import styled from "styled-components"
export const TopActionContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
margin-bottom:2rem;
.input-group-prepend{
    .input-group-text{
        border:none;
        background:${({ theme }) => theme == "dark" ? "#3c3e4d!important" : "#f3f3f5!important"};
        svg{
            color:${({ theme }) => theme == "dark" ? "white" : "black"};
        }
    }
    form{

        background:#3c3e4d!important;
        
    }
}
input{
    border:none;
    background:${({ theme }) => theme == "dark" ? "#3c3e4d" : "#f3f3f5"};
    color:white;
    &::placeholder{
        color:${({ theme }) => theme == "dark" ? "white" : "black"};
    }
    &:focus{
        background:${({ theme }) => theme == "dark" ? "#3c3e4d" : "#f3f3f5"};
        color:${({ theme }) => theme == "dark" ? "white" : "black"};
    }
}
.custom-control-label::before{
    background:#3c3e4d;
}
.custom-control-label::after{
    background:#f0ef0b;
}
.input-group{
    @media screen and (max-width:900px)
    {
        display:none;
    }
}
.search_responsive{
    display:none;
    position:relative;
    margin-bottom:0!important;
    min-width:1px;
    .input-group-prepend{
        position:absolute;
        height:fill-available;
        .input-group-text{
            border:none;
            background:${({ theme }) => theme == "dark" ? "#3c3e4d!important" : "#f3f3f5!important"};
            svg{
                color:${({ theme }) => theme == "dark" ? "white" : "black"};
            }
        }
    }
    form{
        width:80%;
        padding-left:10%;
        input{
            width:0px;
            transition:width 0.5s ease-in-out;
            padding:0;
            border:none;

        }
    }
   &:hover{
       form{
           input{
               width:100%;
               padding: .375rem .75rem;

           }
       }
   }
    @media screen and (max-width:900px)
    {
        display:inline-block;
    }
}
`