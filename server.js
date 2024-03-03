const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 5000; // Choose any available port

// PostgreSQL connection pool configuration
const pool = new Pool({
  user: 'your_postgres_user',
  host: 'your_postgres_host',
  database: 'your_database_name',
  password: 'your_postgres_password',
  port: 'your_postgres_port',
});

app.get('/api/customers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM customers');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
