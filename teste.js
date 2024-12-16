import express from 'express';

// const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Test app running on port 8080');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
