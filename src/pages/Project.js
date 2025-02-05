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
      <div>
        <ProjectTitle>BloxOne Endpoint Clients (macOS/Linux)</ProjectTitle>
        <ProjectDescription>
          Architected and developed the BloxOne Endpoint Client, a lightweight and secure DNS roaming client for macOS and Linux. 
          Designed to efficiently redirect DNS queries to Infoblox's cloud security services, ensuring privacy, performance, and compliance over an encrypted transport layer.
          <br /><strong>Tech Stack:</strong> Swift, Objective C++, Golang.
        </ProjectDescription>
      </div>
    </Project>

    <Project href="#">
      <div>
        <ProjectTitle>BloxOne Endpoint Apps (iOS/Android)</ProjectTitle>
        <ProjectDescription>
          Built security-centric mobile endpoint applications that detect and mitigate DNS-based threats in real time, securing enterprise networks. 
          Integrated automated security enforcement, seamless cloud connectivity, and ecosystem integrations, improving mobile threat intelligence.
          <br /><strong>Tech Stack:</strong> Swift, Kotlin, SwiftUI, Jetpack Compose, Firebase.
        </ProjectDescription>
      </div>
    </Project>

    <Project href="#">
      <div>
        <ProjectTitle>Appzillon MADP</ProjectTitle>
        <ProjectDescription>
          Led the development of a cross-platform application development framework, empowering banks and enterprises to create secure, scalable, and flexible mobile and web applications. 
          Implemented robust authentication mechanisms and enhanced API security, reducing vulnerabilities.
          <br /><strong>Tech Stack:</strong> Objective-C, Swift, SwiftUI, JavaScript, HTML, CSS, Java.
        </ProjectDescription>
      </div>
    </Project>

    <Project href="#">
      <div>
        <ProjectTitle>Noor Bank App</ProjectTitle>
        <ProjectDescription>
          Designed and developed an end-to-end mobile banking solution for Noor Bank (Dubai), providing seamless digital transactions, account management, and secure payments. 
          Integrated Apple Pay with industry-standard encryption and hashing protocols, ensuring fraud prevention and data security.
          <br /><strong>Tech Stack:</strong> Objective C, Swift, Apple Pay, HTML, CSS.
        </ProjectDescription>
      </div>
    </Project>

    <Project href="#">
      <div>
        <ProjectTitle>CITI Dealbase Express</ProjectTitle>
        <ProjectDescription>
          Built an enterprise mobility solution for Citi Bank’s sales team, streamlining deal approval and contract signing workflows.  
          Integrated Blackberry Good Dynamics to enforce enterprise-grade security and compliance.
          <br /><strong>Tech Stack:</strong> Objective-C, Swift, Blackberry Dynamics
        </ProjectDescription>
      </div>
    </Project>

    <Project href="#">
      <div>
        <ProjectTitle>Spitamen Bank App</ProjectTitle>
        <ProjectDescription>
          Developed a modern and secure mobile banking app for Spitamen Bank (Tajikistan), offering seamless financial transactions, user authentication, and account management.  
          Architected the app using MVC design principles, ensuring modular and maintainable code while enhancing security and reliability.
          <br /><strong>Tech Stack:</strong> Objective C, HTML, CSS.
        </ProjectDescription>
      </div>
    </Project>
  </ProjectContainer>
</TransparentBackground>

    <TransparentBackground>
    <Header>Independent Projects</Header>
      <ProjectContainer>
        <Project href="#">
          {/* <ProjectImage src="path_to_image" alt="Bloxone Endpoint Clients" /> */}
          <div>
            <ProjectTitle>CanvasJoy(iOS/Android)</ProjectTitle>
            <ProjectDescription>
              CanvasJoy is an interactive digital drawing app designed for children, offering a creative and intuitive canvas for freehand drawing, coloring, and sketching. The app enables kids to import images from the gallery, draw over them, and explore their creativity with an extensive color palette and brush options.
              <br /><strong>Tech Stack:</strong> Swift (iOS), Kotlin (Android), Jetpack Compose, SwiftUI, Core Graphics, Firebase
            </ProjectDescription>
          </div>
        </Project>
        <Project href="#">
          {/* <ProjectImage src="path_to_image" alt="Bloxone Endpoint Apps" /> */}
          <div>
            <ProjectTitle>APNS Tester(macOS)</ProjectTitle>
            <ProjectDescription>
              APNS Tester is a powerful and lightweight macOS application designed for developers to test Apple Push Notification Service (APNS) on iOS simulators without requiring a backend server. It simplifies the testing and debugging of various push notification types, ensuring seamless integration before deployment.
              <br /><strong>Tech Stack:</strong> Swift (macOS), SwiftUI, Core Foundation.
            </ProjectDescription>
          </div>
        </Project>
        </ProjectContainer>
    </TransparentBackground>
    </>
  );
};

export default ProjectPage;
