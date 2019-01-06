'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('december_arts')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('december_arts')
    .select()
    .where('id', req.params.id)
    .first()
    .then((blog) => {
      if (!blog) {
        return next();
      }

      res.send(blog);
    })
    .catch((err) => {
      next(err);
    });
});


router.post('/', (req, res, next) => {
  knex('december_arts')
  .insert({
    user_id: req.body.user_id,
    theme: req.body.theme,
    img_path: req.body.img_path,
    title: req.body.title,
    artist: req.body.artist,
    year: req.body.year,
    rule: req.body.rule
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('december_arts')
  .where('id', req.params.id)
  .update({
    user_id: req.body.user_id,
    theme: req.body.theme,
    img_path: req.body.img_path,
    title: req.body.title,
    artist: req.body.artist,
    year: req.body.year,
    rule: req.body.rule
  }, '*')
    .then((results)=>{
       res.status(200).send(results[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/:id', (req, res, next) => {
    let record;

      knex('december_arts')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('december_arts')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            user_id: record.user_id,
            theme: record.theme,
            img_path: record.img_path,
            title: record.title,
            artist: record.artist,
            year: record.year,
            rule: record.rule,
            created_at: record.created_at,
            updated_at: record.updated_at

          };

          res.send(obj);
        })
        .catch((err) => {
          next(err);
        });
    });




module.exports = router;
