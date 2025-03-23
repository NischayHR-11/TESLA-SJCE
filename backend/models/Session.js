const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  tileNumber: { type: Number, required: true },
  description: { type: String, required: true },
  header: { type: String, required: true },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
