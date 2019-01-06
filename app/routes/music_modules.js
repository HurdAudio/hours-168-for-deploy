'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('music_modules')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('music_modules')
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
  knex('music_modules')
  .insert({
    user_author_id: req.body.user_author_id,
    theme: req.body.theme,
    source: req.body.source,
    src_string: req.body.src_string,
    href_string: req.body.href_string,
    a_string: req.body.a_string,
    public: req.body.public
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('music_modules')
  .where('id', req.params.id)
  .update({
    user_author_id: req.body.user_author_id,
    theme: req.body.theme,
    source: req.body.source,
    src_string: req.body.src_string,
    href_string: req.body.href_string,
    a_string: req.body.a_string,
    public: req.body.public
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

      knex('music_modules')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('music_modules')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            user_author_id: record.user_author_id,
            theme: record.theme,
            source: record.source,
            src_string: record.src_string,
            href_string: record.href_string,
            a_string: record.a_string,
            public: record.public,
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
