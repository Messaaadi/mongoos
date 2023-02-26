const express = require("express")
const connectDB = require("./DB/connectDB")
const Person = require("./Model/personModel")

require("dotenv").config()

const queries = require("./Queries/queries")

// queries.createAndSavePerson();
// queries.createManyPeople();
// queries.search("Muhammed");
// queries.searchByFood("frez");
// queries.searchById("63fb9de40d3246c59442909d");
// queries.updatePerson("63fba1e118a2c77976b5b09c")
// queries.newUpdatePerson("Frez");
// queries.removePerson("63fba1e118a2c77976b5b09d");
// queries.removeManyPeople("Frez");
queries.chainSearch();

connectDB()

const app = express()

const PORT = process.env.PORT

app.listen(PORT, (err) => {
    err ? console.log(err)
        : console.log(`Server is running on port ${PORT}`)
})
