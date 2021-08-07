import {  useEffect, useRef, useState } from "react";
import { 
    ImgAboutContainer,
    HomeContainer, 
    NavBar,
    Menu, 
    MenuButton, 
    LabelMenu, 
    BrandMenu, 
    Layout,
    PortfolioButton,
    AboutButton, 
    AboutContainer, 
    PortfolioContainer, 
    TitlePortfolioContainer, 
    FilterPortfolioContainer, 
    LabelFilterPortfolio,
    CardsPortfolioContainer,
    CardsPortfolio,
    ImageCardContainer,
    InfoCardContainer,
    ModalGallery,
    CloseModalGallery,
    ChangeImageButton,
    SkillsContainer,
    SkillCard,
    SkillCardsContainer,
    ContactContainer,
    ContactCardsContainer,
    FooterContainer,
} from "./styles";

export const Projects=[
    {
        name:"Energía Store",
        images:["estore","estore1", "estore2", "estore3", "estore4", "estore5"],
        techs:["React", "Styled components", "Bootstrap", "Redux", "NodeJs", "NestJs"],
        href:"https://www.energiastore.com/"
    }, 
    {
        name:"Admin Energía Store",
        images:["adminestore","adminestore1", "adminestore2", "adminestore3", "adminestore4", "adminestore5"],
        techs:["React", "Tailwind", "Redux", "NodeJs", "NestJs", "Firebase Auth"],
        href:"https://admin.energiastore.com/"
    },
    {
        name:"Las Rosas",
        images:["lasrosas", "lasrosas1", "lasrosas2", "lasrosas3","lasrosas4", "lasrosas5", "lasrosas6", "lasrosas7"],
        techs:["React", "Sass", "Redux", "Node", "Sequelize", "Express", "PassPort", "MercadoPago"],
        href:"https://lasrosas.herokuapp.com/"
    }, 
    {
        name:"Henry App",
        images:["henryapp1", "henryapp2", "henryapp3", "henryapp4"],
        techs:["React", "React Native", "Expo", "Apollo", "GraphQl", "React Paper", "React Navigation"],
        href:"https://expo.dev/@toti10/henryapp",
        isMobile: true
    }, 
    {
        name:"ChipDitt",
        images:["chip", "chip1", "chip2", "chip3"],
        techs:["React", "React Native", "Expo", "React Paper", "React Navigation", "Lottie"],
        href:"https://expo.dev/@toti10/ChipDitt",
        isMobile: true
    }, 
]

export const Skills={
    "Front end":[
        "Javascript",
        "Typescript",
        "React",
        "Redux",
        "Sass",
        "Styled Components",
        "Apollo"
    ],
    "Back end":[
        "NodeJs",
        "ExpressJs",
        "NestJs",
        "GraphQl",
        "Sequelize",
        "TypeORM",
        "Mongoose",
        "Passport"
    ],
    "Databases":[
        "MySql",
        "PostgreSQL",
        "MongoDb"
    ],
    "Mobile": [
        "React Native",
        "Expo"
    ],
    "Cloud services":[
        "Heroku"
    ],
    "Agile Methods":[
        "Scrum"
    ]
}

export const Contacts= [
    {
        name:"Address",
        value:"Tucumán, Argentina",
        icon:"fa fa-location-arrow",
        href:"https://www.google.com/maps?q=tucuman+argentina&um=1&ie=UTF-8&sa=X&sqi=2&ved=2ahUKEwirxuPhq5_yAhXLnpUCHabMA8IQ_AUoAnoECAEQBA"
    },
    {
        name:"WhatsApp Me",
        value:"+5493816444487",
        icon:"fab fa-whatsapp",
        href:"https://api.whatsapp.com/send?phone=5493816444487&text=Hola%20Ernesto!"
    },
    {
        name:"Email",
        value:"ernestogonzalezllano@gmail.com",
        icon:"fa fa-envelope",
        href:"mailto:ernestogonzalezllano@gmail.com"
    }
]

