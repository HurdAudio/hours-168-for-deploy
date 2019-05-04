'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('september_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('september_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=708679432/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sleepingpeople.bandcamp.com/album/growing',
          a_string: 'Growing by Sleeping People',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 2, 22, 30, 24 ],
            "thursday": [ 1, 21, 29, 23 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1244104386/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bsmrocks.bandcamp.com/album/infinity-overhead',
          a_string: 'Infinity Overhead by Minus The Bear',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 3, 23, 1, 25 ],
            "thursday": [ 2, 22, 30, 24 ],
            "saturday": [ 1, 21, 29, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2502661337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hella.bandcamp.com/album/tripper',
          a_string: 'Tripper by Hella',
          rule: {
            "monday": [ 1, 21, 29, 23 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 3, 23, 1, 25 ],
            "saturday": [ 2, 22, 30, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2048046098/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://artbears.bandcamp.com/album/revisited',
          a_string: 'revisited by Art Bears',
          rule: {
            "monday": [ 2, 22, 30, 24 ],
            "tuesday": [ 1, 21, 29, 23 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 3, 23, 1, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1761798674/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beak.bandcamp.com/album/recordings-05-01-09-17-01-09',
          a_string: 'Recordings 05/01/09 &gt; 17/01/09 by BEAK&gt;',
          rule: {
            "monday": [ 3, 23, 1, 25 ],
            "tuesday": [ 2, 22, 30, 24 ],
            "wednesday": [ 1, 21, 29, 23 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1702491211/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://silentisland.bandcamp.com/album/re-quator',
          a_string: 'Re-quator by Silent Island',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 2, 22, 30, 24 ],
            "thursday": [ 1, 21, 29, 23 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3338847054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://doncaballero.bandcamp.com/album/punkgasm',
          a_string: 'Punkgasm by Don Caballero',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 3, 23, 1, 25 ],
            "saturday": [ 2, 22, 30, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=627033204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thistownneedsguns.bandcamp.com/album/this-town-needs-guns',
          a_string: 'This Town Needs Guns by TTNG',
          rule: {
            "monday": [ 2, 22, 30, 24 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 3, 23, 1, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3585669366/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teramelos.bandcamp.com/album/drugs-complex',
          a_string: 'Drugs / Complex by Tera Melos',
          rule: {
            "monday": [ 3, 23, 1, 25 ],
            "tuesday": [ 2, 22, 30, 24 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2840280732/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stickmen-moonjune.bandcamp.com/album/roppongi',
          a_string: 'Roppongi by Stick Men featuring Mel Collins',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 2, 22, 30, 24 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=297370005/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vattnet.bandcamp.com/album/vattnet',
          a_string: 'Vattnet by Vattnet',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 3, 23, 1, 25 ],
            "thursday": [ 2, 22, 30, 24 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=911440374/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://electricorange.bandcamp.com/album/eoxxv',
          a_string: 'EOXXV by electric orange',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 3, 23, 1, 25 ],
            "saturday": [ 2, 22, 30, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2282624741/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jackotheclock.bandcamp.com/album/night-loops',
          a_string: 'Night Loops by Jack O&#39; The Clock',
          rule: {
            "monday": [ 2, 22, 30, 24 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 3, 23, 1, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=514041149/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bentknee.bandcamp.com/album/shiny-eyed-babies',
          a_string: 'Shiny Eyed Babies by Bent Knee',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2259312047/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://benlevingroup.bandcamp.com/album/freak-machine',
          a_string: 'Freak Machine by Ben Levin Group',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 3, 23, 1, 25 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4141035187/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teramelos.bandcamp.com/album/trash-generator',
          a_string: 'Trash Generator by Tera Melos',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 3, 23, 1, 25 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2727139504/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vesselsband.bandcamp.com/album/the-great-distraction',
          a_string: 'The Great Distraction by Vessels',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 3, 23, 1, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2517781939/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://totorro.bandcamp.com/album/come-to-mexico',
          a_string: 'Come To Mexico by Totorro',
          rule: {
            "monday": [ 3, 23, 1, 25 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2895599953/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jackotheclock.bandcamp.com/album/repetitions-of-the-old-city-i',
          a_string: 'Repetitions of the Old City - I by Jack O&#39; The Clock',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3005376859/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bigbigtrain.bandcamp.com/album/grimspound-hi-resolution-audio',
          a_string: 'Grimspound (hi resolution audio) by Big Big Train',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 3, 23, 1, 25 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1395941753/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soen-sweden.bandcamp.com/album/lykaia',
          a_string: 'Lykaia by Soen',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2976713978/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beak.bandcamp.com/album/beak-2',
          a_string: 'BEAK&gt;&gt; by BEAK&gt;',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3926561595/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://drokk.bandcamp.com/album/drokk-music-inspired-by-mega-city-one',
          a_string: 'Drokk: Music inspired by Mega-City One by Geoff Barrow and Ben Salisbury',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2753656719/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://goldenteacher.bandcamp.com/album/bells-from-the-deep-end',
          a_string: 'Bells From The Deep End by Golden Teacher',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3152595739/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://toe-music.bandcamp.com/album/hear-you',
          a_string: 'Hear You by toe',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1026932213/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thistownneedsguns.bandcamp.com/album/disappointment-island',
          a_string: 'Disappointment Island by TTNG',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3691745907/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://covetband.bandcamp.com/album/currents-ep',
          a_string: 'Currents EP by covet',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2796246848/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beholdtheelder.bandcamp.com/album/reflections-of-a-floating-world',
          a_string: 'Reflections of a Floating World by Elder',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4268244820/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://profoundlorerecords.bandcamp.com/album/heartless',
          a_string: 'Heartless by PALLBEARER',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1016358289/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://exeyeband.bandcamp.com/album/ex-eye',
          a_string: 'Ex Eye by Ex Eye',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=119402848/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jackotheclock.bandcamp.com/album/outsider-songs',
          a_string: 'Outsider Songs by Jack O&#39; The Clock',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3882342693/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wayfaringstrangers.bandcamp.com/album/warfaring-strangers-acid-nightmares',
          a_string: 'Warfaring Strangers: Acid Nightmares by Wayfaring Strangers',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1686039003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://flowersmustdie.bandcamp.com/album/kompost',
          a_string: 'Kompost by Flowers Must Die',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1583846915/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://twinponies.bandcamp.com/album/twin-ponies',
          a_string: 'Twin Ponies by Twin Ponies',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2535733799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://horselords.bandcamp.com/album/hidden-cities',
          a_string: 'Hidden Cities by Horse Lords',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2738203020/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://guerillatoss.bandcamp.com/album/eraser-stargazer',
          a_string: 'Eraser Stargazer by Guerilla Toss',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3191779155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://plini.bandcamp.com/album/sweet-nothings',
          a_string: 'Sweet Nothings by Plini',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4132332380/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intervalsmusic.bandcamp.com/album/the-shape-of-colour',
          a_string: 'The Shape of Colour by Intervals',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2544212106/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://plini.bandcamp.com/album/handmade-cities',
          a_string: 'Handmade Cities by Plini',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1540001085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vasudeva.bandcamp.com/album/no-clearance',
          a_string: 'No Clearance by Vasudeva',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2333766195/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tideedit.bandcamp.com/album/foreign-languages',
          a_string: 'Foreign Languages by tide/edit',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2432964530/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomsstory.bandcamp.com/album/toms-story',
          a_string: 'Tom&#39;s Story by Tom&#39;s Story',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2801189383/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lasersedge.bandcamp.com/album/agusa',
          a_string: 'Agusa by Agusa',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3884739943/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hooffoot.bandcamp.com/album/hooffoot',
          a_string: 'Hooffoot by Hooffoot',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3774446051/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amplifier.bandcamp.com/album/trippin-with-dr-faustus',
          a_string: 'Trippin&#39; With Dr. Faustus by Amplifier',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=789325349/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dtes.bandcamp.com/album/hereticsHeretics by Dream the Electric Sleep',
          a_string: '',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2970790357/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnlancaster.bandcamp.com/album/phantom-moon',
          a_string: 'Phantom Moon by John Lancaster',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2755053974/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://knifeworld.bandcamp.com/album/buried-alone-tales-of-crushing-defeat',
          a_string: 'Buried Alone: Tales Of Crushing Defeat by Knifeworld',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2383623109/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mathcoreindex.bandcamp.com/album/volume-4',
          a_string: 'Volume 4 by Mathcore Index',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1485278688/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://flatearthsocietyuk.com/album/sleep-less',
          a_string: 'Sleep Less by FES // Exploder',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=265922236/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thespeedofsoundinseawater.bandcamp.com/album/first-contact',
          a_string: 'First Contact by The Speed of Sound in Seawater',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3972089070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://seriousbeak.bandcamp.com/album/ankaa',
          a_string: 'Ankaa by Serious Beak',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=483534004/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hashshashin.bandcamp.com/album/nihsahshsah',
          a_string: 'nihsahshsaH by Hashshashin',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2860962436/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://downloads.webofmimicry.com/album/the-system-of-antichrist-bereshith',
          a_string: 'THE SYSTEM OF ANTICHRIST / Bereshith by Secret Chiefs 3',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3261200053/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kiln-audio.bandcamp.com/album/ampday',
          a_string: 'Ampday by KILN',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2712720927/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teramelos.bandcamp.com/album/zoo-weather',
          a_string: 'Zoo Weather by Tera Melos',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1240266293/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bygones.bandcamp.com/album/by',
          a_string: 'by- by bygones',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2506291823/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://invalids.bandcamp.com/album/eunoia-2',
          a_string: 'Eunoia by Invalids',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1641112215/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://birdsurgeon.bandcamp.com/album/vanishings',
          a_string: 'Vanishings by Bird Surgeon',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1408460894/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://invalids.bandcamp.com/album/strengths',
          a_string: 'Strengths by Invalids',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1179762531/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://artascatharsis.bandcamp.com/album/3',
          a_string: '3 by SEIMS',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=643374385/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://protestthehero.bandcamp.com/album/volition-instrumental',
          a_string: 'Volition (Instrumental) by Protest the Hero',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3662930337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://moebiusmetal.bandcamp.com/album/hybris',
          a_string: 'Hybris by Moebius',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3191779155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://plini.bandcamp.com/album/sweet-nothings',
          a_string: 'Sweet Nothings by Plini',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4132332380/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intervalsmusic.bandcamp.com/album/the-shape-of-colour',
          a_string: 'The Shape of Colour by Intervals',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=97896603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://polarisaus.bandcamp.com/album/the-mortal-coil',
          a_string: 'The Mortal Coil by Polaris',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1254800922/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hella.bandcamp.com/album/church-gone-wild-chirpin-hard',
          a_string: 'Church Gone Wild/Chirpin Hard by Hella',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=594277877/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zachhill.bandcamp.com/album/face-tat',
          a_string: 'FACE TAT by Zach Hill',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3472867358/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teramelos.bandcamp.com/album/patagonian-rats',
          a_string: 'Patagonian Rats by Tera Melos',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4211984975/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mildhighclub.bandcamp.com/album/skiptracing',
          a_string: 'Skiptracing by Mild High Club',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 15, 5, 13, 7 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1937278011/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pontiak.bandcamp.com/album/living',
          a_string: 'Living by Pontiak',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 15, 5, 13, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=953164322/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dustrider.bandcamp.com/album/event-horizon',
          a_string: 'Event Horizon by Dustrider',
          rule: {
            "monday": [ 15, 5, 13, 7 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3540716909/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cleft.bandcamp.com/album/whale-bone',
          a_string: 'Whale Bone by Cleft',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 15, 5, 13, 7 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1381174505/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vasquez.bandcamp.com/album/ep426',
          a_string: 'EP426 by VASQUEZ',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 15, 5, 13, 7 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=215104950/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cleft.bandcamp.com/album/bosh',
          a_string: 'BOSH! by Cleft',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 15, 5, 13, 7 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3425333302/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leftysdeceiver.bandcamp.com/album/ld101',
          a_string: 'LD101 by Lefty&#39;s Deceiver',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 15, 5, 13, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2297540464/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dentapes.bandcamp.com/album/im-wigging-out-but-i-feel-patient',
          a_string: 'I&#39;m Wigging Out But I Feel Patient by Gabriel Delicious',
          rule: {
            "monday": [ 16, 6, 14, 8 ],
            "tuesday": [ 15, 5, 13, 7 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=432676080/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dentapes.bandcamp.com/album/dusty',
          a_string: 'Dusty by Dusty',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 16, 6, 14, 8 ],
            "wednesday": [ 15, 5, 13, 7 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2773548801/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://direwolves-slr.bandcamp.com/album/earthquake-country',
          a_string: 'Earthquake Country by Dire Wolves (Just Exactly Perfect Sisters Band)',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 16, 6, 14, 8 ],
            "thursday": [ 15, 5, 13, 7 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1515583213/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://planktonwat-slr.bandcamp.com/album/hidden-path',
          a_string: 'Hidden Path by Plankton Wat',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 16, 6, 14, 8 ],
            "saturday": [ 15, 5, 13, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=920816937/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thehatchet.bandcamp.com/album/planetary-space-child',
          a_string: 'PLANETARY SPACE CHILD by RUBY THE HATCHET',
          rule: {
            "monday": [ 15, 5, 13, 7 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 16, 6, 14, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1361123475/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://piglet.bandcamp.com/album/lava-land',
          a_string: 'lava land by piglet',
          rule: {
            "monday": [ 16, 6, 14, 8 ],
            "tuesday": [ 15, 5, 13, 7 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1476472941/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sawce.bandcamp.com/album/sawce-ep',
          a_string: 'SAWCE EP by SAWCE',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 16, 6, 14, 8 ],
            "wednesday": [ 15, 5, 13, 7 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=552970852/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fesband.bandcamp.com/album/you-do-you',
          a_string: 'You Do You by FES',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 17, 7, 15, 9 ],
            "thursday": [ 16, 6, 14, 8 ],
            "saturday": [ 15, 5, 13, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1594680436/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wildthrone.bandcamp.com/album/blood-maker',
          a_string: 'Blood Maker by Wild Throne',
          rule: {
            "monday": [ 15, 5, 13, 8 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 17, 7, 15, 9 ],
            "saturday": [ 16, 6, 14, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2469060273/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mmim.bandcamp.com/album/dork-soul',
          a_string: 'Dork Soul by meet me in montauk',
          rule: {
            "monday": [ 16, 6, 14, 8 ],
            "tuesday": [ 15, 5, 13, 8 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 17, 7, 15, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2893156702/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://realsportsboys.bandcamp.com/album/demon-daze',
          a_string: 'demon daze by sports.',
          rule: {
            "monday": [ 17, 7, 15, 9 ],
            "tuesday": [ 16, 6, 14, 8 ],
            "wednesday": [ 15, 5, 13, 8 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=593645822/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mammothprog.bandcamp.com/album/progenies-2012-2016-compilation',
          a_string: 'Progenies (2012-2016 Compilation) by Mammoth',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 17, 7, 15, 9 ],
            "wednesday": [ 16, 6, 14, 8 ],
            "thursday": [ 15, 5, 13, 8 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=465682061/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mammothprog.bandcamp.com/album/deviations',
          a_string: 'Deviations by Mammoth',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 17, 7, 15, 9 ],
            "thursday": [ 16, 6, 14, 8 ],
            "saturday": [ 15, 5, 13, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3031709378/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mammothprog.bandcamp.com/album/innate',
          a_string: 'Innate by Mammoth',
          rule: {
            "monday": [ 15, 5, 13, 8 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 17, 7, 15, 9 ],
            "saturday": [ 16, 6, 14, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=288637167/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://psychiclemon.bandcamp.com/album/frequency-rhythm-distortion-delay',
          a_string: 'Frequency Rhythm Distortion Delay by Psychic Lemon',
          rule: {
            "monday": [ 17, 7, 15, 9 ],
            "tuesday": [ 16, 6, 14, 9 ],
            "wednesday": [ 15, 5, 13, 7 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 18, 8, 16, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1732794380/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://psychiclemon.bandcamp.com/album/psychic-lemon',
          a_string: 'Psychic Lemon by Psychic Lemon',
          rule: {
            "monday": [ 18, 8, 16, 10 ],
            "tuesday": [ 17, 7, 15, 9 ],
            "wednesday": [ 16, 6, 14, 9 ],
            "thursday": [ 15, 5, 13, 7 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3900460578/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sleepingpeople.bandcamp.com/album/sleeping-people',
          a_string: 'Sleeping People by Sleeping People',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 18, 8, 16, 10 ],
            "wednesday": [ 17, 7, 15, 9 ],
            "thursday": [ 16, 6, 14, 9 ],
            "saturday": [ 15, 5, 13, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=145764687/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hella.bandcamp.com/album/theres-no-666-in-outer-space',
          a_string: 'There&#39;s No 666 In Outer Space by Hella',
          rule: {
            "monday": [ 15, 5, 13, 7 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 18, 8, 16, 10 ],
            "thursday": [ 17, 7, 15, 9 ],
            "saturday": [ 16, 6, 14, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=399891782/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nometal.bandcamp.com/album/ours',
          a_string: 'ours by no metal in this battle',
          rule: {
            "monday": [ 16, 6, 14, 9 ],
            "tuesday": [ 15, 5, 13, 7 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 18, 8, 16, 10 ],
            "saturday": [ 17, 7, 15, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2355000521/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://perudo.bandcamp.com/album/2008-2012',
          a_string: '#2008-2012# by perudo beats',
          rule: {
            "monday": [ 17, 7, 15, 9 ],
            "tuesday": [ 16, 6, 14, 9 ],
            "wednesday": [ 15, 5, 13, 7 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 18, 8, 16, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2784776990/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://galahad1.bandcamp.com/album/seas-of-change',
          a_string: 'Seas of Change by GALAHAD',
          rule: {
            "monday": [ 18, 8, 16, 10 ],
            "tuesday": [ 17, 7, 15, 9 ],
            "wednesday": [ 16, 6, 14, 9 ],
            "thursday": [ 15, 5, 13, 7 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3741607037/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://silentisland.bandcamp.com/album/equator',
          a_string: 'Equator by Silent Island',
          rule: {
            "monday": [ 15, 5, 13, 7 ],
            "tuesday": [ 19, 9, 17, 11 ],
            "wednesday": [ 18, 8, 16, 10 ],
            "thursday": [ 17, 7, 15, 10 ],
            "saturday": [ 16, 6, 14, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2271191775/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://silentisland.bandcamp.com/album/fall-of-oceans',
          a_string: 'Fall of Oceans by Silent Island',
          rule: {
            "monday": [ 16, 6, 14, 8 ],
            "tuesday": [ 15, 5, 13, 7 ],
            "wednesday": [ 19, 9, 17, 11 ],
            "thursday": [ 18, 8, 16, 10 ],
            "saturday": [ 17, 7, 15, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3922154208/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://diostrio.bandcamp.com/album/ii',
          a_string: 'II by dios trio',
          rule: {
            "monday": [ 17, 7, 15, 10 ],
            "tuesday": [ 16, 6, 14, 8 ],
            "wednesday": [ 15, 5, 13, 7 ],
            "thursday": [ 19, 9, 17, 11 ],
            "saturday": [ 18, 8, 16, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1579938297/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teramelos.bandcamp.com/album/untitled-album',
          a_string: '(untitled album) by Tera Melos',
          rule: {
            "monday": [ 18, 8, 16, 10 ],
            "tuesday": [ 17, 7, 15, 10 ],
            "wednesday": [ 16, 6, 14, 8 ],
            "thursday": [ 15, 5, 13, 7 ],
            "saturday": [ 19, 9, 17, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1372923139/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://superstardestroyer.co.uk/album/zero-worship',
          a_string: 'Zero Worship by Young Legionnaire',
          rule: {
            "monday": [ 19, 9, 17, 11 ],
            "tuesday": [ 18, 8, 16, 10 ],
            "wednesday": [ 17, 7, 15, 10 ],
            "thursday": [ 16, 6, 14, 8 ],
            "saturday": [ 15, 5, 13, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2164423763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://talkingpoints.bandcamp.com/album/superposition',
          a_string: 'Superposition by Talking Points',
          rule: {
            "monday": [ 15, 5, 13, 7 ],
            "tuesday": [ 19, 9, 17, 11 ],
            "wednesday": [ 18, 8, 16, 10 ],
            "thursday": [ 17, 7, 15, 10 ],
            "saturday": [ 16, 6, 14, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1840296483/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://talkingpoints.bandcamp.com/album/leonard',
          a_string: 'Leonard by Talking Points',
          rule: {
            "monday": [ 16, 6, 14, 8 ],
            "tuesday": [ 15, 5, 13, 7 ],
            "wednesday": [ 19, 9, 17, 11 ],
            "thursday": [ 18, 8, 16, 10 ],
            "saturday": [ 17, 7, 15, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3502005287/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://claudespeeedmu.bandcamp.com/album/infinity-ultra',
          a_string: 'Infinity Ultra by Claude Speeed',
          rule: {
            "monday": [ 18, 8, 16, 11 ],
            "tuesday": [ 17, 7, 15, 9 ],
            "wednesday": [ 16, 6, 14, 8 ],
            "thursday": [ 20, 10, 18, 12 ],
            "saturday": [ 19, 9, 17, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1858548923/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dialeto.bandcamp.com/album/bart-k-in-rock',
          a_string: 'Bartók in Rock by Dialeto',
          rule: {
            "monday": [ 19, 9, 17, 11 ],
            "tuesday": [ 18, 8, 16, 11 ],
            "wednesday": [ 17, 7, 15, 9 ],
            "thursday": [ 16, 6, 14, 8 ],
            "saturday": [ 20, 10, 18, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2061777484/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://progshinerecords.bandcamp.com/album/le-a-en-vivo',
          a_string: 'Leña!!! En Vivo by El Trio',
          rule: {
            "monday": [ 20, 10, 18, 12 ],
            "tuesday": [ 19, 9, 17, 11 ],
            "wednesday": [ 18, 8, 16, 11 ],
            "thursday": [ 17, 7, 15, 9 ],
            "saturday": [ 16, 6, 14, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3092253416/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rodrigosanmartin.bandcamp.com/album/the-veil-is-broken-iii-coming-of-age',
          a_string: 'The Veil is Broken III: Coming of Age by Rodrigo San Martín',
          rule: {
            "monday": [ 16, 6, 14, 8 ],
            "tuesday": [ 20, 10, 18, 12 ],
            "wednesday": [ 19, 9, 17, 11 ],
            "thursday": [ 18, 8, 16, 11 ],
            "saturday": [ 17, 7, 15, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3121522144/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hollowran.bandcamp.com/album/thanks-your-welcome',
          a_string: 'Thanks Your Welcome by Hollow Ran',
          rule: {
            "monday": [ 17, 7, 15, 9 ],
            "tuesday": [ 16, 6, 14, 8 ],
            "wednesday": [ 20, 10, 18, 12 ],
            "thursday": [ 19, 9, 17, 11 ],
            "saturday": [ 18, 8, 16, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3818773844/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://themostbandct.bandcamp.com/album/important-things',
          a_string: 'Important Things by The Most',
          rule: {
            "monday": [ 18, 8, 16, 11 ],
            "tuesday": [ 17, 7, 15, 9 ],
            "wednesday": [ 16, 6, 14, 8 ],
            "thursday": [ 20, 10, 18, 12 ],
            "saturday": [ 19, 9, 17, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=607442058/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whynona.bandcamp.com/album/ive-had-this-exact-dream-before',
          a_string: 'I&#39;ve Had This Exact Dream Before by Why Nona',
          rule: {
            "monday": [ 19, 9, 17, 11 ],
            "tuesday": [ 18, 8, 16, 11 ],
            "wednesday": [ 17, 7, 15, 9 ],
            "thursday": [ 16, 6, 14, 8 ],
            "saturday": [ 20, 10, 18, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=226157626/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elephant-gym.bandcamp.com/album/work',
          a_string: 'Work by Elephant Gym',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 20, 10, 18, 12 ],
            "wednesday": [ 19, 9, 17, 12 ],
            "thursday": [ 18, 8, 16, 10 ],
            "saturday": [ 17, 7, 15, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4131584606/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wobbler.bandcamp.com/album/from-silence-to-somewhere',
          a_string: 'From Silence to Somewhere by Wobbler',
          rule: {
            "monday": [ 17, 7, 15, 9 ],
            "tuesday": [ 21, 11, 19, 13 ],
            "wednesday": [ 20, 10, 18, 12 ],
            "thursday": [ 19, 9, 17, 12 ],
            "saturday": [ 18, 8, 16, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=881455537/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elephant-gym.bandcamp.com/album/angle',
          a_string: 'Angle by Elephant Gym',
          rule: {
            "monday": [ 18, 8, 16, 10 ],
            "tuesday": [ 17, 7, 15, 9 ],
            "wednesday": [ 21, 11, 19, 13 ],
            "thursday": [ 20, 10, 18, 12 ],
            "saturday": [ 19, 9, 17, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1541339509/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pianosbecometheteeth.bandcamp.com/album/wait-for-love',
          a_string: 'Wait For Love by Pianos Become The Teeth',
          rule: {
            "monday": [ 19, 9, 17, 12 ],
            "tuesday": [ 18, 8, 16, 10 ],
            "wednesday": [ 17, 7, 15, 9 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 20, 10, 18, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3408776844/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://welostthesea.bandcamp.com/album/departure-songs',
          a_string: 'Departure Songs by We Lost The Sea',
          rule: {
            "monday": [ 20, 10, 18, 12 ],
            "tuesday": [ 19, 9, 17, 12 ],
            "wednesday": [ 18, 8, 16, 10 ],
            "thursday": [ 17, 7, 15, 9 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=247730674/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://seasofyears.bandcamp.com/album/the-ever-shifting-fields',
          a_string: 'The Ever Shifting Fields by Seas of Years',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 20, 10, 18, 12 ],
            "wednesday": [ 19, 9, 17, 12 ],
            "thursday": [ 18, 8, 16, 10 ],
            "saturday": [ 17, 7, 15, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3024617518/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://progshinerecords.bandcamp.com/album/dveri-dveri',
          a_string: 'Dveri! Dveri! by Orgia Pravednikov',
          rule: {
            "monday": [ 17, 7, 15, 9 ],
            "tuesday": [ 21, 11, 19, 13 ],
            "wednesday": [ 20, 10, 18, 12 ],
            "thursday": [ 19, 9, 17, 12 ],
            "saturday": [ 18, 8, 16, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2087303390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://progshinerecords.bandcamp.com/album/oglashennyye-izydite',
          a_string: 'Oglashennyye Izydite by Orgia Pravednikov',
          rule: {
            "monday": [ 19, 9, 17, 11 ],
            "tuesday": [ 18, 8, 16, 10 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 20, 10, 18, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4039095505/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://progshinerecords.bandcamp.com/album/nigredo',
          a_string: 'Nigredo by Sergey Kalugin',
          rule: {
            "monday": [ 20, 10, 18, 13 ],
            "tuesday": [ 19, 9, 17, 11 ],
            "wednesday": [ 18, 8, 16, 10 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=33087511/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theeffects.bandcamp.com/album/eyes-to-the-light',
          a_string: 'Eyes to the Light by the EFFECTS',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 20, 10, 18, 13 ],
            "wednesday": [ 19, 9, 17, 11 ],
            "thursday": [ 18, 8, 16, 10 ],
            "saturday": [ 22, 12, 20, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=664087412/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fatherdaughterrecords.bandcamp.com/album/uncontrollable-salvation',
          a_string: 'Uncontrollable Salvation by Pardoner',
          rule: {
            "monday": [ 22, 12, 20, 14 ],
            "tuesday": [ 21, 11, 19, 13 ],
            "wednesday": [ 20, 10, 18, 13 ],
            "thursday": [ 19, 9, 17, 11 ],
            "saturday": [ 18, 8, 16, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1179407136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://perturbator.bandcamp.com/album/new-model',
          a_string: 'New Model by PERTURBATOR',
          rule: {
            "monday": [ 18, 8, 16, 10 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 21, 11, 19, 13 ],
            "thursday": [ 20, 10, 18, 13 ],
            "saturday": [ 19, 9, 17, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3475887367/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aquaserge.bandcamp.com/album/laisse-a-tre',
          a_string: 'laisse ça être by Aquaserge',
          rule: {
            "monday": [ 19, 9, 17, 11 ],
            "tuesday": [ 18, 8, 16, 10 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 20, 10, 18, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3373086101/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lasersedge.bandcamp.com/album/vision-and-ageless-light',
          a_string: 'Vision  And Ageless Light by Eye',
          rule: {
            "monday": [ 20, 10, 18, 13 ],
            "tuesday": [ 19, 9, 17, 11 ],
            "wednesday": [ 18, 8, 16, 10 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3577738478/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stabscotch.bandcamp.com/album/uncanny-valley',
          a_string: 'UNCANNY VALLEY by Stabscotch',
          rule: {
            "monday": [ 22, 12, 20, 14 ],
            "tuesday": [ 21, 11, 19, 14 ],
            "wednesday": [ 20, 10, 18, 12 ],
            "thursday": [ 19, 9, 17, 11 ],
            "saturday": [ 23, 13, 21, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3922754158/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aesthesys.bandcamp.com/album/achromata',
          a_string: 'Achromata by Aesthesys',
          rule: {
            "monday": [ 23, 13, 21, 15 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 21, 11, 19, 14 ],
            "thursday": [ 20, 10, 18, 12 ],
            "saturday": [ 19, 9, 17, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=45687775/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://haircutchi.bandcamp.com/album/sometimes-now',
          a_string: 'Sometimes Now by Haircut',
          rule: {
            "monday": [ 19, 9, 17, 11 ],
            "tuesday": [ 23, 13, 21, 15 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 21, 11, 19, 14 ],
            "saturday": [ 20, 10, 18, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3370563065/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://0robor0.bandcamp.com/album/laughing-death',
          a_string: 'Laughing Death by OroborO',
          rule: {
            "monday": [ 20, 10, 18, 12 ],
            "tuesday": [ 19, 9, 17, 11 ],
            "wednesday": [ 23, 13, 21, 15 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 21, 11, 19, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1913451900/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://moebius-official.bandcamp.com/album/blotch-remastered',
          a_string: 'Blotch (Remastered) by Moebius',
          rule: {
            "monday": [ 21, 11, 19, 14 ],
            "tuesday": [ 20, 10, 18, 12 ],
            "wednesday": [ 19, 9, 17, 11 ],
            "thursday": [ 23, 13, 21, 15 ],
            "saturday": [ 22, 12, 20, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3813390335/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://moebius-official.bandcamp.com/album/ding',
          a_string: 'Ding by Moebius',
          rule: {
            "monday": [ 22, 12, 20, 14 ],
            "tuesday": [ 21, 11, 19, 14 ],
            "wednesday": [ 20, 10, 18, 12 ],
            "thursday": [ 19, 9, 17, 11 ],
            "saturday": [ 23, 13, 21, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3015400796/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://moebius-official.bandcamp.com/album/kram',
          a_string: 'Kram by Moebius',
          rule: {
            "monday": [ 23, 13, 21, 15 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 21, 11, 19, 14 ],
            "thursday": [ 20, 10, 18, 12 ],
            "saturday": [ 19, 9, 17, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1760340805/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skingraftrecords.bandcamp.com/album/synchromysticism',
          a_string: 'Synchromysticism by Yowie',
          rule: {
            "monday": [ 20, 10, 18, 12 ],
            "tuesday": [ 24, 14, 22, 16 ],
            "wednesday": [ 23, 13, 21, 15 ],
            "thursday": [ 22, 12, 20, 15 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=890153798/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skingraftrecords.bandcamp.com/album/face-of-collapse-special-edition',
          a_string: 'Face of Collapse: Special Edition by Dazzling Killmen',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 20, 10, 18, 12 ],
            "wednesday": [ 24, 14, 22, 16 ],
            "thursday": [ 23, 13, 21, 15 ],
            "saturday": [ 22, 12, 20, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4130527482/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skingraftrecords.bandcamp.com/album/when-in-vanitas',
          a_string: 'When In Vanitas... by Brise-Glace',
          rule: {
            "monday": [ 22, 12, 20, 15 ],
            "tuesday": [ 21, 11, 19, 13 ],
            "wednesday": [ 20, 10, 18, 12 ],
            "thursday": [ 24, 14, 22, 16 ],
            "saturday": [ 23, 13, 21, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=489072169/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kuumusic1.bandcamp.com/album/q',
          a_string: 'Q by Kuu',
          rule: {
            "monday": [ 23, 13, 21, 15 ],
            "tuesday": [ 22, 12, 20, 15 ],
            "wednesday": [ 21, 11, 19, 13 ],
            "thursday": [ 20, 10, 18, 12 ],
            "saturday": [ 24, 14, 22, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3680401426/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://formulavee.bandcamp.com/album/three-songs',
          a_string: 'Three Songs by We Dragons',
          rule: {
            "monday": [ 24, 14, 22, 16 ],
            "tuesday": [ 23, 13, 21, 15 ],
            "wednesday": [ 22, 12, 20, 15 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 20, 10, 18, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2669357293/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://breakdownpanda.bandcamp.com/album/moronic-outbursts-2',
          a_string: 'Moronic Outbursts by BREAKDOWNPANDA',
          rule: {
            "monday": [ 20, 10, 18, 12 ],
            "tuesday": [ 24, 14, 22, 16 ],
            "wednesday": [ 23, 13, 21, 15 ],
            "thursday": [ 22, 12, 20, 15 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2995112499/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://instrumental-adj.bandcamp.com/album/a-series-of-disagreements',
          a_string: 'A Series Of Disagreements by Instrumental (adj.)',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 20, 10, 18, 12 ],
            "wednesday": [ 24, 14, 22, 16 ],
            "thursday": [ 23, 13, 21, 15 ],
            "saturday": [ 22, 12, 20, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1471590927/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://instrumental-adj.bandcamp.com/album/reductio-ad-absurdum',
          a_string: 'Reductio ad Absurdum by Instrumental (adj.)',
          rule: {
            "monday": [ 23, 13, 21, 16 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 21, 11, 19, 13 ],
            "thursday": [ 25, 15, 23, 17 ],
            "saturday": [ 24, 14, 22, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2657101561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://themercurytree.bandcamp.com/album/countenance',
          a_string: 'Countenance by The Mercury Tree',
          rule: {
            "monday": [ 24, 14, 22, 16 ],
            "tuesday": [ 23, 13, 21, 16 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 25, 15, 23, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1557122668/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://onlyloversrecords.bandcamp.com/album/polygondwanaland',
          a_string: 'Polygondwanaland by King Gizzard and the Lizard Wizard',
          rule: {
            "monday": [ 25, 15, 23, 17 ],
            "tuesday": [ 24, 14, 22, 16 ],
            "wednesday": [ 23, 13, 21, 16 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1037461562/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thesunflowersmusic.bandcamp.com/album/castle-spell-2',
          a_string: 'Castle Spell by SUNFLOWERS',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 25, 15, 23, 17 ],
            "wednesday": [ 24, 14, 22, 16 ],
            "thursday": [ 23, 13, 21, 16 ],
            "saturday": [ 22, 12, 20, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1025488984/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thesunflowersmusic.bandcamp.com/album/the-intergalactic-guide-to-find-the-red-cowboy',
          a_string: 'The Intergalactic Guide To Find The Red Cowboy by SUNFLOWERS',
          rule: {
            "monday": [ 22, 12, 20, 14 ],
            "tuesday": [ 21, 11, 19, 13 ],
            "wednesday": [ 25, 15, 23, 17 ],
            "thursday": [ 24, 14, 22, 16 ],
            "saturday": [ 23, 13, 21, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=402701780/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/tortoise',
          a_string: 'Tortoise by Tortoise',
          rule: {
            "monday": [ 23, 13, 21, 16 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 21, 11, 19, 13 ],
            "thursday": [ 25, 15, 23, 17 ],
            "saturday": [ 24, 14, 22, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3704450036/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/millions-now-living-will-never-die',
          a_string: 'Millions Now Living Will Never Die by Tortoise',
          rule: {
            "monday": [ 24, 14, 22, 16 ],
            "tuesday": [ 23, 13, 21, 16 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 25, 15, 23, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3449614673/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/tnt',
          a_string: 'TNT by Tortoise',
          rule: {
            "monday": [ 25, 15, 23, 17 ],
            "tuesday": [ 24, 14, 22, 16 ],
            "wednesday": [ 23, 13, 21, 16 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3650502038/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/standards',
          a_string: 'Standards by Tortoise',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 25, 15, 23, 17 ],
            "wednesday": [ 24, 14, 22, 16 ],
            "thursday": [ 23, 13, 21, 16 ],
            "saturday": [ 22, 12, 20, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1396897218/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/its-all-around-you',
          a_string: 'It&#39;s All Around You by Tortoise',
          rule: {
            "monday": [ 22, 12, 20, 14 ],
            "tuesday": [ 21, 11, 19, 13 ],
            "wednesday": [ 25, 15, 23, 17 ],
            "thursday": [ 24, 14, 22, 16 ],
            "saturday": [ 23, 13, 21, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4176811270/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/a-lazarus-taxon',
          a_string: 'A Lazarus Taxon by Tortoise',
          rule: {
            "monday": [ 23, 13, 21, 16 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 21, 11, 19, 13 ],
            "thursday": [ 25, 15, 23, 17 ],
            "saturday": [ 24, 14, 22, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4061327368/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/beacons-of-ancestorship',
          a_string: 'Beacons of Ancestorship by Tortoise',
          rule: {
            "monday": [ 24, 14, 22, 16 ],
            "tuesday": [ 23, 13, 21, 16 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 25, 15, 23, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=95070257/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/the-catastrophist',
          a_string: 'The Catastrophist by Tortoise',
          rule: {
            "monday": [ 25, 15, 23, 17 ],
            "tuesday": [ 24, 14, 22, 16 ],
            "wednesday": [ 23, 13, 21, 16 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3227111390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wobbler.bandcamp.com/album/rites-at-dawn',
          a_string: 'Rites At Dawn by Wobbler',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 25, 15, 23, 17 ],
            "wednesday": [ 24, 14, 22, 16 ],
            "thursday": [ 23, 13, 21, 16 ],
            "saturday": [ 22, 12, 20, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1398604293/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hella.bandcamp.com/album/the-devil-isnt-red',
          a_string: 'The Devil Isn&#39;t Red by Hella',
          rule: {
            "monday": [ 23, 13, 21, 15 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 26, 16, 24, 18 ],
            "thursday": [ 25, 15, 23, 17 ],
            "saturday": [ 24, 14, 22, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3478465787/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hella.bandcamp.com/album/hold-your-horse-is',
          a_string: 'Hold Your Horse Is by Hella',
          rule: {
            "monday": [ 24, 14, 22, 17 ],
            "tuesday": [ 23, 13, 21, 15 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 26, 16, 24, 18 ],
            "saturday": [ 25, 15, 23, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3850134741/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://horselords.bandcamp.com/album/interventions',
          a_string: 'Interventions by Horse Lords',
          rule: {
            "monday": [ 25, 15, 23, 17 ],
            "tuesday": [ 24, 14, 22, 17 ],
            "wednesday": [ 23, 13, 21, 15 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 26, 16, 24, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1522581372/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jackotheclock.bandcamp.com/album/rare-weather',
          a_string: 'Rare Weather by Jack O&#39; The Clock',
          rule: {
            "monday": [ 26, 16, 24, 18 ],
            "tuesday": [ 25, 15, 23, 17 ],
            "wednesday": [ 24, 14, 22, 17 ],
            "thursday": [ 23, 13, 21, 15 ],
            "saturday": [ 22, 12, 20, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3546949173/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jackotheclock.bandcamp.com/album/how-are-we-doing-and-who-will-tell-us',
          a_string: 'How Are We Doing And Who Will Tell Us? by Jack O&#39; The Clock',
          rule: {
            "monday": [ 22, 12, 20, 14 ],
            "tuesday": [ 26, 16, 24, 18 ],
            "wednesday": [ 25, 15, 23, 17 ],
            "thursday": [ 24, 14, 22, 17 ],
            "saturday": [ 23, 13, 21, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3886216694/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jackotheclock.bandcamp.com/album/all-my-friends',
          a_string: 'All My Friends by Jack O&#39; The Clock',
          rule: {
            "monday": [ 23, 13, 21, 15 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 26, 16, 24, 18 ],
            "thursday": [ 25, 15, 23, 17 ],
            "saturday": [ 24, 14, 22, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=298253381/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hella.bandcamp.com/album/hella-acoustics-ep',
          a_string: 'Hella Acoustics (EP) by Hella',
          rule: {
            "monday": [ 24, 14, 22, 17 ],
            "tuesday": [ 23, 13, 21, 15 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 26, 16, 24, 18 ],
            "saturday": [ 25, 15, 23, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1915231525/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hella.bandcamp.com/album/homeboy-ep',
          a_string: 'Homeboy (EP) by Hella',
          rule: {
            "monday": [ 26, 16, 24, 18 ],
            "tuesday": [ 25, 15, 23, 18 ],
            "wednesday": [ 24, 14, 22, 16 ],
            "thursday": [ 23, 13, 21, 15 ],
            "saturday": [ 27, 17, 25, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1901548176/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hella.bandcamp.com/album/total-bugs-bunny-on-wild-bass',
          a_string: 'Total Bugs Bunny on Wild Bass by Hella',
          rule: {
            "monday": [ 27, 17, 25, 19 ],
            "tuesday": [ 26, 16, 24, 18 ],
            "wednesday": [ 25, 15, 23, 18 ],
            "thursday": [ 24, 14, 22, 16 ],
            "saturday": [ 23, 13, 21, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2461531193/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rlyr.bandcamp.com/album/actual-existence-2',
          a_string: 'Actual Existence by RLYR',
          rule: {
            "monday": [ 23, 13, 21, 15 ],
            "tuesday": [ 27, 17, 25, 19 ],
            "wednesday": [ 26, 16, 24, 18 ],
            "thursday": [ 25, 15, 23, 18 ],
            "saturday": [ 24, 14, 22, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2525967287/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://slothandturtle.com/album/sloth-turtle',
          a_string: 'Sloth &amp; Turtle by Sloth &amp; Turtle',
          rule: {
            "monday": [ 24, 14, 22, 16 ],
            "tuesday": [ 23, 13, 21, 15 ],
            "wednesday": [ 27, 17, 25, 19 ],
            "thursday": [ 26, 16, 24, 18 ],
            "saturday": [ 25, 15, 23, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3491432808/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lisalaruemrrartist.bandcamp.com/album/origins',
          a_string: 'Origins by Lisa LaRue',
          rule: {
            "monday": [ 25, 15, 23, 18 ],
            "tuesday": [ 24, 14, 22, 16 ],
            "wednesday": [ 23, 13, 21, 15 ],
            "thursday": [ 27, 17, 25, 19 ],
            "saturday": [ 26, 16, 24, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1335363568/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://atsukochiba.bandcamp.com/album/the-memory-empire',
          a_string: 'The Memory Empire by Atsuko Chiba',
          rule: {
            "monday": [ 26, 16, 24, 18 ],
            "tuesday": [ 25, 15, 23, 18 ],
            "wednesday": [ 24, 14, 22, 16 ],
            "thursday": [ 23, 13, 21, 15 ],
            "saturday": [ 27, 17, 25, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3425068624/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://atsukochiba.bandcamp.com/album/figure-and-ground',
          a_string: 'Figure and Ground by Atsuko Chiba',
          rule: {
            "monday": [ 27, 17, 25, 19 ],
            "tuesday": [ 26, 16, 24, 18 ],
            "wednesday": [ 25, 15, 23, 18 ],
            "thursday": [ 24, 14, 22, 16 ],
            "saturday": [ 23, 13, 21, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3079212410/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://atsukochiba.bandcamp.com/album/jinn',
          a_string: 'Jinn by Atsuko Chiba',
          rule: {
            "monday": [ 24, 14, 22, 16 ],
            "tuesday": [ 28, 18, 26, 20 ],
            "wednesday": [ 27, 17, 25, 19 ],
            "thursday": [ 26, 16, 24, 19 ],
            "saturday": [ 25, 15, 23, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2589032814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/far-corner',
          a_string: 'Far Corner by Far Corner',
          rule: {
            "monday": [ 25, 15, 23, 17 ],
            "tuesday": [ 24, 14, 22, 16 ],
            "wednesday": [ 28, 18, 26, 20 ],
            "thursday": [ 27, 17, 25, 19 ],
            "saturday": [ 26, 16, 24, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3344594909/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/exterminating-angel',
          a_string: 'Exterminating Angel by Alec K. Redfearn and The Seizures',
          rule: {
            "monday": [ 26, 16, 24, 19 ],
            "tuesday": [ 25, 15, 23, 17 ],
            "wednesday": [ 24, 14, 22, 16 ],
            "thursday": [ 28, 18, 26, 20 ],
            "saturday": [ 27, 17, 25, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=586174394/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/the-smother-party',
          a_string: 'The Smother Party by Alec K. Redfearn and The Eyesores',
          rule: {
            "monday": [ 27, 17, 25, 19 ],
            "tuesday": [ 26, 16, 24, 19 ],
            "wednesday": [ 25, 15, 23, 17 ],
            "thursday": [ 24, 14, 22, 16 ],
            "saturday": [ 28, 18, 26, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=678791830/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/every-man-for-himself-god-against-all',
          a_string: 'Every Man For Himself &amp; God Against All by Alec K. Redfearn and The Eyesores',
          rule: {
            "monday": [ 28, 18, 26, 20 ],
            "tuesday": [ 27, 17, 25, 19 ],
            "wednesday": [ 26, 16, 24, 19 ],
            "thursday": [ 25, 15, 23, 17 ],
            "saturday": [ 24, 14, 22, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2158710113/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/bent-at-the-waist',
          a_string: 'Bent At The Waist by Alec K. Redfearn and The Eyesores',
          rule: {
            "monday": [ 24, 14, 22, 16 ],
            "tuesday": [ 28, 18, 26, 20 ],
            "wednesday": [ 27, 17, 25, 19 ],
            "thursday": [ 26, 16, 24, 19 ],
            "saturday": [ 25, 15, 23, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3405008016/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/may-you-dine-on-weeds-made-bitter-by-the-piss-of-drunkards',
          a_string: 'May You Dine On Weeds Made Bitter By The Piss Of Drunkards by Alec K. Redfearn and The Eyesores',
          rule: {
            "monday": [ 25, 15, 23, 17 ],
            "tuesday": [ 24, 14, 22, 16 ],
            "wednesday": [ 28, 18, 26, 20 ],
            "thursday": [ 27, 17, 25, 19 ],
            "saturday": [ 26, 16, 24, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3102081202/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://grandtetras.bandcamp.com/album/abiogen-se',
          a_string: 'Abiogenèse by Grand Tétras',
          rule: {
            "monday": [ 27, 17, 25, 20 ],
            "tuesday": [ 26, 16, 24, 18 ],
            "wednesday": [ 25, 15, 23, 17 ],
            "thursday": [ 29, 19, 27, 21 ],
            "saturday": [ 28, 18, 26, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1626748900/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/carnival-detournement',
          a_string: 'Carnival Detournement by Hamster Theatre',
          rule: {
            "monday": [ 28, 18, 26, 20 ],
            "tuesday": [ 27, 17, 25, 20 ],
            "wednesday": [ 26, 16, 24, 18 ],
            "thursday": [ 25, 15, 23, 17 ],
            "saturday": [ 29, 19, 27, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3639143363/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://universzero.bandcamp.com/album/h-r-sie',
          a_string: 'Hérésie by Univers Zero',
          rule: {
            "monday": [ 29, 19, 27, 21 ],
            "tuesday": [ 28, 18, 26, 20 ],
            "wednesday": [ 27, 17, 25, 20 ],
            "thursday": [ 26, 16, 24, 18 ],
            "saturday": [ 25, 15, 23, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3470289651/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kiln-audio.bandcamp.com/album/meadow-watt',
          a_string: 'meadow:watt by KILN',
          rule: {
            "monday": [ 25, 15, 23, 17 ],
            "tuesday": [ 29, 19, 27, 21 ],
            "wednesday": [ 28, 18, 26, 20 ],
            "thursday": [ 27, 17, 25, 20 ],
            "saturday": [ 26, 16, 24, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=53475480/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://infraction.bandcamp.com/album/treedrums',
          a_string: 'Treedrums by Fibreforms',
          rule: {
            "monday": [ 26, 16, 24, 18 ],
            "tuesday": [ 25, 15, 23, 17 ],
            "wednesday": [ 29, 19, 27, 21 ],
            "thursday": [ 28, 18, 26, 20 ],
            "saturday": [ 27, 17, 25, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3529642756/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://infraction.bandcamp.com/album/relaxation-tape-for-solo-space-travel',
          a_string: 'Relaxation Tape for Solo Space Travel by The National Pool',
          rule: {
            "monday": [ 27, 17, 25, 20 ],
            "tuesday": [ 26, 16, 24, 18 ],
            "wednesday": [ 25, 15, 23, 17 ],
            "thursday": [ 29, 19, 27, 21 ],
            "saturday": [ 28, 18, 26, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1903374515/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/waxed-oop',
          a_string: 'Waxed Oop by Fast &#39;N&#39; Bulbous',
          rule: {
            "monday": [ 28, 18, 26, 20 ],
            "tuesday": [ 27, 17, 25, 20 ],
            "wednesday": [ 26, 16, 24, 18 ],
            "thursday": [ 25, 15, 23, 17 ],
            "saturday": [ 29, 19, 27, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1099831436/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marcribotsceramicdog.bandcamp.com/album/yru-still-here',
          a_string: 'YRU Still Here? by Marc Ribot&#39;s Ceramic Dog',
          rule: {
            "monday": [ 30, 20, 28, 22 ],
            "tuesday": [ 29, 19, 27, 21 ],
            "wednesday": [ 28, 18, 26, 21 ],
            "thursday": [ 27, 17, 25, 19 ],
            "saturday": [ 26, 16, 24, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2569045970/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/reflections-from-the-firepool',
          a_string: 'Reflections from the Firepool by Djam Karet',
          rule: {
            "monday": [ 26, 16, 24, 18 ],
            "tuesday": [ 30, 20, 28, 22 ],
            "wednesday": [ 29, 19, 27, 21 ],
            "thursday": [ 28, 18, 26, 21 ],
            "saturday": [ 27, 17, 25, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1587050591/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/regarding-purgatories',
          a_string: 'Regarding Purgatories by Dave Kerman / 5uu&#39;s',
          rule: {
            "monday": [ 27, 17, 25, 19 ],
            "tuesday": [ 26, 16, 24, 18 ],
            "wednesday": [ 30, 20, 28, 22 ],
            "thursday": [ 29, 19, 27, 21 ],
            "saturday": [ 28, 18, 26, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2824057389/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/abandonship',
          a_string: 'Abandonship by Dave Kerman / 5uu&#39;s',
          rule: {
            "monday": [ 28, 18, 26, 21 ],
            "tuesday": [ 27, 17, 25, 19 ],
            "wednesday": [ 26, 16, 24, 18 ],
            "thursday": [ 30, 20, 28, 22 ],
            "saturday": [ 29, 19, 27, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2412768210/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/point-of-views',
          a_string: 'Point of Views by Dave Kerman / 5uu&#39;s',
          rule: {
            "monday": [ 29, 19, 27, 21 ],
            "tuesday": [ 28, 18, 26, 21 ],
            "wednesday": [ 27, 17, 25, 19 ],
            "thursday": [ 26, 16, 24, 18 ],
            "saturday": [ 30, 20, 28, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1307757516/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bigups.bandcamp.com/album/two-parts-together',
          a_string: 'Two Parts Together by Big Ups',
          rule: {
            "monday": [ 30, 20, 28, 22 ],
            "tuesday": [ 29, 19, 27, 21 ],
            "wednesday": [ 28, 18, 26, 21 ],
            "thursday": [ 27, 17, 25, 19 ],
            "saturday": [ 26, 16, 24, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4247980252/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bigups.bandcamp.com/album/big-ups-audiotree-live',
          a_string: 'Big Ups - Audiotree Live by Big Ups',
          rule: {
            "monday": [ 26, 16, 24, 18 ],
            "tuesday": [ 30, 20, 28, 22 ],
            "wednesday": [ 29, 19, 27, 21 ],
            "thursday": [ 28, 18, 26, 21 ],
            "saturday": [ 27, 17, 25, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3040569775/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bigups.bandcamp.com/album/before-a-million-universes',
          a_string: 'Before A Million Universes by Big Ups',
          rule: {
            "monday": [ 28, 18, 26, 20 ],
            "tuesday": [ 27, 17, 25, 19 ],
            "wednesday": [ 1, 21, 29, 23 ],
            "thursday": [ 30, 20, 28, 22 ],
            "saturday": [ 29, 19, 27, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1050746289/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jackotheclock.bandcamp.com/album/repetitions-of-the-old-city-ii',
          a_string: 'Repetitions of the Old City - II by Jack O&#39; The Clock',
          rule: {
            "monday": [ 29, 19, 27, 22 ],
            "tuesday": [ 28, 18, 26, 20 ],
            "wednesday": [ 27, 17, 25, 19 ],
            "thursday": [ 1, 21, 29, 23 ],
            "saturday": [ 30, 20, 28, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1820255621/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skingraftrecords.bandcamp.com/album/fades',
          a_string: 'Fades by Cheer-Accident',
          rule: {
            "monday": [ 30, 20, 28, 22 ],
            "tuesday": [ 29, 19, 27, 22 ],
            "wednesday": [ 28, 18, 26, 20 ],
            "thursday": [ 27, 17, 25, 19 ],
            "saturday": [ 1, 21, 29, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4262861211/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/edit-peptide',
          a_string: 'Edit Peptide by Bubblemath',
          rule: {
            "monday": [ 1, 21, 29, 23 ],
            "tuesday": [ 30, 20, 28, 22 ],
            "wednesday": [ 29, 19, 27, 22 ],
            "thursday": [ 28, 18, 26, 20 ],
            "saturday": [ 27, 17, 25, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=593575225/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/open-city',
          a_string: 'Open City by The Muffins',
          rule: {
            "monday": [ 27, 17, 25, 19 ],
            "tuesday": [ 1, 21, 29, 23 ],
            "wednesday": [ 30, 20, 28, 22 ],
            "thursday": [ 29, 19, 27, 22 ],
            "saturday": [ 28, 18, 26, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=481996268/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/mekano',
          a_string: 'Mekano by Miriodor',
          rule: {
            "monday": [ 28, 18, 26, 20 ],
            "tuesday": [ 27, 17, 25, 19 ],
            "wednesday": [ 1, 21, 29, 23 ],
            "thursday": [ 30, 20, 28, 22 ],
            "saturday": [ 29, 19, 27, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2969318032/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/le-feu-du-tigre',
          a_string: 'Le Feu Du Tigre by Volapuk',
          rule: {
            "monday": [ 29, 19, 27, 22 ],
            "tuesday": [ 28, 18, 26, 20 ],
            "wednesday": [ 27, 17, 25, 19 ],
            "thursday": [ 1, 21, 29, 23 ],
            "saturday": [ 30, 20, 28, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3383885759/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dwellingsband.bandcamp.com/album/lavender-town',
          a_string: 'Lavender Town by Dwellings',
          rule: {
            "monday": [ 1, 21, 29, 23 ],
            "tuesday": [ 30, 20, 28, 23 ],
            "wednesday": [ 29, 19, 27, 21 ],
            "thursday": [ 28, 18, 26, 20 ],
            "saturday": [ 2, 22, 30, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3408776844/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://welostthesea.bandcamp.com/album/departure-songs',
          a_string: 'Departure Songs by We Lost The Sea',
          rule: {
            "monday": [ 2, 22, 30, 24 ],
            "tuesday": [ 1, 21, 29, 23 ],
            "wednesday": [ 30, 20, 28, 23 ],
            "thursday": [ 29, 19, 27, 21 ],
            "saturday": [ 28, 18, 26, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=688807833/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tuber.bandcamp.com/album/desert-overcrowded',
          a_string: 'Desert Overcrowded by Tuber',
          rule: {
            "monday": [ 28, 18, 26, 20 ],
            "tuesday": [ 2, 22, 30, 24 ],
            "wednesday": [ 1, 21, 29, 23 ],
            "thursday": [ 30, 20, 28, 23 ],
            "saturday": [ 29, 19, 27, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4098725441/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://softmachine-moonjune.bandcamp.com/album/hidden-details-hd',
          a_string: 'Hidden Details (HD) by Soft Machine',
          rule: {
            "monday": [ 29, 19, 27, 21 ],
            "tuesday": [ 28, 18, 26, 20 ],
            "wednesday": [ 2, 22, 30, 24 ],
            "thursday": [ 1, 21, 29, 23 ],
            "saturday": [ 30, 20, 28, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2962792069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://regalworm.bandcamp.com/album/pig-views',
          a_string: 'Pig Views by Regal Worm',
          rule: {
            "monday": [ 30, 20, 28, 23 ],
            "tuesday": [ 29, 19, 27, 21 ],
            "wednesday": [ 28, 18, 26, 20 ],
            "thursday": [ 2, 22, 30, 24 ],
            "saturday": [ 1, 21, 29, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=138950917/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kawriswhisper.bandcamp.com/album/belle-epoque',
          a_string: 'Belle Epoque by Kawri&#39;s Whisper',
          rule: {
            "monday": [ 1, 21, 29, 23 ],
            "tuesday": [ 30, 20, 28, 23 ],
            "wednesday": [ 29, 19, 27, 21 ],
            "thursday": [ 28, 18, 26, 20 ],
            "saturday": [ 2, 22, 30, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4123841563/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://qui31g.bandcamp.com/album/snuh',
          a_string: 'Snuh by QUI',
          rule: {
            "monday": [ 2, 22, 30, 24 ],
            "tuesday": [ 1, 21, 29, 23 ],
            "wednesday": [ 30, 20, 28, 23 ],
            "thursday": [ 29, 19, 27, 21 ],
            "saturday": [ 28, 18, 26, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2003550962/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://covetband.bandcamp.com/album/effloresce',
          a_string: 'effloresce by covet',
          rule: {
            "monday": [ 29, 19, 27, 21 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 2, 22, 30, 24 ],
            "thursday": [ 1, 21, 29, 24 ],
            "saturday": [ 30, 20, 28, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=750164355/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://themercurytree.bandcamp.com/album/cryptic-tree',
          a_string: 'Cryptic Tree by The Mercury Tree + Cryptic Ruse',
          rule: {
            "monday": [ 30, 20, 28, 22 ],
            "tuesday": [ 29, 19, 27, 21 ],
            "wednesday": [ 3, 23, 1, 25 ],
            "thursday": [ 2, 22, 30, 24 ],
            "saturday": [ 1, 21, 29, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1288952570/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bigups.bandcamp.com/album/eighteen-hours-of-static',
          a_string: 'Eighteen Hours of Static by Big Ups',
          rule: {
            "monday": [ 1, 21, 29, 24 ],
            "tuesday": [ 30, 20, 28, 22 ],
            "wednesday": [ 29, 19, 27, 21 ],
            "thursday": [ 3, 23, 1, 25 ],
            "saturday": [ 2, 22, 30, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2849359676/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bigups.bandcamp.com/album/wake-up',
          a_string: 'Wake Up by Big Ups',
          rule: {
            "monday": [ 2, 22, 30, 24 ],
            "tuesday": [ 1, 21, 29, 24 ],
            "wednesday": [ 30, 20, 28, 22 ],
            "thursday": [ 29, 19, 27, 21 ],
            "saturday": [ 3, 23, 1, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1827602380/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hivebentmd.bandcamp.com/album/dyatlov',
          a_string: 'Dyatlov by Hive Bent',
          rule: {
            "monday": [ 3, 23, 1, 25 ],
            "tuesday": [ 2, 22, 30, 24 ],
            "wednesday": [ 1, 21, 29, 24 ],
            "thursday": [ 30, 20, 28, 22 ],
            "saturday": [ 29, 19, 27, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2088132159/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.7dmedia.com/album/the-repercussions-of-angelic-behavior',
          a_string: 'The Repercussions of Angelic Behavior by Bill Reiflin, Robert Fripp, Trey Gunn',
          rule: {
            "monday": [ 29, 19, 27, 21 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 2, 22, 30, 24 ],
            "thursday": [ 1, 21, 29, 24 ],
            "saturday": [ 30, 20, 28, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1598091346/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.7dmedia.com/album/the-news',
          a_string: 'The News by N.y.X.',
          rule: {
            "monday": [ 30, 20, 28, 22 ],
            "tuesday": [ 29, 19, 27, 21 ],
            "wednesday": [ 3, 23, 1, 25 ],
            "thursday": [ 2, 22, 30, 24 ],
            "saturday": [ 1, 21, 29, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3589442295/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.7dmedia.com/album/the-veneer-of-logic',
          a_string: 'The Veneer of Logic by Matte Henderson',
          rule: {
            "monday": [ 2, 22, 30, 25 ],
            "tuesday": [ 1, 21, 29, 23 ],
            "wednesday": [ 30, 20, 28, 22 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 3, 23, 1, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1708285711/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://billlaswell.bandcamp.com/album/seven-souls',
          a_string: 'Seven Souls by Material',
          rule: {
            "monday": [ 3, 23, 1, 25 ],
            "tuesday": [ 2, 22, 30, 25 ],
            "wednesday": [ 1, 21, 29, 23 ],
            "thursday": [ 30, 20, 28, 22 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=712605690/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://billlaswell.bandcamp.com/album/imaginary-cuba',
          a_string: 'Imaginary Cuba by Bill Laswell',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 2, 22, 30, 25 ],
            "thursday": [ 1, 21, 29, 23 ],
            "saturday": [ 30, 20, 28, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=626832581/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://billlaswell.bandcamp.com/album/hear-no-evil-bill-laswell',
          a_string: 'Hear No Evil - Bill Laswell by Bill Laswell',
          rule: {
            "monday": [ 30, 20, 28, 22 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 3, 23, 1, 25 ],
            "thursday": [ 2, 22, 30, 25 ],
            "saturday": [ 1, 21, 29, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2550309392/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://charlestheosprey.bandcamp.com/album/to-capture',
          a_string: 'To Capture by Charles the Osprey',
          rule: {
            "monday": [ 1, 21, 29, 23 ],
            "tuesday": [ 30, 20, 28, 22 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 3, 23, 1, 25 ],
            "saturday": [ 2, 22, 30, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1950375948/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://charlestheosprey.bandcamp.com/album/consider',
          a_string: 'Consider by Charles the Osprey',
          rule: {
            "monday": [ 2, 22, 30, 25 ],
            "tuesday": [ 1, 21, 29, 23 ],
            "wednesday": [ 30, 20, 28, 22 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 3, 23, 1, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3694539204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/optical-delusions-2',
          a_string: 'Optical Delusions by Planeta Imaginario',
          rule: {
            "monday": [ 3, 23, 1, 25 ],
            "tuesday": [ 2, 22, 30, 25 ],
            "wednesday": [ 1, 21, 29, 23 ],
            "thursday": [ 30, 20, 28, 22 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2969552423/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nightidea.bandcamp.com/album/night-idea-audiotree-live',
          a_string: 'Night Idea - Audiotree Live by Night Idea',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 3, 23, 1, 26 ],
            "thursday": [ 2, 22, 30, 24 ],
            "saturday": [ 1, 21, 29, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1345791811/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bastaduo.bandcamp.com/album/vertigo',
          a_string: 'Vertigo by BASta!²',
          rule: {
            "monday": [ 1, 21, 29, 23 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 3, 23, 1, 26 ],
            "saturday": [ 2, 22, 30, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2652302586/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://weserbergland.bandcamp.com/album/sehr-kosmisch-ganz-progisch',
          a_string: 'Sehr Kosmisch, Ganz Progisch by Weserbergland',
          rule: {
            "monday": [ 2, 22, 30, 24 ],
            "tuesday": [ 1, 21, 29, 23 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 3, 23, 1, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=199926154/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://piniol.bandcamp.com/album/bran-coucou',
          a_string: 'Bran Coucou by PinioL',
          rule: {
            "monday": [ 3, 23, 1, 26 ],
            "tuesday": [ 2, 22, 30, 24 ],
            "wednesday": [ 1, 21, 29, 23 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=298538617/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/rights',
          a_string: 'Rights by Schnellertollermeier',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 3, 23, 1, 26 ],
            "wednesday": [ 2, 22, 30, 24 ],
            "thursday": [ 1, 21, 29, 23 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1952619866/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://altrockproductions.bandcamp.com/album/negative-toe',
          a_string: 'NEGATIVE TOE by CAMEMBERT',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 3, 23, 1, 26 ],
            "thursday": [ 2, 22, 30, 24 ],
            "saturday": [ 1, 21, 29, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2295205822/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alexshand.bandcamp.com/album/katatak',
          a_string: 'KaTaTaK by Alex&#39;s Hand',
          rule: {
            "monday": [ 1, 21, 29, 23 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 3, 23, 1, 26 ],
            "saturday": [ 2, 22, 30, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2509316003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://etourneur.bandcamp.com/album/on-second-thought',
          a_string: 'On second thought by Dustman Dilemma',
          rule: {
            "monday": [ 3, 23, 1, 25 ],
            "tuesday": [ 2, 22, 30, 24 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1913103175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://discusmusic.bandcamp.com/album/theta-four-70cd',
          a_string: 'Theta Four - 70CD by Orchestra Of The Upper Atmosphere',
          rule: {
            "monday": [ 4, 24, 2, 27 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 2, 22, 30, 24 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1315558555/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pierrevervloesem.bandcamp.com/album/the-art-of-going-nowhere-1-extended',
          a_string: 'The Art of going Nowhere 1 - Extended by Pierre Vervloesem',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 27 ],
            "wednesday": [ 3, 23, 1, 25 ],
            "thursday": [ 2, 22, 30, 24 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3086509739/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pierrevervloesem.bandcamp.com/album/the-art-of-going-nowhere-2-extended',
          a_string: 'The Art of going Nowhere 2 - Extended by Pierre Vervloesem',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 27 ],
            "thursday": [ 3, 23, 1, 25 ],
            "saturday": [ 2, 22, 30, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=212137216/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pierrevervloesem.bandcamp.com/album/the-art-of-going-nowhere-3-extended',
          a_string: 'The Art of going Nowhere 3 - Extended by Pierre Vervloesem',
          rule: {
            "monday": [ 2, 22, 30, 24 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 27 ],
            "saturday": [ 3, 23, 1, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=128861424/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pierrevervloesem.bandcamp.com/album/the-art-of-going-nowhere-4-extended',
          a_string: 'The Art of going Nowhere 4 - Extended by Pierre Vervloesem',
          rule: {
            "monday": [ 3, 23, 1, 25 ],
            "tuesday": [ 2, 22, 30, 24 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3453012875/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zwoyld.bandcamp.com/album/zgond',
          a_string: 'ZGOND by ZWOYLD',
          rule: {
            "monday": [ 4, 24, 2, 27 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 2, 22, 30, 24 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1079407873/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://detieti.bandcamp.com/album/frogressive-punk',
          a_string: 'Frogressive Punk by Detieti',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 26 ],
            "wednesday": [ 5, 24, 2, 26 ],
            "thursday": [ 3, 23, 1, 25 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2052333263/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/hopper-tunity-box',
          a_string: 'Hopper Tunity Box by Hugh Hopper',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 26 ],
            "thursday": [ 5, 24, 2, 26 ],
            "saturday": [ 3, 23, 1, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3286011693/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/l-oreille-lectrique-the-electric-ear',
          a_string: 'L’Oreille Électrique (The Electric Ear) by Forgas Band Phenomena',
          rule: {
            "monday": [ 3, 23, 1, 25 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 26 ],
            "saturday": [ 5, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1269734453/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/risk-hd-24b-96k',
          a_string: 'Risk [HD 24b/96k] by Far Corner',
          rule: {
            "monday": [ 6, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1418981282/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tangents.bandcamp.com/album/new-bodies',
          a_string: 'New Bodies by Tangents',
          rule: {
            "monday": [ 6, 26, 4, 27 ],
            "tuesday": [ 6, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1828057142/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tangents.bandcamp.com/album/stents-arteries',
          a_string: 'Stents + Arteries by Tangents',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 6, 26, 4, 27 ],
            "wednesday": [ 6, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=996945265/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://umen.bandcamp.com/album/u-men',
          a_string: 'U-Men by U-Men',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 27 ],
            "thursday": [ 6, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4086513590/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/we-are-the-rowboats',
          a_string: 'We Are The Rowboats by Krakatoa',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 28 ],
            "saturday": [ 7, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2387443778/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vasilhadzimanov.bandcamp.com/album/alive',
          a_string: 'Alive by Vasil Hadzimanov Band feat. David Binney',
          rule: {
            "monday": [ 7, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3639899694/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dwikidharmawan-moonjune.bandcamp.com/album/pasar-klewer-hd',
          a_string: 'Pasar Klewer (HD) by Dwiki Dharmawan',
          rule: {
            "monday": [ 7, 27, 5, 28 ],
            "tuesday": [ 7, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3428646759/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/wire-stitched-ears',
          a_string: 'Wire Stitched Ears by Blast',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 28 ],
            "wednesday": [ 7, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1339604603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://simakdialog.bandcamp.com/album/trance-mission',
          a_string: 'Trance/Mission by simakDialog',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 7, 27, 5, 28 ],
            "thursday": [ 7, 26, 4, 28 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=299575763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dewabudjana.bandcamp.com/album/zentuary-hd',
          a_string: 'Zentuary (HD) by Dewa Budjana feat. Tony Levin, Gary Husband, Jack DeJohnette',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 28 ],
            "saturday": [ 7, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=525213933/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/astronomy-made-easy',
          a_string: 'Astronomy Made Easy by Boud Deun',
          rule: {
            "monday": [ 7, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2729278993/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pandelicmusic.bandcamp.com/album/escapade',
          a_string: 'Escapade by Pandelic',
          rule: {
            "monday": [ 8, 28, 6, 29 ],
            "tuesday": [ 8, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2116295695/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://january.bandcamp.com/album/rev',
          a_string: 'REV by JANUARY',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 29 ],
            "wednesday": [ 8, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3444672602/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/live-5',
          a_string: 'Live by Happy The Man',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 29 ],
            "thursday": [ 8, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2227823078/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ustodaymusic.bandcamp.com/album/computant',
          a_string: 'Computant by Us, Today',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 29 ],
            "saturday": [ 8, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2765248987/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://finneganswake.bandcamp.com/album/silances',
          a_string: 'Silances by Henry Krutzen',
          rule: {
            "monday": [ 8, 27, 5, 29 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 8, 28, 6, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3168124690/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.hammockmusic.com/album/universalis',
          a_string: 'Universalis by Hammock',
          rule: {
            "monday": [ 8, 28, 6, 29 ],
            "tuesday": [ 8, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3053041602/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.hammockmusic.com/album/mysterium',
          a_string: 'Mysterium by Hammock',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 29 ],
            "wednesday": [ 8, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=229769068/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.hammockmusic.com/album/oblivion-hymns',
          a_string: 'Oblivion Hymns by Hammock',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 30 ],
            "thursday": [ 9, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1259605245/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cleft.bandcamp.com/album/wrong',
          a_string: '',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 30 ],
            "saturday": [ 9, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=198368908/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tinymovingparts.bandcamp.com/album/swell',
          a_string: 'Swell by Tiny Moving Parts',
          rule: {
            "monday": [ 9, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=568637875/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://toe-music.bandcamp.com/album/our-latest-number-3',
          a_string: 'Our Latest Number by toe',
          rule: {
            "monday": [ 9, 29, 7, 30 ],
            "tuesday": [ 9, 28, 6, 30 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=485381074/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/radian-futura',
          a_string: 'Radian Futura by Upsilon Acrux',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 9, 29, 7, 30 ],
            "wednesday": [ 9, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=644671482/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/uses-wrist-grab',
          a_string: 'Uses Wrist Grab by Bone',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 30 ],
            "thursday": [ 9, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=16237554/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/mats-morgan-band-live',
          a_string: 'Mats/Morgan Band Live by Mats/Morgan Band',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 30 ],
            "saturday": [ 9, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1933232409/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/apocalypso',
          a_string: 'Apocalypso by Raoul Bjorkenheim',
          rule: {
            "monday": [ 10, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=107394378/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/say-so',
          a_string: 'Say So by Bent Knee',
          rule: {
            "monday": [ 10, 30, 8, 1 ],
            "tuesday": [ 10, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=112718169/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/anglo-american',
          a_string: 'Anglo American by Gary Windo',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 1 ],
            "wednesday": [ 10, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2872606480/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pompoko.bandcamp.com/album/birthday',
          a_string: 'Birthday by Pom Poko',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 1 ],
            "thursday": [ 10, 29, 7, 1 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4013495150/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://liptalk.bandcamp.com/album/d-a-y-s',
          a_string: 'D A Y S by Lip Talk',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 10, 30, 8, 1 ],
            "saturday": [ 10, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2247511347/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://monoofjapan.bandcamp.com/album/nowhere-now-here',
          a_string: 'Nowhere Now Here by MONO',
          rule: {
            "monday": [ 10, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=82655546/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/september',
          a_string: 'September by The Claudia Quintet',
          rule: {
            "monday": [ 10, 30, 8, 1 ],
            "tuesday": [ 10, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=85255211/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/a-modest-proposal',
          a_string: 'A Modest Proposal by Gutbucket',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 2 ],
            "wednesday": [ 11, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=88001737/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/passing-through-the-wall',
          a_string: 'Passing Through The Wall by Zevious',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 2 ],
            "thursday": [ 11, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2508072376/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://silentisland.bandcamp.com/album/rapa-nui-ep',
          a_string: 'Rapa nui EP by Silent Island',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 2 ],
            "saturday": [ 11, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3728268980/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zero-the-hero.bandcamp.com/album/nobody',
          a_string: 'Nobody by zerothehero',
          rule: {
            "monday": [ 11, 30, 8, 2 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=760051029/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://esbenandthewitch.bandcamp.com/album/nowhere',
          a_string: 'Nowhere by Esben and the Witch',
          rule: {
            "monday": [ 11, 1, 9, 2 ],
            "tuesday": [ 11, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=90548740/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trovarobato.bandcamp.com/album/dio-contro-diavolo-edizione-2016',
          a_string: 'Dio Contro Diavolo - Edizione 2016 by Musica Per Bambini',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 2 ],
            "wednesday": [ 11, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1696587859/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trovarobato.bandcamp.com/album/coma',
          a_string: 'Coma by Dino Fumaretto',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 2 ],
            "thursday": [ 11, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4267888428/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trovarobato.bandcamp.com/album/discoteca-rock',
          a_string: 'Discoteca Rock by I Camillas',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 12, 2, 10, 3 ],
            "saturday": [ 12, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3121182040/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lostworldband.bandcamp.com/album/spheres-aligned',
          a_string: 'Spheres Aligned by Lost World Band',
          rule: {
            "monday": [ 12, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3401989687/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://semistereo.bandcamp.com/album/zabriskii',
          a_string: 'Zabriskii by Semistereo',
          rule: {
            "monday": [ 12, 2, 10, 3 ],
            "tuesday": [ 12, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3605544808/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cosmograf.bandcamp.com/album/mind-over-depth',
          a_string: 'Mind Over Depth by Cosmograf',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 3 ],
            "wednesday": [ 12, 1, 9, 3 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=128900345/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djamkaret.bandcamp.com/album/a-sky-full-of-stars-for-a-roof',
          a_string: 'A Sky Full Of Stars For A Roof by Djam Karet',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 12, 2, 10, 3 ],
            "thursday": [ 12, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3723664397/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bigbigbusiness.bandcamp.com/album/the-beast-you-are',
          a_string: 'The Beast You Are by Big Business',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 12, 2, 10, 3 ],
            "saturday": [ 12, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2976129464/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://prog-sphere.bandcamp.com/album/porcupine-tree-legacy',
          a_string: 'Porcupine Tree: Legacy by Prog Sphere',
          rule: {
            "monday": [ 12, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3583826062/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://panzerpappa.bandcamp.com/album/summarisk-suite',
          a_string: 'Summarisk Suite by Panzerpappa',
          rule: {
            "monday": [ 13, 3, 11, 4 ],
            "tuesday": [ 13, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 15, 5, 13, 7 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3249301421/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cloudshelter.bandcamp.com/album/s-t',
          a_string: 'S/T by Cloud Shelter',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 4 ],
            "wednesday": [ 13, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 15, 5, 13, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=512218744/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://salamah.bandcamp.com/album/toute-chose-visible',
          a_string: 'Toute Chose Visible by Malade[s]',
          rule: {
            "monday": [ 15, 5, 13, 7 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 4 ],
            "thursday": [ 13, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3931162193/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/a-great-inhumane-adventure',
          a_string: 'A Great Inhumane Adventure by Present',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 15, 5, 13, 7 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 4 ],
            "saturday": [ 13, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=581054831/size=large/bgcol=ffffff/linkcol=0687f5/license_id=118/tracklist=false/transparent=true/',
          href_string: 'http://beak.bandcamp.com/album/-',
          a_string: '&gt;&gt;&gt; by Beak&gt;',
          rule: {
            "monday": [ 13, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 15, 5, 13, 7 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 13, 3, 11, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3242607970/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jackdupon.bandcamp.com/album/jackdupoulainponjar',
          a_string: 'JackDuPoulainPonJar by Jack Dupon',
          rule: {
            "monday": [ 13, 3, 11, 4 ],
            "tuesday": [ 13, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 15, 5, 13, 7 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('september_musics_id_seq', (SELECT MAX(id) FROM september_musics));");
    });
};
