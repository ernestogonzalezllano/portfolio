import styled from "styled-components";
import { TABLET } from "../../utils/consts";

export const ResumeContainer = styled.section`
  padding: 1rem;
  background-color: #343436;
`;

export const CardsContainer = styled.div`
  background: #f3c26b;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2px;
  max-width: 70rem;
  margin: auto;
  margin-top: 2rem;
  @media only screen and (min-width: ${TABLET}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CardResume = styled.div`
  background-color: #343436;
  display: flex;
  padding-top: 1rem;
  position: relative;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;

  > div {
    :first-child {
      display: flex;
      justify-content: "start";
      label {
        border: 1px solid #2b2b2d;
        padding: 1rem;
        background: #2f2f31;
        font-size: 0.8rem;
        font-weight: 600;
        color: #fff;
      }
    }
    :last-child {
      margin-top: 1.5rem;
      background: #2f2f31;
      border: 1px solid #2b2b2d;
      > div {
        :first-child {
          display: flex;
          align-items: center;
          padding: 0.5rem;
          i {
            background: #343436;
            border: 1px solid #2b2b2d;
            padding: 1rem;
            color: #f3c26b;
            margin: 0 0.5rem;
          }
          > div {
            h3 {
              padding: 0;
              margin: 0;
              color: #f9f9f9;
              font-size: 1rem;
              font-weight: 400;
            }
            label {
              font-size: 0.8rem;
              color: #c1c1c1;
            }
          }
        }
        :last-child {
          padding: 0.5rem;
          p {
            line-height: 28px;
            font-weight: 500;
            font-family: "Open Sans", sans-serif;
            color: #9b9b9b;
            border-top: 2px solid #222222;
            padding: 0.5rem 0;
          }
          div {
            display: flex;
            flex-wrap: wrap;
          }
        }
      }
    }
  }
  ::before {
    content: "";
    width: 2rem;
    position: absolute;
    border: 1px solid #f3c26b;
    z-index: 100;
    top: 2.5rem;
    left: -0.5rem;
  }
  @media only screen and (min-width: ${TABLET}) {
    padding-top: ${({ index }) => (index % 2 !== 0 ? "7rem" : "0")};
    > div {
      :first-child {
        justify-content: ${({ index }) => (index % 2 === 0 ? "end" : "start")};
      }
    }
    ::before {
      ${({ index }) => {
        if (index % 2 !== 0) {
          return `
                top:7.5rem;
                left: -.5rem;
                `;
        } else {
          return `
                top:.5rem;
                right: -.5rem!important;
                left:auto;
                `;
        }
      }}
    }
  }
`;

export const SkillsLabel = styled.label`
  height: min-content;
  margin: 0.2rem;
  padding: 0.3rem;
  background: #f3c26b;
  border-radius: 9999px;
  font-size: 0.8rem;
`;
