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
    { name: 'Golang', rating: 5 },
    { name: 'C++', rating: 4 },
    { name: 'REST APIs', rating: 5 },
    { name: 'VPN', rating: 4 },
    { name: 'MDM', rating: 4 },
    { name: 'CI/CD', rating: 4 },
    { name: 'Security', rating: 5 },
    { name: 'Profiling & Optimization', rating: 4 }
  ];

  return (
    <AboutContainer>
      <LeftContainer>
        <Bio>
          <h1>About Me 👨‍💻</h1>
          <p>
            I am a Senior Software Engineer with 11 years of experience in iOS, macOS, and Android development, known for my problem-solving mindset, ownership, and ability to deliver impactful solutions independently. Throughout my career, I have consistently taken initiative, solved complex technical challenges, and driven projects forward with minimal oversight.
          </p>
          <p>
            At Infoblox, I played a key role in developing and enhancing the BloxOne Mobile Roaming Client for iOS, Android, macOS, and Linux. I successfully integrated VPN functionality, MDM support, and optimized network routing using C++ and Golang, ensuring security and high performance. I also managed App Store and Play Store releases, taking full ownership of deployment and maintenance. When challenges arose, I proactively identified and implemented solutions without waiting for directions.
          </p>
          <p>
            Previously, at i-exceed, I not only led iOS development for the Appzillon platform but also took responsibility for solving deep-rooted technical issues, reducing app load times by 50%, fixing 400+ legacy bugs, and implementing advanced cryptographic techniques that eliminated security vulnerabilities. My ability to quickly learn, adapt, and optimize workflows significantly improved product stability and security.
          </p>
          <p>
            Beyond corporate work, I thrive on self-driven projects, having developed and published multiple applications, explored browser extensions, and worked on freelance projects to continuously sharpen my skills. I take initiative, identify problems before they escalate, and drive solutions that have a lasting impact.
          </p>
          <p>
            I believe in getting things done, making decisions that move projects forward, and continuously improving my craft. Let’s build something exceptional together. 🚀
          </p>
        </Bio>
      </LeftContainer>

      <RightContainer>
        <Section>
          <ProfileImage src={myPortrait} alt="Pradeep Tiwari's Profile" />
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
