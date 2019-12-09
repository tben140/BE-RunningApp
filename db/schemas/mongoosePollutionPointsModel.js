const mongoose = require("mongoose");
const pollutionPointsSchema = new mongoose.Schema({
  name: String,
  id: Number,
  pp_coordinates: {
    lat: Number,
    long: Number
  },
  am: {
    pollutants: {
      no2: Number,
      pm10: Number,
      so2: Number,
      o3: Number,
      pm25: Number
    },
    aqi: Number,
    top_corner: {
      lat: Number,
      long: Number
    },
    bottom_corner: {
      lat: Number,
      long: Number
    }
  },
  midday: {
    pollutants: {
      no2: Number,
      pm10: Number,
      so2: Number,
      o3: Number,
      pm25: Number
    },
    aqi: Number,
    top_corner: {
      lat: Number,
      long: Number
    },
    bottom_corner: {
      lat: Number,
      long: Number
    }
  },
  pm: {
    pollutants: {
      no2: Number,
      pm10: Number,
      so2: Number,
      o3: Number,
      pm25: Number
    },
    aqi: Number,
    top_corner: {
      lat: Number,
      long: Number
    },
    bottom_corner: {
      lat: Number,
      long: Number
    }
  }
});

const PollutionPointsModel = mongoose.model(
  "PollutionPoint",
  pollutionPointsSchema
);

module.exports = { PollutionPointsModel };
