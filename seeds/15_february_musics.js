'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('february_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('february_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=942444799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://albertayler.bandcamp.com/album/albert-ayler-bells-prophecy-expanded-edition-2-disc',
          a_string: 'Albert Ayler: Bells &amp; Prophecy: Expanded Edition (2 Disc) by Albert Ayler',
          rule: {
            "monday": [ 2, 6, 8, 12],
            "tuesday": [4, 8, 10, 14],
            "wednesday": [6, 10, 12, 16],
            "thursday": [8, 12, 14, 18],
            "saturday": [11, 15, 17, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2711475853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://caligolarecords.bandcamp.com/album/quartet-mestre-2008',
          a_string: '«Quartet (Mestre) 2008» by Anthony Braxton',
          rule: {
            "monday": [ 11, 15, 17, 20],
            "tuesday": [2, 6, 8, 12],
            "wednesday": [4, 8, 10, 14],
            "thursday": [6, 10, 12, 16],
            "saturday": [8, 12, 14, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3933485247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://henrygrimes.bandcamp.com/album/the-call',
          a_string: 'The Call by Henry Grimes',
          rule: {
            "monday": [ 8, 12, 14, 18],
            "tuesday": [11, 15, 17, 20],
            "wednesday": [2, 6, 8, 12],
            "thursday": [4, 8, 10, 14],
            "saturday": [6, 10, 12, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1930485249/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/9-compositions-iridium-2006',
          a_string: '9 Compositions (Iridium) 2006 by Anthony Braxton',
          rule: {
            "monday": [ 6, 10, 12, 16],
            "tuesday": [8, 12, 14, 18],
            "wednesday": [11, 15, 17, 20],
            "thursday": [2, 6, 8, 12],
            "saturday": [4, 8, 10, 14]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3415041672/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/that-not',
          a_string: 'that / not by Tyshawn Sorey',
          rule: {
            "monday": [ 4, 8, 10, 14],
            "tuesday": [6, 10, 12, 16],
            "wednesday": [8, 12, 14, 18],
            "thursday": [11, 15, 17, 20],
            "saturday": [2, 6, 8, 12]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=872497733/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bangonacan.bandcamp.com/album/a-ballad-for-many',
          a_string: 'A Ballad For Many by Bang On A Can &amp; Don Byron',
          rule: {
            "monday": [ 2, 6, 8, 12],
            "tuesday": [4, 8, 10, 14],
            "wednesday": [6, 10, 12, 16],
            "thursday": [18, 12, 14, 19],
            "saturday": [11, 15, 17, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2602402062/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ornettecoleman.bandcamp.com/album/town-hall-1962',
          a_string: 'Town Hall 1962 by Ornette Coleman',
          rule: {
            "monday": [ 12, 16, 18, 21],
            "tuesday": [3, 7, 9, 13],
            "wednesday": [5, 9, 11, 15],
            "thursday": [7, 11, 13, 17],
            "saturday": [19, 13, 15, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=211079057/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williamhookerheartofthesun.bandcamp.com/album/heart-of-the-sun',
          a_string: 'Heart of the Sun by William Hooker',
          rule: {
            "monday": [ 19, 13, 15, 20],
            "tuesday": [12, 16, 18, 21],
            "wednesday": [3, 7, 9, 13],
            "thursday": [5, 9, 11, 15],
            "saturday": [7, 11, 13, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2654159831/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/blue-winter',
          a_string: 'Blue Winter by Fred Anderson, Hamid Drake, William Parker',
          rule: {
            "monday": [ 7, 11, 13, 17],
            "tuesday": [19, 13, 15, 20],
            "wednesday": [12, 16, 18, 21],
            "thursday": [3, 7, 9, 13],
            "saturday": [5, 9, 11, 15]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3807849704/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunnysidezone.com/album/proximity',
          a_string: 'Proximity by Andrew Cyrille &amp; Bill McHenry',
          rule: {
            "monday": [ 5, 9, 11, 15],
            "tuesday": [ 7, 11, 13, 17],
            "wednesday": [ 19, 13, 15, 20],
            "thursday": [ 12, 16, 18, 21],
            "saturday": [ 3, 7, 9, 13]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3122607953/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tanksounds.bandcamp.com/album/bardo-tank',
          a_string: 'BARDO TANK by Ron Miles',
          rule: {
            "monday": [ 3, 7, 9, 13],
            "tuesday": [ 5, 9, 11, 15],
            "wednesday": [ 7, 11, 13, 17],
            "thursday": [ 19, 13, 15, 20],
            "saturday": [ 12, 16, 18, 21]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1859384950/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/ten-freedom-summers-2',
          a_string: 'Ten Freedom Summers by Wadada Leo Smith',
          rule: {
            "monday": [ 12, 16, 18, 21],
            "tuesday": [ 3, 7, 9, 13],
            "wednesday": [ 5, 9, 11, 15],
            "thursday": [ 7, 11, 13, 17],
            "saturday": [ 19, 13, 15, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3006941689/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://destination-out.bandcamp.com/album/the-complete-in-berlin-88-box-set',
          a_string: 'THE COMPLETE IN BERLIN &#39;88 (BOX SET) by CECIL TAYLOR',
          rule: {
            "monday": [ 19, 13, 15, 20],
            "tuesday": [ 12, 16, 18, 21],
            "wednesday": [ 3, 7, 9, 13],
            "thursday": [ 5, 9, 11, 15],
            "saturday": [ 7, 11, 13, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=836618089/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oliverlake.bandcamp.com/album/lake-tchicai-osgood-westergaard',
          a_string: 'Lake | Tchicai | Osgood | Westergaard by Oliver Lake, John Tchaicai, Kresten Osgood, Jonas Westergaard',
          rule: {
            "monday": [ 8, 12, 14, 18],
            "tuesday": [ 20, 14, 16, 21],
            "wednesday": [ 13, 17, 19, 22],
            "thursday": [ 4, 8, 10, 14],
            "saturday": [ 6, 10, 12, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1318856636/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://caribouband.bandcamp.com/album/caribou-vibration-ensemble-featuring-marshall-allen',
          a_string: 'Caribou Vibration Ensemble Featuring Marshall Allen by Caribou Vibration Ensemble',
          rule: {
            "monday": [ 6, 10, 12, 16],
            "tuesday": [ 8, 12, 14, 18],
            "wednesday": [ 20, 14, 16, 21],
            "thursday": [ 13, 17, 19, 22],
            "saturday": [ 4, 8, 10, 14]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2383996781/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://noahhoward.bandcamp.com/album/noah-howard-quartet',
          a_string: 'Noah Howard Quartet by Noah Howard',
          rule: {
            "monday": [ 4, 8, 10, 14],
            "tuesday": [ 6, 10, 12, 16],
            "wednesday": [ 8, 12, 14, 18],
            "thursday": [ 20, 14, 16, 21],
            "saturday": [ 13, 17, 19, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=362621699/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ronnieboykins.bandcamp.com/album/the-will-come-is-now',
          a_string: 'The Will Come Is Now by Ronnie Boykins',
          rule: {
            "monday": [13, 17, 19, 22],
            "tuesday": [ 4, 8, 10, 14],
            "wednesday": [ 6, 10, 12, 16],
            "thursday": [ 8, 12, 14, 18],
            "saturday": [ 20, 14, 16, 21]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=840979423/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://franklowe.bandcamp.com/album/the-loweski',
          a_string: 'The Loweski by Frank Lowe',
          rule: {
            "monday": [20, 14, 16, 21],
            "tuesday": [ 13, 17, 19, 22],
            "wednesday": [ 4, 8, 10, 14],
            "thursday": [ 6, 10, 12, 16],
            "saturday": [ 8, 12, 14, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3516001583/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://destination-out.bandcamp.com/album/berlin-skyscraper',
          a_string: 'Berlin Skyscraper by BUTCH MORRIS',
          rule: {
            "monday": [ 8, 12, 14, 18],
            "tuesday": [ 20, 14, 16, 21],
            "wednesday": [ 13, 17, 19, 22],
            "thursday": [ 4, 8, 10, 14],
            "saturday": [ 6, 10, 12, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=771456059/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://destination-out.bandcamp.com/album/portrait',
          a_string: 'Portrait by SAM RIVERS',
          rule: {
            "monday": [ 6, 10, 12, 16],
            "tuesday": [ 8, 12, 14, 18],
            "wednesday": [ 20, 14, 16, 21],
            "thursday": [ 13, 17, 19, 22],
            "saturday": [ 4, 8, 10, 14]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1717215428/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://destination-out.bandcamp.com/album/nailed',
          a_string: 'Nailed by CECIL TAYLOR',
          rule: {
            "monday": [ 5, 9, 11, 15],
            "tuesday": [ 7, 11, 13, 17],
            "wednesday": [ 9, 13, 15, 19],
            "thursday": [ 21, 15, 17, 22],
            "saturday": [ 14, 18, 20, 23]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=541207510/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/spirit-house',
          a_string: 'Spirit House by Jemeel Moondoc &amp; The Jus Grew Orchestra',
          rule: {
            "monday": [ 14, 18, 20, 23],
            "tuesday": [ 5, 9, 11, 15],
            "wednesday": [ 7, 11, 13, 17],
            "thursday": [ 9, 13, 15, 19],
            "saturday": [ 21, 15, 17, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1011163605/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/captain-of-the-deep',
          a_string: 'Captain of the Deep by Denis Charles',
          rule: {
            "monday": [ 21, 15, 17, 22],
            "tuesday": [ 14, 18, 20, 23],
            "wednesday": [ 5, 9, 11, 15],
            "thursday": [ 7, 11, 13, 17],
            "saturday": [ 9, 13, 15, 19]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1823302346/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/new-world-pygmies',
          a_string: 'New World Pygmies by Jemeel Moondoc &amp; William Parker',
          rule: {
            "monday": [ 9, 13, 15, 19],
            "tuesday": [ 21, 15, 17, 22],
            "wednesday": [ 14, 18, 20, 23],
            "thursday": [ 5, 9, 11, 15],
            "saturday": [ 7, 11, 13, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1659727331/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://f-a-t-a-k-a.bandcamp.com/album/tangle',
          a_string: 'Tangle by John Butcher, Thomas Lehn, Matthew Shipp',
          rule: {
            "monday": [ 7, 11, 13, 17],
            "tuesday": [ 9, 13, 15, 19],
            "wednesday": [ 21, 15, 17, 22],
            "thursday": [ 14, 18, 20, 23],
            "saturday": [ 5, 9, 11, 15]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4181318941/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tourdebras.bandcamp.com/album/matana-roberts-sam-shalabi-nicolas-caloia-feldspar',
          a_string: 'Matana Roberts, Sam Shalabi, Nicolas Caloia - Feldspar by Matana Roberts (sax alto), Sam Shalabi (guitare électrique), Nicolas Caloia (contrebasse)',
          rule: {
            "monday": [ 5, 9, 11, 15],
            "tuesday": [ 7, 11, 13, 17],
            "wednesday": [ 9, 13, 15, 19],
            "thursday": [ 21, 15, 17, 22],
            "saturday": [ 14, 18, 20, 23]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2169487895/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://destination-out.bandcamp.com/album/fractured-dimensions',
          a_string: 'Fractured  Dimensions by WILLIAM PARKER',
          rule: {
            "monday": [ 14, 18, 20, 23],
            "tuesday": [ 5, 9, 11, 15],
            "wednesday": [ 7, 11, 13, 17],
            "thursday": [ 9, 13, 15, 19],
            "saturday": [ 21, 15, 17, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2692661850/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marionbrown.bandcamp.com/album/why-not',
          a_string: 'Why Not by Marion Brown',
          rule: {
            "monday": [ 22, 16, 18, 24],
            "tuesday": [ 15, 19, 21, 24],
            "wednesday": [ 6, 10, 12, 16],
            "thursday": [ 8, 12, 14, 18],
            "saturday": [ 10, 14, 16, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=194836613/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pharoahsanders.bandcamp.com/album/pharoah-sanders-quintet',
          a_string: 'Pharoah Sanders Quintet by Pharoah Sanders',
          rule: {
            "monday": [ 10, 14, 16, 20],
            "tuesday": [ 22, 16, 18, 24],
            "wednesday": [ 15, 19, 21, 24],
            "thursday": [ 6, 10, 12, 16],
            "saturday": [ 8, 12, 14, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2978623574/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marzettewatts.bandcamp.com/album/and-company',
          a_string: 'And Company by Marzette Watts',
          rule: {
            "monday": [ 8, 12, 14, 18],
            "tuesday": [ 10, 14, 16, 20],
            "wednesday": [ 22, 16, 18, 24],
            "thursday": [ 15, 19, 21, 24],
            "saturday": [ 6, 10, 12, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=624313275/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/the-all-star-game',
          a_string: 'The All Star Game by Marshall Allen, Hamid Drake, Kidd Jordan, William Parker, Alan Silva',
          rule: {
            "monday": [ 6, 10, 12, 16],
            "tuesday": [ 8, 12, 14, 18],
            "wednesday": [ 10, 14, 16, 20],
            "thursday": [ 22, 16, 18, 24],
            "saturday": [ 15, 19, 21, 24]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4092995023/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/bobs-pink-cadillac',
          a_string: 'Bob&#39;s Pink Cadillac by William Parker',
          rule: {
            "monday": [ 5, 19, 21, 24],
            "tuesday": [ 6, 10, 12, 16],
            "wednesday": [ 8, 12, 14, 18],
            "thursday": [ 10, 14, 16, 20],
            "saturday": [ 22, 16, 18, 24]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=740688057/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/new-world-pygmies-ii',
          a_string: 'New World Pygmies II by Jemeel Moondoc &amp; William Parker with Hamid Drake',
          rule: {
            "monday": [ 22, 16, 18, 24],
            "tuesday": [ 5, 19, 21, 24],
            "wednesday": [ 6, 10, 12, 16],
            "thursday": [ 8, 12, 14, 18],
            "saturday": [ 10, 14, 16, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3411340270/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayler-records.bandcamp.com/album/ode-to-albert-ayler',
          a_string: 'Ode to Albert Ayler by Mark O&#39;Leary &amp; Sunny Murray',
          rule: {
            "monday": [ 10, 14, 16, 20],
            "tuesday": [ 22, 16, 18, 24],
            "wednesday": [ 5, 19, 21, 24],
            "thursday": [ 6, 10, 12, 16],
            "saturday": [ 8, 12, 14, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=872217913/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/we-are-not-at-the-opera',
          a_string: 'We Are Not At The Opera by Sunny Murray &amp; Sabir Mateen',
          rule: {
            "monday": [ 9, 13, 15, 19],
            "tuesday": [ 11, 15, 17, 21],
            "wednesday": [ 23, 17, 19, 25],
            "thursday": [ 6, 20, 22, 25],
            "saturday": [ 7, 11, 13, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2696818120/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/drum-dance-to-the-motherland',
          a_string: 'Drum Dance to the Motherland by Khan Jamal Creative Arts Ensemble',
          rule: {
            "monday": [ 7, 11, 13, 17],
            "tuesday": [ 9, 13, 15, 19],
            "wednesday": [ 11, 15, 17, 21],
            "thursday": [ 23, 17, 19, 25],
            "saturday": [ 6, 20, 22, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3436708453/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://franklowe.bandcamp.com/album/black-beings',
          a_string: 'Black Beings by Frank Lowe',
          rule: {
            "monday": [ 6, 20, 22, 25],
            "tuesday": [ 7, 11, 13, 17],
            "wednesday": [ 9, 13, 15, 19],
            "thursday": [ 11, 15, 17, 21],
            "saturday": [ 23, 17, 19, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3182862440/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/live-in-santanna-arresi-2004',
          a_string: 'Live in Sant&#39;Anna Arresi, 2004 by David S. Ware &amp; Matthew Shipp',
          rule: {
            "monday": [ 23, 17, 19, 25],
            "tuesday": [ 6, 20, 22, 25],
            "wednesday": [ 7, 11, 13, 17],
            "thursday": [ 9, 13, 15, 19],
            "saturday": [ 11, 15, 17, 21]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1768578986/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/live-in-new-york-2010',
          a_string: 'Live in New York, 2010 by David S. Ware Trio',
          rule: {
            "monday": [ 11, 15, 17, 21],
            "tuesday": [ 23, 17, 19, 25],
            "wednesday": [ 6, 20, 22, 25],
            "thursday": [ 7, 11, 13, 17],
            "saturday": [ 9, 13, 15, 19]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3408176361/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dreamcrusher.bandcamp.com/album/suicide-deluxe-2013',
          a_string: 'SUICIDE DELUXE (2013) by dreamcrusher',
          rule: {
            "monday": [ 9, 13, 15, 19],
            "tuesday": [ 11, 15, 17, 21],
            "wednesday": [ 23, 17, 19, 25],
            "thursday": [ 6, 20, 22, 25],
            "saturday": [ 7, 11, 13, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1160806144/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://safarrepublique.bandcamp.com/album/safar-republique',
          a_string: 'Safar Republique by Safar Republique',
          rule: {
            "monday": [ 7, 11, 13, 17 ],
            "tuesday": [ 9, 13, 15, 19 ],
            "wednesday": [ 11, 15, 17, 21 ],
            "thursday": [ 23, 17, 19, 25 ],
            "saturday": [ 6, 20, 2, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1173944759/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hotcasarecords.bandcamp.com/album/african-woman',
          a_string: 'African Woman by King Bucknor Jr &amp; AfroDisk Beat 79',
          rule: {
            "monday": [ 7, 21, 2, 26 ],
            "tuesday": [ 8, 12, 14, 18 ],
            "wednesday": [ 10, 14, 16, 20 ],
            "thursday": [ 12, 16, 18, 22 ],
            "saturday": [ 24, 18, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=619498598/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://artensembleofchicago.bandcamp.com/album/non-cognitive-aspects-of-the-city-live-at-iridium',
          a_string: 'Non-Cognitive Aspects of the City - Live at Iridium by Art Ensemble of Chicago',
          rule: {
            "monday": [ 24, 18, 20, 26 ],
            "tuesday": [ 7, 21, 2, 26 ],
            "wednesday": [ 8, 12, 14, 18 ],
            "thursday": [ 10, 14, 16, 20 ],
            "saturday": [ 12, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=267460253/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://caligolarecords.bandcamp.com/album/jazz-r-evolution',
          a_string: '«Jazz (R)evolution» by Baba Sissoko with Antonello Salis &amp; Famoudou Don Moye',
          rule: {
            "monday": [ 12, 16, 18, 22 ],
            "tuesday": [ 24, 18, 20, 26 ],
            "wednesday": [ 7, 21, 2, 26 ],
            "thursday": [ 8, 12, 14, 18 ],
            "saturday": [ 10, 14, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1952058313/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tyshawn-sorey.bandcamp.com/album/verisimilitude',
          a_string: 'Verisimilitude by Tyshawn Sorey',
          rule: {
            "monday": [ 10, 14, 16, 20 ],
            "tuesday": [ 12, 16, 18, 22 ],
            "wednesday": [ 24, 18, 20, 26 ],
            "thursday": [ 7, 21, 2, 26 ],
            "saturday": [ 8, 12, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2325637060/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://futuramarge.bandcamp.com/album/live-at-the-riverbop',
          a_string: 'Live At The Riverbop by Roy Haynes Quartet',
          rule: {
            "monday": [ 8, 12, 14, 18 ],
            "tuesday": [ 10, 14, 16, 20 ],
            "wednesday": [ 12, 16, 18, 22 ],
            "thursday": [ 24, 18, 20, 26 ],
            "saturday": [ 7, 21, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3667949691/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mikereed1.bandcamp.com/album/flesh-bone',
          a_string: 'Flesh &amp; Bone by Mike Reed',
          rule: {
            "monday": [ 7, 21, 2, 26 ],
            "tuesday": [ 8, 12, 14, 18 ],
            "wednesday": [ 10, 14, 16, 20 ],
            "thursday": [ 12, 16, 18, 22 ],
            "saturday": [ 24, 18, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1165914647/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joemcphee.bandcamp.com/album/the-watermelon-suite',
          a_string: 'The Watermelon Suite by Trio X',
          rule: {
            "monday": [ 24, 18, 20, 26 ],
            "tuesday": [ 7, 21, 2, 26 ],
            "wednesday": [ 8, 12, 14, 18 ],
            "thursday": [ 10, 14, 16, 20 ],
            "saturday": [ 12, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2037657663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://henrythreadgill.bandcamp.com/album/up-popped-the-two-lips',
          a_string: 'Up Popped The Two Lips by Henry Threadgill&#39;s Zooid',
          rule: {
            "monday": [ 13, 17, 19, 21 ],
            "tuesday": [ 25, 19, 21, 27 ],
            "wednesday": [ 8, 22, 3, 27 ],
            "thursday": [ 9, 13, 15, 19 ],
            "saturday": [ 11, 15, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1393903022/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stevecoleman.bandcamp.com/album/harvesting-semblances-and-affinities',
          a_string: 'Harvesting Semblances and Affinities by Steve Coleman',
          rule: {
            "monday": [ 11, 15, 17, 21 ],
            "tuesday": [ 13, 17, 19, 21 ],
            "wednesday": [ 25, 19, 21, 27 ],
            "thursday": [ 8, 22, 3, 27 ],
            "saturday": [ 9, 13, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2071939863/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pheeroanaklaff.bandcamp.com/album/live-at-the-fez',
          a_string: 'Live at the Fez by Pheeroan akLaff',
          rule: {
            "monday": [ 9, 13, 15, 19 ],
            "tuesday": [ 11, 15, 17, 21 ],
            "wednesday": [ 13, 17, 19, 21 ],
            "thursday": [ 25, 19, 21, 27 ],
            "saturday": [ 8, 22, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1181445539/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'https://bandcamp.com/EmbeddedPlayer/album=1181445539/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          a_string: 'Love and Ghosts by Farmers By Nature : Gerald Cleaver / William Parker / Craig Taborn',
          rule: {
            "monday": [ 8, 22, 3, 27 ],
            "tuesday": [ 9, 13, 15, 19 ],
            "wednesday": [ 11, 15, 17, 21 ],
            "thursday": [ 13, 17, 19, 21 ],
            "saturday": [ 25, 19, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2300004674/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wadadaleosmith.bandcamp.com/album/saturn-conjunct-the-grand-canyon-in-a-sweet-embrace',
          a_string: 'Saturn, Conjunct the Grand Canyon in a Sweet Embrace by Wadada Leo Smith &amp; Anthony Braxton',
          rule: {
            "monday": [ 25, 19, 21, 27 ],
            "tuesday": [ 8, 22, 3, 27 ],
            "wednesday": [ 9, 13, 15, 19 ],
            "thursday": [ 11, 15, 17, 21 ],
            "saturday": [ 13, 17, 19, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1781387528/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tuffcity.com/album/psychelphia',
          a_string: 'Psychelphia by Mary Jane Hooper',
          rule: {
            "monday": [ 13, 17, 19, 21 ],
            "tuesday": [ 25, 19, 21, 27 ],
            "wednesday": [ 8, 22, 3, 27 ],
            "thursday": [ 9, 13, 15, 19 ],
            "saturday": [ 11, 15, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=186878699/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intaktrec.bandcamp.com/album/sequel-for-lester-bowie',
          a_string: 'Sequel (For Lester Bowie) by George Lewis',
          rule: {
            "monday": [ 11, 15, 17, 21 ],
            "tuesday": [ 13, 17, 19, 21 ],
            "wednesday": [ 25, 19, 21, 27 ],
            "thursday": [ 8, 22, 3, 27 ],
            "saturday": [ 9, 13, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2809226534/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ghostnoterecords.bandcamp.com/album/def-trance-beat-modalities-of-rhythm',
          a_string: 'Def Trance Beat (Modalities of Rhythm) by Steve Coleman &amp; Five Elements',
          rule: {
            "monday": [ 10, 14, 16, 20 ],
            "tuesday": [ 12, 16, 18, 22 ],
            "wednesday": [ 14, 18, 20, 22 ],
            "thursday": [ 26, 20, 22, 28 ],
            "saturday": [ 9, 23, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3134492544/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bandcamp.for-tune.pl/album/quartet-warsaw-2012',
          a_string: 'Quartet (Warsaw) 2012 by Anthony Braxton',
          rule: {
            "monday": [ 9, 23, 4, 28 ],
            "tuesday": [ 10, 14, 16, 20 ],
            "wednesday": [ 12, 16, 18, 22 ],
            "thursday": [ 14, 18, 20, 22 ],
            "saturday": [ 26, 20, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=274380109/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://destination-out.bandcamp.com/album/burning-cloud-2',
          a_string: 'Burning Cloud by BUTCH MORRIS',
          rule: {
            "monday": [ 26, 20, 22, 28 ],
            "tuesday": [ 9, 23, 4, 28 ],
            "wednesday": [ 10, 14, 16, 20 ],
            "thursday": [ 12, 16, 18, 22 ],
            "saturday": [ 14, 18, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4169089856/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jotongo.bandcamp.com/album/african-funk-experimentals-1968-1982-2017',
          a_string: 'African Funk Experimentals (1968-1982 + 2017) by Jo Tongo',
          rule: {
            "monday": [ 14, 18, 20, 22 ],
            "tuesday": [ 26, 20, 22, 28 ],
            "wednesday": [ 9, 23, 4, 28 ],
            "thursday": [ 10, 14, 16, 20 ],
            "saturday": [ 12, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3765249079/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maalemmahmoudgania.bandcamp.com/album/colours-of-the-night',
          a_string: 'Colours of the Night by Maalem Mahmoud Gania',
          rule: {
            "monday": [ 12, 16, 18, 22 ],
            "tuesday": [ 14, 18, 20, 22 ],
            "wednesday": [ 26, 20, 22, 28 ],
            "thursday": [ 9, 23, 4, 28 ],
            "saturday": [ 10, 14, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2454365750/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://essoafrojamfunkbeat.bandcamp.com/album/juntos',
          a_string: 'Juntos by ¡Esso! Afrojam Funkbeat',
          rule: {
            "monday": [ 10, 14, 16, 20 ],
            "tuesday": [ 12, 16, 18, 22 ],
            "wednesday": [ 14, 18, 20, 22 ],
            "thursday": [ 26, 20, 22, 28 ],
            "saturday": [ 9, 23, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=925922551/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pasteurlappe.bandcamp.com/album/na-man-pass-man',
          a_string: 'Na Man Pass Man by Pasteur Lappe',
          rule: {
            "monday": [ 9, 23, 4, 28 ],
            "tuesday": [ 10, 14, 16, 20 ],
            "wednesday": [ 12, 16, 18, 22 ],
            "thursday": [ 14, 18, 20, 22 ],
            "saturday": [ 26, 20, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3912228382/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sookie1.bandcamp.com/album/sookie',
          a_string: 'Sookie by Sookie',
          rule: {
            "monday": [ 27, 21, 23, 29 ],
            "tuesday": [ 10, 15, 17, 29 ],
            "wednesday": [ 11, 15, 17, 21 ],
            "thursday": [ 13, 17, 19, 23 ],
            "saturday": [ 15, 19, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2051639327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jazzheadrecords.bandcamp.com/album/hexis',
          a_string: 'Hexis by The Monash Art Ensemble with George Lewis',
          rule: {
            "monday": [ 15, 19, 21, 23 ],
            "tuesday": [ 27, 21, 23, 29 ],
            "wednesday": [ 10, 15, 17, 29 ],
            "thursday": [ 11, 15, 17, 21 ],
            "saturday": [ 13, 17, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=701651663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://billdixon.bandcamp.com/album/tapestries-for-small-orchestra',
          a_string: 'Tapestries for Small Orchestra by Bill Dixon',
          rule: {
            "monday": [ 13, 17, 19, 23 ],
            "tuesday": [ 15, 19, 21, 23 ],
            "wednesday": [ 27, 21, 23, 29 ],
            "thursday": [ 10, 15, 17, 29 ],
            "saturday": [ 11, 15, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1644073358/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://culturepower45.bandcamp.com/album/cp4507-fruition',
          a_string: 'CP4507: Fruition by Various Artist',
          rule: {
            "monday": [ 11, 15, 17, 21 ],
            "tuesday": [ 13, 17, 19, 23 ],
            "wednesday": [ 15, 19, 21, 23 ],
            "thursday": [ 27, 21, 23, 29 ],
            "saturday": [ 10, 15, 17, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3567174391/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://charlesbradley.bandcamp.com/album/changes',
          a_string: 'Changes by Charles Bradley',
          rule: {
            "monday": [ 10, 15, 17, 29 ],
            "tuesday": [ 11, 15, 17, 21 ],
            "wednesday": [ 13, 17, 19, 23 ],
            "thursday": [ 15, 19, 21, 23 ],
            "saturday": [ 27, 21, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1828909607/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sugarayrayford.bandcamp.com/album/the-world-that-we-live-in',
          a_string: 'The World That We Live In by SUGARAY RAYFORD',
          rule: {
            "monday": [ 27, 21, 23, 29 ],
            "tuesday": [ 10, 15, 17, 29 ],
            "wednesday": [ 11, 15, 17, 21 ],
            "thursday": [ 13, 17, 19, 23 ],
            "saturday": [ 15, 19, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1402368525/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'https://bandcamp.com/EmbeddedPlayer/album=1402368525/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          a_string: 'EAST by IVY SOLE.',
          rule: {
            "monday": [ 15, 19, 21, 23 ],
            "tuesday": [ 27, 21, 23, 29 ],
            "wednesday": [ 10, 15, 17, 29 ],
            "thursday": [ 11, 15, 17, 21 ],
            "saturday": [ 13, 17, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4279583872/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://parisdjs.bandcamp.com/album/africa-is-the-future',
          a_string: 'Africa Is The Future by Kologbo',
          rule: {
            "monday": [ 14, 18, 20, 24 ],
            "tuesday": [ 16, 20, 22, 24 ],
            "wednesday": [ 28, 22, 24, 1 ],
            "thursday": [ 11, 16, 18, 1 ],
            "saturday": [ 12, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2874278163/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://muyiwakunnuji-osemako.bandcamp.com/album/mo-juba-o',
          a_string: 'Mo Juba O by Muyiwa Kunnuji &amp; OSEMAKO',
          rule: {
            "monday": [ 12, 16, 18, 22 ],
            "tuesday": [ 14, 18, 20, 24 ],
            "wednesday": [ 16, 20, 22, 24 ],
            "thursday": [ 28, 22, 24, 1 ],
            "saturday": [ 11, 16, 18, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1159025980/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africaseven.bandcamp.com/album/du-mali-1',
          a_string: 'Du Mali by Sorry Bamba',
          rule: {
            "monday": [ 11, 16, 18, 1 ],
            "tuesday": [ 12, 16, 18, 22 ],
            "wednesday": [ 14, 18, 20, 24 ],
            "thursday": [ 16, 20, 22, 24 ],
            "saturday": [ 28, 22, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3110169150/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://charlesgayle.bandcamp.com/album/streets-2',
          a_string: 'Streets by Charles Gayle',
          rule: {
            "monday": [ 28, 22, 24, 1 ],
            "tuesday": [ 11, 16, 18, 1 ],
            "wednesday": [ 12, 16, 18, 22 ],
            "thursday": [ 14, 18, 20, 24 ],
            "saturday": [ 16, 20, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1647596655/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://christianscott.bandcamp.com/album/the-emancipation-procrastination',
          a_string: 'The Emancipation Procrastination by Christian Scott aTunde Adjuah',
          rule: {
            "monday": [ 16, 20, 22, 24  ],
            "tuesday": [ 28, 22, 24, 1 ],
            "wednesday": [ 11, 16, 18, 1 ],
            "thursday": [ 12, 16, 18, 22 ],
            "saturday": [ 14, 18, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2371693952/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mulatuastatke.bandcamp.com/album/mulatu-of-ethiopia',
          a_string: 'Mulatu Of Ethiopia by Mulatu Astatke',
          rule: {
            "monday": [ 14, 18, 20, 24 ],
            "tuesday": [ 16, 20, 22, 24 ],
            "wednesday": [ 28, 22, 24, 1 ],
            "thursday": [ 11, 16, 18, 1 ],
            "saturday": [ 12, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2238702751/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/meditation-resurrection',
          a_string: 'Meditation / Resurrection by William Parker Quartets',
          rule: {
            "monday": [ 12, 16, 18, 22 ],
            "tuesday": [ 14, 18, 20, 24 ],
            "wednesday": [ 16, 20, 22, 24 ],
            "thursday": [ 28, 22, 24, 1 ],
            "saturday": [ 11, 16, 18, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3289661233/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jasonmoran.bandcamp.com/album/bangs',
          a_string: 'BANGS by Jason Moran',
          rule: {
            "monday": [ 12, 17, 19, 2 ],
            "tuesday": [ 13, 17, 19, 23 ],
            "wednesday": [ 15, 19, 21, 25 ],
            "thursday": [ 17, 21, 23, 25 ],
            "saturday": [ 29, 23, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=569598526/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dwighttrible.bandcamp.com/album/inspirations',
          a_string: 'Inspirations by Dwight Trible',
          rule: {
            "monday": [ 29, 23, 25, 2 ],
            "tuesday": [ 12, 17, 19, 2 ],
            "wednesday": [ 13, 17, 19, 23 ],
            "thursday": [ 15, 19, 21, 25 ],
            "saturday": [ 17, 21, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2880737996/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://krsone.bandcamp.com/album/the-world-is-mind',
          a_string: 'The World Is MIND by KRS-One',
          rule: {
            "monday": [ 17, 21, 23, 25 ],
            "tuesday": [ 29, 23, 25, 2 ],
            "wednesday": [ 12, 17, 19, 2 ],
            "thursday": [ 13, 17, 19, 23 ],
            "saturday": [ 15, 19, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4014717387/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://openmikeeagle360.bandcamp.com/album/brick-body-kids-still-daydream',
          a_string: 'Brick Body Kids Still Daydream by Open Mike Eagle',
          rule: {
            "monday": [ 15, 19, 21, 25 ],
            "tuesday": [ 17, 21, 23, 25 ],
            "wednesday": [ 29, 23, 25, 2 ],
            "thursday": [ 12, 17, 19, 2 ],
            "saturday": [ 13, 17, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3725306141/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rockyriverabeatrock.bandcamp.com/album/gangster-of-love',
          a_string: 'Gangster of Love by Rocky Rivera',
          rule: {
            "monday": [ 13, 17, 19, 23 ],
            "tuesday": [ 15, 19, 21, 25 ],
            "wednesday": [ 17, 21, 23, 25 ],
            "thursday": [ 29, 23, 25, 2 ],
            "saturday": [ 12, 17, 19, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=480704933/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://spellling.bandcamp.com/album/pantheon-of-me-2',
          a_string: 'Pantheon Of Me by SPELLLING',
          rule: {
            "monday": [ 12, 17, 19, 2 ],
            "tuesday": [ 13, 17, 19, 23 ],
            "wednesday": [ 15, 19, 21, 25 ],
            "thursday": [ 17, 21, 23, 25 ],
            "saturday": [ 29, 23, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4118357594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mosessumney.bandcamp.com/album/aromanticism',
          a_string: 'Aromanticism by Moses Sumney',
          rule: {
            "monday": [ 29, 23, 25, 2 ],
            "tuesday": [ 12, 17, 19, 2 ],
            "wednesday": [ 13, 17, 19, 23 ],
            "thursday": [ 15, 19, 21, 25 ],
            "saturday": [ 17, 21, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1894361972/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sudanarchives.bandcamp.com/album/sudan-archives',
          a_string: 'Sudan Archives by Sudan Archives',
          rule: {
            "monday": [ 18, 22, 24, 26 ],
            "tuesday": [ 1, 24, 26, 3 ],
            "wednesday": [ 13, 18, 20, 3 ],
            "thursday": [ 14, 18, 20, 24 ],
            "saturday": [ 16, 20, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2070045191/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/long-hidden-the-olmec-series',
          a_string: 'Long Hidden: The Olmec Series by William Parker',
          rule: {
            "monday": [ 16, 20, 22, 26 ],
            "tuesday": [ 18, 22, 24, 26 ],
            "wednesday": [ 1, 24, 26, 3 ],
            "thursday": [ 13, 18, 20, 3 ],
            "saturday": [ 14, 18, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1400041100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hot8brassband.bandcamp.com/album/rock-with-the-hot-8',
          a_string: 'Rock With The Hot 8 by Hot 8 Brass Band',
          rule: {
            "monday": [ 14, 18, 20, 24 ],
            "tuesday": [ 16, 20, 22, 26 ],
            "wednesday": [ 18, 22, 24, 26 ],
            "thursday": [ 1, 24, 26, 3 ],
            "saturday": [ 13, 18, 20, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=591803237/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oddiseemmg.bandcamp.com/album/the-good-fight',
          a_string: 'The Good Fight by Oddisee',
          rule: {
            "monday": [ 13, 18, 20, 3 ],
            "tuesday": [ 14, 18, 20, 24 ],
            "wednesday": [ 16, 20, 22, 26 ],
            "thursday": [ 18, 22, 24, 26 ],
            "saturday": [ 1, 24, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=996132433/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rodneyp.bandcamp.com/album/gangster-chronicles-the-definitive-collection',
          a_string: 'Gangster Chronicles: The Definitive Collection by London Posse',
          rule: {
            "monday": [ 1, 24, 26, 3 ],
            "tuesday": [ 13, 18, 20, 3 ],
            "wednesday": [ 14, 18, 20, 24 ],
            "thursday": [ 16, 20, 22, 26 ],
            "saturday": [ 18, 22, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3126264147/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mcmello.bandcamp.com/album/thoughts-released',
          a_string: 'Thoughts Released by M.C. Mell&#39;o',
          rule: {
            "monday": [ 18, 22, 24, 26 ],
            "tuesday": [ 1, 24, 26, 3 ],
            "wednesday": [ 13, 18, 20, 3 ],
            "thursday": [ 14, 18, 20, 24 ],
            "saturday": [ 16, 20, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=818947843/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://odweeyne.bandcamp.com/album/kicks-in-the-crates-vol-1-1990-1991-supa-phat-side',
          a_string: 'Kicks in the Crates Vol.1 - 1990/1991 - SUPA &amp; PHAT Side by Odweeyne of So Cracked Lab',
          rule: {
            "monday": [ 16, 20, 22, 26 ],
            "tuesday": [ 18, 22, 24, 26 ],
            "wednesday": [ 1, 24, 26, 3 ],
            "thursday": [ 13, 18, 20, 3 ],
            "saturday": [ 14, 18, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1011432069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joemcphee.bandcamp.com/album/the-sugar-hill-suite',
          a_string: 'The Sugar Hill Suite by Trio X',
          rule: {
            "monday": [ 15, 19, 21, 25 ],
            "tuesday": [ 17, 21, 23, 27 ],
            "wednesday": [ 19, 23, 25, 27 ],
            "thursday": [ 2, 25, 27, 4 ],
            "saturday": [ 14, 19, 21, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2092770861/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marcuslewisband.bandcamp.com/album/facing-east',
          a_string: 'Facing East by Marcus Lewis',
          rule: {
            "monday": [ 14, 19, 21, 4 ],
            "tuesday": [ 15, 19, 21, 25 ],
            "wednesday": [ 17, 21, 23, 27 ],
            "thursday": [ 19, 23, 25, 27 ],
            "saturday": [ 2, 25, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1019294942/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joemcphee.bandcamp.com/album/angels-devils-and-haints',
          a_string: 'Angels, Devils and Haints by Joe McPhee',
          rule: {
            "monday": [ 2, 25, 27, 4 ],
            "tuesday": [ 14, 19, 21, 4 ],
            "wednesday": [ 15, 19, 21, 25 ],
            "thursday": [ 17, 21, 23, 27 ],
            "saturday": [ 19, 23, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1111516104/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jonbap.bandcamp.com/album/yesterdays-homily',
          a_string: 'Yesterday&#39;s Homily by Jon Bap',
          rule: {
            "monday": [ 19, 23, 25, 27 ],
            "tuesday": [ 2, 25, 27, 4 ],
            "wednesday": [ 14, 19, 21, 4 ],
            "thursday": [ 15, 19, 21, 25 ],
            "saturday": [ 17, 21, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=461963248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/hamad-kalkaba-and-the-golden-sounds-1974-1975',
          a_string: 'Hamad Kalkaba and The Golden Sounds 1974-1975 by Hamad Kalkaba',
          rule: {
            "monday": [ 17, 21, 23, 27 ],
            "tuesday": [ 19, 23, 25, 27 ],
            "wednesday": [ 2, 25, 27, 4 ],
            "thursday": [ 14, 19, 21, 4 ],
            "saturday": [ 15, 19, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1458926099/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/pop-makossa-the-invasive-dance-beat-of-cameroon-1976-1984',
          a_string: 'Pop Makossa - The Invasive Dance Beat of Cameroon 1976-1984 by Various',
          rule: {
            "monday": [ 15, 19, 21, 25 ],
            "tuesday": [ 17, 21, 23, 27 ],
            "wednesday": [ 19, 23, 25, 27 ],
            "thursday": [ 2, 25, 27, 4 ],
            "saturday": [ 14, 19, 21, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3250456230/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dubstorerecords.bandcamp.com/album/redman-international-digital-roots-dancehall-1985-to-1990-10-rare-singles-set',
          a_string: 'Redman International: Digital Roots Dancehall 1985 to 1990 - 10 Rare Singles Set by Dub Store Records',
          rule: {
            "monday": [ 14, 19, 21, 4 ],
            "tuesday": [ 15, 19, 21, 25 ],
            "wednesday": [ 17, 21, 23, 27 ],
            "thursday": [ 19, 23, 25, 27 ],
            "saturday": [ 2, 25, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=906862647/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pressuresounds.bandcamp.com/album/meet-the-people',
          a_string: 'Meet the People by Lloyd Parks &amp; We The People',
          rule: {
            "monday": [ 3, 26, 28, 5 ],
            "tuesday": [ 15, 20, 22, 5 ],
            "wednesday": [ 16, 20, 22, 26 ],
            "thursday": [ 18, 22, 24, 28 ],
            "saturday": [ 20, 24, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1674138456/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dubsyndicate.bandcamp.com/album/displaced-masters',
          a_string: 'Displaced Masters by Dub Syndicate',
          rule: {
            "monday": [ 20, 24, 26, 28 ],
            "tuesday": [ 3, 26, 28, 5 ],
            "wednesday": [ 15, 20, 22, 5 ],
            "thursday": [ 16, 20, 22, 26 ],
            "saturday": [ 18, 22, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1255239549/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://willsessions.bandcamp.com/album/kindred-live',
          a_string: 'Kindred Live by Will Sessions',
          rule: {
            "monday": [ 18, 22, 24, 28 ],
            "tuesday": [ 20, 24, 26, 28 ],
            "wednesday": [ 3, 26, 28, 5 ],
            "thursday": [ 15, 20, 22, 5 ],
            "saturday": [ 16, 20, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1860158521/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://willsessions.bandcamp.com/album/deluxe',
          a_string: 'Deluxe by Will Sessions',
          rule: {
            "monday": [ 16, 20, 22, 26 ],
            "tuesday": [ 18, 22, 24, 28 ],
            "wednesday": [ 20, 24, 26, 28 ],
            "thursday": [ 3, 26, 28, 5 ],
            "saturday": [ 15, 20, 22, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3266419411/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kimtibbs.bandcamp.com/album/kim',
          a_string: 'KIM by Kim Tibbs',
          rule: {
            "monday": [ 15, 20, 22, 5 ],
            "tuesday": [ 16, 20, 22, 26 ],
            "wednesday": [ 18, 22, 24, 28 ],
            "thursday": [ 20, 24, 26, 28 ],
            "saturday": [ 3, 26, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=191922726/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africanheadcharge.bandcamp.com/album/my-life-in-a-hole-in-the-ground',
          a_string: 'My Life In A Hole In The Ground by African Head Charge',
          rule: {
            "monday": [ 3, 26, 28, 5 ],
            "tuesday": [ 15, 20, 22, 5 ],
            "wednesday": [ 16, 20, 22, 26 ],
            "thursday": [ 18, 22, 24, 28 ],
            "saturday": [ 20, 24, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2283578983/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africanheadcharge.bandcamp.com/album/drastic-season',
          a_string: 'Drastic Season by African Head Charge',
          rule: {
            "monday": [ 20, 24, 26, 28 ],
            "tuesday": [ 3, 26, 28, 5 ],
            "wednesday": [ 15, 20, 22, 5 ],
            "thursday": [ 16, 20, 22, 26 ],
            "saturday": [ 18, 22, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=546702643/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africanheadcharge.bandcamp.com/album/off-the-beaten-track',
          a_string: 'Off The Beaten Track by African Head Charge',
          rule: {
            "monday": [ 19, 23, 25, 29 ],
            "tuesday": [ 21, 25, 27, 29 ],
            "wednesday": [ 4, 27, 29, 6 ],
            "thursday": [ 16, 21, 23, 6 ],
            "saturday": [ 17, 21, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=241539319/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://woodworkcollective.bandcamp.com/album/iyapo',
          a_string: 'IYAPO by WOOD // WORK',
          rule: {
            "monday": [ 17, 21, 23, 27 ],
            "tuesday": [ 19, 23, 25, 29 ],
            "wednesday": [ 21, 25, 27, 29 ],
            "thursday": [ 4, 27, 29, 6 ],
            "saturday": [ 16, 21, 23, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3597881602/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://matsulimusic.bandcamp.com/album/african-songbird',
          a_string: 'African Songbird by Sathima Bea Benjamin',
          rule: {
            "monday": [ 16, 21, 23, 6 ],
            "tuesday": [ 17, 21, 23, 27 ],
            "wednesday": [ 19, 23, 25, 29 ],
            "thursday": [ 21, 25, 27, 29 ],
            "saturday": [ 4, 27, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=533968175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://matsulimusic.bandcamp.com/album/witchdoctors-son',
          a_string: 'Witchdoctor&#39;s Son by Okay Temiz / Johnny Dyani',
          rule: {
            "monday": [ 4, 27, 29, 6 ],
            "tuesday": [ 16, 21, 23, 6 ],
            "wednesday": [ 17, 21, 23, 27 ],
            "thursday": [ 19, 23, 25, 29 ],
            "saturday": [ 21, 25, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4289860543/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lesfillesdeillighadad.bandcamp.com/album/eghass-malan',
          a_string: 'Eghass Malan by Les Filles de Illighadad',
          rule: {
            "monday": [ 21, 25, 27, 29 ],
            "tuesday": [ 4, 27, 29, 6 ],
            "wednesday": [ 16, 21, 23, 6 ],
            "thursday": [ 17, 21, 23, 27 ],
            "saturday": [ 19, 23, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2223328995/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fadimoutouwalletinamoud.bandcamp.com/album/isswat',
          a_string: 'Isswat by Fadimoutou Wallet Inamoud',
          rule: {
            "monday": [ 19, 23, 25, 29 ],
            "tuesday": [ 21, 25, 27, 29 ],
            "wednesday": [ 4, 27, 29, 6 ],
            "thursday": [ 16, 21, 23, 6 ],
            "saturday": [ 17, 21, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=639873524/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mammansani.bandcamp.com/album/la-musique-electronique-du-niger',
          a_string: 'La Musique Electronique du Niger by Mamman Sani',
          rule: {
            "monday": [ 17, 21, 23, 27 ],
            "tuesday": [ 19, 23, 25, 29 ],
            "wednesday": [ 21, 25, 27, 29 ],
            "thursday": [ 4, 27, 29, 6 ],
            "saturday": [ 16, 21, 23, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1729573479/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://conditionwestrecordings.bandcamp.com/album/sam-rivers-quartet-live-in-vancouver',
          a_string: 'Sam Rivers Quartet Live in Vancouver by Sam Rivers Quartet',
          rule: {
            "monday": [ 17, 22, 24, 7 ],
            "tuesday": [ 18, 22, 24, 28 ],
            "wednesday": [ 20, 24, 26, 1 ],
            "thursday": [ 22, 26, 28, 1 ],
            "saturday": [ 5, 28, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1742132074/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://noahhowardaltsax.bandcamp.com/album/patterns-message-to-south-africa',
          a_string: 'Patterns - Message to South Africa by Noah Howard',
          rule: {
            "monday": [ 5, 28, 1, 7 ],
            "tuesday": [ 17, 22, 24, 7 ],
            "wednesday": [ 18, 22, 24, 28 ],
            "thursday": [ 20, 24, 26, 1 ],
            "saturday": [ 22, 26, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3673199928/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://littlesimz.bandcamp.com/album/stillness-in-wonderland-deluxe-edition',
          a_string: 'Stillness In Wonderland (Deluxe Edition) by Little Simz',
          rule: {
            "monday": [ 22, 26, 28, 1 ],
            "tuesday": [ 5, 28, 1, 7 ],
            "wednesday": [ 17, 22, 24, 7 ],
            "thursday": [ 18, 22, 24, 28 ],
            "saturday": [ 20, 24, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2973853362/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://freshselects.bandcamp.com/album/cleo',
          a_string: 'Cleo by Charlotte Dos Santos',
          rule: {
            "monday": [ 20, 24, 26, 1 ],
            "tuesday": [ 22, 26, 28, 1 ],
            "wednesday": [ 5, 28, 1, 7 ],
            "thursday": [ 17, 22, 24, 7 ],
            "saturday": [ 18, 22, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2232967069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mybags.bandcamp.com/album/les-sourdes-oreilles',
          a_string: 'Les Sourdes Oreilles by Cosmic Analog Ensemble',
          rule: {
            "monday": [ 18, 22, 24, 28 ],
            "tuesday": [ 20, 24, 26, 1 ],
            "wednesday": [ 22, 26, 28, 1 ],
            "thursday": [ 5, 28, 1, 7 ],
            "saturday": [ 17, 22, 24, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2288351853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://burntsugar.bandcamp.com/album/mizik-pou-dwa-moun-a-burnt-sugar-collective-compilation-for-the-people-of-ayiti-disc-1',
          a_string: 'Mizik Pou Dwa Moun: A Burnt Sugar Collective Compilation for the People of Ayiti. Disc 1 by The Burnt Sugar Collective',
          rule: {
            "monday": [ 17, 22, 24, 7 ],
            "tuesday": [ 18, 22, 24, 28 ],
            "wednesday": [ 20, 24, 26, 1 ],
            "thursday": [ 22, 26, 28, 1 ],
            "saturday": [ 5, 28, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3084023840/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'https://bandcamp.com/EmbeddedPlayer/album=3084023840/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          a_string: 'Death To The Planet by The Comet Is Coming',
          rule: {
            "monday": [ 5, 28, 1, 7 ],
            "tuesday": [ 17, 22, 24, 7 ],
            "wednesday": [ 18, 22, 24, 28 ],
            "thursday": [ 20, 24, 26, 1 ],
            "saturday": [ 22, 26, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1737997555/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chinoamobi.bandcamp.com/album/paradiso',
          a_string: 'PARADISO by Chino Amobi',
          rule: {
            "monday": [ 23, 27, 29, 2 ],
            "tuesday": [ 6, 29, 2, 8 ],
            "wednesday": [ 18, 23, 25, 8 ],
            "thursday": [ 19, 23, 25, 29 ],
            "saturday": [ 22, 25, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=964522209/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fatherdaughterrecords.bandcamp.com/album/drool',
          a_string: 'DROOL by Nnamdi Ogbonnaya',
          rule: {
            "monday": [ 22, 25, 27, 2 ],
            "tuesday": [ 23, 27, 29, 2 ],
            "wednesday": [ 6, 29, 2, 8 ],
            "thursday": [ 18, 23, 25, 8 ],
            "saturday": [ 19, 23, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=860883616/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mikelikesrap.bandcamp.com/album/may-god-bless-your-hustle',
          a_string: 'MAY GOD BLESS YOUR HUSTLE by MIKE',
          rule: {
            "monday": [ 19, 23, 25, 29 ],
            "tuesday": [ 22, 25, 27, 2 ],
            "wednesday": [ 23, 27, 29, 2 ],
            "thursday": [ 6, 29, 2, 8 ],
            "saturday": [ 18, 23, 25, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=979604399/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alicecoltrane.bandcamp.com/album/world-sprituality-classics-1-the-ecstatic-music-of-alice-coltrane-turiyasangitananda',
          a_string: 'World Sprituality Classics 1: The Ecstatic Music of Alice Coltrane Turiyasangitananda by Alice Coltrane',
          rule: {
            "monday": [ 18, 23, 25, 8 ],
            "tuesday": [ 19, 23, 25, 29 ],
            "wednesday": [ 22, 25, 27, 2 ],
            "thursday": [ 23, 27, 29, 2 ],
            "saturday": [ 6, 29, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2084150425/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dreamcrusher.bandcamp.com/album/antipop-2009',
          a_string: 'Antipop (2009) by dreamcrusher',
          rule: {
            "monday": [ 6, 29, 2, 8 ],
            "tuesday": [ 18, 23, 25, 8 ],
            "wednesday": [ 19, 23, 25, 29 ],
            "thursday": [ 22, 25, 27, 2 ],
            "saturday": [ 23, 27, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2817867693/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ostinatorecords.bandcamp.com/album/synthesize-the-soul-astro-atlantic-hypnotica-from-the-cape-verde-islands-1973-1988',
          a_string: 'Synthesize the Soul: Astro-Atlantic Hypnotica from the Cape Verde Islands 1973-1988 by Various Artists',
          rule: {
            "monday": [ 23, 27, 29, 2 ],
            "tuesday": [ 6, 29, 2, 8 ],
            "wednesday": [ 18, 23, 25, 8 ],
            "thursday": [ 19, 23, 25, 29 ],
            "saturday": [ 22, 25, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1123281549/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/legend-of-funana-the-forbidden-music-of-the-cape-verde-islands',
          a_string: 'Legend Of Funaná (The Forbidden Music of The Cape Verde Islands) by Bitori',
          rule: {
            "monday": [ 22, 25, 27, 2 ],
            "tuesday": [ 23, 27, 29, 2 ],
            "wednesday": [ 6, 29, 2, 8 ],
            "thursday": [ 18, 23, 25, 8 ],
            "saturday": [ 19, 23, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2830434610/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://therealpierrekwenders.bandcamp.com/album/makanda-at-the-end-of-space-the-beginning-of-time',
          a_string: 'MAKANDA at the End of Space, the Beginning of Time by Pierre Kwenders',
          rule: {
            "monday": [ 20, 24, 26, 1 ],
            "tuesday": [ 23, 26, 28, 3 ],
            "wednesday": [ 24, 28, 1, 3 ],
            "thursday": [ 7, 1, 3, 9 ],
            "saturday": [ 19, 24, 26, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=320406411/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://armandhammer.bandcamp.com/album/rome',
          a_string: 'ROME by Armand Hammer',
          rule: {
            "monday": [ 19, 24, 26, 9 ],
            "tuesday": [ 20, 24, 26, 1 ],
            "wednesday": [ 23, 26, 28, 3 ],
            "thursday": [ 24, 28, 1, 3 ],
            "saturday": [ 7, 1, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=807309436/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fattonyrap.bandcamp.com/album/macgregor-park',
          a_string: 'MacGregor Park by Fat Tony',
          rule: {
            "monday": [ 7, 1, 3, 9 ],
            "tuesday": [ 19, 24, 26, 9 ],
            "wednesday": [ 20, 24, 26, 1 ],
            "thursday": [ 23, 26, 28, 3 ],
            "saturday": [ 24, 28, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1427812870/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://homeboysandman.bandcamp.com/album/veins',
          a_string: 'Veins by Homeboy Sandman',
          rule: {
            "monday": [ 24, 28, 1, 3 ],
            "tuesday": [ 7, 1, 3, 9 ],
            "wednesday": [ 19, 24, 26, 9 ],
            "thursday": [ 20, 24, 26, 1 ],
            "saturday": [ 23, 26, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2008117058/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://donbryant.bandcamp.com/album/dont-give-up-on-love',
          a_string: 'Don&#39;t Give Up On Love by Don Bryant',
          rule: {
            "monday": [ 23, 26, 28, 3 ],
            "tuesday": [ 24, 28, 1, 3 ],
            "wednesday": [ 7, 1, 3, 9 ],
            "thursday": [ 19, 24, 26, 9 ],
            "saturday": [ 20, 24, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=317272902/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jackieshane.bandcamp.com/album/jackie-shane-any-other-way',
          a_string: 'Jackie Shane: Any Other Way by Jackie Shane',
          rule: {
            "monday": [ 20, 24, 26, 1 ],
            "tuesday": [ 23, 26, 28, 3 ],
            "wednesday": [ 24, 28, 1, 3 ],
            "thursday": [ 7, 1, 3, 9 ],
            "saturday": [ 19, 24, 26, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1804568301/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://daptonerecords.bandcamp.com/album/if-this-world-were-mine',
          a_string: 'If This World Were Mine... by Daptone Records',
          rule: {
            "monday": [ 19, 24, 26, 9 ],
            "tuesday": [ 20, 24, 26, 1 ],
            "wednesday": [ 23, 26, 28, 3 ],
            "thursday": [ 24, 28, 1, 3 ],
            "saturday": [ 7, 1, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3739022193/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ampfiddler.bandcamp.com/album/amp-dog-knights-m-m-41',
          a_string: 'AMP DOG KNIGHTS | M.M-41 by Amp Fiddler',
          rule: {
            "monday": [ 8, 2, 4, 10 ],
            "tuesday": [ 20, 25, 27, 10 ],
            "wednesday": [ 21, 25, 27, 2 ],
            "thursday": [ 24, 27, 29, 4 ],
            "saturday": [ 25, 29, 2, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4272282715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://steeltippeddove.bandcamp.com/album/to-name-it',
          a_string: 'to name it by Steel Tipped Dove',
          rule: {
            "monday": [ 25, 29, 2, 4 ],
            "tuesday": [ 8, 2, 4, 10 ],
            "wednesday": [ 20, 25, 27, 10 ],
            "thursday": [ 21, 25, 27, 2 ],
            "saturday": [ 24, 27, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2988248604/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quellechris360.bandcamp.com/album/being-you-is-great-i-wish-i-could-be-you-more-often',
          a_string: 'Being You Is Great, I Wish I Could Be You More Often by Quelle Chris',
          rule: {
            "monday": [ 24, 27, 29, 4 ],
            "tuesday": [ 25, 29, 2, 4 ],
            "wednesday": [ 8, 2, 4, 10 ],
            "thursday": [ 20, 25, 27, 10 ],
            "saturday": [ 21, 25, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=738432067/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fuckupayus.bandcamp.com/album/fuck-u-pay-us-live-at-cielo-gallery-for-casa-solidaria-del-surs-melanin-unity-show',
          a_string: 'Fuck U Pay Us Live at Cielo Gallery for Casa Solidaria del Sur&#39;s Melanin Unity Show by Fuck U Pay Us',
          rule: {
            "monday": [ 21, 25, 27, 2 ],
            "tuesday": [ 24, 27, 29, 4 ],
            "wednesday": [ 25, 29, 2, 4 ],
            "thursday": [ 8, 2, 4, 10 ],
            "saturday": [ 20, 25, 27, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2997763874/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://awapoulo.bandcamp.com/album/poulo-warali',
          a_string: 'Poulo Warali by Awa Poulo',
          rule: {
            "monday": [ 20, 25, 27, 10 ],
            "tuesday": [ 21, 25, 27, 2 ],
            "wednesday": [ 24, 27, 29, 4 ],
            "thursday": [ 25, 29, 2, 4 ],
            "saturday": [ 8, 2, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3276720701/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skkakraba.bandcamp.com/album/songs-of-paapieye',
          a_string: 'Songs of Paapieye by SK Kakraba',
          rule: {
            "monday": [ 8, 2, 4, 10 ],
            "tuesday": [ 20, 25, 27, 10 ],
            "wednesday": [ 21, 25, 27, 2 ],
            "thursday": [ 24, 27, 29, 4 ],
            "saturday": [ 25, 29, 2, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=832740114/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://homeboysandman.bandcamp.com/album/kindness-for-weakness',
          a_string: 'Kindness for Weakness by Homeboy Sandman',
          rule: {
            "monday": [ 25, 29, 2, 4 ],
            "tuesday": [ 8, 2, 4, 10 ],
            "wednesday": [ 20, 25, 27, 10 ],
            "thursday": [ 21, 25, 27, 2 ],
            "saturday": [ 24, 27, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1329261667/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quellechris360.bandcamp.com/album/lullabies-for-the-broken-brain',
          a_string: 'Lullabies for the Broken Brain by Quelle Chris',
          rule: {
            "monday": [ 25, 28, 1, 5 ],
            "tuesday": [ 26, 1, 3, 5 ],
            "wednesday": [ 9, 3, 5, 11 ],
            "thursday": [ 21, 26, 28, 11 ],
            "saturday": [ 22, 26, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3347424820/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://billywoods.bandcamp.com/album/known-unknowns',
          a_string: 'Known Unknowns by billy woods',
          rule: {
            "monday": [ 22, 26, 28, 3 ],
            "tuesday": [ 25, 28, 1, 5 ],
            "wednesday": [ 26, 1, 3, 5 ],
            "thursday": [ 9, 3, 5, 11 ],
            "saturday": [ 21, 26, 28, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3061013425/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/best-woman-limited-edition',
          a_string: 'Best Woman (Limited Edition) by Vincent Ahehehinnou',
          rule: {
            "monday": [ 21, 26, 28, 11 ],
            "tuesday": [ 22, 26, 28, 3 ],
            "wednesday": [ 25, 28, 1, 5 ],
            "thursday": [ 26, 1, 3, 5 ],
            "saturday": [ 9, 3, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2094661225/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://22amusic.bandcamp.com/album/mo-kolours-axum-ep',
          a_string: 'Mo Kolours - Axum EP by Mo Kolours',
          rule: {
            "monday": [ 9, 3, 5, 11 ],
            "tuesday": [ 21, 26, 28, 11 ],
            "wednesday": [ 22, 26, 28, 3 ],
            "thursday": [ 25, 28, 1, 5 ],
            "saturday": [ 26, 1, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1545317416/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chinoamobi.bandcamp.com/album/anyas-garden',
          a_string: 'Anya&#39;s Garden by Chino Amobi',
          rule: {
            "monday": [ 26, 1, 3, 5 ],
            "tuesday": [ 9, 3, 5, 11 ],
            "wednesday": [ 21, 26, 28, 11 ],
            "thursday": [ 22, 26, 28, 3 ],
            "saturday": [ 25, 28, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=822939299/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pete-rock.bandcamp.com/album/lost-sessions',
          a_string: 'Lost Sessions by Pete Rock',
          rule: {
            "monday": [ 25, 28, 1, 5 ],
            "tuesday": [ 26, 1, 3, 5 ],
            "wednesday": [ 9, 3, 5, 11 ],
            "thursday": [ 21, 26, 28, 11 ],
            "saturday": [ 22, 26, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=941152654/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://safarial.bandcamp.com/album/little-man-youve-had-a-busy-day',
          a_string: 'Little Man, You&#39;ve Had a Busy Day by s.al',
          rule: {
            "monday": [ 22, 26, 28, 3 ],
            "tuesday": [ 25, 28, 1, 5 ],
            "wednesday": [ 26, 1, 3, 5 ],
            "thursday": [ 9, 3, 5, 11 ],
            "saturday": [ 21, 26, 28, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2673778277/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tironandayomari.bandcamp.com/album/wet-the-wonderful-ego-trip',
          a_string: 'WET: The Wonderful Ego Trip by TiRon &amp; Ayomari',
          rule: {
            "monday": [ 22, 27, 29, 12 ],
            "tuesday": [ 23, 27, 29, 4 ],
            "wednesday": [ 26, 29, 2, 6 ],
            "thursday": [ 27, 2, 4, 6 ],
            "saturday": [ 10, 4, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1003274087/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://horez.bandcamp.com/album/0-emissions-5',
          a_string: '0 EMISSIONS 5 by zeroh',
          rule: {
            "monday": [ 10, 4, 6, 12 ],
            "tuesday": [ 22, 27, 29, 12 ],
            "wednesday": [ 23, 27, 29, 4 ],
            "thursday": [ 26, 29, 2, 6 ],
            "saturday": [ 27, 2, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=244821325/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.thisisversis.com/album/cope-sthetic',
          a_string: 'copeæsthetic by Versis',
          rule: {
            "monday": [ 27, 2, 4, 6 ],
            "tuesday": [ 10, 4, 6, 12 ],
            "wednesday": [ 22, 27, 29, 12 ],
            "thursday": [ 23, 27, 29, 4 ],
            "saturday": [ 26, 29, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4184396297/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fakefour.bandcamp.com/album/dennehy-w-beautyman-ep',
          a_string: 'Dennehy (w/ Beautyman EP) by Serengeti',
          rule: {
            "monday": [ 26, 29, 2, 6 ],
            "tuesday": [ 27, 2, 4, 6 ],
            "wednesday": [ 10, 4, 6, 12 ],
            "thursday": [ 22, 27, 29, 12 ],
            "saturday": [ 23, 27, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=375699269/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://albertayler.bandcamp.com/album/spiritual-unity-and-new-spiritual-unity-50th-anniversary-expanded-edition',
          a_string: 'Spiritual Unity AND NEW Spiritual Unity 50th Anniversary Expanded Edition by Albert Ayler',
          rule: {
            "monday": [ 23, 27, 29, 4 ],
            "tuesday": [ 26, 29, 2, 6 ],
            "wednesday": [ 27, 2, 4, 6 ],
            "thursday": [ 10, 4, 6, 12 ],
            "saturday": [ 22, 27, 29, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3527524853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trostrecords.bandcamp.com/album/baby-talk',
          a_string: 'Baby Talk by James Blood Ulmer &amp; The Thing',
          rule: {
            "monday": [ 22, 27, 29, 12 ],
            "tuesday": [ 23, 27, 29, 4 ],
            "wednesday": [ 26, 29, 2, 6 ],
            "thursday": [ 27, 2, 4, 6 ],
            "saturday": [ 10, 4, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2101907054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jisarecords.bandcamp.com/album/black-heroes',
          a_string: 'Black Heroes by Tete Mbambisa',
          rule: {
            "monday": [ 10, 4, 6, 12 ],
            "tuesday": [ 22, 27, 29, 12 ],
            "wednesday": [ 23, 27, 29, 4 ],
            "thursday": [ 26, 29, 2, 6 ],
            "saturday": [ 27, 2, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2020537830/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://crypticone.bandcamp.com/album/the-anti-mobius-strip-theory',
          a_string: 'The Anti-Mobius Strip Theory by Cryptic One',
          rule: {
            "monday": [ 28, 3, 5, 7 ],
            "tuesday": [ 11, 5, 7, 13 ],
            "wednesday": [ 23, 28, 1, 13 ],
            "thursday": [ 24, 28, 1, 5 ],
            "saturday": [ 27, 1, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=837213719/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dynamicsplus.bandcamp.com/album/rock-it-science-rocket-science-remix-album',
          a_string: 'Rock It Science (Rocket Science Remix Album) by Dynamics Plus',
          rule: {
            "monday": [ 27, 1, 3, 7 ],
            "tuesday": [ 28, 3, 5, 7 ],
            "wednesday": [ 11, 5, 7, 13 ],
            "thursday": [ 23, 28, 1, 13 ],
            "saturday": [ 24, 28, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=559264456/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://centaofdaweb.bandcamp.com/album/beyond-human-comprehension-ep',
          a_string: 'Beyond Human Comprehension EP by Centa of da Web',
          rule: {
            "monday": [ 24, 28, 1, 5 ],
            "tuesday": [ 27, 1, 3, 7 ],
            "wednesday": [ 28, 3, 5, 7 ],
            "thursday": [ 11, 5, 7, 13 ],
            "saturday": [ 23, 28, 1, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2784148788/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://basabasa.bandcamp.com/album/homowo',
          a_string: 'Homowo by Basa Basa',
          rule: {
            "monday": [ 23, 28, 1, 13 ],
            "tuesday": [ 24, 28, 1, 5 ],
            "wednesday": [ 27, 1, 3, 7 ],
            "thursday": [ 28, 3, 5, 7 ],
            "saturday": [ 11, 5, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=4098962869/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://suggsavage.bandcamp.com/track/party-dawg',
          a_string: 'Party Dawg by Sugg Savage',
          rule: {
            "monday": [ 11, 5, 7, 13 ],
            "tuesday": [ 23, 28, 1, 13 ],
            "wednesday": [ 24, 28, 1, 5 ],
            "thursday": [ 27, 1, 3, 7 ],
            "saturday": [ 28, 3, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1494648376/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://akoko.bandcamp.com/album/cataraps-3',
          a_string: 'CATARAPS by AKOKO',
          rule: {
            "monday": [ 28, 3, 5, 7 ],
            "tuesday": [ 11, 5, 7, 13 ],
            "wednesday": [ 23, 28, 1, 13 ],
            "thursday": [ 24, 28, 1, 5 ],
            "saturday": [ 27, 1, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1359469648/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jazzmanholygrailseries.bandcamp.com/album/two-sisters-from-bagdad',
          a_string: 'Two Sisters From Bagdad by La Vice &amp; Co.',
          rule: {
            "monday": [ 27, 1, 3, 7 ],
            "tuesday": [ 28, 3, 5, 7 ],
            "wednesday": [ 11, 5, 7, 13 ],
            "thursday": [ 23, 28, 1, 13 ],
            "saturday": [ 24, 28, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3684256625/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://miriammakeba.bandcamp.com/album/pata-pata',
          a_string: 'Pata Pata by Miriam Makeba',
          rule: {
            "monday": [ 25, 29, 2, 6 ],
            "tuesday": [ 28, 2, 4, 8 ],
            "wednesday": [ 29, 4, 6, 8 ],
            "thursday": [ 12, 6, 8, 14 ],
            "saturday": [ 24, 29, 2, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=895746506/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bandcamp.for-tune.pl/album/solar-system',
          a_string: 'Solar System by Charles Gayle Trio',
          rule: {
            "monday": [ 24, 29, 2, 14 ],
            "tuesday": [ 25, 29, 2, 6 ],
            "wednesday": [ 28, 2, 4, 8 ],
            "thursday": [ 29, 4, 6, 8 ],
            "saturday": [ 12, 6, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1049165896/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blackmilk.bandcamp.com/album/fever',
          a_string: 'FEVER by Black Milk',
          rule: {
            "monday": [ 12, 6, 8, 14 ],
            "tuesday": [ 24, 29, 2, 14 ],
            "wednesday": [ 25, 29, 2, 6 ],
            "thursday": [ 28, 2, 4, 8 ],
            "saturday": [ 29, 4, 6, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3673150408/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://daupe.bandcamp.com/album/spencer-for-higher',
          a_string: 'Spencer For Higher by Vic Spencer &amp; SonnyJim',
          rule: {
            "monday": [ 29, 4, 6, 8 ],
            "tuesday": [ 12, 6, 8, 14 ],
            "wednesday": [ 24, 29, 2, 14 ],
            "thursday": [ 25, 29, 2, 6 ],
            "saturday": [ 28, 2, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3387590721/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rnglofi.bandcamp.com/album/heavy-coats',
          a_string: 'HEAVY COATS by k N O E s',
          rule: {
            "monday": [ 28, 2, 4, 8 ],
            "tuesday": [ 29, 4, 6, 8 ],
            "wednesday": [ 12, 6, 8, 14 ],
            "thursday": [ 24, 29, 2, 14 ],
            "saturday": [ 25, 29, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3500443540/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newbraxtonhouse.bandcamp.com/album/sextet-parker-1993',
          a_string: 'Sextet (Parker) 1993 by Anthony Braxton',
          rule: {
            "monday": [ 25, 29, 2, 6 ],
            "tuesday": [ 28, 2, 4, 8 ],
            "wednesday": [ 29, 4, 6, 8 ],
            "thursday": [ 12, 6, 8, 14 ],
            "saturday": [ 24, 29, 2, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2393296536/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newbraxtonhouse.bandcamp.com/album/trillium-j',
          a_string: 'Trillium J by Anthony Braxton',
          rule: {
            "monday": [ 24, 29, 2, 14 ],
            "tuesday": [ 25, 29, 2, 6 ],
            "wednesday": [ 28, 2, 4, 8 ],
            "thursday": [ 29, 4, 6, 8 ],
            "saturday": [ 12, 6, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=568811227/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newbraxtonhouse.bandcamp.com/album/quintet-tristano-2014',
          a_string: 'Quintet (Tristano) 2014 by Anthony Braxton',
          rule: {
            "monday": [ 13, 7, 9, 15 ],
            "tuesday": [ 25, 1, 3, 15 ],
            "wednesday": [ 26, 1, 3, 7 ],
            "thursday": [ 29, 3, 5, 9 ],
            "saturday": [ 1, 5, 7, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1922525339/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunnywar.bandcamp.com/album/with-the-sun-2',
          a_string: 'With The Sun by Sunny War',
          rule: {
            "monday": [ 1, 5, 7, 9 ],
            "tuesday": [ 13, 7, 9, 15 ],
            "wednesday": [ 25, 1, 3, 15 ],
            "thursday": [ 26, 1, 3, 7 ],
            "saturday": [ 29, 3, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3348942646/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://solpatches.bandcamp.com/album/garden-city',
          a_string: 'Garden City by Sol Patches',
          rule: {
            "monday": [ 29, 3, 5, 9 ],
            "tuesday": [ 1, 5, 7, 9 ],
            "wednesday": [ 13, 7, 9, 15 ],
            "thursday": [ 25, 1, 3, 15 ],
            "saturday": [ 26, 1, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4195136961/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://miloraps.bandcamp.com/album/sovereign-nose-of-y-our-arrogant-face',
          a_string: 'sovereign nose of (y)our arrogant face by scallops hotel',
          rule: {
            "monday": [ 26, 1, 3, 7 ],
            "tuesday": [ 29, 3, 5, 9 ],
            "wednesday": [ 1, 5, 7, 9 ],
            "thursday": [ 13, 7, 9, 15 ],
            "saturday": [ 25, 1, 3, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=553053425/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://genesiselijah.bandcamp.com/album/how-to-lose-fans-and-alienate-listeners',
          a_string: 'How To Lose Fans And Alienate Listeners by Genesis Elijah',
          rule: {
            "monday": [ 25, 1, 3, 15 ],
            "tuesday": [ 26, 1, 3, 7 ],
            "wednesday": [ 29, 3, 5, 9 ],
            "thursday": [ 1, 5, 7, 9 ],
            "saturday": [ 13, 7, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1368294888/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://belowsystem.bandcamp.com/album/two-puff-pass',
          a_string: 'Two Puff Pass by Chuuwee &amp; Trizz',
          rule: {
            "monday": [ 13, 7, 9, 15 ],
            "tuesday": [ 25, 1, 3, 15 ],
            "wednesday": [ 26, 1, 3, 7 ],
            "thursday": [ 29, 3, 5, 9 ],
            "saturday": [ 1, 5, 7, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=365667133/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://omarcredle.bandcamp.com/album/a-new-dawn-2nd-phase',
          a_string: 'A New Dawn: 2nd Phase by O.C.',
          rule: {
            "monday": [ 1, 5, 7, 9 ],
            "tuesday": [ 13, 7, 9, 15 ],
            "wednesday": [ 25, 1, 3, 15 ],
            "thursday": [ 26, 1, 3, 7 ],
            "saturday": [ 29, 3, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1604938215/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://iapetusrecords.bandcamp.com/album/yugen-blakrok-return-of-the-astro-goth',
          a_string: 'Yugen Blakrok - Return of the Astro-Goth by Yugen Blakrok',
          rule: {
            "monday": [ 1, 4, 6, 10 ],
            "tuesday": [ 2, 6, 8, 10 ],
            "wednesday": [ 14, 8, 10, 16 ],
            "thursday": [ 26, 2, 4, 16 ],
            "saturday": [ 27, 2, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=662830265/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://iapetusrecords.bandcamp.com/album/rndu-scrolls-of-knowing-instrumentals',
          a_string: 'Rndu - Scrolls of Knowing - Instrumentals by Kanif the Jhatmaster',
          rule: {
            "monday": [ 27, 2, 4, 8 ],
            "tuesday": [ 1, 4, 6, 10 ],
            "wednesday": [ 2, 6, 8, 10 ],
            "thursday": [ 14, 8, 10, 16 ],
            "saturday": [ 26, 2, 4, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1689699608/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://iapetusrecords.bandcamp.com/album/rndu-scroll-of-knowing',
          a_string: 'Rndu - Scroll of Knowing by Rndu',
          rule: {
            "monday": [ 26, 2, 4, 16 ],
            "tuesday": [ 27, 2, 4, 8 ],
            "wednesday": [ 1, 4, 6, 10 ],
            "thursday": [ 2, 6, 8, 10 ],
            "saturday": [ 14, 8, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3829814826/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djtaye.bandcamp.com/album/still-trippin',
          a_string: 'Still Trippin&#39; by DJ Taye',
          rule: {
            "monday": [ 14, 8, 10, 16 ],
            "tuesday": [ 26, 2, 4, 16 ],
            "wednesday": [ 27, 2, 4, 8 ],
            "thursday": [ 1, 4, 6, 10 ],
            "saturday": [ 2, 6, 8, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=832815232/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anthonyjosephofficial.bandcamp.com/album/caribbean-roots',
          a_string: 'Caribbean Roots by Anthony Joseph',
          rule: {
            "monday": [ 2, 6, 8, 10 ],
            "tuesday": [ 14, 8, 10, 16 ],
            "wednesday": [ 26, 2, 4, 16 ],
            "thursday": [ 27, 2, 4, 8 ],
            "saturday": [ 1, 4, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3258303943/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blundettoofficial.bandcamp.com/album/world-of-2',
          a_string: 'WORLD OF by BLUNDETTO (Official)',
          rule: {
            "monday": [ 1, 4, 6, 10 ],
            "tuesday": [ 2, 6, 8, 10 ],
            "wednesday": [ 14, 8, 10, 16 ],
            "thursday": [ 26, 2, 4, 16 ],
            "saturday": [ 27, 2, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=660749450/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nounouhau.bandcamp.com/album/pandora',
          a_string: 'Pandora by G.E.M',
          rule: {
            "monday": [ 27, 2, 4, 8 ],
            "tuesday": [ 1, 4, 6, 10 ],
            "wednesday": [ 2, 6, 8, 10 ],
            "thursday": [ 14, 8, 10, 16 ],
            "saturday": [ 26, 2, 4, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2782081461/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://daupe.bandcamp.com/album/hitler-wears-hermes-5',
          a_string: 'Hitler Wears Hermes 5 by Westside Gunn',
          rule: {
            "monday": [ 27, 3, 4, 17 ],
            "tuesday": [ 28, 3, 5, 9 ],
            "wednesday": [ 2, 5, 7, 11 ],
            "thursday": [ 3, 7, 9, 11 ],
            "saturday": [ 15, 9, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=127420755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rnglofi.bandcamp.com/album/vol-vox',
          a_string: 'VOL.VOX by No-fvce x k N O E s',
          rule: {
            "monday": [ 15, 9, 11, 17 ],
            "tuesday": [ 27, 3, 4, 17 ],
            "wednesday": [ 28, 3, 5, 9 ],
            "thursday": [ 2, 5, 7, 11 ],
            "saturday": [ 3, 7, 9, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4128050939/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cavaliervmc.bandcamp.com/album/private-stock',
          a_string: 'Private Stock by Cavalier',
          rule: {
            "monday": [ 3, 7, 9, 11 ],
            "tuesday": [ 15, 9, 11, 17 ],
            "wednesday": [ 27, 3, 4, 17 ],
            "thursday": [ 28, 3, 5, 9 ],
            "saturday": [ 2, 5, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=629175254/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cavaliervmc.bandcamp.com/album/lemonade-ep',
          a_string: 'Lemonade EP by Cavalier',
          rule: {
            "monday": [ 2, 5, 7, 11 ],
            "tuesday": [ 3, 7, 9, 11 ],
            "wednesday": [ 15, 9, 11, 17 ],
            "thursday": [ 27, 3, 4, 17 ],
            "saturday": [ 28, 3, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=239721285/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://childrenofzeus.bandcamp.com/album/the-story-so-far',
          a_string: 'The Story So Far... by Children Of Zeus',
          rule: {
            "monday": [ 28, 3, 5, 9 ],
            "tuesday": [ 2, 5, 7, 11 ],
            "wednesday": [ 3, 7, 9, 11 ],
            "thursday": [ 15, 9, 11, 17 ],
            "saturday": [ 27, 3, 4, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=118183462/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arsonistsnyc.bandcamp.com/album/lost-in-the-fire',
          a_string: 'Lost In The Fire by Arsonists',
          rule: {
            "monday": [ 27, 3, 4, 17 ],
            "tuesday": [ 28, 3, 5, 9 ],
            "wednesday": [ 2, 5, 7, 11 ],
            "thursday": [ 3, 7, 9, 11 ],
            "saturday": [ 15, 9, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=122418823/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://themouseoutfit.bandcamp.com/album/step-steadier-2',
          a_string: 'Step Steadier by The Mouse Outfit',
          rule: {
            "monday": [ 15, 9, 11, 17 ],
            "tuesday": [ 27, 3, 4, 17 ],
            "wednesday": [ 28, 3, 5, 9 ],
            "thursday": [ 2, 5, 7, 11 ],
            "saturday": [ 3, 7, 9, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=700266926/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soulr.com/album/soul-r-066-drs-mid-mic-crisis-full-album',
          a_string: 'SOUL:R 066 - DRS - Mid Mic Crisis - FULL ALBUM by DRS',
          rule: {
            "monday": [ 4, 8, 10, 12 ],
            "tuesday": [ 16, 10, 12, 18 ],
            "wednesday": [ 28, 4, 5, 18 ],
            "thursday": [ 29, 4, 6, 10 ],
            "saturday": [ 3, 6, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2125756147/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mavisstaples.bandcamp.com/album/if-all-i-was-was-black',
          a_string: 'If All I Was Was Black by Mavis Staples',
          rule: {
            "monday": [ 3, 6, 8, 12 ],
            "tuesday": [ 4, 8, 10, 12 ],
            "wednesday": [ 16, 10, 12, 18 ],
            "thursday": [ 28, 4, 5, 18 ],
            "saturday": [ 29, 4, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1015323114/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mavisstaples.bandcamp.com/album/livin-on-a-high-note',
          a_string: 'Livin&#39; On A High Note by Mavis Staples',
          rule: {
            "monday": [ 29, 4, 6, 10 ],
            "tuesday": [ 3, 6, 8, 12 ],
            "wednesday": [ 4, 8, 10, 12 ],
            "thursday": [ 16, 10, 12, 18 ],
            "saturday": [ 28, 4, 5, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1078658689/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mavisstaples.bandcamp.com/album/your-good-fortune',
          a_string: 'Your Good Fortune by Mavis Staples',
          rule: {
            "monday": [ 28, 4, 5, 18 ],
            "tuesday": [ 29, 4, 6, 10 ],
            "wednesday": [ 3, 6, 8, 12 ],
            "thursday": [ 4, 8, 10, 12 ],
            "saturday": [ 16, 10, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1077671824/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mavisstaples.bandcamp.com/album/one-true-vine',
          a_string: 'One True Vine by Mavis Staples',
          rule: {
            "monday": [ 16, 10, 12, 18 ],
            "tuesday": [ 28, 4, 5, 18 ],
            "wednesday": [ 29, 4, 6, 10 ],
            "thursday": [ 3, 6, 8, 12 ],
            "saturday": [ 4, 8, 10, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=535295904/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mavisstaples.bandcamp.com/album/you-are-not-alone',
          a_string: 'You Are Not Alone by Mavis Staples',
          rule: {
            "monday": [ 4, 8, 10, 12 ],
            "tuesday": [ 16, 10, 12, 18 ],
            "wednesday": [ 28, 4, 5, 18 ],
            "thursday": [ 29, 4, 6, 10 ],
            "saturday": [ 3, 6, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=719780519/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mavisstaples.bandcamp.com/album/well-never-turn-back',
          a_string: 'We&#39;ll Never Turn Back by Mavis Staples',
          rule: {
            "monday": [ 3, 6, 8, 12 ],
            "tuesday": [ 4, 8, 10, 12 ],
            "wednesday": [ 16, 10, 12, 18 ],
            "thursday": [ 28, 4, 5, 18 ],
            "saturday": [ 29, 4, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2899847730/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://phonte.bandcamp.com/album/no-news-is-good-news',
          a_string: 'No News Is Good News by Phonte',
          rule: {
            "monday": [ 1, 5, 7, 11 ],
            "tuesday": [ 4, 7, 9, 13 ],
            "wednesday": [ 5, 9, 11, 13 ],
            "thursday": [ 17, 11, 13, 19 ],
            "saturday": [ 29, 5, 6, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1519299837/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://planetpremrock.bandcamp.com/album/poets-payday',
          a_string: 'Poet&#39;s Payday by PremRock &amp; Fresh Kils',
          rule: {
            "monday": [ 29, 5, 6, 19 ],
            "tuesday": [ 1, 5, 7, 11 ],
            "wednesday": [ 4, 7, 9, 13 ],
            "thursday": [ 5, 9, 11, 13 ],
            "saturday": [ 17, 11, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2691678539/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://naturesounds.bandcamp.com/album/consumers-park',
          a_string: 'Consumers Park by Chuck Strangers',
          rule: {
            "monday": [ 17, 11, 13, 19 ],
            "tuesday": [ 29, 5, 6, 19 ],
            "wednesday": [ 1, 5, 7, 11 ],
            "thursday": [ 4, 7, 9, 13 ],
            "saturday": [ 5, 9, 11, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1717407725/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bangyahead.bandcamp.com/album/loyalty',
          a_string: 'Loyalty by MED &amp; Guilty Simpson',
          rule: {
            "monday": [ 5, 9, 11, 13 ],
            "tuesday": [ 17, 11, 13, 19 ],
            "wednesday": [ 29, 5, 6, 19 ],
            "thursday": [ 1, 5, 7, 11 ],
            "saturday": [ 4, 7, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=471601909/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pounds.bandcamp.com/album/borgata',
          a_string: 'Borgata by POUNDS',
          rule: {
            "monday": [ 4, 7, 9, 13 ],
            "tuesday": [ 5, 9, 11, 13 ],
            "wednesday": [ 17, 11, 13, 19 ],
            "thursday": [ 29, 5, 6, 19 ],
            "saturday": [ 1, 5, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2733838001/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stahhr.bandcamp.com/album/respect-due-vol-1',
          a_string: 'RESPECT DUE VOL. 1 by staHHr',
          rule: {
            "monday": [ 1, 5, 7, 11 ],
            "tuesday": [ 4, 7, 9, 13 ],
            "wednesday": [ 5, 9, 11, 13 ],
            "thursday": [ 17, 11, 13, 19 ],
            "saturday": [ 29, 5, 6, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=856134361/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://awonandphoniks.com/album/the-actual-proof',
          a_string: 'The Actual Proof by Awon &amp; Phoniks',
          rule: {
            "monday": [ 29, 5, 6, 19 ],
            "tuesday": [ 1, 5, 7, 11 ],
            "wednesday": [ 4, 7, 9, 13 ],
            "thursday": [ 5, 9, 11, 13 ],
            "saturday": [ 17, 11, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3805724227/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gourmetdeluxxx.bandcamp.com/album/griselda-ghost',
          a_string: 'Griselda Ghost by GourmetDeluxxx',
          rule: {
            "monday": [ 18, 12, 14, 20 ],
            "tuesday": [ 1, 6, 7, 20 ],
            "wednesday": [ 2, 6, 8, 12 ],
            "thursday": [ 5, 8, 10, 14 ],
            "saturday": [ 6, 10, 12, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=61757149/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://divinestyler.bandcamp.com/album/word-power',
          a_string: 'Word Power by Divine Styler',
          rule: {
            "monday": [ 6, 10, 12, 14 ],
            "tuesday": [ 18, 12, 14, 20 ],
            "wednesday": [ 1, 6, 7, 20 ],
            "thursday": [ 2, 6, 8, 12 ],
            "saturday": [ 5, 8, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3150720355/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elaquent-urbnet.bandcamp.com/album/celebrate-life',
          a_string: 'Celebrate Life! by Elaquent',
          rule: {
            "monday": [ 5, 8, 10, 14 ],
            "tuesday": [ 6, 10, 12, 14 ],
            "wednesday": [ 18, 12, 14, 20 ],
            "thursday": [ 1, 6, 7, 20 ],
            "saturday": [ 2, 6, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1375737435/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rawkid.bandcamp.com/album/grum-vol-1',
          a_string: 'Grum vol.1 by Rawkid',
          rule: {
            "monday": [ 2, 6, 8, 12 ],
            "tuesday": [ 5, 8, 10, 14 ],
            "wednesday": [ 6, 10, 12, 14 ],
            "thursday": [ 18, 12, 14, 20 ],
            "saturday": [ 1, 6, 7, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2638191048/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://denmarkvessey.bandcamp.com/album/sun-go-nova',
          a_string: 'Sun Go Nova by Denmark Vessey',
          rule: {
            "monday": [ 1, 6, 7, 20 ],
            "tuesday": [ 2, 6, 8, 12 ],
            "wednesday": [ 5, 8, 10, 14 ],
            "thursday": [ 6, 10, 12, 14 ],
            "saturday": [ 18, 12, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3730575213/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bcuc.bandcamp.com/album/emakhosini',
          a_string: 'Emakhosini by BCUC',
          rule: {
            "monday": [ 18, 12, 14, 20 ],
            "tuesday": [ 1, 6, 7, 20 ],
            "wednesday": [ 2, 6, 8, 12 ],
            "thursday": [ 5, 8, 10, 14 ],
            "saturday": [ 6, 10, 12, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2955726202/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bcuc.bandcamp.com/album/our-truth',
          a_string: 'Our Truth by BCUC',
          rule: {
            "monday": [ 6, 10, 12, 14 ],
            "tuesday": [ 18, 12, 14, 20 ],
            "wednesday": [ 1, 6, 7, 20 ],
            "thursday": [ 2, 6, 8, 12 ],
            "saturday": [ 5, 8, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3253333211/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rawsh-t.bandcamp.com/album/strapped-4-survival',
          a_string: 'Strapped 4 Survival by Blackfist',
          rule: {
            "monday": [ 6, 9, 11, 15 ],
            "tuesday": [ 7, 11, 13, 15 ],
            "wednesday": [ 19, 13, 15, 21 ],
            "thursday": [ 2, 7, 8, 21 ],
            "saturday": [ 3, 7, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=520703507/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dywanethomasjr.bandcamp.com/album/i-dont-care-today-angels-demons-in-lo-fi',
          a_string: 'I Don&#39;t Care Today (Angels &amp; Demons in Lo-Fi) by MonoNeon',
          rule: {
            "monday": [ 3, 7, 9, 13 ],
            "tuesday": [ 6, 9, 11, 15 ],
            "wednesday": [ 7, 11, 13, 15 ],
            "thursday": [ 19, 13, 15, 21 ],
            "saturday": [ 2, 7, 8, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1140779251/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dywanethomasjr.bandcamp.com/album/a-place-called-fantasy',
          a_string: 'A Place Called Fantasy by MonoNeon',
          rule: {
            "monday": [ 2, 7, 8, 21 ],
            "tuesday": [ 3, 7, 9, 13 ],
            "wednesday": [ 6, 9, 11, 15 ],
            "thursday": [ 7, 11, 13, 15 ],
            "saturday": [ 19, 13, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1042936006/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dywanethomasjr.bandcamp.com/album/welcome-2-whateva-the-fyuck',
          a_string: 'Welcome 2 Whateva The Fyuck by MonoNeon',
          rule: {
            "monday": [ 19, 13, 15, 21 ],
            "tuesday": [ 2, 7, 8, 21 ],
            "wednesday": [ 3, 7, 9, 13 ],
            "thursday": [ 6, 9, 11, 15 ],
            "saturday": [ 7, 11, 13, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2181951676/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theforeignexchange.bandcamp.com/album/leave-it-all-behind-3',
          a_string: 'Leave It All Behind by The Foreign Exchange',
          rule: {
            "monday": [ 7, 11, 13, 15 ],
            "tuesday": [ 19, 13, 15, 21 ],
            "wednesday": [ 2, 7, 8, 21 ],
            "thursday": [ 3, 7, 9, 13 ],
            "saturday": [ 6, 9, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1189081297/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theforeignexchange.bandcamp.com/album/authenticity',
          a_string: 'Authenticity by The Foreign Exchange',
          rule: {
            "monday": [ 6, 9, 11, 15 ],
            "tuesday": [ 7, 11, 13, 15 ],
            "wednesday": [ 19, 13, 15, 21 ],
            "thursday": [ 2, 7, 8, 21 ],
            "saturday": [ 3, 7, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3939352212/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theforeignexchange.bandcamp.com/album/tales-from-the-land-of-milk-and-honey',
          a_string: 'Tales From The Land Of Milk And Honey by The Foreign Exchange',
          rule: {
            "monday": [ 3, 7, 9, 13 ],
            "tuesday": [ 6, 9, 11, 15 ],
            "wednesday": [ 7, 11, 13, 15 ],
            "thursday": [ 19, 13, 15, 21 ],
            "saturday": [ 2, 7, 8, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4223965056/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dywanethomasjr.bandcamp.com/album/selfie-quickie',
          a_string: 'SELFIE QUICKIE by MonoNeon',
          rule: {
            "monday": [ 3, 8, 9, 22 ],
            "tuesday": [ 4, 8, 10, 14 ],
            "wednesday": [ 7, 10, 12, 16 ],
            "thursday": [ 8, 12, 14, 16 ],
            "saturday": [ 20, 14, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2868949692/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dywanethomasjr.bandcamp.com/album/john-cage-on-soul-train',
          a_string: 'John Cage on Soul Train by MonoNeon &amp; Michael Vick',
          rule: {
            "monday": [ 20, 14, 16, 22 ],
            "tuesday": [ 3, 8, 9, 22 ],
            "wednesday": [ 4, 8, 10, 14 ],
            "thursday": [ 7, 10, 12, 16 ],
            "saturday": [ 8, 12, 14, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3004778503/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dywanethomasjr.bandcamp.com/album/weon',
          a_string: 'WEON by WEON (Kriswontwo x MonoNeon)',
          rule: {
            "monday": [ 8, 12, 14, 16 ],
            "tuesday": [ 20, 14, 16, 22 ],
            "wednesday": [ 3, 8, 9, 22 ],
            "thursday": [ 4, 8, 10, 14 ],
            "saturday": [ 7, 10, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2409971227/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bokeh-versions.com/album/miro-tape',
          a_string: 'Miro Tape by Duppy Gun Productions',
          rule: {
            "monday": [ 7, 10, 12, 16 ],
            "tuesday": [ 8, 12, 14, 16 ],
            "wednesday": [ 20, 14, 16, 22 ],
            "thursday": [ 3, 8, 9, 22 ],
            "saturday": [ 4, 8, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2874152417/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://matthewshipp.bandcamp.com/album/zero',
          a_string: 'Zero by Matthew Shipp',
          rule: {
            "monday": [ 4, 8, 10, 14 ],
            "tuesday": [ 7, 10, 12, 16 ],
            "wednesday": [ 8, 12, 14, 16 ],
            "thursday": [ 20, 14, 16, 22 ],
            "saturday": [ 3, 8, 9, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3854515748/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dariusjones.bandcamp.com/album/the-darkseid-recital',
          a_string: 'The Darkseid Recital by Darius Jones &amp; Matthew Shipp',
          rule: {
            "monday": [ 3, 8, 9, 22 ],
            "tuesday": [ 4, 8, 10, 14 ],
            "wednesday": [ 7, 10, 12, 16 ],
            "thursday": [ 8, 12, 14, 16 ],
            "saturday": [ 20, 14, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2780930414/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/downtown-castles-can-never-block-the-sun',
          a_string: 'Downtown Castles Can Never Block The Sun by Ben LaMar Gay',
          rule: {
            "monday": [ 20, 14, 16, 22 ],
            "tuesday": [ 3, 8, 9, 22 ],
            "wednesday": [ 4, 8, 10, 14 ],
            "thursday": [ 7, 10, 12, 16 ],
            "saturday": [ 8, 12, 14, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1283504063/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://henrythreadgill.bandcamp.com/album/dirt-and-more-dirt',
          a_string: 'Dirt... And More Dirt by Henry Threadgill 14 or 15 Kestra: Agg',
          rule: {
            "monday": [ 9, 13, 15, 17 ],
            "tuesday": [ 21, 15, 17, 23 ],
            "wednesday": [ 4, 9, 10, 23 ],
            "thursday": [ 5, 9, 11, 15 ],
            "saturday": [ 8, 11, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1270717580/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://prophetla.bandcamp.com/album/wanna-be-your-man',
          a_string: 'Wanna Be Your Man by Prophet',
          rule: {
            "monday": [ 8, 11, 13, 17 ],
            "tuesday": [ 9, 13, 15, 17 ],
            "wednesday": [ 21, 15, 17, 23 ],
            "thursday": [ 4, 9, 10, 23 ],
            "saturday": [ 5, 9, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1304539686/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thelastpoets.bandcamp.com/album/understand-what-black-is',
          a_string: 'Understand What Black Is by The Last Poets',
          rule: {
            "monday": [ 5, 9, 11, 15 ],
            "tuesday": [ 8, 11, 13, 17 ],
            "wednesday": [ 9, 13, 15, 17 ],
            "thursday": [ 21, 15, 17, 23 ],
            "saturday": [ 4, 9, 10, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=913736923/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thelastpoets.bandcamp.com/album/the-last-poets',
          a_string: 'The Last Poets by The Last Poets',
          rule: {
            "monday": [ 4, 9, 10, 23 ],
            "tuesday": [ 5, 9, 11, 15 ],
            "wednesday": [ 8, 11, 13, 17 ],
            "thursday": [ 9, 13, 15, 17 ],
            "saturday": [ 21, 15, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2778186586/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thelastpoets.bandcamp.com/album/this-is-madness',
          a_string: 'This Is Madness by The Last Poets',
          rule: {
            "monday": [ 21, 15, 17, 23 ],
            "tuesday": [ 4, 9, 10, 23 ],
            "wednesday": [ 5, 9, 11, 15 ],
            "thursday": [ 8, 11, 13, 17 ],
            "saturday": [ 9, 13, 15, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2792901264/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jansportjmusic.com/album/low',
          a_string: 'Low by Jansport J',
          rule: {
            "monday": [ 9, 13, 15, 17 ],
            "tuesday": [ 21, 15, 17, 23 ],
            "wednesday": [ 4, 9, 10, 23 ],
            "thursday": [ 5, 9, 11, 15 ],
            "saturday": [ 8, 11, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=429818355/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://delandamplive.bandcamp.com/album/gate13',
          a_string: 'Gate13 by Del &amp; Amp Live',
          rule: {
            "monday": [ 8, 11, 13, 17 ],
            "tuesday": [ 9, 13, 15, 17 ],
            "wednesday": [ 21, 15, 17, 23 ],
            "thursday": [ 4, 9, 10, 23 ],
            "saturday": [ 5, 9, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=699533933/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thesororityyz.bandcamp.com/album/pledge',
          a_string: 'Pledge by The Sorority',
          rule: {
            "monday": [ 6, 10, 12, 16 ],
            "tuesday": [ 9, 12, 14, 18 ],
            "wednesday": [ 10, 14, 16, 18 ],
            "thursday": [ 22, 16, 18, 24 ],
            "saturday": [ 5, 10, 11, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2589299565/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fatbeatsrecords.bandcamp.com/album/fear-of-a-brown-planet',
          a_string: 'Fear Of A Brown Planet by Brownout',
          rule: {
            "monday": [ 5, 10, 11, 24 ],
            "tuesday": [ 6, 10, 12, 16 ],
            "wednesday": [ 9, 12, 14, 18 ],
            "thursday": [ 10, 14, 16, 18 ],
            "saturday": [ 22, 16, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=129509118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leftofcenter.bandcamp.com/album/theraputic',
          a_string: 'Theraputic by A Minus &amp; Chanes',
          rule: {
            "monday": [ 22, 16, 18, 24 ],
            "tuesday": [ 5, 10, 11, 24 ],
            "wednesday": [ 6, 10, 12, 16 ],
            "thursday": [ 9, 12, 14, 18 ],
            "saturday": [ 10, 14, 16, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=399468470/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elaquent.bandcamp.com/album/bakers-dozen-elaquent',
          a_string: 'Baker&#39;s Dozen: Elaquent by Elaquent',
          rule: {
            "monday": [ 10, 14, 16, 18 ],
            "tuesday": [ 22, 16, 18, 24 ],
            "wednesday": [ 5, 10, 11, 24 ],
            "thursday": [ 6, 10, 12, 16 ],
            "saturday": [ 9, 12, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2143936539/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://themidnighthour.bandcamp.com/album/the-midnight-hour',
          a_string: 'The Midnight Hour by The Midnight Hour',
          rule: {
            "monday": [ 9, 12, 14, 18 ],
            "tuesday": [ 10, 14, 16, 18 ],
            "wednesday": [ 22, 16, 18, 24 ],
            "thursday": [ 5, 10, 11, 24 ],
            "saturday": [ 6, 10, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=593769597/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://serpentwithfeet.bandcamp.com/album/blisters-2',
          a_string: 'blisters by serpentwithfeet',
          rule: {
            "monday": [ 6, 10, 12, 16 ],
            "tuesday": [ 9, 12, 14, 18 ],
            "wednesday": [ 10, 14, 16, 18 ],
            "thursday": [ 22, 16, 18, 24 ],
            "saturday": [ 5, 10, 11, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1451564269/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://serpentwithfeet.bandcamp.com/album/soil',
          a_string: 'soil by serpentwithfeet',
          rule: {
            "monday": [ 5, 10, 11, 24 ],
            "tuesday": [ 6, 10, 12, 16 ],
            "wednesday": [ 9, 12, 14, 18 ],
            "thursday": [ 10, 14, 16, 18 ],
            "saturday": [ 22, 16, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1236766671/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rpboo.bandcamp.com/album/the-ultimate',
          a_string: 'The Ultimate by RP Boo',
          rule: {
            "monday": [ 23, 17, 19, 25 ],
            "tuesday": [ 24, 18, 20, 26 ],
            "wednesday": [ 7, 11, 13, 17 ],
            "thursday": [ 10, 13, 15, 19 ],
            "saturday": [ 11, 15, 17, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3809640767/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rpboo.bandcamp.com/album/fingers-bank-pads-and-foot-prints',
          a_string: 'Fingers, Bank Pads and Foot Prints by RP Boo',
          rule: {
            "monday": [ 11, 15, 17, 19 ],
            "tuesday": [ 23, 17, 19, 25 ],
            "wednesday": [ 24, 18, 20, 26 ],
            "thursday": [ 7, 11, 13, 17 ],
            "saturday": [ 10, 13, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3279189397/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://busdriver-thumbs.bandcamp.com/album/electricity-is-on-our-side-2',
          a_string: 'Electricity is on our Side by BUSDRIVER',
          rule: {
            "monday": [ 10, 13, 15, 19 ],
            "tuesday": [ 11, 15, 17, 19 ],
            "wednesday": [ 23, 17, 19, 25 ],
            "thursday": [ 24, 18, 20, 26 ],
            "saturday": [ 7, 11, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1924295824/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stevecoleman.bandcamp.com/album/live-at-the-village-vanguard-vol-1-the-embedded-sets',
          a_string: 'Live at the Village Vanguard, Vol. 1 (The Embedded Sets) by Steve Coleman',
          rule: {
            "monday": [ 7, 11, 13, 17 ],
            "tuesday": [ 10, 13, 15, 19 ],
            "wednesday": [ 11, 15, 17, 19 ],
            "thursday": [ 23, 17, 19, 25 ],
            "saturday": [ 24, 18, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=635988323/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stevecoleman.bandcamp.com/album/morphogenesis',
          a_string: 'Morphogenesis by Steve Coleman',
          rule: {
            "monday": [ 24, 18, 20, 26 ],
            "tuesday": [ 7, 11, 13, 17 ],
            "wednesday": [ 10, 13, 15, 19 ],
            "thursday": [ 11, 15, 17, 19 ],
            "saturday": [ 23, 17, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1212975563/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stevecoleman.bandcamp.com/album/synovial-joints',
          a_string: 'Synovial Joints by Steve Coleman and the Council of Balance',
          rule: {
            "monday": [ 23, 17, 19, 25 ],
            "tuesday": [ 24, 18, 20, 26 ],
            "wednesday": [ 7, 11, 13, 17 ],
            "thursday": [ 10, 13, 15, 19 ],
            "saturday": [ 11, 15, 17, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4190276032/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dobie.bandcamp.com/album/dobie-the-sound-of-one-hand-clapping-v25',
          a_string: 'Dobie - the sound of one hand clapping V2.5 by Dobie',
          rule: {
            "monday": [ 11, 15, 17, 19 ],
            "tuesday": [ 23, 17, 19, 25 ],
            "wednesday": [ 24, 18, 20, 26 ],
            "thursday": [ 7, 11, 13, 17 ],
            "saturday": [ 10, 13, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=389000528/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://38spesh.bandcamp.com/album/son-of-g-rap',
          a_string: 'Son of G Rap by Kool G Rap &amp; 38 Spesh',
          rule: {
            "monday": [ 11, 14, 16, 20 ],
            "tuesday": [ 22, 16, 18, 20 ],
            "wednesday": [ 24, 18, 20, 26 ],
            "thursday": [ 25, 19, 21, 27 ],
            "saturday": [ 8, 12, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=323561392/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://belowsystem.bandcamp.com/album/carte-blanche-deluxe-edition',
          a_string: 'Carte Blanche (Deluxe Edition) by Phat Kat',
          rule: {
            "monday": [ 8, 12, 14, 18 ],
            "tuesday": [ 11, 14, 16, 20 ],
            "wednesday": [ 22, 16, 18, 20 ],
            "thursday": [ 24, 18, 20, 26 ],
            "saturday": [ 25, 19, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4216895511/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mayyadda.bandcamp.com/album/holding-space',
          a_string: 'Holding Space by Mayyadda',
          rule: {
            "monday": [ 25, 19, 21, 27 ],
            "tuesday": [ 8, 12, 14, 18 ],
            "wednesday": [ 11, 14, 16, 20 ],
            "thursday": [ 22, 16, 18, 20 ],
            "saturday": [ 24, 18, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=945376779/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yazminlacey.bandcamp.com/album/when-the-sun-dips-90-degrees',
          a_string: 'When The Sun Dips 90 Degrees by Yazmin Lacey',
          rule: {
            "monday": [ 24, 18, 20, 26 ],
            "tuesday": [ 25, 19, 21, 27 ],
            "wednesday": [ 8, 12, 14, 18 ],
            "thursday": [ 11, 14, 16, 20 ],
            "saturday": [ 22, 16, 18, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1658579446/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thehitandrun.bandcamp.com/album/daffi-hnr91',
          a_string: 'DAFFI [HNR91] by JEREMIAH JAE',
          rule: {
            "monday": [ 22, 16, 18, 20 ],
            "tuesday": [ 24, 18, 20, 26 ],
            "wednesday": [ 25, 19, 21, 27 ],
            "thursday": [ 8, 12, 14, 18 ],
            "saturday": [ 11, 14, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=960921452/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://armandhammer.bandcamp.com/album/paraffin',
          a_string: 'Paraffin by Armand Hammer',
          rule: {
            "monday": [ 11, 14, 16, 20 ],
            "tuesday": [ 22, 16, 18, 20 ],
            "wednesday": [ 24, 18, 20, 26 ],
            "thursday": [ 25, 19, 21, 27 ],
            "saturday": [ 8, 12, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2193002094/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bloodorangenyc.bandcamp.com/album/negro-swan',
          a_string: 'Negro Swan by Blood Orange',
          rule: {
            "monday": [ 8, 12, 14, 18 ],
            "tuesday": [ 11, 14, 16, 20 ],
            "wednesday": [ 22, 16, 18, 20 ],
            "thursday": [ 24, 18, 20, 26 ],
            "saturday": [ 25, 19, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=84766419/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nimbuswest.bandcamp.com/album/the-call',
          a_string: 'The Call by Pan Afrikan People&#39;s Arkestra',
          rule: {
            "monday": [ 26, 20, 22, 28 ],
            "tuesday": [ 9, 13, 15, 19 ],
            "wednesday": [ 12, 15, 17, 21 ],
            "thursday": [ 23, 17, 19, 21 ],
            "saturday": [ 25, 19, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1571021980/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fatbeatsrecords.bandcamp.com/album/immortal-titans',
          a_string: 'Immortal Titans by Tragedy Khadafi &amp; BP',
          rule: {
            "monday": [ 25, 19, 21, 27 ],
            "tuesday": [ 26, 20, 22, 28 ],
            "wednesday": [ 9, 13, 15, 19 ],
            "thursday": [ 12, 15, 17, 21 ],
            "saturday": [ 23, 17, 19, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3820222414/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nostrumgrocers.bandcamp.com/album/nostrum-grocers',
          a_string: 'Nostrum Grocers by Nostrum Grocers',
          rule: {
            "monday": [ 23, 17, 19, 21 ],
            "tuesday": [ 25, 19, 21, 27 ],
            "wednesday": [ 26, 20, 22, 28 ],
            "thursday": [ 9, 13, 15, 19 ],
            "saturday": [ 12, 15, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4090872437/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wearethekarmakids.bandcamp.com/album/floating-polygons',
          a_string: 'Floating Polygons by Googie',
          rule: {
            "monday": [ 12, 15, 17, 21 ],
            "tuesday": [ 23, 17, 19, 21 ],
            "wednesday": [ 25, 19, 21, 27 ],
            "thursday": [ 26, 20, 22, 28 ],
            "saturday": [ 9, 13, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3603991383/size=large/bgcol=ffffff/linkcol=0687f5/license_id=78/tracklist=false/transparent=true/',
          href_string: 'http://kamasiwashington.bandcamp.com/album/the-epic-1',
          a_string: 'The Epic by Kamasi Washington',
          rule: {
            "monday": [ 9, 13, 15, 19 ],
            "tuesday": [ 12, 15, 17, 21 ],
            "wednesday": [ 23, 17, 19, 21 ],
            "thursday": [ 25, 19, 21, 27 ],
            "saturday": [ 26, 20, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3794237863/size=large/bgcol=ffffff/linkcol=0687f5/license_id=74/tracklist=false/transparent=true/',
          href_string: 'http://thundercat.bandcamp.com/album/drunk-1',
          a_string: 'Drunk by Thundercat',
          rule: {
            "monday": [ 26, 20, 22, 28 ],
            "tuesday": [ 9, 13, 15, 19 ],
            "wednesday": [ 12, 15, 17, 21 ],
            "thursday": [ 23, 17, 19, 21 ],
            "saturday": [ 25, 19, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1931742968/size=large/bgcol=ffffff/linkcol=0687f5/license_id=110/tracklist=false/transparent=true/',
          href_string: 'http://teebs.bandcamp.com/album/ardour',
          a_string: 'Ardour by Teebs',
          rule: {
            "monday": [ 25, 19, 21, 27 ],
            "tuesday": [ 26, 20, 22, 28 ],
            "wednesday": [ 9, 13, 15, 19 ],
            "thursday": [ 12, 15, 17, 21 ],
            "saturday": [ 23, 17, 19, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=431116668/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://redefinitionrecords.bandcamp.com/album/homework',
          a_string: 'Homework by Kev Brown',
          rule: {
            "monday": [ 24, 18, 20, 22 ],
            "tuesday": [ 26, 20, 22, 28 ],
            "wednesday": [ 27, 21, 23, 29 ],
            "thursday": [ 10, 14, 16, 20 ],
            "saturday": [ 13, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4130828356/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ronee.bandcamp.com/album/ensley-2',
          a_string: 'ensley by Pink Siifu',
          rule: {
            "monday": [ 13, 16, 18, 22 ],
            "tuesday": [ 24, 18, 20, 22 ],
            "wednesday": [ 26, 20, 22, 28 ],
            "thursday": [ 27, 21, 23, 29 ],
            "saturday": [ 10, 14, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3042324310/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nouvelleambiance.bandcamp.com/album/nouvelle-ambiance',
          a_string: 'Nouvelle Ambiance !!! by Various Artists',
          rule: {
            "monday": [ 10, 14, 16, 20 ],
            "tuesday": [ 13, 16, 18, 22 ],
            "wednesday": [ 24, 18, 20, 22 ],
            "thursday": [ 26, 20, 22, 28 ],
            "saturday": [ 27, 21, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3449845602/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bloodorangenyc.bandcamp.com/album/freetown-sound',
          a_string: 'Freetown Sound by Blood Orange',
          rule: {
            "monday": [ 27, 21, 23, 29 ],
            "tuesday": [ 10, 14, 16, 20 ],
            "wednesday": [ 13, 16, 18, 22 ],
            "thursday": [ 24, 18, 20, 22 ],
            "saturday": [ 26, 20, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2019290815/size=large/bgcol=ffffff/linkcol=0687f5/license_id=77/tracklist=false/transparent=true/',
          href_string: 'http://thundercat.bandcamp.com/album/the-beyond-where-the-giants-roam-1',
          a_string: 'The Beyond / Where the Giants Roam by Thundercat',
          rule: {
            "monday": [ 26, 20, 22, 28 ],
            "tuesday": [ 27, 21, 23, 29 ],
            "wednesday": [ 10, 14, 16, 20 ],
            "thursday": [ 13, 16, 18, 22 ],
            "saturday": [ 24, 18, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=454850283/size=large/bgcol=ffffff/linkcol=0687f5/license_id=92/tracklist=false/transparent=true/',
          href_string: 'http://thundercat.bandcamp.com/album/apocalypse',
          a_string: 'Apocalypse by Thundercat',
          rule: {
            "monday": [ 24, 18, 20, 22 ],
            "tuesday": [ 26, 20, 22, 28 ],
            "wednesday": [ 27, 21, 23, 29 ],
            "thursday": [ 10, 14, 16, 20 ],
            "saturday": [ 13, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=639116243/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newbraxtonhouse.bandcamp.com/album/trio-new-haven-2013',
          a_string: 'Trio (New Haven) 2013 by Anthony Braxton',
          rule: {
            "monday": [ 13, 16, 18, 22 ],
            "tuesday": [ 24, 18, 20, 22 ],
            "wednesday": [ 26, 20, 22, 28 ],
            "thursday": [ 27, 21, 23, 29 ],
            "saturday": [ 10, 14, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3123042263/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newbraxtonhouse.bandcamp.com/album/creative-music-orchestra-nyc-2011',
          a_string: 'Creative Music Orchestra (NYC) 2011 by Anthony Braxton',
          rule: {
            "monday": [ 11, 15, 17, 21 ],
            "tuesday": [ 14, 17, 19, 21 ],
            "wednesday": [ 25, 19, 21, 23 ],
            "thursday": [ 27, 21, 23, 29 ],
            "saturday": [ 28, 22, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2535910985/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newbraxtonhouse.bandcamp.com/album/trillium-r',
          a_string: 'Trillium R by Anthony Braxton',
          rule: {
            "monday": [ 28, 22, 24, 1 ],
            "tuesday": [ 11, 15, 17, 21 ],
            "wednesday": [ 14, 17, 19, 21 ],
            "thursday": [ 25, 19, 21, 23 ],
            "saturday": [ 27, 21, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2782771395/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coalminerecords.bandcamp.com/album/land-of-the-crooks',
          a_string: 'Land of the Crooks by Sean Price &amp; M-Phazes',
          rule: {
            "monday": [ 27, 21, 23, 29 ],
            "tuesday": [ 28, 22, 24, 1 ],
            "wednesday": [ 11, 15, 17, 21 ],
            "thursday": [ 14, 17, 19, 21 ],
            "saturday": [ 25, 19, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1277651767/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coalminerecords.bandcamp.com/album/gods-in-the-spirit-titans-in-the-flesh',
          a_string: 'Gods in the Spirit, Titans in the Flesh by Blu &amp; Nottz',
          rule: {
            "monday": [ 25, 19, 21, 23 ],
            "tuesday": [ 27, 21, 23, 29 ],
            "wednesday": [ 28, 22, 24, 1 ],
            "thursday": [ 11, 15, 17, 21 ],
            "saturday": [ 14, 17, 19, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=892399869/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coalminerecords.bandcamp.com/album/elixir',
          a_string: 'Elixir by Aaron Rose',
          rule: {
            "monday": [ 14, 17, 19, 21 ],
            "tuesday": [ 25, 19, 21, 23 ],
            "wednesday": [ 27, 21, 23, 29 ],
            "thursday": [ 28, 22, 24, 1 ],
            "saturday": [ 11, 15, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3654595443/size=large/bgcol=ffffff/linkcol=0687f5/license_id=111/tracklist=false/transparent=true/',
          href_string: 'http://georgiaannemuldrow.bandcamp.com/album/overload',
          a_string: 'Overload by Georgia Anne Muldrow',
          rule: {
            "monday": [ 11, 15, 17, 21 ],
            "tuesday": [ 14, 17, 19, 21 ],
            "wednesday": [ 25, 19, 21, 23 ],
            "thursday": [ 27, 21, 23, 29 ],
            "saturday": [ 28, 22, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3588418751/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nenehcherry.bandcamp.com/album/broken-politics',
          a_string: 'Broken Politics by Neneh Cherry',
          rule: {
            "monday": [ 28, 22, 24, 1 ],
            "tuesday": [ 11, 15, 17, 21 ],
            "wednesday": [ 14, 17, 19, 21 ],
            "thursday": [ 25, 19, 21, 23 ],
            "saturday": [ 27, 21, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1284736399/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coalminerecords.bandcamp.com/album/unearthed-deluxe-edition',
          a_string: 'Unearthed (Deluxe Edition) by Coalmine Records Presents',
          rule: {
            "monday": [ 28, 22, 24, 1 ],
            "tuesday": [ 29, 23, 25, 2 ],
            "wednesday": [ 12, 16, 18, 22 ],
            "thursday": [ 15, 18, 20, 22 ],
            "saturday": [ 26, 20, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1474936833/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://electriccowbellrecords.bandcamp.com/album/the-garner-poems',
          a_string: 'The Garner Poems by Mourning [A] BLKstar',
          rule: {
            "monday": [ 26, 20, 22, 24 ],
            "tuesday": [ 28, 22, 24, 1 ],
            "wednesday": [ 29, 23, 25, 2 ],
            "thursday": [ 12, 16, 18, 22 ],
            "saturday": [ 15, 18, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2588823966/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://willsessions.bandcamp.com/album/the-one',
          a_string: 'The One by Will Sessions &amp; Amp Fiddler ft. Dames Brown',
          rule: {
            "monday": [ 15, 18, 20, 22 ],
            "tuesday": [ 26, 20, 22, 24 ],
            "wednesday": [ 28, 22, 24, 1 ],
            "thursday": [ 29, 23, 25, 2 ],
            "saturday": [ 12, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1905484953/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://autoreverserecords.bandcamp.com/album/what-happens-when-i-try-to-relax',
          a_string: 'What Happens When I Try To Relax by Open Mike Eagle',
          rule: {
            "monday": [ 12, 16, 18, 22 ],
            "tuesday": [ 15, 18, 20, 22 ],
            "wednesday": [ 26, 20, 22, 24 ],
            "thursday": [ 28, 22, 24, 1 ],
            "saturday": [ 29, 23, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2381473554/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/pillars',
          a_string: 'Pillars by Tyshawn Sorey',
          rule: {
            "monday": [ 29, 23, 25, 2 ],
            "tuesday": [ 12, 16, 18, 22 ],
            "wednesday": [ 15, 18, 20, 22 ],
            "thursday": [ 26, 20, 22, 24 ],
            "saturday": [ 28, 22, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3308831432/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/3-compositions-eemhm-2011',
          a_string: '3 Compositions (EEMHM) 2011 by Anthony Braxton',
          rule: {
            "monday": [ 28, 22, 24, 1 ],
            "tuesday": [ 29, 23, 25, 2 ],
            "wednesday": [ 12, 16, 18, 22 ],
            "thursday": [ 15, 18, 20, 22 ],
            "saturday": [ 26, 20, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2605840089/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newbraxtonhouse.bandcamp.com/album/syntactical-gtm-choir-nyc-2011',
          a_string: 'Syntactical GTM Choir (NYC) 2011 by Anthony Braxton',
          rule: {
            "monday": [ 26, 20, 22, 24 ],
            "tuesday": [ 28, 22, 24, 1 ],
            "wednesday": [ 29, 23, 25, 2 ],
            "thursday": [ 12, 16, 18, 22 ],
            "saturday": [ 15, 18, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=709765212/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kiydrah.bandcamp.com/album/muse',
          a_string: 'Muse by Kiydrah',
          rule: {
            "monday": [ 16, 19, 21, 23 ],
            "tuesday": [ 27, 21, 23, 25 ],
            "wednesday": [ 29, 23, 25, 2 ],
            "thursday": [ 1, 24, 26, 3 ],
            "saturday": [ 13, 17, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2038688701/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://j-anthxny.bandcamp.com/album/wave-n9ne',
          a_string: 'Wave N9ne by J. Anthxny',
          rule: {
            "monday": [ 13, 17, 19, 23 ],
            "tuesday": [ 16, 19, 21, 23 ],
            "wednesday": [ 27, 21, 23, 25 ],
            "thursday": [ 29, 23, 25, 2 ],
            "saturday": [ 1, 24, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2116410171/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://michaeljudahmusic.bandcamp.com/album/colloquial-setup',
          a_string: 'Colloquial Setup by Michael Judah',
          rule: {
            "monday": [ 1, 24, 26, 3 ],
            "tuesday": [ 13, 17, 19, 23 ],
            "wednesday": [ 16, 19, 21, 23 ],
            "thursday": [ 27, 21, 23, 25 ],
            "saturday": [ 29, 23, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3043759318/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hopeforthetapedeck.bandcamp.com/album/dennehy',
          a_string: 'Dennehy by Serengeti',
          rule: {
            "monday": [ 29, 23, 25, 2 ],
            "tuesday": [ 1, 24, 26, 3 ],
            "wednesday": [ 13, 17, 19, 23 ],
            "thursday": [ 16, 19, 21, 23 ],
            "saturday": [ 27, 21, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3677204173/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anticon.bandcamp.com/album/theres-a-situation-on-the-homefront',
          a_string: 'There&#39;s A Situation On The Homefront by Tha Grimm Teachaz',
          rule: {
            "monday": [ 27, 21, 23, 25 ],
            "tuesday": [ 29, 23, 25, 2 ],
            "wednesday": [ 1, 24, 26, 3 ],
            "thursday": [ 13, 17, 19, 23 ],
            "saturday": [ 16, 19, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=524158919/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anticon.bandcamp.com/album/kenny-dennis-ep',
          a_string: 'Kenny Dennis EP by SERENGETI',
          rule: {
            "monday": [ 16, 19, 21, 23 ],
            "tuesday": [ 27, 21, 23, 25 ],
            "wednesday": [ 29, 23, 25, 2 ],
            "thursday": [ 1, 24, 26, 3 ],
            "saturday": [ 13, 17, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2569617277/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://allchucaneat.bandcamp.com/album/hubris',
          a_string: ':HUBRIS by Chuuwee',
          rule: {
            "monday": [ 13, 17, 19, 23 ],
            "tuesday": [ 16, 19, 21, 23 ],
            "wednesday": [ 27, 21, 23, 25 ],
            "thursday": [ 29, 23, 25, 2 ],
            "saturday": [ 1, 24, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1358079150/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://allchucaneat.bandcamp.com/album/the-bag',
          a_string: 'The $ Bag by Chuuwee &amp; Rich ICY',
          rule: {
            "monday": [ 2, 25, 27, 4 ],
            "tuesday": [ 14, 18, 20, 24 ],
            "wednesday": [ 17, 20, 22, 24 ],
            "thursday": [ 28, 22, 24, 26 ],
            "saturday": [ 1, 24, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3115569455/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://allchucaneat.bandcamp.com/album/passover',
          a_string: 'PassOver by Chuuwee',
          rule: {
            "monday": [ 1, 24, 26, 3 ],
            "tuesday": [ 2, 25, 27, 4 ],
            "wednesday": [ 14, 18, 20, 24 ],
            "thursday": [ 17, 20, 22, 24 ],
            "saturday": [ 28, 22, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3515419127/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kamaalwilliams.bandcamp.com/album/the-return',
          a_string: 'The Return by Kamaal Williams',
          rule: {
            "monday": [ 28, 22, 24, 26 ],
            "tuesday": [ 1, 24, 26, 3 ],
            "wednesday": [ 2, 25, 27, 4 ],
            "thursday": [ 14, 18, 20, 24 ],
            "saturday": [ 17, 20, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=199727413/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://themickjenkins.bandcamp.com/album/pieces-of-a-man',
          a_string: 'Pieces of a Man by Mick Jenkins',
          rule: {
            "monday": [ 17, 20, 22, 24 ],
            "tuesday": [ 28, 22, 24, 26 ],
            "wednesday": [ 1, 24, 26, 3 ],
            "thursday": [ 2, 25, 27, 4 ],
            "saturday": [ 14, 18, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=186416695/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://starchildandthenewromantic.bandcamp.com/album/language',
          a_string: 'Language by Starchild &amp; The New Romantic',
          rule: {
            "monday": [ 14, 18, 20, 24 ],
            "tuesday": [ 17, 20, 22, 24 ],
            "wednesday": [ 28, 22, 24, 26 ],
            "thursday": [ 1, 24, 26, 3 ],
            "saturday": [ 2, 25, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3559861368/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mikelikesrap.bandcamp.com/album/war-in-my-pen',
          a_string: 'War in my Pen by MIKE',
          rule: {
            "monday": [ 2, 25, 27, 4 ],
            "tuesday": [ 14, 18, 20, 24 ],
            "wednesday": [ 17, 20, 22, 24 ],
            "thursday": [ 28, 22, 24, 26 ],
            "saturday": [ 1, 24, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2485657964/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://queenette.bandcamp.com/album/vacant-ep',
          a_string: 'Vacant- EP by Amaka Queenette',
          rule: {
            "monday": [ 1, 24, 26, 3 ],
            "tuesday": [ 2, 25, 27, 4 ],
            "wednesday": [ 14, 18, 20, 24 ],
            "thursday": [ 17, 20, 22, 24 ],
            "saturday": [ 28, 22, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2448550951/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cecilymusic.bandcamp.com/album/songs-of-love-and-freedom',
          a_string: 'Songs of Love and Freedom by Cecily',
          rule: {
            "monday": [ 29, 23, 25, 27 ],
            "tuesday": [ 2, 25, 27, 4 ],
            "wednesday": [ 3, 26, 28, 5 ],
            "thursday": [ 15, 19, 21, 25 ],
            "saturday": [ 18, 21, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1550838743/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hamasynth.bandcamp.com/album/houmeissa',
          a_string: 'Houmeissa by Hama',
          rule: {
            "monday": [ 18, 21, 23, 25 ],
            "tuesday": [ 29, 23, 25, 27 ],
            "wednesday": [ 2, 25, 27, 4 ],
            "thursday": [ 3, 26, 28, 5 ],
            "saturday": [ 15, 19, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=873725653/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marc4hero.bandcamp.com/album/its-right-to-be-civil-vinyl-lp',
          a_string: 'It&#39;s Right To Be Civil (Vinyl LP) by Marc Mac',
          rule: {
            "monday": [ 15, 19, 21, 25 ],
            "tuesday": [ 18, 21, 23, 25 ],
            "wednesday": [ 29, 23, 25, 27 ],
            "thursday": [ 2, 25, 27, 4 ],
            "saturday": [ 3, 26, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1873538471/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marc4hero.bandcamp.com/album/all-power-to-the-people',
          a_string: 'All Power To The People by Marc Mac',
          rule: {
            "monday": [ 3, 26, 28, 5 ],
            "tuesday": [ 15, 19, 21, 25 ],
            "wednesday": [ 18, 21, 23, 25 ],
            "thursday": [ 29, 23, 25, 27 ],
            "saturday": [ 2, 25, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1308385904/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jayepmorgan.bandcamp.com/album/jaye-p-morgan',
          a_string: 'Jaye P. Morgan by Jaye P. Morgan',
          rule: {
            "monday": [ 2, 25, 27, 4 ],
            "tuesday": [ 3, 26, 28, 5 ],
            "wednesday": [ 15, 19, 21, 25 ],
            "thursday": [ 18, 21, 23, 25 ],
            "saturday": [ 29, 23, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3169749755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://duasaleh.bandcamp.com/album/n-r',
          a_string: 'Nūr by Dua Saleh',
          rule: {
            "monday": [ 29, 23, 25, 27 ],
            "tuesday": [ 2, 25, 27, 4 ],
            "wednesday": [ 3, 26, 28, 5 ],
            "thursday": [ 15, 19, 21, 25 ],
            "saturday": [ 18, 21, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=367497098/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thesymphny.bandcamp.com/album/vol-2',
          a_string: 'Vol.2 by TheSymphny',
          rule: {
            "monday": [ 18, 21, 23, 25 ],
            "tuesday": [ 29, 23, 25, 27 ],
            "wednesday": [ 2, 25, 27, 4 ],
            "thursday": [ 3, 26, 28, 5 ],
            "saturday": [ 15, 19, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3785769451/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kel-assouf.bandcamp.com/album/black-tenere',
          a_string: 'Black Tenere by Kel Assouf',
          rule: {
            "monday": [ 16, 20, 22, 26 ],
            "tuesday": [ 19, 22, 24, 26 ],
            "wednesday": [ 1, 24, 26, 28 ],
            "thursday": [ 3, 26, 28, 5 ],
            "saturday": [ 4, 27, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=424529570/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deathisnot.bandcamp.com/album/if-i-had-a-pair-of-wings-jamaican-doo-wop-vol-2',
          a_string: 'If I Had a Pair of Wings: Jamaican Doo Wop, Vol. 2 by Various Artists',
          rule: {
            "monday": [ 4, 27, 29, 6 ],
            "tuesday": [ 16, 20, 22, 26 ],
            "wednesday": [ 19, 22, 24, 26 ],
            "thursday": [ 1, 24, 26, 28 ],
            "saturday": [ 3, 26, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2838607322/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yorubasingersfightingforsurvival.bandcamp.com/album/fighting-for-survival',
          a_string: 'Fighting for Survival by Yoruba Singers',
          rule: {
            "monday": [ 3, 26, 28, 5 ],
            "tuesday": [ 4, 27, 29, 6 ],
            "wednesday": [ 16, 20, 22, 26 ],
            "thursday": [ 19, 22, 24, 26 ],
            "saturday": [ 1, 24, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3015256668/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yugenblakrok.bandcamp.com/album/anima-mysterium',
          a_string: 'ANIMA MYSTERIUM by Yugen Blakrok',
          rule: {
            "monday": [ 1, 24, 26, 28 ],
            "tuesday": [ 3, 26, 28, 5 ],
            "wednesday": [ 4, 27, 29, 6 ],
            "thursday": [ 16, 20, 22, 26 ],
            "saturday": [ 19, 22, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=716325170/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://clearsoulforces.bandcamp.com/album/still',
          a_string: 'Still by Clear Soul Forces',
          rule: {
            "monday": [ 19, 22, 24, 26 ],
            "tuesday": [ 1, 24, 26, 28 ],
            "wednesday": [ 3, 26, 28, 5 ],
            "thursday": [ 4, 27, 29, 6 ],
            "saturday": [ 16, 20, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=757727673/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thegoodpeople.bandcamp.com/album/good-for-nuthin-2',
          a_string: 'Good For Nuthin by The Good People',
          rule: {
            "monday": [ 16, 20, 22, 26 ],
            "tuesday": [ 19, 22, 24, 26 ],
            "wednesday": [ 1, 24, 26, 28 ],
            "thursday": [ 3, 26, 28, 5 ],
            "saturday": [ 4, 27, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2383284709/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://drdundiff.bandcamp.com/album/the-distance',
          a_string: 'The Distance by Dr. Dundiff',
          rule: {
            "monday": [ 4, 27, 29, 6 ],
            "tuesday": [ 16, 20, 22, 26 ],
            "wednesday": [ 19, 22, 24, 26 ],
            "thursday": [ 1, 24, 26, 28 ],
            "saturday": [ 3, 26, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1210831189/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hejira.bandcamp.com/album/thread-of-gold',
          a_string: 'Thread of Gold by Hejira',
          rule: {
            "monday": [ 4, 27, 29, 6 ],
            "tuesday": [ 5, 28, 1, 7 ],
            "wednesday": [ 17, 21, 23, 27 ],
            "thursday": [ 20, 23, 25, 27 ],
            "saturday": [ 2, 25, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3228415273/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://madaboutrecordslabel.bandcamp.com/album/imani-out-of-the-blue-pre-order',
          a_string: 'Imani - &quot;Out Of The Blue&quot; (pre-order) by MAD ABOUT RECORDS',
          rule: {
            "monday": [ 2, 25, 27, 29 ],
            "tuesday": [ 4, 27, 29, 6 ],
            "wednesday": [ 5, 28, 1, 7 ],
            "thursday": [ 17, 21, 23, 27 ],
            "saturday": [ 20, 23, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3783114678/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dexterstory.bandcamp.com/album/bahir',
          a_string: 'Bahir by Dexter Story',
          rule: {
            "monday": [ 20, 23, 25, 27 ],
            "tuesday": [ 2, 25, 27, 29 ],
            "wednesday": [ 4, 27, 29, 6 ],
            "thursday": [ 5, 28, 1, 7 ],
            "saturday": [ 17, 21, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 311,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3465765436/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aaronabernathy.bandcamp.com/album/epilogue',
          a_string: 'Epilogue by Aaron Abernathy',
          rule: {
            "monday": [ 17, 21, 23, 27 ],
            "tuesday": [ 20, 23, 25, 27 ],
            "wednesday": [ 2, 25, 27, 29 ],
            "thursday": [ 4, 27, 29, 6 ],
            "saturday": [ 5, 28, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 312,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=953757192/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gangsterdoodles.bandcamp.com/album/gangster-music-vol-1',
          a_string: 'Gangster Music Vol. 1 by Gangster Doodles',
          rule: {
            "monday": [ 5, 28, 1, 7 ],
            "tuesday": [ 17, 21, 23, 27 ],
            "wednesday": [ 20, 23, 25, 27 ],
            "thursday": [ 2, 25, 27, 29 ],
            "saturday": [ 4, 27, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 313,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1181169497/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://christianscott.bandcamp.com/album/stretch-music',
          a_string: 'Stretch Music by Christian Scott aTunde Adjuah',
          rule: {
            "monday": [ 4, 27, 29, 6 ],
            "tuesday": [ 5, 28, 1, 7 ],
            "wednesday": [ 17, 21, 23, 27 ],
            "thursday": [ 20, 23, 25, 27 ],
            "saturday": [ 2, 25, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 314,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3734958923/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ibibiosoundmachine.bandcamp.com/album/doko-mien',
          a_string: 'Doko Mien by Ibibio Sound Machine',
          rule: {
            "monday": [ 2, 25, 27, 29 ],
            "tuesday": [ 4, 27, 29, 6 ],
            "wednesday": [ 5, 28, 1, 7 ],
            "thursday": [ 17, 21, 23, 27 ],
            "saturday": [ 20, 23, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 315,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2968932585/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://discrepant.bandcamp.com/album/symbols-follow',
          a_string: 'Symbols Follow by Mutamassik',
          rule: {
            "monday": [ 21, 24, 26, 28 ],
            "tuesday": [ 3, 26, 28, 1 ],
            "wednesday": [ 5, 28, 1, 7 ],
            "thursday": [ 6, 29, 2, 8 ],
            "saturday": [ 18, 22, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 316,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3162042825/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tahirahmemory.bandcamp.com/album/asha',
          a_string: 'Asha by Tahirah Memory',
          rule: {
            "monday": [ 18, 22, 24, 28 ],
            "tuesday": [ 21, 24, 26, 28 ],
            "wednesday": [ 3, 26, 28, 1 ],
            "thursday": [ 5, 28, 1, 7 ],
            "saturday": [ 6, 29, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 317,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4177394534/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://agnarkea.bandcamp.com/album/radical-info-vol6',
          a_string: 'radical/info.vol6 by AGNARKEA',
          rule: {
            "monday": [ 6, 29, 2, 8 ],
            "tuesday": [ 18, 22, 24, 28 ],
            "wednesday": [ 21, 24, 26, 28 ],
            "thursday": [ 3, 26, 28, 1 ],
            "saturday": [ 5, 28, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 318,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1591110614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://calsutmoran.bandcamp.com/album/telepathic-helix',
          a_string: 'TELEPATHIC HELIX by CALSUTMORAN',
          rule: {
            "monday": [ 5, 28, 1, 7 ],
            "tuesday": [ 6, 29, 2, 8 ],
            "wednesday": [ 18, 22, 24, 28 ],
            "thursday": [ 21, 24, 26, 28 ],
            "saturday": [ 3, 26, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 319,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4270137635/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leefieldsandtheexpressions.bandcamp.com/album/it-rains-love',
          a_string: 'It Rains Love by Lee Fields &amp; The Expressions',
          rule: {
            "monday": [ 3, 26, 28, 1 ],
            "tuesday": [ 5, 28, 1, 7 ],
            "wednesday": [ 6, 29, 2, 8 ],
            "thursday": [ 18, 22, 24, 28 ],
            "saturday": [ 21, 24, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 320,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3094986359/size=large/bgcol=ffffff/linkcol=0687f5/license_id=540/tracklist=false/transparent=true/',
          href_string: 'http://shafiqhusayn.bandcamp.com/album/the-loop',
          a_string: 'The Loop by Shafiq Husayn',
          rule: {
            "monday": [ 21, 24, 26, 28 ],
            "tuesday": [ 3, 26, 28, 1 ],
            "wednesday": [ 5, 28, 1, 7 ],
            "thursday": [ 6, 29, 2, 8 ],
            "saturday": [ 18, 22, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 321,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=881566183/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://strut.bandcamp.com/album/nigeria-70-the-definitive-lp-edition',
          a_string: 'Nigeria 70 - The Definitive LP Edition by Various Artists',
          rule: {
            "monday": [ 18, 22, 24, 28 ],
            "tuesday": [ 21, 24, 26, 28 ],
            "wednesday": [ 3, 26, 28, 1 ],
            "thursday": [ 5, 28, 1, 7 ],
            "saturday": [ 6, 29, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 322,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3765181054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ralphiiereese.bandcamp.com/album/bladesylvania-shafara-tyl-fania',
          a_string: 'BLADESYLVANIA [shafara(tyl)fania] by Ralphiie Reese',
          rule: {
            "monday": [ 7, 1, 3, 9 ],
            "tuesday": [ 19, 23, 25, 29 ],
            "wednesday": [ 22, 25, 27, 29 ],
            "thursday": [ 4, 27, 29, 2 ],
            "saturday": [ 6, 29, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 323,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2511210461/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vinnyvindetta.bandcamp.com/album/marvolo',
          a_string: 'Marvolo by Vindetta',
          rule: {
            "monday": [ 6, 29, 2, 8 ],
            "tuesday": [ 7, 1, 3, 9 ],
            "wednesday": [ 19, 23, 25, 29 ],
            "thursday": [ 22, 25, 27, 29 ],
            "saturday": [ 4, 27, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 324,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1396139150/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marqspekt.bandcamp.com/album/da-buze-bruvaz-prezent-him-lo-giallo-point-oj-glovez',
          a_string: 'Da Buze Bruvaz Prezent Him Lo &amp; Giallo Point- OJ GLOVEZ by MarQ Spekt',
          rule: {
            "monday": [ 4, 27, 29, 2 ],
            "tuesday": [ 6, 29, 2, 8 ],
            "wednesday": [ 7, 1, 3, 9 ],
            "thursday": [ 19, 23, 25, 29 ],
            "saturday": [ 22, 25, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 325,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1471531867/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://belowsystem.bandcamp.com/album/keys-2-kazi',
          a_string: 'Keys 2 Kazi by C Keys &amp; Kazi',
          rule: {
            "monday": [ 22, 25, 27, 29 ],
            "tuesday": [ 4, 27, 29, 2 ],
            "wednesday": [ 6, 29, 2, 8 ],
            "thursday": [ 7, 1, 3, 9 ],
            "saturday": [ 19, 23, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 326,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1808584218/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thedoppelgangaz.bandcamp.com/album/g-pack-vol-1',
          a_string: 'G Pack, Vol. 1 by The Doppelgangaz',
          rule: {
            "monday": [ 19, 23, 25, 29 ],
            "tuesday": [ 22, 25, 27, 29 ],
            "wednesday": [ 4, 27, 29, 2 ],
            "thursday": [ 6, 29, 2, 8 ],
            "saturday": [ 7, 1, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 327,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2220823522/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://belowsystem.bandcamp.com/album/long-story-short',
          a_string: 'Long Story Short by Eto &amp; Superior',
          rule: {
            "monday": [ 7, 1, 3, 9 ],
            "tuesday": [ 19, 23, 25, 29 ],
            "wednesday": [ 22, 25, 27, 29 ],
            "thursday": [ 4, 27, 29, 2 ],
            "saturday": [ 6, 29, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 328,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3946879309/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carltonjumelsmith.bandcamp.com/album/1634-lexington-ave',
          a_string: '1634 Lexington Ave. by Carlton Jumel Smith',
          rule: {
            "monday": [ 6, 29, 2, 8 ],
            "tuesday": [ 7, 1, 3, 9 ],
            "wednesday": [ 19, 23, 25, 29 ],
            "thursday": [ 22, 25, 27, 29 ],
            "saturday": [ 4, 27, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 329,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2959528128/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tonymomrelle.bandcamp.com/album/best-is-yet-to-come',
          a_string: 'Best Is Yet To Come by Tony Momrelle',
          rule: {
            "monday": [ 5, 28, 1, 3 ],
            "tuesday": [ 7, 1, 3, 9 ],
            "wednesday": [ 8, 2, 4, 10 ],
            "thursday": [ 20, 24, 26, 1 ],
            "saturday": [ 23, 26, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 330,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1717636897/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://honeycombmusic.bandcamp.com/album/epiphany',
          a_string: 'Epiphany by Janine Lyons',
          rule: {
            "monday": [ 23, 26, 28, 1 ],
            "tuesday": [ 5, 28, 1, 3 ],
            "wednesday": [ 7, 1, 3, 9 ],
            "thursday": [ 8, 2, 4, 10 ],
            "saturday": [ 20, 24, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 331,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=578691161/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shungujazz.bandcamp.com/album/the-capricorn-tape',
          a_string: 'The Capricorn Tape by ShunGu',
          rule: {
            "monday": [ 20, 24, 26, 1 ],
            "tuesday": [ 23, 26, 28, 1 ],
            "wednesday": [ 5, 28, 1, 3 ],
            "thursday": [ 7, 1, 3, 9 ],
            "saturday": [ 8, 2, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 332,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4091308198/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shungujazz.bandcamp.com/album/mylost-rmx-vol-1',
          a_string: 'mylost_rmx Vol.1 by ShunGu',
          rule: {
            "monday": [ 8, 2, 4, 10 ],
            "tuesday": [ 20, 24, 26, 1 ],
            "wednesday": [ 23, 26, 28, 1 ],
            "thursday": [ 5, 28, 1, 3 ],
            "saturday": [ 7, 1, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 333,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4009066981/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cosmic-compositions.bandcamp.com/album/all-i-do',
          a_string: 'All I Do by ShunGu',
          rule: {
            "monday": [ 7, 1, 3, 9 ],
            "tuesday": [ 8, 2, 4, 10 ],
            "wednesday": [ 20, 24, 26, 1 ],
            "thursday": [ 23, 26, 28, 1 ],
            "saturday": [ 5, 28, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 334,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1436528188/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sebakaapstad.bandcamp.com/album/thina',
          a_string: 'Thina by Seba Kaapstad',
          rule: {
            "monday": [ 5, 28, 1, 3 ],
            "tuesday": [ 7, 1, 3, 9 ],
            "wednesday": [ 8, 2, 4, 10 ],
            "thursday": [ 20, 24, 26, 1 ],
            "saturday": [ 23, 26, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 335,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1331584569/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jeremyxxjones.bandcamp.com/album/late-bloomer',
          a_string: 'Late Bloomer by Jeremy Jones',
          rule: {
            "monday": [ 23, 26, 28, 1 ],
            "tuesday": [ 5, 28, 1, 3 ],
            "wednesday": [ 7, 1, 3, 9 ],
            "thursday": [ 8, 2, 4, 10 ],
            "saturday": [ 20, 24, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 336,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1545247401/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chechedrame.bandcamp.com/album/mogoya',
          a_string: 'Mogoya by Cheché Dramé',
          rule: {
            "monday": [ 21, 25, 27, 2 ],
            "tuesday": [ 24, 27, 29, 2 ],
            "wednesday": [ 6, 29, 2, 4 ],
            "thursday": [ 8, 2, 4, 10 ],
            "saturday": [ 9, 3, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 337,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1568470735/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethnicheritageensemble.bandcamp.com/album/be-known-ancient-future-music',
          a_string: 'Be Known Ancient/Future/Music by ETHNIC HERITAGE ENSEMBLE',
          rule: {
            "monday": [ 9, 3, 5, 11 ],
            "tuesday": [ 21, 25, 27, 2 ],
            "wednesday": [ 24, 27, 29, 2 ],
            "thursday": [ 6, 29, 2, 4 ],
            "saturday": [ 8, 2, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 338,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'zhttps://bandcamp.com/EmbeddedPlayer/album=1214601129/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://heemstogied.bandcamp.com/album/the-definition-of-pimpin',
          a_string: 'The Definition of Pimpin&#39; by Heem Stogied x Nicholas Craven x Tha God Fahim',
          rule: {
            "monday": [ 8, 2, 4, 10 ],
            "tuesday": [ 9, 3, 5, 11 ],
            "wednesday": [ 21, 25, 27, 2 ],
            "thursday": [ 24, 27, 29, 2 ],
            "saturday": [ 6, 29, 2, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 339,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=909592122/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://heemstogied.bandcamp.com/album/loss-prevention-ep',
          a_string: 'Loss Prevention EP by Heem Stogied x Bozack Morris',
          rule: {
            "monday": [ 6, 29, 2, 4 ],
            "tuesday": [ 8, 2, 4, 10 ],
            "wednesday": [ 9, 3, 5, 11 ],
            "thursday": [ 21, 25, 27, 2 ],
            "saturday": [ 24, 27, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 340,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=551714274/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://streetcornermusic.bandcamp.com/album/big-shoes',
          a_string: 'Big Shoes by Big Tone + House Shoes',
          rule: {
            "monday": [ 24, 27, 29, 2 ],
            "tuesday": [ 6, 29, 2, 4 ],
            "wednesday": [ 8, 2, 4, 10 ],
            "thursday": [ 9, 3, 5, 11 ],
            "saturday": [ 21, 25, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 341,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4171890148/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chenoir.bandcamp.com/album/the-thrill-of-the-hunt-2',
          a_string: 'The Thrill Of The Hunt 2 by Che` Noir',
          rule: {
            "monday": [ 21, 25, 27, 2 ],
            "tuesday": [ 24, 27, 29, 2 ],
            "wednesday": [ 6, 29, 2, 4 ],
            "thursday": [ 8, 2, 4, 10 ],
            "saturday": [ 9, 3, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 342,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2453469168/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chongwizard.bandcamp.com/album/the-soul-stone',
          a_string: 'The Soul Stone by Chong Wizard',
          rule: {
            "monday": [ 9, 3, 5, 11 ],
            "tuesday": [ 21, 25, 27, 2 ],
            "wednesday": [ 24, 27, 29, 2 ],
            "thursday": [ 6, 29, 2, 4 ],
            "saturday": [ 8, 2, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 343,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2957344749/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mrdibiase.bandcamp.com/album/bonus-levels',
          a_string: 'Bonus Levels by DIBIA$E',
          rule: {
            "monday": [ 9, 3, 5, 11 ],
            "tuesday": [ 10, 4, 6, 12 ],
            "wednesday": [ 22, 26, 28, 3 ],
            "thursday": [ 25, 28, 1, 3 ],
            "saturday": [ 7, 1, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 344,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1464850037/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://belowsystem.bandcamp.com/album/the-summer-ep',
          a_string: 'The Summer EP by The Good People',
          rule: {
            "monday": [ 7, 1, 3, 5 ],
            "tuesday": [ 9, 3, 5, 11 ],
            "wednesday": [ 10, 4, 6, 12 ],
            "thursday": [ 22, 26, 28, 3 ],
            "saturday": [ 25, 28, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 345,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3315059735/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://liquidbeat.bandcamp.com/album/eternal-ridin',
          a_string: 'Eternal Ridin&#39; by Libretto &amp; Buscrates',
          rule: {
            "monday": [ 25, 28, 1, 3 ],
            "tuesday": [ 7, 1, 3, 5 ],
            "wednesday": [ 9, 3, 5, 11 ],
            "thursday": [ 10, 4, 6, 12 ],
            "saturday": [ 22, 26, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 346,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1742530095/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://donwill.bandcamp.com/album/one-word-no-space',
          a_string: 'One Word No Space by Donwill',
          rule: {
            "monday": [ 22, 26, 28, 3 ],
            "tuesday": [ 25, 28, 1, 3 ],
            "wednesday": [ 7, 1, 3, 5 ],
            "thursday": [ 9, 3, 5, 11 ],
            "saturday": [ 10, 4, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 347,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2795287999/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://g4jag.bandcamp.com/album/nothing-was-given',
          a_string: 'NOTHING WAS GIVEN by G4 JAG',
          rule: {
            "monday": [ 10, 4, 6, 12 ],
            "tuesday": [ 22, 26, 28, 3 ],
            "wednesday": [ 25, 28, 1, 3 ],
            "thursday": [ 7, 1, 3, 5 ],
            "saturday": [ 9, 3, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 348,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3004169661/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://huskingpin.bandcamp.com/album/slime-wave',
          a_string: 'SLIME WAVE by Hus &quot;Wavo&quot; Kingpin',
          rule: {
            "monday": [ 9, 3, 5, 11 ],
            "tuesday": [ 10, 4, 6, 12 ],
            "wednesday": [ 22, 26, 28, 3 ],
            "thursday": [ 25, 28, 1, 3 ],
            "saturday": [ 7, 1, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 349,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3893869606/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mmg-koolkeith.bandcamp.com/album/keith',
          a_string: 'KEITH by Kool Keith',
          rule: {
            "monday": [ 7, 1, 3, 5 ],
            "tuesday": [ 9, 3, 5, 11 ],
            "wednesday": [ 10, 4, 6, 12 ],
            "thursday": [ 22, 26, 28, 3 ],
            "saturday": [ 25, 28, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 350,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3975457878/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mikelikesrap.bandcamp.com/album/tears-of-joy',
          a_string: 'tears of joy by MIKE',
          rule: {
            "monday": [ 26, 29, 2, 4 ],
            "tuesday": [ 8, 2, 4, 6 ],
            "wednesday": [ 10, 4, 6, 12 ],
            "thursday": [ 11, 5, 7, 13 ],
            "saturday": [ 23, 27, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 351,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2262284524/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://exqomaniarules.bandcamp.com/album/mr-muthafuckin-exquire',
          a_string: 'Mr. Muthafuckin&#39; eXquire by Mr. Muthafuckin&#39; eXquire',
          rule: {
            "monday": [ 23, 27, 29, 4 ],
            "tuesday": [ 26, 29, 2, 4 ],
            "wednesday": [ 8, 2, 4, 6 ],
            "thursday": [ 10, 4, 6, 12 ],
            "saturday": [ 11, 5, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 352,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2391517232/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gabenandez.bandcamp.com/album/diplomacy',
          a_string: 'Diplomacy by Gabe &#39;Nandez',
          rule: {
            "monday": [ 11, 5, 7, 13 ],
            "tuesday": [ 23, 27, 29, 4 ],
            "wednesday": [ 26, 29, 2, 4 ],
            "thursday": [ 8, 2, 4, 6 ],
            "saturday": [ 10, 4, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 353,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3064579532/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nickelusf.bandcamp.com/album/the-gold-mine-vol-1',
          a_string: 'THE GOLD MINE VOL 1. by NICKELUS F',
          rule: {
            "monday": [ 10, 4, 6, 12 ],
            "tuesday": [ 11, 5, 7, 13 ],
            "wednesday": [ 23, 27, 29, 4 ],
            "thursday": [ 26, 29, 2, 4 ],
            "saturday": [ 8, 2, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 354,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1332488496/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://seaniet.bandcamp.com/album/ruff-rugged-and-smooth',
          a_string: 'Ruff, Rugged and Smooth by Seanie T',
          rule: {
            "monday": [ 8, 2, 4, 6 ],
            "tuesday": [ 10, 4, 6, 12 ],
            "wednesday": [ 11, 5, 7, 13 ],
            "thursday": [ 23, 27, 29, 4 ],
            "saturday": [ 26, 29, 2, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 355,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3876962553/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teneshathewordsmith.bandcamp.com/album/peacocks-and-other-savage-beasts',
          a_string: 'Peacocks and Other Savage Beasts by Tenesha The WordSmith',
          rule: {
            "monday": [ 26, 29, 2, 4 ],
            "tuesday": [ 8, 2, 4, 6 ],
            "wednesday": [ 10, 4, 6, 12 ],
            "thursday": [ 11, 5, 7, 13 ],
            "saturday": [ 23, 27, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 356,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=439977032/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teneshathewordsmith.bandcamp.com/album/body-of-work',
          a_string: 'Body Of Work by Tenesha The WordSmith',
          rule: {
            "monday": [ 23, 27, 29, 4 ],
            "tuesday": [ 26, 29, 2, 4 ],
            "wednesday": [ 8, 2, 4, 6 ],
            "thursday": [ 10, 4, 6, 12 ],
            "saturday": [ 11, 5, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 357,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=430430275/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teneshathewordsmith.bandcamp.com/album/madea-dangerous-women',
          a_string: 'Madea/Dangerous Women by Tenesha The WordSmith',
          rule: {
            "monday": [ 12, 6, 8, 14 ],
            "tuesday": [ 24, 28, 1, 5 ],
            "wednesday": [ 27, 1, 3, 5 ],
            "thursday": [ 9, 3, 5, 7 ],
            "saturday": [ 11, 5, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 358,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4255505609/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nathanielstar.bandcamp.com/album/bush-master',
          a_string: 'Bush Master by Nathaniel Star',
          rule: {
            "monday": [ 11, 5, 7, 13 ],
            "tuesday": [ 12, 6, 8, 14 ],
            "wednesday": [ 24, 28, 1, 5 ],
            "thursday": [ 27, 1, 3, 5 ],
            "saturday": [ 9, 3, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 359,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3033941592/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://indigoasaa.bandcamp.com/album/bloom',
          a_string: 'Bloom by Indigo Asaá',
          rule: {
            "monday": [ 10, 4, 6, 8 ],
            "tuesday": [ 12, 6, 8, 14 ],
            "wednesday": [ 13, 7, 9, 15 ],
            "thursday": [ 25, 29, 2, 6 ],
            "saturday": [ 28, 2, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 360,
          user_id: 1,
          theme: 'Black History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=857076982/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://qraqim.bandcamp.com/album/days-til-nevvvaland',
          a_string: 'Days Til NevvvaLand by Q Raqim',
          rule: {
            "monday": [ 28, 2, 4, 6 ],
            "tuesday": [ 10, 4, 6, 8 ],
            "wednesday": [ 12, 6, 8, 14 ],
            "thursday": [ 13, 7, 9, 15 ],
            "saturday": [ 25, 29, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('february_musics_id_seq', (SELECT MAX(id) FROM february_musics));");
    });
};
