'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('july_tiles')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('july_tiles')
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
  knex('july_tiles')
  .insert({
    user_id: req.body.user_id,
    theme: req.body.theme,
    type: req.body.type,
    src_string: req.body.src_string,
    repeat_value: req.body.repeat_value,
    size_value: req.body.size_value,
    color_dark: req.body.color_dark,
    color_medium: req.body.color_medium,
    color_light: req.body.color_light
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('july_tiles')
  .where('id', req.params.id)
  .update({
    user_id: req.body.user_id,
    theme: req.body.theme,
    type: req.body.type,
    src_string: req.body.src_string,
    repeat_value: req.body.repeat_value,
    size_value: req.body.size_value,
    color_dark: req.body.color_dark,
    color_medium: req.body.color_medium,
    color_light: req.body.color_light
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

      knex('july_tiles')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('july_tiles')
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
            src_string: record.src_string,
            repeat_value: record.repeat_value,
            size_value: record.size_value,
            color_dark: record.color_dark,
            color_medium: record.color_medium,
            color_light: record.color_light,
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
