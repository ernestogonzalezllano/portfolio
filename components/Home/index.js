import { useEffect, useRef, useState } from "react";
import { Container, NavBar,Menu, MenuButton, LabelMenu, BrandMenu, OtherContainer,Layout,PortfolioButton,AboutButton } from "./styles";

export default function (){
    const [openMenu, setOpenMenu]=useState(false)
    const [sectionSelected, setSectionSelected]=useState("Home")
    const homeRef = useRef(null);
    const otherRef = useRef(null);
    const references = {
        Home:homeRef,
        Contact:otherRef
    }
    function handleSectionSelected(e){
        e.preventDefault();
        setSectionSelected(e.target.name)
        setTimeout(function () {
            setOpenMenu(false)
        }, 150);
        window.scrollTo({top: references[e.target.name].current.offsetTop, behavior: 'smooth'});
    }

    return(
        <Layout>
        <NavBar  openMenu={openMenu} >
            <BrandMenu name="Home" onClick={handleSectionSelected}>Ernesto GLL</BrandMenu>
            <MenuButton openMenu={openMenu} onClick={()=>setOpenMenu(!openMenu)}>
                <i class="fas fa-bars"></i>
            </MenuButton>
            <Menu openMenu={openMenu} >
                <li><LabelMenu isSelected={sectionSelected==="Home"} name="Home" onClick={handleSectionSelected}>Home</LabelMenu></li>
                <li><LabelMenu isSelected={sectionSelected==="About"} name="About" onClick={handleSectionSelected}>About</LabelMenu></li>
                <li><LabelMenu isSelected={sectionSelected==="Technologies"} name="Technologies" onClick={handleSectionSelected}>Technologies</LabelMenu></li>
                <li><LabelMenu isSelected={sectionSelected==="Contact"} name="Contact" onClick={handleSectionSelected}>Contact</LabelMenu></li>
            </Menu>
        </NavBar>
        <Container ref={homeRef} >
            <h1>Hey There!</h1>
            <h1>I'm Ernesto Gonzalez Llano</h1>
            <div>
                <h3>Semi-Senior Web Developer</h3>
            </div>
            <PortfolioButton>My portfolio</PortfolioButton>
            <AboutButton name="About" onClick={handleSectionSelected}>It's Me!</AboutButton>
        </Container>
        <OtherContainer ref={otherRef}>
        </OtherContainer>
        </Layout>
    )
}