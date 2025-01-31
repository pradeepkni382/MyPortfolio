// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <PageContainer>
      <Header>
        <Nav>
          <NavItem to="/announcements">Announcements</NavItem>
          <NavItem to="/ourapps">OurApps</NavItem>
          <NavItem to="/privacy">Privacy</NavItem>
          <NavItem to="/support">Support</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/blogs">Blogs</NavItem>
        </Nav>
      </Header>

      
      <Main>
        <TileContainer>
          <Tile>
            <h3>App 1</h3>
            <p>Explore our innovative solutions for App 1.</p>
          </Tile>
          <Tile>
            <h3>App 2</h3>
            <p>Discover the features of App 2, designed for you.</p>
          </Tile>
          <Tile>
            <h3>App 3</h3>
            <p>Learn more about App 3 and its capabilities.</p>
          </Tile>
          <Tile>
            <h3>App 4</h3>
            <p>Dive into App 4 for advanced functionality.</p>
          </Tile>
        </TileContainer>
      </Main>

      <Footer>
        <SocialLinks>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </SocialLinks>
      </Footer>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #2c3e50;
  padding: 10px 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    color: #1abc9c;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const Footer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
  padding: 20px 0;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    color: #ecf0f1;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      color: #1abc9c;
    }
  }
`;
const Tile = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin-bottom: 10px;
    color: #2c3e50;
  }

  p {
    color: #7f8c8d;
  }
`;
const TileContainer = styled.div`
  display: grid;
  gap: 20px;

  /* 3 columns for larger screens */
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    /* 2 columns for medium screens */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    /* 1 column for small screens */
    grid-template-columns: 1fr;
  }
`;


export default Home;
