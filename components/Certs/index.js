import React, { useEffect, useState } from "react";
import { TitleSection } from "../../styles/global";
import { CERTS } from "../../utils/consts";
import { CardCerts, CardCertsContainer, CertsContainer } from "./styles";

export function CertsF({ certsRef }) {
  const [position, setPosition] = useState(0);

  const [hover, setHover] = useState(false);

  function handleSetPosition() {
    if (position === CERTS.length - 1) setPosition(0);
    else setPosition(position + 1);
  }

  useEffect(() => {
    if (!hover) {
      const timerId = setInterval(() => {
        handleSetPosition();
      }, 3000);
      return () => clearInterval(timerId);
    }
  });

  function handlePosition(i) {
    if (i + position < CERTS.length) {
      return i + position;
    }
    return i + position - CERTS.length;
  }

  return (
    <CertsContainer ref={certsRef}>
      <TitleSection>
        <label>Certifications And Courses</label>
        <h2>MY CERTIFICATIONS</h2>
      </TitleSection>
      <CardCertsContainer>
        <div>
          {CERTS.map(({ img, href, text }, i) => (
            <CardCerts
              key={i + Math.random().toString(36).slice(-8)}
              position={handlePosition(i)}
              animation={hover}
            >
              <a href={href} target="_blank">
                <label>{text}</label>
                <img src={`./images/${img}.webp`} />
              </a>
            </CardCerts>
          ))}
        </div>
      </CardCertsContainer>
    </CertsContainer>
  );
}

export const Certs = React.memo(CertsF);
