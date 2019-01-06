'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('bills')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('bills')
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
  knex('bills')
  .insert({
    user_id: req.body.user_id,
    name: req.body.name,
    pay_to: req.body.pay_to,
    address_line1: req.body.address_line1,
    address_line2: req.body.address_line2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    balance: req.body.balance,
    amount_due: req.body.amount_due,
    amount_paid: req.body.amount_paid,
    due_date: req.body.due_date,
    date_paid: req.body.date_paid,
    is_paid: req.body.is_paid
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('bills')
  .where('id', req.params.id)
  .update({
    user_id: req.body.user_id,
    name: req.body.name,
    pay_to: req.body.pay_to,
    address_line1: req.body.address_line1,
    address_line2: req.body.address_line2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    balance: req.body.balance,
    amount_due: req.body.amount_due,
    amount_paid: req.body.amount_paid,
    due_date: req.body.due_date,
    date_paid: req.body.date_paid,
    is_paid: req.body.is_paid
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

      knex('bills')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('bills')
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
            pay_to: record.pay_to,
            address_line1: record.address_line1,
            address_line2: record.address_line2,
            city: record.city,
            state: record.state,
            zip: record.zip,
            balance: record.balance,
            amount_due: record.amount_due,
            amount_paid: record.amount_paid,
            due_date: record.due_date,
            date_paid: record.date_paid,
            is_paid: record.is_paid,
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
