const mongoose = require('mongoose');

const dbConfig = "mongodb+srv://joaoyasuda:123@cluster0.2gwpd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;