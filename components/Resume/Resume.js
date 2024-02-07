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
        {RESUME_DATA.map(({ name, content, date, job, skills }, index) => {
          return (
            <CardResume
              key={name + Math.random().toString(36).slice(-8)}
              index={index}
            >
              <div>
                <label>{date}</label>
              </div>
              <div>
                <div>
                  <i className={"fa fa-briefcase"}></i>
                  <div>
                    <h3>{job}</h3>
                    <label>{name}</label>
                  </div>
                </div>
                <div>
                  <p>{content}</p>
                  <div>
                    {skills?.map((e) => (
                      <SkillsLabel key={e}>{e}</SkillsLabel>
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
