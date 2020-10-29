import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import ToggleConfetti from "../components/toggleConfetti"
import ErrorBoundary from "../components/errorBoundary"
const IndexPage = () => (
  <ErrorBoundary>
    <Container>
      <GlobalStyle />
      <ToggleConfetti />{" "}
    </Container>
  </ErrorBoundary>
)

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`
const GlobalStyle = createGlobalStyle`
  body,html {
    background:white;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    }
    button:active:focus,
    button:focus {
    outline: 0 !important;
    outline-offset: 0 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  * ::-webkit-scrollbar {
    display: none;
  }
  input:focus,
  textarea:focus,
  div:focus,
  select:focus {
    outline: none;
  }
`

export default IndexPage
