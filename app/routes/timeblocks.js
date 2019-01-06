'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('timeblocks')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('timeblocks')
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
  knex('timeblocks')
  .insert({
    user_id: req.body.user_id,
    block_type: req.body.block_type,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    user_notes: req.body.user_notes,
    location: req.body.location,
    block_data: req.body.block_data
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('timeblocks')
  .where('id', req.params.id)
  .update({
    user_id: req.body.user_id,
    block_type: req.body.block_type,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    user_notes: req.body.user_notes,
    location: req.body.location,
    block_data: req.body.block_data
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

      knex('timeblocks')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('timeblocks')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            user_id: record.user_id,
            block_type: record.block_type,
            start_time: record.start_time,
            end_time: record.end_time,
            user_notes: record.user_notes,
            location: record.location,
            block_data: record.block_data,
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
