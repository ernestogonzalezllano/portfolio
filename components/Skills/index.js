import { TitleSection } from "../../styles/global"
import { SKILLS } from "../../utils/consts"
import { SkillCard, SkillCardsContainer, SkillsContainer } from "./styles"

export function Skills({skillsRef}){
    return(
        <SkillsContainer ref={skillsRef} >
            <TitleSection>
                <label>Code</label>
                <h2>MY Skills</h2>
            </TitleSection>
            <SkillCardsContainer>
                {
                    Object.keys(SKILLS).map((type)=>{
                        return  <SkillCard>
                                    <h3>{type}</h3>
                                    <div>
                                        {SKILLS[type].map((skill)=><label>{skill}</label>)}
                                    </div>
                                </SkillCard>
                    })
                }
            </SkillCardsContainer>
        </SkillsContainer>
    )
}