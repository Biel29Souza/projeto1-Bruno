import conexao from "../database/conexao.js"


// index(): listar tudo
// show(): listar por id
// store(): criar(armazenar) dados
// update(): atualizar dados
// delete(): remover dados

class CursoController {
    index(req, res) {
        const sql = "SELECT * FROM cursos;"
        conexao.query(sql, (error, results) => {
            if (error) {
                console.log(error)  // Loga erro no servidor
                res.status(404).json({ 'error': error })
            } else {
                res.status(200).json(results)
            }
        })    
    }

    show() { }
    store() { }
    update() { }
    delete() { }
}



export default new CursoController()