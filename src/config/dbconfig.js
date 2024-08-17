const mongoose = require('mongoose')

const dbConfig =  'mongodb+srv://joaoyasuda:123cluster0.2gwpd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connection = mongoose.connect(dbConfig, {
    userNewUrlParser:true,
    useUnifiedTopology:true
})

module.exports = connection