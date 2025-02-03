import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import xLogo from '../assets/xlogo.jpg';
import fbLogo from '../assets/fblogo.jpg';
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/gitlogo.jpg';
import ptIcon from  '../assets/PTLogo.jpg';
import homeIcon from  '../assets/home.png';
import aboutIcon from  '../assets/about.png';
import projectIcon from  '../assets/project.png';
import resumeIcon from  '../assets/resume.png';
import blogIcon from  '../assets/blogs.png';
import contactIcon from  '../assets/contact.png';

const LandingPage = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img
            src={ptIcon}
            alt="Company Logo"
            onClick={() => (window.location.href = "/")}
          />
          <h2>Pradeep</h2>
        </Logo>
        <Nav>
          <NavItem to="/Home" icon={homeIcon}>
            Home
          </NavItem>
          <NavItem to="/About"  icon={aboutIcon}>
            About
          </NavItem>
          <NavItem to="/Project"  icon={projectIcon}>
            Project
          </NavItem>
          <NavItem to="/Resume"  icon={resumeIcon}>
            Resume
          </NavItem>
          <NavItem to="/Blogs"  icon={blogIcon}>
            Blogs
          </NavItem>
          <NavItem to="/Contact"  icon={contactIcon}>
            Contact
          </NavItem>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <FooterContent>
        <DevInfo>
           Developed by Pradeep Tiwari.
          </DevInfo>
          <SocialLinks>
            <a href="https://x.com/pradeepkni382" target="_blank" rel="noopener noreferrer">
              <img src={xLogo} alt="Twitter" />
            </a>
            <a href="https://www.facebook.com/pradeep.tiwari.16" target="_blank" rel="noopener noreferrer">
              <img src={fbLogo} alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/pradeep-tiwari-kni382/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
            <a href="https://github.com/pradeepkni382" target="_blank" rel="noopener noreferrer">
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


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, rgb(52, 46, 59), rgb(76, 66, 96)); // Lighter space gradient (dawn-like)
  color:  "#ffffff";
  transition: background 0.5s ease;
`;

const Header = styled.header`
  background-color: transparent;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  background: transparent; /* Make background of main content area transparent */
`;

const Footer = styled.footer`
  background-color: transparent;
  color: #ecf0f1;
  padding: 5px 0;
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
  gap: 35px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #f39c12;
  font-weight: bold;
  position: relative;
  padding-bottom: 5px;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: ${({ icon }) => `url(${icon})`};
    background-size: cover;
    background-position: center;
    filter: sepia(1) saturate(5) hue-rotate(100deg); /* Adjust to match your #f39c12 tint */
  }

  &:hover {
    color: #007bff;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: yellow;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;


const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Add a little space between the logo and the text */

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

  h2 {
    font-size: 1.5rem; /* Adjust the size of the name */
    color: #f39c12;
    font-weight: 600;
  }
`;

const ThemeToggle = styled.div`
  cursor: pointer;

  img {
    width: 15px;
    height: 15px;
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
  text-align: right;
  flex: 1; /* Make it take up the right portion */
`;
const DevInfo = styled.div`
  font-size: 0.9rem;
  text-align: left;
  flex: 1; /* Make it take up the left portion */
`;

export default LandingPage;
