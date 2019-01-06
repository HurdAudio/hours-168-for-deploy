'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('holidays')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('holidays')
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
  knex('holidays')
  .insert({
    user_id: req.body.user_id,
    name: req.body.name,
    color: req.body.color,
    picture: req.body.picture,
    day_of: req.body.day_of,
    is_annual: req.body.is_annual,
    rule: req.body.rule,
    art_override: req.body.art_override,
    music_override: req.body.music_override,
    override_content: req.body.override_content
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('holidays')
  .where('id', req.params.id)
  .update({
    user_id: req.body.user_id,
    name: req.body.name,
    color: req.body.color,
    picture: req.body.picture,
    day_of: req.body.day_of,
    is_annual: req.body.is_annual,
    rule: req.body.rule,
    art_override: req.body.art_override,
    music_override: req.body.music_override,
    override_content: req.body.override_content
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

      knex('holidays')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('holidays')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            user_id: record.user_id,
            name: record.name,
            color: record.color,
            picture: record.picture,
            day_of: record.day_of,
            is_annual: record.is_annual,
            rule: record.rule,
            art_override: record.art_override,
            music_override: record.music_override,
            override_content: record.override_content,
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
