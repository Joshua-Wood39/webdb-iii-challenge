const router = require('express').Router();
const knex = require('knex');

const knexConfig = {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: "./data/lambda.sqlite3"
    },
};

const db = knex(knexConfig);

router.get('/', (req, res) => {
    db('students')
    .then(students => {
        res.status(200).json(students);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('students')
    .where({ id })
    .first()
    .then(student => {
        res.status(200).json(student);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})


router.post('/', (req, res) => {
    const { name, cohort_id } = req.body;

    if(name !== undefined || name !== "" || cohort_id !== undefined || cohort_id !== "") {
    db('students')
    .insert(req.body)
    .then(student => {
        res.status(201).json(student);
    })
    .catch(error => {  
        res.status(500).json(error);
    })
    } else {
        res.status(400).json({ errorMessage: "Please provide a name and cohort-id"})
    }

})

router.put('/:id', (req, res) => {
    const { id } = req.params;

    db('students')
    .where({ id })
    .update(req.body)
    .then(count => {
        if (count > 0) {
            res.status(200).json(count);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('students')
    .where({ id })
    .del()
    .then(count => {
        if (count > 0) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });

})

module.exports = router;