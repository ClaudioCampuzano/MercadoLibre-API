import express from 'express'
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (_req, res) => {
    res.json({'message': 'ok'});
  })

const PORT = 12345

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})