import { TitleSection } from "../../styles/global";
import {
  CardResume,
  CardsContainer,
  ResumeContainer,
  SkillsLabel,
} from "./styles";

export function Resume({ resumeRef }) {
  const data = [
    {
      date: "01/2021 - Actuality",
      name: "Energia Store",
      job: "Full Stack Developer SR",
      content:
        "Creation, maintenance and support of information page and sale of industrial equipment.Creation, maintenance and support of adminPage for the management of clients, products, banners and information of the main web page.",
      skills: [
        "React",
        "Redux",
        "Styled Components",
        "Firebase",
        "Nest",
        "MySql",
        "Tailwind",
        "Heroku",
        "GitHub/GitLab",
        "ClickUp",
        "Figma",
        "Scrum",
        "GitFlow",
      ],
    },
    {
      date: "08/2021 - 04/2022",
      name: "Chiper",
      job: "React Native Engineer",
      content:
        "Improvement of the mobile application in the area of shopping/recommendations. I recommended changes to improve the speed of the add to cart action. I implemented changes to the global state and We went from more than 4 seconds to add, to less than a second. I was also in charge of refactoring components and created the most used component of the app, the product carousel. My way of writing code was taken from the example to redo the architecture of the application code",
      skills: [
        "React Native",
        "Redux",
        "uxCam",
        "Firebase",
        "Segment",
        "Clevertap",
        "i18n",
        "AppCenter",
        "GitHub",
        "Slack",
        "Jira",
        "Figma",
        "Scrum",
        "GitFlow",
      ],
    },
    {
      date: "01/2021 - 08/2021",
      name: "Epayco",
      job: "Full Stack Developer SSR",
      content:
        "Maintenance and development of payment solutions in the subscription area. I was mainly in charge of the payment checkout and the payment script implementing debit payments, I was also in charge of the landing page used by Movistar (one of the main telephone lines in South America).",
      skills: [
        "React",
        "Redux",
        "PHP",
        "Symphony",
        "Mongo",
        "MySql",
        "SCSS",
        "Docker",
        "GitHub",
        "Microsoft Teams",
        "Trello",
        "Figma",
        "Scrum",
        "GitFlow",
      ],
    },
    {
      date: "10/2020 - 12/2020",
      name: "Las Rosas",
      job: "Freelance",
      content:
        "Ecommerce development for the garden industry, it has authentication with jwt, access with google and facebook. Administration section and payment gateways",
      skills: [
        "React",
        "Sass",
        "Redux",
        "Node",
        "Sequelize",
        "Express",
        "PassPort",
        "MercadoPago",
        "JWT",
      ],
    },
  ];

  return (
    <ResumeContainer ref={resumeRef}>
      <TitleSection>
        <label>Experience</label>
        <h2>MY RESUME</h2>
      </TitleSection>
      <CardsContainer>
        {data.map((exp, index) => {
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
