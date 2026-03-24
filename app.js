// import of express from dependency into our file
const express = require("express")
// invoking express function so we can call its methods
const app = express()

// door to our server
const PORT = 4000
// address to our server
const HOST = "127.0.0.1"

// GET /test route
app.get("/test", (req, res) => {
	console.log("/test endpoint has been hit")
	console.log(req)
})

// function that creates a listener on said socket (host + port)
app.listen(PORT, HOST, () => {
	console.log(`[sever] listening on ${HOST}:${PORT}`)
})