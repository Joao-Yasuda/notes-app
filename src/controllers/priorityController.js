const Notes = require('../models/notesData')

module.exports = {
  async read(req,res) {
    const priority = req.query

    const priorityNotes = await Notes.find(priority)

    return res.json(priorityNotes)
  },

  async update(req, res){
    const { id } = req.params

    const notes = await Notes.findOne({ _id: id})

    if(notes.priority){
      notes.priority = false;
    }else{
      notes.priority = true
    }
    await notes.save()

    return res.json(notes)
  }
}