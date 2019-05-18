'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('tile_shares')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('tile_shares')
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
  knex('tile_shares')
  .insert({
    user_id: req.body.user_id,
    tiles_month: req.body.tiles_month,
    tiles_id: req.body.tiles_id,
    share_associate_id: req.body.share_associate_id,
    responded: req.body.responded,
    accepted: req.body.accepted
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('tile_shares')
  .where('id', req.params.id)
  .update({
    user_id: req.body.user_id,
    tiles_month: req.body.tiles_month,
    tiles_id: req.body.tiles_id,
    share_associate_id: req.body.share_associate_id,
    responded: req.body.responded,
    accepted: req.body.accepted
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

      knex('tile_shares')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('tile_shares')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            user_id: record.user_id,
            tiles_month: record.tiles_month,
            tiles_id: record.tiles_id,
            share_associate_id: record.share_associate_id,
            responded: record.responded,
            accepted: record.accepted,
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
