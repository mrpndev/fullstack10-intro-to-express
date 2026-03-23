# Starting a server
- within your project folder:
- use `npm init` or `npm init -y` to create a project
- dependency step
	- `npm i express`
	- `npm i nodemon --save-dev`
- `package.json` file updates:
	- create the following scripts:
		- `"start": "node app.js"`
		- `"dev": "nodemon"
	- ensure your "main" file is the one you created

# Express Basic `app.js` Structure

```js
const express = require("express")
const app = express()

const PORT = 4000
const HOST = "127.0.0.1"

app.listen(PORT, HOST, () => {
	console.log(`[sever] listening on ${HOST}:${PORT}`)
})
```

# Files & Meanings

- `/node_modules` folder
	- responsible for keeping the code of all dependencies
- `package.json` file
	- keeps track of all required dependencies
	- has our project information
	- has the entry point
	- has any scripts we want to run