const mongoose = require('mongoose');
const Eventm = require('./eventm'); // Import the Event model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tesla', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Sample data
    const sampleEvent = new Eventm({
      name: 'Tesla Event',
      description: 'A special event showcasing Tesla technologies.',
      events: [
        {
          title: 'Tesla Presentation',
          description: 'A presentation on the latest Tesla models.',
          time: new Date('2024-12-20T10:00:00Z'),
          tiles: [
            {
              title: 'Session 1: Electric Cars',
              description: 'A session introducing electric cars and Tesla’s innovations.',
              time: new Date('2024-12-20T11:00:00Z'),
              speaker: 'Elon Musk'
            },
            {
              title: 'Session 2: Self-Driving Cars',
              description: 'An in-depth look at Tesla’s self-driving technology.',
              time: new Date('2024-12-20T12:00:00Z'),
              speaker: 'Franz von Holzhausen'
            }
          ]
        },
        {
          title: 'Tesla Networking Event',
          description: 'A casual networking event for Tesla enthusiasts.',
          time: new Date('2024-12-20T14:00:00Z'),
          tiles: [
            {
              title: 'Session 1: Tesla’s Future',
              description: 'Discussion on the future of Tesla and electric vehicles.',
              time: new Date('2024-12-20T15:00:00Z'),
              speaker: 'Elon Musk'
            }
          ]
        }
      ]
    });

    // Save the sample event to MongoDB
    sampleEvent.save()
      .then((savedEvent) => {
        console.log('Saved Event:', savedEvent);  // Log the saved event data
        mongoose.connection.close();  // Close the MongoDB connection
      })
      .catch(err => {
        console.log('Error saving event:', err);
      });
  })
  .catch(err => {
    console.log('Error connecting to MongoDB:', err);
  });
