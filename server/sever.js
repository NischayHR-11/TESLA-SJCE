const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Eventm = require('./eventm');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));


app.get('/', (req, res) => {
  res.send('Hello from server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.post('/api/events', async (req, res) => {
    const { name, description, events } = req.body;
  
    // Check if events are passed and correctly formatted
    if (!Array.isArray(events)) {
      return res.status(400).json({ message: 'Events should be an array' });
    }
  
    // Create a new Eventm document with the provided data
    const newEvent = new Eventm({
      name,
      description,
      events,
    });
  
    try {
      // Save the event to the database
      await newEvent.save();
      res.status(201).json(newEvent);  // Return the saved event as a response
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error saving event' });
    }
  });
