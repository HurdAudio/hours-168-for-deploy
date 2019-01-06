'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blocktypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('blocktypes').insert([
        {
          id: 1,
          user_id: 1,
          type: 'sleep',
          keys: null,
          color: '#3B69B9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          type: 'exercise',
          keys: {
            "keys": ['exertionString'],
            "exertionStringValues": ['aerobic', 'free weights', 'lower', 'other', 'upper', 'walking']
          },
          color: '#B89697',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          type: 'administrative',
          keys: {
            "keys": ['adminType'],
            "adminTypeValues": ['bills', 'chores', 'emails', 'errands', 'planning']
          },
          color: '#86863D',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          type: 'coding',
          keys: {
            "keys": ['project'],
            "projectValues": ['educational', 'personal', 'professional']
          },
          color: '#2D4860',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          type: 'job search',
          keys: {
            "keys": ['resources'],
            "resourcesValues": ['emails', 'linkedIn', 'indeed', 'zipRecruiter', 'talent', 'stackOverflow']
          },
          color: '#495753',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          type: 'job',
          keys: null,
          color: '#ffffff',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          type: 'education',
          keys: null,
          color: '#dddddd',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          type: 'meal',
          keys: {
            "keys": ['mealType'],
            "mealTypeValues": ['breakfast', 'brunch', 'lunch', 'dinner', 'snack', 'social']
          },
          color: '#897751',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          type: 'break',
          keys: null,
          color: '#E5EEE9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          type: 'reading',
          keys: {
            "keys": ['readingType'],
            "readingTypeValues": ['reading list', 'tech reading', 'blogs/periodicals']
          },
          color: '#CA9577',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          type: 'podcast',
          keys: {
            "keys": ['podcastType', 'podcastURL'],
            "podcastTypeValues": ['tech', 'music', 'books', 'beer', 'politics']
          },
          color: '#999999',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          type: 'interview',
          keys: {
            "keys": [ 'interviewType', 'companyName', 'onsite', 'companyURL', 'companyLocation'],
            "interviewTypeValues": ['phone', 'online', 'onsite']
          },
          color: '#777777',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          type: 'appointment',
          keys: {
            "keys": ['appointmentType'],
            "appointmentTypeValues": ['dentist', 'doctor', 'haircut', 'physical therapy', 'legal']
          },
          color: '#555555',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          type: 'meeting',
          keys: {
            "keys": [ 'meetingType', 'attendees', 'objective'],
            "meetingTypeValues": ['planning', 'hiring', 'discussion']
          },
          color: '#BD435D',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          type: 'onsite event',
          keys: {
            "keys": ['eventType'],
            "eventTypeValues": ['film', 'concert', 'sporting event', 'theater', 'meetup', 'party']
          },
          color: '#888',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          type: 'offsite event',
          keys: {
            "keys": ['eventType', 'streamingURL'],
            "eventTypeValues": ['film', 'series', 'live stream', 'sporting event', 'online attendance']
          },
          color: '#756D65',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          type: 'creative',
          keys: {
            "keys": ['creativeType'],
            "creativeTypeValues": ['writing', 'composing', 'blogging']
          },
          color: '#aaaaaa',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          type: 'unstructured time',
          keys: null,
          color: '#000000',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('blocktypes_id_seq', (SELECT MAX(id) FROM blocktypes));");
    });
};
