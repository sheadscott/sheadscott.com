import App, { Container } from "next/app";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Meta from "../components/Meta";
import Header from "../components/Header";

const theme = {
  displayFont: `'Bungee Shade', Arial, Helvetica, sans-serif;`,
  bodyFont: `Roboto, Arial, Helvetica, sans-serif;`,
  black: "#000000"
};

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Bungee+Shade|Roboto');

  html, body, #screen {
    min-height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
    width: 100%;
    overflow-x: hidden;
  }

  *, *::before, *::after {
      box-sizing: inherit;
  }

  body {
    background: white;
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.bodyFont};
    font-size: 1.6rem;
    color: ${props => props.theme.black};

    h1 {
        font-family: ${props => props.theme.displayFont};
        font-size: 5.5rem;
        text-align: center;
    }

    a {
      color: ${props => props.theme.black};
      text-decoration: none;
    }
  }

`;

class CustomApp extends App {
  state = {};

  // static async getInitialProps({ router }) {
  //   console.log('request', router);
  //   return {};
  // }

  componentDidMount() {}

  render() {
    const { Component } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <StyledPage>
            <Meta />
            <GlobalStyle />
            <Header handleClick={this.handleClick} />
            {/* Page Data */}
            <Component />
            {/* End Page Data */}
          </StyledPage>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default CustomApp;

const StyledPage = styled.div`
  background: white;
  box-shadow: 12px 0 15px -4px rgba(0, 0, 0, 0.2),
    -12px 0 8px -4px rgba(0, 0, 0, 0.2);
  box-shadow: 0 9px 0px 0px white, 0 -9px 0px 0px white,
    12px 0 15px -4px rgba(0, 0, 0, 0.2), -12px 0 15px -4px rgba(0, 0, 0, 0.2);

  margin: 0 auto;
  padding: 0 2rem;
  max-width: 1068px;
  min-height: 100%;

  img {
    max-width: 100%;
  }
`;
