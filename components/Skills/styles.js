import styled from "styled-components"
import { TABLET } from "../../utils/consts"


export const SkillsContainer = styled.section`
    background-color: #2f2f31;
    padding: 1rem;
    padding-bottom: 4rem;
    
`

export const SkillCard = styled.div`
    margin-bottom: 2rem;
    h3{
        color: #fff;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom:.5rem;
    }
    div{
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
        label{
            padding: .5rem;
            background: #f3c26b;
            border-radius: 6px;
            margin: .5rem .5rem 0 0;
            font-size: .7rem;
            font-weight: 600;
        }
    }
    
`
export const SkillCardsContainer = styled.div`
    max-width: 50rem;
    margin: auto;
    @media only screen and (min-width:${TABLET}){
            display: grid;
            column-gap: 3rem;
            grid-template-columns: 1fr 1fr;
    }
`