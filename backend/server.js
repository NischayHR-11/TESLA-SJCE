const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 5000;

// MongoDB connection details
const uri = "mongodb://localhost:27017"; // Change if using a remote database
const dbName = "your_database"; // Replace with your actual database name
const collectionName = "sessions"; // Collection name

app.use(cors()); // Enable CORS for frontend communication
app.use(express.json()); // Enable JSON request body parsing

// Fetch all sessions from MongoDB
app.get("/api/sessions", async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const sessions = await collection.find({}).toArray();
    res.json(sessions);
  } catch (error) {
    console.error("Error fetching sessions:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }
});


app.get("/api/events/:eventId", async (req, res) => {
  const client = new MongoClient(uri);
  try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      const event = await collection.findOne({ eventId: req.params.eventId });

      if (!event) {
          return res.status(404).json({ message: "Event not found" });
      }

      res.json(event);
  } catch (error) {
      console.error("Error fetching event:", error);
      res.status(500).json({ message: "Internal Server Error" });
  } finally {
      await client.close();
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
