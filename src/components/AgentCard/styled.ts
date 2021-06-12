import styled, { css } from "styled-components";

interface ContainerProps {
  active: boolean;
}
export const Container = styled.div<ContainerProps>`
  position: relative;

  display: block;
  width: 27.5rem;
  height: 61.875rem;

  ${({ active }) =>
    active
      ? css`
          > div.background,
          div.skills {
            background-color: var(--background-color-white-500);
          }
          > div.description > p.name {
            color: black;
            -webkit-text-stroke: 1px black;
            -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: black;
          }
          > div.skills {
            border-color: var(--background-color-500);
            > svg {
              fill: var(--background-color-500);
            }
          }
        `
      : null}
`;

export const Background = styled.div`
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 14px, 14px 0);
  background-color: var(--background-color-500);
  width: 100%;
  min-height: 100%;
  position: relative;
  > img {
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
  }
`;

export const Description = styled.div`
  font-family: "Druk Wide";
  position: absolute;
  margin-top: 120px;
  transform: rotate(90deg) translateY(102%);
  top: 0;
  left: 0;
  > p.name {
    color: black;
    text-transform: uppercase;
    font-size: 4.5rem;
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
  }

  > p.region {
    color: var(--secondary-text-500);
  }
`;

export const Skills = styled.div`
  position: absolute;
  transform: translate(6.82%, 7.05%);
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--background-color-white-500);
  bottom: 0;
  left: 0;
  right: 0;
  height: 6.875rem;
  padding-left: 2.625rem;
  padding-right: 2.625rem;

  background-color: var(--background-color-500);
  border: 2px solid var(--background-color-white-500);

  > svg {
    fill: var(--background-color-white-500);
  }
`;
