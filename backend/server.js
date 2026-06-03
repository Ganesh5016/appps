// Import Express and create a new app
const express = require('express');
const app = express();
// Import PostgreSQL database driver
const { Pool } = require('pg');
const pool = new Pool({
  user: 'username',
  host: 'localhost',
  database: 'socialconnect',
  password: 'password',
  port: 5432,
});
// Create a new route for user authentication
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  // Query database to verify user credentials
  pool.query(`SELECT * FROM users WHERE username = $1 AND password = $2`, [username, password], (err, results) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Database error' });
    } else if (results.rows.length === 0) {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    } else {
      res.json({ success: true, message: 'User authenticated successfully' });
    }
  });
});
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});