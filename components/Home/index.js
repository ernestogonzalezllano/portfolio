import { useEffect, useRef, useState } from "react";
import { ImgAboutContainer,HomeContainer, NavBar,Menu, MenuButton, LabelMenu, BrandMenu, OtherContainer,Layout,PortfolioButton,AboutButton, AboutContainer } from "./styles";

export default function Home(){
    const [openMenu, setOpenMenu]=useState(false)
    const [sectionSelected, setSectionSelected]=useState("Home")
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const references = {
        Home:homeRef,
        About:aboutRef
    }
    function handleSectionSelected(e){
        e.preventDefault();
        setSectionSelected(e.target.name)
        setTimeout(function () {
            setOpenMenu(false)
        }, 150);
        window.scrollTo({top: (references[e.target.name].current.offsetTop-45), behavior: 'smooth'});
    }

    return(
        <Layout>
        <NavBar  openMenu={openMenu} >
            <BrandMenu name="Home" onClick={handleSectionSelected}>Ernesto GLL</BrandMenu>
            <MenuButton openMenu={openMenu} onClick={()=>setOpenMenu(!openMenu)}>
                <i class="fas fa-bars"></i>
            </MenuButton>
            <Menu openMenu={openMenu} >
                <li><LabelMenu isSelected={sectionSelected==="About"} name="About" onClick={handleSectionSelected}>About</LabelMenu></li>
                <li><LabelMenu isSelected={sectionSelected==="Technologies"} name="Technologies" onClick={handleSectionSelected}>Technologies</LabelMenu></li>
                <li><LabelMenu isSelected={sectionSelected==="Portfolio"} name="Portfolio" onClick={handleSectionSelected}>Portfolio</LabelMenu></li>
                <li><LabelMenu isSelected={sectionSelected==="Contact"} name="Contact" onClick={handleSectionSelected}>Contact</LabelMenu></li>
            </Menu>
        </NavBar>
        <HomeContainer ref={homeRef} >
            <h1>Hey There!</h1>
            <h1>I'm Ernesto Gonzalez Llano</h1>
            <div>
                <h3>Semi-Senior Web Developer</h3>
            </div>
            <PortfolioButton>My portfolio</PortfolioButton>
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
        <OtherContainer >
        </OtherContainer>
        </Layout>
    )
}