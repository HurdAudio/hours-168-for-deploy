'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('may_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('may_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2926666832/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/hushers',
          a_string: 'Hushers by Quince Contemporary Vocal Ensemble',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 2, 8, 15, 28 ],
            "thursday": [ 1, 7, 14, 27 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4179012292/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/la-l-gende-deer',
          a_string: 'La Légende d&#39;Eer by IANNIS XENAKIS',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 2, 8, 15, 28 ],
            "saturday": [ 1, 7, 14, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=45299544/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/complete-song-books',
          a_string: 'Complete Song Books by JOHN CAGE, REINHOLD FRIEDL',
          rule: {
            "monday": [ 1, 7, 14, 27 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2824493515/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zeitkratzer.bandcamp.com/album/karlheinz-stockhausen-old-school',
          a_string: 'Karlheinz Stockhausen [old school] by zeitkratzer',
          rule: {
            "monday": [ 2, 8, 15, 28 ],
            "tuesday": [ 1, 7, 14, 27 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1635773245/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idmtheftable.bandcamp.com/album/leaving-the-keyboard-that-plays-itself-down-by-the-river-between-2-30-and-3-30-am-august-3rd-2017',
          a_string: 'Leaving the keyboard that plays itself down by the river between 2:30 and 3:30 AM August 3rd 2017 by id m theft able',
          rule: {
            "monday": [ 3, 9, 16, 29 ],
            "tuesday": [ 2, 8, 15, 28 ],
            "wednesday": [ 1, 7, 14, 27 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1468997469/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://babel-label.bandcamp.com/album/karlheinz-stockhausen-tierkreis',
          a_string: 'KARLHEINZ STOCKHAUSEN TIERKREIS by BRUNO HEINEN SEXTET',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 2, 8, 15, 28 ],
            "thursday": [ 1, 7, 14, 27 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2631696285/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joseperez.bandcamp.com/album/el-piano-del-siglo-xx',
          a_string: 'El piano del Siglo XX by José María Pérez',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=518491629/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://streifenjunko.bandcamp.com/album/sval-torv',
          a_string: 'Sval torv by Streifenjunko',
          rule: {
            "monday": [ 2, 8, 15, 28 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2224588625/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nilsfrahm.bandcamp.com/album/music-for-the-motion-picture-victoria-bonus-track-version',
          a_string: 'Music for the Motion Picture Victoria (Bonus Track Version) by Nils Frahm',
          rule: {
            "monday": [ 3, 9, 16, 29 ],
            "tuesday": [ 2, 8, 15, 28 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4206764672/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eljardindeorlando.bandcamp.com/album/festival-de-m-sica-del-siglo-xx',
          a_string: 'Festival de música del siglo XX by Juan Carlos Paz; Edgar Varèse; Francisco Fröpfl; Alban Berg',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 2, 8, 15, 28 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=981965785/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alarmwillsound.bandcamp.com/album/alarm-will-sound-presents-modernists',
          a_string: 'Alarm Will Sound presents Modernists by Alarm Will Sound',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 2, 8, 15, 28 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2373284975/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alarmwillsound.bandcamp.com/album/a-rhythmia',
          a_string: 'a/rhythmia by Alarm Will Sound',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=588183065/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://finderskeepersrecords.bandcamp.com/album/mal-fices',
          a_string: 'Maléfices by Pierre Henry',
          rule: {
            "monday": [ 2, 8, 15, 28 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1435388351/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://forcednostalgia.bandcamp.com/album/submerged-vessels-and-other-stories',
          a_string: 'Submerged Vessels And Other Stories by Vazz',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=13695074/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://forcednostalgia.bandcamp.com/album/sombrero-fallout-2',
          a_string: 'Sombrero Fallout by Pump',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3033247197/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bangonacan.bandcamp.com/album/bang-on-a-can-meets-kyaw-kyaw-naing',
          a_string: 'Bang on a Can Meets Kyaw Kyaw Naing by Bang on a Can',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1935970520/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hakanai.bandcamp.com/album/hakanai',
          a_string: 'Hakanai by Hakanai',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1808973990/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gizehrecords.bandcamp.com/album/through-the-sparkle',
          a_string: 'Through the Sparkle by Astrïd &amp; Rachel Grimes',
          rule: {
            "monday": [ 3, 9, 16, 29 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2430724552/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ronminis.bandcamp.com/album/-',
          a_string: 'נקודת אור by Ron Minis',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2033214861/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://highmoss.bandcamp.com/album/north-towards-ever',
          a_string: 'North Towards Ever by Haworth Hodgkinson',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1899744312/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://discusmusic.bandcamp.com/album/theta-two-47cd',
          a_string: 'Theta Two - 47CD by Orchestra Of The Upper Atmosphere',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2853205985/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ilusorecords.bandcamp.com/album/extremophile',
          a_string: 'Extremophile by Dominic Lash Quartet',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=639343003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://donnachacostello.bandcamp.com/album/mouvements',
          a_string: 'Mouvements by Donnacha Costello',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1753601677/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://natevans.bandcamp.com/album/coyoteways',
          a_string: 'Coyoteways by Nat Evans',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=412747050/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/marcos-balter-aesopica',
          a_string: 'Marcos Balter: Aesopica by International Contemporary Ensemble, Claire Chase, Ryan Muncy',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2007713521/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/r-we-who-r-we',
          a_string: 'R WE WHO R WE by R WE WHO R WE: Ted Hearne, vocals, vocal processing Philip White, mixer feedback, vocal processing',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=314662615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/nicholas-dieugenio-and-mimi-solomon-into-the-silence',
          a_string: 'Nicholas DiEugenio and Mimi Solomon: Into the Silence by Nicholas DiEugenio and Mimi Solomon',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3096869906/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://garethdavisfrances-marieuitti.bandcamp.com/album/gramercy',
          a_string: 'Gramercy by Gareth Davis &amp; Frances-Marie Uitti',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3273592205/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sluchaj.bandcamp.com/album/thunder',
          a_string: 'Thunder by Agustí Fernández / Frances Marie Uitti / Joel Ryan',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2041730779/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aishaorazbayeva.bandcamp.com/album/the-hand-gallery',
          a_string: 'The Hand Gallery by Aisha Orazbayeva',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1931904327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leboeufbrothers.bandcamp.com/album/imaginist',
          a_string: 'imaginist by Le Boeuf Brothers + JACK Quartet',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=503991784/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nilsfrahm.bandcamp.com/album/wintermusik',
          a_string: 'Wintermusik by Nils Frahm',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3802551089/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://christinesouthworth.bandcamp.com/album/christine-southworth-string-quartets',
          a_string: 'Christine Southworth String Quartets by Kronos Quartet, Calder Quartet, Gamelan Elektrika, Face the Music',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3947190276/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soave.bandcamp.com/album/arturo-st-lteri-e-il-pavone-parl-alla-luna',
          a_string: 'Arturo Stàlteri - ...e il pavone parlò alla Luna by soave',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=95732423/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://clarkerobinson.bandcamp.com/album/49th-birthday-album',
          a_string: '49th Birthday Album by Clarke Robinson',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2848499200/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://weirdearrecords.bandcamp.com/album/oh-baby-my-acoustica',
          a_string: 'Oh Baby / My Acoustica by Trumpet Trumpet Synthesizer / Horaflora',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=331011142/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sentieriselvaggi.bandcamp.com/album/ac-dc',
          a_string: 'AC/DC by Sentieri Selvaggi',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1072730020/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://homenormal.bandcamp.com/album/dietro-a-un-vetro',
          a_string: 'Dietro a un vetro by Giulio Fagiolini',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1876175985/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zeitkratzer.bandcamp.com/album/serbian-war-songs',
          a_string: 'Serbian War Songs by zeitkratzer / SVETLANA SPAJIC / DRAGANA TOMIĆ  / OBRAD MILIC',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=867626409/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://adriankingwell.bandcamp.com/album/babylon',
          a_string: 'babylon by Adrian Kingwell',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1724237696/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.diatribe.ie/album/for-violin-and-electronics',
          a_string: 'For Violin and Electronics by Darragh Morgan',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=644646204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.diatribe.ie/album/stargazer',
          a_string: 'Stargazer by Ensemble Ériu',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2823942019/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://subjamlabel.bandcamp.com/album/infinite-loop',
          a_string: 'Infinite Loop by Wang Fan',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=286075715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://subjamlabel.bandcamp.com/album/tropoi',
          a_string: 'Tropoi by Olaf Hochherz',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2199662800/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://subjamlabel.bandcamp.com/album/bottom',
          a_string: 'Bottom by Goh Lee Kwang',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2060426740/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erratum.bandcamp.com/album/cathedrale-de-strasbourg',
          a_string: 'CATHEDRALE DE STRASBOURG by CHARLEMAGNE PALESTINE',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3821231848/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erratum.bandcamp.com/album/fill-my-body-with-flowers-and-rice',
          a_string: 'Fill My Body With Flowers And Rice by ALICE KEMP',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=174824813/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erratum.bandcamp.com/album/the-last-man-in-europe',
          a_string: 'THE LAST MAN IN EUROPE by ZBIGNIEW KARKOWSKI',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4363051/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rainbowbridge.bandcamp.com/album/international-exports-and-the-reasons',
          a_string: 'International Exports And The Reasons by Posset/Pregnant Spore',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2060810605/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://accidentdutravail.bandcamp.com/album/boucles',
          a_string: 'boucles by Accident du Travail',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1136447753/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://1631recordings.bandcamp.com/album/disarm',
          a_string: 'Disarm by Tristan Eckerson',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=416228483/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hospitalhill.bandcamp.com/album/prayer-for-nil',
          a_string: 'PRAYER FOR NIL by Jessica Aszodi',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1513204624/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kcinsound.bandcamp.com/album/onset',
          a_string: 'ONSET by Kcin',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=938441147/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://machinefabriek.bandcamp.com/album/fight-score',
          a_string: 'FIGHT score by Machinefabriek',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2161332920/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jakeschepps.bandcamp.com/album/an-evening-in-the-village-the-music-of-b-la-bart-k',
          a_string: 'An Evening in the Village: The Music of Béla Bartók by Jake Schepps',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1822899403/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thomasandrewdoyle.bandcamp.com/album/incineration-ceremony',
          a_string: 'Incineration Ceremony by Thomas Andrew Doyle',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1302408382/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernarecords.bandcamp.com/album/chapitre-ii',
          a_string: 'Chapitre II by Tambour',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2299067940/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://populistrecords.bandcamp.com/album/daniel-corral-refractions',
          a_string: 'Daniel Corral // Refractions by Daniel Corral, Jeremy Kerner, Isaura String Quartet',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2469736947/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ellenarkbro.bandcamp.com/album/for-organ-and-brass',
          a_string: 'For organ and brass by Ellen Arkbro',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2425378851/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thecaretaker.bandcamp.com/album/everywhere-at-the-end-of-time',
          a_string: 'Everywhere at the end of time by The Caretaker',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=260794481/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fabriziopaterlinirecords.com/album/secret-book-2',
          a_string: 'Secret Book by Fabrizio Paterlini',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1144294824/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newamsterdamrecords.bandcamp.com/album/petits-art-facts',
          a_string: 'Petits Artéfacts by Nick Photinos',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3930220839/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernarecords.bandcamp.com/album/festen',
          a_string: 'Festen by Manos Milonakis',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1682739570/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kara-liscoverdale.bandcamp.com/album/a-480',
          a_string: 'A 480 by Kara-Lis Coverdale',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1766634517/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tonelist.bandcamp.com/album/small-worlds',
          a_string: 'Small Worlds by Quiver',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4150244094/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://party-dozen.bandcamp.com/album/the-living-man-2',
          a_string: 'The Living Man by Party Dozen',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1364428371/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leerosevere.bandcamp.com/album/all-these-simple-things',
          a_string: 'All These Simple Things by Lee Rosevere',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=111574093/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://feederrecordings.bandcamp.com/album/somewhere-far-away',
          a_string: 'Somewhere Far Away by Other People',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3217615456/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eileanrec.bandcamp.com/album/erasures-and-displacements',
          a_string: 'Erasures and Displacements by Bill Seaman',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=140233520/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stefanwesolowski.bandcamp.com/album/rite-of-the-end',
          a_string: 'Rite Of The End by Stefan Wesołowski',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2529425976/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alexmincek.bandcamp.com/album/torrent',
          a_string: 'Torrent by Alex Mincek',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=681093799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/cartography',
          a_string: 'Cartography by Mariel Roberts',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4083577322/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rqtn.bandcamp.com/album/passenger',
          a_string: 'Passenger by RQTN',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=244004016/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tilmanrobinson.bandcamp.com/album/deer-heart',
          a_string: 'Deer Heart by Tilman Robinson',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1790746888/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brunosanfilippo.bandcamp.com/album/inside-life',
          a_string: 'Inside Life by Bruno Sanfilippo',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=260637206/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brunosanfilippo.bandcamp.com/album/claroscuro-2',
          a_string: 'ClarOscuro by Bruno Sanfilippo',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1144787081/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dmitry-evgrafov.bandcamp.com/album/comprehension-of-light',
          a_string: 'Comprehension of Light by Dmitry Evgrafov',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2761995487/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://1631recordings.bandcamp.com/album/escapism',
          a_string: 'Escapism by Library Tapes',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4115508360/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lindenkillam.bandcamp.com/album/5-dollar-medicine',
          a_string: '$5 Dollar Medicine by Linden Killam',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2290658552/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.diatribe.ie/album/all-soundings-are-true',
          a_string: 'All Soundings are True by Caoimhín Ó Raghallaigh / Garth Knox',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=644646204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.diatribe.ie/album/stargazer',
          a_string: 'Stargazer by Ensemble Ériu',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=493692770/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://benfrost.bandcamp.com/album/by-the-throat',
          a_string: 'BY THE THROAT by Ben Frost',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1686158765/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williambasinski.bandcamp.com/album/the-disintegration-loops',
          a_string: 'The Disintegration Loops by William Basinski',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3745542189/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soave.bandcamp.com/album/riccardo-sinigaglia-riflessi',
          a_string: 'Riccardo Sinigaglia - Riflessi by soave',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=985775283/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nickvasallo.bandcamp.com/album/let-the-machines-do-it-for-us',
          a_string: 'let the machines do it for us by Nick Vasallo',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1787015233/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nnatapes.bandcamp.com/album/evrly-mvsic',
          a_string: '&#39;EVRLY MVSIC&#39; by Patrick Higgins &amp; Josh Modney',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2930669060/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leabertucci.bandcamp.com/album/all-that-is-solid-melts-into-air',
          a_string: '&#39;All That Is Solid Melts Into Air&#39; by Lea Bertucci',
          rule: {
            "monday": [ 17, 23, 30, 12 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2628390025/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hewaseatenbyowls.bandcamp.com/album/chorus-30-from-blues-for-the-hitchhiking-dead-2',
          a_string: 'Chorus 30 From Blues For The Hitchhiking Dead by He Was Eaten By Owls',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=588602477/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnathanarce.bandcamp.com/album/sonic-landscapes-a-collection-of-improvisations',
          a_string: 'Sonic Landscapes (A Collection of Improvisations) by Johnathan Arce',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3288210412/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://liammulligan.bandcamp.com/album/couldnt-sleep',
          a_string: 'couldn&#39;t sleep. by Liam Mulligan',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1269075320/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://castleintimeorchestra.bandcamp.com/album/castle-in-time-2',
          a_string: 'Castle in time by Castle in Time Orchestra',
          rule: {
            "monday": [ 17, 23, 30, 12 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 18, 24, 31, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=436754044/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fancymusic.bandcamp.com/album/present-continuous',
          a_string: 'Present Continuous by Priot Ensemble',
          rule: {
            "monday": [ 18, 24, 31, 13 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2632839892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://meerenai.bandcamp.com/album/pheromone',
          a_string: 'Pheromone by Meerenai Shim',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 18, 24, 31, 13 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=55331850/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dockstader.bandcamp.com/album/apocalypse',
          a_string: 'Apocalypse by Tod Dockstader',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 18, 24, 31, 13 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=682090054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernarecords.bandcamp.com/album/piano-quartet-1',
          a_string: 'Piano Quartet #1 by Kirill Chernegin',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 18, 24, 31, 13 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=2568384470/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernarecords.bandcamp.com/track/homeless',
          a_string: 'Homeless by Snorri Hallgrímsson',
          rule: {
            "monday": [ 17, 23, 30, 12 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 18, 24, 31, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2057178573/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williamrobin.bandcamp.com/album/between-dawn-and-the-day',
          a_string: 'Between Dawn And The Day by William Robin',
          rule: {
            "monday": [ 18, 24, 31, 13 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1329552134/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joshuamastel.bandcamp.com/album/codextempore',
          a_string: 'codextempore by Joshua Mastel',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 19, 25, 1, 14 ],
            "wednesday": [ 18, 24, 31, 13 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2472194527/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://julianbroadhurstmetalpm.bandcamp.com/album/4523-metal-percussion-solo-in-eleven-parts',
          a_string: '45&#39;23 - Metal Percussion Solo in eleven parts by Julian Broadhurst',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 19, 25, 1, 14 ],
            "thursday": [ 18, 24, 31, 13 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1513168489/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatesritual.bandcamp.com/album/deliverer-redeemer',
          a_string: 'Deliverer / Redeemer by Gates',
          rule: {
            "monday": [ 17, 23, 30, 12 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 19, 25, 1, 14 ],
            "saturday": [ 18, 24, 31, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1735658668/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatesritual.bandcamp.com/album/viscera',
          a_string: 'Viscera by Gates',
          rule: {
            "monday": [ 18, 24, 31, 13 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 19, 25, 1, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1297023178/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatesritual.bandcamp.com/album/this-door-is-forbidden',
          a_string: 'This Door Is Forbidden by Gates',
          rule: {
            "monday": [ 19, 25, 1, 14 ],
            "tuesday": [ 18, 24, 31, 13 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2961934392/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cejero.bandcamp.com/album/switches',
          a_string: 'Switches by Aaron Dilloway',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 19, 25, 1, 14 ],
            "wednesday": [ 18, 24, 31, 13 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1747961455/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cejero.bandcamp.com/album/br-nsh-j-puncak',
          a_string: 'Brønshøj (Puncak) by Senyawa',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 19, 25, 1, 14 ],
            "thursday": [ 18, 24, 31, 13 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3648618995/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cejero.bandcamp.com/album/on-small-differences-in-sensation',
          a_string: 'On Small Differences in Sensation by Eric Frye',
          rule: {
            "monday": [ 18, 24, 31, 13 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 20, 26, 2, 15 ],
            "saturday": [ 19, 25, 1, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4112588236/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soave.bandcamp.com/album/giusto-pio-motore-immobile',
          a_string: 'Giusto Pio - Motore immobile by soave',
          rule: {
            "monday": [ 19, 25, 1, 14 ],
            "tuesday": [ 18, 24, 31, 13 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 20, 26, 2, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1013983222/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nostalgiedelaboue.bandcamp.com/album/rien-ni-personne-volume-ii-iii',
          a_string: 'Rien Ni Personne ~volume II &amp; III by Various Artists',
          rule: {
            "monday": [ 20, 26, 2, 15 ],
            "tuesday": [ 19, 25, 1, 14 ],
            "wednesday": [ 18, 24, 31, 13 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2537286394/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nostalgiedelaboue.bandcamp.com/album/dossier-bordeaux-2017',
          a_string: 'Dossier Bordeaux 2017 by Various Artists',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 20, 26, 2, 15 ],
            "wednesday": [ 19, 25, 1, 14 ],
            "thursday": [ 18, 24, 31, 13 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=489770131/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rainingyu.bandcamp.com/album/the-lost-memory',
          a_string: 'The Lost Memory by Raining Yu',
          rule: {
            "monday": [ 17, 23, 30, 12 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 20, 26, 2, 15 ],
            "thursday": [ 19, 25, 1, 14 ],
            "saturday": [ 18, 24, 31, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=212349308/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rachelgraffcomposer.bandcamp.com/album/sketching-the-rain',
          a_string: 'sketching the rain by Rachel Graff',
          rule: {
            "monday": [ 18, 24, 31, 13 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 20, 26, 2, 15 ],
            "saturday": [ 19, 25, 1, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2019114802/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://andrewball.bandcamp.com/album/forbidden-languages',
          a_string: 'Forbidden Languages by Andrew Ball',
          rule: {
            "monday": [ 19, 25, 1, 14 ],
            "tuesday": [ 18, 24, 31, 13 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 20, 26, 2, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3942672415/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://edmundwelles.bandcamp.com/album/live-at-old-first-church-october-6-2006',
          a_string: 'Live at Old First Church, October 6, 2006 by Edmund Welles: the bass clarinet quartet',
          rule: {
            "monday": [ 21, 27, 3, 16 ],
            "tuesday": [ 20, 26, 2, 15 ],
            "wednesday": [ 19, 25, 1, 14 ],
            "thursday": [ 18, 24, 31, 13 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=402816290/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://crumpler.bandcamp.com/album/stravinsky-three-pieces-for-clarinet-orchestral-suite',
          a_string: 'Stravinsky: Three Pieces for Clarinet (Orchestral Suite) by Bryan A. Crumpler, Composer/Orchestrator',
          rule: {
            "monday": [ 17, 23, 30, 12 ],
            "tuesday": [ 21, 27, 3, 16 ],
            "wednesday": [ 20, 26, 2, 15 ],
            "thursday": [ 19, 25, 1, 14 ],
            "saturday": [ 18, 24, 31, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3441416336/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kevinkastningmarkwingfield.bandcamp.com/album/the-line-to-three',
          a_string: 'The Line to Three by Kevin Kastning &amp; Mark Wingfield',
          rule: {
            "monday": [ 18, 24, 31, 13 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 21, 27, 3, 16 ],
            "thursday": [ 20, 26, 2, 15 ],
            "saturday": [ 19, 25, 1, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=778726411/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://populistrecords.bandcamp.com/album/ashley-walters-sweet-anxiety',
          a_string: 'Ashley Walters // Sweet Anxiety by Ashley Walters',
          rule: {
            "monday": [ 19, 25, 1, 14 ],
            "tuesday": [ 18, 24, 31, 13 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 21, 27, 3, 16 ],
            "saturday": [ 20, 26, 2, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4240103389/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://populistrecords.bandcamp.com/album/nicholas-deyoe-for-duane',
          a_string: 'Nicholas Deyoe // for Duane by Nicholas Deyoe',
          rule: {
            "monday": [ 20, 26, 2, 15 ],
            "tuesday": [ 19, 25, 1, 14 ],
            "wednesday": [ 18, 24, 31, 13 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 21, 27, 3, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1683986704/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://weighter.bandcamp.com/album/unfinished-variations-for-jed-speare',
          a_string: 'Unfinished  Variations (for Jed Speare) by Morgan Evans-Weiler',
          rule: {
            "monday": [ 21, 27, 3, 16 ],
            "tuesday": [ 20, 26, 2, 15 ],
            "wednesday": [ 19, 25, 1, 14 ],
            "thursday": [ 18, 24, 31, 13 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1758863023/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/aesthetic-apparatus-clarinet-chamber-music-of-helmut-lachenmann',
          a_string: 'Aesthetic Apparatus: Clarinet Chamber Music of Helmut Lachenmann by Gregory Oakes',
          rule: {
            "monday": [ 17, 23, 30, 12 ],
            "tuesday": [ 21, 27, 3, 16 ],
            "wednesday": [ 20, 26, 2, 15 ],
            "thursday": [ 19, 25, 1, 14 ],
            "saturday": [ 18, 24, 31, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1563094077/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/fcremap',
          a_string: 'fcremap by Alexander Sigman, composer',
          rule: {
            "monday": [ 19, 25, 1, 14 ],
            "tuesday": [ 18, 24, 31, 13 ],
            "wednesday": [ 22, 28, 4, 17 ],
            "thursday": [ 21, 27, 3, 16 ],
            "saturday": [ 20, 26, 2, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3940801723/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/garden-of-diverging-paths',
          a_string: 'Garden of Diverging Paths by Mivos String Quartet',
          rule: {
            "monday": [ 20, 26, 2, 15 ],
            "tuesday": [ 19, 25, 1, 14 ],
            "wednesday": [ 18, 24, 31, 13 ],
            "thursday": [ 22, 28, 4, 17 ],
            "saturday": [ 21, 27, 3, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3839775919/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unsounds.bandcamp.com/album/raw',
          a_string: 'Raw by ANNE LA BERGE performed by MAZE',
          rule: {
            "monday": [ 21, 27, 3, 16 ],
            "tuesday": [ 20, 26, 2, 15 ],
            "wednesday": [ 19, 25, 1, 14 ],
            "thursday": [ 18, 24, 31, 13 ],
            "saturday": [ 22, 28, 4, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1764893140/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unsounds.bandcamp.com/album/subvoice',
          a_string: 'Subvoice by Yannis Kyriakides',
          rule: {
            "monday": [ 22, 28, 4, 17 ],
            "tuesday": [ 21, 27, 3, 16 ],
            "wednesday": [ 20, 26, 2, 15 ],
            "thursday": [ 19, 25, 1, 14 ],
            "saturday": [ 18, 24, 31, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1535885434/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unsounds.bandcamp.com/album/locks',
          a_string: 'Locks by Andy Moor &amp; Kaffe Matthews',
          rule: {
            "monday": [ 18, 24, 31, 13 ],
            "tuesday": [ 22, 28, 4, 17 ],
            "wednesday": [ 21, 27, 3, 16 ],
            "thursday": [ 20, 26, 2, 15 ],
            "saturday": [ 19, 25, 1, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2792560355/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gfguitar.bandcamp.com/album/iv-american-electric-guitars',
          a_string: 'iv: american electric guitars by Giacomo Fiore',
          rule: {
            "monday": [ 19, 25, 1, 14 ],
            "tuesday": [ 18, 24, 31, 13 ],
            "wednesday": [ 22, 28, 4, 17 ],
            "thursday": [ 21, 27, 3, 16 ],
            "saturday": [ 20, 26, 2, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1583679919/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://noahcreshevsky.bandcamp.com/album/rounded-with-a-sleep',
          a_string: 'Rounded With A Sleep by Noah Creshevsky',
          rule: {
            "monday": [ 20, 26, 2, 15 ],
            "tuesday": [ 19, 25, 1, 14 ],
            "wednesday": [ 18, 24, 31, 13 ],
            "thursday": [ 22, 28, 4, 17 ],
            "saturday": [ 21, 27, 3, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=401484961/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arnolddreyblatt.bandcamp.com/album/nodal-excitation',
          a_string: 'Nodal Excitation by Arnold Dreyblatt',
          rule: {
            "monday": [ 22, 28, 4, 17 ],
            "tuesday": [ 21, 27, 3, 16 ],
            "wednesday": [ 20, 26, 2, 15 ],
            "thursday": [ 19, 25, 1, 14 ],
            "saturday": [ 23, 29, 5, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1265430461/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://frozenreeds.bandcamp.com/album/joy-boy',
          a_string: 'Joy Boy by Julius Eastman',
          rule: {
            "monday": [ 23, 29, 5, 18 ],
            "tuesday": [ 22, 28, 4, 17 ],
            "wednesday": [ 21, 27, 3, 16 ],
            "thursday": [ 20, 26, 2, 15 ],
            "saturday": [ 19, 25, 1, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1764262323/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wovenskull.bandcamp.com/album/lair-of-the-glowing-bantling-3',
          a_string: 'Lair of the Glowing Bantling by Woven Skull',
          rule: {
            "monday": [ 19, 25, 1, 14 ],
            "tuesday": [ 23, 29, 5, 18 ],
            "wednesday": [ 22, 28, 4, 17 ],
            "thursday": [ 21, 27, 3, 16 ],
            "saturday": [ 20, 26, 2, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=218440090/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wovenskull.bandcamp.com/album/the-cracking-of-the-limbs',
          a_string: 'The Cracking of the Limbs by Woven Skull',
          rule: {
            "monday": [ 20, 26, 2, 15 ],
            "tuesday": [ 19, 25, 1, 14 ],
            "wednesday": [ 23, 29, 5, 18 ],
            "thursday": [ 22, 28, 4, 17 ],
            "saturday": [ 21, 27, 3, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=589254605/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oxtailrecordings.bandcamp.com/album/rheomodes',
          a_string: 'Rheomodes by Long Distance Poison',
          rule: {
            "monday": [ 21, 27, 3, 16 ],
            "tuesday": [ 20, 26, 2, 15 ],
            "wednesday": [ 19, 25, 1, 14 ],
            "thursday": [ 23, 29, 5, 18 ],
            "saturday": [ 22, 28, 4, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2799377297/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://opaltapes.com/album/leaper',
          a_string: 'Leaper by Gosheven',
          rule: {
            "monday": [ 22, 28, 4, 17 ],
            "tuesday": [ 21, 27, 3, 16 ],
            "wednesday": [ 20, 26, 2, 15 ],
            "thursday": [ 19, 25, 1, 14 ],
            "saturday": [ 23, 29, 5, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2678611870/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cantaloupemusic.bandcamp.com/album/terminals-quartets',
          a_string: 'Terminals Quartets by Bobby Previte',
          rule: {
            "monday": [ 23, 29, 5, 18 ],
            "tuesday": [ 22, 28, 4, 17 ],
            "wednesday": [ 21, 27, 3, 16 ],
            "thursday": [ 20, 26, 2, 15 ],
            "saturday": [ 19, 25, 1, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=186282968/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://audilesnow.bandcamp.com/album/future-perfect-in-the-past',
          a_string: 'Future Perfect in the Past by wrong dials',
          rule: {
            "monday": [ 20, 26, 2, 15 ],
            "tuesday": [ 24, 30, 6, 19 ],
            "wednesday": [ 23, 29, 5, 18 ],
            "thursday": [ 22, 28, 4, 17 ],
            "saturday": [ 21, 27, 3, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1762895927/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zoharum.bandcamp.com/album/widt',
          a_string: 'WIDT by WIDT',
          rule: {
            "monday": [ 21, 27, 3, 16 ],
            "tuesday": [ 20, 26, 2, 15 ],
            "wednesday": [ 24, 30, 6, 19 ],
            "thursday": [ 23, 29, 5, 18 ],
            "saturday": [ 22, 28, 4, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=1509868074/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zamilskaofficial.bandcamp.com/track/closer',
          a_string: 'Closer by ZAMILSKA',
          rule: {
            "monday": [ 22, 28, 4, 17 ],
            "tuesday": [ 21, 27, 3, 16 ],
            "wednesday": [ 20, 26, 2, 15 ],
            "thursday": [ 24, 30, 6, 19 ],
            "saturday": [ 23, 29, 5, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=72989750/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://glisteningexamples.bandcamp.com/album/dissolution',
          a_string: 'Dissolution by Olivia Block',
          rule: {
            "monday": [ 23, 29, 5, 18 ],
            "tuesday": [ 22, 28, 4, 17 ],
            "wednesday": [ 21, 27, 3, 16 ],
            "thursday": [ 20, 26, 2, 15 ],
            "saturday": [ 24, 30, 6, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=526604133/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://glisteningexamples.bandcamp.com/album/mattresslessness',
          a_string: 'mattresslessness by Jason Lescalleet',
          rule: {
            "monday": [ 24, 30, 6, 19 ],
            "tuesday": [ 23, 29, 5, 18 ],
            "wednesday": [ 22, 28, 4, 17 ],
            "thursday": [ 21, 27, 3, 16 ],
            "saturday": [ 20, 26, 2, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2980070177/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://glisteningexamples.bandcamp.com/album/a-t-vlat-ha-h-tulr-l',
          a_string: 'A távlat, ha hátulról by Alvear Courtis Jones',
          rule: {
            "monday": [ 20, 26, 2, 15 ],
            "tuesday": [ 24, 30, 6, 19 ],
            "wednesday": [ 23, 29, 5, 18 ],
            "thursday": [ 22, 28, 4, 17 ],
            "saturday": [ 21, 27, 3, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1844295587/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://injazerorecords.bandcamp.com/album/exit-ruminationExit Rumination by C. Diab',
          a_string: '',
          rule: {
            "monday": [ 21, 27, 3, 16 ],
            "tuesday": [ 20, 26, 2, 15 ],
            "wednesday": [ 24, 30, 6, 19 ],
            "thursday": [ 23, 29, 5, 18 ],
            "saturday": [ 22, 28, 4, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3483655469/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://injazerorecords.bandcamp.com/album/injacomp001',
          a_string: 'INJACOMP001 by Various Artists',
          rule: {
            "monday": [ 23, 29, 5, 18 ],
            "tuesday": [ 22, 28, 4, 17 ],
            "wednesday": [ 21, 27, 3, 16 ],
            "thursday": [ 25, 1, 7, 20 ],
            "saturday": [ 24, 30, 6, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=313673294/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://injazerorecords.bandcamp.com/album/adrift',
          a_string: 'Adrift by Steve Gibbs',
          rule: {
            "monday": [ 24, 30, 6, 19 ],
            "tuesday": [ 23, 29, 5, 18 ],
            "wednesday": [ 22, 28, 4, 17 ],
            "thursday": [ 21, 27, 3, 16 ],
            "saturday": [ 25, 1, 7, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2074672265/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nowhearensemble.bandcamp.com/album/made-in-california',
          a_string: 'Made in California by Now Hear Ensemble',
          rule: {
            "monday": [ 25, 1, 7, 20 ],
            "tuesday": [ 24, 30, 6, 19 ],
            "wednesday": [ 23, 29, 5, 18 ],
            "thursday": [ 22, 28, 4, 17 ],
            "saturday": [ 21, 27, 3, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3935110996/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://danlippelguitar.bandcamp.com/album/fm',
          a_string: 'FM by Flexible Music',
          rule: {
            "monday": [ 21, 27, 3, 16 ],
            "tuesday": [ 25, 1, 7, 20 ],
            "wednesday": [ 24, 30, 6, 19 ],
            "thursday": [ 23, 29, 5, 18 ],
            "saturday": [ 22, 28, 4, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=980678074/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://danlippelguitar.bandcamp.com/album/sustenance',
          a_string: 'Sustenance by Daniel Lippel',
          rule: {
            "monday": [ 22, 28, 4, 17 ],
            "tuesday": [ 21, 27, 3, 16 ],
            "wednesday": [ 25, 1, 7, 20 ],
            "thursday": [ 24, 30, 6, 19 ],
            "saturday": [ 23, 29, 5, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=223156081/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://opengrecords.bandcamp.com/album/a-function-of-memory',
          a_string: 'A Function of Memory by Christopher Grymes, clarinet',
          rule: {
            "monday": [ 23, 29, 5, 18 ],
            "tuesday": [ 22, 28, 4, 17 ],
            "wednesday": [ 21, 27, 3, 16 ],
            "thursday": [ 25, 1, 7, 20 ],
            "saturday": [ 24, 30, 6, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3588138185/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://opengrecords.bandcamp.com/album/steven-stucky-chamber-music',
          a_string: 'Steven Stucky: Chamber Music by Steven Stucky',
          rule: {
            "monday": [ 24, 30, 6, 19 ],
            "tuesday": [ 23, 29, 5, 18 ],
            "wednesday": [ 22, 28, 4, 17 ],
            "thursday": [ 21, 27, 3, 16 ],
            "saturday": [ 25, 1, 7, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1936427437/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gudmundursteinn.bandcamp.com/album/selected-chamber-works-2008-2011',
          a_string: 'Selected Chamber Works 2008-2011 by Guðmundur Steinn Gunnarsson',
          rule: {
            "monday": [ 26, 2, 8, 21 ],
            "tuesday": [ 25, 31, 7, 20 ],
            "wednesday": [ 24, 30, 6, 19 ],
            "thursday": [ 23, 29, 5, 18 ],
            "saturday": [ 22, 28, 4, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4078020219/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sampluta.bandcamp.com/album/broken-symmetries',
          a_string: 'Broken Symmetries by Sam Pluta',
          rule: {
            "monday": [ 22, 28, 4, 17 ],
            "tuesday": [ 26, 2, 8, 21 ],
            "wednesday": [ 25, 31, 7, 20 ],
            "thursday": [ 24, 30, 6, 19 ],
            "saturday": [ 23, 29, 5, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=539989805/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://awavepress.bandcamp.com/album/t-z-a-t-z-i',
          a_string: 'T Z A T Z I by Carmina Escobar',
          rule: {
            "monday": [ 23, 29, 5, 18 ],
            "tuesday": [ 22, 28, 4, 17 ],
            "wednesday": [ 26, 2, 8, 21 ],
            "thursday": [ 25, 31, 7, 20 ],
            "saturday": [ 24, 30, 6, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=396492404/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erstwhilerecords.bandcamp.com/album/l-me-est-sans-retenue-i',
          a_string: 'l’âme est sans retenue I by Jürg Frey',
          rule: {
            "monday": [ 24, 30, 6, 19 ],
            "tuesday": [ 23, 29, 5, 18 ],
            "wednesday": [ 22, 28, 4, 17 ],
            "thursday": [ 26, 2, 8, 21 ],
            "saturday": [ 25, 31, 7, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3538167430/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/streya',
          a_string: 'Streya by Olivia De Prato',
          rule: {
            "monday": [ 25, 31, 7, 20 ],
            "tuesday": [ 24, 30, 6, 19 ],
            "wednesday": [ 23, 29, 5, 18 ],
            "thursday": [ 22, 28, 4, 17 ],
            "saturday": [ 26, 2, 8, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2468676498/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/michael-hersch-images-from-a-closed-ward',
          a_string: 'Michael Hersch: Images from a Closed Ward by Michael Hersch',
          rule: {
            "monday": [ 26, 2, 8, 21 ],
            "tuesday": [ 25, 31, 7, 20 ],
            "wednesday": [ 24, 30, 6, 19 ],
            "thursday": [ 23, 29, 5, 18 ],
            "saturday": [ 22, 28, 4, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1973794575/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erikcarlson.bandcamp.com/album/milton-babbitt-string-quartets',
          a_string: 'Milton Babbitt String Quartets by The Ars Combinatoria String Quartet',
          rule: {
            "monday": [ 22, 28, 4, 17 ],
            "tuesday": [ 26, 2, 8, 21 ],
            "wednesday": [ 25, 31, 7, 20 ],
            "thursday": [ 24, 30, 6, 19 ],
            "saturday": [ 23, 29, 5, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2780305891/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://recollectiongrm.bandcamp.com/album/s-t',
          a_string: 's/t by Jaap Vink',
          rule: {
            "monday": [ 24, 30, 6, 19 ],
            "tuesday": [ 23, 29, 5, 18 ],
            "wednesday": [ 27, 3, 9, 22 ],
            "thursday": [ 26, 1, 8, 21 ],
            "saturday": [ 25, 31, 7, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3563570953/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://catchwaveltd.bandcamp.com/album/first-meeting',
          a_string: 'First Meeting by Dominique Lawalree',
          rule: {
            "monday": [ 25, 31, 7, 20 ],
            "tuesday": [ 24, 30, 6, 19 ],
            "wednesday": [ 23, 29, 5, 18 ],
            "thursday": [ 27, 3, 9, 22 ],
            "saturday": [ 26, 1, 8, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1025449413/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quatuorbozzini-actuellecd.bandcamp.com/album/christopher-butterfield-trip',
          a_string: 'Christopher Butterfield: Trip by Quatuor Bozzini',
          rule: {
            "monday": [ 26, 1, 8, 21 ],
            "tuesday": [ 25, 31, 7, 20 ],
            "wednesday": [ 24, 30, 6, 19 ],
            "thursday": [ 23, 29, 5, 18 ],
            "saturday": [ 27, 3, 9, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'ttps://bandcamp.com/EmbeddedPlayer/album=452161510/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bedroomcommunity.bandcamp.com/album/dissonance',
          a_string: 'Dissonance by Valgeir Sigurðsson',
          rule: {
            "monday": [ 27, 3, 9, 22 ],
            "tuesday": [ 26, 1, 8, 21 ],
            "wednesday": [ 25, 31, 7, 20 ],
            "thursday": [ 24, 30, 6, 19 ],
            "saturday": [ 23, 29, 5, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3712031308/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bedroomcommunity.bandcamp.com/album/the-centre-cannot-hold',
          a_string: 'The Centre Cannot Hold by Ben Frost',
          rule: {
            "monday": [ 23, 29, 5, 18 ],
            "tuesday": [ 27, 3, 9, 22 ],
            "wednesday": [ 26, 1, 8, 21 ],
            "thursday": [ 25, 31, 7, 20 ],
            "saturday": [ 24, 30, 6, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2925816922/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bedroomcommunity.bandcamp.com/album/tessellatum',
          a_string: 'Tessellatum by Nadia Sirota | Liam Byrne | Composed by Donnacha Dennehy',
          rule: {
            "monday": [ 24, 30, 6, 19 ],
            "tuesday": [ 23, 29, 5, 18 ],
            "wednesday": [ 27, 3, 9, 22 ],
            "thursday": [ 26, 1, 8, 21 ],
            "saturday": [ 25, 31, 7, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=87259311/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marcolucchi.bandcamp.com/album/louange-leternel',
          a_string: 'Louange à l&#39;Eternel by Marco Lucchi, Mean Flow, Glenn Sogge &amp; Simon McCorry',
          rule: {
            "monday": [ 25, 31, 7, 20 ],
            "tuesday": [ 24, 30, 6, 19 ],
            "wednesday": [ 23, 29, 5, 18 ],
            "thursday": [ 27, 3, 9, 22 ],
            "saturday": [ 26, 1, 8, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=463622247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rhizomes.bandcamp.com/album/d-sseldorf-recital-2',
          a_string: 'Düsseldorf recital by Dante Boon',
          rule: {
            "monday": [ 27, 2, 9, 22 ],
            "tuesday": [ 26, 1, 8, 21 ],
            "wednesday": [ 25, 31, 7, 20 ],
            "thursday": [ 24, 30, 6, 19 ],
            "saturday": [ 28, 4, 10, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2384785088/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eileanrec.bandcamp.com/album/scale-of-blindness',
          a_string: 'Scale of Blindness by Benjamin Finger',
          rule: {
            "monday": [ 28, 4, 10, 23 ],
            "tuesday": [ 27, 2, 9, 22 ],
            "wednesday": [ 26, 1, 8, 21 ],
            "thursday": [ 25, 31, 7, 20 ],
            "saturday": [ 24, 30, 6, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=133115285/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cathedraltransmissions.bandcamp.com/album/sunshine-and-dust',
          a_string: 'Sunshine and Dust by James A. McDermid',
          rule: {
            "monday": [ 24, 30, 6, 19 ],
            "tuesday": [ 28, 4, 10, 23 ],
            "wednesday": [ 27, 2, 9, 22 ],
            "thursday": [ 26, 1, 8, 21 ],
            "saturday": [ 25, 31, 7, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=600168489/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://subrosalabel.bandcamp.com/album/mani',
          a_string: 'Mani by Pier Luigi Billone',
          rule: {
            "monday": [ 25, 31, 7, 20 ],
            "tuesday": [ 24, 30, 6, 19 ],
            "wednesday": [ 28, 4, 10, 23 ],
            "thursday": [ 27, 2, 9, 22 ],
            "saturday": [ 26, 1, 8, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1933404934/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/wang-lu-urban-inventory',
          a_string: 'Wang Lu: Urban Inventory by Wang Lu',
          rule: {
            "monday": [ 26, 1, 8, 21 ],
            "tuesday": [ 25, 31, 7, 20 ],
            "wednesday": [ 24, 30, 6, 19 ],
            "thursday": [ 28, 4, 10, 23 ],
            "saturday": [ 27, 2, 9, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3675133069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://norentrecords.bandcamp.com/album/biqui-nrr70',
          a_string: '&quot;Biqui&quot; (NRR70) by Forest Management',
          rule: {
            "monday": [ 27, 2, 9, 22 ],
            "tuesday": [ 26, 1, 8, 21 ],
            "wednesday": [ 25, 31, 7, 20 ],
            "thursday": [ 24, 30, 6, 19 ],
            "saturday": [ 28, 4, 10, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3216622706/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://norentrecords.bandcamp.com/album/anal-lobotomy-nrr69',
          a_string: '&quot;Anal Lobotomy&quot; (NRR69) by Fecalove',
          rule: {
            "monday": [ 28, 4, 10, 23 ],
            "tuesday": [ 27, 2, 9, 22 ],
            "wednesday": [ 26, 1, 8, 21 ],
            "thursday": [ 25, 31, 7, 20 ],
            "saturday": [ 24, 30, 6, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4165227689/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://norentrecords.bandcamp.com/album/s-t-nrr68',
          a_string: '&quot;S/T&quot; (NRR68) by Soaplands',
          rule: {
            "monday": [ 25, 31, 7, 20 ],
            "tuesday": [ 29, 5, 11, 24 ],
            "wednesday": [ 28, 3, 10, 23 ],
            "thursday": [ 27, 2, 9, 22 ],
            "saturday": [ 26, 1, 8, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=658665830/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernarecords.bandcamp.com/album/intervals',
          a_string: 'Intervals by Various Artists',
          rule: {
            "monday": [ 26, 1, 8, 21 ],
            "tuesday": [ 25, 31, 7, 20 ],
            "wednesday": [ 29, 5, 11, 24 ],
            "thursday": [ 28, 3, 10, 23 ],
            "saturday": [ 27, 2, 9, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=487377284/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernarecords.bandcamp.com/album/erlendis',
          a_string: 'Erlendis by Veroníque Vaka',
          rule: {
            "monday": [ 27, 2, 9, 22 ],
            "tuesday": [ 26, 1, 8, 21 ],
            "wednesday": [ 25, 31, 7, 20 ],
            "thursday": [ 29, 5, 11, 24 ],
            "saturday": [ 28, 3, 10, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1126713443/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernarecords.bandcamp.com/album/algorithmics',
          a_string: 'Algorithmics by Various Artists',
          rule: {
            "monday": [ 28, 3, 10, 23 ],
            "tuesday": [ 27, 2, 9, 22 ],
            "wednesday": [ 26, 1, 8, 21 ],
            "thursday": [ 25, 31, 7, 20 ],
            "saturday": [ 29, 5, 11, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1866712287/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/organism-evolution',
          a_string: 'Organism_evolution by AROVANE &amp; PORYA HATAMI',
          rule: {
            "monday": [ 29, 5, 11, 24 ],
            "tuesday": [ 28, 3, 10, 23 ],
            "wednesday": [ 27, 2, 9, 22 ],
            "thursday": [ 26, 1, 8, 21 ],
            "saturday": [ 25, 31, 7, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=483552563/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomsmithksv.bandcamp.com/album/ksv-452-acr-x002-cup-of-indignation',
          a_string: 'KSV 452 / ACR X002 Cup of Indignation by Boat Of',
          rule: {
            "monday": [ 25, 31, 7, 20 ],
            "tuesday": [ 29, 5, 11, 24 ],
            "wednesday": [ 28, 3, 10, 23 ],
            "thursday": [ 27, 2, 9, 22 ],
            "saturday": [ 26, 1, 8, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=371393138/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://protocell.bandcamp.com/album/prelude-to-a-certain-midnight',
          a_string: 'Prelude To A Certain Midnight by Leo Okagawa',
          rule: {
            "monday": [ 26, 1, 8, 21 ],
            "tuesday": [ 25, 31, 7, 20 ],
            "wednesday": [ 29, 5, 11, 24 ],
            "thursday": [ 28, 3, 10, 23 ],
            "saturday": [ 27, 2, 9, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2267641813/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dadaixtab.bandcamp.com/album/r-o-c',
          a_string: 'R.O.C. by IX Tab',
          rule: {
            "monday": [ 28, 3, 10, 23 ],
            "tuesday": [ 27, 2, 9, 22 ],
            "wednesday": [ 26, 1, 8, 21 ],
            "thursday": [ 30, 6, 12, 25 ],
            "saturday": [ 29, 4, 11, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3403919969/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://doubtful-sounds.bandcamp.com/album/temps-espace',
          a_string: 'Temps   Espace by Thierry Monnier',
          rule: {
            "monday": [ 29, 4, 11, 24 ],
            "tuesday": [ 28, 3, 10, 23 ],
            "wednesday": [ 27, 2, 9, 22 ],
            "thursday": [ 26, 1, 8, 21 ],
            "saturday": [ 30, 6, 12, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4262352131/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ctatsu.bandcamp.com/album/quartzsite',
          a_string: 'Quartzsite by Curved Light',
          rule: {
            "monday": [ 30, 6, 12, 25 ],
            "tuesday": [ 29, 4, 11, 24 ],
            "wednesday": [ 28, 3, 10, 23 ],
            "thursday": [ 27, 2, 9, 22 ],
            "saturday": [ 26, 1, 8, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4066709875/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/ryan-muncy-hot',
          a_string: 'Ryan Muncy: Hot by New Focus Recordings',
          rule: {
            "monday": [ 26, 1, 8, 21 ],
            "tuesday": [ 26, 1, 8, 21 ],
            "wednesday": [ 30, 6, 12, 25 ],
            "thursday": [ 29, 4, 11, 24 ],
            "saturday": [ 28, 3, 10, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2897674183/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hemispharenokukyo.bandcamp.com/album/variations-on-plastic',
          a_string: 'Variations on Plastic by Philip Sulidae',
          rule: {
            "monday": [ 28, 3, 10, 23 ],
            "tuesday": [ 27, 2, 9, 22 ],
            "wednesday": [ 26, 1, 8, 21 ],
            "thursday": [ 30, 6, 12, 25 ],
            "saturday": [ 29, 4, 11, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1096830546/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://robertcurgenven.bandcamp.com/album/they-tore-the-earth-and-like-a-scar-it-swallowed-them',
          a_string: 'They tore the earth and, like a scar, it swallowed them by Robert Curgenven',
          rule: {
            "monday": [ 29, 4, 11, 24 ],
            "tuesday": [ 28, 3, 10, 23 ],
            "wednesday": [ 27, 2, 9, 22 ],
            "thursday": [ 26, 1, 8, 21 ],
            "saturday": [ 30, 6, 12, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2014340314/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gohleekwang.bandcamp.com/album/morning-study',
          a_string: 'Morning (Study) by Goh Lee Kwang',
          rule: {
            "monday": [ 30, 6, 12, 25 ],
            "tuesday": [ 29, 4, 11, 24 ],
            "wednesday": [ 28, 3, 10, 23 ],
            "thursday": [ 27, 2, 9, 22 ],
            "saturday": [ 26, 1, 8, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3008094938/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gohleekwang.bandcamp.com/album/androids-blues',
          a_string: 'Android&#39;s Blues by Goh Lee Kwang',
          rule: {
            "monday": [ 27, 2, 9, 22 ],
            "tuesday": [ 31, 7, 13, 26 ],
            "wednesday": [ 30, 5, 12, 25 ],
            "thursday": [ 29, 4, 11, 24 ],
            "saturday": [ 28, 3, 10, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2409706674/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gohleekwang.bandcamp.com/album/at-your-service-2',
          a_string: 'At Your Service by Goh Lee Kwang',
          rule: {
            "monday": [ 28, 3, 10, 23 ],
            "tuesday": [ 27, 2, 9, 22 ],
            "wednesday": [ 31, 7, 13, 26 ],
            "thursday": [ 30, 5, 12, 25 ],
            "saturday": [ 29, 4, 11, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3295845270/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gohleekwang.bandcamp.com/album/sunlight-variations',
          a_string: 'Sunlight Variations by Goh Lee Kwang',
          rule: {
            "monday": [ 29, 4, 11, 24 ],
            "tuesday": [ 28, 3, 10, 23 ],
            "wednesday": [ 27, 2, 9, 22 ],
            "thursday": [ 31, 7, 13, 26 ],
            "saturday": [ 30, 5, 12, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2347154279/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eileanrec.bandcamp.com/album/stay-sea',
          a_string: 'Stay / Sea by HolyKindOf',
          rule: {
            "monday": [ 30, 5, 12, 25 ],
            "tuesday": [ 29, 4, 11, 24 ],
            "wednesday": [ 28, 3, 10, 23 ],
            "thursday": [ 27, 2, 9, 22 ],
            "saturday": [ 31, 7, 13, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=29983009/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eileanrec.bandcamp.com/album/a-year-at-ushers-hill',
          a_string: 'A Year at Usher&#39;s Hill by Monty Adkins',
          rule: {
            "monday": [ 31, 7, 13, 26 ],
            "tuesday": [ 30, 5, 12, 25 ],
            "wednesday": [ 29, 4, 11, 24 ],
            "thursday": [ 28, 3, 10, 23 ],
            "saturday": [ 27, 2, 9, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2736807964/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lionelmarchetti.bandcamp.com/album/4-tudes-despace-2009-4-compositions-de-musique-concr-te',
          a_string: '4 études d&#39;espace / 2009 ~ 4 compositions de musique concrète by Lionel Marchetti &amp; quatuor Bomonstre',
          rule: {
            "monday": [ 27, 2, 9, 22 ],
            "tuesday": [ 31, 7, 13, 26 ],
            "wednesday": [ 30, 5, 12, 25 ],
            "thursday": [ 29, 4, 11, 24 ],
            "saturday": [ 28, 3, 10, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=289458274/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kraak.bandcamp.com/album/s-t-2',
          a_string: 's/t by Red Brut',
          rule: {
            "monday": [ 28, 3, 10, 23 ],
            "tuesday": [ 27, 2, 9, 22 ],
            "wednesday": [ 31, 7, 13, 26 ],
            "thursday": [ 30, 5, 12, 25 ],
            "saturday": [ 29, 4, 11, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1631630356/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kraak.bandcamp.com/album/braublff-materie-und-laut',
          a_string: 'Braublff (materie und laut) by KRAAK',
          rule: {
            "monday": [ 30, 5, 12, 25 ],
            "tuesday": [ 29, 4, 11, 24 ],
            "wednesday": [ 28, 3, 10, 23 ],
            "thursday": [ 1, 8, 14, 27 ],
            "saturday": [ 31, 6, 13, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2131220717/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://1631recordings.bandcamp.com/album/memory-sketches',
          a_string: 'Memory Sketches by Tim Linghaus',
          rule: {
            "monday": [ 31, 6, 13, 26 ],
            "tuesday": [ 30, 5, 12, 25 ],
            "wednesday": [ 29, 4, 11, 24 ],
            "thursday": [ 28, 3, 10, 23 ],
            "saturday": [ 1, 8, 14, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=71726943/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://1631recordings.bandcamp.com/album/piano-cloud-series-volume-one',
          a_string: 'Piano Cloud Series - Volume One by V/A',
          rule: {
            "monday": [ 1, 8, 14, 27 ],
            "tuesday": [ 31, 6, 13, 26 ],
            "wednesday": [ 30, 5, 12, 25 ],
            "thursday": [ 29, 4, 11, 24 ],
            "saturday": [ 28, 3, 10, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3729758041/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://1631recordings.bandcamp.com/album/piano-cloud-series-volume-two',
          a_string: 'Piano Cloud Series - Volume Two by V/A',
          rule: {
            "monday": [ 28, 3, 10, 23 ],
            "tuesday": [ 1, 8, 14, 27 ],
            "wednesday": [ 31, 6, 13, 26 ],
            "thursday": [ 30, 5, 12, 25 ],
            "saturday": [ 29, 4, 11, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2701992501/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gohleekwang.bandcamp.com/album/magic-carpet',
          a_string: 'Magic Carpet by Goh Lee Kwang',
          rule: {
            "monday": [ 29, 4, 11, 24 ],
            "tuesday": [ 28, 3, 10, 23 ],
            "wednesday": [ 1, 8, 14, 27 ],
            "thursday": [ 31, 6, 13, 26 ],
            "saturday": [ 30, 5, 12, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1174756314/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whalesrecords.bandcamp.com/album/see',
          a_string: 'See by Muriël Bostdorp',
          rule: {
            "monday": [ 30, 5, 12, 25 ],
            "tuesday": [ 29, 4, 11, 24 ],
            "wednesday": [ 28, 3, 10, 23 ],
            "thursday": [ 1, 8, 14, 27 ],
            "saturday": [ 31, 6, 13, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2345172765/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mikeshiflet.bandcamp.com/album/tetracosa-volume-four',
          a_string: 'Tetracosa, Volume Four by Mike Shiflet',
          rule: {
            "monday": [ 31, 6, 13, 26 ],
            "tuesday": [ 30, 5, 12, 25 ],
            "wednesday": [ 29, 4, 11, 24 ],
            "thursday": [ 28, 3, 10, 23 ],
            "saturday": [ 1, 8, 14, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2635455425/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kevinhufnagel.bandcamp.com/album/backwards-through-the-maze',
          a_string: 'Backwards Through the Maze by Kevin Hufnagel',
          rule: {
            "monday": [ 2, 9, 15, 28 ],
            "tuesday": [ 1, 7, 14, 27 ],
            "wednesday": [ 31, 6, 13, 26 ],
            "thursday": [ 30, 5, 12, 25 ],
            "saturday": [ 29, 4, 11, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2639665102/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernarecords.bandcamp.com/album/orbit',
          a_string: 'Orbit by Snorri Hallgrímsson',
          rule: {
            "monday": [ 29, 4, 11, 24 ],
            "tuesday": [ 2, 9, 15, 28 ],
            "wednesday": [ 1, 7, 14, 27 ],
            "thursday": [ 31, 6, 13, 26 ],
            "saturday": [ 30, 5, 12, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3098775065/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://norentrecords.bandcamp.com/album/spider-milk-batshit-silence-nrr72',
          a_string: '&quot;Spider, Milk, Batshit, Silence&quot; (NRR72) by Amanda R. Howland',
          rule: {
            "monday": [ 30, 5, 12, 25 ],
            "tuesday": [ 29, 4, 11, 24 ],
            "wednesday": [ 2, 9, 15, 28 ],
            "thursday": [ 1, 7, 14, 27 ],
            "saturday": [ 31, 6, 13, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3619344087/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fathermurphy.bandcamp.com/album/rising-a-requiem-for-father-murphy',
          a_string: 'Rising. A Requiem For Father Murphy by Father Murphy',
          rule: {
            "monday": [ 31, 6, 13, 26 ],
            "tuesday": [ 30, 5, 12, 25 ],
            "wednesday": [ 29, 4, 11, 24 ],
            "thursday": [ 2, 9, 15, 28 ],
            "saturday": [ 1, 7, 14, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3499180334/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.diatribe.ie/album/togetherness',
          a_string: 'Togetherness by Ed Bennett / Decibel',
          rule: {
            "monday": [ 1, 7, 14, 27 ],
            "tuesday": [ 31, 6, 13, 26 ],
            "wednesday": [ 30, 5, 12, 25 ],
            "thursday": [ 29, 4, 11, 24 ],
            "saturday": [ 2, 9, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3406352578/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://michaelpisaro.bandcamp.com/album/shades-of-eternal-night',
          a_string: 'Shades of Eternal Night by Michael Pisaro/Reinier van Houdt',
          rule: {
            "monday": [ 2, 9, 15, 28 ],
            "tuesday": [ 1, 7, 14, 27 ],
            "wednesday": [ 31, 6, 13, 26 ],
            "thursday": [ 30, 5, 12, 25 ],
            "saturday": [ 29, 4, 11, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2224524672/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aeolian.bandcamp.com/album/a-channel-for-water',
          a_string: 'A Channel for Water by Richard Skelton',
          rule: {
            "monday": [ 29, 4, 11, 24 ],
            "tuesday": [ 2, 9, 15, 28 ],
            "wednesday": [ 1, 7, 14, 27 ],
            "thursday": [ 31, 6, 13, 26 ],
            "saturday": [ 30, 5, 12, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2976735091/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coldspring.bandcamp.com/album/the-hymn-of-the-7th-illusion-csr241lp',
          a_string: 'The Hymn Of The 7th Illusion (CSR241LP) by Barry Adamson + Pan Sonic + The Hafler Trio',
          rule: {
            "monday": [ 31, 6, 13, 26 ],
            "tuesday": [ 30, 5, 12, 25 ],
            "wednesday": [ 3, 10, 16, 29 ],
            "thursday": [ 2, 8, 15, 28 ],
            "saturday": [ 1, 7, 14, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1045954673/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomsmithksv.bandcamp.com/album/ksv-419-the-propagation-of-negation-ii-expanded-reissue-with-cd-option',
          a_string: 'KSV 419 The Propagation of Negation II (expanded reissue with CD option) by To Live and Shave in H.H.',
          rule: {
            "monday": [ 1, 7, 14, 27 ],
            "tuesday": [ 31, 6, 13, 26 ],
            "wednesday": [ 30, 5, 12, 25 ],
            "thursday": [ 3, 10, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2746851934/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dauw.bandcamp.com/album/excess',
          a_string: 'Excess by Lambert',
          rule: {
            "monday": [ 2, 8, 15, 28 ],
            "tuesday": [ 1, 7, 14, 27 ],
            "wednesday": [ 31, 6, 13, 26 ],
            "thursday": [ 30, 5, 12, 25 ],
            "saturday": [ 3, 10, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1136290339/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aeolian.bandcamp.com/album/h-nefssta-afjall',
          a_string: 'Hánefsstaðafjall by Richard Skelton',
          rule: {
            "monday": [ 3, 10, 16, 29 ],
            "tuesday": [ 2, 8, 15, 28 ],
            "wednesday": [ 1, 7, 14, 27 ],
            "thursday": [ 31, 6, 13, 26 ],
            "saturday": [ 30, 5, 12, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2692223279/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://subrosalabel.bandcamp.com/album/vowel-architecture',
          a_string: 'Vowel Architecture by Tobias Hazan',
          rule: {
            "monday": [ 30, 5, 12, 25 ],
            "tuesday": [ 3, 10, 16, 29 ],
            "wednesday": [ 2, 8, 15, 28 ],
            "thursday": [ 1, 7, 14, 27 ],
            "saturday": [ 31, 6, 13, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=818932694/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://grannyrecords.bandcamp.com/album/s-t',
          a_string: 's/t [κασέτα] by The Pitch',
          rule: {
            "monday": [ 31, 6, 13, 26 ],
            "tuesday": [ 30, 5, 12, 25 ],
            "wednesday": [ 3, 10, 16, 29 ],
            "thursday": [ 2, 8, 15, 28 ],
            "saturday": [ 1, 7, 14, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1725404776/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://koenraadecker.bandcamp.com/album/a-biology-of-shadows',
          a_string: 'A Biology of Shadows by Koenraad Ecker',
          rule: {
            "monday": [ 1, 7, 14, 27 ],
            "tuesday": [ 31, 6, 13, 26 ],
            "wednesday": [ 30, 5, 12, 25 ],
            "thursday": [ 3, 10, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2880676917/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gosheven.bandcamp.com/album/bivaq',
          a_string: 'Bivaq by Gosheven',
          rule: {
            "monday": [ 3, 9, 16, 29 ],
            "tuesday": [ 2, 8, 15, 28 ],
            "wednesday": [ 1, 7, 14, 27 ],
            "thursday": [ 31, 6, 13, 26 ],
            "saturday": [ 4, 11, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4275370243/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://springbreaktapes.bandcamp.com/album/the-evening-hopefuls',
          a_string: 'The Evening Hopefuls by Hainbach',
          rule: {
            "monday": [ 4, 11, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 2, 8, 15, 28 ],
            "thursday": [ 1, 7, 14, 27 ],
            "saturday": [ 31, 6, 13, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3336927687/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://slowcraft.bandcamp.com/album/hidden-for-the-eyes',
          a_string: 'Hidden for the Eyes by Alapastel',
          rule: {
            "monday": [ 31, 6, 13, 26 ],
            "tuesday": [ 4, 11, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 2, 8, 15, 28 ],
            "saturday": [ 1, 7, 14, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2829221749/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://poppy.bandcamp.com/album/resolve',
          a_string: 'Resolve by Poppy Ackroyd',
          rule: {
            "monday": [ 1, 7, 14, 27 ],
            "tuesday": [ 31, 6, 13, 26 ],
            "wednesday": [ 4, 11, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3713189387/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/loadbang-old-fires-catch-old-buildings',
          a_string: 'loadbang: old fires catch old buildings by loadbang',
          rule: {
            "monday": [ 2, 8, 15, 28 ],
            "tuesday": [ 1, 7, 14, 27 ],
            "wednesday": [ 31, 6, 13, 26 ],
            "thursday": [ 4, 11, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=895119018/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/douglas-boyce-some-consequences-of-four-incapacities',
          a_string: 'Douglas Boyce: Some Consequences of Four Incapacities by Douglas Boyce',
          rule: {
            "monday": [ 3, 9, 16, 29 ],
            "tuesday": [ 2, 8, 15, 28 ],
            "wednesday": [ 1, 7, 14, 27 ],
            "thursday": [ 31, 6, 13, 26 ],
            "saturday": [ 4, 11, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=625814160/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/robert-honstein-an-economy-of-means',
          a_string: 'Robert Honstein: An Economy of Means by Doug Perkins, Karl Larson',
          rule: {
            "monday": [ 4, 11, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 2, 8, 15, 28 ],
            "thursday": [ 1, 7, 14, 27 ],
            "saturday": [ 31, 6, 13, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2850889179/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/new-morse-code-simplicity-itself',
          a_string: 'New Morse Code: Simplicity Itself by New Focus Recordings',
          rule: {
            "monday": [ 1, 7, 14, 27 ],
            "tuesday": [ 5, 12, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=60493557/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intaktrec.bandcamp.com/album/julius-eastman-piano-interpretations-24bit-96khz',
          a_string: 'Julius Eastman Piano Interpretations (24bit 96khz) by Kukuruz Quartet',
          rule: {
            "monday": [ 2, 8, 15, 28 ],
            "tuesday": [ 1, 7, 14, 27 ],
            "wednesday": [ 5, 12, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1440899379/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://highplains.bandcamp.com/album/pilot-hill',
          a_string: 'Pilot Hill by High Plains',
          rule: {
            "monday": [ 3, 9, 16, 29 ],
            "tuesday": [ 2, 8, 15, 28 ],
            "wednesday": [ 1, 7, 14, 27 ],
            "thursday": [ 5, 12, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3806014467/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://geographicnorth.bandcamp.com/album/sketch-for-winter-vi-other-states',
          a_string: 'Sketch for Winter VI: Other States by Danny Paul Grody',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 2, 8, 15, 28 ],
            "thursday": [ 1, 7, 14, 27 ],
            "saturday": [ 5, 12, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1458905292/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://geographicnorth.bandcamp.com/album/sketch-for-winter-iv-care-package',
          a_string: 'Sketch for Winter IV: Care Package by Moon Diagrams',
          rule: {
            "monday": [ 5, 12, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 2, 8, 15, 28 ],
            "saturday": [ 1, 7, 14, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2466050112/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jimorourkenwm.bandcamp.com/album/sleep-like-its-winter',
          a_string: 'sleep like it&#39;s winter by Jim O&#39;Rourke',
          rule: {
            "monday": [ 1, 7, 14, 27 ],
            "tuesday": [ 5, 12, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3682264759/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://weighter.bandcamp.com/album/stries-ton-tripes-et-poils',
          a_string: 'Stries ton, tripes et poils by Prune Bécheau',
          rule: {
            "monday": [ 2, 8, 15, 28 ],
            "tuesday": [ 1, 7, 14, 27 ],
            "wednesday": [ 5, 12, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1968818633/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oraclehysterical.bandcamp.com/album/hecuba',
          a_string: 'Hecuba by Oracle Hysterical',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 2, 8, 15, 28 ],
            "thursday": [ 6, 13, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2321937059/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elsewheremusic.bandcamp.com/album/musique-pour-le-lever-du-jour',
          a_string: 'Musique pour le lever du jour by Melaine Dalibert',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 2, 8, 15, 28 ],
            "saturday": [ 6, 13, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2817193186/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/jack-quartet-jack-quartet-plays-ltavoz-composers',
          a_string: 'JACK Quartet: JACK Quartet plays áltaVoz composers by JACK Quartet',
          rule: {
            "monday": [ 6, 13, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=337117550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/jacob-greenberg-hanging-gardens',
          a_string: 'Jacob Greenberg: Hanging Gardens by Jacob Greenberg',
          rule: {
            "monday": [ 2, 8, 15, 28 ],
            "tuesday": [ 6, 13, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2629102403/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/end-stages-violin-concerto',
          a_string: 'End Stages, Violin Concerto by Michael Hersch',
          rule: {
            "monday": [ 3, 9, 16, 29 ],
            "tuesday": [ 2, 8, 15, 28 ],
            "wednesday": [ 6, 13, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=487753064/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/duo-noire-night-triptych',
          a_string: 'Duo Noire: Night Triptych by Duo Noire',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 2, 8, 15, 28 ],
            "thursday": [ 6, 13, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2858244511/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/through-which-the-past-shines-works-by-nils-vigeland-and-reiko-fu-ting',
          a_string: '&quot;...through which the past shines...&quot;: Works by Nils Vigeland and Reiko Füting by Daniel Lippel, John Popham, Nils Vigeland',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 2, 8, 15, 28 ],
            "saturday": [ 6, 13, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=348919945/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/le-boeuf-brothers-jack-quartet',
          a_string: 'Le Boeuf Brothers + JACK Quartet by Le Boeuf Brothers + JACK Quartet',
          rule: {
            "monday": [ 6, 13, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1203595158/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/reinhold-friedl-string-quartets',
          a_string: 'Reinhold Friedl String Quartets by Quatuor Diotima',
          rule: {
            "monday": [ 2, 8, 15, 28 ],
            "tuesday": [ 6, 13, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2534586852/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/zw-lf',
          a_string: 'Zwölf by Burkhard Stangl',
          rule: {
            "monday": [ 3, 9, 16, 29 ],
            "tuesday": [ 2, 8, 15, 28 ],
            "wednesday": [ 6, 13, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=801010717/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/uivo-zebra',
          a_string: 'Uivo Zebra by Uivo Zebra',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 2, 8, 15, 28 ],
            "thursday": [ 6, 13, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1733766922/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/duft',
          a_string: 'Duft by Zeitkratzer',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 2, 8, 15, 28 ],
            "saturday": [ 6, 13, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2257017568/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/gtr-synth-2000',
          a_string: 'Gtr/Synth 2000 by Kevin Drumm',
          rule: {
            "monday": [ 6, 13, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=615221522/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/spectral-arrows-venice',
          a_string: 'Spectral Arrows: Venice by Marco Fusinato',
          rule: {
            "monday": [ 2, 8, 15, 28 ],
            "tuesday": [ 6, 13, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2765787919/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/agitation-stagnation',
          a_string: 'Agitation | Stagnation by Kasper T. Toeplitz / zeitkratzer',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 7, 14, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1707020186/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/constitutional',
          a_string: 'Constitutional by Russell Haswell',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 7, 14, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3496856814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/a-map-of-guilt',
          a_string: 'A Map of Guilt by Mats Gustafsson &amp; Joachim Nordwall',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 7, 14, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=445688392/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kalimalone.bandcamp.com/album/cast-of-mind',
          a_string: 'Cast of Mind by Kali Malone',
          rule: {
            "monday": [ 7, 14, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1715502580/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kalimalone.bandcamp.com/album/organ-dirges-2016-2017',
          a_string: 'Organ Dirges 2016-2017 by Kali Malone',
          rule: {
            "monday": [ 3, 9, 16, 29 ],
            "tuesday": [ 7, 14, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2209518498/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kalimalone.bandcamp.com/album/velocity-of-sleep',
          a_string: 'Velocity of Sleep by Kali Malone',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 7, 14, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4084194553/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/untitled',
          a_string: 'Untitled by Antoine Chessex - Apartment House, Jérôme Noetinger',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 7, 14, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1114834348/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/fluster',
          a_string: 'Fluster by Zbigniew Karkowski / Kasper T.Toeplitz',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 8, 15, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=801776326/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/schobberdebonk',
          a_string: 'Schobberdebonk by Terrie Ex &amp; Paal Nilssen-Love',
          rule: {
            "monday": [ 8, 15, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2463294347/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/bright-astonishment-of-the-night',
          a_string: 'Bright Astonishment of the Night by Mike Majkowski',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 8, 15, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=607290298/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/infra',
          a_string: 'Infra by Sleaze Art',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 8, 15, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=681502106/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/resistance',
          a_string: 'Resistance by Fred Lonberg-Holm &amp; Ken Vandermark',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 8, 15, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2788035657/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/blast-of-silence',
          a_string: 'Blast of Silence by Kasper T.Toeplitz &amp; Julien Ottavi',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 8, 15, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2212923300/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/pink-pearl',
          a_string: 'Pink Pearl by Howard Stelzer &amp; Frans de Waard',
          rule: {
            "monday": [ 8, 15, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1201496113/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/you-can-be-mine',
          a_string: 'You Can Be Mine by Fred Lonberg-Holm &amp; Paal Nilssen-Love',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 9, 16, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=936649727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/conceptual-no-se',
          a_string: 'Conceptual nO!se by Russell Haswell',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 9, 16, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=651719054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/everything-was-forever-until-it-was-no-more',
          a_string: 'Everything Was Forever, Until It Was No More by Konrad Smoleński',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 9, 16, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1372011541/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/venn-circles',
          a_string: 'veNN Circles by Gerard Lebik, Piotr Damasiewicz, Gabriel Ferrandini',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 9, 16, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=391996517/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/both-ends',
          a_string: 'Both Ends by Ballister',
          rule: {
            "monday": [ 9, 16, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3973363956/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/no-new-age',
          a_string: 'No New Age by Kapital',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 9, 16, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3298473719/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/why-is-there-something-instead-of-nothing',
          a_string: 'Why Is There Something Instead Of Nothing? by Mike Majkowski',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 9, 16, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1920900259/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/the-oslo-tapes',
          a_string: 'The Oslo Tapes by Mats Gustafsson &amp; Lasse Marhaug',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 10, 17, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=492441560/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/daturas',
          a_string: 'Daturas by Rogelio Sosa',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 10, 17, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=524045785/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/sin-gas',
          a_string: 'Sin Gas by Paal Nilssen-Love &amp; Mats Gustafsson',
          rule: {
            "monday": [ 10, 17, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1150333841/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/return-from-the-centre-of-earth',
          a_string: 'Return From The Centre Of Earth by Inner Ear',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 10, 17, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3024915530/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/jedwabnik',
          a_string: 'Jedwabnik by Dwutysięczny',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 10, 17, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2022562160/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/con-gas',
          a_string: 'Con Gas by Paal Nilssen-Love &amp; Mats Gustafsson',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 10, 17, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3209390190/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/reverie',
          a_string: 'Reverie by Luminance Ratio',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 10, 17, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2416091319/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/second-breath',
          a_string: 'Second Breath by Fire Room',
          rule: {
            "monday": [ 11, 18, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2104549245/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/scrumptious-sabotage',
          a_string: 'Scrumptious Sabotage by Ikue Mori &amp; Maja S.K. Ratkje',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 11, 18, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=316113302/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/cca',
          a_string: 'Öcca by Cyril Bondi, D&#39;incise, Jacques Demierre, Jonas Kocher',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 11, 18, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3223758348/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/humid-weather',
          a_string: 'Humid Weather by Kevin Drumm',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 11, 18, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2928009228/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/lorigine-tema',
          a_string: 'L&#39;Origine / TEMA by Marco Fusinato',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 11, 18, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1456667997/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/kszta-t',
          a_string: 'Kształt by Wojciech Bąkowski',
          rule: {
            "monday": [ 11, 18, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=403232903/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/atol-drone',
          a_string: 'Atol Drone ± by Wolfram',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 11, 18, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3921857678/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/youre-next',
          a_string: 'You&#39;re Next by Paal Nilssen-Love / Massimo Pupillo / Lasse Marhaug',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 11, 18, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=872493669/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/for-tomasz-sikorski',
          a_string: 'For Tomasz Sikorski by John Tilbury',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 11, 18, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=554056615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/dead-space',
          a_string: 'Dead Space by Blip',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 11, 18, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3928625122/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/moulins',
          a_string: 'Moulins by Tomasz Krakowiak',
          rule: {
            "monday": [ 11, 18, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4259033670/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/moonish',
          a_string: 'Moonish by Culture Of Un',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 11, 18, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=366779703/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/moscaio',
          a_string: 'Moscaio by SEC_',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 11, 18, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3220642688/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/mutanza',
          a_string: 'Mutanza by Reinhold Friedl',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 11, 18, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2340858058/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/chiapaneca',
          a_string: 'Chiapaneca by Paal Nilssen-Love',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3800880866/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/solo-drumkit-improvisations',
          a_string: 'Solo Drumkit Improvisations by Sean Baxter',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1555587624/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/endless-music-for-performers',
          a_string: 'Endless: Music for Performers by Wojciech Puś',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1826270351/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/teyas',
          a_string: 'TEYAS by WIDT x Christoph de Babalon',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4123164387/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gregstuart.bandcamp.com/album/eva-maria-houben-duos',
          a_string: 'Eva-Maria Houben: Duos by Erik Carlson and Greg Stuart',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2191616582/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ghostensemble.bandcamp.com/album/we-who-walk-again',
          a_string: 'We Who Walk Again by Ghost Ensemble',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_musics_id_seq', (SELECT MAX(id) FROM may_musics));");
    });
};
