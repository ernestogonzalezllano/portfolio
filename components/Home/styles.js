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
    position: absolute;
    overflow: hidden;
    z-index: 100;
    @media only screen and (min-width: ${TABLET}) {
    }
    @media only screen and (min-width:${DESKTOP}){
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