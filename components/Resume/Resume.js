import { TitleSection } from "../../styles/global";
import { RESUME_DATA } from "../../utils/consts";
import {
  CardResume,
  CardsContainer,
  ResumeContainer,
  SkillsLabel,
} from "./styles";

export function Resume({ resumeRef }) {
  return (
    <ResumeContainer ref={resumeRef}>
      <TitleSection>
        <label>Experience</label>
        <h2>MY RESUME</h2>
      </TitleSection>
      <CardsContainer>
        {RESUME_DATA.map((exp, index) => {
          return (
            <CardResume index={index}>
              <div>
                <label>{exp.date}</label>
              </div>
              <div>
                <div>
                  <i className={"fa fa-briefcase"}></i>
                  <div>
                    <h3>{exp.job}</h3>
                    <label>{exp.name}</label>
                  </div>
                </div>
                <div>
                  <p>{exp.content}</p>
                  <div>
                    {exp.skills?.map((e) => (
                      <SkillsLabel>{e}</SkillsLabel>
                    ))}
                  </div>
                </div>
              </div>
            </CardResume>
          );
        })}
      </CardsContainer>
    </ResumeContainer>
  );
}
