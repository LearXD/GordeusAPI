import { pool } from '../database/mysql'

import express from 'express'

const router = express();

router.get('/comments', (req, res) => {
    pool.query("SELECT * FROM comments", (error, result) => {
        if(error) {
            return res.status(500).send({message: error.message})
        }
        res.status(200).send({ message: 'Foram encontrados ' + result.length + ' resultados!', comments: result })
    })
})

router.post('/comments', (req, res) => {

    const { author, comment } = req.body;

    if(!author || !comment) {
        return res.status(304).send({ message: 'Parâmetros de Autor ou Comentário não definidos! '})
    }

    pool.query("INSERT INTO comments (author, comment) VALUES (?, ?)", [author, comment], (error, response) => {
        if(error) {
            return res.status(500).send({ message: 'Não foi possível criar o comentario' })
        }
        res.status(200).send({ message: 'Comentário criado com sucesso!' })
    })
})

export default router;

