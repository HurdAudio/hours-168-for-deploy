'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();


router.get('/:user_author_id', (req, res, next) => {
  knex('art_modules')
  .select()
  .where('user_author_id', req.params.user_author_id)
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});




module.exports = router;
