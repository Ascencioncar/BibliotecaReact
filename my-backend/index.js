// backend/index.js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('ep-summer-cake-a4e24s8l-pooler.us-east-1.aws.neon.tec', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    // Imprimir los resultados en la consola
    console.log(rows);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
