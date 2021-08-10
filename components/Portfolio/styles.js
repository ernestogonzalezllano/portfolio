import styled from "styled-components"
import {  TABLET } from "../../utils/consts"

export const PortfolioContainer = styled.div`
    background-color: #343436;
    padding: 1rem;
    padding-bottom: 4rem;
`

export const FilterPortfolioContainer = styled.div`
    ul{
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        justify-content: center;
        li{
            margin: 1rem;
        }
    }
  
`

export const LabelFilterPortfolio = styled.a`
    color: ${({isSelected})=>isSelected?"#f3c26b":"#fff"};
    position: relative;
    cursor: pointer;
    ::before{
        content: "";
        display: ${({isSelected})=>isSelected?"block":"none"};
        position: absolute;
        bottom:-3px;
        width: 100%;
        left: 0;
        animation-duration:.5s;
        animation-name: ${({isSelected})=>isSelected?"selectFilter":""};
        animation-fill-mode: forwards;
        border: 1px solid #f3c26b;
        @keyframes selectFilter{
            from {
                transform:scaleX(0);
            }
            to{
                transform:scaleX(1);
            }
        }
    }

`

export const CardsPortfolioContainer = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit,minmax(min(100%,18rem),.3fr));
    justify-content: center;
    @media only screen and (min-width:${TABLET}){
        padding:0 3rem;
    }
`




export const ImageCardContainer = styled.div`
    height: 100%;
    display: flex;
    width: 100%;
    padding: 2px;
    box-sizing: border-box;
    img{
        width:100%
    }
`

export const InfoCardContainer = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    width: 100%;
    height:100%;
    padding: 1rem;
    box-sizing: border-box;
    flex-wrap: wrap;
    transition: backdrop-filter .5s, filter .5s;
    filter: opacity(0);
    div{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        height: fit-content;
        label{
            height: min-content;
            margin: .2rem;
            padding: .3rem;
            background: #f3c26b;
            border-radius: 9999px;
            font-size: .8rem;
        }
    }
    a{
        width: 100%;
        text-align: center;
        font-size: 2rem;
        color: white;
        margin: .5rem;
        text-decoration: none;
        :hover{
            color:#f3c26b;
        }
    }
    button{
        background: none;
        outline: none;
        color: #f3c26b;
        border: 1px solid;
        border-radius: .5rem;
        padding: 0 1rem;
        width: 100%;
        text-transform: uppercase;
        font-weight: 900;
    }
`


export const CardsPortfolio = styled.div`
    position: relative;
    animation: ${()=>"showed 1s;"};
    @keyframes showed{
        from{
            filter: blur(5px);
        }
        to{
            filter: blur(0);
        }
    }
    
    :hover{
        ${InfoCardContainer} {
            transition: backdrop-filter .5s, filter .5s;
            backdrop-filter: brightness(0.1);
            filter: opacity(1);
        }
    }
`