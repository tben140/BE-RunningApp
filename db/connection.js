const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/project-bhilt';

mongoose.connect(DB_URL)
    .then(() => console.log(`Connected to database ${DB_URL}`))
    .catch(console.log);