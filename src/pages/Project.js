// src/pages/Project.js
import React from 'react';
import styled from 'styled-components';

// Transparent background with professional design
const TransparentBackground = styled.div`
  background-color: transparent;
  background-image: url('path_to_your_image.jpg'); // Add a professional background image
  background-size: cover;
  background-position: center;
  min-height: auto; /* Remove or adjust min-height */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align items from the top */
  align-items: center;
  color: white;
  font-family: 'Arial', sans-serif;
  padding: 1rem 0; /* Add padding if needed for top/bottom spacing */
`;

// Adjust the Header for less space
const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #63e6be;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

// Adjust ProjectContainer for padding and margin
const ProjectContainer = styled.div`
  max-width: 80%;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.7); // Slightly transparent background
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  margin-bottom: 2rem; /* Reduce the space between sections */
`;

const Project = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-bottom: 1.5rem;
  padding: 10px;
  border-radius: 12px;
  transition: background 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ProjectImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
`;

const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  color: #ffd700; // Golden text for highlighting
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const ProjectPage = () => {
  return (
    <>
      <TransparentBackground>
      <Header>Professional Experience Projects</Header>
      <ProjectContainer>
        <Project href="#">
          {/* <ProjectImage src="path_to_image" alt="Bloxone Endpoint Clients" /> */}
          <div>
            <ProjectTitle>Bloxone Endpoint Clients (macOS/Linux Apps)</ProjectTitle>
            <ProjectDescription>
              Designed and developed Infoblox Bloxone EP, a lightweight roaming client that securely redirects DNS queries from devices to the Infoblox Bloxone cloud service over an encrypted transport.
              <br /><strong>Tech Stack:</strong> C++, Golang, macOS/Linux Networking
            </ProjectDescription>
          </div>
        </Project>
        <Project href="#">
          {/* <ProjectImage src="path_to_image" alt="Bloxone Endpoint Apps" /> */}
          <div>
            <ProjectTitle>Bloxone Endpoint Apps (iOS/Android Apps)</ProjectTitle>
            <ProjectDescription>
              Developed security-focused endpoint applications for iOS and Android, operating at the DNS level to identify threats and prevent attacks early in the lifecycle. Integrated automation and ecosystem support for enhanced security.
              <br /><strong>Tech Stack:</strong> Swift, Kotlin, Firebase, REST APIs
            </ProjectDescription>
          </div>
        </Project>
        <Project href="#">
          {/* <ProjectImage src="path_to_image" alt="Appzillon MADP" /> */}
          <div>
            <ProjectTitle>Appzillon MADP</ProjectTitle>
            <ProjectDescription>
              Developed a cross-platform suite to build secure and flexible applications for mobile and web. Enabled faster deployment for banking and financial institutions.
              <br /><strong>Tech Stack:</strong> Objective-C, Swift, JavaScript, OAuth 2.0
            </ProjectDescription>
          </div>
        </Project>
        <Project href="#">
          {/* <ProjectImage src="path_to_image" alt="Noor Bank App" /> */}
          <div>
            <ProjectTitle>Noor Bank App</ProjectTitle>
            <ProjectDescription>
              Created an online banking solution for Noor Bank (Dubai), integrating Apple Pay and implementing encryption and hashing standards.
              <br /><strong>Tech Stack:</strong> Swift, Apple Pay, REST APIs
            </ProjectDescription>
          </div>
        </Project>
        <Project href="#">
          {/* <ProjectImage src="path_to_image" alt="CITI Dealbase Express" /> */}
          <div>
            <ProjectTitle>CITI Dealbase Express</ProjectTitle>
            <ProjectDescription>
              Designed an enterprise app for Citi Bank’s sales team to streamline deal signings, ensuring high security with Blackberry Good Dynamics framework.
              <br /><strong>Tech Stack:</strong> Objective-C, Swift, Blackberry Dynamics
            </ProjectDescription>
          </div>
        </Project>
        <Project href="#">
          {/* <ProjectImage src="path_to_image" alt="Spitamen Bank App" /> */}
          <div>
            <ProjectTitle>Spitamen Bank App</ProjectTitle>
            <ProjectDescription>
              Developed an online banking app for Spitamen Bank (Tajikistan), integrating APIs for secure banking operations and architecting an MVC design.
              <br /><strong>Tech Stack:</strong> Swift, MVC, REST APIs
            </ProjectDescription>
          </div>
        </Project>
      </ProjectContainer>
    </TransparentBackground>
    <TransparentBackground>
    <Header>Personal / Independent Projects</Header>
      <ProjectContainer>
        <Project href="#">
          {/* <ProjectImage src="path_to_image" alt="Bloxone Endpoint Clients" /> */}
          <div>
            <ProjectTitle>Bloxone Endpoint Clients (macOS/Linux Apps)</ProjectTitle>
            <ProjectDescription>
              Designed and developed Infoblox Bloxone EP, a lightweight roaming client that securely redirects DNS queries from devices to the Infoblox Bloxone cloud service over an encrypted transport.
              <br /><strong>Tech Stack:</strong> C++, Golang, macOS/Linux Networking
            </ProjectDescription>
          </div>
        </Project>
        <Project href="#">
          {/* <ProjectImage src="path_to_image" alt="Bloxone Endpoint Apps" /> */}
          <div>
            <ProjectTitle>Bloxone Endpoint Apps (iOS/Android Apps)</ProjectTitle>
            <ProjectDescription>
              Developed security-focused endpoint applications for iOS and Android, operating at the DNS level to identify threats and prevent attacks early in the lifecycle. Integrated automation and ecosystem support for enhanced security.
              <br /><strong>Tech Stack:</strong> Swift, Kotlin, Firebase, REST APIs
            </ProjectDescription>
          </div>
        </Project>
        </ProjectContainer>
    </TransparentBackground>
    </>
  );
};

export default ProjectPage;
