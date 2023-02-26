const Person = require("../Model/personModel")


let person = new Person({

    name: "Muhammed",
    age: 26,
    favoriteFood: ["hout", "mosli", "makrouna"]
})

const createAndSavePerson = async () => {
    try {
        await person.save()
    } catch (error) {
        console.log(error)
    }
}

let arrayOfPeople = [
    {
        name: "Frez",
        age: 32,
        favoriteFood: ["manga", "frez", "degla"]
    },
    {
        name: "faraselnahr",
        age: 23,
        favoriteFood: ["danette", "gaucho", "sigarou liger"]
    }
]

const createManyPeople = async () => {
    try {
        await Person.create(arrayOfPeople)
    } catch (error) {
        console.log(error)
    }
}

const search = async (searchByName) => {

    try {
        const data = await Person.find({ name: `${searchByName}` })
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

const searchByFood = async (searchByFood) => {
    try {
        const data = await Person.findOne({
            favoriteFood: { $all: [`${searchByFood}`] }
        })
        console.log(data)
    } catch (error) {
        console.log(error)

    }
}

const searchById = async (searchById) => {

    try {
        const data = await Person.findById(`${searchById}`)
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

const updatePerson = async (personId) => {

    try {
        const data = await Person.findById(`${personId}`)
        data.favoriteFood.push("brik")
        data.save()
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

const newUpdatePerson = async (personName) => {

    try {
        const data = await Person.findOneAndUpdate({ name: `${personName}` }, { age: 20 }, { new: true })
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

const removePerson = async (personId) => {

    try {
        const data = await Person.findByIdAndDelete(`${personId}`)
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

const removeManyPeople = async (personName) => {

    try {
        const data = await Person.deleteMany({name:`${personName}`})
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

const chainSearch = async() => {
    try {
        const data = await Person.find({favoriteFood: {$all: ["manga"]}})
        .sort({name: "asc"})
        .limit(2)
        .select("-age")
        .exec()
       console.log(data) 
    } catch (error) {
        console.log(error)
    }
}


module.exports = { createAndSavePerson, createManyPeople, search, searchByFood, searchById, updatePerson, newUpdatePerson, removePerson, removeManyPeople, chainSearch }