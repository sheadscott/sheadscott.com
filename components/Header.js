import styled from "styled-components";
import Link from "next/link";
// import Logo from "../images/logo.svg";

const Header = props => (
  <StyledHeader>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Nav>
      <Link href="/example">
        <a>Example Page</a>
      </Link>
    </Nav>
  </StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 0;

  h1 {
    margin: 0;
    padding: 0;

    svg {
      width: 120px;
    }
  }
`;

const Nav = styled.nav`
  a {
    font-size: 1.25rem;
    text-transform: uppercase;
  }
`;
