// models/Event.js

const mongoose = require('mongoose');

const tile = new mongoose.Schema({
    title: { 
      type: String, 
      required: true 
    },
    description: { 
      type: String, 
      required: true 
    },
    time: {
      type: Date,
      required: true
    },
    speaker: { 
      type: String 
    }
  });

const event = new mongoose.Schema({
    title: { 
      type: String, 
      required: true 
    },
    description: { 
      type: String, 
      required: true 
    },
    time: {
      type: Date,
      required: true
    },
    tiles: [tile]
  });

// Define a schema for the event data
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  events: [event]
});

// Create a model from the schema
const Eventm = mongoose.model('Eventm', eventSchema);


module.exports = Eventm;
