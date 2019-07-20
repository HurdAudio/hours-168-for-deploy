'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('june_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('june_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/my-small-world.jpg',
          title: 'My Small World',
          artist: 'Achraf Baznani',
          year: '2014',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/tumblr-nvtla1gqan1qdsei8o1-1280.jpg',
          title: 'Chloë Sevigny',
          artist: 'Wolfgang Tillmans',
          year: '1995',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/eight-piles-2003.jpg',
          title: 'Eight Piles',
          artist: 'David Burdeny',
          year: '2003',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/gold-in-the-morning-series.jpg',
          title: 'Gold in the morning (A - J)',
          artist: 'Alfredo Jaar',
          year: '1985',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/ratingen-swimming-pool-1987.jpg',
          title: 'Ratingen Swimming Pool',
          artist: 'Andreas Gursky',
          year: '1987',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-cigarettes-1979.jpg',
          title: 'Untitled (Cigarettes)',
          artist: 'Richard Prince',
          year: '1978 - 1979',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-35mm-transparency-1990.jpg',
          title: 'Untitled (35mm Transparency)',
          artist: 'Li Yuan-chia',
          year: '1990',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-1930.jpg',
          title: 'Untitled',
          artist: 'Kansuke Yamamoto',
          year: '1930',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/pavilion-de-l-elegance-madeleine-vionnet-1937.jpg',
          title: 'Pavilion de l\'elegance (Madeleine Vionnet)',
          artist: 'Wols',
          year: '1937',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/ridiculous-portrait-contact-sheet-1972.jpg',
          title: 'Ridiculous Portrait (Contact Sheet)',
          artist: 'May Wilson',
          year: '1972',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/blindman-s-buff-1898.jpg',
          title: 'Blindman\'s Buff',
          artist: 'Clarence White',
          year: '1898',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/nude-1925.jpg',
          title: 'Nude',
          artist: 'Edward Weston',
          year: '1925',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1994-6-1994.jpg',
          title: '1994.6',
          artist: 'Ai Weiwei',
          year: '1994',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/arnold-schwarzenegger-1977.jpg',
          title: 'Arnold Schwarzenegger',
          artist: 'Andy Warhol',
          year: '1977',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/fotogramma-1997.jpg',
          title: 'Fotogramma',
          artist: 'Luigi Veronesi',
          year: '1997',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 3, 13, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/surimpression-1934.jpg',
          title: 'Surimpression',
          artist: 'Raoul Ubac',
          year: '1934',
          rule: {
            "monday": [ 3, 13, 23, 30 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/atlas-i-1995.jpg',
          title: 'Atlas I',
          artist: 'Rirkrit Tiravanija',
          year: '1995',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 3, 13, 23, 30 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/wolfgangtillmans-1992lutz-alex-sitting-in-the-trees-1.jpg',
          title: 'Lutz Alex Sitting in the Trees 1',
          artist: 'Wolfgang Tillmans',
          year: '1992',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 3, 13, 23, 30 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photograph-of-photograph-1973.jpg',
          title: 'Photograph of Photograph',
          artist: 'Takamatsu Jiro',
          year: '1973',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 3, 13, 23, 30 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/self-portrait-with-dada-kopf-dada-head-1920.jpg',
          title: 'Self-portrait with Dada-Kopf (Dada Head)',
          artist: 'Sophie Taeuber-Arp',
          year: '1920',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 3, 13, 23, 30 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/cabot-street-cinema-massachusetts-1978.jpg',
          title: 'Cabot Street Cinema, Massachusetts',
          artist: 'Hiroshi Sugimoto',
          year: '1978',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 4, 14, 24, 1 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/self-portrait-1886.jpg',
          title: 'Self-portrait',
          artist: 'Alfred Stieglitz',
          year: '1886',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 4, 14, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/prince-albert-1938.jpg',
          title: 'Prince Albert',
          artist: 'Frederick Sommer',
          year: '1938',
          rule: {
            "monday": [ 4, 14, 24, 1 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/las-animas-1997.jpg',
          title: 'Las Animas',
          artist: 'Kiki Smith',
          year: '1997',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 4, 14, 24, 1 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/gloucester-16a-1944.jpg',
          title: 'Gloucester 16A',
          artist: 'Aaron Siskind',
          year: '1944',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 4, 14, 24, 1 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-b-1975.jpg',
          title: 'Untitled B',
          artist: 'Cindy Sherman',
          year: '1975',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 28, 26 ],
            "thursday": [ 4, 14, 24, 1 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/doylestown-house-the-stove-1917.jpg',
          title: 'Doylestown House—The Stove',
          artist: 'Charles Sheeler',
          year: '1917',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 28, 26 ],
            "friday": [ 4, 14, 24, 1 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/rooftops-1916.jpg',
          title: 'Rooftops',
          artist: 'Morton Shamberg',
          year: '1916',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 29, 27 ],
            "saturday": [ 5, 15, 25, 2 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the-burning-of-rome-1907.jpg',
          title: 'The Burning of Rome',
          artist: 'George Seeley',
          year: '1907',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 29, 27 ],
            "sunday": [ 5, 15, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/amourette-schadography-1918.jpg',
          title: 'Amourette (Schadography)',
          artist: 'Christian Schad',
          year: '1918',
          rule: {
            "monday": [ 5, 15, 25, 2 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 29, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/conoco-shamrock-texas-from-five-views-from-the-panhandle-series.jpg',
          title: 'Conoco - Shamrock, Texas (from Five Views from the Panhandle Series)',
          artist: 'Edward Ruscha',
          year: 'XX cent.',
          rule: {
            "monday": [ 29, 9, 29, 27 ],
            "tuesday": [ 5, 15, 25, 2 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/postcard-1968.jpg',
          title: 'Postcard',
          artist: 'Dieter Roth',
          year: '1968',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 29, 27 ],
            "wednesday": [ 5, 15, 25, 2 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/vormittagsspuk-1927.jpg',
          title: 'Vormittagsspuk',
          artist: 'Hans Richter',
          year: '1927',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 29, 27 ],
            "thursday": [ 5, 15, 25, 2 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the-coat-stand-1920.jpg',
          title: 'The Coat Stand',
          artist: 'Man Ray',
          year: '1920',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 29, 27 ],
            "friday": [ 5, 15, 25, 2 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-cowboys-1986.jpg',
          title: 'Untitled (Cowboys)',
          artist: 'Richard Prince',
          year: '1986',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [30, 10, 20, 28 ],
            "saturday": [ 6, 16, 26, 3 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-1959.jpg',
          title: 'Untitled',
          artist: 'Otto Piene',
          year: '1959',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 6, 16, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the-egg-1967.jpg',
          title: 'The Egg',
          artist: 'Lygia Pape',
          year: '1967',
          rule: {
            "monday": [ 6, 16, 26, 3 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/whirlpool-eye-of-the-storm-1973.jpg',
          title: 'Whirlpool (Eye of the Storm)',
          artist: 'Dennis Oppenheim',
          year: '1973',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 6, 16, 26, 3 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1965-1-d-tail-photo-1965.jpg',
          title: '1965 / 1 - ∞ /détail photo ?',
          artist: 'Roman Opalka',
          year: '1965',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 6, 16, 26, 3 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-1980.jpg',
          title: 'Untitled',
          artist: 'Eduardo Nery',
          year: '1980',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 6, 16, 26, 3 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/l-odalisque-turbulente-1967.jpg',
          title: 'L\'odalisque turbulente',
          artist: 'Pierre Molinier',
          year: '1967',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 6, 16, 26, 3 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/double-portrait.jpg',
          title: 'Double Portrait',
          artist: 'Laszlo Moholy-Nagy',
          year: 'c.1923',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 7, 17, 27, 4 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-1970-3.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: '1970',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 7, 17, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/le-pont-neuf-daguerreotype-1848.jpg',
          title: 'Le Pont Neuf (daguerreotype)',
          artist: 'Anton Melbye',
          year: '1848',
          rule: {
            "monday": [ 7, 17, 27, 4 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/painting-objects-1980.jpg',
          title: 'Painting-Objects',
          artist: 'Florin Maxa',
          year: '1980',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 7, 17, 27, 4 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/eros-crom-tico-1964.jpg',
          title: 'Eros Cromático',
          artist: 'Jorge Martins',
          year: '1964',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 7, 17, 27, 4 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/antiportrait-1984.jpg',
          title: 'Antiportrait',
          artist: 'Marcel Marien',
          year: '1984',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 7, 17, 27, 4 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/new-york-boy-shining-shoes-july-1952-1952.jpg',
          title: 'New York (Boy Shining Shoes), July 1952',
          artist: 'Vivian Maier',
          year: '1952',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 7, 17, 27, 4 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/double-portrait-1930.jpg',
          title: 'Double Portrait',
          artist: 'Dora Maar',
          year: '1930',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 8, 18, 28, 5 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/buried-cube-containing-an-object-of-importance-but-little-value-1968.jpg',
          title: 'Buried Cube Containing an Object of Importance but Little Value',
          artist: 'Sol LeWitt',
          year: '1968',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 8, 18, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/meine-diana-1896.jpg',
          title: 'Meine Diana',
          artist: 'Heinrich Kuhn',
          year: '1896',
          rule: {
            "monday": [ 8, 18, 28, 5 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/portrait.jpg',
          title: 'Portrait',
          artist: 'Alekos Kontopoulos',
          year: 'XX cent.',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 8, 18, 28, 5 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/leap-into-the-void-1960.jpg',
          title: 'Leap into the Void',
          artist: 'Yves Klein',
          year: '1960',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 8, 18, 28, 5 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/from-five-04-2.jpg',
          title: 'From Five',
          artist: 'Abbas Kiarostami',
          year: '2005',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 8, 18, 28, 5 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/portrait-of-marguerite-khnopff-1890.jpg',
          title: 'Portrait of Marguerite Khnopff',
          artist: 'Fernand Khnopff',
          year: '1890',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 8, 18, 28, 5 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/circus-budapest-19-may-1920-1920.jpg',
          title: 'Circus, Budapest, 19 May 1920',
          artist: 'Andre Kertesz',
          year: '1920',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 9, 19, 29, 6 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/chief-flying-hawk-1898.jpg',
          title: 'Chief Flying Hawk',
          artist: 'Gertrude Kasebier',
          year: '1898',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 9, 19, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/gipsy-camp-1910.jpg',
          title: 'Gipsy Camp',
          artist: 'David Kakabadze',
          year: '1910',
          rule: {
            "monday": [ 9, 19, 29, 6 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/girl-t-1996.jpg',
          title: 'Girl-T',
          artist: 'Leiko Ikemura',
          year: '1996',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 9, 19, 29, 6 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/duration-piece-4-bradford-massachusetts-1968.jpg',
          title: 'Duration Piece #4 Bradford Massachusetts',
          artist: 'Douglas Huebler',
          year: '1968',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 9, 19, 29, 6 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-from-the-series-still-water-the-river-thames-for-example-1999.jpg',
          title: 'Untitled (from the series Still Water (The River Thames, for Example))',
          artist: 'Roni Horn',
          year: '1999',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 9, 19, 29, 6 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/sixty-seconds-of-light-1970.jpg',
          title: 'Sixty Seconds of Light',
          artist: 'John Hilliard',
          year: '1970',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 9, 19, 29, 6 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/typographic-nude-1965.jpg',
          title: 'Typographic Nude',
          artist: 'Robert Heinecken',
          year: '1965',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 10, 20, 30, 7 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-1942.jpg',
          title: 'Untitled',
          artist: 'David Hare',
          year: '1942',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 10, 20, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-self-portrait-2000.jpg',
          title: 'Untitled (Self-Portrait)',
          artist: 'Ann Hamilton',
          year: '2000',
          rule: {
            "monday": [ 10, 20, 30, 7 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/garters-1939.jpg',
          title: 'Garters',
          artist: 'Philippe Halsman',
          year: '1939',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 10, 20, 30, 7 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/shanghai-2000.jpg',
          title: 'Shanghai',
          artist: 'Andreas Gursky',
          year: '2000',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 10, 20, 30, 7 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-diptych-1984.jpg',
          title: 'Untitled Diptych',
          artist: 'Gunther Forg',
          year: '1984',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 10, 20, 30, 7 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/seascape-ibiza-1972.jpg',
          title: 'Seascape, Ibiza',
          artist: 'Franco Fontana',
          year: '1972',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 10, 20, 30, 7 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/forty-eight-view-of-lochness-1997.jpg',
          title: 'Forty-Eight View of Lochness',
          artist: 'Spencer Finch',
          year: '1997',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 11, 21, 1, 8 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/main-d-artiste-1967.jpg',
          title: 'Main d\'artiste',
          artist: 'Robert Filliou',
          year: '1967',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 11, 21, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/male-nude-1897.jpg',
          title: 'Male Nude',
          artist: 'Frank Eugene',
          year: '1897',
          rule: {
            "monday": [ 11, 21, 1, 8 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/new-york-city-1953.jpg',
          title: 'New York City',
          artist: 'Elliott Erwitt',
          year: '1953',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 11, 21, 1, 8 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/monument-valley-grand-scale-1997.jpg',
          title: 'Monument Valley (Grand Scale)',
          artist: 'Tracey Emin',
          year: '1997',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 11, 21, 1, 8 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the-island-series-1997.jpg',
          title: 'The island series',
          artist: 'Olafur Eliasson',
          year: '1997',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 11, 21, 1, 8 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/downtown-morton-mississippi-1969.jpg',
          title: 'Downtown Morton, Mississippi',
          artist: 'William Eggleston',
          year: '1969',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 11, 21, 1, 8 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/thomas-eakins-and-j-laurie-wallace-1883-1.jpg',
          title: 'Thomas Eakins and J. Laurie Wallace',
          artist: 'Thomas Eakins',
          year: '1883',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 12, 22, 2, 9 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/behind-the-scenes-1902.jpg',
          title: 'Behind the Scenes',
          artist: 'Pierre Dubreuil',
          year: '1902',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 12, 22, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/kiss-by-the-hotel-de-ville-1950.jpg',
          title: 'Kiss by the Hotel de Ville',
          artist: 'Robert Doisneau',
          year: '1950',
          rule: {
            "monday": [ 12, 22, 2, 9 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/behind-the-scenes-1904.jpg',
          title: 'Behind the Scenes',
          artist: 'Robert Demachy',
          year: '1904',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 12, 22, 2, 9 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/un-cantique-1895.jpg',
          title: 'Un Cantique',
          artist: 'Adolph de Meyer',
          year: '1895',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 12, 22, 2, 9 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/un-chien-andalou-film-still-1928.jpg',
          title: 'Un Chien Andalou (film still)',
          artist: 'Salvador Dali',
          year: '1928',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 12, 22, 2, 9 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/2-1.jpg',
          title: 'untitled',
          artist: 'daisuke yokota',
          year: '2015',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 12, 22, 2, 9 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/buckley.jpg',
          title: 'Buckley',
          artist: 'Ralston Crawford',
          year: 'XX cent.',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 13, 23, 3, 10 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/st-paul-s-and-cogs-1904.jpg',
          title: 'St. Paul\'s and Cogs',
          artist: 'Alvin Langdon Coburn',
          year: '1904',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 13, 23, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/teatro-de-sombras-as-cinco-esta-es-still-1976-1.jpg',
          title: 'Teatro de Sombras, As Cinco Estações (still)',
          artist: 'Lourdes Castro',
          year: '1976',
          rule: {
            "monday": [ 13, 23, 3, 10 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the-quai-st-bernard-near-the-gare-d-austerlitz-paris-1932.jpg',
          title: 'The Quai St Bernard, near the Gare d\'Austerlitz, Paris',
          artist: 'Henri Cartier-Bresson',
          year: '1932',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 13, 23, 3, 10 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/self-portrait-1855.jpg',
          title: 'Self Portrait',
          artist: 'Lewis Carroll',
          year: '1855',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 13, 23, 3, 10 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the-second-step-2005.jpg',
          title: 'The Second Step',
          artist: 'Mircea Cantor',
          year: '2005',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 13, 23, 3, 10 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the-discovery-of-geometry-1978.jpg',
          title: 'The Discovery of Geometry',
          artist: 'Luis Camnitzer',
          year: '1978',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 13, 23, 3, 10 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/materializa-o-de-um-quadro-imagin-rio-1975.jpg',
          title: 'Materialização de um quadro imaginário',
          artist: 'Fernando Calhau',
          year: '1975',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 14, 24, 4, 11 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/drift-10-grand-beach-manitoba-2005.jpg',
          title: 'Drift #10: Grand Beach, Manitoba',
          artist: 'David Burdeny',
          year: '2005',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 14, 24, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/figuras-en-el-castillo-1920.jpg',
          title: 'Figuras en el Castillo',
          artist: 'Manuel Alvarez Bravo',
          year: '1920',
          rule: {
            "monday": [ 14, 24, 4, 11 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/towards-white-1976.jpg',
          title: 'Towards White',
          artist: 'Geta Bratescu',
          year: '1976',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 14, 24, 4, 11 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/bassin-du-luxembourg-1930.jpg',
          title: 'Bassin du Luxembourg',
          artist: 'Brassai',
          year: '1930',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 14, 24, 4, 11 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/picnic-in-the-mountains.jpg',
          title: 'Picnic in the Mountains',
          artist: 'Fernando Botero',
          year: '1966',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 14, 24, 4, 11 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/comic-vignettes-parents-wedding-1974.jpg',
          title: 'Comic Vignettes, Parents’ wedding',
          artist: 'Christian Boltanski',
          year: '1974',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 14, 24, 4, 11 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/four-blind-men-bhavnagar-gujarat-1968.jpg',
          title: 'Four blind men, Bhavnagar, Gujarat',
          artist: 'Jyoti Bhatt',
          year: '1968',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 15, 25, 5, 12 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/art-is-ego-1971.jpg',
          title: 'Art Is Ego',
          artist: 'Ben',
          year: '1971',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 15, 25, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the-doll-1934.jpg',
          title: 'The Doll',
          artist: 'Hans Bellmer',
          year: '1934',
          rule: {
            "monday": [ 15, 25, 5, 12 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/human-being.jpg',
          title: 'Human Being',
          artist: 'Achraf Baznani',
          year: 'XX cent.',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 15, 25, 5, 12 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/liquid-detergent-vancouver-british-columbia-1965.jpg',
          title: 'Liquid Detergent, Vancouver, British Columbia',
          artist: 'Iain Baxter&',
          year: '1965',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 15, 25, 5, 12 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/land-of-the-spotted-eagle-1983.jpg',
          title: 'Land of the Spotted Eagle',
          artist: 'Lothar Baumgarten',
          year: '1983',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 15, 25, 5, 12 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/wrong-1967.jpg',
          title: 'Wrong',
          artist: 'John Baldessari',
          year: '1967',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 15, 25, 5, 12 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/art-declared-found-activity-lathering-alicante-spain-april-1960-1-1960.jpg',
          title: 'Art Declared Found Activity (Lathering, Alicante Spain, April 1960) 1',
          artist: 'Billy Apple',
          year: '1960',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 16, 26, 6, 13 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/voar-2001.jpg',
          title: 'Voar',
          artist: 'Helena Almeida',
          year: '2001',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 16, 26, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/bum-thumb-rock-ploumanach-brittany-1936.jpg',
          title: 'Bum-Thumb Rock, Ploumanach, Brittany',
          artist: 'Eileen Agar',
          year: '1936',
          rule: {
            "monday": [ 16, 26, 6, 13 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/all-my-clothes-1970.jpg',
          title: 'All my clothes',
          artist: 'Bas Jan Ader',
          year: '1970',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 16, 26, 6, 13 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/mirror-lake-morning-yosemite-national-park.jpg',
          title: 'Mirror Lake, Morning, Yosemite National Park',
          artist: 'Ansel Adams',
          year: '1928',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 16, 26, 6, 13 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/theme-song-1973.jpg',
          title: 'Theme Song',
          artist: 'Vito Acconci',
          year: '1973',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 16, 26, 6, 13 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/charles-hay-cameron-1864.jpg',
          title: 'Charles Hay Cameron',
          artist: 'Julia Margaret Cameron',
          year: '1864',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 16, 26, 6, 13 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/hunting-by-steam-in-melville-bay-1869.jpg',
          title: 'Hunting by Steam in Melville Bay',
          artist: 'William Bradford',
          year: '1869',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 17, 27, 7, 14 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/chateau-wood-1917.jpg',
          title: 'Chateau Wood',
          artist: 'Frank Hurley',
          year: '1917',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 17, 27, 7, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/3e7c1dcd49363410cbf16f56884b6cd0.jpg',
          title: 'Child with a toy hand grenade in Central Park',
          artist: 'Diane Arbus',
          year: '1962',
          rule: {
            "monday": [ 17, 27, 7, 14 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/tillmans-web6.jpg',
          title: 'Open Heart Bypass',
          artist: 'Wolfgang Tillmans',
          year: '2015',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 17, 27, 7, 14 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/max-ernst-1946.jpg',
          title: 'Frederick Sommer',
          artist: 'Max Ernst',
          year: '1946',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 17, 27, 7, 14 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/study-of-king-david-1866.jpg',
          title: 'Study of King David',
          artist: 'Julia Margaret Cameron',
          year: '1866',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 17, 27, 7, 14 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/times-square-new-york-1997.jpg',
          title: 'Times Square, New York',
          artist: 'Andreas Gursky',
          year: '1997',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 17, 27, 7, 14 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-fashion-1984(1).jpg',
          title: 'Untitled (Fashion)',
          artist: 'Richard Prince',
          year: '1982 - 1984',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 18, 28, 8, 15 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/seascape-cascade-river-lake-superior-1995.jpg',
          title: 'Seascape: Cascade River, Lake Superior',
          artist: 'Hiroshi Sugimoto',
          year: '1995',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 18, 28, 8, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/medallion-1948.jpg',
          title: 'Medallion',
          artist: 'Frederick Sommer',
          year: '1948',
          rule: {
            "monday": [ 18, 28, 8, 15 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/siesta-1926.jpg',
          title: 'Siesta',
          artist: 'Laszlo Moholy-Nagy',
          year: '1926',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 18, 28, 8, 15 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/radio-tower-berlin-1928.jpg',
          title: 'Radio Tower Berlin',
          artist: 'Laszlo Moholy-Nagy',
          year: '1928',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 18, 28, 8, 15 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/gala-as-madonna-of-port-lligat.jpg',
          title: 'Gala as Madonna of Port Lligat',
          artist: 'Salvador Dali',
          year: '1950',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 18, 28, 8, 15 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-1962.jpg',
          title: 'Untitled',
          artist: 'Frederick Sommer',
          year: '1962',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 18, 28, 8, 15 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/anxious-corridor-1940.jpg',
          title: 'Anxious Corridor',
          artist: 'Kansuke Yamamoto',
          year: '1940',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 19, 29, 9, 16 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/andy-warhol.jpg',
          title: 'Andy Warhol',
          artist: 'Philippe Halsman',
          year: '?',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 19, 29, 9, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-425-2004.jpg',
          title: 'Untitled #425',
          artist: 'Cindy Sherman',
          year: '2004',
          rule: {
            "monday": [ 19, 29, 9, 16 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/hiroshima-1954.jpg',
          title: 'Hiroshima',
          artist: 'Kansuke Yamamoto',
          year: '1954',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 19, 29, 9, 16 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/der-schnitter.jpg',
          title: 'The Reaper',
          artist: 'Nicola Perscheid',
          year: '1901',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 19, 29, 9, 16 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1997.jpg',
          title: 'Donbass Chocolate',
          artist: 'Arsen Savadov',
          year: '1997',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 19, 29, 9, 16 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/3-1.jpg',
          title: 'untitled',
          artist: 'daisuke yokota',
          year: '2015',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 19, 29, 9, 16 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/nude-c-1900.jpg',
          title: 'Nude',
          artist: 'Clarence White',
          year: '1900',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 20, 30, 10, 17 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/broadway-at-night-1905.jpg',
          title: 'Broadway at Night',
          artist: 'Alvin Langdon Coburn',
          year: '1905',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 20, 30, 10, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/miss-mary-and-edeltrude-lying-in-the-grass-1910.jpg',
          title: 'Miss Mary and Edeltrude Lying in the Grass',
          artist: 'Heinrich Kuhn',
          year: '1910',
          rule: {
            "monday": [ 20, 30, 10, 17 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/rain-03.jpg',
          title: 'Rain',
          artist: 'Abbas Kiarostami',
          year: '2006',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 20, 30, 10, 17 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/new-york-two-hippos-1955.jpg',
          title: 'New York (Two Hippos)',
          artist: 'Vivian Maier',
          year: '1955',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 20, 30, 10, 17 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/hanna-ralph-c1918.jpg',
          title: 'Hanna Ralph',
          artist: 'Nicola Perscheid',
          year: '1918',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 20, 30, 10, 17 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/nude-on-back-1920.jpg',
          title: 'Nude on Back',
          artist: 'Heinrich Kuhn',
          year: '1920',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 20, 30, 10, 17 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/mass-psychosis-1927.jpg',
          title: 'Mass Psychosis',
          artist: 'Laszlo Moholy-Nagy',
          year: '1927',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 21, 1, 11, 18 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/versumpfung-einer-venus-5.jpg',
          title: 'Versumpfung Einer Venus 5',
          artist: 'Otto Muehl',
          year: '1963',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 21, 1, 11, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/11-1.jpg',
          title: 'Fashion at the Graveyard',
          artist: 'Arsen Savadov',
          year: '1997',
          rule: {
            "monday": [ 21, 1, 11, 18 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/3-2.jpg',
          title: 'Untitled',
          artist: 'Arsen Savadov',
          year: '1997',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 21, 1, 11, 18 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/3a-1.jpg',
          title: 'Extension #1',
          artist: 'Rodrigo Franzao',
          year: '2016',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 21, 1, 11, 18 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/robar-el-quedar-libre-2000.jpg',
          title: 'Robar el quedar libre',
          artist: 'Francis Naranjo',
          year: '2000',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 21, 1, 11, 18 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/heimw-rts.jpg',
          title: 'Heimwärts',
          artist: 'Nicola Perscheid',
          year: '1901',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 21, 1, 11, 18 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/kiki-de-montparnasse.jpg',
          title: 'Kiki de Montparnasse',
          artist: 'Man Ray',
          year: '1922',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 22, 2, 12, 19 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/view-from-the-berlin-radio-tower-in-winter-1928.jpg',
          title: 'View from the Berlin radio tower in Winter',
          artist: 'Laszlo Moholy-Nagy',
          year: '1928',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 22, 2, 12, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/lee-nevin-1963.jpg',
          title: 'Lee Nevin',
          artist: 'Frederick Sommer',
          year: '1963',
          rule: {
            "monday": [ 22, 2, 12, 19 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/en-un-pa-s-lejano-utopos-1998.jpg',
          title: 'En un país lejano, Utopos',
          artist: 'Francis Naranjo',
          year: '1998',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 22, 2, 12, 19 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/000010050012_1000-512x773.jpg',
          title: 'Numero Homme',
          artist: 'Matt Lambert',
          year: 'xxi cent.',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 22, 2, 12, 19 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/o-SHEILA-PREE-BRIGHT-facebook.jpg',
          title: 'Plastic Bodies',
          artist: 'Sheila Pree Bright',
          year: '2013',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 22, 2, 12, 19 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/PAR129495.jpg',
          title: 'The 69th Tactical Missile Squadron',
          artist: 'Cornell Capa',
          year: '1958',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 22, 2, 12, 19 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Abeles-M_Arm-Plant-Bottles-.jpg',
          title: 'Arm Plant Bottles 300',
          artist: 'Michele Abeles',
          year: '2011',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 23, 3, 13, 20 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Miki-invitation.jpg',
          title: 'Works',
          artist: 'Miki Kratsman',
          year: '2009',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 23, 3, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/coin.jpg',
          title: 'Coin',
          artist: 'Achraf Baznani',
          year: '?',
          rule: {
            "monday": [ 23, 3, 13, 20 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/chicken-parts-1939.jpg',
          title: 'Chicken Parts',
          artist: 'Frederick Sommer',
          year: '1939',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 23, 3, 13, 20 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/modern-and-contemporary-photography-circle-of-life-water-reflection-wasser-spiegelung-manfred.jpg',
          title: 'Modern and Contemporary Photography Circle of Life Water Reflection mirror Manfred Kielnhofer',
          artist: 'Manfred Kielnhofer',
          year: 'xx cent.',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 23, 3, 13, 20 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/naturaleza-soportada-1997.jpg',
          title: 'Naturaleza soportada',
          artist: 'Francis Naranjo',
          year: '1997',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 23, 3, 13, 20 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/2-3.jpg',
          title: 'Fashion at the Graveyard',
          artist: 'Arsen Savadov',
          year: '1997',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 23, 3, 13, 20 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-35mm-transparency-1990-1.jpg',
          title: 'Untitled (35mm Transparency)',
          artist: 'Li Yuan-chia',
          year: '1990',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 24, 4, 14, 21 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the-distance-between-the-landscape-and-dusk-1956.jpg',
          title: 'The Distance Between the Landscape and Dusk',
          artist: 'Kansuke Yamamoto',
          year: '1956',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 24, 4, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-8.jpg',
          title: 'Untitled 8',
          artist: 'Wols',
          year: 'xx cent.',
          rule: {
            "monday": [ 24, 4, 14, 21 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/clouds-maine-1921.jpg',
          title: 'Clouds, Maine',
          artist: 'Clarence White',
          year: '1921',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 24, 4, 14, 21 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/civilian-defence-1942.jpg',
          title: 'Civilian Defence',
          artist: 'Edward Weston',
          year: '1942',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 24, 4, 14, 21 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/img-8191.JPG',
          title: 'Untitled',
          artist: 'Daniel Johnson',
          year: '?',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 24, 4, 14, 21 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/hand-of-fate.jpg',
          title: 'Hand of Fate',
          artist: 'Achraf Baznani',
          year: '?',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 24, 4, 14, 21 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/98bc3dcb98716bb4f17a86ba880f95ce.jpg',
          title: 'Chingaza',
          artist: 'Wolfgang Tillmans',
          year: '2012',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 25, 5, 15, 22 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/pink-dusk-antarctica-2008.jpg',
          title: 'Pink Dusk, Antarctica',
          artist: 'David Burdeny',
          year: '2008',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 25, 5, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/bahrain-i-2005.jpg',
          title: 'Bahrain I',
          artist: 'Andreas Gursky',
          year: '2005',
          rule: {
            "monday": [ 25, 5, 15, 22 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/self-portrait-2013(1).jpg',
          title: 'Self Portrait',
          artist: 'Richard Prince',
          year: '1973 - 2013',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 25, 5, 15, 22 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/seascape-aegean-sea-pillon-1990.jpg',
          title: 'Seascape: Aegean Sea, Pillon',
          artist: 'Hiroshi Sugimoto',
          year: '1990',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 25, 5, 15, 22 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/distorted-vision-a-1991.jpg',
          title: 'Distorted Vision (A)',
          artist: 'John Hilliard',
          year: '1991',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 25, 5, 15, 22 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/dialogue-with-ceausescu-1978.jpg',
          title: 'Dialogue with Ceausescu',
          artist: 'Ion Grigorescu',
          year: '1978',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 25, 5, 15, 22 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/sea-land-hb1-2007.jpg',
          title: 'Sea-Land HB1',
          artist: 'Jan Dibbets',
          year: '2007',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 25, 5, 15, 22 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/trees-and-crows-02.jpg',
          title: 'Trees and Crows',
          artist: 'Abbas Kiarostami',
          year: '2006',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 25, 5, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/jackson-mississippi-1970.jpg',
          title: 'Jackson, Mississippi',
          artist: 'William Eggleston',
          year: '1970',
          rule: {
            "monday": [ 25, 5, 15, 22 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/landscape-as-an-attitude-1979.jpg',
          title: 'Landscape as an Attitude',
          artist: 'Luis Camnitzer',
          year: '1979',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 25, 5, 15, 22 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/urban-landscape-los-angeles-1991.jpg',
          title: 'Urban Landscape, Los Angeles',
          artist: 'Franco Fontana',
          year: '1991',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 25, 5, 15, 22 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/meadowland.jpg',
          title: 'Meadowland',
          artist: 'Gerhard Richter',
          year: '1985',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 25, 5, 15, 22 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/new-jersey-1966.jpg',
          title: 'New Jersey',
          artist: 'Elliott Erwitt',
          year: '1966',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 25, 5, 15, 22 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/new-york-woman-leaning-on-storefront-window-1960.jpg',
          title: 'New York (Woman Leaning on Storefront Window)',
          artist: 'Vivian Maier',
          year: '1960',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 26, 6, 16, 23 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/cosinus-alpha-2.jpg',
          title: 'Cosinus Alpha 2',
          artist: 'Otto Muehl',
          year: '1964',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 26, 6, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/85a9973f82bf880b1a9c978669bc0316.jpg',
          title: 'Bishop at the altar',
          artist: 'Diane Arbus',
          year: '1964',
          rule: {
            "monday": [ 26, 6, 16, 23 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-1930-8.jpg',
          title: 'Untitled',
          artist: 'Kansuke Yamamoto',
          year: '1930',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 26, 6, 16, 23 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/l-accordeoniste-rue-mouffetard-1951.jpg',
          title: 'L\'Accordeoniste, rue Mouffetard',
          artist: 'Robert Doisneau',
          year: '1951',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 26, 6, 16, 23 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/t-te-du-mannequin-d-andre-masson-1937.jpg',
          title: 'Tête du Mannequin d\'Andre Masson',
          artist: 'Raoul Ubac',
          year: '1937',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 26, 6, 16, 23 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the-quai-de-javel-plasterers-paris-1932.jpg',
          title: 'The Quai de Javel, Plasterers, Paris',
          artist: 'Henri Cartier-Bresson',
          year: '1932',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 26, 6, 16, 23 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/barcelona-1932.jpg',
          title: 'Barcelona',
          artist: 'Dora Maar',
          year: '1932',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 27, 7, 17, 23 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/voluptas-mors-1951.jpg',
          title: 'Voluptas Mors',
          artist: 'Philippe Halsman',
          year: '1951',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 27, 7, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/allumeur-de-r-verb-res-place-de-la-concorde-1933.jpg',
          title: 'Allumeur de réverbères, place de la Concorde',
          artist: 'Brassai',
          year: '1933',
          rule: {
            "monday": [ 27, 7, 17, 23 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/a-chronicle-of-drifting-1949.jpg',
          title: 'A Chronicle of Drifting',
          artist: 'Kansuke Yamamoto',
          year: '1949',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 27, 7, 17, 23 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/old_church_boat_by_pajunen-dbvg2j1.jpg',
          title: 'Old Church Boat',
          artist: 'Tomi Pajunen',
          year: '2017',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 27, 7, 17, 23 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/c3baf2af62f62624d6dd5cfd0153e881-d41gtiy.jpg',
          title: 'Synaptic Overload',
          artist: 'Florian Schmidt ',
          year: '?',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 27, 7, 17, 23 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/teashoulders_by_chutuliu-d2z4lil.jpg',
          title: 'teashoulders',
          artist: 'Nino`F',
          year: '2017',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 27, 7, 17, 23 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/beetle_at_the_gallery_by_cazzaritch.jpg',
          title: 'Beetle at the Gallery',
          artist: 'Carol Ritchie',
          year: '2010',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 28, 8, 18, 24 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/28b9bc438311b011f7d62e80dd817bc6-dnm7rd.jpg',
          title: 'Paris Merry-Go-Round',
          artist: 'Martin Stavars',
          year: '2006',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 28, 8, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the_communist_spirit_by_matthias_haker-d5zklk5.jpg',
          title: 'The Communist Spirit',
          artist: 'Matthias Haker',
          year: '2013',
          rule: {
            "monday": [ 28, 8, 18, 24 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/vertical_horizon__photo_book___page_027_by_romainjl-d61xi1o.jpg',
          title: 'Vertical Horizon #44',
          artist: 'Romain JL',
          year: '2012',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 28, 8, 18, 24 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/blue_tiles_by_zerberuz-d4mree7.jpg',
          title: 'Blue tiles',
          artist: 'ZerberuZ',
          year: '2012',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 28, 8, 18, 24 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/0b4f71e0dd6b1cb9d34b43bf5a166b13-d58w12p.jpg',
          title: 'Anima',
          artist: 'Chloé & Joseph',
          year: '2012',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 28, 8, 18, 24 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/capital_of_sweden_by_daghagerius-d5a6e4x.jpg',
          title: 'Capital of Sweden',
          artist: 'Dag Hagerius',
          year: '2012',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 28, 8, 18, 24 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/proposal_by_cecilla-d3fv7yt.jpg',
          title: 'Proposal',
          artist: 'Ewelina Paśko',
          year: '2011',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 29, 9, 19, 25 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/4e5b7c00c1f9956a.jpg',
          title: 'Sunday Morning Huddle',
          artist: 'Jill Auville',
          year: '2008',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 29, 9, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/aquatic_ii_by_zoejanssen-d5sw5ul.jpg',
          title: 'Aquatic II',
          artist: 'Zoë Janssen',
          year: '2011',
          rule: {
            "monday": [ 29, 9, 19, 25 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/music_above_by_cmtallman-dbyqddm.jpg',
          title: 'Music Above',
          artist: 'CM Tallman',
          year: '2018',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 29, 9, 19, 25 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/thinking_of_you__wherever_you_are_by_screamingcolorart-dbytqwl.png',
          title: 'Thinking of You, Wherever You Are',
          artist: 'Christopher Davis',
          year: '2018',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 29, 9, 19, 25 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/cooking_stuff___by_xninabravexx-dbyo3cz.jpg',
          title: 'Cooking stuff..',
          artist: 'xNinabravexx',
          year: '2018',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 29, 9, 19, 25 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/piano_skycraper_by_marikaiti-dbyjwrn.png',
          title: 'Piano Skycraper',
          artist: 'Marikaiti Nikolakaki',
          year: '2018',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 29, 9, 19, 25 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/bike_by_khrispandora-dbys8jo.jpg',
          title: 'Bike',
          artist: 'Kika Fonte',
          year: '2018',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 30, 10, 20, 26 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/sawssong.jpg',
          title: 'Saw\'s Song',
          artist: 'Max Sauco',
          year: '2014',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 30, 10, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/8d689bb6-2898-4cf1-ae81-8e930b1ea936.jpg',
          title: 'Out of Breath',
          artist: 'Hakan Simsek',
          year: '2017',
          rule: {
            "monday": [ 30, 10, 20, 26 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/a5aaea79-50c0-4665-a790-5954142a2a65.jpg',
          title: 'Catania, Sicily, Italy',
          artist: 'Daniel Castro Garcia',
          year: '2017',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 30, 10, 20, 26 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/e4f8a496-ef06-48d4-bd2f-88e8dc7c7e4b.jpg',
          title: 'Skopje, Macedonia',
          artist: 'Dragana Jurisic',
          year: '?',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 30, 10, 20, 26 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/dd8005cb-d112-41aa-b758-d9b52e8abfdc.jpg',
          title: 'Simferopol, Crimea',
          artist: 'Justyna Mielnikiewicz',
          year: '2008',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 30, 10, 20, 26 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Torbjørn-Rødland-Apple-2006-Collection-FRAC-Nord-Pas-de-Calais-France-1024x818.jpg',
          title: 'Apple',
          artist: 'Torbjørn Rødland',
          year: '2006',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 30, 10, 20, 26 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Milky-Way-Photo-Vincent-Ferrane-031A4809F.jpg',
          title: 'Milky Way',
          artist: 'Vincent Ferrané',
          year: '?',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 1, 11, 21, 27 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/beth-back_crop.jpg',
          title: 'Inside the Spider',
          artist: 'Suzie Howell',
          year: '?',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 1, 11, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Press-VivianeSassen-Roxane-II-2-copy.jpg',
          title: 'Roxane II',
          artist: 'Viviane Sassen',
          year: '?',
          rule: {
            "monday": [ 1, 11, 21, 27 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/10_Shur_cmyk-1024x807.jpg',
          title: 'Super Extra Natural!',
          artist: 'Emily Shur',
          year: '?',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 1, 11, 21, 27 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/shadow.jpg',
          title: 'Shadow',
          artist: 'Umi Malik',
          year: '2014',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 1, 11, 21, 27 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Creative-Art-Photography-by-Evelyn-Bencicova-artists-i-lobo-you.jpg',
          title: 'I Lobo You',
          artist: 'Evelyn Bencicova',
          year: '?',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 1, 11, 21, 27 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Seymour_Untitled.jpg',
          title: 'Round House and Moon',
          artist: 'Ron Seymour',
          year: '2002',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 1, 11, 21, 27 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/NYC1256521-1024x767.jpg',
          title: 'Candy',
          artist: 'David Alan Harvey',
          year: '2016',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 2, 12, 22, 28 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/RATCLIFFE-POWER-STATION-STUDY-46-NOTTINGHAMSHIRE-ENGLAND-2003-by-MICHAEL-KENNA-C31820.jpg',
          title: 'Ratcliffe Power Station, Study 46, Nottinghamshire, England',
          artist: 'Michael Kenna',
          year: '2003',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 2, 12, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Aktikompositsioon_19_(J._Künnap).jpg',
          title: 'Aktikompositsioon 19',
          artist: 'Jaan Künnap',
          year: '1988',
          rule: {
            "monday": [ 2, 12, 22, 28 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Alfred_Stieglitz_(American_-_The_Steerage_-_Google_Art_Project.jpg',
          title: 'The Steerage',
          artist: 'Alfred Stieglitz',
          year: '1907',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 2, 12, 22, 28 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/E.-E.-McCollum2.jpg',
          title: 'Black and White Fine Photography',
          artist: 'E. E. McCollum',
          year: '?',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 2, 12, 22, 28 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/02_11155991-lg.jpg',
          title: 'Water on Model',
          artist: 'Isak Sellanraa',
          year: '2010',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 2, 12, 22, 28 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/08_9235116-lg.jpg',
          title: 'Menu in Crisis Time',
          artist: 'Antonio Diaz',
          year: '2009',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 2, 12, 22, 28 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/slide_330168_3244464_free.jpg',
          title: 'Afterlife',
          artist: 'Michael Massaia',
          year: '2013',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 9, 19, 29, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 3, 13, 23, 29 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/slide_330168_3244466_free.jpg',
          title: 'A Man Feeding Swans in the Snow',
          artist: 'Marcin Ryczek',
          year: '2013',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 9, 19, 29, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 3, 13, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/slide_330168_3244461_free.jpg',
          title: 'Life in Blue',
          artist: 'Evzen Sobek',
          year: '2013',
          rule: {
            "monday": [ 3, 13, 23, 29 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 9, 19, 29, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/slide_330168_3244462_free.jpg',
          title: 'Stinking Holes',
          artist: 'Dave Reichert',
          year: '2013',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 3, 13, 23, 29 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 9, 19, 29, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/slide_330168_3244463_free.jpg',
          title: 'River Gambia',
          artist: 'Jason Florio and Helen Jones-Florio',
          year: '2013',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 3, 13, 23, 29 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 9, 19, 29, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/stock-photo-100276985.jpg',
          title: 'Cloud Atlas',
          artist: 'Meer Sadi',
          year: '2015',
          rule: {
            "monday": [ 9, 19, 29, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 3, 13, 23, 29 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/stock-photo-113744211.jpg',
          title: 'Raspberry Sorbet in A’dam',
          artist: 'Anka Zhuravleva',
          year: '2015',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 9, 19, 29, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 3, 13, 23, 29 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/stock-photo-101913689.jpg',
          title: 'The Modern Force',
          artist: 'Toby Harriman',
          year: '2015',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 10, 20, 30, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 4, 14, 24, 30 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/stock-photo-100427655.jpg',
          title: 'Muza',
          artist: 'Dmitry Rogozhkin',
          year: '2015',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 10, 20, 30, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 4, 14, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/stock-photo-99976761.jpg',
          title: 'Ballerina over NYC',
          artist: 'shared Vik Tory, Captured by DBox',
          year: '2015',
          rule: {
            "monday": [ 4, 14, 24, 30 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 10, 20, 30, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Jorge-Barreda-800x800.jpg',
          title: 'unknown title',
          artist: 'Jorge Barreda',
          year: 'xxi cent.',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 4, 14, 24, 30 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 10, 20, 30, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/TJ_Drysdale_Fine_Art_Photography_Madeleine_Acton.jpg',
          title: 'Madeleine Acton',
          artist: 'TJ Drysdale',
          year: 'xxi cent.',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 4, 14, 24, 30 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 10, 20, 30, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/fine-art-photography0005.jpg',
          title: 'Home built in the 30s and then abandoned only a few years ago.',
          artist: 'Leanne Cole',
          year: 'xxi cent.',
          rule: {
            "monday": [ 10, 20, 30, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 4, 14, 24, 30 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/3fc01a447a433f84df6191c6c9b16bc8--white-photography-fine-art-photography-ideas.jpg',
          title: 'Woman Smoking Cigarette',
          artist: 'Rolland András Flinta',
          year: 'xxi cent.',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 10, 20, 30, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 4, 14, 24, 30 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/imagePhoto.jpeg',
          title: 'unknown',
          artist: 'unknown',
          year: 'xxi cent.',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 11, 21, 1, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 5, 15, 25, 1 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/stock-photo-136664977.jpg',
          title: 'The Good Weather Umbrella',
          artist: 'John Wilhelm',
          year: '2016',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 11, 21, 1, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 5, 15, 25, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/DQ2wyjKW4AE5qDF.jpg',
          title: 'The Road To Spring',
          artist: 'Nikos Bantouvakis',
          year: '2016',
          rule: {
            "monday": [ 5, 15, 25, 1 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 11, 21, 1, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1459963600174895885.jpg',
          title: 'A Cloudy Day in Canal Park',
          artist: 'Like_He',
          year: '2016',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 5, 15, 25, 1 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 11, 21, 1, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/flamingodown.jpeg',
          title: 'Siesta',
          artist: 'Adrian Borda',
          year: '2016',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 5, 15, 25, 1 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 11, 21, 1, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Denise-Kwong-700x700.jpg',
          title: 'Trigger',
          artist: 'Denise Kwong',
          year: '2016',
          rule: {
            "monday": [ 11, 21, 1, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 5, 15, 25, 1 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/best-bw-photos-awarded-in-fine-art-photography-awards-2015-28.jpg',
          title: 'Fluid Time',
          artist: 'Julia Anna Gospodarou',
          year: '2015',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 11, 21, 1, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 5, 15, 25, 1 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/best-bw-photos-awarded-in-fine-art-photography-awards-2015-04.jpg',
          title: 'Renaissance',
          artist: 'Richard Bachellier',
          year: '2015',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 12, 22, 2, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 6, 16, 26, 2 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/best-bw-photos-awarded-in-fine-art-photography-awards-2015-07.jpg',
          title: 'multiexpo100',
          artist: 'Frank Machalowski',
          year: '2015',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 12, 22, 2, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 6, 16, 26, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/best-bw-photos-awarded-in-fine-art-photography-awards-2015-17.jpg',
          title: 'City Puddles',
          artist: 'Steve Geer',
          year: '2015',
          rule: {
            "monday": [ 6, 16, 26, 2 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday":[ 3, 13, 23, 1 ],
            "friday":  [ 12, 22, 2, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/best-bw-photos-awarded-in-fine-art-photography-awards-2015-25.jpg',
          title: 'Project Totem',
          artist: 'Jason McGroarty',
          year: '2015',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 6, 16, 26, 2 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 12, 22, 2, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/umbrellas.jpeg',
          title: 'Skyline',
          artist: 'Rodney Smith',
          year: '1995',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 6, 16, 26, 2 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 12, 22, 2, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/nude-pixel-study-1.jpg',
          title: 'Nude Study with Pixels',
          artist: 'Justin Blayney',
          year: '2015',
          rule: {
            "monday": [ 12, 22, 2, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 6, 16, 26, 2 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Image-from-a-shooting-with-Heta-Inari.jpg',
          title: 'image from a shooting with Heta Inari',
          artist: 'Susanna Majuri',
          year: '?',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 12, 22, 2, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 6, 16, 26, 2 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/sica_maciek.jpg',
          title: 'Maciek Jasik',
          artist: 'Sica',
          year: '2012',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 13, 23, 3, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 7, 17, 27, 3 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/5848001_orig.jpg',
          title: 'Mariette',
          artist: 'Marie-Christine Leroux',
          year: '1860 - 1861',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 13, 23, 3, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 7, 17, 27, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/8739335751_bbe0ed0c12_b.jpg',
          title: 'The Lives We Lead Will Leave On Their Own',
          artist: 'Austin Tott',
          year: '2013',
          rule: {
            "monday": [ 7, 17, 27, 3 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 13, 23, 3, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/il_570xN.1312040886_efh8.jpg',
          title: 'Trophy II',
          artist: 'Vanessa Paxton',
          year: '2017',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 7, 17, 27, 3 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 13, 23, 3, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Copyright-Kristi-Sutton-Elias.jpg',
          title: 'Fine Art Luxury Glamour',
          artist: 'Kristi Sutton Elias',
          year: '2013',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 7, 17, 27, 3 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 13, 23, 3, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Window-to-the-Sea-resize.jpg',
          title: 'Window to the Sea',
          artist: 'Ed King',
          year: '2013',
          rule: {
            "monday": [ 13, 23, 3, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 7, 17, 27, 3 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/craigroyal-1.jpg',
          title: 'Graphic Design',
          artist: 'Craig Royal',
          year: '?',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 13, 23, 3, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 7, 17, 27, 3 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/jeremy_blincoe_tyson_ephemeral_memory_100_66-7.jpg',
          title: 'Ephemeral Memory',
          artist: 'Jeremy Blincoe Tyson',
          year: '2010',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 14, 24, 4, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 8, 18, 28, 4 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/blocksatsea.jpeg',
          title: 'Low Tide,',
          artist: 'ParkeHarrison',
          year: '?',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 14, 24, 4, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 8, 18, 28, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/japan04.jpg',
          title: 'Cylindrical Hood',
          artist: 'Susan Fenton',
          year: '1996',
          rule: {
            "monday": [ 8, 18, 28, 4 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 14, 24, 4, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/2e7b4279dc610c2c7bfd6f5f9d6434d6.jpg',
          title: 'Barbie Suicide',
          artist: 'Mariel Clayton',
          year: '2012',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 8, 18, 28, 4 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 14, 24, 4, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/contemporary-fine-art-prints.jpg',
          title: 'Town Hall Train Station Sydney Australia',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 8, 18, 28, 4 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 14, 24, 4, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/5eb404c3b247db5b1240234ed15aa499.jpg',
          title: 'Abstract Impressionism in Photrgraphy',
          artist: 'Vicki Moritz',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 14, 24, 4, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 8, 18, 28, 4 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/288fba41b79b6a85d44844a089d5c076.jpg',
          title: 'Woman in Red',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 14, 24, 4, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 8, 18, 28, 4 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/seascapeImage.jpeg',
          title: 'Impressionist, panoramic study at Llandudno Beach, Western Cape',
          artist: 'Diane Bester',
          year: '?',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 15, 25, 5, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 9, 19, 29, 5 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/d863f971e18292bb0715ed90b92973f9.jpg',
          title: 'Photo',
          artist: 'Hannes Kilian',
          year: '?',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 15, 25, 5, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 9, 19, 29, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/MichaelNewler201122741635T.jpg',
          title: 'Venice',
          artist: 'Michael Newler',
          year: '?',
          rule: {
            "monday": [ 9, 19, 29, 5 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 15, 25, 5, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/5353334660_2df277e077_b.jpg',
          title: 'unknown title',
          artist: 'Maya Fiala Grau',
          year: '2010',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 9, 19, 29, 5 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 15, 25, 5, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/18147089744_69e06c068e_b.jpg',
          title: 'unknown title',
          artist: 'Maya Fiala Grau',
          year: '2014',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 9, 19, 29, 5 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 15, 25, 5, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/22642795729_a0aac82fbc_b.jpg',
          title: 'Dream On',
          artist: 'Maya Fiala Grau',
          year: '2015',
          rule: {
            "monday": [ 15, 25, 5, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 9, 19, 29, 5 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/085ee372b3f611139fcfbfbca432cceb.jpg',
          title: 'Eleanor, France',
          artist: 'Harry Callahan ',
          year: '1958',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 15, 25, 5, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 9, 19, 29, 5 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the-passion-of-the-christa-ramon-martinez.jpg',
          title: 'The Passion Of The Christa Poster',
          artist: 'Ramon Martinez',
          year: '?',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 16, 26, 6, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 10, 20, 30, 6 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/tumblr_mxpcjtcclu1qa4iv8o2_500.jpg',
          title: 'unknown title',
          artist: 'David Uzochukwu',
          year: '2013',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 16, 26, 6, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 10, 20, 30, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Phonsay-Phothisomphane2.jpg',
          title: 'unknown title',
          artist: 'Phonsay Phothisomphane',
          year: '2017',
          rule: {
            "monday": [ 10, 20, 30, 6 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 16, 26, 6, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/helena-georgiou-minimalist-photo-10.jpg',
          title: 'unknown title',
          artist: 'Helena Georgiou',
          year: '?',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 10, 20, 30, 6 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 16, 26, 6, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/homegrown_landscape-2699-XL.jpg',
          title: 'Minimalism - Miami, Florida',
          artist: 'Christian Murillo',
          year: '?',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 10, 20, 30, 6 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 16, 26, 6, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/THE-THREE-POINT-SHOT.jpg',
          title: 'The Three Point Shot',
          artist: 'Justas Gulbinovičius',
          year: '2017',
          rule: {
            "monday": [ 16, 26, 6, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 10, 20, 30, 6 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Seale1.jpg',
          title: 'Temporal Form no. 10',
          artist: 'Ansen Seale',
          year: 'xxi cent.',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 16, 26, 6, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 10, 20, 30, 6 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1382_lg.jpg',
          title: 'Evergreen',
          artist: 'Ansen Seale',
          year: 'xxi cent.',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 17, 27, 7, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 11, 21, 1, 7 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1385_lg.jpg',
          title: 'Loco Motif',
          artist: 'Ansen Seale',
          year: 'xxi cent.',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 17, 27, 7, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 11, 21, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1386_lg.jpg',
          title: 'Morning Brakes',
          artist: 'Ansen Seale',
          year: 'xxi cent.',
          rule: {
            "monday": [ 11, 21, 1, 7 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 17, 27, 7, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1384_lg.jpg',
          title: 'Red, White and Blue',
          artist: 'Ansen Seale',
          year: 'xxi cent.',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 11, 21, 1, 7 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 17, 27, 7, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/4-img_9553.jpg',
          title: 'unknown title',
          artist: 'Diana Miller',
          year: '2018',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 12, 22, 2, 8 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 18, 28, 8, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/cropped-163-4-DrillPress-pt.jpg',
          title: 'Workings No. 163',
          artist: 'Design Studios, LLC',
          year: '?',
          rule: {
            "monday": [ 18, 28, 8, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 12, 22, 2, 8 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/FineArt-12.jpg',
          title: 'Experimental Portrait',
          artist: 'Parish Kohanim',
          year: '?',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 18, 28, 8, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 12, 22, 2, 8 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/FineArt-02.jpg',
          title: 'Italian Sculptor\'s Studio',
          artist: 'Parish Kohanim',
          year: '?',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 18, 28, 8, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 12, 22, 2, 8 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/penguinBanner.jpg',
          title: 'Penguins Banner',
          artist: 'Brendan Smith',
          year: '?',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 18, 28, 8, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 12, 22, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/deb08be8cbdd6ec3e1f2ef7f9e13107b.jpg',
          title: 'Nude',
          artist: 'Edward Henry Weston',
          year: 'xix - xx cent.',
          rule: {
            "monday": [ 12, 22, 2, 8 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 18, 28, 8, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/SC31481.jpg',
          title: '?',
          artist: 'Alfred Stieglitz',
          year: 'xx cent.',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 12, 22, 2, 8 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 18, 28, 8, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1.bp_.blogspot.comalfred-stieglitz-georgia-d2f2431ef6166a356bba91a38212fba0e0127400.jpg',
          title: 'Portrait of Georgia O\'Keeffe',
          artist: 'Alfred Stieglitz',
          year: 'xx cent.',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 12, 22, 2, 8 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 18, 28, 8, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/slider-2017-01.png',
          title: '?',
          artist: 'Ana Santos',
          year: 'xxi cent.',
          rule: {
            "monday": [ 18, 28, 8, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 12, 22, 2, 8 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/FakingIt_teaser2.jpg',
          title: 'Man on Rooftop with Eleven Men in Formation on His Shoulders',
          artist: 'unknown artist',
          year: '1930',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 18, 28, 8, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 12, 22, 2, 8 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1W9A9631-III-web.jpg',
          title: 'Remnant At Square Lake',
          artist: 'Robert D. Flaherty',
          year: 'xxi cent.',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 19, 29, 9, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 13, 23, 3, 9 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1W9A2390-III-Rev-II-web.jpg',
          title: 'Separators And Battery At Sunset ',
          artist: 'Robert D. Flaherty',
          year: 'xxi cent.',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 19, 29, 9, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 13, 23, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/AF4A4722-II-WEB.jpg',
          title: 'Pioneer Sunset',
          artist: 'Robert D. Flaherty',
          year: 'xxi cent.',
          rule: {
            "monday": [ 13, 23, 3, 9 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 19, 29, 9, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/resize4.jpg',
          title: 'unknown title',
          artist: 'Jorge Maia',
          year: 'xxi cent.',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 13, 23, 3, 9 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 19, 29, 9, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/ItsHardlyNoticeable_15-200x300.jpg',
          title: 'It\'s Hardly Noticeable',
          artist: 'John William Keedy',
          year: '?',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 13, 23, 3, 9 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 19, 29, 9, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-as-art-e2-80-94-crafthubs-my-object-of-title-impressionism-the-famous_famous-fine-art-photographers_apartment_interior-design-for-small-apartments-apartment-blog-studio-ideas-basement-your.jpg',
          title: 'Impressionism of the Famous',
          artist: 'Clipgoo',
          year: '2016',
          rule: {
            "monday": [ 19, 29, 9, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 13, 23, 3, 9 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/nadine_rovner_9.jpg',
          title: 'Nadine Rovner',
          artist: 'Road Trip',
          year: '2008',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 19, 29, 9, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 13, 23, 3, 9 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/americanpatriotculture.jpeg',
          title: 'American Patriot Culture',
          artist: 'Eleonora 2005Gallery',
          year: '2005',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 20, 30, 10, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 14, 24, 4, 10 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Ghazal-framed.jpg',
          title: 'Ghazal',
          artist: 'Adnan Samman',
          year: '2017',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 20, 30, 10, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 14, 24, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Minnesota_Twins_1_tpfar4.jpg',
          title: 'Minnesota Twins',
          artist: 'William Drew',
          year: '?',
          rule: {
            "monday": [ 14, 24, 4, 10 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 20, 30, 10, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 311,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Ella-Rynehart-Amateur-Winner-Fine-Art-Photography-Awards-FAPA-2016.jpg',
          title: 'Work',
          artist: 'Ella Rynehart',
          year: '2016',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 14, 24, 4, 10 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 20, 30, 10, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 312,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/226.jpeg',
          title: 'Candy Cigarette',
          artist: 'Sally Mann',
          year: '1989',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 14, 24, 4, 10 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 20, 30, 10, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 313,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/d5559186a.jpg',
          title: 'Untitled #96',
          artist: 'Cindy Sherman',
          year: '1981',
          rule: {
            "monday": [ 20, 30, 10, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 14, 24, 4, 10 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 314,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/U5drNkJ8ddZRWsPQyW5cFrhCwaY5wWX_1680x8400.jpeg',
          title: 'Conceptual Fine Art Photography',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 20, 30, 10, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 14, 24, 4, 10 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 315,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/il_570xN.324722524.jpg',
          title: 'Waiting',
          artist: 'Vaida Petreikis',
          year: '2017',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 21, 1, 11, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 15, 25, 5, 11 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 316,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/2152016122444684_Into_The_Sand_2__1_of_1_-Edit-Edit-Edit.jpg',
          title: 'Seascape/Coastal',
          artist: 'Bobby Baker',
          year: '2014',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday":[ 12, 22, 2, 10 ],
            "thursday":  [ 21, 1, 11, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 15, 25, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 317,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/breathe-V-natalie-field-phogarty-web.jpg',
          title: 'Breathe In... Breathe Out... Let the Human In...',
          artist: 'Natalie Field',
          year: '?',
          rule: {
            "monday": [ 15, 25, 5, 11 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 21, 1, 11, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 318,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Loreal-Prystaj-photography-reflecting-on-nature-1.jpeg',
          title: 'Reflections of Nature',
          artist: 'Loreal Prystaj',
          year: '2017',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 15, 25, 5, 11 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 21, 1, 11, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 319,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/c79d7c924f0f696dd74292288c4cae54.jpg',
          title: 'Self-Portrait',
          artist: 'Milica Staletovic',
          year: '2015',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 15, 25, 5, 11 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 21, 1, 11, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 320,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/ec7cc38b761c5d9daa991f82b9bb5669.jpg',
          title: 'title unknown',
          artist: 'Martín De Pasquale',
          year: '1988',
          rule: {
            "monday": [ 21, 1, 11, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 15, 25, 5, 11 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 321,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/p-19783-3290_Michelle_7881Chang_40x60_M_web.jpg',
          title: 'Michelle Underwater',
          artist: 'Aaron Chang',
          year: '?',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 21, 1, 11, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 15, 25, 5, 11 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 322,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/4231_SilverLining_5598_1k.jpg',
          title: 'Silver Lining',
          artist: 'Aaron Chang',
          year: '?',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 22, 2, 12, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 16, 26, 6, 12 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 323,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Max-In-Flight-1-1024x731.jpg',
          title: 'Luminosa 1',
          artist: 'Parish Kohanim',
          year: '?',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 22, 2, 12, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 16, 26, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 324,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/figurative-01.jpg',
          title: 'Ella on Red Sphere',
          artist: 'Parish Kohanim',
          year: '?',
          rule: {
            "monday": [ 16, 26, 6, 12 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 22, 2, 12, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 325,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/55.jpg',
          title: 'Search of Light',
          artist: 'Josep Sumalla',
          year: '2014',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 16, 26, 6, 12 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 22, 2, 12, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 326,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/digital-art-photography-wallpaper-for-android-98439312.jpg',
          title: 'Nature Wallpaper',
          artist: 'unknown artist',
          year: '?',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 16, 26, 6, 12 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 22, 2, 12, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 327,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/fine-art-photography-this-is-your-body-project-giuseppe-gradella-3.jpg',
          title: 'This is your body',
          artist: 'Giuseppe Gradella',
          year: '?',
          rule: {
            "monday": [ 22, 2, 12, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 16, 26, 6, 12 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 328,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/mromomara2217.jpg',
          title: 'Zebra Step',
          artist: 'Anup Shah',
          year: '?',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 22, 2, 12, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 16, 26, 6, 12 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 329,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/25819.jpg',
          title: 'Day to Night',
          artist: 'Darren Names',
          year: '?',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 23, 3, 13, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 17, 27, 7, 13 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 330,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Fine_art-Students-Speos-01.jpg',
          title: 'unknown title',
          artist: 'Erise Docede',
          year: '?',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 23, 3, 13, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 17, 27, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 331,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/e9dba218c5f1fe04ff9b81b6e980767e.jpg',
          title: 'Girl',
          artist: 'John Chacon',
          year: '?',
          rule: {
            "monday": [ 17, 27, 7, 13 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 23, 3, 13, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 332,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/4c298521a087de23073a6d64dc50809b.jpg',
          title: 'Else Fangs',
          artist: 'Richard Turley',
          year: '?',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 17, 27, 7, 13 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 23, 3, 13, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 333,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/7f7977b4721e865d3da9a0a35a3f806a.jpg',
          title: 'Another Chance To Love',
          artist: 'Alexis Cuarezma',
          year: '?',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 17, 27, 7, 13 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 23, 3, 13, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 334,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/e587c5eac25b581a33ffcbbb07a4a532.jpg',
          title: 'Double Exposure',
          artist: 'Lucie Desmond',
          year: '?',
          rule: {
            "monday": [ 23, 3, 13, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 17, 27, 7, 13 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 335,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/5047d48be5fa7844ea8a552aa39eee90.jpg',
          title: 'Unknown Title',
          artist: 'Nick Turpin',
          year: '?',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 23, 3, 13, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 17, 27, 7, 13 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 336,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/2548753_orig.jpg',
          title: 'Krispy Kreme, "$20 Still Life" series',
          artist: 'Joshua Band & Emily Berger',
          year: '2013',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 24, 4, 14, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 18, 28, 8, 14 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 337,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/6276600_orig.jpg',
          title: 'Starbucks, "$20 Still Life" series',
          artist: 'Joshua Band & Emily Berger',
          year: '2013',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 24, 4, 14, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 18, 28, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 338,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/ground-cherries.jpg',
          title: 'Ground Cherries',
          artist: 'Erin FitzGibbon',
          year: '?',
          rule: {
            "monday": [ 18, 28, 8, 14 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 24, 4, 14, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 339,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/something_1_website.jpg',
          title: 'Still Life',
          artist: 'Jamila Clarke',
          year: '?',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 18, 28, 8, 14 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 24, 4, 14, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 340,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/web_wrotenothinga.jpg',
          title: 'Web Wrote Nothing',
          artist: 'Jamila Clarke',
          year: '?',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 18, 28, 8, 14 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 24, 4, 14, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 341,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/mayall-victoria.jpg',
          title: 'Queen Victoria & Prince Albert',
          artist: 'John Jabez Edwin Mayall',
          year: '1861',
          rule: {
            "monday": [ 24, 4, 14, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 18, 28, 8, 14 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 342,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/steiglitz-canal.jpg',
          title: 'Venetian Canal',
          artist: 'Alfred Stieglitz',
          year: '1894',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 24, 4, 14, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 18, 28, 8, 14 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 343,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/lynching-1930.jpg',
          title: 'Lynching in Marion, Indiana',
          artist: 'unknown artist',
          year: '1930',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 25, 5, 15, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 19, 29, 9, 15 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 344,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/4CICGMM9va0yl9iqZUvVcZT6_400.jpg',
          title: 'unknown title',
          artist: 'Michele Clement',
          year: '2007',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 25, 5, 15, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 19, 29, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 345,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/160414-0037_ATLANTA_GEORGIA_X_large.jpg',
          title: 'Skyview Ferris Wheel Downtown Atlanta, Georgia',
          artist: 'Robert Wojtowicz',
          year: '?',
          rule: {
            "monday": [ 19, 29, 9, 15 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 25, 5, 15, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 346,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/barnlogs.jpg',
          title: 'Barn Logs',
          artist: 'Alison Francis',
          year: '?',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 19, 29, 9, 15 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 25, 5, 15, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 347,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/October%2BSkies%233.jpg',
          title: 'October Skies #3',
          artist: 'Alison Francis',
          year: '?',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 19, 29, 9, 15 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 25, 5, 15, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 348,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/barndoordetail-edit.jpg',
          title: 'Barn Door Detail',
          artist: 'Alison Francis',
          year: '?',
          rule: {
            "monday": [ 25, 5, 15, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 19, 29, 9, 15 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 349,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/tree.jpg',
          title: 'Tree',
          artist: 'Aleah Michele',
          year: '2017',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 25, 5, 15, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 19, 29, 9, 15 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 350,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/boy.jpg',
          title: 'Boy',
          artist: 'Aleah Michele',
          year: '2017',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 26, 6, 16, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 20, 30, 10, 16 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 351,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/2-copy.jpg',
          title: 'unknown title',
          artist: 'Jamaica Wedding Photography',
          year: '2017',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 26, 6, 16, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 20, 30, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 352,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/DSC_4977.jpg',
          title: 'unknown title',
          artist: 'Jamaican Wedding Photography',
          year: '2017',
          rule: {
            "monday": [ 20, 30, 10, 16 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 26, 6, 16, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 353,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/basic-photographic-composition-01-620x348.jpg',
          title: 'unknown title',
          artist: 'Dylan Goldby',
          year: '2018',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 20, 30, 10, 16 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 26, 6, 16, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 354,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/truckinfield.png',
          title: 'End of the Road',
          artist: 'Kyle Wilson',
          year: '?',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 20, 30, 10, 16 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 26, 6, 16, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 355,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/WomanwithPipe480X320.jpg',
          title: 'Woman with Pipe',
          artist: 'Dana Gluckstein',
          year: '1981',
          rule: {
            "monday": [ 26, 6, 16, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 20, 30, 10, 16 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 356,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/3620397-VUNNYEZP-6.jpg',
          title: 'Insomnia no. I',
          artist: 'Flora Borsi',
          year: '?',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 26, 6, 16, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 20, 30, 10, 16 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 357,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1495875-PSFCHTOJ-32.jpg',
          title: 'Finding the Gold',
          artist: 'Paul Brouns',
          year: '?',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 27, 7, 17, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 21, 1, 11, 17 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 358,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/2637188-COPBYQNO-32.jpg',
          title: 'The walk 2',
          artist: 'Alfonso Batalla',
          year: '?',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 27, 7, 17, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 21, 1, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 359,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1951137-HDWLEJLN-32.jpg',
          title: 'Imagine Landscape',
          artist: 'igor vitomirov',
          year: '?',
          rule: {
            "monday": [ 21, 1, 11, 17 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 27, 7, 17, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 360,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/2849157-XZLVVUJR-32.jpg',
          title: 'Jarred Windflowers',
          artist: 'Christoffer Relander',
          year: '?',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 21, 1, 11, 17 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 27, 7, 17, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 361,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Old-Studebaker-small-1.jpg',
          title: 'Old Studebaker',
          artist: 'Steve Bingham',
          year: '2013',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 21, 1, 11, 17 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 27, 7, 17, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 362,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Colorado-mine-1.jpg',
          title: 'Longfellow Mine, Colorado (On Red Mountain)',
          artist: 'Steve Bingham',
          year: 'xxi century',
          rule: {
            "monday": [ 27, 7, 17, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 21, 1, 11, 17 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 363,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Door-ghost.jpg',
          title: 'Gone too Long - Sage, Wyoming I',
          artist: 'Steve Bingham',
          year: 'xxi century',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 27, 7, 17, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 21, 1, 11, 17 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 364,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Underwood-Typewriter.jpg',
          title: 'Underwood Typewriter - Stein, New Mexico',
          artist: 'Steve Bingham',
          year: 'xxi century',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 28, 8, 18, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 22, 2, 12, 18 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 365,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/_DSC2409.jpg',
          title: 'Embudo, New Mexico - Phillips Route 66 Sign',
          artist: 'Steve Bingham',
          year: 'xxi century',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 28, 8, 18, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 22, 2, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 366,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/28-14-3-17-11-57-13m.jpg',
          title: 'Thunderhead Clouds',
          artist: 'unknown artist',
          year: '?',
          rule: {
            "monday": [ 22, 2, 12, 18 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 28, 8, 18, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 367,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1mara2217.jpg',
          title: 'Torrent',
          artist: 'Anup Shah',
          year: '2017',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 22, 2, 12, 18 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 28, 8, 18, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 368,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/thumbnail_231201714546734_The_Mara-43.jpg',
          title: 'Enigma',
          artist: 'Anup Shah',
          year: '2017',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 22, 2, 12, 18 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 28, 8, 18, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 369,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Jib15.jpg',
          title: 'title unknown',
          artist: 'Jib Peter',
          year: '2015',
          rule: {
            "monday": [ 28, 8, 18, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 22, 2, 12, 18 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 370,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/25.jpg',
          title: 'Brainwash',
          artist: 'Matthieu G',
          year: '2008',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 28, 8, 18, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 22, 2, 12, 18 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 371,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/jason_matias_for_fstoppers_1.jpg',
          title: 'St. Peter\'s Birds',
          artist: 'Jason Matais',
          year: '?',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 29, 9, 19, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 23, 3, 13, 19 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 372,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/large_a61c0be1c_powder5-14.jpg',
          title: 'Project Powder',
          artist: 'Joshua Krause',
          year: '?',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 29, 9, 19, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 23, 3, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 373,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Fine-art-photography-8.jpg',
          title: 'Deep Soul Mates',
          artist: 'unknown artist',
          year: '?',
          rule: {
            "monday": [ 23, 3, 13, 19 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 29, 9, 19, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 374,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Fine-Art-Portrait-Photographer-Creates-Magical-Images-Of-Children-586aedcea9189__880.jpg',
          title: 'unknown title',
          artist: 'Annelise Sophiea',
          year: 'xxi cent.',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 23, 3, 13, 19 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 29, 9, 19, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 375,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/NUIT_DE_NOEL_HAPPY_CLUB_1963_WEB.jpg',
          title: 'Nuit De Noel Happy Club 1963',
          artist: 'Malick Sidibe',
          year: '1963',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 23, 3, 13, 19 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 29, 9, 19, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 376,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1517573578khfe9ana.jpg',
          title: 'Come Hell or High Water (Series)',
          artist: 'Coco Amardeil',
          year: '2017',
          rule: {
            "monday": [ 29, 9, 19, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 23, 3, 13, 19 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 377,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1517573578zlkzqemilia.jpg',
          title: 'Come Hell or High Water (Series)',
          artist: 'Coco Amardeil',
          year: '2017',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 29, 9, 19, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 23, 3, 13, 19 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 378,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/151757357952trovictor.jpg',
          title: 'Come Hell or High Water (Series)',
          artist: 'Coco Amardeil',
          year: '2017',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 30, 10, 20, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 24, 4, 14, 21 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 379,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1517573579oegwwphilippe.jpg',
          title: 'Come Hell or High Water (Series)',
          artist: 'Coco Amardeil',
          year: '2017',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 30, 10, 20, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 24, 4, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 380,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1517573579b8rk6theo.jpg',
          title: 'Come Hell or High Water (Series)',
          artist: 'Coco Amardeil',
          year: '2017',
          rule: {
            "monday": [ 24, 4, 14, 21 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 30, 10, 20, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 381,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/128393.jpg',
          title: 'Ntozakhe II, Parktown',
          artist: 'Zanele Muholi',
          year: '2016',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 24, 4, 14, 21 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 30, 10, 20, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 382,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/chateauxballoon-jinkyart-tur-2-1100.jpg',
          title: 'To let go of burden is to run free like a child',
          artist: 'Barb Uil',
          year: '2014',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 24, 4, 14, 21 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 30, 10, 20, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 383,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/152115cd799216fe427a4f57462cea38.jpg',
          title: 'untitled',
          artist: 'Ravshaniya Azulye',
          year: '',
          rule: {
            "monday": [ 30, 10, 20, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 24, 4, 14, 21 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 384,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Toad-Stool.jpg',
          title: 'Toad Stool',
          artist: 'Bernard Wolf',
          year: '?',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 30, 10, 20, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 24, 4, 14, 21 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 385,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/hiding_behind_the_flowers_photos_omerika_03.jpg',
          title: 'Hiding Behind the Flowers',
          artist: 'Omerika',
          year: '?',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 1, 11, 21, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 25, 5, 15, 22 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 386,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/ruth-st-denis-ca-1900.jpg',
          title: 'Ruth St. Denis',
          artist: 'Alice Boughton',
          year: 'c.1900',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 1, 11, 21, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 25, 5, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 387,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/roger-fry-1900-ca.jpg',
          title: 'Roger Fry',
          artist: 'Alice Boughton',
          year: 'c.1900',
          rule: {
            "monday": [ 25, 5, 15, 22 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 1, 11, 21, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 388,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/sand-and-wild-roses-1909.jpg',
          title: 'Sand and Wild Roses',
          artist: 'Alice Boughton',
          year: 'c.1909',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 25, 5, 15, 22 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 1, 11, 21, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 389,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/comforted-1906.jpg',
          title: 'Comforted',
          artist: 'Alice Boughton',
          year: '1906',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 25, 5, 15, 22 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 1, 11, 21, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 390,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/john-drinkwater-ca-1920s.jpg',
          title: 'John Drinkwater',
          artist: 'Alice Boughton',
          year: 'c.1920',
          rule: {
            "monday": [ 1, 11, 21, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 25, 5, 15, 22 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 391,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/8368080_orig.jpg',
          title: 'Spider Woman\'s Home, Canyon de Chelly, Navajo Nation',
          artist: 'Kent Winchester',
          year: '?',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 1, 11, 21, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 25, 5, 15, 22 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 392,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/garlic-4_orig.jpg',
          title: 'Garlic',
          artist: 'M. Axel Wikstrom',
          year: '?',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 2, 12, 22, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 26, 6, 16, 23 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 393,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/farm-183_orig.jpg',
          title: 'Farm',
          artist: 'M. Axel Wikstrom',
          year: '?',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 2, 12, 22, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 26, 6, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 394,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/eaglehunterseptember-30-2016e-8711-edit_orig.jpg',
          title: 'Eagle Hunter',
          artist: 'John Simmons',
          year: '2016',
          rule: {
            "monday": [ 26, 6, 16, 23 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 2, 12, 22, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 395,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/165810_orig.jpg',
          title: 'unknown title',
          artist: 'Knate Myers',
          year: '?',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 26, 6, 16, 23 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 2, 12, 22, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 396,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/21-2009_375.JPG',
          title: 'Allegiance with Wakefulness',
          artist: 'Shirin Neshat',
          year: '1994',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 26, 6, 16, 23 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 2, 12, 22, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 397,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/irene-liebler-fine-art-photography-portfolio-12-638.jpg',
          title: 'Who Moved My Cheese',
          artist: 'Irene Liebler',
          year: '2014',
          rule: {
            "monday": [ 2, 12, 22, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 26, 6, 16, 23 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 398,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-art-wallpaper-pictures-5.jpg',
          title: 'Ivy Bruce',
          artist: 'unknown title',
          year: '2016',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 2, 12, 22, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 26, 6, 16, 23 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 399,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/122531751-98e8b9c9-4559-4212-8200-4928ea4daa89.jpg',
          title: 'Ero lì da turista, senza le mie apparecchiature - racconta  - E come molti miei colleghi, mi sono ritrovato nel mezzo degli attentati più sanguinari che la Francia abbia mai conosciuto. La mattina dopo ho raggiunto i luoghi della tragedia e con il mio smartphone ho raccolto le immagini in bianco e nero',
          artist: 'Valéry Hache',
          year: '2015',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 3, 13, 23, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 27, 7, 17, 24 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 400,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Richard-Avedon-Photography-1.jpg',
          title: 'Audrey Hepburn',
          artist: 'Richard Avedon',
          year: '1967',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 3, 13, 23, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 27, 7, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 401,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/35831658980.jpg',
          title: 'Only Two',
          artist: 'unknown artist',
          year: '?',
          rule: {
            "monday": [ 27, 7, 17, 24 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 3, 13, 23, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 402,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/35831868177.jpg',
          title: 'Habitat',
          artist: 'artist unknown',
          year: '?',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 27, 7, 17, 24 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 3, 13, 23, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 403,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/35831142246.jpg',
          title: 'Lunchtime atop a skyscraper',
          artist: 'artist unknown',
          year: '?',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 27, 7, 17, 24 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 3, 13, 23, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 404,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/35831306577.jpg',
          title: 'Still Life',
          artist: 'artist unknown',
          year: '?',
          rule: {
            "monday": [ 3, 13, 23, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 27, 7, 17, 24 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 405,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/35831670705.jpg',
          title: 'Still Life',
          artist: 'artist unknown',
          year: '?',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 3, 13, 23, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 27, 7, 17, 24 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 406,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/emel-karakozak-budding-nudes-abstract-photographer-20.jpg',
          title: 'Abstract Nudes',
          artist: 'Emel Karakozak',
          year: '2016',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 4, 14, 24, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 28, 8, 18, 25 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 407,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/emel-karakozak-budding-nudes-abstract-photographer-19.jpg',
          title: 'Abstract Nudes',
          artist: 'Emel Karakozak',
          year: '2016',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 4, 14, 24, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 28, 8, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 408,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/emel-karakozak-budding-nudes-abstract-photographer-18.jpg',
          title: 'Abstract Nudes',
          artist: 'Emel Karakozak',
          year: '2016',
          rule: {
            "monday": [ 28, 8, 18, 25 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 4, 14, 24, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 409,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/emel-karakozak-budding-nudes-abstract-photographer-17.jpg',
          title: 'Abstract Nudes',
          artist: 'Emel Karakozak',
          year: '2016',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 28, 8, 18, 25 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 4, 14, 24, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 410,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/emel-karakozak-budding-nudes-abstract-photographer-16.jpg',
          title: 'Abstract Nudes',
          artist: 'Emel Karakozak',
          year: '2016',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 28, 8, 18, 25 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 4, 14, 24, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 411,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/sam_moeller___amazing_creative_art_photography_by_sammoeller-dadkjmz.jpg',
          title: 'Amazing creative art photography',
          artist: 'Sam Moeller',
          year: '2016',
          rule: {
            "monday": [ 4, 14, 24, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 28, 8, 18, 25 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 412,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/sam_moeller___sunset_and_sunrise_photography_by_sammoeller-dadkfno.jpg',
          title: 'Sunset and Sunrise Photography',
          artist: 'Sam Moeller',
          year: '2016',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 4, 14, 24, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 28, 8, 18, 25 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 413,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/sam_moeller__awesome_digital_art_of_emi_by_sammoeller-daf2yvj.jpg',
          title: 'Awesome Digital Art of Emi',
          artist: 'Sam Moeller',
          year: '2016',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 5, 15, 25, 23 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 29, 9, 19, 26 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 414,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/sam_moeller__beautiful_desert_creative_art_by_sammoeller-dadkkqo.jpg',
          title: 'Beautiful Desert Creative Art',
          artist: 'Sam Moeller',
          year: '2016',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 5, 15, 25, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 29, 9, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 415,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/sam_moeller___beautiful_tortoise_photography_by_sammoeller-da8xl85.jpg',
          title: 'Beautiful Tortoise Photography',
          artist: 'Sam Moeller',
          year: '2016',
          rule: {
            "monday": [ 29, 9, 19, 26 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 5, 15, 25, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 416,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Chris-Rivera13.jpg',
          title: 'untitled',
          artist: 'Chris Rivera',
          year: '2015',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 29, 9, 19, 26 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 5, 15, 25, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 417,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Chris-Rivera8.jpg',
          title: 'untitled',
          artist: 'Chris Rivera',
          year: '2015',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 29, 9, 19, 26 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 5, 15, 25, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 418,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/wom_silver-gal-01-SILVEREYE.jpg',
          title: 'Silvereye',
          artist: 'Guido Argentini',
          year: '?',
          rule: {
            "monday": [ 5, 15, 25, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 29, 9, 19, 26 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 419,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/wom_silver-gal-03-AIRMID.jpg',
          title: 'Airmid',
          artist: 'Guido Argentini',
          year: '?',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 5, 15, 25, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 29, 9, 19, 26 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 420,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/WE-ARE-ASLEEP-UNTIL-WE-FALL-IN-LOVE.jpg',
          title: 'We Are Asleep Until We Fall in Love',
          artist: 'Guido Argentini',
          year: '?',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 6, 16, 26, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 30, 10, 20, 27 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 421,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Photography-Wallpapers-And-Backgrounds-24-1024x576.jpg',
          title: 'Wallpaper/Background',
          artist: 'artist unknown',
          year: '?',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 6, 16, 26, 24 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 30, 10, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 422,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Photography-Wallpapers-And-Backgrounds-23-1024x640.jpg',
          title: 'Wallpaper/Background',
          artist: 'artist unknown',
          year: '?',
          rule: {
            "monday": [ 30, 10, 20, 27 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 6, 16, 26, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 423,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Photography-Wallpapers-And-Backgrounds-22-1024x640.jpg',
          title: 'Wallpaper/Background',
          artist: 'artist unknown',
          year: '?',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 30, 10, 20, 27 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 6, 16, 26, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 424,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Photography-Wallpapers-And-Backgrounds-21-1024x640.jpg',
          title: 'Wallpaper/Background',
          artist: 'unknown artist',
          year: '?',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 30, 10, 20, 27 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 6, 16, 26, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 425,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Photography-Wallpapers-And-Backgrounds-20-1024x640.jpg',
          title: 'Wallpaper/Background',
          artist: 'unknown artist',
          year: '?',
          rule: {
            "monday": [ 6, 16, 26, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 30, 10, 20, 27 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 426,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-untitled-miscellaneous-people-nude-female-large-open.jpg',
          title: 'Untitled',
          artist: 'Aleksandra Aleks',
          year: '2012',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 6, 16, 26, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 30, 10, 20, 27 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 427,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-j-2-medium-format-film-people-portrait-female-large-open.jpg',
          title: 'J. - 2',
          artist: 'Gregor L.',
          year: '2011',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 7, 17, 27, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 1, 11, 21, 28 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 428,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-untitled-medium-format-film-people-portrait-female-large-open.jpg',
          title: 'Untitled',
          artist: 'Wojciech Skibicki',
          year: '2011',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 7, 17, 27, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 1, 11, 21, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 429,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/self-portrait-4-large-open.jpg',
          title: 'Self-Portrait 4',
          artist: 'Anna Shakina',
          year: '2012',
          rule: {
            "monday": [ 1, 11, 21, 28 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 7, 17, 27, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 430,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-amsterdam-1972-medium-format-film-people-miscellaneous-female-large-open.jpg',
          title: 'Amsterdam 1972',
          artist: 'Dave Orsava',
          year: '1972',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 1, 11, 21, 28 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 7, 17, 27, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 431,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-10-miscellaneous-people-female-large-open.jpg',
          title: '10',
          artist: 'Anna Shakina',
          year: '2012',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 1, 11, 21, 28 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 7, 17, 27, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 432,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-k-b-medium-format-film-people-portrait-female-large-open.jpg',
          title: 'K. B.',
          artist: 'Magda Andrzejewska',
          year: '2011',
          rule: {
            "monday": [ 7, 17, 27, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 1, 11, 21, 28 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 433,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/stay-on-these-roads-large-open.jpg',
          title: 'Stay on These Roads',
          artist: 'Bogdan Panait',
          year: '2011',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 7, 17, 27, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 1, 11, 21, 28 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 434,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-miscellaneous-people-portrait-large-open.jpg',
          title: 'untitled',
          artist: 'Kalua K Krynska',
          year: '2008',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 8, 18, 28, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 2, 12, 22, 29 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 435,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-untitled-miscellaneous-people-female-large-open.jpg',
          title: 'Untitled',
          artist: 'Ivan Palis',
          year: '2012',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 8, 18, 28, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 2, 12, 22, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 436,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/untitled-large-open.jpg',
          title: 'Untitled',
          artist: 'Ivan Palis',
          year: '2011',
          rule: {
            "monday": [ 2, 12, 22, 29 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 8, 18, 28, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 437,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-the-necklace-medium-format-film-people-nude-female-large-open.jpg',
          title: 'The Necklace',
          artist: 'Matthieu G.',
          year: '2012',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 2, 12, 22, 29 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 8, 18, 28, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 438,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-kejt-medium-format-film-people-miscellaneous-female-large-open.jpg',
          title: 'Kejt',
          artist: 'Magda Andrzejewska',
          year: '2011',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 2, 12, 22, 29 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 8, 18, 28, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 439,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/image-ekaterina-medium-open.jpg',
          title: 'Ekaterina',
          artist: 'Yuriy K',
          year: '2012',
          rule: {
            "monday": [ 8, 18, 28, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 2, 12, 22, 29 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 440,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-the-way-i-see-her-miscellaneous-people-female-large-open.jpg',
          title: 'The Way I See Her',
          artist: 'Aleksander Smid',
          year: '2012',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 8, 18, 28, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 2, 12, 22, 29 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 441,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-hanka-digital-people-portrait-female-large-open.jpg',
          title: 'Hanka',
          artist: 'Andrea Ehrenreich',
          year: '2010',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 9, 19, 29, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 3, 13, 23, 30 ],
            "sunday": [ 2, 12, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 442,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-self-portrait-miscellaneous-people-female-large-open.jpg',
          title: 'Self Portrait',
          artist: 'Anna Shakina',
          year: '2011',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 9, 19, 29, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 3, 13, 23, 30 ],
            "sunday": [ 2, 12, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 443,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-untitled-digital-people-nude-female-large-open.jpg',
          title: 'Untitled',
          artist: 'Paluksht Mark',
          year: '2011',
          rule: {
            "monday": [ 2, 12, 23, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 9, 19, 29, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 3, 13, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 444,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/photography-lisa-medium-format-film-people-infant-children-girl-large-open.jpg',
          title: 'Lisa',
          artist: 'Dumbo I.gledam',
          year: '2011',
          rule: {
            "monday": [ 3, 13, 23, 30 ],
            "tuesday": [ 2, 12, 23, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 9, 19, 29, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 445,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/star-people-portrait-female-large-open.jpg',
          title: 'Star',
          artist: 'Sara Braun',
          year: '2011',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 3, 13, 23, 30 ],
            "wednesday": [ 2, 12, 23, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 9, 19, 29, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 446,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Show-offLacey-011.jpg',
          title: 'Showoff Lacey',
          artist: 'Nadette Clare-Talbot Bettridge',
          year: '2016',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 3, 13, 23, 30 ],
            "thursday": [ 2, 12, 23, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 9, 19, 29, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 447,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/LaceInFlight-012.jpg',
          title: 'Lace In Flight',
          artist: 'Nadette Clare-Talbot Bettridge',
          year: '2016',
          rule: {
            "monday": [ 9, 19, 29, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 3, 13, 23, 30 ],
            "friday": [ 2, 12, 23, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 448,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/SwimLaceySwim-015.jpg',
          title: 'Swim Lacey Swim',
          artist: 'Nadette Clare-Talbot Bettridge',
          year: '2016',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 10, 20, 30, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 4, 14, 24, 1 ],
            "saturday": [ 3, 13, 24, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 449,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/LaceYourFace-016.jpg',
          title: 'Lace Your Face',
          artist: 'Nadette Clare-Talbot Bettridge',
          year: '2016',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 10, 20, 30, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 4, 14, 24, 1 ],
            "sunday": [ 3, 13, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 450,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/sita-21.jpg',
          title: 'Religious Diversity',
          artist: 'Sita Azzopardi',
          year: '2018',
          rule: {
            "monday": [ 3, 13, 24, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 10, 20, 30, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 4, 14, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 451,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/stefan_beutler_photography_13.jpg',
          title: 'untitled',
          artist: 'Stefan Beutler',
          year: '2014',
          rule: {
            "monday": [ 4, 14, 24, 1 ],
            "tuesday": [ 3, 13, 24, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 10, 20, 30, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 452,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/stefan_beutler_photography_03.jpg',
          title: 'untitled',
          artist: 'Stefan Beutler',
          year: '2014',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 4, 14, 24, 1 ],
            "wednesday": [ 3, 13, 24, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 10, 20, 30, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 453,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/stefan_beutler_photography_15.jpg',
          title: 'untitled',
          artist: 'Stefan Beutler',
          year: '2014',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 4, 14, 24, 1 ],
            "thursday": [ 3, 13, 24, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 10, 20, 30, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 454,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/stefan_beutler_photography_16.jpg',
          title: 'untitled',
          artist: 'Stefan Beutler',
          year: '2014',
          rule: {
            "monday": [ 10, 20, 30, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 4, 14, 24, 1 ],
            "friday": [ 3, 13, 24, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 455,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/stefan_beutler_photography_18.jpg',
          title: 'untitled',
          artist: 'Stefan Beutler',
          year: '2014',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 11, 21, 1, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 5, 15, 25, 2 ],
            "saturday": [ 4, 14, 25, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 456,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/greenrocks.jpeg',
          title: 'Cookie Cutter Rocks',
          artist: 'Steven Algie',
          year: '?',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 11, 21, 1, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 5, 15, 25, 2 ],
            "sunday": [ 4, 14, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 457,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/swimpark.jpeg',
          title: 'On Your Marks Award Winning',
          artist: 'Steven Algie',
          year: '?',
          rule: {
            "monday": [ 4, 14, 25, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 11, 21, 1, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 5, 15, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 458,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/bluey.jpeg',
          title: 'Bluey',
          artist: 'Steven Algie',
          year: '?',
          rule: {
            "monday": [ 5, 15, 25, 2 ],
            "tuesday": [ 4, 14, 25, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 11, 21, 1, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 459,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/salamandartree.jpeg',
          title: 'Salamandar Tree by Moon Light',
          artist: 'Steven Algie',
          year: '?',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 5, 15, 25, 2 ],
            "wednesday": [ 4, 14, 25, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 11, 21, 1, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 460,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/sharktower.jpeg',
          title: 'Shark Tower, Danger',
          artist: 'Steven Algie',
          year: '?',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 5, 15, 25, 2 ],
            "thursday": [ 4, 14, 25, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 11, 21, 1, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 461,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Antoine.jpg',
          title: 'Antoine',
          artist: 'Coco Amardeil',
          year: '2018',
          rule: {
            "monday": [ 11, 21, 1, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 5, 15, 25, 2 ],
            "friday": [ 4, 14, 25, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 462,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Clara.jpg',
          title: 'Clara',
          artist: 'Coco Amardeil',
          year: '2018',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 12, 22, 2, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 6, 16, 26, 3 ],
            "saturday": [ 5, 15, 26, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 463,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Victor.jpg',
          title: 'Victor',
          artist: 'Coco Amardeil',
          year: '2018',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 12, 22, 2, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 6, 16, 26, 3 ],
            "sunday": [ 5, 15, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 464,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Philippe.jpg',
          title: 'Philippe',
          artist: 'Coco Amardeil',
          year: '2018',
          rule: {
            "monday": [ 5, 15, 26, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 12, 22, 2, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 6, 16, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 465,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Arnaud.jpg',
          title: 'Arnaud',
          artist: 'Coco Amardeil',
          year: '2018',
          rule: {
            "monday": [ 6, 16, 26, 3 ],
            "tuesday": [ 5, 15, 26, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 12, 22, 2, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 466,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1311514-LSTHIBSB-7.jpg',
          title: 'Post Office, Darwin, CA',
          artist: 'Ed Freeman',
          year: '?',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 6, 16, 26, 3 ],
            "wednesday": [ 5, 15, 26, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 12, 22, 2, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 467,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/943536-7.jpg',
          title: 'Sadness',
          artist: 'Flora Borsi',
          year: '?',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 6, 16, 26, 3 ],
            "thursday": [ 5, 15, 26, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 12, 22, 2, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 468,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/4250109-DHMVSNBU-7.jpg',
          title: 'Waiting for the red moon',
          artist: 'Alessandra Favetto',
          year: '?',
          rule: {
            "monday": [ 12, 22, 2, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 6, 16, 26, 3 ],
            "friday": [ 5, 15, 26, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 469,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/660640-7.jpg',
          title: 'Series Tokyo Doll',
          artist: 'Takaki Hashimoto',
          year: '?',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 13, 23, 3, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 7, 17, 27, 4 ],
            "saturday": [ 6, 16, 27, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 470,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1812801-KTXAJMOH-8.jpg',
          title: 'Spring Abstraction Limited',
          artist: 'Igor Vitomirov',
          year: '?',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 13, 23, 3, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 7, 17, 27, 4 ],
            "sunday": [ 6, 16, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 471,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/dressBy.jpg',
          title: 'DRESS BY YVES SAINT LAURENT...',
          artist: 'Jeanloup Sieff',
          year: '?',
          rule: {
            "monday": [ 6, 16, 27, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 13, 23, 3, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 7, 17, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 472,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/astridsBack.jpg',
          title: 'Astrid´s Back, Palm Beach, Harper´s...',
          artist: 'Jeanloup Sieff',
          year: '?',
          rule: {
            "monday": [ 7, 17, 27, 4 ],
            "tuesday": [ 6, 16, 27, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 13, 23, 3, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 473,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/louiseParis.jpg',
          title: 'Louise, Paris, 1985',
          artist: 'Jeanloup Sieff',
          year: '1985',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 7, 17, 27, 4 ],
            "wednesday": [ 6, 16, 27, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 13, 23, 3, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 474,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/aRainyDay.jpg',
          title: 'A Rainy Day, Paris, 1975',
          artist: 'Jeanloup Sieff',
          year: '1975',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 7, 17, 27, 4 ],
            "thursday": [ 6, 16, 27, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 13, 23, 3, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 475,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/astonMartin.jpg',
          title: 'Aston Martin, 1975',
          artist: 'Jeanloup Sieff',
          year: '1975',
          rule: {
            "monday": [ 13, 23, 3, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 7, 17, 27, 4 ],
            "friday": [ 6, 16, 27, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 476,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Flora-Borsi-combines-human-body-with-animals-artists-I-Lobo-you.jpg',
          title: 'unknown title',
          artist: 'Flora Borsi',
          year: '?',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 14, 24, 4, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 8, 18, 28, 5 ],
            "saturday": [ 7, 17, 28, 5 ],
            "sunday": [ 6, 16, 26, 24]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 477,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Flora-Borsi-combines-human-body-with-animals-artists-I-Lobo-you2.jpg',
          title: 'unknown title',
          artist: 'Flora Borsi',
          year: '?',
          rule: {
            "monday": [ 6, 16, 26, 24],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 14, 24, 4, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 8, 18, 28, 5 ],
            "sunday": [ 7, 17, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 478,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Flora-Borsi-combines-human-body-with-animals-artists-I-Lobo-you3.jpg',
          title: 'unknown title',
          artist: 'Flora Borsi',
          year: '?',
          rule: {
            "monday": [ 7, 17, 28, 5 ],
            "tuesday": [ 6, 16, 26, 24 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 14, 24, 4, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 8, 18, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 479,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Flora-Borsi-combines-human-body-with-animals-artists-I-Lobo-you4.jpg',
          title: 'unknown title',
          artist: 'Flora Borsi',
          year: '?',
          rule: {
            "monday": [ 8, 18, 28, 5 ],
            "tuesday": [ 7, 17, 28, 5 ],
            "wednesday": [ 6, 16, 26, 24 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 14, 24, 4, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 480,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Flora-Borsi-combines-human-body-with-animals-artists-I-Lobo-you6.jpg',
          title: 'unknown title',
          artist: 'Flora Borsi',
          year: '?',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 8, 18, 28, 5 ],
            "wednesday": [ 7, 17, 28, 5 ],
            "thursday": [ 6, 16, 26, 24 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 14, 24, 4, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 481,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/fine-art-photography-awards-1.jpg',
          title: 'Concrete Jungle',
          artist: 'Sajin Sasidharan',
          year: '2019',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 8, 18, 28, 5 ],
            "thursday": [ 7, 17, 28, 5 ],
            "friday": [ 6, 16, 26, 24 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 14, 24, 4, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 482,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/fine-art-photography-awards-2.jpg',
          title: 'Concrete Jungle',
          artist: 'Sajin Sasidharan',
          year: '2019',
          rule: {
            "monday": [ 14, 24, 4, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 8, 18, 28, 5 ],
            "friday": [ 7, 17, 28, 5 ],
            "saturday": [ 6, 16, 26, 24 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 483,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/fine-art-photography-awards-3.jpg',
          title: 'Concrete Jungle',
          artist: 'Sajin Sasidharan',
          year: '2019',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 15, 25, 5, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 9, 19, 29, 6 ],
            "saturday": [ 8, 18, 29, 6 ],
            "sunday": [ 7, 17, 27, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 484,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/fine-art-photography-awards-4.jpg',
          title: 'Night walk',
          artist: 'Durvile Cavalcanti',
          year: '2019',
          rule: {
            "monday": [ 7, 17, 27, 25 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 15, 25, 5, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 9, 19, 29, 6 ],
            "sunday": [ 8, 18, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 485,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/fine-art-photography-awards-5.jpg',
          title: 'Night walk',
          artist: 'Durvile Cavalcanti',
          year: '2019',
          rule: {
            "monday": [ 8, 18, 29, 6 ],
            "tuesday": [ 7, 17, 27, 25 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 15, 25, 5, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 9, 19, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 486,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Draped-Gabrielle-00309-Edit-iframe.jpg',
          title: 'Draped Gabrielle',
          artist: 'Craig Stocks',
          year: '?',
          rule: {
            "monday": [ 9, 19, 29, 6 ],
            "tuesday": [ 8, 18, 29, 6 ],
            "wednesday": [ 7, 17, 27, 25 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 15, 25, 5, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 487,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Gabi-10074-Edit-iframe.jpg',
          title: 'Gabi',
          artist: 'Craig Stocks',
          year: '?',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 9, 19, 29, 6 ],
            "wednesday": [ 8, 18, 29, 6 ],
            "thursday": [ 7, 17, 27, 25 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 15, 25, 5, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 488,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Studio--18230-Edit-iframe.jpg',
          title: 'Studio',
          artist: 'Craig Stocks',
          year: '?',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 9, 19, 29, 6 ],
            "thursday": [ 8, 18, 29, 6 ],
            "friday": [ 7, 17, 27, 25 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 15, 25, 5, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 489,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Gabi-09029-Edit-iframe.jpg',
          title: 'Gabi',
          artist: 'Craig Stocks',
          year: '?',
          rule: {
            "monday": [ 15, 25, 5, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 9, 19, 29, 6 ],
            "friday": [ 8, 18, 29, 6 ],
            "saturday": [ 7, 17, 27, 25 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 490,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/HidinginPlainSight-CF000964-Edit-2Stretched-iframe.jpg',
          title: 'Hiding in Plain Sight',
          artist: 'Craig Stocks',
          year: '?',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 16, 26, 6, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 10, 20, 30, 7 ],
            "saturday": [ 9, 19, 30, 7 ],
            "sunday": [ 8, 18, 28, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 491,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/winnipeg_police_cruiser_at_a_liquor_mart_by_daveshaver_dd4ftu0-pre.jpg',
          title: 'Winnipeg Police Cruiser At A Liquor Mart',
          artist: 'Dave Shaver',
          year: '2019',
          rule: {
            "monday": [ 8, 18, 28, 26 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 16, 26, 6, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 10, 20, 30, 7 ],
            "sunday": [ 9, 19, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 492,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/f_train__by_jehinger_dd4gb6b-pre.jpg',
          title: 'F Train',
          artist: 'Jon Ehinger',
          year: '2019',
          rule: {
            "monday": [ 9, 19, 30, 7 ],
            "tuesday": [ 8, 18, 28, 26 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 16, 26, 6, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 10, 20, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 493,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/come_fly_with_me__by_lukaszxbox_dd4bv2j-pre.jpg',
          title: 'Come fly with me!',
          artist: 'Lukasz',
          year: '2019',
          rule: {
            "monday": [ 10, 20, 30, 7 ],
            "tuesday": [ 9, 19, 30, 7 ],
            "wednesday": [ 8, 18, 28, 26 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 16, 26, 6, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 494,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/verdi_barn____by_aakoran_dd4g2nc-fullview.jpg',
          title: 'Verdi barn...',
          artist: 'Andrew Koran',
          year: '2019',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 10, 20, 30, 7 ],
            "wednesday": [ 9, 19, 30, 7 ],
            "thursday": [ 8, 18, 28, 26 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 16, 26, 6, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 495,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/glooms_treasure_by_draken413o_dd4eqkl-pre.jpg',
          title: 'Glooms Treasure',
          artist: 'Jonathan',
          year: '2019',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 10, 20, 30, 7 ],
            "thursday": [ 9, 19, 30, 7 ],
            "friday": [ 8, 18, 28, 26 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 16, 26, 6, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 496,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/DpsF2OcWsAEtBef.jpg',
          title: 'unknown title',
          artist: 'Oona Heleena',
          year: '2018',
          rule: {
            "monday": [ 16, 26, 6, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 10, 20, 30, 7 ],
            "friday": [ 9, 19, 30, 7 ],
            "saturday": [ 8, 18, 28, 26 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 497,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/b3-240x300.jpg',
          title: 'unknown title',
          artist: 'Paulina Duczman',
          year: '2018',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 17, 27, 7, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 11, 21, 1, 8 ],
            "saturday": [ 10, 20, 1, 8 ],
            "sunday": [ 9, 19, 29, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 498,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/marco_sea_master.jpg',
          title: 'By the Sea',
          artist: 'Phil Marco',
          year: '?',
          rule: {
            "monday": [ 9, 19, 29, 27 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 17, 27, 7, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 11, 21, 1, 8 ],
            "sunday": [ 10, 20, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 499,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Indigo_798x807_mae_appvd_l.jpg',
          title: 'Girl in red skirt ',
          artist: 'Elena Gallotta',
          year: '?',
          rule: {
            "monday": [ 10, 20, 1, 8 ],
            "tuesday": [ 9, 19, 29, 27 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 17, 27, 7, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 11, 21, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 500,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/fine-art-photography-prints-AnnaVolpi-HappyBirthday-focus-1.jpg',
          title: 'Happy Birthday',
          artist: 'Anna Volpi',
          year: '?',
          rule: {
            "monday": [ 11, 21, 1, 8 ],
            "tuesday": [ 10, 20, 1, 8 ],
            "wednesday": [ 9, 19, 29, 27 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 17, 27, 7, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 501,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/My-God-prod-945x856.jpg',
          title: 'My God',
          artist: 'Ingrid Bugge',
          year: '?',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 11, 21, 1, 8 ],
            "wednesday": [ 10, 20, 1, 8 ],
            "thursday": [ 9, 19, 29, 27 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 17, 27, 7, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 502,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/12.jpg',
          title: 'Human Body Parts in Close Up',
          artist: 'Flora Borsi',
          year: '?',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 11, 21, 1, 8 ],
            "thursday": [ 10, 20, 1, 8 ],
            "friday": [ 9, 19, 29, 27 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 17, 27, 7, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 503,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/body-art-Capture-Tokyo-Photography3.jpg',
          title: 'Body Projection Capture Tokyo',
          artist: 'Flora Borsi',
          year: '?',
          rule: {
            "monday": [ 17, 27, 7, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 11, 21, 1, 8 ],
            "friday": [ 10, 20, 1, 8 ],
            "saturday": [ 9, 19, 29, 27 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 504,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/sport_body_of_art_3-1544747981l.jpg',
          title: 'Sport Body of Art 3',
          artist: 'Alexsandr Lishchinskiy',
          year: '?',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 18, 28, 8, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 12, 22, 2, 9 ],
            "saturday": [ 11, 21, 2, 9 ],
            "sunday": [ 10, 20, 30, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 505,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/fineart-photo-frederique-claude-guillaumin.jpg',
          title: 'Picture of Frédérique',
          artist: 'Claude Guillaumin',
          year: '?',
          rule: {
            "monday": [ 10, 20, 30, 28 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 18, 28, 8, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 12, 22, 2, 9 ],
            "sunday": [ 11, 21, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 506,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/14246823249s1c9dsc_9425adjustedlarge.jpg',
          title: 'Graveyard',
          artist: 'Julie Fletcher',
          year: '2014',
          rule: {
            "monday": [ 11, 21, 2, 9 ],
            "tuesday": [ 10, 20, 30, 28 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 18, 28, 8, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 12, 22, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 507,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1428860383__036_27b1952provi_2_copie.jpg',
          title: 'Vik',
          artist: 'Samuel Feron',
          year: '2014',
          rule: {
            "monday": [ 12, 22, 2, 9 ],
            "tuesday": [ 11, 21, 2, 9 ],
            "wednesday": [ 10, 20, 30, 28 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 18, 28, 8, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 508,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1421134887k9z3wend_of_watch.jpg',
          title: 'End of Watch',
          artist: 'Darren Moore',
          year: '2014',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 12, 22, 2, 9 ],
            "wednesday": [ 11, 21, 2, 9 ],
            "thursday": [ 10, 20, 30, 28 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 18, 28, 8, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 509,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1421516308uecs1twinlightfapa.jpg',
          title: 'Twin Light',
          artist: 'Mauro Mendula',
          year: '2014',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 12, 22, 2, 9 ],
            "thursday": [ 11, 21, 2, 9 ],
            "friday": [ 10, 20, 30, 28 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 18, 28, 8, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 510,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1432997412s7royfapa02.jpg',
          title: 'The Dark Hedges',
          artist: 'Bob McCallion',
          year: '2014',
          rule: {
            "monday": [ 18, 28, 8, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 12, 22, 2, 9 ],
            "friday": [ 11, 21, 2, 9 ],
            "saturday": [ 10, 20, 30, 28 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 511,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/image-79-973x1024.jpg',
          title: 'Looking For Air',
          artist: 'ilex',
          year: '2012',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 19, 29, 9, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 13, 23, 3, 10 ],
            "saturday": [ 12, 22, 3, 10 ],
            "sunday": [ 11, 21, 1, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 512,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/liat.jpg',
          title: 'unknown title',
          artist: 'Liat Aharoni',
          year: '2014',
          rule: {
            "monday": [ 11, 21, 1, 29 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 19, 29, 9, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 13, 23, 3, 10 ],
            "sunday": [ 12, 22, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 513,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/aharoni.jpg',
          title: 'unknown title',
          artist: 'Liat Aharoni',
          year: '2014',
          rule: {
            "monday": [ 12, 22, 3, 10 ],
            "tuesday": [ 11, 21, 1, 29 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 19, 29, 9, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 13, 23, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 514,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/_MG_1827.jpg',
          title: 'untitled',
          artist: 'Sarah Lane',
          year: '2006',
          rule: {
            "monday": [ 13, 23, 3, 10 ],
            "tuesday": [ 12, 22, 3, 10 ],
            "wednesday": [ 11, 21, 1, 29 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 19, 29, 9, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 515,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Sutphin-slider-portrait3.jpg',
          title: 'untitled',
          artist: 'Karl Sutphin',
          year: '?',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 13, 23, 3, 10 ],
            "wednesday": [ 12, 22, 3, 10 ],
            "thursday": [ 11, 21, 1, 29 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 19, 29, 9, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 516,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Alamogordo-Pupfish-Drone-Flight-Academy-Best-conceptual-Portrait-Photographer-fine-art-Photography-Wick-Beavers-advertising-Photographs-NM-LA-NYC-Las-Vegas-Munich-Rome-Milano-Paris-London.jpg',
          title: 'Alamogordo Pupfish Drone Flight Academy',
          artist: 'Wick Beavers',
          year: '2018',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 13, 23, 3, 10 ],
            "thursday": [ 12, 22, 3, 10 ],
            "friday": [ 11, 21, 1, 29 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 19, 29, 9, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 517,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/barberSm10incopy-copy.jpg',
          title: 'Rocco\'s Barber Shop',
          artist: 'Ray Simone',
          year: 'c.1989',
          rule: {
            "monday": [ 19, 29, 9, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 13, 23, 3, 10 ],
            "friday": [ 12, 22, 3, 10 ],
            "saturday": [ 11, 21, 1, 29 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 518,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the-bird.jpg',
          title: 'The Bird',
          artist: 'Dimitry Roulland',
          year: '?',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 20, 30, 10, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 14, 24, 4, 11 ],
            "saturday": [ 13, 23, 4, 11 ],
            "sunday": [ 12, 22, 2, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 519,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/the-blue-tunnel.jpg',
          title: 'The Blue Tunnel',
          artist: 'Dimitry Roulland',
          year: '?',
          rule: {
            "monday": [ 12, 22, 2, 30 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 20, 30, 10, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 14, 24, 4, 11 ],
            "sunday": [ 13, 23, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 520,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/flexibility_print_fine_art_print_female_dancer_dance_jpeg_grande.jpg',
          title: 'Red 2.0',
          artist: 'Dimitry Roulland',
          year: '?',
          rule: {
            "monday": [ 13, 23, 4, 11 ],
            "tuesday": [ 12, 22, 2, 30 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 20, 30, 10, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 14, 24, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 521,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/ApproximateJoy01.png',
          title: 'Untitled #1 from the series \'Approximate Joy\'',
          artist: 'Christopher Anderson',
          year: '2017 - 2018',
          rule: {
            "monday": [ 14, 24, 4, 11 ],
            "tuesday": [ 13, 23, 4, 11 ],
            "wednesday": [ 12, 22, 2, 30 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 20, 30, 10, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 522,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/ApproximateJoy07.png',
          title: 'Untitled #7 from the series \'Approximate Joy\'',
          artist: 'Christopher Anderson',
          year: '2017 - 2018',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 14, 24, 4, 11 ],
            "wednesday": [ 13, 23, 4, 11 ],
            "thursday": [ 12, 22, 2, 30 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 20, 30, 10, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 523,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/ApproximateJoy10.png',
          title: 'Untitled #10 from the series \'Approximate Joy\'',
          artist: 'Christopher Anderson',
          year: '2017 - 2018',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 14, 24, 4, 11 ],
            "thursday": [ 13, 23, 4, 11 ],
            "friday": [ 12, 22, 2, 30 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 20, 30, 10, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 524,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/ApproximateJoy08.png',
          title: 'Untitled #8 from the series \'Approximate Joy\'',
          artist: 'Christopher Anderson',
          year: '2017 - 2018',
          rule: {
            "monday": [ 20, 30, 10, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 14, 24, 4, 11 ],
            "friday": [ 13, 23, 4, 11 ],
            "saturday": [ 12, 22, 2, 30 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 525,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/ApproximateJoy09.png',
          title: 'Untitled #8 from the series \'Approximate Joy\'',
          artist: 'Christopher Anderson',
          year: '2017 - 2018',
          rule: {
            "monday": [ 12, 22, 2, 9 ],
            "tuesday": [ 21, 1, 11, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 15, 25, 5, 12 ],
            "saturday": [ 14, 24, 5, 12 ],
            "sunday": [ 13, 23, 3, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 526,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/1DEADONE6.jpg',
          title: 'Dead One',
          artist: 'Sarah Jeffs',
          year: '?',
          rule: {
            "monday": [ 13, 23, 3, 1 ],
            "tuesday": [ 12, 22, 2, 9 ],
            "wednesday": [ 21, 1, 11, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 15, 25, 5, 12 ],
            "sunday": [ 14, 24, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 527,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Beef.jpg',
          title: 'Beef',
          artist: 'Sarah Jeffs',
          year: '?',
          rule: {
            "monday": [ 14, 24, 5, 12 ],
            "tuesday": [ 13, 23, 3, 1 ],
            "wednesday": [ 12, 22, 2, 9 ],
            "thursday": [ 21, 1, 11, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 15, 25, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 528,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/Magpie-tim.jpg',
          title: 'Magpie Tim',
          artist: 'Sarah Jeffs',
          year: '?',
          rule: {
            "monday": [ 15, 25, 5, 12 ],
            "tuesday": [ 14, 24, 5, 12 ],
            "wednesday": [ 13, 23, 3, 1 ],
            "thursday": [ 12, 22, 2, 9 ],
            "friday": [ 21, 1, 11, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 529,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/monk.jpg',
          title: 'Monk',
          artist: 'Sarah Jeffs',
          year: '?',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 15, 25, 5, 12 ],
            "wednesday": [ 14, 24, 5, 12 ],
            "thursday": [ 13, 23, 3, 1 ],
            "friday": [ 12, 22, 2, 9 ],
            "saturday": [ 21, 1, 11, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 530,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/MR-JAGO-LOWRES.jpg',
          title: 'Mr. Jago',
          artist: 'Sarah Jeffs',
          year: '?',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 15, 25, 5, 12 ],
            "thursday": [ 14, 24, 5, 12 ],
            "friday": [ 13, 23, 3, 1 ],
            "saturday": [ 12, 22, 2, 9 ],
            "sunday": [ 21, 1, 11, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 531,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/st-martin-reflection_tsgc1a.jpg',
          title: 'Abstract reflection on the Saint Martin Canal, Paris',
          artist: 'Avner Ofer',
          year: '2019',
          rule: {
            "monday": [ 21, 1, 11, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 15, 25, 5, 12 ],
            "friday": [ 14, 24, 5, 12 ],
            "saturday": [ 13, 23, 3, 1 ],
            "sunday": [ 12, 22, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 532,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/2019-taiwan-3119_vzj7vq.jpg',
          title: 'Abstract Spiral Dual Staircase',
          artist: 'Avner Ofer',
          year: '2019',
          rule: {
            "monday": [ 13, 23, 3, 10 ],
            "tuesday": [ 22, 2, 12, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 16, 26, 6, 13 ],
            "saturday": [ 15, 25, 6, 13 ],
            "sunday": [ 14, 24, 4, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 533,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/2018_colombia-10670_ra90ey.jpg',
          title: 'Cartagena reflection',
          artist: 'Avner Ofer',
          year: '2018',
          rule: {
            "monday": [ 14, 24, 4, 2 ],
            "tuesday": [ 13, 23, 3, 10 ],
            "wednesday": [ 22, 2, 12, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 16, 26, 6, 13 ],
            "sunday": [ 15, 25, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 534,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/2-white-horses_yha5yy.jpg',
          title: 'Two white horses with big manes, facing each other',
          artist: 'Avner Ofer',
          year: '2019',
          rule: {
            "monday": [ 15, 25, 6, 13 ],
            "tuesday": [ 14, 24, 4, 2 ],
            "wednesday": [ 13, 23, 3, 10 ],
            "thursday": [ 22, 2, 12, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 16, 26, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 535,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/bo-kaap1_j4wswh.jpg',
          title: 'A detailed view of a colorful house roof trim',
          artist: 'Avner Ofer',
          year: '2019',
          rule: {
            "monday": [ 16, 26, 6, 13 ],
            "tuesday": [ 15, 25, 6, 13 ],
            "wednesday": [ 14, 24, 4, 2 ],
            "thursday": [ 13, 23, 3, 10 ],
            "friday": [ 22, 2, 12, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 536,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/when_you_get_the_virus_by_oofoof699_ddc0nb3-pre.jpg',
          title: 'when you get the virus',
          artist: 'oofoof699',
          year: '2019',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 16, 26, 6, 13 ],
            "wednesday": [ 15, 25, 6, 13 ],
            "thursday": [ 14, 24, 4, 2 ],
            "friday": [ 13, 23, 3, 10 ],
            "saturday": [ 22, 2, 12, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 537,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/davis_besse__by_23jcrosby12_ddbyvvn-pre.jpg',
          title: 'Davis Besse',
          artist: '23jcrosby12',
          year: '2019',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 16, 26, 6, 13 ],
            "thursday": [ 15, 25, 6, 13 ],
            "friday": [ 14, 24, 4, 2 ],
            "saturday": [ 13, 23, 3, 10 ],
            "sunday": [ 22, 2, 12, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 538,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/lens_to_lens_by_temperate_sage_d7siivc-pre.jpg',
          title: 'Lens to Lens',
          artist: 'Harmony Sage Lawrence',
          year: '2019',
          rule: {
            "monday": [ 22, 2, 12, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 16, 26, 6, 13 ],
            "friday": [ 15, 25, 6, 13 ],
            "saturday": [ 14, 24, 4, 2 ],
            "sunday": [ 13, 23, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 539,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/d9jjmw-c600c22d-5078-4cc4-a279-a32e78141490.jpg',
          title: 'McHungry - not lovin\' it',
          artist: 'flumpie',
          year: '2019',
          rule: {
            "monday": [ 14, 24, 4, 11 ],
            "tuesday": [ 23, 3, 13, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 17, 27, 7, 14 ],
            "saturday": [ 16, 26, 7, 14 ],
            "sunday": [ 15, 25, 5, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 540,
          user_id: 1,
          theme: 'Photography',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/june/d12rw64-23cab5a7-4e29-4e65-ad71-67d0325d0943.jpg',
          title: 'Fluid Grace',
          artist: 'Zhang Jingna',
          year: '2019',
          rule: {
            "monday": [ 15, 25, 5, 3 ],
            "tuesday": [ 14, 24, 4, 11 ],
            "wednesday": [ 23, 3, 13, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 17, 27, 7, 14 ],
            "sunday": [ 16, 26, 7, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('june_arts_id_seq', (SELECT MAX(id) FROM june_arts));");
    });
};
