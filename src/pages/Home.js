import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import homeLandingIcon from  '../assets/homelanding.png';

const Home = () => {
  const [typing, setTyping] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "iOS Developer",
    "Android Developer",
    "macOS App Developer", 
    "A High Agency Developer"
  ];

  // Function to simulate typing with async/await
  const typeMessage = async (message) => {
    for (let i = 0; i < message.length; i++) {
      // Add one character at a time
      setTyping((prev) => prev + message[i]);
      console.log(`value of i -- currentMessage.length: ${i} currentMessage: ${message[i]}`);
      
      // Wait for 100ms before adding the next character
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Once the message is fully typed, wait 1 second before switching to the next message
    setTimeout(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1000);
  };

  useEffect(() => {
    let currentMessage = messages[messageIndex];
    
    // Clear previous typing when switching messages
    setTyping('');
    
    // Start typing the message
    typeMessage(currentMessage);

    // Cleanup any ongoing typing if messageIndex changes or component unmounts
    return () => {
      setTyping('');
    };
  }, [messageIndex]); // Dependency on messageIndex

  return (
    <PageContainer>
      <Main>
        <TopContainer>
          <RightContainer>
            <h1>Hi There! 👋🏻</h1>
            <h2>I am Pradeep Tiwari</h2>
            <h3>{typing}</h3>
          </RightContainer>
          <LeftContainer>
            <img src={homeLandingIcon} alt="Profile" />
          </LeftContainer>
        </TopContainer>
        <BottomContainer>
          <p>This is a brief introduction about me. I am passionate about building scalable applications using the MERN stack.</p>
        </BottomContainer>
      </Main>
    </PageContainer>
  );
};
// background: linear-gradient(to right, #000428, #004e92); /* Space-like bluish gradient */
// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: transparent; /* Space-like bluish gradient */
  color: #fff;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
  background-color: transparent;
  text-align: center;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  max-width: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const RightContainer = styled.div`
  flex: 2;
  max-width: 55%;
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 2rem;
    font-weight: bold;
    color: #f39c12; /* Highlight typing text */
  }
`;

const BottomContainer = styled.div`
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  p {
    font-size: 1.2rem;
    color: #ecf0f1;
  }
`;

export default Home;
