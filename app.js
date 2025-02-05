require('dotenv').config();
const express = require('express');
const mysql = require('mysql');

const app = express();

// Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to database');
});

// Route to get database server details
app.get('/db-info', (req, res) => {
    console.log({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });
    db.query('SELECT VERSION() AS version, DATABASE() AS database_name, USER() AS user', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results[0]);
    });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));