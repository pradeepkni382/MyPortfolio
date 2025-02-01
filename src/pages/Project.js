// src/pages/Project.js
import React from 'react';
import styled from 'styled-components';

// Create a styled div with a transparent background
const TransparentBackground = styled.div`
  background-color: transparent; /* Transparent background */
  background-image: url('path_to_your_image.jpg'); /* Background image */
  background-size: cover; /* Cover the entire screen */
  background-position: center; /* Center the background image */
  min-height: 100vh; /* Full height of the viewport */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Optional: Adjust text color for better visibility on image */
`;

const Project = () => {
  return (
    <TransparentBackground>
      <h1>Project Page</h1>
    </TransparentBackground>
  );
};

export default Project;
