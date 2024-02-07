import styled from "styled-components";
import { DESKTOP, TABLET } from "../../utils/consts";

export const ContactContainer = styled.section`
  background-color: #2f2f31;
  padding: 1rem;
  padding-bottom: 4rem;
  background-image: url("./images/map_img.webp");
  background-position-y: 55%;
  background-position-x: 18%;
  background-blend-mode: color-burn;

  @media only screen and (min-width: ${TABLET}) {
    background-position-y: 57%;
    background-position-x: 39%;
  }
`;

export const ContactCardsContainer = styled.div`
  div {
    padding: 1rem;
    background: #343436;
    border: 1px solid #2b2b2d;
    margin: 1rem;
    position: relative;
    min-width: 260px;
    box-sizing: border-box;
    h3 {
      color: #fff;
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1rem;
      i {
        color: #f3c26b;
        padding: 8px;
        backdrop-filter: brightness(0.8);
        border-radius: 3px;
        margin-right: 4px;
      }
    }
    a {
      font-size: 0.8rem;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
      position: relative;
      z-index: 500;
      text-decoration: none;
      :hover {
        color: #f3c26b;
      }
    }
    > i {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 2.5rem;
      z-index: 0;
      color: #404040;
    }
  }
  @media only screen and (min-width: ${TABLET}) {
    display: flex;
    max-width: 50rem;
    margin: auto;
    overflow: none;
    flex-flow: wrap;
    justify-content: center;
  }
  @media only screen and (min-width: ${DESKTOP}) {
    max-width: 62rem;
  }
`;
