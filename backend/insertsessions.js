const { MongoClient } = require("mongodb");

// MongoDB connection URI (update if needed)
const uri = "mongodb://localhost:27017"; // Change this if using a cloud database
const dbName = "your_database"; // Replace with your actual database name
const collectionName = "sessions"; // Collection where data will be inserted

// Session data
const sessions = [
  {
    sessionId: "TSLA123",
    tileNumber: 1,
    description: "Discussion on Tesla AI advancements and autonomous driving.",
    header: "Tesla AI & Autonomy",
  },
  {
    sessionId: "SPACEX2024",
    tileNumber: 2,
    description: "Exploring the latest developments in SpaceX Starship missions.",
    header: "SpaceX Starship Updates",
  },
  {
    sessionId: "SOLARENERGY",
    tileNumber: 3,
    description: "Tesla's solar energy and Powerwall technology improvements.",
    header: "Tesla Solar Energy & Storage",
  },
  {
    sessionId: "NEURALINK01",
    tileNumber: 4,
    description: "Neuralink's progress in brain-machine interfaces and its future impact.",
    header: "Neuralink & The Brain Revolution",
  },
  {
    sessionId: "HYPERLOOP05",
    tileNumber: 5,
    description: "Evaluating the potential of the Hyperloop as a high-speed transport system.",
    header: "Hyperloop: The Future of Transport",
  },
  {
    sessionId: "TESLA2025",
    tileNumber: 6,
    description: "Tesla's new vehicle lineup, including Cybertruck and Roadster updates.",
    header: "Tesla Future Vehicles",
  },
  {
    sessionId: "MARS2030",
    tileNumber: 7,
    description: "SpaceX’s plans for human colonization of Mars by 2030.",
    header: "Mars Colonization Plan",
  },
  {
    sessionId: "BORINGCO",
    tileNumber: 8,
    description: "Boring Company's underground transportation tunnels and urban impact.",
    header: "The Boring Company: Future of Tunnels",
  },
];

// Function to insert sessions into MongoDB
async function insertSessions() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert data
    const result = await collection.insertMany(sessions);
    console.log(`🎉 Successfully inserted ${result.insertedCount} sessions!`);

  } catch (error) {
    console.error("❌ Error inserting data:", error);
  } finally {
    await client.close();
    console.log("🔌 Disconnected from MongoDB");
  }
}

// Run the function
insertSessions();