export const Socials =[
    {
        href:"https://www.linkedin.com/in/ernesto-gonzalez-llano/",
        icon:"fab fa-linkedin"
    },
    {
        href:"https://github.com/ernestogonzalezllano",
        icon:"fab fa-github"
    },
    {
        href:"https://drive.google.com/file/d/1zWveqwNEZF6Lt4bnyW6M0FMiBm8LdBrp/view?usp=sharing",
        icon:"fas fa-file-alt"
    },
    {
        href:"https://api.whatsapp.com/send?phone=5493816444487&text=Hola%20Ernesto!",
        icon:"fab fa-whatsapp"
    },
]

export default function Home(){
    const [openMenu, setOpenMenu]=useState(false)
    const [sectionSelected, setSectionSelected]=useState("Home")
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);
    const references = {
        Home:homeRef,
        About:aboutRef,
        Portfolio:portfolioRef,
        Skills:skillsRef,
        Contact:contactRef,
    }
    function handleSectionSelected(e){
        e.preventDefault();
        setSectionSelected(e.target.name)
        setTimeout(function () {
            setOpenMenu(false)
        }, 150);
        window.scrollTo({top: (references[e.target.name].current.offsetTop-45), behavior: 'smooth'});
    }

    const [filterPortfolio, setFilterPortfolio] = useState("all")

    function handleFilterPortfolio(e){
        setFilterPortfolio(e.target.name)
    }

    const [galleryImages, setGalleryImages] = useState(false)

    function handleGalleryImages(images){
        if(!images) setGalleryPage(0)
        setGalleryImages(images)
    }

    const [galleryPage, setGalleryPage] = useState(0)

    function handleGalleryPage(type){
        if(type){
            setGalleryPage(galleryPage+1)
        }else{
            setGalleryPage(galleryPage-1)
        }
    }

    useEffect(()=>{
        function scroll(){
            let curr = window.pageYOffset +150
            for (const ref in references) {
             let element =references[ref].current
             if(curr > element.offsetTop && curr < (element.offsetHeight+element.offsetTop)){
                setSectionSelected(ref)
             } 
            }
        }
        document.addEventListener('scroll',scroll )
        return ()=>document.removeEventListener('scroll', scroll)
    },[])
    

    return(
        <Layout>
        <NavBar  openMenu={openMenu} >
            <BrandMenu name="Home" onClick={handleSectionSelected}>Ernesto GLL</BrandMenu>
            <MenuButton openMenu={openMenu} onClick={()=>setOpenMenu(!openMenu)}>
                <i class="fas fa-bars"></i>
            </MenuButton>
            <Menu openMenu={openMenu} >
                <li><LabelMenu isSelected={sectionSelected==="About"} name="About" onClick={handleSectionSelected}>About</LabelMenu></li>
                <li><LabelMenu isSelected={sectionSelected==="Portfolio"} name="Portfolio" onClick={handleSectionSelected}>Portfolio</LabelMenu></li>
                <li><LabelMenu isSelected={sectionSelected==="Skills"} name="Skills" onClick={handleSectionSelected}>Skills</LabelMenu></li>
                <li><LabelMenu isSelected={sectionSelected==="Contact"} name="Contact" onClick={handleSectionSelected}>Contact</LabelMenu></li>
            </Menu>
        </NavBar>
        <HomeContainer ref={homeRef} >
            <h1>Hey There!</h1>
            <h1>I'm Ernesto Gonzalez Llano</h1>
            <div>
                <h3>Semi-Senior Web Developer</h3>
            </div>
            <PortfolioButton  name="Portfolio" onClick={handleSectionSelected} >My portfolio</PortfolioButton>
            <AboutButton name="About" onClick={handleSectionSelected}>It's Me!</AboutButton>
        </HomeContainer>
        <AboutContainer ref={aboutRef}>
            <ImgAboutContainer>
                <div>
                    <img src="https://i.pinimg.com/564x/17/11/e1/1711e194e2efb9254dbb875396854d8b.jpg"></img>
                </div>
            </ImgAboutContainer>
            <div>
                <label>Ernesto Gonzalez Llano</label>
                <h2>I'm a semi-senior web developer</h2>
                <p>About As a web developer I am focused on  learning  to the fullest,  adapting  and facing each and every one of the challenges assigned to me,  contributing  my experience in group and individual projects, both in backend and frontend and nourishing myself with new skills, which together with my own , allow me to increasingly maximize my ability to  transform  programs, companies, realities and lives.</p>
            </div>
        </AboutContainer>
        <PortfolioContainer ref={portfolioRef} > 
            <TitlePortfolioContainer>
                <label>Let's See My Work</label>
                <h2>MY PORTFOLIO</h2>
            </TitlePortfolioContainer>
            <FilterPortfolioContainer>
                <ul>
                    <li><LabelFilterPortfolio isSelected={filterPortfolio ==="all"} name="all" onClick={handleFilterPortfolio} >All</LabelFilterPortfolio></li>
                    <li><LabelFilterPortfolio isSelected={filterPortfolio ==="web"} name="web" onClick={handleFilterPortfolio} >Web</LabelFilterPortfolio></li>
                    <li><LabelFilterPortfolio isSelected={filterPortfolio ==="mobile"} name="mobile" onClick={handleFilterPortfolio} >Mobile</LabelFilterPortfolio></li>
                </ul>
            </FilterPortfolioContainer>
            <CardsPortfolioContainer>

                {
                    Projects.map(({name,images,techs,href})=>
                        <CardsPortfolio>
                            <ImageCardContainer>    
                                <img src={`./images/${images[0]}.png`} />
                            </ImageCardContainer>
                            <InfoCardContainer>
                                <div>
                                    {
                                        techs.map((tech)=><label>{tech}</label>)
                                    }
                                </div>
                                <a target="_blank" href={href} >{name}</a>
                                <button onClick={()=>handleGalleryImages(images)}>Gallery</button>
                            </InfoCardContainer>
                        </CardsPortfolio>
                    )
                }
            </CardsPortfolioContainer>
        </PortfolioContainer>
        {
            galleryImages 
            && 
            <ModalGallery page={galleryPage} >
                <CloseModalGallery onClick={()=>handleGalleryImages(false)} ><i class="far fa-times-circle"></i></CloseModalGallery> 
                <div>
                    {
                        galleryImages.map((image)=>(
                            <div>
                                <img src={`./images/${image}.png`} />
                            </div>
                        ))
                    }
                </div>
                <ChangeImageButton 
                    disabled={galleryPage===0}
                    onClick={()=>handleGalleryPage()} 
                >
                    {"<"}
                </ChangeImageButton>
                <ChangeImageButton 
                    disabled={galleryPage+1===galleryImages.length}
                    onClick={()=>handleGalleryPage(true)} 
                    isRight={true} 
                >
                    {">"}
                </ChangeImageButton>
                <label> {galleryPage+1} de {galleryImages.length}</label>
            </ModalGallery>
        }
        <SkillsContainer ref={skillsRef} >
            <TitlePortfolioContainer>
                <label>Code</label>
                <h2>MY Skills</h2>
            </TitlePortfolioContainer>
            <SkillCardsContainer>
                {
                    Object.keys(Skills).map((type)=>{
                        return  <SkillCard>
                                    <h3>{type}</h3>
                                    <div>
                                        {Skills[type].map((skill)=><label>{skill}</label>)}
                                    </div>
                                </SkillCard>
                    })
                }
            </SkillCardsContainer>
        </SkillsContainer>
        <ContactContainer ref={contactRef} >
            <TitlePortfolioContainer>
                <label>Get in Touch</label>
                <h2>Contact Me</h2>
            </TitlePortfolioContainer>
            <ContactCardsContainer>
                {
                    Contacts.map(({name, value, icon,href})=>(
                        <div>
                            <h3><i className={icon} /> {name}</h3>
                            <a href={href} target='_blank' >{value}</a>
                            <i className={icon} />
                        </div>
                    ))
                }
            </ContactCardsContainer>
        </ContactContainer>
        <FooterContainer>
            <div>
                {
                    Socials.map(({href,icon})=><a target="_blank" href={href}><i className={icon}></i></a>)
                }
            </div>
            <label> © 2021 All Rights Reserved </label>
        </FooterContainer>
        </Layout>
    )
}