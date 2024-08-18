const mongoose = require('mongoose')

const notesDateSchema = new mongoose.Schema({
  title:String,
  notes:String,
  priority: Boolean
})

module.exports = mongoose.model('Notes', notesDateSchema)