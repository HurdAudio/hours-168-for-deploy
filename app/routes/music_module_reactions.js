'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('music_module_reactions')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('music_module_reactions')
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
  knex('music_module_reactions')
  .insert({
    user_author_id: req.body.user_author_id,
    music_module_theme: req.body.music_module_theme,
    music_module_author_id: req.body.music_module_author_id,
    reaction: req.body.reaction
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('music_module_reactions')
  .where('id', req.params.id)
  .update({
    user_author_id: req.body.user_author_id,
    music_module_theme: req.body.music_module_theme,
    music_module_author_id: req.body.music_module_author_id,
    reaction: req.body.reaction
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

      knex('music_module_reactions')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('music_module_reactions')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            user_author_id: record.user_author_id,
            music_module_theme: record.music_module_theme,
            music_module_author_id: record.music_module_author_id,
            reaction: record.reaction,
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
