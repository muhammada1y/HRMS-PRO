const express = require('express');
const pool = require('./dbconnection.js');
const app = express();
const Jwt = require('jsonwebtoken');
const jwtKey = 'alykey';
const port = 4040;

// Configure your PostgreSQL connection


app.use(express.json());
app.post("/",(req,res) =>{
  	res.send(consol.log("hello"));
});
app.post('/insert-data', (req, res) => {
  const { username, passwordHash } = req.body;
  if(req.body.passwordHash && req.body.username){
    let user
  }
  pool.query(
    'INSERT INTO user_credentials (username, password_hash) VALUES ($1, $2)',
    [username, passwordHash],
    (error, results) => {
      if (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'An error occurred while inserting data' });
      } else {
        console.log('Data inserted successfully');
        res.status(200).json({ message: 'Data inserted successfully' });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
