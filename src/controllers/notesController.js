const Notes = require('../models/notesData')

module.exports = {

  async read(req, res){
    const notesList = await Notes.find();

    return res.json(notesList)
  },

  async create(req, res){
    const {title, notes, priority} = req.body

    if(!notes || !title){
      return res.status(404).json({error:"title"})
    }
    
    const notesCreated = await Notes.create({
      title,
      notes, 
      priority
    });

    return res.json(notesCreated)
  },

  async delete(req, res){
    const { id } = req.params;
    
    const notesDeleted = await Notes.findOneAndDelete({ _id : id })

    if(notesDeleted){
      return res.json(notesDeleted)
    }

    return res.status(404).json({error:"titleDelete"})

  }

}