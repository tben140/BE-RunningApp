
const { fetchPollutionPoints } = require("../models/pollutionPointsModel.js");


const getPollutionPoints = (req, res, next) => {
  fetchPollutionPoints()
    .then(pollutionPoints => {
      res.status(200).json({ pollutionPoints });
    })
    .catch(next);
};

module.exports = { getPollutionPoints };
