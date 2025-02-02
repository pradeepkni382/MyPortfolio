// src/pages/Resume.js
import React from 'react';
import resumeLink from '../assets/resume/Pradeep Tiwari.pdf';

const Resume = () => {
  // Path to your resume (you can use a URL or local file path)
  // const resumeLink = './assets/resume.pdf';

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>My Resume</h1>
      <p>Here is a brief overview of my qualifications. You can view or download my resume below:</p>

      {/* Display Resume (you can use an iframe, or object for PDF viewing) */}
      <iframe
        src={resumeLink}
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        title="Resume"
      ></iframe>

      <div style={{ marginTop: '20px' }}>
        {/* Download buttons */}
        <button
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
        </button>
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
