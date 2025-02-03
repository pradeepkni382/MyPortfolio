import React from 'react';
import styled from 'styled-components';
import myPortrait from '../assets/myportrait.jpg';

const About = () => {
  return (
    <AboutContainer>
      <LeftContainer>
        <Bio>
          <h1>About Me</h1>
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
          <h2>🌟 Skills</h2>
          <ul>
            <li>Swift, SwiftUI, Objective-C, Kotlin, Golang, C++, REST APIs, VPN, MDM, CI/CD, Security, Profiling & Optimization</li>
          </ul>
        </Section>
      </RightContainer>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  background-color: transparent;
  color: #ecf0f1;
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
`;

const LeftContainer = styled.div`
  flex: 1;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #ecf0f1
  background: rgba(0, 0, 0, 0.7);
  back
`;

const RightContainer = styled.div`
  flex: 1;
  max-width: 35%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #ecf0f1
  background: rgba(0, 0, 0, 0.7);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border: 5px solid rgba(192, 184, 184, 0.2); /* Border with a light gray color */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(192, 184, 184, 0.2); /* Shadow with a slightly more pronounced effect */
`;

const Bio = styled.div`
  max-width: 800px;

  h1 {
    margin-bottom: 10px;
    font-size: 2.5rem;
    color: rgb(209, 199, 199);
    font-family: 'Merriweather', serif;
  }

  p {
    margin-bottom: 20px;
    line-height: 1.8;
    font-size: 1.1rem;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
  }

  strong {
    color: rgb(255, 255, 255);
    font-weight: bold;
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
    }
  }
`;

export default About;
