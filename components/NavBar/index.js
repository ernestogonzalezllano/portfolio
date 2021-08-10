import { BrandMenu, LabelMenu, Menu, MenuButton, NavBarContainer } from "./styles";

export function NavBar({openMenu, handleSectionSelected, sectionSelected, setOpenMenu}){
    return(
        <NavBarContainer openMenu={openMenu} >
            <BrandMenu name="Home" onClick={handleSectionSelected}>Ernesto GLL</BrandMenu>
            <MenuButton openMenu={openMenu} onClick={()=>setOpenMenu(!openMenu)}>
                <i className="fas fa-bars"></i>
            </MenuButton>
            <Menu openMenu={openMenu} >
                <li><LabelMenu isSelected={sectionSelected==="About"} name="About" onClick={handleSectionSelected}>About</LabelMenu></li>
                <li><LabelMenu isSelected={sectionSelected==="Portfolio"} name="Portfolio" onClick={handleSectionSelected}>Portfolio</LabelMenu></li>
                <li><LabelMenu isSelected={sectionSelected==="Skills"} name="Skills" onClick={handleSectionSelected}>Skills</LabelMenu></li>
                <li><LabelMenu isSelected={sectionSelected==="Certs"} name="Certs" onClick={handleSectionSelected}>Certs</LabelMenu></li>
                <li><LabelMenu isSelected={sectionSelected==="Contact"} name="Contact" onClick={handleSectionSelected}>Contact</LabelMenu></li>
            </Menu>
        </NavBarContainer>
    )
}