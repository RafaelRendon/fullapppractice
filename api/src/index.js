const app = require("./app")
const db = require("./config")
const PORT = process.env.PORT

db();
app.listen(PORT , ()=> {console.log(`Server listening on ${PORT}`)})
