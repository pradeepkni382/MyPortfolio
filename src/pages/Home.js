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
            <h2>I am Pradeep Tiwari 🇮🇳</h2>
            <h3>{typing}</h3>
          </RightContainer>
          <LeftContainer>
            <img src={homeLandingIcon} alt="Profile" />
          </LeftContainer>
        </TopContainer>
        <BottomContainer>
  <SectionHeading>📌 Why Work With Me?</SectionHeading>
  <Content>
    <ContentItem>
      <Icon>✔</Icon>
      <Text>
        <strong>Self-Starter:</strong> I take ownership of problems and find solutions without waiting for direction.
      </Text>
    </ContentItem>
    <ContentItem>
      <Icon>✔</Icon>
      <Text>
        <strong>Results-Oriented:</strong> My optimizations have directly improved performance, security, and user experience.
      </Text>
    </ContentItem>
    <ContentItem>
      <Icon>✔</Icon>
      <Text>
        <strong>Fast Learner:</strong> Picked up Golang, SwiftUI, and security frameworks proactively to enhance product development.
      </Text>
    </ContentItem>
    <ContentItem>
      <Icon>✔</Icon>
      <Text>
        <strong>High Impact:</strong> Delivered scalable features used by thousands of users with minimal oversight.
      </Text>
    </ContentItem>
  </Content>
  <Description>
    I believe in getting things done, making decisions that move projects forward, and continuously improving my craft. <br />
    <strong>Let’s build something exceptional together. 🚀</strong>
  </Description>
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

  /* Ensure that the layout stacks vertically on small screens */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  max-width: 40%; /* Limiting max-width ensures it doesn't stretch too much */
  
  img {
    width: 100%; /* Allow image to fully take up container space */
    height: auto; /* Keep aspect ratio intact */
    border-radius: 10px;
    box-shadow: 0 18px 18px rgba(240, 237, 237, 0.08);
    object-fit: cover; /* Ensures image doesn't stretch */
  }

  /* Optional: Adding padding to ensure image is not too close to the edges */
  padding: 10px;
`;

const RightContainer = styled.div`
  flex: 2;
  max-width: 55%; /* Allow the right container to take up more space */

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2.5rem; /* Slightly smaller size for the name */
    margin-bottom: 20px;
    text-shadow: 10px 10px 10px rgba(235, 222, 222, 0.2); /* Shadow below the name */
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
    color: #f39c12; /* Highlight typing text */
  }

  /* Optional: Adding some padding or margin for better spacing */
  padding: 0 20px;
`;


const BottomContainer = styled.div`
  background: transparent;
  padding: 40px 20px;
  margin-top: 100px; /* Space between bottom container and top container */
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(240, 237, 237, 0.08);
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
  
  /* Optional: Adding responsiveness */
  @media (max-width: 768px) {
    padding: 30px 15px; /* Adjust padding on small screens */
  }
  
  @media (max-width: 480px) {
    max-width: 100%; /* Allow bottom container to take full width on very small screens */
  }
`;


const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color:rgb(224, 225, 226);
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: 1px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #34495e;
`;

const Icon = styled.span`
  font-size: 1.6rem;
  color: #3498db;
  margin-right: 15px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1rem;
  color:rgb(250, 250, 250);
  line-height: 1.6;
  strong {
    color: #2ecc71;
    font-weight: 600;
  }
`;

const Description = styled.p`
  margin-top: 30px;
  font-size: 1.1rem;
  color:rgb(255, 255, 255);
  text-align: center;

  strong {
    font-weight: bold;
    color: #2ecc71;
  }
`;


export default Home;
