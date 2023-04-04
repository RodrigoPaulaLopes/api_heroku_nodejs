const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

PORT = process.env.PORT
const app = express()

app.get('/api/hello', (req, res) => {
    res.status(200).json({"response": "hello world"})
})
app.listen(PORT, console.log(`http://localhost:${PORT}/api`))