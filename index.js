const express = require('express')

const app = express()
const PORT = 3000
app.listen(PORT, () => console.log(`listeing on port ${PORT}`))

app.get("/", (req, res) => res.send({
    username: "Bob",
    premium: true,
    nextBillingDate: "01-01-2023",
    country: "KE"
}))