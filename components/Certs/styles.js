import styled from "styled-components"
import { DESKTOP, TABLET } from "../../utils/consts"


export const CertsContainer = styled.section`
    background-color: #343436;
    padding: 1rem;  

    @media only screen and (min-width:${DESKTOP}){
        padding: 3rem 1rem ;
    }
`

export const CardCertsContainer = styled.div`
    display: flex;
    max-width: 16rem;
    justify-content: space-between;
    margin: auto;
    overflow: hidden;
    >div{
        display: flex;
    }

    @media only screen and (min-width:${TABLET}){
        max-width: 24rem;
    }

    

`

export const CardCerts = styled.div`
    order:${({position})=>position};
    width: 8rem;
    flex-shrink: 0;
    ${({animation})=>!animation &&"animation: animate 1s;"}
    position:relative;
    a{
        text-decoration: none;
        img{
            width: 100%;
            transition: transform .5s;
        }
        label{
            color: white;
            display: block;
            text-align: center;
            filter:opacity(0);
            transition: filter .5s;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: grey;
            padding: .5rem;
            z-index:500;
            cursor: pointer;    
        }
        :hover{
            img{
                transition: transform .5s;
                transform: scale(1.2);
            }
            label{
                filter:opacity(1);
                transition: filter .5s;
            }
        }
    }
    @keyframes animate{
        from{
            transform: translateX(-8rem);
        }
        to{
            transform: translateX(0);
        }
    }

    
`
