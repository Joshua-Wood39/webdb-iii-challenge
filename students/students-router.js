const router = require('express').Router();
const knex = require('knex');

const knexConfig = {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: "./data/lambda.sqlite3"
    },
};

const stuDb = knex(knexConfig);



module.exports = router;