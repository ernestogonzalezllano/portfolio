import { useState } from "react";
import { Container, NavBar,Menu, MenuButton, LabelMenu } from "./styles";

export default function Home(){
    const[openMenu, setOpenMenu]=useState(false)
    const [sectionSelected, setSectionSelected]=useState("Home")
    function handleSectionSelected(e){
        e.preventDefault();
        setSectionSelected(e.target.name)
    }
    return(
        <>
        <NavBar openMenu={openMenu} >
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
        <Container>
        </Container>
        </>
    )
}