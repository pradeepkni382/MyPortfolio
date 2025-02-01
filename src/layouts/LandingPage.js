import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import xLogo from '../assets/xlogo.jpg';
import instaLogo from '../assets/instalogo.jpg';
import fbLogo from '../assets/fblogo.jpg';
import linkedinLogo from '../assets/emaillogo.jpg';
import githubLogo from '../assets/gitlogo.jpg';
import moonIcon from '../assets/moonicon.jpg'; // Dark mode icon
import sunIcon from '../assets/sunicon.jpg';   // Light mode icon
import ptIcon from  '../assets/PTLogo.jpg';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize the theme from localStorage, defaulting to false (light mode)
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  });

  // Update localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Container isDarkMode={isDarkMode}>
      <Header isDarkMode={isDarkMode}>
        {/* <Logo onClick={() => (window.location.href = "/")}>
          PRADEEP
        </Logo> */}
        <Logo>
          <img
            src={ptIcon}
            alt="Company Logo"
            onClick={() => (window.location.href = "/")}
          />
        </Logo>
        <Nav>
          <NavItem to="/Home" isDarkMode={isDarkMode}>
          Home
          </NavItem>
          <NavItem to="/About" isDarkMode={isDarkMode}>
          About
          </NavItem>
          <NavItem to="/Project" isDarkMode={isDarkMode}>
          Project
          </NavItem>
          <NavItem to="/Resume" isDarkMode={isDarkMode}>
          Resume
          </NavItem>
          <NavItem to="/Blogs" isDarkMode={isDarkMode}>
          Blogs
          </NavItem>
          <NavItem to="/Contact" isDarkMode={isDarkMode}>
          Contact
          </NavItem>
        </Nav>
        <ThemeToggle onClick={toggleTheme}>
          <img src={isDarkMode ? sunIcon : moonIcon} alt="Toggle Theme" />
        </ThemeToggle>
      </Header>
      <Main isDarkMode={isDarkMode}>
        <Outlet />
      </Main>
      <Footer isDarkMode={isDarkMode}>
        <FooterContent>
          <SocialLinks>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={xLogo} alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instaLogo} alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fbLogo} alt="Facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" />
            </a>
          </SocialLinks>
          <Copyright>
            &copy; {new Date().getFullYear()} Pradeep Tiwari. All rights reserved.
          </Copyright>
        </FooterContent>
      </Footer>
    </Container>
  );
};

// Styled Components with Theme Integration

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#ffffff" : "#ffffff")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#ffffff" : "#ffffff")};
`;

const Header = styled.header`
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#000000" : "#f4f4f4")};
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  background-color:#000000
`;

const Footer = styled.footer`
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#000000" : "#f4f4f4")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#ecf0f1" : "#000000")};
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: ${({ isDarkMode }) => (isDarkMode ? "#ffffff" : "#000000")};
  font-weight: bold;
  position: relative; /* So that the pseudo-element can be positioned relative to the NavItem */
  padding-bottom: 5px;

  &:hover {
    color: #007bff;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px; /* Adjust thickness of the line */
    background-color: yellow; /* Yellow color for the line */
    transform: scaleX(0); /* Initially the line is hidden */
    transform-origin: bottom right; /* Starts from the right */
    transition: transform 0.3s ease; /* Smooth transition for the line */
  }

  &:hover::after {
    transform: scaleX(1); /* Line becomes visible on hover */
    transform-origin: bottom left; /* Expands from the left */
  }
`;


const Logo = styled.div`
  img {
    cursor: pointer;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ThemeToggle = styled.div`
  cursor: pointer;

  img {
    width: 15px; /* Set your desired width */
    height: 15px; /* Set your desired height */
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const Copyright = styled.div`
  font-size: 0.9rem;
`;


export default LandingPage;
