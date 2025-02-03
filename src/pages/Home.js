import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import homeLandingIcon from '../assets/homelanding.png';

const Home = () => {
  const [typing, setTyping] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const typingRef = useRef(''); // To store the typing message
  const isFirstRender = useRef(true); // To track the first render

  const messages = [
    "Mobile App Developer",
    "macOS App Developer",
    "A High Agency Developer",
  ];

  const typeMessage = async (message) => {
    typingRef.current = '';
    setTyping('');

    for (let i = 0; i < message.length; i++) {
      typingRef.current += message[i];
      setTyping(typingRef.current);
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    setTimeout(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1000);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const currentMessage = messages[messageIndex];
    typeMessage(currentMessage);

    return () => {
      typingRef.current = '';
    };
  }, [messageIndex]);

  return (
    <PageContainer>
      <Main>
        <TopContainer>
          <RightContainer>
            <h1>Namaste ! 🙏</h1>
            <h2>I am Pradeep Tiwari 🇮🇳</h2>
            <h3>{typing}</h3>
          </RightContainer>
          <LeftContainer>
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
          </LeftContainer>
        </TopContainer>
      </Main>
    </PageContainer>
  );
};

// Styled Components

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // background: linear-gradient(135deg, rgba(30, 37, 57, 0.8), rgba(40, 53, 79, 0.8));
  color: #fff;
  font-family: 'Arial', sans-serif;
`;

const Main = styled.main`
  flex: 1;
  padding: 50px 20px;
  background-color: transparent;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  max-width: 45%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  margin-top: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 20px;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    // text-transform: uppercase;
    font-weight: 700;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #f39c12;
    font-weight: 600;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
    color: #f39c12;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #f39c12;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 2px;
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
  color: #fff;
`;

const Icon = styled.span`
  font-size: 1.6rem;
  color: #3498db;
  margin-right: 15px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1rem;
  color: rgb(240, 240, 240);
  line-height: 1.6;
  strong {
    color: #f39c12;
    font-weight: 600;
  }
`;

const Description = styled.p`
  margin-top: 30px;
  font-size: 1.1rem;
  color: rgb(255, 255, 255);
  text-align: center;
  max-width: 800px;
  margin: 30px auto 0;
  line-height: 1.8;

  strong {
    font-weight: bold;
    color: #f39c12;
  }
`;

export default Home;
