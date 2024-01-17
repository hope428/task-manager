const db = require("../config/connection");
const Task = require("../models/Task");

const taskData = require("./taskData.json");

db.once("open", async () => {
  await Task.deleteMany({});

  const tasks = await Task.insertMany(taskData);
  console.log("Tasks seeded! 🌱 🌱");
  process.exit(0);
});
