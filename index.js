//standalone server without docker
const express = require('express')

const app = express()
const PORT = 3000
const UUID = new Date().getTime() + randomInt(1, 1000) //server unique id
app.listen(PORT, () => console.log(`listeing on port ${PORT}`))

app.get("/", (req, res) => res.send({
    username: "Bob",
    premium: true,
    nextBillingDate: "01-01-2023",
    country: "KE",
    port: PORT,
    UUID
}))

function randomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min))
}