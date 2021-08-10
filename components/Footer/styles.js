import styled from "styled-components"

export const FooterContainer = styled.footer`
background-color: #2f2f31;
padding: 3rem;
div{
    display: flex;
    width: min-content;
    margin: auto;
    a{
        margin: 0 .5rem;
        i{
            color: #fff;
        }
        :hover{
            i{
                color: #f3c26b;
            }
        }
    }
}
label{
    display: block;
    text-align: center;
    margin-top: 2rem;
    color: #fff;
    font-size: .8rem;
}
`
