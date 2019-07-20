'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('may_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('may_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-intelligent-woman-s-guide-to-socialism-and-capitalism-cover-1927.jpg',
          title: 'The Intelligent Woman\'s Guide to Socialism and Capitalism (cover)',
          artist: 'Eric Ravilious',
          year: '1927',
          rule: {
            "monday": [ 30, 9, 19, 29 ],
            "tuesday": [ 28, 7, 17, 27 ],
            "wednesday": [ 26, 5, 15, 25 ],
            "thursday": [ 24, 3, 13, 23 ],
            "friday": [ 22, 1, 11, 21 ],
            "saturday": [ 20, 30, 9, 19 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/cathedral-of-socialism-1919.jpg',
          title: 'Cathedral of Socialism',
          artist: 'Lyonel Feininger',
          year: '1919',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 30, 9, 19, 29 ],
            "wednesday": [ 28, 7, 17, 27 ],
            "thursday": [ 26, 5, 15, 25 ],
            "friday": [ 24, 3, 13, 23 ],
            "saturday": [ 22, 1, 11, 21 ],
            "sunday": [ 20, 30, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/an-eric-gill-woodcut-from-the-christian-social-book-the-devil-s-devices-by-h-d-c-pepler-showing-a.png',
          title: 'Woodcut from the Christian Social Book the Devil\'s Devices by H.d.c. Pepler, Showing a Bricklayer Overcoming the Devil Through Honest Work',
          artist: 'Eric Gill',
          year: '1915',
          rule: {
            "monday": [ 20, 30, 9, 19 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 30, 9, 19, 29 ],
            "thursday": [ 28, 7, 17, 27 ],
            "friday": [ 26, 5, 15, 25 ],
            "saturday": [ 24, 3, 13, 23 ],
            "sunday": [ 22, 1, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/worker-and-child-1908.jpg',
          title: 'Worker and Child',
          artist: 'Edvard Munch',
          year: '1908',
          rule: {
            "monday": [ 22, 1, 11, 21 ],
            "tuesday": [ 20, 30, 9, 19 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 30, 9, 19, 29 ],
            "friday": [ 28, 7, 17, 27 ],
            "saturday": [ 26, 5, 15, 25 ],
            "sunday": [ 24, 3, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-worker-sitting.jpg',
          title: 'The worker sitting',
          artist: 'Fernand Leger',
          year: 'xx Cent.',
          rule: {
            "monday": [ 24, 3, 13, 23 ],
            "tuesday": [ 22, 1, 11, 21 ],
            "wednesday": [ 20, 30, 9, 19 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 30, 9, 19, 29 ],
            "saturday": [ 28, 7, 17, 27 ],
            "sunday": [ 26, 5, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-forestry-workers.jpg',
          title: 'The Forestry Workers',
          artist: 'Camille Corot',
          year: 'c.1874 - c.1875',
          rule: {
            "monday": [ 26, 5, 15, 25 ],
            "tuesday": [ 24, 3, 13, 23 ],
            "wednesday": [ 22, 1, 11, 21 ],
            "thursday": [ 20, 30, 9, 19 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 30, 9, 19, 29 ],
            "sunday": [ 28, 7, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/project-of-poster-the-center-of-textile-workers-in-belgium-celebration-on-18th-september-1938(1).jpg',
          title: 'Project of poster "The center of textile workers in Belgium (celebration on 18th september)"',
          artist: 'Rene Magritte',
          year: '1938',
          rule: {
            "monday": [ 29, 8, 18, 28 ],
            "tuesday": [ 27, 6, 16, 26 ],
            "wednesday": [ 25, 4, 14, 24 ],
            "thursday": [ 23, 2, 12, 22 ],
            "friday": [ 21, 31, 10, 20 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 31, 10, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/project-of-poster-the-center-of-textile-workers-in-belgium-1938-2(1).jpg',
          title: 'Project of poster "The center of textile workers in Belgium"',
          artist: 'Rene Magritte',
          year: '1938',
          rule: {
            "monday": [ 31, 10, 20, 30 ],
            "tuesday": [ 29, 8, 18, 28 ],
            "wednesday": [ 27, 6, 16, 26 ],
            "thursday": [ 25, 4, 14, 24 ],
            "friday": [ 23, 2, 12, 22 ],
            "saturday": [ 21, 31, 10, 20 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/mush-with-wineskins-1912(1).jpg',
          title: 'Workers with a barrel (diptych)',
          artist: 'Niko Pirosmani',
          year: '1912',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 31, 10, 20, 30 ],
            "wednesday": [ 29, 8, 18, 28 ],
            "thursday": [ 27, 6, 16, 26 ],
            "friday": [ 25, 4, 14, 24 ],
            "saturday": [ 23, 2, 12, 22 ],
            "sunday": [ 21, 31, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/udarnitzi-record-breaking-workers-at-the-factory-krasnaya-zaria-1931.jpg',
          title: 'Udarnitzi (Record Breaking Workers) at the Factory Krasnaya Zaria',
          artist: 'Pavel Filonov',
          year: '1931',
          rule: {
            "monday": [ 21, 31, 10, 20 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 31, 10, 20, 30 ],
            "thursday": [ 29, 8, 18, 28 ],
            "friday": [ 27, 6, 16, 26 ],
            "saturday": [ 25, 4, 14, 24 ],
            "sunday": [ 23, 2, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/workers-1916.jpg',
          title: 'Workers',
          artist: 'Pavel Filonov',
          year: '1915 - 1916',
          rule: {
            "monday": [ 23, 2, 12, 22 ],
            "tuesday": [ 21, 31, 10, 20 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 31, 10, 20, 30 ],
            "friday": [ 29, 8, 18, 28 ],
            "saturday": [ 27, 6, 16, 26 ],
            "sunday": [ 25, 4, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/worker-1933.jpg',
          title: 'Worker',
          artist: 'Kazimir Malevich',
          year: '1933',
          rule: {
            "monday": [ 25, 4, 14, 24 ],
            "tuesday": [ 23, 2, 12, 22 ],
            "wednesday": [ 21, 31, 10, 20 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 31, 10, 20, 30 ],
            "saturday": [ 29, 8, 18, 28 ],
            "sunday": [ 27, 6, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-school-teacher-explaining-the-meaning-of-a-letter-to-illiterate-workers-1516.jpg',
          title: 'A School Teacher Explaining the Meaning of a Letter to Illiterate Workers',
          artist: 'Hans Holbein the Younger',
          year: '1516',
          rule: {
            "monday": [ 27, 6, 16, 26 ],
            "tuesday": [ 25, 4, 14, 24 ],
            "wednesday": [ 23, 2, 12, 22 ],
            "thursday": [ 21, 31, 10, 20 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 31, 10, 20, 30 ],
            "sunday": [ 29, 8, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/workers-1927.jpg',
          title: 'Workers',
          artist: 'Martiros Sarian',
          year: '1927',
          rule: {
            "monday": [ 30, 9, 19, 29 ],
            "tuesday": [ 28, 7, 17, 27 ],
            "wednesday": [ 26, 5, 15, 25 ],
            "thursday": [ 24, 3, 13, 23 ],
            "friday": [ 22, 1, 11, 21 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/workers-on-the-beet-field-1876.jpg',
          title: 'Workers on the beet field',
          artist: 'Max Liebermann',
          year: '1876',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 30, 9, 19, 29 ],
            "wednesday": [ 28, 7, 17, 27 ],
            "thursday": [ 26, 5, 15, 25 ],
            "friday": [ 24, 3, 13, 23 ],
            "saturday": [ 22, 1, 11, 21 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/bloody-sunday-shooting-workers-near-the-winter-palace-january-9-1905-1.jpg',
          title: 'Bloody Sunday. Shooting workers near the Winter Palace January 9, 1905.',
          artist: 'Ivan Vladimirov',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 30, 9, 19, 29 ],
            "thursday": [ 28, 7, 17, 27 ],
            "friday": [ 26, 5, 15, 25 ],
            "saturday": [ 24, 3, 13, 23 ],
            "sunday": [ 22, 1, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/steel-workers.jpg',
          title: 'Steel Workers',
          artist: 'Corneliu Baba',
          year: 'XX cent.',
          rule: {
            "monday": [ 22, 1, 11, 21 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 30, 9, 19, 29 ],
            "friday": [ 28, 7, 17, 27 ],
            "saturday": [ 26, 5, 15, 25 ],
            "sunday": [ 24, 3, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/house-workers-in-the-bronx.jpg',
          title: 'House Workers in the Bronx',
          artist: 'Abraham Manievich',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 24, 3, 13, 23 ],
            "tuesday": [ 22, 1, 11, 21 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 30, 9, 19, 29 ],
            "saturday": [ 28, 7, 17, 27 ],
            "sunday": [ 26, 5, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/farm-farm-workers-mt-williamson-in-background-manzanar-relocation-center-california-1943.jpg',
          title: 'Farm, farm workers, Mt. Williamson in background, Manzanar Relocation Center, California',
          artist: 'Ansel Adams',
          year: '1943',
          rule: {
            "monday": [ 26, 5, 15, 25 ],
            "tuesday": [ 24, 3, 13, 23 ],
            "wednesday": [ 22, 1, 11, 21 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 30, 9, 19, 29 ],
            "sunday": [ 28, 7, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/muncitor-agricultura-1931.jpg',
          title: 'Worker (Agriculture)',
          artist: 'Alexandru Phoebus',
          year: '1931',
          rule: {
            "monday": [ 28, 7, 17, 27 ],
            "tuesday": [ 26, 5, 15, 25 ],
            "wednesday": [ 24, 3, 13, 23 ],
            "thursday": [ 22, 1, 11, 21 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 1, 11, 21, 31 ],
            "sunday": [ 30, 9, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/workers-in-the-snow-1913.jpg',
          title: 'Workers in the Snow',
          artist: 'Edvard Munch',
          year: '1913',
          rule: {
            "monday": [ 31, 10, 20, 30 ],
            "tuesday": [ 29, 8, 18, 28 ],
            "wednesday": [ 27, 6, 16, 26 ],
            "thursday": [ 25, 4, 14, 24 ],
            "friday": [ 23, 2, 12, 22 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/american-workers-1922.jpg',
          title: 'American workers',
          artist: 'David Burliuk',
          year: '1922',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 31, 10, 20, 30 ],
            "wednesday": [ 29, 8, 18, 28 ],
            "thursday": [ 27, 6, 16, 26 ],
            "friday": [ 25, 4, 14, 24 ],
            "saturday": [ 23, 2, 12, 22 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/workers-in-the-fields.jpg',
          title: 'Workers in the Fields',
          artist: 'Camille Pissarro',
          year: 'c.1896 - c.1897',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 31, 10, 20, 30 ],
            "thursday": [ 29, 8, 18, 28 ],
            "friday": [ 27, 6, 16, 26 ],
            "saturday": [ 25, 4, 14, 24 ],
            "sunday": [ 23, 2, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/project-of-poster-the-center-of-textile-workers-in-belgium-to-reduce-working-hours-1938(1).jpg',
          title: 'Project of poster "The center of textile workers in Belgium (to reduce working hours)"',
          artist: 'Rene Magritte',
          year: '1938',
          rule: {
            "monday": [ 23, 2, 12, 22 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 31, 10, 20, 30 ],
            "friday": [ 29, 8, 18, 28 ],
            "saturday": [ 27, 6, 16, 26 ],
            "sunday": [ 25, 4, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/alliance-of-the-peasant-and-the-industrial-worker-1924.jpg',
          title: 'Alliance of the Peasant and the Industrial Worker',
          artist: 'Diego Rivera',
          year: '1924',
          rule: {
            "monday": [ 25, 4, 14, 24 ],
            "tuesday": [ 23, 2, 12, 22 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 31, 10, 20, 30 ],
            "saturday": [ 29, 8, 18, 28 ],
            "sunday": [ 27, 6, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/portrait-of-a-railway-worker-misha-meheteli(1).jpg',
          title: 'Portrait of a railway worker (Misha Meheteli)',
          artist: 'Niko Pirosmani',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 27, 6, 16, 26 ],
            "tuesday": [ 25, 4, 14, 24 ],
            "wednesday": [ 23, 2, 12, 22 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 31, 10, 20, 30 ],
            "sunday": [ 29, 8, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/worker-in-a-cap.jpg',
          title: 'Worker in a Cap',
          artist: 'Pavel Filonov',
          year: 'c.1935',
          rule: {
            "monday": [ 29, 8, 18, 28 ],
            "tuesday": [ 27, 6, 16, 26 ],
            "wednesday": [ 25, 4, 14, 24 ],
            "thursday": [ 23, 2, 12, 22 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 31, 10, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/workers-1920.jpg',
          title: 'Workers',
          artist: 'Pierre Bonnard',
          year: 'c.1916 - 1920',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 30, 9, 19, 29 ],
            "wednesday": [ 28, 7, 17, 27 ],
            "thursday": [ 26, 5, 15, 25 ],
            "friday": [ 24, 3, 13, 23 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/young-worker-1869.jpg',
          title: 'Young Worker',
          artist: 'William-Adolphe Bouguereau',
          year: '1869',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 30, 9, 19, 29 ],
            "thursday": [ 28, 7, 17, 27 ],
            "friday": [ 26, 5, 15, 25 ],
            "saturday": [ 24, 3, 13, 23 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-worker-s-day-1904.jpg',
          title: 'A Worker\'s Day',
          artist: 'Giacomo Balla',
          year: '1904',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 30, 9, 19, 29 ],
            "friday": [ 28, 7, 17, 27 ],
            "saturday": [ 26, 5, 15, 25 ],
            "sunday": [ 24, 3, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/at-the-workers-outskirts-in-the-days-of-overthrowing-the-autocracy.jpg',
          title: 'At the workers\' outskirts in the days of overthrowing the autocracy',
          artist: 'Ivan Vladimirov',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 24, 3, 13, 23 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 30, 9, 19, 29 ],
            "saturday": [ 28, 7, 17, 27 ],
            "sunday": [ 26, 5, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/garment-workers-exploited-by-fruit-of-the-loom.jpg',
          title: 'Garment Workers Exploited by Fruit of the Loom',
          artist: 'Sue Coe',
          year: 'XX cent.',
          rule: {
            "monday": [ 26, 5, 15, 25 ],
            "tuesday": [ 24, 3, 13, 23 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 30, 9, 19, 29 ],
            "sunday": [ 28, 7, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/workers-1935.jpg',
          title: 'Workers',
          artist: 'M. H. Maxy',
          year: '1935',
          rule: {
            "monday": [ 28, 7, 17, 27 ],
            "tuesday": [ 26, 5, 15, 25 ],
            "wednesday": [ 24, 3, 13, 23 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 1, 11, 21, 31 ],
            "sunday": [ 30, 9, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/italian-village-workers-making-hats-1880.jpg',
          title: 'Italian village workers making hats',
          artist: 'Peder Severin Kroyer',
          year: '1880',
          rule: {
            "monday": [ 30, 9, 19, 29 ],
            "tuesday": [ 28, 7, 17, 27 ],
            "wednesday": [ 26, 5, 15, 25 ],
            "thursday": [ 24, 3, 13, 23 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/farm-workers-1880.jpg',
          title: 'Farm Workers',
          artist: 'Pierre Emmanuel Damoye',
          year: '1880',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 31, 10, 20, 30 ],
            "wednesday": [ 29, 8, 18, 28 ],
            "thursday": [ 27, 6, 16, 26 ],
            "friday": [ 25, 4, 14, 24 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/workers-on-their-way-home-1915.jpg',
          title: 'Workers on Their Way Home',
          artist: 'Edvard Munch',
          year: '1913 - 1915',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 31, 10, 20, 30 ],
            "thursday": [ 29, 8, 18, 28 ],
            "friday": [ 27, 6, 16, 26 ],
            "saturday": [ 25, 4, 14, 24 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/workers-1922.jpg',
          title: 'Workers',
          artist: 'David Burliuk',
          year: '1922',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 31, 10, 20, 30 ],
            "friday": [ 29, 8, 18, 28 ],
            "saturday": [ 27, 6, 16, 26 ],
            "sunday": [ 25, 4, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/worker-and-peasant-1927.jpg',
          title: 'Worker and peasant',
          artist: 'Aleksandr Deyneka',
          year: '1927',
          rule: {
            "monday": [ 25, 4, 14, 24 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 31, 10, 20, 30 ],
            "saturday": [ 29, 8, 18, 28 ],
            "sunday": [ 27, 6, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/project-of-poster-the-center-of-textile-workers-in-belgium-1938-1(1).jpg',
          title: 'Project of poster "The center of textile workers in Belgium"',
          artist: 'Rene Magritte',
          year: '1938',
          rule: {
            "monday": [ 27, 6, 16, 26 ],
            "tuesday": [ 25, 4, 14, 24 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 31, 10, 20, 30 ],
            "sunday": [ 29, 8, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/girl-in-red-scarf-worker-1925.jpg',
          title: 'Girl in red scarf (worker)',
          artist: 'Kuzma Petrov-Vodkin',
          year: '1925',
          rule: {
            "monday": [ 29, 8, 18, 28 ],
            "tuesday": [ 27, 6, 16, 26 ],
            "wednesday": [ 25, 4, 14, 24 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 31, 10, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-workers-1916.jpg',
          title: 'The Workers',
          artist: 'Pavel Filonov',
          year: '1915 - 1916',
          rule: {
            "monday": [ 31, 10, 20, 30 ],
            "tuesday": [ 29, 8, 18, 28 ],
            "wednesday": [ 27, 6, 16, 26 ],
            "thursday": [ 25, 4, 14, 24 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-return-of-the-farm-workers-from-the-fields.jpg',
          title: 'The Return of the Farm Workers from the Fields',
          artist: 'Peter Paul Rubens',
          year: 'c.1640',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 30, 9, 19, 29 ],
            "thursday": [ 28, 7, 17, 27 ],
            "friday": [ 26, 5, 15, 25 ],
            "saturday": [ 7, 17, 27, 6 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/not_detected_219731.jpg',
          title: 'Workers of all countries unite!',
          artist: 'Kazimir Malevich',
          year: '1918',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 30, 9, 19, 29 ],
            "friday": [ 28, 7, 17, 27 ],
            "saturday": [ 26, 5, 15, 25 ],
            "sunday": [ 7, 17, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-laundry-worker-1888.jpg',
          title: 'The Laundry Worker',
          artist: 'Henri de Toulouse-Lautrec',
          year: '1884 - 1888',
          rule: {
            "monday": [ 7, 17, 27, 6 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 30, 9, 19, 29 ],
            "saturday": [ 28, 7, 17, 27 ],
            "sunday": [ 26, 5, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/there-is-such-a-party-lenin-on-the-1-st-all-russian-congress-of-workers-and-soldiers-deputies-1934.jpg',
          title: 'There is such a party! (Lenin on the 1st All-Russian Congress of Workers\' and Soldiers\'Deputies in Petrograd)',
          artist: 'Konstantin Yuon',
          year: '1934',
          rule: {
            "monday": [ 26, 5, 15, 25 ],
            "tuesday": [ 7, 17, 27, 6 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 30, 9, 19, 29 ],
            "sunday": [ 28, 7, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/portrait-of-worker-yakobchenko-1938.jpg',
          title: 'Portrait of worker Yakobchenko',
          artist: 'Pyotr Konchalovsky',
          year: '1938',
          rule: {
            "monday": [ 28, 7, 17, 27 ],
            "tuesday": [ 26, 5, 15, 25 ],
            "wednesday": [ 7, 17, 27, 6 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 1, 11, 21, 31 ],
            "sunday": [ 30, 9, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-revolt-of-the-soldiers-and-workers-in-the-days-of-february-1917.jpg',
          title: 'The revolt of the soldiers and workers in the days of February 1917',
          artist: 'Ivan Vladimirov',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 30, 9, 19, 29 ],
            "tuesday": [ 28, 7, 17, 27 ],
            "wednesday": [ 26, 5, 15, 25 ],
            "thursday": [ 7, 17, 27, 6 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/woman-worker-1923.jpg',
          title: 'Woman Worker',
          artist: 'Victor Brauner',
          year: '1923',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 30, 9, 19, 29 ],
            "wednesday": [ 28, 7, 17, 27 ],
            "thursday": [ 26, 5, 15, 25 ],
            "friday": [ 7, 17, 27, 6 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/two-workers-on-strike.jpg',
          title: 'Two Workers on Strike',
          artist: 'Nicolae Vermont',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 31, 10, 20, 30 ],
            "thursday": [ 29, 8, 18, 28 ],
            "friday": [ 27, 6, 16, 26 ],
            "saturday": [ 8, 18, 28, 7 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/field-workers-1961.jpg',
          title: 'Field Workers',
          artist: 'Josef Herman',
          year: '1961',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 31, 10, 20, 30 ],
            "friday": [ 29, 8, 18, 28 ],
            "saturday": [ 27, 6, 16, 26 ],
            "sunday": [ 8, 18, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/hotel-worker-1952.jpg',
          title: 'Hotel Worker',
          artist: 'Varlin',
          year: '1952',
          rule: {
            "monday": [ 8, 18, 28, 7 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 31, 10, 20, 30 ],
            "saturday": [ 29, 8, 18, 28 ],
            "sunday": [ 27, 6, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/workers-on-their-way-home-i-1920.jpg',
          title: 'Workers on their way home I',
          artist: 'Edvard Munch',
          year: '1918 - 1920',
          rule: {
            "monday": [ 27, 6, 16, 26 ],
            "tuesday": [ 8, 18, 28, 7 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 31, 10, 20, 30 ],
            "sunday": [ 29, 8, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-worker-with-the-lamp-1951.jpg',
          title: 'A worker with the lamp',
          artist: 'Fernand Leger',
          year: '1951',
          rule: {
            "monday": [ 29, 8, 18, 28 ],
            "tuesday": [ 27, 6, 16, 26 ],
            "wednesday": [ 8, 18, 28, 7 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 31, 10, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/run-2010.jpg',
          title: 'Run',
          artist: 'Sun Mu',
          year: '2010',
          rule: {
            "monday": [ 31, 10, 20, 30 ],
            "tuesday": [ 29, 8, 18, 28 ],
            "wednesday": [ 27, 6, 16, 26 ],
            "thursday": [ 8, 18, 28, 7 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/project-of-poster-the-center-of-textile-workers-in-belgium-1938(1).jpg',
          title: 'Project of poster "The center of textile workers in Belgium"',
          artist: 'Rene Magritte',
          year: '1938',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 31, 10, 20, 30 ],
            "wednesday": [ 29, 8, 18, 28 ],
            "thursday": [ 27, 6, 16, 26 ],
            "friday": [ 8, 18, 28, 7 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/workers-1926.jpg',
          title: 'Workers',
          artist: 'Kuzma Petrov-Vodkin',
          year: '1926',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 30, 9, 19, 29 ],
            "friday": [ 28, 7, 17, 27 ],
            "saturday": [ 9, 19, 29, 8 ],
            "sunday": [ 7, 17, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-french-worker.jpg',
          title: 'A French Worker',
          artist: 'Pavel Filonov',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 7, 17, 27, 6 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 30, 9, 19, 29 ],
            "saturday": [ 28, 7, 17, 27 ],
            "sunday": [ 9, 19, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/attentive-worker-1913.jpg',
          title: 'Attentive Worker',
          artist: 'Kazimir Malevich',
          year: '1913',
          rule: {
            "monday": [ 9, 19, 29, 8 ],
            "tuesday": [ 7, 17, 27, 6 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 30, 9, 19, 29 ],
            "sunday": [ 28, 7, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-worker-at-celeyran-1882.jpg',
          title: 'A Worker at Celeyran',
          artist: 'Henri de Toulouse-Lautrec',
          year: '1882',
          rule: {
            "monday": [ 28, 7, 17, 27 ],
            "tuesday": [ 9, 19, 29, 8 ],
            "wednesday": [ 7, 17, 27, 6 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 1, 11, 21, 31 ],
            "sunday": [ 30, 9, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/seeing-the-unit-of-workers-to-the-front-1928.jpg',
          title: 'Seeing the unit of workers to the front',
          artist: 'Konstantin Yuon',
          year: '1928',
          rule: {
            "monday": [ 30, 9, 19, 29 ],
            "tuesday": [ 28, 7, 17, 27 ],
            "wednesday": [ 9, 19, 29, 8 ],
            "thursday": [ 7, 17, 27, 6 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/worker-s-settlement-and-concrete-plant-davalu-ararat-region-1937.jpg',
          title: 'Worker\'s Settlement and Concrete Plant, Davalu, Ararat Region',
          artist: 'Martiros Sarian',
          year: '1937',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 30, 9, 19, 29 ],
            "wednesday": [ 28, 7, 17, 27 ],
            "thursday": [ 9, 19, 29, 8 ],
            "friday": [ 7, 17, 27, 6 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/venetian-glass-workers-1882.jpg',
          title: 'Venetian Glass Workers',
          artist: 'John Singer Sargent',
          year: '1882',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 30, 9, 19, 29 ],
            "thursday": [ 28, 7, 17, 27 ],
            "friday": [ 9, 19, 29, 8 ],
            "saturday": [ 7, 17, 27, 6 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/at-the-workers-outskirts-of-the-days-of-the-overthrow-of-the-autocracy-february-1917.jpg',
          title: 'At the workers\' outskirts of the days of the overthrow of the autocracy. February 1917',
          artist: 'Ivan Vladimirov',
          year: '1917',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 31, 10, 20, 30 ],
            "friday": [ 29, 8, 18, 28 ],
            "saturday": [ 10, 20, 30, 9 ],
            "sunday": [ 8, 18, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-manual-workers-and-the-intellectuals-1927.jpg',
          title: 'The Manual Workers and the Intellectuals',
          artist: 'Janos Mattis-Teutsch',
          year: '1927',
          rule: {
            "monday": [ 8, 18, 28, 7 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 31, 10, 20, 30 ],
            "saturday": [ 29, 8, 18, 28 ],
            "sunday": [ 10, 20, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/woman-worker-1893.jpg',
          title: 'Woman Worker',
          artist: 'Stefan Luchian',
          year: '1893',
          rule: {
            "monday": [ 10, 20, 30, 9 ],
            "tuesday": [ 8, 18, 28, 7 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 31, 10, 20, 30 ],
            "sunday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/construction-workers-ouvriers-du-ba-timent.jpg',
          title: 'Construction workers',
          artist: 'Theophile Steinlen',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 29, 8, 18, 28 ],
            "tuesday": [ 10, 20, 30, 9 ],
            "wednesday": [ 8, 18, 28, 7 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 31, 10, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/tavern-in-st-cloud-1890.jpg',
          title: 'Edvard Munch',
          artist: '1890',
          year: '',
          rule: {
            "monday": [ 31, 10, 20, 30 ],
            "tuesday": [ 29, 8, 18, 28 ],
            "wednesday": [ 10, 20, 30, 9 ],
            "thursday": [ 8, 18, 28, 7 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-fisherman-1902.jpg',
          title: 'The Fisherman',
          artist: 'Edvard Munch',
          year: '1902',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 31, 10, 20, 30 ],
            "wednesday": [ 29, 8, 18, 28 ],
            "thursday": [ 10, 20, 30, 9 ],
            "friday": [ 8, 18, 28, 7 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-haymaker-1916.jpg',
          title: 'The Haymaker',
          artist: 'Edvard Munch',
          year: '1916',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 31, 10, 20, 30 ],
            "thursday": [ 29, 8, 18, 28 ],
            "friday": [ 10, 20, 30, 9 ],
            "saturday": [ 8, 18, 28, 7 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-mechanic-1920.jpg',
          title: 'The Mechanic',
          artist: 'Fernand Leger',
          year: '1920',
          rule: {
            "monday": [ 7, 17, 27, 6 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 30, 9, 19, 29 ],
            "saturday": [ 11, 21, 31, 10 ],
            "sunday": [ 9, 19, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-three-comrades-1920.jpg',
          title: 'The Three Comrades',
          artist: 'Fernand Leger',
          year: '1920',
          rule: {
            "monday": [ 9, 19, 29, 8 ],
            "tuesday": [ 7, 17, 27, 6 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 30, 9, 19, 29 ],
            "sunday": [ 11, 21, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/fishermen-1921.jpg',
          title: 'Fishermen',
          artist: 'Fernand Leger',
          year: '1921',
          rule: {
            "monday": [ 11, 21, 31, 10 ],
            "tuesday": [ 9, 19, 29, 8 ],
            "wednesday": [ 7, 17, 27, 6 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 1, 11, 21, 31 ],
            "sunday": [ 30, 9, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-butcher-shop-1921.jpg',
          title: 'The Butcher Shop',
          artist: 'Fernand Leger',
          year: '1921',
          rule: {
            "monday": [ 30, 9, 19, 29 ],
            "tuesday": [ 11, 21, 31, 10 ],
            "wednesday": [ 9, 19, 29, 8 ],
            "thursday": [ 7, 17, 27, 6 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-man-in-the-blue-hat-1937.jpg',
          title: 'The man in the blue hat',
          artist: 'Fernand Leger',
          year: '1937',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 30, 9, 19, 29 ],
            "wednesday": [ 11, 21, 31, 10 ],
            "thursday": [ 9, 19, 29, 8 ],
            "friday": [ 7, 17, 27, 6 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/manufacturers-on-a-blue-background-1951.jpg',
          title: 'Manufacturers on a blue background',
          artist: 'Fernand Leger',
          year: '1951',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 30, 9, 19, 29 ],
            "thursday": [ 11, 21, 31, 10 ],
            "friday": [ 9, 19, 29, 8 ],
            "saturday": [ 7, 17, 27, 6 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/manufacturers-with-aloe-1951.jpg',
          title: 'Manufacturers with Aloe',
          artist: 'Fernand Leger',
          year: '1951',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 30, 9, 19, 29 ],
            "friday": [ 11, 21, 31, 10 ],
            "saturday": [ 9, 19, 29, 8 ],
            "sunday": [ 7, 17, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/builder-character-in-the-framework.jpg',
          title: 'Builder, character in the framework',
          artist: 'Fernand Leger',
          year: '?',
          rule: {
            "monday": [ 8, 18, 28, 7 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 31, 10, 20, 30 ],
            "saturday": [ 12, 22, 1, 11 ],
            "sunday": [ 10, 20, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/characters-in-the-truck.jpg',
          title: 'Characters in the truck',
          artist: 'Fernand Leger',
          year: '?',
          rule: {
            "monday": [ 10, 20, 30, 9 ],
            "tuesday": [ 8, 18, 28, 7 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 31, 10, 20, 30 ],
            "sunday": [ 12, 22, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/threshing-the-floor-in-a-georgian-country-village-1915.jpg',
          title: 'Threshing the floor in a Georgian country village',
          artist: 'Niko Pirosmani',
          year: '1915',
          rule: {
            "monday": [ 12, 22, 1, 11 ],
            "tuesday": [ 10, 20, 30, 9 ],
            "wednesday": [ 8, 18, 28, 7 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 31, 10, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/woman-inspector-of-market-hygiene-1916(1).jpg',
          title: 'Sanitary inspector woman of the market',
          artist: 'Niko Pirosmani',
          year: '1916',
          rule: {
            "monday": [ 31, 10, 20, 30 ],
            "tuesday": [ 12, 22, 1, 11 ],
            "wednesday": [ 10, 20, 30, 9 ],
            "thursday": [ 8, 18, 28, 7 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/chariot-near-eatery(1).jpg',
          title: 'Phaeton by the canteen',
          artist: 'Niko Pirosmani',
          year: '1916',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 31, 10, 20, 30 ],
            "wednesday": [ 12, 22, 1, 11 ],
            "thursday": [ 10, 20, 30, 9 ],
            "friday": [ 8, 18, 28, 7 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/woman-milks-a-cow-1916(1).jpg',
          title: 'Woman milks a cow',
          artist: 'Niko Pirosmani',
          year: '1916',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 31, 10, 20, 30 ],
            "thursday": [ 12, 22, 1, 11 ],
            "friday": [ 10, 20, 30, 9 ],
            "saturday": [ 8, 18, 28, 7 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/farmer-with-a-bull-1916.jpg',
          title: 'Farmer with a Bull',
          artist: 'Niko Pirosmani',
          year: '1916',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 31, 10, 20, 30 ],
            "friday": [ 12, 22, 1, 11 ],
            "saturday": [ 10, 20, 30, 9 ],
            "sunday": [ 8, 18, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/bourgeois-in-a-carriage-1913.jpg',
          title: 'Bourgeois in a Carriage',
          artist: 'Pavel Filonov',
          year: '1913',
          rule: {
            "monday": [ 9, 19, 29, 8 ],
            "tuesday": [ 6, 17, 27, 16 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 13, 23, 2, 12 ],
            "sunday": [ 11, 21, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/those-who-have-nothing-to-lose-1912.jpg',
          title: 'Those Who Have Nothing to Lose',
          artist: 'Pavel Filonov',
          year: '1912',
          rule: {
            "monday": [ 11, 21, 31, 10 ],
            "tuesday": [ 9, 19, 29, 8 ],
            "wednesday": [ 6, 17, 27, 16 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 1, 11, 21, 31 ],
            "sunday": [ 13, 23, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/milkmaids-1914.jpg',
          title: 'Milkmaids',
          artist: 'Pavel Filonov',
          year: '1914',
          rule: {
            "monday": [ 13, 23, 2, 12 ],
            "tuesday": [ 11, 21, 31, 10 ],
            "wednesday": [ 9, 19, 29, 8 ],
            "thursday": [ 6, 17, 27, 16 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-february-revolution-1926.jpg',
          title: 'The February Revolution',
          artist: 'Pavel Filonov',
          year: '1924 - 1926',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 13, 23, 2, 12 ],
            "wednesday": [ 11, 21, 31, 10 ],
            "thursday": [ 9, 19, 29, 8 ],
            "friday": [ 6, 17, 27, 16 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/goelro-lenin-s-plan-for-the-electrification-of-russia-1931.jpg',
          title: 'GOELRO (Lenin s Plan for the Electrification of Russia)',
          artist: 'Pavel Filonov',
          year: '1931',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 13, 23, 2, 12 ],
            "thursday": [ 11, 21, 31, 10 ],
            "friday": [ 9, 19, 29, 8 ],
            "saturday": [ 6, 17, 27, 16 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-kolkhoznik-member-of-a-collective-farm-1931.jpg',
          title: 'The Kolkhoznik (Member of a Collective Farm)',
          artist: 'Pavel Filonov',
          year: '1931',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 13, 23, 2, 12 ],
            "friday": [ 11, 21, 31, 10 ],
            "saturday": [ 9, 19, 29, 8 ],
            "sunday": [ 6, 17, 27, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pedagogics.jpg',
          title: 'Pedagogics',
          artist: 'Pavel Filonov',
          year: '?',
          rule: {
            "monday": [ 6, 17, 27, 16 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 13, 23, 2, 12 ],
            "saturday": [ 11, 21, 31, 10 ],
            "sunday": [ 9, 19, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/carpenter-1911.jpg',
          title: 'Carpenter',
          artist: 'Kazimir Malevich',
          year: '1911',
          rule: {
            "monday": [ 10, 20, 30, 9 ],
            "tuesday": [ 7, 18, 28, 17 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 14, 24, 3, 13 ],
            "sunday": [ 12, 22, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/gardener-1911.jpg',
          title: 'Gardener',
          artist: 'Kazimir Malevich',
          year: '1911',
          rule: {
            "monday": [ 12, 22, 1, 11 ],
            "tuesday": [ 10, 20, 30, 9 ],
            "wednesday": [ 7, 18, 28, 17 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 14, 24, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/plowman-1911.jpg',
          title: 'Plowman',
          artist: 'Kazimir Malevich',
          year: '1911',
          rule: {
            "monday": [ 14, 24, 3, 13 ],
            "tuesday": [ 12, 22, 1, 11 ],
            "wednesday": [ 10, 20, 30, 9 ],
            "thursday": [ 7, 18, 28, 17 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/reaping-1911.jpg',
          title: 'Reaping',
          artist: 'Kazimir Malevich',
          year: '1911',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 14, 24, 3, 13 ],
            "wednesday": [ 12, 22, 1, 11 ],
            "thursday": [ 10, 20, 30, 9 ],
            "friday": [ 7, 18, 28, 17 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/two-and-a-pushcart-1911.jpg',
          title: 'Two and a pushcart',
          artist: 'Kazimir Malevich',
          year: '1911',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 14, 24, 3, 13 ],
            "thursday": [ 12, 22, 1, 11 ],
            "friday": [ 10, 20, 30, 9 ],
            "saturday": [ 7, 18, 28, 17 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-knifegrinder-1912.jpg',
          title: 'The knifegrinder',
          artist: 'Kazimir Malevich',
          year: '1912',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 14, 24, 3, 13 ],
            "friday": [ 12, 22, 1, 11 ],
            "saturday": [ 10, 20, 30, 9 ],
            "sunday": [ 7, 18, 28, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/woodcutter.jpg',
          title: 'Woodcutter',
          artist: 'Kazimir Malevich',
          year: '1912',
          rule: {
            "monday": [ 7, 18, 28, 17 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 14, 24, 3, 13 ],
            "saturday": [ 12, 22, 1, 11 ],
            "sunday": [ 10, 20, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-reaper-on-red-1913.jpg',
          title: 'The reaper on red',
          artist: 'Kazimir Malevich',
          year: '1913',
          rule: {
            "monday": [ 11, 21, 31, 10 ],
            "tuesday": [ 8, 19, 29, 18 ],
            "wednesday": [ 7, 17, 27, 6 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 15, 25, 4, 14 ],
            "sunday": [ 13, 23, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/carpenter.jpg',
          title: 'Carpenter',
          artist: 'Kazimir Malevich',
          year: 'c.1927',
          rule: {
            "monday": [ 13, 23, 2, 12 ],
            "tuesday": [ 11, 21, 31, 10 ],
            "wednesday": [ 8, 19, 29, 18 ],
            "thursday": [ 7, 17, 27, 6 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 15, 25, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/haymaking-1929.jpg',
          title: 'Haymaking',
          artist: 'Kazimir Malevich',
          year: '1929',
          rule: {
            "monday": [ 15, 25, 4, 14 ],
            "tuesday": [ 13, 23, 2, 12 ],
            "wednesday": [ 11, 21, 31, 10 ],
            "thursday": [ 8, 19, 29, 18 ],
            "friday": [ 7, 17, 27, 6 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/reaper-1929.jpg',
          title: 'Reaper',
          artist: 'Kazimir Malevich',
          year: '1929',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 15, 25, 4, 14 ],
            "wednesday": [ 13, 23, 2, 12 ],
            "thursday": [ 11, 21, 31, 10 ],
            "friday": [ 8, 19, 29, 18 ],
            "saturday": [ 7, 17, 27, 6 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/reapers-1929.jpg',
          title: 'Reapers',
          artist: 'Kazimir Malevich',
          year: '1929',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 15, 25, 4, 14 ],
            "thursday": [ 13, 23, 2, 12 ],
            "friday": [ 11, 21, 31, 10 ],
            "saturday": [ 8, 19, 29, 18 ],
            "sunday": [ 7, 17, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/harvesting.jpg',
          title: 'Harvesting',
          artist: 'Kazimir Malevich',
          year: '1929',
          rule: {
            "monday": [ 7, 17, 27, 6 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 15, 25, 4, 14 ],
            "friday": [ 13, 23, 2, 12 ],
            "saturday": [ 11, 21, 31, 10 ],
            "sunday": [ 8, 19, 29, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/13450813-1195165473851370-1630332832750609931-n.jpg',
          title: 'Union',
          artist: 'Kazimir Malevich',
          year: '1930',
          rule: {
            "monday": [ 8, 19, 29, 18 ],
            "tuesday": [ 7, 17, 27, 6 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 15, 25, 4, 14 ],
            "saturday": [ 13, 23, 2, 12 ],
            "sunday": [ 11, 21, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/reaper.jpg',
          title: 'Reaper',
          artist: 'Kazimir Malevich',
          year: 'c.1932',
          rule: {
            "monday": [ 12, 22, 1, 11 ],
            "tuesday": [ 9, 20, 30, 19 ],
            "wednesday": [ 8, 18, 28, 7 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 16, 26, 5, 13 ],
            "sunday": [ 14, 24, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/laundress-1.jpg',
          title: 'Laundress',
          artist: 'Kazimir Malevich',
          year: '?',
          rule: {
            "monday": [ 14, 24, 3, 13 ],
            "tuesday": [ 12, 22, 1, 11 ],
            "wednesday": [ 9, 20, 30, 19 ],
            "thursday": [ 8, 18, 28, 7 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 16, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-plowman.jpg',
          title: 'The Plowman',
          artist: 'Hans Holbein the Younger',
          year: 'c.1525',
          rule: {
            "monday": [ 16, 26, 5, 13 ],
            "tuesday": [ 14, 24, 3, 13 ],
            "wednesday": [ 12, 22, 1, 11 ],
            "thursday": [ 9, 20, 30, 19 ],
            "friday": [ 8, 18, 28, 7 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/women-plucking-geese-1871.jpg',
          title: 'Women plucking geese',
          artist: 'Max Liebermann',
          year: '1871',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 16, 26, 5, 13 ],
            "wednesday": [ 14, 24, 3, 13 ],
            "thursday": [ 12, 22, 1, 11 ],
            "friday": [ 9, 20, 30, 19 ],
            "saturday": [ 8, 18, 28, 7 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/shoemaker-1881.jpg',
          title: 'Shoemaker',
          artist: 'Max Liebermann',
          year: '1881',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 16, 26, 5, 13 ],
            "thursday": [ 14, 24, 3, 13 ],
            "friday": [ 12, 22, 1, 11 ],
            "saturday": [ 9, 20, 30, 19 ],
            "sunday": [ 8, 18, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/spinning-workshop-in-laren-1889.jpg',
          title: 'Spinning Workshop in Laren',
          artist: 'Max Liebermann',
          year: '1889',
          rule: {
            "monday": [ 8, 18, 28, 7 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 16, 26, 5, 13 ],
            "friday": [ 14, 24, 3, 13 ],
            "saturday": [ 12, 22, 1, 11 ],
            "sunday": [ 9, 20, 30, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/flight-of-the-bourgeoisie-from-novorossiysk-in-1920.jpg',
          title: 'Flight of the bourgeoisie from Novorossiysk in 1920',
          artist: 'Ivan Vladimirov',
          year: '1920',
          rule: {
            "monday": [ 9, 20, 30, 19 ],
            "tuesday": [ 8, 18, 28, 7 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 16, 26, 5, 13 ],
            "saturday": [ 14, 24, 3, 13 ],
            "sunday": [ 12, 22, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-defeat-of-the-strikers.jpg',
          title: 'The defeat of the strikers',
          artist: 'Ivan Vladimirov',
          year: '?',
          rule: {
            "monday": [ 13, 23, 2, 12 ],
            "tuesday": [ 10, 21, 31, 20 ],
            "wednesday": [ 9, 19, 29, 8 ],
            "thursday": [ 7, 17, 27, 6 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 17, 27, 6, 14 ],
            "sunday": [ 15, 25, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/woman-ironing.jpg',
          title: 'Woman Ironing',
          artist: 'Corneliu Baba',
          year: '?',
          rule: {
            "monday": [ 15, 25, 4, 14 ],
            "tuesday": [ 13, 23, 2, 12 ],
            "wednesday": [ 10, 21, 31, 20 ],
            "thursday": [ 9, 19, 29, 8 ],
            "friday": [ 7, 17, 27, 6 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 17, 27, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-plowman.jpg',
          title: 'A plowman',
          artist: 'David Burliuk',
          year: 'c.1910',
          rule: {
            "monday": [ 17, 27, 6, 14 ],
            "tuesday": [ 15, 25, 4, 14 ],
            "wednesday": [ 13, 23, 2, 12 ],
            "thursday": [ 10, 21, 31, 20 ],
            "friday": [ 9, 19, 29, 8 ],
            "saturday": [ 7, 17, 27, 6 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/stonemason-1910.jpg',
          title: 'Stonemason',
          artist: 'David Burliuk',
          year: '1910',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 17, 27, 6, 14 ],
            "wednesday": [ 15, 25, 4, 14 ],
            "thursday": [ 13, 23, 2, 12 ],
            "friday": [ 10, 21, 31, 20 ],
            "saturday": [ 9, 19, 29, 8 ],
            "sunday": [ 7, 17, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/harvesting-1915.jpg',
          title: 'Harvesting',
          artist: 'David Burliuk',
          year: '1915',
          rule: {
            "monday": [ 7, 17, 27, 6 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 17, 27, 6, 14 ],
            "thursday": [ 15, 25, 4, 14 ],
            "friday": [ 13, 23, 2, 12 ],
            "saturday": [ 10, 21, 31, 20 ],
            "sunday": [ 9, 19, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/barbershop-1946.jpg',
          title: 'Barbershop',
          artist: 'David Burliuk',
          year: '1946',
          rule: {
            "monday": [ 9, 19, 29, 8 ],
            "tuesday": [ 7, 17, 27, 6 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 17, 27, 6, 14 ],
            "friday": [ 15, 25, 4, 14 ],
            "saturday": [ 13, 23, 2, 12 ],
            "sunday": [ 10, 21, 31, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-milkmade.jpg',
          title: 'A milkmade',
          artist: 'David Burliuk',
          year: '?',
          rule: {
            "monday": [ 10, 21, 31, 20 ],
            "tuesday": [ 9, 19, 29, 8 ],
            "wednesday": [ 7, 17, 27, 6 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 17, 27, 6, 14 ],
            "saturday": [ 15, 25, 4, 14 ],
            "sunday": [ 13, 23, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/fishermen.jpg',
          title: 'Fishermen',
          artist: 'David Burliuk',
          year: '?',
          rule: {
            "monday": [ 14, 24, 3, 13 ],
            "tuesday": [ 11, 22, 1, 21 ],
            "wednesday": [ 10, 20, 30, 9 ],
            "thursday": [ 8, 18, 28, 7 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 18, 28, 7, 15 ],
            "sunday": [ 16, 26, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/ploughing-the-field(1).jpg',
          title: 'Happily ploughing',
          artist: 'David Burliuk',
          year: '?',
          rule: {
            "monday": [ 16, 26, 5, 15 ],
            "tuesday": [ 14, 24, 3, 13 ],
            "wednesday": [ 11, 22, 1, 21 ],
            "thursday": [ 10, 20, 30, 9 ],
            "friday": [ 8, 18, 28, 7 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 18, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/laundress-on-the-banks-of-the-river.jpg',
          title: 'Laundress on the Banks of the River',
          artist: 'Camille Pissarro',
          year: 'c.1855',
          rule: {
            "monday": [ 18, 28, 7, 15 ],
            "tuesday": [ 16, 26, 5, 15 ],
            "wednesday": [ 14, 24, 3, 13 ],
            "thursday": [ 11, 22, 1, 21 ],
            "friday": [ 10, 20, 30, 9 ],
            "saturday": [ 8, 18, 28, 7 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-harvest.jpg',
          title: 'The Harvest',
          artist: 'Camille Pissarro',
          year: 'c.1857',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 18, 28, 7, 15 ],
            "wednesday": [ 16, 26, 5, 15 ],
            "thursday": [ 14, 24, 3, 13 ],
            "friday": [ 11, 22, 1, 21 ],
            "saturday": [ 10, 20, 30, 9 ],
            "sunday": [ 8, 18, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-maidservant-1867.jpg',
          title: 'The Maidservant',
          artist: 'Camille Pissarro',
          year: '1867',
          rule: {
            "monday": [ 8, 18, 28, 7 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 18, 28, 7, 15 ],
            "thursday": [ 16, 26, 5, 15 ],
            "friday": [ 14, 24, 3, 13 ],
            "saturday": [ 11, 22, 1, 21 ],
            "sunday": [ 10, 20, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-factory-1873.jpg',
          title: 'The Factory',
          artist: 'Camille Pissarro',
          year: '1873',
          rule: {
            "monday": [ 10, 20, 30, 9 ],
            "tuesday": [ 8, 18, 28, 7 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 18, 28, 7, 15 ],
            "friday": [ 16, 26, 5, 15 ],
            "saturday": [ 14, 24, 3, 13 ],
            "sunday": [ 11, 22, 1, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/resting-harvesters-montfoucault-1875.jpg',
          title: 'Resting Harvesters, Montfoucault',
          artist: 'Camille Pissarro',
          year: '1875',
          rule: {
            "monday": [ 11, 22, 1, 21 ],
            "tuesday": [ 10, 20, 30, 9 ],
            "wednesday": [ 8, 18, 28, 7 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 18, 28, 7, 15 ],
            "saturday": [ 16, 26, 5, 15 ],
            "sunday": [ 14, 24, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-harvest-at-montfoucault-2-1876.jpg',
          title: 'The Harvest at Montfoucault 2',
          artist: 'Camille Pissarro',
          year: '1876',
          rule: {
            "monday": [ 15, 25, 4, 14 ],
            "tuesday": [ 12, 23, 2, 22 ],
            "wednesday": [ 11, 21, 31, 10 ],
            "thursday": [ 9, 19, 29, 8 ],
            "friday": [ 7, 17, 27, 6 ],
            "saturday": [ 19, 29, 8, 16 ],
            "sunday": [ 17, 27, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/eugene-murer-at-his-pastry-oven-1877.jpg',
          title: 'Eugene Murer at His Pastry Oven',
          artist: 'Camille Pissarro',
          year: '1877',
          rule: {
            "monday": [ 17, 27, 6, 16 ],
            "tuesday": [ 15, 25, 4, 14 ],
            "wednesday": [ 12, 23, 2, 22 ],
            "thursday": [ 11, 21, 31, 10 ],
            "friday": [ 9, 19, 29, 8 ],
            "saturday": [ 7, 17, 27, 6 ],
            "sunday": [ 19, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/shoemakers.jpg',
          title: 'Shoemakers',
          artist: 'Camille Pissarro',
          year: 'c.1878',
          rule: {
            "monday": [ 19, 29, 8, 16 ],
            "tuesday": [ 17, 27, 6, 16 ],
            "wednesday": [ 15, 25, 4, 14 ],
            "thursday": [ 12, 23, 2, 22 ],
            "friday": [ 11, 21, 31, 10 ],
            "saturday": [ 9, 19, 29, 8 ],
            "sunday": [ 7, 17, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-laundry-woman-1879.jpg',
          title: 'The Laundry Woman',
          artist: 'Camille Pissarro',
          year: '1879',
          rule: {
            "monday": [ 7, 17, 27, 6 ],
            "tuesday": [ 19, 29, 8, 16 ],
            "wednesday": [ 17, 27, 6, 16 ],
            "thursday": [ 15, 25, 4, 14 ],
            "friday": [ 12, 23, 2, 22 ],
            "saturday": [ 11, 21, 31, 10 ],
            "sunday": [ 9, 19, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/peasants-harvesting-potatoes-1882.jpg',
          title: 'Peasants Harvesting Potatoes',
          artist: 'Camille Pissarro',
          year: '1882',
          rule: {
            "monday": [ 9, 19, 29, 8 ],
            "tuesday": [ 7, 17, 27, 6 ],
            "wednesday": [ 19, 29, 8, 16 ],
            "thursday": [ 17, 27, 6, 16 ],
            "friday": [ 15, 25, 4, 14 ],
            "saturday": [ 12, 23, 2, 22 ],
            "sunday": [ 11, 21, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/picking-apples.jpg',
          title: 'Picking Apples',
          artist: 'Camille Pissarro',
          year: 'c.1888',
          rule: {
            "monday": [ 11, 21, 31, 10 ],
            "tuesday": [ 9, 19, 29, 8 ],
            "wednesday": [ 7, 17, 27, 6 ],
            "thursday": [ 19, 29, 8, 16 ],
            "friday": [ 17, 27, 6, 16 ],
            "saturday": [ 15, 25, 4, 14 ],
            "sunday": [ 12, 23, 2, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-gleaners-1889.jpg',
          title: 'The Gleaners',
          artist: 'Camille Pissarro',
          year: '1889',
          rule: {
            "monday": [ 12, 23, 2, 22 ],
            "tuesday": [ 11, 21, 31, 10 ],
            "wednesday": [ 9, 19, 29, 8 ],
            "thursday": [ 7, 17, 27, 6 ],
            "friday": [ 19, 29, 8, 16 ],
            "saturday": [ 17, 27, 6, 16 ],
            "sunday": [ 15, 25, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/peasant-women-planting-stakes-1891.jpg',
          title: 'Peasant Women Planting Stakes',
          artist: 'Camille Pissarro',
          year: '1891',
          rule: {
            "monday": [ 16, 26, 5, 15 ],
            "tuesday": [ 13, 24, 3, 23 ],
            "wednesday": [ 12, 22, 1, 11 ],
            "thursday": [ 10, 20, 30, 9 ],
            "friday": [ 8, 18, 28, 7 ],
            "saturday": [ 20, 30, 9, 17 ],
            "sunday": [ 18, 28, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/laundring-women-eragny-sur-eptes-1895.jpg',
          title: 'Laundring Women. Eragny sur Eptes',
          artist: 'Camille Pissarro',
          year: '1895',
          rule: {
            "monday": [ 18, 28, 7, 17 ],
            "tuesday": [ 16, 26, 5, 15 ],
            "wednesday": [ 13, 24, 3, 23 ],
            "thursday": [ 12, 22, 1, 11 ],
            "friday": [ 10, 20, 30, 9 ],
            "saturday": [ 8, 18, 28, 7 ],
            "sunday": [ 20, 30, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/unloading-wood-at-rouen-1896.jpg',
          title: 'Unloading Wood at Rouen',
          artist: 'Camille Pissarro',
          year: '1896',
          rule: {
            "monday": [ 20, 30, 9, 17 ],
            "tuesday": [ 18, 28, 7, 17 ],
            "wednesday": [ 16, 26, 5, 15 ],
            "thursday": [ 13, 24, 3, 23 ],
            "friday": [ 12, 22, 1, 11 ],
            "saturday": [ 10, 20, 30, 9 ],
            "sunday": [ 8, 18, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-laundry-woman.jpg',
          title: 'The Laundry Woman',
          artist: 'Camille Pissarro',
          year: 'c.1898',
          rule: {
            "monday": [ 8, 18, 28, 7 ],
            "tuesday": [ 20, 30, 9, 17 ],
            "wednesday": [ 18, 28, 7, 17 ],
            "thursday": [ 16, 26, 5, 15 ],
            "friday": [ 13, 24, 3, 23 ],
            "saturday": [ 12, 22, 1, 11 ],
            "sunday": [ 10, 20, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/haymaking-in-eragny-1901.jpg',
          title: 'Haymaking in Eragny',
          artist: 'Camille Pissarro',
          year: '1901',
          rule: {
            "monday": [ 10, 20, 30, 9 ],
            "tuesday": [ 8, 18, 28, 7 ],
            "wednesday": [ 20, 30, 9, 17 ],
            "thursday": [ 18, 28, 7, 17 ],
            "friday": [ 16, 26, 5, 15 ],
            "saturday": [ 13, 24, 3, 23 ],
            "sunday": [ 12, 22, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-sugar-mill-1923.jpg',
          title: 'The Sugar Mill',
          artist: 'Diego Rivera',
          year: '1923',
          rule: {
            "monday": [ 12, 22, 1, 11 ],
            "tuesday": [ 10, 20, 30, 9 ],
            "wednesday": [ 8, 18, 28, 7 ],
            "thursday": [ 20, 30, 9, 17 ],
            "friday": [ 18, 28, 7, 17 ],
            "saturday": [ 16, 26, 5, 15 ],
            "sunday": [ 13, 24, 3, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/la-era-the-threshing-floor-1904-oil-on-canvas-1904.jpg',
          title: 'La Era (The Threshing Floor) 1904 (oil on canvas)',
          artist: 'Diego Rivera',
          year: '1904',
          rule: {
            "monday": [ 13, 24, 3, 23 ],
            "tuesday": [ 12, 22, 1, 11 ],
            "wednesday": [ 10, 20, 30, 9 ],
            "thursday": [ 8, 18, 28, 7 ],
            "friday": [ 20, 30, 9, 17 ],
            "saturday": [ 18, 28, 7, 17 ],
            "sunday": [ 16, 26, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/entry-into-the-mine-1923.jpg',
          title: 'Entry into the Mine',
          artist: 'Diego Rivera',
          year: '1923',
          rule: {
            "monday": [ 17, 27, 6, 16 ],
            "tuesday": [ 14, 25, 4, 24 ],
            "wednesday": [ 13, 23, 2, 12 ],
            "thursday": [ 11, 21, 31, 10 ],
            "friday": [ 9, 19, 29, 8 ],
            "saturday": [ 21, 31, 10, 18 ],
            "sunday": [ 19, 29, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/exit-from-the-mine-1923.jpg',
          title: 'Exit from the Mine',
          artist: 'Diego Rivera',
          year: '1923',
          rule: {
            "monday": [ 19, 29, 8, 18 ],
            "tuesday": [ 17, 27, 6, 16 ],
            "wednesday": [ 14, 25, 4, 24 ],
            "thursday": [ 13, 23, 2, 12 ],
            "friday": [ 11, 21, 31, 10 ],
            "saturday": [ 9, 19, 29, 8 ],
            "sunday": [ 21, 31, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/may-day-procession-in-moscow-1956.jpg',
          title: 'May Day Procession in Moscow',
          artist: 'Diego Rivera',
          year: '1956',
          rule: {
            "monday": [ 21, 31, 10, 18 ],
            "tuesday": [ 19, 29, 8, 18 ],
            "wednesday": [ 17, 27, 6, 16 ],
            "thursday": [ 14, 25, 4, 24 ],
            "friday": [ 13, 23, 2, 12 ],
            "saturday": [ 11, 21, 31, 10 ],
            "sunday": [ 9, 19, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-flower-seller.jpg',
          title: 'The Flower Seller',
          artist: 'Diego Rivera',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 9, 19, 29, 8 ],
            "tuesday": [ 21, 31, 10, 18 ],
            "wednesday": [ 19, 29, 8, 18 ],
            "thursday": [ 17, 27, 6, 16 ],
            "friday": [ 14, 25, 4, 24 ],
            "saturday": [ 13, 23, 2, 12 ],
            "sunday": [ 11, 21, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-pinole-seller-1936.jpg',
          title: 'The Pinole Seller',
          artist: 'Diego Rivera',
          year: '1936',
          rule: {
            "monday": [ 11, 21, 31, 10 ],
            "tuesday": [ 9, 19, 29, 8 ],
            "wednesday": [ 21, 31, 10, 18 ],
            "thursday": [ 19, 29, 8, 18 ],
            "friday": [ 17, 27, 6, 16 ],
            "saturday": [ 14, 25, 4, 24 ],
            "sunday": [ 13, 23, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/flower-carrier-1935.jpg',
          title: 'Flower Carrier',
          artist: 'Diego Rivera',
          year: '1935',
          rule: {
            "monday": [ 13, 23, 2, 12 ],
            "tuesday": [ 11, 21, 31, 10 ],
            "wednesday": [ 9, 19, 29, 8 ],
            "thursday": [ 21, 31, 10, 18 ],
            "friday": [ 19, 29, 8, 18 ],
            "saturday": [ 17, 27, 6, 16 ],
            "sunday": [ 14, 25, 4, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/autumn-the-fruit-pickers-1912.jpg',
          title: 'Autumn: The Fruit Pickers',
          artist: 'Pierre Bonnard',
          year: '1912',
          rule: {
            "monday": [ 14, 25, 4, 24 ],
            "tuesday": [ 13, 23, 2, 12 ],
            "wednesday": [ 11, 21, 31, 10 ],
            "thursday": [ 9, 19, 29, 8 ],
            "friday": [ 21, 31, 10, 18 ],
            "saturday": [ 19, 29, 8, 18 ],
            "sunday": [ 17, 27, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/rest-in-harvest.jpg',
          title: 'Rest in Harvest',
          artist: 'William-Adolphe Bouguereau',
          year: 'c.1865',
          rule: {
            "monday": [ 18, 28, 7, 17 ],
            "tuesday": [ 15, 26, 5, 25 ],
            "wednesday": [ 14, 24, 3, 13 ],
            "thursday": [ 12, 22, 1, 11 ],
            "friday": [ 10, 20, 30, 9 ],
            "saturday": [ 22, 1, 11, 19 ],
            "sunday": [ 20, 30, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/young-shepherdess-1868.jpg',
          title: 'Young Shepherdess',
          artist: 'William-Adolphe Bouguereau',
          year: '1868',
          rule: {
            "monday": [ 20, 30, 9, 19 ],
            "tuesday": [ 18, 28, 7, 17 ],
            "wednesday": [ 15, 26, 5, 25 ],
            "thursday": [ 14, 24, 3, 13 ],
            "friday": [ 12, 22, 1, 11 ],
            "saturday": [ 10, 20, 30, 9 ],
            "sunday": [ 22, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/washerwomen-of-fouesnant-1869.jpg',
          title: 'Washerwomen of Fouesnant',
          artist: 'William-Adolphe Bouguereau',
          year: '1869',
          rule: {
            "monday": [ 22, 1, 11, 19 ],
            "tuesday": [ 20, 30, 9, 19 ],
            "wednesday": [ 18, 28, 7, 17 ],
            "thursday": [ 15, 26, 5, 25 ],
            "friday": [ 14, 24, 3, 13 ],
            "saturday": [ 12, 22, 1, 11 ],
            "sunday": [ 10, 20, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/shepherdess-1889.jpg',
          title: 'Shepherdess',
          artist: 'William-Adolphe Bouguereau',
          year: '1889',
          rule: {
            "monday": [ 10, 20, 30, 9 ],
            "tuesday": [ 22, 1, 11, 19 ],
            "wednesday": [ 20, 30, 9, 19 ],
            "thursday": [ 18, 28, 7, 17 ],
            "friday": [ 15, 26, 5, 25 ],
            "saturday": [ 14, 24, 3, 13 ],
            "sunday": [ 12, 22, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/new-cover.jpg',
          title: 'New cover',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 12, 22, 1, 11 ],
            "tuesday": [ 10, 20, 30, 9 ],
            "wednesday": [ 22, 1, 11, 19 ],
            "thursday": [ 20, 30, 9, 19 ],
            "friday": [ 18, 28, 7, 17 ],
            "saturday": [ 15, 26, 5, 25 ],
            "sunday": [ 14, 24, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/map.jpg',
          title: 'Map',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 14, 24, 3, 13 ],
            "tuesday": [ 12, 22, 1, 11 ],
            "wednesday": [ 10, 20, 30, 9 ],
            "thursday": [ 22, 1, 11, 19 ],
            "friday": [ 20, 30, 9, 19 ],
            "saturday": [ 18, 28, 7, 17 ],
            "sunday": [ 15, 26, 5, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/copyright.jpg',
          title: 'Copyright',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 15, 26, 5, 25 ],
            "tuesday": [ 14, 24, 3, 13 ],
            "wednesday": [ 12, 22, 1, 11 ],
            "thursday": [ 10, 20, 30, 9 ],
            "friday": [ 22, 1, 11, 19 ],
            "saturday": [ 20, 30, 9, 19 ],
            "sunday": [ 18, 28, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/thanks.jpg',
          title: 'Thanks',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 19, 29, 6, 18 ],
            "tuesday": [ 16, 27, 6, 26 ],
            "wednesday": [ 15, 25, 4, 14 ],
            "thursday": [ 13, 23, 2, 12 ],
            "friday": [ 11, 19, 1, 10 ],
            "saturday": [ 23, 2, 12, 20 ],
            "sunday": [ 21, 1, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/crow.jpg',
          title: 'Crow',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 1, 10, 20 ],
            "tuesday": [ 19, 29, 6, 18 ],
            "wednesday": [ 16, 27, 6, 26 ],
            "thursday": [ 15, 25, 4, 14 ],
            "friday": [ 13, 23, 2, 12 ],
            "saturday": [ 11, 19, 1, 10 ],
            "sunday": [ 23, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/bullygate.jpg',
          title: 'Bullygate',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 2, 12, 20 ],
            "tuesday": [ 21, 1, 10, 20 ],
            "wednesday": [ 19, 29, 6, 18 ],
            "thursday": [ 16, 27, 6, 26 ],
            "friday": [ 15, 25, 4, 14 ],
            "saturday": [ 13, 23, 2, 12 ],
            "sunday": [ 11, 19, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/rush.jpg',
          title: 'Rush',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 11, 19, 1, 10 ],
            "tuesday": [ 23, 2, 12, 20 ],
            "wednesday": [ 21, 1, 10, 20 ],
            "thursday": [ 19, 29, 6, 18 ],
            "friday": [ 16, 27, 6, 26 ],
            "saturday": [ 15, 25, 4, 14 ],
            "sunday": [ 13, 23, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/rush-1.jpg',
          title: 'Rush',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 13, 23, 2, 12 ],
            "tuesday": [ 11, 19, 1, 10 ],
            "wednesday": [ 23, 2, 12, 20 ],
            "thursday": [ 21, 1, 10, 20 ],
            "friday": [ 19, 29, 6, 18 ],
            "saturday": [ 16, 27, 6, 26 ],
            "sunday": [ 15, 25, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/condi.jpg',
          title: 'Condi',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 15, 25, 4, 14 ],
            "tuesday": [ 13, 23, 2, 12 ],
            "wednesday": [ 11, 19, 1, 10 ],
            "thursday": [ 23, 2, 12, 20 ],
            "friday": [ 21, 1, 10, 20 ],
            "saturday": [ 19, 29, 6, 18 ],
            "sunday": [ 16, 27, 6, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/johnie.jpg',
          title: 'Johnie',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 16, 27, 6, 26 ],
            "tuesday": [ 15, 25, 4, 14 ],
            "wednesday": [ 13, 23, 2, 12 ],
            "thursday": [ 11, 19, 1, 10 ],
            "friday": [ 23, 2, 12, 20 ],
            "saturday": [ 21, 1, 10, 20 ],
            "sunday": [ 19, 29, 6, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/dickie.jpg',
          title: 'Dickie',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 20, 30, 7, 19 ],
            "tuesday": [ 17, 28, 7, 27 ],
            "wednesday": [ 16, 26, 5, 15 ],
            "thursday": [ 14, 24, 3, 11 ],
            "friday": [ 12, 20, 2, 11 ],
            "saturday": [ 24, 3, 13, 21 ],
            "sunday": [ 22, 2, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/donnie.jpg',
          title: 'Donnie',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 22, 2, 11, 21 ],
            "tuesday": [ 20, 30, 7, 19 ],
            "wednesday": [ 17, 28, 7, 27 ],
            "thursday": [ 16, 26, 5, 15 ],
            "friday": [ 14, 24, 3, 11 ],
            "saturday": [ 12, 20, 2, 11 ],
            "sunday": [ 24, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/george.jpg',
          title: 'George',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 24, 3, 13, 21 ],
            "tuesday": [ 22, 2, 11, 21 ],
            "wednesday": [ 20, 30, 7, 19 ],
            "thursday": [ 17, 28, 7, 27 ],
            "friday": [ 16, 26, 5, 15 ],
            "saturday": [ 14, 24, 3, 11 ],
            "sunday": [ 12, 20, 2, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/troubleride.jpg',
          title: 'Troubleride',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 12, 20, 2, 11 ],
            "tuesday": [ 24, 3, 13, 21 ],
            "wednesday": [ 22, 2, 11, 21 ],
            "thursday": [ 20, 30, 7, 19 ],
            "friday": [ 17, 28, 7, 27 ],
            "saturday": [ 16, 26, 5, 15 ],
            "sunday": [ 14, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/tower.jpg',
          title: 'Tower',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 14, 24, 3, 11 ],
            "tuesday": [ 12, 20, 2, 11 ],
            "wednesday": [ 24, 3, 13, 21 ],
            "thursday": [ 22, 2, 11, 21 ],
            "friday": [ 20, 30, 7, 19 ],
            "saturday": [ 17, 28, 7, 27 ],
            "sunday": [ 16, 26, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/ship.jpg',
          title: 'Ship',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 16, 26, 5, 15 ],
            "tuesday": [ 14, 24, 3, 11 ],
            "wednesday": [ 12, 20, 2, 11 ],
            "thursday": [ 24, 3, 13, 21 ],
            "friday": [ 22, 2, 11, 21 ],
            "saturday": [ 20, 30, 7, 19 ],
            "sunday": [ 17, 28, 7, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/blow.jpg',
          title: 'Blow',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 17, 28, 7, 27 ],
            "tuesday": [ 16, 26, 5, 15 ],
            "wednesday": [ 14, 24, 3, 11 ],
            "thursday": [ 12, 20, 2, 11 ],
            "friday": [ 24, 3, 13, 21 ],
            "saturday": [ 22, 2, 11, 21 ],
            "sunday": [ 20, 30, 7, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/ghoster.jpg',
          title: 'Ghoster',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 31, 8, 20 ],
            "tuesday": [ 18, 29, 8, 28 ],
            "wednesday": [ 17, 27, 6, 16 ],
            "thursday": [ 15, 25, 4, 12 ],
            "friday": [ 13, 21, 3, 12 ],
            "saturday": [ 25, 4, 14, 22 ],
            "sunday": [ 23, 3, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/deficit.jpg',
          title: 'Deficit',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 3, 12, 22 ],
            "tuesday": [ 21, 31, 8, 20 ],
            "wednesday": [ 18, 29, 8, 28 ],
            "thursday": [ 17, 27, 6, 16 ],
            "friday": [ 15, 25, 4, 12 ],
            "saturday": [ 13, 21, 3, 12 ],
            "sunday": [ 25, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/shoot.jpg',
          title: 'Shoot',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 4, 14, 22 ],
            "tuesday": [ 23, 3, 12, 22 ],
            "wednesday": [ 21, 31, 8, 20 ],
            "thursday": [ 18, 29, 8, 28 ],
            "friday": [ 17, 27, 6, 16 ],
            "saturday": [ 15, 25, 4, 12 ],
            "sunday": [ 13, 21, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/corporape.jpg',
          title: 'Corporape',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 13, 21, 3, 12 ],
            "tuesday": [ 25, 4, 14, 22 ],
            "wednesday": [ 23, 3, 12, 22 ],
            "thursday": [ 21, 31, 8, 20 ],
            "friday": [ 18, 29, 8, 28 ],
            "saturday": [ 17, 27, 6, 16 ],
            "sunday": [ 15, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/funhouse.jpg',
          title: 'Funhouse',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 15, 25, 4, 12 ],
            "tuesday": [ 13, 21, 3, 12 ],
            "wednesday": [ 25, 4, 14, 22 ],
            "thursday": [ 23, 3, 12, 22 ],
            "friday": [ 21, 31, 8, 20 ],
            "saturday": [ 18, 29, 8, 28 ],
            "sunday": [ 17, 27, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/rolling-thunder.jpg',
          title: 'Rolling thunder',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 17, 27, 6, 16 ],
            "tuesday": [ 15, 25, 4, 12 ],
            "wednesday": [ 13, 21, 3, 12 ],
            "thursday": [ 25, 4, 14, 22 ],
            "friday": [ 23, 3, 12, 22 ],
            "saturday": [ 21, 31, 8, 20 ],
            "sunday": [ 18, 29, 8, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/gasp.jpg',
          title: 'Gasp',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 18, 29, 8, 28 ],
            "tuesday": [ 17, 27, 6, 16 ],
            "wednesday": [ 15, 25, 4, 12 ],
            "thursday": [ 13, 21, 3, 12 ],
            "friday": [ 25, 4, 14, 22 ],
            "saturday": [ 23, 3, 12, 22 ],
            "sunday": [ 21, 31, 8, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/trouble.jpg',
          title: 'Trouble',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 31, 8, 20 ],
            "tuesday": [ 18, 29, 8, 28 ],
            "wednesday": [ 17, 27, 6, 16 ],
            "thursday": [ 15, 25, 4, 12 ],
            "friday": [ 13, 21, 3, 12 ],
            "saturday": [ 25, 4, 14, 22 ],
            "sunday": [ 23, 3, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/bear.jpg',
          title: 'Bear',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 3, 12, 22 ],
            "tuesday": [ 21, 31, 8, 20 ],
            "wednesday": [ 18, 29, 8, 28 ],
            "thursday": [ 17, 27, 6, 16 ],
            "friday": [ 15, 25, 4, 12 ],
            "saturday": [ 13, 21, 3, 12 ],
            "sunday": [ 25, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/bear-1.jpg',
          title: 'Bear',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 4, 14, 22 ],
            "tuesday": [ 23, 3, 12, 22 ],
            "wednesday": [ 21, 31, 8, 20 ],
            "thursday": [ 18, 29, 8, 28 ],
            "friday": [ 17, 27, 6, 16 ],
            "saturday": [ 15, 25, 4, 12 ],
            "sunday": [ 13, 21, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/arms.jpg',
          title: 'Arms',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 13, 21, 3, 12 ],
            "tuesday": [ 25, 4, 14, 22 ],
            "wednesday": [ 23, 3, 12, 22 ],
            "thursday": [ 21, 31, 8, 20 ],
            "friday": [ 18, 29, 8, 28 ],
            "saturday": [ 17, 27, 6, 16 ],
            "sunday": [ 15, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/scam.jpg',
          title: 'Scam',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 15, 25, 4, 12 ],
            "tuesday": [ 13, 21, 3, 12 ],
            "wednesday": [ 25, 4, 14, 22 ],
            "thursday": [ 23, 3, 12, 22 ],
            "friday": [ 21, 31, 8, 20 ],
            "saturday": [ 18, 29, 8, 28 ],
            "sunday": [ 17, 27, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/library.jpg',
          title: 'Library',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 17, 27, 6, 16 ],
            "tuesday": [ 15, 25, 4, 12 ],
            "wednesday": [ 13, 21, 3, 12 ],
            "thursday": [ 25, 4, 14, 22 ],
            "friday": [ 23, 3, 12, 22 ],
            "saturday": [ 21, 31, 8, 20 ],
            "sunday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/airstrip.jpg',
          title: 'Airstrip',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 18, 29, 8, 28 ],
            "tuesday": [ 17, 27, 6, 16 ],
            "wednesday": [ 15, 25, 4, 12 ],
            "thursday": [ 13, 21, 3, 12 ],
            "friday": [ 25, 4, 14, 22 ],
            "saturday": [ 23, 3, 12, 22 ],
            "sunday": [ 21, 31, 8, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/rupert.jpg',
          title: 'Rupert',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 22, 1, 9, 21 ],
            "tuesday": [ 19, 30, 9, 29 ],
            "wednesday": [ 18, 28, 7, 17 ],
            "thursday": [ 16, 26, 5, 13 ],
            "friday": [ 14, 22, 4, 13 ],
            "saturday": [ 26, 5, 15, 23 ],
            "sunday": [ 24, 4, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/media.jpg',
          title: 'Media',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 24, 4, 13, 23 ],
            "tuesday": [ 22, 1, 9, 21 ],
            "wednesday": [ 19, 30, 9, 29 ],
            "thursday": [ 18, 28, 7, 17 ],
            "friday": [ 16, 26, 5, 13 ],
            "saturday": [ 14, 22, 4, 13 ],
            "sunday": [ 26, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/flea.jpg',
          title: 'Flea',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 26, 5, 15, 23 ],
            "tuesday": [ 24, 4, 13, 23 ],
            "wednesday": [ 22, 1, 9, 21 ],
            "thursday": [ 19, 30, 9, 29 ],
            "friday": [ 18, 28, 7, 17 ],
            "saturday": [ 16, 26, 5, 13 ],
            "sunday": [ 14, 22, 4, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/snake-oil.jpg',
          title: 'Snake oil',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 14, 22, 4, 13 ],
            "tuesday": [ 26, 5, 15, 23 ],
            "wednesday": [ 24, 4, 13, 23 ],
            "thursday": [ 22, 1, 9, 21 ],
            "friday": [ 19, 30, 9, 29 ],
            "saturday": [ 18, 28, 7, 17 ],
            "sunday": [ 16, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/dogma.jpg',
          title: 'Dogma',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 16, 26, 5, 13 ],
            "tuesday": [ 14, 22, 4, 13 ],
            "wednesday": [ 26, 5, 15, 23 ],
            "thursday": [ 24, 4, 13, 23 ],
            "friday": [ 22, 1, 9, 21 ],
            "saturday": [ 19, 30, 9, 29 ],
            "sunday": [ 18, 28, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/freaks.jpg',
          title: 'Freaks',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 18, 28, 7, 17 ],
            "tuesday": [ 16, 26, 5, 13 ],
            "wednesday": [ 14, 22, 4, 13 ],
            "thursday": [ 26, 5, 15, 23 ],
            "friday": [ 24, 4, 13, 23 ],
            "saturday": [ 22, 1, 9, 21 ],
            "sunday": [ 19, 30, 9, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/gross.jpg',
          title: 'Gross',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 19, 30, 9, 29 ],
            "tuesday": [ 18, 28, 7, 17 ],
            "wednesday": [ 16, 26, 5, 13 ],
            "thursday": [ 14, 22, 4, 13 ],
            "friday": [ 26, 5, 15, 23 ],
            "saturday": [ 24, 4, 13, 23 ],
            "sunday": [ 22, 1, 9, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/law.jpg',
          title: 'Law',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 2, 10, 22 ],
            "tuesday": [ 20, 31, 10, 30 ],
            "wednesday": [ 19, 29, 8, 18 ],
            "thursday": [ 17, 27, 6, 14 ],
            "friday": [ 15, 23, 5, 14 ],
            "saturday": [ 27, 6, 16, 24 ],
            "sunday": [ 25, 5, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/snack.jpg',
          title: 'Snack',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 5, 14, 24 ],
            "tuesday": [ 23, 2, 10, 22 ],
            "wednesday": [ 20, 31, 10, 30 ],
            "thursday": [ 19, 29, 8, 18 ],
            "friday": [ 17, 27, 6, 14 ],
            "saturday": [ 15, 23, 5, 14 ],
            "sunday": [ 27, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/trouble-war.jpg',
          title: 'Trouble war',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 28, 7, 17, 25 ],
            "tuesday": [ 26, 6, 15, 25 ],
            "wednesday": [ 24, 3, 11, 23 ],
            "thursday": [ 21, 1, 11, 31 ],
            "friday": [ 20, 30, 9, 19 ],
            "saturday": [ 18, 28, 7, 15 ],
            "sunday": [ 16, 24, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/gulf-war.jpg',
          title: 'Gulf war',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 16, 24, 6, 15 ],
            "tuesday": [ 28, 7, 17, 25 ],
            "wednesday": [ 26, 6, 15, 25 ],
            "thursday": [ 24, 3, 11, 23 ],
            "friday": [ 21, 1, 11, 31 ],
            "saturday": [ 20, 30, 9, 19 ],
            "sunday": [ 18, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/party-animals.jpg',
          title: 'Party animals',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 18, 28, 7, 15 ],
            "tuesday": [ 16, 24, 6, 15 ],
            "wednesday": [ 28, 7, 17, 25 ],
            "thursday": [ 26, 6, 15, 25 ],
            "friday": [ 24, 3, 11, 23 ],
            "saturday": [ 21, 1, 11, 31 ],
            "sunday": [ 20, 30, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/wheel.jpg',
          title: 'Wheel',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 20, 30, 9, 19 ],
            "tuesday": [ 18, 28, 7, 15 ],
            "wednesday": [ 16, 24, 6, 15 ],
            "thursday": [ 28, 7, 17, 25 ],
            "friday": [ 26, 6, 15, 25 ],
            "saturday": [ 24, 3, 11, 23 ],
            "sunday": [ 21, 1, 11, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/transport.jpg',
          title: 'Transport',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 1, 11, 31 ],
            "tuesday": [ 20, 30, 9, 19 ],
            "wednesday": [ 18, 28, 7, 15 ],
            "thursday": [ 16, 24, 6, 15 ],
            "friday": [ 28, 7, 17, 25 ],
            "saturday": [ 26, 6, 15, 25 ],
            "sunday": [ 24, 3, 11, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/training.jpg',
          title: 'Training',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 4, 12, 24 ],
            "tuesday": [ 22, 2, 12, 1 ],
            "wednesday": [ 21, 1, 10, 20 ],
            "thursday": [ 19, 29, 8, 16 ],
            "friday": [ 17, 25, 7, 16 ],
            "saturday": [ 29, 8, 18, 26 ],
            "sunday": [ 27, 7, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/fashion.jpg',
          title: 'Fashion',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 27, 7, 16, 26 ],
            "tuesday": [ 25, 4, 12, 24 ],
            "wednesday": [ 22, 2, 12, 1 ],
            "thursday": [ 21, 1, 10, 20 ],
            "friday": [ 19, 29, 8, 16 ],
            "saturday": [ 17, 25, 7, 16 ],
            "sunday": [ 29, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/cull.jpg',
          title: 'Cull',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 29, 8, 18, 26 ],
            "tuesday": [ 27, 7, 16, 26 ],
            "wednesday": [ 25, 4, 12, 24 ],
            "thursday": [ 22, 2, 12, 1 ],
            "friday": [ 21, 1, 10, 20 ],
            "saturday": [ 19, 29, 8, 16 ],
            "sunday": [ 17, 25, 7, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/hands (1).jpg',
          title: 'Hands',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 17, 25, 7, 16 ],
            "tuesday": [ 29, 8, 18, 26 ],
            "wednesday": [ 27, 7, 16, 26 ],
            "thursday": [ 25, 4, 12, 24 ],
            "friday": [ 22, 2, 12, 1 ],
            "saturday": [ 21, 1, 10, 20 ],
            "sunday": [ 19, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/carousel.jpg',
          title: 'Carousel',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 19, 29, 8, 16 ],
            "tuesday": [ 17, 25, 7, 16 ],
            "wednesday": [ 29, 8, 18, 26 ],
            "thursday": [ 27, 7, 16, 26 ],
            "friday": [ 25, 4, 12, 24 ],
            "saturday": [ 22, 2, 12, 1 ],
            "sunday": [ 21, 1, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/trouble-farm.jpg',
          title: 'Trouble farm',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 1, 10, 20 ],
            "tuesday": [ 19, 29, 8, 16 ],
            "wednesday": [ 17, 25, 7, 16 ],
            "thursday": [ 29, 8, 18, 26 ],
            "friday": [ 27, 7, 16, 26 ],
            "saturday": [ 25, 4, 12, 24 ],
            "sunday": [ 22, 2, 12, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/factory.jpg',
          title: 'Factory',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 22, 2, 12, 1 ],
            "tuesday": [ 21, 1, 10, 20 ],
            "wednesday": [ 19, 29, 8, 16 ],
            "thursday": [ 17, 25, 7, 16 ],
            "friday": [ 29, 8, 18, 26 ],
            "saturday": [ 27, 7, 16, 26 ],
            "sunday": [ 25, 4, 12, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/downer.jpg',
          title: 'Downer',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 26, 5, 13, 25 ],
            "tuesday": [ 23, 3, 13, 2 ],
            "wednesday": [ 22, 2, 11, 21 ],
            "thursday": [ 20, 30, 9, 17 ],
            "friday": [ 18, 26, 8, 17 ],
            "saturday": [ 30, 9, 19, 27 ],
            "sunday": [ 28, 8, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pit.jpg',
          title: 'Pit',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 28, 8, 17, 27 ],
            "tuesday": [ 26, 5, 13, 25 ],
            "wednesday": [ 23, 3, 13, 2 ],
            "thursday": [ 22, 2, 11, 21 ],
            "friday": [ 20, 30, 9, 17 ],
            "saturday": [ 18, 26, 8, 17 ],
            "sunday": [ 30, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/trouble-end.jpg',
          title: 'Trouble end',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 30, 9, 19, 27 ],
            "tuesday": [ 28, 8, 17, 27 ],
            "wednesday": [ 26, 5, 13, 25 ],
            "thursday": [ 23, 3, 13, 2 ],
            "friday": [ 22, 2, 11, 21 ],
            "saturday": [ 20, 30, 9, 17 ],
            "sunday": [ 18, 26, 8, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/no-child.jpg',
          title: 'No child',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 18, 26, 8, 17 ],
            "tuesday": [ 30, 9, 19, 27 ],
            "wednesday": [ 28, 8, 17, 27 ],
            "thursday": [ 26, 5, 13, 25 ],
            "friday": [ 23, 3, 13, 2 ],
            "saturday": [ 22, 2, 11, 21 ],
            "sunday": [ 20, 30, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/plague.jpg',
          title: 'Plague',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 20, 30, 9, 17 ],
            "tuesday": [ 18, 26, 8, 17 ],
            "wednesday": [ 30, 9, 19, 27 ],
            "thursday": [ 28, 8, 17, 27 ],
            "friday": [ 26, 5, 13, 25 ],
            "saturday": [ 23, 3, 13, 2 ],
            "sunday": [ 22, 2, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/god.jpg',
          title: 'God',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 22, 2, 11, 21 ],
            "tuesday": [ 20, 30, 9, 17 ],
            "wednesday": [ 18, 26, 8, 17 ],
            "thursday": [ 30, 9, 19, 27 ],
            "friday": [ 28, 8, 17, 27 ],
            "saturday": [ 26, 5, 13, 25 ],
            "sunday": [ 23, 3, 13, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/chapel.jpg',
          title: 'Chapel',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 3, 13, 2 ],
            "tuesday": [ 22, 2, 11, 21 ],
            "wednesday": [ 20, 30, 9, 17 ],
            "thursday": [ 18, 26, 8, 17 ],
            "friday": [ 30, 9, 19, 27 ],
            "saturday": [ 28, 8, 17, 27 ],
            "sunday": [ 26, 5, 13, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/genocide.jpg',
          title: 'Genocide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 27, 6, 14, 26 ],
            "tuesday": [ 24, 4, 14, 3 ],
            "wednesday": [ 23, 3, 2, 22 ],
            "thursday": [ 21, 31, 10, 18 ],
            "friday": [ 19, 27, 9, 18 ],
            "saturday": [ 31, 10, 20, 28 ],
            "sunday": [ 29, 9, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/homeland.jpg',
          title: 'Homeland',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 29, 9, 18, 28 ],
            "tuesday": [ 27, 6, 14, 26 ],
            "wednesday": [ 24, 4, 14, 3 ],
            "thursday": [ 23, 3, 2, 22 ],
            "friday": [ 21, 31, 10, 18 ],
            "saturday": [ 19, 27, 9, 18 ],
            "sunday": [ 31, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/voter.jpg',
          title: 'Voter',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 31, 10, 20, 28 ],
            "tuesday": [ 29, 9, 18, 28 ],
            "wednesday": [ 27, 6, 14, 26 ],
            "thursday": [ 24, 4, 14, 3 ],
            "friday": [ 23, 3, 2, 22 ],
            "saturday": [ 21, 31, 10, 18 ],
            "sunday": [ 19, 27, 9, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/alien.jpg',
          title: 'Alien',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 19, 27, 9, 18 ],
            "tuesday": [ 31, 10, 20, 28 ],
            "wednesday": [ 29, 9, 18, 28 ],
            "thursday": [ 27, 6, 14, 26 ],
            "friday": [ 24, 4, 14, 3 ],
            "saturday": [ 23, 3, 2, 22 ],
            "sunday": [ 21, 31, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/alien-1.jpg',
          title: 'Alien',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 31, 10, 18 ],
            "tuesday": [ 19, 27, 9, 18 ],
            "wednesday": [ 31, 10, 20, 28 ],
            "thursday": [ 29, 9, 18, 28 ],
            "friday": [ 27, 6, 14, 26 ],
            "saturday": [ 24, 4, 14, 3 ],
            "sunday": [ 23, 3, 2, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/liberty.jpg',
          title: 'Liberty',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 3, 2, 22 ],
            "tuesday": [ 21, 31, 10, 18 ],
            "wednesday": [ 19, 27, 9, 18 ],
            "thursday": [ 31, 10, 20, 28 ],
            "friday": [ 29, 9, 18, 28 ],
            "saturday": [ 27, 6, 14, 26 ],
            "sunday": [ 24, 4, 14, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/triumph.jpg',
          title: 'Triumph',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 24, 4, 14, 3 ],
            "tuesday": [ 23, 3, 2, 22 ],
            "wednesday": [ 21, 31, 10, 18 ],
            "thursday": [ 19, 27, 9, 18 ],
            "friday": [ 31, 10, 20, 28 ],
            "saturday": [ 29, 9, 18, 28 ],
            "sunday": [ 27, 6, 14, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/mill-fragment.jpg',
          title: 'Mill(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 28, 7, 15, 27 ],
            "tuesday": [ 25, 5, 15, 4 ],
            "wednesday": [ 24, 4, 3, 23 ],
            "thursday": [ 22, 1, 11, 19 ],
            "friday": [ 20, 28, 10, 19 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/mill-fragment-1.jpg',
          title: 'Mill(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 30, 10, 19, 29 ],
            "tuesday": [ 28, 7, 15, 27 ],
            "wednesday": [ 25, 5, 15, 4 ],
            "thursday": [ 24, 4, 3, 23 ],
            "friday": [ 22, 1, 11, 19 ],
            "saturday": [ 20, 28, 10, 19 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/mill-fragment-2.jpg',
          title: 'Mill(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 19, 29 ],
            "wednesday": [ 28, 7, 15, 27 ],
            "thursday": [ 25, 5, 15, 4 ],
            "friday": [ 24, 4, 3, 23 ],
            "saturday": [ 22, 1, 11, 19 ],
            "sunday": [ 20, 28, 10, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/mill.jpg',
          title: 'Mill',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 20, 28, 10, 19 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 19, 29 ],
            "thursday": [ 28, 7, 15, 27 ],
            "friday": [ 25, 5, 15, 4 ],
            "saturday": [ 24, 4, 3, 23 ],
            "sunday": [ 22, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/mill-fragment-3.jpg',
          title: 'Mill(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 22, 1, 11, 19 ],
            "tuesday": [ 20, 28, 10, 19 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 19, 29 ],
            "friday": [ 28, 7, 15, 27 ],
            "saturday": [ 25, 5, 15, 4 ],
            "sunday": [ 24, 4, 3, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/mill-fragment-4.jpg',
          title: 'Mill(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 24, 4, 3, 23 ],
            "tuesday": [ 22, 1, 11, 19 ],
            "wednesday": [ 20, 28, 10, 19 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 19, 29 ],
            "saturday": [ 28, 7, 15, 27 ],
            "sunday": [ 25, 5, 15, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/ark.jpg',
          title: 'Ark',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 5, 15, 4 ],
            "tuesday": [ 24, 4, 3, 23 ],
            "wednesday": [ 22, 1, 11, 19 ],
            "thursday": [ 20, 28, 10, 19 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 19, 29 ],
            "sunday": [ 28, 7, 15, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/bathen.jpg',
          title: 'Bathen',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 29, 8, 16, 28 ],
            "tuesday": [ 26, 6, 16, 5 ],
            "wednesday": [ 25, 5, 4, 24 ],
            "thursday": [ 23, 2, 12, 20 ],
            "friday": [ 21, 29, 11, 20 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 31, 11, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/bearded-ladies.jpg',
          title: 'Bearded ladies',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 31, 11, 20, 30 ],
            "tuesday": [ 29, 8, 16, 28 ],
            "wednesday": [ 26, 6, 16, 5 ],
            "thursday": [ 25, 5, 4, 24 ],
            "friday": [ 23, 2, 12, 20 ],
            "saturday": [ 21, 29, 11, 20 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/bill.jpg',
          title: 'Bill',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 31, 11, 20, 30 ],
            "wednesday": [ 29, 8, 16, 28 ],
            "thursday": [ 26, 6, 16, 5 ],
            "friday": [ 25, 5, 4, 24 ],
            "saturday": [ 23, 2, 12, 20 ],
            "sunday": [ 21, 29, 11, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/boot.jpg',
          title: 'Boot',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 29, 11, 20 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 31, 11, 20, 30 ],
            "thursday": [ 29, 8, 16, 28 ],
            "friday": [ 26, 6, 16, 5 ],
            "saturday": [ 25, 5, 4, 24 ],
            "sunday": [ 23, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/monkey.jpg',
          title: 'monkey',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 2, 12, 20 ],
            "tuesday": [ 21, 29, 11, 20 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 31, 11, 20, 30 ],
            "friday": [ 29, 8, 16, 28 ],
            "saturday": [ 26, 6, 16, 5 ],
            "sunday": [ 25, 5, 4, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/cow-tif.jpg',
          title: 'Cow tif',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 5, 4, 24 ],
            "tuesday": [ 23, 2, 12, 20 ],
            "wednesday": [ 21, 29, 11, 20 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 31, 11, 20, 30 ],
            "saturday": [ 29, 8, 16, 28 ],
            "sunday": [ 26, 6, 16, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/cross.jpg',
          title: 'Cross',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 26, 6, 16, 5 ],
            "tuesday": [ 25, 5, 4, 24 ],
            "wednesday": [ 23, 2, 12, 20 ],
            "thursday": [ 21, 29, 11, 20 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 31, 11, 20, 30 ],
            "sunday": [ 29, 8, 16, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/dawn.jpg',
          title: 'Dawn',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 30, 9, 17, 29 ],
            "tuesday": [ 27, 7, 17, 6 ],
            "wednesday": [ 26, 6, 5, 25 ],
            "thursday": [ 24, 3, 13, 21 ],
            "friday": [ 22, 30, 12, 21 ],
            "saturday": [ 3, 13, 23, 31 ],
            "sunday": [ 1, 12, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/death-jumbo.jpg',
          title: 'Death Jumbo',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 1, 12, 21, 31 ],
            "tuesday": [ 30, 9, 17, 29 ],
            "wednesday": [ 27, 7, 17, 6 ],
            "thursday": [ 26, 6, 5, 25 ],
            "friday": [ 24, 3, 13, 21 ],
            "saturday": [ 22, 30, 12, 21 ],
            "sunday": [ 3, 13, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/blind-children-feel-an-elephant.jpg',
          title: 'Blind children feel an elephant',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 3, 13, 23, 31 ],
            "tuesday": [ 1, 12, 21, 31 ],
            "wednesday": [ 30, 9, 17, 29 ],
            "thursday": [ 27, 7, 17, 6 ],
            "friday": [ 26, 6, 5, 25 ],
            "saturday": [ 24, 3, 13, 21 ],
            "sunday": [ 22, 30, 12, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/elejanjaweed.jpg',
          title: 'Elejanjaweed',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 22, 30, 12, 21 ],
            "tuesday": [ 3, 13, 23, 31 ],
            "wednesday": [ 1, 12, 21, 31 ],
            "thursday": [ 30, 9, 17, 29 ],
            "friday": [ 27, 7, 17, 6 ],
            "saturday": [ 26, 6, 5, 25 ],
            "sunday": [ 24, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/feed-lot.jpg',
          title: 'Feed lot',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 24, 3, 13, 21 ],
            "tuesday": [ 22, 30, 12, 21 ],
            "wednesday": [ 3, 13, 23, 31 ],
            "thursday": [ 1, 12, 21, 31 ],
            "friday": [ 30, 9, 17, 29 ],
            "saturday": [ 27, 7, 17, 6 ],
            "sunday": [ 26, 6, 5, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/final-alice-jumbo.jpg',
          title: 'Final alice Jumbo',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 26, 6, 5, 25 ],
            "tuesday": [ 24, 3, 13, 21 ],
            "wednesday": [ 22, 30, 12, 21 ],
            "thursday": [ 3, 13, 23, 31 ],
            "friday": [ 1, 12, 21, 31 ],
            "saturday": [ 30, 9, 17, 29 ],
            "sunday": [ 27, 7, 17, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/flyer-feb-fragment.jpg',
          title: 'Flyer feb(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 27, 7, 17, 6 ],
            "tuesday": [ 26, 6, 5, 25 ],
            "wednesday": [ 24, 3, 13, 21 ],
            "thursday": [ 22, 30, 12, 21 ],
            "friday": [ 3, 13, 23, 31 ],
            "saturday": [ 1, 12, 21, 31 ],
            "sunday": [ 30, 9, 17, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/fur-coat.jpg',
          title: 'Fur coat',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 31, 10, 18, 30 ],
            "tuesday": [ 28, 8, 18, 7 ],
            "wednesday": [ 27, 7, 6, 26 ],
            "thursday": [ 25, 4, 14, 22 ],
            "friday": [ 23, 1, 13, 22 ],
            "saturday": [ 4, 14, 24, 1 ],
            "sunday": [ 2, 13, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/genotek.jpg',
          title: 'Genotek',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 2, 13, 22, 1 ],
            "tuesday": [ 31, 10, 18, 30 ],
            "wednesday": [ 28, 8, 18, 7 ],
            "thursday": [ 27, 7, 6, 26 ],
            "friday": [ 25, 4, 14, 22 ],
            "saturday": [ 23, 1, 13, 22 ],
            "sunday": [ 4, 14, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/goatetch.jpg',
          title: 'Goatetch',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 4, 14, 24, 1 ],
            "tuesday": [ 2, 13, 22, 1 ],
            "wednesday": [ 31, 10, 18, 30 ],
            "thursday": [ 28, 8, 18, 7 ],
            "friday": [ 27, 7, 6, 26 ],
            "saturday": [ 25, 4, 14, 22 ],
            "sunday": [ 23, 1, 13, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/horse-blanket.jpg',
          title: 'Horse blanket',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 1, 13, 22 ],
            "tuesday": [ 4, 14, 24, 1 ],
            "wednesday": [ 2, 13, 22, 1 ],
            "thursday": [ 31, 10, 18, 30 ],
            "friday": [ 28, 8, 18, 7 ],
            "saturday": [ 27, 7, 6, 26 ],
            "sunday": [ 25, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/hot-floor.jpg',
          title: 'Hot floor',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 4, 14, 22 ],
            "tuesday": [ 23, 1, 13, 22 ],
            "wednesday": [ 4, 14, 24, 1 ],
            "thursday": [ 2, 13, 22, 1 ],
            "friday": [ 31, 10, 18, 30 ],
            "saturday": [ 28, 8, 18, 7 ],
            "sunday": [ 27, 7, 6, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/hot-lamb.jpg',
          title: 'Hot lamb',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 27, 7, 6, 26 ],
            "tuesday": [ 25, 4, 14, 22 ],
            "wednesday": [ 23, 1, 13, 22 ],
            "thursday": [ 4, 14, 24, 1 ],
            "friday": [ 2, 13, 22, 1 ],
            "saturday": [ 31, 10, 18, 30 ],
            "sunday": [ 28, 8, 18, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/jimmy.jpg',
          title: 'Jimmy',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 28, 8, 18, 7 ],
            "tuesday": [ 27, 7, 6, 26 ],
            "wednesday": [ 25, 4, 14, 22 ],
            "thursday": [ 23, 1, 13, 22 ],
            "friday": [ 4, 14, 24, 1 ],
            "saturday": [ 2, 13, 22, 1 ],
            "sunday": [ 31, 10, 18, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/judas-goat.jpg',
          title: 'Judas goat',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 1, 11, 19, 31 ],
            "tuesday": [ 29, 9, 19, 8 ],
            "wednesday": [ 28, 8, 7, 27 ],
            "thursday": [ 26, 5, 15, 23 ],
            "friday": [ 24, 2, 14, 23 ],
            "saturday": [ 5, 15, 25, 2 ],
            "sunday": [ 3, 14, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/judas-hee.jpg',
          title: 'Judas hee',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 3, 14, 23, 2 ],
            "tuesday": [ 1, 11, 19, 31 ],
            "wednesday": [ 29, 9, 19, 8 ],
            "thursday": [ 28, 8, 7, 27 ],
            "friday": [ 26, 5, 15, 23 ],
            "saturday": [ 24, 2, 14, 23 ],
            "sunday": [ 5, 15, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/jumbo-fragment.jpg',
          title: 'Jumbo(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 5, 15, 25, 2 ],
            "tuesday": [ 3, 14, 23, 2 ],
            "wednesday": [ 1, 11, 19, 31 ],
            "thursday": [ 29, 9, 19, 8 ],
            "friday": [ 28, 8, 7, 27 ],
            "saturday": [ 26, 5, 15, 23 ],
            "sunday": [ 24, 2, 14, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/jumbo-fragment-1.jpg',
          title: 'Jumbo(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 24, 2, 14, 23 ],
            "tuesday": [ 5, 15, 25, 2 ],
            "wednesday": [ 3, 14, 23, 2 ],
            "thursday": [ 1, 11, 19, 31 ],
            "friday": [ 29, 9, 19, 8 ],
            "saturday": [ 28, 8, 7, 27 ],
            "sunday": [ 26, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/kat.jpg',
          title: 'Kat',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 26, 5, 15, 23 ],
            "tuesday": [ 24, 2, 14, 23 ],
            "wednesday": [ 5, 15, 25, 2 ],
            "thursday": [ 3, 14, 23, 2 ],
            "friday": [ 1, 11, 19, 31 ],
            "saturday": [ 29, 9, 19, 8 ],
            "sunday": [ 28, 8, 7, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/kat-abandoned-flip.jpg',
          title: 'Kat abandoned flip',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 28, 8, 7, 27 ],
            "tuesday": [ 26, 5, 15, 23 ],
            "wednesday": [ 24, 2, 14, 23 ],
            "thursday": [ 5, 15, 25, 2 ],
            "friday": [ 3, 14, 23, 2 ],
            "saturday": [ 1, 11, 19, 31 ],
            "sunday": [ 29, 9, 19, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/katbush-shits.jpg',
          title: 'Katbush-shits',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 29, 9, 19, 8 ],
            "tuesday": [ 28, 8, 7, 27 ],
            "wednesday": [ 26, 5, 15, 23 ],
            "thursday": [ 24, 2, 14, 23 ],
            "friday": [ 5, 15, 25, 2 ],
            "saturday": [ 3, 14, 23, 2 ],
            "sunday": [ 1, 11, 19, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/kathelp-us.jpg',
          title: 'Kathelp-us',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 2, 12, 20, 1 ],
            "tuesday": [ 30, 10, 20, 9 ],
            "wednesday": [ 29, 9, 8, 28 ],
            "thursday": [ 27, 6, 16, 24 ],
            "friday": [ 25, 3, 15, 24 ],
            "saturday": [ 6, 16, 26, 3 ],
            "sunday": [ 4, 15, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/last-bit.jpg',
          title: 'Last bit',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 4, 15, 24, 3 ],
            "tuesday": [ 2, 12, 20, 1 ],
            "wednesday": [ 30, 10, 20, 9 ],
            "thursday": [ 29, 9, 8, 28 ],
            "friday": [ 27, 6, 16, 24 ],
            "saturday": [ 25, 3, 15, 24 ],
            "sunday": [ 6, 16, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/leg-hold.jpg',
          title: 'Leg hold',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 6, 16, 26, 3 ],
            "tuesday": [ 4, 15, 24, 3 ],
            "wednesday": [ 2, 12, 20, 1 ],
            "thursday": [ 30, 10, 20, 9 ],
            "friday": [ 29, 9, 8, 28 ],
            "saturday": [ 27, 6, 16, 24 ],
            "sunday": [ 25, 3, 15, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/loading-sheep.jpg',
          title: 'Loading sheep',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 3, 15, 24 ],
            "tuesday": [ 6, 16, 26, 3 ],
            "wednesday": [ 4, 15, 24, 3 ],
            "thursday": [ 2, 12, 20, 1 ],
            "friday": [ 30, 10, 20, 9 ],
            "saturday": [ 29, 9, 8, 28 ],
            "sunday": [ 27, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/man.jpg',
          title: 'Man',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 27, 6, 16, 24 ],
            "tuesday": [ 25, 3, 15, 24 ],
            "wednesday": [ 6, 16, 26, 3 ],
            "thursday": [ 4, 15, 24, 3 ],
            "friday": [ 2, 12, 20, 1 ],
            "saturday": [ 30, 10, 20, 9 ],
            "sunday": [ 29, 9, 8, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/man-1.jpg',
          title: 'Man',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 29, 9, 8, 28 ],
            "tuesday": [ 27, 6, 16, 24 ],
            "wednesday": [ 25, 3, 15, 24 ],
            "thursday": [ 6, 16, 26, 3 ],
            "friday": [ 4, 15, 24, 3 ],
            "saturday": [ 2, 12, 20, 1 ],
            "sunday": [ 30, 10, 20, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/man-2.jpg',
          title: 'Man',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 30, 10, 20, 9 ],
            "tuesday": [ 29, 9, 8, 28 ],
            "wednesday": [ 27, 6, 16, 24 ],
            "thursday": [ 25, 3, 15, 24 ],
            "friday": [ 6, 16, 26, 3 ],
            "saturday": [ 4, 15, 24, 3 ],
            "sunday": [ 2, 12, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/man-3.jpg',
          title: 'Man',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 3, 13, 21, 2 ],
            "tuesday": [ 31, 11, 21, 10 ],
            "wednesday": [ 30, 10, 9, 29 ],
            "thursday": [ 28, 7, 17, 25 ],
            "friday": [ 26, 4, 16, 25 ],
            "saturday": [ 7, 17, 27, 4 ],
            "sunday": [ 5, 16, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/man-4.jpg',
          title: 'Man',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 5, 16, 25, 4 ],
            "tuesday": [ 3, 13, 21, 2 ],
            "wednesday": [ 31, 11, 21, 10 ],
            "thursday": [ 30, 10, 9, 29 ],
            "friday": [ 28, 7, 17, 25 ],
            "saturday": [ 26, 4, 16, 25 ],
            "sunday":  [ 7, 17, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/man-5.jpg',
          title: 'Man',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 7, 17, 27, 4 ],
            "tuesday": [ 5, 16, 25, 4 ],
            "wednesday": [ 3, 13, 21, 2 ],
            "thursday": [ 31, 11, 21, 10 ],
            "friday": [ 30, 10, 9, 29 ],
            "saturday": [ 28, 7, 17, 25 ],
            "sunday": [ 26, 4, 16, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/meat-fly.jpg',
          title: 'Meat fly',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 26, 4, 16, 25 ],
            "tuesday": [ 7, 17, 27, 4 ],
            "wednesday": [ 5, 16, 25, 4 ],
            "thursday": [ 3, 13, 21, 2 ],
            "friday": [ 31, 11, 21, 10 ],
            "saturday": [ 30, 10, 9, 29 ],
            "sunday": [ 28, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/meat-porks.jpg',
          title: 'Meat porks',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 28, 7, 17, 25 ],
            "tuesday": [ 26, 4, 16, 25 ],
            "wednesday": [ 7, 17, 27, 4 ],
            "thursday": [ 5, 16, 25, 4 ],
            "friday": [ 3, 13, 21, 2 ],
            "saturday": [ 31, 11, 21, 10 ],
            "sunday": [ 30, 10, 9, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/mech-cow.jpg',
          title: 'Mech cow',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 30, 10, 9, 29 ],
            "tuesday": [ 28, 7, 17, 25 ],
            "wednesday": [ 26, 4, 16, 25 ],
            "thursday": [ 7, 17, 27, 4 ],
            "friday": [ 5, 16, 25, 4 ],
            "saturday": [ 3, 13, 21, 2 ],
            "sunday": [ 31, 11, 21, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/mickey.jpg',
          title: 'Mickey',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 31, 11, 21, 10 ],
            "tuesday": [ 30, 10, 9, 29 ],
            "wednesday": [ 28, 7, 17, 25 ],
            "thursday": [ 26, 4, 16, 25 ],
            "friday": [ 7, 17, 27, 4 ],
            "saturday": [ 5, 16, 25, 4 ],
            "sunday": [ 3, 13, 21, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/nocking.jpg',
          title: 'Nocking',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 4, 14, 22, 3 ],
            "tuesday": [ 1, 12, 22, 11 ],
            "wednesday": [ 31, 11, 10, 30 ],
            "thursday": [ 29, 8, 18, 26 ],
            "friday": [ 27, 5, 17, 26 ],
            "saturday": [ 8, 18, 28, 5 ],
            "sunday": [ 6, 17, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/picnic.jpg',
          title: 'Picnic',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 6, 17, 26, 5 ],
            "tuesday": [ 4, 14, 22, 3 ],
            "wednesday": [ 1, 12, 22, 11 ],
            "thursday": [ 31, 11, 10, 30 ],
            "friday": [ 29, 8, 18, 26 ],
            "saturday": [ 27, 5, 17, 26 ],
            "sunday": [ 8, 18, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pork-1.jpg',
          title: 'Pork 1',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 8, 18, 28, 5 ],
            "tuesday": [ 6, 17, 26, 5 ],
            "wednesday": [ 4, 14, 22, 3 ],
            "thursday": [ 1, 12, 22, 11 ],
            "friday": [ 31, 11, 10, 30 ],
            "saturday": [ 29, 8, 18, 26 ],
            "sunday": [ 27, 5, 17, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pork-2.jpg',
          title: 'Pork 2',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 27, 5, 17, 26 ],
            "tuesday": [ 8, 18, 28, 5 ],
            "wednesday": [ 6, 17, 26, 5 ],
            "thursday": [ 4, 14, 22, 3 ],
            "friday": [ 1, 12, 22, 11 ],
            "saturday": [ 31, 11, 10, 30 ],
            "sunday": [ 29, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pork-3.jpg',
          title: 'Pork 3',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 29, 8, 18, 26 ],
            "tuesday": [ 27, 5, 17, 26 ],
            "wednesday": [ 8, 18, 28, 5 ],
            "thursday": [ 6, 17, 26, 5 ],
            "friday": [ 4, 14, 22, 3 ],
            "saturday": [ 1, 12, 22, 11 ],
            "sunday": [ 31, 11, 10, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pork-4.jpg',
          title: 'Pork 4',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 31, 11, 10, 30 ],
            "tuesday": [ 29, 8, 18, 26 ],
            "wednesday": [ 27, 5, 17, 26 ],
            "thursday": [ 8, 18, 28, 5 ],
            "friday": [ 6, 17, 26, 5 ],
            "saturday": [ 4, 14, 22, 3 ],
            "sunday": [ 1, 12, 22, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pork-5.jpg',
          title: 'Pork 5',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 1, 12, 22, 11 ],
            "tuesday": [ 31, 11, 10, 30 ],
            "wednesday": [ 29, 8, 18, 26 ],
            "thursday": [ 27, 5, 17, 26 ],
            "friday": [ 8, 18, 28, 5 ],
            "saturday": [ 6, 17, 26, 5 ],
            "sunday": [ 4, 14, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pork-6.jpg',
          title: 'Pork 6',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 5, 15, 23, 4 ],
            "tuesday": [ 2, 13, 23, 12 ],
            "wednesday": [ 1, 12, 11, 31 ],
            "thursday": [ 30, 9, 19, 27 ],
            "friday": [ 28, 6, 18, 27 ],
            "saturday": [ 9, 19, 29, 6 ],
            "sunday": [ 7, 18, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pork-7.jpg',
          title: 'Pork 7',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 7, 18, 27, 6 ],
            "tuesday": [ 5, 15, 23, 4 ],
            "wednesday": [ 2, 13, 23, 12 ],
            "thursday": [ 1, 12, 11, 31 ],
            "friday": [ 30, 9, 19, 27 ],
            "saturday": [ 28, 6, 18, 27 ],
            "sunday": [ 9, 19, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pork-8.jpg',
          title: 'Pork 8',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 9, 19, 29, 6 ],
            "tuesday": [ 7, 18, 27, 6 ],
            "wednesday": [ 5, 15, 23, 4 ],
            "thursday": [ 2, 13, 23, 12 ],
            "friday": [ 1, 12, 11, 31 ],
            "saturday": [ 30, 9, 19, 27 ],
            "sunday": [ 28, 6, 18, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pork-9.jpg',
          title: 'Pork 9',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday":[ 28, 6, 18, 27 ],
            "tuesday": [ 9, 19, 29, 6 ],
            "wednesday": [ 7, 18, 27, 6 ],
            "thursday": [ 5, 15, 23, 4 ],
            "friday": [ 2, 13, 23, 12 ],
            "saturday": [ 1, 12, 11, 31 ],
            "sunday": [ 30, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pork-10.jpg',
          title: 'Pork 10',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday":[ 30, 9, 19, 27 ],
            "tuesday": [ 28, 6, 18, 27 ],
            "wednesday": [ 9, 19, 29, 6 ],
            "thursday": [ 7, 18, 27, 6 ],
            "friday": [ 5, 15, 23, 4 ],
            "saturday": [ 2, 13, 23, 12 ],
            "sunday": [ 1, 12, 11, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pork-11.jpg',
          title: 'Pork 11',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday":[ 1, 12, 11, 31 ],
            "tuesday": [ 30, 9, 19, 27 ],
            "wednesday": [ 28, 6, 18, 27 ],
            "thursday": [ 9, 19, 29, 6 ],
            "friday": [ 7, 18, 27, 6 ],
            "saturday": [ 5, 15, 23, 4 ],
            "sunday": [ 2, 13, 23, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/queenie-poster.jpg',
          title: 'Queenie poster',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 2, 13, 23, 12 ],
            "tuesday": [ 1, 12, 11, 31 ],
            "wednesday": [ 30, 9, 19, 27 ],
            "thursday": [ 28, 6, 18, 27 ],
            "friday": [ 9, 19, 29, 6 ],
            "saturday": [ 7, 18, 27, 6 ],
            "sunday": [ 5, 15, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/run.jpg',
          title: 'Run',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 6, 16, 24, 5 ],
            "tuesday": [ 3, 14, 24, 13 ],
            "wednesday": [ 2, 13, 12, 1 ],
            "thursday": [ 31, 10, 20, 28 ],
            "friday": [ 29, 7, 19, 28 ],
            "saturday": [ 10, 20, 30, 7 ],
            "sunday": [ 8, 19, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/run-1.jpg',
          title: 'Run',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 8, 19, 28, 7 ],
            "tuesday": [ 6, 16, 24, 5 ],
            "wednesday": [ 3, 14, 24, 13 ],
            "thursday": [ 2, 13, 12, 1 ],
            "friday": [ 31, 10, 20, 28 ],
            "saturday": [ 29, 7, 19, 28 ],
            "sunday": [ 10, 20, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/run-2.jpg',
          title: 'Run',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 10, 20, 30, 7 ],
            "tuesday": [ 8, 19, 28, 7 ],
            "wednesday": [ 6, 16, 24, 5 ],
            "thursday": [ 3, 14, 24, 13 ],
            "friday": [ 2, 13, 12, 1 ],
            "saturday": [ 31, 10, 20, 28 ],
            "sunday": [ 29, 7, 19, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/say-no.jpg',
          title: 'Say no',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 29, 7, 19, 28 ],
            "tuesday": [ 10, 20, 30, 7 ],
            "wednesday": [ 8, 19, 28, 7 ],
            "thursday": [ 6, 16, 24, 5 ],
            "friday": [ 3, 14, 24, 13 ],
            "saturday": [ 2, 13, 12, 1 ],
            "sunday": [ 31, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/select.jpg',
          title: 'Select',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 31, 10, 20, 28 ],
            "tuesday": [ 29, 7, 19, 28 ],
            "wednesday": [ 10, 20, 30, 7 ],
            "thursday": [ 8, 19, 28, 7 ],
            "friday": [ 6, 16, 24, 5 ],
            "saturday": [ 3, 14, 24, 13 ],
            "sunday": [ 2, 13, 12, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/selections.jpg',
          title: 'Selections',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 2, 13, 12, 1 ],
            "tuesday": [ 31, 10, 20, 28 ],
            "wednesday": [ 29, 7, 19, 28 ],
            "thursday": [ 10, 20, 30, 7 ],
            "friday": [ 8, 19, 28, 7 ],
            "saturday": [ 6, 16, 24, 5 ],
            "sunday": [ 3, 14, 24, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/she-escaped-circus.jpg',
          title: 'She escaped circus',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 3, 14, 24, 13 ],
            "tuesday": [ 2, 13, 12, 1 ],
            "wednesday": [ 31, 10, 20, 28 ],
            "thursday": [ 29, 7, 19, 28 ],
            "friday": [ 10, 20, 30, 7 ],
            "saturday": [ 8, 19, 28, 7 ],
            "sunday": [ 6, 16, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/sheep.jpg',
          title: 'Sheep',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 7, 17, 25, 6 ],
            "tuesday": [ 4, 15, 25, 14 ],
            "wednesday": [ 3, 14, 23, 2 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 8, 20, 29 ],
            "saturday": [ 11, 21, 31, 8 ],
            "sunday": [ 9, 20, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/singe.jpg',
          title: 'Singe',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 9, 20, 29, 8 ],
            "tuesday": [ 7, 17, 25, 6 ],
            "wednesday": [ 4, 15, 25, 14 ],
            "thursday": [ 3, 14, 23, 2 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 8, 20, 29 ],
            "sunday": [ 11, 21, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/small-bear.jpg',
          title: 'Small bear',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 11, 21, 31, 8 ],
            "tuesday": [ 9, 20, 29, 8 ],
            "wednesday": [ 7, 17, 25, 6 ],
            "thursday": [ 4, 15, 25, 14 ],
            "friday": [ 3, 14, 23, 2 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 8, 20, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/stand-pig.jpg',
          title: 'Stand pig',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 30, 8, 20, 29 ],
            "tuesday": [ 11, 21, 31, 8 ],
            "wednesday": [ 9, 20, 29, 8 ],
            "thursday": [ 7, 17, 25, 6 ],
            "friday": [ 4, 15, 25, 14 ],
            "saturday": [ 3, 14, 23, 2 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/sticking.jpg',
          title: 'Sticking',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 8, 20, 29 ],
            "wednesday": [ 11, 21, 31, 8 ],
            "thursday": [ 9, 20, 29, 8 ],
            "friday": [ 7, 17, 25, 6 ],
            "saturday": [ 4, 15, 25, 14 ],
            "sunday": [ 3, 14, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/stock-yard.jpg',
          title: 'Stock yard',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 3, 14, 23, 2 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 8, 20, 29 ],
            "thursday": [ 11, 21, 31, 8 ],
            "friday": [ 9, 20, 29, 8 ],
            "saturday": [ 7, 17, 25, 6 ],
            "sunday": [ 4, 15, 25, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/stuffed-jumbo-fragment.jpg',
          title: 'Stuffed Jumbo (fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 4, 15, 25, 14 ],
            "tuesday": [ 3, 14, 23, 2 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 8, 20, 29 ],
            "friday": [ 11, 21, 31, 8 ],
            "saturday": [ 9, 20, 29, 8 ],
            "sunday": [ 7, 17, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/stuffed-jumbo-fragment-1.jpg',
          title: 'Stuffed Jumbo (fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 8, 18, 26, 7 ],
            "tuesday": [ 5, 16, 26, 15 ],
            "wednesday": [ 4, 15, 24, 3 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 31, 9, 21, 30 ],
            "saturday": [ 12, 22, 1, 9 ],
            "sunday": [ 10, 21, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/stuffed-jumbo-fragment-2.jpg',
          title: 'Stuffed Jumbo (fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 10, 21, 30, 9 ],
            "tuesday": [ 8, 18, 26, 7 ],
            "wednesday": [ 5, 16, 26, 15 ],
            "thursday": [ 4, 15, 24, 3 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 31, 9, 21, 30 ],
            "sunday": [ 12, 22, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/stuffed-jumbo-fragment-3.jpg',
          title: 'Stuffed Jumbo (fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 12, 22, 1, 9 ],
            "tuesday": [ 10, 21, 30, 9 ],
            "wednesday": [ 8, 18, 26, 7 ],
            "thursday": [ 5, 16, 26, 15 ],
            "friday": [ 4, 15, 24, 3 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 31, 9, 21, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/stuffed-jumbo-fragment-4.jpg',
          title: 'Stuffed Jumbo (fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 31, 9, 21, 30 ],
            "tuesday": [ 12, 22, 1, 9 ],
            "wednesday": [ 10, 21, 30, 9 ],
            "thursday": [ 8, 18, 26, 7 ],
            "friday": [ 5, 16, 26, 15 ],
            "saturday": [ 4, 15, 24, 3 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 31, 9, 21, 30 ],
            "wednesday": [ 12, 22, 1, 9 ],
            "thursday": [ 10, 21, 30, 9 ],
            "friday": [ 8, 18, 26, 7 ],
            "saturday": [ 5, 16, 26, 15 ],
            "sunday": [ 4, 15, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-1.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 4, 15, 24, 3 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 31, 9, 21, 30 ],
            "thursday": [ 12, 22, 1, 9 ],
            "friday": [ 10, 21, 30, 9 ],
            "saturday": [ 8, 18, 26, 7 ],
            "sunday": [ 5, 16, 26, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-2.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 5, 16, 26, 15 ],
            "tuesday": [ 4, 15, 24, 3 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 31, 9, 21, 30 ],
            "friday": [ 12, 22, 1, 9 ],
            "saturday": [ 10, 21, 30, 9 ],
            "sunday": [ 8, 18, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-3.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 9, 19, 27, 8 ],
            "tuesday": [ 6, 17, 27, 16 ],
            "wednesday": [ 5, 16, 25, 4 ],
            "thursday": [ 3, 13, 23, 31 ],
            "friday": [ 1, 10, 22, 31 ],
            "saturday": [ 13, 23, 2, 10 ],
            "sunday": [ 11, 22, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-4.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 11, 22, 31, 10 ],
            "tuesday": [ 9, 19, 27, 8 ],
            "wednesday": [ 6, 17, 27, 16 ],
            "thursday": [ 5, 16, 25, 4 ],
            "friday": [ 3, 13, 23, 31 ],
            "saturday": [ 1, 10, 22, 31 ],
            "sunday": [ 13, 23, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-5.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 13, 23, 2, 10 ],
            "tuesday": [ 11, 22, 31, 10 ],
            "wednesday": [ 9, 19, 27, 8 ],
            "thursday": [ 6, 17, 27, 16 ],
            "friday": [ 5, 16, 25, 4 ],
            "saturday": [ 3, 13, 23, 31 ],
            "sunday": [ 1, 10, 22, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-6.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 1, 10, 22, 31 ],
            "tuesday": [ 13, 23, 2, 10 ],
            "wednesday": [ 11, 22, 31, 10 ],
            "thursday": [ 9, 19, 27, 8 ],
            "friday": [ 6, 17, 27, 16 ],
            "saturday": [ 5, 16, 25, 4 ],
            "sunday": [ 3, 13, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-7.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 3, 13, 23, 31 ],
            "tuesday": [ 1, 10, 22, 31 ],
            "wednesday": [ 13, 23, 2, 10 ],
            "thursday": [ 11, 22, 31, 10 ],
            "friday": [ 9, 19, 27, 8 ],
            "saturday": [ 6, 17, 27, 16 ],
            "sunday": [ 5, 16, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-8.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 5, 16, 25, 4 ],
            "tuesday": [ 3, 13, 23, 31 ],
            "wednesday": [ 1, 10, 22, 31 ],
            "thursday": [ 13, 23, 2, 10 ],
            "friday": [ 11, 22, 31, 10 ],
            "saturday": [ 9, 19, 27, 8 ],
            "sunday": [ 6, 17, 27, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-9.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 6, 17, 27, 16 ],
            "tuesday": [ 5, 16, 25, 4 ],
            "wednesday": [ 3, 13, 23, 31 ],
            "thursday": [ 1, 10, 22, 31 ],
            "friday": [ 13, 23, 2, 10 ],
            "saturday": [ 11, 22, 31, 10 ],
            "sunday": [ 9, 19, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-10.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 10, 20, 28, 9 ],
            "tuesday": [ 7, 18, 28, 17 ],
            "wednesday": [ 6, 17, 26, 5 ],
            "thursday": [ 4, 14, 24, 1 ],
            "friday": [ 2, 11, 23, 1 ],
            "saturday": [ 14, 24, 3, 11 ],
            "sunday": [ 12, 23, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-11.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 12, 23, 1, 11 ],
            "tuesday": [ 10, 20, 28, 9 ],
            "wednesday": [ 7, 18, 28, 17 ],
            "thursday": [ 6, 17, 26, 5 ],
            "friday": [ 4, 14, 24, 1 ],
            "saturday": [ 2, 11, 23, 1 ],
            "sunday": [ 14, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-12.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 14, 24, 3, 11 ],
            "tuesday": [ 12, 23, 1, 11 ],
            "wednesday": [ 10, 20, 28, 9 ],
            "thursday": [ 7, 18, 28, 17 ],
            "friday": [ 6, 17, 26, 5 ],
            "saturday": [ 4, 14, 24, 1 ],
            "sunday": [ 2, 11, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 311,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-13.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 2, 11, 23, 1 ],
            "tuesday": [ 14, 24, 3, 11 ],
            "wednesday": [ 12, 23, 1, 11 ],
            "thursday": [ 10, 20, 28, 9 ],
            "friday": [ 7, 18, 28, 17 ],
            "saturday": [ 6, 17, 26, 5 ],
            "sunday": [ 4, 14, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 312,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-14.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 4, 14, 24, 1 ],
            "tuesday": [ 2, 11, 23, 1 ],
            "wednesday": [ 14, 24, 3, 11 ],
            "thursday": [ 12, 23, 1, 11 ],
            "friday": [ 10, 20, 28, 9 ],
            "saturday": [ 7, 18, 28, 17 ],
            "sunday": [ 6, 17, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 313,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-15.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 6, 17, 26, 5 ],
            "tuesday": [ 4, 14, 24, 1 ],
            "wednesday": [ 2, 11, 23, 1 ],
            "thursday": [ 14, 24, 3, 11 ],
            "friday": [ 12, 23, 1, 11 ],
            "saturday": [ 10, 20, 28, 9 ],
            "sunday": [ 7, 18, 28, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 314,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-16.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 7, 18, 28, 17 ],
            "tuesday": [ 6, 17, 26, 5 ],
            "wednesday": [ 4, 14, 24, 1 ],
            "thursday": [ 2, 11, 23, 1 ],
            "friday": [ 14, 24, 3, 11 ],
            "saturday": [ 12, 23, 1, 11 ],
            "sunday": [ 10, 20, 28, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 315,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-17.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 11, 21, 29, 10 ],
            "tuesday": [ 8, 19, 29, 18 ],
            "wednesday": [ 7, 18, 27, 6 ],
            "thursday": [ 5, 15, 25, 2 ],
            "friday": [ 3, 12, 24, 2 ],
            "saturday": [ 15, 25, 4, 12 ],
            "sunday": [ 13, 24, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 316,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-18.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 13, 24, 2, 12 ],
            "tuesday": [ 11, 21, 29, 10 ],
            "wednesday": [ 8, 19, 29, 18 ],
            "thursday": [ 7, 18, 27, 6 ],
            "friday": [ 5, 15, 25, 2 ],
            "saturday": [ 3, 12, 24, 2 ],
            "sunday": [ 15, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 317,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-19.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 15, 25, 4, 12 ],
            "tuesday": [ 13, 24, 2, 12 ],
            "wednesday": [ 11, 21, 29, 10 ],
            "thursday": [ 8, 19, 29, 18 ],
            "friday": [ 7, 18, 27, 6 ],
            "saturday": [ 5, 15, 25, 2 ],
            "sunday": [ 3, 12, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 318,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-20.jpg',
          title: '',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 3, 12, 24, 2 ],
            "tuesday": [ 15, 25, 4, 12 ],
            "wednesday": [ 13, 24, 2, 12 ],
            "thursday": [ 11, 21, 29, 10 ],
            "friday": [ 8, 19, 29, 18 ],
            "saturday": [ 7, 18, 27, 6 ],
            "sunday": [ 5, 15, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 319,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/suicide-21.jpg',
          title: 'Suicide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 5, 15, 25, 2 ],
            "tuesday": [ 3, 12, 24, 2 ],
            "wednesday": [ 15, 25, 4, 12 ],
            "thursday": [ 13, 24, 2, 12 ],
            "friday": [ 11, 21, 29, 10 ],
            "saturday": [ 8, 19, 29, 18 ],
            "sunday": [ 7, 18, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 320,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/terrorist.jpg',
          title: 'Terrorist',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 7, 18, 27, 6 ],
            "tuesday": [ 5, 15, 25, 2 ],
            "wednesday": [ 3, 12, 24, 2 ],
            "thursday": [ 15, 25, 4, 12 ],
            "friday": [ 13, 24, 2, 12 ],
            "saturday": [ 11, 21, 29, 10 ],
            "sunday": [ 8, 19, 29, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 321,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/thruway.jpg',
          title: 'Thruway',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 8, 19, 29, 18 ],
            "tuesday": [ 7, 18, 27, 6 ],
            "wednesday": [ 5, 15, 25, 2 ],
            "thursday": [ 3, 12, 24, 2 ],
            "friday": [ 15, 25, 4, 12 ],
            "saturday": [ 13, 24, 2, 12 ],
            "sunday": [ 11, 21, 29, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 322,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/topsy.jpg',
          title: 'Topsy',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 12, 22, 30, 11 ],
            "tuesday": [ 9, 20, 30, 19 ],
            "wednesday": [ 8, 19, 28, 7 ],
            "thursday": [ 6, 16, 26, 3 ],
            "friday": [ 4, 13, 25, 3 ],
            "saturday": [ 16, 26, 5, 13 ],
            "sunday": [ 14, 25, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 323,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/topsy-1.jpg',
          title: 'Topsy',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 14, 25, 3, 13 ],
            "tuesday": [ 12, 22, 30, 11 ],
            "wednesday": [ 9, 20, 30, 19 ],
            "thursday": [ 8, 19, 28, 7 ],
            "friday": [ 6, 16, 26, 3 ],
            "saturday": [ 4, 13, 25, 3 ],
            "sunday": [ 16, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 324,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/topsy-2.jpg',
          title: 'Topsy',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 16, 26, 5, 13 ],
            "tuesday": [ 14, 25, 3, 13 ],
            "wednesday": [ 12, 22, 30, 11 ],
            "thursday": [ 9, 20, 30, 19 ],
            "friday": [ 8, 19, 28, 7 ],
            "saturday": [ 6, 16, 26, 3 ],
            "sunday": [ 4, 13, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 325,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/topsy-3.jpg',
          title: 'Topsy',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 4, 13, 25, 3 ],
            "tuesday": [ 16, 26, 5, 13 ],
            "wednesday": [ 14, 25, 3, 13 ],
            "thursday": [ 12, 22, 30, 11 ],
            "friday": [ 9, 20, 30, 19 ],
            "saturday": [ 8, 19, 28, 7 ],
            "sunday": [ 6, 16, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 326,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/topsy-4.jpg',
          title: 'Topsy',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 6, 16, 26, 3 ],
            "tuesday": [ 4, 13, 25, 3 ],
            "wednesday": [ 16, 26, 5, 13 ],
            "thursday": [ 14, 25, 3, 13 ],
            "friday": [ 12, 22, 30, 11 ],
            "saturday": [ 9, 20, 30, 19 ],
            "sunday": [ 8, 19, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 327,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/topsy-cover.jpg',
          title: 'Topsy cover',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 8, 19, 28, 7 ],
            "tuesday": [ 6, 16, 26, 3 ],
            "wednesday": [ 4, 13, 25, 3 ],
            "thursday": [ 16, 26, 5, 13 ],
            "friday": [ 14, 25, 3, 13 ],
            "saturday": [ 12, 22, 30, 11 ],
            "sunday": [ 9, 20, 30, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 328,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/topsy-kills-man.jpg',
          title: 'Topsy kills man',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 9, 20, 30, 19 ],
            "tuesday": [ 8, 19, 28, 7 ],
            "wednesday": [ 6, 16, 26, 3 ],
            "thursday": [ 4, 13, 25, 3 ],
            "friday": [ 16, 26, 5, 13 ],
            "saturday": [ 14, 25, 3, 13 ],
            "sunday": [ 12, 22, 30, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 329,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/wheel-1.jpg',
          title: 'Wheel',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 13, 23, 31, 12 ],
            "tuesday": [ 10, 21, 31, 20 ],
            "wednesday": [ 9, 20, 29, 8 ],
            "thursday": [ 7, 17, 27, 4 ],
            "friday": [ 5, 14, 26, 4 ],
            "saturday": [ 17, 27, 6, 14 ],
            "sunday": [ 15, 26, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 330,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/wood.jpg',
          title: 'Wood',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 15, 26, 4, 14 ],
            "tuesday": [ 13, 23, 31, 12 ],
            "wednesday": [ 10, 21, 31, 20 ],
            "thursday": [ 9, 20, 29, 8 ],
            "friday": [ 7, 17, 27, 4 ],
            "saturday": [ 5, 14, 26, 4 ],
            "sunday": [ 17, 27, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 331,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/candle.jpg',
          title: 'Candle',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 17, 27, 6, 14 ],
            "tuesday": [ 15, 26, 4, 14 ],
            "wednesday": [ 13, 23, 31, 12 ],
            "thursday": [ 10, 21, 31, 20 ],
            "friday": [ 9, 20, 29, 8 ],
            "saturday": [ 7, 17, 27, 4 ],
            "sunday": [ 5, 14, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 332,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/egypt.jpg',
          title: 'Egypt',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 5, 14, 26, 4 ],
            "tuesday": [ 17, 27, 6, 14 ],
            "wednesday": [ 15, 26, 4, 14 ],
            "thursday": [ 13, 23, 31, 12 ],
            "friday": [ 10, 21, 31, 20 ],
            "saturday": [ 9, 20, 29, 8 ],
            "sunday": [ 7, 17, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 333,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/luck.jpg',
          title: 'Luck',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 7, 17, 27, 4 ],
            "tuesday": [ 5, 14, 26, 4 ],
            "wednesday": [ 17, 27, 6, 14 ],
            "thursday": [ 15, 26, 4, 14 ],
            "friday": [ 13, 23, 31, 12 ],
            "saturday": [ 10, 21, 31, 20 ],
            "sunday": [ 9, 20, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 334,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/she-packed-her-trunk.jpg',
          title: 'She packed her trunk',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 9, 20, 29, 8 ],
            "tuesday": [ 7, 17, 27, 4 ],
            "wednesday": [ 5, 14, 26, 4 ],
            "thursday": [ 17, 27, 6, 14 ],
            "friday": [ 15, 26, 4, 14 ],
            "saturday": [ 13, 23, 31, 12 ],
            "sunday": [ 10, 21, 31, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 335,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/workclass.jpg',
          title: 'Workclass',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 10, 21, 31, 20 ],
            "tuesday": [ 9, 20, 29, 8 ],
            "wednesday": [ 7, 17, 27, 4 ],
            "thursday": [ 5, 14, 26, 4 ],
            "friday": [ 17, 27, 6, 14 ],
            "saturday": [ 15, 26, 4, 14 ],
            "sunday": [ 13, 23, 31, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 336,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/xeno.jpg',
          title: 'Xeno',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 14, 24, 1, 13 ],
            "tuesday": [ 11, 22, 1, 21 ],
            "wednesday": [ 10, 21, 30, 9 ],
            "thursday": [ 8, 18, 28, 5 ],
            "friday": [ 6, 15, 27, 5 ],
            "saturday": [ 18, 28, 7, 15 ],
            "sunday": [ 16, 27, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 337,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/cross-heart.jpg',
          title: 'Cross heart',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 16, 27, 5, 15 ],
            "tuesday": [ 14, 24, 1, 13 ],
            "wednesday": [ 11, 22, 1, 21 ],
            "thursday": [ 10, 21, 30, 9 ],
            "friday": [ 8, 18, 28, 5 ],
            "saturday": [ 6, 15, 27, 5 ],
            "sunday": [ 18, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 338,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/market-1920.jpg',
          title: 'Market',
          artist: 'M. H. Maxy',
          year: '1920',
          rule: {
            "monday": [ 18, 28, 7, 15 ],
            "tuesday": [ 16, 27, 5, 15 ],
            "wednesday": [ 14, 24, 1, 13 ],
            "thursday": [ 11, 22, 1, 21 ],
            "friday": [ 10, 21, 30, 9 ],
            "saturday": [ 8, 18, 28, 5 ],
            "sunday": [ 6, 15, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 339,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/human-construction-1926.jpg',
          title: 'Human Construction',
          artist: 'M. H. Maxy',
          year: '1926',
          rule: {
            "monday": [ 6, 15, 27, 5 ],
            "tuesday": [ 18, 28, 7, 15 ],
            "wednesday": [ 16, 27, 5, 15 ],
            "thursday": [ 14, 24, 1, 13 ],
            "friday": [ 11, 22, 1, 21 ],
            "saturday": [ 10, 21, 30, 9 ],
            "sunday": [ 8, 18, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 340,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/peasant-weaving-at-war-1930.jpg',
          title: 'Peasant weaving at war',
          artist: 'M. H. Maxy',
          year: '1930',
          rule: {
            "monday": [ 8, 18, 28, 5 ],
            "tuesday": [ 6, 15, 27, 5 ],
            "wednesday": [ 18, 28, 7, 15 ],
            "thursday": [ 16, 27, 5, 15 ],
            "friday": [ 14, 24, 1, 13 ],
            "saturday": [ 11, 22, 1, 21 ],
            "sunday": [ 10, 21, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 341,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/peasant-portrait-1931.jpg',
          title: 'Peasant Portrait',
          artist: 'M. H. Maxy',
          year: '1931',
          rule: {
            "monday": [ 10, 21, 30, 9 ],
            "tuesday": [ 8, 18, 28, 5 ],
            "wednesday": [ 6, 15, 27, 5 ],
            "thursday": [ 18, 28, 7, 15 ],
            "friday": [ 16, 27, 5, 15 ],
            "saturday": [ 14, 24, 1, 13 ],
            "sunday": [ 11, 22, 1, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 342,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/women-and-fishermen-of-hornbaek-1875.jpg',
          title: 'Women and Fishermen of Hornbaek',
          artist: 'Peder Severin Kroyer',
          year: '1875',
          rule: {
            "monday": [ 11, 22, 1, 21 ],
            "tuesday": [ 10, 21, 30, 9 ],
            "wednesday": [ 8, 18, 28, 5 ],
            "thursday": [ 6, 15, 27, 5 ],
            "friday": [ 18, 28, 7, 15 ],
            "saturday": [ 16, 27, 5, 15 ],
            "sunday": [ 14, 24, 1, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 343,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/women-of-concarneau-1879.jpg',
          title: 'Women of Concarneau',
          artist: 'Peder Severin Kroyer',
          year: '1879',
          rule: {
            "monday": [ 15, 25, 2, 14 ],
            "tuesday": [ 12, 23, 2, 22 ],
            "wednesday": [ 11, 22, 31, 10 ],
            "thursday": [ 9, 19, 29, 6 ],
            "friday": [ 7, 16, 28, 6 ],
            "saturday": [ 19, 29, 8, 16 ],
            "sunday": [ 17, 28, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 344,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/in-the-store-during-a-pause-from-fishing-1882.jpg',
          title: 'In the Store During a Pause from Fishing',
          artist: 'Peder Severin Kroyer',
          year: '1882',
          rule: {
            "monday": [ 17, 28, 6, 16 ],
            "tuesday": [ 15, 25, 2, 14 ],
            "wednesday": [ 12, 23, 2, 22 ],
            "thursday": [ 11, 22, 31, 10 ],
            "friday": [ 9, 19, 29, 6 ],
            "saturday": [ 7, 16, 28, 6 ],
            "sunday": [ 19, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 345,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/fishermen-hauling-the-net-on-skagen-s-north-beach-1883.jpg',
          title: 'Fishermen Hauling the Net on Skagen\'s North Beach',
          artist: 'Peder Severin Kroyer',
          year: '1883',
          rule: {
            "monday": [ 19, 29, 8, 16 ],
            "tuesday": [ 17, 28, 6, 16 ],
            "wednesday": [ 15, 25, 2, 14 ],
            "thursday": [ 12, 23, 2, 22 ],
            "friday": [ 11, 22, 31, 10 ],
            "saturday": [ 9, 19, 29, 6 ],
            "sunday": [ 7, 16, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 346,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/fishing-boats-1884.jpg',
          title: 'Fishing Boats',
          artist: 'Peder Severin Kroyer',
          year: '1884',
          rule: {
            "monday": [ 7, 16, 28, 6 ],
            "tuesday": [ 19, 29, 8, 16 ],
            "wednesday": [ 17, 28, 6, 16 ],
            "thursday": [ 15, 25, 2, 14 ],
            "friday": [ 12, 23, 2, 22 ],
            "saturday": [ 11, 22, 31, 10 ],
            "sunday": [ 9, 19, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 347,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/burmeister-and-wain-iron-foundry-1885.jpg',
          title: 'Burmeister and Wain Iron Foundry',
          artist: 'Peder Severin Kroyer',
          year: '1885',
          rule: {
            "monday": [ 9, 19, 29, 6 ],
            "tuesday": [ 7, 16, 28, 6 ],
            "wednesday": [ 19, 29, 8, 16 ],
            "thursday": [ 17, 28, 6, 16 ],
            "friday": [ 15, 25, 2, 14 ],
            "saturday": [ 12, 23, 2, 22 ],
            "sunday": [ 11, 22, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 348,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-doctor-s-waiting-room-1920.jpg',
          title: 'A Doctor\'s Waiting Room',
          artist: 'L. S. Lowry',
          year: '1920',
          rule: {
            "monday": [ 11, 22, 31, 10 ],
            "tuesday": [ 9, 19, 29, 6 ],
            "wednesday": [ 7, 16, 28, 6 ],
            "thursday": [ 19, 29, 8, 16 ],
            "friday": [ 17, 28, 6, 16 ],
            "saturday": [ 15, 25, 2, 14 ],
            "sunday": [ 12, 23, 2, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 349,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/going-to-the-mill-1925.jpg',
          title: 'Going to the Mill',
          artist: 'L. S. Lowry',
          year: '1925',
          rule: {
            "monday": [ 12, 23, 2, 22 ],
            "tuesday": [ 11, 22, 31, 10 ],
            "wednesday": [ 9, 19, 29, 6 ],
            "thursday": [ 7, 16, 28, 6 ],
            "friday": [ 19, 29, 8, 16 ],
            "saturday": [ 17, 28, 6, 16 ],
            "sunday": [ 15, 25, 2, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 350,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/going-to-work-1943.png',
          title: 'Going to Work',
          artist: 'L. S. Lowry',
          year: '1943',
          rule: {
            "monday": [ 16, 26, 3, 15 ],
            "tuesday": [ 13, 24, 3, 23 ],
            "wednesday": [ 12, 23, 1, 11 ],
            "thursday": [ 10, 20, 30, 7 ],
            "friday": [ 8, 17, 29, 7 ],
            "saturday": [ 20, 30, 9, 17 ],
            "sunday": [ 18, 29, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 351,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/an-industrial-town-1944.jpg',
          title: 'An Industrial Town',
          artist: 'L. S. Lowry',
          year: '1944',
          rule: {
            "monday": [ 18, 29, 7, 17 ],
            "tuesday": [ 16, 26, 3, 15 ],
            "wednesday": [ 13, 24, 3, 23 ],
            "thursday": [ 12, 23, 1, 11 ],
            "friday": [ 10, 20, 30, 7 ],
            "saturday": [ 8, 17, 29, 7 ],
            "sunday": [ 20, 30, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 352,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/industrial-landscape-the-canal-1945.jpg',
          title: 'Industrial Landscape. The Canal',
          artist: 'L. S. Lowry',
          year: '1945',
          rule: {
            "monday": [ 20, 30, 9, 17 ],
            "tuesday": [ 18, 29, 7, 17 ],
            "wednesday": [ 16, 26, 3, 15 ],
            "thursday": [ 13, 24, 3, 23 ],
            "friday": [ 12, 23, 1, 11 ],
            "saturday": [ 10, 20, 30, 7 ],
            "sunday": [ 8, 17, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 353,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/monday-morning-1946.jpg',
          title: 'Monday Morning',
          artist: 'L. S. Lowry',
          year: '1946',
          rule: {
            "monday": [ 8, 17, 29, 7 ],
            "tuesday": [ 20, 30, 9, 17 ],
            "wednesday": [ 18, 29, 7, 17 ],
            "thursday": [ 16, 26, 3, 15 ],
            "friday": [ 13, 24, 3, 23 ],
            "saturday": [ 12, 23, 1, 11 ],
            "sunday": [ 10, 20, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 354,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/level-crossing-1946.jpg',
          title: 'Level Crossing',
          artist: 'L. S. Lowry',
          year: '1946',
          rule: {
            "monday": [ 10, 20, 30, 7 ],
            "tuesday": [ 8, 17, 29, 7 ],
            "wednesday": [ 20, 30, 9, 17 ],
            "thursday": [ 18, 29, 7, 17 ],
            "friday": [ 16, 26, 3, 15 ],
            "saturday": [ 13, 24, 3, 23 ],
            "sunday": [ 12, 23, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 355,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/cranes-and-ships-glasgow-docks-1947.jpg',
          title: 'Cranes and Ships, Glasgow Docks',
          artist: 'L. S. Lowry',
          year: '1947',
          rule: {
            "monday": [ 12, 23, 1, 11 ],
            "tuesday": [ 10, 20, 30, 7 ],
            "wednesday": [ 8, 17, 29, 7 ],
            "thursday": [ 20, 30, 9, 17 ],
            "friday": [ 18, 29, 7, 17 ],
            "saturday": [ 16, 26, 3, 15 ],
            "sunday": [ 13, 24, 3, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 356,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-river-bank-1947.jpg',
          title: 'A River Bank',
          artist: 'L. S. Lowry',
          year: '1947',
          rule: {
            "monday": [ 13, 24, 3, 23 ],
            "tuesday": [ 12, 23, 1, 11 ],
            "wednesday": [ 10, 20, 30, 7 ],
            "thursday": [ 8, 17, 29, 7 ],
            "friday": [ 20, 30, 9, 17 ],
            "saturday": [ 18, 29, 7, 17 ],
            "sunday": [ 16, 26, 3, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 357,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/queen-s-dock-glasgow-1947.jpg',
          title: 'Queen\'s Dock, Glasgow',
          artist: 'L. S. Lowry',
          year: '1947',
          rule: {
            "monday": [ 17, 27, 4, 16 ],
            "tuesday": [ 14, 25, 4, 24 ],
            "wednesday": [ 13, 24, 2, 12 ],
            "thursday": [ 11, 21, 31, 8 ],
            "friday": [ 9, 18, 30, 8 ],
            "saturday": [ 21, 31, 10, 18 ],
            "sunday": [ 19, 30, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 358,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/millworkers-1948.jpg',
          title: 'Millworkers',
          artist: 'L. S. Lowry',
          year: '1948',
          rule: {
            "monday": [ 19, 30, 8, 18 ],
            "tuesday": [ 17, 27, 4, 16 ],
            "wednesday": [ 14, 25, 4, 24 ],
            "thursday": [ 13, 24, 2, 12 ],
            "friday": [ 11, 21, 31, 8 ],
            "saturday": [ 9, 18, 30, 8 ],
            "sunday": [ 21, 31, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 359,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/industrial-city-1948.jpg',
          title: 'Industrial City',
          artist: 'L. S. Lowry',
          year: '1948',
          rule: {
            "monday": [ 21, 31, 10, 18 ],
            "tuesday": [ 19, 30, 8, 18 ],
            "wednesday": [ 17, 27, 4, 16 ],
            "thursday": [ 14, 25, 4, 24 ],
            "friday": [ 13, 24, 2, 12 ],
            "saturday": [ 11, 21, 31, 8 ],
            "sunday": [ 9, 18, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 360,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/industrial-landscape-river-scene-1950.jpg',
          title: 'Industrial Landscape, River Scene',
          artist: 'L. S. Lowry',
          year: '1950',
          rule: {
            "monday": [ 9, 18, 30, 8 ],
            "tuesday": [ 21, 31, 10, 18 ],
            "wednesday": [ 19, 30, 8, 18 ],
            "thursday": [ 17, 27, 4, 16 ],
            "friday": [ 14, 25, 4, 24 ],
            "saturday": [ 13, 24, 2, 12 ],
            "sunday": [ 11, 21, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 361,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/industrial-landscape-ashton-under-lyne-1952.jpg',
          title: 'Industrial Landscape, Ashton Under Lyne',
          artist: 'L. S. Lowry',
          year: '1952',
          rule: {
            "monday": [ 11, 21, 31, 8 ],
            "tuesday": [ 9, 18, 30, 8 ],
            "wednesday": [ 21, 31, 10, 18 ],
            "thursday": [ 19, 30, 8, 18 ],
            "friday": [ 17, 27, 4, 16 ],
            "saturday": [ 14, 25, 4, 24 ],
            "sunday": [ 13, 24, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 362,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/industrial-panorama-1953.jpg',
          title: 'Industrial Panorama',
          artist: 'L. S. Lowry',
          year: '1953',
          rule: {
            "monday": [ 13, 24, 2, 12 ],
            "tuesday": [ 11, 21, 31, 8 ],
            "wednesday": [ 9, 18, 30, 8 ],
            "thursday": [ 21, 31, 10, 18 ],
            "friday": [ 19, 30, 8, 18 ],
            "saturday": [ 17, 27, 4, 16 ],
            "sunday": [ 14, 25, 4, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 363,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/industrial-landscape-1953.jpg',
          title: 'Industrial Landscape',
          artist: 'L. S. Lowry',
          year: '1953',
          rule: {
            "monday": [ 14, 25, 4, 24 ],
            "tuesday": [ 13, 24, 2, 12 ],
            "wednesday": [ 11, 21, 31, 8 ],
            "thursday": [ 9, 18, 30, 8 ],
            "friday": [ 21, 31, 10, 18 ],
            "saturday": [ 19, 30, 8, 18 ],
            "sunday": [ 17, 27, 4, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 364,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/canal-and-factories-1955.jpg',
          title: 'Canal and Factories',
          artist: 'L. S. Lowry',
          year: '1955',
          rule: {
            "monday": [ 18, 28, 5, 17 ],
            "tuesday": [ 15, 26, 5, 25 ],
            "wednesday": [ 14, 25, 3, 13 ],
            "thursday": [ 12, 22, 1, 9 ],
            "friday": [ 10, 19, 31, 9 ],
            "saturday": [ 22, 1, 11, 19 ],
            "sunday": [ 20, 31, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 365,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/industrial-landscape-1955.jpg',
          title: 'Industrial Landscape',
          artist: 'L. S. Lowry',
          year: '1955',
          rule: {
            "monday": [ 20, 31, 9, 19 ],
            "tuesday": [ 18, 28, 5, 17 ],
            "wednesday": [ 15, 26, 5, 25 ],
            "thursday": [ 14, 25, 3, 13 ],
            "friday": [ 12, 22, 1, 9 ],
            "saturday": [ 10, 19, 31, 9 ],
            "sunday": [ 22, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 366,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/right-to-create.jpg',
          title: '848A Right to Create',
          artist: 'Friedensreich Hundertwasser',
          year: '1986',
          rule: {
            "monday": [ 22, 1, 11, 19 ],
            "tuesday": [ 20, 31, 9, 19 ],
            "wednesday": [ 18, 28, 5, 17 ],
            "thursday": [ 15, 26, 5, 25 ],
            "friday": [ 14, 25, 3, 13 ],
            "saturday": [ 12, 22, 1, 9 ],
            "sunday": [ 10, 19, 31, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 367,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/right-to-dream.jpg',
          title: '851A The Right to Dream',
          artist: 'Friedensreich Hundertwasser',
          year: '1987',
          rule: {
            "monday": [ 10, 19, 31, 9 ],
            "tuesday": [ 22, 1, 11, 19 ],
            "wednesday": [ 20, 31, 9, 19 ],
            "thursday": [ 18, 28, 5, 17 ],
            "friday": [ 15, 26, 5, 25 ],
            "saturday": [ 14, 25, 3, 13 ],
            "sunday": [ 12, 22, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 368,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/allegory-on-social-injustice.jpg',
          title: 'Allegory on Social Injustice',
          artist: 'Albrecht Durer',
          year: '1526',
          rule: {
            "monday": [ 12, 22, 1, 9 ],
            "tuesday": [ 10, 19, 31, 9 ],
            "wednesday": [ 22, 1, 11, 19 ],
            "thursday": [ 20, 31, 9, 19 ],
            "friday": [ 18, 28, 5, 17 ],
            "saturday": [ 15, 26, 5, 25 ],
            "sunday": [ 14, 25, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 369,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/for-complete-social-security-of-all-mexicans-1956.jpg',
          title: 'For Complete Social Security of All Mexicans',
          artist: 'David Alfaro Siqueiros',
          year: '1953 - 1956',
          rule: {
            "monday": [ 14, 25, 3, 13 ],
            "tuesday": [ 12, 22, 1, 9 ],
            "wednesday": [ 10, 19, 31, 9 ],
            "thursday": [ 22, 1, 11, 19 ],
            "friday": [ 20, 31, 9, 19 ],
            "saturday": [ 18, 28, 5, 17 ],
            "sunday": [ 15, 26, 5, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 370,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-people-for-the-university-the-university-for-the-people-1956.jpg',
          title: 'The People for the University. The University for the People.',
          artist: 'David Alfaro Siqueiros',
          year: '1952 - 1956',
          rule: {
            "monday": [ 15, 26, 5, 25 ],
            "tuesday": [ 14, 25, 3, 13 ],
            "wednesday": [ 12, 22, 1, 9 ],
            "thursday": [ 10, 19, 31, 9 ],
            "friday": [ 22, 1, 11, 19 ],
            "saturday": [ 20, 31, 9, 19 ],
            "sunday": [ 18, 28, 5, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 371,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/from-the-dictatorship-of-porfirio-diaz-to-the-revolution-the-people-in-arms-1957.jpg',
          title: 'From the Dictatorship of Porfirio Diaz to the Revolution – The People in Arms',
          artist: 'David Alfaro Siqueiros',
          year: '1957',
          rule: {
            "monday": [ 19, 29, 6, 18 ],
            "tuesday": [ 16, 27, 6, 26 ],
            "wednesday": [ 15, 26, 4, 14 ],
            "thursday": [ 13, 23, 2, 10 ],
            "friday": [ 11, 20, 1, 10 ],
            "saturday": [ 23, 2, 12, 20 ],
            "sunday": [ 21, 1, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 372,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-revolutionary-1957.jpg',
          title: 'The Revolutionary',
          artist: 'David Alfaro Siqueiros',
          year: '1957',
          rule: {
            "monday": [ 21, 1, 10, 20 ],
            "tuesday": [ 19, 29, 6, 18 ],
            "wednesday": [ 16, 27, 6, 26 ],
            "thursday": [ 15, 26, 4, 14 ],
            "friday": [ 13, 23, 2, 10 ],
            "saturday": [ 11, 20, 1, 10 ],
            "sunday": [ 23, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 373,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/women-of-chilpancingo-1960.jpg',
          title: 'Women of Chilpancingo',
          artist: 'David Alfaro Siqueiros',
          year: '1960',
          rule: {
            "monday": [ 23, 2, 12, 20 ],
            "tuesday": [ 21, 1, 10, 20 ],
            "wednesday": [ 19, 29, 6, 18 ],
            "thursday": [ 16, 27, 6, 26 ],
            "friday": [ 15, 26, 4, 14 ],
            "saturday": [ 13, 23, 2, 10 ],
            "sunday": [ 11, 20, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 374,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/enough-1961.jpg',
          title: 'Enough',
          artist: 'David Alfaro Siqueiros',
          year: '1961',
          rule: {
            "monday": [ 11, 20, 1, 10 ],
            "tuesday": [ 23, 2, 12, 20 ],
            "wednesday": [ 21, 1, 10, 20 ],
            "thursday": [ 19, 29, 6, 18 ],
            "friday": [ 16, 27, 6, 26 ],
            "saturday": [ 15, 26, 4, 14 ],
            "sunday": [ 13, 23, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 375,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/peace-1961.jpg',
          title: 'Peace',
          artist: 'David Alfaro Siqueiros',
          year: '1961',
          rule: {
            "monday": [ 13, 23, 2, 10 ],
            "tuesday": [ 11, 20, 1, 10 ],
            "wednesday": [ 23, 2, 12, 20 ],
            "thursday": [ 21, 1, 10, 20 ],
            "friday": [ 19, 29, 6, 18 ],
            "saturday": [ 16, 27, 6, 26 ],
            "sunday": [ 15, 26, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 376,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/solitary-confinement-1961.jpg',
          title: 'Solitary Confinement',
          artist: 'David Alfaro Siqueiros',
          year: '1961',
          rule: {
            "monday": [ 15, 26, 4, 14 ],
            "tuesday": [ 13, 23, 2, 10 ],
            "wednesday": [ 11, 20, 1, 10 ],
            "thursday": [ 23, 2, 12, 20 ],
            "friday": [ 21, 1, 10, 20 ],
            "saturday": [ 19, 29, 6, 18 ],
            "sunday": [ 16, 27, 6, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 377,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/struggle-for-emancipation-1961.jpg',
          title: 'Struggle for Emancipation',
          artist: 'David Alfaro Siqueiros',
          year: '1961',
          rule: {
            "monday": [ 16, 27, 6, 26 ],
            "tuesday": [ 15, 26, 4, 14 ],
            "wednesday": [ 13, 23, 2, 10 ],
            "thursday": [ 11, 20, 1, 10 ],
            "friday": [ 23, 2, 12, 20 ],
            "saturday": [ 21, 1, 10, 20 ],
            "sunday": [ 19, 29, 6, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 378,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/peasant-mother-1962-oil-on-canvas-1962.jpg',
          title: 'Peasant Mother',
          artist: 'David Alfaro Siqueiros',
          year: '1962',
          rule: {
            "monday": [ 20, 30, 7, 19 ],
            "tuesday": [ 17, 28, 7, 27 ],
            "wednesday": [ 16, 27, 5, 15 ],
            "thursday": [ 14, 24, 3, 11 ],
            "friday": [ 12, 21, 2, 11 ],
            "saturday": [ 24, 3, 13, 21 ],
            "sunday": [ 22, 2, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 379,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-march-of-humanity-1971.jpg',
          title: 'The March of Humanity',
          artist: 'David Alfaro Siqueiros',
          year: '1971',
          rule: {
            "monday": [ 22, 2, 11, 21 ],
            "tuesday": [ 20, 30, 7, 19 ],
            "wednesday": [ 17, 28, 7, 27 ],
            "thursday": [ 16, 27, 5, 15 ],
            "friday": [ 14, 24, 3, 11 ],
            "saturday": [ 12, 21, 2, 11 ],
            "sunday": [ 24, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 380,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-march-of-humanity-1971-1.jpg',
          title: 'The March of Humanity',
          artist: 'David Alfaro Siqueiros',
          year: '1971',
          rule: {
            "monday": [ 24, 3, 13, 21 ],
            "tuesday": [ 22, 2, 11, 21 ],
            "wednesday": [ 20, 30, 7, 19 ],
            "thursday": [ 17, 28, 7, 27 ],
            "friday": [ 16, 27, 5, 15 ],
            "saturday": [ 14, 24, 3, 11 ],
            "sunday": [ 12, 21, 2, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 381,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-march-of-humanity-1971-2.jpg',
          title: 'The March of Humanity',
          artist: '1971',
          year: '',
          rule: {
            "monday": [ 12, 21, 2, 11 ],
            "tuesday": [ 24, 3, 13, 21 ],
            "wednesday": [ 22, 2, 11, 21 ],
            "thursday": [ 20, 30, 7, 19 ],
            "friday": [ 17, 28, 7, 27 ],
            "saturday": [ 16, 27, 5, 15 ],
            "sunday": [ 14, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 382,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-march-of-humanity-1971-3.jpg',
          title: 'The March of Humanity',
          artist: 'David Alfaro Siqueiros',
          year: '1971',
          rule: {
            "monday": [ 14, 24, 3, 11 ],
            "tuesday": [ 12, 21, 2, 11 ],
            "wednesday": [ 24, 3, 13, 21 ],
            "thursday": [ 22, 2, 11, 21 ],
            "friday": [ 20, 30, 7, 19 ],
            "saturday": [ 17, 28, 7, 27 ],
            "sunday": [ 16, 27, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 383,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/detail-of-fresque.jpg',
          title: 'Detail of fresque',
          artist: 'David Alfaro Siqueiros',
          year: '?',
          rule: {
            "monday": [ 16, 27, 5, 15 ],
            "tuesday": [ 14, 24, 3, 11 ],
            "wednesday": [ 12, 21, 2, 11 ],
            "thursday": [ 24, 3, 13, 21 ],
            "friday": [ 22, 2, 11, 21 ],
            "saturday": [ 20, 30, 7, 19 ],
            "sunday": [ 17, 28, 7, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 384,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/guerilla-fighters.jpg',
          title: 'Guerilla Fighters',
          artist: 'David Alfaro Siqueiros',
          year: '?',
          rule: {
            "monday": [ 17, 28, 7, 27 ],
            "tuesday": [ 16, 27, 5, 15 ],
            "wednesday": [ 14, 24, 3, 11 ],
            "thursday": [ 12, 21, 2, 11 ],
            "friday": [ 24, 3, 13, 21 ],
            "saturday": [ 22, 2, 11, 21 ],
            "sunday": [ 20, 30, 7, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 385,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-march-of-humanity.jpg',
          title: 'The March of Humanity (detail)',
          artist: 'David Alfaro Siqueiros',
          year: '1971',
          rule: {
            "monday": [ 21, 31, 8, 20 ],
            "tuesday": [ 18, 29, 8, 28 ],
            "wednesday": [ 17, 28, 6, 16 ],
            "thursday": [ 15, 25, 4, 12 ],
            "friday": [ 13, 22, 3, 12 ],
            "saturday": [ 23, 4, 14, 22 ],
            "sunday": [ 23, 3, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 386,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-revolution-mural.jpg',
          title: 'The Revolution (mural)',
          artist: 'David Alfaro Siqueiros',
          year: '?',
          rule: {
            "monday": [ 23, 3, 12, 22 ],
            "tuesday": [ 21, 31, 8, 20 ],
            "wednesday": [ 18, 29, 8, 28 ],
            "thursday": [ 17, 28, 6, 16 ],
            "friday": [ 15, 25, 4, 12 ],
            "saturday": [ 13, 22, 3, 12 ],
            "sunday": [ 23, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 387,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/gargantua.jpg',
          title: 'Gargantua',
          artist: 'Honore Daumier',
          year: '1831',
          rule: {
            "monday": [ 23, 4, 14, 22 ],
            "tuesday": [ 23, 3, 12, 22 ],
            "wednesday": [ 21, 31, 8, 20 ],
            "thursday": [ 18, 29, 8, 28 ],
            "friday": [ 17, 28, 6, 16 ],
            "saturday": [ 15, 25, 4, 12 ],
            "sunday": [ 13, 22, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 388,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-beggars.jpg',
          title: 'The Beggars',
          artist: 'Honore Daumier',
          year: 'c.1845',
          rule: {
            "monday": [ 13, 22, 3, 12 ],
            "tuesday": [ 23, 4, 14, 22 ],
            "wednesday": [ 23, 3, 12, 22 ],
            "thursday": [ 21, 31, 8, 20 ],
            "friday": [ 18, 29, 8, 28 ],
            "saturday": [ 17, 28, 6, 16 ],
            "sunday": [ 15, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 389,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/tenants-and-owners.jpg',
          title: 'Tenants and owners',
          artist: 'Honore Daumier',
          year: '1847',
          rule: {
            "monday": [ 15, 25, 4, 12 ],
            "tuesday": [ 13, 22, 3, 12 ],
            "wednesday": [ 23, 4, 14, 22 ],
            "thursday": [ 23, 3, 12, 22 ],
            "friday": [ 21, 31, 8, 20 ],
            "saturday": [ 18, 29, 8, 28 ],
            "sunday": [ 17, 28, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 390,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-miller-his-son-and-the-donkey.jpg',
          title: 'The Miller, His Son and the Donkey',
          artist: 'Honore Daumier',
          year: '1849',
          rule: {
            "monday": [ 17, 28, 6, 16 ],
            "tuesday": [ 15, 25, 4, 12 ],
            "wednesday": [ 13, 22, 3, 12 ],
            "thursday": [ 23, 4, 14, 22 ],
            "friday": [ 23, 3, 12, 22 ],
            "saturday": [ 21, 31, 8, 20 ],
            "sunday": [ 18, 29, 8, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 391,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-burden-the-laundress-1853.jpg',
          title: 'The Burden (The Laundress)',
          artist: 'Honore Daumier',
          year: '1850 - 1853',
          rule: {
            "monday": [ 18, 29, 8, 28 ],
            "tuesday": [ 17, 28, 6, 16 ],
            "wednesday": [ 15, 25, 4, 12 ],
            "thursday": [ 13, 22, 3, 12 ],
            "friday": [ 23, 4, 14, 22 ],
            "saturday": [ 23, 3, 12, 22 ],
            "sunday": [ 21, 31, 8, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 392,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-insurrection.jpg',
          title: 'The Insurrection',
          artist: 'Honore Daumier',
          year: 'c.1852 - c.1858',
          rule: {
            "monday": [ 22, 1, 9, 21 ],
            "tuesday": [ 19, 30, 9, 29 ],
            "wednesday": [ 18, 29, 7, 17 ],
            "thursday": [ 16, 26, 5, 13 ],
            "friday": [ 14, 23, 4, 13 ],
            "saturday": [ 24, 5, 15, 23 ],
            "sunday": [ 24, 4, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 393,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-laundress.jpg',
          title: 'The Laundress',
          artist: 'Honore Daumier',
          year: 'c.1860 - c.1861',
          rule: {
            "monday": [ 24, 4, 13, 23 ],
            "tuesday": [ 22, 1, 9, 21 ],
            "wednesday": [ 19, 30, 9, 29 ],
            "thursday": [ 18, 29, 7, 17 ],
            "friday": [ 16, 26, 5, 13 ],
            "saturday": [ 14, 23, 4, 13 ],
            "sunday": [ 24, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 394,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-wagon-of-the-third-class.jpg',
          title: 'A Wagon of the Third Class',
          artist: 'Honore Daumier',
          year: '1862',
          rule: {
            "monday": [ 24, 5, 15, 23 ],
            "tuesday": [ 24, 4, 13, 23 ],
            "wednesday": [ 22, 1, 9, 21 ],
            "thursday": [ 19, 30, 9, 29 ],
            "friday": [ 18, 29, 7, 17 ],
            "saturday": [ 16, 26, 5, 13 ],
            "sunday": [ 14, 23, 4, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 395,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-wagon-of-the-third-class-1.jpg',
          title: 'A Wagon of the Third Class',
          artist: 'Honore Daumier',
          year: 'c.1862 - c.1864',
          rule: {
            "monday": [ 14, 23, 4, 13 ],
            "tuesday": [ 24, 5, 15, 23 ],
            "wednesday": [ 24, 4, 13, 23 ],
            "thursday": [ 22, 1, 9, 21 ],
            "friday": [ 19, 30, 9, 29 ],
            "saturday": [ 18, 29, 7, 17 ],
            "sunday": [ 16, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 396,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/in-the-omnibus-1864.jpg',
          title: 'In the Omnibus',
          artist: 'Honore Daumier',
          year: '1864',
          rule: {
            "monday": [ 16, 26, 5, 13 ],
            "tuesday": [ 14, 23, 4, 13 ],
            "wednesday": [ 24, 5, 15, 23 ],
            "thursday": [ 24, 4, 13, 23 ],
            "friday": [ 22, 1, 9, 21 ],
            "saturday": [ 19, 30, 9, 29 ],
            "sunday": [ 18, 29, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 397,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/returning-from-the-market.jpg',
          title: 'Returning from the market',
          artist: 'Honore Daumier',
          year: '1870',
          rule: {
            "monday": [ 18, 29, 7, 17 ],
            "tuesday": [ 16, 26, 5, 13 ],
            "wednesday": [ 14, 23, 4, 13 ],
            "thursday": [ 24, 5, 15, 23 ],
            "friday": [ 24, 4, 13, 23 ],
            "saturday": [ 22, 1, 9, 21 ],
            "sunday": [ 19, 30, 9, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 398,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/fighting-bricklayer.jpg',
          title: 'Fighting Bricklayer',
          artist: 'Honore Daumier',
          year: '?',
          rule: {
            "monday": [ 19, 30, 9, 29 ],
            "tuesday": [ 18, 29, 7, 17 ],
            "wednesday": [ 16, 26, 5, 13 ],
            "thursday": [ 14, 23, 4, 13 ],
            "friday": [ 24, 5, 15, 23 ],
            "saturday": [ 24, 4, 13, 23 ],
            "sunday": [ 22, 1, 9, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 399,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-butcher.jpg',
          title: 'The Butcher',
          artist: 'Honore Daumier',
          year: '?',
          rule: {
            "monday": [ 23, 2, 10, 22 ],
            "tuesday": [ 20, 31, 10, 30 ],
            "wednesday": [ 19, 30, 8, 18 ],
            "thursday": [ 17, 27, 6, 14 ],
            "friday": [ 15, 24, 5, 14 ],
            "saturday": [ 25, 6, 16, 24 ],
            "sunday": [ 25, 5, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 400,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/diggers.jpg',
          title: 'Diggers',
          artist: 'Nicholas Roerich',
          year: 'c.1900',
          rule: {
            "monday": [ 25, 5, 14, 24 ],
            "tuesday": [ 23, 2, 10, 22 ],
            "wednesday": [ 20, 31, 10, 30 ],
            "thursday": [ 19, 30, 8, 18 ],
            "friday": [ 17, 27, 6, 14 ],
            "saturday": [ 15, 24, 5, 14 ],
            "sunday": [ 25, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 401,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/building-a-city-1902.jpg',
          title: 'Building a City',
          artist: 'Nicholas Roerich',
          year: '1902',
          rule: {
            "monday": [ 25, 6, 16, 24 ],
            "tuesday": [ 25, 5, 14, 24 ],
            "wednesday": [ 23, 2, 10, 22 ],
            "thursday": [ 20, 31, 10, 30 ],
            "friday": [ 19, 30, 8, 18 ],
            "saturday": [ 17, 27, 6, 14 ],
            "sunday": [ 15, 24, 5, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 402,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/building-the-ships-1903.jpg',
          title: 'Building the ships',
          artist: 'Nicholas Roerich',
          year: '1903',
          rule: {
            "monday": [ 15, 24, 5, 14 ],
            "tuesday": [ 25, 6, 16, 24 ],
            "wednesday": [ 25, 5, 14, 24 ],
            "thursday": [ 23, 2, 10, 22 ],
            "friday": [ 20, 31, 10, 30 ],
            "saturday": [ 19, 30, 8, 18 ],
            "sunday": [ 17, 27, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 403,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/they-build-the-ships-1903-1.jpg',
          title: 'They build the ships',
          artist: 'Nicholas Roerich',
          year: '1903',
          rule: {
            "monday": [ 17, 27, 6, 14 ],
            "tuesday": [ 15, 24, 5, 14 ],
            "wednesday": [ 25, 6, 16, 24 ],
            "thursday": [ 25, 5, 14, 24 ],
            "friday": [ 23, 2, 10, 22 ],
            "saturday": [ 20, 31, 10, 30 ],
            "sunday": [ 19, 30, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 404,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-laborer-at-celeyran-1882.jpg',
          title: 'A Laborer at Celeyran',
          artist: 'Henri de Toulouse-Lautrec',
          year: '1882',
          rule: {
            "monday": [ 19, 30, 8, 18 ],
            "tuesday": [ 17, 27, 6, 14 ],
            "wednesday": [ 15, 24, 5, 14 ],
            "thursday": [ 25, 6, 16, 24 ],
            "friday": [ 25, 5, 14, 24 ],
            "saturday": [ 23, 2, 10, 22 ],
            "sunday": [ 20, 31, 10, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 405,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/study-for-the-laundress-1888.jpg',
          title: 'Study for the Laundress',
          artist: 'Henri de Toulouse-Lautrec',
          year: '1888',
          rule: {
            "monday": [ 20, 31, 10, 30 ],
            "tuesday": [ 19, 30, 8, 18 ],
            "wednesday": [ 17, 27, 6, 14 ],
            "thursday": [ 15, 24, 5, 14 ],
            "friday": [ 25, 6, 16, 24 ],
            "saturday": [ 25, 5, 14, 24 ],
            "sunday": [ 23, 2, 10, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 406,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-coastal-bus-company-1888.jpg',
          title: 'The Coastal bus company',
          artist: 'Henri de Toulouse-Lautrec',
          year: '1888',
          rule: {
            "monday": [ 24, 3, 11, 23 ],
            "tuesday": [ 21, 1, 11, 31 ],
            "wednesday": [ 20, 31, 9, 19 ],
            "thursday": [ 18, 28, 7, 15 ],
            "friday": [ 16, 25, 6, 15 ],
            "saturday": [ 26, 7, 17, 25 ],
            "sunday": [ 26, 6, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 407,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-flower-seller-1894.jpg',
          title: 'The Flower Seller',
          artist: 'Henri de Toulouse-Lautrec',
          year: '1894',
          rule: {
            "monday": [ 26, 6, 15, 25 ],
            "tuesday": [ 24, 3, 11, 23 ],
            "wednesday": [ 21, 1, 11, 31 ],
            "thursday": [ 20, 31, 9, 19 ],
            "friday": [ 18, 28, 7, 15 ],
            "saturday": [ 16, 25, 6, 15 ],
            "sunday": [ 26, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 408,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-laundryman-calling-at-the-brothal-1894.jpg',
          title: 'The Laundryman Calling at the Brothal',
          artist: 'Henri de Toulouse-Lautrec',
          year: '1894',
          rule: {
            "monday": [ 26, 7, 17, 25 ],
            "tuesday": [ 26, 6, 15, 25 ],
            "wednesday": [ 24, 3, 11, 23 ],
            "thursday": [ 21, 1, 11, 31 ],
            "friday": [ 20, 31, 9, 19 ],
            "saturday": [ 18, 28, 7, 15 ],
            "sunday": [ 16, 25, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 409,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-bartender-1900.jpg',
          title: 'The Bartender',
          artist: 'Henri de Toulouse-Lautrec',
          year: '1900',
          rule: {
            "monday": [ 16, 25, 6, 15 ],
            "tuesday": [ 26, 7, 17, 25 ],
            "wednesday": [ 26, 6, 15, 25 ],
            "thursday": [ 24, 3, 11, 23 ],
            "friday": [ 21, 1, 11, 31 ],
            "saturday": [ 20, 31, 9, 19 ],
            "sunday": [ 18, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 410,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/craftsman-modern.jpg',
          title: 'Craftsman modern',
          artist: 'Henri de Toulouse-Lautrec',
          year: '?',
          rule: {
            "monday": [ 18, 28, 7, 15 ],
            "tuesday": [ 16, 25, 6, 15 ],
            "wednesday": [ 26, 7, 17, 25 ],
            "thursday": [ 26, 6, 15, 25 ],
            "friday": [ 24, 3, 11, 23 ],
            "saturday": [ 21, 1, 11, 31 ],
            "sunday": [ 20, 31, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 411,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/bb4a5b-20071109-raisingthebanner.jpg',
          title: 'Raising the Banner',
          artist: 'Geli Korzhev',
          year: '1958-1960',
          rule: {
            "monday": [ 20, 31, 9, 19 ],
            "tuesday": [ 18, 28, 7, 15 ],
            "wednesday": [ 16, 25, 6, 15 ],
            "thursday": [ 26, 7, 17, 25 ],
            "friday": [ 26, 6, 15, 25 ],
            "saturday": [ 24, 3, 11, 23 ],
            "sunday": [ 21, 1, 11, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 412,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/577b37-20071109-clouds.jpg',
          title: 'Clouds',
          artist: 'Geli Korzhev',
          year: 'xx cent.',
          rule: {
            "monday": [ 21, 1, 11, 31 ],
            "tuesday": [ 20, 31, 9, 19 ],
            "wednesday": [ 18, 28, 7, 15 ],
            "thursday": [ 16, 25, 6, 15 ],
            "friday": [ 26, 7, 17, 25 ],
            "saturday": [ 26, 6, 15, 25 ],
            "sunday": [ 24, 3, 11, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 413,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/fa4f8a-20071109-bellygod.jpg',
          title: 'Belly God',
          artist: 'Geli Korzhev',
          year: 'xx cent.',
          rule: {
            "monday": [ 25, 4, 12, 24 ],
            "tuesday": [ 22, 2, 12, 1 ],
            "wednesday": [ 21, 1, 10, 20 ],
            "thursday": [ 19, 29, 8, 16 ],
            "friday": [ 17, 26, 7, 16 ],
            "saturday": [ 27, 8, 18, 26 ],
            "sunday": [ 27, 7, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 414,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/9d330c-20071109-donquixote.jpg',
          title: 'Don Quixote',
          artist: 'Geli Korzhev',
          year: 'xx cent.',
          rule: {
            "monday": [ 27, 7, 16, 26 ],
            "tuesday": [ 25, 4, 12, 24 ],
            "wednesday": [ 22, 2, 12, 1 ],
            "thursday": [ 21, 1, 10, 20 ],
            "friday": [ 19, 29, 8, 16 ],
            "saturday": [ 17, 26, 7, 16 ],
            "sunday": [ 27, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 415,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/unitedweb.jpg',
          title: 'Fire Fighter',
          artist: 'Vicky Stonebridge',
          year: '2011',
          rule: {
            "monday": [ 27, 8, 18, 26 ],
            "tuesday": [ 27, 7, 16, 26 ],
            "wednesday": [ 25, 4, 12, 24 ],
            "thursday": [ 22, 2, 12, 1 ],
            "friday": [ 21, 1, 10, 20 ],
            "saturday": [ 19, 29, 8, 16 ],
            "sunday": [ 17, 26, 7, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 416,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/samuel-luke-fildes-the-empty-chair-engraving-of-a-water-color-the-graphic-1870.jpg',
          title: 'the Empty Chair',
          artist: 'Luke Fildes',
          year: '1870',
          rule: {
            "monday": [ 17, 26, 7, 16 ],
            "tuesday": [ 27, 8, 18, 26 ],
            "wednesday": [ 27, 7, 16, 26 ],
            "thursday": [ 25, 4, 12, 24 ],
            "friday": [ 22, 2, 12, 1 ],
            "saturday": [ 21, 1, 10, 20 ],
            "sunday": [ 19, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 417,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-widower.jpg',
          title: 'The Widower',
          artist: 'Luke Fildes',
          year: '1875',
          rule: {
            "monday": [ 19, 29, 8, 16 ],
            "tuesday": [ 17, 26, 7, 16 ],
            "wednesday": [ 27, 8, 18, 26 ],
            "thursday": [ 27, 7, 16, 26 ],
            "friday": [ 25, 4, 12, 24 ],
            "saturday": [ 22, 2, 12, 1 ],
            "sunday": [ 21, 1, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 418,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/rosa-siega.jpg',
          title: 'Rosa Siega',
          artist: 'Luke Fildes',
          year: '1876',
          rule: {
            "monday": [ 21, 1, 10, 20 ],
            "tuesday": [ 19, 29, 8, 16 ],
            "wednesday": [ 17, 26, 7, 16 ],
            "thursday": [ 27, 8, 18, 26 ],
            "friday": [ 27, 7, 16, 26 ],
            "saturday": [ 25, 4, 12, 24 ],
            "sunday": [ 22, 2, 12, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 419,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-venetian-flower-girl.jpg',
          title: 'a Venetian Flower Girl',
          artist: 'Luke Fildes',
          year: '1877',
          rule: {
            "monday": [ 22, 2, 12, 1 ],
            "tuesday": [ 21, 1, 10, 20 ],
            "wednesday": [ 19, 29, 8, 16 ],
            "thursday": [ 17, 26, 7, 16 ],
            "friday": [ 27, 8, 18, 26 ],
            "saturday": [ 27, 7, 16, 26 ],
            "sunday": [ 25, 4, 12, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 420,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/jessica.jpg',
          title: 'Jessica',
          artist: 'Luke Fildes',
          year: '1888',
          rule: {
            "monday": [ 26, 5, 13, 25 ],
            "tuesday": [ 23, 3, 13, 2 ],
            "wednesday": [ 22, 2, 11, 21 ],
            "thursday": [ 20, 30, 9, 17 ],
            "friday": [ 18, 27, 8, 17 ],
            "saturday": [ 28, 9, 19, 27 ],
            "sunday": [ 28, 8, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 421,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-doctor.png',
          title: 'The Doctor.',
          artist: 'Luke Fildes',
          year: '1891',
          rule: {
            "monday": [ 28, 8, 17, 27 ],
            "tuesday": [ 26, 5, 13, 25 ],
            "wednesday": [ 23, 3, 13, 2 ],
            "thursday": [ 22, 2, 11, 21 ],
            "friday": [ 20, 30, 9, 17 ],
            "saturday": [ 18, 27, 8, 17 ],
            "sunday": [ 28, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 422,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/winter-in-kursk-1916.jpg',
          title: 'Winter in Kursk',
          artist: 'Aleksandr Deyneka',
          year: '1916',
          rule: {
            "monday": [ 28, 9, 19, 27 ],
            "tuesday": [ 28, 8, 17, 27 ],
            "wednesday": [ 26, 5, 13, 25 ],
            "thursday": [ 23, 3, 13, 2 ],
            "friday": [ 22, 2, 11, 21 ],
            "saturday": [ 20, 30, 9, 17 ],
            "sunday": [ 18, 27, 8, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 423,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/y-issue-donbass-1924.jpg',
          title: 'Donbass',
          artist: 'Aleksandr Deyneka',
          year: '1924',
          rule: {
            "monday": [ 18, 27, 8, 17 ],
            "tuesday": [ 28, 9, 19, 27 ],
            "wednesday": [ 28, 8, 17, 27 ],
            "thursday": [ 26, 5, 13, 25 ],
            "friday": [ 23, 3, 13, 2 ],
            "saturday": [ 22, 2, 11, 21 ],
            "sunday": [ 20, 30, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 424,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/with-change-1927.jpg',
          title: 'With change',
          artist: 'Aleksandr Deyneka',
          year: '1927',
          rule: {
            "monday": [ 20, 30, 9, 17 ],
            "tuesday": [ 18, 27, 8, 17 ],
            "wednesday": [ 28, 9, 19, 27 ],
            "thursday": [ 28, 8, 17, 27 ],
            "friday": [ 26, 5, 13, 25 ],
            "saturday": [ 23, 3, 13, 2 ],
            "sunday": [ 22, 2, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 425,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/9368a0cf03931d10f7f0d65fefdbdae8.jpg',
          title: 'The defense of Petrograd',
          artist: 'Aleksandr Deyneka',
          year: '1928',
          rule: {
            "monday": [ 22, 2, 11, 21 ],
            "tuesday": [ 20, 30, 9, 17 ],
            "wednesday": [ 18, 27, 8, 17 ],
            "thursday": [ 28, 9, 19, 27 ],
            "friday": [ 28, 8, 17, 27 ],
            "saturday": [ 26, 5, 13, 25 ],
            "sunday": [ 23, 3, 13, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 426,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/yard-board.jpg',
          title: 'Yard. Board',
          artist: 'Aleksandr Deyneka',
          year: 'c.1920 - c.1930',
          rule: {
            "monday": [ 23, 3, 13, 2 ],
            "tuesday": [ 22, 2, 11, 21 ],
            "wednesday": [ 20, 30, 9, 17 ],
            "thursday": [ 18, 27, 8, 17 ],
            "friday": [ 28, 9, 19, 27 ],
            "saturday": [ 28, 8, 17, 27 ],
            "sunday": [ 26, 5, 13, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 427,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/we-have-to-become-specialists-1931.jpg',
          title: 'We have to become specialists',
          artist: 'Aleksandr Deyneka',
          year: '1931',
          rule: {
            "monday": [ 27, 6, 14, 26 ],
            "tuesday": [ 24, 4, 14, 3 ],
            "wednesday": [ 23, 3, 10, 22 ],
            "thursday": [ 21, 31, 10, 18 ],
            "friday": [ 19, 28, 9, 18 ],
            "saturday": [ 29, 10, 20, 28 ],
            "sunday": [ 29, 9, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 428,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/who-will-defeat-whom-1932.jpg',
          title: 'Who will defeat whom',
          artist: 'Aleksandr Deyneka',
          year: '1932',
          rule: {
            "monday": [ 29, 9, 18, 28 ],
            "tuesday": [ 27, 6, 14, 26 ],
            "wednesday": [ 24, 4, 14, 3 ],
            "thursday": [ 23, 3, 10, 22 ],
            "friday": [ 21, 31, 10, 18 ],
            "saturday": [ 19, 28, 9, 18 ],
            "sunday": [ 29, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 429,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/work-build-and-don-t-weep-1933.jpg',
          title: 'Work, build and don\'t weep',
          artist: 'Aleksandr Deyneka',
          year: '1933',
          rule: {
            "monday": [ 29, 10, 20, 28 ],
            "tuesday": [ 29, 9, 18, 28 ],
            "wednesday": [ 27, 6, 14, 26 ],
            "thursday": [ 24, 4, 14, 3 ],
            "friday": [ 23, 3, 10, 22 ],
            "saturday": [ 21, 31, 10, 18 ],
            "sunday": [ 19, 28, 9, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 430,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/youth-ebony-1935.jpg',
          title: 'Youth Negro',
          artist: 'Aleksandr Deyneka',
          year: '1935',
          rule: {
            "monday": [ 19, 28, 9, 18 ],
            "tuesday": [ 29, 10, 20, 28 ],
            "wednesday": [ 29, 9, 18, 28 ],
            "thursday": [ 27, 6, 14, 26 ],
            "friday": [ 24, 4, 14, 3 ],
            "saturday": [ 23, 3, 10, 22 ],
            "sunday": [ 21, 31, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 431,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/future-pilots-1938(1).jpg',
          title: 'Future Pilots',
          artist: 'Aleksandr Deyneka',
          year: '1938',
          rule: {
            "monday": [ 21, 31, 10, 18 ],
            "tuesday": [ 19, 28, 9, 18 ],
            "wednesday": [ 29, 10, 20, 28 ],
            "thursday": [ 29, 9, 18, 28 ],
            "friday": [ 27, 6, 14, 26 ],
            "saturday": [ 24, 4, 14, 3 ],
            "sunday": [ 23, 3, 10, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 432,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/gagarin-s-day-in-paris-1962.jpg',
          title: 'Gagarin\'s Day in Paris',
          artist: 'Aleksandr Deyneka',
          year: '1962',
          rule: {
            "monday": [ 23, 3, 10, 22 ],
            "tuesday": [ 21, 31, 10, 18 ],
            "wednesday": [ 19, 28, 9, 18 ],
            "thursday": [ 29, 10, 20, 28 ],
            "friday": [ 29, 9, 18, 28 ],
            "saturday": [ 27, 6, 14, 26 ],
            "sunday": [ 24, 4, 14, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 433,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/youth-1962.jpg',
          title: 'Youth',
          artist: 'Aleksandr Deyneka',
          year: '1961 - 1962',
          rule: {
            "monday": [ 24, 4, 14, 3 ],
            "tuesday": [ 23, 3, 10, 22 ],
            "wednesday": [ 21, 31, 10, 18 ],
            "thursday": [ 19, 28, 9, 18 ],
            "friday": [ 29, 10, 20, 28 ],
            "saturday": [ 29, 9, 18, 28 ],
            "sunday": [ 27, 6, 14, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 434,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/fajrant-w-nowej-hucie.jpg',
          title: 'Fajrant W Nowej Hucie',
          artist: 'Andrzej Wróblewski',
          year: '1953',
          rule: {
            "monday": [ 28, 7, 15, 17 ],
            "tuesday": [ 25, 5, 15, 4 ],
            "wednesday": [ 24, 4, 14, 23 ],
            "thursday": [ 22, 1, 11, 19 ],
            "friday": [ 20, 29, 10, 19 ],
            "saturday": [ 30, 11, 21, 29 ],
            "sunday": [ 30, 10, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 435,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/szofer-niebieski-1948.jpg',
          title: 'Blue Chauffeur',
          artist: 'Andrzej Wróblewski',
          year: '1948',
          rule: {
            "monday": [ 30, 10, 19, 29 ],
            "tuesday": [ 28, 7, 15, 17 ],
            "wednesday": [ 25, 5, 15, 4 ],
            "thursday": [ 24, 4, 14, 23 ],
            "friday": [ 22, 1, 11, 19 ],
            "saturday": [ 20, 29, 10, 19 ],
            "sunday": [ 30, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 436,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/kolejka-trwa-1856.jpg',
          title: 'Queue',
          artist: 'Andrzej Wróblewski',
          year: '1956',
          rule: {
            "monday": [ 30, 11, 21, 29 ],
            "tuesday": [ 30, 10, 19, 29 ],
            "wednesday": [ 28, 7, 15, 17 ],
            "thursday": [ 25, 5, 15, 4 ],
            "friday": [ 24, 4, 14, 23 ],
            "saturday": [ 22, 1, 11, 19 ],
            "sunday": [ 20, 29, 10, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 437,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/matki-1955.jpg',
          title: 'Mothers',
          artist: 'Andrzej Wróblewski',
          year: '1955',
          rule: {
            "monday": [ 20, 29, 10, 19 ],
            "tuesday": [ 30, 11, 21, 29 ],
            "wednesday": [ 30, 10, 19, 29 ],
            "thursday": [ 28, 7, 15, 17 ],
            "friday": [ 25, 5, 15, 4 ],
            "saturday": [ 24, 4, 14, 23 ],
            "sunday": [ 22, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 438,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pranie-1955.jpg',
          title: 'Washing',
          artist: 'Andrzej Wróblewski',
          year: '1955',
          rule: {
            "monday": [ 22, 1, 11, 19 ],
            "tuesday": [ 20, 29, 10, 19 ],
            "wednesday": [ 30, 11, 21, 29 ],
            "thursday": [ 30, 10, 19, 29 ],
            "friday": [ 28, 7, 15, 17 ],
            "saturday": [ 25, 5, 15, 4 ],
            "sunday": [ 24, 4, 14, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 439,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/rozstrzelanie-z-ch-opczykiem-1949.jpg',
          title: 'Execution V',
          artist: 'Andrzej Wróblewski',
          year: '1949',
          rule: {
            "monday": [ 24, 4, 14, 23 ],
            "tuesday": [ 22, 1, 11, 19 ],
            "wednesday": [ 20, 29, 10, 19 ],
            "thursday": [ 30, 11, 21, 29 ],
            "friday": [ 30, 10, 19, 29 ],
            "saturday": [ 28, 7, 15, 17 ],
            "sunday": [ 25, 5, 15, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 440,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/rozstrzelanie-surrealistyczne-1949.jpg',
          title: 'Execution',
          artist: 'Andrzej Wróblewski',
          year: '1949',
          rule: {
            "monday": [ 25, 5, 15, 4 ],
            "tuesday": [ 24, 4, 14, 23 ],
            "wednesday": [ 22, 1, 11, 19 ],
            "thursday": [ 20, 29, 10, 19 ],
            "friday": [ 30, 11, 21, 29 ],
            "saturday": [ 30, 10, 19, 29 ],
            "sunday": [ 28, 7, 15, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 441,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/postaci-1950.jpg',
          title: 'Postaci',
          artist: 'Wojciech Fangor',
          year: '1950',
          rule: {
            "monday": [ 29, 8, 16, 18 ],
            "tuesday": [ 26, 6, 16, 5 ],
            "wednesday": [ 25, 5, 15, 24 ],
            "thursday": [ 23, 2, 12, 20 ],
            "friday": [ 21, 30, 11, 20 ],
            "saturday": [ 31, 12, 22, 30 ],
            "sunday": [ 31, 11, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 442,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/budowa-1951.jpg',
          title: 'Budowa',
          artist: 'Wojciech Fangor',
          year: '1951',
          rule: {
            "monday": [ 31, 11, 20, 30 ],
            "tuesday": [ 29, 8, 16, 18 ],
            "wednesday": [ 26, 6, 16, 5 ],
            "thursday": [ 25, 5, 15, 24 ],
            "friday": [ 23, 2, 12, 20 ],
            "saturday": [ 21, 30, 11, 20 ],
            "sunday": [ 31, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 443,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/matka-koreanka-1951(1).jpg',
          title: 'Matka Koreanka',
          artist: 'Wojciech Fangor',
          year: '1951',
          rule: {
            "monday": [ 31, 12, 22, 30 ],
            "tuesday": [ 31, 11, 20, 30 ],
            "wednesday": [ 29, 8, 16, 18 ],
            "thursday": [ 26, 6, 16, 5 ],
            "friday": [ 25, 5, 15, 24 ],
            "saturday": [ 23, 2, 12, 20 ],
            "sunday": [ 21, 30, 11, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 444,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/dovbush-1931.jpg',
          title: 'Dovbush',
          artist: 'Fedir Krychevsky',
          year: '1931',
          rule: {
            "monday": [ 21, 30, 11, 20 ],
            "tuesday": [ 31, 12, 22, 30 ],
            "wednesday": [ 31, 11, 20, 30 ],
            "thursday": [ 29, 8, 16, 18 ],
            "friday": [ 26, 6, 16, 5 ],
            "saturday": [ 25, 5, 15, 24 ],
            "sunday": [ 23, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 445,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/12fk.jpg',
          title: 'Sketch',
          artist: 'Fedir Krychevsky',
          year: '?',
          rule: {
            "monday": [ 23, 2, 12, 20 ],
            "tuesday": [ 21, 30, 11, 20 ],
            "wednesday": [ 31, 12, 22, 30 ],
            "thursday": [ 31, 11, 20, 30 ],
            "friday": [ 29, 8, 16, 18 ],
            "saturday": [ 26, 6, 16, 5 ],
            "sunday": [ 25, 5, 15, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 446,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/15fk.jpg',
          title: 'Untitled',
          artist: 'Fedir Krychevsky',
          year: '?',
          rule: {
            "monday": [ 25, 5, 15, 24 ],
            "tuesday": [ 23, 2, 12, 20 ],
            "wednesday": [ 21, 30, 11, 20 ],
            "thursday": [ 31, 12, 22, 30 ],
            "friday": [ 31, 11, 20, 30 ],
            "saturday": [ 29, 8, 16, 18 ],
            "sunday": [ 26, 6, 16, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 447,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/mother.jpg',
          title: 'Mother',
          artist: 'Fedir Krychevsky',
          year: '?',
          rule: {
            "monday": [ 26, 6, 16, 5 ],
            "tuesday": [ 25, 5, 15, 24 ],
            "wednesday": [ 23, 2, 12, 20 ],
            "thursday": [ 21, 30, 11, 20 ],
            "friday": [ 31, 12, 22, 30 ],
            "saturday": [ 31, 11, 20, 30 ],
            "sunday": [ 29, 8, 16, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 448,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/self-portrait-1945.jpg',
          title: 'Self Portrait',
          artist: 'Tetyana Yablonska',
          year: '1945',
          rule: {
            "monday": [ 30, 9, 17, 19 ],
            "tuesday": [ 27, 7, 17, 6 ],
            "wednesday": [ 26, 6, 16, 25 ],
            "thursday": [ 24, 3, 13, 21 ],
            "friday": [ 22, 31, 12, 21 ],
            "saturday": [ 1, 13, 23, 31 ],
            "sunday": [ 1, 12, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 449,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/self-portrait-in-ukrainian-costume-1946.jpg',
          title: 'Self Portrait in Ukrainian Costume',
          artist: 'Tetyana Yablonska',
          year: '1946',
          rule: {
            "monday": [ 1, 12, 21, 31 ],
            "tuesday": [ 30, 9, 17, 19 ],
            "wednesday": [ 27, 7, 17, 6 ],
            "thursday": [ 26, 6, 16, 25 ],
            "friday": [ 24, 3, 13, 21 ],
            "saturday": [ 22, 31, 12, 21 ],
            "sunday": [ 1, 13, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 450,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/before-the-start-1947.jpg',
          title: 'Before the Start',
          artist: 'Tetyana Yablonska',
          year: '1947',
          rule: {
            "monday": [ 1, 13, 23, 31 ],
            "tuesday": [ 1, 12, 21, 31 ],
            "wednesday": [ 30, 9, 17, 19 ],
            "thursday": [ 27, 7, 17, 6 ],
            "friday": [ 26, 6, 16, 25 ],
            "saturday": [ 24, 3, 13, 21 ],
            "sunday": [ 22, 31, 12, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 451,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/study-for-bread-1949.jpg',
          title: 'Study for \'Bread\'',
          artist: 'Tetyana Yablonska',
          year: '1949',
          rule: {
            "monday": [ 22, 31, 12, 21 ],
            "tuesday": [ 1, 13, 23, 31 ],
            "wednesday": [ 1, 12, 21, 31 ],
            "thursday": [ 30, 9, 17, 19 ],
            "friday": [ 27, 7, 17, 6 ],
            "saturday": [ 26, 6, 16, 25 ],
            "sunday": [ 24, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 452,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-girl-rollingup-her-sleeves-study-for-bread-1949.jpg',
          title: 'A Girl Rollingup Her Sleeves. Study for \'Bread\'',
          artist: 'Tetyana Yablonska',
          year: '1949',
          rule: {
            "monday": [ 24, 3, 13, 21 ],
            "tuesday": [ 22, 31, 12, 21 ],
            "wednesday": [ 1, 13, 23, 31 ],
            "thursday": [ 1, 12, 21, 31 ],
            "friday": [ 30, 9, 17, 19 ],
            "saturday": [ 27, 7, 17, 6 ],
            "sunday": [ 26, 6, 16, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 453,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/in-a-park-1949.jpg',
          title: 'In a Park',
          artist: 'Tetyana Yablonska',
          year: '1949',
          rule: {
            "monday": [ 26, 6, 16, 25 ],
            "tuesday": [ 24, 3, 13, 21 ],
            "wednesday": [ 22, 31, 12, 21 ],
            "thursday": [ 1, 13, 23, 31 ],
            "friday": [ 1, 12, 21, 31 ],
            "saturday": [ 30, 9, 17, 19 ],
            "sunday": [ 27, 7, 17, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 454,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/bread-1949.jpg',
          title: 'Bread',
          artist: 'Tetyana Yablonska',
          year: '1949',
          rule: {
            "monday": [ 27, 7, 17, 6 ],
            "tuesday": [ 26, 6, 16, 25 ],
            "wednesday": [ 24, 3, 13, 21 ],
            "thursday": [ 22, 31, 12, 21 ],
            "friday": [ 1, 13, 23, 31 ],
            "saturday": [ 1, 12, 21, 31 ],
            "sunday": [ 30, 9, 17, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 455,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/has-caught-a-cold-1953.jpg',
          title: 'Has Caught a Cold',
          artist: 'Tetyana Yablonska',
          year: '1953',
          rule: {
            "monday": [ 31, 10, 18, 20 ],
            "tuesday": [ 28, 8, 18, 7 ],
            "wednesday": [ 27, 7, 17, 26 ],
            "thursday": [ 25, 4, 14, 22 ],
            "friday": [ 23, 1, 13, 22 ],
            "saturday": [ 2, 14, 24, 1 ],
            "sunday": [ 2, 13, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 456,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/over-the-dnipro-river-1954.jpg',
          title: 'Over the Dnipro River',
          artist: 'Tetyana Yablonska',
          year: '1954',
          rule: {
            "monday": [ 2, 13, 22, 1 ],
            "tuesday": [ 31, 10, 18, 20 ],
            "wednesday": [ 28, 8, 18, 7 ],
            "thursday": [ 27, 7, 17, 26 ],
            "friday": [ 25, 4, 14, 22 ],
            "saturday": [ 23, 1, 13, 22 ],
            "sunday": [ 2, 14, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 457,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/in-the-summer-1954.jpg',
          title: 'In the Summer',
          artist: 'Tetyana Yablonska',
          year: '1954',
          rule: {
            "monday": [ 2, 14, 24, 1 ],
            "tuesday": [ 2, 13, 22, 1 ],
            "wednesday": [ 31, 10, 18, 20 ],
            "thursday": [ 28, 8, 18, 7 ],
            "friday": [ 27, 7, 17, 26 ],
            "saturday": [ 25, 4, 14, 22 ],
            "sunday": [ 23, 1, 13, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 458,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-model-on-the-artist-s-studio-1954.jpg',
          title: 'A Model on the Artist\'s Studio',
          artist: 'Tetyana Yablonska',
          year: '1954',
          rule: {
            "monday": [ 23, 1, 13, 22 ],
            "tuesday": [ 2, 14, 24, 1 ],
            "wednesday": [ 2, 13, 22, 1 ],
            "thursday": [ 31, 10, 18, 20 ],
            "friday": [ 28, 8, 18, 7 ],
            "saturday": [ 27, 7, 17, 26 ],
            "sunday": [ 25, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 459,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/morning-1954.jpg',
          title: 'Morning',
          artist: 'Tetyana Yablonska',
          year: '1954',
          rule: {
            "monday": [ 25, 4, 14, 22 ],
            "tuesday": [ 23, 1, 13, 22 ],
            "wednesday": [ 2, 14, 24, 1 ],
            "thursday": [ 2, 13, 22, 1 ],
            "friday": [ 31, 10, 18, 20 ],
            "saturday": [ 28, 8, 18, 7 ],
            "sunday": [ 27, 7, 17, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 460,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/twins-1958.jpg',
          title: 'Twins',
          artist: 'Tetyana Yablonska',
          year: '1958',
          rule: {
            "monday": [ 27, 7, 17, 26 ],
            "tuesday": [ 25, 4, 14, 22 ],
            "wednesday": [ 23, 1, 13, 22 ],
            "thursday": [ 2, 14, 24, 1 ],
            "friday": [ 2, 13, 22, 1 ],
            "saturday": [ 31, 10, 18, 20 ],
            "sunday": [ 28, 8, 18, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 461,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/girl-with-a-butterfly-net-1959.jpg',
          title: 'Girl with a Butterfly Net',
          artist: 'Tetyana Yablonska',
          year: '1959',
          rule: {
            "monday": [ 28, 8, 18, 7 ],
            "tuesday": [ 27, 7, 17, 26 ],
            "wednesday": [ 25, 4, 14, 22 ],
            "thursday": [ 23, 1, 13, 22 ],
            "friday": [ 2, 14, 24, 1 ],
            "saturday": [ 2, 13, 22, 1 ],
            "sunday": [ 31, 10, 18, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 462,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/in-the-forest-glade-1959.jpg',
          title: 'In the Forest Glade',
          artist: 'Tetyana Yablonska',
          year: '1959',
          rule: {
            "monday": [ 1, 11, 19, 21 ],
            "tuesday": [ 29, 9, 19, 8 ],
            "wednesday": [ 28, 8, 18, 27 ],
            "thursday": [ 26, 5, 15, 23 ],
            "friday": [ 24, 2, 14, 23 ],
            "saturday": [ 3, 15, 25, 2 ],
            "sunday": [ 3, 14, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 463,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/mother-1960.jpg',
          title: 'Mother',
          artist: 'Tetyana Yablonska',
          year: '1960',
          rule: {
            "monday": [ 3, 14, 23, 2 ],
            "tuesday": [ 1, 11, 19, 21 ],
            "wednesday": [ 29, 9, 19, 8 ],
            "thursday": [ 28, 8, 18, 27 ],
            "friday": [ 26, 5, 15, 23 ],
            "saturday": [ 24, 2, 14, 23 ],
            "sunday": [ 3, 15, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 464,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/with-the-father-1962.jpg',
          title: 'With the Father',
          artist: 'Tetyana Yablonska',
          year: '1962',
          rule: {
            "monday": [ 3, 15, 25, 2 ],
            "tuesday": [ 3, 14, 23, 2 ],
            "wednesday": [ 1, 11, 19, 21 ],
            "thursday": [ 29, 9, 19, 8 ],
            "friday": [ 28, 8, 18, 27 ],
            "saturday": [ 26, 5, 15, 23 ],
            "sunday": [ 24, 2, 14, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 465,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/wedding-1st-version-1963.jpg',
          title: 'Wedding (1st Version)',
          artist: 'Tetyana Yablonska',
          year: '1963',
          rule: {
            "monday": [ 24, 2, 14, 23 ],
            "tuesday": [ 3, 15, 25, 2 ],
            "wednesday": [ 3, 14, 23, 2 ],
            "thursday": [ 1, 11, 19, 21 ],
            "friday": [ 29, 9, 19, 8 ],
            "saturday": [ 28, 8, 18, 27 ],
            "sunday": [ 26, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 466,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/wedding-2nd-version-1964.jpg',
          title: 'Wedding (2nd Version)',
          artist: 'Tetyana Yablonska',
          year: '1964',
          rule: {
            "monday": [ 26, 5, 15, 23 ],
            "tuesday": [ 24, 2, 14, 23 ],
            "wednesday": [ 3, 15, 25, 2 ],
            "thursday": [ 3, 14, 23, 2 ],
            "friday": [ 1, 11, 19, 21 ],
            "saturday": [ 29, 9, 19, 8 ],
            "sunday": [ 28, 8, 18, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 467,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/summer-1965.jpeg',
          title: 'Summer',
          artist: 'Tetyana Yablonska',
          year: '1965',
          rule: {
            "monday": [ 28, 8, 18, 27 ],
            "tuesday": [ 26, 5, 15, 23 ],
            "wednesday": [ 24, 2, 14, 23 ],
            "thursday": [ 3, 15, 25, 2 ],
            "friday": [ 3, 14, 23, 2 ],
            "saturday": [ 1, 11, 19, 21 ],
            "sunday": [ 29, 9, 19, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 468,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/may-1965.jpg',
          title: 'May',
          artist: 'Tetyana Yablonska',
          year: '1965',
          rule: {
            "monday": [ 29, 9, 19, 8 ],
            "tuesday": [ 28, 8, 18, 27 ],
            "wednesday": [ 26, 5, 15, 23 ],
            "thursday": [ 24, 2, 14, 23 ],
            "friday": [ 3, 15, 25, 2 ],
            "saturday": [ 3, 14, 23, 2 ],
            "sunday": [ 1, 11, 19, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 469,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/life-ancestor-1966.jpg',
          title: 'Life (Ancestor)',
          artist: 'Tetyana Yablonska',
          year: '1966',
          rule: {
            "monday": [ 2, 12, 20, 22 ],
            "tuesday": [ 30, 10, 20, 9 ],
            "wednesday": [ 29, 9, 19, 28 ],
            "thursday": [ 27, 6, 16, 24 ],
            "friday": [ 25, 3, 15, 24 ],
            "saturday": [ 4, 16, 26, 3 ],
            "sunday": [ 4, 15, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 470,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/cucumber-harvesting-1966.jpg',
          title: 'Cucumber Harvesting',
          artist: 'Tetyana Yablonska',
          year: '1966',
          rule: {
            "monday": [ 4, 15, 24, 3 ],
            "tuesday": [ 2, 12, 20, 22 ],
            "wednesday": [ 30, 10, 20, 9 ],
            "thursday": [ 29, 9, 19, 28 ],
            "friday": [ 27, 6, 16, 24 ],
            "saturday": [ 25, 3, 15, 24 ],
            "sunday": [ 4, 16, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 471,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/youth-1969.jpg',
          title: 'Youth',
          artist: 'Tetyana Yablonska',
          year: '1969',
          rule: {
            "monday": [ 4, 16, 26, 3 ],
            "tuesday": [ 4, 15, 24, 3 ],
            "wednesday": [ 2, 12, 20, 22 ],
            "thursday": [ 30, 10, 20, 9 ],
            "friday": [ 29, 9, 19, 28 ],
            "saturday": [ 27, 6, 16, 24 ],
            "sunday": [ 25, 3, 15, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 472,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/life-is-going-on-1970.jpg',
          title: 'Life is Going on',
          artist: 'Tetyana Yablonska',
          year: '1970',
          rule: {
            "monday": [ 25, 3, 15, 24 ],
            "tuesday": [ 4, 16, 26, 3 ],
            "wednesday": [ 4, 15, 24, 3 ],
            "thursday": [ 2, 12, 20, 22 ],
            "friday": [ 30, 10, 20, 9 ],
            "saturday": [ 29, 9, 19, 28 ],
            "sunday": [ 27, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 473,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/evening-old-florence-1973.jpg',
          title: 'Evening. Old Florence',
          artist: 'Tetyana Yablonska',
          year: '1973',
          rule: {
            "monday": [ 27, 6, 16, 24 ],
            "tuesday": [ 25, 3, 15, 24 ],
            "wednesday": [ 4, 16, 26, 3 ],
            "thursday": [ 4, 15, 24, 3 ],
            "friday": [ 2, 12, 20, 22 ],
            "saturday": [ 30, 10, 20, 9 ],
            "sunday": [ 29, 9, 19, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 474,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/on-the-bank-1974.jpg',
          title: 'On the Bank',
          artist: 'Tetyana Yablonska',
          year: '1974',
          rule: {
            "monday": [ 29, 9, 19, 28 ],
            "tuesday": [ 27, 6, 16, 24 ],
            "wednesday": [ 25, 3, 15, 24 ],
            "thursday": [ 4, 16, 26, 3 ],
            "friday": [ 4, 15, 24, 3 ],
            "saturday": [ 2, 12, 20, 22 ],
            "sunday": [ 30, 10, 20, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 475,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/silence-1975.jpg',
          title: 'Silence',
          artist: 'Tetyana Yablonska',
          year: '1975',
          rule: {
            "monday": [ 30, 10, 20, 9 ],
            "tuesday": [ 29, 9, 19, 28 ],
            "wednesday": [ 27, 6, 16, 24 ],
            "thursday": [ 25, 3, 15, 24 ],
            "friday": [ 4, 16, 26, 3 ],
            "saturday": [ 4, 15, 24, 3 ],
            "sunday": [ 2, 12, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 476,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/linum-study-1975.jpg',
          title: 'Linum. Study',
          artist: 'Tetyana Yablonska',
          year: '1975',
          rule: {
            "monday": [ 3, 13, 21, 23 ],
            "tuesday": [ 31, 11, 21, 10 ],
            "wednesday": [ 30, 10, 20, 29 ],
            "thursday": [ 28, 7, 17, 25 ],
            "friday": [ 26, 4, 16, 25 ],
            "saturday": [ 5, 17, 27, 4 ],
            "sunday": [ 5, 16, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 477,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/winter-at-old-kiev-1976.jpg',
          title: 'Winter at Old Kiev',
          artist: 'Tetyana Yablonska',
          year: '1976',
          rule: {
            "monday": [ 5, 16, 25, 4 ],
            "tuesday": [ 3, 13, 21, 23 ],
            "wednesday": [ 31, 11, 21, 10 ],
            "thursday": [ 30, 10, 20, 29 ],
            "friday": [ 28, 7, 17, 25 ],
            "saturday": [ 26, 4, 16, 25 ],
            "sunday": [ 5, 17, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 478,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/rome-trajan-s-forum-1977.jpg',
          title: 'Rome. Trajan\'s Forum',
          artist: 'Tetyana Yablonska',
          year: '1977',
          rule: {
            "monday": [ 5, 17, 27, 4 ],
            "tuesday": [ 5, 16, 25, 4 ],
            "wednesday": [ 3, 13, 21, 23 ],
            "thursday": [ 31, 11, 21, 10 ],
            "friday": [ 30, 10, 20, 29 ],
            "saturday": [ 28, 7, 17, 25 ],
            "sunday": [ 26, 4, 16, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 479,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/linum-1977.jpg',
          title: 'Linum',
          artist: 'Tetyana Yablonska',
          year: '1977',
          rule: {
            "monday": [ 26, 4, 16, 25 ],
            "tuesday": [ 5, 17, 27, 4 ],
            "wednesday": [ 5, 16, 25, 4 ],
            "thursday": [ 3, 13, 21, 23 ],
            "friday": [ 31, 11, 21, 10 ],
            "saturday": [ 30, 10, 20, 29 ],
            "sunday": [ 28, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 480,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/winter-landscape-1984.jpg',
          title: 'Winter Landscape',
          artist: 'Tetyana Yablonska',
          year: '1984',
          rule: {
            "monday": [ 28, 7, 17, 25 ],
            "tuesday": [ 26, 4, 16, 25 ],
            "wednesday": [ 5, 17, 27, 4 ],
            "thursday": [ 5, 16, 25, 4 ],
            "friday": [ 3, 13, 21, 23 ],
            "saturday": [ 31, 11, 21, 10 ],
            "sunday": [ 30, 10, 20, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 481,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/vaccination-2010.jpg',
          title: 'Vaccination',
          artist: 'Sun Mu',
          year: '2010',
          rule: {
            "monday": [ 30, 10, 20, 29 ],
            "tuesday": [ 28, 7, 17, 25 ],
            "wednesday": [ 26, 4, 16, 25 ],
            "thursday": [ 5, 17, 27, 4 ],
            "friday": [ 5, 16, 25, 4 ],
            "saturday": [ 3, 13, 21, 23 ],
            "sunday": [ 31, 11, 21, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 482,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/squeal-2010.jpg',
          title: 'Squeal',
          artist: 'Sun Mu',
          year: '2010',
          rule: {
            "monday": [ 31, 11, 21, 10 ],
            "tuesday": [ 30, 10, 20, 29 ],
            "wednesday": [ 28, 7, 17, 25 ],
            "thursday": [ 26, 4, 16, 25 ],
            "friday": [ 5, 17, 27, 4 ],
            "saturday": [ 5, 16, 25, 4 ],
            "sunday": [ 3, 13, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 483,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-2011.jpeg',
          title: 'Untitled',
          artist: 'Sun Mu',
          year: '2011',
          rule: {
            "monday": [ 4, 14, 22, 24 ],
            "tuesday": [ 1, 12, 22, 11 ],
            "wednesday": [ 31, 11, 21, 30 ],
            "thursday": [ 29, 8, 18, 26 ],
            "friday": [ 27, 5, 17, 26 ],
            "saturday": [ 6, 18, 28, 5 ],
            "sunday": [ 6, 17, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 484,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/sun-mu-2011.jpeg',
          title: 'Sun Mu',
          artist: 'Sun Mu',
          year: '2011',
          rule: {
            "monday": [ 6, 17, 26, 5 ],
            "tuesday": [ 4, 14, 22, 24 ],
            "wednesday": [ 1, 12, 22, 11 ],
            "thursday": [ 31, 11, 21, 30 ],
            "friday": [ 29, 8, 18, 26 ],
            "saturday": [ 27, 5, 17, 26 ],
            "sunday": [ 6, 18, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 485,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/with-you-2012.jpg',
          title: 'With You',
          artist: 'Sun Mu',
          year: '2012',
          rule: {
            "monday": [ 6, 18, 28, 5 ],
            "tuesday": [ 6, 17, 26, 5 ],
            "wednesday": [ 4, 14, 22, 24 ],
            "thursday": [ 1, 12, 22, 11 ],
            "friday": [ 31, 11, 21, 30 ],
            "saturday": [ 29, 8, 18, 26 ],
            "sunday": [ 27, 5, 17, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 486,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-7-2013.jpeg',
          title: 'Untitled',
          artist: 'Sun Mu',
          year: '2013',
          rule: {
            "monday": [ 27, 5, 17, 26 ],
            "tuesday": [ 6, 18, 28, 5 ],
            "wednesday": [ 6, 17, 26, 5 ],
            "thursday": [ 4, 14, 22, 24 ],
            "friday": [ 1, 12, 22, 11 ],
            "saturday": [ 31, 11, 21, 30 ],
            "sunday": [ 29, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 487,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/ideology-2013.jpg',
          title: 'Ideology',
          artist: 'Sun Mu',
          year: '2013',
          rule: {
            "monday": [ 29, 8, 18, 26 ],
            "tuesday": [ 27, 5, 17, 26 ],
            "wednesday": [ 6, 18, 28, 5 ],
            "thursday": [ 6, 17, 26, 5 ],
            "friday": [ 4, 14, 22, 24 ],
            "saturday": [ 1, 12, 22, 11 ],
            "sunday": [ 31, 11, 21, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 488,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-2015.jpeg',
          title: 'Untitled',
          artist: 'Sun Mu',
          year: '2015',
          rule: {
            "monday": [ 31, 11, 21, 30 ],
            "tuesday": [ 29, 8, 18, 26 ],
            "wednesday": [ 27, 5, 17, 26 ],
            "thursday": [ 6, 18, 28, 5 ],
            "friday": [ 6, 17, 26, 5 ],
            "saturday": [ 4, 14, 22, 24 ],
            "sunday": [ 1, 12, 22, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 489,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/my-home-landscape-2016.jpg',
          title: 'My Home Landscape',
          artist: 'Sun Mu',
          year: '2016',
          rule: {
            "monday": [ 1, 12, 22, 11 ],
            "tuesday": [ 31, 11, 21, 30 ],
            "wednesday": [ 29, 8, 18, 26 ],
            "thursday": [ 27, 5, 17, 26 ],
            "friday": [ 6, 18, 28, 5 ],
            "saturday": [ 6, 17, 26, 5 ],
            "sunday": [ 4, 14, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 490,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/peace.png',
          title: 'Peace',
          artist: 'Sun Mu',
          year: '?',
          rule: {
            "monday": [ 5, 15, 23, 25 ],
            "tuesday": [ 2, 13, 23, 12 ],
            "wednesday": [ 1, 12, 22, 31 ],
            "thursday": [ 30, 9, 19, 27 ],
            "friday": [ 28, 6, 18, 27 ],
            "saturday": [ 7, 19, 29, 6 ],
            "sunday": [ 7, 18, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 491,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-mu.jpg',
          title: 'Untitled',
          artist: 'Sun Mu',
          year: '?',
          rule: {
            "monday": [ 7, 18, 27, 6 ],
            "tuesday": [ 5, 15, 23, 25 ],
            "wednesday": [ 2, 13, 23, 12 ],
            "thursday": [ 1, 12, 22, 31 ],
            "friday": [ 30, 9, 19, 27 ],
            "saturday": [ 28, 6, 18, 27 ],
            "sunday": [ 7, 19, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 492,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1-mu.jpg',
          title: 'Untitled',
          artist: 'Sun Mu',
          year: '?',
          rule: {
            "monday": [ 7, 19, 29, 6 ],
            "tuesday": [ 7, 18, 27, 6 ],
            "wednesday": [ 5, 15, 23, 25 ],
            "thursday": [ 2, 13, 23, 12 ],
            "friday": [ 1, 12, 22, 31 ],
            "saturday": [ 30, 9, 19, 27 ],
            "sunday": [ 28, 6, 18, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 493,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-6-mu.jpg`',
          title: 'Untitled',
          artist: 'Sun Mu',
          year: '?',
          rule: {
            "monday": [ 28, 6, 18, 27 ],
            "tuesday": [ 7, 19, 29, 6 ],
            "wednesday": [ 7, 18, 27, 6 ],
            "thursday": [ 5, 15, 23, 25 ],
            "friday": [ 2, 13, 23, 12 ],
            "saturday": [ 1, 12, 22, 31 ],
            "sunday": [ 30, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 494,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-5-mu.jpg',
          title: 'Untitled',
          artist: 'Sun Mu',
          year: '?',
          rule: {
            "monday": [ 30, 9, 19, 27 ],
            "tuesday": [ 28, 6, 18, 27 ],
            "wednesday": [ 7, 19, 29, 6 ],
            "thursday": [ 7, 18, 27, 6 ],
            "friday": [ 5, 15, 23, 25 ],
            "saturday": [ 2, 13, 23, 12 ],
            "sunday": [ 1, 12, 22, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 495,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-4(1)-mu.jpg',
          title: 'Untitled',
          artist: 'Sun Mu',
          year: '?',
          rule: {
            "monday": [ 1, 12, 22, 31 ],
            "tuesday": [ 30, 9, 19, 27 ],
            "wednesday": [ 28, 6, 18, 27 ],
            "thursday": [ 7, 19, 29, 6 ],
            "friday": [ 7, 18, 27, 6 ],
            "saturday": [ 5, 15, 23, 25 ],
            "sunday": [ 2, 13, 23, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 496,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-3.jpg',
          title: 'Untitled',
          artist: 'Sun Mu',
          year: '?',
          rule: {
            "monday": [ 2, 13, 23, 12 ],
            "tuesday": [ 1, 12, 22, 31 ],
            "wednesday": [ 30, 9, 19, 27 ],
            "thursday": [ 28, 6, 18, 27 ],
            "friday": [ 7, 19, 29, 6 ],
            "saturday": [ 7, 18, 27, 6 ],
            "sunday": [ 5, 15, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 497,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-2.jpg',
          title: 'Untitled',
          artist: 'Sun Mu',
          year: '2018',
          rule: {
            "monday": [ 6, 16, 24, 26 ],
            "tuesday": [ 3, 14, 24, 13 ],
            "wednesday": [ 2, 13, 23, 1 ],
            "thursday": [ 31, 10, 20, 28 ],
            "friday": [ 29, 7, 19, 28 ],
            "saturday": [ 8, 20, 30, 7 ],
            "sunday": [ 8, 19, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 498,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/singing-girl.jpg',
          title: 'Singing Girl',
          artist: 'Sun Mu',
          year: '?',
          rule: {
            "monday": [ 8, 19, 28, 7 ],
            "tuesday": [ 6, 16, 24, 26 ],
            "wednesday": [ 3, 14, 24, 13 ],
            "thursday": [ 2, 13, 23, 1 ],
            "friday": [ 31, 10, 20, 28 ],
            "saturday": [ 29, 7, 19, 28 ],
            "sunday": [ 8, 20, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 499,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/i-am-sun-mu.jpg',
          title: 'I Am Sun Mu',
          artist: 'Sun Mu',
          year: '?',
          rule: {
            "monday": [ 8, 20, 30, 7 ],
            "tuesday": [ 8, 19, 28, 7 ],
            "wednesday": [ 6, 16, 24, 26 ],
            "thursday": [ 3, 14, 24, 13 ],
            "friday": [ 2, 13, 23, 1 ],
            "saturday": [ 31, 10, 20, 28 ],
            "sunday": [ 29, 7, 19, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 500,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/girl.png',
          title: 'Nothing to envy in the world',
          artist: 'Sun Mu',
          year: '2015',
          rule: {
            "monday": [ 29, 7, 19, 28 ],
            "tuesday": [ 8, 20, 30, 7 ],
            "wednesday": [ 8, 19, 28, 7 ],
            "thursday": [ 6, 16, 24, 26 ],
            "friday": [ 3, 14, 24, 13 ],
            "saturday": [ 2, 13, 23, 1 ],
            "sunday": [ 31, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 501,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/all-europe-of-hitler-and-ribbentrop-about-ukrainian-bread-and-german-belt-1941.jpg',
          title: '“All Europe” of Hitler and Ribbentrop/About Ukrainian bread and German belt',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 31, 10, 20, 28 ],
            "tuesday": [ 29, 7, 19, 28 ],
            "wednesday": [ 8, 20, 30, 7 ],
            "thursday": [ 8, 19, 28, 7 ],
            "friday": [ 6, 16, 24, 26 ],
            "saturday": [ 3, 14, 24, 13 ],
            "sunday": [ 2, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 502,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/an-anthropophagus-vegetarian-or-the-two-sides-of-a-medal-1941.jpg',
          title: 'An anthropophagus-vegetarian or the two sides of a medal',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 2, 13, 23, 1 ],
            "tuesday": [ 31, 10, 20, 28 ],
            "wednesday": [ 29, 7, 19, 28 ],
            "thursday": [ 8, 20, 30, 7 ],
            "friday": [ 8, 19, 28, 7 ],
            "saturday": [ 6, 16, 24, 26 ],
            "sunday": [ 3, 14, 24, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 503,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/arab-tales-of-german-high-command-or-the-thousand-and-one-lies-1941.jpg',
          title: 'Arab tales of German High Command or One Thousand and One Lies',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 3, 14, 24, 13 ],
            "tuesday": [ 2, 13, 23, 1 ],
            "wednesday": [ 31, 10, 20, 28 ],
            "thursday": [ 29, 7, 19, 28 ],
            "friday": [ 8, 20, 30, 7 ],
            "saturday": [ 8, 19, 28, 7 ],
            "sunday": [ 6, 16, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 504,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/goebbels-goldmine-1941.jpg',
          title: 'Goebbels\' goldmine',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 7, 17, 25, 27 ],
            "tuesday": [ 4, 15, 25, 14 ],
            "wednesday": [ 3, 14, 24, 2 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 8, 20, 29 ],
            "saturday": [ 9, 21, 31, 8 ],
            "sunday": [ 9, 20, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 505,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/greedy-enemies-are-looking-1941.jpg',
          title: 'Greedy enemies are looking',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 9, 20, 29, 8 ],
            "tuesday": [ 7, 17, 25, 27 ],
            "wednesday": [ 4, 15, 25, 14 ],
            "thursday": [ 3, 14, 24, 2 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 8, 20, 29 ],
            "sunday": [ 9, 21, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 506,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/harvesting-is-a-severe-blow-at-the-enemy-1941.jpg',
          title: 'Harvesting is a severe blow at the enemy!',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 9, 21, 31, 8 ],
            "tuesday": [ 9, 20, 29, 8 ],
            "wednesday": [ 7, 17, 25, 27 ],
            "thursday": [ 4, 15, 25, 14 ],
            "friday": [ 3, 14, 24, 2 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 8, 20, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 507,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/lady-s-fashion-in-germany-winter-season-1941.jpg',
          title: 'Lady\'s fashion in Germany. Winter season.',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 30, 8, 20, 29 ],
            "tuesday": [ 9, 21, 31, 8 ],
            "wednesday": [ 9, 20, 29, 8 ],
            "thursday": [ 7, 17, 25, 27 ],
            "friday": [ 4, 15, 25, 14 ],
            "saturday": [ 3, 14, 24, 2 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 508,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/napoleon-was-defeated-that-will-be-the-case-of-the-swelled-headed-hitler-1941.jpg',
          title: 'Napoleon was defeated, so will be the arrogant Hitler!',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 8, 20, 29 ],
            "wednesday": [ 9, 21, 31, 8 ],
            "thursday": [ 9, 20, 29, 8 ],
            "friday": [ 7, 17, 25, 27 ],
            "saturday": [ 4, 15, 25, 14 ],
            "sunday": [ 3, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 509,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/pliers-to-clamp-1941.jpg',
          title: 'Claws in Claw',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 3, 14, 24, 2 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 8, 20, 29 ],
            "thursday": [ 9, 21, 31, 8 ],
            "friday": [ 9, 20, 29, 8 ],
            "saturday": [ 7, 17, 25, 27 ],
            "sunday": [ 4, 15, 25, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 510,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/splendidly-and-desperately-do-we-fight-the-issue-of-suvorov-and-chapayev-do-it-all-right-1941.jpg',
          title: 'Splendidly and desperately do we fight — the issue of Suvorov and Chapayev do it all right!',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 4, 15, 25, 14 ],
            "tuesday": [ 3, 14, 24, 2 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 8, 20, 29 ],
            "friday": [ 9, 21, 31, 8 ],
            "saturday": [ 9, 20, 29, 8 ],
            "sunday": [ 7, 17, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 511,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-fascist-kennel-1941.jpg',
          title: 'The Nazi Kennel',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 8, 18, 26, 28 ],
            "tuesday": [ 5, 16, 26, 15 ],
            "wednesday": [ 4, 15, 25, 3 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 31, 9, 21, 30 ],
            "saturday": [ 10, 22, 1, 9 ],
            "sunday": [ 10, 21, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 512,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-fascist-kennel-1941-1.jpg',
          title: 'The Nazi Kennel',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 10, 21, 30, 9 ],
            "tuesday": [ 8, 18, 26, 28 ],
            "wednesday": [ 5, 16, 26, 15 ],
            "thursday": [ 4, 15, 25, 3 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 31, 9, 21, 30 ],
            "sunday": [ 10, 22, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 513,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-moscow-kalatch-is-not-of-their-batch-1941.jpg',
          title: 'The Moscow kalatch is not of their batch…',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 10, 22, 1, 9 ],
            "tuesday": [ 10, 21, 30, 9 ],
            "wednesday": [ 8, 18, 26, 28 ],
            "thursday": [ 5, 16, 26, 15 ],
            "friday": [ 4, 15, 25, 3 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 31, 9, 21, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 514,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1941.jpg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 31, 9, 21, 30 ],
            "tuesday": [ 10, 22, 1, 9 ],
            "wednesday": [ 10, 21, 30, 9 ],
            "thursday": [ 8, 18, 26, 28 ],
            "friday": [ 5, 16, 26, 15 ],
            "saturday": [ 4, 15, 25, 3 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 515,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1941-1.jpg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 31, 9, 21, 30 ],
            "wednesday": [ 10, 22, 1, 9 ],
            "thursday": [ 10, 21, 30, 9 ],
            "friday": [ 8, 18, 26, 28 ],
            "saturday": [ 5, 16, 26, 15 ],
            "sunday": [ 4, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 516,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1941-2.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 4, 15, 25, 3 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 31, 9, 21, 30 ],
            "thursday": [ 10, 22, 1, 9 ],
            "friday": [ 10, 21, 30, 9 ],
            "saturday": [ 8, 18, 26, 28 ],
            "sunday": [ 5, 16, 26, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 517,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1941-3.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 5, 16, 26, 15 ],
            "tuesday": [ 4, 15, 25, 3 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 31, 9, 21, 30 ],
            "friday": [ 10, 22, 1, 9 ],
            "saturday": [ 10, 21, 30, 9 ],
            "sunday": [ 8, 18, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 518,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/we-repay-1941.jpeg',
          title: 'We repay',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 9, 19, 27, 29 ],
            "tuesday": [ 6, 17, 27, 16 ],
            "wednesday": [ 5, 16, 26, 4 ],
            "thursday": [ 3, 13, 23, 31 ],
            "friday": [ 1, 10, 22, 31 ],
            "saturday": [ 11, 23, 2, 10 ],
            "sunday": [ 11, 22, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 519,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/wipe-fascism-off-the-face-of-the-earth-front-page-of-the-moscow-news-27th-june-1941-1941.jpeg',
          title: 'Wipe Fascism off the Face of the Earth! (Front page of the \'Moscow News\', 27th June 1941)',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 11, 22, 31, 10 ],
            "tuesday": [ 9, 19, 27, 29 ],
            "wednesday": [ 6, 17, 27, 16 ],
            "thursday": [ 5, 16, 26, 4 ],
            "friday": [ 3, 13, 23, 31 ],
            "saturday": [ 1, 10, 22, 31 ],
            "sunday": [ 11, 23, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 520,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/with-a-spear-our-foe-is-done-then-we-did-him-with-a-gun-as-before-with-steel-we-fought-him-so-1941.jpeg',
          title: 'With a spear our foe is done, then we did him with a gun, as before with steel we fought him, so we smash him where we spot him!',
          artist: 'Kukryniksy',
          year: '1941',
          rule: {
            "monday": [ 11, 23, 2, 10 ],
            "tuesday": [ 11, 22, 31, 10 ],
            "wednesday": [ 9, 19, 27, 29 ],
            "thursday": [ 6, 17, 27, 16 ],
            "friday": [ 5, 16, 26, 4 ],
            "saturday": [ 3, 13, 23, 31 ],
            "sunday": [ 1, 10, 22, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 521,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/a-lie-thrower-the-tass-window-625-1942.jpeg',
          title: 'A lie thrower (The TASS Window №625)',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 1, 10, 22, 31 ],
            "tuesday": [ 11, 23, 2, 10 ],
            "wednesday": [ 11, 22, 31, 10 ],
            "thursday": [ 9, 19, 27, 29 ],
            "friday": [ 6, 17, 27, 16 ],
            "saturday": [ 5, 16, 26, 4 ],
            "sunday": [ 3, 13, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 522,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/blitz-flu-1942.jpeg',
          title: 'Blitz-sick',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 3, 13, 23, 31 ],
            "tuesday": [ 1, 10, 22, 31 ],
            "wednesday": [ 11, 23, 2, 10 ],
            "thursday": [ 11, 22, 31, 10 ],
            "friday": [ 9, 19, 27, 29 ],
            "saturday": [ 6, 17, 27, 16 ],
            "sunday": [ 5, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 523,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/blizzard-front-1942.jpeg',
          title: 'Blizzard front',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 5, 16, 26, 4 ],
            "tuesday": [ 3, 13, 23, 31 ],
            "wednesday": [ 1, 10, 22, 31 ],
            "thursday": [ 11, 23, 2, 10 ],
            "friday": [ 11, 22, 31, 10 ],
            "saturday": [ 9, 19, 27, 29 ],
            "sunday": [ 6, 17, 27, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 524,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/bloody-spots-1942.jpeg',
          title: 'Bloody spots',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 6, 17, 27, 16 ],
            "tuesday": [ 5, 16, 26, 4 ],
            "wednesday": [ 3, 13, 23, 31 ],
            "thursday": [ 1, 10, 22, 31 ],
            "friday": [ 11, 23, 2, 10 ],
            "saturday": [ 11, 22, 31, 10 ],
            "sunday": [ 9, 19, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 525,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/jazz-band-wobbly-axis-1942.jpeg',
          title: 'Jazz Band \'Wobbly Axis\'',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 10, 20, 28, 30 ],
            "tuesday": [ 7, 18, 28, 17 ],
            "wednesday": [ 6, 17, 27, 5 ],
            "thursday": [ 4, 14, 24, 1 ],
            "friday": [ 2, 11, 23, 1 ],
            "saturday": [ 12, 24, 3, 11 ],
            "sunday": [ 12, 23, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 526,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/mournful-emergency-1942.jpeg',
          title: 'Woemergency',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 12, 23, 1, 11 ],
            "tuesday": [ 10, 20, 28, 30 ],
            "wednesday": [ 7, 18, 28, 17 ],
            "thursday": [ 6, 17, 27, 5 ],
            "friday": [ 4, 14, 24, 1 ],
            "saturday": [ 2, 11, 23, 1 ],
            "sunday": [ 12, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 527,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/no-wonder-the-whole-of-russia-remembers-the-borodino-day-1942.jpeg',
          title: 'Old-timers talk about some frays, And they remember well those days! With cause all Russia fashions lays About Borodino!',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 12, 24, 3, 11 ],
            "tuesday": [ 12, 23, 1, 11 ],
            "wednesday": [ 10, 20, 28, 30 ],
            "thursday": [ 7, 18, 28, 17 ],
            "friday": [ 6, 17, 27, 5 ],
            "saturday": [ 4, 14, 24, 1 ],
            "sunday": [ 2, 11, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 528,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/only-a-few-months-looking-to-the-faces-1942.jpeg',
          title: 'Only a few months have passed (Looking to the faces)',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 2, 11, 23, 1 ],
            "tuesday": [ 12, 24, 3, 11 ],
            "wednesday": [ 12, 23, 1, 11 ],
            "thursday": [ 10, 20, 28, 30 ],
            "friday": [ 7, 18, 28, 17 ],
            "saturday": [ 6, 17, 27, 5 ],
            "sunday": [ 4, 14, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 529,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/speeches-incoherent-tired-eyes-1942.jpeg',
          title: 'Speeches incoherent, tired eyes',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 4, 14, 24, 1 ],
            "tuesday": [ 2, 11, 23, 1 ],
            "wednesday": [ 12, 24, 3, 11 ],
            "thursday": [ 12, 23, 1, 11 ],
            "friday": [ 10, 20, 28, 30 ],
            "saturday": [ 7, 18, 28, 17 ],
            "sunday": [ 6, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 530,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-school-of-the-brutes-leaving-certificate-1942.jpeg',
          title: 'Animal Certificate of Education',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 6, 17, 27, 5 ],
            "tuesday": [ 4, 14, 24, 1 ],
            "wednesday": [ 2, 11, 23, 1 ],
            "thursday": [ 12, 24, 3, 11 ],
            "friday": [ 12, 23, 1, 11 ],
            "saturday": [ 10, 20, 28, 30 ],
            "sunday": [ 7, 18, 28, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 531,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/the-vile-brute-and-it-s-band-be-hanged-on-the-lampstand-the-tass-window-546-546a-1942.jpeg',
          title: 'The vile brute and it`s band be hanged on the lampstand (The TASS Window №546/546a)',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 7, 18, 28, 17 ],
            "tuesday": [ 6, 17, 27, 5 ],
            "wednesday": [ 4, 14, 24, 1 ],
            "thursday": [ 2, 11, 23, 1 ],
            "friday": [ 12, 24, 3, 11 ],
            "saturday": [ 12, 23, 1, 11 ],
            "sunday": [ 10, 20, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 532,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/tower-chamber-s-1942.jpeg',
          title: 'Teremok',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 11, 21, 29, 31 ],
            "tuesday": [ 8, 19, 29, 18 ],
            "wednesday": [ 7, 18, 28, 6 ],
            "thursday": [ 5, 15, 25, 2 ],
            "friday": [ 3, 12, 24, 2 ],
            "saturday": [ 13, 25, 4, 12 ],
            "sunday": [ 13, 24, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 533,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1942.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 13, 24, 2, 12 ],
            "tuesday": [ 11, 21, 29, 31 ],
            "wednesday": [ 8, 19, 29, 18 ],
            "thursday": [ 7, 18, 28, 6 ],
            "friday": [ 5, 15, 25, 2 ],
            "saturday": [ 3, 12, 24, 2 ],
            "sunday": [ 13, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 534,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1942-1.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 13, 25, 4, 12 ],
            "tuesday": [ 13, 24, 2, 12 ],
            "wednesday": [ 11, 21, 29, 31 ],
            "thursday": [ 8, 19, 29, 18 ],
            "friday": [ 7, 18, 28, 6 ],
            "saturday": [ 5, 15, 25, 2 ],
            "sunday": [ 3, 12, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 535,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1942-2.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 3, 12, 24, 2 ],
            "tuesday": [ 13, 25, 4, 12 ],
            "wednesday": [ 13, 24, 2, 12 ],
            "thursday": [ 11, 21, 29, 31 ],
            "friday": [ 8, 19, 29, 18 ],
            "saturday": [ 7, 18, 28, 6 ],
            "sunday": [ 5, 15, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 536,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1942-3.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 5, 15, 25, 2 ],
            "tuesday": [ 3, 12, 24, 2 ],
            "wednesday": [ 13, 25, 4, 12 ],
            "thursday": [ 13, 24, 2, 12 ],
            "friday": [ 11, 21, 29, 31 ],
            "saturday": [ 8, 19, 29, 18 ],
            "sunday": [ 7, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 537,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1942-4.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 7, 18, 28, 6 ],
            "tuesday": [ 5, 15, 25, 2 ],
            "wednesday": [ 3, 12, 24, 2 ],
            "thursday": [ 13, 25, 4, 12 ],
            "friday": [ 13, 24, 2, 12 ],
            "saturday": [ 11, 21, 29, 31 ],
            "sunday": [ 8, 19, 29, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 538,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1942-5.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 8, 19, 29, 18 ],
            "tuesday": [ 7, 18, 28, 6 ],
            "wednesday": [ 5, 15, 25, 2 ],
            "thursday": [ 3, 12, 24, 2 ],
            "friday": [ 13, 25, 4, 12 ],
            "saturday": [ 13, 24, 2, 12 ],
            "sunday": [ 11, 21, 29, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 539,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1942-6.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 12, 22, 30, 1 ],
            "tuesday": [ 9, 20, 30, 19 ],
            "wednesday": [ 8, 19, 29, 7 ],
            "thursday": [ 6, 16, 26, 3 ],
            "friday": [ 4, 13, 25, 3 ],
            "saturday": [ 14, 26, 5, 13 ],
            "sunday": [ 14, 25, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 540,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1942-7.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 14, 25, 3, 13 ],
            "tuesday": [ 12, 22, 30, 1 ],
            "wednesday": [ 9, 20, 30, 19 ],
            "thursday": [ 8, 19, 29, 7 ],
            "friday": [ 6, 16, 26, 3 ],
            "saturday": [ 4, 13, 25, 3 ],
            "sunday": [ 14, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 541,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1942-8.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 14, 26, 5, 13 ],
            "tuesday": [ 14, 25, 3, 13 ],
            "wednesday": [ 12, 22, 30, 1 ],
            "thursday": [ 9, 20, 30, 19 ],
            "friday": [ 8, 19, 29, 7 ],
            "saturday": [ 6, 16, 26, 3 ],
            "sunday": [ 4, 13, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 542,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1942-9.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 4, 13, 25, 3 ],
            "tuesday": [ 14, 26, 5, 13 ],
            "wednesday": [ 14, 25, 3, 13 ],
            "thursday": [ 12, 22, 30, 1 ],
            "friday": [ 9, 20, 30, 19 ],
            "saturday": [ 8, 19, 29, 7 ],
            "sunday": [ 6, 16, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 543,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1942-10.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 6, 16, 26, 3 ],
            "tuesday": [ 4, 13, 25, 3 ],
            "wednesday": [ 14, 26, 5, 13 ],
            "thursday": [ 14, 25, 3, 13 ],
            "friday": [ 12, 22, 30, 1 ],
            "saturday": [ 9, 20, 30, 19 ],
            "sunday": [ 8, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 544,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 8, 19, 29, 7 ],
            "tuesday": [ 6, 16, 26, 3 ],
            "wednesday": [ 4, 13, 25, 3 ],
            "thursday": [ 14, 26, 5, 13 ],
            "friday": [ 14, 25, 3, 13 ],
            "saturday": [ 12, 22, 30, 1 ],
            "sunday": [ 9, 20, 30, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 545,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1942-12.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 9, 20, 30, 19 ],
            "tuesday": [ 8, 19, 29, 7 ],
            "wednesday": [ 6, 16, 26, 3 ],
            "thursday": [ 4, 13, 25, 3 ],
            "friday": [ 14, 26, 5, 13 ],
            "saturday": [ 14, 25, 3, 13 ],
            "sunday": [ 12, 22, 30, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 546,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/untitled-1942-13.jpeg',
          title: 'Untitled',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 13, 23, 31, 2 ],
            "tuesday": [ 10, 21, 31, 20 ],
            "wednesday": [ 9, 20, 30, 8 ],
            "thursday": [ 7, 17, 27, 4 ],
            "friday": [ 5, 14, 26, 4 ],
            "saturday": [ 15, 27, 6, 14 ],
            "sunday": [ 15, 26, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 547,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/young-fritz-1942.jpeg',
          title: 'Young Fritz',
          artist: 'Kukryniksy',
          year: '1942',
          rule: {
            "monday": [ 15, 26, 4, 14 ],
            "tuesday": [ 13, 23, 31, 2 ],
            "wednesday": [ 10, 21, 31, 20 ],
            "thursday": [ 9, 20, 30, 8 ],
            "friday": [ 7, 17, 27, 4 ],
            "saturday": [ 5, 14, 26, 4 ],
            "sunday": [ 15, 27, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 548,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/as-it-called-by-orel-so-it-echoed-in-rome-the-tass-window-779-1943.jpeg',
          title: 'As it called by Orel so it echoed in Rome (The TASS Window №779)',
          artist: 'Kukryniksy',
          year: '1943',
          rule: {
            "monday": [ 15, 27, 6, 14 ],
            "tuesday": [ 15, 26, 4, 14 ],
            "wednesday": [ 13, 23, 31, 2 ],
            "thursday": [ 10, 21, 31, 20 ],
            "friday": [ 9, 20, 30, 8 ],
            "saturday": [ 7, 17, 27, 4 ],
            "sunday": [ 5, 14, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 549,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/blitzkrieg-1943.jpeg',
          title: 'Blitzkrieg',
          artist: 'Kukryniksy',
          year: '1943',
          rule: {
            "monday": [ 5, 14, 26, 4 ],
            "tuesday": [ 15, 27, 6, 14 ],
            "wednesday": [ 15, 26, 4, 14 ],
            "thursday": [ 13, 23, 31, 2 ],
            "friday": [ 10, 21, 31, 20 ],
            "saturday": [ 9, 20, 30, 8 ],
            "sunday": [ 7, 17, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 550,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/may/coode-where-we-could-better-land-1943.jpeg',
          title: 'Where we sould better land?',
          artist: 'Kukryniksy',
          year: '1943',
          rule: {
            "monday": [ 7, 17, 27, 4 ],
            "tuesday": [ 5, 14, 26, 4 ],
            "wednesday": [ 15, 27, 6, 14 ],
            "thursday": [ 15, 26, 4, 14 ],
            "friday": [ 13, 23, 31, 2 ],
            "saturday": [ 10, 21, 31, 20 ],
            "sunday": [ 9, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_arts_id_seq', (SELECT MAX(id) FROM may_arts));");
    });
};
