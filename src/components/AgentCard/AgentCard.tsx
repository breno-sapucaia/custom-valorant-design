import React from "react";
import { Background, Container, Description, Skills } from "./styled";
export interface AgentCardProps {
  name: string;
  region: string;
  imageSource: string;
  active: boolean;
  skills: JSX.Element;
}

export function AgentCard({
  name,
  region,
  skills,
  active,
  imageSource,
}: AgentCardProps) {
  return (
    <Container active={active}>
      <Background className="background">
        <img src={imageSource} alt={`${name} photo`} />
      </Background>
      <Description className="description">
        <p className="region">{region}</p>
        <p className="name">{name}</p>
      </Description>
      <Skills className="skills"> {skills}</Skills>
    </Container>
  );
}
