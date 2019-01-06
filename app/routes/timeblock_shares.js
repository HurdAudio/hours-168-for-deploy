'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('timeblock_shares')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('timeblock_shares')
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
  knex('timeblock_shares')
  .insert({
    user_id: req.body.user_id,
    timeblock_id: req.body.timeblock_id,
    share_associate_id: req.body.share_associate_id,
    accepted: req.body.accepted,
    responded: req.body.responded
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('timeblock_shares')
  .where('id', req.params.id)
  .update({
    user_id: req.body.user_id,
    timeblock_id: req.body.timeblock_id,
    share_associate_id: req.body.share_associate_id,
    accepted: req.body.accepted,
    responded: req.body.responded,
    updated_at: req.body.updated_at
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

      knex('timeblock_shares')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('timeblock_shares')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            user_id: record.user_id,
            timeblock_id: record.timeblock_id,
            share_associate_id: record.share_associate_id,
            accepted: record.accepted,
            responded: record.responded
          };

          res.send(obj);
        })
        .catch((err) => {
          next(err);
        });
    });




module.exports = router;
