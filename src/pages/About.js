// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import myPortrait from '../assets/myportrait.jpg';

const About = () => {
  return (
    <AboutContainer>
      <ProfileImage src={myPortrait} alt="Pradeep Tiwari's Profile" />
      <Bio>
        <h1>About Me</h1>
        <p>
          Hello, I’m Pradeep Tiwari, a passionate and experienced software developer with over 11 years of expertise in
          creating innovative solutions for mobile and desktop platforms. With a strong foundation in iOS, macOS, Android,
          and Linux development, I specialize in delivering robust applications that prioritize security, performance, and
          user experience.
        </p>
        <p>
          My journey has been shaped by impactful projects like the <strong>BloxOne Endpoint</strong>, where I implemented
          advanced network security solutions using technologies such as Swift, Objective-C, Kotlin, C++, and Golang. I’ve
          also had the privilege of leading projects in the fintech and enterprise domains, including <strong>Appzillon</strong>,
          a hybrid platform that revolutionized app development for banks.
        </p>
        <p>
          I thrive on solving complex problems, whether it’s integrating VPN and MDM solutions or optimizing app load times by
          over 50%. My dedication to continuous learning has driven me to master emerging technologies and frameworks, ensuring
          that my skills stay relevant in an ever-evolving industry.
        </p>
        <p>
          When I’m not coding, I enjoy exploring new ideas, collaborating with talented teams, and sharing my knowledge through
          blogs and mentorship. My website is a reflection of my work, achievements, and thoughts—designed to inspire and connect
          with like-minded professionals.
        </p>
        <p>
          <strong>Let’s build the future, one line of code at a time.</strong>
        </p>
      </Bio>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  background-color: ${({ theme }) => (theme === 'dark' ? '#2c3e50' : '#f9f9f9')};
  color: ${({ theme }) => (theme === 'dark' ? '#ecf0f1' : '#333')};
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
`;


const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Bio = styled.div`
  max-width: 600px;

  h1 {
    margin-bottom: 10px;
    font-size: 2rem;
    color: #2c3e50;
    font-family: 'Merriweather', serif;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.8;
    font-size: 1rem;
    color: #555;
    font-family: 'Roboto', sans-serif;
  }

  strong {
    color: #2c3e50;
    font-weight: bold;
  }
`;

export default About;
