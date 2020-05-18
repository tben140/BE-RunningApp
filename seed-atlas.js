require("dotenv").config();
const { pollutionPointsData } = require("./db/data/development-data/index.js");
const { usersData } = require("./db/data/development-data/index.js");
const {
    aqiCalculate,
    calcLatLong
} = require("./utils/pollutionPointsUtils.js");

const MongoClient = require('mongodb').MongoClient;

const url = process.env.DB_URI;
const dbName = 'project-bhilt';

(async function () {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db(dbName);




        const updatedPollutionPointsData = aqiCalculate(pollutionPointsData);
        const pollutionPointsWithCoords = calcLatLong(updatedPollutionPointsData);

        r = await db.collection('pollutionpoints').insertMany(pollutionPointsWithCoords);
        r = await db.collection('users').insertMany(usersData);




    } catch (err) {
        console.log(err.stack);
    }

    // Close connection
    client.close();
})();