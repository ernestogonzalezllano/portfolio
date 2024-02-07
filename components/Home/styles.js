import styled from "styled-components";
import { DESKTOP, TABLET } from "../../utils/consts";

export const HomeContainer = styled.div`
  transition: all 1s;
  background-image: url("./images/desktop.webp");
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
  h1 {
    background: #80808091;
    max-width: max-content;
    margin-left: 1rem;
    border-radius: 0px 24px 100px 2px;
    padding: 0 1rem;
    position: relative;
    z-index: 250;
    ::before {
      content: "";
      border-left: 8px solid #f3c26b;
      margin-right: 0.5rem;
      position: absolute;
      z-index: 10;
      display: flex;
      height: 2.3rem;
      vertical-align: top;
      border-radius: 0 18px 0px 14px;
      width: 11px;
    }
  }
  div {
    h3 {
      background: black;
      color: #f3c26b;
      padding-left: 2rem;
      position: relative;
      z-index: 500;
    }
  }

  ::before {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 1;
    backdrop-filter: brightness(0.5) grayscale(0.2) blur(5px);
    content: "";
  }
  @media only screen and (min-width: ${TABLET}) {
  }
  @media only screen and (min-width: ${DESKTOP}) {
    h1 {
      font-size: 3rem;
      ::before {
        border-left: 12px solid #f3c26b;
        height: 3.6rem;
        border-radius: 0 4px 0px 22px;
      }
    }
    div {
      h3 {
        font-size: 2rem;
      }
    }
  }

  @keyframes initLight {
    from {
      box-shadow: inset -94px 125px 110px 225px #000000;
    }
    to {
      box-shadow: inset -94px 125px 110px 225px #00000000;
    }
  }
`;

export const PortfolioButton = styled.button`
  position: relative;
  z-index: 500;
  background: #f3c26b;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 0 1rem;
  box-sizing: border-box;
  font-weight: 900;
  font-variant-caps: all-petite-caps;
  font-size: 1rem;
  transition: all 0.4s;
  :hover {
    box-shadow: 1px 1px 8px 2px #0000008a;
    background-color: #fff;
  }
  ::before {
    content: "";
    width: 2rem;
    height: 5px;
    background: black;
    position: absolute;
    z-index: 300;
    left: 0;
  }
  @media only screen and (min-width: ${DESKTOP}) {
    width: 15rem;
  }
`;

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
  transition: transform 0.8s;
  cursor: pointer;
  :hover {
    transform: translateY(-3rem);
  }
  ::before {
    content: "";
    position: absolute;
    top: -152%;
    left: 0;
    border: 17px solid red;
    border-top-color: transparent;
    box-sizing: border-box;
    border-style: outset;
  }
`;
