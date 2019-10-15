'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('march_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('march_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4119708928/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newamsterdamrecords.bandcamp.com/album/krai',
          a_string: 'Край (Krai) by Olga Bell',
          rule: {
            "monday": [4, 10, 16, 24],
            "tuesday": [3, 9, 15, 23],
            "wednesday": [2, 8, 14, 22],
            "thursday": [1, 7, 13, 21],
            "saturday": [5, 11, 17, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=51640814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://missymazzoli.bandcamp.com/album/vespers-for-a-new-dark-age',
          a_string: 'Vespers for a New Dark Age by Missy Mazzoli, Victoire, Glenn Kotche, Lorna Dune',
          rule: {
            "monday": [5, 11, 17, 25],
            "tuesday": [4, 10, 16, 24],
            "wednesday": [3, 9, 15, 23],
            "thursday": [2, 8, 14, 22],
            "saturday": [1, 7, 13, 21]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3714052139/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jodyredhage.bandcamp.com/album/of-minutiae-and-memory',
          a_string: 'of minutiae and memory by Jody Redhage',
          rule: {
            "monday": [1, 7, 13, 21],
            "tuesday": [5, 11, 17, 25],
            "wednesday": [4, 10, 16, 24],
            "thursday": [3, 9, 15, 23],
            "saturday": [2, 8, 14, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1439897988/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intaktrec.bandcamp.com/album/lonelyville',
          a_string: 'Lonelyville by Sylvie Courvoisier',
          rule: {
            "monday": [2, 8, 14, 22],
            "tuesday": [1, 7, 13, 21],
            "wednesday": [5, 11, 17, 25],
            "thursday": [4, 10, 16, 24],
            "saturday": [3, 9, 15, 23]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=784569706/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intaktrec.bandcamp.com/album/passagio',
          a_string: 'Passagio by Sylvie Courvoisier, Joëlle Léandre, Susie Ibarra',
          rule: {
            "monday": [3, 9, 15, 23],
            "tuesday": [2, 8, 14, 22],
            "wednesday": [1, 7, 13, 21],
            "thursday": [5, 11, 17, 25],
            "saturday": [4, 10, 16, 24]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=513818594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/life-carries-me-this-way',
          a_string: 'Life Carries Me This Way by Myra Melford',
          rule: {
            "monday": [4, 10, 16, 24],
            "tuesday": [3, 9, 15, 23],
            "wednesday": [2, 8, 14, 22],
            "thursday": [1, 7, 13, 21],
            "saturday": [5, 11, 17, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1989500445/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ditzner.bandcamp.com/album/free-flight',
          a_string: 'free flight by MARILYN CRISPELL, ERWIN DITZNER, SEBASTIAN GRAMSS',
          rule: {
            "monday": [6, 12, 18, 26],
            "tuesday": [5, 11, 17, 25],
            "wednesday": [4, 10, 16, 24],
            "thursday": [3, 9, 15, 23],
            "saturday": [2, 8, 14, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1807806451/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayler-records.bandcamp.com/album/can-you-hear-me',
          a_string: 'Can You Hear Me? by Joëlle Léandre',
          rule: {
            "monday": [2, 8, 14, 22],
            "tuesday": [6, 12, 18, 26],
            "wednesday": [5, 11, 17, 25],
            "thursday": [4, 10, 16, 24],
            "saturday": [3, 9, 15, 23]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2104549245/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/scrumptious-sabotage',
          a_string: 'Scrumptious Sabotage by Ikue Mori &amp; Maja S.K. Ratkje',
          rule: {
            "monday": [3, 9, 15, 23],
            "tuesday": [2, 8, 14, 22],
            "wednesday": [6, 12, 18, 26],
            "thursday": [5, 11, 17, 25],
            "saturday": [4, 10, 16, 24]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1527382468/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lindaoh.bandcamp.com/album/sun-pictures',
          a_string: 'Sun Pictures by Linda Oh',
          rule: {
            "monday": [4, 10, 16, 24],
            "tuesday": [3, 9, 15, 23],
            "wednesday": [2, 8, 14, 22],
            "thursday": [6, 12, 18, 26],
            "saturday": [5, 11, 17, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3065200155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aphoniarecordings.bandcamp.com/album/sub-rosa',
          a_string: 'sub-Rosa by Amy Denio',
          rule: {
            "monday": [5, 11, 17, 25],
            "tuesday": [4, 10, 16, 24],
            "wednesday": [3, 9, 15, 23],
            "thursday": [2, 8, 14, 22],
            "saturday": [6, 12, 18, 26]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1571887307/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amydenio.bandcamp.com/album/make-it-funky-god-2',
          a_string: 'Make It Funky God by The Billy Tipton Memorial Sax Quartet',
          rule: {
            "monday": [6, 12, 18, 26],
            "tuesday": [5, 11, 17, 25],
            "wednesday": [4, 10, 16, 24],
            "thursday": [3, 9, 15, 23],
            "saturday": [2, 8, 14, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3001875899/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://infrequentseams.bandcamp.com/album/mzm',
          a_string: 'MZM by Miya Masaoka, Zeena Parkins, Myra Melford',
          rule: {
            "monday": [ 2, 8, 14, 22 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 5, 11, 17, 25 ],
            "thursday": [ 4, 10, 16, 24 ],
            "saturday": [ 3, 9, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=769961488/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://conniecrothersvirgdzurinkotwo-pianoquintet.bandcamp.com/album/connie-crothers-virg-dzurinko-two-piano-quintet',
          a_string: 'Connie Crothers/Virg Dzurinko Two-Piano Quintet by Connie Crothers/Virg Dzurinko Two-Piano Quintet',
          rule: {
            "monday": [ 4, 10, 16, 24 ],
            "tuesday": [ 3, 9, 15, 23 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 5, 11, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1288456079/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lydialunch.bandcamp.com/album/retrovirus',
          a_string: 'Retrovirus by Lydia Lunch',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 4, 10, 16, 24 ],
            "wednesday": [ 3, 9, 15, 23 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1981644578/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zeenaparkins.bandcamp.com/album/three-harps-tuning-forks-electronics-2',
          a_string: 'Three Harps, Tuning Forks &amp; Electronics by Zeena Parkins',
          rule: {
            "monday": [ 6, 12, 18, 26 ],
            "tuesday": [ 5, 11, 17, 25 ],
            "wednesday": [ 4, 10, 16, 24 ],
            "thursday": [ 3, 9, 15, 23 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3762222841/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leonelkaplan.bandcamp.com/album/silo',
          a_string: 'Silo by Audrey Chen, Leonel Kaplan, Nate Wooley',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 5, 11, 17, 25 ],
            "thursday": [ 4, 10, 16, 24 ],
            "saturday": [ 3, 9, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=414719190/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://inexhaustibleeditions.bandcamp.com/album/scoriacon',
          a_string: 'Scoriacon by Réplica: Birgit Ulher / Felipe Araya',
          rule: {
            "monday": [ 3, 9, 15, 23 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 5, 11, 17, 25 ],
            "saturday": [ 4, 10, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2553087840/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amydenio.bandcamp.com/album/birthing-chair-blues',
          a_string: 'Birthing Chair Blues by Amy Denio / Spoot Music',
          rule: {
            "monday": [ 4, 10, 16, 24 ],
            "tuesday": [ 3, 9, 15, 23 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 5, 11, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1251608128/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://missymazzoli.bandcamp.com/album/song-from-the-uproar',
          a_string: 'Song From the Uproar by Missy Mazzoli, Abigail Fischer, and NOW Ensemble',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 4, 10, 16, 24 ],
            "wednesday": [ 3, 9, 15, 23 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3264313737/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://avamendozamusic.bandcamp.com/album/quit-your-unnatural-ways',
          a_string: 'Quit Your Unnatural Ways by Ava Mendoza &amp; Nick Tamburro',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 5, 11, 17, 25 ],
            "thursday": [ 4, 10, 16, 24 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1924932317/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rectangle-records.bandcamp.com/album/dire-du-dire',
          a_string: 'Dire du dire by Joëlle Léandre',
          rule: {
            "monday": [ 8, 14, 20, 28 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 5, 11, 17, 25 ],
            "saturday": [ 4, 10, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2248117061/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/the-whole-tree-gone',
          a_string: 'The Whole Tree Gone by Myra Melford&#39;s Be Bread',
          rule: {
            "monday": [ 4, 10, 16, 24 ],
            "tuesday": [ 8, 14, 20, 28 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 5, 11, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3990709858/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maryhalvorson.bandcamp.com/album/away-with-you',
          a_string: 'Away With You by Mary Halvorson',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 4, 10, 16, 24 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3449127882/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://longsongrecords.bandcamp.com/album/duet',
          a_string: 'DUET by Satoko Fujii, Joe Fonda',
          rule: {
            "monday": [ 6, 12, 18, 26 ],
            "tuesday": [ 5, 11, 17, 25 ],
            "wednesday": [ 4, 10, 16, 24 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3989473477/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rovasaxophonequartet.bandcamp.com/album/an-alligator-in-your-wallet',
          a_string: 'An Alligator in Your Wallet by Rova Sax Quartet + Satoko Fujii + Orkestrova',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 5, 11, 17, 25 ],
            "thursday": [ 4, 10, 16, 24 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2665408563/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amydenio.bandcamp.com/album/tone-dogs-ankety-low-day',
          a_string: 'Tone Dogs: Ankety Low Day by Amy Denio / Spoot Music',
          rule: {
            "monday": [ 8, 14, 20, 28 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 5, 11, 17, 25 ],
            "saturday": [ 4, 10, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=379150300/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://finderskeepersrecords.bandcamp.com/album/buchla-concerts-1975',
          a_string: 'Buchla Concerts 1975 by Suzanne Ciani',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2173569023/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://franreed.bandcamp.com/album/soop-kitchen',
          a_string: 'Soop Kitchen by Fran Reed',
          rule: {
            "monday": [ 6, 12, 18, 26 ],
            "tuesday": [ 5, 11, 17, 25 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2960999910/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://senufoeditions.bandcamp.com/album/geelriandre-arthesis',
          a_string: 'Geelriandre / Arthesis by Eliane Radigue',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 5, 11, 17, 25 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=64459792/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://janelleppin.bandcamp.com/album/american-god',
          a_string: 'American God by Mellow Diamond',
          rule: {
            "monday": [ 8, 14, 20, 28 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 5, 11, 17, 25 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3182866185/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darktree.bandcamp.com/album/en-corps',
          a_string: 'En Corps by Eve Risser • Benjamin Duboc • Edward Perraud',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 28 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 5, 11, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2614010070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soundanatomy.bandcamp.com/album/hiss-and-viscera',
          a_string: 'Hiss and Viscera by Audrey Chen &amp; Richard Scott',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 7, 13, 19, 28 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1696851893/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unseenworlds.bandcamp.com/album/the-expanding-universe',
          a_string: 'The Expanding Universe by Laurie Spiegel',
          rule: {
            "monday": [ 6, 12, 18, 26 ],
            "tuesday": [ 5, 11, 17, 25 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3639273125/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unseenworlds.bandcamp.com/album/the-death-of-don-juan',
          a_string: 'The Death of Don Juan by Elodie Lauten',
          rule: {
            "monday": [ 8, 14, 20, 29 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1241345468/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://biancaaviaz.bandcamp.com/album/arco-iris',
          a_string: 'Arco-Iris by Bianca Aviaz',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 29 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2532295302/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://konvojrecords.bandcamp.com/album/squid-police',
          a_string: 'Squid Police by Lotte Anker &amp; Jakob Riis',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 29 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1707925128/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ideologicorgan.bandcamp.com/album/ghil',
          a_string: 'Ghil by Okkyung Lee',
          rule: {
            "monday": [ 6, 12, 18, 26 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 8, 14, 20, 29 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2569024353/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/not-living-in-fear',
          a_string: 'Not Living in Fear by Hear in Now (Mazz Swift, Tomeka Reid, Silvia Bolognesi)',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 8, 14, 20, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=243232998/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://janelleppin.bandcamp.com/album/mellow-diamond',
          a_string: 'Mellow Diamond by Janel Leppin',
          rule: {
            "monday": [ 8, 14, 20, 29 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3942018341/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://liminalsoundseries.bandcamp.com/album/susan-alcorn-21415',
          a_string: 'Susan Alcorn 2.14.15 by Liminal Sound Series',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 29 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2550162340/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marissanadler.bandcamp.com/album/marissa-nadler',
          a_string: 'Marissa Nadler by Marissa Nadler',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 9, 15, 21, 30 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4221021472/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hollyherndon.bandcamp.com/album/platform',
          a_string: 'Platform by Holly Herndon',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 30 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2090833281/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laurelhalo.bandcamp.com/album/laurel-halo-dust-hdblp036',
          a_string: 'Laurel Halo: Dust (HDBLP036) by Laurel Halo',
          rule: {
            "monday": [ 8, 14, 20, 28 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2765736108/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jlin.bandcamp.com/album/black-origami',
          a_string: 'Black Origami by Jlin',
          rule: {
            "monday": [ 9, 15, 21, 30 ],
            "tuesday": [ 8, 14, 20, 28 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2412125441/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laubrock-intakt.bandcamp.com/album/serpentines',
          a_string: 'Serpentines by Ingrid Laubrock',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 9, 15, 21, 30 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4017614520/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jessicapavone.bandcamp.com/album/walking-sleeping-breathing',
          a_string: 'Walking, Sleeping, Breathing by Jessica Pavone',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 9, 15, 21, 30 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1050554170/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://krisdavis.bandcamp.com/album/duopoly',
          a_string: 'Duopoly by Kris Davis',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 30 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=787965443/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://parishurley.bandcamp.com/album/the-sketch-series-1',
          a_string: 'THE SKETCH SERIES__1 by Paris Hurley',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 28 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 10, 16, 22, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2252879736/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amydenio.bandcamp.com/album/tiptons-sax-quartet-cookbook',
          a_string: 'Tiptons Sax Quartet: COOKBOOK by Amy Denio / Spoot Music',
          rule: {
            "monday": [ 10, 16, 22, 31 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2034543457/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://triodakali-kronosquartet.bandcamp.com/album/ladilikan',
          a_string: 'Ladilikan by Trio Da Kali and Kronos Quartet',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 31 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=24344286/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kalmanovitch.bandcamp.com/album/heart-mountain-myra-melford-tanya-kalmanovitch',
          a_string: 'Heart Mountain // Myra Melford + Tanya Kalmanovitch by Myra Melford and Tanya Kalmanovitch',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 10, 16, 22, 31 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1145363017/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zara-mcfarlane.bandcamp.com/album/arise',
          a_string: 'Arise by Zara Mcfarlane',
          rule: {
            "monday": [ 8, 14, 20, 28 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 10, 16, 22, 31 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4034378625/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://janelleppin.bandcamp.com/album/songs-for-voice-and-mellotron',
          a_string: 'Songs for Voice and Mellotron by Janel Leppin',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 28 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 10, 16, 22, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1625068785/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lydialunch.bandcamp.com/album/hangover-hotel',
          a_string: 'Hangover Hotel by Lydia Lunch',
          rule: {
            "monday": [ 10, 16, 22, 31 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3060445668/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sephinello.bandcamp.com/album/flame',
          a_string: 'Flame by Sephine Llo',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 11, 17, 23, 1 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4016065555/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aphoniarecordings.bandcamp.com/album/natricinae',
          a_string: 'natricinae by Dancing for the Flesh',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 1 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1386012059/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://victoire.bandcamp.com/album/cathedral-city',
          a_string: 'Cathedral City by Victoire',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 1 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=827414202/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anasilvera.bandcamp.com/album/the-aviary',
          a_string: 'The Aviary by Ana Silvera',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 11, 17, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1485264710/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.sofiatalvik.com/album/the-owls-are-not-what-they-seem',
          a_string: 'The Owls Are Not What They Seem by Sofia Talvik',
          rule: {
            "monday": [ 11, 17, 23, 1 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=749764053/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://torihandsleytrio.bandcamp.com/album/tori-handsley-trio',
          a_string: 'TORI HANDSLEY TRIO by TORI HANDSLEY TRIO',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 11, 17, 23, 1 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=806085606/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nerijamusic.bandcamp.com/album/n-rija-ep',
          a_string: 'NÉRIJA EP by NÉRIJA',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 1 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2712715838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xeniarubinos.bandcamp.com/album/black-terry-cat',
          a_string: 'Black Terry Cat by Xenia Rubinos',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 12, 18, 24, 2 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3555060177/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yullippe.bandcamp.com/album/lys',
          a_string: 'Lys by Yullippe',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=37961648/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mapledeathrecords.bandcamp.com/album/contravveleno',
          a_string: 'Contravveleno by Havah',
          rule: {
            "monday": [ 12, 18, 24, 2 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3641669032/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chaptermusic.bandcamp.com/album/second-of-spring',
          a_string: 'Second Of Spring by Beaches',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 12, 18, 24, 2 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1901731418/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.zoekeating.com/album/into-the-trees',
          a_string: 'Into The Trees by Zoe Keating',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 12, 18, 24, 2 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3432380151/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.zoekeating.com/album/one-cello-x-16-natoma',
          a_string: 'One Cello x 16: Natoma by Zoe Keating',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 12, 18, 24, 2 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2337293507/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://waitingroomrecords.bandcamp.com/album/subnormal-girls-volume-3',
          a_string: 'SUBNORMAL GIRLS VOLUME 3 by WAITING ROOM RECORDS',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3571627808/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://commonholly.bandcamp.com/album/playing-house-2',
          a_string: 'Playing House by Common Holly',
          rule: {
            "monday": [ 13, 19, 25, 3 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1020001840/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://julienbaker.bandcamp.com/album/sprained-ankle-3',
          a_string: 'Sprained Ankle by Julien Baker',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 3 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2791496554/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://paulineoliveros1.bandcamp.com/album/dunrobin-sonic-gems',
          a_string: 'Dunrobin Sonic Gems by Deep Listening Band',
          rule: {
            "monday": [ 15, 21, 27, 4 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 3 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2763598205/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://melaniedebiasio.bandcamp.com/album/lilies',
          a_string: 'Lilies by Melanie De Biasio',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 13, 19, 25, 3 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2670324524/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zara-mcfarlane.bandcamp.com/album/if-you-knew-her-2',
          a_string: 'If You Knew Her by Zara Mcfarlane',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 13, 19, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1336511343/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://racheltherrien.bandcamp.com/album/why-dont-you-try-wdyt',
          a_string: 'Why Don&#39;t You Try (WDYT) by Rachel Therrien Quintet',
          rule: {
            "monday": [ 13, 19, 25, 3 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3559103663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kaitlynaureliasmith.bandcamp.com/album/the-kid',
          a_string: 'The Kid by Kaitlyn Aurelia Smith',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 3 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3987451963/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://linguaignota.bandcamp.com/album/all-bitches-die',
          a_string: 'ALL BITCHES DIE by LINGUA IGNOTA',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 14, 20, 26, 4 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3891158978/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chelseawolfe.bandcamp.com/album/hiss-spun',
          a_string: 'Hiss Spun by CHELSEA WOLFE',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 4 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2510087450/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tiftmerritt.bandcamp.com/album/stitch-of-the-world-deluxe-edition',
          a_string: 'Stitch of the World (Deluxe Edition) by Tift Merritt',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=217442972/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://greyegg.bandcamp.com/album/albumen',
          a_string: 'Albumen by Grey Egg',
          rule: {
            "monday": [ 14, 20, 26, 4 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1633715698/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://greyegg.bandcamp.com/album/indoor-ski',
          a_string: 'Indoor Ski by Grey Egg',
          rule: {
            "monday": [ 15, 21, 27, 4  ],
            "tuesday": [ 14, 20, 26, 4 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=581844588/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lawitches.bandcamp.com/album/l-a-witch-2',
          a_string: 'L.A. WITCH by L.A. WITCH',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 14, 20, 26, 4 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3414326465/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thecoathangers.bandcamp.com/album/parasite',
          a_string: 'Parasite by The Coathangers',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 4 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1857300793/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/body-music',
          a_string: 'Body Music by Ellen Fullman',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 15, 21, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=1509868074/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zamilskaofficial.bandcamp.com/track/closer',
          a_string: 'Closer by ZAMILSKA',
          rule: {
            "monday": [ 15, 21, 27, 5 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2641447131/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blackesteverblack.bandcamp.com/album/you-know-what-its-like',
          a_string: 'You Know What It&#39;s Like by CARLA DAL FORNO',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 5 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3814644699/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jennyhval.bandcamp.com/album/blood-bitch',
          a_string: 'Blood Bitch by Jenny Hval',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 15, 21, 27, 5 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2391212862/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nadahelshazly.bandcamp.com/album/ahwar',
          a_string: 'Ahwar by Nadah El Shazly',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 15, 21, 27, 5 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2708727396/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bullythemusic.bandcamp.com/album/losing',
          a_string: 'Losing by Bully',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 15, 21, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3308242175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://courtneybarnett.bandcamp.com/album/sometimes-i-sit-and-think-and-sometimes-i-just-sit',
          a_string: 'sometimes i sit and think, and sometimes i just sit by courtney barnett',
          rule: {
            "monday": [ 15, 21, 27, 5 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2305625765/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/celestial-fires',
          a_string: 'Celestial Fires by Mary Jane Leach',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 16, 22, 28, 6 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=896547347/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/simoom',
          a_string: 'Simoom by Lois V Vierk',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 6 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2444727940/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sarah-elizabeth-charles.bandcamp.com/album/free-of-form',
          a_string: 'Free Of Form by Sarah Elizabeth Charles',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 6 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2196055513/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://racheltherrien.bandcamp.com/album/pensamiento-proyecto-colombia',
          a_string: 'Pensamiento: Proyecto Colombia by Rachel Therrien',
          rule: {
            "monday": [ 15, 21, 27, 4 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 16, 22, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2412671703/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayumiishito.bandcamp.com/album/view-from-a-little-cave',
          a_string: 'View From A Little Cave by Ayumi Ishito',
          rule: {
            "monday": [ 16, 22, 28, 6 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1824113199/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laurenleejazzproject.bandcamp.com/album/the-consciousness-test-2',
          a_string: 'The Consciousness Test by Lauren Lee &quot;Space Jazz&quot; Trio',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 16, 22, 28, 6 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1898158998/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fperecs.bandcamp.com/album/mandorla-awakening-ii-emerging-worlds',
          a_string: 'Mandorla Awakening II: Emerging Worlds by Nicole Mitchell',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 6 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1009721373/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fperecs.bandcamp.com/album/intergalactic-beings',
          a_string: 'Intergalactic Beings by Nicole Mitchell&#39;s Black Earth Ensemble',
          rule: {
            "monday": [ 15, 21, 27, 4 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 17, 23, 29, 7 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3367325553/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/xenogenesis-suite',
          a_string: 'Xenogenesis Suite by Nicole Mitchell&#39;s Black Earth Ensemble',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1784041014/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lydialunch.bandcamp.com/album/brutal-measures',
          a_string: 'Brutal Measures by Lydia Lunch and Weasel Walter',
          rule: {
            "monday": [ 17, 23, 29, 7 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4250172799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emaband.bandcamp.com/album/exile-in-the-outer-ring',
          a_string: 'Exile In The Outer Ring by EMA',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 17, 23, 29, 7 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1644131755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theseshen.bandcamp.com/album/the-seshen',
          a_string: 'The Seshen by The Seshen',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 17, 23, 29, 7 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=547011702/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gommegomme.bandcamp.com/album/hiss',
          a_string: 'Hiss by Gomme',
          rule: {
            "monday": [ 15, 21, 27, 4 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 17, 23, 29, 7 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3119809886/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dangerrecords.bandcamp.com/album/dr-029-mary-bell-lp-sold-out',
          a_string: 'DR-029 // Mary Bell (LP) // sold out by MARY BELL',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3499262377/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eeriewandabbib.bandcamp.com/album/hum',
          a_string: 'Hum by Eerie Wanda',
          rule: {
            "monday": [ 18, 24, 30, 8 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 20, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2102278697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carolinemckenzie.bandcamp.com/album/the-drowning-of-ophelia',
          a_string: 'the drowning of ophelia by Caroline McKenzie',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 8 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 20, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=480935350/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kellymoran.bandcamp.com/album/optimist',
          a_string: 'optimist by kelly moran',
          rule: {
            "monday": [ 20, 26, 1, 9 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 8 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3281387428/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lunaabunassar.bandcamp.com/album/-',
          a_string: 'אספר לך  أحكيلِك by Luna Abu Nassar',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 18, 24, 30, 8 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=737380834/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zolajesus.bandcamp.com/album/okovi',
          a_string: 'Okovi by Zola Jesus',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 20, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 18, 24, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3091200220/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chelseawolfe.bandcamp.com/album/abyss',
          a_string: 'Abyss by CHELSEA WOLFE',
          rule: {
            "monday": [ 18, 24, 30, 8 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 20, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4122221096/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emmaruthrundle.bandcamp.com/album/marked-for-death',
          a_string: 'Marked For Death by Emma Ruth Rundle',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 8 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 20, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1894361972/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sudanarchives.bandcamp.com/album/sudan-archives',
          a_string: 'Sudan Archives by Sudan Archives',
          rule: {
            "monday": [ 21, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 19, 25, 31, 9 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2820382927/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://waxahatchee.bandcamp.com/album/out-in-the-storm',
          a_string: 'Out in the Storm by Waxahatchee',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 21, 27, 2, 10 ],
            "wednesday": [ 20, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 9 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4186464351/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://caseydienel.bandcamp.com/album/imitation-of-a-woman-to-love',
          a_string: 'Imitation Of A Woman To Love by Casey Dienel',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 21, 27, 2, 10 ],
            "thursday": [ 20, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2276699715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yazzahmed.bandcamp.com/album/la-saboteuse-2',
          a_string: 'La Saboteuse by Yazz Ahmed',
          rule: {
            "monday": [ 19, 25, 31, 9 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 20, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1235529255/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tica-douglas-tl.bandcamp.com/album/our-lady-star-of-the-sea-help-and-protect-us',
          a_string: 'Our Lady Star of the Sea, Help and Protect Us by Tica Douglas',
          rule: {
            "monday": [ 20, 26, 1, 9 ],
            "tuesday": [ 19, 25, 31, 9 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 21, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2967472899/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kaitlynaureliasmith.bandcamp.com/album/frkwys-vol-13-sunergy',
          a_string: 'FRKWYS Vol. 13: Sunergy by Kaitlyn Aurelia Smith &amp; Suzanne Ciani',
          rule: {
            "monday": [ 21, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 19, 25, 31, 9 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1996930221/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliawolfemusic.bandcamp.com/album/anthracite-fields',
          a_string: 'Anthracite Fields by Julia Wolfe ft. Bang on a Can All-Stars &amp; Choir of Trinity Wall Street',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 21, 27, 2, 10 ],
            "wednesday": [ 20, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 9 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2053619610/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kellymoran.bandcamp.com/album/bloodroot',
          a_string: 'bloodroot by kelly moran',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 22, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 20, 26, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2278856669/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deliagonzalez.bandcamp.com/album/horse-follows-darkness',
          a_string: 'Horse Follows Darkness by Delia Gonzalez',
          rule: {
            "monday": [ 20, 26, 1, 10 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 22, 28, 3, 11 ],
            "saturday": [ 21, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4268123099/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blush.bandcamp.com/album/blush',
          a_string: 'Blush by Blush',
          rule: {
            "monday": [ 21, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 10 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 22, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=956878438/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://krisdelmhorst.bandcamp.com/album/the-wild',
          a_string: 'The Wild by Kris Delmhorst',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 21, 27, 2, 10 ],
            "wednesday": [ 20, 26, 1, 10 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=414875454/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://adriannelenker.bandcamp.com/album/hours-were-the-birds',
          a_string: 'Hours Were The Birds by Adrianne Lenker',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 22, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 10 ],
            "thursday": [ 20, 26, 1, 10 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3542745491/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amydenio.bandcamp.com/album/the-big-embrace-2',
          a_string: 'The Big Embrace by Amy Denio / Spoot Music',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 22, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 20, 26, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2027131940/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amydenio.bandcamp.com/album/tone-dogs-live-in-haarlem-nl-1988',
          a_string: 'Tone Dogs live in Haarlem, NL 1988 by Tone Dogs',
          rule: {
            "monday": [ 20, 26, 1, 10 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 22, 28, 3, 11 ],
            "saturday": [ 21, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2939560090/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lakuta.bandcamp.com/album/brothers-sisters',
          a_string: 'Brothers &amp; Sisters by Lakuta',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 21, 27, 2, 11 ],
            "wednesday": [ 19, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 23, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3786226534/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://colleencolleen.bandcamp.com/album/a-flame-my-love-a-frequency',
          a_string: 'A flame my love, a frequency by Colleen',
          rule: {
            "monday": [ 23, 29, 4, 12 ],
            "tuesday": [ 22, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 11 ],
            "thursday": [ 19, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2951317684/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://colleencolleen.bandcamp.com/album/captain-of-none',
          a_string: 'Captain of None by Colleen',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 23, 29, 4, 12 ],
            "wednesday": [ 22, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 11 ],
            "saturday": [ 19, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=279034998/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://colleencolleen.bandcamp.com/album/the-weighing-of-the-heart',
          a_string: 'The Weighing of the Heart by Colleen',
          rule: {
            "monday": [ 19, 26, 1, 9 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 23, 29, 4, 12 ],
            "thursday": [ 22, 28, 3, 11 ],
            "saturday": [ 21, 27, 2, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=707583338/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dangerrecords.bandcamp.com/album/upcoming-dr-033-p-m-s-7',
          a_string: 'UPCOMING: DR-033 // P.M.S. (7&quot;) by P.M.S.',
          rule: {
            "monday": [ 21, 27, 2, 11 ],
            "tuesday": [ 19, 26, 1, 9 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 23, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3202582703/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lydialunch.bandcamp.com/album/honeymoon-in-red',
          a_string: 'Honeymoon In Red by Lydia Lunch',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 21, 27, 2, 11 ],
            "wednesday": [ 19, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 23, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4126138709/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ctatsu.bandcamp.com/album/fear-is-the-world',
          a_string: 'Fear is the World by Atariame',
          rule: {
            "monday": [ 23, 29, 4, 12 ],
            "tuesday": [ 22, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 11 ],
            "thursday": [ 19, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=358818633/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/dalia-raudonikyt-with-solitarius',
          a_string: 'Dalia Raudonikytė With: Solitarius by Dalia Raudonikytė With',
          rule: {
            "monday": [ 20, 26, 1, 9 ],
            "tuesday": [ 24, 30, 5, 13 ],
            "wednesday": [ 23, 29, 4, 12 ],
            "thursday": [ 22, 28, 3, 12 ],
            "saturday": [ 20, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2742156133/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://musicinspireschange.bandcamp.com/album/who-me',
          a_string: 'Who Me? by LAPS',
          rule: {
            "monday": [ 20, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 24, 30, 5, 13 ],
            "thursday": [ 23, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4045754053/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://night-school.bandcamp.com/album/if-i-cant-handle-me-at-my-best-you-dont-deserve-you-at-your-worst-2',
          a_string: 'If I Can&#39;t Handle Me At My Best, You Don&#39;t Deserve You At Your Worst by Helena Celle',
          rule: {
            "monday": [ 22, 28, 3, 12 ],
            "tuesday": [ 20, 27, 2, 10 ],
            "wednesday": [ 20, 26, 1, 9 ],
            "thursday": [ 24, 30, 5, 13 ],
            "saturday": [ 23, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4164804002/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yazzahmed.bandcamp.com/album/finding-my-way-home',
          a_string: 'Finding My Way Home by Yazz Ahmed',
          rule: {
            "monday": [ 23, 29, 4, 12 ],
            "tuesday": [ 22, 28, 3, 12 ],
            "wednesday": [ 20, 27, 2, 10 ],
            "thursday": [ 20, 26, 1, 9 ],
            "saturday": [ 24, 30, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3764976327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://diamandagalas.bandcamp.com/album/all-the-way-2',
          a_string: 'All the Way by Diamanda Galás',
          rule: {
            "monday": [ 24, 30, 5, 13 ],
            "tuesday": [ 23, 29, 4, 12 ],
            "wednesday": [ 22, 28, 3, 12 ],
            "thursday": [ 20, 27, 2, 10 ],
            "saturday": [ 20, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3970618485/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://annabelleeband.bandcamp.com/album/wallflowers',
          a_string: 'Wallflowers by Annabel Lee',
          rule: {
            "monday": [ 20, 26, 1, 9 ],
            "tuesday": [ 24, 30, 5, 13 ],
            "wednesday": [ 23, 29, 4, 12 ],
            "thursday": [ 22, 28, 3, 12 ],
            "saturday": [ 20, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2930669060/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leabertucci.bandcamp.com/album/all-that-is-solid-melts-into-air',
          a_string: '&#39;All That Is Solid Melts Into Air&#39; by Lea Bertucci',
          rule: {
            "monday": [ 20, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 24, 30, 5, 13 ],
            "thursday": [ 23, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=319984039/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://noumenalloom.bandcamp.com/album/333-drill',
          a_string: '$3.33 - DRILL by $3.33',
          rule: {
            "monday": [ 23, 29, 4, 13 ],
            "tuesday": [ 21, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 10 ],
            "thursday": [ 25, 31, 6, 14 ],
            "saturday": [ 24, 30, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2690413612/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fortevilfruit.bandcamp.com/album/oreing',
          a_string: 'Oreing by Ailbhe Nic Oireachtaigh',
          rule: {
            "monday": [ 24, 30, 5, 13 ],
            "tuesday": [ 23, 29, 4, 13 ],
            "wednesday": [ 21, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 25, 31, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=790891236/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://volarrecords.bandcamp.com/album/susan-tv-girls-7-ep-limited-red-vinyl',
          a_string: 'Susan - TV Girls 7&quot; EP LIMITED RED VINYL by susan',
          rule: {
            "monday": [ 25, 31, 6, 14 ],
            "tuesday": [ 24, 30, 5, 13 ],
            "wednesday": [ 23, 29, 4, 13 ],
            "thursday": [ 21, 28, 3, 11 ],
            "saturday": [ 21, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2368719112/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://retrosynthrecords.bandcamp.com/album/ladies-of-synth-volume-2',
          a_string: 'Ladies of Synth - Volume 2 by 48 Track VA Compilation',
          rule: {
            "monday": [ 21, 27, 2, 10 ],
            "tuesday": [ 25, 31, 6, 14 ],
            "wednesday": [ 24, 30, 5, 13 ],
            "thursday": [ 23, 29, 4, 13 ],
            "saturday": [ 21, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1281820826/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://volarrecords.bandcamp.com/album/susan-never-enough-limited-blue-lp',
          a_string: 'Susan - Never Enough LIMITED BLUE LP by Susan',
          rule: {
            "monday": [ 21, 28, 3, 11 ],
            "tuesday": [ 21, 27, 2, 10 ],
            "wednesday": [ 25, 31, 6, 14 ],
            "thursday": [ 24, 30, 5, 13 ],
            "saturday": [ 23, 29, 4, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2179620921/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jessicaackerley.bandcamp.com/album/coalesce',
          a_string: 'Coalesce by Jessica Ackerley Trio',
          rule: {
            "monday": [ 23, 29, 4, 13 ],
            "tuesday": [ 21, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 10 ],
            "thursday": [ 25, 31, 6, 14 ],
            "saturday": [ 24, 30, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4203696644/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://helenscarsdale.bandcamp.com/album/the-story-surrounds-us',
          a_string: 'the story surrounds us by kate carr',
          rule: {
            "monday": [ 24, 30, 5, 13 ],
            "tuesday": [ 23, 29, 4, 13 ],
            "wednesday": [ 21, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 25, 31, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1066471974/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dregenevieve.bandcamp.com/album/strangely-free',
          a_string: 'Strangely Free by Dre Genevieve',
          rule: {
            "monday": [ 26, 1, 7, 15 ],
            "tuesday": [ 25, 31, 6, 14 ],
            "wednesday": [ 24, 30, 5, 14 ],
            "thursday": [ 22, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2680258136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://funknacaixa.bandcamp.com/album/bad-ista-ep',
          a_string: 'Bad$ista EP by Bad$ista',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 26, 1, 7, 15 ],
            "wednesday": [ 25, 31, 6, 14 ],
            "thursday": [ 24, 30, 5, 14 ],
            "saturday": [ 22, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1189907578/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://panalrecords.bandcamp.com/album/kamila-govorcin-el-mundo-pnl16',
          a_string: 'Kamila Govorcin - El Mundo [#PNL16] by Panal Records',
          rule: {
            "monday": [ 22, 29, 4, 12 ],
            "tuesday": [ 22, 28, 3, 11 ],
            "wednesday": [ 26, 1, 7, 15 ],
            "thursday": [ 25, 31, 6, 14 ],
            "saturday": [ 24, 30, 5, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=3720774709/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://catnapp.bandcamp.com/track/flame-bitch-prod-x-dabow',
          a_string: 'Flame Bitch prod x Dabow by CATNAPP',
          rule: {
            "monday": [ 24, 30, 5, 14 ],
            "tuesday": [ 22, 29, 4, 12 ],
            "wednesday": [ 22, 28, 3, 11 ],
            "thursday": [ 26, 1, 7, 15 ],
            "saturday": [ 25, 31, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3140356033/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://viviankrist.bandcamp.com/album/cold-sun',
          a_string: 'Cold Sun by VIVIANKRIST',
          rule: {
            "monday": [ 25, 31, 6, 14 ],
            "tuesday": [ 24, 30, 5, 14 ],
            "wednesday": [ 22, 29, 4, 12 ],
            "thursday": [ 22, 28, 3, 11 ],
            "saturday": [ 26, 1, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3767548441/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://risaripa.bandcamp.com/album/tokyo',
          a_string: 'Tokyo by risaripa x viviankrist',
          rule: {
            "monday": [ 26, 1, 7, 15 ],
            "tuesday": [ 25, 31, 6, 14 ],
            "wednesday": [ 24, 30, 5, 14 ],
            "thursday": [ 22, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3636947880/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://viviankrist.bandcamp.com/album/oslo-risaripa-x-viviankrist',
          a_string: 'Oslo - risaripa x viviankrist by Viviankrist x risaripa',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 26, 1, 7, 15 ],
            "wednesday": [ 25, 31, 6, 14 ],
            "thursday": [ 24, 30, 5, 14 ],
            "saturday": [ 22, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=187272660/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://finderskeepersrecords.bandcamp.com/album/lixiviation',
          a_string: 'Lixiviation by Suzanne Ciani',
          rule: {
            "monday": [ 23, 30, 5, 13 ],
            "tuesday": [ 23, 29, 4, 12 ],
            "wednesday": [ 27, 2, 8, 16 ],
            "thursday": [ 26, 1, 7, 15 ],
            "saturday": [ 25, 31, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2966559078/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://finderskeepersrecords.bandcamp.com/album/paint-a-lady',
          a_string: 'Paint A Lady by Susan Christie',
          rule: {
            "monday": [ 25, 31, 6, 15 ],
            "tuesday": [ 23, 30, 5, 13 ],
            "wednesday": [ 23, 29, 4, 12 ],
            "thursday": [ 27, 2, 8, 16 ],
            "saturday": [ 26, 1, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4070860491/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://finderskeepersrecords.bandcamp.com/album/the-silver-globe-the-amber-light',
          a_string: 'The Silver Globe &amp; The Amber Light by Jane Weaver',
          rule: {
            "monday": [ 26, 1, 7, 15 ],
            "tuesday": [ 25, 31, 6, 15 ],
            "wednesday": [ 23, 30, 5, 13 ],
            "thursday": [ 23, 29, 4, 12 ],
            "saturday": [ 27, 2, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=418983817/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://genot.bandcamp.com/album/feed-goals',
          a_string: 'Feed Goals by Enchanted Lands',
          rule: {
            "monday": [ 27, 2, 8, 16 ],
            "tuesday": [ 26, 1, 7, 15 ],
            "wednesday": [ 25, 31, 6, 15 ],
            "thursday": [ 23, 30, 5, 13 ],
            "saturday": [ 23, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=863913310/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://genot.bandcamp.com/album/fugue-some-temporal-patterns-other-than-the-forward-march',
          a_string: 'Fugue: Some Temporal Patterns Other Than the Forward March by Iku',
          rule: {
            "monday": [ 23, 29, 4, 12 ],
            "tuesday": [ 27, 2, 8, 16 ],
            "wednesday": [ 26, 1, 7, 15 ],
            "thursday": [ 25, 31, 6, 15 ],
            "saturday": [ 23, 30, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1409178576/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://buhrecords.bandcamp.com/album/br67-fifteen-years-old-abecedario',
          a_string: 'BR67 - Fifteen Years Old - Abecedario by buh records',
          rule: {
            "monday": [ 23, 30, 5, 13 ],
            "tuesday": [ 23, 29, 4, 12 ],
            "wednesday": [ 27, 2, 8, 16 ],
            "thursday": [ 26, 1, 7, 15 ],
            "saturday": [ 25, 31, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=967384525/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tunes.mamabirdrecordingco.com/album/i-need-to-start-a-garden',
          a_string: 'I Need to Start a Garden by HALEY HEYNDERICKX',
          rule: {
            "monday": [ 25, 31, 6, 15 ],
            "tuesday": [ 23, 30, 5, 13 ],
            "wednesday": [ 23, 29, 4, 12 ],
            "thursday": [ 27, 2, 8, 16 ],
            "saturday": [ 26, 1, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1990466637/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soaplibrary.bandcamp.com/album/here-appear',
          a_string: 'Here Appear by Eve Essex',
          rule: {
            "monday": [ 27, 2, 8, 16 ],
            "tuesday": [ 26, 1, 7, 16 ],
            "wednesday": [ 24, 31, 6, 14 ],
            "thursday": [ 24, 30, 5, 13 ],
            "saturday": [ 28, 3, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=943117711/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://norentrecords.bandcamp.com/album/houston-nrr67',
          a_string: '&quot;houston&quot; (NRR67) by apologist',
          rule: {
            "monday": [ 28, 3, 9, 17 ],
            "tuesday": [ 27, 2, 8, 16 ],
            "wednesday": [ 26, 1, 7, 16 ],
            "thursday": [ 24, 31, 6, 14 ],
            "saturday": [ 24, 30, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3697318837/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://negativegemini.bandcamp.com/album/body-work',
          a_string: 'Body Work by Negative Gemini',
          rule: {
            "monday": [ 24, 30, 5, 13 ],
            "tuesday": [ 28, 3, 9, 17 ],
            "wednesday": [ 27, 2, 8, 16 ],
            "thursday": [ 26, 1, 7, 16 ],
            "saturday": [ 24, 31, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2460167822/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shitkid.bandcamp.com/album/this-is-it-ep',
          a_string: 'This Is It [EP] by ShitKid',
          rule: {
            "monday": [ 24, 31, 6, 14 ],
            "tuesday": [ 24, 30, 5, 13 ],
            "wednesday": [ 28, 3, 9, 17 ],
            "thursday": [ 27, 2, 8, 16 ],
            "saturday": [ 26, 1, 7, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4065780068/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shitkid.bandcamp.com/album/fish-lp',
          a_string: 'Fish [LP] by ShitKid',
          rule: {
            "monday": [ 26, 1, 7, 16 ],
            "tuesday": [ 24, 31, 6, 14 ],
            "wednesday": [ 24, 30, 5, 13 ],
            "thursday": [ 28, 3, 9, 17 ],
            "saturday": [ 27, 2, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2343553919/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tropicaltwistarecords.bandcamp.com/album/kaleema-n-mada-ttr029',
          a_string: 'Kaleema - Nómada (TTR029) by Tropical Twista Records',
          rule: {
            "monday": [ 27, 2, 8, 16 ],
            "tuesday": [ 26, 1, 7, 16 ],
            "wednesday": [ 24, 31, 6, 14 ],
            "thursday": [ 24, 30, 5, 13 ],
            "saturday": [ 28, 3, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2841244084/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sotomayor.bandcamp.com/album/conquistador',
          a_string: 'Conquistador by Sotomayor',
          rule: {
            "monday": [ 28, 3, 9, 17 ],
            "tuesday": [ 27, 2, 8, 16 ],
            "wednesday": [ 26, 1, 7, 16 ],
            "thursday": [ 24, 31, 6, 14 ],
            "saturday": [ 24, 30, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3940816177/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ela-minus.bandcamp.com/album/adapt',
          a_string: 'Adapt. by ela minus',
          rule: {
            "monday": [ 25, 31, 6, 14 ],
            "tuesday": [ 29, 4, 10, 18 ],
            "wednesday": [ 28, 3, 9, 17 ],
            "thursday": [ 27, 2, 8, 17 ],
            "saturday": [ 25, 1, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4114896578/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://feliciaatkinson.bandcamp.com/album/a-readymade-ceremony',
          a_string: 'A Readymade Ceremony by FELICIA ATKINSON',
          rule: {
            "monday": [ 25, 1, 7, 15 ],
            "tuesday": [ 25, 31, 6, 14 ],
            "wednesday": [ 29, 4, 10, 18 ],
            "thursday": [ 28, 3, 9, 17 ],
            "saturday": [ 27, 2, 8, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3534329540/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sarahhennies.bandcamp.com/album/live-fleas',
          a_string: 'Live Fleas by Sarah Hennies',
          rule: {
            "monday": [ 27, 2, 8, 17 ],
            "tuesday": [ 25, 1, 7, 15 ],
            "wednesday": [ 25, 31, 6, 14 ],
            "thursday": [ 29, 4, 10, 18 ],
            "saturday": [ 28, 3, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=909143123/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cucinapoveraglasgow.bandcamp.com/album/hilja',
          a_string: 'Hilja by Cucina Povera',
          rule: {
            "monday": [ 28, 3, 9, 17 ],
            "tuesday": [ 27, 2, 8, 17 ],
            "wednesday": [ 25, 1, 7, 15 ],
            "thursday": [ 25, 31, 6, 14 ],
            "saturday": [ 29, 4, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2329745255/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://monkoora.bandcamp.com/album/sky-fi',
          a_string: 'Sky-Fi by MONKOORA',
          rule: {
            "monday": [ 29, 4, 10, 18 ],
            "tuesday": [ 28, 3, 9, 17 ],
            "wednesday": [ 27, 2, 8, 17 ],
            "thursday": [ 25, 1, 7, 15 ],
            "saturday": [ 25, 31, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4190186020/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pascalpinonmorr.bandcamp.com/album/sundur',
          a_string: 'Sundur by Pascal Pinon',
          rule: {
            "monday": [ 25, 31, 6, 14 ],
            "tuesday": [ 29, 4, 10, 18 ],
            "wednesday": [ 28, 3, 9, 17 ],
            "thursday": [ 27, 2, 8, 17 ],
            "saturday": [ 25, 1, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=372459707/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dkarecords.bandcamp.com/album/holding-on',
          a_string: 'Holding On by Sally Dige',
          rule: {
            "monday": [ 25, 1, 7, 15 ],
            "tuesday": [ 25, 31, 6, 14 ],
            "wednesday": [ 29, 4, 10, 18 ],
            "thursday": [ 28, 3, 9, 17 ],
            "saturday": [ 27, 2, 8, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2918317502/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://queenbeerecords.bandcamp.com/album/x-marks-the-question',
          a_string: 'X Marks the Question by Lisa Mezzacappa Trio',
          rule: {
            "monday": [ 28, 3, 9, 18 ],
            "tuesday": [ 26, 2, 8, 16 ],
            "wednesday": [ 26, 1, 7, 15 ],
            "thursday": [ 30, 5, 11, 19 ],
            "saturday": [ 29, 4, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1452588632/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://queenbeerecords.bandcamp.com/album/no-ins-outs',
          a_string: 'No Ins &amp; Outs by duo B.',
          rule: {
            "monday": [ 29, 4, 10, 18 ],
            "tuesday": [ 28, 3, 9, 18 ],
            "wednesday": [ 26, 2, 8, 16 ],
            "thursday": [ 26, 1, 7, 15 ],
            "saturday": [ 30, 5, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2710063432/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bell.bandcamp.com/album/tempo',
          a_string: 'Tempo by OLGA BELL',
          rule: {
            "monday": [ 30, 5, 11, 19 ],
            "tuesday": [ 29, 4, 10, 18 ],
            "wednesday": [ 28, 3, 9, 18 ],
            "thursday": [ 26, 2, 8, 16 ],
            "saturday": [ 26, 1, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1622864793/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bell.bandcamp.com/album/diamonite',
          a_string: 'DIAMONITE by OLGA BELL',
          rule: {
            "monday": [ 26, 1, 7, 15 ],
            "tuesday": [ 30, 5, 11, 19 ],
            "wednesday": [ 29, 4, 10, 18 ],
            "thursday": [ 28, 3, 9, 18 ],
            "saturday": [ 26, 2, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1170230570/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://queenbeerecords.bandcamp.com/album/future-s-now-s',
          a_string: 'Future(s) Now(s) by Bristle',
          rule: {
            "monday": [ 26, 2, 8, 16 ],
            "tuesday": [ 26, 1, 7, 15 ],
            "wednesday": [ 30, 5, 11, 19 ],
            "thursday": [ 29, 4, 10, 18 ],
            "saturday": [ 28, 3, 9, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4265715197/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peggygou.bandcamp.com/album/once',
          a_string: 'Once by Peggy Gou',
          rule: {
            "monday": [ 28, 3, 9, 18 ],
            "tuesday": [ 26, 2, 8, 16 ],
            "wednesday": [ 26, 1, 7, 15 ],
            "thursday": [ 30, 5, 11, 19 ],
            "saturday": [ 29, 4, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1995703143/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nubyagarcia.bandcamp.com/album/when-we-are',
          a_string: 'When We Are by Nubya Garcia',
          rule: {
            "monday": [ 29, 4, 10, 18 ],
            "tuesday": [ 28, 3, 9, 18 ],
            "wednesday": [ 26, 2, 8, 16 ],
            "thursday": [ 26, 1, 7, 15 ],
            "saturday": [ 30, 5, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=380172067/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://malariaband.bandcamp.com/album/compiled-1981-84',
          a_string: 'Compiled 1981-84 by Malaria!',
          rule: {
            "monday": [ 31, 6, 12, 20 ],
            "tuesday": [ 30, 5, 11, 19 ],
            "wednesday": [ 29, 4, 10, 19 ],
            "thursday": [ 27, 3, 9, 17 ],
            "saturday": [ 27, 2, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4261545991/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://malariaband.bandcamp.com/album/versus',
          a_string: 'Versus by Malaria!',
          rule: {
            "monday": [ 27, 2, 8, 16 ],
            "tuesday": [ 31, 6, 12, 20 ],
            "wednesday": [ 30, 5, 11, 19 ],
            "thursday": [ 29, 4, 10, 19 ],
            "saturday": [ 27, 3, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1906382658/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://annaburch.bandcamp.com/album/quit-the-curse',
          a_string: 'Quit the Curse by Anna Burch',
          rule: {
            "monday": [ 27, 3, 9, 17 ],
            "tuesday": [ 27, 2, 8, 16 ],
            "wednesday": [ 31, 6, 12, 20 ],
            "thursday": [ 30, 5, 11, 19 ],
            "saturday": [ 29, 4, 10, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=903885912/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carolinerosemusic.bandcamp.com/album/loner',
          a_string: 'LONER by Caroline Rose',
          rule: {
            "monday": [ 29, 4, 10, 19 ],
            "tuesday": [ 27, 3, 9, 17 ],
            "wednesday": [ 27, 2, 8, 16 ],
            "thursday": [ 31, 6, 12, 20 ],
            "saturday": [ 30, 5, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2942117843/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://holliecook.bandcamp.com/album/vessel-of-love',
          a_string: 'Vessel of Love by Hollie Cook',
          rule: {
            "monday": [ 30, 5, 11, 19 ],
            "tuesday": [ 29, 4, 10, 19 ],
            "wednesday": [ 27, 3, 9, 17 ],
            "thursday": [ 27, 2, 8, 16 ],
            "saturday": [ 31, 6, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2772598634/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brokentwinmusic.bandcamp.com/album/may',
          a_string: 'May by Broken Twin',
          rule: {
            "monday": [ 31, 6, 12, 20 ],
            "tuesday": [ 30, 5, 11, 19 ],
            "wednesday": [ 29, 4, 10, 19 ],
            "thursday": [ 27, 3, 9, 17 ],
            "saturday": [ 27, 2, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1649113765/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://doepaoro.bandcamp.com/album/after',
          a_string: 'After by Doe Paoro',
          rule: {
            "monday": [ 27, 2, 8, 16 ],
            "tuesday": [ 31, 6, 12, 20 ],
            "wednesday": [ 30, 5, 11, 19 ],
            "thursday": [ 29, 4, 10, 19 ],
            "saturday": [ 27, 3, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=649543301/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bethorton.bandcamp.com/album/kidsticks',
          a_string: 'Kidsticks by Beth Orton',
          rule: {
            "monday": [ 28, 4, 10, 18 ],
            "tuesday": [ 28, 3, 9, 17 ],
            "wednesday": [ 1, 7, 13, 21 ],
            "thursday": [ 31, 6, 12, 20 ],
            "saturday": [ 30, 5, 11, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3864858710/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hatisnoit.bandcamp.com/album/illogical-dance',
          a_string: 'Illogical Dance by Hatis Noit',
          rule: {
            "monday": [ 30, 5, 11, 20 ],
            "tuesday": [ 28, 4, 10, 18 ],
            "wednesday": [ 28, 3, 9, 17 ],
            "thursday": [ 1, 7, 13, 21 ],
            "saturday": [ 31, 6, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3386600203/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunnysidezone.com/album/heart-tonic',
          a_string: 'Heart Tonic by Caroline Davis',
          rule: {
            "monday": [ 31, 6, 12, 20 ],
            "tuesday": [ 30, 5, 11, 20 ],
            "wednesday": [ 28, 4, 10, 18 ],
            "thursday": [ 28, 3, 9, 17 ],
            "saturday": [ 1, 7, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1407432699/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maryhalvorson.bandcamp.com/album/code-girl',
          a_string: 'Code Girl by Mary Halvorson',
          rule: {
            "monday": [ 1, 7, 13, 21 ],
            "tuesday": [ 31, 6, 12, 20 ],
            "wednesday": [ 30, 5, 11, 20 ],
            "thursday": [ 28, 4, 10, 18 ],
            "saturday": [ 28, 3, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3926996843/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jadejackson.bandcamp.com/album/gilded',
          a_string: 'Gilded by Jade Jackson',
          rule: {
            "monday": [ 28, 3, 9, 17 ],
            "tuesday": [ 1, 7, 13, 21 ],
            "wednesday": [ 31, 6, 12, 20 ],
            "thursday": [ 30, 5, 11, 20 ],
            "saturday": [ 28, 4, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1561561466/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://girlpoool.bandcamp.com/album/powerplant',
          a_string: 'Powerplant by girlpool',
          rule: {
            "monday": [ 28, 4, 10, 18 ],
            "tuesday": [ 28, 3, 9, 17 ],
            "wednesday": [ 1, 7, 13, 21 ],
            "thursday": [ 31, 6, 12, 20 ],
            "saturday": [ 30, 5, 11, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2783839739/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joliehollandmusic.bandcamp.com/album/wine-dark-sea',
          a_string: 'Wine Dark Sea by Jolie Holland',
          rule: {
            "monday": [ 30, 5, 11, 20 ],
            "tuesday": [ 28, 4, 10, 18 ],
            "wednesday": [ 28, 3, 9, 17 ],
            "thursday": [ 1, 7, 13, 21 ],
            "saturday": [ 31, 6, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1951911766/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zolajesus.bandcamp.com/album/okovi-additions',
          a_string: 'Okovi: Additions by Zola Jesus',
          rule: {
            "monday": [ 1, 7, 13, 21 ],
            "tuesday": [ 31, 6, 12, 21 ],
            "wednesday": [ 29, 5, 11, 19 ],
            "thursday": [ 29, 4, 10, 18 ],
            "saturday": [ 2, 8, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1543755718/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zolajesus.bandcamp.com/album/versions',
          a_string: 'Versions by Zola Jesus',
          rule: {
            "monday": [ 2, 8, 14, 22 ],
            "tuesday": [ 1, 7, 13, 21 ],
            "wednesday": [ 31, 6, 12, 21 ],
            "thursday": [ 29, 5, 11, 19 ],
            "saturday": [ 29, 4, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4252760398/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zolajesus.bandcamp.com/album/conatus',
          a_string: 'Conatus by Zola Jesus',
          rule: {
            "monday": [ 29, 4, 10, 18 ],
            "tuesday": [ 2, 8, 14, 22 ],
            "wednesday": [ 1, 7, 13, 21 ],
            "thursday": [ 31, 6, 12, 21 ],
            "saturday": [ 29, 5, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=209615438/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bsteady.bandcamp.com/album/queer-love-songs',
          a_string: 'queer love songs by be steadwell',
          rule: {
            "monday": [ 29, 5, 11, 19 ],
            "tuesday": [ 29, 4, 10, 18 ],
            "wednesday": [ 2, 8, 14, 22 ],
            "thursday": [ 1, 7, 13, 21 ],
            "saturday": [ 31, 6, 12, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1621609874/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://inneroceanrecords.bandcamp.com/album/women-of-the-world-compilation',
          a_string: 'Women Of The World Compilation by Various Artists',
          rule: {
            "monday": [ 31, 6, 12, 21 ],
            "tuesday": [ 29, 5, 11, 19 ],
            "wednesday": [ 29, 4, 10, 18 ],
            "thursday": [ 2, 8, 14, 22 ],
            "saturday": [ 1, 7, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1969968798/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zolajesus.bandcamp.com/album/stridulum',
          a_string: 'Stridulum by Zola Jesus',
          rule: {
            "monday": [ 1, 7, 13, 21 ],
            "tuesday": [ 31, 6, 12, 21 ],
            "wednesday": [ 29, 5, 11, 19 ],
            "thursday": [ 29, 4, 10, 18 ],
            "saturday": [ 2, 8, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2539493127/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://slipimprint.bandcamp.com/album/lost-in-shadows',
          a_string: 'Lost In Shadows by Ashley Paul',
          rule: {
            "monday": [ 2, 8, 14, 22 ],
            "tuesday": [ 1, 7, 13, 21 ],
            "wednesday": [ 31, 6, 12, 21 ],
            "thursday": [ 29, 5, 11, 19 ],
            "saturday": [ 29, 4, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2048684979/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intaktrec.bandcamp.com/album/alien-huddle',
          a_string: 'Alien Huddle by Sylvie Courvoiser, Ikue Mori, Lotte Anker',
          rule: {
            "monday": [ 30, 5, 11, 19 ],
            "tuesday": [ 3, 9, 15, 23 ],
            "wednesday": [ 2, 8, 14, 22 ],
            "thursday": [ 1, 7, 13, 22 ],
            "saturday": [ 30, 6, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3327527731/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peggylee1.bandcamp.com/album/echo-painting',
          a_string: 'ECHO PAINTING by Peggy Lee',
          rule: {
            "monday": [ 30, 6, 12, 20 ],
            "tuesday": [ 30, 5, 11, 19 ],
            "wednesday": [ 3, 9, 15, 23 ],
            "thursday": [ 2, 8, 14, 22 ],
            "saturday": [ 1, 7, 13, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2108731929/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://southtexassuite.bandcamp.com/album/south-texas-suite',
          a_string: 'South Texas Suite by Whitney Rose',
          rule: {
            "monday": [ 1, 7, 13, 22 ],
            "tuesday": [ 30, 6, 12, 20 ],
            "wednesday": [ 30, 5, 11, 19 ],
            "thursday": [ 3, 9, 15, 23 ],
            "saturday": [ 2, 8, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2327477408/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ifellasleeplikethis.bandcamp.com/album/martyr-complex',
          a_string: 'Martyr Complex by Oblivia',
          rule: {
            "monday": [ 2, 8, 14, 22 ],
            "tuesday": [ 1, 7, 13, 22 ],
            "wednesday": [ 30, 6, 12, 20 ],
            "thursday": [ 30, 5, 11, 19 ],
            "saturday": [ 3, 9, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1390807095/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ifellasleeplikethis.bandcamp.com/album/i-fell-asleep-like-this',
          a_string: 'I Fell Asleep Like This by Oblivia',
          rule: {
            "monday": [ 3, 9, 15, 23 ],
            "tuesday": [ 2, 8, 14, 22 ],
            "wednesday": [ 1, 7, 13, 22 ],
            "thursday": [ 30, 6, 12, 20 ],
            "saturday": [ 30, 5, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=957667480/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://estere.bandcamp.com/album/my-design-on-others-lives',
          a_string: 'My Design, On Others&#39; Lives by Estère',
          rule: {
            "monday": [ 30, 5, 11, 19 ],
            "tuesday": [ 3, 9, 15, 23 ],
            "wednesday": [ 2, 8, 14, 22 ],
            "thursday": [ 1, 7, 13, 22 ],
            "saturday": [ 30, 6, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=520385859/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://estere.bandcamp.com/album/new-species-remix-ep',
          a_string: 'New Species - Remix EP by Estère',
          rule: {
            "monday": [ 30, 6, 12, 20 ],
            "tuesday": [ 30, 5, 11, 19 ],
            "wednesday": [ 3, 9, 15, 23 ],
            "thursday": [ 2, 8, 14, 22 ],
            "saturday": [ 1, 7, 13, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2070030114/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://estere.bandcamp.com/album/est-re',
          a_string: 'Estère by Estère',
          rule: {
            "monday": [ 2, 8, 14, 23 ],
            "tuesday": [ 31, 7, 13, 21 ],
            "wednesday": [ 31, 6, 12, 20 ],
            "thursday": [ 4, 10, 16, 24 ],
            "saturday": [ 3, 9, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3837097434/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://grouper.bandcamp.com/album/grid-of-points',
          a_string: 'Grid Of Points by Grouper',
          rule: {
            "monday": [ 3, 9, 15, 23 ],
            "tuesday": [ 2, 8, 14, 23 ],
            "wednesday": [ 31, 7, 13, 21 ],
            "thursday": [ 31, 6, 12, 20 ],
            "saturday": [ 4, 10, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3538167430/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/streya',
          a_string: 'Streya by Olivia De Prato',
          rule: {
            "monday": [ 4, 10, 16, 24 ],
            "tuesday": [ 3, 9, 15, 23 ],
            "wednesday": [ 2, 8, 14, 23 ],
            "thursday": [ 31, 7, 13, 21 ],
            "saturday": [ 31, 6, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1162201326/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://claricejensen.bandcamp.com/album/for-this-from-that-will-be-filled',
          a_string: 'For This From That Will Be Filled by Clarice Jensen',
          rule: {
            "monday": [ 31, 6, 12, 20 ],
            "tuesday": [ 4, 10, 16, 24 ],
            "wednesday": [ 3, 9, 15, 23 ],
            "thursday": [ 2, 8, 14, 23 ],
            "saturday": [ 31, 7, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4035595196/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erica.bandcamp.com/album/beautiful',
          a_string: 'Beautiful by ÉRICA',
          rule: {
            "monday": [ 31, 7, 13, 21 ],
            "tuesday": [ 31, 6, 12, 20 ],
            "wednesday": [ 4, 10, 16, 24 ],
            "thursday": [ 3, 9, 15, 23 ],
            "saturday": [ 2, 8, 14, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=659659137/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ctatsu.bandcamp.com/album/a-480',
          a_string: 'A 480 by Kara-Lis Coverdale',
          rule: {
            "monday": [ 2, 8, 14, 23 ],
            "tuesday": [ 31, 7, 13, 21 ],
            "wednesday": [ 31, 6, 12, 20 ],
            "thursday": [ 4, 10, 16, 24 ],
            "saturday": [ 3, 9, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4039746508/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ctatsu.bandcamp.com/album/qualities-of-bodies-permanent',
          a_string: 'Qualities of Bodies Permanent by Sarah Davachi',
          rule: {
            "monday": [ 3, 9, 15, 23 ],
            "tuesday": [ 2, 8, 14, 23 ],
            "wednesday": [ 31, 7, 13, 21 ],
            "thursday": [ 31, 6, 12, 20 ],
            "saturday": [ 4, 10, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2920851769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://halfwaif.bandcamp.com/album/lavender',
          a_string: 'Lavender by Half Waif',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 4, 10, 16, 24 ],
            "wednesday": [ 3, 9, 15, 24 ],
            "thursday": [ 1, 8, 14, 22 ],
            "saturday": [ 1, 7, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4186738415/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://heavenstobetsykrs.bandcamp.com/album/these-monsters-are-real',
          a_string: 'These Monsters Are Real by Heavens To Betsy',
          rule: {
            "monday": [ 1, 7, 13, 21 ],
            "tuesday": [ 5, 11, 17, 25 ],
            "wednesday": [ 4, 10, 16, 24 ],
            "thursday": [ 3, 9, 15, 24 ],
            "saturday": [ 1, 8, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=692240413/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://heavenstobetsykrs.bandcamp.com/album/calculated',
          a_string: 'Calculated by Heavens To Betsy',
          rule: {
            "monday": [ 1, 8, 14, 22 ],
            "tuesday": [ 1, 7, 13, 21 ],
            "wednesday": [ 5, 11, 17, 25 ],
            "thursday": [ 4, 10, 16, 24 ],
            "saturday": [ 3, 9, 15, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1945894059/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carlabozulich.bandcamp.com/album/quieter',
          a_string: 'Quieter by Carla Bozulich',
          rule: {
            "monday": [ 3, 9, 15, 24 ],
            "tuesday": [ 1, 8, 14, 22 ],
            "wednesday": [ 1, 7, 13, 21 ],
            "thursday": [ 5, 11, 17, 25 ],
            "saturday": [ 4, 10, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=242629237/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carlabozulich.bandcamp.com/album/boy',
          a_string: 'Boy by Carla Bozulich',
          rule: {
            "monday": [ 4, 10, 16, 24 ],
            "tuesday": [ 3, 9, 15, 24 ],
            "wednesday": [ 1, 8, 14, 22 ],
            "thursday": [ 1, 7, 13, 21 ],
            "saturday": [ 5, 11, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=400644888/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carlabozulich.bandcamp.com/album/in-animal-tongue',
          a_string: 'In Animal Tongue by Evangelista',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 4, 10, 16, 24 ],
            "wednesday": [ 3, 9, 15, 24 ],
            "thursday": [ 1, 8, 14, 22 ],
            "saturday": [ 1, 7, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=550432153/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://courtneybarnett.bandcamp.com/album/tell-me-how-you-really-feel',
          a_string: 'Tell Me How You Really Feel by courtney barnett',
          rule: {
            "monday": [ 1, 7, 13, 21 ],
            "tuesday": [ 5, 11, 17, 25 ],
            "wednesday": [ 4, 10, 16, 24 ],
            "thursday": [ 3, 9, 15, 24 ],
            "saturday": [ 1, 8, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=190883348/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://witchprophet.bandcamp.com/album/the-golden-octave',
          a_string: 'The Golden Octave by Witch Prophet',
          rule: {
            "monday": [ 2, 9, 15, 23 ],
            "tuesday": [ 2, 8, 14, 22 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 5, 11, 17, 25 ],
            "saturday": [ 4, 10, 16, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1791534101/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africaseven.bandcamp.com/album/mothers-garden-the-funky-sounds-of-female-africa-1975-1984',
          a_string: 'Mothers Garden (The Funky Sounds Of Female Africa 1975 - 1984) by Various Artists',
          rule: {
            "monday": [ 4, 10, 16, 25 ],
            "tuesday": [ 2, 9, 15, 23 ],
            "wednesday": [ 2, 8, 14, 22 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 5, 11, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=654121247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alexdrewchin.bandcamp.com/album/irisiri',
          a_string: 'IRISIRI by Eartheater',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 4, 10, 16, 25 ],
            "wednesday": [ 2, 9, 15, 23 ],
            "thursday": [ 2, 8, 14, 22 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3768340399/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marylattimoreharpist.bandcamp.com/album/hundreds-of-days',
          a_string: 'Hundreds of Days by Mary Lattimore',
          rule: {
            "monday": [ 6, 12, 18, 26 ],
            "tuesday": [ 5, 11, 17, 25 ],
            "wednesday": [ 4, 10, 16, 25 ],
            "thursday": [ 2, 9, 15, 23 ],
            "saturday": [ 2, 8, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3315783497/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jennyhval.bandcamp.com/album/the-long-sleep-ep',
          a_string: 'The Long Sleep EP by Jenny Hval',
          rule: {
            "monday": [ 2, 8, 14, 22 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 5, 11, 17, 25 ],
            "thursday": [ 4, 10, 16, 25 ],
            "saturday": [ 2, 9, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=596621089/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anjutunes.bandcamp.com/album/water-garden',
          a_string: 'Water Garden by Anju',
          rule: {
            "monday": [ 2, 9, 15, 23 ],
            "tuesday": [ 2, 8, 14, 22 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 5, 11, 17, 25 ],
            "saturday": [ 4, 10, 16, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3944623789/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kbonet.com/album/childqueen',
          a_string: 'Childqueen by Kadhja Bonet',
          rule: {
            "monday": [ 4, 10, 16, 25 ],
            "tuesday": [ 2, 9, 15, 23 ],
            "wednesday": [ 2, 8, 14, 22 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 5, 11, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=967539469/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunnysidezone.com/album/bridges',
          a_string: 'Bridges by Jamie Baum Septet +',
          rule: {
            "monday": [ 6, 12, 18, 26 ],
            "tuesday": [ 5, 11, 17, 26 ],
            "wednesday": [ 3, 10, 16, 24 ],
            "thursday": [ 3, 9, 15, 23 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3210669649/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nicemusiclabel.bandcamp.com/album/020-all-in-the-same-room',
          a_string: '020 &#39;All In The Same Room&#39; by Fia Fiell',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 5, 11, 17, 26 ],
            "thursday": [ 3, 10, 16, 24 ],
            "saturday": [ 3, 9, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4101620376/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://annemalin.bandcamp.com/album/am',
          a_string: 'AM by Anne Malin',
          rule: {
            "monday": [ 3, 9, 15, 23 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 5, 11, 17, 26 ],
            "saturday": [ 3, 10, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=874159921/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jenshyu-pi.bandcamp.com/album/song-of-silver-geese',
          a_string: 'Song of Silver Geese by Jen Shyu',
          rule: {
            "monday": [ 4, 11, 17, 25 ],
            "tuesday": [ 4, 10, 16, 24 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 6, 12, 18, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=612432049/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://loriscacco.bandcamp.com/album/desire-loop',
          a_string: 'Desire Loop by Lori Scacco',
          rule: {
            "monday": [ 6, 12, 18, 27 ],
            "tuesday": [ 4, 11, 17, 25 ],
            "wednesday": [ 4, 10, 16, 24 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1356252312/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fperecs.bandcamp.com/album/maroon-cloud',
          a_string: 'maroon cloud by Nicole Mitchell',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 6, 12, 18, 27 ],
            "wednesday": [ 4, 11, 17, 25 ],
            "thursday": [ 4, 10, 16, 24 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3972681609/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bellsatlas.bandcamp.com/album/be-brave',
          a_string: 'Be Brave by Bells Atlas',
          rule: {
            "monday": [ 8, 14, 20, 28 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 27 ],
            "thursday": [ 4, 11, 17, 25 ],
            "saturday": [ 4, 10, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3847377304/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://15passenger.bandcamp.com/album/in-rounds',
          a_string: 'In Rounds by Campdogzz',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 7, 13, 19, 28 ],
            "saturday": [ 5, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2532185139/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shirleycollins.bandcamp.com/album/false-true-lovers',
          a_string: 'False True Lovers by Shirley Collins',
          rule: {
            "monday": [ 5, 12, 18, 26 ],
            "tuesday": [ 5, 11, 17, 25 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1417904052/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://matchess.bandcamp.com/album/sacracorpa',
          a_string: 'Sacracorpa by Matchess',
          rule: {
            "monday": [ 7, 13, 19, 28 ],
            "tuesday": [ 5, 12, 18, 26 ],
            "wednesday": [ 5, 11, 17, 25 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2568407260/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peoplelikeus-vickibennett.bandcamp.com/album/lowest-common-dominator',
          a_string: 'Lowest Common Dominator by People Like Us',
          rule: {
            "monday": [ 8, 14, 20, 28 ],
            "tuesday": [ 7, 13, 19, 28 ],
            "wednesday": [ 5, 12, 18, 26 ],
            "thursday": [ 5, 11, 17, 25 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1123542052/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://andreakeller.bandcamp.com/album/five-below-live',
          a_string: 'Five Below Live by Andrea Keller',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 28 ],
            "wednesday": [ 7, 13, 19, 28 ],
            "thursday": [ 5, 12, 18, 26 ],
            "saturday": [ 5, 11, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1311744596/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://helenahauff.bandcamp.com/album/qualm',
          a_string: 'Qualm by Helena Hauff',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 7, 13, 19, 28 ],
            "saturday": [ 5, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=163970836/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ctatsu.bandcamp.com/album/moments-in-golden-light',
          a_string: 'Moments in Golden Light by poemme',
          rule: {
            "monday": [ 5, 12, 18, 26 ],
            "tuesday": [ 5, 11, 17, 25 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3531324841/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fortevilfruit.bandcamp.com/album/i-am-come-from-a-place',
          a_string: 'I Am Come From a Place by Claire Potter &amp; Bridget Hayden',
          rule: {
            "monday": [ 8, 14, 20, 29 ],
            "tuesday": [ 6, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=245225388/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://negativescanner.bandcamp.com/album/nose-picker',
          a_string: 'Nose Picker by Negative Scanner',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 29 ],
            "wednesday": [ 6, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1216917825/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://heavenly.bandcamp.com/album/atta-girl',
          a_string: 'Atta Girl by Heavenly',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 29 ],
            "thursday": [ 6, 13, 19, 27 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2114842515/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://risarubin.bandcamp.com/album/im-reliving-the-end-over-and-over-and-over-again-and-its-only-the-beginning',
          a_string: 'I&#39;m Reliving the End Over and Over and Over Again and Its Only the Beginning by Risa Rubin',
          rule: {
            "monday": [ 6, 12, 18, 26 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 8, 14, 20, 29 ],
            "saturday": [ 6, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1505537099/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nenehcherry.bandcamp.com/album/the-cherry-thing',
          a_string: 'The Cherry Thing by Neneh Cherry &amp; The Thing',
          rule: {
            "monday": [ 6, 13, 19, 27 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 8, 14, 20, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1754250859/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thaliazedek.bandcamp.com/album/fighting-season',
          a_string: 'Fighting Season by Thalia Zedek Band',
          rule: {
            "monday": [ 8, 14, 20, 29 ],
            "tuesday": [ 6, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2140173089/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thaliazedek.bandcamp.com/album/negative-work',
          a_string: 'Negative Work by E',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 29 ],
            "wednesday": [ 6, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=934480267/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thaliazedek.bandcamp.com/album/e',
          a_string: 'E by E',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 9, 15, 21, 30 ],
            "thursday": [ 7, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3322725756/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://missworld.bandcamp.com/album/keeping-up-with-miss-world-lp',
          a_string: 'Keeping Up With Miss World [LP] by MISS WORLD',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 30 ],
            "saturday": [ 7, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3523225868/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leabertucci.bandcamp.com/album/metal-aether',
          a_string: '&#39;Metal Aether&#39; by Lea Bertucci',
          rule: {
            "monday": [ 7, 14, 20, 28 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=29955068/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kalimalone.bandcamp.com/album/black-gate',
          a_string: 'Black Gate by Kali Malone',
          rule: {
            "monday": [ 9, 15, 21, 30 ],
            "tuesday": [ 7, 14, 20, 28 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2316472413/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://luxuryrecords.bandcamp.com/album/a-sort-of-company',
          a_string: 'A sort of company by Call me',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 9, 15, 21, 30 ],
            "wednesday": [ 7, 14, 20, 28 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=579699959/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://othermindsrecords.bandcamp.com/album/om-live-hommage',
          a_string: 'OM Live: Hommage by Joan Jeanrenaud',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 9, 15, 21, 30 ],
            "thursday": [ 7, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2759726993/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sluchaj.bandcamp.com/album/joelle-leandre-strings-garden',
          a_string: 'Joelle Leandre - Strings Garden by Fundacja Słuchaj',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 30 ],
            "saturday": [ 7, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2870073553/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marissanadler.bandcamp.com/album/for-my-crimes',
          a_string: 'For My Crimes by Marissa Nadler',
          rule: {
            "monday": [ 8, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 28 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 10, 16, 22, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3710156969/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ivysole.bandcamp.com/album/overgrown',
          a_string: 'Overgrown by Ivy Sole',
          rule: {
            "monday": [ 10, 16, 22, 31 ],
            "tuesday": [ 8, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4219634705/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://weareacr.bandcamp.com/album/l-a-p-l-i-m-b-a-r-e',
          a_string: 'l a p l i m b a r e by la plimbare',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 31 ],
            "wednesday": [ 8, 15, 21, 29 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1784542514/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yokoono.bandcamp.com/album/warzone',
          a_string: 'Warzone by Yoko Ono',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 10, 16, 22, 31 ],
            "thursday": [ 8, 15, 21, 29 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=288322092/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shida-shahabi.bandcamp.com/album/homes',
          a_string: 'Homes by Shida Shahabi',
          rule: {
            "monday": [ 8, 14, 20, 28 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 10, 16, 22, 31 ],
            "saturday": [ 8, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1493191993/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rqlrod.bandcamp.com/album/the-310-pt-2',
          a_string: 'The 310, Pt. 2 by Raquel Rodriguez',
          rule: {
            "monday": [ 8, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 28 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 10, 16, 22, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=641918857/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tashamusic.bandcamp.com/album/alone-at-last',
          a_string: 'Alone at Last by Tasha',
          rule: {
            "monday": [ 10, 16, 22, 31 ],
            "tuesday": [ 8, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=989980970/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliaholter.bandcamp.com/album/aviary',
          a_string: 'Aviary by Julia Holter',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 11, 17, 23, 1 ],
            "wednesday": [ 9, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2302433109/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliaholter.bandcamp.com/album/in-the-same-room',
          a_string: 'In The Same Room by Julia Holter',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 1 ],
            "thursday": [ 9, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=766515467/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://miserablegrl.bandcamp.com/album/loverboy-dog-days',
          a_string: 'Loverboy / Dog Days by Miserable',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 1 ],
            "saturday": [ 9, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2884039919/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://miserablegrl.bandcamp.com/album/uncontrollable',
          a_string: 'Uncontrollable by Miserable',
          rule: {
            "monday": [ 9, 16, 22, 30 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 11, 17, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2027118462/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://miserablegrl.bandcamp.com/album/halloween-dream-ep',
          a_string: 'Halloween Dream EP by Miserable',
          rule: {
            "monday": [ 11, 17, 23, 1 ],
            "tuesday": [ 9, 16, 22, 30 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2561797139/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elenasetien.bandcamp.com/album/another-kind-of-revolution',
          a_string: 'Another Kind Of Revolution by Elena Setien',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 11, 17, 23, 1 ],
            "wednesday": [ 9, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=75664521/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/12-from-25',
          a_string: '12 From 25 by Myra Melford',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 1 ],
            "thursday": [ 9, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=430151978/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/the-other-side-of-air',
          a_string: 'The Other Side Of Air by Myra Melford&#39;s Snowy Egret',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 12, 18, 24, 2 ],
            "saturday": [ 10, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2662391735/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://grouper.bandcamp.com/album/the-man-who-died-in-his-boat',
          a_string: 'The Man Who Died In His Boat by Grouper',
          rule: {
            "monday": [ 10, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2894676039/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://slipimprint.bandcamp.com/album/dawning-on',
          a_string: 'Dawning On by Julia Reidy',
          rule: {
            "monday": [ 12, 18, 24, 2 ],
            "tuesday": [ 10, 17, 23, 31 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3126710397/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rvng.bandcamp.com/album/beside-herself',
          a_string: 'Beside Herself by Michele Mercure',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 12, 18, 24, 2 ],
            "wednesday": [ 10, 17, 23, 31 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4199762733/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rustblade.bandcamp.com/album/marchesa',
          a_string: 'Marchesa by Lydia Lunch',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 12, 18, 24, 2 ],
            "thursday": [ 10, 17, 23, 31 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1195266483/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rustblade.bandcamp.com/album/under-the-covers',
          a_string: 'Under The Covers by Lydia Lunch &amp; Cypress Grove',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 12, 18, 24, 2 ],
            "saturday": [ 10, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2839275529/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rustblade.bandcamp.com/album/a-fistful-of-desert-blues',
          a_string: 'A Fistful Of Desert Blues by Lydia Lunch &amp; Cypress Grove',
          rule: {
            "monday": [ 10, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2394163692/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unifactor.bandcamp.com/album/another-time',
          a_string: 'Another Time by Shells',
          rule: {
            "monday": [ 13, 19, 25, 3 ],
            "tuesday": [ 11, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3751024190/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hausumountain.bandcamp.com/album/ask-me-how-satan-started',
          a_string: 'Ask Me How Satan Started by Bonnie Baxter',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 3 ],
            "wednesday": [ 11, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1858937030/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://weareacr.bandcamp.com/album/organs-in-the-wind',
          a_string: 'Organs in the Wind by Jax Deluca',
          rule: {
            "monday": [ 15, 21, 27, 4 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 3 ],
            "thursday": [ 11, 18, 24, 1 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2885152458/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mollynilsson.bandcamp.com/album/twenty-twenty',
          a_string: 'Twenty Twenty by Molly Nilsson',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 13, 19, 25, 3 ],
            "saturday": [ 11, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=463199215/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://happyrhodes.bandcamp.com/album/ectotrophia',
          a_string: 'Ectotrophia by Happy Rhodes',
          rule: {
            "monday": [ 11, 18, 24, 1 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 13, 19, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3334491876/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lalabandlala.bandcamp.com/album/the-lamb',
          a_string: 'The Lamb by Lala Lala',
          rule: {
            "monday": [ 13, 19, 25, 3 ],
            "tuesday": [ 11, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3571454682/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mariedavidson.bandcamp.com/album/working-class-woman',
          a_string: 'Working Class Woman by Marie Davidson',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 3 ],
            "wednesday": [ 11, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3739322536/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hatchie.bandcamp.com/album/sugar-spice',
          a_string: 'Sugar &amp; Spice by Hatchie',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 14, 20, 26, 4 ],
            "thursday": [ 12, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3944623789/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kadhjabonet.bandcamp.com/album/childqueen',
          a_string: 'Childqueen by Kadhja Bonet',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 4 ],
            "saturday": [ 12, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2478513919/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://domeofdoom.bandcamp.com/album/fantastic-planet',
          a_string: 'Fantastic Planet by Lealani',
          rule: {
            "monday": [ 12, 19, 25, 2 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3871517269/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sharonvanetten.bandcamp.com/album/remind-me-tomorrow',
          a_string: 'Remind Me Tomorrow by Sharon Van Etten',
          rule: {
            "monday": [ 14, 20, 26, 4 ],
            "tuesday": [ 12, 19, 25, 2 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2951530277/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eggpaper.bandcamp.com/album/pining-for-a-boy',
          a_string: 'Pining For A Boy by The Submissives',
          rule: {
            "monday": [ 15, 21, 27, 4 ],
            "tuesday": [ 14, 20, 26, 4 ],
            "wednesday": [ 12, 19, 25, 2 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1285212217/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jenniferwharton.bandcamp.com/album/bonegasm',
          a_string: 'Bonegasm by Jennifer Wharton Bonegasm',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 14, 20, 26, 4 ],
            "thursday": [ 12, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4219019572/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ournativedaughters.bandcamp.com/album/songs-of-our-native-daughters',
          a_string: 'Songs of Our Native Daughters by Our Native Daughters',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 4 ],
            "saturday": [ 12, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2164502333/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.zoekeating.com/album/snowmelt-ep',
          a_string: 'Snowmelt (EP) by Zoe Keating',
          rule: {
            "monday": [ 13, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 15, 21, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=311740226/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anemonelovesyou.bandcamp.com/album/beat-my-distance',
          a_string: 'Beat My Distance by Anemone',
          rule: {
            "monday": [ 15, 21, 27, 5 ],
            "tuesday": [ 13, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=277856306/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://grouper.bandcamp.com/album/after-its-own-death-walking-in-a-spiral-towards-the-house',
          a_string: 'After its own death / Walking in a spiral towards the house by Nivhek',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 5 ],
            "wednesday": [ 13, 20, 26, 3 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1431371002/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/the-oracle',
          a_string: 'The Oracle by Angel Bat Dawid',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 15, 21, 27, 5 ],
            "thursday": [ 13, 20, 26, 3 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=171742989/size=large/bgcol=ffffff/linkcol=0687f5/license_id=406/tracklist=false/transparent=true/',
          href_string: 'http://juliajacklin.bandcamp.com/album/crushing',
          a_string: 'Crushing by Julia Jacklin',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 15, 21, 27, 5 ],
            "saturday": [ 13, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=187403266/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newyorkhaunted.bandcamp.com/album/nyh152-loraine-james-button-mashing',
          a_string: 'NYH152 Loraine James - Button Mashing by New York Haunted',
          rule: {
            "monday": [ 13, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 15, 21, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3112732403/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://samanthariott.bandcamp.com/album/bloodletting-2',
          a_string: 'Bloodletting by Samantha Riott',
          rule: {
            "monday": [ 15, 21, 27, 5 ],
            "tuesday": [ 13, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=430430275/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teneshathewordsmith.bandcamp.com/album/madea-dangerous-women',
          a_string: 'Madea/Dangerous Women by Tenesha The WordSmith',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 16, 22, 28, 6 ],
            "wednesday": [ 14, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=439977032/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teneshathewordsmith.bandcamp.com/album/body-of-work',
          a_string: 'Body Of Work by Tenesha The WordSmith',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 6 ],
            "thursday": [ 14, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1899165602/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://allisonmiller.bandcamp.com/album/otis-was-a-polar-bear',
          a_string: 'Otis Was A Polar Bear by Allison Miller',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 6 ],
            "saturday": [ 14, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3651199063/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ingridchavez.bandcamp.com/album/memories-of-flying',
          a_string: 'Memories Of Flying by Ingrid Chavez',
          rule: {
            "monday": [ 14, 21, 27, 4 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 16, 22, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2490675789/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chantaecann.bandcamp.com/album/sol-empowered',
          a_string: 'Sol Empowered by Chantae Cann',
          rule: {
            "monday": [ 16, 22, 28, 6 ],
            "tuesday": [ 14, 21, 27, 4 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4287334263/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emilyking.bandcamp.com/album/scenery',
          a_string: 'Scenery by Emily King',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 16, 22, 28, 6 ],
            "wednesday": [ 14, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3704438576/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://petracore.bandcamp.com/album/filament',
          a_string: 'filament by petra',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 6 ],
            "thursday": [ 14, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1477640512/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://toneglowrecords.bandcamp.com/album/you-i-are-earth',
          a_string: 'you &amp; i are earth by Vanessa Rossetto',
          rule: {
            "monday": [ 15, 21, 27, 4 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 17, 23, 29, 7 ],
            "saturday": [ 15, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2219896003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitereevesproductions.bandcamp.com/album/sonelab-sessions-wrp019',
          a_string: 'Sonelab Sessions [WRP019] by Melissa St Pierre',
          rule: {
            "monday": [ 15, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=228884389/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://femina.bandcamp.com/album/perlas-conchas',
          a_string: 'Perlas &amp; Conchas by Fémina',
          rule: {
            "monday": [ 17, 23, 29, 7 ],
            "tuesday": [ 15, 22, 28, 5 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 311,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3472279396/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://evangreer.bandcamp.com/album/she-her-they-them',
          a_string: 'she/her/they/them by Evan Greer',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 17, 23, 29, 7 ],
            "wednesday": [ 15, 22, 28, 5 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 312,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3849423724/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://liisisalumaa.bandcamp.com/album/edi',
          a_string: 'Edi by Liisi Salumaa',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 17, 23, 29, 7 ],
            "thursday": [ 15, 22, 28, 5 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 313,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3944832616/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://solveigmatthildur.bandcamp.com/album/constantly-in-love',
          a_string: 'Constantly In Love by Sólveig Matthildur',
          rule: {
            "monday": [ 15, 21, 27, 4 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 17, 23, 29, 7 ],
            "saturday": [ 15, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 314,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=978850590/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jakartarecords-label.bandcamp.com/album/suzume',
          a_string: 'SUZUME by J.Lamotta',
          rule: {
            "monday": [ 15, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 315,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3992490043/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kimmortal.bandcamp.com/album/x-marks-the-swirl',
          a_string: 'X marks the Swirl by K!MMORTAL',
          rule: {
            "monday": [ 18, 24, 30, 8 ],
            "tuesday": [ 16, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 20, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 316,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4052844335/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://claudefontaine.bandcamp.com/album/claude-fontaine',
          a_string: 'Claude Fontaine by Claude Fontaine',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 8 ],
            "wednesday": [ 16, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 20, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 317,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=678690423/size=large/bgcol=ffffff/linkcol=0687f5/license_id=579/tracklist=false/transparent=true/',
          href_string: 'http://aldousharding.bandcamp.com/album/designer',
          a_string: 'Designer by Aldous Harding',
          rule: {
            "monday": [ 20, 26, 1, 9 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 8 ],
            "thursday": [ 16, 23, 29, 6 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 318,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2353196556/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://haco-sound.bandcamp.com/album/secret-garden',
          a_string: 'Secret Garden by Haco',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 18, 24, 30, 8 ],
            "saturday": [ 16, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 319,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4092236001/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carolineshaw.bandcamp.com/album/orange',
          a_string: 'Orange by Caroline Shaw &amp; Attacca Quartet',
          rule: {
            "monday": [ 16, 23, 29, 6 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 20, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 18, 24, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 320,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1605921230/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blankformseditions.bandcamp.com/album/petra',
          a_string: 'Petra by Maryanne Amacher',
          rule: {
            "monday": [ 18, 24, 30, 8 ],
            "tuesday": [ 16, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 20, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 321,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4172342132/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://starkland.bandcamp.com/album/zibuokle-martinaityte-in-search-of-lost-beauty',
          a_string: 'Zibuokle Martinaityte: In Search of Lost Beauty... by Žibuoklė Martinaitytė',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 8 ],
            "wednesday": [ 16, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 20, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 322,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3267984569/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://popkatarirecords.bandcamp.com/album/serendipity',
          a_string: 'Serendipity by Emma Newell',
          rule: {
            "monday": [ 21, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 19, 25, 31, 9 ],
            "thursday": [ 17, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 323,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2819716286/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://josephinewiggs.bandcamp.com/album/we-fall',
          a_string: 'We Fall by Josephine Wiggs',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 21, 27, 2, 10 ],
            "wednesday": [ 20, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 9 ],
            "saturday": [ 17, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 324,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1708786130/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://iamgabrielleb.bandcamp.com/album/feel-something',
          a_string: 'Feel Something by Gabrielle B.',
          rule: {
            "monday": [ 17, 24, 30, 7 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 21, 27, 2, 10 ],
            "thursday": [ 20, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 325,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1700567050/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wizardapprentice.bandcamp.com/album/dig-a-pit',
          a_string: 'Dig A Pit by Wizard Apprentice',
          rule: {
            "monday": [ 19, 25, 31, 9 ],
            "tuesday": [ 17, 24, 30, 7 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 20, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 326,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1395117610/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rosaanschuetz.bandcamp.com/album/rigid',
          a_string: 'Rigid by Rosa Anschütz',
          rule: {
            "monday": [ 20, 26, 1, 9 ],
            "tuesday": [ 19, 25, 31, 9 ],
            "wednesday": [ 17, 24, 30, 7 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 21, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 327,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=543872343/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://psalmone.bandcamp.com/album/flight-of-the-wig',
          a_string: 'FLIGHT OF THE WIG by Psalm One',
          rule: {
            "monday": [ 21, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 19, 25, 31, 9 ],
            "thursday": [ 17, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 328,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1942054205/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://danajeanphoenix.bandcamp.com/album/pixeldust-deluxe-edition',
          a_string: 'PixelDust Deluxe Edition by Dana Jean Phoenix',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 21, 27, 2, 10 ],
            "wednesday": [ 20, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 9 ],
            "saturday": [ 17, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 329,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3693331961/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stefchuraband.bandcamp.com/album/midnight',
          a_string: 'Midnight by stef chura',
          rule: {
            "monday": [ 18, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 22, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 20, 26, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 330,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4008312738/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alicecohen.bandcamp.com/album/artificial-fairytales',
          a_string: 'Artificial Fairytales by Alice Cohen &amp; The Channel 14 Weather Team',
          rule: {
            "monday": [ 20, 26, 1, 10 ],
            "tuesday": [ 18, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 22, 28, 3, 11 ],
            "saturday": [ 21, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 331,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=866011049/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://clairecronin.bandcamp.com/album/big-dread-moon',
          a_string: 'Big Dread Moon by Claire Cronin',
          rule: {
            "monday": [ 21, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 10 ],
            "wednesday": [ 18, 25, 31, 8 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 22, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 332,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3762315289/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brandee.bandcamp.com/album/soul-awakening',
          a_string: 'Soul Awakening by Brandee Younger',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 21, 27, 2, 10 ],
            "wednesday": [ 20, 26, 1, 10 ],
            "thursday": [ 18, 25, 31, 8 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 333,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4289561130/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brandee.bandcamp.com/album/the-brandee-younger-4tet-live-the-breeding-ground',
          a_string: 'The Brandee Younger 4tet Live @ The Breeding Ground by The Brandee Younger Quartet',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 22, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 10 ],
            "thursday": [ 20, 26, 1, 10 ],
            "saturday": [ 18, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 334,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3766178554/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carlageneve.bandcamp.com/album/carla-geneve',
          a_string: 'Carla Geneve by Carla Geneve',
          rule: {
            "monday": [ 18, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 22, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 20, 26, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 335,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1728182340/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://christellebofale.bandcamp.com/album/swim-team',
          a_string: 'Swim Team by Christelle Bofale',
          rule: {
            "monday": [ 20, 26, 1, 10 ],
            "tuesday": [ 18, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 22, 28, 3, 11 ],
            "saturday": [ 21, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 336,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2891795100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fayewebster.bandcamp.com/album/atlanta-millionaires-club',
          a_string: 'Atlanta Millionaires Club by Faye Webster',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 21, 27, 2, 11 ],
            "wednesday": [ 19, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 23, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 337,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3537426782/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kainamusic.bandcamp.com/album/next-to-the-sun',
          a_string: 'Next to The Sun by KAINA',
          rule: {
            "monday": [ 23, 29, 4, 12 ],
            "tuesday": [ 22, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 11 ],
            "thursday": [ 19, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 338,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=969446742/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ceumusic.bandcamp.com/album/tropix',
          a_string: 'Tropix by Céu',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 23, 29, 4, 12 ],
            "wednesday": [ 22, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 11 ],
            "saturday": [ 19, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 339,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4171890148/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chenoir.bandcamp.com/album/the-thrill-of-the-hunt-2',
          a_string: 'The Thrill Of The Hunt 2 by Che` Noir',
          rule: {
            "monday": [ 19, 26, 1, 9 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 23, 29, 4, 12 ],
            "thursday": [ 22, 28, 3, 11 ],
            "saturday": [ 21, 27, 2, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 340,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=463128931/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://adaleamusic.bandcamp.com/album/what-we-say-in-private',
          a_string: 'what we say in private by Ada Lea',
          rule: {
            "monday": [ 21, 27, 2, 11 ],
            "tuesday": [ 19, 26, 1, 9 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 23, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 341,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4006805118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://florist.bandcamp.com/album/emily-alone',
          a_string: 'Emily Alone by Florist',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 21, 27, 2, 11 ],
            "wednesday": [ 19, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 23, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 342,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3503231624/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://psychich0tline.bandcamp.com/album/heat-index',
          a_string: 'Heat Index by Psychic Hotline',
          rule: {
            "monday": [ 23, 29, 4, 12 ],
            "tuesday": [ 22, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 11 ],
            "thursday": [ 19, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 343,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1224590916/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://badabingrecords.bandcamp.com/album/cross-record-3',
          a_string: 'Cross Record by Cross Record',
          rule: {
            "monday": [ 20, 26, 1, 9 ],
            "tuesday": [ 24, 30, 5, 13 ],
            "wednesday": [ 23, 29, 4, 12 ],
            "thursday": [ 22, 28, 3, 12 ],
            "saturday": [ 20, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 344,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=922441338/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lowleaf.bandcamp.com/album/bakers-dozen-low-leaf',
          a_string: 'Baker&#39;s Dozen: Low Leaf by Low Leaf',
          rule: {
            "monday": [ 20, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 24, 30, 5, 13 ],
            "thursday": [ 23, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 345,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3119769858/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amidang.bandcamp.com/album/parted-plains',
          a_string: 'Parted Plains by Ami Dang',
          rule: {
            "monday": [ 22, 28, 3, 12 ],
            "tuesday": [ 20, 27, 2, 10 ],
            "wednesday": [ 20, 26, 1, 9 ],
            "thursday": [ 24, 30, 5, 13 ],
            "saturday": [ 23, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 346,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1928419723/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mariausbeck.bandcamp.com/album/envejeciendo',
          a_string: 'Envejeciendo by Maria Usbeck',
          rule: {
            "monday": [ 23, 29, 4, 12 ],
            "tuesday": [ 22, 28, 3, 12 ],
            "wednesday": [ 20, 27, 2, 10 ],
            "thursday": [ 20, 26, 1, 9 ],
            "saturday": [ 24, 30, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 347,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2023901144/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laurajurd.bandcamp.com/album/stepping-back-jumping-in',
          a_string: 'Stepping Back, Jumping In by Laura Jurd',
          rule: {
            "monday": [ 24, 30, 5, 13 ],
            "tuesday": [ 23, 29, 4, 12 ],
            "wednesday": [ 22, 28, 3, 12 ],
            "thursday": [ 20, 27, 2, 10 ],
            "saturday": [ 20, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 348,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=604415935/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://helensvobodasprout.bandcamp.com/album/sleep-architecture',
          a_string: 'Sleep Architecture by Helen Svoboda&#39;s SPROUT',
          rule: {
            "monday": [ 20, 26, 1, 9 ],
            "tuesday": [ 24, 30, 5, 13 ],
            "wednesday": [ 23, 29, 4, 12 ],
            "thursday": [ 22, 28, 3, 12 ],
            "saturday": [ 20, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 349,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3143875730/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://estherrosemusic.bandcamp.com/album/you-made-it-this-far',
          a_string: 'You Made It This Far by Esther Rose',
          rule: {
            "monday": [ 20, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 24, 30, 5, 13 ],
            "thursday": [ 23, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 350,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2105239680/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cudighirecords.bandcamp.com/album/folksonomies',
          a_string: 'Folksonomies by Laura Luna Castillo',
          rule: {
            "monday": [ 23, 29, 4, 13 ],
            "tuesday": [ 21, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 10 ],
            "thursday": [ 25, 31, 6, 14 ],
            "saturday": [ 24, 30, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 351,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4022932274/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ninakeith.bandcamp.com/album/maranasati-19111',
          a_string: 'MARANASATI 19111 by Nina Keith',
          rule: {
            "monday": [ 24, 30, 5, 13 ],
            "tuesday": [ 23, 29, 4, 13 ],
            "wednesday": [ 21, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 25, 31, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 352,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1818528971/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://daymearocena.bandcamp.com/album/sonocardiogram',
          a_string: 'Sonocardiogram by Daymé Arocena',
          rule: {
            "monday": [ 25, 31, 6, 14 ],
            "tuesday": [ 24, 30, 5, 13 ],
            "wednesday": [ 23, 29, 4, 13 ],
            "thursday": [ 21, 28, 3, 11 ],
            "saturday": [ 21, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 353,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=978479752/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lyndadawn.bandcamp.com/album/at-first-light',
          a_string: 'At First Light by Lynda Dawn',
          rule: {
            "monday": [ 21, 27, 2, 10 ],
            "tuesday": [ 25, 31, 6, 14 ],
            "wednesday": [ 24, 30, 5, 13 ],
            "thursday": [ 23, 29, 4, 13 ],
            "saturday": [ 21, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 354,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2989320146/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pharmakon.bandcamp.com/album/devour',
          a_string: 'Devour by Pharmakon',
          rule: {
            "monday": [ 21, 28, 3, 11 ],
            "tuesday": [ 21, 27, 2, 10 ],
            "wednesday": [ 25, 31, 6, 14 ],
            "thursday": [ 24, 30, 5, 13 ],
            "saturday": [ 23, 29, 4, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 355,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2577054083/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://husbandryny.bandcamp.com/album/a-port-in-a-storm',
          a_string: 'A Port in a Storm by Husbandry',
          rule: {
            "monday": [ 23, 29, 4, 13 ],
            "tuesday": [ 21, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 10 ],
            "thursday": [ 25, 31, 6, 14 ],
            "saturday": [ 24, 30, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 356,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1380087964/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mxmtoon.bandcamp.com/album/the-masquerade',
          a_string: 'the masquerade by mxmtoon',
          rule: {
            "monday": [ 24, 30, 5, 13 ],
            "tuesday": [ 23, 29, 4, 13 ],
            "wednesday": [ 21, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 25, 31, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 357,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3472357594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stacijackson.bandcamp.com/album/keep-the-peace',
          a_string: 'Keep the Peace by Staci Jackson',
          rule: {
            "monday": [ 26, 1, 7, 15 ],
            "tuesday": [ 25, 31, 5, 14 ],
            "wednesday": [ 24, 30, 5, 14 ],
            "thursday": [ 22, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 358,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=608777482/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nahawadoumbia.bandcamp.com/album/la-grande-cantatrice-malienne-vol-1',
          a_string: 'La Grande Cantatrice Malienne Vol 1 by Nahawa Doumbia',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 26, 1, 7, 15 ],
            "wednesday": [ 25, 31, 5, 14 ],
            "thursday": [ 24, 30, 5, 14 ],
            "saturday": [ 22, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 359,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3944860468/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brittanyhoward.bandcamp.com/album/jaime',
          a_string: 'Jaime by Brittany Howard',
          rule: {
            "monday": [ 22, 29, 4, 12 ],
            "tuesday": [ 22, 28, 3, 11 ],
            "wednesday": [ 26, 1, 7, 15 ],
            "thursday": [ 25, 31, 5, 14 ],
            "saturday": [ 24, 30, 5, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 360,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2340474420/size=large/bgcol=ffffff/linkcol=0687f5/license_id=636/tracklist=false/transparent=true/',
          href_string: 'http://suizhen.bandcamp.com/album/losing-linda',
          a_string: 'Losing, Linda by Sui Zhen',
          rule: {
            "monday": [ 24, 30, 5, 14 ],
            "tuesday": [ 22, 29, 4, 12 ],
            "wednesday": [ 22, 28, 3, 11 ],
            "thursday": [ 26, 1, 7, 15 ],
            "saturday": [ 25, 31, 5, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 361,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1629626542/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://borndays.bandcamp.com/album/where-we-live',
          a_string: 'Where We Live by Born Days',
          rule: {
            "monday": [ 25, 31, 5, 14 ],
            "tuesday": [ 24, 30, 5, 14 ],
            "wednesday": [ 22, 29, 4, 12 ],
            "thursday": [ 22, 28, 3, 11 ],
            "saturday": [ 26, 1, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 362,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1774596465/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peytonbooker.bandcamp.com/album/reach-out',
          a_string: 'Reach Out by Peyton',
          rule: {
            "monday": [ 26, 1, 7, 15 ],
            "tuesday": [ 25, 31, 5, 14 ],
            "wednesday": [ 24, 30, 5, 14 ],
            "thursday": [ 22, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 363,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3390033096/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://night-school.bandcamp.com/album/every-and-all-we-voyage-on',
          a_string: 'Every And All We Voyage On by R. Elizabeth',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 26, 1, 7, 15 ],
            "wednesday": [ 25, 31, 5, 14 ],
            "thursday": [ 24, 30, 5, 14 ],
            "saturday": [ 22, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 364,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2528166914/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://psychiceye.bandcamp.com/album/diaspora',
          a_string: 'Diaspora by The Bedroom Witch',
          rule: {
            "monday": [ 23, 30, 5, 13 ],
            "tuesday": [ 23, 29, 4, 12 ],
            "wednesday": [ 27, 2, 8, 16 ],
            "thursday": [ 26, 1, 6, 15 ],
            "saturday": [ 25, 31, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 365,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3571069240/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rhimusic.bandcamp.com/album/the-pale-queen',
          a_string: 'The Pale Queen by Rhi',
          rule: {
            "monday": [ 25, 31, 6, 15 ],
            "tuesday": [ 23, 30, 5, 13 ],
            "wednesday": [ 23, 29, 4, 12 ],
            "thursday": [ 27, 2, 8, 16 ],
            "saturday": [ 26, 1, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 366,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1252825944/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://viciouscircle.bandcamp.com/album/providence',
          a_string: 'Providence by Shannon Wright',
          rule: {
            "monday": [ 26, 1, 6, 15 ],
            "tuesday": [ 25, 31, 6, 15 ],
            "wednesday": [ 23, 30, 5, 13 ],
            "thursday": [ 23, 29, 4, 12 ],
            "saturday": [ 27, 2, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_musics_id_seq', (SELECT MAX(id) FROM march_musics));");
    });
};
