import { 
    HomeContainer, 
    PortfolioButton,
    AboutButton, 
} from "./styles";


export function Home({homeRef, handleSectionSelected}){
    return(
        <HomeContainer ref={homeRef} >
            <h1>Hey There!</h1>
            <h1>I'm Ernesto Gonzalez Llano</h1>
            <div>
                <h3>Semi-Senior Web Developer</h3>
            </div>
            <PortfolioButton  name="Portfolio" onClick={handleSectionSelected} >My portfolio</PortfolioButton>
            <AboutButton name="About" onClick={handleSectionSelected}>It's Me!</AboutButton>
        </HomeContainer>
    )
}