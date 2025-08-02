// app.js

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config({ silent: true });
const { poolConnect } =  require('./config/db');// connect to SQL Server

const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const quoteRoutes = require('./routes/quote');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());

// Enable sessions
app.use(session({
  secret: process.env.SESSION_SECRET || 'default-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // change to true in production with HTTPS
    sameSite: 'lax'
  }
}));
// Middleware
app.use(cors({
  origin: 'http://localhost:3001', // frontend URL for example 
  credentials: true
}));

app.use(helmet());

app.use(express.json());

// Connect to SQL Server
poolConnect
  .then(() => console.log('Connected to SQL Server'))
  .catch((err) => console.error(' SQL Server connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/quotes', quoteRoutes);

app.use((err, req, res, next) => {
  console.error(' Error:', err.stack || err.message);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
