import express from 'express'
import "dotenv/config.js"
import cors from "cors"
import connectDB from "./Db/db.config.js"


const app = express()
const port = process.env.PORT || 5001


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

import contact from "./router/contact.js"
import skill from './router/skill.js'
import project from "./router/project.js"


app.use("/contact",contact)
app.use('/skill',skill)
app.use('/project',project)


app.get('/', (req, res) => {
  res.send('Hello World!')
})


connectDB().then(() => {
    
    app.listen(port, () => {
        console.log(`i am listening on ${port}`)
    })
    
})