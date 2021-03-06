import styled from "styled-components"
import { theme } from "../theme"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "logo actions";
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.bg.wash};
  z-index: 3;
  box-shadow: "none"};
  transition: all 0.2s ease-in-out;
  @media (max-width: 968px) {
    padding: 8px 16px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "logo actions";
  }
`

export const Logo = styled.h1`
  grid-area: logo;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.text.default};
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  a {
    color: ${theme.text.tertiary};
    display: flex;
    align-items: center;
  }
  a:hover {
    color: ${theme.text.default};
  }
  .icon {
    margin-right: 16px;
  }
`

export const ButtonRowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-area: actions;
  align-items: center;
  @media (max-width: 968px) {
  }
`
