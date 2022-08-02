import express from 'express'
import morgan from 'morgan'

import bodyParser from 'body-parser';

const api = express(); 

api.use(morgan('dev'));
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

const comments = require('./routes/comments');
api.use('/comments', comments.default);

api.use((req, res, next) => {
    const error = new Error('Not Found');
    //@ts-ignore
    error.status = 404;
    next(error);
})

api.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    })
})

export default api;