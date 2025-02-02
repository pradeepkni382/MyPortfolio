import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <PageContainer>
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
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
  background-color:transparent;
  text-align: center;
`;

const Tile = styled.div`
  background-color: ${({ theme }) => theme.mainBackgroundColor || '#f9f9f9'}; /* Fallback to parent background color */
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
