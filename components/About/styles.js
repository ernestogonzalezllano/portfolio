import styled from "styled-components"
import { DESKTOP, TABLET } from "../../utils/consts"


export const AboutContainer = styled.div`
    background: #2f2f31;
    div{
        padding:3rem;
        align-self: center;
        label{
            color: #f3c26b;
            position: relative;
            ::before{
                content: "";
                position: absolute;
                height: 0;
                width: 1rem;
                top: .5rem;
                border: 1px solid;
                left: -1.5rem;
            }
        }
        h2{
            color: #fff;
        }
        p{
            color: grey;
        }
    }
    @media only screen and (min-width:${TABLET}){
        div{
            padding: 3rem 25%;
        }
    }
    @media only screen and (min-width:${DESKTOP}){
        display: grid;
        grid-template-columns: 1fr 1fr;
        div{
            padding: 3rem;
        }
    }
`

export const ImgAboutContainer = styled.div`
    div{
        position:relative;
        padding:0;
        max-width: 25rem;
        margin: 0 auto;
        img{
            box-sizing: border-box;
            width: 100%;
            box-shadow: -1rem 1rem 0px #f3c26b;
            position: relative;
            z-index:10;
            max-width: 25rem;
        }
        ::before{
            content: "";
            background-image: url(dots.png);
            position: absolute;
            width: 4rem;
            height: 4rem;
            top: -1rem;
            left: -2rem;
            background-size: 8rem;
            opacity: .3;
        }
        ::after{
            content: "";
            background-image: url(dots.png);
            position: absolute;
            width: 4rem;
            height: 4rem;
            bottom: -2rem;
            right: -1rem;
            background-size: 8rem;
            z-index:0;
            opacity: .3;
        }
    
        @media only screen and (min-width:${TABLET}){
            ::before{
                width: 6rem;
                height: 6rem;
                top: -1rem;
                left: -2rem;
                background-size: 8rem
            }
            ::after{
                width: 6rem;
                height: 6rem;
                bottom: -2rem;
                right: -2rem;
                background-size: 8rem
            }
        }

    }
`