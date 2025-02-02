import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    countryCode: '+1', // Default to US
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, consent: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  // CSS styles as constants
  const styles = {
    contactContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      gap: '30px',
      flexWrap: 'wrap',
    },
    contactLeft: {
      flex: 1,
      maxWidth: '45%', // Ensure both sides are equal width
      padding: '20px',
      backgroundColor: '#f4f4f4',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    contactLeftHeading: {
      fontSize: '2rem',
      marginBottom: '10px',
      color: '#333',
    },
    contactLeftDescription: {
      fontSize: '1.1rem',
      color: '#555',
      lineHeight: '1.6',
    },
    contactRight: {
      flex: 1,
      maxWidth: '45%', // Ensure both sides are equal width
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      minWidth: '300px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    formGroupLabel: {
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#333',
    },
    formGroupInput: {
      padding: '12px',
      fontSize: '1rem',
      border: '1px solid #ddd',
      borderRadius: '6px',
      width: '100%',
      boxSizing: 'border-box',
    },
    formGroupRow: {
      display: 'flex',
      gap: '20px', // Adds space between the fields in the same row
    },
    formGroupHalfWidth: {
      flex: '1',
      padding: '0', // Remove extra padding for half-width fields
    },
    selectCountryCode: {
      padding: '12px',
      fontSize: '1rem',
      border: '1px solid #ddd',
      borderRadius: '6px',
      width: '120px',
      boxSizing: 'border-box',
    },
    checkboxLabel: {
      fontSize: '0.9rem',
      color: '#555',
    },
    submitBtn: {
      padding: '12px 20px',
      fontSize: '1rem',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      width: 'auto', // Make the button smaller
      alignSelf: 'flex-start', // Align button to the left side
    },
    submitBtnHover: {
      backgroundColor: '#0056b3',
    },
    // Media queries for responsiveness
    '@media (max-width: 768px)': {
      contactContainer: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      contactLeft: {
        marginBottom: '20px',
        flex: 'none',
        width: '100%',
      },
      contactRight: {
        width: '100%',
      },
    },
  };

  return (
    <div style={styles.contactContainer}>
      <div style={styles.contactLeft}>
        <h2 style={styles.contactLeftHeading}>Get in touch</h2>
        <p style={styles.contactLeftDescription}>
          If you have any questions or want to reach out, feel free to contact me through the form.
        </p>
      </div>
      <div style={styles.contactRight}>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroupRow}>
            <div style={styles.formGroupHalfWidth}>
              <label htmlFor="firstName" style={styles.formGroupLabel}>First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={styles.formGroupInput}
              />
            </div>
            <div style={styles.formGroupHalfWidth}>
              <label htmlFor="lastName" style={styles.formGroupLabel}>Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                style={styles.formGroupInput}
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="company" style={styles.formGroupLabel}>Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              style={styles.formGroupInput}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.formGroupLabel}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.formGroupInput}
            />
          </div>

          <div style={styles.formGroupRow}>
            <div style={styles.formGroupHalfWidth}>
              <label htmlFor="phone" style={styles.formGroupLabel}>Phone Number</label>
              <div style={styles.formGroupRow}>
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  style={styles.selectCountryCode}
                >
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (IN)</option>
                  <option value="+61">+61 (AU)</option>
                </select>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your number"
                  required
                  style={styles.formGroupInput}
                />
              </div>
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.formGroupLabel}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={styles.formGroupInput}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleCheckboxChange}
              />
              {' '}By selecting this, you allow us to contact you via phone or email.
            </label>
          </div>

          <button type="submit" style={styles.submitBtn} onMouseOver={(e) => e.target.style.backgroundColor = styles.submitBtnHover.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = styles.submitBtn.backgroundColor}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
