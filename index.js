//Option + ( = {
const express = require('express')
const app = express()

const port = 3598

const movies = {
    "titanic": "dicaprio , kate ,", 
    "Iron man": "james , eric,amine",
}
app.get("/movies/:id",(req, resp) => { 
    if (movies[req.params.id] == undefined) { 
        resp.send(` no movie with ${req.params.id} could be found`)
       
    }
    else{resp.send(`Actors in movie ${req.params.id} :${movies[req.params.id]}`)} 
    
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})