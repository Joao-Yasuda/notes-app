const express = require("express")
const app = express()
require("./config/dbconfig")

app.use(express.json())

app.get('/', (req, res)=>{
  return res.json({
    name:"gabriel"
  })
})
app.listen(8080)