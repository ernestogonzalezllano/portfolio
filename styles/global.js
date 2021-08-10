import styled from "styled-components"

export const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    label{
        color: #f3c26b;
    }
    h2{
        color: #fff;
        position: relative;
        text-transform: uppercase;
        ::before{
            content: "";
            position: absolute;
            border: 1px solid;
            bottom: -9px;
            width: 100%;
        }
    }
`