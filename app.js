const express = require('express');
const pool = require('./dbconnection.js');
const app = express();
const jwt = require('jsonwebtoken');
const jwtKey = 'alykey';
const port = 4040;

app.use(express.json());

// API endpoint to register a new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // You should hash the password securely before storing it in the database
  // For simplicity, we're assuming it's already hashed here
  pool.query(
    'INSERT INTO user_credentials (username, password_hash) VALUES ($1, $2)',
    [username, password],
    (error, results) => {
      if (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'An error occurred while registering the user' });
      } else {
        console.log('User registered successfully');
        res.status(200).json({ message: 'User registered successfully' });
      }
    }
  );
});

// API endpoint to generate a JWT token after successful login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Authenticate the user (you should check credentials in your database)
  if (username === 'sampleUser' && password === 'samplePassword') {
    // Generate a JWT token
    const token = jwt.sign({ username: username }, jwtKey, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
