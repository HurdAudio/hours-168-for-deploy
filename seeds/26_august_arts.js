'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('august_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('august_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/company-visit.jpg',
          title: 'Company visit',
          artist: 'Niko Pirosmani',
          year: 'c. 1917',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 31, 4, 12, 28 ],
            "friday": [ 30, 3, 11, 27 ],
            "saturday": [ 29, 2, 10, 26 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-good-samaritan-1907.jpg',
          title: 'The Good Samaritan',
          artist: 'Paula Modersohn-Becker',
          year: '1907',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 31, 4, 12, 28 ],
            "saturday": [ 30, 3, 11, 27 ],
            "sunday": [ 29, 2, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/gasometer-in-vorortbahn-1920.jpg',
          title: 'Gasometer in Vorortbahn',
          artist: 'Ernst Ludwig Kirchner',
          year: '1914 - 1912',
          rule: {
            "monday": [ 29, 2, 10, 26 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 2, 6, 14, 30 ],
            "friday": [ 1, 5, 13, 29 ],
            "saturday": [ 31, 4, 12, 28 ],
            "sunday": [ 30, 3, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/firefly-1907.jpg',
          title: 'Firefly',
          artist: 'George Seeley',
          year: '1907',
          rule: {
            "monday": [ 30, 3, 11, 27 ],
            "tuesday": [ 29, 2, 10, 26 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 2, 6, 14, 30 ],
            "saturday": [ 1, 5, 13, 29 ],
            "sunday": [ 31, 4, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/soapdish-1929.jpg',
          title: 'Soapdish',
          artist: 'Luigi Russolo',
          year: '1929',
          rule: {
            "monday": [ 31, 4, 12, 28 ],
            "tuesday": [ 30, 3, 11, 27 ],
            "wednesday": [ 29, 2, 10, 26 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/vertigo-1908.jpg',
          title: 'Vertigo',
          artist: 'Leon Spilliaert',
          year: '1908',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 31, 4, 12, 28 ],
            "wednesday": [ 30, 3, 11, 27 ],
            "thursday": [ 29, 2, 10, 26 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/capelli-rossi-red-hair.jpg',
          title: 'Capelli Rossi (Red Hair)',
          artist: 'Ernst Ludwig Kirchner',
          year: '1914',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 31, 4, 12, 28 ],
            "friday": [ 30, 3, 11, 27 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/jack-of-clubs-1916.jpg',
          title: 'Jack of Clubs',
          artist: 'Olga Rozanova',
          year: '1916',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 31, 4, 12, 28 ],
            "saturday": [ 30, 3, 11, 27 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/a-victim-of-society.jpg',
          title: 'A Victim of Society',
          artist: 'George Grosz',
          year: '1919',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 2, 6, 14, 30 ],
            "friday": [ 1, 5, 13, 29 ],
            "saturday": [ 31, 4, 12, 28 ],
            "sunday": [ 30, 3, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/flamboyant-landscape-1933.jpg',
          title: 'Flamboyant landscape',
          artist: 'Martiros Sarian',
          year: '1933',
          rule: {
            "monday": [ 30, 3, 11, 27 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 2, 6, 14, 30 ],
            "saturday": [ 1, 5, 13, 29 ],
            "sunday": [ 31, 4, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/entrance-hall-moffatt-ladd-house-1923.jpg',
          title: 'Entrance Hall, Moffatt-Ladd House',
          artist: 'Walter Gay',
          year: '1923',
          rule: {
            "monday": [ 31, 4, 12, 28 ],
            "tuesday": [ 30, 3, 11, 27 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-blue-ship-1934.jpg',
          title: 'The Blue Ship',
          artist: 'Alfred Wallis',
          year: '1934',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 31, 4, 12, 28 ],
            "wednesday": [ 30, 3, 11, 27 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/moonlight-waning-winter-1924.jpg',
          title: 'Moonlight, Waning Winter',
          artist: 'Homer Watson',
          year: '1924',
          rule: {
            "monday": [ 2, 6, 14, 30 ],
            "tuesday": [ 1, 5, 13, 29 ],
            "wednesday": [ 31, 4, 12, 28 ],
            "thursday": [ 30, 3, 11, 27 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-chess-players-1929.jpg',
          title: 'The Chess Players',
          artist: 'John Lavery',
          year: '1929',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 31, 4, 12, 28 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/contrasting-sounds-1924.jpg',
          title: 'Contrasting sounds',
          artist: 'Wassily Kandinsky',
          year: '1924',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 2, 6, 14, 30 ],
            "friday": [ 1, 5, 13, 29 ],
            "saturday": [ 31, 4, 12, 28 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/boy-with-the-birdie-1924.jpg',
          title: 'Boy with the Birdie',
          artist: 'Fedir Krychevsky',
          year: '1924',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 2, 6, 14, 30 ],
            "saturday": [ 1, 5, 13, 29 ],
            "sunday": [ 31, 4, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/gr-relief-ii-1932.jpg',
          title: 'Grå relief II',
          artist: 'Gosta Adrian-Nilsson',
          year: '1932',
          rule: {
            "monday": [ 31, 4, 12, 28 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/l-glise-st-desir.jpg',
          title: 'L\'église St. Desir',
          artist: 'Louis Vivin',
          year: '?',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 31, 4, 12, 28 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/r-ckenakt-1920.jpg',
          title: 'Rückenakt',
          artist: 'Heinrich Kuhn',
          year: '1920',
          rule: {
            "monday": [ 2, 6, 14, 30 ],
            "tuesday": [ 1, 5, 13, 29 ],
            "wednesday": [ 31, 4, 12, 28 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/clifton-grove-clifton-hall-nottingham-1.jpg',
          title: 'Clifton Grove, Clifton Hall, Nottingham',
          artist: 'Arthur Lowe',
          year: '?',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 31, 4, 12, 28 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/odalisque-1931.jpg',
          title: 'Odalisque',
          artist: 'Francisc Sirato',
          year: '1931',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 2, 5, 14, 30 ],
            "friday": [ 1, 5, 13, 29 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/nude-sitting-1902.jpg',
          title: 'Nude sitting',
          artist: 'Nicolae Vermont',
          year: '1902',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 2, 5, 14, 30 ],
            "saturday": [ 1, 5, 13, 29 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/j-zef-pankiewicz-fili-anka-herbaty-wizyta.jpg',
          title: 'Filiżanka Herbaty (wizyta)',
          artist: 'Józef Pankiewicz',
          year: '1922',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 5, 14, 30 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/bittersweet-1935.jpg',
          title: 'Bittersweet',
          artist: 'Georges Rouault',
          year: '1935',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 5, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/asakusa-kannon-tokyo-1926.jpg',
          title: 'Asakusa Kannon, Tokyo',
          artist: 'Shotei Takahashi',
          year: '1926',
          rule: {
            "monday": [ 2, 5, 14, 30 ],
            "tuesday": [ 1, 5, 13, 29 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/fanny-machine-the-machinery-1928.jpg',
          title: 'Fanny Machine - The machinery',
          artist: 'Frantisek Kupka',
          year: '1928',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 5, 14, 30 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/october-idyll-1905.jpg',
          title: 'October Idyll',
          artist: 'Mstislav Dobuzhinsky',
          year: '1905',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 5, 14, 30 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/psyche-discovers-that-her-secret-lover-is-cupid.jpg',
          title: 'Psyche Discovers That Her Secret Lover Is Cupid',
          artist: 'Maurice Denis',
          year: '1908',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 6, 15, 31 ],
            "friday": [ 2, 6, 14, 30 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/planos-de-color-con-dos-maderas-superpuestas-1928.jpg',
          title: 'Planos de color con dos maderas superpuestas',
          artist: 'Joaquin Torres Garcia',
          year: '1928',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 6, 15, 31 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/mottled-landscape-1924.jpg',
          title: 'Mottled landscape',
          artist: 'Martiros Sarian',
          year: '1924',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 6, 15, 31 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-blonde-woman.jpg',
          title: 'The Blonde Woman',
          artist: 'Albert Marquet',
          year: '?',
          rule: {
            "monday": [ 2, 6, 14, 30 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 6, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/wines-liquors-1910.jpg',
          title: 'Wines, Liquors',
          artist: 'Maurice de Vlaminck',
          year: '1910',
          rule: {
            "monday": [ 3, 6, 15, 31 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/le-maquereau-1935.jpg',
          title: 'Le Maquereau',
          artist: 'Camille Bombois',
          year: '1935',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 6, 15, 31 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-tribute-money-1915.jpg',
          title: 'The tribute money',
          artist: 'Emil Nolde',
          year: '1915',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 6, 15, 31 ],
            "thursday": [ 2, 6, 14, 30 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-demonstration.jpg',
          title: 'The Demonstration',
          artist: 'Emmanuel Zairis',
          year: '?',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 7, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 8, 11, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/proue-de-naivre-et-papillons-1925.jpg',
          title: 'Proue de naivre et papillons',
          artist: 'Pierre Roy',
          year: '1925',
          rule: {
            "monday": [ 8, 11, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 7, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/die-k-nigin-von-saba-1918.jpg',
          title: 'Die Königin von Saba',
          artist: 'Arthur Segal',
          year: '1918',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 8, 11, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 7, 16, 1 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/fishing-boats-at-collioure.jpg',
          title: 'Fishing boats at Collioure',
          artist: 'Henri Martin',
          year: '?',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 8, 11, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 7, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/mih-ly-k-rolyi-1930.jpg',
          title: 'Mihály Károlyi',
          artist: 'Bertalan Por',
          year: '1930',
          rule: {
            "monday": [ 4, 7, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 8, 11, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-accordion-player-1919.jpg',
          title: 'The Accordion Player',
          artist: 'Gino Severini',
          year: '1919',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 7, 16, 1 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 9, 13, 21, 6 ],
            "friday": [ 8, 11, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/la-femme-l-ventail-woman-with-fan-1913.jpg',
          title: 'La Femme à l\'Éventail (Woman with Fan)',
          artist: 'Jean Metzinger',
          year: '1913',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 7, 16, 1 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 8, 11, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/still-life-with-t-ang-horse-1921.jpg',
          title: 'Still Life with T\'ang Horse',
          artist: 'Roger Fry',
          year: '1921',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 8, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 9, 12, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/picture-xvi-the-great-gate-of-kiev-stage-set-for-mussorgsky-s-pictures-at-an-exhibition-in-1928(1).jpg',
          title: 'Picture XVI, The Great Gate of Kiev. Stage set for Mussorgsky\'s Pictures at an Exhibition in Friedrich Theater, Dessau.',
          artist: 'Wassily Kandinsky',
          year: '1928',
          rule: {
            "monday": [ 9, 12, 21, 6 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 8, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/eiffel-tower.jpg',
          title: 'Eiffel Tower',
          artist: 'Robert Delaunay',
          year: '1922',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 9, 12, 21, 6 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 8, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/visitation-in-blue.jpg',
          title: 'Visitation in Blue',
          artist: 'Maurice Denis',
          year: '?',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 9, 12, 21, 6 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 8, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/musicians-1927.jpg',
          title: 'Musicians',
          artist: 'Carlos Merida',
          year: '1927',
          rule: {
            "monday": [ 5, 8, 17, 2 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 9, 12, 21, 6 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/hommage-delaunay-et-gleizes-1938.jpg',
          title: 'Hommage à Delaunay et Gleizes',
          artist: 'Adolf Fleischmann',
          year: '1938',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 8, 17, 2 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 9, 12, 21, 6 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/from-thorheiten-1901-3.jpg',
          title: 'from Thorheiten',
          artist: 'Thomas Theodor Heine',
          year: '1901',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 8, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 9, 12, 21, 6 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/not_detected_235984.jpg',
          title: 'The Widow I',
          artist: 'Kathe Kollwitz',
          year: '1921',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 9, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 10, 13, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/ashbury-park-south-1920.jpg',
          title: 'Ashbury Park South',
          artist: 'Florine Stettheimer',
          year: '1920',
          rule: {
            "monday": [ 10, 13, 22, 7 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 9, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/petrograd-red-columns-1922.jpg',
          title: 'Petrograd. Red columns.',
          artist: 'Anna Ostroumova-Lebedeva',
          year: '1922',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 10, 13, 22, 7 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 9, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/homme-cactus-dansant-1939.jpg',
          title: 'Homme cactus dansant',
          artist: 'Julio Gonzalez',
          year: '1939',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 11, 15, 23, 8 ],
            "wednesday": [ 10, 13, 22, 7 ],
            "thursday": [ 9, 13, 21, 6 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 9, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/portrait-of-natalia-petrovna-konchalovsky-the-artist-s-daughter-in-pink-dress-1925.jpg',
          title: 'Portrait of Natalia Petrovna Konchalovsky, the artist\'s daughter (in pink dress)',
          artist: 'Pyotr Konchalovsky',
          year: '1925',
          rule: {
            "monday": [ 6, 9, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 10, 13, 22, 7 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/hauptstrasse-mit-mann-1934(1).jpg',
          title: 'Hauptstrasse (Mit Mann)',
          artist: 'Gabriele Munter',
          year: '1934',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 9, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 10, 13, 22, 7 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/not_detected_235938.jpg',
          title: 'Female nude seated on the ground',
          artist: 'Oskar Kokoschka',
          year: '1913',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 9, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 10, 13, 22, 7 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/nude-on-sand-oceano-1935.jpg',
          title: 'Nude on Sand, Oceano',
          artist: 'Edward Weston',
          year: '1935',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 10, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 12, 16, 24, 9 ],
            "sunday": [ 11, 14, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/portrait-of-b-khmelnitsky.jpg',
          title: 'Portrait of B. Khmelnitsky',
          artist: 'Heorhiy Narbut',
          year: '?',
          rule: {
            "monday": [ 11, 14, 23, 8 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 10, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 12, 16, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/gypsies-from-dobruja.jpg',
          title: 'Gypsies from Dobruja',
          artist: 'Stefan Dimitrescu',
          year: '?',
          rule: {
            "monday": [ 12, 16, 24, 9 ],
            "tuesday": [ 11, 14, 23, 8 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 9, 13, 21, 6 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 10, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/model-1913.jpg',
          title: 'Model',
          artist: 'Vladimir Tatlin',
          year: '1913',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 14, 23, 8 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 10, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/abstract-no-7-1939.jpg',
          title: 'Abstract No. 7',
          artist: 'Lawren Harris',
          year: '1939',
          rule: {
            "monday": [ 7, 10, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 12, 16, 24, 9 ],
            "thursday": [ 11, 14, 23, 8 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/highway-and-byways-1929(1).jpg',
          title: 'Highway and byways',
          artist: 'Paul Klee',
          year: '1929',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 10, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 12, 16, 24, 9 ],
            "friday": [ 11, 14, 23, 8 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-white-man-1907.jpg',
          title: 'The White Man',
          artist: 'Lyonel Feininger',
          year: '1907',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 10, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 12, 16, 24, 9 ],
            "saturday": [ 11, 14, 23, 8 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/chashma-shahi.jpg',
          title: 'Chashma Shahi',
          artist: 'Abanindranath Tagore',
          year: '?',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 8, 11, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 13, 17, 25, 10 ],
            "sunday": [ 12, 15, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/baigneuse.jpg',
          title: 'Baigneuse',
          artist: 'Nicolae Vermont',
          year: '?',
          rule: {
            "monday": [ 12, 15, 24, 9 ],
            "tuesday": [ 11, 15, 23, 8 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 9, 13, 21, 6 ],
            "friday": [ 8, 11, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 13, 17, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/21439.jpg',
          title: 'Departure of Empress Elizabeth Petrovna',
          artist: 'Eugene Lanceray',
          year: '1916',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 15, 24, 9 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 8, 11, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/self-portrait.jpg',
          title: 'Self-Portrait',
          artist: 'Otto Dix',
          year: '1914',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 13, 17, 25, 10 ],
            "wednesday": [ 12, 15, 24, 9 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 8, 11, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/haystacks-pankiewitcz.jpg',
          title: '73.5 Cm (28.94 In.). Painting - Oil on Canvas',
          artist: 'Józef Pankiewicz',
          year: '1912',
          rule: {
            "monday": [ 8, 11, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 13, 17, 25, 10 ],
            "thursday": [ 12, 15, 24, 9 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/sister-of-mercy.jpg',
          title: 'Sister of mercy',
          artist: 'Ivan Vladimirov',
          year: '?',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 8, 11, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 13, 17, 25, 10 ],
            "friday": [ 12, 15, 24, 9 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/cochet-rie.jpg',
          title: 'Cochetărie',
          artist: 'Ipolit Strambu',
          year: '?',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 8, 11, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 13, 17, 25, 10 ],
            "saturday": [ 12, 15, 24, 9 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/p-235-o-2-k-8-2-1.jpg',
          title: 'Unknown',
          artist: 'Boris Schatz',
          year: '?',
          rule: {
            "monday": [ 12, 16, 24, 9 ],
            "tuesday": [ 11, 15, 23, 8 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 9, 12, 21, 6 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 16, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/j-zef-pankiewicz-jasie-ski-przy-fortepianie-1908.jpg',
          title: 'Feliks Jasieński Przy Fortepianie',
          artist: 'Józef Pankiewicz',
          year: '1908',
          rule: {
            "monday": [ 13, 16, 25, 10 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 9, 12, 21, 6 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/lunes-et-petites-lunes-tournez.jpg',
          title: 'Lunes et petites lunes tournez',
          artist: 'Louis Soutter',
          year: '?',
          rule: {
            "monday": [ 14, 18, 26, 11 ],
            "tuesday": [ 13, 16, 25, 10 ],
            "wednesday": [ 12, 16, 24, 9 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 9, 12, 21, 6 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/japonese-props-1930.jpg',
          title: 'Japonese Props',
          artist: 'Theodor Pallady',
          year: '1930',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 14, 18, 26, 11 ],
            "wednesday": [ 13, 16, 25, 10 ],
            "thursday": [ 12, 16, 24, 9 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 9, 12, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/notable-day-in-the-mountains-1926.jpg',
          title: 'Notable day in the mountains',
          artist: 'Martiros Sarian',
          year: '1926',
          rule: {
            "monday": [ 9, 12, 21, 6 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 14, 18, 26, 11 ],
            "thursday": [ 13, 16, 25, 10 ],
            "friday": [ 12, 16, 24, 9 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-kiss-1904.jpg',
          title: 'The Kiss',
          artist: 'Clarence White',
          year: '1904',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 9, 12, 21, 6 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 14, 18, 26, 11 ],
            "friday": [ 13, 16, 25, 10 ],
            "saturday": [ 12, 16, 24, 9 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/new-clouds-1937.jpg',
          title: 'New Clouds',
          artist: 'Nandalal Bose',
          year: '1937',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 9, 12, 21, 6 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 14, 18, 26, 11 ],
            "saturday": [ 13, 16, 25, 10 ],
            "sunday": [ 12, 16, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/landscape-with-a-pond-and-water-lilies-1915.jpg',
          title: 'Landscape with a Pond and Water Lilies',
          artist: 'Vanessa Bell',
          year: '1915',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 10, 13, 22, 7 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 15, 19, 27, 12 ],
            "sunday": [ 14, 17, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/nude-with-red-turban-1926.jpg',
          title: 'Nude with Red Turban',
          artist: 'Bela Czobel',
          year: '1926',
          rule: {
            "monday": [ 14, 17, 26, 11 ],
            "tuesday": [ 13, 17, 25, 10 ],
            "wednesday": [ 12, 16, 24, 9 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 10, 13, 22, 7 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 15, 19, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/pieta.jpg',
          title: 'Pieta',
          artist: 'Oskar Kokoschka',
          year: '1909',
          rule: {
            "monday": [ 15, 19, 27, 12 ],
            "tuesday": [ 14, 17, 26, 11 ],
            "wednesday": [ 13, 17, 25, 10 ],
            "thursday": [ 12, 16, 24, 9 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 10, 13, 22, 7 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/goldfish-1902.jpg',
          title: 'Goldfish',
          artist: 'Gustav Klimt',
          year: '1901 - 1902',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 15, 19, 27, 12 ],
            "wednesday": [ 14, 17, 26, 11 ],
            "thursday": [ 13, 17, 25, 10 ],
            "friday": [ 12, 16, 24, 9 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 10, 13, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/meditation-1917(1).jpg',
          title: 'Meditation',
          artist: 'Gabriele Munter',
          year: '1917',
          rule: {
            "monday": [ 10, 13, 22, 7 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 15, 19, 27, 12 ],
            "thursday": [ 14, 17, 26, 11 ],
            "friday": [ 13, 17, 25, 10 ],
            "saturday": [ 12, 16, 24, 9 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/holiday-mission-beach-1938.jpg',
          title: 'Holiday, Mission Beach',
          artist: 'Charles Reiffel',
          year: '1938',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 10, 13, 22, 7 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 15, 19, 27, 12 ],
            "friday": [ 14, 17, 26, 11 ],
            "saturday": [ 13, 17, 25, 10 ],
            "sunday": [ 12, 16, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/la-table-1927.jpg',
          title: 'La Table',
          artist: 'Louis Marcoussis',
          year: '1927',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 14, 23, 8 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 18, 27, 12 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/cityscape-kiev.jpg',
          title: 'Cityscape. Kiev.',
          artist: 'Oleksandr Bogomazov',
          year: 'c.1913',
          rule: {
            "monday": [ 14, 18, 26, 11 ],
            "tuesday": [ 13, 17, 25, 10 ],
            "wednesday": [ 12, 16, 24, 9 ],
            "thursday": [ 11, 14, 23, 8 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 16, 20, 28, 13 ],
            "sunday": [ 15, 18, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/portrait-of-elena-annenkova-1917.jpg',
          title: 'Portrait of Elena Annenkova',
          artist: 'Jury Annenkov',
          year: '1917',
          rule: {
            "monday": [ 15, 18, 27, 12 ],
            "tuesday": [ 14, 18, 26, 11 ],
            "wednesday": [ 13, 17, 25, 10 ],
            "thursday": [ 12, 16, 24, 9 ],
            "friday": [ 11, 14, 23, 8 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 16, 20, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-sailor-self-portrait-1912.jpg',
          title: 'The Sailor (Self Portrait)',
          artist: 'Vladimir Tatlin',
          year: '1911 - 1912',
          rule: {
            "monday": [ 16, 20, 28, 13 ],
            "tuesday": [ 15, 18, 27, 12 ],
            "wednesday": [ 14, 18, 26, 11 ],
            "thursday": [ 13, 17, 25, 10 ],
            "friday": [ 12, 16, 24, 9 ],
            "saturday": [ 11, 14, 23, 8 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/sailor-and-his-girl-1920.jpg',
          title: 'Sailor and His Girl',
          artist: 'Boris Kustodiev',
          year: '1920',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 16, 20, 28, 13 ],
            "wednesday": [ 15, 18, 27, 12 ],
            "thursday": [ 14, 18, 26, 11 ],
            "friday": [ 13, 17, 25, 10 ],
            "saturday": [ 12, 16, 24, 9 ],
            "sunday": [ 11, 14, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/orbits-of-the-planets-1921.jpg',
          title: 'Orbits of the Planets',
          artist: 'Erich Buchholz',
          year: '1921',
          rule: {
            "monday": [ 11, 14, 23, 8 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 16, 20, 28, 13 ],
            "thursday": [ 15, 18, 27, 12 ],
            "friday": [ 14, 18, 26, 11 ],
            "saturday": [ 13, 17, 25, 10 ],
            "sunday": [ 12, 16, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/apollo-1923.jpg',
          title: 'Apollo',
          artist: 'Willi Baumeister',
          year: '1923',
          rule: {
            "monday": [ 12, 16, 24, 9 ],
            "tuesday": [ 11, 14, 23, 8 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 16, 20, 28, 13 ],
            "friday": [ 15, 18, 27, 12 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 17, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/composition-1936.jpg',
          title: 'Composition',
          artist: 'Karl Knaths',
          year: '1936',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 14, 23, 8 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 18, 27, 12 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-sleeping-gypsy-1897.jpg',
          title: 'The Sleeping Gypsy',
          artist: 'Henri Rousseau',
          year: '1897',
          rule: {
            "monday": [ 15, 19, 27, 12 ],
            "tuesday": [ 14, 18, 26, 11 ],
            "wednesday": [ 13, 17, 25, 10 ],
            "thursday": [ 12, 15, 24, 9 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 17, 21, 29, 14 ],
            "sunday": [ 16, 19, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/fire-swept-algoma-1920.jpg',
          title: 'Fire Swept Algoma',
          artist: 'Frank Johnston',
          year: '1920',
          rule: {
            "monday": [ 16, 19, 28, 13 ],
            "tuesday": [ 15, 19, 27, 12 ],
            "wednesday": [ 14, 18, 26, 11 ],
            "thursday": [ 13, 17, 25, 10 ],
            "friday": [ 12, 15, 24, 9 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 17, 21, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/castle-and-sun-1928.jpg',
          title: 'Castle and Sun',
          artist: 'Paul Klee',
          year: '1928',
          rule: {
            "monday": [ 17, 21, 29, 14 ],
            "tuesday": [ 16, 19, 28, 13 ],
            "wednesday": [ 15, 19, 27, 12 ],
            "thursday": [ 14, 18, 26, 11 ],
            "friday": [ 13, 17, 25, 10 ],
            "saturday": [ 12, 15, 24, 9 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-dancer-1938.jpg',
          title: 'he Dancer',
          artist: 'Greta Freist',
          year: '1938',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 17, 21, 29, 14 ],
            "wednesday": [ 16, 19, 28, 13 ],
            "thursday": [ 15, 19, 27, 12 ],
            "friday": [ 14, 18, 26, 11 ],
            "saturday": [ 13, 17, 25, 10 ],
            "sunday": [ 12, 15, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/la-rentr-e-1927.jpg',
          title: 'La rentrée',
          artist: 'Anita Malfatti',
          year: '1927',
          rule: {
            "monday": [ 12, 15, 24, 9 ],
            "tuesday": [ 11, 15, 23, 8 ],
            "wednesday": [ 17, 21, 29, 14 ],
            "thursday": [ 16, 19, 28, 13 ],
            "friday": [ 15, 19, 27, 12 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 17, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/workshop-1915.jpg',
          title: 'Workshop',
          artist: 'Wyndham Lewis',
          year: '1915',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 15, 24, 9 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 17, 21, 29, 14 ],
            "friday": [ 16, 19, 28, 13 ],
            "saturday": [ 15, 19, 27, 12 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/automat-1927.jpg',
          title: 'Automat',
          artist: 'Edward Hopper',
          year: '1927',
          rule: {
            "monday": [ 14, 18, 26, 11 ],
            "tuesday": [ 13, 17, 25, 10 ],
            "wednesday": [ 12, 15, 24, 9 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 17, 21, 29, 14 ],
            "saturday": [ 16, 19, 28, 13 ],
            "sunday": [ 15, 19, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/balchik-beach-1926.jpg',
          title: 'Balchik Beach',
          artist: 'Stefan Dimitrescu',
          year: '1926',
          rule: {
            "monday": [ 16, 20, 28, 13 ],
            "tuesday": [ 15, 19, 27, 12 ],
            "wednesday": [ 14, 18, 26, 11 ],
            "thursday": [ 13, 16, 25, 10 ],
            "friday": [ 12, 15, 24, 9 ],
            "saturday": [ 18, 22, 30, 15 ],
            "sunday": [ 17, 20, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/composition-avec-7-tubes-1925.jpg',
          title: 'Composition avec 7 tubes',
          artist: 'Gustave Buchet',
          year: '1925',
          rule: {
            "monday": [ 17, 20, 29, 14 ],
            "tuesday": [ 16, 20, 28, 13 ],
            "wednesday": [ 15, 19, 27, 12 ],
            "thursday": [ 14, 18, 26, 11 ],
            "friday": [ 13, 16, 25, 10 ],
            "saturday": [ 12, 15, 24, 9 ],
            "sunday": [ 18, 22, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/futuristic-woman-1911.jpg',
          title: 'Futuristic woman',
          artist: 'David Burliuk',
          year: '1911',
          rule: {
            "monday": [ 18, 22, 30, 15 ],
            "tuesday": [ 17, 20, 29, 14 ],
            "wednesday": [ 16, 20, 28, 13 ],
            "thursday": [ 15, 19, 27, 12 ],
            "friday": [ 14, 18, 26, 11 ],
            "saturday": [ 13, 16, 25, 10 ],
            "sunday": [ 12, 15, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/tuning-saws-1927.jpg',
          title: 'Tuning saws',
          artist: 'Oleksandr Bogomazov',
          year: '1927',
          rule: {
            "monday": [ 12, 15, 24, 9 ],
            "tuesday": [ 18, 22, 30, 15 ],
            "wednesday": [ 17, 20, 29, 14 ],
            "thursday": [ 16, 20, 28, 13 ],
            "friday": [ 15, 19, 27, 12 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 16, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/sunrise-1924.jpg',
          title: 'Sunrise',
          artist: 'Arthur Dove',
          year: '1924',
          rule: {
            "monday": [ 13, 16, 25, 10 ],
            "tuesday": [ 12, 15, 24, 9 ],
            "wednesday": [ 18, 22, 30, 15 ],
            "thursday": [ 17, 20, 29, 14 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 19, 27, 12 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/bullfighting-amateur-1910.jpg',
          title: 'Bullfighting amateur',
          artist: 'Pyotr Konchalovsky',
          year: '1910',
          rule: {
            "monday": [ 14, 18, 26, 11 ],
            "tuesday": [ 13, 16, 25, 10 ],
            "wednesday": [ 12, 15, 24, 9 ],
            "thursday": [ 18, 22, 30, 15 ],
            "friday": [ 17, 20, 29, 14 ],
            "saturday": [ 16, 20, 28, 13 ],
            "sunday": [ 15, 19, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/radha-s-vihara-1936.jpg',
          title: 'Radha\'s Vihara',
          artist: 'Nandalal Bose',
          year: '1936',
          rule: {
            "monday": [ 15, 19, 27, 12 ],
            "tuesday": [ 14, 18, 26, 11 ],
            "wednesday": [ 13, 16, 25, 10 ],
            "thursday": [ 12, 15, 24, 9 ],
            "friday": [ 18, 22, 30, 15 ],
            "saturday": [ 17, 20, 29, 14 ],
            "sunday": [ 16, 20, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/grand-musicien-1920.jpg',
          title: 'Grand musicien',
          artist: 'Georges Ribemont-Dessaignes',
          year: '1920',
          rule: {
            "monday": [ 17, 21, 29, 14 ],
            "tuesday": [ 16, 20, 28, 13 ],
            "wednesday": [ 15, 19, 27, 12 ],
            "thursday": [ 14, 17, 26, 11 ],
            "friday": [ 13, 16, 25, 10 ],
            "saturday": [ 19, 23, 31, 16 ],
            "sunday": [ 18, 21, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/cinco-mo-as-de-guaratinguet-1930.jpg',
          title: 'Cinco Moças de Guaratinguetá',
          artist: 'Emiliano Di Cavalcanti',
          year: '1930',
          rule: {
            "monday": [ 18, 21, 30, 15 ],
            "tuesday": [ 17, 21, 29, 14 ],
            "wednesday": [ 16, 20, 28, 13 ],
            "thursday": [ 15, 19, 27, 12 ],
            "friday": [ 14, 17, 26, 11 ],
            "saturday": [ 13, 16, 25, 10 ],
            "sunday": [ 19, 23, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/lumberjack.jpg',
          title: 'Lumberjack',
          artist: 'Oleksandr Bogomazov',
          year: 'c.1913',
          rule: {
            "monday": [ 19, 23, 31, 16 ],
            "tuesday": [ 18, 21, 30, 15 ],
            "wednesday": [ 17, 21, 29, 14 ],
            "thursday": [ 16, 20, 28, 13 ],
            "friday": [ 15, 19, 27, 12 ],
            "saturday": [ 14, 17, 26, 11 ],
            "sunday": [ 13, 16, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/adam-and-eve-1938.jpg',
          title: 'Adam and Eve',
          artist: 'Andre Bauchant',
          year: '1938',
          rule: {
            "monday": [ 13, 16, 25, 10 ],
            "tuesday": [ 19, 23, 31, 16 ],
            "wednesday": [ 18, 21, 30, 15 ],
            "thursday": [ 17, 21, 29, 14 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 19, 27, 12 ],
            "sunday": [ 14, 17, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-mermaid-1910.jpg',
          title: 'The Mermaid',
          artist: 'Howard Pyle',
          year: '1910',
          rule: {
            "monday": [ 14, 17, 26, 11 ],
            "tuesday": [ 13, 16, 25, 10 ],
            "wednesday": [ 19, 23, 31, 16 ],
            "thursday": [ 18, 21, 30, 15 ],
            "friday": [ 17, 21, 29, 14 ],
            "saturday": [ 16, 20, 28, 13 ],
            "sunday": [ 15, 19, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/they-tens-mainstay-iv-1907.jpg',
          title: 'They tens mainstay IV',
          artist: 'Hilma af Klint',
          year: '1907',
          rule: {
            "monday": [ 15, 19, 27, 12 ],
            "tuesday": [ 14, 17, 26, 11 ],
            "wednesday": [ 13, 16, 25, 10 ],
            "thursday": [ 19, 23, 31, 16 ],
            "friday": [ 18, 21, 30, 15 ],
            "saturday": [ 17, 21, 29, 14 ],
            "sunday": [ 16, 20, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/girl-on-a-hill-1928.jpg',
          title: 'Girl on a Hill',
          artist: 'Prudence Heward',
          year: '1928',
          rule: {
            "monday": [ 16, 20, 28, 13 ],
            "tuesday": [ 15, 19, 27, 12 ],
            "wednesday": [ 14, 17, 26, 11 ],
            "thursday": [ 13, 16, 25, 10 ],
            "friday": [ 19, 23, 31, 16 ],
            "saturday": [ 18, 21, 30, 15 ],
            "sunday": [ 17, 21, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/into-the-world-there-came-a-soul-called-ida-1930.jpg',
          title: 'Into the World There Came a Soul Called Ida',
          artist: 'Ivan Albright',
          year: '1929 - 1930',
          rule: {
            "monday": [ 18, 22, 30, 15 ],
            "tuesday": [ 17, 21, 29, 14 ],
            "wednesday": [ 16, 20, 28, 13 ],
            "thursday": [ 15, 18, 27, 12 ],
            "friday": [ 14, 17, 26, 11 ],
            "saturday": [ 20, 24, 1, 17 ],
            "sunday": [ 19, 22, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/early-spring-illustration-to-a-poem-by-rainer-maria-rilke-1901-1.jpg',
          title: 'Early spring. Illustration to a poem by Rainer Maria Rilke.',
          artist: 'Koloman Moser',
          year: '1901',
          rule: {
            "monday": [ 19, 22, 31, 16 ],
            "tuesday": [ 18, 22, 30, 15 ],
            "wednesday": [ 17, 21, 29, 14 ],
            "thursday": [ 16, 20, 28, 13 ],
            "friday": [ 15, 18, 27, 12 ],
            "saturday": [ 14, 17, 26, 11 ],
            "sunday": [ 20, 24, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/three-girls-1935.jpg',
          title: 'Three Girls',
          artist: 'Amrita Sher-Gil',
          year: '1935',
          rule: {
            "monday": [ 20, 24, 1, 17 ],
            "tuesday": [ 19, 22, 31, 16 ],
            "wednesday": [ 18, 22, 30, 15 ],
            "thursday": [ 17, 21, 29, 14 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 18, 27, 12 ],
            "sunday": [ 14, 17, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/composition-1922-2.jpg',
          title: 'Composition',
          artist: 'Janos Mattis-Teutsch',
          year: '1922',
          rule: {
            "monday": [ 14, 17, 26, 11 ],
            "tuesday": [ 20, 24, 1, 17 ],
            "wednesday": [ 19, 22, 31, 16 ],
            "thursday": [ 18, 22, 30, 15 ],
            "friday": [ 17, 21, 29, 14 ],
            "saturday": [ 16, 20, 28, 13 ],
            "sunday": [ 15, 18, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/color-study-squares-with-concentric-circles-1913(1).jpg',
          title: 'Color Study: Squares with Concentric Circles',
          artist: 'Wassily Kandinsky',
          year: 'c.1913',
          rule: {
            "monday": [ 15, 18, 27, 12 ],
            "tuesday": [ 14, 17, 26, 11 ],
            "wednesday": [ 20, 24, 1, 17 ],
            "thursday": [ 19, 22, 31, 16 ],
            "friday": [ 18, 22, 30, 15 ],
            "saturday": [ 17, 21, 29, 14 ],
            "sunday": [ 16, 20, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/portrait-of-lajos-kass-k-1920.jpg',
          title: 'Portrait of Lajos Kassák',
          artist: 'Sandor Bortnyik',
          year: '1920',
          rule: {
            "monday": [ 16, 20, 28, 13 ],
            "tuesday": [ 15, 18, 27, 12 ],
            "wednesday": [ 14, 17, 26, 11 ],
            "thursday": [ 20, 24, 1, 17 ],
            "friday": [ 19, 22, 31, 16 ],
            "saturday": [ 18, 22, 30, 15 ],
            "sunday": [ 17, 21, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/cover-for-a-book-by-julian-przybo-z-ponad-1930.jpg',
          title: 'Cover for a book by Julian Przyboś, Z ponad',
          artist: 'Wladyslaw Strzeminski',
          year: '1930',
          rule: {
            "monday": [ 17, 21, 29, 14 ],
            "tuesday": [ 16, 20, 28, 13 ],
            "wednesday": [ 15, 18, 27, 12 ],
            "thursday": [ 14, 17, 26, 11 ],
            "friday": [ 20, 24, 1, 17 ],
            "saturday": [ 19, 22, 31, 16 ],
            "sunday": [ 18, 22, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/l-annonce-de-l-hiver-1935.jpg',
          title: 'L\'annonce de l\'hiver',
          artist: 'Francis Gruber',
          year: '1935',
          rule: {
            "monday": [ 19, 23, 31, 16 ],
            "tuesday": [ 18, 22, 30, 15 ],
            "wednesday": [ 17, 21, 29, 14 ],
            "thursday": [ 16, 19, 28, 13 ],
            "friday": [ 15, 18, 27, 12 ],
            "saturday": [ 21, 25, 2, 18 ],
            "sunday": [ 20, 23, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/telephone-1916.jpg',
          title: 'Telephone',
          artist: 'Morton Shamberg',
          year: '1916',
          rule: {
            "monday": [ 20, 23, 1, 17 ],
            "tuesday": [ 19, 23, 31, 16 ],
            "wednesday": [ 18, 22, 30, 15 ],
            "thursday": [ 17, 21, 29, 14 ],
            "friday": [ 16, 19, 28, 13 ],
            "saturday": [ 15, 18, 27, 12 ],
            "sunday": [ 21, 25, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/harvest-1933.jpg',
          title: 'Harvest',
          artist: 'Karl Knaths',
          year: '1933',
          rule: {
            "monday": [ 21, 25, 2, 18 ],
            "tuesday": [ 20, 23, 1, 17 ],
            "wednesday": [ 19, 23, 31, 16 ],
            "thursday": [ 18, 22, 30, 15 ],
            "friday": [ 17, 21, 29, 14 ],
            "saturday": [ 16, 19, 28, 13 ],
            "sunday": [ 15, 18, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/northern-lights-1917.jpg',
          title: 'Northern Lights',
          artist: 'Tom Thomson',
          year: '1917',
          rule: {
            "monday": [ 15, 18, 27, 12 ],
            "tuesday": [ 21, 25, 2, 18 ],
            "wednesday": [ 20, 23, 1, 17 ],
            "thursday": [ 19, 23, 31, 16 ],
            "friday": [ 18, 22, 30, 15 ],
            "saturday": [ 17, 21, 29, 14 ],
            "sunday": [ 16, 19, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/synchromy-1916.jpg',
          title: 'Synchromy',
          artist: 'Morgan Russell',
          year: '1916',
          rule: {
            "monday": [ 16, 19, 28, 13 ],
            "tuesday": [ 15, 18, 27, 12 ],
            "wednesday": [ 21, 25, 2, 18 ],
            "thursday": [ 20, 23, 1, 17 ],
            "friday": [ 19, 23, 31, 16 ],
            "saturday": [ 18, 22, 30, 15 ],
            "sunday": [ 17, 21, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/morning-after-snowstorm-1913.jpg',
          title: 'Morning in the Village after Snowstorm',
          artist: 'Kazimir Malevich',
          year: '1913',
          rule: {
            "monday": [ 17, 21, 29, 14 ],
            "tuesday": [ 16, 19, 28, 13 ],
            "wednesday": [ 15, 18, 27, 12 ],
            "thursday": [ 21, 25, 2, 18 ],
            "friday": [ 20, 23, 1, 17 ],
            "saturday": [ 19, 23, 31, 16 ],
            "sunday": [ 18, 22, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/red-muslin-1931.jpg',
          title: 'Red Muslin',
          artist: 'Ion Theodorescu-Sion',
          year: '1931',
          rule: {
            "monday": [ 18, 22, 30, 15 ],
            "tuesday": [ 17, 21, 29, 14 ],
            "wednesday": [ 16, 19, 28, 13 ],
            "thursday": [ 15, 18, 27, 12 ],
            "friday": [ 21, 25, 2, 18 ],
            "saturday": [ 20, 23, 1, 17 ],
            "sunday": [ 19, 23, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/archers-1937.jpg',
          title: 'Archers',
          artist: 'Ernst Ludwig Kirchner',
          year: '1935 - 1937',
          rule: {
            "monday": [ 20, 24, 1, 17 ],
            "tuesday": [ 19, 23, 31, 16 ],
            "wednesday": [ 18, 20, 30, 15 ],
            "thursday": [ 17, 20, 29, 14 ],
            "friday": [ 16, 19, 28, 13 ],
            "saturday": [ 22, 26, 3, 19 ],
            "sunday": [ 21, 24, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/1919-alarm-1934.jpg',
          title: '1919. Alarm',
          artist: 'Kuzma Petrov-Vodkin',
          year: '1934',
          rule: {
            "monday": [ 21, 24, 2, 18 ],
            "tuesday": [ 20, 24, 1, 17 ],
            "wednesday": [ 19, 23, 31, 16 ],
            "thursday": [ 18, 20, 30, 15 ],
            "friday": [ 17, 20, 29, 14 ],
            "saturday": [ 16, 19, 28, 13 ],
            "sunday": [ 22, 26, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/untitled-1930.jpg',
          title: 'Untitled',
          artist: 'William Baziotes',
          year: '1930',
          rule: {
            "monday": [ 22, 26, 3, 19 ],
            "tuesday": [ 21, 24, 2, 18 ],
            "wednesday": [ 20, 24, 1, 17 ],
            "thursday": [ 19, 23, 31, 16 ],
            "friday": [ 18, 20, 30, 15 ],
            "saturday": [ 17, 20, 29, 14 ],
            "sunday": [ 16, 19, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/dance-around-the-golden-calf-1910.jpg',
          title: 'Dance Around the Golden Calf',
          artist: 'Emil Nolde',
          year: '1910',
          rule: {
            "monday": [ 16, 19, 28, 13 ],
            "tuesday": [ 22, 26, 3, 19 ],
            "wednesday": [ 21, 24, 2, 18 ],
            "thursday": [ 20, 24, 1, 17 ],
            "friday": [ 19, 23, 31, 16 ],
            "saturday": [ 18, 20, 30, 15 ],
            "sunday": [ 17, 20, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-riding-crop-1928.jpg',
          title: 'The Riding Crop',
          artist: 'Jean Dupas',
          year: '1928',
          rule: {
            "monday": [ 17, 20, 29, 14 ],
            "tuesday": [ 16, 19, 28, 13 ],
            "wednesday": [ 22, 26, 3, 19 ],
            "thursday": [ 21, 24, 2, 18 ],
            "friday": [ 20, 24, 1, 17 ],
            "saturday": [ 19, 23, 31, 16 ],
            "sunday": [ 18, 20, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/autumn-1913.jpg',
          title: 'Autumn',
          artist: 'Rik Wouters',
          year: '1913',
          rule: {
            "monday": [ 18, 20, 30, 15 ],
            "tuesday": [ 17, 20, 29, 14 ],
            "wednesday": [ 16, 19, 28, 13 ],
            "thursday": [ 22, 26, 3, 19 ],
            "friday": [ 21, 24, 2, 18 ],
            "saturday": [ 20, 24, 1, 17 ],
            "sunday": [ 19, 23, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/mystical-crucifixion-1928.jpg',
          title: 'Mystical Crucifixion',
          artist: 'Heinrich Campendonk',
          year: '1928',
          rule: {
            "monday": [ 19, 23, 31, 16 ],
            "tuesday": [ 18, 20, 30, 15 ],
            "wednesday": [ 17, 20, 29, 14 ],
            "thursday": [ 16, 19, 28, 13 ],
            "friday": [ 22, 26, 3, 19 ],
            "saturday": [ 21, 24, 2, 18 ],
            "sunday": [ 20, 24, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/portrait-of-a-chamorro-woman-yellow-1934.jpg',
          title: 'Portrait of a Chamorro Woman - Yellow',
          artist: 'Paul Jacoulet',
          year: '1934',
          rule: {
            "monday": [ 21, 25, 2, 18 ],
            "tuesday": [ 20, 24, 1, 17 ],
            "wednesday": [ 19, 21, 31, 16 ],
            "thursday": [ 18, 21, 30, 15 ],
            "friday": [ 17, 20, 29, 14 ],
            "saturday": [ 23, 27, 4, 20 ],
            "sunday": [ 22, 25, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/stilleben-med-fisk-1926.jpg',
          title: 'Stilleben med fisk',
          artist: 'Sven Jonson',
          year: '1926',
          rule: {
            "monday": [ 22, 25, 3, 19 ],
            "tuesday": [ 21, 25, 2, 18 ],
            "wednesday": [ 20, 24, 1, 17 ],
            "thursday": [ 19, 21, 31, 16 ],
            "friday": [ 18, 21, 30, 15 ],
            "saturday": [ 17, 20, 29, 14 ],
            "sunday": [ 23, 27, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/yawls-in-the-lagoon-1924.jpg',
          title: 'Yawls in the Lagoon',
          artist: 'Stefan Popescu',
          year: '1924',
          rule: {
            "monday": [ 23, 27, 4, 20 ],
            "tuesday": [ 22, 25, 3, 19 ],
            "wednesday": [ 21, 25, 2, 18 ],
            "thursday": [ 20, 24, 1, 17 ],
            "friday": [ 19, 21, 31, 16 ],
            "saturday": [ 18, 21, 30, 15 ],
            "sunday": [ 17, 20, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/schonberg-family(1).jpg',
          title: 'Schonberg Family',
          artist: 'Richard Gerstl',
          year: '1908',
          rule: {
            "monday": [ 17, 20, 29, 14 ],
            "tuesday": [ 23, 27, 4, 20 ],
            "wednesday": [ 22, 25, 3, 19 ],
            "thursday": [ 21, 25, 2, 18 ],
            "friday": [ 20, 24, 1, 17 ],
            "saturday": [ 19, 21, 31, 16 ],
            "sunday": [ 18, 21, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/harbor-night-1937.jpg',
          title: 'Harbor Night',
          artist: 'Charles Reiffel',
          year: '1937',
          rule: {
            "monday": [ 18, 21, 30, 15 ],
            "tuesday": [ 17, 20, 29, 14 ],
            "wednesday": [ 23, 27, 4, 20 ],
            "thursday": [ 22, 25, 3, 19 ],
            "friday": [ 21, 25, 2, 18 ],
            "saturday": [ 20, 24, 1, 17 ],
            "sunday": [ 19, 21, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/civiliza-o-no-2-1928.jpg',
          title: 'Civilização, No. 2',
          artist: 'Bernardo Marques',
          year: '1928',
          rule: {
            "monday": [ 19, 21, 31, 16 ],
            "tuesday": [ 18, 21, 30, 15 ],
            "wednesday": [ 17, 20, 29, 14 ],
            "thursday": [ 23, 27, 4, 20 ],
            "friday": [ 22, 25, 3, 19 ],
            "saturday": [ 21, 25, 2, 18 ],
            "sunday": [ 20, 24, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/untitled-blue-man-on-red-object-1939.jpg',
          title: 'Untitled (Blue Man on Red Object)',
          artist: 'Bill Traylor',
          year: 'c.1939',
          rule: {
            "monday": [ 20, 24, 1, 17 ],
            "tuesday": [ 19, 21, 31, 16 ],
            "wednesday": [ 18, 21, 30, 15 ],
            "thursday": [ 17, 20, 29, 14 ],
            "friday": [ 23, 27, 4, 20 ],
            "saturday": [ 22, 25, 3, 19 ],
            "sunday": [ 21, 25, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/soria-moria-slott-1911.jpg',
          title: 'Soria Moria Slott',
          artist: 'Theodor Severin Kittelsen',
          year: '1911',
          rule: {
            "monday": [ 22, 26, 3, 19 ],
            "tuesday": [ 21, 25, 2, 18 ],
            "wednesday": [ 20, 22, 1, 17 ],
            "thursday": [ 19, 22, 31, 16 ],
            "friday": [ 18, 21, 30, 15 ],
            "saturday": [ 24, 28, 5, 21 ],
            "sunday": [ 23, 26, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/komposition-1917.jpg',
          title: 'Komposition',
          artist: 'Gosta Adrian-Nilsson',
          year: '1917',
          rule: {
            "monday": [ 23, 26, 4, 20 ],
            "tuesday": [ 22, 26, 3, 19 ],
            "wednesday": [ 21, 25, 2, 18 ],
            "thursday": [ 20, 22, 1, 17 ],
            "friday": [ 19, 22, 31, 16 ],
            "saturday": [ 18, 21, 30, 15 ],
            "sunday": [ 24, 28, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/kopf-1919.jpg',
          title: 'Kopf',
          artist: 'Oskar Schlemmer',
          year: '1919',
          rule: {
            "monday": [ 24, 28, 5, 21 ],
            "tuesday": [ 23, 26, 4, 20 ],
            "wednesday": [ 22, 26, 3, 19 ],
            "thursday": [ 21, 25, 2, 18 ],
            "friday": [ 20, 22, 1, 17 ],
            "saturday": [ 19, 22, 31, 16 ],
            "sunday": [ 18, 21, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/to-the-parnassus-1932(2).jpg',
          title: 'Ad Parnassum',
          artist: 'Paul Klee',
          year: '1932',
          rule: {
            "monday": [ 18, 21, 30, 15 ],
            "tuesday": [ 24, 28, 5, 21 ],
            "wednesday": [ 23, 26, 4, 20 ],
            "thursday": [ 22, 26, 3, 19 ],
            "friday": [ 21, 25, 2, 18 ],
            "saturday": [ 20, 22, 1, 17 ],
            "sunday": [ 19, 22, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-sea-1937.jpg',
          title: 'The Sea',
          artist: 'Koshiro Onchi',
          year: '1937',
          rule: {
            "monday": [ 19, 22, 31, 16 ],
            "tuesday": [ 18, 21, 30, 15 ],
            "wednesday": [ 24, 28, 5, 21 ],
            "thursday": [ 23, 26, 4, 20 ],
            "friday": [ 22, 26, 3, 19 ],
            "saturday": [ 21, 25, 2, 18 ],
            "sunday": [ 20, 22, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/a-townscene-with-children-at-play-haarlem-1930.jpg',
          title: 'A Townscene With Children At Play, Haarlem',
          artist: 'Cornelis Vreedenburgh',
          year: '1930',
          rule: {
            "monday": [ 20, 22, 1, 17 ],
            "tuesday": [ 19, 22, 31, 16 ],
            "wednesday": [ 18, 21, 30, 15 ],
            "thursday": [ 24, 28, 5, 21 ],
            "friday": [ 23, 26, 4, 20 ],
            "saturday": [ 22, 26, 3, 19 ],
            "sunday": [ 21, 25, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/bathers-1928.jpg',
          title: 'Bathers',
          artist: 'Koshiro Onchi',
          year: '1928',
          rule: {
            "monday": [ 21, 25, 2, 18 ],
            "tuesday": [ 20, 22, 1, 17 ],
            "wednesday": [ 19, 22, 31, 16 ],
            "thursday": [ 18, 21, 30, 15 ],
            "friday": [ 24, 28, 5, 21 ],
            "saturday": [ 23, 26, 4, 20 ],
            "sunday": [ 22, 26, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/barges-1919.jpg',
          title: 'Barges',
          artist: 'David Bomberg',
          year: '1919',
          rule: {
            "monday": [ 23, 27, 4, 20 ],
            "tuesday": [ 22, 26, 3, 19 ],
            "wednesday": [ 21, 23, 2, 18 ],
            "thursday": [ 20, 23, 1, 17 ],
            "friday": [ 19, 22, 31, 16 ],
            "saturday": [ 25, 29, 6, 22 ],
            "sunday": [ 24, 27, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/la-libra-s-infiamma-e-le-piramidi-1921.jpg',
          title: 'La libra s\'infiamma e le piramidi',
          artist: 'Julius Evola',
          year: '1921',
          rule: {
            "monday": [ 24, 27, 5, 21 ],
            "tuesday": [ 23, 27, 4, 20 ],
            "wednesday": [ 22, 26, 3, 19 ],
            "thursday": [ 21, 23, 2, 18 ],
            "friday": [ 20, 23, 1, 17 ],
            "saturday": [ 19, 22, 31, 16 ],
            "sunday": [ 25, 29, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/asoka-s-queen-1910.jpg',
          title: 'Asoka\'s Queen',
          artist: 'Abanindranath Tagore',
          year: '1910',
          rule: {
            "monday": [ 25, 29, 6, 22 ],
            "tuesday": [ 24, 27, 5, 21 ],
            "wednesday": [ 23, 27, 4, 20 ],
            "thursday": [ 22, 26, 3, 19 ],
            "friday": [ 21, 23, 2, 18 ],
            "saturday": [ 20, 23, 1, 17 ],
            "sunday": [ 19, 22, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/girl-with-a-milk-can-1917.jpg',
          title: 'Girl with a Milk Can',
          artist: 'Boris Grigoriev',
          year: '1917',
          rule: {
            "monday": [ 19, 22, 31, 16 ],
            "tuesday": [ 25, 29, 6, 22 ],
            "wednesday": [ 24, 27, 5, 21 ],
            "thursday": [ 23, 27, 4, 20 ],
            "friday": [ 22, 26, 3, 19 ],
            "saturday": [ 21, 23, 2, 18 ],
            "sunday": [ 20, 23, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/blue-red-composition-1919.jpg',
          title: 'Blue-Red Composition',
          artist: 'Sandor Bortnyik',
          year: '1919',
          rule: {
            "monday": [ 20, 23, 1, 17 ],
            "tuesday": [ 19, 22, 31, 16 ],
            "wednesday": [ 25, 29, 6, 22 ],
            "thursday": [ 24, 27, 5, 21 ],
            "friday": [ 23, 27, 4, 20 ],
            "saturday": [ 22, 26, 3, 19 ],
            "sunday": [ 21, 23, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/composition-1938.jpg',
          title: 'Composition',
          artist: 'Otto Freundlich',
          year: '1938',
          rule: {
            "monday": [ 21, 23, 2, 18 ],
            "tuesday": [ 20, 23, 1, 17 ],
            "wednesday": [ 19, 22, 31, 16 ],
            "thursday": [ 25, 29, 6, 22 ],
            "friday": [ 24, 27, 5, 21 ],
            "saturday": [ 23, 27, 4, 20 ],
            "sunday": [ 22, 26, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/hygeia-detail-of-medicine-1907.jpg',
          title: 'University of Vienna Ceiling Paintings (Medicine), detail showing Hygieia',
          artist: 'Gustav Klimt',
          year: '1900 - 1907',
          rule: {
            "monday": [ 22, 26, 3, 19 ],
            "tuesday": [ 21, 23, 2, 18 ],
            "wednesday": [ 20, 23, 1, 17 ],
            "thursday": [ 19, 22, 31, 16 ],
            "friday": [ 25, 29, 6, 22 ],
            "saturday": [ 24, 27, 5, 21 ],
            "sunday": [ 23, 27, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/composition-abstraite-1926.jpg',
          title: 'Composition abstraite',
          artist: 'Marcelle Cahn',
          year: '1926',
          rule: {
            "monday": [ 24, 28, 5, 21 ],
            "tuesday": [ 23, 27, 4, 20 ],
            "wednesday": [ 22, 24, 3, 19 ],
            "thursday": [ 21, 24, 2, 18 ],
            "friday": [ 20, 23, 1, 17 ],
            "saturday": [ 26, 30, 7, 23 ],
            "sunday": [ 25, 28, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/water-lily-pond-1.jpg',
          title: 'Water Lily Pond',
          artist: 'Claude Monet',
          year: '1917',
          rule: {
            "monday": [ 25, 28, 6, 22 ],
            "tuesday": [ 24, 28, 5, 21 ],
            "wednesday": [ 23, 27, 4, 20 ],
            "thursday": [ 22, 24, 3, 19 ],
            "friday": [ 21, 24, 2, 18 ],
            "saturday": [ 20, 23, 1, 17 ],
            "sunday": [ 26, 30, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/zebra-and-parachute-1930.jpg',
          title: 'Zebra and Parachute',
          artist: 'Christopher Wood',
          year: '1930',
          rule: {
            "monday": [ 26, 30, 7, 23 ],
            "tuesday": [ 25, 28, 6, 22 ],
            "wednesday": [ 24, 28, 5, 21 ],
            "thursday": [ 23, 27, 4, 20 ],
            "friday": [ 22, 24, 3, 19 ],
            "saturday": [ 21, 24, 2, 18 ],
            "sunday": [ 20, 23, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/fakiristes-1937.jpg',
          title: 'Fakiristes',
          artist: 'Louis Soutter',
          year: '1937',
          rule: {
            "monday": [ 20, 23, 1, 17 ],
            "tuesday": [ 26, 30, 7, 23 ],
            "wednesday": [ 25, 28, 6, 22 ],
            "thursday": [ 24, 28, 5, 21 ],
            "friday": [ 23, 27, 4, 20 ],
            "saturday": [ 22, 24, 3, 19 ],
            "sunday": [ 21, 24, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/self-portrait-in-a-letter-to-paul-val-ry-1924.jpg',
          title: 'Self-Portrait in a letter to Paul Valéry',
          artist: 'Jean Cocteau',
          year: '1924',
          rule: {
            "monday": [ 21, 24, 2, 18 ],
            "tuesday": [ 20, 23, 1, 17 ],
            "wednesday": [ 26, 30, 7, 23 ],
            "thursday": [ 25, 28, 6, 22 ],
            "friday": [ 24, 28, 5, 21 ],
            "saturday": [ 23, 27, 4, 20 ],
            "sunday": [ 22, 24, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/study-for-a-portrait-of-jean-dupr-1913.jpg',
          title: 'Study for a portrait of Jean Dupré',
          artist: 'Félix Del Marle',
          year: '1913',
          rule: {
            "monday": [ 22, 24, 3, 19 ],
            "tuesday": [ 21, 24, 2, 18 ],
            "wednesday": [ 20, 23, 1, 17 ],
            "thursday": [ 26, 30, 7, 23 ],
            "friday": [ 25, 28, 6, 22 ],
            "saturday": [ 24, 28, 5, 21 ],
            "sunday": [ 23, 27, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/old-woman-in-the-garden-1906.jpg',
          title: 'Old Woman in the Garden',
          artist: 'Paula Modersohn-Becker',
          year: '1906',
          rule: {
            "monday": [ 23, 27, 4, 20 ],
            "tuesday": [ 22, 24, 3, 19 ],
            "wednesday": [ 21, 24, 2, 18 ],
            "thursday": [ 20, 23, 1, 17 ],
            "friday": [ 26, 30, 7, 23 ],
            "saturday": [ 25, 28, 6, 22 ],
            "sunday": [ 24, 28, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/ahinora-1925.jpg',
          title: 'Ahinora',
          artist: 'Ivan Milev',
          year: '1925',
          rule: {
            "monday": [ 25, 29, 6, 22 ],
            "tuesday": [ 24, 28, 5, 21 ],
            "wednesday": [ 23, 25, 4, 20 ],
            "thursday": [ 22, 25, 3, 19 ],
            "friday": [ 21, 24, 2, 18 ],
            "saturday": [ 27, 31, 8, 24 ],
            "sunday": [ 26, 29, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/still-life-with-lobster-and-radishes-1938.jpg',
          title: 'Still-life with Lobster and Radishes',
          artist: 'Cagnaccio di San Pietro',
          year: '1938',
          rule: {
            "monday": [ 26, 29, 7, 23 ],
            "tuesday": [ 25, 29, 6, 22 ],
            "wednesday": [ 24, 28, 5, 21 ],
            "thursday": [ 23, 25, 4, 20 ],
            "friday": [ 22, 25, 3, 19 ],
            "saturday": [ 21, 24, 2, 18 ],
            "sunday": [ 27, 31, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/berlin-street-scene-1914.jpg',
          title: 'Berlin Street Scene',
          artist: 'Ernst Ludwig Kirchner',
          year: '1913 - 1914',
          rule: {
            "monday": [ 27, 31, 8, 24 ],
            "tuesday": [ 26, 29, 7, 23 ],
            "wednesday": [ 25, 29, 6, 22 ],
            "thursday": [ 24, 28, 5, 21 ],
            "friday": [ 23, 25, 4, 20 ],
            "saturday": [ 22, 25, 3, 19 ],
            "sunday": [ 21, 24, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/dream-1922.jpg',
          title: 'Dream',
          artist: 'Yasuo Kuniyoshi',
          year: '1922',
          rule: {
            "monday": [ 21, 24, 2, 18 ],
            "tuesday": [ 27, 31, 8, 24 ],
            "wednesday": [ 26, 29, 7, 23 ],
            "thursday": [ 25, 29, 6, 22 ],
            "friday": [ 24, 28, 5, 21 ],
            "saturday": [ 23, 25, 4, 20 ],
            "sunday": [ 22, 25, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/blue-rider-1903.jpg',
          title: 'Blue rider',
          artist: 'Wassily Kandinsky',
          year: '1903',
          rule: {
            "monday": [ 22, 25, 3, 19 ],
            "tuesday": [ 21, 24, 2, 18 ],
            "wednesday": [ 27, 31, 8, 24 ],
            "thursday": [ 26, 29, 7, 23 ],
            "friday": [ 25, 29, 6, 22 ],
            "saturday": [ 24, 28, 5, 21 ],
            "sunday": [ 23, 25, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/accordionist-1931.jpg',
          title: 'Accordionist',
          artist: 'Arturo Souto',
          year: '1931',
          rule: {
            "monday": [ 23, 25, 4, 20 ],
            "tuesday": [ 22, 25, 3, 19 ],
            "wednesday": [ 21, 24, 2, 18 ],
            "thursday": [ 27, 31, 8, 24 ],
            "friday": [ 26, 29, 7, 23 ],
            "saturday": [ 25, 29, 6, 22 ],
            "sunday": [ 24, 28, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/lugano-1939.jpg',
          title: 'Lugano',
          artist: 'Francis Bott',
          year: '1939',
          rule: {
            "monday": [ 24, 28, 5, 21 ],
            "tuesday": [ 23, 25, 4, 20 ],
            "wednesday": [ 22, 25, 3, 19 ],
            "thursday": [ 21, 24, 2, 18 ],
            "friday": [ 27, 31, 8, 24 ],
            "saturday": [ 26, 29, 7, 23 ],
            "sunday": [ 25, 29, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/foghorns-1929.jpg',
          title: 'Foghorns',
          artist: 'Arthur Dove',
          year: '1929',
          rule: {
            "monday": [ 26, 30, 7, 23 ],
            "tuesday": [ 25, 29, 6, 22 ],
            "wednesday": [ 24, 26, 5, 21 ],
            "thursday": [ 23, 26, 4, 20 ],
            "friday": [ 22, 25, 3, 19 ],
            "saturday": [ 28, 1, 9, 25 ],
            "sunday": [ 27, 30, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/twittering-machine-1922.jpg',
          title: 'Twittering Machine',
          artist: 'Paul Klee',
          year: '',
          rule: {
            "monday": [ 27, 30, 8, 24 ],
            "tuesday": [ 26, 30, 7, 23 ],
            "wednesday": [ 25, 29, 6, 22 ],
            "thursday": [ 24, 26, 5, 21 ],
            "friday": [ 23, 26, 4, 20 ],
            "saturday": [ 22, 25, 3, 19 ],
            "sunday": [ 28, 1, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/variation-field-of-tulips-1916.jpg',
          title: 'Variation: Field of Tulips',
          artist: 'Alexej von Jawlensky',
          year: '1916',
          rule: {
            "monday": [ 28, 1, 9, 25 ],
            "tuesday": [ 27, 30, 8, 24 ],
            "wednesday": [ 26, 30, 7, 23 ],
            "thursday": [ 25, 29, 6, 22 ],
            "friday": [ 24, 26, 5, 21 ],
            "saturday": [ 23, 26, 4, 20 ],
            "sunday": [ 22, 25, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/landscape-new-mexico-1920-1.jpg',
          title: 'Landscape, New Mexico',
          artist: 'Marsden Hartley',
          year: '1920',
          rule: {
            "monday": [ 22, 25, 3, 19 ],
            "tuesday": [ 28, 1, 9, 25 ],
            "wednesday": [ 27, 30, 8, 24 ],
            "thursday": [ 26, 30, 7, 23 ],
            "friday": [ 25, 29, 6, 22 ],
            "saturday": [ 24, 26, 5, 21 ],
            "sunday": [ 23, 26, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/large-country-petrified-sand-hills-1932.jpg',
          title: 'Large Country—Petrified Sand Hills',
          artist: 'Marsden Hartley',
          year: '1932',
          rule: {
            "monday": [ 23, 26, 4, 20 ],
            "tuesday": [ 22, 25, 3, 19 ],
            "wednesday": [ 28, 1, 9, 25 ],
            "thursday": [ 27, 30, 8, 24 ],
            "friday": [ 26, 30, 7, 23 ],
            "saturday": [ 25, 29, 6, 22 ],
            "sunday": [ 24, 26, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/chaos-nr-2-1906.jpg',
          title: 'Chaos, Nr. 2',
          artist: 'Hilma af Klint',
          year: '1906',
          rule: {
            "monday": [ 24, 26, 5, 21 ],
            "tuesday": [ 23, 26, 4, 20 ],
            "wednesday": [ 22, 25, 3, 19 ],
            "thursday": [ 28, 1, 9, 25 ],
            "friday": [ 27, 30, 8, 24 ],
            "saturday": [ 26, 30, 7, 23 ],
            "sunday": [ 25, 29, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-kiss-1908(1).jpg',
          title: 'The Kiss',
          artist: 'Gustav Klimt',
          year: '1907 - 1908',
          rule: {
            "monday": [ 25, 29, 6, 22 ],
            "tuesday": [ 24, 26, 5, 21 ],
            "wednesday": [ 23, 26, 4, 20 ],
            "thursday": [ 22, 25, 3, 19 ],
            "friday": [ 28, 1, 9, 25 ],
            "saturday": [ 27, 30, 8, 24 ],
            "sunday": [ 26, 30, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/composition-no-15-1925.jpg',
          title: 'Composition No. 15',
          artist: 'Friedrich Vordemberge-Gildewart',
          year: '1925',
          rule: {
            "monday": [ 27, 31, 8, 24 ],
            "tuesday": [ 26, 30, 7, 23 ],
            "wednesday": [ 25, 27, 6, 22 ],
            "thursday": [ 24, 27, 5, 21 ],
            "friday": [ 23, 26, 4, 20 ],
            "saturday": [ 29, 2, 10, 26 ],
            "sunday": [ 28, 31, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/sem-t-tulo-1922.jpg',
          title: 'Sem título',
          artist: 'Bernardo Marques',
          year: '1922',
          rule: {
            "monday": [ 28, 31, 9, 25 ],
            "tuesday": [ 27, 31, 8, 24 ],
            "wednesday": [ 26, 30, 7, 23 ],
            "thursday": [ 25, 27, 6, 22 ],
            "friday": [ 24, 27, 5, 21 ],
            "saturday": [ 23, 26, 4, 20 ],
            "sunday": [ 29, 2, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/untitled-milking-1939.jpg',
          title: 'Untitled (Milking)',
          artist: 'Bill Traylor',
          year: 'c.1939',
          rule: {
            "monday": [ 29, 2, 10, 26 ],
            "tuesday": [ 28, 31, 9, 25 ],
            "wednesday": [ 27, 31, 8, 24 ],
            "thursday": [ 26, 30, 7, 23 ],
            "friday": [ 25, 27, 6, 22 ],
            "saturday": [ 24, 27, 5, 21 ],
            "sunday": [ 23, 26, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/dynamism-of-a-cyclist-1913.jpg',
          title: 'Dynamism of a Cyclist',
          artist: 'Umberto Boccioni',
          year: '1913',
          rule: {
            "monday": [ 23, 26, 4, 20 ],
            "tuesday": [ 29, 2, 10, 26 ],
            "wednesday": [ 28, 31, 9, 25 ],
            "thursday": [ 27, 31, 8, 24 ],
            "friday": [ 26, 30, 7, 23 ],
            "saturday": [ 25, 27, 6, 22 ],
            "sunday": [ 24, 27, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/title-unknown-coty-1917.jpg',
          title: 'Coty',
          artist: 'Amadeo de Souza-Cardoso',
          year: '1917',
          rule: {
            "monday": [ 24, 27, 5, 21 ],
            "tuesday": [ 23, 26, 4, 20 ],
            "wednesday": [ 29, 2, 10, 26 ],
            "thursday": [ 28, 31, 9, 25 ],
            "friday": [ 27, 31, 8, 24 ],
            "saturday": [ 26, 30, 7, 23 ],
            "sunday": [ 25, 27, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/portrait-of-a-young-woman-in-a-hat-jadwiga-zak-1913.jpg',
          title: 'Portrait of a Young Woman in a Hat (Jadwiga Zak)',
          artist: 'Eugeniusz Żak',
          year: '1913',
          rule: {
            "monday": [ 25, 27, 6, 22 ],
            "tuesday": [ 24, 27, 5, 21 ],
            "wednesday": [ 23, 26, 4, 20 ],
            "thursday": [ 29, 2, 10, 26 ],
            "friday": [ 28, 31, 9, 25 ],
            "saturday": [ 27, 31, 8, 24 ],
            "sunday": [ 26, 30, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/hills-with-blue-shades-1932.jpg',
          title: 'Hills with blue shades',
          artist: 'Istvan Nagy',
          year: '1932',
          rule: {
            "monday": [ 26, 30, 7, 23 ],
            "tuesday": [ 25, 27, 6, 22 ],
            "wednesday": [ 24, 27, 5, 21 ],
            "thursday": [ 23, 26, 4, 20 ],
            "friday": [ 29, 2, 10, 26 ],
            "saturday": [ 28, 31, 9, 25 ],
            "sunday": [ 27, 31, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/illustration-to-nightingale-by-hans-christian-andersen-1912.jpg',
          title: 'Illustration to \'Nightingale\' by Hans Christian Andersen',
          artist: 'Heorhiy Narbut',
          year: '1912',
          rule: {
            "monday": [ 28, 1, 9, 25 ],
            "tuesday": [ 27, 31, 8, 24 ],
            "wednesday": [ 26, 28, 7, 23 ],
            "thursday": [ 25, 28, 6, 22 ],
            "friday": [ 24, 27, 5, 21 ],
            "saturday": [ 30, 3, 11, 27 ],
            "sunday": [ 29, 1, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/flight-of-an-aeroplane-1916.jpg',
          title: 'Flight of an Aeroplane',
          artist: 'Olga Rozanova',
          year: '1916',
          rule: {
            "monday": [ 29, 1, 10, 26 ],
            "tuesday": [ 28, 1, 9, 25 ],
            "wednesday": [ 27, 31, 8, 24 ],
            "thursday": [ 26, 28, 7, 23 ],
            "friday": [ 25, 28, 6, 22 ],
            "saturday": [ 24, 27, 5, 21 ],
            "sunday": [ 30, 3, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/room.jpg',
          title: 'Room',
          artist: 'Olga Rozanova',
          year: '1915',
          rule: {
            "monday": [ 30, 3, 11, 27 ],
            "tuesday": [ 29, 1, 10, 26 ],
            "wednesday": [ 28, 1, 9, 25 ],
            "thursday": [ 27, 31, 8, 24 ],
            "friday": [ 26, 28, 7, 23 ],
            "saturday": [ 25, 28, 6, 22 ],
            "sunday": [ 24, 27, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/puppet-theater-1923.jpg',
          title: 'Puppet theater',
          artist: 'Paul Klee',
          year: '1923',
          rule: {
            "monday": [ 24, 27, 5, 21 ],
            "tuesday": [ 30, 3, 11, 27 ],
            "wednesday": [ 29, 1, 10, 26 ],
            "thursday": [ 28, 1, 9, 25 ],
            "friday": [ 27, 31, 8, 24 ],
            "saturday": [ 26, 28, 7, 23 ],
            "sunday": [ 25, 28, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/332-r-1932.jpg',
          title: '332 r',
          artist: 'Carl Buchheister',
          year: '1932',
          rule: {
            "monday": [ 25, 28, 6, 22 ],
            "tuesday": [ 24, 27, 5, 21 ],
            "wednesday": [ 30, 3, 11, 27 ],
            "thursday": [ 29, 1, 10, 26 ],
            "friday": [ 28, 1, 9, 25 ],
            "saturday": [ 27, 31, 8, 24 ],
            "sunday": [ 26, 28, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/on-the-hillside.jpg',
          title: 'On the Hillside',
          artist: 'Leon Dabo',
          year: '1916',
          rule: {
            "monday": [ 26, 28, 7, 23 ],
            "tuesday": [ 25, 28, 6, 22 ],
            "wednesday": [ 24, 27, 5, 21 ],
            "thursday": [ 30, 3, 11, 27 ],
            "friday": [ 29, 1, 10, 26 ],
            "saturday": [ 28, 1, 9, 25 ],
            "sunday": [ 27, 31, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/portrait-of-maude-abrantes-1907(1).jpg',
          title: 'Portrait of Maude Abrantes',
          artist: 'Amedeo Modigliani',
          year: '1907',
          rule: {
            "monday": [ 27, 31, 8, 24 ],
            "tuesday": [ 26, 28, 7, 23 ],
            "wednesday": [ 25, 28, 6, 22 ],
            "thursday": [ 24, 27, 5, 21 ],
            "friday": [ 30, 3, 11, 27 ],
            "saturday": [ 29, 1, 10, 26 ],
            "sunday": [ 28, 1, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/fr-hling-in-worpswede-1900.jpg',
          title: 'Frühling in Worpswede',
          artist: 'Hans am Ende',
          year: '1900',
          rule: {
            "monday": [ 29, 2, 10, 26 ],
            "tuesday": [ 28, 1, 9, 25 ],
            "wednesday": [ 27, 29, 8, 24 ],
            "thursday": [ 26, 29, 7, 23 ],
            "friday": [ 25, 28, 6, 22 ],
            "saturday": [ 31, 4, 12, 28 ],
            "sunday": [ 30, 2, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/kachalov-vasily-ivanovich-in-the-role-of-tsar-fedor-ivanovich-1923.jpg',
          title: 'Kachalov Vasily Ivanovich in the Role of Tsar Fedor Ivanovich',
          artist: 'Boris Grigoriev',
          year: '1923',
          rule: {
            "monday": [ 30, 2, 11, 27 ],
            "tuesday": [ 29, 2, 10, 26 ],
            "wednesday": [ 28, 1, 9, 25 ],
            "thursday": [ 27, 29, 8, 24 ],
            "friday": [ 26, 29, 7, 23 ],
            "saturday": [ 25, 28, 6, 22 ],
            "sunday": [ 31, 4, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/gypsy-with-a-guitar-1921.jpg',
          title: 'Gypsy with a Guitar',
          artist: 'Eugeniusz Żak',
          year: '1921',
          rule: {
            "monday": [ 31, 4, 12, 28 ],
            "tuesday": [ 30, 2, 11, 27 ],
            "wednesday": [ 29, 2, 10, 26 ],
            "thursday": [ 28, 1, 9, 25 ],
            "friday": [ 27, 29, 8, 24 ],
            "saturday": [ 26, 29, 7, 23 ],
            "sunday": [ 25, 28, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/dreiformvariation-1928.jpeg',
          title: 'Dreiformvariation',
          artist: 'Carl Buchheister',
          year: '1928',
          rule: {
            "monday": [ 25, 28, 6, 22 ],
            "tuesday": [ 31, 4, 12, 28 ],
            "wednesday": [ 30, 2, 11, 27 ],
            "thursday": [ 29, 2, 10, 26 ],
            "friday": [ 28, 1, 9, 25 ],
            "saturday": [ 27, 29, 8, 24 ],
            "sunday": [ 26, 29, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/watched-1925.jpeg',
          title: 'Watched',
          artist: 'Hannah Hoch',
          year: '1925',
          rule: {
            "monday": [ 26, 29, 7, 23 ],
            "tuesday": [ 25, 28, 6, 22 ],
            "wednesday": [ 31, 4, 12, 28 ],
            "thursday": [ 30, 2, 11, 27 ],
            "friday": [ 29, 2, 10, 26 ],
            "saturday": [ 28, 1, 9, 25 ],
            "sunday": [ 27, 29, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/anne-estelle-rice-in-paris-closerie-des-lilas-1907.jpeg',
          title: 'Anne Estelle Rice in Paris (Closerie des lilas)',
          artist: 'John Duncan Fergusson',
          year: '1907',
          rule: {
            "monday": [ 27, 29, 8, 24 ],
            "tuesday": [ 26, 29, 7, 23 ],
            "wednesday": [ 25, 28, 6, 22 ],
            "thursday": [ 31, 4, 12, 28 ],
            "friday": [ 30, 2, 11, 27 ],
            "saturday": [ 29, 2, 10, 26 ],
            "sunday": [ 28, 1, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-new-adam-1924.jpeg',
          title: 'The New Adam',
          artist: 'Sandor Bortnyik',
          year: '1924',
          rule: {
            "monday": [ 28, 1, 9, 25 ],
            "tuesday": [ 27, 29, 8, 24 ],
            "wednesday": [ 26, 29, 7, 23 ],
            "thursday": [ 25, 28, 6, 22 ],
            "friday": [ 31, 4, 12, 28 ],
            "saturday": [ 30, 2, 11, 27 ],
            "sunday": [ 29, 2, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/composition-i-still-life-1916.jpg',
          title: 'Composition I (Still life)',
          artist: 'Theo van Doesburg',
          year: '1916',
          rule: {
            "monday": [ 30, 3, 11, 27 ],
            "tuesday": [ 29, 2, 10, 26 ],
            "wednesday": [ 28, 30, 9, 25 ],
            "thursday": [ 27, 30, 8, 24 ],
            "friday": [ 26, 29, 7, 23 ],
            "saturday": [ 1, 5, 13, 29 ],
            "sunday": [ 31, 3, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/grasshopper-in-front-a-house-of-cards-1913.jpg',
          title: 'Grasshopper in front a House of Cards',
          artist: 'Heorhiy Narbut',
          year: '1913',
          rule: {
            "monday": [ 31, 3, 12, 28 ],
            "tuesday": [ 30, 3, 11, 27 ],
            "wednesday": [ 29, 2, 10, 26 ],
            "thursday": [ 28, 30, 9, 25 ],
            "friday": [ 27, 30, 8, 24 ],
            "saturday": [ 26, 29, 7, 23 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/still-life-with-checked-tablecloth-1915.jpg',
          title: 'Still Life with Checked Tablecloth',
          artist: 'Juan Gris',
          year: '1915',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 31, 3, 12, 28 ],
            "wednesday": [ 30, 3, 11, 27 ],
            "thursday": [ 29, 2, 10, 26 ],
            "friday": [ 28, 30, 9, 25 ],
            "saturday": [ 27, 30, 8, 24 ],
            "sunday": [ 26, 29, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/rendezvous-1939.jpg',
          title: 'Rendezvous',
          artist: 'Conroy Maddox',
          year: '1939',
          rule: {
            "monday": [ 26, 29, 7, 23 ],
            "tuesday": [ 1, 5, 13, 29 ],
            "wednesday": [ 31, 3, 12, 28 ],
            "thursday": [ 30, 3, 11, 27 ],
            "friday": [ 29, 2, 10, 26 ],
            "saturday": [ 28, 30, 9, 25 ],
            "sunday": [ 27, 30, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/figures-in-a-landscape.jpg',
          title: 'Figures in a Landscape',
          artist: 'Max Weber',
          year: '1911',
          rule: {
            "monday": [ 27, 30, 8, 24 ],
            "tuesday": [ 26, 29, 7, 23 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 31, 3, 12, 28 ],
            "friday": [ 30, 3, 11, 27 ],
            "saturday": [ 29, 2, 10, 26 ],
            "sunday": [ 28, 30, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/a-lady-in-black-1917.jpg',
          title: 'A Lady in Black',
          artist: 'Boris Grigoriev',
          year: '1917',
          rule: {
            "monday": [ 28, 30, 9, 25 ],
            "tuesday": [ 27, 30, 8, 24 ],
            "wednesday": [ 26, 29, 7, 23 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 31, 3, 12, 28 ],
            "saturday": [ 30, 3, 11, 27 ],
            "sunday": [ 29, 2, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/snowy-landscape-deep-winter-1904.jpg',
          title: 'Snowy Landscape (Deep Winter)',
          artist: 'Cuno Amiet',
          year: '1904',
          rule: {
            "monday": [ 29, 2, 10, 26 ],
            "tuesday": [ 28, 30, 9, 25 ],
            "wednesday": [ 27, 30, 8, 24 ],
            "thursday": [ 26, 29, 7, 23 ],
            "friday": [ 1, 5, 13, 29 ],
            "saturday": [ 31, 3, 12, 28 ],
            "sunday": [ 30, 3, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/development-ii.jpg',
          title: 'Development II',
          artist: 'M.C. Escher',
          year: '1939',
          rule: {
            "monday": [ 31, 4, 12, 28 ],
            "tuesday": [ 30, 3, 11, 27 ],
            "wednesday": [ 29, 31, 10, 26 ],
            "thursday": [ 28, 31, 9, 25 ],
            "friday": [ 27, 30, 8, 24 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 1, 4, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/dynamism-of-a-car-1913.jpg',
          title: 'Dynamism of a Car',
          artist: 'Luigi Russolo',
          year: '1913',
          rule: {
            "monday": [ 1, 4, 13, 29 ],
            "tuesday": [ 31, 4, 12, 28 ],
            "wednesday": [ 30, 3, 11, 27 ],
            "thursday": [ 29, 31, 10, 26 ],
            "friday": [ 28, 31, 9, 25 ],
            "saturday": [ 27, 30, 8, 24 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/dark-self-portrait-1935.jpg',
          title: 'Dark Self-Portrait',
          artist: 'Vajda Lajos',
          year: '1935',
          rule: {
            "monday": [ 2, 6, 14, 30 ],
            "tuesday": [ 1, 4, 13, 29 ],
            "wednesday": [ 31, 4, 12, 28 ],
            "thursday": [ 30, 3, 11, 27 ],
            "friday": [ 29, 31, 10, 26 ],
            "saturday": [ 28, 31, 9, 25 ],
            "sunday": [ 27, 30, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/cossack-mamai-1912.jpg',
          title: 'Cossack Mamai',
          artist: 'David Burliuk',
          year: '1912',
          rule: {
            "monday": [ 27, 30, 8, 24 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 1, 4, 13, 29 ],
            "thursday": [ 31, 4, 12, 28 ],
            "friday": [ 30, 3, 11, 27 ],
            "saturday": [ 29, 31, 10, 26 ],
            "sunday": [ 28, 31, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/ruins-of-the-ancient-theatre-of-taormina-1905.jpg',
          title: 'Ruins of the Ancient Theatre of Taormina',
          artist: 'Tivadar Kosztka Csontvary',
          year: '1905',
          rule: {
            "monday": [ 28, 31, 9, 25 ],
            "tuesday": [ 27, 30, 8, 24 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 1, 4, 13, 29 ],
            "friday": [ 31, 4, 12, 28 ],
            "saturday": [ 30, 3, 11, 27 ],
            "sunday": [ 29, 31, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/red-christ-1922.jpg',
          title: 'Red Christ',
          artist: 'Lovis Corinth',
          year: '1922',
          rule: {
            "monday": [ 29, 31, 10, 26 ],
            "tuesday": [ 28, 31, 9, 25 ],
            "wednesday": [ 27, 30, 8, 24 ],
            "thursday": [ 2, 6, 14, 30 ],
            "friday": [ 1, 4, 13, 29 ],
            "saturday": [ 31, 4, 12, 28 ],
            "sunday": [ 30, 3, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-artist-s-sister-melanie-1908.jpg',
          title: 'The Artist\'s Sister, Melanie',
          artist: 'Egon Schiele',
          year: '1908',
          rule: {
            "monday": [ 30, 3, 11, 27 ],
            "tuesday": [ 29, 31, 10, 26 ],
            "wednesday": [ 28, 31, 9, 25 ],
            "thursday": [ 27, 30, 8, 24 ],
            "friday": [ 2, 6, 14, 30 ],
            "saturday": [ 1, 4, 13, 29 ],
            "sunday": [ 31, 4, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/untitled-boats-1913.jpg',
          title: 'Untitled (boats)',
          artist: 'Amadeo de Souza-Cardoso',
          year: '1913',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 31, 4, 12, 28 ],
            "wednesday": [ 30, 1, 11, 27 ],
            "thursday": [ 29, 1, 10, 26 ],
            "friday": [ 28, 31, 9, 25 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 5, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/composition-i-1918.jpg',
          title: 'Composition I',
          artist: 'Vilhelm Lundstrom',
          year: '1918',
          rule: {
            "monday": [ 2, 5, 14, 30 ],
            "tuesday": [ 1, 5, 13, 29 ],
            "wednesday": [ 31, 4, 12, 28 ],
            "thursday": [ 30, 1, 11, 27 ],
            "friday": [ 29, 1, 10, 26 ],
            "saturday": [ 28, 31, 9, 25 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/woman-in-blue-dress.jpg',
          title: 'Woman in Blue Dress',
          artist: 'Victor Borisov-Musatov',
          year: 'c.1903',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 5, 14, 30 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 31, 4, 12, 28 ],
            "friday": [ 30, 1, 11, 27 ],
            "saturday": [ 29, 1, 10, 26 ],
            "sunday": [ 28, 31, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-cushio-1903.jpg',
          title: 'The Cushio',
          artist: 'Max Kurzweil',
          year: '1903',
          rule: {
            "monday": [ 28, 31, 9, 25 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 5, 14, 30 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 31, 4, 12, 28 ],
            "saturday": [ 30, 1, 11, 27 ],
            "sunday": [ 29, 1, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-dream-1910.jpg',
          title: 'The Dream',
          artist: 'Kuzma Petrov-Vodkin',
          year: '1910',
          rule: {
            "monday": [ 29, 1, 10, 26 ],
            "tuesday": [ 28, 31, 9, 25 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 2, 5, 14, 30 ],
            "friday": [ 1, 5, 13, 29 ],
            "saturday": [ 31, 4, 12, 28 ],
            "sunday": [ 30, 1, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-gray-tree-1911.jpg',
          title: 'The Gray Tree',
          artist: 'Piet Mondrian',
          year: '1911',
          rule: {
            "monday": [ 30, 1, 11, 27 ],
            "tuesday": [ 29, 1, 10, 26 ],
            "wednesday": [ 28, 31, 9, 25 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 2, 5, 14, 30 ],
            "saturday": [ 1, 5, 13, 29 ],
            "sunday": [ 31, 4, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-rape-of-europa-1908.jpg',
          title: 'The Rape of Europa',
          artist: 'Felix Vallotton',
          year: '1908',
          rule: {
            "monday": [ 31, 4, 12, 28 ],
            "tuesday": [ 30, 1, 11, 27 ],
            "wednesday": [ 29, 1, 10, 26 ],
            "thursday": [ 28, 31, 9, 25 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 5, 14, 30 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-hunchback-1905.jpg',
          title: 'The Hunchback',
          artist: 'Alexej von Jawlensky',
          year: '1905',
          rule: {
            "monday": [ 2, 6, 14, 30 ],
            "tuesday": [ 1, 5, 13, 29 ],
            "wednesday": [ 31, 2, 12, 28 ],
            "thursday": [ 30, 2, 11, 27 ],
            "friday": [ 29, 1, 10, 26 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 6, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/n-chtliche-stra-enszene-berlin-1920.jpg',
          title: 'Nächtliche Straßenszene, Berlin',
          artist: 'Lesser Ury',
          year: '1920',
          rule: {
            "monday": [ 3, 6, 15, 31 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 31, 2, 12, 28 ],
            "friday": [ 30, 2, 11, 27 ],
            "saturday": [ 29, 1, 10, 26 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/portrait-of-the-artist-a-milman-1917.jpg',
          title: 'Portrait of the Artist A. Milman',
          artist: 'Ilya Mashkov',
          year: '1917',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 6, 15, 31 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 31, 2, 12, 28 ],
            "saturday": [ 30, 2, 11, 27 ],
            "sunday": [ 29, 1, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/mountain-snowfall-lake-oesa-1932.jpg',
          title: 'Mountain Snowfall, Lake Oesa',
          artist: 'J. E. H. MacDonald',
          year: '1932',
          rule: {
            "monday": [ 29, 1, 10, 26 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 6, 15, 31 ],
            "thursday": [ 2, 6, 14, 30 ],
            "friday": [ 1, 5, 13, 29 ],
            "saturday": [ 31, 2, 12, 28 ],
            "sunday": [ 30, 2, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/interior-of-the-atelier-1928.jpg',
          title: 'Interior of the Atelier',
          artist: 'Corneliu Michailescu',
          year: '1928',
          rule: {
            "monday": [ 30, 2, 11, 27 ],
            "tuesday": [ 29, 1, 10, 26 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 6, 15, 31 ],
            "friday": [ 2, 6, 14, 30 ],
            "saturday": [ 1, 5, 13, 29 ],
            "sunday": [ 31, 2, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/still-life-with-egg-1915.jpg',
          title: 'Still life with egg',
          artist: 'Aleksandra Ekster',
          year: '1915',
          rule: {
            "monday": [ 31, 2, 12, 28 ],
            "tuesday": [ 30, 2, 11, 27 ],
            "wednesday": [ 29, 1, 10, 26 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 6, 15, 31 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/hevoshuijarit-1930.jpg',
          title: 'Hevoshuijarit',
          artist: 'Vilho Lampi',
          year: '1930',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 31, 2, 12, 28 ],
            "wednesday": [ 30, 2, 11, 27 ],
            "thursday": [ 29, 1, 10, 26 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 6, 15, 31 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/animals-in-a-landscape-1914.jpg',
          title: 'Animals in a Landscape',
          artist: 'Franz Marc',
          year: '1914',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 1, 3, 13, 29 ],
            "thursday": [ 31, 3, 12, 28 ],
            "friday": [ 30, 2, 11, 27 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 7, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/mountais-1923.jpg',
          title: 'Mountains',
          artist: 'Martiros Sarian',
          year: '1923',
          rule: {
            "monday": [ 4, 7, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 1, 3, 13, 29 ],
            "friday": [ 31, 3, 12, 28 ],
            "saturday": [ 30, 2, 11, 27 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/woman-in-yellow-chair-1933.jpg',
          title: 'Woman in Yellow Chair',
          artist: 'Iosif Iser',
          year: '1933',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 7, 16, 1 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 2, 6, 14, 30 ],
            "friday": [ 1, 3, 13, 29 ],
            "saturday": [ 31, 3, 12, 28 ],
            "sunday": [ 30, 2, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/still-life-bowl-with-apples-1921.jpg',
          title: 'Still life (Bowl with apples)',
          artist: 'Bart van der Leck',
          year: '1921',
          rule: {
            "monday": [ 30, 2, 11, 27 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 7, 16, 1 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 2, 6, 14, 30 ],
            "saturday": [ 1, 3, 13, 29 ],
            "sunday": [ 31, 3, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/contra-composition-of-dissonances-xvi-1925.jpg',
          title: 'Contra-Composition of Dissonances, XVI',
          artist: 'Theo van Doesburg',
          year: '1925',
          rule: {
            "monday": [ 31, 3, 12, 28 ],
            "tuesday": [ 30, 2, 11, 27 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 7, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 1, 3, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/samba-1925.jpg',
          title: 'Samba',
          artist: 'Emiliano Di Cavalcanti',
          year: '1925',
          rule: {
            "monday": [ 1, 3, 13, 29 ],
            "tuesday": [ 31, 3, 12, 28 ],
            "wednesday": [ 30, 2, 11, 27 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 7, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/meisje-1938(1).jpg',
          title: 'Meisje',
          artist: 'Constant Permeke',
          year: '1938',
          rule: {
            "monday": [ 2, 6, 14, 30 ],
            "tuesday": [ 1, 3, 13, 29 ],
            "wednesday": [ 31, 3, 12, 28 ],
            "thursday": [ 30, 2, 11, 27 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 7, 16, 1 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/hyacinth-1927.jpg',
          title: 'Hyacinth',
          artist: 'Koshiro Onchi',
          year: '1927',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 4, 14, 30 ],
            "thursday": [ 1, 4, 13, 29 ],
            "friday": [ 31, 3, 12, 28 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 8, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/claudia-girls.jpg',
          title: 'Claudia Girls',
          artist: 'Jose Gutierrez Solana',
          year: '1929',
          rule: {
            "monday": [ 5, 8, 17, 2 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 2, 4, 14, 30 ],
            "friday": [ 1, 4, 13, 29 ],
            "saturday": [ 31, 3, 12, 28 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/landscape-1912.jpg',
          title: 'Landscape',
          artist: 'Amadeo de Souza-Cardoso',
          year: '1912',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 8, 17, 2 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 2, 4, 14, 30 ],
            "saturday": [ 1, 4, 13, 29 ],
            "sunday": [ 31, 3, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/in-powder-and-crinoline-1912.jpg',
          title: 'In Powder and Crinoline',
          artist: 'Kay Nielsen',
          year: '1912',
          rule: {
            "monday": [ 31, 3, 12, 28 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 8, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 4, 14, 30 ],
            "sunday": [ 1, 4, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-surrender-of-barcelona-1937.jpg',
          title: 'The Surrender of Barcelona',
          artist: 'Wyndham Lewis',
          year: '1937',
          rule: {
            "monday": [ 1, 4, 13, 29 ],
            "tuesday": [ 31, 3, 12, 28 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 8, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 4, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/august-strindberg-1915.jpg',
          title: 'August Strindberg',
          artist: 'Gosta Adrian-Nilsson',
          year: '1915',
          rule: {
            "monday": [ 2, 4, 14, 30 ],
            "tuesday": [ 1, 4, 13, 29 ],
            "wednesday": [ 31, 3, 12, 28 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 8, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/dolor-de-mediod-a-1932(1).jpg',
          title: 'Dolor de mediodía',
          artist: 'Angel Planells',
          year: '1932',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 4, 14, 30 ],
            "wednesday": [ 1, 4, 13, 29 ],
            "thursday": [ 31, 3, 12, 28 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 8, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/cat-and-bird(1).jpg',
          title: 'Cat and Bird',
          artist: 'Paul Klee',
          year: '1928',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 5, 15, 31 ],
            "thursday": [ 2, 5, 14, 30 ],
            "friday": [ 1, 4, 13, 29 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 9, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/tornado-over-kansas-1929.jpg',
          title: 'Tornado Over Kansas',
          artist: 'John Steuart Curry',
          year: '1929',
          rule: {
            "monday": [ 6, 9, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 5, 15, 31 ],
            "friday": [ 2, 5, 14, 30 ],
            "saturday": [ 1, 4, 13, 29 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/bathing-boxes-and-tents-at-st-palais-1910.jpg',
          title: 'Bathing Boxes and Tents at St Palais',
          artist: 'John Duncan Fergusson',
          year: '1910',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 9, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 5, 15, 31 ],
            "saturday": [ 2, 5, 14, 30 ],
            "sunday": [ 1, 4, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/blue-bird.jpg',
          title: 'Blue Bird',
          artist: 'Konstantin Somov',
          year: '1918',
          rule: {
            "monday": [ 1, 4, 13, 29 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 9, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 5, 15, 31 ],
            "sunday": [ 2, 5, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/ichikawa-sansh-as-a-moxa-peddler-1926.jpg',
          title: 'Ichikawa Sansho as a Sweetmeat Peddler',
          artist: 'Natori Shunsen',
          year: '1926',
          rule: {
            "monday": [ 2, 5, 14, 30 ],
            "tuesday": [ 1, 4, 13, 29 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 9, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 5, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/wheel-well.jpg',
          title: 'The Old Well',
          artist: 'Konstantinos Maleas',
          year: '1923',
          rule: {
            "monday": [ 3, 5, 15, 31 ],
            "tuesday": [ 2, 5, 14, 30 ],
            "wednesday": [ 1, 4, 13, 29 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 9, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/breakfast-of-the-birds-1934(1).jpg',
          title: 'Breakfast of the Birds',
          artist: 'Gabriele Munter',
          year: '1934',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 5, 15, 31 ],
            "wednesday": [ 2, 5, 14, 30 ],
            "thursday": [ 1, 4, 13, 29 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 9, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/a-clown-1929.jpg',
          title: 'A Clown',
          artist: 'George Luks',
          year: '1929',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 6, 16, 1 ],
            "thursday": [ 3, 6, 15, 31 ],
            "friday": [ 2, 5, 14, 30 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 10, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/encontro-1924.jpg',
          title: 'Encontro',
          artist: 'Lasar Segall',
          year: '1924',
          rule: {
            "monday": [ 7, 10, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 6, 16, 1 ],
            "friday": [ 3, 6, 15, 31 ],
            "saturday": [ 2, 5, 14, 30 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-cyclist-1916.jpg',
          title: 'The Cyclist',
          artist: 'Mario Sironi',
          year: '1916',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 10, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 6, 16, 1 ],
            "saturday": [ 3, 6, 15, 31 ],
            "sunday": [ 2, 5, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/mann-pferd-kuh-1918.jpg',
          title: 'Mann, Pferd, Kuh',
          artist: 'Heinrich Campendonk',
          year: '1918',
          rule: {
            "monday": [ 2, 5, 14, 30 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 10, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 6, 16, 1 ],
            "sunday": [ 3, 6, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-daughters-of-pelichtim-1908.jpg',
          title: 'The Daughters of Pelichtim',
          artist: 'Paul Serusier',
          year: '1908',
          rule: {
            "monday": [ 3, 6, 15, 31 ],
            "tuesday": [ 2, 5, 14, 30 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 10, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 6, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/camp-borden-1919.jpg',
          title: 'Camp Borden',
          artist: 'Frank Johnston',
          year: '1919',
          rule: {
            "monday": [ 4, 6, 16, 1 ],
            "tuesday": [ 3, 6, 15, 31 ],
            "wednesday": [ 2, 5, 14, 30 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 10, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/mont-sainte-victoire-1927.jpg',
          title: 'Mont Sainte-Victoire',
          artist: 'Marsden Hartley',
          year: '1927',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 6, 16, 1 ],
            "wednesday": [ 3, 6, 15, 31 ],
            "thursday": [ 2, 5, 14, 30 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 10, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/w-wiat-1901.jpg',
          title: 'W świat',
          artist: 'Ferdynand Ruszczyc',
          year: '1901',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 7, 17, 2 ],
            "thursday": [ 4, 7, 16, 1 ],
            "friday": [ 3, 6, 15, 31 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 8, 11, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/man-and-woman-1913.jpg',
          title: 'Man and Woman (Adam and Eve)',
          artist: 'Pavel Filonov',
          year: '1912 - 1913',
          rule: {
            "monday": [ 8, 11, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 7, 17, 2 ],
            "friday": [ 4, 7, 16, 1 ],
            "saturday": [ 3, 6, 15, 31 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/untitled-34-8-1934.jpg',
          title: 'Untitled (34-8)',
          artist: 'Balcomb Greene',
          year: '1934',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 8, 11, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 7, 17, 2 ],
            "saturday": [ 4, 7, 16, 1 ],
            "sunday": [ 3, 6, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-lamp-1919.jpg',
          title: 'The Lamp',
          artist: 'Mario Sironi',
          year: '1919',
          rule: {
            "monday": [ 3, 6, 15, 31 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 8, 11, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 7, 17, 2 ],
            "sunday": [ 4, 7, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-beaver-dam-1919.jpg',
          title: 'The Beaver Dam',
          artist: 'J. E. H. MacDonald',
          year: '1919',
          rule: {
            "monday": [ 4, 7, 16, 1 ],
            "tuesday": [ 3, 6, 15, 31 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 8, 11, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 7, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-straw-hat.jpg',
          title: 'The straw hat',
          artist: 'Nikolaos Lytras',
          year: '1925',
          rule: {
            "monday": [ 5, 7, 17, 2 ],
            "tuesday": [ 4, 7, 16, 1 ],
            "wednesday": [ 3, 6, 15, 31 ],
            "thursday": [ 9, 13, 21, 6 ],
            "friday": [ 8, 11, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/petersburg-rostral-column-and-exchange-1908.jpg',
          title: 'Petersburg. Rostral column and Exchange.',
          artist: 'Anna Ostroumova-Lebedeva',
          year: '1908',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 7, 17, 2 ],
            "wednesday": [ 4, 7, 16, 1 ],
            "thursday": [ 3, 6, 15, 31 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 8, 11, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-little-tea-party-nina-hamnett-and-roald-kristian-1916.jpg',
          title: 'The Little Tea Party Nina Hamnett and Roald Kristian',
          artist: 'Walter Sickert',
          year: '1915 - 1916',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 8, 18, 3 ],
            "thursday": [ 5, 8, 17, 2 ],
            "friday": [ 4, 7, 16, 1 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 9, 12, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/la-cloche-panorama-1939.jpg',
          title: 'La Cloche Panorama',
          artist: 'Franklin Carmichael',
          year: '1939',
          rule: {
            "monday": [ 9, 12, 21, 6 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 8, 18, 3 ],
            "friday": [ 5, 8, 17, 2 ],
            "saturday": [ 4, 7, 16, 1 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-fisherman.jpg',
          title: 'The fisherman',
          artist: 'Max Kurzweil',
          year: 'c.1900',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 9, 12, 21, 6 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 8, 18, 3 ],
            "saturday": [ 5, 8, 17, 2 ],
            "sunday": [ 4, 7, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-eastern-railway-station-at-night-1902.jpg',
          title: 'The Eastern Railway Station at Night',
          artist: 'Tivadar Kosztka Csontvary',
          year: '1902',
          rule: {
            "monday": [ 4, 7, 16, 1 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 9, 12, 21, 6 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 8, 18, 3 ],
            "sunday": [ 5, 8, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/grand-canyon-1902.jpg',
          title: 'Grand Canyon',
          artist: 'Maxfield Parrish',
          year: '1902',
          rule: {
            "monday": [ 5, 8, 17, 2 ],
            "tuesday": [ 4, 7, 16, 1 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 9, 12, 21, 6 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 8, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/teacher-in-morocco-1908.jpg',
          title: 'Teacher in Morocco',
          artist: 'Tivadar Kosztka Csontvary',
          year: '1908',
          rule: {
            "monday": [ 6, 8, 18, 3 ],
            "tuesday": [ 5, 8, 17, 2 ],
            "wednesday": [ 4, 7, 16, 1 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 9, 12, 21, 6 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/soldiers-washing-1927.jpg',
          title: 'Soldiers Washing',
          artist: 'Stanley Spencer',
          year: '1927',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 8, 18, 3 ],
            "wednesday": [ 5, 8, 17, 2 ],
            "thursday": [ 4, 7, 16, 1 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 9, 12, 21, 6 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/sc206951.jpg',
          title: 'Fishes of Honolulu',
          artist: 'Hiroshi Yoshida',
          year: '1925',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 9, 19, 4 ],
            "thursday": [ 6, 9, 18, 3 ],
            "friday": [ 5, 8, 17, 2 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 10, 13, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/fleurs-et-fruits-1920.jpg',
          title: 'Fleurs et fruits',
          artist: 'Seraphine Louis',
          year: '1920',
          rule: {
            "monday": [ 10, 13, 22, 7 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 9, 19, 4 ],
            "friday": [ 6, 9, 18, 3 ],
            "saturday": [ 5, 8, 17, 2 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/kansas-cornfield-1933.jpg',
          title: 'Kansas Cornfield',
          artist: 'John Steuart Curry',
          year: '1933',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 10, 13, 22, 7 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 9, 19, 4 ],
            "saturday": [ 6, 9, 18, 3 ],
            "sunday": [ 5, 8, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/mermaid-1914.jpg',
          title: 'Mermaid',
          artist: 'Koloman Moser',
          year: '1914',
          rule: {
            "monday": [ 5, 8, 17, 2 ],
            "tuesday": [ 11, 15, 23, 8 ],
            "wednesday": [ 10, 13, 22, 7 ],
            "thursday": [ 9, 13, 21, 6 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 9, 19, 4 ],
            "sunday": [ 6, 9, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/child-portrait-1926.jpg',
          title: 'Child Portrait',
          artist: 'Nicolae Tonitza',
          year: '1926',
          rule: {
            "monday": [ 6, 9, 18, 3 ],
            "tuesday": [ 5, 8, 17, 2 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 10, 13, 22, 7 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 9, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/violinist-1915.jpg',
          title: 'Violinist',
          artist: 'Alexandre Jacovleff',
          year: '1915',
          rule: {
            "monday": [ 7, 9, 19, 4 ],
            "tuesday": [ 6, 9, 18, 3 ],
            "wednesday": [ 5, 8, 17, 2 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 10, 13, 22, 7 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/parakeet-on-table-1924.jpg',
          title: 'Parakeet on Table',
          artist: 'Yamamura Toyonari',
          year: '1924',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 9, 19, 4 ],
            "wednesday": [ 6, 9, 18, 3 ],
            "thursday": [ 5, 8, 17, 2 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 10, 13, 22, 7 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/avenue-of-cherry-trees-1935.jpg',
          title: 'Avenue of Cherry Trees',
          artist: 'Hiroshi Yoshida',
          year: '1935',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 8, 10, 20, 5 ],
            "thursday": [ 7, 10, 19, 4 ],
            "friday": [ 6, 9, 18, 3 ],
            "saturday": [ 12, 16, 24, 9 ],
            "sunday": [ 11, 14, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/cover-of-album-ukrainian-alphabet-1917.jpg',
          title: 'Cover of album \'Ukrainian alphabet\'',
          artist: 'Heorhiy Narbut',
          year: '1917',
          rule: {
            "monday": [ 11, 14, 23, 8 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 8, 10, 20, 5 ],
            "friday": [ 7, 10, 19, 4 ],
            "saturday": [ 6, 9, 18, 3 ],
            "sunday": [ 12, 16, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/two-sisters-1923.jpg',
          title: 'Two Sisters',
          artist: 'Vilhelm Lundstrom',
          year: '1923',
          rule: {
            "monday": [ 12, 16, 24, 9 ],
            "tuesday": [ 11, 14, 23, 8 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 9, 13, 21, 6 ],
            "friday": [ 8, 10, 20, 5 ],
            "saturday": [ 7, 10, 19, 4 ],
            "sunday": [ 6, 9, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/cena-aberta-1940.jpg',
          title: 'Cena Aberta',
          artist: 'Antonio Dacosta',
          year: '1940',
          rule: {
            "monday": [ 6, 9, 18, 3 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 14, 23, 8 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 8, 10, 20, 5 ],
            "sunday": [ 7, 10, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/bridge-repetition-of-composition-of-1911.jpg',
          title: 'Bridge (Repetition of composition of 1911)',
          artist: 'David Burliuk',
          year: 'c.1911',
          rule: {
            "monday": [ 7, 10, 19, 4 ],
            "tuesday": [ 6, 9, 18, 3 ],
            "wednesday": [ 12, 16, 24, 9 ],
            "thursday": [ 11, 14, 23, 8 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 8, 10, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/girl-with-stork-1907.jpg',
          title: 'Girl with Stork',
          artist: 'Paula Modersohn-Becker',
          year: '1906 - 1907',
          rule: {
            "monday": [ 8, 10, 20, 5 ],
            "tuesday": [ 7, 10, 19, 4 ],
            "wednesday": [ 6, 9, 18, 3 ],
            "thursday": [ 12, 16, 24, 9 ],
            "friday": [ 11, 14, 23, 8 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/temple-gardens-1920.jpg',
          title: 'Temple Gardens',
          artist: 'Paul Klee',
          year: '1920',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 8, 10, 20, 5 ],
            "wednesday": [ 7, 10, 19, 4 ],
            "thursday": [ 6, 9, 18, 3 ],
            "friday": [ 12, 16, 24, 9 ],
            "saturday": [ 11, 14, 23, 8 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/marionettes-chinoises-chinois-1935.jpg',
          title: 'Marionettes Chinoises. Chinois',
          artist: 'Paul Jacoulet',
          year: '1935',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 9, 11, 21, 6 ],
            "thursday": [ 8, 11, 20, 5 ],
            "friday": [ 7, 10, 19, 4 ],
            "saturday": [ 13, 17, 25, 10 ],
            "sunday": [ 12, 15, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/a-horseback-ride-1900.jpg',
          title: 'A horseback ride',
          artist: 'Richard Friese',
          year: '1900',
          rule: {
            "monday": [ 12, 15, 24, 9 ],
            "tuesday": [ 11, 15, 23, 8 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 9, 11, 21, 6 ],
            "friday": [ 8, 11, 20, 5 ],
            "saturday": [ 7, 10, 19, 4 ],
            "sunday": [ 13, 17, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/lady-with-flowers-anna-amiet-with-flowers-1923.jpg',
          title: 'Lady With Flowers - Anna Amiet With Flowers',
          artist: 'Cuno Amiet',
          year: '1923',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 15, 24, 9 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 9, 11, 21, 6 ],
            "saturday": [ 8, 11, 20, 5 ],
            "sunday": [ 7, 10, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/lucky-strike-1921.jpg',
          title: 'Lucky Strike',
          artist: 'Stuart Davis',
          year: '1921',
          rule: {
            "monday": [ 7, 10, 19, 4 ],
            "tuesday": [ 13, 17, 25, 10 ],
            "wednesday": [ 12, 15, 24, 9 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 9, 11, 21, 6 ],
            "sunday": [ 8, 11, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/family-1940.jpg',
          title: 'Family',
          artist: 'Jose de Almada-Negreiros',
          year: '1940',
          rule: {
            "monday": [ 8, 11, 20, 5 ],
            "tuesday": [ 7, 10, 19, 4 ],
            "wednesday": [ 13, 17, 25, 10 ],
            "thursday": [ 12, 15, 24, 9 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 9, 11, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/shepherd-1910.jpg',
          title: 'Shepherd',
          artist: 'Eugeniusz Zak',
          year: '1910',
          rule: {
            "monday": [ 9, 11, 21, 6 ],
            "tuesday": [ 8, 11, 20, 5 ],
            "wednesday": [ 7, 10, 19, 4 ],
            "thursday": [ 13, 17, 25, 10 ],
            "friday": [ 12, 15, 24, 9 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/fisherman-in-a-red-shirt-1908(1).jpg',
          title: 'Fisherman in a Red Shirt',
          artist: 'Niko Pirosmani',
          year: '1908',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 9, 11, 21, 6 ],
            "wednesday": [ 8, 11, 20, 5 ],
            "thursday": [ 7, 10, 19, 4 ],
            "friday": [ 13, 17, 25, 10 ],
            "saturday": [ 12, 15, 24, 9 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/pegaso-de-sol-1922.jpg',
          title: 'Pegaso de Sol',
          artist: 'Xul Solar',
          year: '1922',
          rule: {
            "monday": [ 12, 16, 24, 9 ],
            "tuesday": [ 11, 15, 23, 8 ],
            "wednesday": [ 10, 12, 22, 7 ],
            "thursday": [ 9, 12, 21, 6 ],
            "friday": [ 8, 11, 20, 5 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 16, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/route-of-the-train-to-the-kahlenberg.jpg',
          title: 'Railway to the Kahlenberg',
          artist: 'Richard Gerstl',
          year: '1907',
          rule: {
            "monday": [ 13, 16, 25, 10 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 10, 12, 22, 7 ],
            "friday": [ 9, 12, 21, 6 ],
            "saturday": [ 8, 11, 20, 5 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/bordeaux-1937.jpg',
          title: 'Bordeaux',
          artist: 'Jean Dupas',
          year: '1937',
          rule: {
            "monday": [ 14, 18, 26, 11 ],
            "tuesday": [ 13, 16, 25, 10 ],
            "wednesday": [ 12, 16, 24, 9 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 10, 12, 22, 7 ],
            "saturday": [ 9, 12, 21, 6 ],
            "sunday": [ 8, 11, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/brooklyn-bridge-1920.jpg',
          title: 'Brooklyn Bridge',
          artist: 'Joseph Stella',
          year: '1920',
          rule: {
            "monday": [ 8, 11, 20, 5 ],
            "tuesday": [ 14, 18, 26, 11 ],
            "wednesday": [ 13, 16, 25, 10 ],
            "thursday": [ 12, 16, 24, 9 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 10, 12, 22, 7 ],
            "sunday": [ 9, 12, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/harlequin-and-death.jpg',
          title: 'Harlequin and Death',
          artist: 'Konstantin Somov',
          year: '1907',
          rule: {
            "monday": [ 9, 12, 21, 6 ],
            "tuesday": [ 8, 11, 20, 5 ],
            "wednesday": [ 14, 18, 26, 11 ],
            "thursday": [ 13, 16, 25, 10 ],
            "friday": [ 12, 16, 24, 9 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 10, 12, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/open-circle-with-two-verticals-1920.jpg',
          title: 'Open circle with two verticals',
          artist: 'Erich Buchholz',
          year: '1920',
          rule: {
            "monday": [ 10, 12, 22, 7 ],
            "tuesday": [ 9, 12, 21, 6 ],
            "wednesday": [ 8, 11, 20, 5 ],
            "thursday": [ 14, 18, 26, 11 ],
            "friday": [ 13, 16, 25, 10 ],
            "saturday": [ 12, 16, 24, 9 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/a-woodcock-1927.jpg',
          title: 'A Woodcock',
          artist: 'Archibald Thorburn',
          year: '1927',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 10, 12, 22, 7 ],
            "wednesday": [ 9, 12, 21, 6 ],
            "thursday": [ 8, 11, 20, 5 ],
            "friday": [ 14, 18, 26, 11 ],
            "saturday": [ 13, 16, 25, 10 ],
            "sunday": [ 12, 16, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/view-of-langelinie-1924.jpg',
          title: 'View of Langelinie',
          artist: 'Edvard Weie',
          year: '1924',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 13, 23, 8 ],
            "thursday": [ 10, 13, 22, 7 ],
            "friday": [ 9, 12, 21, 6 ],
            "saturday": [ 15, 19, 27, 12 ],
            "sunday": [ 14, 17, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/after-the-storm-1921.jpg',
          title: 'After the storm',
          artist: 'Boris Kustodiev',
          year: '1921',
          rule: {
            "monday": [ 14, 17, 26, 11 ],
            "tuesday": [ 13, 17, 25, 10 ],
            "wednesday": [ 12, 16, 24, 9 ],
            "thursday": [ 11, 13, 23, 8 ],
            "friday": [ 10, 13, 22, 7 ],
            "saturday": [ 9, 12, 21, 6 ],
            "sunday": [ 15, 19, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/orfeu-nos-infernos-detail-1904.jpg',
          title: 'Orfeu nos Infernos (detail)',
          artist: 'Guilherme de Santa-Rita',
          year: '1904',
          rule: {
            "monday": [ 15, 19, 27, 12 ],
            "tuesday": [ 14, 17, 26, 11 ],
            "wednesday": [ 13, 17, 25, 10 ],
            "thursday": [ 12, 16, 24, 9 ],
            "friday": [ 11, 13, 23, 8 ],
            "saturday": [ 10, 13, 22, 7 ],
            "sunday": [ 9, 12, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/bibemus-quarry.jpg',
          title: 'Bibemus Quarry',
          artist: 'Paul Cezanne',
          year: 'c.1900',
          rule: {
            "monday": [ 9, 12, 21, 6 ],
            "tuesday": [ 15, 19, 27, 12 ],
            "wednesday": [ 14, 17, 26, 11 ],
            "thursday": [ 13, 17, 25, 10 ],
            "friday": [ 12, 16, 24, 9 ],
            "saturday": [ 11, 13, 23, 8 ],
            "sunday": [ 10, 13, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-poet-and-the-angel-1938.jpg',
          title: 'The Poet and the Angel',
          artist: 'Mario Eloy',
          year: '1938',
          rule: {
            "monday": [ 10, 13, 22, 7 ],
            "tuesday": [ 9, 12, 21, 6 ],
            "wednesday": [ 15, 19, 27, 12 ],
            "thursday": [ 14, 17, 26, 11 ],
            "friday": [ 13, 17, 25, 10 ],
            "saturday": [ 12, 16, 24, 9 ],
            "sunday": [ 11, 13, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/kiss-1913.jpg',
          title: 'Kiss',
          artist: 'Vsevolod Maksymovych',
          year: '1913',
          rule: {
            "monday": [ 11, 13, 23, 8 ],
            "tuesday": [ 10, 13, 22, 7 ],
            "wednesday": [ 9, 12, 21, 6 ],
            "thursday": [ 15, 19, 27, 12 ],
            "friday": [ 14, 17, 26, 11 ],
            "saturday": [ 13, 17, 25, 10 ],
            "sunday": [ 12, 16, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/vasya-1922.jpg',
          title: 'Vasya',
          artist: 'Kuzma Petrov-Vodkin',
          year: 'c.1922',
          rule: {
            "monday": [ 12, 16, 24, 9 ],
            "tuesday": [ 11, 13, 23, 8 ],
            "wednesday": [ 10, 13, 22, 7 ],
            "thursday": [ 9, 12, 21, 6 ],
            "friday": [ 15, 19, 27, 12 ],
            "saturday": [ 14, 17, 26, 11 ],
            "sunday": [ 13, 17, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/blauer-berg-1910.jpg',
          title: 'Blauer Berg',
          artist: 'Alexej von Jawlensky',
          year: '1910',
          rule: {
            "monday": [ 14, 18, 26, 11 ],
            "tuesday": [ 13, 17, 25, 10 ],
            "wednesday": [ 12, 14, 24, 9 ],
            "thursday": [ 11, 14, 23, 8 ],
            "friday": [ 10, 13, 22, 7 ],
            "saturday": [ 16, 20, 28, 13 ],
            "sunday": [ 15, 18, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/model-of-the-monument-iii-international-1920.jpg',
          title: 'Model of the monument III International',
          artist: 'Vladimir Tatlin',
          year: '1919 - 1920',
          rule: {
            "monday": [ 15, 18, 27, 12 ],
            "tuesday": [ 14, 18, 26, 11 ],
            "wednesday": [ 13, 17, 25, 10 ],
            "thursday": [ 12, 14, 24, 9 ],
            "friday": [ 11, 14, 23, 8 ],
            "saturday": [ 10, 13, 22, 7 ],
            "sunday": [ 16, 20, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/south-street-stoop-1935.jpg',
          title: 'South Street Stoop',
          artist: 'O. Louis Guglielmi',
          year: '1935',
          rule: {
            "monday": [ 16, 20, 28, 13 ],
            "tuesday": [ 15, 18, 27, 12 ],
            "wednesday": [ 14, 18, 26, 11 ],
            "thursday": [ 13, 17, 25, 10 ],
            "friday": [ 12, 14, 24, 9 ],
            "saturday": [ 11, 14, 23, 8 ],
            "sunday": [ 10, 13, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/hans-sollfrank-1908.jpg',
          title: 'Hans Sollfrank',
          artist: 'Fritz Rehm',
          year: '1908',
          rule: {
            "monday": [ 10, 13, 22, 7 ],
            "tuesday": [ 16, 20, 28, 13 ],
            "wednesday": [ 15, 18, 27, 12 ],
            "thursday": [ 14, 18, 26, 11 ],
            "friday": [ 13, 17, 25, 10 ],
            "saturday": [ 12, 14, 24, 9 ],
            "sunday": [ 11, 14, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/paar-in-interieur-1917(1).jpg',
          title: 'Paar in Interieur',
          artist: 'Gabriele Munter',
          year: '1917',
          rule: {
            "monday": [ 11, 14, 23, 8 ],
            "tuesday": [ 10, 13, 22, 7 ],
            "wednesday": [ 16, 20, 28, 13 ],
            "thursday": [ 15, 18, 27, 12 ],
            "friday": [ 14, 18, 26, 11 ],
            "saturday": [ 13, 17, 25, 10 ],
            "sunday": [ 12, 14, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/walchensee-1920.jpg',
          title: 'Walchensee',
          artist: 'Lovis Corinth',
          year: '1920',
          rule: {
            "monday": [ 12, 14, 24, 9 ],
            "tuesday": [ 11, 14, 23, 8 ],
            "wednesday": [ 10, 13, 22, 7 ],
            "thursday": [ 16, 20, 28, 13 ],
            "friday": [ 15, 18, 27, 12 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 17, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-pier-dordrecht.jpg',
          title: 'The Pier, Dordrecht',
          artist: 'Frits Thaulow',
          year: '1905',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 14, 24, 9 ],
            "wednesday": [ 11, 14, 23, 8 ],
            "thursday": [ 10, 13, 22, 7 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 18, 27, 12 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/at-balcic-1936.jpg',
          title: 'At Balcic',
          artist: 'George Stefanescu',
          year: '1936',
          rule: {
            "monday": [ 15, 19, 27, 12 ],
            "tuesday": [ 14, 18, 26, 11 ],
            "wednesday": [ 13, 15, 25, 10 ],
            "thursday": [ 12, 15, 24, 9 ],
            "friday": [ 11, 14, 23, 8 ],
            "saturday": [ 17, 21, 29, 14 ],
            "sunday": [ 16, 19, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-opium-smoker-s-dream-1918.jpg',
          title: 'The Opium Smoker\'s Dream',
          artist: 'Lajos Gulacsy',
          year: '1918',
          rule: {
            "monday": [ 16, 19, 28, 13 ],
            "tuesday": [ 15, 19, 27, 12 ],
            "wednesday": [ 14, 18, 26, 11 ],
            "thursday": [ 13, 15, 25, 10 ],
            "friday": [ 12, 15, 24, 9 ],
            "saturday": [ 11, 14, 23, 8 ],
            "sunday": [ 17, 21, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/two-poets-1929.jpg',
          title: 'Two Poets',
          artist: 'Louis Marcoussis',
          year: '1929',
          rule: {
            "monday": [ 17, 21, 29, 14 ],
            "tuesday": [ 16, 19, 28, 13 ],
            "wednesday": [ 15, 19, 27, 12 ],
            "thursday": [ 14, 18, 26, 11 ],
            "friday": [ 13, 15, 25, 10 ],
            "saturday": [ 12, 15, 24, 9 ],
            "sunday": [ 11, 14, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 311,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/baba-yaga-illustration-for-the-fairy-tale-vasilisa-the-beautiful-1900(2).jpg',
          title: 'Baba Yaga. Illustration for the fairy tale "Vasilisa the Beautiful"',
          artist: 'Ivan Bilibin',
          year: '1900',
          rule: {
            "monday": [ 11, 14, 23, 8 ],
            "tuesday": [ 17, 21, 29, 14 ],
            "wednesday": [ 16, 19, 28, 13 ],
            "thursday": [ 15, 19, 27, 12 ],
            "friday": [ 14, 18, 26, 11 ],
            "saturday": [ 13, 15, 25, 10 ],
            "sunday": [ 12, 15, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 312,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/sailboats-1921(1).jpg',
          title: 'Sailboats',
          artist: 'David Kakabadze',
          year: '1921',
          rule: {
            "monday": [ 12, 15, 24, 9 ],
            "tuesday": [ 11, 14, 23, 8 ],
            "wednesday": [ 17, 21, 29, 14 ],
            "thursday": [ 16, 19, 28, 13 ],
            "friday": [ 15, 19, 27, 12 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 15, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 313,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/miranda-1916.jpg',
          title: 'Miranda',
          artist: 'John William Waterhouse',
          year: '1916',
          rule: {
            "monday": [ 13, 15, 25, 10 ],
            "tuesday": [ 12, 15, 24, 9 ],
            "wednesday": [ 11, 14, 23, 8 ],
            "thursday": [ 17, 21, 29, 14 ],
            "friday": [ 16, 19, 28, 13 ],
            "saturday": [ 15, 19, 27, 12 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 314,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/returning-from-the-work-1930.jpg',
          title: 'Returning from the Work',
          artist: 'Konstantin Yuon',
          year: '1930',
          rule: {
            "monday": [ 14, 18, 26, 11 ],
            "tuesday": [ 13, 15, 25, 10 ],
            "wednesday": [ 12, 15, 24, 9 ],
            "thursday": [ 11, 14, 23, 8 ],
            "friday": [ 17, 21, 29, 14 ],
            "saturday": [ 16, 19, 28, 13 ],
            "sunday": [ 15, 19, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 315,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/jeanne-hebuterne-in-front-of-a-door-1919.jpg',
          title: 'Jeanne Hebuterne in Red Shawl',
          artist: 'Amedeo Modigliani',
          year: '1917',
          rule: {
            "monday": [ 16, 20, 28, 13 ],
            "tuesday": [ 15, 19, 27, 12 ],
            "wednesday": [ 14, 16, 26, 11 ],
            "thursday": [ 13, 16, 25, 10 ],
            "friday": [ 12, 15, 24, 9 ],
            "saturday": [ 18, 22, 30, 15 ],
            "sunday": [ 17, 20, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 316,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/shepherd-and-sheep-at-vlaici-1912.jpg',
          title: 'Shepherd and Sheep at Vlaici',
          artist: 'Nicolae Darascu',
          year: '1912',
          rule: {
            "monday": [ 17, 20, 29, 14 ],
            "tuesday": [ 16, 20, 28, 13 ],
            "wednesday": [ 15, 19, 27, 12 ],
            "thursday": [ 14, 16, 26, 11 ],
            "friday": [ 13, 16, 25, 10 ],
            "saturday": [ 12, 15, 24, 9 ],
            "sunday": [ 18, 22, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 317,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/massacre-at-dinant-1918.jpg',
          title: 'Massacre at Dinant',
          artist: 'George Bellows',
          year: '1918',
          rule: {
            "monday": [ 18, 22, 30, 15 ],
            "tuesday": [ 17, 20, 29, 14 ],
            "wednesday": [ 16, 20, 28, 13 ],
            "thursday": [ 15, 19, 27, 12 ],
            "friday": [ 14, 16, 26, 11 ],
            "saturday": [ 13, 16, 25, 10 ],
            "sunday": [ 12, 15, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 318,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/fortress-fortress-fairy-tale-1908.jpg',
          title: 'Fortress (Fortress Fairy Tale)',
          artist: 'Mikalojus Konstantinas Ciurlionis',
          year: '1908',
          rule: {
            "monday": [ 12, 15, 24, 9 ],
            "tuesday": [ 18, 22, 30, 15 ],
            "wednesday": [ 17, 20, 29, 14 ],
            "thursday": [ 16, 20, 28, 13 ],
            "friday": [ 15, 19, 27, 12 ],
            "saturday": [ 14, 16, 26, 11 ],
            "sunday": [ 13, 16, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 319,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/obruchenie-1923.jpg',
          title: 'Obruchenie',
          artist: 'Ivan Milev',
          year: '1923',
          rule: {
            "monday": [ 13, 16, 25, 10 ],
            "tuesday": [ 12, 15, 24, 9 ],
            "wednesday": [ 18, 22, 30, 15 ],
            "thursday": [ 17, 20, 29, 14 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 19, 27, 12 ],
            "sunday": [ 14, 16, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 320,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/violets-for-perfume-1913.jpg',
          title: 'Violets for Perfume',
          artist: 'Henry Herbert La Thangue',
          year: '1913',
          rule: {
            "monday": [ 14, 16, 26, 11 ],
            "tuesday": [ 13, 16, 25, 10 ],
            "wednesday": [ 12, 15, 24, 9 ],
            "thursday": [ 18, 22, 30, 15 ],
            "friday": [ 17, 20, 29, 14 ],
            "saturday": [ 16, 20, 28, 13 ],
            "sunday": [ 15, 19, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 321,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/people-1923.jpg',
          title: 'People',
          artist: 'Konstantin Yuon',
          year: '1923',
          rule: {
            "monday": [ 15, 19, 27, 12 ],
            "tuesday": [ 14, 16, 26, 11 ],
            "wednesday": [ 13, 16, 25, 10 ],
            "thursday": [ 12, 15, 24, 9 ],
            "friday": [ 18, 22, 30, 15 ],
            "saturday": [ 17, 20, 29, 14 ],
            "sunday": [ 16, 20, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 322,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/mirror-lake-1929.jpg',
          title: 'Mirror Lake',
          artist: 'Franklin Carmichael',
          year: '1929',
          rule: {
            "monday": [ 17, 21, 29, 14 ],
            "tuesday": [ 16, 20, 28, 13 ],
            "wednesday": [ 15, 17, 27, 12 ],
            "thursday": [ 14, 17, 26, 11 ],
            "friday": [ 13, 16, 25, 10 ],
            "saturday": [ 19, 23, 31, 16 ],
            "sunday": [ 18, 21, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 323,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-running-man-1933.jpg',
          title: 'The Running Man',
          artist: 'Kazimir Malevich',
          year: '1932 - 1933',
          rule: {
            "monday": [ 18, 21, 30, 15 ],
            "tuesday": [ 17, 21, 29, 14 ],
            "wednesday": [ 16, 20, 28, 13 ],
            "thursday": [ 15, 17, 27, 12 ],
            "friday": [ 14, 17, 26, 11 ],
            "saturday": [ 13, 16, 25, 10 ],
            "sunday": [ 19, 23, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 324,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/a-onda-1917.jpg',
          title: 'A Onda',
          artist: 'Anita Malfatti',
          year: '1917',
          rule: {
            "monday": [ 19, 23, 31, 16 ],
            "tuesday": [ 18, 21, 30, 15 ],
            "wednesday": [ 17, 21, 29, 14 ],
            "thursday": [ 16, 20, 28, 13 ],
            "friday": [ 15, 17, 27, 12 ],
            "saturday": [ 14, 17, 26, 11 ],
            "sunday": [ 13, 16, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 325,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/nagyb-nya-1929.jpg',
          title: 'Nagybánya',
          artist: 'Istvan Ilosvai Varga',
          year: '1929',
          rule: {
            "monday": [ 13, 16, 25, 10 ],
            "tuesday": [ 19, 23, 31, 16 ],
            "wednesday": [ 18, 21, 30, 15 ],
            "thursday": [ 17, 21, 29, 14 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 17, 27, 12 ],
            "sunday": [ 14, 17, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 326,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-church-of-souain-in-sihlouette-1917.jpg',
          title: 'The Church of Souain in Sihlouette',
          artist: 'Felix Vallotton',
          year: '1917',
          rule: {
            "monday": [ 14, 17, 26, 11 ],
            "tuesday": [ 13, 16, 25, 10 ],
            "wednesday": [ 19, 23, 31, 16 ],
            "thursday": [ 18, 21, 30, 15 ],
            "friday": [ 17, 21, 29, 14 ],
            "saturday": [ 16, 20, 28, 13 ],
            "sunday": [ 15, 17, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 327,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/east-of-the-sun-and-west-of-the-moon-1914-1.jpg',
          title: 'East of the Sun and West of the Moon',
          artist: 'Kay Nielsen',
          year: '1914',
          rule: {
            "monday": [ 15, 17, 27, 12 ],
            "tuesday": [ 14, 17, 26, 11 ],
            "wednesday": [ 13, 16, 25, 10 ],
            "thursday": [ 19, 23, 31, 16 ],
            "friday": [ 18, 21, 30, 15 ],
            "saturday": [ 17, 21, 29, 14 ],
            "sunday": [ 16, 20, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 328,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/flower-basket-1915.jpg',
          title: 'Flower Basket',
          artist: 'Uemura Shoen',
          year: '1915',
          rule: {
            "monday": [ 16, 20, 28, 13 ],
            "tuesday": [ 15, 17, 27, 12 ],
            "wednesday": [ 14, 17, 26, 11 ],
            "thursday": [ 13, 16, 25, 10 ],
            "friday": [ 19, 23, 31, 16 ],
            "saturday": [ 18, 21, 30, 15 ],
            "sunday": [ 17, 21, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 329,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/schokko-with-red-hat-1909.jpg',
          title: 'Schokko with Red Hat',
          artist: 'Alexej von Jawlensky',
          year: '1909',
          rule: {
            "monday": [ 18, 22, 30, 15 ],
            "tuesday": [ 17, 21, 29, 14 ],
            "wednesday": [ 16, 18, 28, 13 ],
            "thursday": [ 15, 18, 27, 12 ],
            "friday": [ 14, 17, 26, 11 ],
            "saturday": [ 20, 24, 1, 17 ],
            "sunday": [ 19, 22, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 330,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/red-staff-1937.jpg',
          title: 'Red Staff',
          artist: 'Rudolf Bauer',
          year: '1937',
          rule: {
            "monday": [ 19, 22, 31, 16 ],
            "tuesday": [ 18, 22, 30, 15 ],
            "wednesday": [ 17, 21, 29, 14 ],
            "thursday": [ 16, 18, 28, 13 ],
            "friday": [ 15, 18, 27, 12 ],
            "saturday": [ 14, 17, 26, 11 ],
            "sunday": [ 20, 24, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 331,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/gypsy-with-a-guitar-1921.jpg',
          title: 'Gypsy with a Guitar',
          artist: 'Eugeniusz Zak',
          year: '1921',
          rule: {
            "monday": [ 20, 24, 1, 17 ],
            "tuesday": [ 19, 22, 31, 16 ],
            "wednesday": [ 18, 22, 30, 15 ],
            "thursday": [ 17, 21, 29, 14 ],
            "friday": [ 16, 18, 28, 13 ],
            "saturday": [ 15, 18, 27, 12 ],
            "sunday": [ 14, 17, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 332,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/huge-landscape-mask-1938.jpg',
          title: 'Huge Landscape Mask',
          artist: 'Vajda Lajos',
          year: '1938',
          rule: {
            "monday": [ 14, 17, 26, 11 ],
            "tuesday": [ 20, 24, 1, 17 ],
            "wednesday": [ 19, 22, 31, 16 ],
            "thursday": [ 18, 22, 30, 15 ],
            "friday": [ 17, 21, 29, 14 ],
            "saturday": [ 16, 18, 28, 13 ],
            "sunday": [ 15, 18, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 333,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/le-voile-persan-1909.jpg',
          title: 'Le voile Persan',
          artist: 'John Duncan Fergusson',
          year: '1909',
          rule: {
            "monday": [ 15, 18, 27, 12 ],
            "tuesday": [ 14, 17, 26, 11 ],
            "wednesday": [ 20, 24, 1, 17 ],
            "thursday": [ 19, 22, 31, 16 ],
            "friday": [ 18, 22, 30, 15 ],
            "saturday": [ 17, 21, 29, 14 ],
            "sunday": [ 16, 18, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 334,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/chaos-1906.jpg',
          title: 'Chaos',
          artist: 'Kuzma Petrov-Vodkin',
          year: '1906',
          rule: {
            "monday": [ 16, 18, 28, 13 ],
            "tuesday": [ 15, 18, 27, 12 ],
            "wednesday": [ 14, 17, 26, 11 ],
            "thursday": [ 20, 24, 1, 17 ],
            "friday": [ 19, 22, 31, 16 ],
            "saturday": [ 18, 22, 30, 15 ],
            "sunday": [ 17, 21, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 335,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-black-mask-1908.jpg',
          title: 'The Black Mask',
          artist: 'Lovis Corinth',
          year: '1908',
          rule: {
            "monday": [ 17, 21, 29, 14 ],
            "tuesday": [ 16, 18, 28, 13 ],
            "wednesday": [ 15, 18, 27, 12 ],
            "thursday": [ 14, 17, 26, 11 ],
            "friday": [ 20, 24, 1, 17 ],
            "saturday": [ 19, 22, 31, 16 ],
            "sunday": [ 18, 22, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 336,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/blue-black-red-1918.jpg',
          title: 'Blue, black, red',
          artist: 'Aleksandra Ekster',
          year: '1917 - 1918',
          rule: {
            "monday": [ 19, 23, 31, 16 ],
            "tuesday": [ 18, 22, 30, 15 ],
            "wednesday": [ 17, 19, 29, 14 ],
            "thursday": [ 16, 19, 28, 13 ],
            "friday": [ 15, 18, 27, 12 ],
            "saturday": [ 21, 25, 2, 18 ],
            "sunday": [ 20, 23, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 337,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/river-with-poplars-1912.jpg',
          title: 'River with Poplars',
          artist: 'Roger Fry',
          year: '1912',
          rule: {
            "monday": [ 20, 23, 1, 17 ],
            "tuesday": [ 19, 23, 31, 16 ],
            "wednesday": [ 18, 22, 30, 15 ],
            "thursday": [ 17, 19, 29, 14 ],
            "friday": [ 16, 19, 28, 13 ],
            "saturday": [ 15, 18, 27, 12 ],
            "sunday": [ 21, 25, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 338,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/peter-i-the-great-1907.jpg',
          title: 'Peter I the Great',
          artist: 'Valentin Serov',
          year: '1907',
          rule: {
            "monday": [ 21, 25, 2, 18 ],
            "tuesday": [ 20, 23, 1, 17 ],
            "wednesday": [ 19, 23, 31, 16 ],
            "thursday": [ 18, 22, 30, 15 ],
            "friday": [ 17, 19, 29, 14 ],
            "saturday": [ 16, 19, 28, 13 ],
            "sunday": [ 15, 18, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 339,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/beggars-1933.jpg',
          title: 'Beggars',
          artist: 'Louis Schanker',
          year: '1933',
          rule: {
            "monday": [ 15, 18, 27, 12 ],
            "tuesday": [ 21, 25, 2, 18 ],
            "wednesday": [ 20, 23, 1, 17 ],
            "thursday": [ 19, 23, 31, 16 ],
            "friday": [ 18, 22, 30, 15 ],
            "saturday": [ 17, 19, 29, 14 ],
            "sunday": [ 16, 19, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 340,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/tale-of-the-doomed-prince-1915.jpg',
          title: 'Tale of the doomed prince',
          artist: 'Max Kurzweil',
          year: '1915',
          rule: {
            "monday": [ 16, 19, 28, 13 ],
            "tuesday": [ 15, 18, 27, 12 ],
            "wednesday": [ 21, 25, 2, 18 ],
            "thursday": [ 20, 23, 1, 17 ],
            "friday": [ 19, 23, 31, 16 ],
            "saturday": [ 18, 22, 30, 15 ],
            "sunday": [ 17, 19, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 341,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/poster-for-the-berlin-secession-art-and-artist-magazine-1906.jpg',
          title: 'Poster for the Berlin Secession, Art and Artist magazine',
          artist: 'Thomas Theodor Heine',
          year: '1906',
          rule: {
            "monday": [ 17, 19, 29, 14 ],
            "tuesday": [ 16, 19, 28, 13 ],
            "wednesday": [ 15, 18, 27, 12 ],
            "thursday": [ 21, 25, 2, 18 ],
            "friday": [ 20, 23, 1, 17 ],
            "saturday": [ 19, 23, 31, 16 ],
            "sunday": [ 18, 22, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 342,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/il-trittico-della-velocit-l-arrivo-1927.jpg',
          title: 'il Trittico della Velocità: L\'Arrivo',
          artist: 'Gerardo Dottori',
          year: '1927',
          rule: {
            "monday": [ 18, 22, 30, 15 ],
            "tuesday": [ 17, 19, 29, 14 ],
            "wednesday": [ 16, 19, 28, 13 ],
            "thursday": [ 15, 18, 27, 12 ],
            "friday": [ 21, 25, 2, 18 ],
            "saturday": [ 20, 23, 1, 17 ],
            "sunday": [ 19, 23, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 343,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/a-boca-da-esfinge-lisboa-capa-1924.jpg',
          title: 'A Boca da Esfinge Lisboa (Capa)',
          artist: 'Bernardo Marques',
          year: '1924',
          rule: {
            "monday": [ 20, 24, 1, 17 ],
            "tuesday": [ 19, 23, 31, 16 ],
            "wednesday": [ 18, 20, 30, 15 ],
            "thursday": [ 17, 20, 29, 14 ],
            "friday": [ 16, 19, 28, 13 ],
            "saturday": [ 22, 26, 3, 19 ],
            "sunday": [ 21, 24, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 344,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/passing-rain-1917.jpg',
          title: 'Passing Rain',
          artist: 'Ito Shinsui',
          year: '1917',
          rule: {
            "monday": [ 21, 24, 2, 18 ],
            "tuesday": [ 20, 24, 1, 17 ],
            "wednesday": [ 19, 23, 31, 16 ],
            "thursday": [ 18, 20, 30, 15 ],
            "friday": [ 17, 20, 29, 14 ],
            "saturday": [ 16, 19, 28, 13 ],
            "sunday": [ 22, 26, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 345,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/unloading-sand-1902.jpg',
          title: 'Unloading Sand',
          artist: 'Albert Marquet',
          year: '1902',
          rule: {
            "monday": [ 22, 26, 3, 19 ],
            "tuesday": [ 21, 24, 2, 18 ],
            "wednesday": [ 20, 24, 1, 17 ],
            "thursday": [ 19, 23, 31, 16 ],
            "friday": [ 18, 20, 30, 15 ],
            "saturday": [ 17, 20, 29, 14 ],
            "sunday": [ 16, 19, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 346,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/church-at-tr-boul-1930.jpg',
          title: 'Church at Tréboul',
          artist: 'Christopher Wood',
          year: '1930',
          rule: {
            "monday": [ 16, 19, 28, 13 ],
            "tuesday": [ 22, 26, 3, 19 ],
            "wednesday": [ 21, 24, 2, 18 ],
            "thursday": [ 20, 24, 1, 17 ],
            "friday": [ 19, 23, 31, 16 ],
            "saturday": [ 18, 20, 30, 15 ],
            "sunday": [ 17, 20, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 347,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/things-suspended-in-the-sky-1914.jpg',
          title: 'Things Suspended in the Sky',
          artist: 'Koshiro Onchi',
          year: '1914',
          rule: {
            "monday": [ 17, 20, 29, 14 ],
            "tuesday": [ 16, 19, 28, 13 ],
            "wednesday": [ 22, 26, 3, 19 ],
            "thursday": [ 21, 24, 2, 18 ],
            "friday": [ 20, 24, 1, 17 ],
            "saturday": [ 19, 23, 31, 16 ],
            "sunday": [ 18, 20, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 348,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/skating-rink-in-winter-1915.jpg',
          title: 'Skating Rink in Winter',
          artist: 'Konstantin Somov',
          year: '1915',
          rule: {
            "monday": [ 18, 20, 30, 15 ],
            "tuesday": [ 17, 20, 29, 14 ],
            "wednesday": [ 16, 19, 28, 13 ],
            "thursday": [ 22, 26, 3, 19 ],
            "friday": [ 21, 24, 2, 18 ],
            "saturday": [ 20, 24, 1, 17 ],
            "sunday": [ 19, 23, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 349,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/patterned-hillside-1918.jpg',
          title: 'Patterned Hillside',
          artist: 'Frank Johnston',
          year: '1918',
          rule: {
            "monday": [ 19, 23, 31, 16 ],
            "tuesday": [ 18, 20, 30, 15 ],
            "wednesday": [ 17, 20, 29, 14 ],
            "thursday": [ 16, 19, 28, 13 ],
            "friday": [ 22, 26, 3, 19 ],
            "saturday": [ 21, 24, 2, 18 ],
            "sunday": [ 20, 24, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 350,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/crucifixion-1928.jpg',
          title: 'Crucifixion',
          artist: 'Gerardo Dottori',
          year: '1928',
          rule: {
            "monday": [ 21, 25, 2, 18 ],
            "tuesday": [ 20, 24, 1, 17 ],
            "wednesday": [ 19, 21, 31, 16 ],
            "thursday": [ 18, 21, 30, 15 ],
            "friday": [ 17, 20, 29, 14 ],
            "saturday": [ 23, 27, 4, 20 ],
            "sunday": [ 22, 25, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 351,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/thirsty-warrior-1915.jpg',
          title: 'Thirsty Warrior',
          artist: 'Kuzma Petrov-Vodkin',
          year: '1915',
          rule: {
            "monday": [ 22, 25, 3, 19 ],
            "tuesday": [ 21, 25, 2, 18 ],
            "wednesday": [ 20, 24, 1, 17 ],
            "thursday": [ 19, 21, 31, 16 ],
            "friday": [ 18, 21, 30, 15 ],
            "saturday": [ 17, 20, 29, 14 ],
            "sunday": [ 23, 27, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 352,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/de-wiedster-1930(1).jpg',
          title: 'De Wiedster',
          artist: 'Gustave de Smet',
          year: '1930',
          rule: {
            "monday": [ 23, 27, 4, 20 ],
            "tuesday": [ 22, 25, 3, 19 ],
            "wednesday": [ 21, 25, 2, 18 ],
            "thursday": [ 20, 24, 1, 17 ],
            "friday": [ 19, 21, 31, 16 ],
            "saturday": [ 18, 21, 30, 15 ],
            "sunday": [ 17, 20, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 353,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/percolator-1927.jpg',
          title: 'Percolator',
          artist: 'Stuart Davis',
          year: '1927',
          rule: {
            "monday": [ 17, 20, 29, 14 ],
            "tuesday": [ 23, 27, 4, 20 ],
            "wednesday": [ 22, 25, 3, 19 ],
            "thursday": [ 21, 25, 2, 18 ],
            "friday": [ 20, 24, 1, 17 ],
            "saturday": [ 19, 21, 31, 16 ],
            "sunday": [ 18, 21, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 354,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/pentecast-1909.jpg',
          title: 'Pentecast',
          artist: 'Emil Nolde',
          year: '1909',
          rule: {
            "monday": [ 18, 21, 30, 15 ],
            "tuesday": [ 17, 20, 29, 14 ],
            "wednesday": [ 23, 27, 4, 20 ],
            "thursday": [ 22, 25, 3, 19 ],
            "friday": [ 21, 25, 2, 18 ],
            "saturday": [ 20, 24, 1, 17 ],
            "sunday": [ 19, 21, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 355,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/not_detected_235988.jpg',
          title: 'Old Man with Noose',
          artist: 'Kathe Kollwitz',
          year: '1923',
          rule: {
            "monday": [ 19, 21, 31, 16 ],
            "tuesday": [ 18, 21, 30, 15 ],
            "wednesday": [ 17, 20, 29, 14 ],
            "thursday": [ 23, 27, 4, 20 ],
            "friday": [ 22, 25, 3, 19 ],
            "saturday": [ 21, 25, 2, 18 ],
            "sunday": [ 20, 24, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 356,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/red-square-in-moscow-1910.jpg',
          title: 'Red Square in Moscow',
          artist: 'Konstantin Korovin',
          year: '1910',
          rule: {
            "monday": [ 20, 24, 1, 17 ],
            "tuesday": [ 19, 21, 31, 16 ],
            "wednesday": [ 18, 21, 30, 15 ],
            "thursday": [ 17, 20, 29, 14 ],
            "friday": [ 23, 27, 4, 20 ],
            "saturday": [ 22, 25, 3, 19 ],
            "sunday": [ 21, 25, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 357,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/vanity-1904.jpg',
          title: 'Vanity',
          artist: 'Aladar Korosfoi-Kriesch',
          year: '1904',
          rule: {
            "monday": [ 22, 26, 3, 19 ],
            "tuesday": [ 21, 25, 2, 18 ],
            "wednesday": [ 20, 22, 1, 17 ],
            "thursday": [ 19, 22, 31, 16 ],
            "friday": [ 18, 21, 30, 15 ],
            "saturday": [ 24, 28, 5, 21 ],
            "sunday": [ 23, 26, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 358,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-blimp-1933.jpg',
          title: 'The Blimp',
          artist: 'Carel Willink',
          year: '1933',
          rule: {
            "monday": [ 23, 26, 4, 20 ],
            "tuesday": [ 22, 26, 3, 19 ],
            "wednesday": [ 21, 25, 2, 18 ],
            "thursday": [ 20, 22, 1, 17 ],
            "friday": [ 19, 22, 31, 16 ],
            "saturday": [ 18, 21, 30, 15 ],
            "sunday": [ 24, 28, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 359,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/sextant-1917.jpg',
          title: 'Sextant',
          artist: 'Marsden Hartley',
          year: '1917',
          rule: {
            "monday": [ 24, 28, 5, 21 ],
            "tuesday": [ 23, 26, 4, 20 ],
            "wednesday": [ 22, 26, 3, 19 ],
            "thursday": [ 21, 25, 2, 18 ],
            "friday": [ 20, 22, 1, 17 ],
            "saturday": [ 19, 22, 31, 16 ],
            "sunday": [ 18, 21, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 360,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-future-man-1933(1).jpg',
          title: 'The Future Man',
          artist: 'Paul Klee',
          year: '1933',
          rule: {
            "monday": [ 18, 21, 30, 15 ],
            "tuesday": [ 24, 28, 5, 21 ],
            "wednesday": [ 23, 26, 4, 20 ],
            "thursday": [ 22, 26, 3, 19 ],
            "friday": [ 21, 25, 2, 18 ],
            "saturday": [ 20, 22, 1, 17 ],
            "sunday": [ 19, 22, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 361,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/around-the-circle-1940.jpg',
          title: 'Around the circle',
          artist: 'Wassily Kandinsky',
          year: '1940',
          rule: {
            "monday": [ 19, 22, 31, 16 ],
            "tuesday": [ 18, 21, 30, 15 ],
            "wednesday": [ 24, 28, 5, 21 ],
            "thursday": [ 23, 26, 4, 20 ],
            "friday": [ 22, 26, 3, 19 ],
            "saturday": [ 21, 25, 2, 18 ],
            "sunday": [ 20, 22, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 362,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/algoma-in-november-1935.jpg',
          title: 'Algoma in November',
          artist: 'A.Y. Jackson',
          year: '1935',
          rule: {
            "monday": [ 20, 22, 1, 17 ],
            "tuesday": [ 19, 22, 31, 16 ],
            "wednesday": [ 18, 21, 30, 15 ],
            "thursday": [ 24, 28, 5, 21 ],
            "friday": [ 23, 26, 4, 20 ],
            "saturday": [ 22, 26, 3, 19 ],
            "sunday": [ 21, 25, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 363,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/imbarcadero-a-zurigo-1927.jpg',
          title: 'Imbarcadero a Zurigo',
          artist: 'Julius Bissier',
          year: '1927',
          rule: {
            "monday": [ 21, 25, 2, 18 ],
            "tuesday": [ 20, 22, 1, 17 ],
            "wednesday": [ 19, 22, 31, 16 ],
            "thursday": [ 18, 21, 30, 15 ],
            "friday": [ 24, 28, 5, 21 ],
            "saturday": [ 23, 26, 4, 20 ],
            "sunday": [ 22, 26, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 364,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/golden-yellow-corn-1929.jpg',
          title: 'Golden Yellow Corn',
          artist: 'Sanyu',
          year: '1929',
          rule: {
            "monday": [ 23, 27, 4, 20 ],
            "tuesday": [ 22, 26, 3, 19 ],
            "wednesday": [ 21, 23, 2, 18 ],
            "thursday": [ 20, 23, 1, 17 ],
            "friday": [ 19, 22, 31, 16 ],
            "saturday": [ 25, 29, 6, 22 ],
            "sunday": [ 24, 27, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 365,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/loads-with-a-crane-barge-on-the-seine-1932.jpg',
          title: 'Loads with a crane barge on the Seine',
          artist: 'Alekos Kontopoulos',
          year: '1932',
          rule: {
            "monday": [ 24, 27, 5, 21 ],
            "tuesday": [ 23, 27, 4, 20 ],
            "wednesday": [ 22, 26, 3, 19 ],
            "thursday": [ 21, 23, 2, 18 ],
            "friday": [ 20, 23, 1, 17 ],
            "saturday": [ 19, 22, 31, 16 ],
            "sunday": [ 25, 29, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 366,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/old-schoolhouse-ryders.jpg',
          title: 'Old Schoolhouse, Ryders',
          artist: 'George Luks',
          year: 'c.1929',
          rule: {
            "monday": [ 25, 29, 6, 22 ],
            "tuesday": [ 24, 27, 5, 21 ],
            "wednesday": [ 23, 27, 4, 20 ],
            "thursday": [ 22, 26, 3, 19 ],
            "friday": [ 21, 23, 2, 18 ],
            "saturday": [ 20, 23, 1, 17 ],
            "sunday": [ 19, 22, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 367,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/figures-and-donkeys-also-known-as-fantasy-with-horse.jpg',
          title: 'Figures and Donkeys (also known as Fantasy with Horse)',
          artist: 'Maurice Prendergast',
          year: 'c.1913 - c.1915',
          rule: {
            "monday": [ 19, 22, 31, 16 ],
            "tuesday": [ 25, 29, 6, 22 ],
            "wednesday": [ 24, 27, 5, 21 ],
            "thursday": [ 23, 27, 4, 20 ],
            "friday": [ 22, 26, 3, 19 ],
            "saturday": [ 21, 23, 2, 18 ],
            "sunday": [ 20, 23, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 368,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/early-spring-1913.jpg',
          title: 'The Spring Sun',
          artist: 'Abraham Manievich',
          year: '1913',
          rule: {
            "monday": [ 20, 23, 1, 17 ],
            "tuesday": [ 19, 22, 31, 16 ],
            "wednesday": [ 25, 29, 6, 22 ],
            "thursday": [ 24, 27, 5, 21 ],
            "friday": [ 23, 27, 4, 20 ],
            "saturday": [ 22, 26, 3, 19 ],
            "sunday": [ 21, 23, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 369,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/pesta-i-trappen-1900.jpg',
          title: 'Pesta I Trappen',
          artist: 'Theodor Severin Kittelsen',
          year: '1900',
          rule: {
            "monday": [ 21, 23, 2, 18 ],
            "tuesday": [ 20, 23, 1, 17 ],
            "wednesday": [ 19, 22, 31, 16 ],
            "thursday": [ 25, 29, 6, 22 ],
            "friday": [ 24, 27, 5, 21 ],
            "saturday": [ 23, 27, 4, 20 ],
            "sunday": [ 22, 26, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 370,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/polo-at-lakewood-1910.jpg',
          title: 'Polo at Lakewood',
          artist: 'George Bellows',
          year: '1910',
          rule: {
            "monday": [ 22, 26, 3, 19 ],
            "tuesday": [ 21, 23, 2, 18 ],
            "wednesday": [ 20, 23, 1, 17 ],
            "thursday": [ 19, 22, 31, 16 ],
            "friday": [ 25, 29, 6, 22 ],
            "saturday": [ 24, 27, 5, 21 ],
            "sunday": [ 23, 27, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 371,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/from-thorheiten-1901-4.jpg',
          title: 'from Thorheiten',
          artist: 'Thomas Theodor Heine',
          year: '1901',
          rule: {
            "monday": [ 24, 28, 5, 21 ],
            "tuesday": [ 23, 27, 4, 20 ],
            "wednesday": [ 22, 24, 3, 19 ],
            "thursday": [ 21, 24, 2, 18 ],
            "friday": [ 20, 23, 1, 17 ],
            "saturday": [ 26, 30, 7, 23 ],
            "sunday": [ 25, 28, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 372,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/pancake-parsley.jpg',
          title: 'Pancake Parsley',
          artist: 'Serge Sudeikin',
          year: 'c.1915',
          rule: {
            "monday": [ 25, 28, 6, 22 ],
            "tuesday": [ 24, 28, 5, 21 ],
            "wednesday": [ 23, 27, 4, 20 ],
            "thursday": [ 22, 24, 3, 19 ],
            "friday": [ 21, 24, 2, 18 ],
            "saturday": [ 20, 23, 1, 17 ],
            "sunday": [ 26, 30, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 373,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/vanquished-1931.jpg',
          title: 'Vanquished',
          artist: 'Emily Carr',
          year: '1931',
          rule: {
            "monday": [ 26, 30, 7, 23 ],
            "tuesday": [ 25, 28, 6, 22 ],
            "wednesday": [ 24, 28, 5, 21 ],
            "thursday": [ 23, 27, 4, 20 ],
            "friday": [ 22, 24, 3, 19 ],
            "saturday": [ 21, 24, 2, 18 ],
            "sunday": [ 20, 23, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 374,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/girl-reading-1904.jpg',
          title: 'Girl Reading',
          artist: 'Helene Schjerfbeck',
          year: '1904',
          rule: {
            "monday": [ 20, 23, 1, 17 ],
            "tuesday": [ 26, 30, 7, 23 ],
            "wednesday": [ 25, 28, 6, 22 ],
            "thursday": [ 24, 28, 5, 21 ],
            "friday": [ 23, 27, 4, 20 ],
            "saturday": [ 22, 24, 3, 19 ],
            "sunday": [ 21, 24, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 375,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/picnic-on-a-hill-1915.jpg',
          title: 'Picnic On a Hill',
          artist: 'Heinrich Kuhn',
          year: '1915',
          rule: {
            "monday": [ 21, 24, 2, 18 ],
            "tuesday": [ 20, 23, 1, 17 ],
            "wednesday": [ 26, 30, 7, 23 ],
            "thursday": [ 25, 28, 6, 22 ],
            "friday": [ 24, 28, 5, 21 ],
            "saturday": [ 23, 27, 4, 20 ],
            "sunday": [ 22, 24, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 376,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/sennoy-market-kiev-1914.jpg',
          title: 'Sennoy market. Kiev.',
          artist: 'Oleksandr Bogomazov',
          year: '1914',
          rule: {
            "monday": [ 22, 24, 3, 19 ],
            "tuesday": [ 21, 24, 2, 18 ],
            "wednesday": [ 20, 23, 1, 17 ],
            "thursday": [ 26, 30, 7, 23 ],
            "friday": [ 25, 28, 6, 22 ],
            "saturday": [ 24, 28, 5, 21 ],
            "sunday": [ 23, 27, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 377,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/adolescente-1928.jpg',
          title: 'Adolescente',
          artist: 'Antonietta Raphael',
          year: '1928',
          rule: {
            "monday": [ 23, 27, 4, 20 ],
            "tuesday": [ 22, 24, 3, 19 ],
            "wednesday": [ 21, 24, 2, 18 ],
            "thursday": [ 20, 23, 1, 17 ],
            "friday": [ 26, 30, 7, 23 ],
            "saturday": [ 25, 28, 6, 22 ],
            "sunday": [ 24, 28, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 378,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/street-moscow-1910.jpg',
          title: 'Street, Moscow',
          artist: 'Aristarkh Lentulov',
          year: '1910',
          rule: {
            "monday": [ 25, 29, 6, 22 ],
            "tuesday": [ 24, 28, 5, 21 ],
            "wednesday": [ 23, 25, 4, 20 ],
            "thursday": [ 22, 25, 3, 19 ],
            "friday": [ 21, 24, 2, 18 ],
            "saturday": [ 27, 31, 8, 24 ],
            "sunday": [ 26, 29, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 379,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/machinery-1920.jpg',
          title: 'Machinery',
          artist: 'Charles Demuth',
          year: '1920',
          rule: {
            "monday": [ 26, 29, 7, 23 ],
            "tuesday": [ 25, 29, 6, 22 ],
            "wednesday": [ 24, 28, 5, 21 ],
            "thursday": [ 23, 25, 4, 20 ],
            "friday": [ 22, 25, 3, 19 ],
            "saturday": [ 21, 24, 2, 18 ],
            "sunday": [ 27, 31, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 380,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/witch-s-head-1915.jpg',
          title: 'Witch\'s head',
          artist: 'August Natterer',
          year: '1915',
          rule: {
            "monday": [ 27, 31, 8, 24 ],
            "tuesday": [ 26, 29, 7, 23 ],
            "wednesday": [ 25, 29, 6, 22 ],
            "thursday": [ 24, 28, 5, 21 ],
            "friday": [ 23, 25, 4, 20 ],
            "saturday": [ 22, 25, 3, 19 ],
            "sunday": [ 21, 24, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 381,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/portrait-of-a-girl-1909.jpg',
          title: 'Portrait of a Girl',
          artist: 'Alexej von Jawlensky',
          year: '1909',
          rule: {
            "monday": [ 21, 24, 2, 18 ],
            "tuesday": [ 27, 31, 8, 24 ],
            "wednesday": [ 26, 29, 7, 23 ],
            "thursday": [ 25, 29, 6, 22 ],
            "friday": [ 24, 28, 5, 21 ],
            "saturday": [ 23, 25, 4, 20 ],
            "sunday": [ 22, 25, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 382,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-beached-margin-1937.jpg',
          title: 'The Beached Margin',
          artist: 'Edward Wadsworth',
          year: '1937',
          rule: {
            "monday": [ 22, 25, 3, 19 ],
            "tuesday": [ 21, 24, 2, 18 ],
            "wednesday": [ 27, 31, 8, 24 ],
            "thursday": [ 26, 29, 7, 23 ],
            "friday": [ 25, 29, 6, 22 ],
            "saturday": [ 24, 28, 5, 21 ],
            "sunday": [ 23, 25, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 383,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/south-indian-villagers-going-to-a-market-1937.jpg',
          title: 'South Indian Villagers Going to a Market',
          artist: 'Amrita Sher-Gil',
          year: '1937',
          rule: {
            "monday": [ 23, 25, 4, 20 ],
            "tuesday": [ 22, 25, 3, 19 ],
            "wednesday": [ 21, 24, 2, 18 ],
            "thursday": [ 27, 31, 8, 24 ],
            "friday": [ 26, 29, 7, 23 ],
            "saturday": [ 25, 29, 6, 22 ],
            "sunday": [ 24, 28, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 384,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/at-olympia-s-design-for-tales-of-hoffmann-by-j-offenbach-1915.jpg',
          title: 'At Olympia\'s. Design for "Tales of Hoffmann" by J. Offenbach.',
          artist: 'Serge Sudeikin',
          year: '1915',
          rule: {
            "monday": [ 24, 28, 5, 21 ],
            "tuesday": [ 23, 25, 4, 20 ],
            "wednesday": [ 22, 25, 3, 19 ],
            "thursday": [ 21, 24, 2, 18 ],
            "friday": [ 27, 31, 8, 24 ],
            "saturday": [ 26, 29, 7, 23 ],
            "sunday": [ 25, 29, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 385,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/obatan-parrot-1926.jpg',
          title: 'Obatan Parrot',
          artist: 'Hiroshi Yoshida',
          year: '1926',
          rule: {
            "monday": [ 26, 30, 7, 23 ],
            "tuesday": [ 25, 29, 6, 22 ],
            "wednesday": [ 24, 26, 5, 21 ],
            "thursday": [ 23, 26, 4, 20 ],
            "friday": [ 22, 25, 3, 19 ],
            "saturday": [ 28, 1, 9, 25 ],
            "sunday": [ 27, 30, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 386,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/cassandra-1908.jpg',
          title: 'Cassandra',
          artist: 'Aladar Korosfoi-Kriesch',
          year: '1908',
          rule: {
            "monday": [ 27, 30, 8, 24 ],
            "tuesday": [ 26, 30, 7, 23 ],
            "wednesday": [ 25, 29, 6, 22 ],
            "thursday": [ 24, 26, 5, 21 ],
            "friday": [ 23, 26, 4, 20 ],
            "saturday": [ 22, 25, 3, 19 ],
            "sunday": [ 28, 1, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 387,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/gladiators-1932.jpg',
          title: 'Gladiators',
          artist: 'Rafael Zabaleta',
          year: '1932',
          rule: {
            "monday": [ 28, 1, 9, 25 ],
            "tuesday": [ 27, 30, 8, 24 ],
            "wednesday": [ 26, 30, 7, 23 ],
            "thursday": [ 25, 29, 6, 22 ],
            "friday": [ 24, 26, 5, 21 ],
            "saturday": [ 23, 26, 4, 20 ],
            "sunday": [ 22, 25, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 388,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/siesta-1913.jpg',
          title: 'Siesta',
          artist: 'Jules Pascin',
          year: '1913',
          rule: {
            "monday": [ 22, 25, 3, 19 ],
            "tuesday": [ 28, 1, 9, 25 ],
            "wednesday": [ 27, 30, 8, 24 ],
            "thursday": [ 26, 30, 7, 23 ],
            "friday": [ 25, 29, 6, 22 ],
            "saturday": [ 24, 26, 5, 21 ],
            "sunday": [ 23, 26, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 389,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/valley-road-1920.jpg',
          title: 'Valley Road',
          artist: 'Marsden Hartley',
          year: '1920',
          rule: {
            "monday": [ 23, 26, 4, 20 ],
            "tuesday": [ 22, 25, 3, 19 ],
            "wednesday": [ 28, 1, 9, 25 ],
            "thursday": [ 27, 30, 8, 24 ],
            "friday": [ 26, 30, 7, 23 ],
            "saturday": [ 25, 29, 6, 22 ],
            "sunday": [ 24, 26, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 390,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/lancaster-1920.jpg',
          title: 'Lancaster',
          artist: 'Charles Demuth',
          year: '1920',
          rule: {
            "monday": [ 24, 26, 5, 21 ],
            "tuesday": [ 23, 26, 4, 20 ],
            "wednesday": [ 22, 25, 3, 19 ],
            "thursday": [ 28, 1, 9, 25 ],
            "friday": [ 27, 30, 8, 24 ],
            "saturday": [ 26, 30, 7, 23 ],
            "sunday": [ 25, 29, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 391,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/personnages-aux-chevaux-1935.jpg',
          title: 'Personnages aux chevaux',
          artist: 'Marcelle Cahn',
          year: '1935',
          rule: {
            "monday": [ 25, 29, 6, 22 ],
            "tuesday": [ 24, 26, 5, 21 ],
            "wednesday": [ 23, 26, 4, 20 ],
            "thursday": [ 22, 25, 3, 19 ],
            "friday": [ 28, 1, 9, 25 ],
            "saturday": [ 27, 30, 8, 24 ],
            "sunday": [ 26, 30, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 392,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/artillery-1911.jpg',
          title: 'Artillery',
          artist: 'Roger de La Fresnaye',
          year: '1911',
          rule: {
            "monday": [ 27, 31, 8, 24 ],
            "tuesday": [ 26, 30, 7, 23 ],
            "wednesday": [ 25, 27, 6, 22 ],
            "thursday": [ 24, 27, 5, 21 ],
            "friday": [ 23, 26, 4, 20 ],
            "saturday": [ 29, 2, 10, 26 ],
            "sunday": [ 28, 31, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 393,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-birth-of-venus-1.jpg',
          title: 'The Birth of Venus',
          artist: 'Odilon Redon',
          year: 'c.1912',
          rule: {
            "monday": [ 28, 31, 9, 25 ],
            "tuesday": [ 27, 31, 8, 24 ],
            "wednesday": [ 26, 30, 7, 23 ],
            "thursday": [ 25, 27, 6, 22 ],
            "friday": [ 24, 27, 5, 21 ],
            "saturday": [ 23, 26, 4, 20 ],
            "sunday": [ 29, 2, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 394,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-sisters-1921.jpg',
          title: 'The Sisters',
          artist: '1921',
          year: '',
          rule: {
            "monday": [ 29, 2, 10, 26 ],
            "tuesday": [ 28, 31, 9, 25 ],
            "wednesday": [ 27, 31, 8, 24 ],
            "thursday": [ 26, 30, 7, 23 ],
            "friday": [ 25, 27, 6, 22 ],
            "saturday": [ 24, 27, 5, 21 ],
            "sunday": [ 23, 26, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 395,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/small-table-upper-surface-1920.jpg',
          title: 'Small table (upper surface)',
          artist: 'Julius Evola',
          year: '1920',
          rule: {
            "monday": [ 23, 26, 4, 20 ],
            "tuesday": [ 29, 2, 10, 26 ],
            "wednesday": [ 28, 31, 9, 25 ],
            "thursday": [ 27, 31, 8, 24 ],
            "friday": [ 26, 30, 7, 23 ],
            "saturday": [ 25, 27, 6, 22 ],
            "sunday": [ 24, 27, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 396,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/from-thorheiten-1901.jpg',
          title: 'from Thorheiten',
          artist: 'Thomas Theodor Heine',
          year: '1901',
          rule: {
            "monday": [ 24, 27, 5, 21 ],
            "tuesday": [ 23, 26, 4, 20 ],
            "wednesday": [ 29, 2, 10, 26 ],
            "thursday": [ 28, 31, 9, 25 ],
            "friday": [ 27, 31, 8, 24 ],
            "saturday": [ 26, 30, 7, 23 ],
            "sunday": [ 25, 27, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 397,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/cleopatre-a-dancer-1909.jpg',
          title: 'Costume design for the ballet "Cleopatra"',
          artist: 'Leon Bakst',
          year: '1909',
          rule: {
            "monday": [ 25, 27, 6, 22 ],
            "tuesday": [ 24, 27, 5, 21 ],
            "wednesday": [ 23, 26, 4, 20 ],
            "thursday": [ 29, 2, 10, 26 ],
            "friday": [ 28, 31, 9, 25 ],
            "saturday": [ 27, 31, 8, 24 ],
            "sunday": [ 26, 30, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 398,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/grey-weather-at-pipervika-akershus-1922.jpg',
          title: 'Grey weather at Pipervika, Akershus',
          artist: 'Karl Edvard Diriks',
          year: '1922',
          rule: {
            "monday": [ 26, 30, 7, 23 ],
            "tuesday": [ 25, 27, 6, 22 ],
            "wednesday": [ 24, 27, 5, 21 ],
            "thursday": [ 23, 26, 4, 20 ],
            "friday": [ 29, 2, 10, 26 ],
            "saturday": [ 28, 31, 9, 25 ],
            "sunday": [ 27, 31, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 399,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/figurer-i-trappa-1923.jpg',
          title: 'Figurer I Trappa',
          artist: 'Gosta Adrian-Nilsson',
          year: '1923',
          rule: {
            "monday": [ 28, 1, 9, 25 ],
            "tuesday": [ 27, 31, 8, 24 ],
            "wednesday": [ 26, 28, 7, 23 ],
            "thursday": [ 25, 28, 6, 22 ],
            "friday": [ 24, 27, 5, 21 ],
            "saturday": [ 30, 3, 11, 27 ],
            "sunday": [ 29, 1, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 400,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-white-horse-1920.jpg',
          title: 'The White Horse',
          artist: 'Camille Bombois',
          year: '1920',
          rule: {
            "monday": [ 29, 1, 10, 26 ],
            "tuesday": [ 28, 1, 9, 25 ],
            "wednesday": [ 27, 31, 8, 24 ],
            "thursday": [ 26, 28, 7, 23 ],
            "friday": [ 25, 28, 6, 22 ],
            "saturday": [ 24, 27, 5, 21 ],
            "sunday": [ 30, 3, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 401,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-factory-chimney-meulan-landscape-1912.jpg',
          title: 'The Factory Chimney, Meulan Landscape',
          artist: 'Roger de La Fresnaye',
          year: '1912',
          rule: {
            "monday": [ 30, 3, 11, 27 ],
            "tuesday": [ 29, 1, 10, 26 ],
            "wednesday": [ 28, 1, 9, 25 ],
            "thursday": [ 27, 31, 8, 24 ],
            "friday": [ 26, 28, 7, 23 ],
            "saturday": [ 25, 28, 6, 22 ],
            "sunday": [ 24, 27, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 402,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/marche-aux-fleurs-venise-1907.jpg',
          title: 'Marche aux fleurs à Venise',
          artist: 'Ethel Carrick',
          year: '1907',
          rule: {
            "monday": [ 24, 27, 5, 21 ],
            "tuesday": [ 30, 3, 11, 27 ],
            "wednesday": [ 29, 1, 10, 26 ],
            "thursday": [ 28, 1, 9, 25 ],
            "friday": [ 27, 31, 8, 24 ],
            "saturday": [ 26, 28, 7, 23 ],
            "sunday": [ 25, 28, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 403,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/paysage-montagneux-1929.jpg',
          title: 'Paysage montagneux',
          artist: 'Andre Bauchant',
          year: '1929',
          rule: {
            "monday": [ 25, 28, 6, 22 ],
            "tuesday": [ 24, 27, 5, 21 ],
            "wednesday": [ 30, 3, 11, 27 ],
            "thursday": [ 29, 1, 10, 26 ],
            "friday": [ 28, 1, 9, 25 ],
            "saturday": [ 27, 31, 8, 24 ],
            "sunday": [ 26, 28, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 404,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/menina-com-gato-maria-1900.jpg',
          title: 'Menina com Gato (Maria)',
          artist: 'Antonio Carneiro',
          year: '1900',
          rule: {
            "monday": [ 26, 28, 7, 23 ],
            "tuesday": [ 25, 28, 6, 22 ],
            "wednesday": [ 24, 27, 5, 21 ],
            "thursday": [ 30, 3, 11, 27 ],
            "friday": [ 29, 1, 10, 26 ],
            "saturday": [ 28, 1, 9, 25 ],
            "sunday": [ 27, 31, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 405,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/visitors-from-over-the-sea-1901.jpg',
          title: 'Visitors from over the sea',
          artist: 'Nicholas Roerich',
          year: '1901',
          rule: {
            "monday": [ 27, 31, 8, 24 ],
            "tuesday": [ 26, 28, 7, 23 ],
            "wednesday": [ 25, 28, 6, 22 ],
            "thursday": [ 24, 27, 5, 21 ],
            "friday": [ 30, 3, 11, 27 ],
            "saturday": [ 29, 1, 10, 26 ],
            "sunday": [ 28, 1, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 406,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/maternity-1935.jpg',
          title: 'Maternity',
          artist: 'Jose de Almada-Negreiros',
          year: '1935',
          rule: {
            "monday": [ 29, 2, 10, 26 ],
            "tuesday": [ 28, 1, 9, 25 ],
            "wednesday": [ 27, 29, 8, 24 ],
            "thursday": [ 26, 29, 7, 23 ],
            "friday": [ 25, 28, 6, 22 ],
            "saturday": [ 31, 4, 12, 28 ],
            "sunday": [ 30, 2, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 407,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/mountaineers-attacked-by-bears-1912.jpg',
          title: 'Mountaineers Attacked by Bears',
          artist: 'Henri Le Fauconnier',
          year: '1912',
          rule: {
            "monday": [ 30, 2, 11, 27 ],
            "tuesday": [ 29, 2, 10, 26 ],
            "wednesday": [ 28, 1, 9, 25 ],
            "thursday": [ 27, 29, 8, 24 ],
            "friday": [ 26, 29, 7, 23 ],
            "saturday": [ 25, 28, 6, 22 ],
            "sunday": [ 31, 4, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 408,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-port-in-cannes-1926.jpg',
          title: 'The Port of Cannes',
          artist: 'Pierre Bonnard',
          year: '1926 - 1927',
          rule: {
            "monday": [ 31, 4, 12, 28 ],
            "tuesday": [ 30, 2, 11, 27 ],
            "wednesday": [ 29, 2, 10, 26 ],
            "thursday": [ 28, 1, 9, 25 ],
            "friday": [ 27, 29, 8, 24 ],
            "saturday": [ 26, 29, 7, 23 ],
            "sunday": [ 25, 28, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 409,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/yaroslavna-s-lament-1909.jpg',
          title: 'Yaroslavna\'s Lament',
          artist: 'Konstantin Korovin',
          year: '1909',
          rule: {
            "monday": [ 25, 28, 6, 22 ],
            "tuesday": [ 31, 4, 12, 28 ],
            "wednesday": [ 30, 2, 11, 27 ],
            "thursday": [ 29, 2, 10, 26 ],
            "friday": [ 28, 1, 9, 25 ],
            "saturday": [ 27, 29, 8, 24 ],
            "sunday": [ 26, 29, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 410,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/still-life-with-guitar-1928.jpg',
          title: 'Still Life with Guitar',
          artist: 'Antonietta Raphael',
          year: '1928',
          rule: {
            "monday": [ 26, 29, 7, 23 ],
            "tuesday": [ 25, 28, 6, 22 ],
            "wednesday": [ 31, 4, 12, 28 ],
            "thursday": [ 30, 2, 11, 27 ],
            "friday": [ 29, 2, 10, 26 ],
            "saturday": [ 28, 1, 9, 25 ],
            "sunday": [ 27, 29, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 411,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-egg-1928.jpg',
          title: 'The Egg',
          artist: 'Tarsila do Amaral',
          year: '1928',
          rule: {
            "monday": [ 27, 29, 8, 24 ],
            "tuesday": [ 26, 29, 7, 23 ],
            "wednesday": [ 25, 28, 6, 22 ],
            "thursday": [ 31, 4, 12, 28 ],
            "friday": [ 30, 2, 11, 27 ],
            "saturday": [ 29, 2, 10, 26 ],
            "sunday": [ 28, 1, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 412,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/woman-from-muscel-1935.jpg',
          title: 'Woman from Muscel',
          artist: 'Iosif Iser',
          year: '1935',
          rule: {
            "monday": [ 28, 1, 9, 25 ],
            "tuesday": [ 27, 29, 8, 24 ],
            "wednesday": [ 26, 29, 7, 23 ],
            "thursday": [ 25, 28, 6, 22 ],
            "friday": [ 31, 4, 12, 28 ],
            "saturday": [ 30, 2, 11, 27 ],
            "sunday": [ 29, 2, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 413,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-dinky-bird-1904.jpg',
          title: 'The Dinky Bird',
          artist: 'Maxfield Parrish',
          year: '1904',
          rule: {
            "monday": [ 30, 3, 11, 27 ],
            "tuesday": [ 29, 2, 10, 26 ],
            "wednesday": [ 28, 30, 9, 25 ],
            "thursday": [ 27, 30, 8, 24 ],
            "friday": [ 26, 29, 7, 23 ],
            "saturday": [ 1, 5, 13, 29 ],
            "sunday": [ 31, 3, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 414,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/a-proven-al-stream-1903.jpg',
          title: 'A Provençal Stream',
          artist: 'Henry Herbert La Thangue',
          year: '1903',
          rule: {
            "monday": [ 31, 3, 12, 28 ],
            "tuesday": [ 30, 3, 11, 27 ],
            "wednesday": [ 29, 2, 10, 26 ],
            "thursday": [ 28, 30, 9, 25 ],
            "friday": [ 27, 30, 8, 24 ],
            "saturday": [ 26, 29, 7, 23 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 415,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/futurist-1931(1).jpg',
          title: 'Futurist',
          artist: 'Bruno Munari',
          year: '1931',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 31, 3, 12, 28 ],
            "wednesday": [ 30, 3, 11, 27 ],
            "thursday": [ 29, 2, 10, 26 ],
            "friday": [ 28, 30, 9, 25 ],
            "saturday": [ 27, 30, 8, 24 ],
            "sunday": [ 26, 29, 7, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 416,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/st-george-killing-the-dragon-1918.jpg',
          title: 'St. George killing the dragon',
          artist: 'Ilya Mashkov',
          year: '1918',
          rule: {
            "monday": [ 26, 29, 7, 23 ],
            "tuesday": [ 1, 5, 13, 29 ],
            "wednesday": [ 31, 3, 12, 28 ],
            "thursday": [ 30, 3, 11, 27 ],
            "friday": [ 29, 2, 10, 26 ],
            "saturday": [ 28, 30, 9, 25 ],
            "sunday": [ 27, 30, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 417,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/sunspots-1904.jpg',
          title: 'Sunspots',
          artist: 'Cuno Amiet',
          year: '1904',
          rule: {
            "monday": [ 27, 30, 8, 24 ],
            "tuesday": [ 26, 29, 7, 23 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 31, 3, 12, 28 ],
            "friday": [ 30, 3, 11, 27 ],
            "saturday": [ 29, 2, 10, 26 ],
            "sunday": [ 28, 30, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 418,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/a-sussex-farm-1904.jpg',
          title: 'A Sussex Farm',
          artist: 'Henry Herbert La Thangue',
          year: '1904',
          rule: {
            "monday": [ 28, 30, 9, 25 ],
            "tuesday": [ 27, 30, 8, 24 ],
            "wednesday": [ 26, 29, 7, 23 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 31, 3, 12, 28 ],
            "saturday": [ 30, 3, 11, 27 ],
            "sunday": [ 29, 2, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 419,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/soldat-1917.jpg',
          title: 'Soldat',
          artist: 'Gosta Adrian-Nilsson',
          year: '1917',
          rule: {
            "monday": [ 29, 2, 10, 26 ],
            "tuesday": [ 28, 30, 9, 25 ],
            "wednesday": [ 27, 30, 8, 24 ],
            "thursday": [ 26, 29, 7, 23 ],
            "friday": [ 1, 5, 13, 29 ],
            "saturday": [ 31, 3, 12, 28 ],
            "sunday": [ 30, 3, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 420,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/girl-in-white-1924.jpg',
          title: 'Girl in White',
          artist: 'Nicolae Tonitza',
          year: '1924',
          rule: {
            "monday": [ 31, 4, 12, 28 ],
            "tuesday": [ 30, 3, 11, 27 ],
            "wednesday": [ 29, 31, 10, 26 ],
            "thursday": [ 28, 31, 9, 25 ],
            "friday": [ 27, 30, 8, 24 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 1, 4, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 421,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/twee-bomen-olieverf-op-doek-1910.jpg',
          title: 'Twee bomen, olieverf op doek',
          artist: 'Jacoba van Heemskerck',
          year: '1910',
          rule: {
            "monday": [ 1, 4, 13, 29 ],
            "tuesday": [ 31, 4, 12, 28 ],
            "wednesday": [ 30, 3, 11, 27 ],
            "thursday": [ 29, 31, 10, 26 ],
            "friday": [ 28, 31, 9, 25 ],
            "saturday": [ 27, 30, 8, 24 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 422,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/pilgrimage-to-the-cedars-in-lebanon-1907.jpg',
          title: 'Pilgrimage to the Cedars in Lebanon',
          artist: 'Tivadar Kosztka Csontvary',
          year: '1907',
          rule: {
            "monday": [ 2, 6, 14, 30 ],
            "tuesday": [ 1, 4, 13, 29 ],
            "wednesday": [ 31, 4, 12, 28 ],
            "thursday": [ 30, 3, 11, 27 ],
            "friday": [ 29, 31, 10, 26 ],
            "saturday": [ 28, 31, 9, 25 ],
            "sunday": [ 27, 30, 8, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 423,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/poster-portrait-dove-1924.jpg',
          title: 'Dove (Arthur G. Dove)',
          artist: 'Charles Demuth',
          year: '1924',
          rule: {
            "monday": [ 27, 30, 8, 24 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 1, 4, 13, 29 ],
            "thursday": [ 31, 4, 12, 28 ],
            "friday": [ 30, 3, 11, 27 ],
            "saturday": [ 29, 31, 10, 26 ],
            "sunday": [ 28, 31, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 424,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/marsh-channel-with-peat-barges.jpg',
          title: 'Marsh channel with peat barges',
          artist: 'Paula Modersohn-Becker',
          year: 'c.1900',
          rule: {
            "monday": [ 28, 31, 9, 25 ],
            "tuesday": [ 27, 30, 8, 24 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 1, 4, 13, 29 ],
            "friday": [ 31, 4, 12, 28 ],
            "saturday": [ 30, 3, 11, 27 ],
            "sunday": [ 29, 31, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 425,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/untitled-1938.jpg',
          title: 'Untitled',
          artist: 'Kansuke Yamamoto',
          year: '1938',
          rule: {
            "monday": [ 29, 31, 10, 26 ],
            "tuesday": [ 28, 31, 9, 25 ],
            "wednesday": [ 27, 30, 8, 24 ],
            "thursday": [ 2, 6, 14, 30 ],
            "friday": [ 1, 4, 13, 29 ],
            "saturday": [ 31, 4, 12, 28 ],
            "sunday": [ 30, 3, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 426,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/woman-in-black-stockings-1913.jpg',
          title: 'Woman in Black Stockings',
          artist: 'Egon Schiele',
          year: '1913',
          rule: {
            "monday": [ 30, 3, 11, 27 ],
            "tuesday": [ 29, 31, 10, 26 ],
            "wednesday": [ 28, 31, 9, 25 ],
            "thursday": [ 27, 30, 8, 24 ],
            "friday": [ 2, 6, 14, 30 ],
            "saturday": [ 1, 4, 13, 29 ],
            "sunday": [ 31, 4, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 427,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/frances-foley-1927.jpg',
          title: 'Frances Foley',
          artist: 'Edwin Dickinson',
          year: '1927',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 31, 4, 12, 28 ],
            "wednesday": [ 30, 1, 11, 27 ],
            "thursday": [ 29, 1, 10, 26 ],
            "friday": [ 28, 31, 9, 25 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 5, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 428,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/marina-1927.jpg',
          title: 'Marina',
          artist: 'Armando Reveron',
          year: '1927',
          rule: {
            "monday": [ 2, 5, 14, 30 ],
            "tuesday": [ 1, 5, 13, 29 ],
            "wednesday": [ 31, 4, 12, 28 ],
            "thursday": [ 30, 1, 11, 27 ],
            "friday": [ 29, 1, 10, 26 ],
            "saturday": [ 28, 31, 9, 25 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 429,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/old-kahala-home-1928.jpg',
          title: 'Old Kahala Home',
          artist: 'Arman Manookian',
          year: '1928',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 5, 14, 30 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 31, 4, 12, 28 ],
            "friday": [ 30, 1, 11, 27 ],
            "saturday": [ 29, 1, 10, 26 ],
            "sunday": [ 28, 31, 9, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 430,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/reptil-que-sube-1920.jpg',
          title: 'Reptil que sube',
          artist: 'Xul Solar',
          year: '1920',
          rule: {
            "monday": [ 28, 31, 9, 25 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 5, 14, 30 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 31, 4, 12, 28 ],
            "saturday": [ 30, 1, 11, 27 ],
            "sunday": [ 29, 1, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 431,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/urban-landscape-1922-1.jpg',
          title: 'Urban Landscape',
          artist: 'Mario Sironi',
          year: '1922',
          rule: {
            "monday": [ 29, 1, 10, 26 ],
            "tuesday": [ 28, 31, 9, 25 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 2, 5, 14, 30 ],
            "friday": [ 1, 5, 13, 29 ],
            "saturday": [ 31, 4, 12, 28 ],
            "sunday": [ 30, 1, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 432,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/not_detected_235968.jpg',
          title: 'The Carmagnole (Dance Around the Guillotine)',
          artist: 'Kathe Kollwitz',
          year: '1901',
          rule: {
            "monday": [ 30, 1, 11, 27 ],
            "tuesday": [ 29, 1, 10, 26 ],
            "wednesday": [ 28, 31, 9, 25 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 2, 5, 14, 30 ],
            "saturday": [ 1, 5, 13, 29 ],
            "sunday": [ 31, 4, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 433,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/woman-with-a-rabbit-1918.jpg',
          title: 'Woman with a Rabbit',
          artist: 'Eugeniusz Zak',
          year: '1918',
          rule: {
            "monday": [ 31, 4, 12, 28 ],
            "tuesday": [ 30, 1, 11, 27 ],
            "wednesday": [ 29, 1, 10, 26 ],
            "thursday": [ 28, 31, 9, 25 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 5, 14, 30 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 434,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/costume-design-for-theatre-moscow-1916.jpg',
          title: 'Costume design for theatre Moscow',
          artist: 'Aleksandra Ekster',
          year: '1916',
          rule: {
            "monday": [ 2, 6, 14, 30 ],
            "tuesday": [ 1, 5, 13, 29 ],
            "wednesday": [ 31, 2, 12, 28 ],
            "thursday": [ 30, 2, 11, 27 ],
            "friday": [ 29, 1, 10, 26 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 6, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 435,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/cat-catching-a-mouse.jpg',
          title: 'Cat Catching a Mouse',
          artist: 'Ohara Koson',
          year: 'c.1930',
          rule: {
            "monday": [ 3, 6, 15, 31 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 31, 2, 12, 28 ],
            "friday": [ 30, 2, 11, 27 ],
            "saturday": [ 29, 1, 10, 26 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 436,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/concert-des-ambassadeurs-champs-lys-es-1900.jpg',
          title: 'Concert des Ambassadeurs, Champs-Élysées',
          artist: 'Jules Cheret',
          year: '1900',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 6, 15, 31 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 31, 2, 12, 28 ],
            "saturday": [ 30, 2, 11, 27 ],
            "sunday": [ 29, 1, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 437,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/storming-the-winter-palace-1920.jpg',
          title: 'Storming the Winter Palace',
          artist: 'Jury Annenkov',
          year: '1920',
          rule: {
            "monday": [ 29, 1, 10, 26 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 6, 15, 31 ],
            "thursday": [ 2, 6, 14, 30 ],
            "friday": [ 1, 5, 13, 29 ],
            "saturday": [ 31, 2, 12, 28 ],
            "sunday": [ 30, 2, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 438,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/cape-in-a-village-1930.jpg',
          title: 'Cape in a Village',
          artist: 'Jose Gutierrez Solana',
          year: '1925 - 1930',
          rule: {
            "monday": [ 30, 2, 11, 27 ],
            "tuesday": [ 29, 1, 10, 26 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 6, 15, 31 ],
            "friday": [ 2, 6, 14, 30 ],
            "saturday": [ 1, 5, 13, 29 ],
            "sunday": [ 31, 2, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 439,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/hill-women-1935.jpg',
          title: 'Hill Women',
          artist: 'Amrita Sher-Gil',
          year: '1935',
          rule: {
            "monday": [ 31, 2, 12, 28 ],
            "tuesday": [ 30, 2, 11, 27 ],
            "wednesday": [ 29, 1, 10, 26 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 6, 15, 31 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 440,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/tree-and-urn-1921.jpg',
          title: 'Tree and Urn',
          artist: 'Stuart Davis',
          year: '1921',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 31, 2, 12, 28 ],
            "wednesday": [ 30, 2, 11, 27 ],
            "thursday": [ 29, 1, 10, 26 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 6, 15, 31 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 441,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/interior-1913.jpg',
          title: 'Interior',
          artist: 'Periklis Vyzantios',
          year: '1913',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 1, 3, 13, 29 ],
            "thursday": [ 31, 3, 12, 28 ],
            "friday": [ 30, 2, 11, 27 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 7, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 442,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/lake-afternoon-1935.jpg',
          title: 'Lake Afternoon',
          artist: 'Arthur Dove',
          year: '1935',
          rule: {
            "monday": [ 4, 7, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 1, 3, 13, 29 ],
            "friday": [ 31, 3, 12, 28 ],
            "saturday": [ 30, 2, 11, 27 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 443,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/lisbon-1931.jpg',
          title: 'Lisbon',
          artist: 'Mario Eloy',
          year: '1931',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 7, 16, 1 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 2, 6, 14, 30 ],
            "friday": [ 1, 3, 13, 29 ],
            "saturday": [ 31, 3, 12, 28 ],
            "sunday": [ 30, 2, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 444,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/phantoms-1903.jpg',
          title: 'Phantoms',
          artist: 'Victor Borisov-Musatov',
          year: '1903',
          rule: {
            "monday": [ 30, 2, 11, 27 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 7, 16, 1 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 2, 6, 14, 30 ],
            "saturday": [ 1, 3, 13, 29 ],
            "sunday": [ 31, 3, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 445,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/battle-for-a-woman-1905.jpg',
          title: 'Battle for a Woman',
          artist: 'Franz Stuck',
          year: '1905',
          rule: {
            "monday": [ 31, 3, 12, 28 ],
            "tuesday": [ 30, 2, 11, 27 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 7, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 1, 3, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 446,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/henry-ford-hospital-the-flying-bed-1932.jpg',
          title: 'Henry Ford Hospital (The Flying Bed)',
          artist: 'Frida Kahlo',
          year: '1932',
          rule: {
            "monday": [ 1, 3, 13, 29 ],
            "tuesday": [ 31, 3, 12, 28 ],
            "wednesday": [ 30, 2, 11, 27 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 7, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 447,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/ex-libris-bibliotheca-nacional-1903.jpg',
          title: 'Ex Libris Bibliotheca Nacional',
          artist: 'Eliseu Visconti',
          year: '1903',
          rule: {
            "monday": [ 2, 6, 14, 30 ],
            "tuesday": [ 1, 3, 13, 29 ],
            "wednesday": [ 31, 3, 12, 28 ],
            "thursday": [ 30, 2, 11, 27 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 7, 16, 1 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 448,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/two-little-girls-1911.jpg',
          title: 'Two Little Girls',
          artist: 'Egon Schiele',
          year: '1911',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 4, 14, 30 ],
            "thursday": [ 1, 4, 13, 29 ],
            "friday": [ 31, 3, 12, 28 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 8, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 449,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-red-scarf-1925.jpg',
          title: 'The Red Scarf',
          artist: 'Nicolae Vermont',
          year: '1925',
          rule: {
            "monday": [ 5, 8, 17, 2 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 2, 4, 14, 30 ],
            "friday": [ 1, 4, 13, 29 ],
            "saturday": [ 31, 3, 12, 28 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 450,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/portrait-of-evguenia-kirkaldi-1910.jpg',
          title: 'Portrait of Evguenia Kirkaldi',
          artist: 'Ilya Mashkov',
          year: '1910',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 8, 17, 2 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 2, 4, 14, 30 ],
            "saturday": [ 1, 4, 13, 29 ],
            "sunday": [ 31, 3, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 451,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/landschaft-mit-h-usern-1928.jpg',
          title: 'Landschaft mit Häusern',
          artist: 'Gustave Buchet',
          year: '1928',
          rule: {
            "monday": [ 31, 3, 12, 28 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 8, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 4, 14, 30 ],
            "sunday": [ 1, 4, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 452,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/young-woman-in-the-atelier-1904.jpg',
          title: 'Young Woman in the Atelier',
          artist: 'Janos Tornyai',
          year: '1904',
          rule: {
            "monday": [ 1, 4, 13, 29 ],
            "tuesday": [ 31, 3, 12, 28 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 8, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 4, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 453,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/flashing-motorists-1904-2.jpg',
          title: 'Flashing Motorists',
          artist: 'Raphael Kirchner',
          year: '1904',
          rule: {
            "monday": [ 2, 4, 14, 30 ],
            "tuesday": [ 1, 4, 13, 29 ],
            "wednesday": [ 31, 3, 12, 28 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 8, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 454,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/horses-in-a-green-landscape-1931.jpg',
          title: 'Horses in a Green Landscape',
          artist: 'Sanyu',
          year: '1931',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 4, 14, 30 ],
            "wednesday": [ 1, 4, 13, 29 ],
            "thursday": [ 31, 3, 12, 28 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 8, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 455,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/nap-1939.jpg',
          title: 'The nap',
          artist: 'Jose de Almada-Negreiros',
          year: '1939',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 5, 15, 31 ],
            "thursday": [ 2, 5, 14, 30 ],
            "friday": [ 1, 4, 13, 29 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 9, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 456,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/studland-beach-1912.jpg',
          title: 'Studland Beach',
          artist: 'Vanessa Bell',
          year: '1912',
          rule: {
            "monday": [ 6, 9, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 5, 15, 31 ],
            "friday": [ 2, 5, 14, 30 ],
            "saturday": [ 1, 4, 13, 29 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 457,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/landschaftstudie-dorfstrasse-1908.jpg',
          title: 'Landschaftstudie - Dorfstrasse',
          artist: 'Alexej von Jawlensky',
          year: '1908',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 9, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 5, 15, 31 ],
            "saturday": [ 2, 5, 14, 30 ],
            "sunday": [ 1, 4, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 458,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/incense-of-a-new-church-1921.jpg',
          title: 'Incense of a New Church',
          artist: 'Charles Demuth',
          year: '1921',
          rule: {
            "monday": [ 1, 4, 13, 29 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 9, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 5, 15, 31 ],
            "sunday": [ 2, 5, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 459,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/miraculous-landing-1920(1).jpg',
          title: 'Miraculous Landing',
          artist: 'Paul Klee',
          year: '1920',
          rule: {
            "monday": [ 2, 5, 14, 30 ],
            "tuesday": [ 1, 4, 13, 29 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 9, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 5, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 460,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/turk-women-in-balcic-1936.jpg',
          title: 'Turk Women in Balcic',
          artist: 'Nicolae Tonitza',
          year: '1936',
          rule: {
            "monday": [ 3, 5, 15, 31 ],
            "tuesday": [ 2, 5, 14, 30 ],
            "wednesday": [ 1, 4, 13, 29 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 9, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 461,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/megane-bridge-1935.jpg',
          title: 'Megane Bridge',
          artist: 'Unichi Hiratsuka',
          year: '1935',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 5, 15, 31 ],
            "wednesday": [ 2, 5, 14, 30 ],
            "thursday": [ 1, 4, 13, 29 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 9, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 462,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/pod-la-vene-ia-1929.jpg',
          title: 'Bridge in Venice',
          artist: 'Samuel Mutzner',
          year: '1929',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 6, 16, 1 ],
            "thursday": [ 3, 6, 15, 31 ],
            "friday": [ 2, 5, 14, 30 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 10, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 463,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/shanghai-cafe-dancers-1924.jpg',
          title: 'Shanghai Cafe Dancers',
          artist: 'Yamamura Toyonari',
          year: '1924',
          rule: {
            "monday": [ 7, 10, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 6, 16, 1 ],
            "friday": [ 3, 6, 15, 31 ],
            "saturday": [ 2, 5, 14, 30 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 464,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/edwardian-woman-on-the-beach-1900(1).jpg',
          title: 'Edwardian woman on the Beach',
          artist: 'Thomas Pollock Anshutz',
          year: '1900',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 10, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 6, 16, 1 ],
            "saturday": [ 3, 6, 15, 31 ],
            "sunday": [ 2, 5, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 465,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/morita-kan-ya-xiii-as-jean-valjean-1921.jpg',
          title: 'Morita Kan\'ya XIII as Jean Valjean',
          artist: 'Yamamura Toyonari',
          year: '1921',
          rule: {
            "monday": [ 2, 5, 14, 30 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 10, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 6, 16, 1 ],
            "sunday": [ 3, 6, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 466,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/boat-in-harbour-brittany-1929.jpg',
          title: 'Boat in Harbour, Brittany',
          artist: 'Christopher Wood',
          year: '1929',
          rule: {
            "monday": [ 3, 6, 15, 31 ],
            "tuesday": [ 2, 5, 14, 30 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 10, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 6, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 467,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/a-room-in-the-second-post-impressionist-1912.jpg',
          title: 'A Room (in the Second Post-Impressionist)',
          artist: 'Roger Fry',
          year: '1912',
          rule: {
            "monday": [ 4, 6, 16, 1 ],
            "tuesday": [ 3, 6, 15, 31 ],
            "wednesday": [ 2, 5, 14, 30 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 10, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 468,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/portrait-of-a-philosopher.jpg',
          title: 'Portrait of a Philosopher',
          artist: 'Lyubov Popova',
          year: '1915',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 6, 16, 1 ],
            "wednesday": [ 3, 6, 15, 31 ],
            "thursday": [ 2, 5, 14, 30 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 10, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 469,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/photograph-of-violin-and-checkerboard-1913.jpg',
          title: 'Photograph of Violin and Checkerboard',
          artist: 'Juan Gris',
          year: '1913',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 7, 17, 2 ],
            "thursday": [ 4, 7, 16, 1 ],
            "friday": [ 3, 6, 15, 31 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 8, 11, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 470,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/bretagne-1921.jpg',
          title: 'Bretagne',
          artist: 'David Kakabadze',
          year: '1921',
          rule: {
            "monday": [ 8, 11, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 7, 17, 2 ],
            "friday": [ 4, 7, 16, 1 ],
            "saturday": [ 3, 6, 15, 31 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 471,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/motorrider-1928.jpg',
          title: 'Motorrider',
          artist: 'Sandor Bortnyik',
          year: '1928',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 8, 11, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 7, 17, 2 ],
            "saturday": [ 4, 7, 16, 1 ],
            "sunday": [ 3, 6, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 472,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/illustration-for-sa-a-pan-s-the-romanticised-life-of-god(1).jpg',
          title: 'Illustration for Sașa Pană\'s „the romanticised life of god”',
          artist: 'Jean David',
          year: '',
          rule: {
            "monday": [ 3, 6, 15, 31 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 8, 11, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 7, 17, 2 ],
            "sunday": [ 4, 7, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 473,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/music-1912.jpg',
          title: 'Music',
          artist: 'Luigi Russolo',
          year: '1912',
          rule: {
            "monday": [ 4, 7, 16, 1 ],
            "tuesday": [ 3, 6, 15, 31 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 8, 11, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 7, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 474,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-muse-inspiring-the-poet-1909.jpg',
          title: 'The Muse Inspiring the Poet',
          artist: 'Henri Rousseau',
          year: '1908 - 1909',
          rule: {
            "monday": [ 5, 7, 17, 2 ],
            "tuesday": [ 4, 7, 16, 1 ],
            "wednesday": [ 3, 6, 15, 31 ],
            "thursday": [ 9, 13, 21, 6 ],
            "friday": [ 8, 11, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 475,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/pejza-dzki-1932.jpg',
          title: 'Pejzaż łódzki',
          artist: 'Wladyslaw Strzeminski',
          year: '1932',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 7, 17, 2 ],
            "wednesday": [ 4, 7, 16, 1 ],
            "thursday": [ 3, 6, 15, 31 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 8, 11, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 476,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/italian-landscape-1911.jpg',
          title: 'Italian Landscape',
          artist: 'Konstantin Bogaevsky',
          year: '1911',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 8, 18, 3 ],
            "thursday": [ 5, 8, 17, 2 ],
            "friday": [ 4, 7, 16, 1 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 9, 12, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 477,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/une-belle-de-palaos-1935.jpg',
          title: 'Une Belle De Palaos',
          artist: 'Paul Jacoulet',
          year: '1935',
          rule: {
            "monday": [ 9, 12, 21, 6 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 8, 18, 3 ],
            "friday": [ 5, 8, 17, 2 ],
            "saturday": [ 4, 7, 16, 1 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 478,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/bowlers-la-ciotat-1930.jpg',
          title: 'Bowlers, La Ciotat',
          artist: 'William James Glackens',
          year: '1930',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 9, 12, 21, 6 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 8, 18, 3 ],
            "saturday": [ 5, 8, 17, 2 ],
            "sunday": [ 4, 7, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 479,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/josephine-baker-iii-1927.jpg',
          title: 'Josephine Baker (III)',
          artist: 'Alexander Calder',
          year: 'c.1927',
          rule: {
            "monday": [ 4, 7, 16, 1 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 9, 12, 21, 6 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 8, 18, 3 ],
            "sunday": [ 5, 8, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 480,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/marin-1-1922.jpg',
          title: 'Marin 1',
          artist: 'Gosta Adrian-Nilsson',
          year: '1922',
          rule: {
            "monday": [ 5, 8, 17, 2 ],
            "tuesday": [ 4, 7, 16, 1 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 9, 12, 21, 6 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 8, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 481,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/self-portrait-with-his-wife-and-a-glass-of-champagne-1902.jpg',
          title: 'Self-Portrait with his Wife and a Glass of Champagne',
          artist: 'Lovis Corinth',
          year: '1902',
          rule: {
            "monday": [ 6, 8, 18, 3 ],
            "tuesday": [ 5, 8, 17, 2 ],
            "wednesday": [ 4, 7, 16, 1 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 9, 12, 21, 6 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 482,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/a-man-in-a-cafe-1914.jpg',
          title: 'A man in a cafe',
          artist: 'Juan Gris',
          year: '1914',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 8, 18, 3 ],
            "wednesday": [ 5, 8, 17, 2 ],
            "thursday": [ 4, 7, 16, 1 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 9, 12, 21, 6 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 483,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/flames-1918.jpg',
          title: 'Flames',
          artist: 'Uemura Shoen',
          year: '1918',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 9, 19, 4 ],
            "thursday": [ 6, 9, 18, 3 ],
            "friday": [ 5, 8, 17, 2 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 10, 13, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 484,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/portrait-of-poet-boris-pasternak-1921.jpg',
          title: 'Portrait of poet Boris Pasternak',
          artist: 'Jury Annenkov',
          year: '1921',
          rule: {
            "monday": [ 10, 13, 22, 7 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 9, 19, 4 ],
            "friday": [ 6, 9, 18, 3 ],
            "saturday": [ 5, 8, 17, 2 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 485,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/dorelia-in-a-landscape-1910.jpg',
          title: 'Dorelia in a Landscape',
          artist: 'Augustus John',
          year: '1910',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 10, 13, 22, 7 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 9, 19, 4 ],
            "saturday": [ 6, 9, 18, 3 ],
            "sunday": [ 5, 8, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 486,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/little-girl-1928.jpeg',
          title: 'Little Girl',
          artist: 'Nicolae Tonitza',
          year: '1928',
          rule: {
            "monday": [ 5, 8, 17, 2 ],
            "tuesday": [ 11, 15, 23, 8 ],
            "wednesday": [ 10, 13, 22, 7 ],
            "thursday": [ 9, 13, 21, 6 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 9, 19, 4 ],
            "sunday": [ 6, 9, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 487,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/gardens-in-the-pound-cookham-1936.jpeg',
          title: 'Gardens In The Pound, Cookham',
          artist: 'Stanley Spencer',
          year: '1936',
          rule: {
            "monday": [ 6, 9, 18, 3 ],
            "tuesday": [ 5, 8, 17, 2 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 10, 13, 22, 7 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 9, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 488,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/les-enfants-aux-yeux-jaunes-ohlol-est-carolines-1940.jpeg',
          title: 'Les Enfants Aux Yeux Jaunes. Ohlol, Est Carolines',
          artist: 'Paul Jacoulet',
          year: '194',
          rule: {
            "monday": [ 7, 9, 19, 4 ],
            "tuesday": [ 6, 9, 18, 3 ],
            "wednesday": [ 5, 8, 17, 2 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 10, 13, 22, 7 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 489,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/komposition-1931.jpeg',
          title: 'Komposition',
          artist: 'Otto Gustav Carlsund',
          year: '1931',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 9, 19, 4 ],
            "wednesday": [ 6, 9, 18, 3 ],
            "thursday": [ 5, 8, 17, 2 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 10, 13, 22, 7 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 490,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/casement-to-infinity-1930.jpeg',
          title: 'Casement to Infinity',
          artist: 'Leon Underwood',
          year: '1930',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 9, 11, 21, 6 ],
            "wednesday": [ 8, 10, 20, 5 ],
            "thursday": [ 7, 10, 19, 4 ],
            "friday": [ 6, 9, 18, 3 ],
            "saturday": [ 12, 16, 24, 9 ],
            "sunday": [ 11, 14, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 491,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/hydrangeas-1902.jpeg',
          title: 'Hydrangeas',
          artist: 'Hishida Shunso',
          year: '1902',
          rule: {
            "monday": [ 11, 14, 23, 8 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 9, 11, 21, 6 ],
            "thursday": [ 8, 10, 20, 5 ],
            "friday": [ 7, 10, 19, 4 ],
            "saturday": [ 6, 9, 18, 3 ],
            "sunday": [ 12, 16, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 492,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/view-at-mimizan-1920.jpeg',
          title: 'View at Mimizan',
          artist: 'Winston Churchill',
          year: '1920',
          rule: {
            "monday": [ 12, 16, 24, 9 ],
            "tuesday": [ 11, 14, 23, 8 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 9, 11, 21, 6 ],
            "friday": [ 8, 10, 20, 5 ],
            "saturday": [ 7, 10, 19, 4 ],
            "sunday": [ 6, 9, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 493,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-moon-1928.jpeg',
          title: 'The Moon',
          artist: 'Tarsila do Amaral',
          year: '1928',
          rule: {
            "monday": [ 6, 9, 18, 3 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 14, 23, 8 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 9, 11, 21, 6 ],
            "saturday": [ 8, 10, 20, 5 ],
            "sunday": [ 7, 10, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 494,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/book-of-the-marquise-illustration-1.jpeg',
          title: 'Book of the Marquise. Illustration 1',
          artist: 'Konstantin Somov',
          year: '1918',
          rule: {
            "monday": [ 7, 10, 19, 4 ],
            "tuesday": [ 6, 9, 18, 3 ],
            "wednesday": [ 12, 16, 24, 9 ],
            "thursday": [ 11, 14, 23, 8 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 9, 11, 21, 6 ],
            "sunday": [ 8, 10, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 495,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/central-park-1.jpeg',
          title: 'Central Park',
          artist: 'Maurice Prendergast',
          year: 'c.1914 - c.1915',
          rule: {
            "monday": [ 8, 10, 20, 5 ],
            "tuesday": [ 7, 10, 19, 4 ],
            "wednesday": [ 6, 9, 18, 3 ],
            "thursday": [ 12, 16, 24, 9 ],
            "friday": [ 11, 14, 23, 8 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 9, 11, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 496,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/bay-of-naples-1908.jpeg',
          title: 'Bay of Naples',
          artist: 'Albert Marquet',
          year: '1908',
          rule: {
            "monday": [ 9, 11, 21, 6 ],
            "tuesday": [ 8, 10, 20, 5 ],
            "wednesday": [ 7, 10, 19, 4 ],
            "thursday": [ 6, 9, 18, 3 ],
            "friday": [ 12, 16, 24, 9 ],
            "saturday": [ 11, 14, 23, 8 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 497,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-swan-no-16-1915.jpeg',
          title: 'The Swan (No. 16)',
          artist: 'Hilma af Klint',
          year: '1914 - 1915',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 10, 12, 22, 7 ],
            "wednesday": [ 9, 11, 21, 6 ],
            "thursday": [ 8, 11, 20, 5 ],
            "friday": [ 7, 10, 19, 4 ],
            "saturday": [ 13, 17, 25, 10 ],
            "sunday": [ 12, 15, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 498,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/untitled-still-life-1929.jpeg',
          title: 'Untitled Still Life',
          artist: 'Louis Marcoussis',
          year: '1929',
          rule: {
            "monday": [ 12, 15, 24, 9 ],
            "tuesday": [ 11, 15, 23, 8 ],
            "wednesday": [ 10, 12, 22, 7 ],
            "thursday": [ 9, 11, 21, 6 ],
            "friday": [ 8, 11, 20, 5 ],
            "saturday": [ 7, 10, 19, 4 ],
            "sunday": [ 13, 17, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 499,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/black-knight-1927(1).jpeg',
          title: 'Black Knight',
          artist: 'Paul Klee',
          year: '1927',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 15, 24, 9 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 10, 12, 22, 7 ],
            "friday": [ 9, 11, 21, 6 ],
            "saturday": [ 8, 11, 20, 5 ],
            "sunday": [ 7, 10, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 500,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/ciud-lagui-1939.jpeg',
          title: 'Ciudá lagui',
          artist: 'Xul Solar',
          year: '1939',
          rule: {
            "monday": [ 7, 10, 19, 4 ],
            "tuesday": [ 13, 17, 25, 10 ],
            "wednesday": [ 12, 15, 24, 9 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 10, 12, 22, 7 ],
            "saturday": [ 9, 11, 21, 6 ],
            "sunday": [ 8, 11, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 501,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/steel-foundry-coatesville-pa-1937.jpeg',
          title: 'Steel Foundry, Coatesville, Pa.',
          artist: 'Ralston Crawford',
          year: '1936 - 1937',
          rule: {
            "monday": [ 8, 11, 20, 5 ],
            "tuesday": [ 7, 10, 19, 4 ],
            "wednesday": [ 13, 17, 25, 10 ],
            "thursday": [ 12, 15, 24, 9 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 10, 12, 22, 7 ],
            "sunday": [ 9, 11, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 502,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/spring-waters-1910.jpeg',
          title: 'Spring Waters',
          artist: 'Vilhelms Purvitis',
          year: '1910',
          rule: {
            "monday": [ 9, 11, 21, 6 ],
            "tuesday": [ 8, 11, 20, 5 ],
            "wednesday": [ 7, 10, 19, 4 ],
            "thursday": [ 13, 17, 25, 10 ],
            "friday": [ 12, 15, 24, 9 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 10, 12, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 503,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/flora-on-sand-1927(1).jpeg',
          title: 'Flora on sand',
          artist: 'Paul Klee',
          year: '1927',
          rule: {
            "monday": [ 10, 12, 22, 7 ],
            "tuesday": [ 9, 11, 21, 6 ],
            "wednesday": [ 8, 11, 20, 5 ],
            "thursday": [ 7, 10, 19, 4 ],
            "friday": [ 13, 17, 25, 10 ],
            "saturday": [ 12, 15, 24, 9 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 504,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/handsome-drinks-1916.jpeg',
          title: 'Handsome Drinks',
          artist: 'Marsden Hartley',
          year: '1916',
          rule: {
            "monday": [ 12, 16, 24, 9 ],
            "tuesday": [ 11, 13, 23, 8 ],
            "wednesday": [ 10, 12, 22, 7 ],
            "thursday": [ 9, 12, 21, 6 ],
            "friday": [ 8, 11, 20, 5 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 16, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 505,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/nature-symbolized-1911.jpeg',
          title: 'Nature Symbolized',
          artist: 'Arthur Dove',
          year: '1911',
          rule: {
            "monday": [ 12, 16, 24, 9 ],
            "tuesday": [ 11, 13, 23, 8 ],
            "wednesday": [ 10, 12, 22, 7 ],
            "thursday": [ 9, 12, 21, 6 ],
            "friday": [ 8, 11, 20, 5 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 16, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 506,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/a-portrait-1910.jpeg',
          title: 'A Portrait',
          artist: 'George Seeley',
          year: '1910',
          rule: {
            "monday": [ 13, 16, 25, 10 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 13, 23, 8 ],
            "thursday": [ 10, 12, 22, 7 ],
            "friday": [ 9, 12, 21, 6 ],
            "saturday": [ 8, 11, 20, 5 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 507,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/harbour-on-bornholm-1928.jpeg',
          title: 'Harbour on Bornholm',
          artist: 'Arthur Segal',
          year: '1928',
          rule: {
            "monday": [ 14, 18, 26, 11 ],
            "tuesday": [ 13, 16, 25, 10 ],
            "wednesday": [ 12, 16, 24, 9 ],
            "thursday": [ 11, 13, 23, 8 ],
            "friday": [ 10, 12, 22, 7 ],
            "saturday": [ 9, 12, 21, 6 ],
            "sunday": [ 8, 11, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 508,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/synchromy-number-4-to-form-1914.jpeg',
          title: 'Synchromy Number 4: To Form',
          artist: 'Morgan Russell',
          year: '1914',
          rule: {
            "monday": [ 8, 11, 20, 5 ],
            "tuesday": [ 14, 18, 26, 11 ],
            "wednesday": [ 13, 16, 25, 10 ],
            "thursday": [ 12, 16, 24, 9 ],
            "friday": [ 11, 13, 23, 8 ],
            "saturday": [ 10, 12, 22, 7 ],
            "sunday": [ 9, 12, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 509,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/open-sea-1912(1).jpeg',
          title: 'Open Sea',
          artist: 'Emil Carlsen',
          year: '1912',
          rule: {
            "monday": [ 9, 12, 21, 6 ],
            "tuesday": [ 8, 11, 20, 5 ],
            "wednesday": [ 14, 18, 26, 11 ],
            "thursday": [ 13, 16, 25, 10 ],
            "friday": [ 12, 16, 24, 9 ],
            "saturday": [ 11, 13, 23, 8 ],
            "sunday": [ 10, 12, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 510,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-cathedral.jpeg',
          title: 'The Cathedral',
          artist: 'Guy Rose',
          year: 'c.1910',
          rule: {
            "monday": [ 10, 12, 22, 7 ],
            "tuesday": [ 9, 12, 21, 6 ],
            "wednesday": [ 8, 11, 20, 5 ],
            "thursday": [ 14, 18, 26, 11 ],
            "friday": [ 13, 16, 25, 10 ],
            "saturday": [ 12, 16, 24, 9 ],
            "sunday": [ 11, 13, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 511,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/port-of-marseilles-1916.jpeg',
          title: 'Port of Marseilles',
          artist: 'Albert Marquet',
          year: '1916',
          rule: {
            "monday": [ 12, 14, 24, 9 ],
            "tuesday": [ 11, 13, 23, 8 ],
            "wednesday": [ 10, 13, 22, 7 ],
            "thursday": [ 9, 12, 21, 6 ],
            "friday": [ 15, 19, 27, 12 ],
            "saturday": [ 14, 17, 26, 11 ],
            "sunday": [ 13, 17, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 512,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/tea-party.jpeg',
          title: 'Tea Party',
          artist: 'Andrei Ryabushkin',
          year: '1903',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 14, 24, 9 ],
            "wednesday": [ 11, 13, 23, 8 ],
            "thursday": [ 10, 13, 22, 7 ],
            "friday": [ 9, 12, 21, 6 ],
            "saturday": [ 15, 19, 27, 12 ],
            "sunday": [ 14, 17, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 513,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/chinese-bowl.jpeg',
          title: 'Chinese Bowl',
          artist: 'Max Weber',
          year: '1912',
          rule: {
            "monday": [ 14, 17, 26, 11 ],
            "tuesday": [ 13, 17, 25, 10 ],
            "wednesday": [ 12, 14, 24, 9 ],
            "thursday": [ 11, 13, 23, 8 ],
            "friday": [ 10, 13, 22, 7 ],
            "saturday": [ 9, 12, 21, 6 ],
            "sunday": [ 15, 19, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 514,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/starlit-night-miyajima-1928.jpeg',
          title: 'Starlit Night, Miyajima',
          artist: 'Hasui Kawase',
          year: '1928',
          rule: {
            "monday": [ 15, 19, 27, 12 ],
            "tuesday": [ 14, 17, 26, 11 ],
            "wednesday": [ 13, 17, 25, 10 ],
            "thursday": [ 12, 14, 24, 9 ],
            "friday": [ 11, 13, 23, 8 ],
            "saturday": [ 10, 13, 22, 7 ],
            "sunday": [ 9, 12, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 515,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/perfume-1910.jpeg',
          title: 'Perfume',
          artist: 'Luigi Russolo',
          year: '1910',
          rule: {
            "monday": [ 9, 12, 21, 6 ],
            "tuesday": [ 15, 19, 27, 12 ],
            "wednesday": [ 14, 17, 26, 11 ],
            "thursday": [ 13, 17, 25, 10 ],
            "friday": [ 12, 14, 24, 9 ],
            "saturday": [ 11, 13, 23, 8 ],
            "sunday": [ 10, 13, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 516,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/posters-at-trouville-1906.jpeg',
          title: 'Posters at Trouville',
          artist: 'Albert Marquet',
          year: '1906',
          rule: {
            "monday": [ 10, 13, 22, 7 ],
            "tuesday": [ 9, 12, 21, 6 ],
            "wednesday": [ 15, 19, 27, 12 ],
            "thursday": [ 14, 17, 26, 11 ],
            "friday": [ 13, 17, 25, 10 ],
            "saturday": [ 12, 14, 24, 9 ],
            "sunday": [ 11, 13, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 517,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/painting-formerly-machine-1916.jpeg',
          title: 'Painting (formerly Machine)',
          artist: 'Morton Shamberg',
          year: '1916',
          rule: {
            "monday": [ 11, 13, 23, 8 ],
            "tuesday": [ 10, 13, 22, 7 ],
            "wednesday": [ 9, 12, 21, 6 ],
            "thursday": [ 15, 19, 27, 12 ],
            "friday": [ 14, 17, 26, 11 ],
            "saturday": [ 13, 17, 25, 10 ],
            "sunday": [ 12, 14, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 518,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-bridge-in-curve-1930.jpeg',
          title: 'The Bridge in Curve',
          artist: 'Grace Cossington Smith',
          year: '1930',
          rule: {
            "monday": [ 13, 15, 25, 10 ],
            "tuesday": [ 12, 14, 24, 9 ],
            "wednesday": [ 11, 14, 23, 8 ],
            "thursday": [ 10, 13, 22, 7 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 18, 27, 12 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 519,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-fairytale-1916.jpeg',
          title: 'The Fairytale',
          artist: 'Heinrich Campendonk',
          year: '1916',
          rule: {
            "monday": [ 14, 18, 26, 11 ],
            "tuesday": [ 13, 15, 25, 10 ],
            "wednesday": [ 12, 14, 24, 9 ],
            "thursday": [ 11, 14, 23, 8 ],
            "friday": [ 10, 13, 22, 7 ],
            "saturday": [ 16, 20, 28, 13 ],
            "sunday": [ 15, 18, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 520,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/advent-of-spring-and-summer-1914.jpeg',
          title: 'Advent of spring and summer',
          artist: 'David Burliuk',
          year: '1914',
          rule: {
            "monday": [ 15, 18, 27, 12 ],
            "tuesday": [ 14, 18, 26, 11 ],
            "wednesday": [ 13, 15, 25, 10 ],
            "thursday": [ 12, 14, 24, 9 ],
            "friday": [ 11, 14, 23, 8 ],
            "saturday": [ 10, 13, 22, 7 ],
            "sunday": [ 16, 20, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 521,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/seaport-1923.jpeg',
          title: 'Seaport',
          artist: 'Edward Wadsworth',
          year: '1923',
          rule: {
            "monday": [ 16, 20, 28, 13 ],
            "tuesday": [ 15, 18, 27, 12 ],
            "wednesday": [ 14, 18, 26, 11 ],
            "thursday": [ 13, 15, 25, 10 ],
            "friday": [ 12, 14, 24, 9 ],
            "saturday": [ 11, 14, 23, 8 ],
            "sunday": [ 10, 13, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 522,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/vitebsk-1919.jpeg',
          title: 'Vitebsk',
          artist: 'Mstislav Dobuzhinsky',
          year: '1919',
          rule: {
            "monday": [ 10, 13, 22, 7 ],
            "tuesday": [ 16, 20, 28, 13 ],
            "wednesday": [ 15, 18, 27, 12 ],
            "thursday": [ 14, 18, 26, 11 ],
            "friday": [ 13, 15, 25, 10 ],
            "saturday": [ 12, 14, 24, 9 ],
            "sunday": [ 11, 14, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 523,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/interior-with-a-table-1921.jpeg',
          title: 'Interior with a Table',
          artist: 'Vanessa Bell',
          year: '1921',
          rule: {
            "monday": [ 11, 14, 23, 8 ],
            "tuesday": [ 10, 13, 22, 7 ],
            "wednesday": [ 16, 20, 28, 13 ],
            "thursday": [ 15, 18, 27, 12 ],
            "friday": [ 14, 18, 26, 11 ],
            "saturday": [ 13, 15, 25, 10 ],
            "sunday": [ 12, 14, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 524,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/bailarico-1936.jpeg',
          title: 'Bailarico',
          artist: 'Mario Eloy',
          year: '1936',
          rule: {
            "monday": [ 12, 14, 24, 9 ],
            "tuesday": [ 11, 14, 23, 8 ],
            "wednesday": [ 10, 13, 22, 7 ],
            "thursday": [ 16, 20, 28, 13 ],
            "friday": [ 15, 18, 27, 12 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 15, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 525,
          user_id: 1,
          theme: 'Modern Art before World War II',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/august/the-three-ages-of-woman-1905.jpeg',
          title: 'The Three Ages of Woman',
          artist: 'Gustav Klimt',
          year: '1905',
          rule: {
            "monday": [ 14, 16, 26, 11 ],
            "tuesday": [ 13, 15, 25, 10 ],
            "wednesday": [ 12, 15, 24, 9 ],
            "thursday": [ 11, 14, 23, 8 ],
            "friday": [ 17, 21, 29, 14 ],
            "saturday": [ 16, 19, 28, 13 ],
            "sunday": [ 15, 19, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('august_arts_id_seq', (SELECT MAX(id) FROM august_arts));");
    });
};
