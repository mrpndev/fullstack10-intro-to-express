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
	// response object gives us access to its different method
	// .send() method allows to send buffer, JSON, text, or HTML response
	res.send("<h1 style='color: red'>I'm here, what do you want?!</h1>")
})

/* 
	? Challenge
	* create a new GET endpoint at /
	* within the callback, send a response
	* the response should send a 201 status code (explicitly)
	* the response should also send a JSON object with two properties:
		* message: "This is the / endpoint"
		* status: "The server is running"
	* HINT: you might need to search the docs for the method(s) to do this with

	! HARD MODE
	* instead of hardcoding the endpoint, try and pull it from the request?????
*/

app.get("/", (req, res) => {
	let currentEndpoint = req.path
	res.status(201).json({
		message: `This is the ${currentEndpoint} endpoint`,
		status: "The server is running"
	})
})

// function that creates a listener on said socket (host + port)
app.listen(PORT, HOST, () => {
	console.log(`[sever] listening on ${HOST}:${PORT}`)
})