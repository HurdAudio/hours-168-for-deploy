'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('march_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('march_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/rosso-2000.jpg',
          title: 'Rosso',
          artist: 'Carla Accardi',
          year: '2000',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 26, 5, 13, 23 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/golden-center-in-the-ladder-1970.jpg',
          title: 'Golden Center in the Ladder',
          artist: 'Alice Baber',
          year: '1970',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 26, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/rosa-viola-bianco-1968.jpg',
          title: 'Rosa-Viola-Bianco',
          artist: 'Carla Accardi',
          year: '1968',
          rule: {
            "monday": [ 26, 5, 13, 23 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 27, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/woman-with-a-cat-1901.jpg',
          title: 'Woman with a Cat',
          artist: 'Lilla Cabot Perry',
          year: '1901',
          rule: {
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 26, 5, 13, 23 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/red-yellow-and-blue-1960.jpg',
          title: 'Red, Yellow and Blue',
          artist: 'Alice Baber',
          year: '1960',
          rule: {
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 26, 5, 13, 23 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/blu-2000.jpg',
          title: 'Blu',
          artist: 'Carla Accardi',
          year: '2000',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 26, 5, 13, 23 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/1.jpg',
          title: 'The baptism of Christ',
          artist: 'Ende',
          year: '975',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/breastfeeding-mother-of-paula-modersohn-becker-1902.jpg',
          title: 'Breastfeeding mother of Paula Modersohn-Becker',
          artist: 'Paula Modersohn-Becker',
          year: '1902',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/espagnole.jpg',
          title: 'Espagnole',
          artist: 'Natalia Goncharova',
          year: '1914',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 27, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/blue-cats-with-butterflies.jpg',
          title: 'Blue Cats with Butterflies',
          artist: 'Laurel Burch',
          year: '?',
          rule: {
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/iracema.jpg',
          title: 'Iracema',
          artist: 'Lilian Greisse',
          year: '2017',
          rule: {
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-swirls-1977.jpg',
          title: 'Untitled (Swirls)',
          artist: 'Ruth Vollmer',
          year: '1977',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/self-portrait-1906.jpg',
          title: 'Self portrait',
          artist: 'Paula Modersohn-Becker',
          year: '1906',
          rule: {
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 27, 6, 14, 24 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/blue.jpg',
          title: 'What\'s under beauty?',
          artist: 'Tamara',
          year: '2015',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/flames-1918.jpg',
          title: 'Flames',
          artist: 'Uemura Shoen',
          year: '1918',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/st-michael-and-the-dragon.jpg',
          title: 'St. Michael and the dragon',
          artist: 'Claricia',
          year: '?',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/bild-no-84-1918.jpg',
          title: 'Bild no. 84',
          artist: 'Jacoba van Heemskerck',
          year: '1918',
          rule: {
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/stil-life.jpg',
          title: 'Stil life',
          artist: 'Mariam Aslamazian',
          year: '?',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/mr-bumps-and-his-monkey-by-walter-de-la-mare-1942.jpg',
          title: 'Mr. Bumps and His Monkey by Walter de la Mare',
          artist: 'Dorothy Lathrop',
          year: '1942',
          rule: {
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/composition-19.jpg',
          title: 'Composition 19',
          artist: 'Sonia Delaunay',
          year: '1930',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1951.jpg',
          title: 'Untitled',
          artist: 'Helen Frankenthaler',
          year: '1951',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/nude-girl-1910.jpg',
          title: 'Nude Girl',
          artist: 'Gwen John',
          year: '1909 - 1910',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-broken-column-1944.jpg',
          title: 'The Broken Column',
          artist: 'Frida Kahlo',
          year: '1944',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/repulse-bay.jpg',
          title: 'Repulse Bay',
          artist: 'Dominique Gonzalez-Foerster',
          year: '?',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-your-body-is-a-battleground-1989.jpg',
          title: 'Untitled (your body is a battleground)',
          artist: 'Barbara Kruger',
          year: '1989',
          rule: {
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/saint-catherine-of-alexandria-presumed-self-portrait-1589.jpg',
          title: 'Saint Catherine of Alexandria (presumed self-portrait)',
          artist: 'Barbara Longhi',
          year: '1589',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/dada-portrait-of-berenice-abbott-1926.jpg',
          title: 'Dada Portrait of Berenice Abbott',
          artist: 'Elsa von Freytag-Loringhoven',
          year: '1926',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/pere-ubu-1936.jpg',
          title: 'Pere Ubu',
          artist: 'Dora Maar',
          year: '1936',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/woman-with-a-cat-c-1970-4.jpg',
          title: 'Woman with a Cat',
          artist: 'Margit Selska',
          year: '1970',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/figures-in-a-garden-1981.jpg',
          title: 'Figures in a Garden',
          artist: 'Eileen Agar',
          year: '1979 - 1981',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 24, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-mahatmas-present-standing-point-series-ii-no-2a-1920.jpg',
          title: 'The Mahatmas Present Standing Point, Series II, No. 2a',
          artist: 'Hilma af Klint',
          year: '1920',
          rule: {
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 24, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/stilhet-1907.jpg',
          title: 'Stilhet',
          artist: 'Helene Schjerfbeck',
          year: '1907',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 14, 24, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/unknown-title-4.jpg',
          title: 'unknown title',
          artist: 'Seraphine Louis',
          year: '?',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 24, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/display-image-3.jpg',
          title: 'The Dinner-Hour',
          artist: 'Anna Ancher',
          year: 'c.1914',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 24, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/simpkin-at-the-tailor-s-bedside-1902.jpg',
          title: 'Simpkin at the Tailor\’s Bedside',
          artist: 'Beatrix Potter',
          year: '1902',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/going-up-1978.jpg',
          title: 'Going Up',
          artist: 'Betty Parsons',
          year: '1978',
          rule: {
            "monday": [ 5, 15, 25, 2 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/bog-ia-apelor.jpg',
          title: 'Richness of Waters',
          artist: 'Micaela Eleutheriade',
          year: '?',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 25, 2 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/windows-no-2-1965.jpg',
          title: 'Windows (no. 2)',
          artist: 'Alice Neel',
          year: '1965',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 15, 25, 2 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/diario(2).jpg',
          title: 'Diario',
          artist: 'Bice Lazzari',
          year: '?',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 25, 2 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/courtyard-in-nork.jpg',
          title: 'Courtyard in Nork',
          artist: 'Gohar Fermanyan',
          year: '?',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 25, 2 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/3-lemons-18x24in-2015-oil-svetlana-kanyo-2.jpg',
          title: 'Lemons',
          artist: 'Svetlana Kanyo',
          year: '2015',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 25, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-2005.jpg',
          title: 'Untitled',
          artist: 'Tea Jorjadze',
          year: '2005',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/monika-blatton-dzokejka.jpg',
          title: 'Lady Jockey',
          artist: 'Monica Blatton',
          year: '2009',
          rule: {
            "monday": [ 6, 16, 26, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/heaven.jpg',
          title: 'Heaven',
          artist: 'Dana Levin',
          year: '?',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 26, 3 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 10, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/family-tree-2012.jpg',
          title: 'Family Tree',
          artist: 'Wangechi Mutu',
          year: '2012',
          rule: {
            "monday": [ 1, 11, 10, 29 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 26, 3 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/hell.jpg',
          title: 'Hell',
          artist: 'Herrad of Landsberg',
          year: '?',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 10, 29 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 26, 3 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/pained-madonna.jpg',
          title: 'Pained Madonna',
          artist: 'Plautilla Nelli',
          year: '?',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 10, 29 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 26, 3 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/madonna-adoring-the-child-1605.jpg',
          title: 'Madonna Adoring the Child',
          artist: 'Barbara Longhi',
          year: '1605',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 10, 29 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 26, 3 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/sleeping-venus-1630.jpg',
          title: 'Sleeping Venus',
          artist: 'Artemisia Gentileschi',
          year: '1630',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 11, 30 ],
            "saturday": [ 8, 17, 26, 5 ],
            "sunday": [ 7, 17, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/flowers-in-a-vase-1654.jpg',
          title: 'Flowers in a vase',
          artist: 'Judith Leyster',
          year: '1654',
          rule: {
            "monday": [ 7, 17, 27, 4 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 11, 30 ],
            "sunday": [ 8, 17, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/lady-in-an-interior.jpg',
          title: 'Lady in an interior',
          artist: 'Thalia Flora-Karavia',
          year: '?',
          rule: {
            "monday": [ 8, 17, 26, 5 ],
            "tuesday": [ 7, 17, 27, 4 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 11, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/mother-marie-poussepin.jpg',
          title: 'Mother Marie Poussepin',
          artist: 'Gwen John',
          year: 'c.1915 - c.1920',
          rule: {
            "monday": [ 2, 12, 11, 30 ],
            "tuesday": [ 8, 17, 26, 5 ],
            "wednesday": [ 7, 17, 27, 4 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/book-of-foot-1996.jpg',
          title: 'Book of Foot',
          artist: 'Lenore Tawney',
          year: '1996',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 11, 30 ],
            "wednesday": [ 8, 17, 26, 5 ],
            "thursday": [ 7, 17, 27, 4 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-celestial-realm-1956.jpg',
          title: 'Untitled, Celestial Realm',
          artist: 'Lolo Soldevilla',
          year: '1956',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 11, 30 ],
            "thursday": [ 8, 17, 26, 5 ],
            "friday": [ 7, 17, 27, 4 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/seascape-1970-2.jpg',
          title: 'Seascape',
          artist: 'Margit Selska',
          year: '1970',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 11, 30 ],
            "friday": [ 8, 17, 26, 5 ],
            "saturday": [ 7, 17, 27, 4 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/portrait-of-philomene.jpg',
          title: 'Portrait of Philomene',
          artist: 'Sonia Delaunay',
          year: '1907',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 12, 31 ],
            "saturday": [ 9, 18, 27, 6 ],
            "sunday": [ 8, 18, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/full-moon-1980.jpg',
          title: 'Full Moon',
          artist: 'Louise Nevelson',
          year: '1980',
          rule: {
            "monday": [ 8, 18, 28, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 12, 31 ],
            "sunday": [ 9, 18, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/nu.jpg',
          title: 'Nu',
          artist: 'Tarsila do Amaral',
          year: '?',
          rule: {
            "monday": [ 9, 18, 27, 6 ],
            "tuesday": [ 8, 18, 28, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 12, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/dawn-1933.jpg',
          title: 'Dawn',
          artist: 'Laura Knight',
          year: '1933',
          rule: {
            "monday": [ 3, 13, 12, 31 ],
            "tuesday": [ 9, 18, 27, 6 ],
            "wednesday": [ 8, 18, 28, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/unknown-title-5.jpg',
          title: 'unknown title',
          artist: 'Lucia Demetriade Balacescu',
          year: '?',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 12, 31 ],
            "wednesday": [ 9, 18, 27, 6 ],
            "thursday": [ 8, 18, 28, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/asleep-1937.jpg',
          title: 'Asleep',
          artist: 'Toyen',
          year: '1937',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 12, 31 ],
            "thursday": [ 9, 18, 27, 6 ],
            "friday": [ 8, 18, 28, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/1441500527473.jpg',
          title: 'Self Portrait',
          artist: 'Guan Zilan',
          year: '?',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 12, 31 ],
            "friday": [ 9, 18, 27, 6 ],
            "saturday": [ 8, 18, 28, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/longing-1977.jpg',
          title: 'Longing',
          artist: 'Joyce Kozloff',
          year: '1977',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 13, 1 ],
            "saturday": [ 10, 19, 28, 7 ],
            "sunday": [ 9, 19, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/indian-church-1929.jpg',
          title: 'Indian Church',
          artist: 'Emily Carr',
          year: '1929',
          rule: {
            "monday": [ 9, 19, 29, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 13, 1 ],
            "sunday": [ 10, 19, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/artwork-images-424175658-163937-diane-arbus.jpg',
          title: 'Girl in a Shiny Dress',
          artist: 'Diane Arbus',
          year: '1967',
          rule: {
            "monday": [ 10, 19, 28, 7 ],
            "tuesday": [ 9, 19, 29, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 13, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/three-symbols-1930.jpg',
          title: 'Three Symbols',
          artist: 'Eileen Agar',
          year: '1930',
          rule: {
            "monday": [ 4, 14, 13, 1 ],
            "tuesday": [ 10, 19, 28, 7 ],
            "wednesday": [ 9, 19, 29, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/plastic-sphere-cube-triangle-red-2010.jpg',
          title: 'Plastic Sphere Cube Triangle Red',
          artist: 'Angela Bulloch',
          year: '2010',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 13, 1 ],
            "wednesday": [ 10, 19, 28, 7 ],
            "thursday": [ 9, 19, 29, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/woman-with-an-umbrella-1880.jpg',
          title: 'Woman with an Umbrella',
          artist: 'Marie Bracquemond',
          year: '1880',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 13, 1 ],
            "thursday": [ 10, 19, 28, 7 ],
            "friday": [ 9, 19, 29, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/bild-no-15-berg-und-schiffe-1914.jpg',
          title: 'Bild no. 15, Berg und Schiffe',
          artist: 'Jacoba van Heemskerck',
          year: '1914',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 14, 13, 1 ],
            "friday": [ 10, 19, 28, 7 ],
            "saturday": [ 9, 19, 29, 6 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/sans-titre-main-coquillage-1934.jpg',
          title: 'Sans Titre (Main-coquillage)',
          artist: 'Dora Maar',
          year: '1934',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 24, 2 ],
            "saturday": [ 11, 20, 29, 7 ],
            "sunday": [ 10, 20, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/ridiculous-portrait-1969.jpg',
          title: 'Ridiculous Portrait',
          artist: 'May Wilson',
          year: '1969',
          rule: {
            "monday": [ 10, 20, 30, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 24, 2 ],
            "sunday": [ 11, 20, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/a-little-boy-lost-1920-1.jpg',
          title: 'A Little Boy Lost',
          artist: 'Dorothy Lathrop',
          year: '1920',
          rule: {
            "monday": [ 11, 20, 29, 7 ],
            "tuesday": [ 10, 20, 30, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/reinforcements-troops-marching-1917.jpg',
          title: 'Reinforcements: Troops Marching',
          artist: 'Grace Cossington Smith',
          year: '1917',
          rule: {
            "monday": [ 5, 15, 24, 2 ],
            "tuesday": [ 11, 20, 29, 7 ],
            "wednesday": [ 10, 20, 30, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/self-portrait-with-violin-1928.jpg',
          title: 'Self-portrait with violin',
          artist: 'Antonietta Raphael',
          year: '1928',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 24, 2 ],
            "wednesday": [ 11, 20, 29, 7 ],
            "thursday": [ 10, 20, 30, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/musical-chairs-1951.jpg',
          title: 'Musical Chairs',
          artist: 'Dorothea Tanning',
          year: '1951',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 15, 24, 2 ],
            "thursday": [ 11, 20, 29, 7 ],
            "friday": [ 10, 20, 30, 7 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/upper-east-side.jpg',
          title: 'Upper East Side',
          artist: 'Hai-Hsin Huang',
          year: '2015',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 24, 2 ],
            "friday": [ 11, 20, 29, 7 ],
            "saturday": [ 10, 20, 30, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/true-to-life-2005.jpg',
          title: 'True to Life',
          artist: 'Valerie Jaudon',
          year: '2005',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 25, 3 ],
            "saturday": [ 12, 21, 30, 8 ],
            "sunday": [ 11, 21, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/cosmos-n-3-1977.jpg',
          title: 'Cosmos N°3',
          artist: 'Martha Boto',
          year: '1977',
          rule: {
            "monday": [ 11, 21, 31, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 25, 3 ],
            "sunday": [ 12, 21, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/display-image-22.jpg',
          title: 'Cemetery',
          artist: 'Alice Bailly',
          year: '1913',
          rule: {
            "monday": [ 12, 21, 30, 8 ],
            "tuesday": [ 11, 21, 31, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-quay-at-dinard-1911.jpg',
          title: 'The Quay at Dinard',
          artist: 'Ethel Carrick',
          year: '1911',
          rule: {
            "monday": [ 6, 16, 25, 3 ],
            "tuesday": [ 12, 21, 30, 8 ],
            "wednesday": [ 11, 21, 31, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/flowers-on-the-blue-background-1943.jpg',
          title: 'Flowers on the blue background',
          artist: 'Kateryna Bilokur',
          year: '1942 - 1943',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 25, 3 ],
            "wednesday": [ 12, 21, 30, 8 ],
            "thursday": [ 11, 21, 31, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/indeed-1991.jpg',
          title: 'Indeed',
          artist: 'Valerie Jaudon',
          year: '1991',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 25, 3 ],
            "thursday": [ 12, 21, 30, 8 ],
            "friday": [ 11, 21, 31, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/inhabited-painting-1976.jpg',
          title: 'Inhabited Painting',
          artist: 'Helena Almeida',
          year: '1976',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 25, 3 ],
            "friday": [ 12, 21, 30, 8 ],
            "saturday": [ 11, 21, 31, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/smiling-girl-1921.jpg',
          title: 'Smiling Girl',
          artist: 'Helene Schjerfbeck',
          year: '1921',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 25, 3 ],
            "saturday": [ 12, 21, 30, 8 ],
            "sunday": [ 11, 21, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/portrait-d-une-n-gresse-1800.jpg',
          title: 'Portrait d\'une négresse',
          artist: 'Marie-Guillemine Benoist',
          year: '1800',
          rule: {
            "monday": [ 11, 21, 31, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 25, 3 ],
            "sunday": [ 12, 21, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/venetian-woman-attributed-1.jpg',
          title: 'Venetian Woman (attributed)',
          artist: 'Marietta Robusti',
          year: '?',
          rule: {
            "monday": [ 12, 21, 30, 8 ],
            "tuesday": [ 11, 21, 31, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/young-woman.jpg',
          title: 'Young Woman',
          artist: 'Berthe Morisot',
          year: '1871',
          rule: {
            "monday": [ 6, 16, 25, 3 ],
            "tuesday": [ 12, 21, 30, 8 ],
            "wednesday": [ 11, 21, 31, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/blumenstilleben-1954.jpg',
          title: 'Blumenstilleben',
          artist: 'Helen Dahm',
          year: '1954',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 25, 3 ],
            "wednesday": [ 12, 21, 30, 8 ],
            "thursday": [ 11, 21, 31, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/accordment-series-15-on-its-way-1977.jpg',
          title: 'Accordment Series #15: On Its Way',
          artist: 'Perle Fine',
          year: '1977',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 25, 3 ],
            "thursday": [ 12, 21, 30, 8 ],
            "friday": [ 11, 21, 31, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-model-1925.jpg',
          title: 'The Model',
          artist: 'Tamara de Lempicka',
          year: '1925',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 25, 3 ],
            "friday": [ 12, 21, 30, 8 ],
            "saturday": [ 11, 21, 31, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/a-young-woman-seated-by-a-window.jpg',
          title: 'A YOUNG WOMAN SEATED BY A WINDOW',
          artist: 'Marie-Denise Villers',
          year: '?',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 17, 26, 4 ],
            "saturday": [ 13, 22, 31, 9 ],
            "sunday": [ 12, 22, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/mountain-landscape-switzerland-1914.jpg',
          title: 'Mountain landscape. Switzerland',
          artist: 'Zinaida Serebriakova',
          year: '1914',
          rule: {
            "monday": [ 12, 22, 1, 9 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 17, 26, 4 ],
            "sunday": [ 13, 22, 31, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/abstract-1954.jpg',
          title: 'Abstract',
          artist: 'Sonya Rapoport',
          year: '1954',
          rule: {
            "monday": [ 13, 22, 31, 9 ],
            "tuesday": [ 12, 22, 1, 9 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 17, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-deluge.jpg',
          title: 'The Deluge',
          artist: 'Winifred Knights',
          year: '1920',
          rule: {
            "monday": [ 7, 17, 26, 4 ],
            "tuesday": [ 13, 22, 31, 9 ],
            "wednesday": [ 12, 22, 1, 9 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/kusama-in-a-foreign-country.jpg',
          title: 'Kusama In A Foreign Country',
          artist: 'Yayoi Kusama',
          year: '?',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 17, 26, 4 ],
            "wednesday": [ 13, 22, 31, 9 ],
            "thursday": [ 12, 22, 1, 9 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/erin-hanson-crystal-light.jpg',
          title: 'Crystal Light',
          artist: 'Erin Hanson',
          year: '2016',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 26, 4 ],
            "thursday": [ 13, 22, 31, 9 ],
            "friday": [ 12, 22, 1, 9 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/face-eater-2004.jpg',
          title: 'Face Eater',
          artist: 'Dana Schutz',
          year: '2004',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 17, 26, 4 ],
            "friday": [ 13, 22, 31, 9 ],
            "saturday": [ 12, 22, 1, 9 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/blue-sky-1932.jpg',
          title: 'Blue Sky',
          artist: 'Emily Carr',
          year: '1932',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 18, 27, 5 ],
            "saturday": [ 14, 23, 1, 10 ],
            "sunday": [ 13, 23, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled(4).jpg',
          title: 'Untitled',
          artist: 'Hilma af Klint',
          year: '?',
          rule: {
            "monday": [ 13, 23, 2, 10 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 18, 27, 5 ],
            "sunday": [ 14, 23, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/will-eat-you-to-make-you-mine-2009.jpg',
          title: 'Will Eat You to Make You Mine',
          artist: 'Samira Eskandarfar',
          year: '2009',
          rule: {
            "monday": [ 14, 23, 1, 10 ],
            "tuesday": [ 13, 23, 2, 10 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 8, 18, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/comforter-2007.jpg',
          title: 'Comforter',
          artist: 'Catherine Murphy',
          year: '2007',
          rule: {
            "monday": [ 8, 18, 27, 5 ],
            "tuesday": [ 14, 23, 1, 10 ],
            "wednesday": [ 13, 23, 2, 10 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-blue-room-wissett-lodge-1916.jpg',
          title: 'The Blue Room, Wissett Lodge',
          artist: 'Vanessa Bell',
          year: '1916',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 27, 5 ],
            "wednesday": [ 14, 23, 1, 10 ],
            "thursday": [ 13, 23, 2, 10 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/flower-markets-with-white-umbrella.jpg',
          title: 'Flower Markets with White Umbrella',
          artist: 'Ethel Carrick',
          year: '?',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 18, 27, 5 ],
            "thursday": [ 14, 23, 1, 10 ],
            "friday": [ 13, 23, 2, 10 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-last-act-1929.jpg',
          title: 'The Last Act',
          artist: 'Laura Knight',
          year: '1929',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 18, 27, 5 ],
            "friday": [ 14, 23, 1, 10 ],
            "saturday": [ 13, 23, 2, 10 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-easy-isn-t-done-easy-2007.jpg',
          title: 'The easy isn\'t done easy',
          artist: 'Tea Jorjadze',
          year: '2007',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 19, 28, 6 ],
            "saturday": [ 15, 24, 2, 11 ],
            "sunday": [ 14, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/arena-v-1978.jpg',
          title: 'Arena V',
          artist: 'Dorothea Rockburne',
          year: '1978',
          rule: {
            "monday": [ 14, 24, 3, 11 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 19, 28, 6 ],
            "sunday": [ 15, 24, 2, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/champs-de-petrol-2013.jpg',
          title: 'Oil Fields',
          artist: 'Etel Adnan',
          year: '2013',
          rule: {
            "monday": [ 15, 24, 2, 11 ],
            "tuesday": [ 14, 24, 3, 11 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/blumen.jpg',
          title: 'Blumen',
          artist: 'Helen Dahm',
          year: '?',
          rule: {
            "monday": [ 9, 19, 28, 6 ],
            "tuesday": [ 15, 24, 2, 11 ],
            "wednesday": [ 14, 24, 3, 11 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/pillars-of-salt.jpg',
          title: 'Pillars of salt',
          artist: 'Natalia Goncharova',
          year: '1908',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 19, 28, 6 ],
            "wednesday": [ 15, 24, 2, 11 ],
            "thursday": [ 14, 24, 3, 11 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/glimpse-upon-waking-1976.jpg',
          title: 'Glimpse Upon Waking',
          artist: 'Winifred Nicholson',
          year: '1976',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 19, 28, 6 ],
            "thursday": [ 15, 24, 2, 11 ],
            "friday": [ 14, 24, 3, 11 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/stadia-ii-2004.jpg',
          title: 'Stadia II',
          artist: 'Julie Mehretu',
          year: '2004',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 19, 28, 6 ],
            "friday": [ 15, 24, 2, 11 ],
            "saturday": [ 14, 24, 3, 11 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/flat-jumbo-clips-2009.jpg',
          title: 'Flat Jumbo [Clips]',
          artist: 'Sarah Morris',
          year: '2009',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 10, 20, 29, 7 ],
            "saturday": [ 16, 25, 3, 12 ],
            "sunday": [ 15, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/boy-with-rooster.jpg',
          title: 'Boy with rooster',
          artist: 'Natalia Goncharova',
          year: '1910',
          rule: {
            "monday": [ 15, 25, 4, 12 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 10, 20, 29, 7 ],
            "sunday": [ 16, 25, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/women-s-costume-1918.jpg',
          title: 'Women\'s costume',
          artist: 'Aleksandra Ekster',
          year: '1918',
          rule: {
            "monday": [ 16, 25, 3, 12 ],
            "tuesday": [ 15, 25, 4, 12 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 10, 20, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/chamin-s-alentejanas.jpg',
          title: 'Chaminés alentejanas',
          artist: 'Mily Possoz',
          year: '?',
          rule: {
            "monday": [ 10, 20, 29, 7 ],
            "tuesday": [ 16, 25, 3, 12 ],
            "wednesday": [ 15, 25, 4, 12 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-blue-octagon-1964.jpg',
          title: 'Untitled (Blue Octagon)',
          artist: 'Mary Corse',
          year: '1964',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 10, 20, 29, 7 ],
            "wednesday": [ 16, 25, 3, 12 ],
            "thursday": [ 15, 25, 4, 12 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/arm-extensions-1968.jpg',
          title: 'Arm Extensions',
          artist: 'Rebecca Horn',
          year: '1968',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 10, 20, 29, 7 ],
            "thursday": [ 16, 25, 3, 12 ],
            "friday": [ 15, 25, 4, 12 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/ladder-1981.jpg',
          title: 'Ladder',
          artist: 'Harmony Hammond',
          year: '1981',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 10, 20, 29, 7 ],
            "friday": [ 16, 25, 3, 12 ],
            "saturday": [ 15, 25, 4, 12 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/mad-russian-blanket-1977.jpg',
          title: 'Mad Russian Blanket',
          artist: 'Joyce Kozloff',
          year: '1977',
          rule: {
            "monday": [ 15, 25, 2, 12 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 11, 21, 30, 8 ],
            "saturday": [ 17, 26, 4, 13 ],
            "sunday": [ 16, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-dancer-1938.jpg',
          title: 'The Dancer',
          artist: 'Greta Freist',
          year: '1938',
          rule: {
            "monday": [ 16, 26, 5, 13 ],
            "tuesday": [ 15, 25, 2, 12 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 11, 21, 30, 8 ],
            "sunday": [ 17, 26, 4, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/3human-theatre-100by100cm-2016.jpg',
          title: 'Human Theatre',
          artist: 'Li CHEVALIER',
          year: '2016',
          rule: {
            "monday": [ 17, 26, 4, 13 ],
            "tuesday": [ 16, 26, 5, 13 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 11, 21, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/touch-me-2011.jpg',
          title: 'Touch Me',
          artist: 'Regine Schumann',
          year: '2011',
          rule: {
            "monday": [ 11, 21, 30, 8 ],
            "tuesday": [ 17, 26, 4, 13 ],
            "wednesday": [ 16, 26, 5, 13 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/old-vw-with-shadow.jpg',
          title: 'Old VW with Shadow',
          artist: 'L Yaffe',
          year: '?',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 11, 21, 30, 8 ],
            "wednesday": [ 17, 26, 4, 13 ],
            "thursday": [ 16, 26, 5, 13 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/imgp-rosa-rot-malwerk-silvia-l-lueftenegger-contemporary-art-design-performance-theater-shoe-6880p.jpg',
          title: 'IMGP Rosa Rot Malwerk Silvia L Lueftenegger Contemporary Art Design Performance Theater Shoe 6880P',
          artist: 'Silvia L. Lueftenegger RosaRot',
          year: '?',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 11, 21, 30, 8 ],
            "thursday": [ 17, 26, 4, 13 ],
            "friday": [ 16, 26, 5, 13 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/abstract.jpg',
          title: 'Abstract',
          artist: 'Gillian Ayres',
          year: '?',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 11, 21, 30, 8 ],
            "friday": [ 17, 26, 4, 13 ],
            "saturday": [ 16, 26, 5, 13 ],
            "sunday": [ 15, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/ninth-vision-personification-of-god-s-power.jpg',
          title: 'Ninth Vision. Personification of God\'s power',
          artist: 'Hildegard of Bingen',
          year: '?',
          rule: {
            "monday": [ 16, 26, 3, 13 ],
            "tuesday": [ 15, 25, 2, 12 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 12, 22, 31, 9 ],
            "saturday": [ 18, 27, 5, 14 ],
            "sunday": [ 17, 27, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/ink-bamboo.jpg',
          title: 'Ink Bamboo',
          artist: 'Guan Daosheng',
          year: '?',
          rule: {
            "monday": [ 17, 27, 6, 14 ],
            "tuesday": [ 16, 26, 3, 13 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 12, 22, 31, 9 ],
            "sunday": [ 18, 27, 5, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/portrait-of-five-women-with-a-dog-and-a-parrot.jpg',
          title: 'Portrait of Five Women with a Dog and a Parrot',
          artist: 'Lavinia Fontana',
          year: '?',
          rule: {
            "monday": [ 18, 27, 5, 14 ],
            "tuesday": [ 17, 27, 6, 14 ],
            "wednesday": [ 16, 26, 3, 13 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 12, 22, 31, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/judith-with-the-head-of-holofernes-1596.jpg',
          title: 'Judith with the Head of Holofernes',
          artist: 'Fede Galizia',
          year: '1596',
          rule: {
            "monday": [ 12, 22, 31, 9 ],
            "tuesday": [ 18, 27, 5, 14 ],
            "wednesday": [ 17, 27, 6, 14 ],
            "thursday": [ 16, 26, 3, 13 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/display-image-2.jpg',
          title: 'At the Market Stall',
          artist: 'Louise Moillon',
          year: '?',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 12, 22, 31, 9 ],
            "wednesday": [ 18, 27, 5, 14 ],
            "thursday": [ 17, 27, 6, 14 ],
            "friday": [ 16, 26, 3, 13 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/mary-beale-self-portrait.JPG',
          title: 'Self-portrait',
          artist: 'Mary Beale',
          year: '1680',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 12, 22, 31, 9 ],
            "thursday": [ 18, 27, 5, 14 ],
            "friday": [ 17, 27, 6, 14 ],
            "saturday": [ 16, 26, 3, 13 ],
            "sunday": [ 15, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/allegory-of-music-1712.jpg',
          title: 'Allegory of Music',
          artist: 'Rosalba Carriera',
          year: '1712',
          rule: {
            "monday": [ 15, 25, 2, 12 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 12, 22, 31, 9 ],
            "friday": [ 18, 27, 5, 14 ],
            "saturday": [ 17, 27, 6, 14 ],
            "sunday": [ 16, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/still-life-with-tuft-of-marine-plants-shells-and-corals-1769.jpg',
          title: 'Still-Life with Tuft of Marine Plants, Shells and Corals',
          artist: 'Anne Vallayer-Coster',
          year: '1769',
          rule: {
            "monday": [ 17, 27, 4, 14 ],
            "tuesday": [ 16, 26, 3, 13 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 13, 23, 1, 10 ],
            "saturday": [ 19, 28, 6, 15 ],
            "sunday": [ 18, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/une-tude-de-femme-d-apr-s-nature-portrait-de-madame-soustras.jpg',
          title: 'Une étude de femme d\'après nature (Portrait de Madame Soustras)',
          artist: 'Marie-Denise Villers',
          year: '?',
          rule: {
            "monday": [ 18, 28, 7, 15 ],
            "tuesday": [ 17, 27, 4, 14 ],
            "wednesday": [ 16, 26, 3, 13 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 13, 23, 1, 10 ],
            "sunday": [ 19, 28, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/oxen-pulling-a-cart.jpg',
          title: 'Oxen Pulling a Cart',
          artist: 'Rosa Bonheur',
          year: '?',
          rule: {
            "monday": [ 19, 28, 6, 15 ],
            "tuesday": [ 18, 28, 7, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 26, 3, 13 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 13, 23, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/before-the-theatre.jpg',
          title: 'Before the Theatre',
          artist: 'Berthe Morisot',
          year: 'c.1875',
          rule: {
            "monday": [ 13, 23, 1, 10 ],
            "tuesday": [ 19, 28, 6, 15 ],
            "wednesday": [ 18, 28, 7, 15 ],
            "thursday": [ 17, 27, 4, 14 ],
            "friday": [ 16, 26, 3, 13 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/child-in-a-gerden-giverny-1909.jpg',
          title: 'Child in a Gerden, Giverny',
          artist: 'Lilla Cabot Perry',
          year: '1909',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 13, 23, 1, 10 ],
            "wednesday": [ 19, 28, 6, 15 ],
            "thursday": [ 18, 28, 7, 15 ],
            "friday": [ 17, 27, 4, 14 ],
            "saturday": [ 16, 26, 3, 13 ],
            "sunday": [ 15, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/display-image-15.jpg',
          title: 'In the Flowers',
          artist: 'Louise Abbéma',
          year: '1892',
          rule: {
            "monday": [ 15, 25, 2, 12 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 13, 23, 1, 10 ],
            "thursday": [ 19, 28, 6, 15 ],
            "friday": [ 18, 28, 7, 15 ],
            "saturday": [ 17, 27, 4, 14 ],
            "sunday": [ 16, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/anna-ancher-sunlight-in-the-blue-room-google-art-project.jpg',
          title: 'Sunlight in the Blue Room',
          artist: 'Anna Ancher',
          year: '1891',
          rule: {
            "monday": [ 16, 26, 3, 13 ],
            "tuesday": [ 15, 25, 2, 12 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 13, 23, 1, 10 ],
            "friday": [ 19, 28, 6, 15 ],
            "saturday": [ 18, 28, 7, 15 ],
            "sunday": [ 17, 27, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-swan-no-17-1915(1).jpg',
          title: 'The Swan (No. 17)',
          artist: 'Hilma af Klint',
          year: '1914 - 1915',
          rule: {
            "monday": [ 18, 28, 5, 15 ],
            "tuesday": [ 17, 27, 4, 14 ],
            "wednesday": [ 16, 26, 3, 13 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 14, 24, 2, 11 ],
            "saturday": [ 20, 29, 7, 16 ],
            "sunday": [ 19, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/frontispiece-the-tailor-mouse.jpg',
          title: 'Frontispiece. The Tailor Mouse',
          artist: 'Beatrix Potter',
          year: '1902',
          rule: {
            "monday": [ 19, 29, 8, 16 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 26, 3, 13 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 14, 24, 2, 11 ],
            "sunday": [ 20, 29, 7, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/petersburg-the-summer-garden-in-winter-1902.jpg',
          title: 'Petersburg. The Summer Garden in winter.',
          artist: 'Anna Ostroumova-Lebedeva',
          year: '1902',
          rule: {
            "monday": [ 20, 29, 7, 16 ],
            "tuesday": [ 19, 29, 8, 16 ],
            "wednesday": [ 18, 28, 5, 15 ],
            "thursday": [ 17, 27, 4, 14 ],
            "friday": [ 16, 26, 3, 13 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 14, 24, 2, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/children-and-nurses-1910.jpg',
          title: 'Children and Nurses',
          artist: 'Ethel Carrick',
          year: '1910',
          rule: {
            "monday": [ 14, 24, 2, 11 ],
            "tuesday": [ 20, 29, 7, 16 ],
            "wednesday": [ 19, 29, 8, 16 ],
            "thursday": [ 18, 28, 5, 15 ],
            "friday": [ 17, 27, 4, 14 ],
            "saturday": [ 16, 26, 3, 13 ],
            "sunday": [ 15, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/yang-gui-fei-1922.jpg',
          title: 'Yang gui fei',
          artist: 'Uemura Shoen',
          year: '1922',
          rule: {
            "monday": [ 15, 25, 2, 12 ],
            "tuesday": [ 14, 24, 2, 11 ],
            "wednesday": [ 20, 29, 7, 16 ],
            "thursday": [ 19, 29, 8, 16 ],
            "friday": [ 18, 28, 5, 15 ],
            "saturday": [ 17, 27, 4, 14 ],
            "sunday": [ 16, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/little-girl-wearing-large-hat.jpg',
          title: 'Little girl wearing large hat',
          artist: 'Gwen John',
          year: '?',
          rule: {
            "monday": [ 16, 26, 3, 13 ],
            "tuesday": [ 15, 25, 2, 12 ],
            "wednesday": [ 14, 24, 2, 11 ],
            "thursday": [ 20, 29, 7, 16 ],
            "friday": [ 19, 29, 8, 16 ],
            "saturday": [ 18, 28, 5, 15 ],
            "sunday": [ 17, 27, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitledDahm.jpg',
          title: 'Untitled',
          artist: 'Helen Dahm',
          year: '?',
          rule: {
            "monday": [ 17, 27, 4, 14 ],
            "tuesday": [ 16, 26, 3, 13 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 14, 24, 2, 11 ],
            "friday": [ 20, 29, 7, 16 ],
            "saturday": [ 19, 29, 8, 16 ],
            "sunday": [ 18, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/orange-vendor-spain.jpg',
          title: 'Orange Vendor, Spain',
          artist: 'Natalia Goncharova',
          year: '1916',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 26, 3, 13 ],
            "friday": [ 15, 25, 3, 12 ],
            "saturday": [ 21, 30, 8, 17 ],
            "sunday": [ 20, 30, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/artemis.jpg',
          title: 'Artemis',
          artist: 'Marie Laurencin',
          year: '?',
          rule: {
            "monday": [ 20, 30, 9, 17 ],
            "tuesday": [ 19, 29, 6, 16 ],
            "wednesday": [ 18, 28, 5, 15 ],
            "thursday": [ 17, 27, 4, 14 ],
            "friday": [ 16, 26, 3, 13 ],
            "saturday": [ 15, 25, 3, 12 ],
            "sunday": [ 21, 30, 8, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/three-women-dressed-simultaneously.jpg',
          title: 'Three Women dressed simultaneously',
          artist: 'Sonia Delaunay',
          year: '?',
          rule: {
            "monday": [ 21, 30, 8, 17 ],
            "tuesday": [ 20, 30, 9, 17 ],
            "wednesday": [ 19, 29, 6, 16 ],
            "thursday": [ 18, 28, 5, 15 ],
            "friday": [ 17, 27, 4, 14 ],
            "saturday": [ 16, 26, 3, 13 ],
            "sunday": [ 15, 25, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/nude-series-viii.jpg',
          title: 'Nude Series VIII',
          artist: 'Georgia O\'Keeffe',
          year: '1917',
          rule: {
            "monday": [ 15, 25, 3, 12 ],
            "tuesday": [ 21, 30, 8, 17 ],
            "wednesday": [ 20, 30, 9, 17 ],
            "thursday": [ 19, 29, 6, 16 ],
            "friday": [ 18, 28, 5, 15 ],
            "saturday": [ 17, 27, 4, 14 ],
            "sunday": [ 16, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/composition-dans-un-cercle-1937.jpg',
          title: 'Composition dans un cercle',
          artist: 'Sophie Taeuber-Arp',
          year: '1937',
          rule: {
            "monday": [ 17, 27, 4, 14 ],
            "tuesday": [ 16, 26, 4, 13 ],
            "wednesday": [ 22, 31, 9, 18 ],
            "thursday": [ 21, 31, 10, 18 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 19, 29, 6, 16 ],
            "sunday": [ 18, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-from-an-ethnographic-museum-1930.jpg',
          title: 'Untitled (From an Ethnographic Museum)',
          artist: 'Hannah Hoch',
          year: '1930',
          rule: {
            "monday": [ 18, 28, 5, 15 ],
            "tuesday": [ 17, 27, 4, 14 ],
            "wednesday": [ 16, 26, 4, 13 ],
            "thursday": [ 22, 31, 9, 18 ],
            "friday": [ 21, 31, 10, 18 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 19, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/a-little-boy-lost-1920-11.jpg',
          title: 'A Little Boy Lost',
          artist: 'Dorothy Lathrop',
          year: '1920',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 26, 4, 13 ],
            "friday": [ 22, 31, 9, 18 ],
            "saturday": [ 21, 31, 10, 18 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/sea-treasures-1952.jpg',
          title: 'Sea Treasures',
          artist: 'Winifred Nicholson',
          year: '1952',
          rule: {
            "monday": [ 20, 30, 7, 17 ],
            "tuesday": [ 19, 29, 6, 16 ],
            "wednesday": [ 18, 28, 5, 15 ],
            "thursday": [ 17, 27, 4, 14 ],
            "friday": [ 16, 26, 4, 13 ],
            "saturday": [ 22, 31, 9, 18 ],
            "sunday": [ 21, 31, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/unknown-title-44.jpg',
          title: 'unknown title',
          artist: 'Antonietta Raphael',
          year: '?',
          rule: {
            "monday": [ 21, 31, 10, 18 ],
            "tuesday": [ 20, 30, 7, 17 ],
            "wednesday": [ 19, 29, 6, 16 ],
            "thursday": [ 18, 28, 5, 15 ],
            "friday": [ 17, 27, 4, 14 ],
            "saturday": [ 16, 26, 4, 13 ],
            "sunday": [ 22, 31, 9, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/rollande-1929.jpg',
          title: 'Rollande',
          artist: 'Prudence Heward',
          year: '1929',
          rule: {
            "monday": [ 22, 31, 9, 18 ],
            "tuesday": [ 21, 31, 10, 18 ],
            "wednesday": [ 20, 30, 7, 17 ],
            "thursday": [ 19, 29, 6, 16 ],
            "friday": [ 18, 28, 5, 15 ],
            "saturday": [ 17, 27, 4, 14 ],
            "sunday": [ 16, 26, 4, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/jeanne-he-buterne-autoportrait.jpg',
          title: 'Self portrait',
          artist: 'Jeanne Hébuterne',
          year: '1916',
          rule: {
            "monday": [ 16, 26, 4, 13 ],
            "tuesday": [ 22, 31, 9, 18 ],
            "wednesday": [ 21, 31, 10, 18 ],
            "thursday": [ 20, 30, 7, 17 ],
            "friday": [ 19, 29, 6, 16 ],
            "saturday": [ 18, 28, 5, 15 ],
            "sunday": [ 17, 27, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/santissima-trinita-1928.jpg',
          title: 'Santissima Trinita',
          artist: 'Winifred Knights',
          year: '1928',
          rule: {
            "monday": [ 17, 27, 4, 14 ],
            "tuesday": [ 16, 26, 4, 13 ],
            "wednesday": [ 22, 31, 9, 18 ],
            "thursday": [ 21, 31, 10, 18 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 19, 29, 6, 16 ],
            "sunday": [ 18, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/still-life-1.jpg',
          title: 'Still Life',
          artist: 'Gohar Fermanyan',
          year: '?',
          rule: {
            "monday": [ 18, 28, 5, 15 ],
            "tuesday": [ 17, 27, 4, 14 ],
            "wednesday": [ 16, 26, 4, 13 ],
            "thursday": [ 22, 31, 9, 18 ],
            "friday": [ 21, 31, 10, 18 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 19, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/totem-materia.jpg',
          title: 'Totem Materia',
          artist: 'Betty Parsons',
          year: '?',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 26, 4, 13 ],
            "friday": [ 22, 31, 9, 18 ],
            "saturday": [ 21, 31, 10, 18 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1975 (1).jpg',
          title: 'Untitled',
          artist: 'Bice Lazzari',
          year: '1975',
          rule: {
            "monday": [ 21, 31, 8, 18 ],
            "tuesday": [ 20, 30, 7, 17 ],
            "wednesday": [ 19, 29, 6, 16 ],
            "thursday": [ 18, 28, 5, 15 ],
            "friday": [ 17, 27, 5, 14 ],
            "saturday": [ 23, 1, 10, 19 ],
            "sunday": [ 22, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/caracas-1957.jpg',
          title: 'Caracas',
          artist: 'Lolo Soldevilla',
          year: '1957',
          rule: {
            "monday": [ 22, 1, 11, 19 ],
            "tuesday": [ 21, 31, 8, 18 ],
            "wednesday": [ 20, 30, 7, 17 ],
            "thursday": [ 19, 29, 6, 16 ],
            "friday": [ 18, 28, 5, 15 ],
            "saturday": [ 17, 27, 5, 14 ],
            "sunday": [ 23, 1, 10, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/steiner-surface-1973.jpg',
          title: 'Steiner Surface',
          artist: 'Ruth Vollmer',
          year: '1973',
          rule: {
            "monday": [ 23, 1, 10, 19 ],
            "tuesday": [ 22, 1, 11, 19 ],
            "wednesday": [ 21, 31, 8, 18 ],
            "thursday": [ 20, 30, 7, 17 ],
            "friday": [ 19, 29, 6, 16 ],
            "saturday": [ 18, 28, 5, 15 ],
            "sunday": [ 17, 27, 5, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-love-embrace-of-the-universe-the-earth-mexico-myself-diego-and-señor-xólotl-1949.jpg',
          title: 'The Love Embrace of the Universe, the Earth (Mexico), Myself, Diego and Señor Xólotl',
          artist: 'Frida Kahlo',
          year: '1949',
          rule: {
            "monday": [ 17, 27, 5, 14 ],
            "tuesday": [ 23, 1, 10, 19 ],
            "wednesday": [ 22, 1, 11, 19 ],
            "thursday": [ 21, 31, 8, 18 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 19, 29, 6, 16 ],
            "sunday": [ 18, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/candelabra-1935.jpg',
          title: 'Candelabra',
          artist: 'Dora Maar',
          year: '1935',
          rule: {
            "monday": [ 18, 28, 5, 15 ],
            "tuesday": [ 17, 27, 5, 14 ],
            "wednesday": [ 23, 1, 10, 19 ],
            "thursday": [ 22, 1, 11, 19 ],
            "friday": [ 21, 31, 8, 18 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 19, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/k-k-1933.jpg',
          title: 'Kô & Kô',
          artist: 'Maria Helena Vieira da Silva',
          year: '1933',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 17, 27, 5, 14 ],
            "thursday": [ 23, 1, 10, 19 ],
            "friday": [ 22, 1, 11, 19 ],
            "saturday": [ 21, 31, 8, 18 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/lady-godiva-1959.jpg',
          title: 'Lady Godiva',
          artist: 'Remedios Varo',
          year: '1959',
          rule: {
            "monday": [ 20, 30, 7, 17 ],
            "tuesday": [ 19, 29, 6, 16 ],
            "wednesday": [ 18, 28, 5, 15 ],
            "thursday": [ 17, 27, 5, 14 ],
            "friday": [ 23, 1, 10, 19 ],
            "saturday": [ 22, 1, 11, 19 ],
            "sunday": [ 21, 31, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/feminine-character.jpg',
          title: 'Feminine character',
          artist: 'Hedda Sterne',
          year: '?',
          rule: {
            "monday": [ 22, 1, 9, 19 ],
            "tuesday": [ 21, 31, 8, 18 ],
            "wednesday": [ 20, 30, 7, 17 ],
            "thursday": [ 19, 29, 6, 16 ],
            "friday": [ 18, 28, 6, 15 ],
            "saturday": [ 24, 2, 11, 20 ],
            "sunday": [ 23, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/cinda.jpg',
          title: 'Cinderella',
          artist: 'Mary Blair',
          year: '?',
          rule: {
            "monday": [ 23, 2, 12, 20 ],
            "tuesday": [ 22, 1, 9, 19 ],
            "wednesday": [ 21, 31, 8, 18 ],
            "thursday": [ 20, 30, 7, 17 ],
            "friday": [ 19, 29, 6, 16 ],
            "saturday": [ 18, 28, 6, 15 ],
            "sunday": [ 24, 2, 11, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/witches-in-preparation-1981.jpg',
          title: 'Witches in Preparation',
          artist: 'Ilka Gedo',
          year: '1981',
          rule: {
            "monday": [ 24, 2, 11, 20 ],
            "tuesday": [ 23, 2, 12, 20 ],
            "wednesday": [ 22, 1, 9, 19 ],
            "thursday": [ 21, 31, 8, 18 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 19, 29, 6, 16 ],
            "sunday": [ 18, 28, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/sleeping-woman-1933.jpg',
          title: 'Sleeping woman',
          artist: 'Amrita Sher-Gil',
          year: '1933',
          rule: {
            "monday": [ 18, 28, 6, 15 ],
            "tuesday": [ 24, 2, 11, 20 ],
            "wednesday": [ 23, 2, 12, 20 ],
            "thursday": [ 22, 1, 9, 19 ],
            "friday": [ 21, 31, 8, 18 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 19, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/house-of-cards-1987.jpg',
          title: 'House of Cards',
          artist: 'Piroska Szanto',
          year: '1987',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 18, 28, 6, 15 ],
            "wednesday": [ 24, 2, 11, 20 ],
            "thursday": [ 23, 2, 12, 20 ],
            "friday": [ 22, 1, 9, 19 ],
            "saturday": [ 21, 31, 8, 18 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/two-women-on-the-shore-1977.jpg',
          title: 'Two women on the shore',
          artist: 'Mary Fedden',
          year: '1977',
          rule: {
            "monday": [ 20, 30, 7, 17 ],
            "tuesday": [ 19, 29, 6, 16 ],
            "wednesday": [ 18, 28, 6, 15 ],
            "thursday": [ 24, 2, 11, 20 ],
            "friday": [ 23, 2, 12, 20 ],
            "saturday": [ 22, 1, 9, 19 ],
            "sunday": [ 21, 31, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/finale-1979.jpg',
          title: 'Finale',
          artist: 'Edna Andrade',
          year: '1979',
          rule: {
            "monday": [ 21, 31, 8, 18 ],
            "tuesday": [ 20, 30, 7, 17 ],
            "wednesday": [ 19, 29, 6, 16 ],
            "thursday": [ 18, 28, 6, 15 ],
            "friday": [ 24, 2, 11, 20 ],
            "saturday": [ 23, 2, 12, 20 ],
            "sunday": [ 22, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/bacchus-69-purple-and-green-1982.jpg',
          title: 'Bacchus #69 (purple and green)',
          artist: 'Elaine de Kooning',
          year: '1982',
          rule: {
            "monday": [ 23, 2, 10, 20 ],
            "tuesday": [ 22, 1, 9, 19 ],
            "wednesday": [ 21, 31, 8, 18 ],
            "thursday": [ 20, 30, 7, 17 ],
            "friday": [ 19, 29, 7, 16 ],
            "saturday": [ 25, 3, 12, 21 ],
            "sunday": [ 24, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/lafarina1952.jpg',
          title: 'The flour',
          artist: 'Maria Lai',
          year: '1952',
          rule: {
            "monday": [ 24, 3, 13, 21 ],
            "tuesday": [ 23, 2, 10, 20 ],
            "wednesday": [ 22, 1, 9, 19 ],
            "thursday": [ 21, 31, 8, 18 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 19, 29, 7, 16 ],
            "sunday": [ 25, 3, 12, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/homenaje-a-max-bill-o-guatemala.jpg',
          title: 'Homenaje a Max Bill o Guatemala',
          artist: 'Lidy Prati',
          year: '?',
          rule: {
            "monday": [ 25, 3, 12, 21 ],
            "tuesday": [ 24, 3, 13, 21 ],
            "wednesday": [ 23, 2, 10, 20 ],
            "thursday": [ 22, 1, 9, 19 ],
            "friday": [ 21, 31, 8, 18 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 19, 29, 7, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/throughout-the-neighbourhood.jpg',
          title: 'Throughout the Neighbourhood',
          artist: 'Tia Peltz',
          year: '?',
          rule: {
            "monday": [ 19, 29, 7, 16 ],
            "tuesday": [ 25, 3, 12, 21 ],
            "wednesday": [ 24, 3, 13, 21 ],
            "thursday": [ 23, 2, 10, 20 ],
            "friday": [ 22, 1, 9, 19 ],
            "saturday": [ 21, 31, 8, 18 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/digital-mudra-1989.jpg',
          title: 'Digital Mudra',
          artist: 'Sonya Rapoport',
          year: '1989',
          rule: {
            "monday": [ 20, 30, 7, 17 ],
            "tuesday": [ 19, 29, 7, 16 ],
            "wednesday": [ 25, 3, 12, 21 ],
            "thursday": [ 24, 3, 13, 21 ],
            "friday": [ 23, 2, 10, 20 ],
            "saturday": [ 22, 1, 9, 19 ],
            "sunday": [ 21, 31, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/eventide-2002.jpg',
          title: 'Eventide',
          artist: 'Jane Wilson',
          year: '2002',
          rule: {
            "monday": [ 21, 31, 8, 18 ],
            "tuesday": [ 20, 30, 7, 17 ],
            "wednesday": [ 19, 29, 7, 16 ],
            "thursday": [ 25, 3, 12, 21 ],
            "friday": [ 24, 3, 13, 21 ],
            "saturday": [ 23, 2, 10, 20 ],
            "sunday": [ 22, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1963-1.jpg',
          title: 'Untitled',
          artist: 'Tsuruko Yamazaki',
          year: '1963',
          rule: {
            "monday": [ 22, 1, 9, 19 ],
            "tuesday": [ 21, 31, 8, 18 ],
            "wednesday": [ 20, 30, 7, 17 ],
            "thursday": [ 19, 29, 7, 16 ],
            "friday": [ 25, 3, 12, 21 ],
            "saturday": [ 24, 3, 13, 21 ],
            "sunday": [ 23, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/plant.jpg',
          title: 'Plant',
          artist: 'Maria Stolarova',
          year: '?',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 23, 2, 10, 20 ],
            "wednesday": [ 22, 1, 9, 19 ],
            "thursday": [ 21, 31, 8, 18 ],
            "friday": [ 20, 30, 8, 17 ],
            "saturday": [ 26, 4, 13, 22 ],
            "sunday": [ 25, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/sem-t-tulo-1.jpg',
          title: 'Sem título',
          artist: 'Menez',
          year: '?',
          rule: {
            "monday": [ 25, 4, 14, 22 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 23, 2, 10, 20 ],
            "thursday": [ 22, 1, 9, 19 ],
            "friday": [ 21, 31, 8, 18 ],
            "saturday": [ 20, 30, 8, 17 ],
            "sunday": [ 26, 4, 13, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1985.jpg',
          title: 'Untitled',
          artist: 'Hannelore Baron',
          year: '1985',
          rule: {
            "monday": [ 26, 4, 13, 22 ],
            "tuesday": [ 25, 4, 14, 22 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 23, 2, 10, 20 ],
            "friday": [ 22, 1, 9, 19 ],
            "saturday": [ 21, 31, 8, 18 ],
            "sunday": [ 20, 30, 8, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/seeing-the-moon-on-a-hot-summer-day-1987.jpg',
          title: 'Seeing the Moon on a Hot Summer Day',
          artist: 'Helen Frankenthaler',
          year: '1987',
          rule: {
            "monday": [ 20, 30, 8, 17 ],
            "tuesday": [ 26, 4, 13, 22 ],
            "wednesday": [ 25, 4, 14, 22 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 23, 2, 10, 20 ],
            "saturday": [ 22, 1, 9, 19 ],
            "sunday": [ 21, 31, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/glass-slippers-1960.jpg',
          title: 'Glass Slippers',
          artist: 'Jo Baer',
          year: '1960',
          rule: {
            "monday": [ 21, 31, 8, 18 ],
            "tuesday": [ 20, 30, 8, 17 ],
            "wednesday": [ 26, 4, 13, 22 ],
            "thursday": [ 25, 4, 14, 22 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 23, 2, 10, 20 ],
            "sunday": [ 22, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/cultural-head-1973.jpg',
          title: 'Cultural Head',
          artist: 'Marisol Escobar',
          year: '1973',
          rule: {
            "monday": [ 22, 1, 9, 19 ],
            "tuesday": [ 21, 31, 8, 18 ],
            "wednesday": [ 20, 30, 8, 17 ],
            "thursday": [ 26, 4, 13, 22 ],
            "friday": [ 25, 4, 14, 22 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 23, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/luna-de-silencio-1961.jpg',
          title: 'Luna de silencio',
          artist: 'Lilia Carrillo',
          year: '1961',
          rule: {
            "monday": [ 23, 2, 10, 20 ],
            "tuesday": [ 22, 1, 9, 19 ],
            "wednesday": [ 21, 31, 8, 18 ],
            "thursday": [ 20, 30, 8, 17 ],
            "friday": [ 26, 4, 13, 22 ],
            "saturday": [ 25, 4, 14, 22 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1985-.jpg',
          title: 'Untitled',
          artist: 'Lee Bontecou',
          year: '1985',
          rule: {
            "monday": [ 25, 4, 12, 22 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 23, 2, 10, 20 ],
            "thursday": [ 22, 1, 9, 19 ],
            "friday": [ 21, 31, 9, 18 ],
            "saturday": [ 27, 5, 14, 23 ],
            "sunday": [ 26, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/89m-1989.jpg',
          title: '89m',
          artist: 'Atsuko Tanaka',
          year: '1989',
          rule: {
            "monday": [ 26, 5, 15, 23 ],
            "tuesday": [ 25, 4, 12, 22 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 23, 2, 10, 20 ],
            "friday": [ 22, 1, 9, 19 ],
            "saturday": [ 21, 31, 9, 18 ],
            "sunday": [ 27, 5, 14, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/descending-2010.jpg',
          title: 'Descending',
          artist: 'Marjorie Strider',
          year: '2010',
          rule: {
            "monday": [ 27, 5, 14, 23 ],
            "tuesday": [ 26, 5, 15, 23 ],
            "wednesday": [ 25, 4, 12, 22 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 23, 2, 10, 20 ],
            "saturday": [ 22, 1, 9, 19 ],
            "sunday": [ 21, 31, 9, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/colored-alphabet-1982.jpg',
          title: 'Colored Alphabet',
          artist: 'Sheila Hicks',
          year: '1982',
          rule: {
            "monday": [ 21, 31, 9, 18 ],
            "tuesday": [ 27, 5, 14, 23 ],
            "wednesday": [ 26, 5, 15, 23 ],
            "thursday": [ 25, 4, 12, 22 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 23, 2, 10, 20 ],
            "sunday": [ 22, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/ice-cream-1964.jpg',
          title: 'Ice Cream',
          artist: 'Evelyne Axell',
          year: '1964',
          rule: {
            "monday": [ 22, 1, 9, 19 ],
            "tuesday": [ 21, 31, 9, 18 ],
            "wednesday": [ 27, 5, 14, 23 ],
            "thursday": [ 26, 5, 15, 23 ],
            "friday": [ 25, 4, 12, 22 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 23, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1965-2.jpg',
          title: 'Untitled',
          artist: 'Eva Hesse',
          year: '1965',
          rule: {
            "monday": [ 23, 2, 10, 20 ],
            "tuesday": [ 22, 1, 9, 19 ],
            "wednesday": [ 21, 31, 9, 18 ],
            "thursday": [ 27, 5, 14, 23 ],
            "friday": [ 26, 5, 15, 23 ],
            "saturday": [ 25, 4, 12, 22 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1960.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: '1960',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 23, 2, 10, 20 ],
            "wednesday": [ 22, 1, 9, 19 ],
            "thursday": [ 21, 31, 9, 18 ],
            "friday": [ 27, 5, 14, 23 ],
            "saturday": [ 26, 5, 15, 23 ],
            "sunday": [ 25, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/july-waterfall-1991.jpg',
          title: 'July Waterfall',
          artist: 'Pat Steir',
          year: '1991',
          rule: {
            "monday": [ 27, 5, 13, 23 ],
            "tuesday": [ 25, 4, 12, 22 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 23, 2, 10, 20 ],
            "friday": [ 22, 1, 10, 19 ],
            "saturday": [ 28, 6, 15, 24 ],
            "sunday": [ 27, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/bum-1966.jpg',
          title: 'Bum',
          artist: 'Pauline Boty',
          year: '1966',
          rule: {
            "monday": [ 27, 6, 16, 24 ],
            "tuesday": [ 27, 5, 13, 23 ],
            "wednesday": [ 25, 4, 12, 22 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 23, 2, 10, 20 ],
            "saturday": [ 22, 1, 10, 19 ],
            "sunday": [ 28, 6, 15, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/drypoint-ocean-surface-1983.jpg',
          title: 'Drypoint - Ocean Surface',
          artist: 'Vija Celmins',
          year: '1983',
          rule: {
            "monday": [ 28, 6, 15, 24 ],
            "tuesday": [ 27, 6, 16, 24 ],
            "wednesday": [ 27, 5, 13, 23 ],
            "thursday": [ 25, 4, 12, 22 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 23, 2, 10, 20 ],
            "sunday": [ 22, 1, 10, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/glowing-1970.jpg',
          title: 'Glowing',
          artist: 'Pat Lipsky',
          year: '1970',
          rule: {
            "monday": [ 22, 1, 10, 19 ],
            "tuesday": [ 28, 6, 15, 24 ],
            "wednesday": [ 27, 6, 16, 24 ],
            "thursday": [ 27, 5, 13, 23 ],
            "friday": [ 25, 4, 12, 22 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 23, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/burnt-piece-1978.jpg',
          title: 'Burnt Piece',
          artist: 'Jacqueline Winsor',
          year: '1978',
          rule: {
            "monday": [ 23, 2, 10, 20 ],
            "tuesday": [ 22, 1, 10, 19 ],
            "wednesday": [ 28, 6, 15, 24 ],
            "thursday": [ 27, 6, 16, 24 ],
            "friday": [ 27, 5, 13, 23 ],
            "saturday": [ 25, 4, 12, 22 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/art-historian-s-joke-renaissance-woman-1986.jpg',
          title: 'Art Historian’s Joke: Renaissance Woman',
          artist: 'Joyce Kozloff',
          year: '1986',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 23, 2, 10, 20 ],
            "wednesday": [ 22, 1, 10, 19 ],
            "thursday": [ 28, 6, 15, 24 ],
            "friday": [ 27, 6, 16, 24 ],
            "saturday": [ 27, 5, 13, 23 ],
            "sunday": [ 25, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/double-elegy-2007.jpg',
          title: 'Double Elegy',
          artist: 'Harmony Hammond',
          year: '2007',
          rule: {
            "monday": [ 25, 4, 12, 22 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 23, 2, 10, 20 ],
            "thursday": [ 22, 1, 10, 19 ],
            "friday": [ 28, 6, 15, 24 ],
            "saturday": [ 27, 6, 16, 24 ],
            "sunday": [ 27, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/night-dreamers.jpg',
          title: 'Night Dreamers',
          artist: 'Guity Novin',
          year: '2005',
          rule: {
            "monday": [ 28, 6, 14, 24 ],
            "tuesday": [ 26, 5, 13, 23 ],
            "wednesday": [ 25, 4, 12, 22 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 23, 2, 11, 20 ],
            "saturday": [ 29, 7, 16, 25 ],
            "sunday": [ 28, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-money-can-buy-you-love-1985.jpg',
          title: 'Untitled (Money can buy you love)',
          artist: 'Barbara Kruger',
          year: '1985',
          rule: {
            "monday": [ 28, 7, 17, 25 ],
            "tuesday": [ 28, 6, 14, 24 ],
            "wednesday": [ 26, 5, 13, 23 ],
            "thursday": [ 25, 4, 12, 22 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 23, 2, 11, 20 ],
            "sunday": [ 29, 7, 16, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/blu-lascaux-1999.jpg',
          title: 'Blu Lascaux',
          artist: 'Denise Green',
          year: '1999',
          rule: {
            "monday": [ 29, 7, 16, 25 ],
            "tuesday": [ 28, 7, 17, 25 ],
            "wednesday": [ 28, 6, 14, 24 ],
            "thursday": [ 26, 5, 13, 23 ],
            "friday": [ 25, 4, 12, 22 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 23, 2, 11, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/three-fold-manifestation-ii-1987.jpg',
          title: 'Three-fold Manifestation II',
          artist: 'Alice Aycock',
          year: '1987',
          rule: {
            "monday": [ 23, 2, 11, 20 ],
            "tuesday": [ 29, 7, 16, 25 ],
            "wednesday": [ 28, 7, 17, 25 ],
            "thursday": [ 28, 6, 14, 24 ],
            "friday": [ 26, 5, 13, 23 ],
            "saturday": [ 25, 4, 12, 22 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/eurydice-n-27-1998.jpg',
          title: 'Eurydice n. 27',
          artist: 'Bracha L. Ettinger',
          year: '1998',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 23, 2, 11, 20 ],
            "wednesday": [ 29, 7, 16, 25 ],
            "thursday": [ 28, 7, 17, 25 ],
            "friday": [ 28, 6, 14, 24 ],
            "saturday": [ 26, 5, 13, 23 ],
            "sunday": [ 25, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/electrolux.jpg',
          title: 'Electrolux',
          artist: 'Edith Vonnegut',
          year: '?',
          rule: {
            "monday": [ 25, 4, 12, 22 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 23, 2, 11, 20 ],
            "thursday": [ 29, 7, 16, 25 ],
            "friday": [ 28, 7, 17, 25 ],
            "saturday": [ 28, 6, 14, 24 ],
            "sunday": [ 26, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/baum-wesen-2007.jpg',
          title: 'Baum-Wesen',
          artist: 'Leiko Ikemura',
          year: '2007',
          rule: {
            "monday": [ 26, 5, 13, 23 ],
            "tuesday": [ 25, 4, 12, 22 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 23, 2, 11, 20 ],
            "friday": [ 29, 7, 16, 25 ],
            "saturday": [ 28, 7, 17, 25 ],
            "sunday": [ 28, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/susquehanna-2007.jpg',
          title: 'Susquehanna',
          artist: 'Anne Appleby',
          year: '2007',
          rule: {
            "monday": [ 29, 7, 15, 25 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 26, 5, 13, 23 ],
            "thursday": [ 25, 4, 12, 22 ],
            "friday": [ 24, 3, 12, 21 ],
            "saturday": [ 30, 8, 17, 26 ],
            "sunday": [ 29, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/born-2002.jpg',
          title: 'Born',
          artist: 'Kiki Smith',
          year: '2002',
          rule: {
            "monday": [ 29, 8, 18, 26 ],
            "tuesday": [ 29, 7, 15, 25 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 26, 5, 13, 23 ],
            "friday": [ 25, 4, 12, 22 ],
            "saturday": [ 24, 3, 12, 21 ],
            "sunday": [ 30, 8, 17, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-rockhole-site-of-marrapinti-2006.jpg',
          title: 'Untitled (Rockhole Site of Marrapinti)',
          artist: 'Doreen Reid Nakamarra',
          year: '2005',
          rule: {
            "monday": [ 30, 8, 17, 26 ],
            "tuesday": [ 29, 8, 18, 26 ],
            "wednesday": [ 29, 7, 15, 25 ],
            "thursday": [ 27, 6, 14, 24 ],
            "friday": [ 26, 5, 13, 23 ],
            "saturday": [ 25, 4, 12, 22 ],
            "sunday": [ 24, 3, 12, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/mon-corps.jpg',
          title: 'Mon corps',
          artist: 'Miss.Tic',
          year: '?',
          rule: {
            "monday": [ 24, 3, 12, 21 ],
            "tuesday": [ 30, 8, 17, 26 ],
            "wednesday": [ 29, 8, 18, 26 ],
            "thursday": [ 29, 7, 15, 25 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 26, 5, 13, 23 ],
            "sunday": [ 25, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/eye-upon-gate-photocollage-2000.jpg',
          title: 'Eye upon Gate - photo-collage by graphic artist Hilly van Eerten',
          artist: 'Hilly van Eerten',
          year: '2000',
          rule: {
            "monday": [ 25, 4, 12, 22 ],
            "tuesday": [ 24, 3, 12, 21 ],
            "wednesday": [ 30, 8, 17, 26 ],
            "thursday": [ 29, 8, 18, 26 ],
            "friday": [ 29, 7, 15, 25 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 26, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/291-1997.jpg',
          title: '#291',
          artist: 'Jessica Stockholder',
          year: '1997',
          rule: {
            "monday": [ 26, 5, 13, 23 ],
            "tuesday": [ 25, 4, 12, 22 ],
            "wednesday": [ 24, 3, 12, 21 ],
            "thursday": [ 30, 8, 17, 26 ],
            "friday": [ 29, 8, 18, 26 ],
            "saturday": [ 29, 7, 15, 25 ],
            "sunday": [ 27, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/imgp-rosa-rot-malwerk-silvia-l-lueftenegger-contemporary-art-design-performance-theater-shoe-7486p.jpg',
          title: 'IMGP Rosa Rot Malwerk Silvia L Lueftenegger Contemporary Art Design Performance Theater Shoe 7486P',
          artist: 'Silvia L. Lueftenegger RosaRot',
          year: '2007',
          rule: {
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 26, 5, 13, 23 ],
            "wednesday": [ 25, 4, 12, 22 ],
            "thursday": [ 24, 3, 12, 21 ],
            "friday": [ 30, 8, 17, 26 ],
            "saturday": [ 29, 8, 18, 26 ],
            "sunday": [ 29, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/pont-du-ciel-100by100cm-2016.jpg',
          title: 'Pont Du Ciel',
          artist: 'Li CHEVALIER',
          year: '2016',
          rule: {
            "monday": [ 30, 8, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 26, 5, 13, 23 ],
            "friday": [ 25, 4, 13, 22 ],
            "saturday": [ 31, 9, 18, 27 ],
            "sunday": [ 30, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/everyone-i-have-ever-slept-with-1963-1995-1995.jpg',
          title: 'Everyone I Have Ever Slept With 1963–1995',
          artist: 'Tracey Emin',
          year: '1995',
          rule: {
            "monday": [ 30, 9, 19, 27 ],
            "tuesday": [ 30, 8, 16, 26 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 27, 6, 14, 24 ],
            "friday": [ 26, 5, 13, 23 ],
            "saturday": [ 25, 4, 13, 22 ],
            "sunday": [ 31, 9, 18, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/rectangle-torque-glo-pod-iridescent-hot-red-pink-2013.jpg',
          title: 'Rectangle Torque Glo-Pod (Iridescent Hot Red/Pink)',
          artist: 'Gisela Colon',
          year: '2013',
          rule: {
            "monday": [ 31, 9, 18, 27 ],
            "tuesday": [ 30, 9, 19, 27 ],
            "wednesday": [ 30, 8, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 26, 5, 13, 23 ],
            "sunday": [ 25, 4, 13, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1995-40-x-45-cm.png',
          title: 'Untitled',
          artist: 'Ilse D\'Hollander',
          year: '1995',
          rule: {
            "monday": [ 25, 4, 13, 22 ],
            "tuesday": [ 31, 9, 18, 27 ],
            "wednesday": [ 30, 9, 19, 27 ],
            "thursday": [ 30, 8, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 26, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-box-2008.jpg',
          title: 'Untitled (Box)',
          artist: 'Tea Jorjadze',
          year: '2008',
          rule: {
            "monday": [ 26, 5, 13, 23 ],
            "tuesday": [ 25, 4, 13, 22 ],
            "wednesday": [ 31, 9, 18, 27 ],
            "thursday": [ 30, 9, 19, 27 ],
            "friday": [ 30, 8, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 27, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/construction-rubble-of-tent-s-central-space-tent-rotterdam-2011.jpg',
          title: 'Construction Rubble of TENT\'s Central Space, TENT Rotterdam',
          artist: 'Lara Almarcegui',
          year: '2011',
          rule: {
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 26, 5, 13, 23 ],
            "wednesday": [ 25, 4, 13, 22 ],
            "thursday": [ 31, 9, 18, 27 ],
            "friday": [ 30, 9, 19, 27 ],
            "saturday": [ 30, 8, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/lovers-2003.jpg',
          title: 'Lovers',
          artist: 'Dana Schutz',
          year: '2003',
          rule: {
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 26, 5, 13, 23 ],
            "thursday": [ 25, 4, 13, 22 ],
            "friday": [ 31, 9, 18, 27 ],
            "saturday": [ 30, 9, 19, 27 ],
            "sunday": [ 30, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/cdl-hanuman-image03.jpg',
          title: '26000 Bells of Hanuman Sculpture',
          artist: 'Charuvi Agrawal',
          year: '2014',
          rule: {
            "monday": [ 31, 9, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 27, 6, 14, 24 ],
            "friday": [ 26, 5, 14, 23 ],
            "saturday": [ 1, 10, 19, 28 ],
            "sunday": [ 31, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/rq5.jpg',
          title: 'RQ5',
          artist: 'Raquel Díaz',
          year: '2016',
          rule: {
            "monday": [ 31, 10, 20, 28 ],
            "tuesday": [ 31, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 26, 5, 14, 23 ],
            "sunday": [ 1, 10, 19, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/dsc-0279.jpg',
          title: 'Not ur babe embroidery hoop',
          artist: 'Samantha Troulis',
          year: '2017',
          rule: {
            "monday": [ 1, 10, 19, 28 ],
            "tuesday": [ 31, 10, 20, 28 ],
            "wednesday": [ 31, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 26, 5, 14, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/prologue-on-the-synagogue-the-woman-seated-upon-the-beast.jpg',
          title: 'Prologue. On the Synagogue: the woman seated upon the beast',
          artist: 'Ende',
          year: 'c.975',
          rule: {
            "monday": [ 26, 5, 14, 23 ],
            "tuesday": [ 1, 10, 19, 28 ],
            "wednesday": [ 31, 10, 20, 28 ],
            "thursday": [ 31, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 27, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/john-baptizing-christ.jpg',
          title: 'John baptizing Christ',
          artist: 'Claricia',
          year: '?',
          rule: {
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 26, 5, 14, 23 ],
            "wednesday": [ 1, 10, 19, 28 ],
            "thursday": [ 31, 10, 20, 28 ],
            "friday": [ 31, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/three-children-with-dog-1590.jpg',
          title: 'Three children with dog',
          artist: 'Sofonisba Anguissola',
          year: '1590',
          rule: {
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 26, 5, 14, 23 ],
            "thursday": [ 1, 10, 19, 28 ],
            "friday": [ 31, 10, 20, 28 ],
            "saturday": [ 31, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/self-portrait-or-venetian-woman-attributed.jpg',
          title: 'Self-portrait (or Venetian Woman; attributed)',
          artist: 'Marietta Robusti',
          year: '?',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 26, 5, 14, 23 ],
            "friday": [ 1, 10, 19, 28 ],
            "saturday": [ 31, 10, 20, 28 ],
            "sunday": [ 31, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/vanitas-1613.jpg',
          title: 'Vanitas',
          artist: 'Clara Peeters',
          year: '1613',
          rule: {
            "monday": [ 1, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 27, 6, 15, 24 ],
            "saturday": [ 2, 11, 20, 29 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/st-mary-magdalene-1650.jpg',
          title: 'St. Mary Magdalene',
          artist: 'Josefa de Obidos',
          year: '1650',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 1, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 27, 6, 15, 24 ],
            "sunday": [ 2, 11, 20, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/spray-of-flowers-with-a-beetle-on-a-stone-balustrade-1741.jpg',
          title: 'Spray of Flowers, with a Beetle on a Stone Balustrade',
          artist: 'Rachel Ruysch',
          year: '1741',
          rule: {
            "monday": [ 2, 11, 20, 29 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 1, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 27, 6, 15, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/self-portrait-the-artist-hesitating-between-the-arts-of-music-and-painting-1791.jpg',
          title: 'Self Portrait, the Artist Hesitating Between the Arts of Music and Painting',
          artist: 'Angelica Kauffman',
          year: '1791',
          rule: {
            "monday": [ 27, 6, 15, 24 ],
            "tuesday": [ 2, 11, 20, 29 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 1, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/madame-jeanne-desbassayns-de-richemont-and-her-son-eug-ne.jpg',
          title: 'Madame Jeanne Desbassayns de Richemont And Her Son, Eugène',
          artist: 'Marie-Guillemine Benoist',
          year: '?',
          rule: {
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 27, 6, 15, 24 ],
            "wednesday": [ 2, 11, 20, 29 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 1, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/saint-cecilia-after-the-manner-of-raphael-1865.jpg',
          title: 'Saint Cecilia, After the Manner of Raphael',
          artist: 'Julia Margaret Cameron',
          year: '1865',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 27, 6, 15, 24 ],
            "thursday": [ 2, 11, 20, 29 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 1, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/forest-interior-mary-josephine-walters-uhd.jpg',
          title: 'Forest Interior',
          artist: 'Mary Josephine Walters',
          year: '?',
          rule: {
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 27, 6, 15, 24 ],
            "friday": [ 2, 11, 20, 29 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 1, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-sisters.jpg',
          title: 'The Sisters',
          artist: 'Mary Cassatt',
          year: 'c.1885',
          rule: {
            "monday": [ 2, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 7, 16, 25 ],
            "saturday": [ 3, 12, 22, 30 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/woman-awakening-1876.jpg',
          title: 'Woman Awakening',
          artist: 'Eva Gonzales',
          year: '1876',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 2, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 7, 16, 25 ],
            "sunday": [ 3, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/a-murder-of-crows.png',
          title: 'A Murder of Crows',
          artist: 'Mildred Anne Butler',
          year: '?',
          rule: {
            "monday": [ 3, 12, 22, 30 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 2, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 7, 16, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/plow_boy_251609.jpg',
          title: 'Plow Boy',
          artist: 'Grandma Moses',
          year: '1950',
          rule: {
            "monday": [ 28, 7, 16, 25 ],
            "tuesday": [ 3, 12, 22, 30 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 2, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/tree-1930.jpg',
          title: 'Tree',
          artist: 'Seraphine Louis',
          year: '1930',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 7, 16, 25 ],
            "wednesday": [ 3, 12, 22, 30 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 2, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/dawn-ca-1909.jpg',
          title: 'Dawn',
          artist: 'Alice Boughton',
          year: '1909',
          rule: {
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 28, 7, 16, 25 ],
            "thursday": [ 3, 12, 22, 30 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 2, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/portrait-of-a-woman.jpg',
          title: 'Portrait of a woman',
          artist: 'Thalia Flora-Karavia',
          year: '?',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 7, 16, 25 ],
            "friday": [ 3, 12, 22, 30 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 2, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/blunden-harbour-1930(1).jpg',
          title: 'Blunden Harbour',
          artist: 'Emily Carr',
          year: '1930',
          rule: {
            "monday": [ 3, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 17, 26 ],
            "saturday": [ 4, 13, 23, 31 ],
            "sunday": [ 3, 13, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/bailly-self-portrait-1.jpg',
          title: 'Self-portrait',
          artist: 'Alice Bailly',
          year: '1917',
          rule: {
            "monday": [ 3, 13, 23, 31 ],
            "tuesday": [ 3, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 17, 26 ],
            "sunday": [ 4, 13, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/twee-bomen-olieverf-op-doek-1910.jpg',
          title: 'Twee bomen, olieverf op doek',
          artist: 'Jacoba van Heemskerck',
          year: '1910',
          rule: {
            "monday": [ 4, 13, 23, 31 ],
            "tuesday": [ 3, 13, 23, 31 ],
            "wednesday": [ 3, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 17, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/jawlensky-and-werefkin-1908(1).jpg',
          title: 'Jawlensky and Werefkin',
          artist: 'Gabriele Munter',
          year: '1908',
          rule: {
            "monday": [ 29, 8, 17, 26 ],
            "tuesday": [ 4, 13, 23, 31 ],
            "wednesday": [ 3, 13, 23, 31 ],
            "thursday": [ 3, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/abstract-painting-1914.jpg',
          title: 'Abstract Painting',
          artist: 'Vanessa Bell',
          year: '1914',
          rule: {
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 29, 8, 17, 26 ],
            "wednesday": [ 4, 13, 23, 31 ],
            "thursday": [ 3, 13, 23, 31 ],
            "friday": [ 3, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/three-female-figures-1910.jpg',
          title: 'Three Female Figures',
          artist: 'Aleksandra Ekster',
          year: '1910',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 17, 26 ],
            "thursday": [ 4, 13, 23, 31 ],
            "friday": [ 3, 13, 23, 31 ],
            "saturday": [ 3, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/bather-1911.jpg',
          title: 'Bather',
          artist: 'Zinaida Serebriakova',
          year: '1911',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 17, 26 ],
            "friday": [ 4, 13, 23, 31 ],
            "saturday": [ 3, 13, 23, 31 ],
            "sunday": [ 3, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/ressam-musfik-hanim-07.jpg',
          title: 'Untitled Portrait',
          artist: 'Mihri Musfik',
          year: '?',
          rule: {
            "monday": [ 4, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 18, 27 ],
            "saturday": [ 5, 14, 24, 1 ],
            "sunday": [ 4, 14, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/blue-line.jpg',
          title: 'Blue Line',
          artist: 'Georgia O\'Keeffe',
          year: '1919',
          rule: {
            "monday": [ 4, 14, 24, 1 ],
            "tuesday": [ 4, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 18, 27 ],
            "sunday": [ 5, 14, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/composition-1937.jpg',
          title: 'Composition',
          artist: 'Sophie Taeuber-Arp',
          year: '1937',
          rule: {
            "monday": [ 5, 14, 24, 1 ],
            "tuesday": [ 4, 14, 24, 1 ],
            "wednesday": [ 4, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 18, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/study-for-man-and-machine-1921.jpg',
          title: 'Study for Man and Machine',
          artist: 'Hannah Hoch',
          year: '1921',
          rule: {
            "monday": [ 30, 9, 18, 27 ],
            "tuesday": [ 5, 14, 24, 1 ],
            "wednesday": [ 4, 14, 24, 1 ],
            "thursday": [ 4, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/a-little-boy-lost-1920-25.jpg',
          title: 'A Little Boy Lost',
          artist: 'Dorothy Lathrop',
          year: '1920',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 18, 27 ],
            "wednesday": [ 5, 14, 24, 1 ],
            "thursday": [ 4, 14, 24, 1 ],
            "friday": [ 4, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-hunter-s-moon-1955.jpg',
          title: 'The Hunter’s Moon',
          artist: 'Winifred Nicholson',
          year: '1955',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 18, 27 ],
            "thursday": [ 5, 14, 24, 1 ],
            "friday": [ 4, 14, 24, 1 ],
            "saturday": [ 4, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/desnudo-femenino-ante-el-espejo.jpg',
          title: 'Desnudo femenino ante el espejo',
          artist: 'Antonietta Raphael',
          year: '?',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 18, 27 ],
            "friday": [ 5, 14, 24, 1 ],
            "saturday": [ 4, 14, 24, 1 ],
            "sunday": [ 4, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/girl-in-yellow-sweater-1936.jpg',
          title: 'Girl in Yellow Sweater',
          artist: 'Prudence Heward',
          year: '1936',
          rule: {
            "monday": [ 5, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 19, 28 ],
            "saturday": [ 6, 15, 25, 2 ],
            "sunday": [ 5, 15, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/406px-mortejeanne.jpg',
          title: 'Death',
          artist: 'Jeanne Hébuterne',
          year: '1919',
          rule: {
            "monday": [ 5, 15, 25, 2 ],
            "tuesday": [ 5, 14, 22, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 19, 28 ],
            "sunday": [ 6, 15, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-goose-girl-1918.jpg',
          title: 'The Goose Girl',
          artist: 'Winifred Knights',
          year: '1918',
          rule: {
            "monday": [ 6, 15, 25, 2 ],
            "tuesday": [ 5, 15, 25, 2 ],
            "wednesday": [ 5, 14, 22, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 19, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/still-life.jpg',
          title: 'Still Life',
          artist: 'Gohar Fermanyan',
          year: '?',
          rule: {
            "monday": [ 31, 10, 19, 28 ],
            "tuesday": [ 6, 15, 25, 2 ],
            "wednesday": [ 5, 15, 25, 2 ],
            "thursday": [ 5, 14, 22, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/kitty-pearson-1973.jpg',
          title: 'Kitty Pearson',
          artist: 'Alice Neel',
          year: '1973',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 19, 28 ],
            "wednesday": [ 6, 15, 25, 2 ],
            "thursday": [ 5, 15, 25, 2 ],
            "friday": [ 5, 14, 22, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/at-the-mirror-1970-c-5.jpg',
          title: 'At the Mirror',
          artist: 'Margit Selska',
          year: '1970',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 19, 28 ],
            "thursday": [ 6, 15, 25, 2 ],
            "friday": [ 5, 15, 25, 2 ],
            "saturday": [ 5, 14, 22, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/antique-portrait-1940.jpg',
          title: 'Antique portrait',
          artist: 'Princess Fahrelnissa Zeid',
          year: '1940',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 19, 28 ],
            "friday": [ 6, 15, 25, 2 ],
            "saturday": [ 5, 15, 25, 2 ],
            "sunday": [ 5, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/le-grand-homme-de-la-nuit-1955.jpg',
          title: 'Le grand homme de la nuit',
          artist: 'Germaine Richier',
          year: '1955',
          rule: {
            "monday": [ 6, 15, 23, 2 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 20, 29 ],
            "saturday": [ 7, 16, 26, 3 ],
            "sunday": [ 6, 16, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/60.jpg',
          title: 'Streetview of Shanghai',
          artist: 'Guan Zilan',
          year: 'c.1960',
          rule: {
            "monday": [ 6, 16, 26, 3 ],
            "tuesday": [ 6, 15, 23, 2 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 20, 29 ],
            "sunday": [ 7, 16, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/girl-with-death-mask-she-plays-alone-1938.jpg',
          title: 'Girl with Death Mask (She Plays Alone)',
          artist: 'Frida Kahlo',
          year: '1938',
          rule: {
            "monday": [ 7, 16, 26, 3 ],
            "tuesday": [ 6, 16, 26, 3 ],
            "wednesday": [ 6, 15, 23, 2 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 20, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/leonor-fini.jpg',
          title: 'Leonor Fini',
          artist: 'Dora Maar',
          year: '?',
          rule: {
            "monday": [ 1, 11, 20, 29 ],
            "tuesday": [ 7, 16, 26, 3 ],
            "wednesday": [ 6, 16, 26, 3 ],
            "thursday": [ 6, 15, 23, 2 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/night-and-day.jpg',
          title: 'Night and Day',
          artist: 'Medi Wechsler Dinu',
          year: '?',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 20, 29 ],
            "wednesday": [ 7, 16, 26, 3 ],
            "thursday": [ 6, 16, 26, 3 ],
            "friday": [ 6, 15, 23, 2 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/voltagem-1942.jpg',
          title: 'Voltagem',
          artist: 'Dorothea Tanning',
          year: '1942',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 20, 29 ],
            "thursday": [ 7, 16, 26, 3 ],
            "friday": [ 6, 16, 26, 3 ],
            "saturday": [ 6, 15, 23, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1971-3.jpg',
          title: 'Untitled',
          artist: 'Verena Loewensberg',
          year: '1971',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 20, 29 ],
            "friday": [ 7, 16, 26, 3 ],
            "saturday": [ 6, 16, 26, 3 ],
            "sunday": [ 6, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/rivage.jpg',
          title: 'Rivage',
          artist: 'Toko Shinoda',
          year: '?',
          rule: {
            "monday": [ 7, 16, 24, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 21, 30 ],
            "saturday": [ 8, 17, 27, 4 ],
            "sunday": [ 7, 17, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/fleurs-1971.jpg',
          title: 'Fleurs',
          artist: 'Natalia Dumitresco',
          year: '1971',
          rule: {
            "monday": [ 7, 17, 27, 4 ],
            "tuesday": [ 7, 16, 24, 3 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 21, 30 ],
            "sunday": [ 8, 17, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/unknown-title-13.jpg',
          title: 'unknown title',
          artist: 'Ligia Macovei',
          year: '?',
          rule: {
            "monday": [ 8, 17, 27, 4 ],
            "tuesday": [ 7, 17, 27, 4 ],
            "wednesday": [ 7, 16, 24, 3 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 21, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/may-1965.jpg',
          title: 'May',
          artist: 'Tetyana Yablonska',
          year: '1965',
          rule: {
            "monday": [ 2, 12, 21, 30 ],
            "tuesday": [ 8, 17, 27, 4 ],
            "wednesday": [ 7, 17, 27, 4 ],
            "thursday": [ 7, 16, 24, 3 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/night-landings-sambura-1970.jpg',
          title: 'Night Landings: Sambura',
          artist: 'Jane Frank',
          year: '1970',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 21, 30 ],
            "wednesday": [ 8, 17, 27, 4 ],
            "thursday": [ 7, 17, 27, 4 ],
            "friday": [ 7, 16, 24, 3 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/composition-ii-1955.jpg',
          title: 'Composition II',
          artist: 'Huguette Arthur Bertrand',
          year: '1955',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 21, 30 ],
            "thursday": [ 8, 17, 27, 4 ],
            "friday": [ 7, 17, 27, 4 ],
            "saturday": [ 7, 16, 24, 3 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/remember-no-5-1999.jpg',
          title: 'Remember No. 5',
          artist: 'Anne Truitt',
          year: '1999',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 21, 30 ],
            "friday": [ 8, 17, 27, 4 ],
            "saturday": [ 7, 17, 27, 4 ],
            "sunday": [ 7, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/nudist-lady-with-swan-sunglasses-pa-1965-diane-arbus-courtesy-of-peder-lund.jpg',
          title: 'Nudist Lady with Swan Sunglasses',
          artist: 'Diane Arbus',
          year: '1965',
          rule: {
            "monday": [ 8, 17, 25, 4 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 22, 31 ],
            "saturday": [ 9, 18, 28, 5 ],
            "sunday": [ 8, 18, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/master-of-ceremonies-1985.jpg',
          title: 'Master of Ceremonies',
          artist: 'Miriam Schapiro',
          year: '1985',
          rule: {
            "monday": [ 8, 18, 28, 5 ],
            "tuesday": [ 8, 17, 25, 4 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 22, 31 ],
            "sunday": [ 9, 18, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1953.jpg',
          title: 'Untitled',
          artist: 'Mimi Parent',
          year: '1953',
          rule: {
            "monday": [ 9, 18, 28, 5 ],
            "tuesday": [ 8, 18, 28, 5 ],
            "wednesday": [ 8, 17, 25, 4 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 22, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/ladybug-1957.jpg',
          title: 'Ladybug',
          artist: 'Joan Mitchell',
          year: '1957',
          rule: {
            "monday": [ 3, 13, 22, 31 ],
            "tuesday": [ 9, 18, 28, 5 ],
            "wednesday": [ 8, 18, 28, 5 ],
            "thursday": [ 8, 17, 25, 4 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/tension-1956.jpg',
          title: 'Tension',
          artist: 'Martha Boto',
          year: '1956',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 22, 31 ],
            "wednesday": [ 9, 18, 28, 5 ],
            "thursday": [ 8, 18, 28, 5 ],
            "friday": [ 8, 17, 25, 4 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/los-angeles-man-with-hat-from-behind-1955.jpg',
          title: 'Los Angeles (Man with Hat from Behind)',
          artist: 'Vivian Maier',
          year: '1955',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 22, 31 ],
            "thursday": [ 9, 18, 28, 5 ],
            "friday": [ 8, 18, 28, 5 ],
            "saturday": [ 8, 17, 25, 4 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/amazonino-1-1989.jpg',
          title: 'Amazonino #1',
          artist: 'Lygia Pape',
          year: '1989',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 22, 31 ],
            "friday": [ 9, 18, 28, 5 ],
            "saturday": [ 8, 18, 28, 5 ],
            "sunday": [ 8, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/pale-painting-6-ny-07-2007.jpg',
          title: 'Pale Painting: 6 NY 07',
          artist: 'Marcia Hafif',
          year: '2007',
          rule: {
            "monday": [ 9, 18, 26, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 23, 1 ],
            "saturday": [ 10, 19, 29, 6 ],
            "sunday": [ 9, 19, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/cossak-mamay-1960c.jpg',
          title: 'Cossak Mamay',
          artist: 'Alla Horska',
          year: 'c.1960',
          rule: {
            "monday": [ 9, 19, 29, 6 ],
            "tuesday": [ 9, 18, 26, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 23, 1 ],
            "sunday": [ 10, 19, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/sprayed-picture-1964(1).jpg',
          title: 'Sprayed Picture',
          artist: 'Charlotte Posenenske',
          year: '1964',
          rule: {
            "monday": [ 10, 19, 29, 6 ],
            "tuesday": [ 9, 19, 29, 6 ],
            "wednesday": [ 9, 18, 26, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/teatro-de-sombras-as-cinco-esta-es-still-1976-2.jpg',
          title: 'Teatro de Sombras, As Cinco Estações (still)',
          artist: 'Lourdes Castro',
          year: '1976',
          rule: {
            "monday": [ 4, 14, 23, 1 ],
            "tuesday": [ 10, 19, 29, 6 ],
            "wednesday": [ 9, 19, 29, 6 ],
            "thursday": [ 9, 18, 26, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/white-disks-1.jpg',
          title: 'White Disks 1',
          artist: 'Bridget Riley',
          year: '?',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 23, 1 ],
            "wednesday": [ 10, 19, 29, 6 ],
            "thursday": [ 9, 19, 29, 6 ],
            "friday": [ 9, 18, 26, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/bean-rolls-1964.jpg',
          title: 'Bean Rolls',
          artist: 'Alison Knowles',
          year: '1964',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 23, 1 ],
            "thursday": [ 10, 19, 29, 6 ],
            "friday": [ 9, 19, 29, 6 ],
            "saturday": [ 9, 18, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/seduzir-2002-1.jpg',
          title: 'Seduzir',
          artist: 'Helena Almeida',
          year: '2002',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 23, 1 ],
            "thursday": [ 10, 19, 29, 6 ],
            "friday": [ 9, 19, 29, 6 ],
            "saturday": [ 9, 18, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-policeman-s-daughter-1987.jpg',
          title: 'The Policeman\'s Daughter',
          artist: 'Paula Rego',
          year: '1987',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 24, 2 ],
            "friday": [ 11, 20, 30, 7 ],
            "saturday": [ 10, 20, 30, 7 ],
            "sunday": [ 10, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/duepi-1971.jpg',
          title: 'Duepiù',
          artist: 'Nanda Vigo',
          year: '1971',
          rule: {
            "monday": [ 10, 19, 27, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 24, 2 ],
            "saturday": [ 11, 20, 30, 7 ],
            "sunday": [ 10, 20, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/pink-glasses.jpg',
          title: 'Pink Glasses',
          artist: 'Dora Boneva',
          year: '?',
          rule: {
            "monday": [ 10, 20, 30, 7 ],
            "tuesday": [ 10, 19, 27, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 24, 2 ],
            "sunday": [ 11, 20, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-4.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: '?',
          rule: {
            "monday": [ 11, 20, 30, 7 ],
            "tuesday": [ 10, 20, 30, 7 ],
            "wednesday": [ 10, 19, 27, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/summer-moon-2005.jpg',
          title: 'Summer Moon',
          artist: 'Pat Steir',
          year: '2005',
          rule: {
            "monday": [ 5, 15, 24, 2 ],
            "tuesday": [ 11, 20, 30, 7 ],
            "wednesday": [ 10, 20, 30, 7 ],
            "thursday": [ 10, 19, 27, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/countdown-to-violence-1964.jpg',
          title: 'Countdown to Violence',
          artist: 'Pauline Boty',
          year: '1964',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 24, 2 ],
            "wednesday": [ 11, 20, 30, 7 ],
            "thursday": [ 10, 20, 30, 7 ],
            "friday": [ 10, 19, 27, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-spider-web-2000.jpg',
          title: 'Untitled (Spider Web)',
          artist: 'Vija Celmins',
          year: '2000',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 15, 24, 2 ],
            "thursday": [ 11, 20, 30, 7 ],
            "friday": [ 10, 20, 30, 7 ],
            "saturday": [ 10, 19, 27, 6 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/red-river-valley-1-2003.jpg',
          title: 'Red River Valley #1',
          artist: 'Pat Lipsky',
          year: '2003',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 25, 3 ],
            "friday": [ 12, 21, 31, 8 ],
            "saturday": [ 11, 21, 31, 8 ],
            "sunday": [ 11, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/2-copper-1976.jpg',
          title: '#2 Copper',
          artist: 'Jacqueline Winsor',
          year: '1976',
          rule: {
            "monday": [ 11, 20, 28, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 25, 3 ],
            "saturday": [ 12, 21, 31, 8 ],
            "sunday": [ 11, 21, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/knowledge-66-western-europe-late-16th-cen-1998.jpg',
          title: 'Knowledge #66: Western Europe, late 16th cen.',
          artist: 'Joyce Kozloff',
          year: '1998',
          rule: {
            "monday": [ 11, 21, 31, 8 ],
            "tuesday": [ 11, 20, 28, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 25, 3 ],
            "sunday": [ 12, 21, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/waiting-for-the-rain-1991.jpg',
          title: 'Waiting for the Rain',
          artist: 'Harmony Hammond',
          year: '1991',
          rule: {
            "monday": [ 12, 21, 31, 8 ],
            "tuesday": [ 11, 21, 31, 8 ],
            "wednesday": [ 11, 20, 28, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/wonderful-world.jpg',
          title: 'Wonderful World',
          artist: 'Guity Novin',
          year: '?',
          rule: {
            "monday": [ 6, 16, 25, 3 ],
            "tuesday": [ 12, 21, 31, 8 ],
            "wednesday": [ 11, 21, 31, 8 ],
            "thursday": [ 11, 20, 28, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-questions-1991.jpg',
          title: 'Untitled (Questions)',
          artist: 'Barbara Kruger',
          year: '1991',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 17, 26, 4 ],
            "wednesday": [ 13, 22, 1, 9 ],
            "thursday": [ 12, 22, 1, 9 ],
            "friday": [ 12, 21, 29, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/musical-chairs-2000.jpg',
          title: 'Musical Chairs',
          artist: 'Denise Green',
          year: '2000',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 26, 4 ],
            "thursday": [ 13, 22, 1, 9 ],
            "friday": [ 12, 22, 1, 9 ],
            "saturday": [ 12, 21, 29, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/a-little-cosmic-rhythm-2007.jpg',
          title: 'A Little Cosmic Rhythm',
          artist: 'Alice Aycock',
          year: '2007',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 18, 27, 5 ],
            "friday": [ 14, 23, 2, 10 ],
            "saturday": [ 13, 23, 2, 10 ],
            "sunday": [ 13, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/mamalangue-n-5-2001.jpg',
          title: 'Mamalangue n. 5',
          artist: 'Bracha L. Ettinger',
          year: '2001',
          rule: {
            "monday": [ 13, 22, 30, 9 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 18, 27, 5 ],
            "saturday": [ 14, 23, 2, 10 ],
            "sunday": [ 13, 23, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/goddess-in-the-freezer.jpg',
          title: 'Goddess In The Freezer',
          artist: 'Edith Vonnegut',
          year: '?',
          rule: {
            "monday": [ 13, 23, 2, 10 ],
            "tuesday": [ 13, 22, 30, 9 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 18, 27, 5 ],
            "sunday": [ 14, 23, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 311,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/whitby-linocut-25ed-g-lazzerini.jpg',
          title: 'Whitby',
          artist: 'Giuliana Lazzerini',
          year: '2017',
          rule: {
            "monday": [ 14, 23, 2, 10 ],
            "tuesday": [ 13, 23, 2, 10 ],
            "wednesday": [ 13, 22, 30, 9 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 8, 18, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 312,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/hands (1).jpg',
          title: 'Hands',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 8, 18, 27, 5 ],
            "tuesday": [ 14, 23, 2, 10 ],
            "wednesday": [ 13, 23, 2, 10 ],
            "thursday": [ 13, 22, 30, 9 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 313,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/canoe-woman-1988.jpg',
          title: 'Canoe / Woman',
          artist: 'Landon Mackenzie',
          year: '1988',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 27, 5 ],
            "wednesday": [ 14, 23, 2, 10 ],
            "thursday": [ 13, 23, 2, 10 ],
            "friday": [ 13, 22, 30, 9 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 314,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-97-1982.jpg',
          title: 'Untitled #97',
          artist: 'Cindy Sherman',
          year: '1982',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 18, 27, 5 ],
            "thursday": [ 14, 23, 2, 10 ],
            "friday": [ 13, 23, 2, 10 ],
            "saturday": [ 13, 22, 30, 9 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 315,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-from-the-series-still-water-the-river-thames-for-example-1999-10.jpg',
          title: 'Untitled (from the series Still Water (The River Thames, for Example))',
          artist: 'Roni Horn',
          year: '1999',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 19, 28, 6 ],
            "friday": [ 15, 24, 3, 11 ],
            "saturday": [ 14, 24, 3, 11 ],
            "sunday": [ 14, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 316,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1997.jpg',
          title: 'Untitled',
          artist: 'Dilek Demirci',
          year: '1997',
          rule: {
            "monday": [ 14, 23, 31, 10 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 19, 28, 6 ],
            "saturday": [ 15, 24, 3, 11 ],
            "sunday": [ 14, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 317,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/limit-of-time.jpg',
          title: 'Limit of Time',
          artist: 'Nina Tokhtaman Valetova',
          year: '2011',
          rule: {
            "monday": [ 14, 24, 3, 11 ],
            "tuesday": [ 14, 23, 31, 10 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 19, 28, 6 ],
            "sunday": [ 15, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 318,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/a-shift-in-the-stream-1995-97.jpg',
          title: 'A Shift in the Stream',
          artist: 'Maya Lin',
          year: '1995 - 1997',
          rule: {
            "monday": [ 15, 24, 3, 11 ],
            "tuesday": [ 14, 24, 3, 11 ],
            "wednesday": [ 14, 23, 31, 10 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 319,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/imgp-rosa-rot-malwerk-silvia-l-lueftenegger-contemporary-art-design-performance-theater-shoe-6871p.jpg',
          title: 'IMGP Rosa Rot Malwerk Silvia L Lueftenegger Contemporary Art Design Performance Theater Shoe 6871P Kopie',
          artist: 'Silvia L. Lueftenegger RosaRot',
          year: '2007',
          rule: {
            "monday": [ 9, 19, 28, 6 ],
            "tuesday": [ 15, 24, 3, 11 ],
            "wednesday": [ 14, 24, 3, 11 ],
            "thursday": [ 14, 23, 31, 10 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 320,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/colormirror-bielefeld-1-2-2011.jpg',
          title: 'Colormirror Bielefeld 1 & 2',
          artist: 'Regine Schumann',
          year: '2011',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 19, 28, 6 ],
            "wednesday": [ 15, 24, 3, 11 ],
            "thursday": [ 14, 24, 3, 11 ],
            "friday": [ 14, 23, 31, 10 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 321,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-one-hundred-spaces-1997.jpg',
          title: 'Untitled (One Hundred Spaces)',
          artist: 'Rachel Whiteread',
          year: '1997',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 19, 28, 6 ],
            "thursday": [ 15, 24, 3, 11 ],
            "friday": [ 14, 24, 3, 11 ],
            "saturday": [ 14, 23, 31, 10 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 322,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/tapis-de-lecture-2000.jpg',
          title: 'Tapis de lecture',
          artist: 'Dominique Gonzalez-Foerster',
          year: '2000',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 10, 20, 29, 7 ],
            "friday": [ 16, 25, 4, 12 ],
            "saturday": [ 15, 25, 4, 12 ],
            "sunday": [ 15, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 323,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/pools-century-miami-2003.jpg',
          title: 'Pools - Century [Miami]',
          artist: 'Sarah Morris',
          year: '2003',
          rule: {
            "monday": [ 15, 24, 1, 11 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 10, 20, 29, 7 ],
            "saturday": [ 16, 25, 4, 12 ],
            "sunday": [ 15, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 324,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/forward-sweep.jpg',
          title: 'Forward Sweep',
          artist: 'Dana Levin',
          year: '?',
          rule: {
            "monday": [ 15, 25, 4, 12 ],
            "tuesday": [ 15, 24, 1, 11 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 10, 20, 29, 7 ],
            "sunday": [ 16, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 325,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/36-who-is-who-11x14in-2017-2-svetlana-kanyo.jpg',
          title: 'Still Life"Who is Who"',
          artist: 'Svetlana Kanyo',
          year: '2017',
          rule: {
            "monday": [ 16, 25, 4, 12 ],
            "tuesday": [ 15, 25, 4, 12 ],
            "wednesday": [ 15, 24, 1, 11 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 10, 20, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 326,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/hundred-lavish-months-of-bushwack-2004.jpg',
          title: 'Hundred Lavish Months of Bushwack',
          artist: 'Wangechi Mutu',
          year: '2004',
          rule: {
            "monday": [ 10, 20, 29, 7 ],
            "tuesday": [ 16, 25, 4, 12 ],
            "wednesday": [ 15, 25, 4, 12 ],
            "thursday": [ 15, 24, 1, 11 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 327,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/chris-s-rubber-soul-2001.jpg',
          title: 'Chris\'s Rubber Soul',
          artist: 'Dana Schutz',
          year: '2001',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 10, 20, 29, 7 ],
            "wednesday": [ 16, 25, 4, 12 ],
            "thursday": [ 15, 25, 4, 12 ],
            "friday": [ 15, 24, 1, 11 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 328,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/erin-hanson-oaks-in-green.jpg',
          title: 'Oaks in Green',
          artist: 'Erin Hanson',
          year: '?',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 10, 20, 29, 7 ],
            "thursday": [ 16, 25, 4, 12 ],
            "friday": [ 15, 25, 4, 12 ],
            "saturday": [ 15, 24, 1, 11 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 329,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/yy097-1.jpg',
          title: 'Untitled',
          artist: 'Yui Yaegashi',
          year: '2017',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 11, 21, 30, 8 ],
            "friday": [ 17, 26, 5, 13 ],
            "saturday": [ 16, 26, 5, 13 ],
            "sunday": [ 16, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 330,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/eyes-study.JPG',
          title: 'Eyes study',
          artist: 'Lilian Greisse',
          year: '2017',
          rule: {
            "monday": [ 16, 25, 2, 12 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 11, 21, 30, 8 ],
            "saturday": [ 17, 26, 5, 13 ],
            "sunday": [ 16, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 331,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/play-school-2008.jpg',
          title: 'Play School',
          artist: 'Sharon Butler',
          year: '2008',
          rule: {
            "monday": [ 16, 26, 5, 13 ],
            "tuesday": [ 16, 25, 2, 12 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 11, 21, 30, 8 ],
            "sunday": [ 17, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 332,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/jonas-out-of-the-jaws-of-the-monster.jpg',
          title: 'Jonas out of the jaws of the monster',
          artist: 'Herrad of Landsberg',
          year: '?',
          rule: {
            "monday": [ 17, 26, 5, 13 ],
            "tuesday": [ 16, 26, 5, 13 ],
            "wednesday": [ 16, 25, 2, 12 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 11, 21, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 333,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/saint-catherine-receives-the-stigmata.jpg',
          title: 'Saint Catherine Receives the Stigmata',
          artist: 'Plautilla Nelli',
          year: '?',
          rule: {
            "monday": [ 11, 21, 30, 8 ],
            "tuesday": [ 17, 26, 5, 13 ],
            "wednesday": [ 16, 26, 5, 13 ],
            "thursday": [ 16, 25, 2, 12 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 334,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/virgin-and-child-with-saint-1595.jpg',
          title: 'Virgin and Child with Saint',
          artist: 'Barbara Longhi',
          year: '1595',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 11, 21, 30, 8 ],
            "wednesday": [ 17, 26, 5, 13 ],
            "thursday": [ 16, 26, 5, 13 ],
            "friday": [ 16, 25, 2, 12 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 335,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/susanna-and-the-elders-1610.jpg',
          title: 'Susanna and the Elders',
          artist: 'Artemisia Gentileschi',
          year: '1610',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 11, 21, 30, 8 ],
            "thursday": [ 17, 26, 5, 13 ],
            "friday": [ 16, 26, 5, 13 ],
            "saturday": [ 16, 25, 2, 12 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 336,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/tulip.jpg',
          title: 'Tulip',
          artist: 'Judith Leyster',
          year: 'c.1643',
          rule: {
            "monday": [ 15, 25, 2, 12 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 12, 22, 31, 9 ],
            "friday": [ 18, 27, 6, 14 ],
            "saturday": [ 17, 27, 6, 14 ],
            "sunday": [ 17, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 337,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/spiders-ants-and-hummingbird-on-a-branch-of-a-guava-1705.jpg',
          title: 'Spiders, ants and hummingbird on a branch of a guava',
          artist: 'Maria Sibylla Merian',
          year: '1705',
          rule: {
            "monday": [ 17, 26, 3, 13 ],
            "tuesday": [ 15, 25, 2, 12 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 12, 22, 31, 9 ],
            "saturday": [ 18, 27, 6, 14 ],
            "sunday": [ 17, 27, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 338,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/unknown-title.jpg',
          title: 'unknown title',
          artist: 'Giulia Lama',
          year: '?',
          rule: {
            "monday": [ 17, 27, 6, 14 ],
            "tuesday": [ 17, 26, 3, 13 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 12, 22, 31, 9 ],
            "sunday": [ 18, 27, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 339,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/hyacinthe-gabrielle-roland-1791.jpg',
          title: 'Hyacinthe-Gabrielle Roland',
          artist: 'Louise Elisabeth Vigee Le Brun',
          year: '1791',
          rule: {
            "monday": [ 18, 27, 6, 14 ],
            "tuesday": [ 17, 27, 6, 14 ],
            "wednesday": [ 17, 26, 3, 13 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 12, 22, 31, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 340,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/portrait-of-grand-duchess-zinaida-yusupova.jpg',
          title: 'Portrait of Grand Duchess Zinaida Yusupova',
          artist: 'Christina Robertson',
          year: 'c.1845',
          rule: {
            "monday": [ 12, 22, 31, 9 ],
            "tuesday": [ 18, 27, 6, 14 ],
            "wednesday": [ 17, 27, 6, 14 ],
            "thursday": [ 17, 26, 3, 13 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 341,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/carnivorous-flower.jpg',
          title: 'Carnivorous Flower',
          artist: 'Marianne North',
          year: '?',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 12, 22, 31, 9 ],
            "wednesday": [ 18, 27, 6, 14 ],
            "thursday": [ 17, 27, 6, 14 ],
            "friday": [ 17, 26, 3, 13 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 342,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-port-of-nice.jpg',
          title: 'The Port of Nice',
          artist: 'Berthe Morisot',
          year: '1882',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 12, 22, 31, 9 ],
            "thursday": [ 18, 27, 6, 14 ],
            "friday": [ 17, 27, 6, 14 ],
            "saturday": [ 17, 26, 3, 13 ],
            "sunday": [ 15, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 343,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/giverny-landscae-in-monet-s-garden-1897.jpg',
          title: 'Giverny Landscae, in Monet\'s Garden',
          artist: 'Lilla Cabot Perry',
          year: '1897',
          rule: {
            "monday": [ 16, 26, 3, 13 ],
            "tuesday": [ 15, 25, 2, 12 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 13, 23, 1, 10 ],
            "friday": [ 19, 28, 7, 15 ],
            "saturday": [ 18, 28, 7, 15 ],
            "sunday": [ 18, 27, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 344,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/louise-abb-ma-a-game-of-croquet.jpg',
          title: 'A Game of Croquet',
          artist: 'Louise Abbéma',
          year: '1872',
          rule: {
            "monday": [ 18, 27, 4, 14 ],
            "tuesday": [ 16, 26, 3, 13 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 13, 23, 1, 10 ],
            "saturday": [ 19, 28, 7, 15 ],
            "sunday": [ 18, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 345,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/young-girl-before-a-lit-lamp-anna-ancher.jpg',
          title: 'Young Girl Before a Lit Lamp',
          artist: 'Anna Ancher',
          year: '1887',
          rule: {
            "monday": [ 18, 28, 7, 15 ],
            "tuesday": [ 18, 27, 4, 14 ],
            "wednesday": [ 16, 26, 3, 13 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 13, 23, 1, 10 ],
            "sunday": [ 19, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 346,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/display-image-1-1.jpg',
          title: 'Princess with a spindle',
          artist: 'Hanna Hirsch-Pauli',
          year: '?',
          rule: {
            "monday": [ 19, 28, 7, 15 ],
            "tuesday": [ 18, 28, 7, 15 ],
            "wednesday": [ 18, 27, 4, 14 ],
            "thursday": [ 16, 26, 3, 13 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 13, 23, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 347,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/after-the-bath-1908.jpg',
          title: 'After the bath',
          artist: 'Suzanne Valadon',
          year: '1908',
          rule: {
            "monday": [ 13, 23, 1, 10 ],
            "tuesday": [ 19, 28, 7, 15 ],
            "wednesday": [ 18, 28, 7, 15 ],
            "thursday": [ 18, 27, 4, 14 ],
            "friday": [ 16, 26, 3, 13 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 348,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/not_detected_235985.jpg',
          title: 'The Mothers',
          artist: 'Kathe Kollwitz',
          year: '1922',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 13, 23, 1, 10 ],
            "wednesday": [ 19, 28, 7, 15 ],
            "thursday": [ 18, 28, 7, 15 ],
            "friday": [ 18, 27, 4, 14 ],
            "saturday": [ 16, 26, 3, 13 ],
            "sunday": [ 15, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 349,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/portrait-of-myself-1923.jpg',
          title: 'Portrait of Myself',
          artist: 'Florine Stettheimer',
          year: '1923',
          rule: {
            "monday": [ 15, 25, 2, 12 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 13, 23, 1, 10 ],
            "thursday": [ 19, 28, 7, 15 ],
            "friday": [ 18, 28, 7, 15 ],
            "saturday": [ 18, 27, 4, 14 ],
            "sunday": [ 16, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 350,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/la-mar-e-haute-a-saint-mal-high-tide-at-st-mal-1912.jpg',
          title: 'La marée haute a Saint-Malô (High tide at St Malô)',
          artist: 'Ethel Carrick',
          year: '1912',
          rule: {
            "monday": [ 17, 27, 4, 14 ],
            "tuesday": [ 16, 26, 3, 13 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 14, 24, 2, 11 ],
            "friday": [ 20, 29, 8, 16 ],
            "saturday": [ 19, 29, 8, 16 ],
            "sunday": [ 19, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 351,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/flower-basket-1915.jpg',
          title: 'Flower Basket',
          artist: 'Uemura Shoen',
          year: '1915',
          rule: {
            "monday": [ 19, 28, 5, 15 ],
            "tuesday": [ 17, 27, 4, 14 ],
            "wednesday": [ 16, 26, 3, 13 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 14, 24, 2, 11 ],
            "saturday": [ 20, 29, 8, 16 ],
            "sunday": [ 19, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 352,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-cat.jpg',
          title: 'The Cat',
          artist: 'Gwen John',
          year: 'c.1905 - c.1908',
          rule: {
            "monday": [ 19, 29, 8, 16 ],
            "tuesday": [ 19, 28, 5, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 26, 3, 13 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 14, 24, 2, 11 ],
            "sunday": [ 20, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 353,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/liegende-katze.jpg',
          title: 'Liegende Katze',
          artist: 'Helen Dahm',
          year: '?',
          rule: {
            "monday": [ 20, 29, 8, 16 ],
            "tuesday": [ 19, 29, 8, 16 ],
            "wednesday": [ 19, 28, 5, 15 ],
            "thursday": [ 17, 27, 4, 14 ],
            "friday": [ 16, 26, 3, 13 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 14, 24, 2, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 354,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/stone-maiden-still-life.jpg',
          title: 'Stone maiden (Still life)',
          artist: 'Natalia Goncharova',
          year: '1908',
          rule: {
            "monday": [ 14, 24, 2, 11 ],
            "tuesday": [ 20, 29, 8, 16 ],
            "wednesday": [ 19, 29, 8, 16 ],
            "thursday": [ 19, 28, 5, 15 ],
            "friday": [ 17, 27, 4, 14 ],
            "saturday": [ 16, 26, 3, 13 ],
            "sunday": [ 15, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 355,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/spanish-dancers-1921.jpg',
          title: 'Spanish Dancers',
          artist: 'Marie Laurencin',
          year: '1921',
          rule: {
            "monday": [ 15, 25, 2, 12 ],
            "tuesday": [ 14, 24, 2, 11 ],
            "wednesday": [ 20, 29, 8, 16 ],
            "thursday": [ 19, 29, 8, 16 ],
            "friday": [ 19, 28, 5, 15 ],
            "saturday": [ 17, 27, 4, 14 ],
            "sunday": [ 16, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 356,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/sleeping-girl.jpg',
          title: 'Sleeping girl',
          artist: 'Sonia Delaunay',
          year: '1907',
          rule: {
            "monday": [ 16, 26, 3, 13 ],
            "tuesday": [ 15, 25, 2, 12 ],
            "wednesday": [ 14, 24, 2, 11 ],
            "thursday": [ 20, 29, 8, 16 ],
            "friday": [ 19, 29, 8, 16 ],
            "saturday": [ 19, 28, 5, 15 ],
            "sunday": [ 17, 27, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 357,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/e-f-c-b-estrada-de-ferro-central-do-brasil-1924.jpg',
          title: 'E.F.C.B. (Estrada de Ferro Central do Brasil)',
          artist: 'Tarsila do Amaral',
          year: '1924',
          rule: {
            "monday": [ 18, 28, 5, 15 ],
            "tuesday": [ 17, 27, 4, 14 ],
            "wednesday": [ 16, 26, 3, 13 ],
            "thursday": [ 15, 25, 3, 12 ],
            "friday": [ 21, 30, 9, 17 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 20, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 358,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/number-319-1949.jpg',
          title: 'Number 319',
          artist: 'Anne Ryan',
          year: '1949',
          rule: {
            "monday": [ 20, 29, 6, 16 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 26, 3, 13 ],
            "friday": [ 15, 25, 3, 12 ],
            "saturday": [ 21, 30, 9, 17 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 359,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/usine-de-mes-pens-es-1920.jpg',
          title: 'Usine de Mes Pensées',
          artist: 'Suzanne Duchamp',
          year: '1920',
          rule: {
            "monday": [ 20, 30, 7, 17 ],
            "tuesday": [ 20, 29, 6, 16 ],
            "wednesday": [ 18, 28, 5, 15 ],
            "thursday": [ 17, 27, 4, 14 ],
            "friday": [ 16, 26, 3, 13 ],
            "saturday": [ 15, 25, 3, 12 ],
            "sunday": [ 21, 30, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 360,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/professionalization-albeeg-goldfish-1931.jpg',
          title: 'Goldfish',
          artist: 'Grace Albee',
          year: '1931',
          rule: {
            "monday": [ 21, 30, 9, 17 ],
            "tuesday": [ 20, 30, 7, 17 ],
            "wednesday": [ 20, 29, 6, 16 ],
            "thursday": [ 18, 28, 5, 15 ],
            "friday": [ 17, 27, 4, 14 ],
            "saturday": [ 16, 26, 3, 13 ],
            "sunday": [ 15, 25, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 361,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/eastern-road-turramurra-1926.jpg',
          title: 'Eastern Road, Turramurra',
          artist: 'Grace Cossington Smith',
          year: '1926',
          rule: {
            "monday": [ 15, 25, 3, 12 ],
            "tuesday": [ 21, 30, 9, 17 ],
            "wednesday": [ 20, 30, 7, 17 ],
            "thursday": [ 20, 29, 6, 16 ],
            "friday": [ 18, 28, 5, 15 ],
            "saturday": [ 17, 27, 4, 14 ],
            "sunday": [ 16, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 362,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/mamut-s-caf.jpg',
          title: 'Mamut\'s Café',
          artist: 'Nutzi Acontz',
          year: '?',
          rule: {
            "monday": [ 16, 26, 3, 13 ],
            "tuesday": [ 15, 25, 3, 12 ],
            "wednesday": [ 21, 30, 9, 17 ],
            "thursday": [ 20, 30, 7, 17 ],
            "friday": [ 20, 29, 6, 16 ],
            "saturday": [ 18, 28, 5, 15 ],
            "sunday": [ 17, 27, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 363,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/trois-disques-1966.jpg',
          title: 'Trois disques',
          artist: 'Marcelle Cahn',
          year: '1966',
          rule: {
            "monday": [ 17, 27, 4, 14 ],
            "tuesday": [ 16, 26, 3, 13 ],
            "wednesday": [ 15, 25, 3, 12 ],
            "thursday": [ 21, 30, 9, 17 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 20, 29, 6, 16 ],
            "sunday": [ 18, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 364,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/1933-synthesis-322-edit.jpg',
          title: 'Synthesis of Radio Communications',
          artist: 'Benedetta',
          year: '1933 - 1934',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 26, 4, 13 ],
            "friday": [ 22, 31, 10, 18 ],
            "saturday": [ 21, 31, 8, 18 ],
            "sunday": [ 21, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 365,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-girls.jpg',
          title: 'The Girls',
          artist: 'Tamara de Lempicka',
          year: 'c.1930',
          rule: {
            "monday": [ 21, 30, 7, 17 ],
            "tuesday": [ 19, 29, 6, 16 ],
            "wednesday": [ 18, 28, 5, 15 ],
            "thursday": [ 17, 27, 4, 14 ],
            "friday": [ 16, 26, 4, 13 ],
            "saturday": [ 22, 31, 10, 18 ],
            "sunday": [ 21, 31, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 366,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/tikal-1958.jpg',
          title: 'Tikal',
          artist: 'Anni Albers',
          year: '1958',
          rule: {
            "monday": [ 21, 31, 8, 18 ],
            "tuesday": [ 21, 30, 7, 17 ],
            "wednesday": [ 19, 29, 6, 16 ],
            "thursday": [ 18, 28, 5, 15 ],
            "friday": [ 17, 27, 4, 14 ],
            "saturday": [ 16, 26, 4, 13 ],
            "sunday": [ 22, 31, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 367,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/past-and-present-1990.jpg',
          title: 'Past and Present',
          artist: 'Eileen Agar',
          year: '1990',
          rule: {
            "monday": [ 22, 31, 10, 18 ],
            "tuesday": [ 21, 31, 8, 18 ],
            "wednesday": [ 21, 30, 7, 17 ],
            "thursday": [ 19, 29, 6, 16 ],
            "friday": [ 18, 28, 5, 15 ],
            "saturday": [ 17, 27, 4, 14 ],
            "sunday": [ 16, 26, 4, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 368,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/eye-of-the-cross-1976.jpg',
          title: 'Eye of the Cross',
          artist: 'Betty Parsons',
          year: '1976',
          rule: {
            "monday": [ 16, 26, 4, 13 ],
            "tuesday": [ 22, 31, 10, 18 ],
            "wednesday": [ 21, 31, 8, 18 ],
            "thursday": [ 21, 30, 7, 17 ],
            "friday": [ 19, 29, 6, 16 ],
            "saturday": [ 18, 28, 5, 15 ],
            "sunday": [ 17, 27, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 369,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/grigio-giallo-gray-and-yellow-1966(2).jpg',
          title: 'Grigio + Giallo (Gray and Yellow)',
          artist: 'Bice Lazzari',
          year: '1966',
          rule: {
            "monday": [ 17, 27, 4, 14 ],
            "tuesday": [ 16, 26, 4, 13 ],
            "wednesday": [ 22, 31, 10, 18 ],
            "thursday": [ 21, 31, 8, 18 ],
            "friday": [ 21, 30, 7, 17 ],
            "saturday": [ 19, 29, 6, 16 ],
            "sunday": [ 18, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 370,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/diptych-1956.jpg',
          title: 'Diptych',
          artist: 'Lolo Soldevilla',
          year: '1956',
          rule: {
            "monday": [ 18, 28, 5, 15 ],
            "tuesday": [ 17, 27, 4, 14 ],
            "wednesday": [ 16, 26, 4, 13 ],
            "thursday": [ 22, 31, 10, 18 ],
            "friday": [ 21, 31, 8, 18 ],
            "saturday": [ 21, 30, 7, 17 ],
            "sunday": [ 19, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 371,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-abandoned-burrow-1937.jpg',
          title: 'The Abandoned Burrow',
          artist: 'Toyen',
          year: '1937',
          rule: {
            "monday": [ 20, 30, 7, 17 ],
            "tuesday": [ 19, 29, 6, 16 ],
            "wednesday": [ 18, 28, 5, 15 ],
            "thursday": [ 17, 27, 5, 14 ],
            "friday": [ 23, 1, 11, 19 ],
            "saturday": [ 22, 1, 9, 19 ],
            "sunday": [ 22, 31, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 372,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/ideomorphic-composition-1-1942.jpg',
          title: 'Ideomorphic Composition #1',
          artist: 'Perle Fine',
          year: '1942',
          rule: {
            "monday": [ 22, 31, 8, 18 ],
            "tuesday": [ 20, 30, 7, 17 ],
            "wednesday": [ 19, 29, 6, 16 ],
            "thursday": [ 18, 28, 5, 15 ],
            "friday": [ 17, 27, 5, 14 ],
            "saturday": [ 23, 1, 11, 19 ],
            "sunday": [ 22, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 373,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/bird-boy-1995.jpg',
          title: 'Bird Boy',
          artist: 'Lenore Tawney',
          year: '1995',
          rule: {
            "monday": [ 22, 1, 9, 19 ],
            "tuesday": [ 22, 31, 8, 18 ],
            "wednesday": [ 20, 30, 7, 17 ],
            "thursday": [ 19, 29, 6, 16 ],
            "friday": [ 18, 28, 5, 15 ],
            "saturday": [ 17, 27, 5, 14 ],
            "sunday": [ 23, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 374,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/shepherds-1959.jpg',
          title: 'Shepherds',
          artist: 'Maria Primachenko',
          year: '1959',
          rule: {
            "monday": [ 23, 1, 11, 19 ],
            "tuesday": [ 22, 1, 9, 19 ],
            "wednesday": [ 22, 31, 8, 18 ],
            "thursday": [ 20, 30, 7, 17 ],
            "friday": [ 19, 29, 6, 16 ],
            "saturday": [ 18, 28, 5, 15 ],
            "sunday": [ 17, 27, 5, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 375,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/rising-green-1972.jpg',
          title: 'Rising Green',
          artist: 'Lee Krasner',
          year: '1972',
          rule: {
            "monday": [ 17, 27, 5, 14 ],
            "tuesday": [ 23, 1, 11, 19 ],
            "wednesday": [ 22, 1, 9, 19 ],
            "thursday": [ 22, 31, 8, 18 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 19, 29, 6, 16 ],
            "sunday": [ 18, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 376,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-siren.jpg',
          title: 'The Siren',
          artist: 'Greta Freist',
          year: '?',
          rule: {
            "monday": [ 18, 28, 5, 15 ],
            "tuesday": [ 17, 27, 5, 14 ],
            "wednesday": [ 23, 1, 11, 19 ],
            "thursday": [ 22, 1, 9, 19 ],
            "friday": [ 22, 31, 8, 18 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 19, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 377,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/angle-noir-1989.jpg',
          title: 'Angle Noir',
          artist: 'Aurelie Nemours',
          year: '1989',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 17, 27, 5, 14 ],
            "thursday": [ 23, 1, 11, 19 ],
            "friday": [ 22, 1, 9, 19 ],
            "saturday": [ 22, 31, 8, 18 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 378,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/drops-1961.jpg',
          title: 'Drops',
          artist: 'Agnes Martin',
          year: '1961',
          rule: {
            "monday": [ 21, 31, 8, 18 ],
            "tuesday": [ 20, 30, 7, 17 ],
            "wednesday": [ 19, 29, 6, 16 ],
            "thursday": [ 18, 28, 6, 15 ],
            "friday": [ 24, 2, 12, 20 ],
            "saturday": [ 23, 2, 10, 20 ],
            "sunday": [ 23, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 379,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1966-2.jpg',
          title: 'Untitled',
          artist: 'Gego',
          year: '1966',
          rule: {
            "monday": [ 23, 1, 9, 19 ],
            "tuesday": [ 21, 31, 8, 18 ],
            "wednesday": [ 20, 30, 7, 17 ],
            "thursday": [ 19, 29, 6, 16 ],
            "friday": [ 18, 28, 6, 15 ],
            "saturday": [ 24, 2, 12, 20 ],
            "sunday": [ 23, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 380,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/spiral-nature-s-way-1971.jpg',
          title: 'Spiral (Nature\'s Way)',
          artist: 'Meret Oppenheim',
          year: '1971',
          rule: {
            "monday": [ 23, 2, 10, 20 ],
            "tuesday": [ 23, 1, 9, 19 ],
            "wednesday": [ 21, 31, 8, 18 ],
            "thursday": [ 20, 30, 7, 17 ],
            "friday": [ 19, 29, 6, 16 ],
            "saturday": [ 18, 28, 6, 15 ],
            "sunday": [ 24, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 381,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/amarillo-1971.jpg',
          title: 'Amarillo',
          artist: 'Carmen Herrera',
          year: '1971',
          rule: {
            "monday": [ 24, 2, 12, 20 ],
            "tuesday": [ 23, 2, 10, 20 ],
            "wednesday": [ 23, 1, 9, 19 ],
            "thursday": [ 21, 31, 8, 18 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 19, 29, 6, 16 ],
            "sunday": [ 18, 28, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 382,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/swans-1966.jpg',
          title: 'Swans',
          artist: 'Tetyana Yablonska',
          year: '1966',
          rule: {
            "monday": [ 18, 28, 6, 15 ],
            "tuesday": [ 24, 2, 12, 20 ],
            "wednesday": [ 23, 2, 10, 20 ],
            "thursday": [ 23, 1, 9, 19 ],
            "friday": [ 21, 31, 8, 18 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 19, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 383,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/aerial-series-ploughed-fields-maryland-1974.jpg',
          title: 'Aerial Series - Ploughed Fields, Maryland',
          artist: 'Jane Frank',
          year: '1974',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 18, 28, 6, 15 ],
            "wednesday": [ 24, 2, 12, 20 ],
            "thursday": [ 23, 2, 10, 20 ],
            "friday": [ 23, 1, 9, 19 ],
            "saturday": [ 21, 31, 8, 18 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 384,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/obliquement-un-peu-1987.jpg',
          title: 'Obliquement un peu',
          artist: 'Huguette Arthur Bertrand',
          year: '1987',
          rule: {
            "monday": [ 20, 30, 7, 17 ],
            "tuesday": [ 19, 29, 6, 16 ],
            "wednesday": [ 18, 28, 6, 15 ],
            "thursday": [ 24, 2, 12, 20 ],
            "friday": [ 23, 2, 10, 20 ],
            "saturday": [ 23, 1, 9, 19 ],
            "sunday": [ 21, 31, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 385,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/first-1961.jpg',
          title: 'First',
          artist: 'Anne Truitt',
          year: '1961',
          rule: {
            "monday": [ 22, 1, 9, 19 ],
            "tuesday": [ 21, 31, 8, 18 ],
            "wednesday": [ 20, 30, 7, 17 ],
            "thursday": [ 19, 29, 7, 16 ],
            "friday": [ 25, 3, 13, 21 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 24, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 386,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/flag-man.jpg',
          title: 'Patriotic Young Man with a Flag',
          artist: 'Diane Arbus',
          year: '1967',
          rule: {
            "monday": [ 24, 2, 10, 20 ],
            "tuesday": [ 22, 1, 9, 19 ],
            "wednesday": [ 21, 31, 8, 18 ],
            "thursday": [ 20, 30, 7, 17 ],
            "friday": [ 19, 29, 7, 16 ],
            "saturday": [ 25, 3, 13, 21 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 387,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/blue-angel-1987.jpg',
          title: 'Blue Angel',
          artist: 'Miriam Schapiro',
          year: '1987',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 24, 2, 10, 20 ],
            "wednesday": [ 22, 1, 9, 19 ],
            "thursday": [ 21, 31, 8, 18 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 19, 29, 7, 16 ],
            "sunday": [ 25, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 388,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/masculin-feminin-1959.jpg',
          title: 'Masculin feminin',
          artist: 'Mimi Parent',
          year: '1959',
          rule: {
            "monday": [ 25, 3, 13, 21 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 24, 2, 10, 20 ],
            "thursday": [ 22, 1, 9, 19 ],
            "friday": [ 21, 31, 8, 18 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 19, 29, 7, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 389,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/giraffe-1985.jpg',
          title: 'Giraffe',
          artist: 'Tsuruko Yamazaki',
          year: '1985',
          rule: {
            "monday": [ 19, 29, 7, 16 ],
            "tuesday": [ 25, 3, 13, 21 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 24, 2, 10, 20 ],
            "friday": [ 22, 1, 9, 19 ],
            "saturday": [ 21, 31, 8, 18 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 390,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/cement-factory-1987.jpg',
          title: 'Cement Factory',
          artist: 'Maria Stolarova',
          year: '1987',
          rule: {
            "monday": [ 20, 30, 7, 17 ],
            "tuesday": [ 19, 29, 7, 16 ],
            "wednesday": [ 25, 3, 13, 21 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 24, 2, 10, 20 ],
            "saturday": [ 22, 1, 9, 19 ],
            "sunday": [ 21, 31, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 391,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/unknown-title-1.jpg',
          title: 'unknown title',
          artist: 'Menez',
          year: '?',
          rule: {
            "monday": [ 21, 31, 8, 18 ],
            "tuesday": [ 20, 30, 7, 17 ],
            "wednesday": [ 19, 29, 7, 16 ],
            "thursday": [ 25, 3, 13, 21 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 24, 2, 10, 20 ],
            "sunday": [ 22, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 392,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-c78-01-1978.jpg',
          title: 'Untitled (C78 01)',
          artist: 'Hannelore Baron',
          year: '1978',
          rule: {
            "monday": [ 23, 2, 10, 20 ],
            "tuesday": [ 22, 1, 9, 19 ],
            "wednesday": [ 21, 31, 8, 18 ],
            "thursday": [ 20, 30, 8, 17 ],
            "friday": [ 26, 4, 14, 22 ],
            "saturday": [ 25, 4, 12, 22 ],
            "sunday": [ 25, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 393,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/mary-mary-1987.jpg',
          title: 'Mary, Mary',
          artist: 'Helen Frankenthaler',
          year: '1987',
          rule: {
            "monday": [ 25, 3, 11, 21 ],
            "tuesday": [ 23, 2, 10, 20 ],
            "wednesday": [ 22, 1, 9, 19 ],
            "thursday": [ 21, 31, 8, 18 ],
            "friday": [ 20, 30, 8, 17 ],
            "saturday": [ 26, 4, 14, 22 ],
            "sunday": [ 25, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 394,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/amphora-frieze-2004.jpg',
          title: 'Amphora Frieze',
          artist: 'Jo Baer',
          year: '2004',
          rule: {
            "monday": [ 25, 4, 12, 22 ],
            "tuesday": [ 25, 3, 11, 21 ],
            "wednesday": [ 23, 2, 10, 20 ],
            "thursday": [ 22, 1, 9, 19 ],
            "friday": [ 21, 31, 8, 18 ],
            "saturday": [ 20, 30, 8, 17 ],
            "sunday": [ 26, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 395,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/high-summer-world-of-light-2009.jpg',
          title: 'High Summer World of Light',
          artist: 'Gillian Ayres',
          year: '2009',
          rule: {
            "monday": [ 26, 4, 14, 22 ],
            "tuesday": [ 25, 4, 12, 22 ],
            "wednesday": [ 25, 3, 11, 21 ],
            "thursday": [ 23, 2, 10, 20 ],
            "friday": [ 22, 1, 9, 19 ],
            "saturday": [ 21, 31, 8, 18 ],
            "sunday": [ 20, 30, 8, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 396,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/do-you-like-my-brain-1999.jpg',
          title: 'Do You Like My Brain?',
          artist: 'Niki de Sainte Phalle',
          year: '1999',
          rule: {
            "monday": [ 20, 30, 8, 17 ],
            "tuesday": [ 26, 4, 14, 22 ],
            "wednesday": [ 25, 4, 12, 22 ],
            "thursday": [ 25, 3, 11, 21 ],
            "friday": [ 23, 2, 10, 20 ],
            "saturday": [ 22, 1, 9, 19 ],
            "sunday": [ 21, 31, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 397,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/macarena-esperanza-1971.jpg',
          title: 'Macarena Esperanza',
          artist: 'Audrey Flack',
          year: '1971',
          rule: {
            "monday": [ 21, 31, 8, 18 ],
            "tuesday": [ 20, 30, 8, 17 ],
            "wednesday": [ 26, 4, 14, 22 ],
            "thursday": [ 25, 4, 12, 22 ],
            "friday": [ 25, 3, 11, 21 ],
            "saturday": [ 23, 2, 10, 20 ],
            "sunday": [ 22, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 398,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/drawing-which-makes-itself-1972.jpg',
          title: 'Drawing Which Makes Itself',
          artist: 'Dorothea Rockburne',
          year: '1972',
          rule: {
            "monday": [ 22, 1, 9, 19 ],
            "tuesday": [ 21, 31, 8, 18 ],
            "wednesday": [ 20, 30, 8, 17 ],
            "thursday": [ 26, 4, 14, 22 ],
            "friday": [ 25, 4, 12, 22 ],
            "saturday": [ 25, 3, 11, 21 ],
            "sunday": [ 23, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 399,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/waterdrop-painting-version-1-1961-2015.jpg',
          title: 'Waterdrop Painting (Version 1)',
          artist: 'Yoko Ono',
          year: '1961 - 2015',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 23, 2, 10, 20 ],
            "wednesday": [ 22, 1, 9, 19 ],
            "thursday": [ 21, 31, 9, 18 ],
            "friday": [ 27, 5, 15, 23 ],
            "saturday": [ 26, 5, 13, 23 ],
            "sunday": [ 26, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 400,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/elliptical-spheriod-1969.jpg',
          title: 'Elliptical Spheriod',
          artist: 'Helen Pashgian',
          year: '1969',
          rule: {
            "monday": [ 26, 4, 12, 22 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 23, 2, 10, 20 ],
            "thursday": [ 22, 1, 9, 19 ],
            "friday": [ 21, 31, 9, 18 ],
            "saturday": [ 27, 5, 15, 23 ],
            "sunday": [ 26, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 401,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/eggs-in-an-egg-crate-1975.jpg',
          title: 'Eggs in an Egg Crate',
          artist: 'Mary Pratt',
          year: '1975',
          rule: {
            "monday": [ 26, 5, 13, 23 ],
            "tuesday": [ 26, 4, 12, 22 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 23, 2, 10, 20 ],
            "friday": [ 22, 1, 9, 19 ],
            "saturday": [ 21, 31, 9, 18 ],
            "sunday": [ 27, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 402,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/a-cloverleaf-on-4-light-sensitive-plates-1981.jpg',
          title: 'A cloverleaf on 4 light-sensitive plates - photogravure',
          artist: 'Hubertine Heijermans',
          year: '1981',
          rule: {
            "monday": [ 27, 5, 15, 23 ],
            "tuesday": [ 26, 5, 13, 23 ],
            "wednesday": [ 26, 4, 12, 22 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 23, 2, 10, 20 ],
            "saturday": [ 22, 1, 9, 19 ],
            "sunday": [ 21, 31, 9, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 403,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/no-where-to-run.jpg',
          title: 'No Where To Run',
          artist: 'Rochelle Blumenfeld',
          year: '2012',
          rule: {
            "monday": [ 21, 31, 9, 18 ],
            "tuesday": [ 27, 5, 15, 23 ],
            "wednesday": [ 26, 5, 13, 23 ],
            "thursday": [ 26, 4, 12, 22 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 23, 2, 10, 20 ],
            "sunday": [ 22, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 404,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/mercuriale-1967.jpg',
          title: 'Mercuriale',
          artist: 'Grazia Varisco',
          year: '1967',
          rule: {
            "monday": [ 22, 1, 9, 19 ],
            "tuesday": [ 21, 31, 9, 18 ],
            "wednesday": [ 27, 5, 15, 23 ],
            "thursday": [ 26, 5, 13, 23 ],
            "friday": [ 26, 4, 12, 22 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 23, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 405,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/dance-of-the-crows-2012.jpg',
          title: 'Dance of the Crows',
          artist: 'Fusun Onur',
          year: '2012',
          rule: {
            "monday": [ 23, 2, 10, 20 ],
            "tuesday": [ 22, 1, 9, 19 ],
            "wednesday": [ 21, 31, 9, 18 ],
            "thursday": [ 27, 5, 15, 23 ],
            "friday": [ 26, 5, 13, 23 ],
            "saturday": [ 26, 4, 12, 22 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 406,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/sun-tunnels-1976.jpg',
          title: 'Sun Tunnels',
          artist: 'Nancy Holt',
          year: '1976',
          rule: {
            "monday": [ 25, 4, 12, 22 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 23, 2, 10, 20 ],
            "thursday": [ 22, 1, 10, 19 ],
            "friday": [ 28, 6, 16, 24 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 27, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 407,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/birth-tear-tear-1985.jpg',
          title: 'Birth Tear-Tear',
          artist: 'Judy Chicago',
          year: '1985',
          rule: {
            "monday": [ 27, 5, 13, 23 ],
            "tuesday": [ 25, 4, 12, 22 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 23, 2, 10, 20 ],
            "friday": [ 22, 1, 10, 19 ],
            "saturday": [ 28, 6, 16, 24 ],
            "sunday": [ 27, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 408,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/arkerrthe-awelye-mountain-devil-lizard-dreaming-1998.jpg',
          title: 'Arkerrthe Awelye, Mountain Devil Lizard Dreaming',
          artist: 'Kathleen Petyarre',
          year: '1998',
          rule: {
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 27, 5, 13, 23 ],
            "wednesday": [ 25, 4, 12, 22 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 23, 2, 10, 20 ],
            "saturday": [ 22, 1, 10, 19 ],
            "sunday": [ 28, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 409,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/woman-floating-1997.jpg',
          title: 'Woman Floating',
          artist: 'Jennifer Bartlett',
          year: '1997',
          rule: {
            "monday": [ 28, 6, 16, 24 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 27, 5, 13, 23 ],
            "thursday": [ 25, 4, 12, 22 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 23, 2, 10, 20 ],
            "sunday": [ 22, 1, 10, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 410,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/quartered-meteor-1969.jpg',
          title: 'Quartered Meteor',
          artist: 'Lynda Benglis',
          year: '1969',
          rule: {
            "monday": [ 22, 1, 10, 19 ],
            "tuesday": [ 28, 6, 16, 24 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 27, 5, 13, 23 ],
            "friday": [ 25, 4, 12, 22 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 23, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 411,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/mist-1980.jpg',
          title: 'Mist',
          artist: 'Martha Diamond',
          year: '1980',
          rule: {
            "monday": [ 23, 2, 10, 20 ],
            "tuesday": [ 22, 1, 10, 19 ],
            "wednesday": [ 28, 6, 16, 24 ],
            "thursday": [ 27, 6, 14, 24 ],
            "friday": [ 27, 5, 13, 23 ],
            "saturday": [ 25, 4, 12, 22 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 412,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/cockfeather-mask-1973.jpg',
          title: 'Cockfeather Mask',
          artist: 'Rebecca Horn',
          year: '1973',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 23, 2, 10, 20 ],
            "wednesday": [ 22, 1, 10, 19 ],
            "thursday": [ 28, 6, 16, 24 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 27, 5, 13, 23 ],
            "sunday": [ 25, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 413,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/pink-couch-2003.jpg',
          title: 'Pink Couch',
          artist: 'Susan Rothenberg',
          year: '2003',
          rule: {
            "monday": [ 26, 5, 13, 23 ],
            "tuesday": [ 25, 4, 12, 22 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 23, 2, 11, 20 ],
            "friday": [ 29, 7, 17, 25 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 28, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 414,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/avalon-1976.jpg',
          title: 'Avalon',
          artist: 'Valerie Jaudon',
          year: '1976',
          rule: {
            "monday": [ 28, 6, 14, 24 ],
            "tuesday": [ 26, 5, 13, 23 ],
            "wednesday": [ 25, 4, 12, 22 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 23, 2, 11, 20 ],
            "saturday": [ 29, 7, 17, 25 ],
            "sunday": [ 28, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 415,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/under-the-snow-2003.jpg',
          title: 'Under the Snow',
          artist: 'Catherine Murphy',
          year: '2003',
          rule: {
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 28, 6, 14, 24 ],
            "wednesday": [ 26, 5, 13, 23 ],
            "thursday": [ 25, 4, 12, 22 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 23, 2, 11, 20 ],
            "sunday": [ 29, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 416,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-2007.jpg',
          title: 'Untitled',
          artist: 'Harriet Korman',
          year: '2007',
          rule: {
            "monday": [ 29, 7, 17, 25 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 28, 6, 14, 24 ],
            "thursday": [ 26, 5, 13, 23 ],
            "friday": [ 25, 4, 12, 22 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 23, 2, 11, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 417,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/mlr-1992-1.jpg',
          title: 'MLR',
          artist: 'Isa Genzken',
          year: '1992',
          rule: {
            "monday": [ 23, 2, 11, 20 ],
            "tuesday": [ 29, 7, 17, 25 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 28, 6, 14, 24 ],
            "friday": [ 26, 5, 13, 23 ],
            "saturday": [ 25, 4, 12, 22 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 418,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/p77395-10.jpg',
          title: '[no title]',
          artist: 'Jenny Holzer',
          year: '1979 - 1982',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 23, 2, 11, 20 ],
            "wednesday": [ 29, 7, 17, 25 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 28, 6, 14, 24 ],
            "saturday": [ 26, 5, 13, 23 ],
            "sunday": [ 25, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 419,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/green-hedgerow-acrylic-canvas-40x40cm-website.JPG',
          title: 'Green Hedgerow',
          artist: 'Giuliana Lazzerini',
          year: '2017',
          rule: {
            "monday": [ 25, 4, 12, 22 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 23, 2, 11, 20 ],
            "thursday": [ 29, 7, 17, 25 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 28, 6, 14, 24 ],
            "sunday": [ 26, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 420,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/blind-children-feel-an-elephant.jpg',
          title: 'Blind children feel an elephant',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 26, 5, 13, 23 ],
            "wednesday": [ 25, 4, 12, 22 ],
            "thursday": [ 24, 3, 12, 21 ],
            "friday": [ 30, 8, 18, 26 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 29, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 421,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/verona-variation-10-2003.jpg',
          title: 'Verona Variation #10',
          artist: 'Anne Appleby',
          year: '2003',
          rule: {
            "monday": [ 29, 7, 15, 25 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 26, 5, 13, 23 ],
            "thursday": [ 25, 4, 12, 22 ],
            "friday": [ 24, 3, 12, 21 ],
            "saturday": [ 30, 8, 18, 26 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 422,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/sitting-with-snake-self-portrait-2007.jpg',
          title: 'Sitting with Snake (Self Portrait)',
          artist: 'Kiki Smith',
          year: '2007',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 29, 7, 15, 25 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 26, 5, 13, 23 ],
            "friday": [ 25, 4, 12, 22 ],
            "saturday": [ 24, 3, 12, 21 ],
            "sunday": [ 30, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 423,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-2006.jpg',
          title: 'Untitled',
          artist: 'Doreen Reid Nakamarra',
          year: '2004',
          rule: {
            "monday": [ 30, 8, 18, 26 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 29, 7, 15, 25 ],
            "thursday": [ 27, 6, 14, 24 ],
            "friday": [ 26, 5, 13, 23 ],
            "saturday": [ 25, 4, 12, 22 ],
            "sunday": [ 24, 3, 12, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 424,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/corpus-2004.jpg',
          title: 'corpus',
          artist: 'Ann Hamilton',
          year: '2004',
          rule: {
            "monday": [ 24, 3, 12, 21 ],
            "tuesday": [ 30, 8, 18, 26 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 29, 7, 15, 25 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 26, 5, 13, 23 ],
            "sunday": [ 25, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 425,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/daniel-meyerplein-6-2007.jpg',
          title: 'Daniel Meyerplein No 6.',
          artist: 'Hilly van Eerten',
          year: '2007',
          rule: {
            "monday": [ 25, 4, 12, 22 ],
            "tuesday": [ 24, 3, 12, 21 ],
            "wednesday": [ 30, 8, 18, 26 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 29, 7, 15, 25 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 26, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 426,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/sweet-for-three-oranges-1995.jpg',
          title: 'Sweet for Three Oranges',
          artist: 'Jessica Stockholder',
          year: '1995',
          rule: {
            "monday": [ 26, 5, 13, 23 ],
            "tuesday": [ 25, 4, 12, 22 ],
            "wednesday": [ 24, 3, 12, 21 ],
            "thursday": [ 30, 8, 18, 26 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 29, 7, 15, 25 ],
            "sunday": [ 27, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 427,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/nu-azul-1997.jpg',
          title: 'Nu Azul',
          artist: 'Beatriz Milhazes',
          year: '1997',
          rule: {
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 27, 7, 14, 24 ],
            "wednesday": [ 26, 5, 13, 23 ],
            "thursday": [ 25, 4, 13, 22 ],
            "friday": [ 31, 9, 19, 27 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 30, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 428,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/48a8.jpg',
          title: 'Mother 3',
          artist: 'Małgorzata Serwatka',
          year: '1993',
          rule: {
            "monday": [ 30, 8, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 27, 7, 14, 24 ],
            "thursday": [ 26, 5, 13, 23 ],
            "friday": [ 25, 4, 13, 22 ],
            "saturday": [ 31, 9, 19, 27 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 429,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/l-entre-2015-150-by-70cm-copy.jpg',
          title: 'L\'Entre',
          artist: 'Li CHEVALIER',
          year: '2015',
          rule: {
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 30, 8, 16, 26 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 27, 7, 14, 24 ],
            "friday": [ 26, 5, 13, 23 ],
            "saturday": [ 25, 4, 13, 22 ],
            "sunday": [ 31, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 430,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/hate-and-power-can-be-a-terrible-thing-2004.jpg',
          title: 'Hate and Power Can be a Terrible Thing',
          artist: 'Tracey Emin',
          year: '2004',
          rule: {
            "monday": [ 31, 9, 19, 27 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 30, 8, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 27, 7, 14, 24 ],
            "saturday": [ 26, 5, 13, 23 ],
            "sunday": [ 25, 4, 13, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 431,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/slab-glo-pod-iridescent-green-blue-2013.jpg',
          title: 'Slab Glo-Pod (Iridescent Green Blue)',
          artist: 'Gisela Colon',
          year: '2013',
          rule: {
            "monday": [ 25, 4, 13, 22 ],
            "tuesday": [ 31, 9, 19, 27 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 30, 8, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 27, 7, 14, 24 ],
            "sunday": [ 26, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 432,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/am-ende-des-wegen.png',
          title: 'At the End of the Way',
          artist: 'Ilse D\'Hollander',
          year: '1995',
          rule: {
            "monday": [ 26, 5, 13, 23 ],
            "tuesday": [ 25, 4, 13, 22 ],
            "wednesday": [ 31, 9, 19, 27 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 30, 8, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 27, 7, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 433,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/free-range.jpg',
          title: 'Free range',
          artist: 'Julie Mehretu',
          year: '?',
          rule: {
            "monday": [ 27, 7, 14, 24 ],
            "tuesday": [ 26, 5, 13, 23 ],
            "wednesday": [ 25, 4, 13, 22 ],
            "thursday": [ 31, 9, 19, 27 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 30, 8, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 434,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/monika-blatton-krolewna.jpeg',
          title: 'Princess',
          artist: 'Monica Blatton',
          year: '2009',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 8, 15, 25 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 26, 5, 14, 23 ],
            "friday": [ 1, 10, 20, 28 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 31, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 435,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-2003.jpg',
          title: 'Untitled',
          artist: 'Wangechi Mutu',
          year: '2003',
          rule: {
            "monday": [ 31, 9, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 28, 8, 15, 25 ],
            "thursday": [ 27, 6, 14, 24 ],
            "friday": [ 26, 5, 14, 23 ],
            "saturday": [ 1, 10, 20, 28 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 436,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/her-arms-2003.jpg',
          title: 'Her Arms',
          artist: 'Dana Schutz',
          year: '2003',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 31, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 8, 15, 25 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 26, 5, 14, 23 ],
            "sunday": [ 1, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 437,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/goodbye-eden.jpg',
          title: 'Goodbye, Eden',
          artist: 'Jana Brike',
          year: '?',
          rule: {
            "monday": [ 1, 10, 20, 28 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 31, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 8, 15, 25 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 26, 5, 14, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 438,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/img-0345.jpg',
          title: 'People\'s Revolution',
          artist: 'Charuvi Agrawal',
          year: '2016',
          rule: {
            "monday": [ 26, 5, 14, 23 ],
            "tuesday": [ 1, 10, 20, 28 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 31, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 8, 15, 25 ],
            "sunday": [ 27, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 439,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/toys-and-reasons.jpg',
          title: 'Toys and Reasons',
          artist: 'Hannah Faith Yata',
          year: '?',
          rule: {
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 26, 5, 14, 23 ],
            "wednesday": [ 1, 10, 20, 28 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 31, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 8, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 440,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/1017143-1435842546647966-1643038606-n.jpg',
          title: 'White',
          artist: 'Boglarka Tornai',
          year: 'c.2012',
          rule: {
            "monday": [ 28, 8, 15, 25 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 26, 5, 14, 23 ],
            "thursday": [ 1, 10, 20, 28 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 31, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 441,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/dsc-0232-2.jpg',
          title: 'Lightning watercolor fabric embroidery hoop',
          artist: 'Samantha Troulis',
          year: '2017',
          rule: {
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 29, 9, 16, 26 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 27, 6, 15, 24 ],
            "friday": [ 2, 11, 21, 29 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 1, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 442,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-stadium-pen-web.jpg',
          title: 'The Stadium (Pen/web)',
          artist: 'Sharon Butler',
          year: '2014',
          rule: {
            "monday": [ 1, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 9, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 27, 6, 15, 24 ],
            "saturday": [ 2, 11, 21, 29 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 443,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/beato-de-gerona-f-176v.jpg',
          title: 'Beato de Gerona Fº 176v',
          artist: 'Ende',
          year: 'c.975',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 1, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 9, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 27, 6, 15, 24 ],
            "sunday": [ 2, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 444,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/claricia-swinging-on-an-initial-q.jpg',
          title: '"Claricia" swinging on an initial "Q"',
          artist: 'Claricia',
          year: '?',
          rule: {
            "monday": [ 2, 11, 21, 29 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 1, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 9, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 27, 6, 15, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 445,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/portrait-of-caterina-micaela-of-spain-1578.jpg',
          title: 'Portrait of Caterina Micaela of Spain',
          artist: 'Sofonisba Anguissola',
          year: '1578',
          rule: {
            "monday": [ 27, 6, 15, 24 ],
            "tuesday": [ 2, 11, 21, 29 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 1, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 9, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 446,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/portrait-of-ottavio-strada-attributed-1568.jpg',
          title: 'Portrait of Ottavio Strada (attributed)',
          artist: 'Marietta Robusti',
          year: '1568',
          rule: {
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 27, 6, 15, 24 ],
            "wednesday": [ 2, 11, 21, 29 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 1, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 9, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 447,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/still-life-with-cheeses-almonds-and-pretzels-1615.jpg',
          title: 'Still Life with Cheeses, Almonds and Pretzels',
          artist: 'Clara Peeters',
          year: '1615',
          rule: {
            "monday": [ 29, 9, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 27, 6, 15, 24 ],
            "thursday": [ 2, 11, 21, 29 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 1, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 448,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/transverbera-o-de-santa-teresa-1672.jpg',
          title: 'Transverberação de Santa Teresa',
          artist: 'Josefa de Obidos',
          year: '1672',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 10, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 7, 16, 25 ],
            "friday": [ 3, 12, 22, 30 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 2, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 449,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/spray-of-flowers-with-insects-and-butterflies-on-a-marble-slab-1690.jpg',
          title: 'Spray of Flowers with Insects and Butterflies on a Marble Slab',
          artist: 'Rachel Ruysch',
          year: '1690',
          rule: {
            "monday": [ 2, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 10, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 7, 16, 25 ],
            "saturday": [ 3, 12, 22, 30 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 450,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/portrait-of-augusta-of-hanover-with-her-first-born-son-karl-georg-of-brunswick-1767.jpg',
          title: 'Portrait of Augusta of Hanover with her first born son Karl Georg of Brunswick',
          artist: 'Angelica Kauffman',
          year: '1767',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 2, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 10, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 7, 16, 25 ],
            "sunday": [ 3, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 451,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/il-sonno-dell-infanzia-e-della-vecchiaia.jpg',
          title: 'Il sonno dell\'infanzia e della vecchiaia',
          artist: 'Marie-Guillemine Benoist',
          year: '?',
          rule: {
            "monday": [ 3, 12, 22, 30 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 2, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 10, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 7, 16, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 452,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/my-grand-child-archie-son-of-eugene-cameron-r-a-aged-2-years-3-months-1865.jpg',
          title: 'My Grand Child Archie Son of Eugene Cameron R.A. Aged 2 Years & 3 Months',
          artist: 'Julia Margaret Cameron',
          year: '1865',
          rule: {
            "monday": [ 28, 7, 16, 25 ],
            "tuesday": [ 3, 12, 22, 30 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 2, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 10, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 453,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/children-playing-on-the-beach-1884.jpg',
          title: 'Children Playing On The Beach',
          artist: 'Mary Cassatt',
          year: '1884',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 7, 16, 25 ],
            "wednesday": [ 3, 12, 22, 30 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 2, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 10, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 454,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/secretly-1878.jpg',
          title: 'Secretly',
          artist: 'Eva Gonzales',
          year: '1877 - 1888',
          rule: {
            "monday": [ 30, 10, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 28, 7, 16, 25 ],
            "thursday": [ 3, 12, 22, 30 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 2, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 455,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/a-woman-sketching-in-a-glade.jpg',
          title: 'A Woman Sketching In A Glade',
          artist: 'Mildred Anne Butler',
          year: '?',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 11, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 17, 26 ],
            "friday": [ 4, 13, 23, 31 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 31, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 456,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/k8iiy3rglfc.jpg',
          title: 'K8IIY3rGlfc',
          artist: 'Marianne von Werefkin',
          year: '?',
          rule: {
            "monday": [ 31, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 11, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 17, 26 ],
            "saturday": [ 4, 13, 23, 31 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 457,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/svanen-1914.jpg',
          title: 'Svanen',
          artist: 'Hilma af Klint',
          year: '1914',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 31, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 11, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 17, 26 ],
            "sunday": [ 4, 13, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 458,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-little-hills-1.jpg',
          title: 'The Little Hills',
          artist: 'Margaret Macdonald',
          year: 'c.1914 - c.1915',
          rule: {
            "monday": [ 4, 13, 23, 31 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 31, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 11, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 17, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 459,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/yvette-guilbert-2.jpg',
          title: 'Yvette Guilbert',
          artist: 'Alice Boughton',
          year: '?',
          rule: {
            "monday": [ 29, 8, 17, 26 ],
            "tuesday": [ 4, 13, 23, 31 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 31, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 11, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 460,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/059-anne-w-brigman-c-1915.jpg',
          title: 'Erotische Fotografie',
          artist: 'Anne Brigman',
          year: 'c.1915',
          rule: {
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 29, 8, 17, 26 ],
            "wednesday": [ 4, 13, 23, 31 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 31, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 11, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 461,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-cathedrals-of-broadway-1929.jpg',
          title: 'The Cathedrals of Broadway',
          artist: 'Florine Stettheimer',
          year: '1929',
          rule: {
            "monday": [ 31, 11, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 17, 26 ],
            "thursday": [ 4, 13, 23, 31 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 31, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 462,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/loves-me-loves-me-not-1909.jpg',
          title: 'Loves Me, Loves Me Not',
          artist: 'Ethel Carrick',
          year: '1909',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 12, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 18, 27 ],
            "friday": [ 5, 14, 24, 1 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 1, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 463,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/folly-or-saintless.jpg',
          title: 'Folly or Saintless',
          artist: 'Ethel Reed',
          year: '1895',
          rule: {
            "monday": [ 1, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 12, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 18, 27 ],
            "saturday": [ 5, 14, 24, 1 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 464,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/bos-1912.jpg',
          title: 'Bos',
          artist: 'Jacoba van Heemskerck',
          year: '1912',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 1, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 12, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 18, 27 ],
            "sunday": [ 5, 14, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 465,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/meditation-1917(1).jpg',
          title: 'Meditation',
          artist: 'Gabriele Munter',
          year: '1917',
          rule: {
            "monday": [ 5, 14, 24, 1 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 1, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 12, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 18, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 466,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-tub-1917.jpg',
          title: 'The Tub',
          artist: 'Vanessa Bell',
          year: '1917',
          rule: {
            "monday": [ 30, 9, 18, 27 ],
            "tuesday": [ 5, 14, 24, 1 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 1, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 12, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 467,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/city-1927.jpg',
          title: 'City',
          artist: 'Aleksandra Ekster',
          year: '1927',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 18, 27 ],
            "wednesday": [ 5, 14, 24, 1 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 1, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 12, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 468,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/portrait-of-mademoiselle-chanel-1923.jpg',
          title: 'Portrait of Mademoiselle Chanel',
          artist: 'Marie Laurencin',
          year: '1923',
          rule: {
            "monday": [ 1, 12, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 18, 27 ],
            "thursday": [ 5, 14, 24, 1 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 1, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 469,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/swimsuits.jpg',
          title: 'Swimsuits',
          artist: 'Sonia Delaunay',
          year: '?',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 13, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 19, 28 ],
            "friday": [ 6, 15, 25, 2 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 2, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 470,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/a-cuca-1924.jpg',
          title: 'A Cuca',
          artist: 'Tarsila do Amaral',
          year: '1924',
          rule: {
            "monday": [ 2, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 13, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 19, 28 ],
            "saturday": [ 6, 15, 25, 2 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 471,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/number-126-1948.jpg',
          title: 'Number 126',
          artist: 'Anne Ryan',
          year: '1948',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 2, 14, 22, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 13, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 19, 28 ],
            "sunday": [ 6, 15, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 472,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/solitude-entonnoir-funnel-of-solitude-1921.jpg',
          title: 'Solitude entonnoir (Funnel of solitude)',
          artist: 'Suzanne Duchamp',
          year: '1921',
          rule: {
            "monday": [ 6, 15, 25, 2 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 2, 14, 22, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 13, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 19, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 473,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/professionalization-albeeg-cyclamen-1932.jpg',
          title: 'Cyclamen',
          artist: 'Grace Albee',
          year: '1932',
          rule: {
            "monday": [ 31, 10, 19, 28 ],
            "tuesday": [ 6, 15, 25, 2 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 2, 14, 22, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 13, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 474,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/marika-with-a-bouquet-of-flowers-1970.jpg',
          title: 'Marika with a bouquet of flowers',
          artist: 'Marevna (Marie Vorobieff)',
          year: '1970',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 19, 28 ],
            "wednesday": [ 6, 15, 25, 2 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 2, 14, 22, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 13, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 475,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/portrait-of-a-young-girl-1939.jpg',
          title: 'Portrait of a Young Girl',
          artist: 'Irma Stern',
          year: '1939',
          rule: {
            "monday": [ 2, 13, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 19, 28 ],
            "thursday": [ 6, 15, 25, 2 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 2, 14, 22, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 476,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/negocieri-1935.jpg',
          title: 'Negocieri',
          artist: 'Lucia Demetriade Balacescu',
          year: '1935',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 14, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 20, 29 ],
            "friday": [ 7, 16, 26, 3 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 3, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 477,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/autumn-fields-knowlton-1941.jpg',
          title: 'Autumn Fields, Knowlton',
          artist: 'Prudence Heward',
          year: '1941',
          rule: {
            "monday": [ 3, 15, 23, 2 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 14, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 20, 29 ],
            "saturday": [ 7, 16, 26, 3 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 478,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/spatial-composition-nr-6-1931.jpg',
          title: 'Spatial Composition Nr. 6',
          artist: 'Katarzyna Kobro',
          year: '1931',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 3, 15, 23, 2 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 14, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 20, 29 ],
            "sunday": [ 7, 16, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 479,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/small-portrait-1950.jpg',
          title: 'Small Portrait',
          artist: 'Kay Sage',
          year: '1950',
          rule: {
            "monday": [ 7, 16, 26, 3 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 3, 15, 23, 2 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 14, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 20, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 480,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/sky-covenant-1973.jpg',
          title: 'Sky Covenant',
          artist: 'Louise Nevelson',
          year: '1973',
          rule: {
            "monday": [ 1, 11, 20, 29 ],
            "tuesday": [ 7, 16, 26, 3 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 3, 15, 23, 2 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 14, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 481,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/old-french-fairy-tales-0008-1.jpg',
          title: 'Rosalie saw before her eyes a tree of marvelous beauty',
          artist: 'Virginia Frances Sterrett',
          year: 'c.1919',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 20, 29 ],
            "wednesday": [ 7, 16, 26, 3 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 3, 15, 23, 2 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 14, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 482,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/tomis.jpg',
          title: 'Tomis',
          artist: 'Micaela Eleutheriade',
          year: '?',
          rule: {
            "monday": [ 3, 14, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 20, 29 ],
            "thursday": [ 7, 16, 26, 3 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 3, 15, 23, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 483,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/still-life-beet-1959.jpg',
          title: 'Still life "Beet"',
          artist: 'Kateryna Bilokur',
          year: '1959',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 15, 22, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 21, 30 ],
            "friday": [ 8, 17, 27, 4 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 4, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 484,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/rf-presagio-1080x1599.jpg',
          title: 'Presagio',
          artist: 'Raquel Forner',
          year: '1931',
          rule: {
            "monday": [ 4, 16, 24, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 15, 22, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 21, 30 ],
            "saturday": [ 8, 17, 27, 4 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 485,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/relache-1943.jpg',
          title: 'Relache',
          artist: 'Toyen',
          year: '1943',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 4, 16, 24, 3 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 15, 22, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 21, 30 ],
            "sunday": [ 8, 17, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 486,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1957(2).jpg',
          title: 'Untitled',
          artist: 'Perle Fine',
          year: '1957',
          rule: {
            "monday": [ 8, 17, 27, 4 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 4, 16, 24, 3 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 15, 22, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 21, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 487,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/floating-shapes-1958.jpg',
          title: 'Floating Shapes',
          artist: 'Lenore Tawney',
          year: '1958',
          rule: {
            "monday": [ 2, 12, 21, 30 ],
            "tuesday": [ 8, 17, 27, 4 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 4, 16, 24, 3 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 15, 22, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 488,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/i-give-this-bouquet-of-stars-where-children-are-1982.jpg',
          title: 'I Give This Bouquet of Stars Where Children Are',
          artist: 'Maria Primachenko',
          year: '1982',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 21, 30 ],
            "wednesday": [ 8, 17, 27, 4 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 4, 16, 24, 3 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 15, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 489,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-from-little-image-series-1949.jpg',
          title: 'Untitled (from Little Image series)',
          artist: 'Lee Krasner',
          year: '1949',
          rule: {
            "monday": [ 4, 15, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 21, 30 ],
            "thursday": [ 8, 17, 27, 4 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 4, 16, 24, 3 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 490,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/nature-morte-au-chapeau-1946.jpg',
          title: 'Nature morte au chapeau',
          artist: 'Greta Freist',
          year: '1946',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 16, 23, 2 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 22, 31 ],
            "friday": [ 9, 18, 28, 5 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 5, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 491,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/fasl-1960.jpg',
          title: 'Fasl',
          artist: 'Aurelie Nemours',
          year: '1960',
          rule: {
            "monday": [ 5, 17, 25, 4 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 16, 23, 2 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 22, 31 ],
            "saturday": [ 9, 18, 28, 5 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 492,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/on-a-clear-day-2-1973.jpg',
          title: 'On a clear day, #2',
          artist: 'Agnes Martin',
          year: '1973',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 5, 17, 25, 4 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 16, 23, 2 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 22, 31 ],
            "sunday": [ 9, 18, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 493,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/reticul-rea-1969.jpg',
          title: 'Reticulárea',
          artist: 'Gego',
          year: '1969',
          rule: {
            "monday": [ 9, 18, 28, 5 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 5, 17, 25, 4 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 16, 23, 2 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 22, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 494,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/tous-toujour-1950.jpg',
          title: 'Tous toujour',
          artist: 'Meret Oppenheim',
          year: '1950',
          rule: {
            "monday": [ 3, 13, 22, 31 ],
            "tuesday": [ 9, 18, 28, 5 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 5, 17, 25, 4 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 16, 23, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 495,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/siete-1949.jpg',
          title: 'Siete',
          artist: 'Carmen Herrera',
          year: '1949',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 22, 31 ],
            "wednesday": [ 9, 18, 28, 5 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 5, 17, 25, 4 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 16, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 496,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/composition-abstraite-1955.jpg',
          title: 'Composition abstraite',
          artist: 'Composition abstraite',
          year: '1955',
          rule: {
            "monday": [ 5, 16, 23, 2 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 22, 31 ],
            "thursday": [ 9, 18, 28, 5 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 5, 17, 25, 4 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 497,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/woman-in-reykjavik-with-umbrella-1980.jpg',
          title: 'Woman in Reykjavik with Umbrella',
          artist: 'Louisa Matthiasdottir',
          year: '1980',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 17, 24, 3 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 14, 23, 1 ],
            "friday": [ 10, 19, 29, 6 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 6, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 498,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1978-2.jpg',
          title: 'Untitled',
          artist: 'Mira Schendel',
          year: '1978',
          rule: {
            "monday": [ 6, 18, 26, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 17, 24, 3 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 23, 1 ],
            "saturday": [ 10, 19, 29, 6 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 499,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/jockey-1948.jpg',
          title: 'Jockey',
          artist: 'Huguette Arthur Bertrand',
          year: '1948',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 6, 18, 26, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 17, 24, 3 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 23, 1 ],
            "sunday": [ 10, 19, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 500,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/remember-no-6-1999.jpg',
          title: 'Remember No. 6',
          artist: 'Anne Truitt',
          year: '1999',
          rule: {
            "monday": [ 10, 19, 29, 6 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 6, 18, 26, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 17, 24, 3 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 501,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/85a9973f82bf880b1a9c978669bc0316.jpg',
          title: 'Bishop at the altar',
          artist: 'Diane Arbus',
          year: '1964',
          rule: {
            "monday": [ 4, 14, 23, 1 ],
            "tuesday": [ 10, 19, 29, 6 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 6, 18, 26, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 17, 24, 3 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 502,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/alexandra-exter-my-fan-is-half-a-circle-1994.jpg',
          title: 'Alexandra Exter (My Fan is Half a Circle)',
          artist: 'Miriam Schapiro',
          year: '1994',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 23, 1 ],
            "wednesday": [ 10, 19, 29, 6 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 6, 18, 26, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 17, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 503,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/le-viol-1981.jpg',
          title: 'Le Viol',
          artist: 'Mimi Parent',
          year: '1981',
          rule: {
            "monday": [ 6, 17, 24, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 23, 1 ],
            "thursday": [ 10, 19, 29, 6 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 6, 18, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 504,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/work.jpg',
          title: 'Work',
          artist: 'Tsuruko Yamazaki',
          year: '?',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 18, 25, 4 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 24, 2 ],
            "friday": [ 11, 20, 30, 7 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 7, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 505,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-lights-of-the-plant-1965.jpg',
          title: 'The Lights of the Plant',
          artist: 'Maria Stolarova',
          year: '1965',
          rule: {
            "monday": [ 7, 19, 27, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 18, 25, 4 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 24, 2 ],
            "saturday": [ 11, 20, 30, 7 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 506,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/sem-t-tulo-1990.jpg',
          title: 'Sem título',
          artist: 'Menez',
          year: '1990',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 7, 19, 27, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 18, 25, 4 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 24, 2 ],
            "sunday": [ 11, 20, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 507,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1969.jpg',
          title: 'Untitled',
          artist: 'Hannelore Baron',
          year: '1969',
          rule: {
            "monday": [ 11, 20, 30, 7 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 7, 19, 27, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 18, 25, 4 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 508,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/living-edge-1973.jpg',
          title: 'Living Edge',
          artist: 'Helen Frankenthaler',
          year: '1973',
          rule: {
            "monday": [ 5, 15, 24, 2 ],
            "tuesday": [ 11, 20, 30, 7 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 7, 19, 27, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 18, 25, 4 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 509,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/bootless-boots-1960.jpg',
          title: 'Bootless Boots',
          artist: 'Jo Baer',
          year: '1960',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 24, 2 ],
            "wednesday": [ 11, 20, 30, 7 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 7, 19, 27, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 18, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 510,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/days-of-lang-syne.jpg',
          title: 'Days of Lang Syne',
          artist: 'Gillian Ayres',
          year: '?',
          rule: {
            "monday": [ 7, 18, 25, 4 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 15, 24, 2 ],
            "thursday": [ 11, 20, 30, 7 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 7, 19, 27, 6 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 511,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/serpent-chair-1991.jpg',
          title: 'Serpent Chair',
          artist: 'Niki de Sainte Phalle',
          year: '1991',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 19, 26, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 25, 3 ],
            "friday": [ 12, 21, 31, 8 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 8, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 512,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/kennedy-motorcade-1964.jpg',
          title: 'Kennedy Motorcade',
          artist: 'Audrey Flack',
          year: '1964',
          rule: {
            "monday": [ 8, 20, 28, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 19, 26, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 25, 3 ],
            "saturday": [ 12, 21, 31, 8 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 513,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/scalar-1971.jpg',
          title: 'Scalar',
          artist: 'Dorothea Rockburne',
          year: '1991',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 8, 20, 28, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 19, 26, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 25, 3 ],
            "sunday": [ 12, 21, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 514,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/painting-to-be-stepped-on-1960.jpg',
          title: 'Painting To Be Stepped On',
          artist: 'Yoko Ono',
          year: '1960',
          rule: {
            "monday": [ 12, 21, 31, 8 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 8, 20, 28, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 19, 26, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 515,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1969(1).jpg',
          title: 'Untitled',
          artist: 'Helen Pashgian',
          year: '1969',
          rule: {
            "monday": [ 6, 16, 25, 3 ],
            "tuesday": [ 12, 21, 31, 8 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 8, 20, 28, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 19, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 516,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/olga-2003.jpg',
          title: 'Olga',
          artist: 'Paula Rego',
          year: '2003',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 25, 3 ],
            "wednesday": [ 12, 21, 31, 8 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 8, 20, 28, 7 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 8, 19, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 517,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/light-progressions-1993.jpg',
          title: 'Light Progressions',
          artist: 'Nanda Vigo',
          year: '1993',
          rule: {
            "monday": [ 8, 19, 26, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 25, 3 ],
            "thursday": [ 12, 21, 31, 8 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 8, 20, 28, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 518,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/children.jpg',
          title: 'Children',
          artist: 'Dora Boneva',
          year: '?',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 20, 27, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 17, 26, 4 ],
            "friday": [ 13, 22, 1, 9 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 9, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 519,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/diary-pages.jpg',
          title: 'Diary pages',
          artist: 'Nasreen Mohamedi',
          year: '?',
          rule: {
            "monday": [ 9, 21, 29, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 20, 27, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 17, 26, 4 ],
            "saturday": [ 13, 22, 1, 9 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 520,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/kweilin-dreaming-1989.jpg',
          title: 'Kweilin Dreaming',
          artist: 'Pat Steir',
          year: '1989',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 9, 21, 29, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 20, 27, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 17, 26, 4 ],
            "sunday": [ 13, 22, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 521,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/countdown-to-violence-1964.jpg',
          title: 'Countdown to Violence',
          artist: 'Pauline Boty',
          year: '1964',
          rule: {
            "monday": [ 13, 22, 1, 9 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 9, 21, 29, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 20, 27, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 17, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 522,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/night-sky-2-reversed-2002.jpg',
          title: 'Night Sky 2 Reversed',
          artist: 'Vija Celmins',
          year: '2002',
          rule: {
            "monday": [ 7, 17, 26, 4 ],
            "tuesday": [ 13, 22, 1, 9 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 9, 21, 29, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 20, 27, 6 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 523,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/morning-fever-1970.jpg',
          title: 'Morning Fever',
          artist: 'Pat Lipsky',
          year: '1970',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 17, 26, 4 ],
            "wednesday": [ 13, 22, 1, 9 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 9, 21, 29, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 20, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 524,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/gold-piece-1987.jpg',
          title: 'Gold Piece',
          artist: 'Jacqueline Winsor',
          year: '1987',
          rule: {
            "monday": [ 9, 20, 27, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 26, 4 ],
            "thursday": [ 13, 22, 1, 9 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 9, 21, 29, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 525,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/calvino-s-cities-on-the-amazon-1995.jpg',
          title: 'Calvino’s Cities on the Amazon',
          artist: 'Joyce Kozloff',
          year: '1995',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 10, 21, 28, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 18, 27, 5 ],
            "friday": [ 14, 23, 2, 10 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 10, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 526,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/flesh-journal-2-1993.jpg',
          title: 'Flesh Journal #2',
          artist: 'Harmony Hammond',
          year: '1993',
          rule: {
            "monday": [ 10, 22, 30, 9 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 10, 21, 28, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 18, 27, 5 ],
            "saturday": [ 14, 23, 2, 10 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 527,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/my-women.jpg',
          title: 'My Women',
          artist: 'Guity Novin',
          year: '?',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 10, 22, 30, 9 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 10, 21, 28, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 18, 27, 5 ],
            "sunday": [ 14, 23, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 528,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-your-moments-of-joy-have-1980.jpg',
          title: 'Untitled (Your Moments of Joy Have)',
          artist: 'Barbara Kruger',
          year: '1980',
          rule: {
            "monday": [ 14, 23, 2, 10 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 10, 22, 30, 9 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 10, 21, 28, 7 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 8, 18, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 529,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/bridge-2-1975.jpg',
          title: 'Bridge # 2',
          artist: 'Denise Green',
          year: '1975',
          rule: {
            "monday": [ 8, 18, 27, 5 ],
            "tuesday": [ 14, 23, 2, 10 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 10, 22, 30, 9 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 10, 21, 28, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 530,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/sand-fans-1971.jpg',
          title: 'Sand-Fans',
          artist: 'Alice Aycock',
          year: '1971',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 27, 5 ],
            "wednesday": [ 14, 23, 2, 10 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 10, 22, 30, 9 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 10, 21, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 531,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/after-giorgio-morandi-1985.jpg',
          title: 'After Giorgio Morandi',
          artist: 'Sherrie Levine',
          year: '1985',
          rule: {
            "monday": [ 10, 21, 28, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 18, 27, 5 ],
            "thursday": [ 14, 23, 2, 10 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 10, 22, 30, 9 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 532,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/shady-1-1983.jpg',
          title: 'Shady 1',
          artist: 'Alison Wilding',
          year: '1983',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 11, 22, 29, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 19, 28, 6 ],
            "friday": [ 15, 24, 3, 11 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 12, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 533,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/hybrid-human-2010.jpg',
          title: 'Hybrid Human',
          artist: 'Wanda Koop',
          year: '2010',
          rule: {
            "monday": [ 12, 23, 31, 10 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 11, 22, 29, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 19, 28, 6 ],
            "saturday": [ 15, 24, 3, 11 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 534,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/warship-2006.jpg',
          title: 'Warship',
          artist: 'Leiko Ikemura',
          year: '2006',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 12, 23, 31, 10 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 11, 22, 29, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 19, 28, 6 ],
            "sunday": [ 15, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 535,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/25.jpg',
          title: '«Integrity»',
          artist: 'Ludwiga Nesterovich',
          year: '2013',
          rule: {
            "monday": [ 15, 24, 3, 11 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 12, 23, 31, 10 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 11, 22, 29, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 536,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/corrugated-floor-works.jpeg',
          title: 'Corrugated Floor Works',
          artist: 'Jill Baroff',
          year: '?',
          rule: {
            "monday": [ 9, 19, 28, 6 ],
            "tuesday": [ 15, 24, 3, 11 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 12, 23, 31, 10 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 11, 22, 29, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 537,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/4229-coastalcloudsxv48x72oil.jpeg',
          title: 'Coastal Clouds XV (diptych)',
          artist: 'Finch Sheila',
          year: '?',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 19, 28, 6 ],
            "wednesday": [ 15, 24, 3, 11 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 12, 23, 31, 10 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 11, 22, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 538,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/c-est-la-vie.jpeg',
          title: 'C\'est la vie',
          artist: 'Miss.Tic',
          year: '?',
          rule: {
            "monday": [ 11, 22, 29, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 19, 28, 6 ],
            "thursday": [ 15, 24, 3, 11 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 12, 23, 31, 10 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 539,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-2013-1(1).jpeg',
          title: 'Untitled',
          artist: 'Dilek Demirci',
          year: '2013',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 12, 23, 30, 9 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 10, 20, 29, 7 ],
            "friday": [ 16, 25, 4, 12 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 13, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 540,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/francesca-woodman-roma-1978.jpeg',
          title: 'Roma',
          artist: 'Francesca Woodman',
          year: '1978',
          rule: {
            "monday": [ 13, 24, 1, 11 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 12, 23, 30, 9 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 10, 20, 29, 7 ],
            "saturday": [ 16, 25, 4, 12 ],
            "sunday": [ 15, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 541,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/8-ares-iseult-labote-photography23-v2.jpeg',
          title: 'Sans Titre n°II',
          artist: 'Iseult Labote',
          year: '2002',
          rule: {
            "monday": [ 15, 25, 2, 12 ],
            "tuesday": [ 13, 24, 1, 11 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 12, 23, 30, 9 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 10, 20, 29, 7 ],
            "sunday": [ 16, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 542,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/1061-2012sajmv-serie-4x4-tecnica-mista-sobre-papel-57x77cm.jpeg',
          title: 'Serie 4x4',
          artist: 'Sofia Areal',
          year: '2012',
          rule: {
            "monday": [ 16, 25, 4, 12 ],
            "tuesday": [ 15, 25, 2, 12 ],
            "wednesday": [ 13, 24, 1, 11 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 12, 23, 30, 9 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 10, 20, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 543,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/african-woman-hut-and-fence.jpeg',
          title: 'African Woman (Hut and Fence)',
          artist: 'L Yaffe',
          year: '?',
          rule: {
            "monday": [ 10, 20, 29, 7 ],
            "tuesday": [ 16, 25, 4, 12 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 13, 24, 1, 11 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 12, 23, 30, 9 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 544,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/family-secrets-2006(9).jpeg',
          title: 'Family Secrets',
          artist: 'Kerry O. Furlani',
          year: '2006',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 10, 20, 29, 7 ],
            "wednesday": [ 16, 25, 4, 12 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 13, 24, 1, 11 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 12, 23, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 545,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-sence-of-adventure.jpeg',
          title: 'The Sence of Adventure',
          artist: 'Manuela Sambo',
          year: '2013',
          rule: {
            "monday": [ 12, 23, 30, 9 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 10, 20, 29, 7 ],
            "thursday": [ 16, 25, 4, 12 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 13, 24, 1, 11 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 546,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/raw-2.jpeg',
          title: 'Hyper Ellipsoid (Gold Aqua)',
          artist: 'Gisela Colon',
          year: '2017',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 13, 24, 31, 10 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 11, 21, 30, 8 ],
            "friday": [ 17, 26, 5, 13 ],
            "saturday": [ 16, 26, 3, 13 ],
            "sunday": [ 14, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 547,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/untitled-1996-70-x-65-cm.jpeg',
          title: 'Untitled',
          artist: 'Ilse D\'Hollander',
          year: '1996',
          rule: {
            "monday": [ 14, 25, 2, 12 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 13, 24, 31, 10 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 11, 21, 30, 8 ],
            "saturday": [ 17, 26, 5, 13 ],
            "sunday": [ 16, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 548,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/009d053cb40d1b90093fd940fe5a6ab3-1.jpeg',
          title: 'Untitled',
          artist: 'Katrien De Blauwer',
          year: '?',
          rule: {
            "monday": [ 16, 26, 3, 13 ],
            "tuesday": [ 14, 25, 2, 12 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 13, 24, 31, 10 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 11, 21, 30, 8 ],
            "sunday": [ 17, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 549,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/closed-contact-14.jpeg',
          title: 'Closed Contact #14',
          artist: 'Jenny Saville',
          year: '1995 - 1996',
          rule: {
            "monday": [ 17, 26, 5, 13 ],
            "tuesday": [ 16, 26, 3, 13 ],
            "wednesday": [ 14, 25, 2, 12 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 13, 24, 31, 10 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 11, 21, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 550,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/monika-blatton-rocznica.jpeg',
          title: 'Anniversary',
          artist: 'Monica Blatton',
          year: '2009',
          rule: {
            "monday": [ 11, 21, 30, 8 ],
            "tuesday": [ 17, 26, 5, 13 ],
            "wednesday": [ 16, 26, 3, 13 ],
            "thursday": [ 14, 25, 2, 12 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 13, 24, 31, 10 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 551,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/2018-01-24-20-29-39.jpeg',
          title: 'It`s a blessing',
          artist: 'Raiskina Marina',
          year: '2017',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 11, 21, 30, 8 ],
            "wednesday": [ 17, 26, 5, 13 ],
            "thursday": [ 16, 26, 3, 13 ],
            "friday": [ 14, 25, 2, 12 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 13, 24, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 552,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/night-sculpting-2001.jpeg',
          title: 'Night Sculpting',
          artist: 'Dana Schutz',
          year: '2001',
          rule: {
            "monday": [ 13, 24, 31, 10 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 11, 21, 30, 8 ],
            "thursday": [ 17, 26, 5, 13 ],
            "friday": [ 16, 26, 3, 13 ],
            "saturday": [ 14, 25, 2, 12 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 553,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/am-lia-by-sonny.jpeg',
          title: 'Colecção Personalidades - AMÁLIA',
          artist: 'Sónia Domingues',
          year: '2015',
          rule: {
            "monday": [ 15, 25, 2, 12 ],
            "tuesday": [ 14, 25, 1, 11 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 12, 22, 31, 9 ],
            "friday": [ 18, 27, 6, 14 ],
            "saturday": [ 17, 27, 4, 14 ],
            "sunday": [ 15, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 554,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/marina-pallares-v-ngase-p-ca-mi-chaparrita.jpeg',
          title: 'Véngase Pá Ca Mi Chaparrita (Come Here, My Little One)',
          artist: 'Marina Pallares',
          year: '2003',
          rule: {
            "monday": [ 15, 26, 3, 13 ],
            "tuesday": [ 15, 25, 2, 12 ],
            "wednesday": [ 14, 25, 1, 11 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 12, 22, 31, 9 ],
            "saturday": [ 18, 27, 6, 14 ],
            "sunday": [ 17, 27, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 555,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/cliton-hill-bar.jpeg',
          title: 'Cliton Hill Bar',
          artist: 'Hai-Hsin Huang',
          year: '2015',
          rule: {
            "monday": [ 17, 27, 4, 14 ],
            "tuesday": [ 15, 26, 3, 13 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 14, 25, 1, 11 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 12, 22, 31, 9 ],
            "sunday": [ 18, 27, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 556,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/luminary.jpeg',
          title: 'LUMINARY',
          artist: 'Hannah Faith Yata',
          year: '?',
          rule: {
            "monday": [ 18, 27, 6, 14 ],
            "tuesday": [ 17, 27, 4, 14 ],
            "wednesday": [ 15, 26, 3, 13 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 14, 25, 1, 11 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 12, 22, 31, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 557,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/posle-osmotra120h100-holst-maslo-2017-800-e1548337152784.jpeg',
          title: 'After Examination',
          artist: 'Lucy Ivanova',
          year: '2017',
          rule: {
            "monday": [ 12, 22, 31, 9 ],
            "tuesday": [ 18, 27, 6, 14 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 15, 26, 3, 13 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 14, 25, 1, 11 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 558,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/canicas.jpeg',
          title: 'Canicas',
          artist: 'Soleto',
          year: '?',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 12, 22, 31, 9 ],
            "wednesday": [ 18, 27, 6, 14 ],
            "thursday": [ 17, 27, 4, 14 ],
            "friday": [ 15, 26, 3, 13 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 14, 25, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 559,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/dsc-1838.jpeg',
          title: 'Camera embroidery hoop',
          artist: 'Samantha Troulis',
          year: '2016',
          rule: {
            "monday": [ 14, 25, 1, 11 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 12, 22, 31, 9 ],
            "thursday": [ 18, 27, 6, 14 ],
            "friday": [ 17, 27, 4, 14 ],
            "saturday": [ 15, 26, 3, 13 ],
            "sunday": [ 15, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 560,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/invasives-propane-tanks-2014.jpeg',
          title: 'Invasives (Propane tanks)',
          artist: 'Sharon Butler',
          year: '2014',
          rule: {
            "monday": [ 16, 26, 3, 13 ],
            "tuesday": [ 15, 26, 2, 12 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 13, 23, 1, 10 ],
            "friday": [ 19, 28, 7, 15 ],
            "saturday": [ 18, 28, 5, 15 ],
            "sunday": [ 16, 27, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 561,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/vision-of-the-city-of-god.jpeg',
          title: 'Vision of the City of God',
          artist: 'Hildegard of Bingen',
          year: '?',
          rule: {
            "monday": [ 16, 27, 4, 14 ],
            "tuesday": [ 16, 26, 3, 13 ],
            "wednesday": [ 15, 26, 2, 12 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 13, 23, 1, 10 ],
            "saturday": [ 19, 28, 7, 15 ],
            "sunday": [ 18, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 562,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/portrait-of-lady-su-hui-with-a-palindrome-in-the-manner-of-zhu-shuzheng.jpeg',
          title: 'Portrait of Lady Su Hui with a Palindrome in the Manner of Zhu Shuzheng',
          artist: 'Guan Daosheng',
          year: '?',
          rule: {
            "monday": [ 18, 28, 5, 15 ],
            "tuesday": [ 16, 27, 4, 14 ],
            "wednesday": [ 16, 26, 3, 13 ],
            "thursday": [ 15, 26, 2, 12 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 13, 23, 1, 10 ],
            "sunday": [ 19, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 563,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/the-adoration-of-the-magi-1560.jpeg',
          title: 'The Adoration of the Magi',
          artist: 'Lavinia Fontana',
          year: '1560',
          rule: {
            "monday": [ 19, 28, 7, 15 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 16, 27, 4, 14 ],
            "thursday": [ 16, 26, 3, 13 ],
            "friday": [ 15, 26, 2, 12 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 13, 23, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 564,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/cherries-in-a-silver-compote.jpeg',
          title: 'Cherries in a Silver Compote',
          artist: 'Fede Galizia',
          year: '?',
          rule: {
            "monday": [ 13, 23, 1, 10 ],
            "tuesday": [ 19, 28, 7, 15 ],
            "wednesday": [ 18, 28, 5, 15 ],
            "thursday": [ 16, 27, 4, 14 ],
            "friday": [ 16, 26, 3, 13 ],
            "saturday": [ 15, 26, 2, 12 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 565,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/display-image-12.jpeg',
          title: 'Still Life with Blackberries',
          artist: 'Louise Moillon',
          year: '?',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 13, 23, 1, 10 ],
            "wednesday": [ 19, 28, 7, 15 ],
            "thursday": [ 18, 28, 5, 15 ],
            "friday": [ 16, 27, 4, 14 ],
            "saturday": [ 16, 26, 3, 13 ],
            "sunday": [ 15, 26, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 566,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/mary-beale-attr-portrait-of-nell-gwyl.jpeg',
          title: 'Portrait Der Königlichen Maitresse Nell Gwyn. Öl Auf Leinwand. 60,5 X 50 Cm.',
          artist: 'Mary Beale',
          year: '1697',
          rule: {
            "monday": [ 15, 26, 2, 12 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 13, 23, 1, 10 ],
            "thursday": [ 19, 28, 7, 15 ],
            "friday": [ 18, 28, 5, 15 ],
            "saturday": [ 16, 27, 4, 14 ],
            "sunday": [ 16, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 567,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/lady-in-a-turkish-costume-felicita-sartori-1728.jpeg',
          title: 'Lady in a Turkish Costume (Felicita Sartori)',
          artist: 'Rosalba Carriera',
          year: '1728',
          rule: {
            "monday": [ 17, 27, 4, 14 ],
            "tuesday": [ 16, 27, 3, 13 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 14, 24, 2, 11 ],
            "friday": [ 20, 29, 8, 16 ],
            "saturday": [ 19, 29, 6, 16 ],
            "sunday": [ 17, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 568,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/still-life-with-a-ham-1767.jpeg',
          title: 'Still Life with a Ham',
          artist: 'Anne Vallayer-Coster',
          year: '1767',
          rule: {
            "monday": [ 17, 28, 5, 15 ],
            "tuesday": [ 17, 27, 4, 14 ],
            "wednesday": [ 16, 27, 3, 13 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 14, 24, 2, 11 ],
            "saturday": [ 20, 29, 8, 16 ],
            "sunday": [ 19, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 569,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/portrait-of-baron-larrey.jpeg',
          title: 'Portrait of Baron Larrey',
          artist: 'Marie-Guillemine Benoist',
          year: '?',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 17, 28, 5, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 27, 3, 13 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 14, 24, 2, 11 ],
            "sunday": [ 20, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 570,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/march/ellen-terry-1864.jpeg',
          title: 'Ellen Terry',
          artist: 'Julia Margaret Cameron',
          year: '1864',
          rule: {
            "monday": [ 20, 29, 8, 16 ],
            "tuesday": [ 19, 29, 6, 16 ],
            "wednesday": [ 17, 28, 5, 15 ],
            "thursday": [ 17, 27, 4, 14 ],
            "friday": [ 16, 27, 3, 13 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 14, 24, 2, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_arts_id_seq', (SELECT MAX(id) FROM march_arts));");
    });
};
