import styled from "styled-components"
import { DESKTOP, TABLET } from "../../utils/consts"

//background: #343436;
export const Container = styled.div`
    transition: all 1s;
    background-image: url("./images/desktop.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    top: 0;
    left: 0;
    background-size: cover;
    height: 100vh;
    min-height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: initLight 15s;
    h1{
        background: #80808091;
        max-width: max-content;
        margin-left: 1rem;
        border-radius: 0px 24px 100px 2px;
        padding: 0 1rem;
        position: relative;
        z-index:250;
        ::before{
            content: "";
            border-left: 8px solid #f3c26b;
            margin-right: .5rem;
            position: absolute;
            z-index: 10;
            display: flex;
            height: 2.3rem;
            vertical-align: top;
            border-radius: 0 18px 0px 14px;
            width: 11px;
        }
    }
    div{
        h3{
            background: black;
            color: #f3c26b;
            padding-left: 2rem;
            position: relative;
            z-index:500
        }
    }

    ::before{
        position: absolute;
        width: 100%;
        height: 100vh;
        z-index:1;
        backdrop-filter: brightness(0.5) grayscale(.2) blur(5px);
        content: "";
    }
    @media only screen and (min-width: ${TABLET}) {
    }
    @media only screen and (min-width:${DESKTOP}){
        h1{
            font-size:3rem;
            ::before{
                border-left: 12px solid #f3c26b;
                height:3.6rem;
                border-radius: 0 4px 0px 22px;
            }
        }
        div{
            h3{
                font-size:2rem;
            }
        }

    }

    @keyframes initLight{
        from {
            box-shadow: inset -94px 125px 110px 225px #000000;
        }
        to{
            box-shadow: inset -94px 125px 110px 225px #00000000;
        }
    }
`

export const NavBar = styled.div`
    position: fixed;
    top: 0;
    z-index: 200;
    border-radius: 0 0 9999px;
    transition: background 1s;
    width: 100vw;

    display: grid;
    grid-template-columns: max-content auto;

    animation-duration:1s;
    animation-name: ${({openMenu})=>openMenu?"openMenuNav":"closeMenuNav"};
    animation-fill-mode: forwards;
    @keyframes openMenuNav{
        from{
            box-shadow: 2px 1px 2px #474545;
            background: #70707057;

        }
        to{
            background: #707070b8;
            box-shadow: -13px 3px 3px #474545;
        }
    }
    @keyframes closeMenuNav{
        from{
            background: #707070b8;
            box-shadow: -13px 3px 3px #474545;
        }
        to{
            box-shadow: 2px 1px 2px #474545;
            background: #70707057;
        }
    }

    @media only screen and (min-width:${DESKTOP}){
        background: #707070b8;
        display: flex;
    }
`

export const Menu = styled.ul`
    margin: 0;
    overflow: hidden;

    grid-column-end: 3;
    grid-column-start: 1;

    animation-duration:1s;
    animation-name: ${({openMenu})=>openMenu?"openMenu":"closeMenu"};
    animation-fill-mode: forwards;
    li{
        align-self: center;
        list-style: none;
        margin: .5rem;
    }
    @media only screen and (min-width:${DESKTOP}){
        animation: none;
        display:flex;
        height:auto;
    }
    @keyframes openMenu{
        from{
            max-height:0px;
        }
        to{
            max-height:150px;
        }
    }
    @keyframes closeMenu{
        from{
            max-height:150px;
        }
        to{
            max-height:0px;
        }
    }
`
export const LabelMenu = styled.a`
    cursor: pointer;
    position: relative;
    transition: color .5s;
    color: ${({isSelected})=>isSelected?"#f3c26b":"#000"};
    font-weight: 500;
    ::before{
        position: absolute;
        height: 2px;
        content: "";
        width: 100%;
        border-radius: 45% 0% 120% 0%;
        bottom: -2px;
        transition: background, transform .5s;
        background: ${({isSelected})=>isSelected?"#f3c26b":"#000"};
        transform: ${({isSelected})=>isSelected?"scaleX(1)":"scaleX(0)"};
    }
    @media only screen and (min-width:${DESKTOP}){
        font-size:1.2rem;
        text-transform: uppercase;
    }
`

export const MenuButton = styled.button`
    width: 100%;
    text-align: right;
    background: transparent;
    border: none;
    outline: none;
    padding: .5rem;
    font-size: 2rem;   
    margin-left: 1rem;
    @media only screen and (min-width:${DESKTOP}){
        display:none;
    }
    i{
        margin-right: 2rem;
        animation-duration:1s;
        animation-name: ${({openMenu})=>openMenu?"openMenuButton":"closeMenuButton"};
        animation-fill-mode: forwards;
    }
    @keyframes openMenuButton{
        from{
            transform: rotateZ(0deg);
            color: #000;
        }
        to{
            transform: rotateZ(90deg);
            color: #f3c26b;

        }
    }
    @keyframes closeMenuButton{
        from{
            transform: rotateZ(90deg);
            color: #f3c26b;
        }
        to{
            transform: rotateZ(0deg);
            color: #000;
        }
    }
`
export const BrandMenu = styled.a`
    font-size: 1.5rem;
    padding: .5rem;
    font-weight: 500;
    align-self: center;
    cursor: pointer;
`

export const OtherContainer = styled.div`
    height:400vh;
`

export const Layout = styled.div`
`

export const PortfolioButton = styled.button`
    position: relative;
    z-index: 500;
    background: #f3c26b;
    border: none;
    outline: none;
    cursor: pointer;
    padding: .5rem 1rem;
    border-radius: 5px;
    margin: 0 1rem;
    box-sizing: border-box;
    font-weight: 900;
    font-variant-caps: all-petite-caps;
    font-size: 1rem;
    transition: all .4s;
    :hover{
        box-shadow: 1px 1px 8px 2px #0000008a;
        background-color: #fff;
    }
    ::before{
        content: "";
        width: 2rem;
        height: 5px;
        background: black;
        position: absolute;
        z-index: 300;
        left: 0;
    }
    @media only screen and (min-width:${DESKTOP}){
        width: 15rem;
    }

`

export const AboutButton = styled.button`
    position: absolute;
    z-index: 300;
    bottom: -3rem;
    left: 50%;
    background: none;
    border: none;
    outline: none;
    width: min-content;
    color: white;
    transition: transform .8s;
    cursor: pointer;
    :hover{
        transform: translateY(-3rem);
    }
    ::before{
        content: "";
        position: absolute;
        top: -152%;
        left: 0;
        border: 17px solid red;
        border-top-color: transparent;
        box-sizing: border-box;
        border-style: outset;
    }
`