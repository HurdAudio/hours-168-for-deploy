'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('october_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('october_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00006.jpg',
          title: 'Poster of the film "The Sixth of the World," directed by Dziga Vetrov',
          artist: 'V.Stenberg, G.Stenberg, A.Naumov',
          year: '1926',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00003.jpg',
          title: 'Poster of the film "Mother" directed by V. Pudovkin',
          artist: 'I.Bograd',
          year: '1926',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00002.jpg',
          title: 'Poster of the film "October" directed by S. Eisenstein',
          artist: 'V.Stenberg, G.Stenberg,Ya. Ruklevski',
          year: '1927',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cultsovpost_00005.jpg',
          title: 'Gostsir. Durovskaya Railway...',
          artist: 'E.Holstein',
          year: '1929',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cultsovpost_00004.jpg',
          title: 'All-Russian Agricultural Exhibition...',
          artist: 'I.Lebedev, A. Fidman',
          year: '1923',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cultsovpost_00002.jpg',
          title: 'Flea',
          artist: 'B.Kustodiev',
          year: '1926',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00003.jpg',
          title: 'The development of transport',
          artist: 'G.Klutsis',
          year: '1929',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 25, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0039.jpg',
          title: 'Give support...',
          artist: 'A.Dejneka',
          year: '1929',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 25, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0038.jpg',
          title: 'All on muster',
          artist: 'Yuri Pimenov',
          year: '1929',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 25, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0037.jpg',
          title: 'All-Russian festival of physical culture',
          artist: 'V. Pshenichnikov',
          year: '1927',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 25, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0032.jpg',
          title: 'A ticket to the zoo cost 2 x 20 kopeek',
          artist: 'D.Bulanov',
          year: '1928',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 25, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0030.jpg',
          title: 'Advertisement inside trolley cars',
          artist: 'D.Bulanov',
          year: '1927',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0027.jpg',
          title: 'Second all-union lottery',
          artist: 'I.Dlugach,P.Karachentsov',
          year: '1928',
          rule: {
            "monday": [ 4, 15, 25, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0026.jpg',
          title: 'Stocko shoe shine polish',
          artist: 'A.Zelensky',
          year: '1929',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0025.jpg',
          title: 'lottery Avtodor. The ticket price is 50 cents',
          artist: 'B. Titov, E. Pernikov',
          year: '1929',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0024.jpg',
          title: 'Pencils "Mospoligraf"',
          artist: '?',
          year: '1928',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0023.jpg',
          title: 'Movie poster "Communards\' Pipe"',
          artist: 'A.Bielski',
          year: '1929',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0022.jpg',
          title: 'Journey to Mars',
          artist: 'N.Prusakov, G.Borisov',
          year: '1926',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0019.jpg',
          title: 'Poster of the movie "1905 Bronenosits Potemkin"',
          artist: 'A.Lavinskii',
          year: '1928',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0018.jpg',
          title: 'Touring the poster of the Moscow Chamber Theatre (French language)',
          artist: 'V.Stenberg,G.Stenberg',
          year: '1923',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0021.jpg',
          title: 'Poster for the movie \'The Eleventh\' directed by Dziga Vertov',
          artist: 'V.Stenberg, G.Stenberg',
          year: '1928',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0016.jpg',
          title: 'À subscription to a Laborer Department at Home is open for new orders',
          artist: 'A.Lavinskii',
          year: '1925',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0015.jpg',
          title: 'The role of à premiere militant',
          artist: 'S.Senkin',
          year: '1927',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0013.jpg',
          title: 'Lenin and electrification',
          artist: 'Chass-Kobelev',
          year: '1925',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0011.jpg',
          title: 'Teacher Bubus Comedy',
          artist: 'I. Shlepanov',
          year: '1925',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0010.jpg',
          title: 'Kino glaz Dziga Vertov',
          artist: 'A.Rodchenko',
          year: '1924',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0009.jpg',
          title: 'Red Army Soldier',
          artist: 'A.Rodchenko',
          year: '1925',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0008.jpg',
          title: 'Lengiz Books for all sectors of knowledge',
          artist: 'A. Rodchenko',
          year: '1925',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0007.jpg',
          title: 'Dobrolet',
          artist: 'A. Rodchenko',
          year: '1923',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0006.jpg',
          title: 'Cheap bread',
          artist: 'A.Rodchenko, V. Mayakovsky',
          year: '1923',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0005.jpg',
          title: 'The most businesslike',
          artist: 'A.Rodchenko, V. Mayakovsky',
          year: '1923',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0004.jpg',
          title: 'Read Young Guard magazine',
          artist: 'A. Rodchenko, V. Mayakovsky',
          year: '1924',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0003.jpg',
          title: 'Best Pacifier',
          artist: 'A.Rodchenko,V.Mayakovsky',
          year: '1923',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00009.jpg',
          title: 'Young Leninists....',
          artist: 'V.Izenberg',
          year: '1924',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00006.jpg',
          title: 'Do not hit the child...',
          artist: 'A.Laptev',
          year: '1929',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00005.jpg',
          title: 'Mothers...',
          artist: 'A.Soborova',
          year: '1925',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00002.jpg',
          title: 'Meeting children!',
          artist: 'A.Komarov',
          year: '1923',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_socialsovpost_00007.jpg',
          title: 'Dad, do not drink...',
          artist: 'D.Bulanov',
          year: '1929',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_socialsovpost_00006.jpg',
          title: 'Stop...',
          artist: '?',
          year: '1929',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovmilpost18_50_0005.jpg',
          title: 'Red Army...',
          artist: 'A.Lavinskii',
          year: '1927',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_sportsovpost_00004.jpg',
          title: 'Spartakiada',
          artist: 'S. Vlasov',
          year: '1928',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_tradesovpost_00012.jpg',
          title: 'Rezinotrest',
          artist: 'D.Kravchenko',
          year: '1929',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_tradesovpost_00009.jpg',
          title: 'I drink beer and water...',
          artist: '?',
          year: '1928',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_tradesovpost_00007.jpg',
          title: 'Mosselprom. Tobacco products.',
          artist: 'M. Bulanov',
          year: '1927',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_tradesovpost_00005.jpg',
          title: 'Cigarettes "Pushkin"',
          artist: 'A. Zelensky',
          year: '1926',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_tradesovpost_00004.jpg',
          title: 'Best cigarettes...',
          artist: '?',
          year: '1925',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_tradesovpost_00002.jpg',
          title: 'Mosselprom...',
          artist: 'D. Tarhov',
          year: '1926',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/eafd2e2aa47b9841b8d3b4fd35d6be9b.jpg',
          title: 'Each absenteeism...',
          artist: 'V.Mayakovsky',
          year: '1920',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00036.jpg',
          title: 'Long live May 1st',
          artist: 'P. Sokolov-Skalya',
          year: '1928',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 17, 18, 29, 2 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00034.jpg',
          title: 'If you will not read books...',
          artist: 'A. Mogilevsky',
          year: '1925',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 17, 18, 29, 2 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00033.jpg',
          title: 'Proletarian host...',
          artist: '?',
          year: '1926',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 17, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00032.jpg',
          title: 'In case of full cooperation...',
          artist: '?',
          year: '1927',
          rule: {
            "monday": [ 17, 18, 29, 2 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00031.jpg',
          title: 'V. Ulianov (Lenin) 1870-1924',
          artist: 'A. Strakhov-Braslavsky',
          year: '1924',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 17, 18, 29, 2 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00028.jpg',
          title: 'A ghost wanders around Europe, a ghost of communism.',
          artist: 'V. Sherbakov',
          year: '1920',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 17, 18, 29, 2 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00027.jpg',
          title: 'March 8th',
          artist: '?',
          year: '1926',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 17, 18, 29, 2 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00026.jpg',
          title: 'Each cook must learn...',
          artist: 'Makarychev, Raev',
          year: '1925',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 21, 4 ],
            "friday": [ 18, 19, 30, 3 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00025.jpg',
          title: 'Knowledge will break the chains of slavery',
          artist: 'A. Rudakov',
          year: '1920',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 21, 4 ],
            "saturday": [ 18, 19, 30, 3 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00024.jpg',
          title: 'What October Revolution gave to a worker and peasant',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 21, 4 ],
            "sunday": [ 18, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00022.jpg',
          title: 'The one is an offender,..',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 18, 19, 30, 3 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 21, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00021.jpg',
          title: 'Woman! Learn how to read and write!',
          artist: 'E. Kruglikova',
          year: '1923',
          rule: {
            "monday": [ 9, 20, 21, 4 ],
            "tuesday": [ 18, 19, 30, 3 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00018.jpg',
          title: 'To get more - (we) have to produce more, to produce more - (we) have to know (learn) more.',
          artist: 'A. Zelensky',
          year: '1920',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 21, 4 ],
            "wednesday": [ 18, 19, 30, 3 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00017.jpg',
          title: 'Beware of mensheviks and SRs',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 21, 4 ],
            "thursday": [ 18, 19, 30, 3 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00012.jpg',
          title: 'Red gift to a white pan',
          artist: 'Dmitry Moor',
          year: '1920',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 22, 5 ],
            "friday": [ 19, 20, 31, 4 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00009.jpg',
          title: 'Ukrainians and Russians have the same slogan..',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 22, 5 ],
            "saturday": [ 19, 20, 31, 4 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00003.jpg',
          title: 'Who is against Soviet',
          artist: 'Dmitry Moor',
          year: '1919',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 22, 5 ],
            "sunday": [ 19, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00002.jpg',
          title: 'Women come to (get into) cooperatives',
          artist: 'Ignaty Nivinsky',
          year: '1918',
          rule: {
            "monday": [ 19, 20, 31, 4 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 22, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0002.jpg',
          title: 'Build Air Fleet of the USSR',
          artist: 'I. Simakov',
          year: '1923',
          rule: {
            "monday": [ 10, 21, 22, 5 ],
            "tuesday": [ 19, 20, 31, 4 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_St_049.jpg',
          title: 'Each kolkhoznik, every brigade...',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 22, 5 ],
            "wednesday": [ 19, 20, 31, 4 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_St_036.jpg',
          title: 'The stake of the interventionists is overbid!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 22, 5 ],
            "thursday": [ 19, 20, 31, 4 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_St_035.jpg',
          title: '(We will) Destroy kulak as a class',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 23, 6 ],
            "friday": [ 20, 21, 1, 5 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_St_032.jpg',
          title: 'All (come) to review!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 23, 6 ],
            "saturday": [ 20, 21, 1, 5 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00035.jpg',
          title: 'Liberated woman - build up socialism!',
          artist: 'Strahov-Bratislavsky Adolf Iosifovich',
          year: '1926',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 23, 6 ],
            "sunday": [ 20, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_St_023.jpg',
          title: 'Against kulak\'s howl - by a concerted, collective front to sow!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 21, 1, 5 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 23, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_St_026.jpg',
          title: '10 years (anniversary) of the october (revolution)',
          artist: '?',
          year: '1927',
          rule: {
            "monday": [ 11, 22, 23, 6 ],
            "tuesday": [ 20, 21, 1, 5 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_Le_086.jpg',
          title: 'Long live the 5th anniversary of the Great October Proletarian Revolution!',
          artist: '?',
          year: '1922',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 23, 6 ],
            "wednesday": [ 20, 21, 1, 5 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_085.jpg',
          title: 'Long live KOMSOMOL',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 23, 6 ],
            "thursday": [ 20, 21, 1, 5 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00020.jpg',
          title: 'HELP',
          artist: 'Dmitry Moor',
          year: '1921',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 24, 7 ],
            "friday": [ 21, 22, 2, 6 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_083.jpg',
          title: 'Think about those who are starving',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 24, 7 ],
            "saturday": [ 21, 22, 2, 6 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_082.jpg',
          title: 'The victory of the Revolution is in cooperation of workers and peasants.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 24, 7 ],
            "sunday": [ 21, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_081.jpg',
          title: 'Workers',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 22, 2, 6 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 24, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_080.jpg',
          title: '(I) Believe (we) will celebrate the hundredth anniversary',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 12, 23, 24, 7 ],
            "tuesday": [ 21, 22, 2, 6 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00005.jpg',
          title: 'Citizens, save the historical monuments',
          artist: 'Nikolay Kupreyanov',
          year: '1919',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 24, 7 ],
            "wednesday": [ 21, 22, 2, 6 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_078.jpg',
          title: 'Long live the genius of the world-wide marvels - mighty creative labor.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 24, 7 ],
            "thursday": [ 21, 22, 2, 6 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_077.jpg',
          title: '1st of May. All-Russian subbotnik.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 25, 8 ],
            "friday": [ 22, 23, 3, 7 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_076.jpg',
          title: 'By a powerful strike of labor, we will destroy the shackles of devastation.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 25, 8 ],
            "saturday": [ 22, 23, 3, 7 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_075.jpg',
          title: 'Bread spider',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 25, 8 ],
            "sunday": [ 22, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_074.jpg',
          title: '(That) What Bolshevism brings to nation',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 23, 3, 7 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 25, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_073.jpg',
          title: 'Happy worker in Sovdepia',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 13, 24, 25, 8 ],
            "tuesday": [ 22, 23, 3, 7 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00007.jpg',
          title: 'Every hit of the hammer - is a hit on the enemy!',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 25, 8 ],
            "wednesday": [ 22, 23, 3, 7 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_068.jpg',
          title: 'Pyotr Nikolayevich Wrangel',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 25, 8 ],
            "thursday": [ 22, 23, 3, 7 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/u-g-PU2WY80.jpg',
          title: 'Long Live the Soviet People - the Space Pioneers!',
          artist: 'Vadim Petrovich Volikov',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 26, 9 ],
            "friday": [ 23, 24, 4, 8 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/u-g-PU2OR80.jpg',
          title: 'Have You Volunteered for the Red Army?',
          artist: 'Dmitri Stachievich Moor',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 26, 9 ],
            "saturday": [ 23, 24, 4, 8 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/u-g-PI4H4N0.jpg',
          title: 'Forwards, Let Us Destroy the German Occupiers and Drive Them Beyond the...',
          artist: 'V.A. Nikolaev',
          year: '1944',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 26, 9 ],
            "sunday": [ 23, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/u-g-F17NTP0.jpg',
          title: 'Workers Transportation',
          artist: 'D. Bulanov',
          year: '?',
          rule: {
            "monday": [ 23, 24, 4, 8 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 26, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/u-g-P27CI80.jpg',
          title: 'Let\'s Storm the Production Target',
          artist: 'Gustav Klutsis',
          year: '?',
          rule: {
            "monday": [ 14, 25, 26, 9 ],
            "tuesday": [ 23, 24, 4, 8 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00006.jpg',
          title: 'The enemy wants to take Moscow over...',
          artist: 'V. Fidman',
          year: '1919',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 26, 9 ],
            "wednesday": [ 23, 24, 4, 8 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_066.jpg',
          title: '(We) Will not give up Petrograd',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 26, 9 ],
            "thursday": [ 23, 24, 4, 8 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_065.jpg',
          title: 'Staunchly (by chest) for the defense of petrograd!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 27, 10 ],
            "friday": [ 24, 25, 5, 9 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_064.jpg',
          title: 'Worker!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 27, 10 ],
            "saturday": [ 24, 25, 5, 9 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_063.jpg',
          title: 'For the United Russia',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 27, 10 ],
            "sunday": [ 24, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_062.jpg',
          title: 'Sign up for the loan of Freedom',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 24, 25, 5, 9 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 27, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00019.jpg',
          title: 'Illiterate is the same as blind',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 15, 26, 27, 10 ],
            "tuesday": [ 24, 25, 5, 9 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_058.jpg',
          title: 'A day of the Soviet Propaganda',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 27, 10 ],
            "wednesday": [ 24, 25, 5, 9 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00015.jpg',
          title: '1st of May',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 27, 10 ],
            "thursday": [ 24, 25, 5, 9 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00023.jpg',
          title: 'Red Moscow',
          artist: '?',
          year: '1921',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 28, 11 ],
            "friday": [ 25, 26, 6, 10 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_055.jpg',
          title: 'Long live communist International!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 28, 11 ],
            "saturday": [ 25, 26, 6, 10 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_054.jpg',
          title: 'Welcome Comrades!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 28, 11 ],
            "sunday": [ 25, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_052.jpg',
          title: '(Get) Off the road',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 25, 26, 6, 10 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 28, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_051.jpg',
          title: 'Damnation and death to the hired assassins!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 28, 11 ],
            "tuesday": [ 25, 26, 6, 10 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_050.jpg',
          title: 'The deserter\'s nightmare.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 28, 11 ],
            "wednesday": [ 25, 26, 6, 10 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_049.jpg',
          title: 'The lord of the world - Capital, gold idol.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 28, 11 ],
            "thursday": [ 25, 26, 6, 10 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_048.jpg',
          title: 'Corpses of the Paris commune, revive under the Red Flag of Soviets!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 29, 12 ],
            "friday": [ 26, 27, 7, 11 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00010.jpg',
          title: 'To work (we) have to, rifle is near',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 29, 12 ],
            "saturday": [ 26, 27, 7, 11 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_044.jpg',
          title: 'To the polish front',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 29, 12 ],
            "sunday": [ 26, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_043.jpg',
          title: 'Тhe League of Nations',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 26, 27, 7, 11 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 29, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_040.jpg',
          title: 'R.S.F.S.R. Proletarians of all countries, unite!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 29, 12 ],
            "tuesday": [ 26, 27, 7, 11 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_036.jpg',
          title: 'Enemy at the gates!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 29, 12 ],
            "wednesday": [ 26, 27, 7, 11 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_034.jpg',
          title: 'lllrd International',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 29, 12 ],
            "thursday": [ 26, 27, 7, 11 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00016.jpg',
          title: 'Capital',
          artist: 'V. Deni',
          year: '1920',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 30, 13 ],
            "friday": [ 27, 28, 8, 12 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_032.jpg',
          title: 'Тhe League of Nations',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 30, 13 ],
            "saturday": [ 27, 28, 8, 12 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_031.jpg',
          title: 'This will not happen!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 30, 13 ],
            "sunday": [ 27, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_030.jpg',
          title: 'A pig, trained in Paris.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 27, 28, 8, 12 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 30, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_029.jpg',
          title: 'Manifest',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 30, 13 ],
            "tuesday": [ 27, 28, 8, 12 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_028.jpg',
          title: 'Liberators',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 30, 13 ],
            "wednesday": [ 27, 28, 8, 12 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_027.jpg',
          title: '1st of May is a holiday of labor.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 30, 13 ],
            "thursday": [ 27, 28, 8, 12 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_026.jpg',
          title: 'Soviet Russia. Sieged camp. All to defense!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 31, 14 ],
            "friday": [ 28, 29, 9, 13 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_025.jpg',
          title: 'October 1917 October 1920',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 31, 14 ],
            "saturday": [ 28, 29, 9, 13 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_023.jpg',
          title: 'Priests help capital(ism) and disturb worker. Get out of the way!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 31, 14 ],
            "sunday": [ 28, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_022.jpg',
          title: 'To the nations of the Caucasus',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 28, 29, 9, 13 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 31, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00001.jpg',
          title: 'Have you signed up as a volunteer?',
          artist: 'Dmitry Moor',
          year: '1920',
          rule: {
            "monday": [ 19, 30, 31, 14 ],
            "tuesday": [ 28, 29, 9, 13 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_019.jpg',
          title: 'Christmas',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 31, 14 ],
            "wednesday": [ 28, 29, 9, 13 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_018.jpg',
          title: 'Labor.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 31, 14 ],
            "thursday": [ 28, 29, 9, 13 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_017.jpg',
          title: 'Soviet repka (Russian folk fairy tale Turnip).',
          artist: '',
          year: '',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 1, 15 ],
            "friday": [ 29, 30, 10, 14 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00011.jpg',
          title: 'Death to world\'s imperialism',
          artist: 'Dmitry Moor',
          year: '1919',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 1, 15 ],
            "saturday": [ 29, 30, 10, 14 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0002.jpg',
          title: 'With red wedge, fight whites',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 1, 15 ],
            "sunday": [ 29, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_012.jpg',
          title: 'Long live the sun, let the darkness disappear.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 29, 30, 10, 14 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 1, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00014.jpg',
          title: '1st of May.',
          artist: 'Alexander Apsit',
          year: '1919',
          rule: {
            "monday": [ 20, 31, 1, 15 ],
            "tuesday": [ 29, 30, 10, 14 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_010.jpg',
          title: 'Onto a horse, proletarian!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 1, 15 ],
            "wednesday": [ 29, 30, 10, 14 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_009.jpg',
          title: 'A day of a wounded Red Army man.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 1, 15 ],
            "thursday": [ 29, 30, 10, 14 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00004.jpg',
          title: 'A year (anniversary) to the dictatorship of the proletariat.',
          artist: 'Alexander Apsit',
          year: '1918',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 2, 16 ],
            "friday": [ 30, 31, 11, 15 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_007.jpg',
          title: 'Antanta. Under the mask of piece.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 2, 16 ],
            "saturday": [ 30, 31, 11, 15 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_004.jpg',
          title: 'The Spider and the Flies.',
          artist: 'Viktor Deni',
          year: '1919',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 2, 16 ],
            "sunday": [ 30, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Le_002.jpg',
          title: 'Death to capital(ism), or death under the heel of Capital(ism)!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 30, 31, 11, 15 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 2, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Br_011.jpg',
          title: 'Peace to Nations!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 1, 2, 16 ],
            "tuesday": [ 30, 31, 11, 15 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00010.jpg',
          title: 'Women of collective farms- is a big power',
          artist: '?',
          year: '1933',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 2, 16 ],
            "wednesday": [ 30, 31, 11, 15 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00004.jpg',
          title: 'Will complete fully and on time the schedule of the grain reserves',
          artist: 'A.Lobanov',
          year: '1930',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 2, 16 ],
            "thursday": [ 30, 31, 11, 15 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00003.jpg',
          title: 'Watchfully protect socialist harvest',
          artist: 'V. Govorkov',
          year: '1936',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 3, 17 ],
            "friday": [ 31, 1, 12, 16 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00008.jpg',
          title: 'Women in collective farms',
          artist: 'V. Svarog',
          year: '1935',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 3, 17 ],
            "saturday": [ 31, 1, 12, 16 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00007.jpg',
          title: 'Komsomol...',
          artist: '?',
          year: '1931',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 3, 17 ],
            "sunday": [ 31, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00006.jpg',
          title: 'Collective farmers and individual farmers',
          artist: 'V.Govorkov',
          year: '1933',
          rule: {
            "monday": [ 31, 1, 12, 16 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 3, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00002.jpg',
          title: 'Farmhands and Komsomol members - onto a tractor!',
          artist: 'V.Svarog',
          year: '1931',
          rule: {
            "monday": [ 22, 2, 3, 17 ],
            "tuesday": [ 31, 1, 12, 16 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00010.jpg',
          title: 'Poster of the film "Doughnut" directed by M. Romm',
          artist: 'Yuri Pimenov',
          year: '1935',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 3, 17 ],
            "wednesday": [ 31, 1, 12, 16 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00009.jpg',
          title: 'L. Orlova in the film "Jolly Fellows" directed by Aleksandrov',
          artist: 'I.Gerasimovich',
          year: '1934',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 3, 17 ],
            "thursday": [ 31, 1, 12, 16 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00007.jpg',
          title: 'Poster of the film "Alexander Nevsky" directed by S.Eisenstein',
          artist: 'A. Belsky',
          year: '1938',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 4, 18 ],
            "friday": [ 1, 2, 13, 17 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00004.jpg',
          title: 'Poster of the film "Chapaev" directed by brothers Vasilyev',
          artist: 'A.Belsky',
          year: '1935',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 4, 18 ],
            "saturday": [ 1, 2, 13, 17 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cultsovpost_00007.jpg',
          title: 'Intourist Moskau Hotel Metropol Trans-Siberian Railway',
          artist: 'Litvak & Maximov',
          year: '1930',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 4, 18 ],
            "sunday": [ 1, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cultsovpost_00008.jpg',
          title: 'Moscow Theatre Festival (French language)',
          artist: 'N.Zhukov & S. Sakharov',
          year: '1934',
          rule: {
            "monday": [ 1, 2, 13, 17 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 4, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cultsovpost_00006.jpg',
          title: 'State Circus. Atraktsion "Flying torpreda"...',
          artist: 'I.Bograd',
          year: '1936',
          rule: {
            "monday": [ 23, 3, 4, 18 ],
            "tuesday": [ 1, 2, 13, 17 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00010.jpg',
          title: 'Woman (get) onto a (steam) locomotive!',
          artist: 'O.Deyneko',
          year: '1939',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 4, 18 ],
            "wednesday": [ 1, 2, 13, 17 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00007.jpg',
          title: 'We (vote) for renovation of the Soviet transport',
          artist: 'I.Gromitsky',
          year: '1931',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 4, 18 ],
            "thursday": [ 1, 2, 13, 17 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00005.jpg',
          title: 'The train station is "socialism" to "communism"',
          artist: 'P.Sokolov-Scalia',
          year: '1931',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 5, 19 ],
            "friday": [ 2, 3, 14, 18 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00004.jpg',
          title: 'Sleeping at work',
          artist: 'I.Chashnikov, B.Ioganson',
          year: '1931',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 5, 19 ],
            "saturday": [ 2, 3, 14, 18 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0059.jpg',
          title: 'Long Live our Happy Socialist Motherland',
          artist: 'G.Klutsis',
          year: '1935',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 5, 19 ],
            "sunday": [ 2, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0058.jpg',
          title: 'USSR - the country\'s largest',
          artist: 'D.Moor, S.Senkin',
          year: '1936',
          rule: {
            "monday": [ 2, 3, 14, 18 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 5, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0057.jpg',
          title: 'Comrade believe ...',
          artist: 'B.Knoblock',
          year: '1936',
          rule: {
            "monday": [ 24, 4, 5, 19 ],
            "tuesday": [ 2, 3, 14, 18 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0056.jpg',
          title: 'The trade unions of the USSR...',
          artist: 'V.Koretsky, V. Glitsevich',
          year: '1932',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 5, 19 ],
            "wednesday": [ 2, 3, 14, 18 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0055.jpg',
          title: 'Above the banner of Marx, Engels, Lenin and Stalin',
          artist: 'G.Klutsis',
          year: '1936',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 5, 19 ],
            "thursday": [ 2, 3, 14, 18 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0053.jpg',
          title: 'There metro!',
          artist: 'V. Deni, N.Dolgorukov',
          year: '1935',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 6, 20 ],
            "friday": [ 3, 4, 15, 19 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0052.jpg',
          title: 'All Moscow is Building Metro (subway)',
          artist: 'G. Klutsis',
          year: '1934',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 6, 20 ],
            "saturday": [ 3, 4, 15, 19 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0050.jpg',
          title: 'Komsomol Fulfill Demands of Comrade Voroshilov',
          artist: 'V. Elkin',
          year: '1932',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 6, 20 ],
            "sunday": [ 3, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0046.jpg',
          title: 'Working men and women of all countries...',
          artist: 'V.Koretsky',
          year: '1932',
          rule: {
            "monday": [ 3, 4, 15, 19 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 6, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0045.jpg',
          title: 'Socialist Forge of Health',
          artist: 'V.Gitsevich',
          year: '1932',
          rule: {
            "monday": [ 25, 5, 6, 20 ],
            "tuesday": [ 3, 4, 15, 19 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0044.jpg',
          title: 'Under a Flag of Lenin',
          artist: 'S.Senkin',
          year: '1931',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 6, 20 ],
            "wednesday": [ 3, 4, 15, 19 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0042.jpg',
          title: 'Unions to fight...',
          artist: 'V.Elkin',
          year: '1932',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 6, 20 ],
            "thursday": [ 3, 4, 15, 19 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0041.jpg',
          title: 'Moscow says...',
          artist: '?',
          year: '1930',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 7, 21 ],
            "friday": [ 4, 5, 16, 20 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0036.jpg',
          title: 'Exhibition of works by Vladimir Mayakovsky',
          artist: 'A.Gan',
          year: '1931',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 7, 21 ],
            "saturday": [ 4, 5, 16, 20 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0034.jpg',
          title: 'Hit! the enemy by a cultural revolution',
          artist: '?',
          year: '1930',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 7, 21 ],
            "sunday": [ 4, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00020.jpg',
          title: 'Thank you beloved Stalin for the joyful childhood',
          artist: 'V. Govorkov',
          year: '1936',
          rule: {
            "monday": [ 4, 5, 16, 20 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 7, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00014.jpg',
          title: 'A.S. Pushkin 100 years since the death 1837-1937',
          artist: 'I.Buev, B.Iordanskyi',
          year: '1936',
          rule: {
            "monday": [ 26, 6, 7, 21 ],
            "tuesday": [ 4, 5, 16, 20 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00012.jpg',
          title: 'An illiterate child is a shame of a mother',
          artist: 'I.Gromitsky',
          year: '1930',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 7, 21 ],
            "wednesday": [ 4, 5, 16, 20 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00011.jpg',
          title: 'Pioneer! Learn how to fight for the Ideas of the working class!',
          artist: 'N.Krasilnikov',
          year: '1930',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 7, 21 ],
            "thursday": [ 4, 5, 16, 20 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_socialsovpost_00016.jpg',
          title: 'Smoking tobacco...',
          artist: '?',
          year: '1930',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 8, 22 ],
            "friday": [ 5, 6, 17, 21 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_socialsovpost_00008.jpg',
          title: 'Remember, when you...',
          artist: '?',
          year: '1930',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 8, 22 ],
            "saturday": [ 5, 6, 17, 21 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sportsovpost_00006.jpg',
          title: 'Athletic Padar',
          artist: 'G.Kibardin',
          year: '1938',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 8, 22 ],
            "sunday": [ 5, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_tradesovpost_00021.jpg',
          title: 'Toothpaste "Sanit"',
          artist: 'I. Bograd',
          year: '1938',
          rule: {
            "monday": [ 5, 6, 17, 21 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 8, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_tradesovpost_00020.jpg',
          title: 'Pelmeni',
          artist: 'I.Bograd',
          year: '1936',
          rule: {
            "monday": [ 27, 7, 8, 22 ],
            "tuesday": [ 5, 6, 17, 21 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_tradesovpost_00018.jpg',
          title: 'Smoke cigarettes captain ...',
          artist: 'S.Sakharov',
          year: '1939',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 8, 22 ],
            "wednesday": [ 5, 6, 17, 21 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_tradesovpost_00014.jpg',
          title: 'Smoke cigarettes "Derby"',
          artist: 'I.Bograd',
          year: '1936',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 8, 22 ],
            "thursday": [ 5, 6, 17, 21 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_tradesovpost_00013.jpg',
          title: 'Conserves SOCRA',
          artist: 'S.Igumnov',
          year: '1932',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 9, 23 ],
            "friday": [ 6, 7, 18, 22 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_tradesovpost_00011.jpg',
          title: 'Iris-Prima.Mosselprom',
          artist: 'A.Zelensky',
          year: '1930',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 9, 23 ],
            "saturday": [ 6, 7, 18, 22 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_tradesovpost_00010.jpg',
          title: 'Fruit-drink. Mosselprom.',
          artist: 'A. Zelensky',
          year: '1930',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 9, 23 ],
            "sunday": [ 6, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00008.jpg',
          title: 'Working woman fight...',
          artist: 'M. Bri-Bain',
          year: '1931',
          rule: {
            "monday": [ 6, 7, 18, 22 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 9, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00006.jpg',
          title: 'Experienced workers....',
          artist: 'I.Young,A.Chernomordik',
          year: '1930',
          rule: {
            "monday": [ 28, 8, 9, 23 ],
            "tuesday": [ 6, 7, 18, 22 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00005.jpg',
          title: 'Give ( me) quality....',
          artist: '?',
          year: '1931',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 9, 23 ],
            "wednesday": [ 6, 7, 18, 22 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00004.jpg',
          title: 'Your lamp....',
          artist: 'V.Govorkov',
          year: '1933',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 9, 23 ],
            "thursday": [ 6, 7, 18, 22 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00062.jpg',
          title: 'Fascism - is an enemy of culture.',
          artist: 'B.Prorokov',
          year: '1939',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 10, 24 ],
            "friday": [ 7, 8, 19, 23 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00061.jpg',
          title: '(Let us) eradicate spies and saboteurs,..',
          artist: 'S. Igumnov',
          year: '1937',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 10, 24 ],
            "saturday": [ 7, 8, 19, 23 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00059.jpg',
          title: 'If the war is tomorrow...',
          artist: 'V. Koretsky',
          year: '1938',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 10, 24 ],
            "sunday": [ 7, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00058.jpg',
          title: 'Greetings to great Stalin...',
          artist: 'G.Kun, V.Elkin, K.Sobolevsky',
          year: '1937',
          rule: {
            "monday": [ 7, 8, 19, 23 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 10, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00057.jpg',
          title: 'Long live equal (in rights) woman of the USSR.',
          artist: 'M.Volkova, N.Pinus',
          year: '1938',
          rule: {
            "monday": [ 29, 9, 10, 24 ],
            "tuesday": [ 7, 8, 19, 23 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00055.jpg',
          title: 'Greetings to a Congress of Soviet writers!',
          artist: '?',
          year: '1934',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 10, 24 ],
            "wednesday": [ 7, 8, 19, 23 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00054.jpg',
          title: 'To Chelyuskintsy and to the heroic pilots...',
          artist: '?',
          year: '1934',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 10, 24 ],
            "thursday": [ 7, 8, 19, 23 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00053.jpg',
          title: 'Human resources solve everything',
          artist: 'G. Klutsis',
          year: '1935',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 11, 25 ],
            "friday": [ 8, 9, 20, 24 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00052.jpg',
          title: 'Kukryniksy. 15.',
          artist: 'Kukryniksy',
          year: '1932',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 11, 25 ],
            "saturday": [ 8, 9, 20, 24 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00051.jpg',
          title: 'Life has become better, life has become merrier!',
          artist: 'B. Efimov and M. Ioffe',
          year: '1936',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 11, 25 ],
            "sunday": [ 8, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00050.jpg',
          title: 'Long live Lenin Komsomol',
          artist: 'G. Klutsis',
          year: '1932',
          rule: {
            "monday": [ 8, 9, 20, 24 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 11, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00049.jpg',
          title: 'March 8th - day of uprising of working women against kitchen slavery',
          artist: 'B. Deykin',
          year: '1932',
          rule: {
            "monday": [ 30, 10, 11, 25 ],
            "tuesday": [ 8, 9, 20, 24 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00048.jpg',
          title: 'Rotfront',
          artist: 'V. Deni',
          year: '1932',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 11, 25 ],
            "wednesday": [ 8, 9, 20, 24 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00047.jpg',
          title: 'Black crows are setting up a bandit raid on the U.S.S.R.',
          artist: 'Dmitry Moor',
          year: '1930',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 11, 25 ],
            "thursday": [ 8, 9, 20, 24 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00046.jpg',
          title: 'China is on the way to become free from imperialism.',
          artist: 'A. Deineka',
          year: '1932',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 12, 26 ],
            "friday": [ 9, 10, 21, 25 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00044.jpg',
          title: 'Long live the World\'s October',
          artist: 'G. Klutsis',
          year: '1933',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 12, 26 ],
            "saturday": [ 9, 10, 21, 25 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00043.jpg',
          title: 'Mechanize Donbas',
          artist: 'A. Deineka',
          year: '1930',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 12, 26 ],
            "sunday": [ 9, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00042.jpg',
          title: 'No to kolkhoz! We - in favor of collective farms!',
          artist: 'B. Efimov',
          year: '1933',
          rule: {
            "monday": [ 9, 10, 21, 25 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 12, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00041.jpg',
          title: '(tobacco) Pipe of Stalin',
          artist: 'V. Deni',
          year: '1930',
          rule: {
            "monday": [ 31, 11, 12, 26 ],
            "tuesday": [ 9, 10, 21, 25 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00040.jpg',
          title: 'Stop kitchen slavery!..',
          artist: 'Gregory Shegal',
          year: '1931',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 12, 26 ],
            "wednesday": [ 9, 10, 21, 25 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00038.jpg',
          title: 'Get workers into the native council',
          artist: 'G. Horoshevsky',
          year: '1931',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 12, 26 ],
            "thursday": [ 9, 10, 21, 25 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00037.jpg',
          title: 'A member of sect - is a kulak\'s Petrushka',
          artist: 'M. Chermnyh',
          year: '1930',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 13, 27 ],
            "friday": [ 10, 11, 22, 26 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0011.jpg',
          title: 'Who is strong in the air...',
          artist: 'V. Deni, N. Dolgorukov, A. Umashev',
          year: '1938',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 13, 27 ],
            "saturday": [ 10, 11, 22, 26 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0009.jpg',
          title: 'Long live Soviet pilots,..',
          artist: 'N. Zhukov and V. Dobrovolsky',
          year: '1939',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 13, 27 ],
            "sunday": [ 10, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0008.jpg',
          title: 'There is no such fortress...',
          artist: 'Karachentsov Petr Yakovlevich',
          year: '1937',
          rule: {
            "monday": [ 10, 11, 22, 26 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 13, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0006.jpg',
          title: 'Honor to the falcons of Stalin...',
          artist: 'V. Deni and Nikolay Dolgorukov',
          year: '1937',
          rule: {
            "monday": [ 1, 12, 13, 27 ],
            "tuesday": [ 10, 11, 22, 26 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0005.jpg',
          title: 'Every kolhoz, each plant...',
          artist: 'Karachentsov Petr Yakovlevich',
          year: '1936',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 13, 27 ],
            "wednesday": [ 10, 11, 22, 26 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0004.jpg',
          title: 'Komsomolets, young worker, pioneer!..',
          artist: 'I. Buev and Iordansky Boris Vyacheslavovich',
          year: '1934',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 13, 27 ],
            "thursday": [ 10, 11, 22, 26 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0003.jpg',
          title: 'Youth, - to airplanes',
          artist: 'Gustav Klutsis',
          year: '1934',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 14, 28 ],
            "friday": [ 11, 12, 23, 27 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0007.jpg',
          title: 'Glory to the mighty aviation of the country of the Socialism! 1939',
          artist: '?',
          year: '1939',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 14, 28 ],
            "saturday": [ 11, 12, 23, 27 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_060.jpg',
          title: 'Stalin and Klement Voroshilov',
          artist: 'Gustav Klutsis',
          year: '1935',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 14, 28 ],
            "sunday": [ 11, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_059.jpg',
          title: 'January 1st, 1939. Happy New Year!',
          artist: '?',
          year: '1939',
          rule: {
            "monday": [ 11, 12, 23, 27 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 14, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_058.jpg',
          title: 'To work, to build and not to whine!',
          artist: 'Dejneka Alexander Aleksandrovich',
          year: '1933',
          rule: {
            "monday": [ 2, 13, 14, 28 ],
            "tuesday": [ 11, 12, 23, 27 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_056.jpg',
          title: 'Long live Stalin\'s constitution!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 14, 28 ],
            "wednesday": [ 11, 12, 23, 27 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_055.jpg',
          title: 'The Soviet woman',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 14, 28 ],
            "thursday": [ 11, 12, 23, 27 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_053.jpg',
          title: 'Shock woman-workers, strengthen shock-brigades ! ',
          artist: '?',
          year: '1931',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 15, 29 ],
            "friday": [ 12, 13, 24, 28 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_052.jpg',
          title: 'Invent! Make way for the workers\' mother wit!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 15, 29 ],
            "saturday": [ 12, 13, 24, 28 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_051.jpg',
          title: 'Life\'s Getting Better. Stalin 1934.',
          artist: '?',
          year: '1934',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 15, 29 ],
            "sunday": [ 12, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_050.jpg',
          title: 'Who is glorious and famous in the country of Socialism',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 12, 13, 24, 28 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 15, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00005.jpg',
          title: 'Shock harvesting to a Bolshevik\'s crop.',
          artist: '?',
          year: '1934',
          rule: {
            "monday": [ 3, 14, 15, 29 ],
            "tuesday": [ 12, 13, 24, 28 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_046.jpg',
          title: 'Long live the Union of the workers and peasants - the basis of the Soviet power',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 15, 29 ],
            "wednesday": [ 12, 13, 24, 28 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_045.jpg',
          title: 'Subway Komsomol members',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 15, 29 ],
            "thursday": [ 12, 13, 24, 28 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_044.jpg',
          title: 'The Dneprostroy has been built.',
          artist: '?',
          year: '1932',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 16, 30 ],
            "friday": [ 13, 14, 25, 29 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_043.jpg',
          title: 'Let\'s make stronger industrial power of Soviet Union ! ',
          artist: '?',
          year: '1932',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 16, 30 ],
            "saturday": [ 13, 14, 25, 29 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_042.jpg',
          title: 'Let\'s take by storm the last - fourth year of five-year plan !',
          artist: '?',
          year: '1931',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 16, 30 ],
            "sunday": [ 13, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00006.jpg',
          title: 'The train goes from the Socialism Station to the Communism Station.',
          artist: '?',
          year: '1939',
          rule: {
            "monday": [ 13, 14, 25, 29 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 16, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_stalin_wheel.jpg',
          title: 'The captain of the country of Soviets, leads us from victory to victory!',
          artist: 'B. Efimov',
          year: '1933',
          rule: {
            "monday": [ 4, 15, 16, 30 ],
            "tuesday": [ 13, 14, 25, 29 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_039.jpg',
          title: 'Red Army is a reliable guard of the Soviet country.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 16, 30 ],
            "wednesday": [ 13, 14, 25, 29 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_038.jpg',
          title: 'Stalin.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 16, 30 ],
            "thursday": [ 13, 14, 25, 29 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_037.jpg',
          title: 'GPU. counter-revolutionary saboteur.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 17, 31 ],
            "friday": [ 14, 15, 26, 30 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_034.jpg',
          title: 'Soviet propaganda poster',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 17, 31 ],
            "saturday": [ 14, 15, 26, 30 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_033.jpg',
          title: 'Steelcast the strike detachments, into the through strike brigades',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 17, 31 ],
            "sunday": [ 14, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_031.jpg',
          title: 'By all means, at any cost (we will) eliminate the gap.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 14, 15, 26, 30 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 17, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_029.jpg',
          title: 'Building of Socialism',
          artist: '?',
          year: '1930',
          rule: {
            "monday": [ 5, 16, 17, 31 ],
            "tuesday": [ 14, 15, 26, 30 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_027.jpg',
          title: '(We will) Fulfil the plan of the great jobs',
          artist: 'Gustav Klutsis',
          year: '?',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 17, 31 ],
            "wednesday": [ 14, 15, 26, 30 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_025.jpg',
          title: 'Not one hectare of not sown land!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 17, 31 ],
            "thursday":[ 14, 15, 26, 30 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_1521856238kolhoz.jpg',
          title: 'Comrade come to our kolkhoz!',
          artist: '?',
          year: '1930',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 18, 1 ],
            "friday": [ 15, 16, 27, 31 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_022.jpg',
          title: 'Peasant woman, strengthen the union of workers and peasants.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 18, 1 ],
            "saturday": [ 15, 16, 27, 31 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_021.jpg',
          title: 'Leningrad society of linkage of the city with a village.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 18, 1 ],
            "sunday": [ 15, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_002.jpg',
          title: 'Greetings to the fighters against fascism.',
          artist: 'Koretsky V. B.',
          year: '1937',
          rule: {
            "monday": [ 15, 16, 27, 31 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 18, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_001.jpg',
          title: 'Fascism - is a starvation! Fascism - is a terror! Fascism - is a war!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 6, 17, 18, 1 ],
            "tuesday": [ 15, 16, 27, 31 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00029.jpg',
          title: 'Drinking water of dear Dnepr!',
          artist: 'Victor Ivanov',
          year: '1943',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 18, 1 ],
            "wednesday": [ 15, 16, 27, 31 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00022.jpg',
          title: 'Trading culturally - is a respectable job!',
          artist: '?',
          year: '1949',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 18, 1 ],
            "thursday": [ 15, 16, 27, 31 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00016.jpg',
          title: '(we) Will serve culturally each (and every) visitor!',
          artist: '?',
          year: '1948',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 19, 2 ],
            "friday": [ 16, 17, 28, 1 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00013.jpg',
          title: 'At labor time (some people) work at night time as well!',
          artist: '?',
          year: '1947',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 19, 2 ],
            "saturday": [ 16, 17, 28, 1 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00011.jpg',
          title: '(we) Will build back to fame!',
          artist: '?',
          year: '1945',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 19, 2 ],
            "sunday": [ 16, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00011.jpg',
          title: '(if we) Seed at the right time - will get a mountain of grain!',
          artist: 'V. Govorkov',
          year: '1946',
          rule: {
            "monday": [ 16, 17, 28, 1 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 19, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00009.jpg',
          title: '(We) will provide the highest yield in 1944...',
          artist: '?',
          year: '1944',
          rule: {
            "monday": [ 7, 18, 19, 2 ],
            "tuesday": [ 16, 17, 28, 1 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00005.jpg',
          title: 'Poster of the film "Ivan the Terrible" directed by S. Eisenstein',
          artist: '?',
          year: '1945',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 19, 2 ],
            "wednesday": [ 16, 17, 28, 1 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cultsovpost_00010.jpg',
          title: 'Salute. Jas-State Orchestra',
          artist: '?',
          year: '1944',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 19, 2 ],
            "thursday": [ 16, 17, 28, 1 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00016.jpg',
          title: 'Oilmen, more oil to the Motherland!',
          artist: 'P. Krivonogov',
          year: '1948',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 20, 3 ],
            "friday": [ 17, 18, 29, 2 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00013.jpg',
          title: 'Transport (is) a sibling of the Red Army...',
          artist: 'I. Gromitsky',
          year: '1941',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 20, 3 ],
            "saturday": [ 17, 18, 29, 2 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00011.jpg',
          title: 'Over 38 million tons of oil with gas in 1941...',
          artist: '?',
          year: '1941',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 20, 3 ],
            "sunday": [ 17, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_ksssrpost_0060.jpg',
          title: 'Everything for the front! Everything for the victory!',
          artist: 'L. Lisitsky',
          year: '1942',
          rule: {
            "monday": [ 17, 18, 29, 2 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 20, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00031.jpg',
          title: 'Talents',
          artist: 'V. Koretsky',
          year: '1948',
          rule: {
            "monday": [ 8, 19, 20, 3 ],
            "tuesday": [ 17, 18, 29, 2 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00030.jpg',
          title: 'Study excellent!',
          artist: 'M. Nesterov-Berzina',
          year: '1948',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 20, 3 ],
            "wednesday": [ 17, 18, 29, 2 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00026.jpg',
          title: 'I will become a metalworker!',
          artist: 'N. Vatolina',
          year: '1948',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 20, 3 ],
            "thursday": [ 17, 18, 29, 2 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00022.jpg',
          title: 'Healthy parents - healthy posterity',
          artist: 'N. Vatolina',
          year: '1948',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 21, 4 ],
            "friday": [ 18, 19, 30, 3 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00019.jpg',
          title: 'Our children should not get sick with diarrhea',
          artist: 'G. Shubina',
          year: '1940',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 21, 4 ],
            "saturday": [ 18, 19, 30, 3 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00018.jpg',
          title: 'Glory to a mother - a heroine!',
          artist: 'N. Vatolina',
          year: '1944',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 21, 4 ],
            "sunday": [ 18, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00005.jpg',
          title: 'How did YOU help the front line?',
          artist: 'D.Moor',
          year: '1941',
          rule: {
            "monday": [ 18, 19, 30, 3 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 21, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00040.jpg',
          title: 'Our flag is a flag of the victory!',
          artist: 'V.Koretsky',
          year: '1945',
          rule: {
            "monday": [ 9, 20, 21, 4 ],
            "tuesday": [ 18, 19, 30, 3 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00039.jpg',
          title: 'You will live a happy life!',
          artist: 'V. Ivanov',
          year: '1944',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 21, 4 ],
            "wednesday": [ 18, 19, 30, 3 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00038.jpg',
          title: 'Hi motherland!',
          artist: 'N.Vatolina',
          year: '1945',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 21, 4 ],
            "thursday": [ 18, 19, 30, 3 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00036.jpg',
          title: 'We will walk to Berlin',
          artist: 'L.Golovanov',
          year: '1944',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 22, 5 ],
            "friday": [ 19, 20, 31, 4 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00032.jpg',
          title: 'To the West!',
          artist: 'V. Ivanov',
          year: '1943',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 22, 5 ],
            "saturday": [ 19, 20, 31, 4 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00027.jpg',
          title: 'Soldier, respond to Motherland by a Victory!',
          artist: 'D.Shmarinov',
          year: '1942',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 22, 5 ],
            "sunday": [ 19, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00025.jpg',
          title: 'Ural to the Front',
          artist: 'P.Karachentsov',
          year: '1942',
          rule: {
            "monday": [ 19, 20, 31, 4 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 22, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00024.jpg',
          title: 'For The Motherland!',
          artist: 'I. Toidze',
          year: '1943',
          rule: {
            "monday": [ 10, 21, 22, 5 ],
            "tuesday": [ 19, 20, 31, 4 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00022.jpg',
          title: 'Red Army soldier!',
          artist: 'F.Antonov',
          year: '1942',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 22, 5 ],
            "wednesday": [ 19, 20, 31, 4 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00021.jpg',
          title: 'For the motherland!',
          artist: 'A.Kokorekin',
          year: '1942',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 22, 5 ],
            "thursday": [ 19, 20, 31, 4 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00020.jpg',
          title: 'Red Army soldier SAVE!',
          artist: 'V.Kopecky',
          year: '1942',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 23, 6 ],
            "friday": [ 20, 21, 1, 5 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00018.jpg',
          title: 'German invaders!',
          artist: 'B. Efimov, N. Dolgorukov',
          year: '1942',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 23, 6 ],
            "saturday": [ 20, 21, 1, 5 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00013.jpg',
          title: 'To Moscow! From Moscow!',
          artist: 'V. Deni',
          year: '1941 - 1942',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 23, 6 ],
            "sunday": [ 20, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00012.jpg',
          title: 'The people and the army are invincible!',
          artist: 'V. Koretsky',
          year: '1941',
          rule: {
            "monday": [ 20, 21, 1, 5 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 23, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00011.jpg',
          title: 'Every hit of a hammer hits the enemy!',
          artist: 'V. Deni, N. Dolgorukov',
          year: '1941',
          rule: {
            "monday": [ 11, 22, 23, 6 ],
            "tuesday": [ 20, 21, 1, 5 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00009.jpg',
          title: 'How it was - how it will be!',
          artist: 'N. Golgorukov',
          year: '1941',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 23, 6 ],
            "wednesday": [ 20, 21, 1, 5 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00008.jpg',
          title: 'All on G',
          artist: 'D. Moore',
          year: '1941',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 23, 6 ],
            "thursday": [ 20, 21, 1, 5 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00006.jpg',
          title: 'Partisans, kill the enemy without mercy!',
          artist: 'V.Koretsky',
          year: '1941',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 24, 7 ],
            "friday": [ 21, 22, 2, 6 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sportsovpost_00013.jpg',
          title: 'Youth - to the stadiums!',
          artist: 'L.Golovanov',
          year: '1947',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 24, 7 ],
            "saturday": [ 21, 22, 2, 6 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sportsovpost_00011.jpg',
          title: 'Youth to ski!',
          artist: 'M.Nestorova-Berzina,O.Nesterova',
          year: '1945',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 24, 7 ],
            "sunday": [ 21, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sportsovpost_00009.jpg',
          title: 'Everyone to skis!',
          artist: 'A.Nemukhin',
          year: '1942',
          rule: {
            "monday": [ 21, 22, 2, 6 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 24, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00004.jpg',
          title: 'Be a hero',
          artist: 'V.Koretsky',
          year: 'c.1940',
          rule: {
            "monday": [ 12, 23, 24, 7 ],
            "tuesday": [ 21, 22, 2, 6 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00002.jpg',
          title: 'Our forces are countless!',
          artist: 'V.Koretsky',
          year: '1941',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 24, 7 ],
            "wednesday": [ 21, 22, 2, 6 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00001.jpg',
          title: 'Homeland - Mother is Calling!',
          artist: 'I.Toidze',
          year: '1941',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 24, 7 ],
            "thursday": [ 21, 22, 2, 6 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_1525946205replace.jpg',
          title: '(we) Will Replace!',
          artist: 'V. Serov',
          year: '1941',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 25, 8 ],
            "friday": [ 22, 23, 3, 7 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00020.jpg',
          title: 'My student...',
          artist: 'V.Govorkov',
          year: '1948',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 25, 8 ],
            "saturday": [ 22, 23, 3, 7 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00021.jpg',
          title: 'My happiness...',
          artist: 'V.Koretsky',
          year: '1947',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 25, 8 ],
            "sunday": [ 22, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_enemyalert.jpg',
          title: 'The enemy is treacherous - be on the alert!',
          artist: 'V. Ivanov',
          year: '1945',
          rule: {
            "monday": [ 22, 23, 3, 7 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 25, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00001.jpg',
          title: 'Do a good job - a good result will come',
          artist: '?',
          year: '1947',
          rule: {
            "monday": [ 13, 24, 25, 8 ],
            "tuesday": [ 22, 23, 3, 7 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_capitalism_socialism.jpg',
          title: 'Under capitalism...Under socialism!',
          artist: 'V. Koretsky',
          year: '1948',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 25, 8 ],
            "wednesday": [ 22, 23, 3, 7 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00079.jpg',
          title: 'Delegate - is a servant of people',
          artist: 'L.Golovanov',
          year: '1947',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 25, 8 ],
            "thursday": [ 22, 23, 3, 7 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00077.jpg',
          title: 'We will beat drought!',
          artist: 'V. Govorkov',
          year: '1949',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 26, 9 ],
            "friday": [ 23, 24, 4, 8 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00075.jpg',
          title: '(we) Will come to plenty!',
          artist: 'V.Ivanov',
          year: '1949',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 26, 9 ],
            "saturday": [ 23, 24, 4, 8 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00074.jpg',
          title: 'Vote for the prosperity of each town, each village of our beloved Motherland!',
          artist: 'G.Shubina',
          year: '1947',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 26, 9 ],
            "sunday": [ 23, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 311,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00073.jpg',
          title: 'Everyone (come) to the elections!',
          artist: 'V. Ivanov, O.Burova',
          year: '1947',
          rule: {
            "monday": [ 23, 24, 4, 8 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 26, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 312,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_stalin_svetoch.jpg',
          title: 'Great Stalin - Svetoch of communism!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 14, 25, 26, 9 ],
            "tuesday": [ 23, 24, 4, 8 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 313,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00070.jpg',
          title: 'I am an old man,-...',
          artist: 'I.Toidze',
          year: '1947',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 26, 9 ],
            "wednesday": [ 23, 24, 4, 8 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 314,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00069.jpg',
          title: 'For the happy youth...',
          artist: 'B. Ioganson',
          year: '1946',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 26, 9 ],
            "thursday": [ 23, 24, 4, 8 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 315,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00068.jpg',
          title: 'I vote for the candidates of the coalition...',
          artist: 'V. Ivanov, O.Burova',
          year: '1947',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 27, 10 ],
            "friday": [ 24, 25, 5, 9 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 316,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00065.jpg',
          title: 'Do not fool around!',
          artist: 'V. Govorkov',
          year: '1948',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 27, 10 ],
            "saturday": [ 24, 25, 5, 9 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 317,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00063.jpg',
          title: 'Look: singing and dancing...',
          artist: 'P.Golub, A.Chernov',
          year: '1946',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 27, 10 ],
            "sunday": [ 24, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 318,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00060.jpg',
          title: 'About each one of us takes care Stalin in Kremlin',
          artist: 'V. Govorkov',
          year: '1940',
          rule: {
            "monday": [ 24, 25, 5, 9 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 27, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 319,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0015.jpg',
          title: 'Ram - is a weapon of heroes!',
          artist: 'A. Voloshin',
          year: '1941',
          rule: {
            "monday": [ 15, 26, 27, 10 ],
            "tuesday": [ 24, 25, 5, 9 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 320,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0013.jpg',
          title: 'Glory to the heroes of World War II!',
          artist: 'P. Vandyshev, L. Torich',
          year: '1941',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 27, 10 ],
            "wednesday": [ 24, 25, 5, 9 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 321,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0012.jpg',
          title: 'Proud of son!',
          artist: 'V. Govorkov',
          year: '1941',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 27, 10 ],
            "thursday": [ 24, 25, 5, 9 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 322,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0010.jpg',
          title: 'On the land and above...',
          artist: 'P. Sokolov-Skalya',
          year: '1941',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 28, 11 ],
            "friday": [ 25, 26, 6, 10 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 323,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_5in4plan.jpg',
          title: 'Five-Year plan in four years - (we) will complete!',
          artist: 'Victor Ivanov',
          year: '?',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 28, 11 ],
            "saturday": [ 25, 26, 6, 10 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 324,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00012.jpg',
          title: 'Comrades loggers! Let’s keep promise given to Comrade Stalin!',
          artist: '?',
          year: '1948',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 28, 11 ],
            "sunday": [ 25, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 325,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_069.jpg',
          title: 'Glory to Stalin - to the great architect of communism!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 25, 26, 6, 10 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 28, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 326,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_068.jpg',
          title: 'New five-year plan - the five year plan of the Great construction',
          artist: '?',
          year: '1946',
          rule: {
            "monday": [ 16, 27, 28, 11 ],
            "tuesday": [ 25, 26, 6, 10 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 327,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_067.jpg',
          title: 'Young builders of Communism!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 28, 11 ],
            "wednesday": [ 25, 26, 6, 10 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 328,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_066.jpg',
          title: 'Let\'s raise the generation utterly devoted to the cause of communism!',
          artist: 'Victor Ivanov',
          year: '1947',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 28, 11 ],
            "thursday": [ 25, 26, 6, 10 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 329,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00066.jpg',
          title: '(Will) rebuild!',
          artist: 'V. Koretsky',
          year: '1947',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 29, 12 ],
            "friday": [ 26, 27, 7, 11 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 330,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_064.jpg',
          title: 'Glory to the Russian people - the bogatyr people, the creator people!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 29, 12 ],
            "saturday": [ 26, 27, 7, 11 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 331,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_1531048734stalin_cremlin.jpg',
          title: 'Stalin in the Kremlin cares about each one of us!',
          artist: 'Viktor Govorkov',
          year: '1940',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 29, 12 ],
            "sunday": [ 26, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 332,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_047_den.jpg',
          title: 'Party and Lenin are twin brothers.',
          artist: 'N. Denisov, N. Vatolina',
          year: '1940',
          rule: {
            "monday": [ 26, 27, 7, 11 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 29, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 333,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_elect.jpg',
          title: '21st december 1947',
          artist: '?',
          year: '1947',
          rule: {
            "monday": [ 17, 28, 29, 12 ],
            "tuesday": [ 26, 27, 7, 11 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 334,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_013.jpg',
          title: 'Glory to the heroes - partisans, destroying fascists rear!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 29, 12 ],
            "wednesday": [ 26, 27, 7, 11 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 335,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_014.jpg',
          title: 'I am waiting for you, soldier - the liberator!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 29, 12 ],
            "thursday": [ 26, 27, 7, 11 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 336,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_010.jpg',
          title: 'Under the flag of Lenin - Forward for the Motherland, for our victory!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 30, 13 ],
            "friday": [ 27, 28, 8, 12 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 337,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_warsovpost_00028.jpg',
          title: 'You brought back to us (our) life!',
          artist: '?',
          year: '1943',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 30, 13 ],
            "saturday": [ 27, 28, 8, 12 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 338,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_015.jpg',
          title: 'More metal - more weapons!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 30, 13 ],
            "sunday": [ 27, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 339,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_do_not_blab.jpg',
          title: 'Do not blab!',
          artist: '?',
          year: '1941',
          rule: {
            "monday": [ 27, 28, 8, 12 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 30, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 340,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00021.jpg',
          title: 'Breed rabbits!',
          artist: 'G. Shchetkin',
          year: '1957',
          rule: {
            "monday": [ 18, 29, 30, 13 ],
            "tuesday": [ 27, 28, 8, 12 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 341,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00018.jpg',
          title: '(we) Will get a rich harvest from a virgin land!',
          artist: 'V. Koretsky, K. Ivanov, O. Savostyuk',
          year: '1954',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 30, 13 ],
            "wednesday": [ 27, 28, 8, 12 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 342,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00015.jpg',
          title: 'Expand pig farming!',
          artist: 'A.Mosin',
          year: '1955',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 30, 13 ],
            "thursday": [ 27, 28, 8, 12 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 343,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00013.jpg',
          title: 'Milkmaids get high milk yields from every forage cow!',
          artist: 'B. Zelenskii',
          year: '1950',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 31, 14 ],
            "friday": [ 28, 29, 9, 13 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 344,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_breadsovpost_00012.jpg',
          title: 'Get ready for the nationwide agricultural exhibition.',
          artist: 'V.Livanova',
          year: '1950',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 31, 14 ],
            "saturday": [ 28, 29, 9, 13 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 345,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00014.jpg',
          title: '"The Cranes Are Flying" movie (film) poster, directed by M. Kalatozov',
          artist: 'B. Zelensky',
          year: '1957',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 31, 14 ],
            "sunday": [ 28, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 346,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_idiot_movie_poster.jpg',
          title: '"The idiot" movie (film) poster, directed by I. Pyryev ',
          artist: 'M.Hazanovsky',
          year: '1958',
          rule: {
            "monday": [ 28, 29, 9, 13 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 31, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 347,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00011.jpg',
          title: 'M.Hazanovsky',
          artist: 'N.Homov',
          year: '1956',
          rule: {
            "monday": [ 19, 30, 31, 14 ],
            "tuesday": [ 28, 29, 9, 13 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 348,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00008.jpg',
          title: '"Kuban Cossacks" movie poster, directed by I. Pyryev',
          artist: 'B.Zelensky',
          year: '1950',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 31, 14 ],
            "wednesday": [ 28, 29, 9, 13 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 349,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cultsovpost_00014.jpg',
          title: 'Tours in Moscow',
          artist: 'A. Chernomordik',
          year: '1957',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 31, 14 ],
            "thursday": [ 28, 29, 9, 13 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 350,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cultsovpost_00012.jpg',
          title: 'Unusual Concert',
          artist: 'V.Andrievich',
          year: '1952',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 1, 15 ],
            "friday": [ 29, 30, 10, 14 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 351,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cultsovpost_00009.jpg',
          title: 'Circus. Tamer of lions Irina Bugrimova...',
          artist: 'M.Bulanov',
          year: '1950',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 1, 15 ],
            "saturday": [ 29, 30, 10, 14 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 352,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00018.jpg',
          title: 'Transport More Oil',
          artist: 'V.Elkin',
          year: '1950',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 1, 15 ],
            "sunday": [ 29, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 353,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00017.jpg',
          title: 'To the Motherland, New Millions of KiloWatts!',
          artist: 'A.Kokorekin',
          year: '1955',
          rule: {
            "monday": [ 29, 30, 10, 14 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 1, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 354,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00015.jpg',
          title: 'Glory to the Soviet railway workers!',
          artist: 'V.Tsarev',
          year: '1951',
          rule: {
            "monday": [ 20, 31, 1, 15 ],
            "tuesday": [ 29, 30, 10, 14 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 355,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00014.jpg',
          title: 'Electric power to Kolkhoz, Sovhoz and MTS',
          artist: 'V.Koretsky',
          year: '1950',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 1, 15 ],
            "wednesday": [ 29, 30, 10, 14 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 356,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_industrysovpost_00012.jpg',
          title: 'In the name of communism...',
          artist: 'V. Govorcov',
          year: '1951',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 1, 15 ],
            "thursday": [ 29, 30, 10, 14 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 357,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00043.jpg',
          title: 'Do not (you) dare',
          artist: 'S.Nizovaya',
          year: '1955',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 2, 16 ],
            "friday": [ 30, 31, 11, 15 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 358,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00038.jpg',
          title: 'Welcome',
          artist: 'N. Vatolina',
          year: '1956',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 2, 16 ],
            "saturday": [ 30, 31, 11, 15 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 359,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00037.jpg',
          title: 'Wear (it) with honor!',
          artist: 'G. Shubina',
          year: '1956',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 2, 16 ],
            "sunday": [ 30, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 360,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00036.jpg',
          title: 'Singing and Music 5, drawing 5',
          artist: 'V.Govorkov',
          year: '1959',
          rule: {
            "monday": [ 30, 31, 11, 15 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 2, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 361,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00034.jpg',
          title: 'This is not my job!',
          artist: 'S.Nizovaya',
          year: '1956',
          rule: {
            "monday": [ 21, 1, 2, 16 ],
            "tuesday": [ 30, 31, 11, 15 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 362,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00033.jpg',
          title: 'I (will do it) by myself!',
          artist: 'S. Nizova',
          year: '1956',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 2, 16 ],
            "wednesday": [ 30, 31, 11, 15 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 363,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00032.jpg',
          title: 'Glory to our beloved motherland',
          artist: 'M. Bri-Bain',
          year: '1950',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 2, 16 ],
            "thursday": [ 30, 31, 11, 15 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 364,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00029.jpg',
          title: 'Love books - the source of knowledge!',
          artist: 'B. Suryaninov',
          year: '1952',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 3, 17 ],
            "friday": [ 31, 1, 12, 16 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 365,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00028.jpg',
          title: 'Long live peace!',
          artist: 'N. Tereshchenko',
          year: '1955',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 3, 17 ],
            "saturday": [ 31, 1, 12, 16 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 366,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00024.jpg',
          title: 'Let our motherland to have a long life and prosper!',
          artist: 'P. Golub',
          year: '1949',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 3, 17 ],
            "sunday": [ 31, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 367,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00013.jpg',
          title: 'The whole world will be ours!',
          artist: 'I.Zavyalov',
          year: '1935',
          rule: {
            "monday": [ 31, 1, 12, 16 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 3, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 368,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00001.jpg',
          title: 'Be happy, darling!',
          artist: 'V. Ivanov',
          year: '1955',
          rule: {
            "monday": [ 22, 2, 3, 17 ],
            "tuesday": [ 31, 1, 12, 16 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 369,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_shame.jpg',
          title: 'Feeling ashamed!',
          artist: 'N. Velezheva, N. Kuzovkin',
          year: '1958',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 3, 17 ],
            "wednesday": [ 31, 1, 12, 16 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 370,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_socialsovpost_00015.jpg',
          title: 'Sin - (go) over the doorstep!',
          artist: 'V.Govorkov',
          year: '1959',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 3, 17 ],
            "thursday": [ 31, 1, 12, 16 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 371,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_socialsovpost_00014.jpg',
          title: 'Tobacco - poison, quit smoking!',
          artist: 'N.Ignatiev',
          year: '1957',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 4, 18 ],
            "friday": [ 1, 2, 13, 17 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 372,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_socialsovpost_00012.jpg',
          title: 'They say we are pigs...',
          artist: 'A.Mosin',
          year: '1958',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 4, 18 ],
            "saturday": [ 1, 2, 13, 17 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 373,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sportsovpost_00018.jpg',
          title: 'Spartakiada Nations USSR!',
          artist: 'V. Ivanov',
          year: '1955',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 4, 18 ],
            "sunday": [ 1, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 374,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sportsovpost_00017.jpg',
          title: 'World Allround Speed Skating Championships for Women',
          artist: 'B. Zelenskyi',
          year: '1950',
          rule: {
            "monday": [ 1, 2, 13, 17 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 4, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 375,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_tradesovpost_00029.jpg',
          title: 'Soviet Champagne',
          artist: 'N. Martynov',
          year: '1952',
          rule: {
            "monday": [ 23, 3, 4, 18 ],
            "tuesday": [ 1, 2, 13, 17 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 376,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_tradesovpost_00028.jpg',
          title: 'Kvass',
          artist: 'S.Lapaev',
          year: '1959',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 4, 18 ],
            "wednesday": [ 1, 2, 13, 17 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 377,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_1528809768citrus_juice.jpg',
          title: 'Citrus Juice - Natural Drink',
          artist: 'S.Sakharov',
          year: '1951',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 4, 18 ],
            "thursday": [ 1, 2, 13, 17 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 378,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_hats_ad.jpg',
          title: 'Headgear Hats Fashion Advertisement',
          artist: 'B.Truhachev',
          year: '1953',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 5, 19 ],
            "friday": [ 2, 3, 14, 18 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 379,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_black_caviar.jpg',
          title: 'Black caviar',
          artist: 'A.Andreadi',
          year: '1952',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 5, 19 ],
            "saturday": [ 2, 3, 14, 18 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 380,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_red_october_chocolate.jpg',
          title: 'Chocolate sets of Red October factory',
          artist: 'A.Pobedinsky',
          year: '1950',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 5, 19 ],
            "sunday": [ 2, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 381,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_foods.jpg',
          title: 'Foods Sold at Potreb-cooperation stores',
          artist: 'B.Trukhachev',
          year: '1954',
          rule: {
            "monday": [ 2, 3, 14, 18 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 5, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 382,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_factory_brand.jpg',
          title: 'Fight for the honor of (your) Factory Trademark',
          artist: 'V. Koretsky',
          year: '1950',
          rule: {
            "monday": [ 24, 4, 5, 19 ],
            "tuesday": [ 2, 3, 14, 18 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 383,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_young_engineer.jpg',
          title: 'Young engineer - To the Manufacturing Department! ',
          artist: 'V. Govorkov',
          year: '1956',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 5, 19 ],
            "wednesday": [ 2, 3, 14, 18 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 384,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_close_to_life.jpg',
          title: 'Closer to life, to alive deed!',
          artist: 'K. Ivanov, V. Briskin',
          year: '1954',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 5, 19 ],
            "thursday": [ 2, 3, 14, 18 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 385,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_restaurant.jpg',
          title: 'Deserve a praise!',
          artist: 'V. Govorkov',
          year: '1954',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 6, 20 ],
            "friday": [ 3, 4, 15, 19 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 386,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_exhibition_cows.jpg',
          title: 'In a good shape are my beauties',
          artist: 'O.Savostyuk, B. Uspenskii',
          year: '1955',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 6, 20 ],
            "saturday": [ 3, 4, 15, 19 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 387,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_night_job.jpg',
          title: 'Night does not interrupt the work!',
          artist: 'B.Reshetnikov, A.Dobrov',
          year: '1956',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 6, 20 ],
            "sunday": [ 3, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 388,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_plan_completed.jpg',
          title: 'We\'ve completed a (daily) plan...How about you?',
          artist: 'O.Savostyuk',
          year: '1954',
          rule: {
            "monday": [ 3, 4, 15, 19 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 6, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 389,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_new_lands.jpg',
          title: 'The whole family to the new lands',
          artist: 'V. Govorkov',
          year: '1957',
          rule: {
            "monday": [ 25, 5, 6, 20 ],
            "tuesday": [ 3, 4, 15, 19 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 390,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_happy_customers.jpg',
          title: 'Your best results - happy customers!',
          artist: 'V.Ivanov,O. Burova',
          year: '1955',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 6, 20 ],
            "wednesday": [ 3, 4, 15, 19 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 391,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_built_to_last.jpg',
          title: 'To Build to Last, To Deliver Ahead of Schedule!',
          artist: 'V.Govorkov',
          year: '1955',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 6, 20 ],
            "thursday": [ 3, 4, 15, 19 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 392,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_1527364509honor_family.jpg',
          title: 'Value the honor of (your) family!',
          artist: 'V.Govorkov',
          year: '1949',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 7, 21 ],
            "friday": [ 4, 5, 16, 20 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 393,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_look-out.jpg',
          title: 'Soviet soldier! Be on the alert!',
          artist: 'K. Ivanov',
          year: '1954',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 7, 21 ],
            "saturday": [ 4, 5, 16, 20 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 394,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_police_alert.jpg',
          title: 'Militsia officer! Look-out!',
          artist: 'M. Soloviyov',
          year: '1953',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 7, 21 ],
            "sunday": [ 4, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 395,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_blabber.jpg',
          title: 'Gossip (blabber) - is a godsend for the enemy!',
          artist: 'V.Koretsky',
          year: '1954',
          rule: {
            "monday": [ 4, 5, 16, 20 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 7, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 396,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_blabber_phone.jpg',
          title: 'Do not blab at the phone! Blabber is a find of a spy.',
          artist: 'P. Golub',
          year: '1951',
          rule: {
            "monday": [ 26, 6, 7, 21 ],
            "tuesday": [ 4, 5, 16, 20 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 397,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_secrets.jpg',
          title: 'Strictly keep the state and military secrets!',
          artist: 'A. Intezarov and N. Sokolov',
          year: '1952',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 7, 21 ],
            "wednesday": [ 4, 5, 16, 20 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 398,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_military_secret.jpg',
          title: 'In the letter home, watch out, accidently do not blab out a military secret!',
          artist: 'K.Ivanov',
          year: '1954',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 7, 21 ],
            "thursday": [ 4, 5, 16, 20 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 399,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_state_secret.jpg',
          title: 'Do not blab! Strictly keep the military and state secrets! ',
          artist: 'U. Chudov',
          year: '1958',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 8, 22 ],
            "friday": [ 5, 6, 17, 21 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 400,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_blabbing_enemy.jpg',
          title: 'To blab - is to help an enemy!',
          artist: 'V. Koretskiy',
          year: '1954',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 8, 22 ],
            "saturday": [ 5, 6, 17, 21 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 401,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_our_weapon.jpg',
          title: 'Vigilance - is our weapon!',
          artist: 'V. Ivanov',
          year: '1953',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 8, 22 ],
            "sunday": [ 5, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 402,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_class_enemy.jpg',
          title: 'Be watchful!',
          artist: 'K.Ivanov',
          year: '1953',
          rule: {
            "monday": [ 5, 6, 17, 21 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 8, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 403,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_on_duty.jpg',
          title: 'Be sharp-sighted on duty!',
          artist: 'P. Golub',
          year: '1953',
          rule: {
            "monday": [ 27, 7, 8, 22 ],
            "tuesday": [ 5, 6, 17, 21 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 404,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00093.jpg',
          title: 'Happy New Year of Peace and Friendship!',
          artist: '?',
          year: '1956',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 8, 22 ],
            "wednesday": [ 5, 6, 17, 21 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 405,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00091.jpg',
          title: 'To the new lands come with us!',
          artist: 'V.Seleznev',
          year: '1954',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 8, 22 ],
            "thursday": [ 5, 6, 17, 21 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 406,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00090.jpg',
          title: 'They only have plenty for the rich...',
          artist: 'V. Govorkov',
          year: '1957',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 18, 23 ],
            "friday": [ 6, 7, 18, 22 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 407,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00089.jpg',
          title: 'Freedom of the Arab nation can not be strangled.',
          artist: 'V. Koretsky',
          year: '1958',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 18, 23 ],
            "saturday": [ 6, 7, 18, 22 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 408,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00088.jpg',
          title: 'To stop an aggressor!',
          artist: 'N.Tereshenko',
          year: '1958',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 18, 23 ],
            "sunday": [ 6, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 409,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00086.jpg',
          title: 'The 6th World Festival of Youth and Students',
          artist: '?',
          year: '1956',
          rule: {
            "monday": [ 6, 7, 18, 22 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 410,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00085.jpg',
          title: 'Let the unbreakable friendship and cooperation of Soviet and Chinese nations live and become stronger!',
          artist: '?',
          year: '1951',
          rule: {
            "monday": [ 28, 8, 18, 23 ],
            "tuesday": [ 6, 7, 18, 22 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 411,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00084.jpg',
          title: 'Korean nation can not be broken down!',
          artist: 'V. Koretsky',
          year: '1953',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 18, 23 ],
            "wednesday": [ 6, 7, 18, 22 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 412,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00083.jpg',
          title: 'Peace - to the world!',
          artist: 'K.Ivanov',
          year: '1951 - 1952',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 18, 23 ],
            "thursday": [ 6, 7, 18, 22 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 413,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00082.jpg',
          title: 'We honor old people!',
          artist: 'M. Marise-Krasnokutskaya',
          year: '1956',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 19, 24 ],
            "friday": [ 7, 8, 19, 23 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 414,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00080.jpg',
          title: 'The dreams of the nation have come true!',
          artist: 'A.Lavrov',
          year: '1950',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 19, 24 ],
            "saturday": [ 7, 8, 19, 23 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 415,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00078.jpg',
          title: 'Who gets National profit?..',
          artist: 'V. Govorkov',
          year: '1950',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 19, 24 ],
            "sunday": [ 7, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 416,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00076.jpg',
          title: 'We demand peace!',
          artist: 'V. Koretsky',
          year: '1950',
          rule: {
            "monday": [ 7, 8, 19, 23 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 417,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00071.jpg',
          title: 'No such women existed and could not exist in older times. I.V. Stalin',
          artist: '?',
          year: '1950',
          rule: {
            "monday": [ 29, 9, 19, 24 ],
            "tuesday": [ 7, 8, 19, 23 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 418,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_stalin_happiness.jpg',
          title: 'For the people\'s happiness!',
          artist: 'V.Ivanov',
          year: '?',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 19, 24 ],
            "wednesday": [ 7, 8, 19, 23 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 419,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0016.jpg',
          title: 'March of aviators song',
          artist: 'Karachentsov Petr Yakovlevich',
          year: '1952',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 19, 24 ],
            "thursday": [ 7, 8, 19, 23 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 420,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0017.jpg',
          title: 'Glory to the Soviet nation...',
          artist: 'M. Soloviyov',
          year: '1954',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 20, 25 ],
            "friday": [ 8, 9, 20, 24 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 421,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovaviapost_0014.jpg',
          title: 'To fly above all, further than all, faster than all.',
          artist: 'D. Pyatkin',
          year: '1954',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 20, 25 ],
            "saturday": [ 8, 9, 20, 24 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 422,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_1404485646sovaviapost_0001.jpg',
          title: 'We will become pilots too!',
          artist: 'Chudov Uriy Nikolaevich',
          year: '1951',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 20, 25 ],
            "sunday": [ 8, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 423,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_no-to-fascism.jpg',
          title: 'No to fascism!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 8, 9, 20, 24 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 424,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_collective_farmer.jpg',
          title: 'Develop virgin lands!',
          artist: '?',
          year: '1954',
          rule: {
            "monday": [ 30, 10, 20, 25 ],
            "tuesday": [ 8, 9, 20, 24 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 425,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/6c6ea3fa-5e27-4d8f-9d49-5c159f92bbee-1118x2040.jpeg',
          title: 'Will Give Everything for the Front!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 20, 25 ],
            "wednesday": [ 8, 9, 20, 24 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 426,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_hi_members.jpg',
          title: 'To the participants of the festival - Hi!',
          artist: '?',
          year: '1957',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 20, 25 ],
            "thursday": [ 8, 9, 20, 24 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 427,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_people_party.jpg',
          title: 'People and party - (are) united!',
          artist: '?',
          year: '1957',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 21, 26 ],
            "friday": [ 9, 10, 21, 25 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 428,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_glory_to_soviet.jpg',
          title: 'Glory to Soviet Country! 1917 1953',
          artist: '?',
          year: '1953',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 21, 26 ],
            "saturday": [ 9, 10, 21, 25 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 429,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_stalin_map.jpg',
          title: 'Under the leadership of the great Stalin - forward to Communism!',
          artist: '?',
          year: '1951',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 21, 26 ],
            "sunday": [ 9, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 430,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_master.jpg',
          title: '(You) will be a master!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 9, 10, 21, 25 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 431,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_bread_labor.jpg',
          title: 'If to work good, bread will grow',
          artist: '?',
          year: '1947',
          rule: {
            "monday": [ 31, 11, 21, 26 ],
            "tuesday": [ 9, 10, 21, 25 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 432,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_stalin.jpg',
          title: 'Glory to Stalin - to the great architect of communism! ',
          artist: 'B.Belopolsky',
          year: '1951',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 21, 26 ],
            "wednesday": [ 9, 10, 21, 25 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 433,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_St_072.jpg',
          title: 'You too, will be a hero!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 21, 26 ],
            "thursday": [ 9, 10, 21, 25 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 434,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthood_48_den.jpg',
          title: 'Two kids better than one!',
          artist: 'V.Stepanov',
          year: '1968',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 22, 27 ],
            "friday": [ 10, 11, 22, 26 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 435,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00040.jpg',
          title: '1 Ruble. Here is our profit!',
          artist: '?',
          year: '1965',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 22, 27 ],
            "saturday": [ 10, 11, 22, 26 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 436,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_worksovpost_00036_den.jpg',
          title: 'Value every minute at work',
          artist: 'Artist E. Abezgus',
          year: '1964',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 22, 27 ],
            "sunday": [ 10, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 437,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_will_work.jpg',
          title: '(we) Will do the job!',
          artist: 'A.Zelenskyi',
          year: '?',
          rule: {
            "monday": [ 10, 11, 22, 26 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 438,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_celina.jpg',
          title: '(lets) Develop (the) blue virgin lands!',
          artist: 'V. Gorlenko',
          year: '1964',
          rule: {
            "monday": [ 1, 12, 22, 27 ],
            "tuesday": [ 10, 11, 22, 26 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 439,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00027.jpg',
          title: '"Beware of the Car" movie (film) poster, directed by Eldar Ryazanov',
          artist: 'A. Evseev, P. Zolotarevskii',
          year: '1966',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 22, 27 ],
            "wednesday": [ 10, 11, 22, 26 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 440,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00022.jpg',
          title: '"9 Days of One Year" movie (film) poster, directed by M.Romm',
          artist: 'V.Ostrovsky',
          year: '1962',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 22, 27 ],
            "thursday": [ 10, 11, 22, 26 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 441,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00020.jpg',
          title: '"Come Here, Mukhtar!" movie (film) poster, directed by S. Tumanov',
          artist: 'V. Ostrovsky',
          year: '1964',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 23, 28 ],
            "friday": [ 11, 12, 23, 27 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 442,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00019.jpg',
          title: '"Andrei Rublev" movie (film) poster, directed by A. Tarkovsky',
          artist: 'M.Lukyanov',
          year: '1969',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 23, 28 ],
            "saturday": [ 11, 12, 23, 27 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 443,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_WellLiveTillMonday.jpg',
          title: '"We\'ll Live Till Monday" movie (film) poster, directed by S. Rostovskiy',
          artist: 'N. Homov',
          year: '1968',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 23, 28 ],
            "sunday": [ 11, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 444,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00017.jpg',
          title: '"Welcome, or No Trespassing" movie (film) poster, directed by E. Klimov',
          artist: 'V.Soloviev',
          year: '1964',
          rule: {
            "monday": [ 11, 12, 23, 27 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 445,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_1530060514ballade_soldier.jpg',
          title: '"Ballad of a Soldier" movie (film) poster, directed by G. Chukhray',
          artist: 'S.Datskevich',
          year: '1961',
          rule: {
            "monday": [ 2, 13, 23, 28 ],
            "tuesday": [ 11, 12, 23, 27 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 446,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cinsovpost_00015.jpg',
          title: '"Hamlet" movie (film) poster, directed by G. Kozintsev',
          artist: 'B.Zelensky',
          year: '1964',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 23, 28 ],
            "wednesday": [ 11, 12, 23, 27 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 447,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_movie_girls.jpg',
          title: 'Movie (film) Poster "Girls"',
          artist: 'V.Kononov',
          year: '1962',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 23, 28 ],
            "thursday": [ 11, 12, 23, 27 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 448,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_volga.jpg',
          title: 'Volga-Baltic Waterway named after V.I. Lenina',
          artist: 'S.Sakharov',
          year: '1965',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 24, 29 ],
            "friday": [ 12, 13, 24, 28 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 449,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cultsovpost_00015.jpg',
          title: 'Theatrical Poster: Talents and admirers',
          artist: 'A. Ostrovsky',
          year: '1968',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 24, 29 ],
            "saturday": [ 12, 13, 24, 28 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 450,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cultsovpost_00011.jpg',
          title: 'Circus. Clown.',
          artist: 'Yengibarov',
          year: '1969',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 24, 29 ],
            "sunday": [ 12, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 451,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_let_be_me.jpg',
          title: 'May There Always Be Sunshine.',
          artist: 'N. Charuhin',
          year: '1961',
          rule: {
            "monday": [ 12, 13, 24, 28 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 452,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_not_a_drop.jpg',
          title: 'Not a drop!',
          artist: 'B. Reshetnikov',
          year: '1961',
          rule: {
            "monday": [ 3, 14, 24, 29 ],
            "tuesday": [ 12, 13, 24, 28 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 453,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00041.jpg',
          title: 'Do not lie ever!',
          artist: 'Galina Shubina',
          year: '1965',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 24, 29 ],
            "wednesday": [ 12, 13, 24, 28 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 454,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00040.jpg',
          title: 'Helping our mother',
          artist: 'N. Vigilyanskya,F.Kachelaev',
          year: '1960',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 24, 29 ],
            "thursday": [ 12, 13, 24, 28 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 455,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sun_air_water.jpg',
          title: 'Sun, air and water, multiply strength for labor!',
          artist: 'B.Kalensky',
          year: '1962',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 25, 30 ],
            "friday": [ 13, 14, 25, 29 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 456,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sportsovpost_00022.jpg',
          title: 'USSR is a Mighty Sports Nation!',
          artist: 'B.Reshetnikov',
          year: '1962',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 25, 30 ],
            "saturday": [ 13, 14, 25, 29 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 457,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_tradesovpost_00033.jpg',
          title: 'Processed cheese for every taste.',
          artist: 'L.Filippova',
          year: '1966',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 25, 30 ],
            "sunday": [ 13, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 458,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_vodka_german.jpg',
          title: 'Stolichnaya vodka',
          artist: 'S.Sakharov',
          year: '1965',
          rule: {
            "monday": [ 13, 14, 25, 29 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 459,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_good_life.jpg',
          title: 'And life is good, and to live is good!',
          artist: 'V. Ivanov',
          year: '1961',
          rule: {
            "monday": [ 4, 15, 25, 30 ],
            "tuesday": [ 13, 14, 25, 29 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 460,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_komsomol_to_fields.jpg',
          title: 'To the fields, to the construction sites!',
          artist: 'I.Bolshakova, V.Smirnov',
          year: '1963',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 25, 30 ],
            "wednesday": [ 13, 14, 25, 29 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 461,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_10566_24_36_den.jpg',
          title: 'How (good he) worked, that (good he) earned.',
          artist: 'V.Govorkov',
          year: '1964',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 25, 30 ],
            "thursday": [ 13, 14, 25, 29 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 462,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00112.jpg',
          title: '(there is) No forgiveness to aggressors!',
          artist: 'V. Koretsky',
          year: '1966',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 26, 31 ],
            "friday": [ 14, 15, 26, 30 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 463,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00105.jpg',
          title: '(let\'s) Save Historic-Cultural Monuments!',
          artist: 'E.Tsvik',
          year: '1967',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 26, 31 ],
            "saturday": [ 14, 15, 26, 30 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 464,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00104.jpg',
          title: 'No one is forgotten. And nothing is forgotten.',
          artist: 'U. Tsarev',
          year: '1967',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 26, 31 ],
            "sunday": [ 14, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 465,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00103.jpg',
          title: 'Happy March 8th',
          artist: 'Ruben Suryaninov',
          year: '1963',
          rule: {
            "monday": [ 14, 15, 26, 30 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 26, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 466,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00102.jpg',
          title: 'Set the end to the agression in Vietnam!',
          artist: 'V. Koretsky',
          year: '1965',
          rule: {
            "monday": [ 5, 16, 26, 31 ],
            "tuesday": [ 14, 15, 26, 30 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 467,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00101.jpg',
          title: 'No (need for a) war!',
          artist: '?',
          year: '1962',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 26, 31 ],
            "wednesday": [ 14, 15, 26, 30 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 468,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00100.jpg',
          title: 'Long live eternal, unbreakable friendship and cooperation...',
          artist: 'S.Gurary',
          year: '1963',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 26, 31 ],
            "thursday": [ 14, 15, 26, 30 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 469,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00099_den.jpg',
          title: 'Women\'s International Congress 1963',
          artist: 'Ruben Suryaninov',
          year: '1963',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 27, 1 ],
            "friday": [ 15, 16, 27, 31 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 470,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_1521855725gagarin.jpg',
          title: 'Glory to the first cosmonaut U.A.Gagarin!',
          artist: '?',
          year: '1961',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 27, 1 ],
            "saturday": [ 15, 16, 27, 31 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 471,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00097.jpg',
          title: 'I will never forget a friend...',
          artist: 'V.Sachkov',
          year: '1964',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 27, 1 ],
            "sunday": [ 15, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 472,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00095.jpg',
          title: 'Human to human...',
          artist: '?',
          year: '1962',
          rule: {
            "monday": [ 15, 16, 27, 31 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 27, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 473,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00094.jpg',
          title: 'To the work, comrades!',
          artist: 'B.Belopolsky',
          year: '1962',
          rule: {
            "monday": [ 6, 17, 27, 1 ],
            "tuesday": [ 15, 16, 27, 31 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 474,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_brave.jpg',
          title: 'Heroic acts are waiting for the brave!',
          artist: 'V.Ivanov',
          year: '1964',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 27, 1 ],
            "wednesday": [ 15, 16, 27, 31 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 475,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_nations_of_world.jpg',
          title: 'Nations of all the world!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 27, 1 ],
            "thursday": [ 15, 16, 27, 31 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 476,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_flag_proletariat.jpg',
          title: '(Get) Higher the flag of the proletarian internationalism!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 1, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 28, 2 ],
            "friday": [ 16, 17, 28, 1 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 477,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cccp_poster.jpg',
          title: 'CCCP Long live the all-victorious flag of Leninism!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 1, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 28, 2 ],
            "saturday": [ 16, 17, 28, 1 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 478,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Hr_006.jpg',
          title: 'Nikita Sergeyevich Kruschev',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 1, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 28, 2 ],
            "sunday": [ 16, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 479,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_field_wait.jpg',
          title: 'Field works can not wait!',
          artist: 'V.Govorkov',
          year: '1954',
          rule: {
            "monday": [ 16, 17, 28, 1 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 1, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 28, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 480,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Hr_009.jpg',
          title: 'Long live to PEACE!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 7, 18, 28, 2 ],
            "tuesday": [ 16, 17, 28, 1 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 1, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 481,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Hr_007.jpg',
          title: 'Vote for the further prosperity of our towns and villages!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 28, 2 ],
            "wednesday": [ 16, 17, 28, 1 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 482,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_10026_den.jpg',
          title: 'Power to Soviets. Lenin.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 9, 20, 1, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 28, 2 ],
            "thursday": [ 16, 17, 28, 1 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 483,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_bread_motherland.jpg',
          title: 'Bread - to the Motherland!',
          artist: 'V. Livanova and T. Livanova',
          year: '1962',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 2, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 29, 3 ],
            "friday": [ 17, 18, 29, 2 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 484,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Hr_015.jpg',
          title: 'Will raise everyone!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 2, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 29, 3 ],
            "saturday": [ 17, 18, 29, 2 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 485,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Hr_014.jpg',
          title: 'Corn - a source of plenty',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 2, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 29, 3 ],
            "sunday": [ 17, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 486,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/BRM2718-Fulfill-Partys-Commission-1957_lowres-3000x2107.jpg',
          title: 'Fulfill Party\'s Commission',
          artist: '?',
          year: '1957',
          rule: {
            "monday": [ 17, 18, 29, 2 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 2, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 29, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 487,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_oblomov.jpg',
          title: 'A Few Days from the Life of I. I. Oblomov.',
          artist: 'I. Lemeshev',
          year: '1979',
          rule: {
            "monday": [ 8, 19, 29, 3 ],
            "tuesday": [ 17, 18, 29, 2 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 2, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 488,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_desert.jpg',
          title: '\'White Sun of the Desert\' movie (film) poster.',
          artist: 'M.Lukyanov',
          year: '1970',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 29, 3 ],
            "wednesday": [ 17, 18, 29, 2 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 489,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_cultsovpost_00018.jpg',
          title: 'Moskontsert...',
          artist: '?',
          year: '1975',
          rule: {
            "monday": [ 10, 21, 2, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 29, 3 ],
            "thursday": [ 17, 18, 29, 2 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 490,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_1530871396knowledge_to_everyone.jpg',
          title: 'Knowledge to everyone!',
          artist: 'V.Karakasheva, L. Levshunova',
          year: '1972',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 3, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 30, 4 ],
            "friday": [ 18, 19, 30, 3 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 491,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00045.jpg',
          title: 'We need peace',
          artist: 'M. Gromyko',
          year: '1973',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 3, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 30, 4 ],
            "saturday": [ 18, 19, 30, 3 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 492,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_rest.jpg',
          title: 'Know how to rest',
          artist: 'M. Lukyanov, V. Ostrovsky',
          year: '1973',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 3, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 30, 4 ],
            "sunday": [ 18, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 493,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_spartakiada.jpg',
          title: 'Spartakiada of the Nations of the USSR',
          artist: 'M. Manuilov',
          year: '1975',
          rule: {
            "monday": [ 18, 19, 30, 3 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 3, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 30, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 494,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_1525907249work.jpg',
          title: 'Care to People - Work with us (for our company)',
          artist: 'E.Vertogradov',
          year: '1970',
          rule: {
            "monday": [ 9, 20, 30, 4 ],
            "tuesday": [ 18, 19, 30, 3 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 3, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 495,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_knowledge_to_everyone.jpg',
          title: 'Knowledge - to everyone!',
          artist: 'V.Karakashev, L.Levshunova',
          year: '1972',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 30, 4 ],
            "wednesday": [ 18, 19, 30, 3 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 496,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_parenthoodsovpost_00045.jpg',
          title: 'We need peace',
          artist: 'M. Gromyko',
          year: '1973',
          rule: {
            "monday": [ 11, 22, 3, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 30, 4 ],
            "thursday": [ 18, 19, 30, 3 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 497,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_rest.jpg',
          title: 'Know how to rest',
          artist: 'M. Lukyanov, V. Ostrovsky',
          year: '1973',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 4, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 31, 5 ],
            "friday": [ 19, 20, 31, 4 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 498,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_spartakiada.jpg',
          title: 'Spartakiada of the Nations of the USSR',
          artist: 'M. Manuilov',
          year: '1975',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 4, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 31, 5 ],
            "saturday": [ 19, 20, 31, 4 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 499,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_1525907249work.jpg',
          title: 'Care to People - Work with us (for our company)',
          artist: 'E.Vertogradov',
          year: '1970',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 4, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 31, 5 ],
            "sunday": [ 19, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 500,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_knowledge_to_everyone.jpg',
          title: 'Knowledge - to everyone!',
          artist: 'V.Karakashev, L.Levshunova',
          year: '1972',
          rule: {
            "monday": [ 19, 20, 31, 4 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 4, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 31, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 501,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_paix.jpg',
          title: 'Mir Peace Paix',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 10, 21, 31, 5 ],
            "tuesday": [ 19, 20, 31, 4 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 4, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 502,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_1268759838nato_neutron.jpg',
          title: 'Neutron threat Nato',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 31, 5 ],
            "wednesday": [ 19, 20, 31, 4 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 503,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_nato_bw.jpg',
          title: 'NATO bombs, cross, barbed wire',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 12, 23, 4, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 31, 5 ],
            "thursday": [ 19, 20, 31, 4 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 504,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_nato_airplanes.jpg',
          title: 'NATO Airplanes',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 5, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 1, 6 ],
            "friday": [ 20, 21, 1, 5 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 505,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_plugged.jpg',
          title: 'This way it is better!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 5, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 1, 6 ],
            "saturday": [ 20, 21, 1, 5 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 506,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_fight_for_peace.jpg',
          title: 'We have to fight for peace!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 5, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 1, 6 ],
            "sunday": [ 20, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 507,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_evolution.jpg',
          title: 'Evolution?',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 21, 1, 5 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 5, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 508,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_earth_knife.jpg',
          title: 'People, be vigilant!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 11, 22, 1, 6 ],
            "tuesday": [ 20, 21, 1, 5 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 5, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 509,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_earth_belt.jpg',
          title: 'Field of the life interests of the USA',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 1, 6 ],
            "wednesday": [ 20, 21, 1, 5 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 510,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_war_peace._website_new.jpg',
          title: 'Peace will win over war!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 13, 24, 5, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 1, 6 ],
            "thursday": [ 20, 21, 1, 5 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 511,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_eagle_pigeon.jpg',
          title: 'I am a dove',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 6, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 2, 7 ],
            "friday": [ 21, 22, 2, 6 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 512,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_donot_admit.jpg',
          title: 'Don\'t admit!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 6, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 2, 7 ],
            "saturday": [ 21, 22, 2, 6 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 513,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_doll.jpg',
          title: 'No neutron bomb',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 6, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 2, 7 ],
            "sunday": [ 21, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 514,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_dialogue.jpg',
          title: 'Dialogue, not the confrontation',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 22, 2, 6 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 6, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 515,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_criminal.jpg',
          title: 'The criminal is known!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 12, 23, 2, 7 ],
            "tuesday": [ 21, 22, 2, 6 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 6, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 516,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_corvalan_l.jpg',
          title: 'Free Luis Corvalan!',
          artist: '?',
          year: '1973',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 2, 7 ],
            "wednesday": [ 21, 22, 2, 6 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 517,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_construction.jpg',
          title: 'We want to build, not to destroy!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 14, 25, 6, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 2, 7 ],
            "thursday": [ 21, 22, 2, 6 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 518,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_circuit.jpg',
          title: 'One more turn...',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 7, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 3, 8 ],
            "friday": [ 22, 23, 3, 7 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 519,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_chili.jpg',
          title: 'Freedom to the people of Chile!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 7, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 3, 8 ],
            "saturday": [ 22, 23, 3, 7 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 520,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_child.jpg',
          title: 'Peace',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 7, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 3, 8 ],
            "sunday": [ 22, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 521,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/large_chess.jpg',
          title: 'Checkmate!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 23, 3, 7 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 7, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 522,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_apartheid.jpg',
          title: 'This is Apartheid',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 13, 24, 3, 8 ],
            "tuesday": [ 22, 23, 3, 7 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 7, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 523,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_20000000.jpg',
          title: '20 000 000, 1941-1945',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 3, 8 ],
            "wednesday": [ 22, 23, 3, 7 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 524,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_long_kesh.jpg',
          title: 'Victory Long Kesh',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 15, 26, 7, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 3, 8 ],
            "thursday": [ 22, 23, 3, 7 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 525,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_protect_peace.jpg',
          title: '(We) Defended the world, world we will protect!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 8, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 4, 9 ],
            "friday": [ 23, 24, 4, 8 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 526,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_chances.jpg',
          title: 'Many chances has this barrel, to blow up the juggler to pieces.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 8, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 4, 9 ],
            "saturday": [ 23, 24, 4, 8 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 527,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_nato.jpg',
          title: 'NATO',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 8, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 4, 9 ],
            "sunday": [ 23, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 528,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_for_peace.jpg',
          title: 'I am for Peace and Disarmament',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 23, 24, 4, 8 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 8, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 529,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_soviet_threat.jpg',
          title: 'Soviet threat!!!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 14, 25, 4, 9 ],
            "tuesday": [ 23, 24, 4, 8 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 8, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 530,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_no_to_bomb.jpg',
          title: 'No to neutron bomb!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 4, 9 ],
            "wednesday": [ 23, 24, 4, 8 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 531,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_women_planet.jpg',
          title: 'Women of the planet for peace and friendship!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 8, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 4, 9 ],
            "thursday": [ 23, 24, 4, 8 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 532,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_1549279897vietnam_war.jpg',
          title: 'We are in solidarity with you, Vietnam!',
          artist: 'R. Suryaninov',
          year: '1979',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 9, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 5, 10 ],
            "friday": [ 24, 25, 5, 9 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 533,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Br_310.jpg',
          title: 'To the memory of Pablo Neruda',
          artist: '?',
          year: '1973',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 9, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 5, 10 ],
            "saturday": [ 24, 25, 5, 9 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 534,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sovpolpost_00096.jpg',
          title: 'Happy holidays, dear girls!',
          artist: '?',
          year: '1966',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 9, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 5, 10 ],
            "sunday": [ 24, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 535,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Br_344.jpg',
          title: 'The plans of the party - my plans!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 24, 25, 5, 9 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 9, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 536,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Br_304.jpg',
          title: 'Brave labor of the fishermen is in country\'s respect. Have a nice catch, have a nice journey!',
          artist: '?',
          year: '/',
          rule: {
            "monday": [ 15, 26, 5, 10 ],
            "tuesday": [ 24, 25, 5, 9 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 9, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 537,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Br_375.jpg',
          title: 'Every child is our child! Do not let children smoke!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 5, 10 ],
            "wednesday": [ 24, 25, 5, 9 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 538,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_puzzle.jpg',
          title: 'Where a liqueur (shot) glass is leading to...',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 9, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 5, 10 ],
            "thursday": [ 24, 25, 5, 9 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 539,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Br_343.jpg',
          title: 'Constitution of the Soviet Union',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 10, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 6, 11 ],
            "friday": [ 25, 26, 6, 10 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 540,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Br_337.jpg',
          title: 'Save work minute!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 10, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 6, 11 ],
            "saturday": [ 25, 26, 6, 10 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 541,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Br_303.jpg',
          title: 'Back together with you, dear land, served - and got back home, to the native fields!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 10, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 6, 11 ],
            "sunday": [ 25, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 542,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Br_370.jpg',
          title: '1st of June. International day of the protection of the children.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 25, 26, 6, 10 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 10, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 543,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sportive_family.jpg',
          title: 'We are a sportive family - father, mother, brother and I',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 6, 11 ],
            "tuesday": [ 25, 26, 6, 10 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 10, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 544,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_sheep_breeder.jpg',
          title: '(I) Will become a Sheep Breeder!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 6, 11 ],
            "wednesday": [ 25, 26, 6, 10 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 545,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/october/popup_Br_325.jpg',
          title: 'Here we will live, work and study',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 10, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 6, 11 ],
            "thursday": [ 25, 26, 6, 10 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_arts_id_seq', (SELECT MAX(id) FROM october_arts));");
    });
};
