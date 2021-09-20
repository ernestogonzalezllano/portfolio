import { TitleSection } from "../../styles/global";
import { CardResume, CardsContainer, ResumeContainer } from "./styles";

export function Resume ({resumeRef}){

    const data = [{
        date:"08/2021 - Actuality",
        name:"Chiper",
        job:"React Native Engineer",
        content:"Development and maintenance of mobile app with react native for a company dedicated to e-commerce"
    },
    {
        date:"01/2021 - Actuality",
        name:"Energia Store",
        job:"Full Stack Developer SR",
        content:"Web app development manager, backend, admin and frontend"
    },
    {
        date:"01/2021 - 08/2021",
        name:"Epayco",
        job:"Full Stack Developer SSR",
        content:"Development, layout and support in the payment gateway subscriptions area"
    },
    {
        date:"10/2020 - 12/2020",
        name:"Las Rosas",
        job:"Freelance",
        content:"Ecommerce development for the nursery industry, it has authentication with jwt, access with google and facebook. Administration section and payment gateways"
    }
];

    return (
        <ResumeContainer ref={resumeRef}>
            <TitleSection>
                <label>Experience</label>
                <h2>MY RESUME</h2>
            </TitleSection>
            <CardsContainer>
            {
                data.map((exp, index)=>{
                    return <CardResume index={index} >
                        <div><label>{exp.date}</label></div>
                        <div>
                            <div>
                                <i className={"fa fa-briefcase"}></i>
                                <div>
                                    <h3>{exp.job}</h3>
                                    <label >{exp.name}</label>
                                </div>
                            </div>
                            <div>
                                <p>{exp.content}</p>
                            </div>
                        </div>
                        </CardResume>
                })
            }
            </CardsContainer>
        </ResumeContainer>
    )
}