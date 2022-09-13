const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000
console.log(`env port is ${process.env.PORT}`)
app.listen(PORT, () => console.log(`listeing on port ${PORT}`))

app.get("/", (req, res) => res.send({
    username: "Bob",
    premium: true,
    nextBillingDate: "01-01-2023",
    country: "KE",
    port: PORT
}))