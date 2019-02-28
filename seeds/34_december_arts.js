'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('december_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('december_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/44-04,Suspense.jpg',
          title: 'Suspense Comics',
          artist: 'Nina Albright',
          year: '1944',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 30, 12, 20, 26 ],
            "saturday": [ 29, 11, 19, 25 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-00,The NatlGrdsman.jpg',
          title: 'National Guardsman',
          artist: 'Newton H. Alfred',
          year: '1934',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 30, 12, 20, 26 ],
            "sunday": [ 29, 11, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/17-00,Maupassant.jpg',
          title: 'Book Illustration',
          artist: 'James E. Allen',
          year: '1917',
          rule: {
            "monday": [ 29, 11, 19, 25 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 30, 12, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/06-06,MotorBoys.jpg',
          title: 'The Motor Boys',
          artist: 'W. M. Allison',
          year: '1906',
          rule: {
            "monday": [ 30, 12, 20, 26 ],
            "tuesday": [ 29, 11, 19, 25 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1941-04,SpicyMystery.jpg',
          title: 'Spicy Mystery',
          artist: 'Allen Anderson',
          year: '1941',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 30, 12, 20, 26 ],
            "wednesday": [ 29, 11, 19, 25 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/21-07,TheAmer1.jpg',
          title: 'The American',
          artist: 'Frederic A. Anderson',
          year: '1921',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 30, 12, 20, 26 ],
            "thursday": [ 29, 11, 19, 25 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/45-01,PlanetCmx.jpg',
          title: 'Planet Comics',
          artist: 'Murphy Anderson',
          year: '1945',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 30, 12, 20, 26 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-00,Interior1.jpg',
          title: 'Clues illus.',
          artist: 'Lyman Anderson',
          year: '1930',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 30, 12, 20, 26 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/25-01-24,Newspaper.jpg',
          title: 'Newspaper',
          artist: 'Joe Archibald',
          year: '1925',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 30, 12, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/50-00,FantPubCo-17.jpg',
          title: 'book cover',
          artist: 'Jon Arfstrom',
          year: '1950',
          rule: {
            "monday": [ 30, 12, 20, 26 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/27-06,Yearbook.jpg',
          title: 'High School Yearbook',
          artist: 'Ed Ashe, Jr.',
          year: '1927',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 30, 12, 20, 26 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-12,NewComics.jpg',
          title: 'New Comics',
          artist: 'Rafael Astarita',
          year: '1935',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 30, 12, 20, 26 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/13-02,StNicholas.jpg',
          title: 'St. Nicholas',
          artist: 'George Avison',
          year: '1913',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 31, 13, 21, 27 ],
            "thursday": [ 30, 12, 20, 26 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/39-00,CliffCornwall1.jpg',
          title: 'Cliff Cornwall',
          artist: 'John E. Ayman',
          year: '1941',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-01-28,LoveS-2.jpg',
          title: 'Love Story',
          artist: 'Constance Benson Bailey',
          year: '1928',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/17-05,DeWittClinton.jpg',
          title: 'DeWitt Clinton',
          artist: 'Adolphe Barreaux',
          year: '1917',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/50-04,Argosy.jpg',
          title: 'Argosy',
          artist: 'Harry Barton',
          year: '1950',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-05,DocSavage.jpg',
          title: 'Doc Savage Comics',
          artist: 'Ken Battefield',
          year: '1941',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1931-11,Gnglnd.jpg',
          title: 'Gangland Stories',
          artist: 'Walter Baumhofer',
          year: '1931',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 31, 13, 21, 27 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/29-10,JuniorHome.JPG',
          title: 'Junior Home',
          artist: 'Robert Beebe',
          year: '1929',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-08-16,War.jpg',
          title: 'War Stories',
          artist: 'Rudolph Belarski',
          year: '1928',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/52-00,Illus2.jpg',
          title: 'illustration',
          artist: 'Jim Bentley',
          year: '1952',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-00,Dutton.jpg',
          title: 'Dutton Books',
          artist: 'David Berger',
          year: '1934',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-10,Bedtime.jpg',
          title: 'Bedtime Stories',
          artist: 'Earle Bergey ',
          year: '1935',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-08,ThrillWndr.jpg',
          title: 'Thrilling Wonder',
          artist: 'Jack Binder',
          year: '1936',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-05,AllStarFcton.jpg',
          title: 'All Star Fiction',
          artist: 'Lorence Bjorklund',
          year: '1935',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1929-08,MM1.jpg',
          title: 'Modern Mechanics',
          artist: '(Blaine) Normand Saunders',
          year: '1929',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-00,Kiss.jpg',
          title: 'Kiss The Crocodile',
          artist: 'Frederick Blakeslee',
          year: '1928',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-06,Yearbook.jpg',
          title: 'School Yearbook',
          artist: 'Chester Bloom',
          year: '1936',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-01,WRom-1.jpg',
          title: 'Western Romances',
          artist: 'Jon L. Blummer',
          year: '1934',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1941-05,Cosmic.jpg',
          title: 'Cosmic',
          artist: 'Hannes Bok',
          year: '1941',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/23-04-21,Judge.jpg',
          title: 'Judge',
          artist: 'Enoch Bolles',
          year: '1923',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/52-00,MysteryRanch.jpg',
          title: 'Pocket Book #895',
          artist: 'Stanley Borack',
          year: '1952',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/02-00,TheFrenchReople.jpg',
          title: 'The French People',
          artist: 'Arthur R. Bowker',
          year: '1902',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/42-08,FantAdv1.jpg',
          title: 'Fantastic Adv.',
          artist: 'William J. Brady',
          year: '1942',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/45-09,CaptFlight9.jpg',
          title: 'Capt. Flight',
          artist: 'Ann Brewster',
          year: '1945',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/29-12,AmazingS.JPG',
          title: 'Amazing Stories',
          artist: 'Austin Briggs',
          year: '1929',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/06-00,SchroeberWindow.jpg',
          title: 'Stained Glass',
          artist: 'W. C. Brigham',
          year: '1906',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/22-03-01,Mystery.jpg',
          title: 'Mystery',
          artist: 'W. C. Brigham, Jr.',
          year: '1922',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/23-10,Munseys.jpg',
          title: 'Munsey\'s Magazine',
          artist: 'Howard V. Brown',
          year: '1923',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7 , 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/18-00,KrushingKaiser.jpg',
          title: 'Krushing Kaiserism',
          artist: 'Ken Browne',
          year: '1918',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7 , 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/32-06,Oriental.jpg',
          title: 'Oriental Stories',
          artist: 'Margaret Brundage',
          year: '1932',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/02-06-29,NYHerald.jpg',
          title: 'N Y Herald',
          artist: 'Leighton Budd',
          year: '1902',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1928-11,WzBng1.jpg',
          title: 'Whiz Bang',
          artist: 'Carl Buettner',
          year: '1928',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-07-1st,RnchRom2.jpg',
          title: 'Ranch Romances',
          artist: 'H. D. Bugbee',
          year: '1935',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/22-00,Ad.jpg',
          title: 'Advertisement',
          artist: 'R. A. Burley',
          year: '1924',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/10-00,JohnMrsch.jpg',
          title: 'John Marsh\'s Millions',
          artist: 'Samuel Cahan',
          year: '1910',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/19-11.BoysLife.jpg',
          title: 'Boy\'s Life',
          artist: 'Robert A. Cameron',
          year: '1919',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/21-09,BreezyS.jpg',
          title: 'Breezy Stories',
          artist: 'Jules Cannert',
          year: '1921',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-12,Prison-p21.jpg',
          title: 'Prison Life',
          artist: 'Ralph Carlson',
          year: '1935',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/25-Win,Follies.jpg',
          title: 'Win Follies',
          artist: 'Worth Carnahan',
          year: '1925',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1893,WitchofSalem.jpg',
          title: 'Witch of Salem',
          artist: 'F. A. Carter',
          year: '1893',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/38-03-15,Shadow1.jpg',
          title: 'Shadow illus.',
          artist: 'Edd Cartier',
          year: '1938',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-06,WTls.jpg',
          title: 'Western Trails',
          artist: 'Richard Case',
          year: '1937',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-05,MystAdv3.jpg',
          title: 'Mystery Adventure',
          artist: 'Jim Chambers',
          year: '1936',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/25-00,ShirtAd.jpg',
          title: 'Advertisement',
          artist: 'Joseph Chenoweth',
          year: '1925',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/29-01,Mohawk.jpg',
          title: 'Mohawk Magazine',
          artist: 'Sam Cherry',
          year: '1929',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-11,ThllMyst.jpg',
          title: 'Thrilling Mystery',
          artist: 'Ernest Chiriacka',
          year: '1941',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-02,TDA.jpg',
          title: 'Ten Detective Aces',
          artist: 'Emery Clarke',
          year: '1934',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/19-04-26,Newspaper.jpg',
          title: 'Newspaper',
          artist: 'Henry Clive',
          year: '1919',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-08,Romance.jpg',
          title: 'Romance',
          artist: 'John Clymer',
          year: '1937',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/44-00,Sword2.jpg',
          title: 'The Sword is Drawn',
          artist: 'Dunc Coburn',
          year: '1944',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/29-03,AirStories.jpg',
          title: 'Air Stories',
          artist: 'C. B. Colby',
          year: '1929',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 8, 3 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/43-00,PhoenixPress.jpg',
          title: 'Phoenix Press',
          artist: 'L. B. Cole',
          year: '1943',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 8, 3 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/17-04-08,Newspaper.jpg',
          title: 'Newspaper',
          artist: 'Charles Coll',
          year: '1917',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 8, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-Fal,FamousW.jpg',
          title: 'Fall Famous Western',
          artist: 'Sam Cooper',
          year: '1941',
          rule: {
            "monday": [ 7, 20, 8, 3 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/24-00,FarmHouse.jpg',
          title: 'Farm House',
          artist: 'Thomas Cooper',
          year: '1924',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 8, 3 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/14-00,Chicago.jpg',
          title: 'Chicago Tribune',
          artist: 'Dean Cornwell',
          year: '1914',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 8, 3 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-01,ThrllW.jpg',
          title: 'Thrilling Western',
          artist: 'Peter Costanza',
          year: '1937',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 8, 3 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/13-11-15,Pop.jpg',
          title: 'The Popular',
          artist: 'John A. Coughlin',
          year: '1913',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 9, 4 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/44-00,Illus2.jpg',
          title: 'illustration',
          artist: 'Lee Brown Coye',
          year: '1944',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 9, 4 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/23-00,Ad.jpg',
          title: 'Advertisement',
          artist: 'Fred Craft',
          year: '1914',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 9, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/52-12,GiantW.jpg',
          title: 'Giant Western',
          artist: 'Mel Crair',
          year: '1952',
          rule: {
            "monday": [ 8, 21, 9, 4 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/40-00,ComeColorsCome.jpg',
          title: 'Come Colors Come',
          artist: 'Reed Crandall',
          year: '1940',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 9, 4 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/10-00,UMYrbk1.jpg',
          title: 'Univ of MO Year Book',
          artist: 'Monte Crews',
          year: '1910',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 9, 4 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/23-02,Classic.jpg',
          title: 'Movie Classic',
          artist: 'Truda Dahl',
          year: '1923',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 9, 4 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/06-12,NtlAccts2.jpg',
          title: 'Business Man\'s',
          artist: 'Walter Darr',
          year: '1906',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 10, 5 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/25-00,ComicStrip.jpg',
          title: 'Percy Plantaganet',
          artist: 'Wynne W. Davies',
          year: '1925',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 10, 5 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/33-12-16,Lbty1.jpg',
          title: 'Liberty',
          artist: 'Ray Dean',
          year: '1933',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 10, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/29-00,Illus.jpg',
          title: 'Magazine Illustration',
          artist: 'Charles DeFeo',
          year: '1929',
          rule: {
            "monday": [ 9, 22, 10, 5 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/27-05,Everybody\'s.jpg',
          title: 'Everybody\'s',
          artist: 'Gerard Delano',
          year: '1927',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 10, 5 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/40-08-24,WS.jpg',
          title: 'Western Story',
          artist: 'Ed DeLavy',
          year: '1940',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 10, 5 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-03,GayBook1.jpg',
          title: 'Gay Book',
          artist: 'R. C. Dell',
          year: '1937',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 10, 5 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/08-11,Pearsons.jpg',
          title: 'Pearson\'s Magazine',
          artist: 'Walter De Maris',
          year: '1908',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 11, 6 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-01,ThllDet.jpg',
          title: 'Thrilling Detective',
          artist: 'Rafael de Soto',
          year: '1934',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 11, 6 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/22-05,Engraver.jpg',
          title: 'Engraver',
          artist: 'Harold C. Detje',
          year: '1922',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 11, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/12-06,YrBk-01.jpg',
          title: 'College Yearbook',
          artist: 'Elliott Dold',
          year: '1912',
          rule: {
            "monday": [ 10, 23, 11, 6 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/25-12,WeirdTales.jpg',
          title: 'Weird Tales',
          artist: 'Joseph Doolin',
          year: '1925',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 11, 6 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/44-00,ClimLab.jpg',
          title: 'Army Climate Lab',
          artist: 'Clarence Doore',
          year: '1944',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 11, 6 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-07,PrsnlAdvS.jpg',
          title: 'Personal Adventure',
          artist: 'Albert Drake',
          year: '1937',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 11, 6 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/47-00,Bantam107.jpg',
          title: 'Bantam #107',
          artist: 'Joseph Dreany',
          year: '1947',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 12, 7 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/25-00,Days49.jpg',
          title: 'Book Jacket',
          artist: 'John Drew',
          year: '1925',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 12, 7 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/38-06,SilkStks.jpg',
          title: 'Silk Stockings',
          artist: 'Peter Driben',
          year: '1938',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 12, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-Win,Aces04.jpg',
          title: 'Winter Aces',
          artist: 'Roderick Duff',
          year: '1937',
          rule: {
            "monday": [ 11, 24, 12, 7 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/07-00,Plowman.jpeg',
          title: 'The Plowman',
          artist: 'Harvey Dunn',
          year: '1907',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 12, 7 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/03-06,Pearsons.jpg',
          title: 'Pearson\'s Magazine',
          artist: 'W. Herbert Dunton',
          year: '1903',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 12, 7 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-08-30,SEP.jpg',
          title: 'Sat Evening Post',
          artist: 'Charles Dye',
          year: '1941',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 12, 7 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/22-04-13,PrintersIncAd.jpg',
          title: 'Advertisement',
          artist: 'Frank A. Eboli',
          year: '1922',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 13, 8 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/27-03-15,AceHi.jpg',
          title: 'Ace-High',
          artist: 'Nicholas Eggenhofer',
          year: '1927',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 13, 8 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-09,PrsnLf.jpg',
          title: 'Prison Life',
          artist: 'Monroe Eisenberg',
          year: '1935',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 13, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-02-20,Cartoon.jpg',
          title: 'High School Comic',
          artist: 'Jill Elgin',
          year: '1937',
          rule: {
            "monday": [ 12, 25, 13, 8 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-12,HitComics.jpg',
          title: 'Hit Comics',
          artist: 'Maxwell Elkan',
          year: '1941',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 13, 8 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/29-01-29,JaneArden.jpg',
          title: 'Jane Arden',
          artist: 'Frank Ellis',
          year: '1929',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 13, 8 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/03-00BretHarte.jpg',
          title: 'Book Illustration',
          artist: 'R. Farrington Elwell',
          year: '1903',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 13, 8 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-03,ScyMvTls-9.jpg',
          title: 'Saucy Movie Tales',
          artist: 'Will Ely',
          year: '1936',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 14, 9 ],
            "saturday": [ 19, 1, 9, 15 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/09-01,Hamptons.jpg',
          title: 'The Hamptons',
          artist: 'C. Emerson',
          year: '1909',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 14, 9 ],
            "sunday": [ 19, 1, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/52-08,ThrlWdr.jpg',
          title: 'Thrilling Wonder',
          artist: 'Ed Emshwiller',
          year: '1952',
          rule: {
            "monday": [ 19, 1, 9, 15 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 14, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/42-11,RngldRom.jpg',
          title: 'Rangeland Romances',
          artist: 'Irene Endris',
          year: '1942',
          rule: {
            "monday": [ 13, 26, 14, 9 ],
            "tuesday": [ 19, 1, 9, 15 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-00,MobyDick.jpg',
          title: 'Moby Dick',
          artist: 'Fred C. Eng',
          year: '?',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 14, 9 ],
            "wednesday": [ 19, 1, 9, 15 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/50-08-12,Colliers.jpg',
          title: 'Collier\'s',
          artist: 'Frederick R. Eng',
          year: '1950',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 14, 9 ],
            "thursday": [ 19, 1, 9, 15 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/24-00,Directory.jpg',
          title: 'Artist Directory',
          artist: 'Renaldo C. Epworth',
          year: '1924',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 14, 9 ],
            "friday": [ 19, 1, 9, 15 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/19-00,WarPoster.jpg',
          title: 'Red Army Poster',
          artist: 'Julius Erbit',
          year: '1919',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 15, 10 ],
            "saturday": [ 20, 2, 10, 16 ],
            "sunday": [ 19, 1, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/38-06,MysteryTls.jpg',
          title: 'Mystery Tales',
          artist: 'James A. Ernst',
          year: '1938',
          rule: {
            "monday": [ 19, 1, 9, 15 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 15, 10 ],
            "sunday": [ 20, 2, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/27-04,Mystery.jpg',
          title: 'Mystery Magazine',
          artist: 'Frederick T. Everett',
          year: '1927',
          rule: {
            "monday": [ 20, 2, 10, 16 ],
            "tuesday": [ 19, 1, 9, 15 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 15, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/32-08,ActNvls.jpg',
          title: 'Action Novels',
          artist: 'John Falter',
          year: '1932',
          rule: {
            "monday": [ 14, 27, 15, 10 ],
            "tuesday": [ 20, 2, 10, 16 ],
            "wednesday": [ 19, 1, 9, 15 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/04-00,Newspaper.jpg',
          title: 'Newspaper Ad',
          artist: 'J. W. Farrah',
          year: '1904',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 15, 10 ],
            "wednesday": [ 20, 2, 10, 16 ],
            "thursday": [ 19, 1, 9, 15 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/13-02-15,Hank.jpg',
          title: 'Hank & Knobbs',
          artist: 'Joseph A. Farren',
          year: '1913',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 15, 10 ],
            "thursday": [ 20, 2, 10, 16 ],
            "friday": [ 19, 1, 9, 15 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/45-00,Susabelle.jpg',
          title: 'Susabelle Comic Strip',
          artist: 'Elton Fax',
          year: '1943',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 15, 10 ],
            "friday": [ 20, 2, 10, 16 ],
            "saturday": [ 19, 1, 9, 15 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/40-01,WT.jpg',
          title: 'Weird Tales',
          artist: 'Virgil Finlay',
          year: '1940',
          rule: {
            "monday": [ 19, 1, 9, 15 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 16, 11 ],
            "saturday": [ 21, 3, 11, 17 ],
            "sunday": [ 20, 2, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/11-02-11,SEP.jpg',
          title: 'Sat. Even. Post',
          artist: 'Anton Otto Fischer',
          year: '1911',
          rule: {
            "monday": [ 20, 2, 10, 16 ],
            "tuesday": [ 19, 1, 9, 15 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 16, 11 ],
            "sunday": [ 21, 3, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/20-06-26,Arg.jpg',
          title: 'Argosy',
          artist: 'Harry T. Fisk',
          year: '1920',
          rule: {
            "monday": [ 21, 3, 11, 17 ],
            "tuesday": [ 20, 2, 10, 16 ],
            "wednesday": [ 19, 1, 9, 15 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 16, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/26-06-05,Winnipeg.jpg',
          title: 'Newspaper',
          artist: 'Dorothy Flack',
          year: '1926',
          rule: {
            "monday": [ 15, 28, 16, 11 ],
            "tuesday": [ 21, 3, 11, 17 ],
            "wednesday": [ 20, 2, 10, 16 ],
            "thursday": [ 19, 1, 9, 15 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/21-00,SherlockHolmes.jpg',
          title: 'Sherlock Holmes',
          artist: 'John R. Flanagan',
          year: '1921',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 16, 11 ],
            "wednesday": [ 21, 3, 11, 17 ],
            "thursday": [ 20, 2, 10, 16 ],
            "friday": [ 19, 1, 9, 15 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-11,NewAdvCmx.jpg',
          title: 'New Adventure',
          artist: 'Creig Flessel',
          year: '1937',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 16, 11 ],
            "thursday": [ 21, 3, 11, 17 ],
            "friday": [ 20, 2, 10, 16 ],
            "saturday": [ 19, 1, 9, 15 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-05,Comet.jpg',
          title: 'Comet',
          artist: 'John Forte',
          year: '1941',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 16, 11 ],
            "friday": [ 21, 3, 11, 17 ],
            "saturday": [ 20, 2, 10, 16 ],
            "sunday": [ 19, 1, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/17-07,Portrait.jpg',
          title: 'Oil Portrait',
          artist: 'Eugene M. Frandzen',
          year: '1917',
          rule: {
            "monday": [ 20, 2, 10, 16 ],
            "tuesday": [ 19, 1, 9, 15 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 17, 12 ],
            "saturday": [ 22, 4, 12, 18 ],
            "sunday": [ 21, 3, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/20-00,LOncleSam2.jpg',
          title: 'L\'Oncle Sam en France',
          artist: 'Joseph Franke',
          year: '1920',
          rule: {
            "monday": [ 21, 3, 11, 17 ],
            "tuesday": [ 20, 2, 10, 16 ],
            "wednesday": [ 19, 1, 9, 15 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 17, 12 ],
            "sunday": [ 22, 4, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/21-07,Munseys.jpg',
          title: 'Munsey\'s Magazine',
          artist: 'Marshall Frantz',
          year: '1921',
          rule: {
            "monday": [ 22, 4, 12, 18 ],
            "tuesday": [ 21, 3, 11, 17 ],
            "wednesday": [ 20, 2, 10, 16 ],
            "thursday": [ 19, 1, 9, 15 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 17, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/50-11,WeirdTls.jpg',
          title: 'Weird Tales',
          artist: 'Frank Kelly Freas',
          year: '1950',
          rule: {
            "monday": [ 16, 29, 17, 12 ],
            "tuesday": [ 22, 4, 12, 18 ],
            "wednesday": [ 21, 3, 11, 17 ],
            "thursday": [ 20, 2, 10, 16 ],
            "friday": [ 19, 1, 9, 15 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-00,comic.jpg',
          title: 'A.I.C. Yearbook',
          artist: 'Robert Fuqua',
          year: '1925',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 17, 12 ],
            "wednesday": [ 22, 4, 12, 18 ],
            "thursday": [ 21, 3, 11, 17 ],
            "friday": [ 20, 2, 10, 16 ],
            "saturday": [ 19, 1, 9, 15 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/24-06-25,Newspaper.jpg',
          title: 'Newspaper',
          artist: 'Madge Geyer',
          year: '1924',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 17, 12 ],
            "thursday": [ 22, 4, 12, 18 ],
            "friday": [ 21, 3, 11, 17 ],
            "saturday": [ 20, 2, 10, 16 ],
            "sunday": [ 19, 1, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/31-01-15,OregonNews.jpg',
          title: 'Pinky Dinky',
          artist: 'Terry Gilkison',
          year: '1931',
          rule: {
            "monday": [ 19, 1, 9, 15 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 17, 12 ],
            "friday": [ 22, 4, 12, 18 ],
            "saturday": [ 21, 3, 11, 17 ],
            "sunday": [ 20, 2, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/46-05-2d,RanchRom.jpg',
          title: 'Ranch Romances',
          artist: 'Will Gimby',
          year: '1946',
          rule: {
            "monday": [ 21, 3, 11, 17 ],
            "tuesday": [ 20, 2, 10, 16 ],
            "wednesday": [ 19, 1, 9, 15 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 30, 18, 13 ],
            "saturday": [ 23, 5, 13, 19 ],
            "sunday": [ 22, 4, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-08,DmMyst.jpg',
          title: 'Dime Mystery',
          artist: 'Graves Gladney',
          year: '1937',
          rule: {
            "monday": [ 22, 4, 12, 18 ],
            "tuesday": [ 21, 3, 11, 17 ],
            "wednesday": [ 20, 2, 10, 16 ],
            "thursday": [ 19, 1, 9, 15 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 30, 18, 13 ],
            "sunday": [ 23, 5, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/24-08,ActionS.jpg',
          title: 'Action Stories',
          artist: 'F. R. Glass',
          year: '1924',
          rule: {
            "monday": [ 23, 5, 13, 19 ],
            "tuesday": [ 22, 4, 12, 18 ],
            "wednesday": [ 21, 3, 11, 17 ],
            "thursday": [ 20, 2, 10, 16 ],
            "friday": [ 19, 1, 9, 15 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 30, 18, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-00,Landscape.jpg',
          title: 'Landscape Painting',
          artist: 'Bertram Glover',
          year: '1928',
          rule: {
            "monday": [ 17, 30, 18, 13 ],
            "tuesday": [ 23, 5, 13, 19 ],
            "wednesday": [ 22, 4, 12, 18 ],
            "thursday": [ 21, 3, 11, 17 ],
            "friday": [ 20, 2, 10, 16 ],
            "saturday": [ 19, 1, 9, 15 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/19-00,PeterMoore.jpg',
          title: 'Book Illustration',
          artist: 'Thelma Gooch',
          year: '1919',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 30, 18, 13 ],
            "wednesday": [ 23, 5, 13, 19 ],
            "thursday": [ 22, 4, 12, 18 ],
            "friday": [ 21, 3, 11, 17 ],
            "saturday": [ 20, 2, 10, 16 ],
            "sunday": [ 19, 1, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/38-04,DmDet1.jpg',
          title: 'Dime Detective',
          artist: 'John Fleming Gould',
          year: '1938',
          rule: {
            "monday": [ 19, 1, 9, 15 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 18, 13 ],
            "thursday": [ 23, 5, 13, 19 ],
            "friday": [ 22, 4, 12, 18 ],
            "saturday": [ 21, 3, 11, 17 ],
            "sunday": [ 20, 2, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/05-03-12,NYHerald.jpg',
          title: 'Newspaper',
          artist: 'Robert A. Graef',
          year: '1905',
          rule: {
            "monday": [ 20, 2, 10, 16 ],
            "tuesday": [ 19, 1, 9, 15 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 18, 13 ],
            "friday": [ 23, 5, 13, 19 ],
            "saturday": [ 22, 4, 12, 18 ],
            "sunday": [ 21, 3, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1892,LizzieBorden.jpg',
          title: 'Lizzie Borden',
          artist: 'Louis F. Grant',
          year: '1892',
          rule: {
            "monday": [ 22, 4, 12, 18 ],
            "tuesday": [ 21, 3, 11, 17 ],
            "wednesday": [ 20, 2, 10, 16 ],
            "thursday": [ 19, 31, 9, 15 ],
            "friday": [ 18, 31, 19, 14 ],
            "saturday": [ 24, 6, 14, 20 ],
            "sunday": [ 23, 5, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-05,StarW1.jpg',
          title: 'Star Western',
          artist: 'Hamilton Greene',
          year: '1935',
          rule: {
            "monday": [ 23, 5, 13, 19 ],
            "tuesday": [ 22, 4, 12, 18 ],
            "wednesday": [ 21, 3, 11, 17 ],
            "thursday": [ 20, 2, 10, 16 ],
            "friday": [ 19, 31, 9, 15 ],
            "saturday": [ 18, 31, 19, 14 ],
            "sunday": [ 24, 6, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/32-01-30,LoveStory.jpg',
          title: 'Love Story',
          artist: 'Reginald Greenwood',
          year: '1932',
          rule: {
            "monday": [ 24, 6, 14, 20 ],
            "tuesday": [ 23, 5, 13, 19 ],
            "wednesday": [ 22, 4, 12, 18 ],
            "thursday": [ 21, 3, 11, 17 ],
            "friday": [ 20, 2, 10, 16 ],
            "saturday": [ 19, 31, 9, 15 ],
            "sunday": [ 18, 31, 19, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/23-04,MotPic.jpg',
          title: 'Motion Picture',
          artist: 'O. Greiner',
          year: '1923',
          rule: {
            "monday": [ 18, 31, 19, 14 ],
            "tuesday": [ 24, 6, 14, 20 ],
            "wednesday": [ 23, 5, 13, 19 ],
            "thursday": [ 22, 4, 12, 18 ],
            "friday": [ 21, 3, 11, 17 ],
            "saturday": [ 20, 2, 10, 16 ],
            "sunday": [ 19, 31, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-12,Motorist.jpg',
          title: 'Maryland Motorist',
          artist: 'Clem Gretta',
          year: '1928',
          rule: {
            "monday": [ 19, 31, 9, 15 ],
            "tuesday": [ 18, 31, 19, 14 ],
            "wednesday": [ 24, 6, 14, 20 ],
            "thursday": [ 23, 5, 13, 19 ],
            "friday": [ 22, 4, 12, 18 ],
            "saturday": [ 21, 3, 11, 17 ],
            "sunday": [ 20, 2, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/38-Fall,BullsEye.jpg',
          title: 'Bulls Eye Detective',
          artist: 'George Gross',
          year: '1938',
          rule: {
            "monday": [ 20, 2, 10, 16 ],
            "tuesday": [ 19, 31, 9, 15 ],
            "wednesday": [ 18, 31, 19, 14 ],
            "thursday": [ 24, 6, 14, 20 ],
            "friday": [ 23, 5, 13, 19 ],
            "saturday": [ 22, 4, 12, 18 ],
            "sunday": [ 21, 3, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/27-06-11,Judge.jpg',
          title: 'Judge',
          artist: 'W. B. Grubb',
          year: '1927',
          rule: {
            "monday": [ 21, 3, 11, 17 ],
            "tuesday": [ 20, 2, 10, 16 ],
            "wednesday": [ 19, 31, 9, 15 ],
            "thursday": [ 18, 31, 19, 14 ],
            "friday": [ 24, 6, 14, 20 ],
            "saturday": [ 23, 5, 13, 19 ],
            "sunday": [ 22, 4, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/38-09,NewAdvCmx.jpg',
          title: 'Adventure Comics',
          artist: 'Frederick B. Guardineer',
          year: '1938',
          rule: {
            "monday": [ 23, 5, 13, 19 ],
            "tuesday": [ 22, 4, 12, 18 ],
            "wednesday": [ 21, 3, 11, 17 ],
            "thursday": [ 20, 1, 10, 16 ],
            "friday": [ 19, 1, 20, 15 ],
            "saturday": [ 25, 7, 15, 21 ],
            "sunday": [ 24, 6, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1894-07-14,Truth.jpg',
          title: 'Truth',
          artist: 'Archie Gunn',
          year: '1894',
          rule: {
            "monday": [ 24, 6, 14, 20 ],
            "tuesday": [ 23, 5, 13, 19 ],
            "wednesday": [ 22, 4, 12, 18 ],
            "thursday": [ 21, 3, 11, 17 ],
            "friday": [ 20, 1, 10, 16 ],
            "saturday": [ 19, 1, 20, 15 ],
            "sunday": [ 25, 7, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-04-16,Liberty.jpg',
          title: 'Liberty',
          artist: 'Lea Gustavson',
          year: '1930',
          rule: {
            "monday": [ 25, 7, 15, 21 ],
            "tuesday": [ 24, 6, 14, 20 ],
            "wednesday": [ 23, 5, 13, 19 ],
            "thursday": [ 22, 4, 12, 18 ],
            "friday": [ 21, 3, 11, 17 ],
            "saturday": [ 20, 1, 10, 16 ],
            "sunday": [ 19, 1, 20, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/07-12,Munseys.jpg',
          title: 'Munsey\'s Magazine',
          artist: 'T. Victor Hall',
          year: '1907',
          rule: {
            "monday": [ 19, 1, 20, 15 ],
            "tuesday": [ 25, 7, 15, 21 ],
            "wednesday": [ 24, 6, 14, 20 ],
            "thursday": [ 23, 5, 13, 19 ],
            "friday": [ 22, 4, 12, 18 ],
            "saturday": [ 21, 3, 11, 17 ],
            "sunday": [ 20, 1, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/22-03,BriefS.jpg',
          title: 'Brief Stories',
          artist: 'Charles Hargens',
          year: '1922',
          rule: {
            "monday": [ 20, 1, 10, 16 ],
            "tuesday": [ 19, 1, 20, 15 ],
            "wednesday": [ 25, 7, 15, 21 ],
            "thursday": [ 24, 6, 14, 20 ],
            "friday": [ 23, 5, 13, 19 ],
            "saturday": [ 22, 4, 12, 18 ],
            "sunday": [ 21, 3, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-01,PopW.jpg',
          title: 'Popular Western',
          artist: 'Grant Hargis',
          year: '1941',
          rule: {
            "monday": [ 21, 3, 11, 17 ],
            "tuesday": [ 20, 1, 10, 16 ],
            "wednesday": [ 19, 1, 20, 15 ],
            "thursday": [ 25, 7, 15, 21 ],
            "friday": [ 24, 6, 14, 20 ],
            "saturday": [ 23, 5, 13, 19 ],
            "sunday": [ 22, 4, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-08,WRoundUp.jpg',
          title: 'Western Round-Up',
          artist: 'R. G. Harris',
          year: '1934',
          rule: {
            "monday": [ 22, 4, 12, 18 ],
            "tuesday": [ 21, 3, 11, 17 ],
            "wednesday": [ 20, 1, 10, 16 ],
            "thursday": [ 19, 1, 20, 15 ],
            "friday": [ 25, 7, 15, 21 ],
            "saturday": [ 24, 6, 14, 20 ],
            "sunday": [ 23, 5, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-11,WAces.jpg',
          title: 'Western Aces',
          artist: 'Roy Harrison',
          year: '1937',
          rule: {
            "monday": [ 24, 6, 14, 20 ],
            "tuesday": [ 23, 5, 13, 19 ],
            "wednesday": [ 22, 4, 12, 18 ],
            "thursday": [ 21, 2, 11, 17 ],
            "friday": [ 20, 2, 21, 16 ],
            "saturday": [ 26, 8, 16, 22 ],
            "sunday": [ 25, 7, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/15-10,Recreation.jpg',
          title: 'Recreation',
          artist: 'Howard L. Hastings',
          year: '1915',
          rule: {
            "monday": [ 25, 7, 15, 21 ],
            "tuesday": [ 24, 6, 14, 20 ],
            "wednesday": [ 23, 5, 13, 19 ],
            "thursday": [ 22, 4, 12, 18 ],
            "friday": [ 21, 2, 11, 17 ],
            "saturday": [ 20, 2, 21, 16 ],
            "sunday": [ 26, 8, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/Drawing.jpg',
          title: 'Drawing',
          artist: 'Eunice Hatfiel',
          year: '1938',
          rule: {
            "monday": [ 26, 8, 16, 22 ],
            "tuesday": [ 25, 7, 15, 21 ],
            "wednesday": [ 24, 6, 14, 20 ],
            "thursday": [ 23, 5, 13, 19 ],
            "friday": [ 22, 4, 12, 18 ],
            "saturday": [ 21, 2, 11, 17 ],
            "sunday": [ 20, 2, 21, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/94-06,Yearbok.jpg',
          title: 'M.I.T. Yearbook',
          artist: 'I. B. Hazelton',
          year: '1894',
          rule: {
            "monday": [ 20, 2, 21, 16 ],
            "tuesday": [ 26, 8, 16, 22 ],
            "wednesday": [ 25, 7, 15, 21 ],
            "thursday": [ 24, 6, 14, 20 ],
            "friday": [ 23, 5, 13, 19 ],
            "saturday": [ 22, 4, 12, 18 ],
            "sunday": [ 21, 2, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/32-00,SEP.jpg',
          title: 'Saturday Evening',
          artist: 'Albin Henning',
          year: '1932',
          rule: {
            "monday": [ 21, 2, 11, 17 ],
            "tuesday": [ 20, 2, 21, 16 ],
            "wednesday": [ 26, 8, 16, 22 ],
            "thursday": [ 25, 7, 15, 21 ],
            "friday": [ 24, 6, 14, 20 ],
            "saturday": [ 23, 5, 13, 19 ],
            "sunday": [ 22, 4, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/29-10,OverTop.jpg',
          title: 'Over The Top',
          artist: 'Lawrence Herndon',
          year: '1929',
          rule: {
            "monday": [ 22, 4, 12, 18 ],
            "tuesday": [ 21, 2, 11, 17 ],
            "wednesday": [ 20, 2, 21, 16 ],
            "thursday": [ 26, 8, 16, 22 ],
            "friday": [ 25, 7, 15, 21 ],
            "saturday": [ 24, 6, 14, 20 ],
            "sunday": [ 23, 5, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/22-03-10.Adv.jpg',
          title: 'Adventure',
          artist: 'Colcord Heurlin',
          year: '1922',
          rule: {
            "monday": [ 23, 5, 13, 19 ],
            "tuesday": [ 22, 4, 12, 18 ],
            "wednesday": [ 21, 2, 11, 17 ],
            "thursday": [ 20, 2, 21, 16 ],
            "friday": [ 26, 8, 16, 22 ],
            "saturday": [ 25, 7, 15, 21 ],
            "sunday": [ 24, 6, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-04,DetDrgnt.jpg',
          title: 'Detective Dragnet',
          artist: 'Don Hewitt',
          year: '1930',
          rule: {
            "monday": [ 25, 7, 15, 21 ],
            "tuesday": [ 24, 6, 14, 20 ],
            "wednesday": [ 23, 5, 13, 19 ],
            "thursday": [ 22, 3, 12, 18 ],
            "friday": [ 21, 3, 22, 17 ],
            "saturday": [ 27, 9, 17, 23 ],
            "sunday": [ 26, 8, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-10,AceSports1.jpg',
          title: 'Ace Sports',
          artist: 'Tom Hickey',
          year: '1936',
          rule: {
            "monday": [ 26, 8, 16, 22 ],
            "tuesday": [ 25, 7, 15, 21 ],
            "wednesday": [ 24, 6, 14, 20 ],
            "thursday": [ 23, 5, 13, 19 ],
            "friday": [ 22, 3, 12, 18 ],
            "saturday": [ 21, 3, 22, 17 ],
            "sunday": [ 27, 9, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/25-01,RadiatorAd.jpg',
          title: 'Advertisement',
          artist: 'Arnold Lorne Hicks',
          year: '1925',
          rule: {
            "monday": [ 27, 9, 17, 23 ],
            "tuesday": [ 26, 8, 16, 22 ],
            "wednesday": [ 25, 7, 15, 21 ],
            "thursday": [ 24, 6, 14, 20 ],
            "friday": [ 23, 5, 13, 19 ],
            "saturday": [ 22, 3, 12, 18 ],
            "sunday": [ 21, 3, 22, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/09-09-30,Life.jpg',
          title: 'Life',
          artist: 'Lejaren Hiller',
          year: '1909',
          rule: {
            "monday": [ 21, 3, 22, 17 ],
            "tuesday": [ 27, 9, 17, 23 ],
            "wednesday": [ 26, 8, 16, 22 ],
            "thursday": [ 25, 7, 15, 21 ],
            "friday": [ 24, 6, 14, 20 ],
            "saturday": [ 23, 5, 13, 19 ],
            "sunday": [ 22, 3, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/14-12,UC-Yrbook.jpg',
          title: 'Univ. Cal. Yearbook',
          artist: 'Douglas Hilliker',
          year: '1914',
          rule: {
            "monday": [ 22, 3, 12, 18 ],
            "tuesday": [ 21, 3, 22, 17 ],
            "wednesday": [ 27, 9, 17, 23 ],
            "thursday": [ 26, 8, 16, 22 ],
            "friday": [ 25, 7, 15, 21 ],
            "saturday": [ 24, 6, 14, 20 ],
            "sunday": [ 23, 5, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/23-00,HosieryAd.jpg',
          title: 'Sports Hosiery Ad',
          artist: 'W. H. Hinton',
          year: '1923',
          rule: {
            "monday": [ 23, 5, 13, 19 ],
            "tuesday": [ 22, 3, 12, 18 ],
            "wednesday": [ 21, 3, 22, 17 ],
            "thursday": [ 27, 9, 17, 23 ],
            "friday": [ 26, 8, 16, 22 ],
            "saturday": [ 25, 7, 15, 21 ],
            "sunday": [ 24, 6, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/14-00,LostSister.jpg',
          title: 'Little Lost Sister',
          artist: 'Francis J. Hoban',
          year: '1914',
          rule: {
            "monday": [ 24, 6, 14, 20 ],
            "tuesday": [ 23, 5, 13, 19 ],
            "wednesday": [ 22, 3, 12, 18 ],
            "thursday": [ 21, 3, 22, 17 ],
            "friday": [ 27, 9, 17, 23 ],
            "saturday": [ 26, 8, 16, 22 ],
            "sunday": [ 25, 7, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/18-12,Scribners1.jpg',
          title: 'Scribners',
          artist: 'Edward Hopper',
          year: '1918',
          rule: {
            "monday": [ 26, 8, 16, 22 ],
            "tuesday": [ 25, 7, 15, 21 ],
            "wednesday": [ 24, 6, 14, 20 ],
            "thursday": [ 23, 4, 13, 19 ],
            "friday": [ 22, 4, 23, 18 ],
            "saturday": [ 28, 10, 18, 24 ],
            "sunday": [ 27, 9, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/18-11-04,LHomeJ.jpg',
          title: 'Ladies Home',
          artist: 'Gayle Hoskins',
          year: '1918',
          rule: {
            "monday": [ 27, 9, 17, 23 ],
            "tuesday": [ 26, 8, 16, 22 ],
            "wednesday": [ 25, 7, 15, 21 ],
            "thursday": [ 24, 6, 14, 20 ],
            "friday": [ 23, 4, 13, 19 ],
            "saturday": [ 22, 4, 23, 18 ],
            "sunday": [ 28, 10, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/09-00,CrmWht.jpg',
          title: 'Advertisement',
          artist: 'John Newton Howitt',
          year: '1909',
          rule: {
            "monday": [ 28, 10, 18, 24 ],
            "tuesday": [ 27, 9, 17, 23 ],
            "wednesday": [ 26, 8, 16, 22 ],
            "thursday": [ 25, 7, 15, 21 ],
            "friday": [ 24, 6, 14, 20 ],
            "saturday": [ 23, 4, 13, 19 ],
            "sunday": [ 22, 4, 23, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/43-07,WeirdTls1.jpg',
          title: 'Weird Tales',
          artist: 'Fred Humiston',
          year: '1943',
          rule: {
            "monday": [ 22, 4, 23, 18 ],
            "tuesday": [ 28, 10, 18, 24 ],
            "wednesday": [ 27, 9, 17, 23 ],
            "thursday": [ 26, 8, 16, 22 ],
            "friday": [ 25, 7, 15, 21 ],
            "saturday": [ 24, 6, 14, 20 ],
            "sunday": [ 23, 4, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/13-03,TheOuting.jpg',
          title: 'The Outing',
          artist: 'David C. Hutchison',
          year: '1913',
          rule: {
            "monday": [ 23, 4, 13, 19 ],
            "tuesday": [ 22, 4, 23, 18 ],
            "wednesday": [ 28, 10, 18, 24 ],
            "thursday": [ 27, 9, 17, 23 ],
            "friday": [ 26, 8, 16, 22 ],
            "saturday": [ 25, 7, 15, 21 ],
            "sunday": [ 24, 6, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/39-10,Unknown.jpg',
          title: 'Unknown',
          artist: 'Pagsilang Rey Isip',
          year: '1939',
          rule: {
            "monday": [ 24, 6, 14, 20 ],
            "tuesday": [ 23, 4, 13, 19 ],
            "wednesday": [ 22, 4, 23, 18 ],
            "thursday": [ 28, 10, 18, 24 ],
            "friday": [ 27, 9, 17, 23 ],
            "saturday": [ 26, 8, 16, 22 ],
            "sunday": [ 25, 7, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/06-04,Outing.jpg',
          title: 'The Outing',
          artist: 'P. V. E. Ivory',
          year: '1906',
          rule: {
            "monday": [ 25, 7, 15, 21 ],
            "tuesday": [ 24, 6, 14, 20 ],
            "wednesday": [ 23, 4, 13, 19 ],
            "thursday": [ 22, 4, 23, 18 ],
            "friday": [ 28, 10, 18, 24 ],
            "saturday": [ 27, 9, 17, 23 ],
            "sunday": [ 26, 8, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/04-09,Munseys.jpg',
          title: 'Munsey\'s Magazine',
          artist: 'Arthur Jameson',
          year: '1904',
          rule: {
            "monday": [ 27, 9, 17, 23 ],
            "tuesday": [ 26, 8, 16, 22 ],
            "wednesday": [ 25, 7, 15, 21 ],
            "thursday": [ 24, 5, 14, 20 ],
            "friday": [ 23, 5, 24, 19 ],
            "saturday": [ 29, 11, 19, 25 ],
            "sunday": [ 28, 10, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-03,TenDA.jpg',
          title: 'Ten Detective Aces',
          artist: 'J. George Janes',
          year: '1934',
          rule: {
            "monday": [ 28, 10, 18, 24 ],
            "tuesday": [ 27, 9, 17, 23 ],
            "wednesday": [ 26, 8, 16, 22 ],
            "thursday": [ 25, 7, 15, 21 ],
            "friday": [ 24, 5, 14, 20 ],
            "saturday": [ 23, 5, 24, 19 ],
            "sunday": [ 29, 11, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/39-00,BLBook.jpg',
          title: 'Better Little Book',
          artist: 'Robert Jenney',
          year: '1939',
          rule: {
            "monday": [ 29, 11, 19, 25 ],
            "tuesday": [ 28, 10, 18, 24 ],
            "wednesday": [ 27, 9, 17, 23 ],
            "thursday": [ 26, 8, 16, 22 ],
            "friday": [ 25, 7, 15, 21 ],
            "saturday": [ 24, 5, 14, 20 ],
            "sunday": [ 23, 5, 24, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-08,SaucyRomAdv-7.jpg',
          title: 'Snappy Romances',
          artist: 'Paul H. Jepsen',
          year: '1935',
          rule: {
            "monday": [ 23, 5, 24, 19 ],
            "tuesday": [ 29, 11, 19, 25 ],
            "wednesday": [ 28, 10, 18, 24 ],
            "thursday": [ 27, 9, 17, 23 ],
            "friday": [ 26, 8, 16, 22 ],
            "saturday": [ 25, 7, 15, 21 ],
            "sunday": [ 24, 5, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/48-09-24,TheNewAge.jpg',
          title: 'The N.Y. Age',
          artist: 'E. Harper Johnson',
          year: '1948',
          rule: {
            "monday": [ 24, 5, 14, 20 ],
            "tuesday": [ 23, 5, 24, 19 ],
            "wednesday": [ 29, 11, 19, 25 ],
            "thursday": [ 28, 10, 18, 24 ],
            "friday": [ 27, 9, 17, 23 ],
            "saturday": [ 26, 8, 16, 22 ],
            "sunday": [ 25, 7, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/26-05,Chrysler2.jpg',
          title: 'Chrysler AD',
          artist: 'Robert Gibson Jones',
          year: '1926',
          rule: {
            "monday": [ 25, 7, 15, 21 ],
            "tuesday": [ 24, 5, 14, 20 ],
            "wednesday": [ 23, 5, 24, 19 ],
            "thursday": [ 29, 11, 19, 25 ],
            "friday": [ 28, 10, 18, 24 ],
            "saturday": [ 27, 9, 17, 23 ],
            "sunday": [ 26, 8, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-09-25,SS.jpg',
          title: 'Short Stories',
          artist: 'Mat Kauten',
          year: '1941',
          rule: {
            "monday": [ 26, 8, 16, 22 ],
            "tuesday": [ 25, 7, 15, 21 ],
            "wednesday": [ 24, 5, 14, 20 ],
            "thursday": [ 23, 5, 24, 19 ],
            "friday": [ 29, 11, 19, 25 ],
            "saturday": [ 28, 10, 18, 24 ],
            "sunday": [ 27, 9, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/06-00,GoldenGoblin1.jpg',
          title: 'The Golden Goblin',
          artist: 'George F. Kerr',
          year: '1906',
          rule: {
            "monday": [ 28, 10, 18, 24 ],
            "tuesday": [ 27, 9, 17, 23 ],
            "wednesday": [ 26, 8, 16, 22 ],
            "thursday": [ 25, 6, 15, 21 ],
            "friday": [ 24, 6, 25, 20 ],
            "saturday": [ 30, 12, 20, 26 ],
            "sunday": [ 29, 11, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-03,ScyMT2.jpg',
          title: 'Saucy Movie Tales',
          artist: 'H. C. Kiefer',
          year: '1936',
          rule: {
            "monday": [ 29, 11, 19, 25 ],
            "tuesday": [ 28, 10, 18, 24 ],
            "wednesday": [ 27, 9, 17, 23 ],
            "thursday": [ 26, 8, 16, 22 ],
            "friday": [ 25, 6, 15, 21 ],
            "saturday": [ 24, 6, 25, 20 ],
            "sunday": [ 30, 12, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/27-06,FrontierS.jpg',
          title: 'Frontier Stories',
          artist: 'W. Ralph Kiefer',
          year: '1927',
          rule: {
            "monday": [ 30, 12, 20, 26 ],
            "tuesday": [ 29, 11, 19, 25 ],
            "wednesday": [ 28, 10, 18, 24 ],
            "thursday": [ 27, 9, 17, 23 ],
            "friday": [ 26, 8, 16, 22 ],
            "saturday": [ 25, 6, 15, 21 ],
            "sunday": [ 24, 6, 25, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-06,AceHi.jpg',
          title: 'Ace-High',
          artist: 'H. W. Kiemle',
          year: '1930',
          rule: {
            "monday": [ 24, 6, 25, 20 ],
            "tuesday": [ 30, 12, 20, 26 ],
            "wednesday": [ 29, 11, 19, 25 ],
            "thursday": [ 28, 10, 18, 24 ],
            "friday": [ 27, 9, 17, 23 ],
            "saturday": [ 26, 8, 16, 22 ],
            "sunday": [ 25, 6, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/40-06,AmazingMystery.jpg',
          title: 'Amazing Mystery',
          artist: 'Malcolm Kildale',
          year: '1940',
          rule: {
            "monday": [ 25, 6, 15, 21 ],
            "tuesday": [ 24, 6, 25, 20 ],
            "wednesday": [ 30, 12, 20, 26 ],
            "thursday": [ 29, 11, 19, 25 ],
            "friday": [ 28, 10, 18, 24 ],
            "saturday": [ 27, 9, 17, 23 ],
            "sunday": [ 26, 8, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-07,TopNotch.jpg',
          title: 'Top Notch Comics',
          artist: 'Warren King',
          year: '1941',
          rule: {
            "monday": [ 26, 8, 16, 22 ],
            "tuesday": [ 25, 6, 15, 21 ],
            "wednesday": [ 24, 6, 25, 20 ],
            "thursday": [ 30, 12, 20, 26 ],
            "friday": [ 29, 11, 19, 25 ],
            "saturday": [ 28, 10, 18, 24 ],
            "sunday": [ 27, 9, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/49-00,Avon,Y-127.jpg',
          title: 'Avon Paperback Cover',
          artist: 'Everett Raymond Kinstler',
          year: '1949',
          rule: {
            "monday": [ 27, 9, 17, 23 ],
            "tuesday": [ 26, 8, 16, 22 ],
            "wednesday": [ 25, 6, 15, 21 ],
            "thursday": [ 24, 6, 25, 20 ],
            "friday": [ 30, 12, 20, 26 ],
            "saturday": [ 29, 11, 19, 25 ],
            "sunday": [ 28, 10, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-00,Illus.jpg',
          title: 'pulp illustration',
          artist: 'Harry Kirchner',
          year: '1934',
          rule: {
            "monday": [ 29, 11, 19, 25 ],
            "tuesday": [ 28, 10, 18, 24 ],
            "wednesday": [ 27, 9, 17, 23 ],
            "thursday": [ 26, 7, 16, 22 ],
            "friday": [ 25, 7, 26, 21 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 30, 12, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-10,LvFctMtly1.jpg',
          title: 'Love Fiction',
          artist: 'Alice Kirkpatrick',
          year: '1937',
          rule: {
            "monday": [ 30, 12, 20, 26 ],
            "tuesday": [ 29, 11, 19, 25 ],
            "wednesday": [ 28, 10, 18, 24 ],
            "thursday": [ 27, 9, 17, 23 ],
            "friday": [ 26, 7, 16, 22 ],
            "saturday": [ 25, 7, 26, 21 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/39-12,NationalSportsman.jpg',
          title: 'Nat\'l Sportsman',
          artist: 'George Klein',
          year: '1939',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 30, 12, 20, 26 ],
            "wednesday": [ 29, 11, 19, 25 ],
            "thursday": [ 28, 10, 18, 24 ],
            "friday": [ 27, 9, 17, 23 ],
            "saturday": [ 26, 7, 16, 22 ],
            "sunday": [ 25, 7, 26, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/38-06,Yearbook.jpg',
          title: 'High School Yearbook',
          artist: 'Arnold Kohn',
          year: '1938',
          rule: {
            "monday": [ 25, 7, 26, 21 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 30, 12, 20, 26 ],
            "thursday": [ 29, 11, 19, 25 ],
            "friday": [ 28, 10, 18, 24 ],
            "saturday": [ 27, 9, 17, 23 ],
            "sunday": [ 26, 7, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/39-07,Secrets.jpg',
          title: 'Secrets',
          artist: 'Ilo Kopland',
          year: '1939',
          rule: {
            "monday": [ 26, 7, 16, 22 ],
            "tuesday": [ 25, 7, 26, 21 ],
            "wednesday": [ 31, 13, 21, 27 ],
            "thursday": [ 30, 12, 20, 26 ],
            "friday": [ 29, 11, 19, 25 ],
            "saturday": [ 28, 10, 18, 24 ],
            "sunday": [ 27, 9, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-12-15,SptS1.jpg',
          title: 'Sports Story',
          artist: 'Frank Kramer',
          year: '1936',
          rule: {
            "monday": [ 27, 9, 17, 23 ],
            "tuesday": [ 26, 7, 16, 22 ],
            "wednesday": [ 25, 7, 26, 21 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 30, 12, 20, 26 ],
            "saturday": [ 29, 11, 19, 25 ],
            "sunday": [ 28, 10, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/40-02,StrangeS2.jpg',
          title: 'Strange Stories',
          artist: 'Warren Kremer',
          year: '1940',
          rule: {
            "monday": [ 28, 10, 18, 24 ],
            "tuesday": [ 27, 9, 17, 23 ],
            "wednesday": [ 26, 7, 16, 22 ],
            "thursday": [ 25, 7, 26, 21 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 30, 12, 20, 26 ],
            "sunday": [ 29, 11, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/52-05,MrvlSciFi.jpg',
          title: 'Marvel Science',
          artist: 'Roy G. Krenkel',
          year: '1952',
          rule: {
            "monday": [ 30, 12, 20, 26 ],
            "tuesday": [ 29, 11, 19, 25 ],
            "wednesday": [ 28, 10, 18, 24 ],
            "thursday": [ 27, 8, 17, 23 ],
            "friday": [ 26, 8, 27, 23 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-09-10,SS.jpg',
          title: 'Short Stories',
          artist: 'Pete Kuhlhoff',
          year: '1934',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 30, 12, 20, 26 ],
            "wednesday": [ 29, 11, 19, 25 ],
            "thursday": [ 28, 10, 18, 24 ],
            "friday": [ 27, 8, 17, 23 ],
            "saturday": [ 26, 8, 27, 23 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-06,MotnPx.jpg',
          title: 'Motion Picture',
          artist: 'Morr Kusnet',
          year: '1935',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 30, 12, 20, 26 ],
            "thursday": [ 29, 11, 19, 25 ],
            "friday": [ 28, 10, 18, 24 ],
            "saturday": [ 27, 8, 17, 23 ],
            "sunday": [ 26, 8, 27, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/25-05-16,WS.jpg',
          title: 'Western Story',
          artist: 'Charles Laselle',
          year: '1925',
          rule: {
            "monday": [ 26, 8, 27, 23 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 31, 13, 21, 27 ],
            "thursday": [ 30, 12, 20, 26 ],
            "friday": [ 29, 11, 19, 25 ],
            "saturday": [ 28, 10, 18, 24 ],
            "sunday": [ 27, 8, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/43-12,FFM.jpg',
          title: 'Famous Fantastic Mysteries',
          artist: 'Lawrence (Sterne Stevens)',
          year: '1943',
          rule: {
            "monday": [ 27, 8, 17, 23 ],
            "tuesday": [ 26, 8, 27, 23 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 30, 12, 20, 26 ],
            "saturday": [ 29, 11, 19, 25 ],
            "sunday": [ 28, 10, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-10,StNicholas.jpg',
          title: 'St Nicholas',
          artist: 'Manning de V. Lee',
          year: '1930',
          rule: {
            "monday": [ 28, 10, 18, 24 ],
            "tuesday": [ 27, 8, 17, 23 ],
            "wednesday": [ 26, 8, 27, 23 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 30, 12, 20, 26 ],
            "sunday": [ 29, 11, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/40-04,FiveNovels.jpg',
          title: 'Five Novels',
          artist: 'M. Lincoln Lee',
          year: '1940',
          rule: {
            "monday": [ 29, 11, 19, 25 ],
            "tuesday": [ 28, 10, 18, 24 ],
            "wednesday": [ 27, 8, 17, 23 ],
            "thursday": [ 26, 8, 27, 23 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 30, 12, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-Spr,WolrdsBestComics.jpg',
          title: 'Spr World\'s Best Comics',
          artist: 'John "Jack" Lehti',
          year: '1941',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 30, 12, 20, 26 ],
            "wednesday": [ 29, 11, 19, 25 ],
            "thursday": [ 28, 9, 18, 24 ],
            "friday": [ 27, 9, 28, 24 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/02-00,TheBookman.jpg',
          title: 'The Bookman',
          artist: 'Franz Leyendecker',
          year: '1902',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 30, 12, 20, 26 ],
            "thursday": [ 29, 11, 19, 25 ],
            "friday": [ 28, 9, 18, 24 ],
            "saturday": [ 27, 9, 28, 24 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/32-12,AceHigh.jpg',
          title: 'Ace-High Magazine',
          artist: 'Richard Lillis',
          year: '1932',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 31, 13, 21, 27 ],
            "thursday": [ 30, 12, 20, 26 ],
            "friday": [ 29, 11, 19, 25 ],
            "saturday": [ 28, 9, 18, 24 ],
            "sunday": [ 27, 9, 28, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/31-08,GngstrS.jpg',
          title: 'Gangster Stories',
          artist: 'Thomas Lovell',
          year: '1931',
          rule: {
            "monday": [ 27, 9, 28, 24 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 30, 12, 20, 26 ],
            "saturday": [ 29, 11, 19, 25 ],
            "sunday": [ 28, 9, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-10,SctAgtX.jpg',
          title: 'Secret Agent-X',
          artist: 'William Luberoff',
          year: '1936',
          rule: {
            "monday": [ 28, 9, 18, 24 ],
            "tuesday": [ 27, 9, 28, 24 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 30, 12, 20, 26 ],
            "sunday": [ 29, 11, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-10,MansS.jpg',
          title: 'Man Stories',
          artist: 'Eric Lundgren',
          year: '1930',
          rule: {
            "monday": [ 29, 11, 19, 25 ],
            "tuesday": [ 28, 9, 18, 24 ],
            "wednesday": [ 27, 9, 28, 24 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 30, 12, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-07,AdvNvls.jpg',
          title: 'Adventure Novels',
          artist: 'Milton Luros',
          year: '1937',
          rule: {
            "monday": [ 30, 12, 20, 26 ],
            "tuesday": [ 29, 11, 19, 25 ],
            "wednesday": [ 28, 9, 18, 24 ],
            "thursday": [ 27, 9, 28, 24 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-06,ThllW.jpg',
          title: 'Thrilling Western',
          artist: 'Richard Lyon',
          year: '1935',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 30, 12, 20, 26 ],
            "thursday": [ 29, 10, 19, 25 ],
            "friday": [ 28, 10, 29, 25 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-08,AstndngS.jpg',
          title: 'Astounding Stories',
          artist: 'Mark Marchioni',
          year: '1934',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 31, 13, 21, 27 ],
            "thursday": [ 30, 12, 20, 26 ],
            "friday": [ 29, 10, 19, 25 ],
            "saturday": [ 28, 10, 29, 25 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/46-07,PlanetCmx43.jpg',
          title: 'Planet Comics #43',
          artist: 'Chester Martin',
          year: '1946',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 30, 12, 20, 26 ],
            "saturday": [ 29, 10, 19, 25 ],
            "sunday": [ 28, 10, 29, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-11,W_Aces.jpg',
          title: 'Western Aces',
          artist: 'Pete Martinez',
          year: '1937',
          rule: {
            "monday": [ 28, 10, 29, 25 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 30, 12, 20, 26 ],
            "sunday": [ 29, 10, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/31-03-15,Tarzan.jpg',
          title: 'Tarzan Comic',
          artist: 'Rex Maxon',
          year: '1931',
          rule: {
            "monday": [ 29, 10, 19, 25 ],
            "tuesday": [ 28, 10, 29, 25 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 30, 12, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-06,KaZar2.jpg',
          title: 'Ka-Zar illustration',
          artist: 'Earl Mayan',
          year: '1937',
          rule: {
            "monday": [ 30, 12, 20, 26 ],
            "tuesday": [ 29, 10, 19, 25 ],
            "wednesday": [ 28, 10, 29, 25 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-09,SkyBirds.JPG',
          title: 'Sky Birds',
          artist: 'Casimir B. Mayshark',
          year: '1934',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 30, 12, 20, 26 ],
            "wednesday": [ 29, 10, 19, 25 ],
            "thursday": [ 28, 10, 29, 25 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-11,DngrTrl.jpg',
          title: 'Danger Trail',
          artist: 'Jay McArdle',
          year: '1934',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 31, 13, 21, 27 ],
            "thursday": [ 30, 11, 20, 26 ],
            "friday": [ 29, 11, 30, 26 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/32-10,ParisNts.jpg',
          title: 'Paris Nights',
          artist: 'Charles L. McCann',
          year: '1932',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 30, 11, 20, 26 ],
            "saturday": [ 29, 11, 30, 26 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-03,TwlSpts.jpg',
          title: 'Twelve Sports Aces',
          artist: 'Gerald McCann',
          year: '1941',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 30, 11, 20, 26 ],
            "sunday": [ 29, 11, 30, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/39-11,Amzng.jpg',
          title: 'Amazing Stories',
          artist: 'Harold McCauley',
          year: '1939',
          rule: {
            "monday": [ 29, 11, 30, 26 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 30, 11, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/23-02-20,Adv.jpg',
          title: 'Adventure',
          artist: 'James C. McKell',
          year: '1923',
          rule: {
            "monday": [ 30, 11, 20, 26 ],
            "tuesday": [ 29, 11, 30, 26 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-10,Evrybdys.jpg',
          title: 'Everybody\'s',
          artist: 'Duncan McMillan',
          year: '1928',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 30, 11, 20, 26 ],
            "wednesday": [ 29, 11, 30, 26 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/11-01-25,Newspaper.jpg',
          title: 'Newspaper',
          artist: 'William McNulty',
          year: '1911',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 30, 11, 20, 26 ],
            "thursday": [ 29, 11, 30, 26 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/38-00,FlyingAces1.jpg',
          title: 'Flying Aces',
          artist: 'Alden McWilliams',
          year: '1938',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 12, 21, 27 ],
            "friday": [ 30, 12, 31, 27 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/32-00,HeroCamp.jpg',
          title: 'Hero of the Camp',
          artist: 'William Meilink',
          year: '1932',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 12, 21, 27 ],
            "saturday": [ 30, 12, 31, 27 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-03,NewMystAdv-1.jpg',
          title: 'New Mystery Adventure',
          artist: 'John Meola',
          year: '1936',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 12, 21, 27 ],
            "sunday": [ 30, 12, 31, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-04-2,AceHi.jpg',
          title: '2nd Ace-High',
          artist: 'Arthur R. Mitchell',
          year: '1928',
          rule: {
            "monday": [ 30, 12, 31, 27 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 12, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/43-11,CrackDet.jpg',
          title: 'Crack Detective',
          artist: 'Ed Moline',
          year: '1943',
          rule: {
            "monday": [ 31, 12, 21, 27 ],
            "tuesday": [ 30, 12, 31, 27 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/10-00,PopePiusX.JPG',
          title: 'Portrait Pope Puis X',
          artist: 'P. J. Monahan',
          year: '1910',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 12, 21, 27 ],
            "wednesday": [ 30, 12, 31, 27 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-08,DblActW1.jpg',
          title: 'Double Action West',
          artist: 'D. H. Moneypenny',
          year: '1937',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 31, 12, 21, 27 ],
            "thursday": [ 30, 12, 31, 27 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-10,Amazng.jpg',
          title: 'Amazing Stories',
          artist: 'Leo Morey',
          year: '1930',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 13, 22, 28 ],
            "friday": [ 31, 13, 1, 8 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/02-04,Cosmo.jpg',
          title: 'The Cosmopolitan',
          artist: 'Roger B. Morrison',
          year: '1902',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 13, 22, 28 ],
            "saturday": [ 31, 13, 1, 8 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/24-01,Shadowland.jpg',
          title: 'Shadowland',
          artist: 'Wesley Morse',
          year: '1924',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 13, 22, 28 ],
            "sunday": [ 31, 13, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/51-01,RR.jpg',
          title: 'Railroad Magazine',
          artist: 'Herb Mott',
          year: '1951',
          rule: {
            "monday": [ 31, 13, 1, 8 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 13, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-04,LvRvls.jpg',
          title: 'Love Revels',
          artist: 'Zoe Mozert',
          year: '1934',
          rule: {
            "monday": [ 1, 13, 22, 28 ],
            "tuesday": [ 31, 13, 1, 8 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/20-00,Illus.jpg',
          title: 'Illustration',
          artist: 'Stockton Mulford',
          year: '1920',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 13, 22, 28 ],
            "wednesday": [ 31, 13, 1, 8 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-04,ThrllAdv.jpg',
          title: 'Thrilling Adventure',
          artist: 'C. A. Murphy',
          year: '1936',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 13, 22, 28 ],
            "thursday": [ 31, 13, 1, 8 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/23-03-30,Adv.jpg',
          title: 'Adventure',
          artist: 'H. C. Murphy',
          year: '1923',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 14, 23, 29 ],
            "friday": [ 1, 14, 2, 9 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-00,WPA.jpg',
          title: 'WPA Mural',
          artist: 'Vincent Napoli',
          year: '1934',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 14, 23, 29 ],
            "saturday": [ 1, 14, 2, 9 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/38-04-21,Ken.jpg',
          title: 'Ken Magazine',
          artist: 'Wesley Neff',
          year: '1938',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 14, 23, 29 ],
            "sunday": [ 1, 14, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/04-12-25,NYTribune.jpg',
          title: 'NY Tribune',
          artist: 'John R. Neill',
          year: '1904',
          rule: {
            "monday": [ 1, 14, 2, 9 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 14, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/31-04,FarmerAd.jpg',
          title: 'Advertisement',
          artist: 'Art Nelson',
          year: '1931',
          rule: {
            "monday": [ 2, 14, 23, 29 ],
            "tuesday": [ 1, 14, 2, 9 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/19-03,BoysLife-2.jpg',
          title: 'Boy\'s Life',
          artist: 'Ralph Nelson',
          year: '1919',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 14, 23, 29 ],
            "wednesday": [ 1, 14, 2, 9 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/17-00,BuffaloBill.jpg',
          title: 'Buffalo Bill Book',
          artist: 'Neil O\'Keeffe',
          year: '1917',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 14, 23, 29 ],
            "thursday": [ 1, 14, 2, 9 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/18-02-03,ChiSunTrb.jpg',
          title: 'Chicago Tribune',
          artist: 'Paul Orban',
          year: '1918',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 15, 24, 30 ],
            "friday": [ 2, 15, 3, 10 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/24-00,Bk2.jpg',
          title: 'Book Cover',
          artist: 'Delos Palmer',
          year: '1924',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 15, 24, 30 ],
            "saturday": [ 2, 15, 3, 10 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/00-08,TheMagnet.jpg',
          title: 'The Magnet',
          artist: 'Harry Parkhurst',
          year: '1900',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 15, 24, 30 ],
            "sunday": [ 2, 15, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/38-09,TenDA1.jpg',
          title: 'Ten Detective Aces',
          artist: 'R. Patenaude',
          year: '1938',
          rule: {
            "monday": [ 2, 15, 3, 10 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 15, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/22-01,SciInvtn.jpg',
          title: 'Science & Inventions',
          artist: 'Frank R. Paul',
          year: '1922',
          rule: {
            "monday": [ 3, 15, 24, 30 ],
            "tuesday": [ 2, 15, 3, 10 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/31-08,Ace-Hi.jpg',
          title: 'Ace-High Magazine',
          artist: 'Domingo Periconi',
          year: '1931',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 15, 24, 30 ],
            "wednesday": [ 2, 15, 3, 10 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1891,Drive-3.jpg',
          title: 'How To Drive Horses',
          artist: 'Clinton Pettee',
          year: '1891',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 15, 24, 30 ],
            "thursday": [ 2, 15, 3, 10 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-04,DonWinslow.jpg',
          title: 'Don Winslow',
          artist: 'Jim H. Phillips',
          year: '1937',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 16, 25, 31 ],
            "friday": [ 3, 16, 4, 11 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/32-00,Singer.jpg',
          title: 'Portrait',
          artist: 'Robert S. Pious',
          year: '1932',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 16, 25, 31 ],
            "saturday": [ 3, 16, 4, 11 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-05,SpcyMyst-001.jpg',
          title: 'Spicy Mystery',
          artist: 'Max Plaisted',
          year: '1935',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 16, 25, 31 ],
            "sunday": [ 3, 16, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/14-09,Cartoons.jpg',
          title: 'Cartoons',
          artist: 'Ethel Plummer',
          year: '1914',
          rule: {
            "monday": [ 3, 16, 4, 11 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 16, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/51-03,FanMyst.jpg',
          title: 'Fantastic Mysteries',
          artist: 'Walter Popp',
          year: '1951',
          rule: {
            "monday": [ 4, 16, 25, 31 ],
            "tuesday": [ 3, 16, 4, 11 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/43-Sum,ActS.jpg',
          title: 'Sum Action Stories',
          artist: 'E. W. Potter',
          year: '1943',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 16, 25, 31 ],
            "wednesday": [ 3, 16, 4, 11 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/25-12-11,AmLegion.jpg',
          title: 'American Legion',
          artist: 'V. E. Pyles',
          year: '1925',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 16, 25, 31 ],
            "thursday": [ 3, 16, 4, 11 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-04,StarWestern.jpg',
          title: 'Star Western',
          artist: 'Ray Quigley',
          year: '1937',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 17, 26, 1 ],
            "friday": [ 4, 17, 5, 12 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-07,MovieHumor.jpg',
          title: 'Movie Humor',
          artist: 'George Quintana',
          year: '1934',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 17, 26, 1 ],
            "saturday": [ 4, 17, 5, 12 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/33-05-05,TheSun.jpg',
          title: 'The N.Y. Sun',
          artist: 'Rafael (Valdivia)',
          year: '1933',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 17, 26, 1 ],
            "sunday": [ 4, 17, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-01,WesternRom.jpg',
          title: 'Western Romances',
          artist: 'Ray Ramsey',
          year: '1934',
          rule: {
            "monday": [ 4, 17, 5, 12 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 17, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/13-00,Adventure.jpg',
          title: 'Adventure',
          artist: 'J. V. Ranck',
          year: '1913',
          rule: {
            "monday": [ 5, 17, 26, 1 ],
            "tuesday": [ 4, 17, 5, 12 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/22-00,HistoryTime.jpg',
          title: 'History of Time',
          artist: 'Hugh Rankin',
          year: '1922',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 17, 26, 1 ],
            "wednesday": [ 4, 17, 5, 12 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-06,RealDet.jpg',
          title: 'Real Detective',
          artist: 'Alex Redmond',
          year: '1930',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 17, 26, 1 ],
            "thursday": [ 4, 17, 5, 12 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/39-12,SptSty.jpg',
          title: 'Sport Story',
          artist: 'Carl Reed',
          year: '1939',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 18, 27, 2 ],
            "friday": [ 5, 18, 6, 13 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/26-05,Frontier.jpg',
          title: 'The Frontier',
          artist: 'William Reusswig',
          year: '1926',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 18, 27, 2 ],
            "saturday": [ 5, 18, 6, 13 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/29-10,RadioNews.jpg',
          title: 'Radio News',
          artist: 'Gus Ricca',
          year: '1929',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 18, 27, 2 ],
            "sunday": [ 5, 18, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1914-03,ThePop.jpg',
          title: 'The Popular',
          artist: 'Sidney Riesenberg',
          year: '1914',
          rule: {
            "monday": [ 5, 18, 6, 13 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 18, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/38-04,AceSpts2.jpg',
          title: 'Ace Sports',
          artist: 'Robert Robison',
          year: '1938',
          rule: {
            "monday": [ 6, 18, 27, 2 ],
            "tuesday": [ 5, 18, 6, 13 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/16-11-20,Popular.jpg',
          title: 'The Popular',
          artist: 'Norman Rockwell',
          year: '1916',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 18, 27, 2 ],
            "wednesday": [ 5, 18, 6, 13 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-00,GodwinPub.jpg',
          title: 'Godwin Publications',
          artist: 'Fred Rodewald',
          year: '1936',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 18, 27, 2 ],
            "thursday": [ 5, 18, 6, 13 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-12,Ace-High.jpg',
          title: 'Ace-High Magazine',
          artist: 'Hubert Rogers',
          year: '1930',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 19, 28, 3 ],
            "friday": [ 6, 19, 7, 14 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/49-04,CompSpts2.jpg',
          title: 'Complete Sports',
          artist: 'Herb Rogoff',
          year: '1949',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 19, 28, 3 ],
            "saturday": [ 6, 19, 7, 14 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-03,WesternAces1.jpg',
          title: 'Western Aces',
          artist: 'Tom Smith Roots',
          year: '1937',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 19, 28, 3 ],
            "sunday": [ 6, 19, 7, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-05,CmpCwbyNvl.jpg',
          title: 'Complete Cowboy',
          artist: 'A. Leslie Ross',
          year: '1937',
          rule: {
            "monday": [ 6, 19, 7, 14 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 19, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-04,Battle.jpg',
          title: 'Battle Stories',
          artist: 'George Rozen',
          year: '1930',
          rule: {
            "monday": [ 7, 19, 28, 3 ],
            "tuesday": [ 6, 19, 7, 14 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/25-00,Western.jpg',
          title: 'Western Illustration',
          artist: 'Jerome Rozen',
          year: '1925',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 19, 28, 3 ],
            "wednesday": [ 6, 19, 7, 14 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/05-00,FacePool.jpg',
          title: 'The Face In The Pool',
          artist: 'J. Allen St. John',
          year: '1905',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 19, 28, 3 ],
            "thursday": [ 6, 19, 7, 14 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/45-10,FightW1.jpg',
          title: 'Fighting Western',
          artist: 'Al Savitt',
          year: '1945',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 20, 29, 4 ],
            "friday": [ 7, 20, 8, 15 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/39-00,NewW1.jpg',
          title: 'New Western',
          artist: 'Sam Savitt',
          year: '1939',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 20, 29, 4 ],
            "saturday": [ 7, 20, 8, 15 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-05-10,WarS.jpg',
          title: 'War Stories',
          artist: 'Chris Schaare',
          year: '1928',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 20, 29, 4 ],
            "sunday": [ 7, 20, 8, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/27-04,Evrbys.jpg',
          title: 'Everybody\'s',
          artist: 'Jes Schlaikjer',
          year: '1927',
          rule: {
            "monday": [ 7, 20, 8, 15 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 20, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/40-09,KeenDet-Centaur.jpg',
          title: 'Keen Detective',
          artist: 'Mark Schneider',
          year: '1940',
          rule: {
            "monday": [ 8, 20, 29, 4 ],
            "tuesday": [ 7, 20, 8, 15 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/39-04,MvlSciIllus.jpg',
          title: 'Marvel Science',
          artist: 'Alex Schomburg',
          year: '1939',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 20, 29, 4 ],
            "wednesday": [ 7, 20, 8, 15 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/12-00,Illus.JPG',
          title: 'McClure\'s Magazine',
          artist: 'Frank Schoonover',
          year: '1912',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 20, 29, 4 ],
            "thursday": [ 7, 20, 8, 15 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/26-07-10,SS.jpg',
          title: 'Short Stories',
          artist: 'Louis G. Schroeder',
          year: '1926',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 21, 30, 5 ],
            "friday": [ 8, 21, 9, 16 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/44-00,YlwJkt3.jpg',
          title: 'Yellow Jacket Comics',
          artist: 'Gustav Schrotter',
          year: '1944',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 21, 30, 5 ],
            "saturday": [ 8, 21, 9, 16 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/11-08,TheCentury.jpg',
          title: 'The Century',
          artist: 'Remington Schuyler',
          year: '1911',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 21, 30, 5 ],
            "sunday": [ 8, 21, 9, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/26-12,DangerTrl.jpg',
          title: 'Danger Trail',
          artist: 'H. Winfield Scott',
          year: '1926',
          rule: {
            "monday": [ 8, 21, 9, 16 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 21, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-06-23,WS.jpg',
          title: 'Western Story',
          artist: 'J. W. Scott',
          year: '1934',
          rule: {
            "monday": [ 9, 21, 30, 5 ],
            "tuesday": [ 8, 21, 9, 16 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/68-10,WonderWoman.jpg',
          title: 'Wonder Woman',
          artist: 'Mike Sekowsky',
          year: '1968',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 21, 30, 5 ],
            "wednesday": [ 8, 21, 9, 16 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/27-10,WeirdTales.jpg',
          title: 'Weird Tales',
          artist: 'C. C. Senf',
          year: '1927',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 21, 30, 5 ],
            "thursday": [ 8, 21, 9, 16 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/31-01,Clues-037.jpg',
          title: 'Clues Illustrated',
          artist: 'Amos Sewell',
          year: '1931',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 22, 31, 6 ],
            "friday": [ 9, 22, 10, 17 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/46-03,MammothMyst1.jpg',
          title: 'Mammoth Mystery',
          artist: 'Henry Enoch Sharp',
          year: '1946',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 22, 31, 6 ],
            "saturday": [ 9, 22, 10, 17 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/26-03,Hunter.jpg',
          title: 'Hunter Trapper Trader',
          artist: 'J. Clinton Shepherd',
          year: '1926',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 22, 31, 6 ],
            "sunday": [ 9, 22, 10, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-03,RealWestern.jpg',
          title: 'Real Western',
          artist: 'Howard Sherman',
          year: '1935',
          rule: {
            "monday": [ 9, 22, 10, 17 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 22, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/25-03-10,Adv.jpg',
          title: 'Adventure',
          artist: 'Alfred N. Simpkin',
          year: '1925',
          rule: {
            "monday": [ 10, 22, 31, 6 ],
            "tuesday": [ 9, 22, 10, 17 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-05,AceG-Man.jpg',
          title: 'Ace G-Man',
          artist: 'Malvin Singer',
          year: '1936',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 22, 31, 6 ],
            "wednesday": [ 9, 22, 10, 17 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/18-11-25,ChicagoTribune2.jpg',
          title: 'Chicago Tribune',
          artist: 'Raymond Sisley',
          year: '1918',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 22, 31, 6 ],
            "thursday": [ 9, 22, 10, 17 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/13-12,TheAllS.jpg',
          title: 'The All-Story',
          artist: 'Frederic W. Small',
          year: '1913',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 23, 1, 7 ],
            "friday": [ 10, 23, 11, 18 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-05,LoneRanger1.jpg',
          title: 'The Lone Ranger',
          artist: 'H. Smilkstein',
          year: '1937',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 23, 1, 7 ],
            "saturday": [ 10, 23, 11, 18 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/49-00,Century115.jpg',
          title: 'Century Books 115',
          artist: 'Malcolm H. Smith',
          year: '1949',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 23, 1, 7 ],
            "sunday": [ 10, 23, 11, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/32-00,NortonAd.jpg',
          title: 'Norton Advertisement',
          artist: 'Ralph Crosby Smith',
          year: '1932',
          rule: {
            "monday": [ 10, 23, 11, 18 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 23, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/24-12-12,AmLegion.jpg',
          title: 'American Legion',
          artist: 'W. B. Smith',
          year: '1924',
          rule: {
            "monday": [ 11, 23, 1, 7 ],
            "tuesday": [ 10, 23, 11, 18 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-10-06,Newspaper.jpg',
          title: 'Comic Strip',
          artist: 'Marcia Snyder',
          year: '1934',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 23, 1, 7 ],
            "wednesday": [ 10, 23, 11, 18 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-12,AmerBoy.jpg',
          title: 'American Boy',
          artist: 'William F. Soare',
          year: '1930',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 23, 1, 7 ],
            "thursday": [ 10, 23, 11, 18 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-00,Carnack.jpg',
          title: 'Carnack',
          artist: 'Armstrong Sperry',
          year: '1928',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 24, 2, 8 ],
            "friday": [ 11, 24, 12, 19 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/26-04-01,Mystery.jpg',
          title: 'Mystery Magazine',
          artist: 'Alex Spinelli',
          year: '1926',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 24, 2, 8 ],
            "saturday": [ 11, 24, 12, 19 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/29-11,SchLife.jpg',
          title: 'School Life',
          artist: 'Clinton Spooner',
          year: '1929',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 24, 2, 8 ],
            "sunday": [ 11, 24, 12, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 311,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/09-06,Success.jpg',
          title: 'Success Magazine',
          artist: 'C. Clyde Squires',
          year: '1909',
          rule: {
            "monday": [ 11, 24, 12, 19 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 24, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 312,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/14-06-11,Illus.jpg',
          title: 'Illustration',
          artist: 'Paul Stahr',
          year: '1914',
          rule: {
            "monday": [ 12, 24, 2, 8 ],
            "tuesday": [ 11, 24, 12, 19 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 313,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/39-04,ThrllW.jpg',
          title: 'Thrilling Western',
          artist: 'Robert Stanley',
          year: '1939',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 24, 2, 8 ],
            "wednesday": [ 11, 24, 12, 19 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 314,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/33-00,LittleMen.jpg',
          title: 'Little Men',
          artist: 'Harve Stein',
          year: '1933',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 24, 2, 8 ],
            "thursday": [ 11, 24, 12, 19 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 315,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/14-04-04,AllSW.jpeg',
          title: 'All Story Weekly',
          artist: 'Modest Stein',
          year: '1914',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 25, 3, 9 ],
            "friday": [ 12, 25, 13, 20 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 316,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/06-06,McClures.jpg',
          title: 'McClure\'s',
          artist: 'Dalton Stevens',
          year: '1906',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 25, 3, 9 ],
            "saturday": [ 12, 25, 13, 20 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 317,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/43-12,FF_M.jpg',
          title: 'Fantastic Mysteries',
          artist: 'Lawrence Sterne Stevens',
          year: '1943',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 25, 3, 9 ],
            "sunday": [ 12, 25, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 318,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/43-01,Argosy.jpg',
          title: 'Argosy',
          artist: 'Peter Stevens',
          year: '1943',
          rule: {
            "monday": [ 12, 25, 13, 20 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 25, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 319,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/05-11,Harpers.jpg',
          title: 'Harper\'s Monthly',
          artist: 'William D. Stevens',
          year: '1905',
          rule: {
            "monday": [ 13, 25, 3, 9 ],
            "tuesday": [ 12, 25, 13, 20 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 320,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/14-08-30,Newspaper.jpg',
          title: 'Iowa Newspaper',
          artist: 'Margery Stocking',
          year: '1914',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 25, 3, 9 ],
            "wednesday": [ 12, 25, 13, 20 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 321,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/42-05,LoveIllus.jpg',
          title: 'Love Illustration',
          artist: 'Gloria Stoll',
          year: '1942',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 25, 3, 9 ],
            "thursday": [ 12, 25, 13, 20 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 322,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/15-06,Yearbook.jpg',
          title: 'High School Year Book',
          artist: 'Marland Stone',
          year: '1915',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 26, 4, 10 ],
            "friday": [ 13, 26, 14, 21 ],
            "saturday": [ 19, 1, 9, 15 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 323,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-08,SpcyMyst-076.jpg',
          title: 'Spicy Mystery',
          artist: 'Paul H. Stone',
          year: '1935',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 26, 4, 10 ],
            "saturday": [ 13, 26, 14, 21 ],
            "sunday": [ 19, 1, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 324,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/17-00,Peanut.jpg',
          title: 'Mr. Peanut',
          artist: 'Elmer C. Stoner',
          year: '1917',
          rule: {
            "monday": [ 19, 1, 9, 15 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 26, 4, 10 ],
            "sunday": [ 13, 26, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 325,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-00,BB.jpg',
          title: 'Interior Illustration',
          artist: 'Herbert Morton Stoops',
          year: '1930',
          rule: {
            "monday": [ 13, 26, 14, 21 ],
            "tuesday": [ 19, 1, 9, 15 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 26, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 326,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/19-08-03,Adv.jpg',
          title: 'Adventure',
          artist: 'Paul Strayer',
          year: '1919',
          rule: {
            "monday": [ 14, 26, 4, 10 ],
            "tuesday": [ 13, 26, 14, 21 ],
            "wednesday": [ 19, 1, 9, 15 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 327,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/29-10,FvNvls2.jpg',
          title: 'Five-Novels',
          artist: 'William Streib',
          year: '1929',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 26, 4, 10 ],
            "wednesday": [ 13, 26, 14, 21 ],
            "thursday": [ 19, 1, 9, 15 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 328,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/20-00,Newspaper.jpg',
          title: 'Newspaper Comic',
          artist: 'John H. Striebel',
          year: '1920',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 26, 4, 10 ],
            "thursday": [ 13, 26, 14, 21 ],
            "friday": [ 19, 1, 9, 15 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 329,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/50-05,Pirates.jpg',
          title: 'Pirates Comics',
          artist: 'Michael Suchorsky',
          year: '1940',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 27, 5, 11 ],
            "friday": [ 14, 27, 15, 22 ],
            "saturday": [ 20, 2, 10, 16 ],
            "sunday": [ 19, 1, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 330,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-02,AllStarAdv1.jpg',
          title: 'All Star Adventure',
          artist: 'Charles Sultan',
          year: '1937',
          rule: {
            "monday": [ 19, 1, 9, 15 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 27, 5, 11 ],
            "saturday": [ 14, 27, 15, 22 ],
            "sunday": [ 20, 2, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 331,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-03,PirateS.jpg',
          title: 'Pirate Stories',
          artist: 'Joseph Szokoli',
          year: '1935',
          rule: {
            "monday": [ 20, 2, 10, 16 ],
            "tuesday": [ 19, 1, 9, 15 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 27, 5, 11 ],
            "sunday": [ 14, 27, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 332,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/11-07-23,WshngtnPost.jpg',
          title: 'Washington Post',
          artist: 'Raymond Thayer',
          year: '1911',
          rule: {
            "monday": [ 14, 27, 15, 22 ],
            "tuesday": [ 20, 2, 10, 16 ],
            "wednesday": [ 19, 1, 9, 15 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 27, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 333,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/29-04,MystS.jpg',
          title: 'Mystery Stories',
          artist: 'Wilbur Thomas',
          year: '1929',
          rule: {
            "monday": [ 15, 27, 5, 11 ],
            "tuesday": [ 14, 27, 15, 22 ],
            "wednesday": [ 20, 2, 10, 16 ],
            "thursday": [ 19, 1, 9, 15 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 334,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/27-02-05,LoveS.jpg',
          title: 'Love Story',
          artist: 'C. R. Thomson',
          year: '1927',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 27, 5, 11 ],
            "wednesday": [ 14, 27, 15, 22 ],
            "thursday": [ 20, 2, 10, 16 ],
            "friday": [ 19, 1, 9, 15 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 335,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-11-17,Newspaper.jpg',
          title: 'Sports Comic',
          artist: 'Jimmy Thompson',
          year: '1928',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 27, 5, 11 ],
            "thursday": [ 14, 27, 15, 22 ],
            "friday": [ 20, 2, 10, 16 ],
            "saturday": [ 19, 1, 9, 15 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 336,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-03,BigMag.jpg',
          title: 'The Big Magazine',
          artist: 'A. R. Tilburne',
          year: '1935',
          rule: {
            "monday": [ 19, 1, 9, 15 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 28, 6, 12 ],
            "friday": [ 15, 28, 16, 23 ],
            "saturday": [ 21, 3, 11, 17 ],
            "sunday": [ 20, 2, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 337,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-07-13,WS.jpg',
          title: 'Western Story',
          artist: 'William F. Timmins',
          year: '1935',
          rule: {
            "monday": [ 20, 2, 10, 16 ],
            "tuesday": [ 19, 1, 9, 15 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 28, 6, 12 ],
            "saturday": [ 15, 28, 16, 23 ],
            "sunday": [ 21, 3, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 338,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-04,BllBrns.jpg',
          title: 'Bill Barnes',
          artist: 'Frank Tinsley',
          year: '1934',
          rule: {
            "monday": [ 21, 3, 11, 17 ],
            "tuesday": [ 20, 2, 10, 16 ],
            "wednesday": [ 19, 1, 9, 15 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 28, 6, 12 ],
            "sunday": [ 15, 28, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 339,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/22-08-24,Newspaper.jpg',
          title: 'Newspaper',
          artist: 'Robert Todd',
          year: '1922',
          rule: {
            "monday": [ 15, 28, 16, 23 ],
            "tuesday": [ 21, 3, 11, 17 ],
            "wednesday": [ 20, 2, 10, 16 ],
            "thursday": [ 19, 1, 9, 15 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 28, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 340,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/26-09-11.SEP.jpg',
          title: 'Saturday Evening Post',
          artist: 'Lawrence Toney',
          year: '1926',
          rule: {
            "monday": [ 16, 28, 6, 12 ],
            "tuesday": [ 15, 28, 16, 23 ],
            "wednesday": [ 21, 3, 11, 17 ],
            "thursday": [ 20, 2, 10, 16 ],
            "friday": [ 19, 1, 9, 15 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 341,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/40-00,StillLife.jpg',
          title: 'Student Still-Life',
          artist: 'William Trauth',
          year: '1940',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 28, 6, 12 ],
            "wednesday": [ 15, 28, 16, 23 ],
            "thursday": [ 21, 3, 11, 17 ],
            "friday": [ 20, 2, 10, 16 ],
            "saturday": [ 19, 1, 9, 15 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 342,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/02-12,Democrat.jpg',
          title: 'The Democrat',
          artist: 'C. Warde Traver',
          year: '1902',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 28, 6, 12 ],
            "thursday": [ 15, 28, 16, 23 ],
            "friday": [ 21, 3, 11, 17 ],
            "saturday": [ 20, 2, 10, 16 ],
            "sunday": [ 19, 1, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 343,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-02-10,SS1.jpg',
          title: 'Short Stories',
          artist: 'Page Trotter',
          year: '1928',
          rule: {
            "monday": [ 20, 2, 10, 16 ],
            "tuesday": [ 19, 1, 9, 15 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 29, 7, 13 ],
            "friday": [ 16, 29, 17, 24 ],
            "saturday": [ 22, 4, 12, 18 ],
            "sunday": [ 21, 3, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 344,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/33-05-05,TheSun1.jpg',
          title: 'The N.Y. Sun',
          artist: 'Rafael Valdivia',
          year: '1933',
          rule: {
            "monday": [ 21, 3, 11, 17 ],
            "tuesday": [ 20, 2, 10, 16 ],
            "wednesday": [ 19, 1, 9, 15 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 29, 7, 13 ],
            "saturday": [ 16, 29, 17, 24 ],
            "sunday": [ 22, 4, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 345,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/52-01,Amaz129.jpg',
          title: 'Amazing - illustration',
          artist: 'Ed Valigursky',
          year: '1952',
          rule: {
            "monday": [ 22, 4, 12, 18 ],
            "tuesday": [ 21, 3, 11, 17 ],
            "wednesday": [ 20, 2, 10, 16 ],
            "thursday": [ 19, 1, 9, 15 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 29, 7, 13 ],
            "sunday": [ 16, 29, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 346,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/50-09,SuperScience.jpg',
          title: 'Super Science',
          artist: 'H. R. Van Dongen',
          year: '1950',
          rule: {
            "monday": [ 16, 29, 17, 24 ],
            "tuesday": [ 22, 4, 12, 18 ],
            "wednesday": [ 21, 3, 11, 17 ],
            "thursday": [ 20, 2, 10, 16 ],
            "friday": [ 19, 1, 9, 15 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 29, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 347,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/43-00,Newspaper.jpg',
          title: 'Newspaper Article',
          artist: 'Herman Vestal',
          year: '1943',
          rule: {
            "monday": [ 17, 29, 7, 13 ],
            "tuesday": [ 16, 29, 17, 24 ],
            "wednesday": [ 22, 4, 12, 18 ],
            "thursday": [ 21, 3, 11, 17 ],
            "friday": [ 20, 2, 10, 16 ],
            "saturday": [ 19, 1, 9, 15 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 348,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-06,RealW.jpg',
          title: 'Real Western',
          artist: 'Frank Volp',
          year: '1935',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 29, 7, 13 ],
            "wednesday": [ 16, 29, 17, 24 ],
            "thursday": [ 22, 4, 12, 18 ],
            "friday": [ 21, 3, 11, 17 ],
            "saturday": [ 20, 2, 10, 16 ],
            "sunday": [ 19, 1, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 349,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-00,Strativari.jpg',
          title: 'Stratavari',
          artist: 'Oren Waggener',
          year: '1937',
          rule: {
            "monday": [ 19, 1, 9, 15 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 29, 7, 13 ],
            "thursday": [ 16, 29, 17, 24 ],
            "friday": [ 22, 4, 12, 18 ],
            "saturday": [ 21, 3, 11, 17 ],
            "sunday": [ 20, 2, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 350,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/31-12-09,West.jpg',
          title: 'West',
          artist: 'Stephen Waite',
          year: '1931',
          rule: {
            "monday": [ 21, 3, 11, 17 ],
            "tuesday": [ 20, 2, 10, 16 ],
            "wednesday": [ 19, 1, 9, 15 ],
            "thursday": [ 18, 30, 8, 14 ],
            "friday": [ 17, 30, 18, 25 ],
            "saturday": [ 23, 5, 13, 19 ],
            "sunday": [ 22, 4, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 351,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-06,SpcyMyst.jpg',
          title: 'Spicy Mystery',
          artist: 'H. J. Ward',
          year: '1935',
          rule: {
            "monday": [ 22, 4, 12, 18 ],
            "tuesday": [ 21, 3, 11, 17 ],
            "wednesday": [ 20, 2, 10, 16 ],
            "thursday": [ 19, 1, 9, 15 ],
            "friday": [ 18, 30, 8, 14 ],
            "saturday": [ 17, 30, 18, 25 ],
            "sunday": [ 23, 5, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 352,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/23-09,PractlElec.jpg',
          title: 'Practical Electrics',
          artist: 'R. C. Wardell',
          year: '1923',
          rule: {
            "monday": [ 23, 5, 13, 19 ],
            "tuesday": [ 22, 4, 12, 18 ],
            "wednesday": [ 21, 3, 11, 17 ],
            "thursday": [ 20, 2, 10, 16 ],
            "friday": [ 19, 1, 9, 15 ],
            "saturday": [ 18, 30, 8, 14 ],
            "sunday": [ 17, 30, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 353,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-12,Screenland.jpg',
          title: 'Screenland',
          artist: 'Georgia Warren',
          year: '1928',
          rule: {
            "monday": [ 17, 30, 18, 25 ],
            "tuesday": [ 23, 5, 13, 19 ],
            "wednesday": [ 22, 4, 12, 18 ],
            "thursday": [ 21, 3, 11, 17 ],
            "friday": [ 20, 2, 10, 16 ],
            "saturday": [ 19, 1, 9, 15 ],
            "sunday": [ 18, 30, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 354,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/02-05-03,Newspaper.jpg',
          title: 'Newspaper',
          artist: 'Jack A. Warren',
          year: '1902',
          rule: {
            "monday": [ 18, 30, 8, 14 ],
            "tuesday": [ 17, 30, 18, 25 ],
            "wednesday": [ 23, 5, 13, 19 ],
            "thursday": [ 22, 4, 12, 18 ],
            "friday": [ 21, 3, 11, 17 ],
            "saturday": [ 20, 2, 10, 16 ],
            "sunday": [ 19, 1, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 355,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-00,Illus.jpg',
          title: 'Story Illustration',
          artist: 'Emmett Watson',
          year: '1928',
          rule: {
            "monday": [ 19, 1, 9, 15 ],
            "tuesday": [ 18, 30, 8, 14 ],
            "wednesday": [ 17, 30, 18, 25 ],
            "thursday": [ 23, 5, 13, 19 ],
            "friday": [ 22, 4, 12, 18 ],
            "saturday": [ 21, 3, 11, 17 ],
            "sunday": [ 20, 2, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 356,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-11,WAces.jpg',
          title: 'Western Aces',
          artist: 'Irwin J. Weill',
          year: '1936',
          rule: {
            "monday": [ 20, 2, 10, 16 ],
            "tuesday": [ 19, 1, 9, 15 ],
            "wednesday": [ 18, 30, 8, 14 ],
            "thursday": [ 17, 30, 18, 25 ],
            "friday": [ 23, 5, 13, 19 ],
            "saturday": [ 22, 4, 12, 18 ],
            "sunday": [ 21, 3, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 357,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/24-08-10,SS.jpg',
          title: 'Short Stories',
          artist: 'George H. Wert',
          year: '1924',
          rule: {
            "monday": [ 22, 4, 12, 18 ],
            "tuesday": [ 21, 3, 11, 17 ],
            "wednesday": [ 20, 2, 10, 16 ],
            "thursday": [ 19, 31, 9, 15 ],
            "friday": [ 18, 31, 19, 26 ],
            "saturday": [ 24, 6, 14, 20 ],
            "sunday": [ 23, 5, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 358,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-01,Ast.jpeg',
          title: 'Astounding Stories',
          artist: 'H. W. Wesso',
          year: '1930',
          rule: {
            "monday": [ 23, 5, 13, 19 ],
            "tuesday": [ 22, 4, 12, 18 ],
            "wednesday": [ 21, 3, 11, 17 ],
            "thursday": [ 20, 2, 10, 16 ],
            "friday": [ 19, 31, 9, 15 ],
            "saturday": [ 18, 31, 19, 26 ],
            "sunday": [ 24, 6, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 359,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-05,Exciting.jpg',
          title: 'Exciting Comics',
          artist: 'Elmer Wexler',
          year: '1941',
          rule: {
            "monday": [ 24, 6, 14, 20 ],
            "tuesday": [ 23, 5, 13, 19 ],
            "wednesday": [ 22, 4, 12, 18 ],
            "thursday": [ 21, 3, 11, 17 ],
            "friday": [ 20, 2, 10, 16 ],
            "saturday": [ 19, 31, 9, 15 ],
            "sunday": [ 18, 31, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 360,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/42-00,WW2Poster.jpg',
          title: 'Army Info Poster',
          artist: 'Maurice Whitman',
          year: '1942',
          rule: {
            "monday": [ 18, 31, 19, 26 ],
            "tuesday": [ 24, 6, 14, 20 ],
            "wednesday": [ 23, 5, 13, 19 ],
            "thursday": [ 22, 4, 12, 18 ],
            "friday": [ 21, 3, 11, 17 ],
            "saturday": [ 20, 2, 10, 16 ],
            "sunday": [ 19, 31, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 361,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-07,Skyman.jpg',
          title: 'Skyman Comics',
          artist: 'Ogden Whitney',
          year: '1941',
          rule: {
            "monday": [ 19, 31, 9, 15 ],
            "tuesday": [ 18, 31, 19, 26 ],
            "wednesday": [ 24, 6, 14, 20 ],
            "thursday": [ 23, 5, 13, 19 ],
            "friday": [ 22, 4, 12, 18 ],
            "saturday": [ 21, 3, 11, 17 ],
            "sunday": [ 20, 2, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 362,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/32-12,WeirdTales.jpg',
          title: 'Weird Tales',
          artist: 'J. M. Wilcox',
          year: '1933',
          rule: {
            "monday": [ 20, 2, 10, 16 ],
            "tuesday": [ 19, 31, 9, 15 ],
            "wednesday": [ 18, 31, 19, 26 ],
            "thursday": [ 24, 6, 14, 20 ],
            "friday": [ 23, 5, 13, 19 ],
            "saturday": [ 22, 4, 12, 18 ],
            "sunday": [ 21, 3, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 363,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/02-00,LeopardsSpots.jpg',
          title: 'Book Illustration',
          artist: 'C. D. Williams',
          year: '1902',
          rule: {
            "monday": [ 21, 3, 11, 17 ],
            "tuesday": [ 20, 2, 10, 16 ],
            "wednesday": [ 19, 31, 9, 15 ],
            "thursday": [ 18, 31, 19, 26 ],
            "friday": [ 24, 6, 14, 20 ],
            "saturday": [ 23, 5, 13, 19 ],
            "sunday": [ 22, 4, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 364,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/40-03,Champion.jpg',
          title: 'Champion Comics',
          artist: 'Ray Willner',
          year: '1940',
          rule: {
            "monday": [ 23, 5, 13, 19 ],
            "tuesday": [ 22, 4, 12, 18 ],
            "wednesday": [ 21, 3, 11, 17 ],
            "thursday": [ 20, 1, 10, 16 ],
            "friday": [ 19, 1, 20, 27 ],
            "saturday": [ 25, 7, 15, 21 ],
            "sunday": [ 24, 5, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 365,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/31-06-13,AllSLv1.jpg',
          title: 'All-Story Love',
          artist: 'George Wilson',
          year: '1931',
          rule: {
            "monday": [ 24, 5, 14, 20 ],
            "tuesday": [ 23, 5, 13, 19 ],
            "wednesday": [ 22, 4, 12, 18 ],
            "thursday": [ 21, 3, 11, 17 ],
            "friday": [ 20, 1, 10, 16 ],
            "saturday": [ 19, 1, 20, 27 ],
            "sunday": [ 25, 7, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 366,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/50-02,GldnWRom.jpg',
          title: 'Golden West Romance',
          artist: 'Kirk Wilson',
          year: '1950',
          rule: {
            "monday": [ 25, 7, 15, 21 ],
            "tuesday": [ 24, 5, 14, 20 ],
            "wednesday": [ 23, 5, 13, 19 ],
            "thursday": [ 22, 4, 12, 18 ],
            "friday": [ 21, 3, 11, 17 ],
            "saturday": [ 20, 1, 10, 16 ],
            "sunday": [ 19, 1, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 367,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/18-12-23,SciAmer.jpg',
          title: 'Scientific American',
          artist: 'Edgar Franklin Wittmack',
          year: '1918',
          rule: {
            "monday": [ 19, 1, 20, 27 ],
            "tuesday": [ 25, 7, 15, 21 ],
            "wednesday": [ 24, 5, 14, 20 ],
            "thursday": [ 23, 5, 13, 19 ],
            "friday": [ 22, 4, 12, 18 ],
            "saturday": [ 21, 3, 11, 17 ],
            "sunday": [ 20, 1, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 368,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/29-00,Stranded.jpg',
          title: 'Stranded',
          artist: 'Frederick Witton',
          year: '1929',
          rule: {
            "monday": [ 20, 1, 10, 16 ],
            "tuesday": [ 19, 1, 20, 27 ],
            "wednesday": [ 25, 7, 15, 21 ],
            "thursday": [ 24, 5, 14, 20 ],
            "friday": [ 23, 5, 13, 19 ],
            "saturday": [ 22, 4, 12, 18 ],
            "sunday": [ 21, 3, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 369,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/50-06,Six-GunW.jpg',
          title: 'Six-Gun Western',
          artist: 'Wally Wood',
          year: '1950',
          rule: {
            "monday": [ 21, 3, 11, 17 ],
            "tuesday": [ 20, 1, 10, 16 ],
            "wednesday": [ 19, 1, 20, 27 ],
            "thursday": [ 25, 7, 15, 21 ],
            "friday": [ 24, 5, 14, 20 ],
            "saturday": [ 23, 5, 13, 19 ],
            "sunday": [ 22, 4, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 370,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/39-11-25,LoveStory.jpg',
          title: 'Love Story',
          artist: 'J. Clark Work',
          year: '1939',
          rule: {
            "monday": [ 22, 4, 12, 18 ],
            "tuesday": [ 21, 3, 11, 17 ],
            "wednesday": [ 20, 1, 10, 16 ],
            "thursday": [ 19, 1, 20, 27 ],
            "friday": [ 25, 7, 15, 21 ],
            "saturday": [ 24, 5, 14, 20 ],
            "sunday": [ 23, 5, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 371,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/10-00,YellowBk.jpg',
          title: 'Yellow Book #7',
          artist: 'Charles Wrenn',
          year: '1910',
          rule: {
            "monday": [ 24, 6, 14, 20 ],
            "tuesday": [ 23, 5, 13, 19 ],
            "wednesday": [ 22, 4, 12, 18 ],
            "thursday": [ 21, 2, 1, 17 ],
            "friday": [ 20, 2, 21, 28 ],
            "saturday": [ 26, 8, 16, 22 ],
            "sunday": [ 25, 6, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 372,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/26-00,Advert.jpg',
          title: 'Advertisement',
          artist: 'Xena Wright',
          year: '1926',
          rule: {
            "monday": [ 25, 6, 15, 21 ],
            "tuesday": [ 24, 6, 14, 20 ],
            "wednesday": [ 23, 5, 13, 19 ],
            "thursday": [ 22, 4, 12, 18 ],
            "friday": [ 21, 2, 1, 17 ],
            "saturday": [ 20, 2, 21, 28 ],
            "sunday": [ 26, 8, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 373,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-00,SwampGirl.jpg',
          title: 'The No-Nation Girl',
          artist: 'Irene Zimmermann',
          year: '1930',
          rule: {
            "monday": [ 26, 8, 16, 22 ],
            "tuesday": [ 25, 6, 15, 21 ],
            "wednesday": [ 24, 6, 14, 20 ],
            "thursday": [ 23, 5, 13, 19 ],
            "friday": [ 22, 4, 12, 18 ],
            "saturday": [ 21, 2, 1, 17 ],
            "sunday": [ 20, 2, 21, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 374,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/33-01-2,AceHigh.jpg',
          title: '2nd Ace-High',
          artist: 'Rudolph Zirm',
          year: '1933',
          rule: {
            "monday": [ 20, 2, 21, 28 ],
            "tuesday": [ 26, 8, 16, 22 ],
            "wednesday": [ 25, 6, 15, 21 ],
            "thursday": [ 24, 6, 14, 20 ],
            "friday": [ 23, 5, 13, 19 ],
            "saturday": [ 22, 4, 12, 18 ],
            "sunday": [ 21, 2, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 375,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/47-01,Target.jpg',
          title: 'Target Comics',
          artist: 'Nina Albright',
          year: '1947',
          rule: {
            "monday": [ 21, 2, 1, 17 ],
            "tuesday": [ 20, 2, 21, 28 ],
            "wednesday": [ 26, 8, 16, 22 ],
            "thursday": [ 25, 6, 15, 21 ],
            "friday": [ 24, 6, 14, 20 ],
            "saturday": [ 23, 5, 13, 19 ],
            "sunday": [ 22, 4, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 376,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/40-07,Master.jpg',
          title: 'Master Comics',
          artist: 'Newton H. Alfred',
          year: '1940',
          rule: {
            "monday": [ 22, 4, 12, 18 ],
            "tuesday": [ 21, 2, 1, 17 ],
            "wednesday": [ 20, 2, 21, 28 ],
            "thursday": [ 26, 8, 16, 22 ],
            "friday": [ 25, 6, 15, 21 ],
            "saturday": [ 24, 6, 14, 20 ],
            "sunday": [ 23, 5, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 377,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/20-00,McClures.jpg',
          title: 'McClure\'s',
          artist: 'J. E. Allen',
          year: '1920',
          rule: {
            "monday": [ 23, 5, 13, 19 ],
            "tuesday": [ 22, 4, 12, 18 ],
            "wednesday": [ 21, 2, 1, 17 ],
            "thursday": [ 20, 2, 21, 28 ],
            "friday": [ 26, 8, 16, 22 ],
            "saturday": [ 25, 6, 15, 21 ],
            "sunday": [ 24, 6, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 378,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/09-02,TechWrld.jpg',
          title: 'Technical World',
          artist: 'W. M. Allison',
          year: '1909',
          rule: {
            "monday": [ 25, 7, 15, 21 ],
            "tuesday": [ 24, 6, 14, 20 ],
            "wednesday": [ 23, 5, 13, 19 ],
            "thursday": [ 22, 3, 2, 18 ],
            "friday": [ 21, 3, 22, 29 ],
            "saturday": [ 27, 9, 17, 23 ],
            "sunday": [ 26, 7, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 379,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1941-12,SpicyAdv.jpg',
          title: 'Spicy Adventure',
          artist: 'Allen Anderson',
          year: '1941',
          rule: {
            "monday": [ 26, 7, 16, 22 ],
            "tuesday": [ 25, 7, 15, 21 ],
            "wednesday": [ 24, 6, 14, 20 ],
            "thursday": [ 23, 5, 13, 19 ],
            "friday": [ 22, 3, 2, 18 ],
            "saturday": [ 21, 3, 22, 29 ],
            "sunday": [ 27, 9, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 380,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/21-07,TheAmer2.jpg',
          title: 'The American',
          artist: 'Frederic A. Anderson',
          year: '1921',
          rule: {
            "monday": [ 27, 9, 17, 23 ],
            "tuesday": [ 26, 7, 16, 22 ],
            "wednesday": [ 25, 7, 15, 21 ],
            "thursday": [ 24, 6, 14, 20 ],
            "friday": [ 23, 5, 13, 19 ],
            "saturday": [ 22, 3, 2, 18 ],
            "sunday": [ 21, 3, 22, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 381,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/41-12,VictoryComics.jpg',
          title: 'Victory Comics',
          artist: 'Harry V. R. Anderson',
          year: '1941',
          rule: {
            "monday": [ 21, 3, 22, 29 ],
            "tuesday": [ 27, 9, 17, 23 ],
            "wednesday": [ 26, 7, 16, 22 ],
            "thursday": [ 25, 7, 15, 21 ],
            "friday": [ 24, 6, 14, 20 ],
            "saturday": [ 23, 5, 13, 19 ],
            "sunday": [ 22, 3, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 382,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-00,Interior2.jpg',
          title: 'Clues illustrated',
          artist: 'Lyman Anderson',
          year: '1930',
          rule: {
            "monday": [ 22, 3, 2, 18 ],
            "tuesday": [ 21, 3, 22, 29 ],
            "wednesday": [ 27, 9, 17, 23 ],
            "thursday": [ 26, 7, 16, 22 ],
            "friday": [ 25, 7, 15, 21 ],
            "saturday": [ 24, 6, 14, 20 ],
            "sunday": [ 23, 5, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 383,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/45-00,PlntCmx.jpg',
          title: 'Planet Comics',
          artist: 'Murphy Anderson',
          year: '1945',
          rule: {
            "monday": [ 23, 5, 13, 19 ],
            "tuesday": [ 22, 3, 2, 18 ],
            "wednesday": [ 21, 3, 22, 29 ],
            "thursday": [ 27, 9, 17, 23 ],
            "friday": [ 26, 7, 16, 22 ],
            "saturday": [ 25, 7, 15, 21 ],
            "sunday": [ 24, 6, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 384,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/27-12-23,Newspaper.jpg',
          title: 'Newspaper',
          artist: 'Joe Archibald',
          year: '1927',
          rule: {
            "monday": [ 24, 6, 14, 20 ],
            "tuesday": [ 23, 5, 13, 19 ],
            "wednesday": [ 22, 3, 2, 18 ],
            "thursday": [ 21, 3, 22, 29 ],
            "friday": [ 27, 9, 17, 23 ],
            "saturday": [ 26, 7, 16, 22 ],
            "sunday": [ 25, 7, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 385,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/50-00,FantPubCo-18.jpg',
          title: 'book cover',
          artist: 'Jon Arfstrom',
          year: '1950',
          rule: {
            "monday": [ 26, 8, 16, 22 ],
            "tuesday": [ 25, 7, 15, 21 ],
            "wednesday": [ 24, 6, 14, 20 ],
            "thursday": [ 23, 4, 3, 19 ],
            "friday": [ 22, 4, 23, 30 ],
            "saturday": [ 28, 10, 18, 24 ],
            "sunday": [ 27, 8, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 386,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/40-06,TopNotch.jpg',
          title: 'Top-Notch',
          artist: 'Ed Ashe, Jr.',
          year: '1940',
          rule: {
            "monday": [ 27, 8, 17, 23 ],
            "tuesday": [ 26, 8, 16, 22 ],
            "wednesday": [ 25, 7, 15, 21 ],
            "thursday": [ 24, 6, 14, 20 ],
            "friday": [ 23, 4, 3, 19 ],
            "saturday": [ 22, 4, 23, 30 ],
            "sunday": [ 28, 10, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 387,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/42-07,Samar.jpg',
          title: 'Samar',
          artist: 'Raphael Astarita',
          year: '1942',
          rule: {
            "monday": [ 28, 10, 18, 24 ],
            "tuesday": [ 27, 8, 17, 23 ],
            "wednesday": [ 26, 8, 16, 22 ],
            "thursday": [ 25, 7, 15, 21 ],
            "friday": [ 24, 6, 14, 20 ],
            "saturday": [ 23, 4, 3, 19 ],
            "sunday": [ 22, 4, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 388,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/19-11,TheCentury.jpg',
          title: 'The Century',
          artist: 'George Avison',
          year: '1919',
          rule: {
            "monday": [ 22, 4, 23, 30 ],
            "tuesday": [ 28, 10, 18, 24 ],
            "wednesday": [ 27, 8, 17, 23 ],
            "thursday": [ 26, 8, 16, 22 ],
            "friday": [ 25, 7, 15, 21 ],
            "saturday": [ 24, 6, 14, 20 ],
            "sunday": [ 23, 4, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 389,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/39-00,CliffCornwall2.jpg',
          title: 'Cliff Cornwall',
          artist: 'John E. Ayman',
          year: '1940',
          rule: {
            "monday": [ 23, 4, 3, 19 ],
            "tuesday": [ 22, 4, 23, 30 ],
            "wednesday": [ 28, 10, 18, 24 ],
            "thursday": [ 27, 8, 17, 23 ],
            "friday": [ 26, 8, 16, 22 ],
            "saturday": [ 25, 7, 15, 21 ],
            "sunday": [ 24, 6, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 390,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/28-01-28,LoveS.jpg',
          title: 'Love Story',
          artist: 'Constance Benson Bailey',
          year: '1928',
          rule: {
            "monday": [ 24, 6, 14, 20 ],
            "tuesday": [ 23, 4, 3, 19 ],
            "wednesday": [ 22, 4, 23, 30 ],
            "thursday": [ 28, 10, 18, 24 ],
            "friday": [ 27, 8, 17, 23 ],
            "saturday": [ 26, 8, 16, 22 ],
            "sunday": [ 25, 7, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 391,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/20-00,GypsyGirl.jpg',
          title: 'Gypsy Girl',
          artist: 'Adolphe Barreaux',
          year: '1920',
          rule: {
            "monday": [ 25, 7, 15, 21 ],
            "tuesday": [ 24, 6, 14, 20 ],
            "wednesday": [ 23, 4, 3, 19 ],
            "thursday": [ 22, 4, 23, 30 ],
            "friday": [ 28, 10, 18, 24 ],
            "saturday": [ 27, 8, 17, 23 ],
            "sunday": [ 26, 8, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 392,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/50-05,ExcW.jpg',
          title: 'Exciting Western',
          artist: 'Harry Barton',
          year: '1950',
          rule: {
            "monday": [ 27, 9, 17, 23 ],
            "tuesday": [ 26, 8, 16, 22 ],
            "wednesday": [ 25, 7, 15, 21 ],
            "thursday": [ 24, 5, 4, 20 ],
            "friday": [ 23, 5, 24, 31 ],
            "saturday": [ 29, 11, 19, 25 ],
            "sunday": [ 28, 9, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 393,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/44-00,Mystery2.jpg',
          title: 'Mystery Comics',
          artist: 'Ken Battefield',
          year: '1944',
          rule: {
            "monday": [ 28, 9, 18, 24 ],
            "tuesday": [ 27, 9, 17, 23 ],
            "wednesday": [ 26, 8, 16, 22 ],
            "thursday": [ 25, 7, 15, 21 ],
            "friday": [ 24, 5, 4, 20 ],
            "saturday": [ 23, 5, 24, 31 ],
            "sunday": [ 29, 11, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 394,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1933-03,Doc.jpg',
          title: 'Doc Savage',
          artist: 'Walter Baumhofer',
          year: '1933',
          rule: {
            "monday": [ 29, 11, 19, 25 ],
            "tuesday": [ 28, 9, 18, 24 ],
            "wednesday": [ 27, 9, 17, 23 ],
            "thursday": [ 26, 8, 16, 22 ],
            "friday": [ 25, 7, 15, 21 ],
            "saturday": [ 24, 5, 4, 20 ],
            "sunday": [ 23, 5, 24, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 395,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/30-00,GrossetDunlap.jpg',
          title: 'Grosset & Dunlap',
          artist: 'Robb Beebe',
          year: '1930',
          rule: {
            "monday": [ 23, 5, 24, 31 ],
            "tuesday": [ 29, 11, 19, 25 ],
            "wednesday": [ 28, 9, 18, 24 ],
            "thursday": [ 27, 9, 17, 23 ],
            "friday": [ 26, 8, 16, 22 ],
            "saturday": [ 25, 7, 15, 21 ],
            "sunday": [ 24, 5, 4, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 396,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/34-09,Wings.jpg',
          title: 'Wings',
          artist: 'Rudolph Belarski',
          year: '1934',
          rule: {
            "monday": [ 24, 5, 4, 20 ],
            "tuesday": [ 23, 5, 24, 31 ],
            "wednesday": [ 29, 11, 19, 25 ],
            "thursday": [ 28, 9, 18, 24 ],
            "friday": [ 27, 9, 17, 23 ],
            "saturday": [ 26, 8, 16, 22 ],
            "sunday": [ 25, 7, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 397,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/55-03,BestWb.jpg',
          title: 'Best Western',
          artist: 'Jim Bentley',
          year: '1955',
          rule: {
            "monday": [ 25, 7, 15, 21 ],
            "tuesday": [ 24, 5, 4, 20 ],
            "wednesday": [ 23, 5, 24, 31 ],
            "thursday": [ 29, 11, 19, 25 ],
            "friday": [ 28, 9, 18, 24 ],
            "saturday": [ 27, 9, 17, 23 ],
            "sunday": [ 26, 8, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 398,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/.jpg',
          title: 'Ace Mystery',
          artist: 'David Berger',
          year: '1936',
          rule: {
            "monday": [ 26, 8, 16, 22 ],
            "tuesday": [ 25, 7, 15, 21 ],
            "wednesday": [ 24, 5, 4, 20 ],
            "thursday": [ 23, 5, 24, 31 ],
            "friday": [ 29, 11, 19, 25 ],
            "saturday": [ 28, 9, 18, 24 ],
            "sunday": [ 27, 9, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 399,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-03,GayBk.jpg',
          title: 'Gay Book',
          artist: 'Earle Bergey',
          year: '1937',
          rule: {
            "monday": [ 28, 10, 18, 24 ],
            "tuesday": [ 27, 9, 17, 23 ],
            "wednesday": [ 26, 8, 16, 22 ],
            "thursday": [ 25, 6, 5, 21 ],
            "friday": [ 24, 6, 25, 1 ],
            "saturday": [ 30, 12, 20, 26 ],
            "sunday": [ 29, 10, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 400,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-04,AstndS.jpg',
          title: 'Astounding Stories',
          artist: 'Jack Binder',
          year: '1937',
          rule: {
            "monday": [ 29, 10, 19, 25 ],
            "tuesday": [ 28, 10, 18, 24 ],
            "wednesday": [ 27, 9, 17, 23 ],
            "thursday": [ 26, 8, 16, 22 ],
            "friday": [ 25, 6, 5, 21 ],
            "saturday": [ 24, 6, 25, 1 ],
            "sunday": [ 30, 12, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 401,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/36-02,AllStarAdv.jpg',
          title: 'All Star Adventure',
          artist: 'Lorence Bjorklund',
          year: '1936',
          rule: {
            "monday": [ 30, 12, 20, 26 ],
            "tuesday": [ 29, 10, 19, 25 ],
            "wednesday": [ 28, 10, 18, 24 ],
            "thursday": [ 27, 9, 17, 23 ],
            "friday": [ 26, 8, 16, 22 ],
            "saturday": [ 25, 6, 5, 21 ],
            "sunday": [ 24, 6, 25, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 402,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1930-11,Smokehouse1.jpg',
          title: 'Smokehouse',
          artist: 'Blaine',
          year: '1930',
          rule: {
            "monday": [ 24, 6, 25, 1 ],
            "tuesday": [ 30, 12, 20, 26 ],
            "wednesday": [ 29, 10, 19, 25 ],
            "thursday": [ 28, 10, 18, 24 ],
            "friday": [ 27, 9, 17, 23 ],
            "saturday": [ 26, 8, 16, 22 ],
            "sunday": [ 25, 6, 5, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 403,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/29-09-26,WarS.jpg',
          title: 'War Stories',
          artist: 'Frederick Blakeslee',
          year: '1929',
          rule: {
            "monday": [ 25, 6, 5, 21 ],
            "tuesday": [ 24, 6, 25, 1 ],
            "wednesday": [ 30, 12, 20, 26 ],
            "thursday": [ 29, 10, 19, 25 ],
            "friday": [ 28, 10, 18, 24 ],
            "saturday": [ 27, 9, 17, 23 ],
            "sunday": [ 26, 8, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 404,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/42-Fall,MskDet.jpg',
          title: 'Fall Masked Detective',
          artist: 'Chester Bloom',
          year: '1942',
          rule: {
            "monday": [ 26, 8, 16, 22 ],
            "tuesday": [ 25, 6, 5, 21 ],
            "wednesday": [ 24, 6, 25, 1 ],
            "thursday": [ 30, 12, 20, 26 ],
            "friday": [ 29, 10, 19, 25 ],
            "saturday": [ 28, 10, 18, 24 ],
            "sunday": [ 27, 9, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 405,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/35-03,pirates-1.jpg',
          title: 'Pirate Stories',
          artist: 'Jon L. Blummer',
          year: '1935',
          rule: {
            "monday": [ 27, 9, 17, 23 ],
            "tuesday": [ 26, 8, 16, 22 ],
            "wednesday": [ 25, 6, 5, 21 ],
            "thursday": [ 24, 6, 25, 1 ],
            "friday": [ 30, 12, 20, 26 ],
            "saturday": [ 29, 10, 19, 25 ],
            "sunday": [ 28, 10, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 406,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/1941-06,StirSci.jpg',
          title: 'Stirring Science',
          artist: 'Hannes Bok',
          year: '1941',
          rule: {
            "monday": [ 29, 11, 19, 25 ],
            "tuesday": [ 28, 10, 18, 24 ],
            "wednesday": [ 27, 9, 17, 23 ],
            "thursday": [ 26, 7, 6, 22 ],
            "friday": [ 25, 7, 26, 2 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 30, 11, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 407,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/27-12,AmerHmr.jpg',
          title: 'American Humor',
          artist: 'Enoch Bolles',
          year: '1927',
          rule: {
            "monday": [ 30, 11, 20, 26 ],
            "tuesday": [ 29, 11, 19, 25 ],
            "wednesday": [ 28, 10, 18, 24 ],
            "thursday": [ 27, 9, 17, 23 ],
            "friday": [ 26, 7, 6, 22 ],
            "saturday": [ 25, 7, 26, 2 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 408,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/52-11,ZaneGreyW.jpg',
          title: 'Zane Grey Western',
          artist: 'Stanley Borack',
          year: '1952',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 30, 11, 20, 26 ],
            "wednesday": [ 29, 11, 19, 25 ],
            "thursday": [ 28, 10, 18, 24 ],
            "friday": [ 27, 9, 17, 23 ],
            "saturday": [ 26, 7, 6, 22 ],
            "sunday": [ 25, 7, 26, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 409,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/15-08,Forecast.jpg',
          title: 'The Forecast',
          artist: 'Arthur R. Bowker',
          year: '1915',
          rule: {
            "monday": [ 25, 7, 26, 2 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 30, 11, 20, 26 ],
            "thursday": [ 29, 11, 19, 25 ],
            "friday": [ 28, 10, 18, 24 ],
            "saturday": [ 27, 9, 17, 23 ],
            "sunday": [ 26, 7, 6, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 410,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/40-08,BlueBolt.jpg',
          title: 'Blue Bolt',
          artist: 'William J. Brady',
          year: '1940',
          rule: {
            "monday": [ 26, 7, 6, 22 ],
            "tuesday": [ 25, 7, 26, 2 ],
            "wednesday": [ 31, 13, 21, 27 ],
            "thursday": [ 30, 11, 20, 26 ],
            "friday": [ 29, 11, 19, 25 ],
            "saturday": [ 28, 10, 18, 24 ],
            "sunday": [ 27, 9, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 411,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/47-Fall,Treasure.jpg',
          title: 'Fall Treasure Comics',
          artist: 'Ann Brewster',
          year: '1947',
          rule: {
            "monday": [ 27, 9, 17, 23 ],
            "tuesday": [ 26, 7, 6, 22 ],
            "wednesday": [ 25, 7, 26, 2 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 30, 11, 20, 26 ],
            "saturday": [ 29, 11, 19, 25 ],
            "sunday": [ 28, 10, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 412,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/37-08,BlueBk1.jpg',
          title: 'Blue Book',
          artist: 'Austin Briggs',
          year: '1937',
          rule: {
            "monday": [ 28, 10, 18, 24 ],
            "tuesday": [ 27, 9, 17, 23 ],
            "wednesday": [ 26, 7, 6, 22 ],
            "thursday": [ 25, 7, 26, 2 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 30, 11, 20, 26 ],
            "sunday": [ 29, 11, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 413,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/10-00,BrooklynMuseum.jpg',
          title: 'Stained Glass',
          artist: 'W. C. Brigham',
          year: '1910',
          rule: {
            "monday": [ 30, 12, 20, 26 ],
            "tuesday": [ 29, 11, 19, 25 ],
            "wednesday": [ 28, 10, 18, 24 ],
            "thursday": [ 27, 8, 7, 23 ],
            "friday": [ 26, 8, 27, 3 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 12, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 414,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/22-05,WirelessAge.jpg',
          title: 'Wireless Age',
          artist: 'W. C. Brigham, Jr.',
          year: '1922',
          rule: {
            "monday": [ 31, 12, 21, 27 ],
            "tuesday": [ 30, 12, 20, 26 ],
            "wednesday": [ 29, 11, 19, 25 ],
            "thursday": [ 28, 10, 18, 24 ],
            "friday": [ 27, 8, 7, 23 ],
            "saturday": [ 26, 8, 27, 3 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 415,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december/33-10-15,CompS.jpg',
          title: 'Complete Stories',
          artist: 'Howard V. Brown',
          year: '1933',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 12, 21, 27 ],
            "wednesday": [ 30, 12, 20, 26 ],
            "thursday": [ 29, 11, 19, 25 ],
            "friday": [ 28, 10, 18, 24 ],
            "saturday": [ 27, 8, 7, 23 ],
            "sunday": [ 26, 8, 27, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('december_arts_id_seq', (SELECT MAX(id) FROM december_arts));");
    });
};
