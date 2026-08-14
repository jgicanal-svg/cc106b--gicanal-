import React from 'react'

function App() {
  return (
    <div style={{
      maxWidth: '650px',
      margin: '40px auto',
      padding: '30px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#2d3748',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      border: '1px solid #e2e8f0'
    }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '2rem', margin: '0 0 8px 0', color: '#1a202c' }}>
          Hello, I'm Jhon Michael H. Gicanal 
          BSIS 4-2
        </h1>
        <p style={{ margin: 0, color: '#4a5568', fontWeight: '500' }}>
          BSIT Student | Web Development
        </p>
      </header>

      <hr style={{ border: 'none', borderTop: '1px solid #edf2f7', margin: '20px 0' }} />

      {/* Class / Subject Info Box */}
      <div style={{
        backgroundColor: '#f7fafc',
        padding: '16px 20px',
        borderRadius: '8px',
        borderLeft: '4px solid #3182ce',
        marginBottom: '24px'
      }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#2b6cb0' }}>
          📌 Academic Information
        </h3>
        <p style={{ margin: '4px 0', fontSize: '0.95rem' }}>
          <strong>Course Code:</strong> CC106B
        </p>
        <p style={{ margin: '4px 0', fontSize: '0.95rem' }}>
          <strong>Subject:</strong> Applications Development & Emerging Technologies
        </p>
        <p style={{ margin: '4px 0', fontSize: '0.95rem' }}>
          <strong>Project:</strong> Laboratory Requirement / Portfolio Landing Page
        </p>
      </div>

      {/* About Me */}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#2d3748' }}>
          About This Project
        </h3>
        <p style={{ lineHeight: '1.6', color: '#4a5568', margin: 0 }}>
          Welcome to my CC106B web project! This site serves as my personal portfolio page for our coursework. 
          It is built with React and Vite, managed via Git, and deployed on Vercel.
        </p>
      </section>

      {/* Tech Stack / Skills */}
      <section style={{ marginBottom: '28px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#2d3748' }}>
          Technologies Used
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Vercel'].map((tech) => (
            <span key={tech} style={{
              backgroundColor: '#edf2f7',
              color: '#2d3748',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '500'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Links */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', paddingTop: '10px' }}>
        <a 
          href="https://github.com/jgicanal-svg" 
          target="_blank" 
          rel="noreferrer"
          style={{
            padding: '10px 20px',
            backgroundColor: '#1a202c',
            color: '#ffffff',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '500'
          }}
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  )
}

export default App