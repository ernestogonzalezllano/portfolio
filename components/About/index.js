import { AboutContainer, ImgAboutContainer } from "./styles";

export function About({ aboutRef }) {
  return (
    <AboutContainer ref={aboutRef}>
      <ImgAboutContainer>
        <div>
          <img src="desktop_new.webp"></img>
        </div>
      </ImgAboutContainer>
      <div>
        <label>Ernesto Gonzalez Llano</label>
        <h2>I'm a semi-senior web developer</h2>
        <p>
          About As a web developer I am focused on learning to the fullest,
          adapting and facing each and every one of the challenges assigned to
          me, contributing my experience in group and individual projects, both
          in backend and frontend and nourishing myself with new skills, which
          together with my own , allow me to increasingly maximize my ability to
          transform programs, companies, realities and lives.
        </p>
      </div>
    </AboutContainer>
  );
}
