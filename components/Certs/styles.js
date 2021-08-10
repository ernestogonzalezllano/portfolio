import styled from "styled-components"
import { DESKTOP } from "../../utils/consts"


export const CertsContainer = styled.section`
    background-color: #343436;
    padding: 1rem;  

    @media only screen and (min-width:${DESKTOP}){
        padding: 3rem 1rem ;
    }
`

export const CardCertsContainer = styled.div`
    display: flex;
    max-width: 20rem;
    justify-content: space-between;
    margin: auto;
    margin-top: 2rem;
    div{
        width: 8rem;
        a{
            img{
                width: 100%;
                transition: transform .5s;
                :hover{
                    transition: transform .5s;
                    transform: scale(1.2);
                }
            }
        }
    }

`