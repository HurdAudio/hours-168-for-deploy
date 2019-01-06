'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('september_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('september_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-bird-lover-1952.jpg',
          title: 'The Bird Lover',
          artist: 'Adja Yunkers',
          year: '1952',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/composition-1974.jpg',
          title: 'Composition',
          artist: 'Cesar Domela',
          year: '1974',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/verdi-requiem-pg-201-05-fragm-1958.jpg',
          title: 'Verdi Requiem, pg. 201-05 (Fragm.)',
          artist: 'Robert Strubin',
          year: '1958',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/les-ongles-noirs-1981.jpg',
          title: 'Les ongles noirs',
          artist: 'Aurelie Nemours',
          year: '1981',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/venus-of-szentendre-1968.jpg',
          title: 'Venus of Szentendre',
          artist: 'Bela Czobel',
          year: '1968',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/garden-in-saint-denis-1980.jpg',
          title: 'Garden in Saint Denis',
          artist: 'Betty Parsons',
          year: '1980',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/mankind-s-struggle-for-lasting-peace-detail-1953-1.jpg',
          title: 'Mankind\'s Struggle for Lasting Peace (detail)',
          artist: 'Vela Zanetti',
          year: '1953',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/jaune-1962.jpg',
          title: 'Jaune',
          artist: 'Fernand Leduc',
          year: '1962',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/man-in-silver-suit.jpg',
          title: 'Man in Silver Suit',
          artist: 'Lucian Freud',
          year: '1998',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/infra-black-drawing-1963.jpg',
          title: 'Infra-Black Drawing',
          artist: 'Paul Paun',
          year: '1963',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/wait-untitled-xix-1968.jpg',
          title: 'Wait - Untitled XIX',
          artist: 'Piero Dorazio',
          year: '1968',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-12-part-circle-8ft-6in-diameter-1970.jpg',
          title: 'Untitled,12 part Circle, 8ft 6in Diameter',
          artist: 'Robert Swain',
          year: '1970',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/les-indes-sur-la-rivi-re-1967.jpg',
          title: 'Les Indes sur la rivière',
          artist: 'Jean Messagier',
          year: '1967',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/wachstum-ii-1950.jpg',
          title: 'Wachstum II',
          artist: 'Leo Leuppi',
          year: '1950',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/abduction-a-1961.jpg',
          title: 'Abduction A',
          artist: 'Robert Goodnough',
          year: '1961',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/multiplicatiion-of-the-arcs-1954.jpg',
          title: 'Multiplicatiion of the Arcs',
          artist: 'Yves Tanguy',
          year: '1954',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/illustration-for-v-voiculescu-s-last-shakespearean-sonnets-1982(3).jpg',
          title: 'Illustration for V. Voiculescu\'s "Last Shakespearean Sonnets"',
          artist: 'Margareta Sterian',
          year: '1982',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/my-oneness-a-universe-of-colours-1957.jpg',
          title: 'My Oneness, A Universe of Colours',
          artist: 'Alfred Jensen',
          year: '1957',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/two-bathers-1960.jpg',
          title: 'Two Bathers',
          artist: 'Elmer Bischoff',
          year: '1960',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/collins-st-5p-m-1955.jpg',
          title: 'Collins St. 5p.m.',
          artist: 'John Brack',
          year: '1955',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/improvisation-modern-city-cacophonic-1956.jpg',
          title: 'Improvisation (Modern City): Cacophonic!',
          artist: 'Robert Strubin',
          year: '1956',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-acrobatic-rectangle-per-eleven-1967.jpg',
          title: 'The Acrobatic Rectangle, Per Eleven',
          artist: 'Alfred Jensen',
          year: '1967',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/portrait-of-a-beauty-among-peonies-1958.jpg',
          title: 'Portrait of a Beauty Among Peonies',
          artist: 'Le Pho',
          year: '1958',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1958.jpg',
          title: 'Untitled',
          artist: 'Gunther Gerzso',
          year: '1958',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/portrait-1970.jpg',
          title: 'Portrait',
          artist: 'Abidin Dino',
          year: '1970',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/zurich-1974.jpg',
          title: 'Zurich',
          artist: 'Raoul Ubac',
          year: '1974',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/moon-meditation-1960.jpg',
          title: 'Moon Meditation',
          artist: 'Richard Pousette-Dart',
          year: '1960',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/minoa-1962.jpg',
          title: 'Minoa',
          artist: 'Paul Feeley',
          year: '1962',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/digging-for-night-crawlers-1985.jpg',
          title: 'Digging for Night Crawlers',
          artist: 'Robert Qualters',
          year: '1985',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1950-1.jpg',
          title: 'Untitled',
          artist: 'Julius Bissier',
          year: '1950',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/monadi-1949.jpg',
          title: 'Monadi',
          artist: 'Mario Ballocco',
          year: '1949',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/est-calor-em-evora-1983.jpg',
          title: 'Està Calor em Evora',
          artist: 'Antonio Dacosta',
          year: '1983',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/cronus-young-1968.jpg',
          title: 'Cronus Young',
          artist: 'David Hare',
          year: '1968',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/typographic-nude-1965.jpg',
          title: 'Typographic Nude',
          artist: 'Robert Heinecken',
          year: '1965',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/10th-sculpture-1963.jpg',
          title: '10th Sculpture',
          artist: 'Michael Bolus',
          year: '1963',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/fish-bowl.jpg',
          title: 'Fish Bowl',
          artist: 'Erte',
          year: '?',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/three-trees-georgia-1969.jpg',
          title: 'Three Trees, Georgia',
          artist: 'Ivan Albright',
          year: '1969',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/tricomplex-1959.jpg',
          title: 'Tricomplex',
          artist: 'Leo Leuppi',
          year: '1959',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/cotyo-perfica-volupie-1963.jpg',
          title: 'Cotyo, Perfica, Volupie',
          artist: 'Felix Labisse',
          year: '1963',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/x-ray-of-m-o-s-skull-1964.jpg',
          title: 'X-Ray of M.O.\'s Skull',
          artist: 'Meret Oppenheim',
          year: '1964',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/madchen-am-meer.jpg',
          title: 'Madchen am Meer',
          artist: 'Dieter Asmus',
          year: '1973',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/sunrise-in-mallorca.jpg',
          title: 'Sunrise in Mallorca',
          artist: 'Jerry W. McDaniel',
          year: '2011',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/escale-1964.jpg',
          title: 'Escale',
          artist: 'Herve Telemaque',
          year: '1964',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/web910.jpg',
          title: 'Para Largo Tiempo',
          artist: 'Vlady Kibalchich Rusakov',
          year: '?',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-death-mask-1978-1.jpg',
          title: 'Untitled (Death Mask)',
          artist: 'Arnulf Rainer',
          year: '1978',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/self-portrait-1955.jpg',
          title: 'Self-portrait',
          artist: 'John Brack',
          year: '1955',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/forme-1998.jpg',
          title: 'Forme',
          artist: 'Olivier Debre',
          year: '1998',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1956-1.jpg',
          title: 'Untitled',
          artist: 'Zao Wou-Ki',
          year: '1956',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/composition-1954.jpg',
          title: 'Composition',
          artist: 'Huguette Arthur Bertrand',
          year: '1954',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/peinture-23-mai-1969-1969.jpg',
          title: 'Peinture 23 Mai 1969',
          artist: 'Pierre Soulages',
          year: '1969',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/naufragio-2003.jpg',
          title: 'Naufragio',
          artist: 'Carlo Maria Mariani',
          year: '2003',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/black-and-blue-3-2011.jpg',
          title: 'Black and Blue 3',
          artist: 'Cesar Paternosto',
          year: '2011',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/noir-jaune-et-bleu-1991.jpg',
          title: 'Noir, Jaune et bleu',
          artist: 'Albert Bitran',
          year: '1991',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/macarena-esperanza-1971.jpg',
          title: 'Macarena Esperanza',
          artist: 'Audrey Flack',
          year: '1971',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/ombre-port-e-de-maurice-henry-1968.jpg',
          title: 'Ombre portée de Maurice Henry',
          artist: 'Lourdes Castro',
          year: '1968',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/interno-con-piano-forte-1968.jpg',
          title: 'Interno con piano forte',
          artist: 'Valerio Adami',
          year: '1968',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/serigrafia.jpg',
          title: 'Serigrafia',
          artist: 'Ramirez Villamizar',
          year: '?',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/exist-ncia-1985.jpg',
          title: 'Existência',
          artist: 'Manabu Mabe',
          year: '1985',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/fish.jpg',
          title: 'Fish',
          artist: 'Aldemir Martins',
          year: '?',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/accomplishments-1964.jpg',
          title: 'Accomplishments',
          artist: 'James Lee Byars',
          year: '1964',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-one-hundred-spaces-1997.jpg',
          title: 'Untitled (One Hundred Spaces)',
          artist: 'Rachel Whiteread',
          year: '1997',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/composition-2010.jpg',
          title: 'Composition',
          artist: 'JonOne',
          year: '2010',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/time-to-dance-2012.jpg',
          title: 'Time to Dance',
          artist: 'John C. Kuchera',
          year: '2012',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/flat-1000x1000-075-f-u1-1-2.jpg',
          title: 'Unspiral',
          artist: 'Gianni Sarcone',
          year: '2013',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/karma-2003.jpg',
          title: 'Karma',
          artist: 'Do-ho Suh',
          year: '2003',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/islam-1965.jpg',
          title: 'Islam',
          artist: 'Carla Accardi',
          year: '1965',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/light-1961.jpg',
          title: 'Light',
          artist: 'Petre Abrudan',
          year: '1961',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/eve-1963.jpg',
          title: 'Eve',
          artist: 'Mordecai Ardon',
          year: '1963',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/four-darks-in-red-1958.jpg',
          title: 'Four Darks in Red',
          artist: 'Mark Rothko',
          year: '1958',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/corona-i-1995.jpg',
          title: 'Corona I',
          artist: 'Paul Brach',
          year: '1995',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 8 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/number-23-1960.jpg',
          title: 'Number 23',
          artist: 'John McLaughlin',
          year: '1960',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 8 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-cold-war-blonde-1959.jpg',
          title: 'The Cold-War Blonde',
          artist: 'Robert G. Harris',
          year: '1959',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/le-passage-1956.jpg',
          title: 'Le Passage',
          artist: 'Kay Sage',
          year: '1956',
          rule: {
            "monday": [ 7, 13, 1, 8 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/dried-flowers-1964.jpg',
          title: 'Dried Flowers',
          artist: 'Hiroyuki Tajima',
          year: '1964',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 8 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/dr-pepper-1948.jpg',
          title: 'Dr. Pepper',
          artist: 'Eduardo Paolozzi',
          year: '1948',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 8 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/desmaterializa-o-ascens-o-1990.jpg',
          title: 'Desmaterialização - Ascensão',
          artist: 'Eduardo Nery',
          year: '1990',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 8 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/may-that-nuclear-war-be-cursed-1978.jpg',
          title: 'May That Nuclear War Be Cursed!',
          artist: 'Maria Primachenko',
          year: '1978',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 9 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/pilar-1955.jpg',
          title: 'Pilar',
          artist: 'Jose Manuel Capuletti',
          year: '1955',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 9 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/nino-2000.jpg',
          title: 'Nino',
          artist: 'George Mavroides',
          year: '2000',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/sliced-tomatoes-1979.jpg',
          title: 'Sliced Tomatoes',
          artist: 'Marjorie Strider',
          year: '1979',
          rule: {
            "monday": [ 8, 14, 2, 9 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/over-ten-thousand-individual-works-1991.jpg',
          title: 'Over Ten Thousand Individual Works',
          artist: 'Allan McCollum',
          year: '1987 - 1991',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 9 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/cambridge-green-1968.jpg',
          title: 'Cambridge Green',
          artist: 'Mark Lancaster',
          year: '1968',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 9 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/new-frontiers-slogan-von-j-f-kennedy-1964.jpg',
          title: 'New Frontiers (Slogan von J.F. Kennedy)',
          artist: 'Samuel Buri',
          year: '1964',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 9 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1989(4).jpg',
          title: 'Untitled',
          artist: 'Mostafa Dashti',
          year: '1989',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 10 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/ang-magbabayo-pounding-rice-1979.jpg',
          title: 'Ang Magbabayo (Pounding Rice)',
          artist: 'Vicente Manansala',
          year: '1979',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 10 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/eclipse-1962.jpg',
          title: 'Eclipse',
          artist: 'Jeremy Moon',
          year: '1962',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/polyptych-m-1968.jpg',
          title: 'Polyptych M',
          artist: 'Alberto Biasi',
          year: '1968',
          rule: {
            "monday": [ 9, 15, 3, 10 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/stone-bird-1952.jpg',
          title: 'Stone Bird',
          artist: 'Endre Balint',
          year: '1952',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 10 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/black-flowers-september-26-1999-1999.jpg',
          title: 'Black Flowers, September 26, 1999',
          artist: 'Donald Sultan',
          year: '1999',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 10 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/still-life-autumn-fashion-1978.jpg',
          title: 'Still Life: Autumn Fashion',
          artist: 'Patrick Caulfield',
          year: '1978',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 10 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/number-20-1949.jpg',
          title: 'Number 20',
          artist: 'Bradley Walker Tomlin',
          year: '1949',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 11 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1947.jpg',
          title: 'Untitled',
          artist: 'Forrest Bess',
          year: '1947',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 11 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/460-hommage-au-tachisme-1961(1).jpg',
          title: '460 Hommage au Tachisme',
          artist: 'Friedensreich Hundertwasser',
          year: '1961',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/ideal-life-1950.jpg',
          title: 'Ideal Life',
          artist: 'Leonor Fini',
          year: '1950',
          rule: {
            "monday": [ 10, 16, 4, 11 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/piron-piron-1975.jpg',
          title: 'Piron Piron',
          artist: 'Sadamasa Motonaga',
          year: '1975',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 11 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/john-coltrane-1961.jpg',
          title: 'John Coltrane',
          artist: 'Gandy Brodie',
          year: '1961',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 11 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/east-wind-moon-wind-1959.jpg',
          title: 'East Wind / Moon Wind',
          artist: 'Tadashi Nakayama',
          year: '1959',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 11 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/zone.jpg',
          title: 'Zone',
          artist: 'Philip Guston',
          year: '1953 - 1954',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 12 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/freeway-exit-1995.jpg',
          title: 'Freeway (Exit)',
          artist: 'Howard Arkley',
          year: '1995',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 12 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1946.jpg',
          title: 'Untitled',
          artist: 'Mario Prassinos',
          year: '1946',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/f-los-ouvir-a-tua-corneta-negro-1974.jpg',
          title: 'Fá-los ouvir a tua corneta negro',
          artist: 'Sa Nogueira',
          year: '1974',
          rule: {
            "monday": [ 11, 17, 5, 12 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/bloodline-big-family-1995.jpg',
          title: 'Bloodline - Big Family',
          artist: 'Zhang Xiaogang',
          year: '1995',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 12 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/tang-2007.jpg',
          title: 'Tang',
          artist: 'Kenny Scharf',
          year: '2007',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 12 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/lippy-1968.jpg',
          title: 'Lippy',
          artist: 'Jim Nutt',
          year: '1968',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 12 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1968.jpg',
          title: 'Untitled',
          artist: 'Dan Christensen',
          year: '1968',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 13 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/still-life-with-bud-1992.jpg',
          title: 'Still Life with Bud',
          artist: 'Paul Wonner',
          year: '1992',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 13 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/women-and-dog-1964.jpg',
          title: 'Women and Dog',
          artist: 'Marisol Escobar',
          year: '1964',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/big-sur-and-branch-1974.jpg',
          title: 'Big Sur and Branch',
          artist: 'Eyvind Earle',
          year: '1974',
          rule: {
            "monday": [ 12, 18, 6, 13 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/wild-orange-story-1971.jpg',
          title: 'Wild Orange Story',
          artist: 'Johnny Warangkula Tjupurrula',
          year: '1971',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 13 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/green-fields-1994.jpg',
          title: 'Green Fields',
          artist: 'Eyvind Earle',
          year: '1994',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 13 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/custom-print-no-ii-1965.jpg',
          title: 'Custom Print No. II',
          artist: 'Peter Phillips',
          year: '1965',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 13 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/here-is-a-sign-1970.jpg',
          title: 'Here is a Sign',
          artist: 'Forrest Bess',
          year: '1970',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 14 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/neoconcret-ballet-ii-1959.jpg',
          title: 'Neoconcret Ballet #II',
          artist: 'Lygia Pape',
          year: '1959',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 14 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/blue-head-1961.jpg',
          title: 'Blue head',
          artist: 'Gerard Sekoto',
          year: '1961',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/think-tank-2003.jpg',
          title: 'Think Tank',
          artist: 'Banksy',
          year: '2003',
          rule: {
            "monday": [ 13, 19, 7, 14 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/fractal-flasher-1994.jpg',
          title: 'Fractal Flasher',
          artist: 'Nam June Paik',
          year: '1994',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 14 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/luna-de-silencio-1961.jpg',
          title: 'Luna de silencio',
          artist: 'Lilia Carrillo',
          year: '1961',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 14 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/bichos-1963(1).jpg',
          title: 'Bichos',
          artist: 'Ivan Serpa',
          year: '1963',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 14 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/delaumbre-bleue-1950.jpg',
          title: 'Delaumbre Bleue',
          artist: 'Olle Baertling',
          year: '1950',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 15 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/african-night-market-1965.jpg',
          title: 'African Night Market',
          artist: 'Walter Battiss',
          year: '1965',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 15 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/puissance-oc-anique-2004.jpg',
          title: 'Puissance océanique',
          artist: 'Chu Teh-Chun',
          year: '2004',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/leopard.jpg',
          title: 'Leopard',
          artist: 'Antonio Ligabue',
          year: '1955',
          rule: {
            "monday": [ 14, 20, 8, 15 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/dyptique-1987.jpg',
          title: 'Dyptique',
          artist: 'Luciano Bartolini',
          year: '1987',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 15 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-dressmaker-1982.jpg',
          title: 'The Dressmaker',
          artist: 'Conrad Marca-Relli',
          year: '1982',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 15 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/mlr-1992-1.jpg',
          title: 'MLR',
          artist: 'Isa Genzken',
          year: '1992',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 15 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/cosmic-donut-2008.jpg',
          title: 'Cosmic Donut',
          artist: 'Kenny Scharf',
          year: '2008',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 16 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/green-triptych-1963.jpg',
          title: 'Green Triptych',
          artist: 'Marjorie Strider',
          year: '1963',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 16 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/watching-the-sea-1989.jpg',
          title: 'Watching the Sea',
          artist: 'Yayoi Kusama',
          year: '1989',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-death-of-james-lee-byars-1994.jpg',
          title: 'The Death of James Lee Byars',
          artist: 'James Lee Byars',
          year: '1994',
          rule: {
            "monday": [ 15, 21, 9, 16 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/carnival-figures-1956.jpg',
          title: 'Carnival Figures',
          artist: 'Rene Portocarrero',
          year: '1956',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 16 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1975--.jpg',
          title: 'Untitled',
          artist: 'Terry Frost',
          year: '1975',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 16 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/cadavre-exquis-surrealist-group-collective-work-1948.jpg',
          title: 'Cadavre Exquis (Surrealist Group Collective Work)',
          artist: 'Marcelino Vespeira',
          year: '1948',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 16 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/blue-on-white-1961.jpg',
          title: 'Blue on White',
          artist: 'Ellsworth Kelly',
          year: '1961',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 17 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-olgas-for-ernest-giles-1985.jpg',
          title: 'The Olgas for Ernest Giles',
          artist: 'Brett Whiteley',
          year: '1985',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 17 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-trial-1947.jpg',
          title: 'The Trial',
          artist: 'Sidney Nolan',
          year: '1947',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-cardgame-1950.jpg',
          title: 'The cardgame',
          artist: 'Balthus',
          year: '1950',
          rule: {
            "monday": [ 16, 22, 10, 17 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/white-provincetown-1959.jpg',
          title: 'White Provincetown',
          artist: 'Edward Corbett',
          year: '1959',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 17 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/la-strada-1956(1).jpg',
          title: 'La Strada',
          artist: 'Renato Guttuso',
          year: '1956',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 17 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/apple-half-peeled-on-a-black-plate-1976.jpg',
          title: 'Apple, Half-Peeled on a Black Plate',
          artist: 'Avigdor Arikha',
          year: '1976',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 17 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/brick-lane-remix-i-2003.jpg',
          title: 'Brick Lane Remix I',
          artist: 'David Batchelor',
          year: '2003',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 18 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/cateyeguy-2008.jpg',
          title: 'Cateyeguy',
          artist: 'Kenny Scharf',
          year: '2008',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 18 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/yellow-painting-1969.jpg',
          title: 'Yellow Painting',
          artist: 'Peter Joseph',
          year: '1969',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/delta-theta-1961.jpg',
          title: 'Delta Theta',
          artist: 'Morris Louis',
          year: '1961',
          rule: {
            "monday": [ 17, 23, 11, 18 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-prodigal-son-1973.jpg',
          title: 'The Prodigal Son',
          artist: 'Carlos Merida',
          year: '1973',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 18 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/joy-pop-1998.jpg',
          title: 'Joy Pop',
          artist: 'Peter Halley',
          year: '1998',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 18 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/goodbye-have-a-nice-journey-1973.jpg',
          title: 'Goodbye, Have a Nice Journey!!',
          artist: 'Jim Nutt',
          year: '1973',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 18 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/mermaid-in-lotus-pond-iii-2008.jpg',
          title: 'Mermaid in Lotus Pond III',
          artist: 'Jahar Dasgupta',
          year: '2008',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 19 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/mulata-e-p-ssaros-1967.jpg',
          title: 'Mulata e Pássaros',
          artist: 'Emiliano Di Cavalcanti',
          year: '1967',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 19 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/daisy-lolita-pog-1994.jpg',
          title: 'Daisy Lolita Pog',
          artist: 'Ashley Bickerton',
          year: '1994',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/havskrumelur-2005.jpg',
          title: 'Havskrumelur',
          artist: 'Rune Jansson',
          year: '2005',
          rule: {
            "monday": [ 18, 24, 12, 19 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/chi-chi-meets-the-death-of-painting-1985.jpg',
          title: 'Chi-Chi Meets the Death of Painting',
          artist: 'Philip Taaffe',
          year: '1985',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 19 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/stardust-1993.jpg',
          title: 'Stardust',
          artist: 'Peter Alexander',
          year: '1993',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 19 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/square-motif-blue-and-gold-the-eclipse-1950.jpg',
          title: 'Square Motif, Blue and Gold: The Eclipse',
          artist: 'Victor Pasmore',
          year: '1950',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 19 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/over-and-above-13-1964.jpg',
          title: 'Over and Above #13',
          artist: 'Clarence Holbrook Carter',
          year: '1964',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 20 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/happy-family-1982.jpg',
          title: 'Happy family',
          artist: 'Roger Raveel',
          year: '1982',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 20 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/abstraktes-bild-abstract-picture-1994.jpg',
          title: 'Abstract Picture',
          artist: 'Gerhard Richter',
          year: '1994',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1973.jpg',
          title: 'Untitled',
          artist: 'Verena Loewensberg',
          year: '1973',
          rule: {
            "monday": [ 19, 25, 13, 20 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/shadowman-34-e-12th-street-1982.jpg',
          title: 'Shadowman (34 E 12th Street)',
          artist: 'Richard Hambleton',
          year: '1982',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 20 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/dancers-at-the-bar.jpg',
          title: 'Dancers at the Bar',
          artist: 'Fernando Botero',
          year: '2001',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 20 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/composition-ii-1955.jpg',
          title: 'Composition II',
          artist: 'Huguette Arthur Bertrand',
          year: '1955',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 20 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/army-of-mushrooms-2003.jpg',
          title: 'Army of Mushrooms',
          artist: 'Takashi Murakami',
          year: '2003',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 21 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/magical-space-forms-1948.jpg',
          title: 'Magical Space Forms',
          artist: 'Lorser Feitelson',
          year: '1948',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 21 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/hellblau-im-licht-1965.jpg',
          title: 'Hellblau im Licht',
          artist: 'Ernst Wilhelm Nay',
          year: '1965',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/paisagem-com-a-filha-da-francesa-nesse-dia-1966.jpg',
          title: 'paisagem com a filha da francesa, nesse dia',
          artist: 'Antonio Areal',
          year: '1966',
          rule: {
            "monday": [ 20, 26, 14, 21 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/self-portrait-in-studio-1976.jpg',
          title: 'Self Portrait in Studio',
          artist: 'Brett Whiteley',
          year: '1976',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 21 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/corncob-horse-in-outer-space-1978.jpg',
          title: 'Corncob Horse in Outer Space',
          artist: 'Maria Primachenko',
          year: '1978',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 21 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/writing-2005.jpg',
          title: 'Writing',
          artist: 'Zhang Xiaogang',
          year: '2005',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 21 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/at-the-clinic-1979.jpg',
          title: 'At the clinic',
          artist: 'George Pemba',
          year: '1979',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 22 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/studio-1958.jpg',
          title: 'Studio',
          artist: 'Craig Kauffman',
          year: '1958',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 22 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/andy-warhol-1970.jpg',
          title: 'Andy Warhol',
          artist: 'Alice Neel',
          year: '1970',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [24, 30, 18, 26  ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/jardin-fleuri-2000.jpg',
          title: 'Jardin fleuri',
          artist: 'Aurel Cojan',
          year: '2000',
          rule: {
            "monday": [ 21, 27, 15, 22 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/9-1963.jpg',
          title: '#9',
          artist: 'Karl Benjamin',
          year: '1963',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 22 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/sem-t-tulo-1969.jpg',
          title: 'Sem título',
          artist: 'Menez',
          year: '1969',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 22 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1960.jpg',
          title: 'Untitled',
          artist: 'Enrique Grau',
          year: '1960',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 22 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1974.jpg',
          title: 'Untitled',
          artist: 'Moshe Kupferman',
          year: '1974',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 22 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/self-portrait-in-fur-hat-1972.jpg',
          title: 'Self-Portrait in Fur Hat',
          artist: 'Joan Brown',
          year: '1972',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 22 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/frog-test-1983.jpg',
          title: 'Frog Test',
          artist: 'Dieter Asmus',
          year: '1983',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/dama-en-la-playa-1953.jpg',
          title: 'Dama en la playa',
          artist: 'Jose Manuel Capuletti',
          year: '1953',
          rule: {
            "monday": [ 21, 27, 15, 22 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/elements-for-meatball-curtain-1970.jpg',
          title: 'Elements for Meatball Curtain',
          artist: 'Oyvind Fahlstrom',
          year: '1970',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 22 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/cavaliere-che-cade-1982.jpg',
          title: 'Cavaliere che cade',
          artist: 'Gustavo Foppiani',
          year: '1982',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 22 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/anti-corpi-cilindrici-2006.jpg',
          title: 'Anti-corpi cilindrici',
          artist: 'Tomas Maldonado',
          year: '2006',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 22 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/yellow-mandala-1970.jpg',
          title: 'Yellow Mandala',
          artist: 'Clarence Holbrook Carter',
          year: '1970',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 23 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/with-love-to-jean-paul-belmondo-1962.jpg',
          title: 'With Love to Jean-Paul Belmondo',
          artist: 'Pauline Boty',
          year: '1962',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 23 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/wave-93-1-1993.jpg',
          title: 'Wave 93-1',
          artist: 'Matsutani',
          year: '1993',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled1963.jpg',
          title: 'Untitled',
          artist: 'Adolf Fleischmann',
          year: '1963',
          rule: {
            "monday": [ 22, 28, 16, 23 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/double-captain-shit-and-the-legend-of-the-black-stars-1997.jpg',
          title: 'Double Captain Shit and the Legend of the Black Stars',
          artist: 'Chris Ofili',
          year: '1997',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 23 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/inner-structure-no-5-1955.jpg',
          title: 'Inner Structure no. 5',
          artist: 'Kazuo Nakamura',
          year: '1955',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 23 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1980.jpg',
          title: 'Untitled',
          artist: 'Giuseppe Santomaso',
          year: '1980',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 23 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/lebanon-2007.jpg',
          title: 'Lebanon',
          artist: 'John Hoyland',
          year: '2007',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 24 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/carne-vegetal-1948.jpg',
          title: 'Carne vegetal',
          artist: 'Marcelino Vespeira',
          year: '1948',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 24 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/summer-moon-2005.jpg',
          title: 'Summer Moon',
          artist: 'Pat Steir',
          year: '2005',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/fairfield-porter-1-1954.jpg',
          title: 'Fairfield Porter #1',
          artist: 'Elaine de Kooning',
          year: '1954',
          rule: {
            "monday": [ 23, 29, 17, 24 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-fish-shop-1955.jpg',
          title: 'The fish shop',
          artist: 'John Brack',
          year: '1955',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 24 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-eclipse-1952.jpg',
          title: 'The Eclipse',
          artist: 'Carlos Orozco Romero',
          year: '1952',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 24 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/dialogue-goggles-1968.jpg',
          title: 'Dialogue goggles',
          artist: 'Lygia Clark',
          year: '1968',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 24 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/minuet-1966.jpg',
          title: 'Minuet',
          artist: 'Tess Jaray',
          year: '1966',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 25 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-rain-of-light-1994.jpg',
          title: 'The Rain of Light',
          artist: 'Silviu Oravitzan',
          year: '1994',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 25 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/one-way-1984.jpg',
          title: 'One Way',
          artist: 'Robert Cottingham',
          year: '1984',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-may-20-1950.jpg',
          title: 'Untitled (May 20)',
          artist: 'Myron Stout',
          year: '1950',
          rule: {
            "monday": [ 24, 30, 18, 25 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/alta-pink-corner-projection-1968.jpg',
          title: 'Alta Pink (Corner Projection)',
          artist: 'James Turrell',
          year: '1968',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 25 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-apotheosis-of-ramon-hoyos.jpg',
          title: 'The Apotheosis of Ramon Hoyos',
          artist: 'Fernando Botero',
          year: '1959',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 25 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/peinture-n-10-1965.jpg',
          title: 'Peinture n°10',
          artist: 'Michel Parmentier',
          year: '1965',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 25 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/light-tree-1983.jpg',
          title: 'Light Tree',
          artist: 'Nanda Vigo',
          year: '1983',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 26 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/it-s-not-a-race-2008.jpg',
          title: 'It\'s Not A Race',
          artist: 'Banksy',
          year: '2008',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 26 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/summon-up-11-1958.jpg',
          title: 'Summon up, #11',
          artist: 'Frederick Hammersley',
          year: '1958',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1992.jpg',
          title: 'Untitled',
          artist: 'Hassel Smith',
          year: '1992',
          rule: {
            "monday": [ 25, 1, 19, 26 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/ghost-and-friends-1999.jpg',
          title: 'Ghost and Friends',
          artist: 'Omer Uluc',
          year: '1999',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 26 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/paul-mccartney-and-flowers-1967.jpg',
          title: 'Paul McCartney and Flowers',
          artist: 'John Bratby',
          year: '1967',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 26 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/remember-at-doftana-1972.jpg',
          title: 'Remember at Doftana',
          artist: 'Florin Maxa',
          year: '1972',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 26 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/three-sorcerers-1977.jpg',
          title: 'Three Sorcerers',
          artist: 'Rene Portocarrero',
          year: '1977',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 27 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-witch-doctor-1963.jpg',
          title: 'The Witch Doctor',
          artist: 'John Ferren',
          year: '1963',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 27 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/michelangelo-s-david-1987.jpg',
          title: 'Michelangelo\'s \'David\'',
          artist: 'Eduardo Paolozzi',
          year: '1987',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/ecstasy-b-1953.jpg',
          title: 'Ecstasy (B)',
          artist: 'Kiyoshi Saito',
          year: '1953',
          rule: {
            "monday": [ 26, 2, 20, 27 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/glass-gold-fish-and-bird-1970.jpg',
          title: 'Glass, Gold Fish and Bird',
          artist: 'Ding Yanyong',
          year: '1970',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 27 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [  29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/adult-female-sexual-organs-2005.jpg',
          title: 'Adult Female Sexual Organs',
          artist: 'Wangechi Mutu',
          year: '2005',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 27 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/return-of-the-prodigal-1997.jpg',
          title: 'Return of the Prodigal',
          artist: 'Godfrey Blow',
          year: '1997',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 27 ],
            "friday":  [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/f-r-joseph-beuys-1987.jpg',
          title: 'Für Joseph Beuys',
          artist: 'Juliao Sarmento',
          year: '1987',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday":  [ 27, 3, 21, 28 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/mona-lisa-at-the-age-of-twelve-years.jpg',
          title: 'Mona Lisa at the Age of Twelve Years',
          artist: 'Fernando Botero',
          year: '1959',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday":  [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 28 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/desta-vez-eu-consigo-fugir-1967.jpg',
          title: 'Desta vez eu consigo fugir',
          artist: 'Claudio Tozzi',
          year: '1967',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday":  [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 3, 21, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-satyr-1958.jpg',
          title: 'The Satyr',
          artist: 'Rafael Zabaleta',
          year: '1958',
          rule: {
            "monday": [ 27, 3, 21, 28 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday":  [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/hot-rod-race-1976.jpg',
          title: 'Hot Rod Race',
          artist: 'Robert Williams',
          year: '1976',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 28 ],
            "wednesday":  [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/john-f-kennedy-1963.jpg',
          title: 'John F. Kennedy',
          artist: 'Elaine de Kooning',
          year: '1963',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday":  [ 27, 3, 21, 28 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/maculae-2009.jpg',
          title: 'Maculae',
          artist: 'Marjan Eggermont',
          year: '2009',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday":  [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 28 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/secret-1966.jpg',
          title: 'Secret',
          artist: 'Rodolfo Arico',
          year: '1966',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday":  [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 29 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/europa-1999.jpg',
          title: 'Europa',
          artist: 'Thomas Hirschhorn',
          year: '1999',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday":  [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 29 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/two-squares-1967.jpg',
          title: 'Two Squares',
          artist: 'Almir Mavignier',
          year: '1967',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday":  [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/green-frost-1957.jpg',
          title: 'Green Frost',
          artist: 'Norman Bluhm',
          year: '1957',
          rule: {
            "monday": [ 28, 4, 22, 29 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/tennis-1983.jpg',
          title: 'Tennis',
          artist: 'Howard Arkley',
          year: '1983',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 29 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/tux-2003.jpg',
          title: 'Tux',
          artist: 'Ralph Goings',
          year: '2003',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 29 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/little-joe-picking-his-nose-1975.jpg',
          title: 'Little Joe Picking His Nose',
          artist: 'Steve Wheeler',
          year: '1975',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 29 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/portrait-of-wendy-1984.jpg',
          title: 'Portrait of Wendy',
          artist: 'Brett Whiteley',
          year: '1984',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 30 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/politipo-contrazione-espansione-1970.jpg',
          title: 'Politipo Contrazione-Espansione',
          artist: 'Alberto Biasi',
          year: '1970',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 30 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/dandelions-1985.jpg',
          title: 'Dandelions',
          artist: 'Yayoi Kusama',
          year: '1985',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/chrysanthum-1988.jpg',
          title: 'Chrysanthum',
          artist: 'Lin Fengmian',
          year: '1988',
          rule: {
            "monday": [ 29, 5, 23, 30 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/mother-of-pearl-spirits-2002.jpg',
          title: 'Mother-of-pearl Spirits',
          artist: 'Rebecca Horn',
          year: '2002',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 30 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-chickens-are-happy-sun-1949.jpg',
          title: 'The chickens are happy sun',
          artist: 'Qi Baishi',
          year: '1949',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 30 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/le-chemin-de-croix-1973.jpg',
          title: 'Le Chemin de Croix',
          artist: 'Dado',
          year: '1973',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 30 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/passage-de-l-op-ra-1971.jpg',
          title: 'Passage de l\'Opéra',
          artist: 'Conroy Maddox',
          year: '1970 - 1971',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 5 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 1 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/southern-justice-murder-in-mississippi-1965.jpg',
          title: 'Southern Justice (Murder in Mississippi)',
          artist: 'Norman Rockwell',
          year: '1965',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 5 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 1 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/owl-1977.jpg',
          title: 'Owl',
          artist: 'Huang Yongyu',
          year: '1977',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 5 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/arbres-1984.jpg',
          title: 'Arbres',
          artist: 'Mario Prassinos',
          year: '1984',
          rule: {
            "monday": [ 30, 6, 24, 1 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 5 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/komposition-1984.jpg',
          title: 'Komposition',
          artist: 'Martin Disler',
          year: '1984',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 1 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/zimmer-2004.jpg',
          title: 'Zimmer',
          artist: 'Matthias Weischer',
          year: '2004',
          rule: {
            "monday": [ 2, 8, 26, 5 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 1 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/well-done-1987.jpg',
          title: 'Well Done',
          artist: 'Bill Woodrow',
          year: '1987',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 5 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 1 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/five-pears-1976.jpg',
          title: 'Five Pears',
          artist: 'William Scott',
          year: '1976',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 6 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 2 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/self-portrait-1994.jpg',
          title: 'Self Portrait',
          artist: 'David Michael Hinnebusch',
          year: '1994',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 6 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 2 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/metaesquema-dois-brancos-1958.jpg',
          title: 'Metaesquema (Dois brancos)',
          artist: 'Helio Oiticica',
          year: '1958',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 6 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/le-poisson-choa-2000.jpg',
          title: 'Le poisson choa',
          artist: 'Nicolae Maniu',
          year: '2000',
          rule: {
            "monday": [ 1, 7, 25, 2 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 6 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/invention-of-a-dream-1960.jpg',
          title: 'Invention of a Dream',
          artist: 'Richard Oelze',
          year: '1960',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 2 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/she-dragon-1964.jpg',
          title: 'She-Dragon',
          artist: 'Konrad Klapheck',
          year: '1964',
          rule: {
            "monday": [ 3, 9, 27, 6 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 2 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/riviera-winter-colour-symphony-1955.jpg',
          title: 'Riviera Winter Colour Symphony',
          artist: 'Jock Macdonald',
          year: '1955',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 6 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 2 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-blue-figure-and-tiger-1964.jpg',
          title: 'Untitled (Blue Figure and Tiger)',
          artist: 'M.F. Husain',
          year: '1964',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 7 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 3 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1974--.jpg',
          title: 'Untitled',
          artist: 'Kenneth Price',
          year: '1974',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 7 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 3 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/geometrische-komposition-1982.jpg',
          title: 'Geometrische Komposition',
          artist: 'Verena Loewensberg',
          year: '1982',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 7 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/echoed-forms-1947.jpg',
          title: 'Echoed Forms',
          artist: 'Boris Margo',
          year: '1947',
          rule: {
            "monday": [ 2, 8, 26, 3 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 7 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/recorte-branco-1968.jpg',
          title: 'Recorte branco',
          artist: 'Jose Escada',
          year: '1968',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 3 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/it-hurts-to-wait-with-love-if-love-is-somewhere-else(1).jpg',
          title: '630A It Hurts to Wait With Love if Love Is Somewhere Else',
          artist: 'Friedensreich Hundertwasser',
          year: '1971',
          rule: {
            "monday": [ 4, 10, 28, 7 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 3 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/baj-chez-picasso-2-1969.jpg',
          title: 'Baj Chez Picasso 2',
          artist: 'Enrico Baj',
          year: '1969',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 7 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 3 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-day-after-yesterday-1973.jpg',
          title: 'The Day After Yesterday',
          artist: 'Desmond Morris',
          year: '1973',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 8 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 4 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/stone-age-1968.jpg',
          title: 'Stone Age',
          artist: 'Samuel Bak',
          year: '1968',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 8 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 4 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/dramatic-fire-1989(1).jpg',
          title: 'Dramatic Fire',
          artist: 'John Cage',
          year: '1989',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 8 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/by-the-sea-1955.jpg',
          title: 'By the Sea',
          artist: 'Peter Busa',
          year: '1955',
          rule: {
            "monday": [ 3, 9, 27, 4 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 8 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/in-the-art-galllery-cosmopolitan-illustration-february-1950-1950.jpg',
          title: 'In the Art Galllery, Cosmopolitan illustration , February 1950',
          artist: 'Robert G. Harris',
          year: '1950',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 4 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/totem-materia-r-1980.jpg',
          title: 'Totem Materia-R',
          artist: 'Betty Parsons',
          year: '1980',
          rule: {
            "monday": [ 5, 11, 29, 8 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 4 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/maryline-parler-de-soie-1975.jpg',
          title: 'Maryline, Parler de soie',
          artist: 'Marcel Marien',
          year: '1975',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 8 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 4 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/vivisection-1988.jpg',
          title: 'Vivisection',
          artist: '3D',
          year: '1988',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 9 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 5 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/cosmogarden-2011.jpg',
          title: 'Cosmogarden',
          artist: 'Aki Kuroda',
          year: '2011',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 9 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 5 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/dancing-figure-kamuro-1960.jpg',
          title: 'Dancing Figure (Kamuro)',
          artist: 'Kaoru Kawano',
          year: '1960',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 9 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/priest-and-priestess-in-festivity-mood-of-ibeji-ceremony-2007.jpg',
          title: 'Priest and Priestess in Festivity Mood of Ibeji Ceremony',
          artist: 'Twins Seven Seven',
          year: '2007',
          rule: {
            "monday": [ 4, 10, 28, 5 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 9 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/le-kiosque-1973.jpg',
          title: 'Le Kiosque',
          artist: 'Gerard Fromanger',
          year: '1973',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 5 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-kora-quartet-1995.jpg',
          title: 'The Kora Quartet',
          artist: 'Nzante Spee',
          year: '1995',
          rule: {
            "monday": [ 6, 12, 30, 9 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 5 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/quintais-de-lisboa-1956.jpg',
          title: 'Quintais de Lisboa',
          artist: '1956',
          year: '',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 9 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 5 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/sunra-2006.jpg',
          title: 'SunRa',
          artist: 'Stanley Whitney',
          year: '2006',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 10 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 4, 11, 29, 6 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/crystals-2000.jpg',
          title: 'Crystals',
          artist: 'George Saru',
          year: '2000',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 10 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 4, 11, 29, 6 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/self-portrait-1977.jpg',
          title: 'Self-Portrait',
          artist: 'Joan Brown',
          year: '1977',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 10 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 4, 11, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/old-block-of-houses-1958.jpg',
          title: 'Old Block of Houses',
          artist: 'Carlos Botelho',
          year: '1958',
          rule: {
            "monday": [ 4, 11, 29, 6 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 10 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/red-spot-1954.jpg',
          title: 'Red Spot',
          artist: 'John Ferren',
          year: '1954',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 4, 11, 29, 6 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/gadal-10-11-86-1986.jpg',
          title: 'Gadal 10.11.86',
          artist: 'John Hoyland',
          year: '1986',
          rule: {
            "monday": [ 7, 13, 1, 10 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 4, 11, 29, 6 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/not-cia-violentada-1948.jpg',
          title: 'Carne vegetal',
          artist: 'Marcelino Vespeira',
          year: '1948',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 10 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 4, 11, 29, 6 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/portrait-of-woman-in-seascape.jpg',
          title: 'Portrait of Woman in Seascape',
          artist: 'Jose Manuel Capuletti',
          year: '1958',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 11 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 5, 12, 30, 7 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/surrealist-composition-1965.jpg',
          title: 'Surrealist Composition',
          artist: 'Friedrich Schroder-Sonnenstern',
          year: '1965',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 11 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 5, 12, 30, 7 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/map-of-labyrinth-1955.jpg',
          title: 'Map Of Labyrinth',
          artist: 'Kansuke Yamamoto',
          year: '1955',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 11 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 5, 12, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/622-mourning-schiele-1965(1).jpg',
          title: '622 Mourning Schiele',
          artist: 'Friedensreich Hundertwasser',
          year: '1965',
          rule: {
            "monday": [ 5, 12, 30, 7 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 11 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-overpass-1984.jpg',
          title: 'The overpass',
          artist: 'Jeffrey Smart',
          year: '1984',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 5, 12, 30, 7 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/andy-mouse-1986.jpg',
          title: 'Andy Mouse',
          artist: 'Keith Haring',
          year: '1986',
          rule: {
            "monday": [ 8, 14, 2, 11 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 5, 12, 30, 7 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/two-smiles-1947.jpg',
          title: 'Two Smiles',
          artist: 'Steve Wheeler',
          year: '1947',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 11 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 5, 12, 30, 7 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/evening-lights-1959.jpg',
          title: 'Evening Lights',
          artist: 'Piroska Szanto',
          year: '1959',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 12 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 6, 13, 1, 8 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/western-christian-civilization-1965.jpg',
          title: 'Western Christian Civilization',
          artist: 'Leon Ferrari',
          year: '1965',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 12 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 6, 13, 1, 8 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/homan-ji-iii-1995.jpg',
          title: 'Homan-Ji III',
          artist: 'Jennifer Bartlett',
          year: '1995',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 12 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 6, 13, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/one-thing-1965-viet-nam-1965.jpg',
          title: 'One Thing, 1965, Viet-Nam',
          artist: 'On Kawara',
          year: '1965',
          rule: {
            "monday": [ 6, 13, 1, 8 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 12 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/death-2005.jpg',
          title: 'Death',
          artist: 'Banksy',
          year: '2005',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 6, 13, 1, 8 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/boats-1979.jpg',
          title: 'Boats',
          artist: 'Lin Fengmian',
          year: '1979',
          rule: {
            "monday": [ 9, 15, 3, 12 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 6, 13, 1, 8 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-2005.jpg',
          title: 'Untitled',
          artist: 'Wang Guangyi',
          year: '2005',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 12 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 6, 13, 1, 8 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/parmi-les-peintres-1975.jpg',
          title: 'Parmi les peintres',
          artist: 'Eduardo Arroyo',
          year: '1975',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 13 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 7, 14, 2, 9 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/high-water-mark.jpg',
          title: 'High Water Mark',
          artist: 'Neil Welliver',
          year: '1984',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 13 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 7, 14, 2, 9 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-diagnostic-of-view-v-1992.jpg',
          title: 'The diagnostic of view V',
          artist: 'Luc Tuymans',
          year: '1992',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 13 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 7, 14, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/o41-69-1969.jpg',
          title: 'O41 - 69',
          artist: 'Fernando Lanhas',
          year: '1969',
          rule: {
            "monday": [ 7, 14, 2, 9 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 13 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/cafeti-re-1949.jpg',
          title: 'Cafetière',
          artist: 'Mario Prassinos',
          year: '1949',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 7, 14, 2, 9 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/la-pres-1950.jpg',
          title: 'La Presó',
          artist: 'Joan Ponc',
          year: '1950',
          rule: {
            "monday": [ 10, 16, 4, 13 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 7, 14, 2, 9 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/sem-t-tulo-1954.jpg',
          title: 'Sem título',
          artist: 'Menez',
          year: '1954',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 13 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 7, 14, 2, 9 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/opera-figures-farewell-my-concubine-1975.jpg',
          title: 'Opera Figures: Farewell my Concubine',
          artist: 'Ding Yanyong',
          year: '1975',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 14 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 8, 15, 3, 10 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/water-ceremony-1972.jpg',
          title: 'Water Ceremony',
          artist: 'Johnny Warangkula Tjupurrula',
          year: '1972',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 14 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 8, 15, 3, 10 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/composizione-1955.jpg',
          title: 'Composizione',
          artist: 'Antonio Sanfilippo',
          year: '1955',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 14 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 8, 15, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/drawing-for-ian-wedde-pathway-to-the-sea-1975.jpg',
          title: 'Drawing for Ian Wedde - Pathway to the Sea',
          artist: 'Ralph Hotere',
          year: '1975',
          rule: {
            "monday": [ 8, 15, 3, 10 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 14 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/still-life-with-dagger-1963.jpg',
          title: 'Still Life with Dagger',
          artist: 'Patrick Caulfield',
          year: '1963',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 8, 15, 3, 10 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1955.jpg',
          title: 'Untitled',
          artist: 'Lolo Soldevilla',
          year: '1955',
          rule: {
            "monday": [ 11, 17, 5, 14 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 8, 15, 3, 10 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/ocean-park-no-30.jpg',
          title: 'Ocean Park No. 30',
          artist: 'Richard Diebenkorn',
          year: '1970',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 14 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 8, 15, 3, 10 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/composi-o-1964(1).jpg',
          title: 'Composição',
          artist: 'Lothar Charoux',
          year: '1964',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 15 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 9, 16, 4, 11 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/endukugga-1995.jpg',
          title: 'Endukugga',
          artist: 'Enrico Baj',
          year: '1995',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 15 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 9, 16, 4, 11 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/cosmic-attraction-2011.jpg',
          title: 'Cosmic Attraction',
          artist: 'Paul du Toit',
          year: '2011',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 15 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 9, 16, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 311,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/el-laberinto-de-minos-vitral-2014.jpg',
          title: 'The labyrinth of Minos. Stained glass window',
          artist: 'Chicote CFC',
          year: '2014',
          rule: {
            "monday": [ 9, 16, 4, 11 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 15 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 312,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/what-should-i-do-1988.jpg',
          title: 'What Should I Do?',
          artist: 'Allen Ruppersberg',
          year: '1988',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 9, 16, 4, 11 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 313,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/velasquez-mon-p-re-1964.jpg',
          title: 'Velazquez, mon père',
          artist: 'Eduardo Arroyo',
          year: '1964',
          rule: {
            "monday": [ 12, 18, 6, 15 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 9, 16, 4, 11 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 314,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/snow-white-swallows-the-poisoned-apple-1995.jpg',
          title: 'Snow White Swallows the Poisoned Apple',
          artist: 'Paula Rego',
          year: '1995',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 15 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 9, 16, 4, 11 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 315,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/phil-1976.jpg',
          title: 'Phil',
          artist: 'Chuck Close',
          year: '1976',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 16 ],
            "thursday": [ 2, 18, 6, 14 ],
            "friday": [ 10, 17, 5, 12 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 316,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/head-1960.jpg',
          title: 'Head',
          artist: 'David Park',
          year: '1960',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 16 ],
            "friday": [ 2, 18, 6, 14 ],
            "saturday": [ 10, 17, 5, 12 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 317,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/staccato-1965.jpg',
          title: 'Staccato',
          artist: 'Cesar Paternosto',
          year: '1965',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 16 ],
            "saturday": [ 2, 18, 6, 14 ],
            "sunday": [ 10, 17, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 318,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/hypergraphie-1971.jpg',
          title: 'Hypergraphie',
          artist: 'Isidore Isou',
          year: '1971',
          rule: {
            "monday": [ 10, 17, 5, 12 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 16 ],
            "sunday": [ 2, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 319,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/amazon-woman-of-the-mountain-1961.jpg',
          title: 'Amazon Woman of the mountain',
          artist: 'Johannes Sveinsson Kjarval',
          year: '1961',
          rule: {
            "monday": [ 2, 18, 6, 14 ],
            "tuesday": [ 10, 17, 5, 12 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 320,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/yellow-sky-1986.jpg',
          title: 'Yellow Sky',
          artist: 'Martha Diamond',
          year: '1986',
          rule: {
            "monday": [ 13, 19, 7, 16 ],
            "tuesday": [ 2, 18, 6, 14 ],
            "wednesday": [ 10, 17, 5, 12 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 321,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/umea-sweden-1979.jpg',
          title: 'Umea, Sweden',
          artist: 'Terry Frost',
          year: '1979',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 16 ],
            "wednesday": [ 2, 18, 6, 14 ],
            "thursday": [ 10, 17, 5, 12 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 322,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-rolling-general-1971.jpg',
          title: 'The Rolling General',
          artist: 'Enrico Baj',
          year: '1971',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 17 ],
            "thursday": [ 3, 19, 7, 15 ],
            "friday": [ 11, 18, 6, 13 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 323,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/my-mona-lisa-1972.jpg',
          title: 'My Mona Lisa',
          artist: 'Ivan Generalic',
          year: '1972',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 17 ],
            "friday": [ 3, 19, 7, 15 ],
            "saturday": [ 11, 18, 6, 13 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 324,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/a-kiss-from-johnny-mccall-s-magazine-illustration-1952.jpg',
          title: 'A Kiss From Johnny, McCall’s Magazine illustration',
          artist: 'Robert G. Harris',
          year: '1952',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 17 ],
            "saturday": [ 3, 19, 7, 15 ],
            "sunday": [ 11, 18, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 325,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/keep-it-spotless-defaced-hirst-2007.jpg',
          title: 'Keep It Spotless (Defaced Hirst)',
          artist: 'Banksy',
          year: '2007',
          rule: {
            "monday": [ 11, 18, 6, 13 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 17 ],
            "sunday": [ 3, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 326,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-gift-1993.jpg',
          title: 'The Gift',
          artist: 'Harmony Hammond',
          year: '1993',
          rule: {
            "monday": [ 3, 19, 7, 15 ],
            "tuesday": [ 11, 18, 6, 13 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 327,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/primavera-1997.jpg',
          title: 'Primavera',
          artist: 'Esteban Vicente',
          year: '1997',
          rule: {
            "monday": [ 14, 20, 8, 17 ],
            "tuesday": [ 3, 19, 7, 15 ],
            "wednesday": [ 11, 18, 6, 13 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 328,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/i-suppose-it-is-2001.jpg',
          title: 'I Suppose It Is',
          artist: 'Tess Jaray',
          year: '2001',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 17 ],
            "wednesday": [ 3, 19, 7, 15 ],
            "thursday": [ 11, 18, 6, 13 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 329,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/telefoni-l-incomunicabilit-1980.jpg',
          title: 'Telefoni. L\'incomunicabilità',
          artist: 'Renato Guttuso',
          year: '1980',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 5, 21, 9, 18 ],
            "thursday": [ 4, 20, 8, 16 ],
            "friday": [ 12, 19, 7, 14 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 330,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/deux-nuages-1967.jpg',
          title: 'Deux Nuages',
          artist: 'Rene Bertholo',
          year: '1967',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 5, 21, 9, 18 ],
            "friday": [ 4, 20, 8, 16 ],
            "saturday": [ 12, 19, 7, 14 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 331,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/lost-2001.jpg',
          title: 'Lost',
          artist: 'Tetsuya Ishida',
          year: '2001',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 5, 21, 9, 18 ],
            "saturday": [ 4, 20, 8, 16 ],
            "sunday": [ 12, 19, 7, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 332,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/portrait-of-hassel-smith-1951.jpg',
          title: 'Portrait of Hassel Smith',
          artist: 'David Park',
          year: '1951',
          rule: {
            "monday": [ 12, 19, 7, 14 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 5, 21, 9, 18 ],
            "sunday": [ 4, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 333,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/never-before-2001.jpg',
          title: 'Never Before',
          artist: 'Basil Beattie',
          year: '2001',
          rule: {
            "monday": [ 4, 20, 8, 16 ],
            "tuesday": [ 12, 19, 7, 14 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 5, 21, 9, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 334,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-crush-2006.jpg',
          title: 'The Crush',
          artist: 'Luke Chueh',
          year: '2006',
          rule: {
            "monday": [ 5, 21, 9, 18 ],
            "tuesday": [ 4, 20, 8, 16 ],
            "wednesday": [ 12, 19, 7, 14 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 335,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/cool-grays-11-6-2011.jpg',
          title: 'Cool Grays 11-6',
          artist: 'Gregg Renfrow',
          year: '2011',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 5, 21, 9, 18 ],
            "wednesday": [ 4, 20, 8, 16 ],
            "thursday": [ 12, 19, 7, 14 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 336,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/lilith-1994.jpg',
          title: 'Lilith',
          artist: 'Kiki Smith',
          year: '1994',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 6, 22, 10, 19 ],
            "thursday": [ 5, 12, 9, 17 ],
            "friday": [ 13, 20, 8, 15 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 337,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/genii-loci-ii-1970.jpg',
          title: 'Genii Loci II',
          artist: 'Nikos Hadjikyriakos-Ghikas',
          year: '1970',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 6, 22, 10, 19 ],
            "friday": [ 5, 12, 9, 17 ],
            "saturday": [ 13, 20, 8, 15 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 338,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/heart-2009.jpg',
          title: 'Heart',
          artist: 'Peter Max',
          year: '2009',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 6, 22, 10, 19 ],
            "saturday": [ 5, 12, 9, 17 ],
            "sunday": [ 13, 20, 8, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 339,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/blossoms-1977.jpg',
          title: 'Blossoms',
          artist: 'Huang Yongyu',
          year: '1977',
          rule: {
            "monday": [ 13, 20, 8, 15 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 6, 22, 10, 19 ],
            "sunday": [ 5, 12, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 340,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/structures-1956.jpg',
          title: 'Structures',
          artist: 'Kazuo Nakamura',
          year: '1956',
          rule: {
            "monday": [ 5, 12, 9, 17 ],
            "tuesday": [ 13, 20, 8, 15 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 6, 22, 10, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 341,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/night-2011.jpg',
          title: 'Night',
          artist: 'Aki Kuroda',
          year: '2011',
          rule: {
            "monday": [ 6, 22, 10, 19 ],
            "tuesday": [ 5, 12, 9, 17 ],
            "wednesday": [ 13, 20, 8, 15 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 342,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/self-portrait-with-cloud-cigarette-1964.jpg',
          title: 'Self Portrait with Cloud & Cigarette',
          artist: 'Joan Brown',
          year: '1964',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 6, 22, 10, 19 ],
            "wednesday": [ 5, 12, 9, 17 ],
            "thursday": [ 13, 20, 8, 15 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 343,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/repose-1954.jpg',
          title: 'Repose',
          artist: 'Paul Wonner',
          year: '1954',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 7, 23, 11, 20 ],
            "thursday": [ 6, 13, 10, 18 ],
            "friday": [ 14, 21, 9, 16 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 344,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/figuras-1993.jpg',
          title: 'Figuras',
          artist: 'Menez',
          year: '1993',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 7, 23, 11, 20 ],
            "friday": [ 6, 13, 10, 18 ],
            "saturday": [ 14, 21, 9, 16 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 345,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/industrial-painting-1958.jpg',
          title: 'Industrial Painting',
          artist: 'Giuseppe Pinot-Gallizio',
          year: '1958',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 7, 23, 11, 20 ],
            "saturday": [ 6, 13, 10, 18 ],
            "sunday": [ 14, 21, 9, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 346,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/golden-gate-1955.jpg',
          title: 'Golden Gate',
          artist: 'Charles Sheeler',
          year: '1955',
          rule: {
            "monday": [ 14, 21, 9, 16 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 7, 23, 11, 20 ],
            "sunday": [ 6, 13, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 347,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/going-to-heaven-1993.jpg',
          title: 'Going to Heaven',
          artist: 'Glennray Tutor',
          year: '1993',
          rule: {
            "monday": [ 6, 13, 10, 18 ],
            "tuesday": [ 14, 21, 9, 16 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 7, 23, 11, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 348,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/yellow-man-with-trolley-1952.jpg',
          title: 'Yellow man with Trolley',
          artist: 'Roger Raveel',
          year: '1952',
          rule: {
            "monday": [ 7, 23, 11, 20 ],
            "tuesday": [ 6, 13, 10, 18 ],
            "wednesday": [ 14, 21, 9, 16 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 349,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/mauve-barn-1985.jpg',
          title: 'Mauve Barn',
          artist: 'Eyvind Earle',
          year: '1985',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 7, 23, 11, 20 ],
            "wednesday": [ 6, 13, 10, 18 ],
            "thursday": [ 14, 21, 9, 16 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 350,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/wine-crucifix-1978.jpg',
          title: 'Wine Crucifix',
          artist: 'Arnulf Rainer',
          year: '1978',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 8, 24, 12, 21 ],
            "thursday": [ 7, 14, 11, 19 ],
            "friday": [ 15, 22, 10, 17 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 351,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-green-cat-man-and-the-flying-snakes-2004.jpg',
          title: 'The Green Cat Man and the Flying Snakes',
          artist: 'Twins Seven Seven',
          year: '2004',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 8, 24, 12, 21 ],
            "friday": [ 7, 14, 11, 19 ],
            "saturday": [ 15, 22, 10, 17 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 352,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/maenads-2-2005.jpg',
          title: 'Maenads 2',
          artist: 'Sorin Ilfoveanu',
          year: '2005',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 8, 24, 12, 21 ],
            "saturday": [ 7, 14, 11, 19 ],
            "sunday": [ 15, 22, 10, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 353,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/carolina-morning-1974.jpg',
          title: 'Carolina Morning',
          artist: 'Romare Bearden',
          year: '1974',
          rule: {
            "monday": [ 15, 22, 10, 17 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 8, 24, 12, 21 ],
            "sunday": [ 7, 14, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 354,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/rhubarb-1989.jpg',
          title: 'Rhubarb',
          artist: 'Avigdor Arikha',
          year: '1989',
          rule: {
            "monday": [ 7, 14, 11, 19 ],
            "tuesday": [ 15, 22, 10, 17 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 8, 24, 12, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 355,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/farbmodulationen-1962.jpg',
          title: 'Farbmodulationen',
          artist: 'Rupprecht Geiger',
          year: '1962',
          rule: {
            "monday": [ 8, 24, 12, 21 ],
            "tuesday": [ 7, 14, 11, 19 ],
            "wednesday": [ 15, 22, 10, 17 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 356,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/dark-blue-world-1947.jpg',
          title: 'Dark Blue World',
          artist: 'Endre Balint',
          year: '1947',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 8, 24, 12, 21 ],
            "wednesday": [ 7, 14, 11, 19 ],
            "thursday": [ 15, 22, 10, 17 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 357,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/from-point-1978.jpg',
          title: 'From Point',
          artist: 'Lee Ufan',
          year: '1978',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 9, 25, 13, 22 ],
            "thursday": [ 8, 15, 12, 20 ],
            "friday": [ 16, 23, 11, 18 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 358,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/mushrooms-1995.jpg',
          title: 'Mushrooms',
          artist: 'Yayoi Kusama',
          year: '1995',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 9, 25, 13, 22 ],
            "friday": [ 8, 15, 12, 20 ],
            "saturday": [ 16, 23, 11, 18 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 359,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/babel-2001.jpg',
          title: 'Babel',
          artist: 'Cildo Meireles',
          year: '2001',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 9, 25, 13, 22 ],
            "saturday": [ 8, 15, 12, 20 ],
            "sunday": [ 16, 23, 11, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 360,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-tempest-2005.jpg',
          title: 'The Tempest',
          artist: 'Carlo Maria Mariani',
          year: '2005',
          rule: {
            "monday": [ 16, 23, 11, 18 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 9, 25, 13, 22 ],
            "sunday": [ 8, 15, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 361,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/june-moon-1963.jpg',
          title: 'June Moon',
          artist: 'Allan D\'Arcangelo',
          year: '1963',
          rule: {
            "monday": [ 8, 15, 12, 20 ],
            "tuesday": [ 16, 23, 11, 18 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 9, 25, 13, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 362,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/c-mon-baby-light-my-fire-2007.jpg',
          title: 'C\'mon Baby Light My Fire',
          artist: 'Luke Chueh',
          year: '2007',
          rule: {
            "monday": [ 9, 25, 13, 22 ],
            "tuesday": [ 8, 15, 12, 20 ],
            "wednesday": [ 16, 23, 11, 18 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 363,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/project-asberry-ii-1970.jpg',
          title: 'Project Asberry II',
          artist: 'Willem van Genk',
          year: '1970',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 9, 25, 13, 22 ],
            "wednesday": [ 8, 15, 12, 20 ],
            "thursday": [ 16, 23, 11, 18 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 364,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-plakat-carton-1962.jpg',
          title: 'Untitled (Plakat Carton)',
          artist: 'Giulio Paolini',
          year: '1962',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 10, 26, 14, 23 ],
            "thursday": [ 9, 16, 13, 21 ],
            "friday": [ 17, 24, 12, 19 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 365,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/shy-cowboy-1980.jpg',
          title: 'Shy Cowboy',
          artist: 'Derek Boshier',
          year: '1980',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 10, 26, 14, 23 ],
            "friday": [ 9, 16, 13, 21 ],
            "saturday": [ 17, 24, 12, 19 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 366,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/is-your-life-sweet-1996.jpg',
          title: 'Is Your Life Sweet?',
          artist: 'Lygia Pape',
          year: '1996',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 10, 26, 14, 23 ],
            "saturday": [ 9, 16, 13, 21 ],
            "sunday": [ 17, 24, 12, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 367,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/hibernation-1954.jpg',
          title: 'Hibernation',
          artist: 'Morris Graves',
          year: '1954',
          rule: {
            "monday": [ 17, 24, 12, 19 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 10, 26, 14, 23 ],
            "sunday": [ 9, 16, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 368,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/young-southern-girls-1980.jpg',
          title: 'Young Southern Girls',
          artist: 'Lin Fengmian',
          year: '1980',
          rule: {
            "monday": [ 9, 16, 13, 21 ],
            "tuesday": [ 17, 24, 12, 19 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 10, 26, 14, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 369,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/no-work-1948.jpg',
          title: 'No Work',
          artist: 'George Pemba',
          year: '1948',
          rule: {
            "monday": [ 10, 26, 14, 23 ],
            "tuesday": [ 9, 16, 13, 21 ],
            "wednesday": [ 17, 24, 12, 19 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 370,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/3d-1984.jpg',
          title: '3D',
          artist: '3D',
          year: '1984',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 10, 26, 14, 23 ],
            "wednesday": [ 9, 16, 13, 21 ],
            "thursday": [ 17, 24, 12, 19 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 371,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/la-larva-1967.jpg',
          title: 'La larva',
          artist: 'Emilio Scanavino',
          year: '1967',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 11, 27, 15, 24 ],
            "thursday": [ 10, 17, 14, 22 ],
            "friday": [ 18, 25, 13, 20 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 372,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/tubes-of-paint-in-their-drawer-1985.jpg',
          title: 'Tubes of Paint in their Drawer',
          artist: 'Avigdor Arikha',
          year: '1985',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 11, 27, 15, 24 ],
            "friday": [ 10, 17, 14, 22 ],
            "saturday": [ 18, 25, 13, 20 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 373,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/auto-retrato-en-blanco-self-portrait-in-white-1998.jpg',
          title: 'Auto retrato en blanco (self portrait in white)',
          artist: 'Ramon Oviedo',
          year: '1998',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 11, 27, 15, 24 ],
            "saturday": [ 10, 17, 14, 22 ],
            "sunday": [ 18, 25, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 374,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/reflets-printanieres-1989.jpg',
          title: 'Reflets Printanieres',
          artist: 'Marcel Barbeau',
          year: '1989',
          rule: {
            "monday": [ 18, 25, 13, 20 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 11, 27, 15, 24 ],
            "sunday": [ 10, 17, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 375,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/voar-2001.jpg',
          title: 'Voar',
          artist: 'Helena Almeida',
          year: '2001',
          rule: {
            "monday": [ 10, 17, 14, 22 ],
            "tuesday": [ 18, 25, 13, 20 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 11, 27, 15, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 376,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/centrifugal-1970.jpg',
          title: 'Centrifugal',
          artist: 'Fred Eversley',
          year: '1970',
          rule: {
            "monday": [ 11, 27, 15, 24 ],
            "tuesday": [ 10, 17, 14, 22 ],
            "wednesday": [ 18, 25, 13, 20 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 377,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/mensaje-xv-leviticos-xx-18-1959.jpg',
          title: 'Mensaje XV, Leviticos XX: 18',
          artist: 'Mathias Goeritz',
          year: '1959',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 11, 27, 15, 24 ],
            "wednesday": [ 10, 17, 14, 22 ],
            "thursday": [ 18, 25, 13, 20 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 378,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/throwing-away-bad-luck-2003.jpg',
          title: 'Throwing Away Bad Luck',
          artist: 'Nyoman Masriadi',
          year: '2003',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 12, 28, 16, 25 ],
            "thursday": [ 11, 18, 15, 23 ],
            "friday": [ 19, 26, 14, 21 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 379,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/coal-face-drawers-1950.jpg',
          title: 'Coal-Face Drawers',
          artist: 'Oliver Kilbourn',
          year: '1950',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 12, 28, 16, 25 ],
            "friday": [ 11, 18, 15, 23 ],
            "saturday": [ 19, 26, 14, 21 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 380,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/portrait-of-man-sitting-1980.jpg',
          title: 'Portrait of man sitting',
          artist: 'Dimitris Mytaras',
          year: 'c.1979 - c.1980',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 12, 28, 16, 25 ],
            "saturday": [ 11, 18, 15, 23 ],
            "sunday": [ 19, 26, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 381,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/200-miles-to-los-angeles-2009.jpg',
          title: '200 Miles to Los Angeles',
          artist: 'David Michael Hinnebusch',
          year: 'c.2009',
          rule: {
            "monday": [ 19, 26, 14, 21 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 12, 28, 16, 25 ],
            "sunday": [ 11, 18, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 382,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-bird-fancier-2009.jpg',
          title: 'The Bird Fancier',
          artist: 'Sorin Ilfoveanu',
          year: '2009',
          rule: {
            "monday": [ 11, 18, 15, 23 ],
            "tuesday": [ 19, 26, 14, 21 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 12, 28, 16, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 383,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/dreammachine-in-collaboration-with-ian-sommerville-1962.jpg',
          title: 'Dreammachine (in collaboration with Ian Sommerville)',
          artist: 'Brion Gysin',
          year: '1962',
          rule: {
            "monday": [ 12, 28, 16, 25 ],
            "tuesday": [ 11, 18, 15, 23 ],
            "wednesday": [ 19, 26, 14, 21 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 384,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/face-over-horizon-2008.jpg',
          title: 'Face over Horizon',
          artist: 'Leiko Ikemura',
          year: '2008',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 12, 28, 16, 25 ],
            "wednesday": [ 11, 18, 15, 23 ],
            "thursday": [ 19, 26, 14, 21 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 385,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/star-dust-2009.jpg',
          title: 'Star Dust',
          artist: 'Glenn Brown',
          year: '2009',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 13, 29, 17, 26 ],
            "thursday": [ 12, 19, 16, 24 ],
            "friday": [ 20, 27, 15, 22 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 1, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 386,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/laguna-e-deserto-1992.jpg',
          title: 'Laguna e deserto',
          artist: 'Antonio Corpora',
          year: '1992',
          rule: {
            "monday": [ 26, 1, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 13, 29, 17, 26 ],
            "friday": [ 12, 19, 16, 24 ],
            "saturday": [ 20, 27, 15, 22 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 387,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/hannah-barbaric-paradise-1981.jpg',
          title: 'Hannah Barbaric Paradise',
          artist: 'Kenny Scharf',
          year: '1981',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 1, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 13, 29, 17, 26 ],
            "saturday": [ 12, 19, 16, 24 ],
            "sunday": [ 20, 27, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 388,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/yellow-bowl-cup-and-flowers-1966.jpg',
          title: 'Yellow Bowl, Cup And Flowers',
          artist: 'Paul Wonner',
          year: '1966',
          rule: {
            "monday": [ 20, 27, 15, 22 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 1, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 13, 29, 17, 26 ],
            "sunday": [ 12, 19, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 389,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/creueta-del-coll-1987.jpg',
          title: 'Little Utah',
          artist: 'Norman Ackroyd',
          year: '1971',
          rule: {
            "monday": [ 12, 19, 16, 24 ],
            "tuesday": [ 20, 27, 15, 22 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 1, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 13, 29, 17, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 390,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/839-the-third-skin-1982(1).jpg',
          title: '839 The Third Skin',
          artist: 'Friedensreich Hundertwasser',
          year: '1982',
          rule: {
            "monday": [ 13, 29, 17, 26 ],
            "tuesday": [ 12, 19, 16, 24 ],
            "wednesday": [ 20, 27, 15, 22 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 1, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 391,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/psychic-pedestrians-on-a-spiral-horizon-barycenter-1970.jpg',
          title: 'Psychic Pedestrians On a Spiral Horizon (Barycenter)',
          artist: 'Robert Williams',
          year: '1970',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 13, 29, 17, 26 ],
            "wednesday": [ 12, 19, 16, 24 ],
            "thursday": [ 20, 27, 15, 22 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 1, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 392,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/self-portrait-1953.jpg',
          title: 'Self Portrait',
          artist: 'John Bratby',
          year: '1953',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 14, 30, 18, 27 ],
            "thursday": [ 13, 20, 17, 25 ],
            "friday": [ 21, 28, 16, 23 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 2, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 393,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/paisagem-da-trafaria-1955.jpg',
          title: 'Paisagem da Trafaria',
          artist: 'Nikias Skapinakis',
          year: '1955',
          rule: {
            "monday": [ 27, 2, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 14, 30, 18, 27 ],
            "friday": [ 13, 20, 17, 25 ],
            "saturday": [ 21, 28, 16, 23 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 394,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1982-2.jpg',
          title: 'Untitled',
          artist: 'Joan Ponc',
          year: '1982',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 2, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 14, 30, 18, 27 ],
            "saturday": [ 13, 20, 17, 25 ],
            "sunday": [ 21, 28, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 395,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/corridor-1960.jpg',
          title: 'Corridor',
          artist: 'Karl Benjamin',
          year: '1960',
          rule: {
            "monday": [ 21, 28, 16, 23 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 2, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 14, 30, 18, 27 ],
            "sunday": [ 13, 20, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 396,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/pieta-2012(2).jpg',
          title: 'Pieta',
          artist: 'Paulo Tercio',
          year: '2012',
          rule: {
            "monday": [ 13, 20, 17, 25 ],
            "tuesday": [ 21, 28, 16, 23 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 2, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 14, 30, 18, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 397,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/crimson-glory-1988.jpg',
          title: 'Crimson Glory',
          artist: 'Eyvind Earle',
          year: '1988',
          rule: {
            "monday": [ 14, 30, 18, 27 ],
            "tuesday": [ 13, 20, 17, 25 ],
            "wednesday": [ 21, 28, 16, 23 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 27, 2, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 398,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/black-metamorphosis-1950.jpg',
          title: 'Black Metamorphosis',
          artist: 'Willi Baumeister',
          year: '1950',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 14, 30, 18, 27 ],
            "wednesday": [ 13, 20, 17, 25 ],
            "thursday": [ 21, 28, 16, 23 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 2, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 399,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/water-painting-1999.jpg',
          title: 'Water Painting',
          artist: 'Gary Hume',
          year: '1999',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 15, 1, 19, 28 ],
            "thursday": [ 14, 21, 18, 26 ],
            "friday": [ 22, 29, 17, 24 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 3, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 400,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/kandy-kane-rainbow-1994.jpg',
          title: 'Kandy Kane Rainbow',
          artist: 'Charles Bell',
          year: '1994',
          rule: {
            "monday": [ 28, 3, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 15, 1, 19, 28 ],
            "friday": [ 14, 21, 18, 26 ],
            "saturday": [ 22, 29, 17, 24 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 401,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/untitled-1950.jpg',
          title: 'Untitled',
          artist: 'Gaston Chaissac',
          year: '1950',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 3, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 15, 1, 19, 28 ],
            "saturday": [ 14, 21, 18, 26 ],
            "sunday": [ 22, 29, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 402,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/joseph-s-liquors-1981.jpg',
          title: 'Joseph\'s Liquors',
          artist: 'Robert Cottingham',
          year: '1981',
          rule: {
            "monday": [ 22, 29, 17, 24 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 3, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 15, 1, 19, 28 ],
            "sunday": [ 14, 21, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 403,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/man-carrying-his-own-sun-on-a-string-1973.jpg',
          title: 'Man Carrying His Own Sun on a String',
          artist: 'Robert Filliou',
          year: '1973',
          rule: {
            "monday": [ 14, 21, 18, 26 ],
            "tuesday": [ 22, 29, 17, 24 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 3, 22, 30 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 15, 1, 19, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 404,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/shoe-shine-boys-1967.jpg',
          title: 'Shoe Shine Boys',
          artist: 'Gebre Kristos Desta',
          year: '1967',
          rule: {
            "monday": [ 15, 1, 19, 28 ],
            "tuesday": [ 14, 21, 18, 26 ],
            "wednesday": [ 22, 29, 17, 24 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 3, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 405,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/still-life-with-napkins-and-gift-box-1981.jpg',
          title: 'Still Life with Napkins and Gift Box',
          artist: 'Paul Wonner',
          year: '1981',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 15, 1, 19, 28 ],
            "wednesday": [ 14, 21, 18, 26 ],
            "thursday": [ 22, 29, 17, 24 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 3, 22, 30 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 406,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/a-haystack-near-antagnes-under-a-primitive-cover-in-canton-vaud-region-romandie-1977.jpg',
          title: 'A haystack near Antagnes, in Canton Vaud - region Romandie - watercolor plain air, in Swiss landscape',
          artist: 'Hubertine Heijermans',
          year: '1977',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 16, 2, 20, 29 ],
            "thursday": [ 15, 22, 19, 27 ],
            "friday": [ 23, 30, 18, 25 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 4, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 407,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/robert-de-niro-taxi-driver-1988.jpg',
          title: 'Robert De Niro, Taxi Driver',
          artist: '3D',
          year: '1988',
          rule: {
            "monday": [ 29, 4, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 16, 2, 20, 29 ],
            "friday": [ 15, 22, 19, 27 ],
            "saturday": [ 23, 30, 18, 25 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 408,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/2-to-the-moon-1961.jpg',
          title: '2 to the Moon',
          artist: 'Hassel Smith',
          year: '1961',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 4, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 16, 2, 20, 29 ],
            "saturday": [ 15, 22, 19, 27 ],
            "sunday": [ 23, 30, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 409,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/sacred-flame-1975.jpg',
          title: 'Sacred Flame',
          artist: 'Kazuo Shiraga',
          year: '1975',
          rule: {
            "monday": [ 23, 30, 18, 25 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 4, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 16, 2, 20, 29 ],
            "sunday": [ 15, 22, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 410,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/o-casamento-1967.jpg',
          title: 'O Casamento',
          artist: 'Alvaro Lapa',
          year: '1967',
          rule: {
            "monday": [ 15, 22, 19, 27 ],
            "tuesday": [ 23, 30, 18, 25 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 4, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 16, 2, 20, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 411,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/suzuki-hiroshima-1963.jpg',
          title: 'Suzuki (Hiroshima)',
          artist: 'Jean Tinguely',
          year: '1963',
          rule: {
            "monday": [ 16, 2, 20, 29 ],
            "tuesday": [ 15, 22, 19, 27 ],
            "wednesday": [ 23, 30, 18, 25 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 4, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 412,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/young-girl-making-soap-bubbles-2001.jpg',
          title: 'Young Girl Making Soap Bubbles',
          artist: 'Paritosh Sen',
          year: '2001',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 16, 2, 20, 29 ],
            "wednesday": [ 15, 22, 19, 27 ],
            "thursday": [ 23, 30, 18, 25 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 4, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 413,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/galo-1977.jpg',
          title: 'Galo',
          artist: 'Aldemir Martins',
          year: '1977',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 17, 3, 21, 30 ],
            "thursday": [ 16, 23, 20, 28 ],
            "friday": [ 24, 1, 19, 26 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 5, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 414,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/janus.jpg',
          title: 'Janus',
          artist: 'Christo Coetzee',
          year: 'XX - XXI Cent.',
          rule: {
            "monday": [ 30, 5, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 17, 3, 21, 30 ],
            "friday": [ 16, 23, 20, 28 ],
            "saturday": [ 24, 1, 19, 26 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 415,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/fall-1964.jpg',
          title: 'Fall',
          artist: 'Bernard Cohen',
          year: '1964',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 5, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 17, 3, 21, 30 ],
            "saturday": [ 16, 23, 20, 28 ],
            "sunday": [ 24, 1, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 416,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/dachshund-1975.jpg',
          title: 'Dachshund',
          artist: 'Kiyoshi Saito',
          year: '1975',
          rule: {
            "monday": [ 24, 1, 19, 26 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 5, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 17, 3, 21, 30 ],
            "sunday": [ 16, 23, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 417,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/sap-sucker-lace-2000.jpg',
          title: 'Sap Sucker Lace',
          artist: 'Robert Zakanitch',
          year: '2000',
          rule: {
            "monday": [ 16, 23, 20, 28 ],
            "tuesday": [ 24, 1, 19, 26 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 5, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 17, 3, 21, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 418,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/nathans-diamond-1987.jpg',
          title: 'Nathans Diamond',
          artist: 'Dan Christensen',
          year: '1987',
          rule: {
            "monday": [ 17, 3, 21, 30 ],
            "tuesday": [ 16, 23, 20, 28 ],
            "wednesday": [ 24, 1, 19, 26 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 5, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 419,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/lawndale-1988.jpg',
          title: 'Lawndale',
          artist: 'Peter Alexander',
          year: '1988',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 17, 3, 21, 30 ],
            "wednesday": [ 16, 23, 20, 28 ],
            "thursday": [ 24, 1, 19, 26 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 5, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 420,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/plaster-bag-ii-1973.jpg',
          title: 'Plaster Bag II',
          artist: 'Marjorie Strider',
          year: '1973',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 18, 4, 22, 1 ],
            "thursday": [ 17, 24, 21, 29 ],
            "friday": [ 25, 2, 20, 27 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 6, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 421,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/nelson-mandela-1-2001.jpg',
          title: 'Nelson Mandela 1',
          artist: 'Peter Max',
          year: '2001',
          rule: {
            "monday": [ 1, 6, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 18, 4, 22, 1 ],
            "friday": [ 17, 24, 21, 29 ],
            "saturday": [ 25, 2, 20, 27 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 422,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/fontes-1992.jpg',
          title: 'Fontes',
          artist: 'Cildo Meireles',
          year: '1992',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 6, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 18, 4, 22, 1 ],
            "saturday": [ 17, 24, 21, 29 ],
            "sunday": [ 25, 2, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 423,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/counterpoint-with-flowers-1982.jpg',
          title: 'Counterpoint with Flowers',
          artist: 'Fusun Onur',
          year: '1982',
          rule: {
            "monday": [ 25, 2, 20, 27 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 6, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 18, 4, 22, 1 ],
            "sunday": [ 17, 24, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 424,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/without-borders-2011.jpg',
          title: 'Without Borders',
          artist: 'Peter Max',
          year: '2011',
          rule: {
            "monday": [ 17, 24, 21, 29 ],
            "tuesday": [ 25, 2, 20, 27 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 6, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 18, 4, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 425,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september/the-elimination-of-radiation-through-bombardment-1986.jpg',
          title: 'The Elimination of Radiation through Bombardment',
          artist: 'Ozdemir Atlan',
          year: '1986',
          rule: {
            "monday": [ 18, 4, 22, 1 ],
            "tuesday": [ 17, 24, 21, 29 ],
            "wednesday": [ 25, 2, 20, 27 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 6, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('september_arts_id_seq', (SELECT MAX(id) FROM september_arts));");
    });
};
