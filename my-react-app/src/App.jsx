import React, { useState } from 'react';

function App() {
  // 1. STATE: These variables hold data that changes over time
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // 2. EVENT HANDLERS: Functions that run when buttons are clicked or text is typed
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Helper check: is count even or odd?
  const isEven = count % 2 === 0;

  return (
    <div style={styles.container}>
      {/* Feature 2: Main Heading */}
      <h1>My First React App</h1>

      {/* Feature 3: Paragraph about yourself */}
      <p style={styles.bio}>
        Hi there! I am a beginner web developer learning React to build interactive and dynamic user interfaces.
      </p>

      <hr style={styles.divider} />

      {/* Feature 4: Counter Section */}
      <section style={styles.section}>
        <h2>Counter</h2>
        <h3 style={styles.countDisplay}>{count}</h3>

        <div>
          <button style={styles.button} onClick={handleIncrease}>
            Increase
          </button>
          <button style={styles.button} onClick={handleDecrease}>
            Decrease
          </button>
          {/* Bonus: Reset button */}
          <button style={{ ...styles.button, backgroundColor: '#f44336' }} onClick={handleReset}>
            Reset
          </button>
        </div>

        {/* Feature 5: Even / Odd Message */}
        <p style={styles.evenOddText}>
          {isEven ? 'Even number' : 'Odd number'}
        </p>
      </section>

      <hr style={styles.divider} />

      {/* Feature 6: Name Input Field */}
      <section style={styles.section}>
        <h2>Personalized Greeting</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          style={styles.input}
        />

        {/* Feature 7 & Bonus: Conditional greeting with lighter red color */}
        {name.trim() !== '' && (
          <p style={styles.greeting}>
            Hello, {name}! Welcome to my React app.
          </p>
        )}
      </section>

      <hr style={styles.divider} />

      {/* Bonus: Footer with dynamic current year */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} My React Journey. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Simple styling to make the app look clean and centered
const styles = {
  container: {
    maxWidth: '550px',
    margin: '40px auto',
    padding: '24px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#ffffff',
    color: '#333'
  },
  bio: {
    fontSize: '15px',
    color: '#666',
    lineHeight: '1.5'
  },
  divider: {
    margin: '25px 0',
    border: 'none',
    borderTop: '1px solid #eee'
  },
  section: {
    margin: '20px 0'
  },
  countDisplay: {
    fontSize: '48px',
    margin: '10px 0'
  },
  button: {
    margin: '0 6px',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  evenOddText: {
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '12px',
    color: '#444'
  },
  input: {
    padding: '10px 14px',
    fontSize: '15px',
    width: '70%',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  greeting: {
    marginTop: '16px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#e57373' // Bonus: Lighter shade of red
  },
  footer: {
    marginTop: '20px',
    fontSize: '13px',
    color: '#888'
  }
};

export default App;