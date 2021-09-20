import {  useEffect, useRef, useState } from "react";
import { About } from "../About";
import { ModalGallery } from "../ModalGallery";
import { Portfolio } from "../Portfolio";
import { Skills } from "../Skills";
import { Certs } from "../Certs";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";
import { Home } from "../Home";
import { LayoutContainer } from "./styles";
import { PROJECTS } from "../../utils/consts";
import { Resume } from "../Resume/Resume";

export default function Layout(){
    const [openMenu, setOpenMenu]=useState(false)
    const [sectionSelected, setSectionSelected]=useState("Home")
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);
    const certsRef = useRef(null);
    const resumeRef = useRef(null);

    const references = {
        Home:homeRef,
        About:aboutRef,
        Portfolio:portfolioRef,
        Skills:skillsRef,
        Contact:contactRef,
        Certs:certsRef,
        Resume:resumeRef,

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

    function handleFilterPortfolio({target:{name}}){
        setFilterPortfolio(name)
        if(name === "all") setProjects(PROJECTS)
        else if(name === "web") setProjects(PROJECTS.filter((project)=>!project.isMobile))
        else setProjects(PROJECTS.filter((project)=>project.isMobile))

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
            let curr = window.pageYOffset +250
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

    const [projects, setProjects] = useState(PROJECTS)
    

    return(
        <LayoutContainer>
            <NavBar
                openMenu={openMenu}
                handleSectionSelected={handleSectionSelected}
                sectionSelected={sectionSelected}
                setOpenMenu={setOpenMenu}
            />
            <Home
                homeRef={homeRef}
                handleSectionSelected={handleSectionSelected}
            />
            <About 
                aboutRef={aboutRef} 
            />
            <Portfolio 
                portfolioRef={portfolioRef} 
                filterPortfolio={filterPortfolio} 
                handleFilterPortfolio={handleFilterPortfolio} 
                projects={projects}
                handleGalleryImages={handleGalleryImages} 
            />
            {
                galleryImages 
                && 
                <ModalGallery
                galleryPage={galleryPage}
                galleryImages={galleryImages}
                handleGalleryImages={handleGalleryImages}
                handleGalleryPage={handleGalleryPage}
                />
            }
            <Resume 
                resumeRef={resumeRef}
            />
            <Skills 
                skillsRef={skillsRef}
            />
            <Certs
                certsRef={certsRef}
            />
            <Contact
                contactRef={contactRef}
            />
            <Footer/>
        </LayoutContainer>
    )
}