# Northcoders Final Project Backend

This repo is the back end repo for the Saviar Northcoders project group. The application that we built is a running app that will create a running route for the user, avoiding the most heavily polluted local areas. This back end builds the API that the front end interacts with.

## Building the API

The API uses a NoSQL database (Mongo DB / Mongo DB Atlas) and is built using Mongoose and Express. The code was then hosted on Google Cloud Platform [here.](https://project-bhilt.appspot.com/api/)

The front end repo can be found [here.](https://github.com/BHILT-RunningApp/Front-End-React-Native-XCode)

## Getting Started

To run the project locally, clone this respository by running the code below in your terminal:

    git clone https://github.com/BHILT-RunningApp/BE-RunningApp.git

`cd` into the directory and install the required dependencies ( dotenv(^8.2.0), express(^4.17.1), mongoose(^5.7.13)) by running the code below in the directory:

    npm install

You will need to create a .env file which should be git-ignored and should look like the below code: 

    DB_URI='mongodb+srv://<YOUR PROJECT NAME>:<YOUR PASSWORD>@<YOUR PROJECT NAME>-ze2oc.gcp.mongodb.net/<YOUR PROJECT NAME>?retryWrites=true&w=majority'

To seed your database on MongoDB Atlas you can run the `seed-atlas.js` file locally:

    node seed-atlas.js

TO run the spec file and test the endpoints, install mocha, chai, supertest, and faker. To run the tests use the command

    npm test

## Endpoints

The API has the following endpoints available to the user

```
GET /api/users
POST /api/users
PATCH /api/users
GET /api/pollution-points
GET /api/pollution-points/:id

```

## Built With 

- [Node.js](https://nodejs.org/en/) - Javascript runtime
- [Mongo DB Atlas](https://www.mongodb.com/cloud/atlas/lp/general/try?utm_source=google&utm_campaign=gs_emea_united%20kingdom_search_brand_atlas_desktop&utm_term=mongo%20db%20atlas&utm_medium=cpc_paid_search&utm_ad=e&_bt=335278754561&_bn=g&gclid=EAIaIQobChMI7-OYp6Ww5gIVRrDtCh0GSwHLEAAYASAAEgLtKvD_BwE) - Document based NoSQL database
- [Express](https://expressjs.com/) - a web framework for Node.js
- [Mongoose](https://mongoosejs.com/) - Mongo object modelling 
