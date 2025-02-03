import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const Home = () => {
  const [typing, setTyping] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const typingRef = useRef('');
  const isFirstRender = useRef(true);

  const messages = [
    "Mobile App Developer",
    "macOS App Developer",
    "A High Agency Developer",
  ];

  const typeMessage = async (message) => {
    typingRef.current = '';
    setTyping('');

    // Typing animation
    for (let i = 0; i < message.length; i++) {
      typingRef.current += message[i];
      setTyping(typingRef.current);
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Pause before next message
    setTimeout(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      typeMessage(messages[0]);
      isFirstRender.current = false;
      return;
    }

    const currentMessage = messages[messageIndex];
    typeMessage(currentMessage);
  }, [messageIndex]);

  return (
    <PageContainer>
      <Main>
        <TopContainer>
          <RightContainer>
            <Greeting>Namaste ! 🙏</Greeting>
            <Name>I am Pradeep Tiwari 🇮🇳</Name>
            <TypingText>{typing}<Cursor>|</Cursor></TypingText>
          </RightContainer>
          
          <LeftContainer>
            <SectionHeading>🌟 Why Work With Me?</SectionHeading>
            <ContentGrid>
              <BulletPoint>
                <CheckIcon>✓</CheckIcon>
                <BulletText>
                  <strong>Self-Starter:</strong> Take ownership of problems and drive solutions independently
                </BulletText>
              </BulletPoint>
              
              <BulletPoint>
                <CheckIcon>✓</CheckIcon>
                <BulletText>
                  <strong>Results-Oriented:</strong> Proven track record in performance, security, and UX improvements
                </BulletText>
              </BulletPoint>

              <BulletPoint>
                <CheckIcon>✓</CheckIcon>
                <BulletText>
                  <strong>Fast Learner:</strong> Mastered Golang, SwiftUI, and security frameworks to enhance products
                </BulletText>
              </BulletPoint>

              <BulletPoint>
                <CheckIcon>✓</CheckIcon>
                <BulletText>
                  <strong>High Impact:</strong> Delivered scalable features for thousands of users with minimal oversight
                </BulletText>
              </BulletPoint>
            </ContentGrid>

            <CallToAction>
              I believe in actionable results, data-driven decisions, and continuous improvement.<br />
              <strong>Let's create something extraordinary together 🚀</strong>
            </CallToAction>
          </LeftContainer>
        </TopContainer>
      </Main>
    </PageContainer>
  );
};

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

// Styled Components
const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1f2e, #2d3548);
  color: #f8f9fa;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Main = styled.main`
  flex: 1;
  padding: 4rem 2rem;
  margin: 0 auto;
  max-width: 1200px;
  animation: ${fadeIn} 0.6s ease-out;
`;

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const RightContainer = styled.div`
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const Greeting = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #4dabf7;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const Name = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ffe066;
  font-weight: 600;
  line-height: 1.2;
`;

const TypingText = styled.h3`
  font-size: 1.75rem;
  min-height: 2.5rem;
  color: #74b9ff;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const Cursor = styled.span`
  margin-left: 4px;
  animation: ${blink} 1s infinite;
  color: #74b9ff;
`;

const LeftContainer = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const SectionHeading = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: #63e6be;
  text-align: center;
  font-weight: 600;
`;

const ContentGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const BulletPoint = styled.div`
  display: flex;
  gap: 1rem;
  align-items: start;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(8px);
  }
`;

const CheckIcon = styled.div`
  font-size: 1.5rem;
  color: #69db7c;
  flex-shrink: 0;
  margin-top: 2px;
`;

const BulletText = styled.p`
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #e9ecef;

  strong {
    color: #ffe066;
    font-weight: 600;
  }
`;

const CallToAction = styled.div`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #dee2e6;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;

  strong {
    color: #4dabf7;
    font-weight: 600;
    display: inline-block;
    margin-top: 1rem;
  }
`;

export default Home;