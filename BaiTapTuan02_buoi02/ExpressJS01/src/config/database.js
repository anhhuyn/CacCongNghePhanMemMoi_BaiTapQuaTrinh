require('dotenv').config();                             // Load biến môi trường từ .env
const mongoose = require('mongoose');

const dbState = [
  { value: 0, label: "Disconnected" },
  { value: 1, label: "Connected" },
  { value: 2, label: "Connecting" },
  { value: 3, label: "Disconnecting" },
];

const connection = async () => {
  await mongoose.connect(process.env.MONGO_DB_URL);     // URL lấy từ .env
  const state = Number(mongoose.connection.readyState); // Trạng thái hiện tại
  console.log(dbState.find(f => f.value === state).label, "to database");
};

module.exports = connection;
