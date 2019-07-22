import App, { Container } from 'next/app';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Meta from '../components/Meta';
import Header from '../components/Basics';

const theme = {
  displayFont: `'Merriweather', Arial, Helvetica, sans-serif;`,
  bodyFont: `Lato, Helvetica, Arial, sans-serif;`,
  black: '#333',
};

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Merriweather:700|Lato&display=swap');

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
    padding: 0;
    margin: 0;
  }

  body {
    /* background: #680000; */
    background: #333;
    font-family: ${props => props.theme.bodyFont};
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${props => props.theme.black};

    h1, h2, h3, h4, h5 {
      font-family: ${props => props.theme.displayFont};
    }

    h1 {
      font-size: 5.5rem;
      text-align: center;
    }

    h2, h3 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.6rem;
    }

    a {
      color: ${props => props.theme.black};
      text-decoration: none;
    }

    ul {
      margin-left: 1.8rem;
    }

    ul li{
      list-style: outside;
    }

  }

  /* Remove title, date, etc from printed page */
  /* @page { size: auto;  margin: 0mm; } */
`;

class CustomApp extends App {
  state = {};

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {}

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <StyledPage>
            <Meta />
            <GlobalStyle />
            {/* <Header handleClick={this.handleClick} /> */}
            {/* Page Data */}
            <Component {...pageProps} />
            {/* End Page Data */}
          </StyledPage>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default CustomApp;

const StyledPage = styled.div`
  background: #e8f8fc;
  background: #fff;
  box-shadow: 12px 0 15px -4px rgba(0, 0, 0, 0.2), -12px 0 8px -4px rgba(0, 0, 0, 0.2);
  box-shadow: 0 9px 0px 0px white, 0 -9px 0px 0px white,
    12px 0 15px -4px rgba(0, 0, 0, 0.2), -12px 0 15px -4px rgba(0, 0, 0, 0.2);

  margin: 0 auto;
  padding: 2rem 2rem 6rem;
  max-width: 1068px;
  min-height: 100%;

  @media screen and (min-width: 768px) {
    padding: 6rem;
  }

  @media print {
    font-size: 1.2rem;
    line-height: 2rem;
    /* padding: 6rem; */
  }

  .job {
    page-break-inside: avoid;
  }
  img {
    max-width: 100%;
  }
`;
