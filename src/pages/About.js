import React from 'react';
import styled from 'styled-components';
import myPortrait from '../assets/myportrait.jpg';

// Star component to display the rating
const Star = ({ filled }) => (
  <StarIcon filled={filled}>★</StarIcon>
);

const About = () => {
  const skills = [
    { name: 'Swift', rating: 4 },
    { name: 'SwiftUI', rating: 4 },
    { name: 'Objective-C', rating: 4 },
    { name: 'Kotlin', rating: 3 },
    { name: 'Python', rating: 2 },
    { name: 'C++', rating: 3 },
    { name: 'Golang', rating: 1 },
    { name: 'CI/CD', rating: 4 },
    { name: 'Security', rating: 4 },
    { name: 'Profiling & Optimization', rating: 4 }
  ];

  return (
    <AboutContainer>
   <LeftContainer>
    <Bio>
        <h1>About Me 👨‍💻</h1>
        <p>
            I am a <strong>Senior Software Engineer</strong> with <strong>11 years of experience</strong> in iOS, macOS, and Android development, specializing in high-performance, secure, and scalable applications. I take ownership of projects, solve complex challenges, and deliver impactful solutions with minimal oversight.
        </p>
        <p>
            At <strong>Infoblox</strong>, I played a key role in developing the <strong>BloxOne Mobile Roaming Client</strong>, integrating <strong>VPN, MDM support</strong>, and optimizing network routing using <strong>C++ and Golang</strong>. I also managed App Store and Play Store releases, ensuring seamless deployment and maintenance.
        </p>
        <p>
            Previously, at <strong>i-exceed</strong>, I led iOS development for the <strong>Appzillon platform</strong>, resolving <strong>400+ legacy issues</strong>, cutting app load times by <strong>50%</strong>, and implementing advanced security enhancements.
        </p>
        <p>
            Passionate about innovation, I develop and publish my own applications, explore browser extensions. I thrive on continuous learning, currently expanding into <strong>AI Agents</strong> to push the boundaries of intelligent applications.
        </p>
        <p>
            I believe in <strong>data-driven decisions, automation, and continuous improvement</strong>. Let’s create something extraordinary together. 🚀
        </p>
    </Bio>
    <Section>
       <h2 style = {{color: '#63e6be'}}>🌟 Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                <SkillName>{skill.name}</SkillName>  
                <Spacer /> {/* Spacer for distance */}
                <StarRating rating={skill.rating} />
              </li>
            ))}
          </ul>
    </Section>
</LeftContainer>

      <RightContainer>
        <Section>
          <ProfileImage src={myPortrait} alt="Pradeep Tiwari's Profile" />
        </Section>
      </RightContainer>
    </AboutContainer>
  );
};

// Reusable StarRating component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} filled={i <= rating} />);
  }
  return <StarWrapper>{stars}</StarWrapper>;
};

// Styled components
const AboutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  background-color: transparent;
  color: #ecf0f1;
  background: transparent; 
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const LeftContainer = styled.div`
  flex: 1;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #ecf0f1;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  padding: 20px;
  position: relative;
  z-index: 1;
`;

const RightContainer = styled.div`
  flex: 1;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #ecf0f1;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  padding: 20px;
  position: relative;
  z-index: 1;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border: 5px solid rgba(192, 184, 184, 0.2);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(192, 184, 184, 0.2);
`;

const Bio = styled.div`
  max-width: 800px;
  h1 {
    margin-bottom: 10px;
    font-size: 2.5rem;
    color: #63e6be;
    font-family: 'Merriweather', serif;
    text-align: center;
  }
  p {
    margin-bottom: 20px;
    line-height: 1.8;
    font-size: 1.1rem;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    text-align: left;
    padding-left: 20px;
  }
`;

const Section = styled.section`
  margin-bottom: 30px;
  h2 {
    font-size: 1.8rem;
    color: rgb(209, 199, 199);
    margin-bottom: 15px;
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
    li {
      font-size: 1.1rem;
      color: rgb(255, 255, 255);
      margin-bottom: 10px;
      display: flex;
      align-items: center;
    }
  }
`;

const SkillName = styled.span`
  flex: 1;
`;

const Spacer = styled.div`
  margin-left: 10px; /* Add distance between skill name and star rating */
`;

const StarWrapper = styled.span`
  margin-left: 10px;
`;

const StarIcon = styled.span`
  font-size: 1.2rem;
  color: ${({ filled }) => (filled ? 'yellow' : '#ccc')};
`;

export default About;
