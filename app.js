require('dotenv').config();
const express = require('express');

const app = express();

// Route to get system details
app.get('/system-info', (req, res) => {
    const systemDetails = {
        platform: process.platform,
        nodeVersion: process.version,
        arch: process.arch,
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage(),
    };
    res.json(systemDetails);
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));