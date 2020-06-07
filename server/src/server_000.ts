import express, { response } from 'express'

const app = express();
const users = ['elton','emerson','daura']

app.get('/users', (request, response) => {
    //console.log('listagem de usuarios');

    const search = String(request.query.search)
    const filtered = search ? users.filter( user => user.includes(search)):users
    return response.json(filtered)
    //response.json()
    
})

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id)

    const user = users[id]

    return response.json(user)
})


app.post('/users', (request, response) => {
    const user = {
        nome: 'elton Marinho',
        email: 'eltoncarv@yahoo.com.br'
    }
    return response.json(user);
})



app.listen(3343);