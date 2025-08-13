//# aula1
import express from 'express'
const app = express()


app.use(express.json())

const cursos = [
    {id: 1, disciplina: 'ADS'},
    {id: 2, disciplina: 'ADS'},
    {id: 3, disciplina: 'ADS'},
    {id: 4, disciplina: 'ADS'}

]

//## aula2
// buscando o id do curso
function buscarCursosPorId(id) {
    return cursos.filter( curso => curso.id == id)
}

function buscarIndexCurso(id) {
    return cursos.findIndex( curso => curso.id == id)
}


// Criando uma rota default (endpoint)
app.get('/', (req, res) => {
    res.send('Hello Gabriel')
})


app.get('/cursos', (req, res) => {
    res.status(200).send(cursos)
})


//## aula2 
app.post('/cursos', (req, res) => {
    cursos.push(req.body)
    res.status(200).send('Seleção cadastrada com sucesso!')
})
//## aula2
// app.get('/cursos/:id', (req, res) => {
//     let index = req.params.id
//     console.log(index)
// })
//## aula2
// buscando o id do curso
app.get('/cursos/:id', (req, res) => {
    res.json(buscarCursosPorId(req.params.id))
})

//## aula2
// deletar
// app.delete('/cursos/:id', (req, res) => {
//     let index = buscarIndexCurso(req.params.id)
//     console.log(index)
// })
//## aula2
// deletar - DELETE
app.delete('/cursos/:id', (req, res) => {
    let index = buscarIndexCurso(req.params.id)
    cursos.splice(index, 1)
    console.log(index)
    res.send(`O curso com id ${req.params.id} excluído com sucesso!`)
})

//## aula2
// atualizar - UPDATE
app.put('/cursos/:id', (req, res) => {
    let index = buscarIndexCurso(req.params.id)
    cursos[index].disciplina = req.body.disciplina
    res.json(cursos)
    //res.send(`O curso com id ${req.params.id} atualizado com sucesso!`)
})




export default app