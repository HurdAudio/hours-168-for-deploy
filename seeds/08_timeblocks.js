'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('timeblocks').del()
    .then(function () {
      // Inserts seed entries
      return knex('timeblocks').insert([
        {
          id: 1,
          user_id: 1,
          block_type: 1,
          start_time: new Date('2017-07-17T00:00:00'),
          end_time: new Date('2017-07-17T06:00:00'),
          user_notes: null,
          location: 'home',
          block_data: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          block_type: 2,
          start_time: new Date('2017-07-17T06:30:00'),
          end_time: new Date('2017-07-17T07:30:00'),
          user_notes: null,
          location: 'around the neighborhood',
          block_data: {
            "exertionString": 5
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          block_type: 8,
          start_time: new Date('2017-07-17T07:30:00'),
          end_time: new Date('2017-07-17T08:30:00'),
          user_notes: null,
          location: '',
          block_data: {
            "mealType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          block_type: 5,
          start_time: new Date('2017-07-17T09:00:00'),
          end_time: new Date('2017-07-17T11:00:00'),
          user_notes: 'Follow up with recruiters reaching out via LinkedIn',
          location: '',
          block_data: {
            "resources": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          block_type: 9,
          start_time: new Date('2017-07-17T11:00:00'),
          end_time: new Date('2017-07-17T11:30:00'),
          user_notes: null,
          location: '',
          block_data: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          block_type: 3,
          start_time: new Date('2017-07-17T11:30:00'),
          end_time: new Date('2017-07-17T12:00:00'),
          user_notes: 'Post office run',
          location: 'Post Office',
          block_data: {
            "adminType": 3
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          block_type: 8,
          start_time: new Date('2017-07-17T12:00:00'),
          end_time: new Date('2017-07-17T13:00:00'),
          user_notes: null,
          location: '',
          block_data: {
            "mealType": 2
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          block_type: 4,
          start_time: new Date('2017-07-17T13:00:00'),
          end_time: new Date('2017-07-17T15:00:00'),
          user_notes: null,
          location: '',
          block_data: {
            "project": 1
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          block_type: 14,
          start_time: new Date('2019-08-10T15:00:00'),
          end_time: new Date('2019-08-10T16:00:00'),
          user_notes: "Bring the donuts",
          location: 'Big Meeting Room',
          block_data: {
            "meetingType": 2,
            "attendees": [ 'Bradley Efting', 'Anna Banana', 'Lex Luthor', 'Benson Hedges', 'McCormick Schmick'],
            "objective": ["Tighten the protocol budgets"]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          block_type: 3,
          start_time: new Date('2017-07-17T16:00:00'),
          end_time: new Date('2017-07-17T16:30:00'),
          user_notes: "Email tag time",
          location: 'Home office',
          block_data: {
            "adminType": 2
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          block_type: 4,
          start_time: new Date('2017-07-17T16:30:00'),
          end_time: new Date('2017-07-17T17:30:00'),
          user_notes: "Email tag time",
          location: 'Home office',
          block_data: {
            "project": 2
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          block_type: 10,
          start_time: new Date('2017-07-17T17:30:00'),
          end_time: new Date('2017-07-17T19:00:00'),
          user_notes: 'Write review of ARC',
          location: 'Home office',
          block_data: {
            "readingType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          block_type: 16,
          start_time: new Date('2017-07-17T19:00:00'),
          end_time: new Date('2017-07-17T22:00:00'),
          user_notes: "Astros v. Mariners",
          location: 'MLB.TV',
          block_data: {
            "eventType": 3,
            "streamingURL": ["https://mlb.tv"]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          block_type: 1,
          start_time: new Date('2017-07-17T22:00:00'),
          end_time: new Date('2017-07-17T24:00:00'),
          user_notes: null,
          location: '',
          block_data: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          block_type: 1,
          start_time: new Date('2017-11-17T22:00:00.000Z'),
          end_time: new Date('2017-11-18T00:00:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          block_type: 10,
          start_time: new Date('2017-11-17T19:30:00.000Z'),
          end_time: new Date('2017-11-17T22:00:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0,
            "readingType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          block_type: 8,
          start_time: new Date('2017-11-17T18:30:00.000Z'),
          end_time: new Date('2017-11-17T19:30:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0,
            "mealType": 2
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          block_type: 9,
          start_time: new Date('2017-11-17T18:00:00.000Z'),
          end_time: new Date('2017-11-17T18:30:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          block_type: 6,
          start_time: new Date('2017-11-17T14:30:00.000Z'),
          end_time: new Date('2017-11-17T18:00:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          block_type: 8,
          start_time: new Date('2017-11-17T13:30:00.000Z'),
          end_time: new Date('2017-11-17T14:30:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0,
            "mealType": 3
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          block_type: 9,
          start_time: new Date('2017-11-17T13:00:00.000Z'),
          end_time: new Date('2017-11-17T13:30:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          block_type: 6,
          start_time: new Date('2017-11-17T10:00:00.000Z'),
          end_time: new Date('2017-11-17T13:00:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          block_type: 3,
          start_time: new Date('2017-11-17T07:30:00.000Z'),
          end_time: new Date('2017-11-17T09:00:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0,
            "adminType": 2
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          block_type: 8,
          start_time: new Date('2017-11-17T06:30:00.000Z'),
          end_time: new Date('2017-11-17T07:30:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0,
            "mealType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          block_type: 1,
          start_time: new Date('2017-11-17T00:00:00.000Z'),
          end_time: new Date('2017-11-17T05:00:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          block_type: 18,
          start_time: new Date('2017-11-17T05:00:00.000Z'),
          end_time: new Date('2017-11-17T06:30:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          block_type: 15,
          start_time: new Date('2017-11-18T11:00:00.000Z'),
          end_time: new Date('2017-11-18T14:00:00.000Z'),
          user_notes: "Live from the Met: The Exterminating Angel by Tomas Ades",
          location: "Century Boulder 1700 29th Street Boulder, CO 80302",
          block_data: {
            "adminType": 0,
            "eventType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          block_type: 1,
          start_time: new Date('2017-11-16T21:00:00.000Z'),
          end_time: new Date('2017-11-17T00:00:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          block_type: 8,
          start_time: new Date('2017-11-16T20:00:00.000Z'),
          end_time: new Date('2017-11-16T21:00:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0,
            "mealType": 2
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          block_type: 3,
          start_time: new Date('2017-11-16T21:00:00.000Z'),
          end_time: new Date('2017-11-16T21:30:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          block_type: 2,
          start_time: new Date('2017-11-16T19:00:00.000Z'),
          end_time: new Date('2017-11-16T20:00:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0,
            "exertionString": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          block_type: 18,
          start_time: new Date('2017-11-16T18:30:00.000Z'),
          end_time: new Date('2017-11-16T19:00:00.000Z'),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          block_type: 9,
          start_time: new Date("2017-11-16T18:00:00.000Z"),
          end_time: new Date("2017-11-16T18:30:00.000Z"),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          block_type: 6,
          start_time: new Date("2017-11-16T13:30:00.000Z"),
          end_time: new Date("2017-11-16T18:00:00.000Z"),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          block_type: 8,
          start_time: new Date("2017-11-16T12:30:00.000Z"),
          end_time: new Date("2017-11-16T13:30:00.000Z"),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0,
            "mealType": 3
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          block_type: 6,
          start_time: new Date("2017-11-16T09:00:00.000Z"),
          end_time: new Date("2017-11-16T12:00:00.000Z"),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          block_type: 5,
          start_time: new Date("2017-11-16T07:30:00.000Z"),
          end_time: new Date("2017-11-16T09:00:00.000Z"),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0,
            "resources": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          block_type: 9,
          start_time: new Date("2017-11-16T12:00:00.000Z"),
          end_time: new Date("2017-11-16T12:30:00.000Z"),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          block_type: 1,
          start_time: new Date("2017-11-16T00:00:00.000Z"),
          end_time: new Date("2017-11-16T05:00:00.000Z"),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          block_type: 8,
          start_time: new Date("2017-11-16T06:30:00.000Z"),
          end_time: new Date("2017-11-16T07:30:00.000Z"),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0,
            "mealType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          block_type: 18,
          start_time: new Date("2017-11-16T05:00:00.000Z"),
          end_time: new Date("2017-11-16T06:30:00.000Z"),
          user_notes: "",
          location: "",
          block_data: {
            "adminTypeType": 0
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('timeblocks_id_seq', (SELECT MAX(id) FROM timeblocks));");
    });
};
