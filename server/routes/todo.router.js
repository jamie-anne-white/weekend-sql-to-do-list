const express = require('express');
const router = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');


// GET
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "todo";';
  pool.query(queryText).then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting todo GET', error);
    res.sendStatus(500);
  });
})

// POST


// DELETE


module.exports = router;