import { memo } from "react";
import { TitleSection } from "../../styles/global";
import {
  CardsPortfolio,
  CardsPortfolioContainer,
  FilterPortfolioContainer,
  ImageCardContainer,
  InfoCardContainer,
  LabelFilterPortfolio,
  PortfolioContainer,
} from "./styles";

export function PortfolioF({
  portfolioRef,
  filterPortfolio,
  handleFilterPortfolio,
  projects,
  handleGalleryImages,
}) {
  return (
    <PortfolioContainer ref={portfolioRef}>
      <TitleSection>
        <label>Let's See My Work</label>
        <h2>MY PORTFOLIO</h2>
      </TitleSection>
      <FilterPortfolioContainer>
        <ul>
          <li>
            <LabelFilterPortfolio
              isSelected={filterPortfolio === "all"}
              name="all"
              onClick={handleFilterPortfolio}
            >
              All
            </LabelFilterPortfolio>
          </li>
          <li>
            <LabelFilterPortfolio
              isSelected={filterPortfolio === "web"}
              name="web"
              onClick={handleFilterPortfolio}
            >
              Web
            </LabelFilterPortfolio>
          </li>
          <li>
            <LabelFilterPortfolio
              isSelected={filterPortfolio === "mobile"}
              name="mobile"
              onClick={handleFilterPortfolio}
            >
              Mobile
            </LabelFilterPortfolio>
          </li>
        </ul>
      </FilterPortfolioContainer>
      <CardsPortfolioContainer>
        {projects.map(({ name, images, techs, href }) => (
          <CardsPortfolio
            key={name + Math.random().toString(36).slice(-8)}
            filterPortfolio={filterPortfolio}
          >
            <ImageCardContainer>
              <img src={`./images/${images[0]}.webp`} />
            </ImageCardContainer>
            <InfoCardContainer>
              <div>
                {techs.map((tech) => (
                  <label key={tech}>{tech}</label>
                ))}
              </div>
              <a>{name}</a>
              <button onClick={() => handleGalleryImages(images)}>
                Gallery
              </button>
            </InfoCardContainer>
          </CardsPortfolio>
        ))}
      </CardsPortfolioContainer>
    </PortfolioContainer>
  );
}

export const Portfolio = memo(PortfolioF, (prevProps, nextProps) => {
  return prevProps.filterPortfolio === nextProps.filterPortfolio;
});
