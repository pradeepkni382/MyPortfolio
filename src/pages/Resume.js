// src/pages/Resume.js
import React from 'react';
import resumeLink from '../assets/resume/Pradeep Tiwari.pdf';

const Resume = () => {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center',     // Center vertically
      flexDirection: 'column',   // Stack elements vertically
      // height: '100vh',           // Full viewport height
      textAlign: 'center',
      background: 'rgba(0, 0, 0, 0.7)',
      width: '70%',
      margin: '0 auto',         // Ensure it stays within the page margins
    }}
  >
      <h4 style={{ color: ' #f39c12', padding: '5px' }}>Here is a brief overview of my qualifications. You can view or download my resume</h4>
      <iframe
        src={resumeLink}
        width="80%"
        height="700px"
        style={{ border: 'none' }}
        title="Resume"    
      ></iframe>

      <div style={{ marginTop: '20px' }}>
        {/* Download buttons */}
        {/* <button
          onClick={() => window.open(resumeLink, '_blank')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '5px',
            fontSize: '16px',
          }}
        >
          View Resume
        </button> */}
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = resumeLink;
            link.download = 'resume.pdf'; // Set the filename for download
            link.click();
          }}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '5px',
            fontSize: '16px',
          }}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
