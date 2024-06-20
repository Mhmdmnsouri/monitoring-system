// create api with express

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// home page sensor api
app.get("/sensors/list", (req, res) => {
  const humidityVal = Math.floor(Math.random() * 100);
  const temperatureVal = Math.floor(Math.random() * 100);
  const voltageVal = Math.floor(Math.random() * 200);
  res.json({
    humidity: humidityVal,
    temperature: temperatureVal,
    voltage: voltageVal,
  });
});

// getting 8hours data function
const get8hSensorData = (max) => {
  const tempArr = [];
  for (let i = 0; i < 480; i++) {
    const value = Math.floor(Math.random() * max);
    tempArr.push(value);
  }
  return tempArr;
};

// humidity api
app.get("/sensor/humidity", (req, res) => {
  const arr = get8hSensorData(100);
  res.json({ humidity_data: arr });
});

// temperature api
app.get("/sensor/temperature", (req, res) => {
  const arr = get8hSensorData(100);
  res.json({ temperature_data: arr });
});

// voltage api
app.get("/sensor/voltage", (req, res) => {
  const arr = get8hSensorData(200);
  res.json({ voltage_data: arr });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
