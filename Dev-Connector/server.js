const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express()

// Connect o mongoDB Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req,res) => res.send('API Running'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
 });
}

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server staring on port ${PORT}`));