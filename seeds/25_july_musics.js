'use strict'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('july_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('july_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3711027961/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/bibidi-babidi-boo-2',
          a_string: 'Bibidi Babidi Boo by Deerhoof',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 30, 1, 5, 13 ],
            "thursday": [ 29, 31, 4, 12 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4271325896/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://julianmayorga.bandcamp.com/album/superm-n-y-los-tapires',
          a_string: 'Supermán y los tapires by Julián Mayorga',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 30, 1, 5, 13 ],
            "saturday": [ 29, 31, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2719222096/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fraternaltwin.bandcamp.com/album/homeworlding',
          a_string: 'Homeworlding by Fraternal Twin',
          rule: {
            "monday": [ 29, 31, 4, 12 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 30, 1, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2161883254/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dva2.bandcamp.com/album/nipomo',
          a_string: 'NIPOMO by Dva',
          rule: {
            "monday": [ 30, 1, 5, 13 ],
            "tuesday": [ 29, 31, 4, 12 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 31, 2, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=602852303/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dama-libra.bandcamp.com/album/claw',
          a_string: 'Claw by Dama/Libra',
          rule: {
            "monday": [ 31, 2, 6, 14 ],
            "tuesday": [ 30, 1, 5, 13 ],
            "wednesday": [ 29, 31, 4, 12 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=928201781/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://antiquatedfuture.bandcamp.com/album/recurring-chasms',
          a_string: 'Recurring Chasms by The Washboard Abs',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 30, 1, 5, 13 ],
            "thursday": [ 29, 31, 4, 12 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4260001278/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arabonradar.bandcamp.com/album/zodiac-zoo',
          a_string: 'Zodiac Zoo by Made In Mexico (features Jeff Schneider on guitar)',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 30, 1, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=371755631/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skingraftrecords.bandcamp.com/album/turbo-mattress',
          a_string: 'Turbo Mattress by The Chinese Stars',
          rule: {
            "monday": [ 30, 1, 5, 13 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 31, 2, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3467243048/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skingraftrecords.bandcamp.com/album/ruins-alone',
          a_string: 'Ruins Alone by Ruins Alone',
          rule: {
            "monday": [ 31, 2, 6, 14 ],
            "tuesday": [ 30, 1, 5, 13 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1474790758/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/la-isla-bonita',
          a_string: 'La Isla Bonita by Deerhoof',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 30, 1, 5, 13 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1217250207/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fakebuildings.bandcamp.com/album/primitive-advertising-3',
          a_string: 'Primitive Advertising by Fake Buildings',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 30, 1, 5, 13 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2946865467/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ztapes.bandcamp.com/album/saint-molly',
          a_string: 'Saint Molly by Fox Academy',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 30, 1, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1147182159/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sleeppartypeople.bandcamp.com/album/lingering',
          a_string: 'Lingering by Sleep Party People',
          rule: {
            "monday": [ 30, 1, 5, 13 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 31, 2, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3252101447/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://badafrorecords.bandcamp.com/album/turn-on-tune-in-fuck-off',
          a_string: 'Turn On Tune In Fuck Off by Dragontears',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3236961161/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://howlinggiant.bandcamp.com/album/black-hole-space-wizard-part-1',
          a_string: 'Black Hole Space Wizard: Part 1 by Howling Giant',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1280447735/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dva2.bandcamp.com/album/hu',
          a_string: 'HU by Dva',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3565451903/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bsmrocks.bandcamp.com/album/health',
          a_string: 'Health by Alpha Male Tea Party',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 31, 2, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4231337207/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bsmrocks.bandcamp.com/album/twin-galaxies',
          a_string: 'Twin Galaxies by Delta Sleep',
          rule: {
            "monday": [ 31, 2, 6, 14 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1799431156/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/friend-opportunity-2',
          a_string: 'Friend Opportunity by Deerhoof',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3989667233/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xiuxiu.bandcamp.com/album/forget',
          a_string: 'FORGET by Xiu Xiu',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2465859575/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ofmontreal.bandcamp.com/album/rune-husk',
          a_string: 'Rune Husk by of Montreal',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1217143493/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dirtyprojectors.bandcamp.com/album/the-getty-address',
          a_string: 'The Getty Address by Dirty Projectors',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2154819870/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vampire-weekend.bandcamp.com/album/vampire-weekend',
          a_string: 'Vampire Weekend by Vampire Weekend',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3355136315/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hidrogenesse.bandcamp.com/album/hidrogenesse-versus-the-hidden-cameras',
          a_string: 'Hidrogenesse versus The Hidden Cameras by Hidrogenesse versus The Hidden Cameras',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2880046892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cloudbecomesyourhand.bandcamp.com/album/rest-in-fleas',
          a_string: 'Rest In Fleas by cloud becomes your hand',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3520683750/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://guerillatoss.bandcamp.com/album/gt-ultra',
          a_string: 'GT ULTRA by Guerilla Toss',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3831309651/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://palmnewyork.bandcamp.com/album/trading-basics',
          a_string: 'Trading Basics by Palm',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2173121410/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/chrome-black-gold',
          a_string: 'Chrome Black Gold by Chrome Hoof',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3470289651/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kiln-audio.bandcamp.com/album/meadow-watt',
          a_string: 'meadow:watt by KILN',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2695757310/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chiheihatakeyama.bandcamp.com/album/mirage',
          a_string: 'Mirage by Chihei Hatakeyama',
          rule: {
            "monday": [ 4, 6, 10, 18  ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4098074003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sleeppartypeople.bandcamp.com/album/floating',
          a_string: 'Floating by Sleep Party People',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=877964550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnny2fingers.bandcamp.com/album/green-door-sessions',
          a_string: 'Green Door Sessions by Johnny 2 Fingers &amp; the Deformities',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=262799965/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shilparay.bandcamp.com/album/door-girl',
          a_string: 'Door Girl by Shilpa Ray',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3819428635/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/apple-o',
          a_string: 'Apple O&#39; by Deerhoof',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=565792550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dreamcatalogue.bandcamp.com/album/--18',
          a_string: '新しい日の誕生 by 2814',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3050659632/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ericcopeland.bandcamp.com/album/goofballs',
          a_string: 'Goofballs by Eric Copeland',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1670100583/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/fever-121614',
          a_string: 'Fever 121614 by Deerhoof',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4103317405/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tendonlevey.bandcamp.com/album/countertorch',
          a_string: 'Countertorch by Tendon Levey',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3219900620/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hardrubberorchestra.bandcamp.com/album/crush',
          a_string: 'Crush by John Korsrud&#39;s Hard Rubber Orchestra',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4209349782/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theasteroidbelt.bandcamp.com/album/do-whats-right',
          a_string: 'Do Whats Right by The Asteroid Belt',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=420421917/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://naxatras.bandcamp.com/album/naxatras',
          a_string: 'Naxatras by Naxatras',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=688807833/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tuber.bandcamp.com/album/desert-overcrowded',
          a_string: 'Desert Overcrowded by Tuber',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2229168204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lostbayouramblers.bandcamp.com/album/mammoth-waltz',
          a_string: 'Mammoth Waltz by Lost Bayou Ramblers',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=767238702/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://satelliteyoung.bandcamp.com/album/satellite-young',
          a_string: 'Satellite Young by Satellite Young',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=99843590/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://perturbator.bandcamp.com/album/the-uncanny-valley',
          a_string: 'The Uncanny Valley by PERTURBATOR',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=287335279/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dva2.bandcamp.com/album/botanicula',
          a_string: 'BOTANICULA by Dva',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=360780966/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://store.floex.cz/album/machinarium-soundtrack',
          a_string: 'Machinarium Soundtrack by Tomáš Dvořák',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1427988416/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cocofunka.bandcamp.com/album/ch-caro',
          a_string: 'Chúcaro by Cocofunka',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3300944452/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://melkbelly.bandcamp.com/album/nothing-valley',
          a_string: 'Nothing Valley by Melkbelly',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 7, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3035269069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'https://bandcamp.com/EmbeddedPlayer/album=3035269069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          a_string: 'dripping by Pile',
          rule: {
            "monday": [ 6, 7, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3619728831/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fathistorymonth.bandcamp.com/album/bad-history-month',
          a_string: 'Bad History Month by Fat History Month',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 6, 7, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3956752732/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/ghost-surveillance',
          a_string: 'Ghost Surveillance by Algernon',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 6, 7, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1327765972/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://helloskinny.bandcamp.com/album/revolutions',
          a_string: 'Revolutions by Hello Skinny',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 6, 7, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2898603439/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://meltyourselfdown.bandcamp.com/album/melt-yourself-down',
          a_string: 'Melt Yourself Down by Melt Yourself Down',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 7, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1326694238/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://durant.bandcamp.com/album/dimensi-n-d',
          a_string: 'Dimensión_D by Durant',
          rule: {
            "monday": [ 6, 7, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3672765699/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://r-ch-v.bandcamp.com/album/hypnosys',
          a_string: 'HYPNOSYS by Upgrayedd Smurphy',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 8, 13, 21 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=22561417/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orangemilkrecords.bandcamp.com/album/soft-channel',
          a_string: 'Soft Channel by Giant Claw',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 7, 8, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=45679449/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emptymty.bandcamp.com/album/tacos-al-vaporwave',
          a_string: 'Tacos Al Vaporwave by Sentidos Apuestos',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 7, 8, 13, 21 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1356105338/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://acidbat.bandcamp.com/album/lupercalia',
          a_string: 'Lupercalia by Acidbat',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 7, 8, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=372118778/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://churchfire.bandcamp.com/album/pussy-blood',
          a_string: 'pussy blood by church fire',
          rule: {
            "monday": [ 7, 8, 13, 21 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1369389152/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bongwishbbib.bandcamp.com/album/bong-wish-ep',
          a_string: 'Bong Wish EP by Bong Wish',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 8, 13, 21 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4220190943/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://spacecaptainofficial.bandcamp.com/album/all-flowers-in-time',
          a_string: 'All Flowers In Time by Space Captain',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 7, 8, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1111516104/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jonbap.bandcamp.com/album/yesterdays-homily',
          a_string: 'Yesterday&#39;s Homily by Jon Bap',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 9, 14, 22 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2586212974/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fineforest.bandcamp.com/album/wannabewithu',
          a_string: 'wannabewithu by Cuco',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 8, 9, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1062515144/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thezephyrbones.bandcamp.com/album/secret-place',
          a_string: 'Secret Place by The Zephyr Bones',
          rule: {
            "monday": [ 8, 9, 14, 22 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2138740185/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fantasticabastidas.bandcamp.com/album/time-portal',
          a_string: 'Time Portal by Bastidas!',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 8, 9, 14, 22 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1622777037/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://acid-mess.bandcamp.com/album/ii',
          a_string: 'II by Acid Mess',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 8, 9, 14, 22 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=558676569/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sergeantthunderhoof.bandcamp.com/album/ride-of-the-hoof',
          a_string: 'Ride Of The Hoof by Sergeant Thunderhoof',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 9, 14, 22 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4154098583/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elephanttreeband.bandcamp.com/album/elephant-tree',
          a_string: 'Elephant Tree by Elephant Tree',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 8, 9, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2455120945/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://crooked-man.bandcamp.com/album/crooked-man-2xlp',
          a_string: 'Crooked Man 2xLP by Crooked Man',
          rule: {
            "monday": [ 9, 10, 15, 23 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2662097331/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deliagonzalez.bandcamp.com/album/hidden-song-ep',
          a_string: 'Hidden Song EP by Delia Gonzalez',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 9, 10, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3889725135/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nhkyxkoyxen.bandcamp.com/album/exit-entrance',
          a_string: 'Exit Entrance by NHK',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 9, 10, 15, 23 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=326280549/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kittykittytuna.bandcamp.com/album/kitty-kitty-tuna',
          a_string: 'Kitty Kitty Tuna by Kitty Kitty Tuna',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 9, 10, 15, 23 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1272704842/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://apneu.bandcamp.com/album/mixed-feelings',
          a_string: 'Mixed Feelings by Apneu',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 12, 14, 18, 26 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 9, 10, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1668690885/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thesweetreleaseofdeath.bandcamp.com/album/the-sweet-release-of-death-2',
          a_string: 'The Sweet Release of Death by The Sweet Release Of Death',
          rule: {
            "monday": [ 9, 10, 15, 23 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1997614797/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://boredoms.bandcamp.com/album/sab-se-purani-bab',
          a_string: 'SAB SE PURANI BAB by SAICOBAB',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 9, 10, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2822080657/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://boredoms.bandcamp.com/album/super-roots-9',
          a_string: 'Super Roots 9 by Boredoms',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 11, 16, 24 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 13, 15, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1207169486/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/cover-band',
          a_string: 'Cover Band by Cover Band',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 12, 14, 18, 26 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 10, 11, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1915377227/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://esmerine.bandcamp.com/album/mechanics-of-dominion',
          a_string: 'Mechanics Of Dominion by Esmerine',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 10, 11, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3091200220/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chelseawolfe.bandcamp.com/album/abyss',
          a_string: 'Abyss by CHELSEA WOLFE',
          rule: {
            "monday": [ 10, 11, 16, 24 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4022394178/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deafheavens.bandcamp.com/album/sunbather',
          a_string: 'Sunbather by deafheaven',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 10, 11, 16, 24 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 13, 15, 19, 27 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1714333262/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/the-man-the-king-the-girl',
          a_string: 'The Man, The King, The Girl by Deerhoof',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 11, 16, 24 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 13, 15, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1516871805/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://romanticstates.bandcamp.com/album/corduroy-in-italy',
          a_string: 'Corduroy In Italy by Romantic States',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 12, 14, 18, 26 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 10, 11, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=996945265/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://umen.bandcamp.com/album/u-men',
          a_string: 'U-Men by U-Men',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 14, 16, 20, 28 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 11, 12, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3696947829/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shabazzpalaces.bandcamp.com/album/quazarz-born-on-a-gangster-star',
          a_string: 'Quazarz: Born on a Gangster Star by Shabazz Palaces',
          rule: {
            "monday": [ 11, 12, 17, 25 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 14, 16, 20, 28 ],
            "thursday": [ 13, 15, 19, 27 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1009899070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hausumountain.bandcamp.com/album/drip-mental',
          a_string: 'Drip Mental by Fire-Toolz',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 11, 12, 17, 25 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 14, 16, 20, 28 ],
            "saturday": [ 13, 15, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3513002519/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://michellezauner.bandcamp.com/album/psychopomp-2',
          a_string: 'Psychopomp by Japanese Breakfast',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 12, 14, 18, 26 ],
            "wednesday": [ 11, 12, 17, 25 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 14, 16, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2179974400/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://agentbla.bandcamp.com/album/agent-bl',
          a_string: 'Agent blå by Agent Blå',
          rule: {
            "monday": [ 14, 16, 20, 28 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 11, 12, 17, 25 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=664087412/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fatherdaughterrecords.bandcamp.com/album/uncontrollable-salvation',
          a_string: 'Uncontrollable Salvation by Pardoner',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 14, 16, 20, 28 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 11, 12, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1747651969/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laetitiasadier.bandcamp.com/album/find-me-finding-you',
          a_string: 'Find Me Finding You by Laetitia Sadier',
          rule: {
            "monday": [ 11, 12, 17, 25 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 14, 16, 20, 28 ],
            "thursday": [ 13, 15, 19, 27 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4250172799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emaband.bandcamp.com/album/exile-in-the-outer-ring',
          a_string: 'Exile In The Outer Ring by EMA',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 12, 13, 18, 26 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 15, 17, 21, 29 ],
            "saturday": [ 14, 16, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1204311381/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alvvays.bandcamp.com/album/antisocialites',
          a_string: 'Antisocialites by Alvvays',
          rule: {
            "monday": [ 14, 16, 20, 28 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 12, 13, 18, 26 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 15, 17, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2359781516/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://astronautico.bandcamp.com/album/lrain',
          a_string: 'L&#39;Rain by L&#39;Rain',
          rule: {
            "monday": [ 15, 17, 21, 29 ],
            "tuesday": [ 14, 16, 20, 28 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 12, 13, 18, 26 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3262808055/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ibibiosoundmachine.bandcamp.com/album/uyai',
          a_string: 'Uyai by Ibibio Sound Machine',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 15, 17, 21, 29 ],
            "wednesday": [ 14, 16, 20, 28 ],
            "thursday": [ 13, 15, 19, 27 ],
            "saturday": [ 12, 13, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2718698487/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ryanpower.bandcamp.com/album/they-sell-doomsday',
          a_string: '&#39;They Sell Doomsday&#39; by Ryan Power',
          rule: {
            "monday": [ 12, 13, 18, 26 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 15, 17, 21, 29 ],
            "thursday": [ 14, 16, 20, 28 ],
            "saturday": [ 13, 15, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1125014485/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theimpalers.bandcamp.com/album/cellar-dweller-lp',
          a_string: 'Cellar Dweller LP by Impalers',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 12, 13, 18, 26 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 15, 17, 21, 29 ],
            "saturday": [ 14, 16, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=881160943/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yellowmaskcxllective.bandcamp.com/album/when-daffi-attacks',
          a_string: 'When Daffi Attacks by Jeremiah Jae',
          rule: {
            "monday": [ 14, 16, 20, 28 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 12, 13, 18, 26 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 15, 17, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2893042838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://charlybliss.bandcamp.com/album/guppy',
          a_string: 'Guppy by Charly Bliss',
          rule: {
            "monday": [ 16, 18, 22, 30 ],
            "tuesday": [ 15, 17, 21, 29 ],
            "wednesday": [ 14, 16, 20, 28 ],
            "thursday": [ 13, 14, 19, 27 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1235529255/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tica-douglas-tl.bandcamp.com/album/our-lady-star-of-the-sea-help-and-protect-us',
          a_string: 'Our Lady Star of the Sea, Help and Protect Us by Tica Douglas',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 16, 18, 22, 30 ],
            "wednesday": [ 15, 17, 21, 29 ],
            "thursday": [ 14, 16, 20, 28 ],
            "saturday": [ 13, 14, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2729824247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://samuelhallkvist.bandcamp.com/album/variety-of-rhythm',
          a_string: 'Variety of Rhythm by Samuel Hällkvist',
          rule: {
            "monday": [ 13, 14, 19, 27 ],
            "tuesday": [ 12, 14, 18, 26 ],
            "wednesday": [ 16, 18, 22, 30 ],
            "thursday": [ 15, 17, 21, 29 ],
            "saturday": [ 14, 16, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4250828814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://weaves.bandcamp.com/album/wide-open-lp',
          a_string: 'Wide Open (LP) by Weaves',
          rule: {
            "monday": [ 14, 16, 20, 28 ],
            "tuesday": [ 13, 14, 19, 27 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 16, 18, 22, 30 ],
            "saturday": [ 15, 17, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3211309162/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://klanggalerie.bandcamp.com/album/13th-anniversary-show-live-in-the-usa',
          a_string: '13th Anniversary Show - Live In The USA by THE RESIDENTS',
          rule: {
            "monday": [ 15, 17, 21, 29 ],
            "tuesday": [ 14, 16, 20, 28 ],
            "wednesday": [ 13, 14, 19, 27 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 16, 18, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3925700802/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dva2.bandcamp.com/album/caligari',
          a_string: 'Caligari by Dva',
          rule: {
            "monday": [ 16, 18, 22, 30 ],
            "tuesday": [ 15, 17, 21, 29 ],
            "wednesday": [ 14, 16, 20, 28 ],
            "thursday": [ 13, 14, 19, 27 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2398889685/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://store.floex.cz/album/zorya',
          a_string: 'Zorya by Floex',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 16, 18, 22, 30 ],
            "wednesday": [ 15, 17, 21, 29 ],
            "thursday": [ 14, 16, 20, 28 ],
            "saturday": [ 13, 14, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1088181693/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orbitstern.bandcamp.com/album/ude-i-skoven-inde-i-byen',
          a_string: 'Ude i Skoven, Inde i Byen by Orbit Stern',
          rule: {
            "monday": [ 14, 15, 20, 28 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 17, 19, 23, 31 ],
            "thursday": [ 16, 18, 22, 30 ],
            "saturday": [ 15, 17, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1821351093/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://filthyhuns.bandcamp.com/album/forever-beast',
          a_string: 'Forever Beast by Filthy Huns',
          rule: {
            "monday": [ 15, 17, 21, 29 ],
            "tuesday": [ 14, 15, 20, 28 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 17, 19, 23, 31 ],
            "saturday": [ 16, 18, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=331787994/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orangemilkrecords.bandcamp.com/album/pharma',
          a_string: 'Pharma by Nmesh',
          rule: {
            "monday": [ 16, 18, 22, 30 ],
            "tuesday": [ 15, 17, 21, 29 ],
            "wednesday": [ 14, 15, 20, 28 ],
            "thursday": [ 13, 15, 19, 27 ],
            "saturday": [ 17, 19, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=711491144/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.bornbadrecords.net/album/dakhla-sahara-session',
          a_string: 'DAKHLA - SAHARA - SESSION by GROUP DOUEH &amp; CHEVEU',
          rule: {
            "monday": [ 17, 19, 23, 31 ],
            "tuesday": [ 16, 18, 22, 30 ],
            "wednesday": [ 15, 17, 21, 29 ],
            "thursday": [ 14, 15, 20, 28 ],
            "saturday": [ 13, 15, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3738901307/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wharfcatrecords.bandcamp.com/album/bye-bye-berta',
          a_string: 'Bye Bye Berta by Palberta',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 17, 19, 23, 31 ],
            "wednesday": [ 16, 18, 22, 30 ],
            "thursday": [ 15, 17, 21, 29 ],
            "saturday": [ 14, 15, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4189769649/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wharfcatrecords.bandcamp.com/album/the-floating-world',
          a_string: 'The Floating World by Wet Hair',
          rule: {
            "monday": [ 14, 15, 20, 28 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 17, 19, 23, 31 ],
            "thursday": [ 16, 18, 22, 30 ],
            "saturday": [ 15, 17, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4172472486/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wharfcatrecords.bandcamp.com/album/honey-new-moody-judy',
          a_string: 'Honey - New Moody Judy by Honey',
          rule: {
            "monday": [ 15, 17, 21, 29 ],
            "tuesday": [ 14, 15, 20, 28 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 17, 19, 23, 31 ],
            "saturday": [ 16, 18, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3770315567/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/deerhoof-vs-evil',
          a_string: 'Deerhoof vs. Evil by Deerhoof',
          rule: {
            "monday": [ 17, 19, 23, 31 ],
            "tuesday": [ 16, 18, 22, 30 ],
            "wednesday": [ 15, 16, 21, 29 ],
            "thursday": [ 14, 16, 20, 28 ],
            "saturday": [ 18, 20, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3268928749/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laluz.bandcamp.com/album/weirdo-shrine',
          a_string: 'Weirdo Shrine by La Luz',
          rule: {
            "monday": [ 18, 20, 24, 1 ],
            "tuesday": [ 17, 19, 23, 31 ],
            "wednesday": [ 16, 18, 22, 30 ],
            "thursday": [ 15, 16, 21, 29 ],
            "saturday": [ 14, 16, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=100373839/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://outsideworld.bandcamp.com/album/war-war',
          a_string: 'War &amp; War by Outside World',
          rule: {
            "monday": [ 14, 16, 20, 28 ],
            "tuesday": [ 18, 20, 24, 1 ],
            "wednesday": [ 17, 19, 23, 31 ],
            "thursday": [ 16, 18, 22, 30 ],
            "saturday": [ 15, 16, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2695348918/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://comacinema.bandcamp.com/album/loss-memory-2',
          a_string: 'Loss Memory by Coma Cinema',
          rule: {
            "monday": [ 15, 16, 21, 29 ],
            "tuesday": [ 14, 16, 20, 28 ],
            "wednesday": [ 18, 20, 24, 1 ],
            "thursday": [ 17, 19, 23, 31 ],
            "saturday": [ 16, 18, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2088398940/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erototox.bandcamp.com/album/barricades',
          a_string: 'Barricades by Franck Vigroux',
          rule: {
            "monday": [ 16, 18, 22, 30 ],
            "tuesday": [ 15, 16, 21, 29 ],
            "wednesday": [ 14, 16, 20, 28 ],
            "thursday": [ 18, 20, 24, 1 ],
            "saturday": [ 17, 19, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=591683757/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hahafits.bandcamp.com/album/all-belief-is-paradise',
          a_string: 'All Belief is Paradise by Fits',
          rule: {
            "monday": [ 17, 19, 23, 31 ],
            "tuesday": [ 16, 18, 22, 30 ],
            "wednesday": [ 15, 16, 21, 29 ],
            "thursday": [ 14, 16, 20, 28 ],
            "saturday": [ 18, 20, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3333685211/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bandcamp.for-tune.pl/album/mazurki',
          a_string: 'Mazurki by Marcin Masecki',
          rule: {
            "monday": [ 18, 20, 24, 1 ],
            "tuesday": [ 17, 19, 23, 31 ],
            "wednesday": [ 16, 18, 22, 30 ],
            "thursday": [ 15, 16, 21, 29 ],
            "saturday": [ 14, 16, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1835923031/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://busdriver-thumbs.bandcamp.com/album/thumbs-2',
          a_string: 'Thumbs by Busdriver',
          rule: {
            "monday": [ 15, 17, 21, 29 ],
            "tuesday": [ 19, 21, 25, 2 ],
            "wednesday": [ 18, 20, 24, 1 ],
            "thursday": [ 17, 19, 23, 31 ],
            "saturday": [ 16, 17, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1117381002/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blankspell.bandcamp.com/album/4-track-demo',
          a_string: '4-track demo by BLANK SPELL',
          rule: {
            "monday": [ 16, 17, 22, 30 ],
            "tuesday": [ 15, 17, 21, 29 ],
            "wednesday": [ 19, 21, 25, 2 ],
            "thursday": [ 18, 20, 24, 1 ],
            "saturday": [ 17, 19, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1101430676/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://larkingrimm.bandcamp.com/album/chasing-an-illusion-2',
          a_string: 'Chasing an Illusion by Larkin Grimm',
          rule: {
            "monday": [ 17, 19, 23, 31 ],
            "tuesday": [ 16, 17, 22, 30 ],
            "wednesday": [ 15, 17, 21, 29 ],
            "thursday": [ 19, 21, 25, 2 ],
            "saturday": [ 18, 20, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1876571167/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuddlemagic.bandcamp.com/album/ashes-axis',
          a_string: 'Ashes/Axis by Cuddle Magic',
          rule: {
            "monday": [ 18, 20, 24, 1 ],
            "tuesday": [ 17, 19, 23, 31 ],
            "wednesday": [ 16, 17, 22, 30 ],
            "thursday": [ 15, 17, 21, 29 ],
            "saturday": [ 19, 21, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1698642337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pcworship.bandcamp.com/album/buried-wish',
          a_string: 'Buried Wish by PC Worship',
          rule: {
            "monday": [ 19, 21, 25, 2 ],
            "tuesday": [ 18, 20, 24, 1 ],
            "wednesday": [ 17, 19, 23, 31 ],
            "thursday": [ 16, 17, 22, 30 ],
            "saturday": [ 15, 17, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3835148881/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://godunknownrecords.bandcamp.com/album/henge-s-t-12-vinyl',
          a_string: 'Henge - S/T  12&quot; Vinyl by Henge',
          rule: {
            "monday": [ 15, 17, 21, 29 ],
            "tuesday": [ 19, 21, 25, 2 ],
            "wednesday": [ 18, 20, 24, 1 ],
            "thursday": [ 17, 19, 23, 31 ],
            "saturday": [ 16, 17, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1384227129/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://boxrecordsshop.bandcamp.com/album/dandelion-sauce-of-the-ancients',
          a_string: 'Dandelion Sauce Of  The Ancients by Terminal Cheesecake',
          rule: {
            "monday": [ 16, 17, 22, 30 ],
            "tuesday": [ 15, 17, 21, 29 ],
            "wednesday": [ 19, 21, 25, 2 ],
            "thursday": [ 18, 20, 24, 1 ],
            "saturday": [ 17, 19, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2667199015/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gnod.bandcamp.com/album/mirror',
          a_string: 'Mirror by GNOD',
          rule: {
            "monday": [ 18, 20, 24, 1 ],
            "tuesday": [ 17, 18, 23, 31 ],
            "wednesday": [ 16, 18, 22, 30 ],
            "thursday": [ 20, 22, 26, 3 ],
            "saturday": [ 19, 21, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3195185275/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joan-as-policewoman.bandcamp.com/album/damned-devotion',
          a_string: 'Damned Devotion by Joan As Policewoman',
          rule: {
            "monday": [ 19, 21, 25, 2 ],
            "tuesday": [ 18, 20, 24, 1 ],
            "wednesday": [ 17, 18, 23, 31 ],
            "thursday": [ 16, 18, 22, 30 ],
            "saturday": [ 20, 22, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1503174799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ought.bandcamp.com/album/room-inside-the-world',
          a_string: 'Room Inside the World by Ought',
          rule: {
            "monday": [ 20, 22, 26, 3 ],
            "tuesday": [ 19, 21, 25, 2 ],
            "wednesday": [ 18, 20, 24, 1 ],
            "thursday": [ 17, 18, 23, 31 ],
            "saturday": [ 16, 18, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=917780450/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hominidsounds.bandcamp.com/album/shame-spiral',
          a_string: 'Shame Spiral by USA Nails',
          rule: {
            "monday": [ 16, 18, 22, 30 ],
            "tuesday": [ 20, 22, 26, 3 ],
            "wednesday": [ 19, 21, 25, 2 ],
            "thursday": [ 18, 20, 24, 1 ],
            "saturday": [ 17, 18, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2880677590/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carseatheadrest.bandcamp.com/album/twin-fantasy-2',
          a_string: 'Twin Fantasy by Car Seat Headrest',
          rule: {
            "monday": [ 17, 18, 23, 31 ],
            "tuesday": [ 16, 18, 22, 30 ],
            "wednesday": [ 20, 22, 26, 3 ],
            "thursday": [ 19, 21, 25, 2 ],
            "saturday": [ 18, 20, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1539341107/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://burntones.bandcamp.com/album/last-draft-in-different-rooms',
          a_string: 'Last Draft in Different Rooms by Burnt Ones',
          rule: {
            "monday": [ 18, 20, 24, 1 ],
            "tuesday": [ 17, 18, 23, 31 ],
            "wednesday": [ 16, 18, 22, 30 ],
            "thursday": [ 20, 22, 26, 3 ],
            "saturday": [ 19, 21, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1278820781/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ransomnoterecords.bandcamp.com/album/pinned',
          a_string: 'PINNED by C.A.R.',
          rule: {
            "monday": [ 19, 21, 25, 2 ],
            "tuesday": [ 18, 20, 24, 1 ],
            "wednesday": [ 17, 18, 23, 31 ],
            "thursday": [ 16, 18, 22, 30 ],
            "saturday": [ 20, 22, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=367647830/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://miracle.bandcamp.com/album/the-strife-of-love-in-a-dream',
          a_string: 'The Strife Of Love In A Dream by Miracle',
          rule: {
            "monday": [ 21, 23, 27, 4 ],
            "tuesday": [ 20, 22, 26, 3 ],
            "wednesday": [ 19, 21, 25, 2 ],
            "thursday": [ 18, 19, 24, 1 ],
            "saturday": [ 17, 19, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2907730545/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://windatlas.bandcamp.com/album/an-edible-body',
          a_string: 'An Edible Body by Wind Atlas',
          rule: {
            "monday": [ 17, 19, 23, 31 ],
            "tuesday": [ 21, 23, 27, 4 ],
            "wednesday": [ 20, 22, 26, 3 ],
            "thursday": [ 19, 21, 25, 2 ],
            "saturday": [ 18, 19, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4035595196/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erica.bandcamp.com/album/beautiful',
          a_string: 'Beautiful by ÉRICA',
          rule: {
            "monday": [ 18, 19, 24, 1 ],
            "tuesday": [ 17, 19, 23, 31 ],
            "wednesday": [ 21, 23, 27, 4 ],
            "thursday": [ 20, 22, 26, 3 ],
            "saturday": [ 19, 21, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1771546549/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://witchesofthehex.bandcamp.com/album/the-hill-temple',
          a_string: 'The Hill Temple by HEX',
          rule: {
            "monday": [ 19, 21, 25, 2 ],
            "tuesday": [ 18, 19, 24, 1 ],
            "wednesday": [ 17, 19, 23, 31 ],
            "thursday": [ 21, 23, 27, 4 ],
            "saturday": [ 20, 22, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2742963020/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://monikerrecordsss.bandcamp.com/album/eyesore',
          a_string: 'Eyesore by Royal Brat',
          rule: {
            "monday": [ 20, 22, 26, 3 ],
            "tuesday": [ 19, 21, 25, 2 ],
            "wednesday": [ 18, 19, 24, 1 ],
            "thursday": [ 17, 19, 23, 31 ],
            "saturday": [ 21, 23, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1442671953/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://imarhan.bandcamp.com/album/temet',
          a_string: 'Temet by Imarhan',
          rule: {
            "monday": [ 21, 23, 27, 4 ],
            "tuesday": [ 20, 22, 26, 3 ],
            "wednesday": [ 19, 21, 25, 2 ],
            "thursday": [ 18, 19, 24, 1 ],
            "saturday": [ 17, 19, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2770618210/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://purpletapepedigree.bandcamp.com/album/raga-2',
          a_string: 'Raga by Among The Rocks And Roots',
          rule: {
            "monday": [ 17, 19, 23, 31 ],
            "tuesday": [ 21, 23, 27, 4 ],
            "wednesday": [ 20, 22, 26, 3 ],
            "thursday": [ 19, 21, 25, 2 ],
            "saturday": [ 18, 19, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=159043872/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oldenyolk.bandcamp.com/album/olden-yolk',
          a_string: 'Olden Yolk by Olden Yolk',
          rule: {
            "monday": [ 19, 20, 25, 2 ],
            "tuesday": [ 18, 20, 24, 1 ],
            "wednesday": [ 22, 24, 28, 5 ],
            "thursday": [ 21, 23, 27, 4 ],
            "saturday": [ 20, 22, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1952077288/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://campcope.bandcamp.com/album/how-to-socialise-make-friends-2',
          a_string: 'How to Socialise &amp; Make Friends by CAMP COPE',
          rule: {
            "monday": [ 20, 22, 26, 3 ],
            "tuesday": [ 19, 20, 25, 2 ],
            "wednesday": [ 18, 20, 24, 1 ],
            "thursday": [ 22, 24, 28, 5 ],
            "saturday": [ 21, 23, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=422466136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dabrye.bandcamp.com/album/instrmntl',
          a_string: 'Instrmntl by Dabrye',
          rule: {
            "monday": [ 21, 23, 27, 4 ],
            "tuesday": [ 20, 22, 26, 3 ],
            "wednesday": [ 19, 20, 25, 2 ],
            "thursday": [ 18, 20, 24, 1 ],
            "saturday": [ 22, 24, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=166268310/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shigeto.bandcamp.com/album/the-new-monday',
          a_string: 'The New Monday by SHIGETO',
          rule: {
            "monday": [ 22, 24, 28, 5 ],
            "tuesday": [ 21, 23, 27, 4 ],
            "wednesday": [ 20, 22, 26, 3 ],
            "thursday": [ 19, 20, 25, 2 ],
            "saturday": [ 18, 20, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3434285227/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blackmarble.bandcamp.com/album/its-immaterial',
          a_string: 'It&#39;s Immaterial by Black Marble',
          rule: {
            "monday": [ 18, 20, 24, 1 ],
            "tuesday": [ 22, 24, 28, 5 ],
            "wednesday": [ 21, 23, 27, 4 ],
            "thursday": [ 20, 22, 26, 3 ],
            "saturday": [ 19, 20, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2820021326/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://candaceisaband.bandcamp.com/album/new-ruins-2',
          a_string: 'New Ruins by Candace',
          rule: {
            "monday": [ 19, 20, 25, 2 ],
            "tuesday": [ 18, 20, 24, 1 ],
            "wednesday": [ 22, 24, 28, 5 ],
            "thursday": [ 21, 23, 27, 4 ],
            "saturday": [ 20, 22, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1003729605/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dickstusso.bandcamp.com/album/in-heaven',
          a_string: 'In Heaven by Dick Stusso',
          rule: {
            "monday": [ 20, 22, 26, 3 ],
            "tuesday": [ 19, 20, 25, 2 ],
            "wednesday": [ 18, 20, 24, 1 ],
            "thursday": [ 22, 24, 28, 5 ],
            "saturday": [ 21, 23, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2302440866/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://youngfathersofficial.bandcamp.com/album/cocoa-sugar',
          a_string: 'Cocoa Sugar by Young Fathers',
          rule: {
            "monday": [ 22, 24, 28, 5 ],
            "tuesday": [ 21, 23, 27, 4 ],
            "wednesday": [ 20, 21, 26, 3 ],
            "thursday": [ 19, 21, 25, 2 ],
            "saturday": [ 23, 25, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2386713785/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thesewimps.bandcamp.com/album/super-me',
          a_string: 'Super Me by wimps',
          rule: {
            "monday": [ 23, 25, 29, 6 ],
            "tuesday": [ 22, 24, 28, 5 ],
            "wednesday": [ 21, 23, 27, 4 ],
            "thursday": [ 20, 21, 26, 3 ],
            "saturday": [ 19, 21, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1651711639/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bichkraft.bandcamp.com/album/800',
          a_string: '800 by Bichkraft',
          rule: {
            "monday": [ 19, 21, 25, 2 ],
            "tuesday": [ 23, 25, 29, 6 ],
            "wednesday": [ 22, 24, 28, 5 ],
            "thursday": [ 21, 23, 27, 4 ],
            "saturday": [ 20, 21, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1943120878/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://craterbabes.bandcamp.com/album/unearth',
          a_string: 'Unearth by Crater',
          rule: {
            "monday": [ 20, 21, 26, 3 ],
            "tuesday": [ 19, 21, 25, 2 ],
            "wednesday": [ 23, 25, 29, 6 ],
            "thursday": [ 22, 24, 28, 5 ],
            "saturday": [ 21, 23, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=266859198/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anatomy.bandcamp.com/album/s-t',
          a_string: 'S/T by ANATOMY',
          rule: {
            "monday": [ 21, 23, 27, 4 ],
            "tuesday": [ 20, 21, 26, 3 ],
            "wednesday": [ 19, 21, 25, 2 ],
            "thursday": [ 23, 25, 29, 6 ],
            "saturday": [ 22, 24, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=974853139/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://borusiade.bandcamp.com/album/a-body-lp',
          a_string: 'A Body - LP by Borusiade ',
          rule: {
            "monday": [ 22, 24, 28, 5 ],
            "tuesday": [ 21, 23, 27, 4 ],
            "wednesday": [ 20, 21, 26, 3 ],
            "thursday": [ 19, 21, 25, 2 ],
            "saturday": [ 23, 25, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3239344551/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mapledeathrecords.bandcamp.com/album/act-of-tenderness',
          a_string: 'Act Of Tenderness by Cindy Lee',
          rule: {
            "monday": [ 23, 25, 29, 6 ],
            "tuesday": [ 22, 24, 28, 5 ],
            "wednesday": [ 21, 23, 27, 4 ],
            "thursday": [ 20, 21, 26, 3 ],
            "saturday": [ 19, 21, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1426853841/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://themessthetics.bandcamp.com/album/the-messthetics',
          a_string: 'The Messthetics by The Messthetics',
          rule: {
            "monday": [ 20, 22, 26, 3 ],
            "tuesday": [ 24, 26, 30, 7 ],
            "wednesday": [ 23, 25, 29, 6 ],
            "thursday": [ 22, 24, 28, 5 ],
            "saturday": [ 21, 22, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2152159783/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cavernofanti-matter.bandcamp.com/album/hormone-lemonade',
          a_string: 'Hormone Lemonade by Cavern of Anti-Matter',
          rule: {
            "monday": [ 21, 22, 27, 4 ],
            "tuesday": [ 20, 22, 26, 3 ],
            "wednesday": [ 24, 26, 30, 7 ],
            "thursday": [ 23, 25, 29, 6 ],
            "saturday": [ 22, 24, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=309505546/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kendonagasaki.bandcamp.com/album/live-pirate',
          a_string: 'Live @ Pirate by Kendo Nagasaki',
          rule: {
            "monday": [ 22, 24, 28, 5 ],
            "tuesday": [ 21, 22, 27, 4 ],
            "wednesday": [ 20, 22, 26, 3 ],
            "thursday": [ 24, 26, 30, 7 ],
            "saturday": [ 23, 25, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4099941975/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://drunkensailorrecords.bandcamp.com/album/st-lp-2',
          a_string: 'ST LP by The Fritz',
          rule: {
            "monday": [ 23, 25, 29, 6 ],
            "tuesday": [ 22, 24, 28, 5 ],
            "wednesday": [ 21, 22, 27, 4 ],
            "thursday": [ 20, 22, 26, 3 ],
            "saturday": [ 24, 26, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=379379739/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hausumountain.bandcamp.com/album/panic-cycle',
          a_string: 'Panic Cycle by RXM Reality',
          rule: {
            "monday": [ 24, 26, 30, 7 ],
            "tuesday": [ 23, 25, 29, 6 ],
            "wednesday": [ 22, 24, 28, 5 ],
            "thursday": [ 21, 22, 27, 4 ],
            "saturday": [ 20, 22, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3097078780/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://buhrecords.bandcamp.com/album/br93-sexores-east-west',
          a_string: 'BR93 - Sexores - East / West by buh records',
          rule: {
            "monday": [ 20, 22, 26, 3 ],
            "tuesday": [ 24, 26, 30, 7 ],
            "wednesday": [ 23, 25, 29, 6 ],
            "thursday": [ 22, 24, 28, 5 ],
            "saturday": [ 21, 22, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2107137839/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blood-music.bandcamp.com/album/possessor',
          a_string: 'Possessor by GosT',
          rule: {
            "monday": [ 21, 22, 27, 4 ],
            "tuesday": [ 20, 22, 26, 3 ],
            "wednesday": [ 24, 26, 30, 7 ],
            "thursday": [ 23, 25, 29, 6 ],
            "saturday": [ 22, 24, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2905176306/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomwaits.bandcamp.com/album/closing-time-remastered',
          a_string: 'Closing Time (Remastered) by Tom Waits',
          rule: {
            "monday": [ 23, 25, 29, 6 ],
            "tuesday": [ 22, 23, 28, 5 ],
            "wednesday": [ 21, 23, 27, 4 ],
            "thursday": [ 25, 27, 31, 8 ],
            "saturday": [ 24, 26, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2049458663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomwaits.bandcamp.com/album/blue-valentine-remastered',
          a_string: 'Blue Valentine (Remastered) by Tom Waits',
          rule: {
            "monday": [ 24, 26, 30, 7 ],
            "tuesday": [ 23, 25, 29, 6 ],
            "wednesday": [ 22, 23, 28, 5 ],
            "thursday": [ 21, 23, 27, 4 ],
            "saturday": [ 25, 27, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1973033173/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://annavonhausswolffmusic.bandcamp.com/album/dead-magic',
          a_string: 'Dead Magic by Anna von Hausswolff',
          rule: {
            "monday": [ 25, 27, 31, 8 ],
            "tuesday": [ 24, 26, 30, 7 ],
            "wednesday": [ 23, 25, 29, 6 ],
            "thursday": [ 22, 23, 28, 5 ],
            "saturday": [ 21, 23, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3660724465/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ytst.bandcamp.com/album/dirt',
          a_string: 'Dirt by Yamantaka//Sonic Titan',
          rule: {
            "monday": [ 21, 23, 27, 4 ],
            "tuesday": [ 25, 27, 31, 8 ],
            "wednesday": [ 24, 26, 30, 7 ],
            "thursday": [ 23, 25, 29, 6 ],
            "saturday": [ 22, 23, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3056731136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quellechris360.bandcamp.com/album/everythings-fine',
          a_string: 'Everything&#39;s Fine by Jean Grae &amp; Quelle Chris',
          rule: {
            "monday": [ 22, 23, 28, 5 ],
            "tuesday": [ 21, 23, 27, 4 ],
            "wednesday": [ 25, 27, 31, 8 ],
            "thursday": [ 24, 26, 30, 7 ],
            "saturday": [ 23, 25, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=123979905/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theclean.bandcamp.com/album/getaway-deluxe-2016-remaster',
          a_string: 'Getaway (Deluxe 2016 Remaster) by The Clean',
          rule: {
            "monday": [ 23, 25, 29, 6 ],
            "tuesday": [ 22, 23, 28, 5 ],
            "wednesday": [ 21, 23, 27, 4 ],
            "thursday": [ 25, 27, 31, 8 ],
            "saturday": [ 24, 26, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1148085794/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fishriderrecords.bandcamp.com/album/the-shakespeare-monkey',
          a_string: 'The Shakespeare Monkey by The Puddle',
          rule: {
            "monday": [ 24, 26, 30, 7 ],
            "tuesday": [ 23, 25, 29, 6 ],
            "wednesday": [ 22, 23, 28, 5 ],
            "thursday": [ 21, 23, 27, 4 ],
            "saturday": [ 25, 27, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1125138796/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fishriderrecords.bandcamp.com/album/shadow-self',
          a_string: 'Shadow Self by Élan Vital',
          rule: {
            "monday": [ 26, 28, 1, 9 ],
            "tuesday": [ 25, 27, 31, 8 ],
            "wednesday": [ 24, 26, 30, 7 ],
            "thursday": [ 23, 24, 29, 6 ],
            "saturday": [ 22, 24, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=638000661/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orangemilkrecords.bandcamp.com/album/maraschino-mic-drop',
          a_string: 'Maraschino Mic Drop by Honnda',
          rule: {
            "monday": [ 22, 24, 28, 5 ],
            "tuesday": [ 26, 28, 1, 9 ],
            "wednesday": [ 25, 27, 31, 8 ],
            "thursday": [ 24, 26, 30, 7 ],
            "saturday": [ 23, 24, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3938055437/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://partialsmusic.bandcamp.com/album/glossolalia',
          a_string: 'Glossolalia by Partials',
          rule: {
            "monday": [ 23, 24, 29, 6 ],
            "tuesday": [ 22, 24, 28, 5 ],
            "wednesday": [ 26, 28, 1, 9 ],
            "thursday": [ 25, 27, 31, 8 ],
            "saturday": [ 24, 26, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2190904739/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pauldejong.bandcamp.com/album/you-fucken-sucker',
          a_string: 'You Fucken Sucker by Paul de Jong',
          rule: {
            "monday": [ 24, 26, 30, 7 ],
            "tuesday": [ 23, 24, 29, 6 ],
            "wednesday": [ 22, 24, 28, 5 ],
            "thursday": [ 26, 28, 1, 9 ],
            "saturday": [ 25, 27, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3868454649/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unknown-mortal-orchestra.bandcamp.com/album/sex-food',
          a_string: 'Sex &amp; Food by Unknown Mortal Orchestra',
          rule: {
            "monday": [ 25, 27, 31, 8 ],
            "tuesday": [ 24, 26, 30, 7 ],
            "wednesday": [ 23, 24, 29, 6 ],
            "thursday": [ 22, 24, 28, 5 ],
            "saturday": [ 26, 28, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4285268528/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://meltedicecream.bandcamp.com/album/sickest-smashes-from-arson-city',
          a_string: 'Sickest Smashes from Arson City by Melted Ice Cream',
          rule: {
            "monday": [ 26, 28, 1, 9 ],
            "tuesday": [ 25, 27, 31, 8 ],
            "wednesday": [ 24, 26, 30, 7 ],
            "thursday": [ 23, 24, 29, 6 ],
            "saturday": [ 22, 24, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3258870609/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://meltedicecream.bandcamp.com/album/difficult-listening',
          a_string: 'Difficult Listening by Thrill Collins',
          rule: {
            "monday": [ 22, 24, 28, 5 ],
            "tuesday": [ 26, 28, 1, 9 ],
            "wednesday": [ 25, 27, 31, 8 ],
            "thursday": [ 24, 26, 30, 7 ],
            "saturday": [ 23, 24, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3323718665/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wharfcatrecords.bandcamp.com/album/take-the-fall',
          a_string: 'Take the Fall by Bush Tetras',
          rule: {
            "monday": [ 24, 25, 30, 7 ],
            "tuesday": [ 23, 25, 29, 6 ],
            "wednesday": [ 27, 29, 2, 10 ],
            "thursday": [ 26, 28, 1, 9 ],
            "saturday": [ 25, 27, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3198198308/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://doomtownrecords.bandcamp.com/album/discography-cs',
          a_string: 'Discography CS by Nuclear Spring',
          rule: {
            "monday": [ 25, 27, 31, 8 ],
            "tuesday": [ 24, 25, 30, 7 ],
            "wednesday": [ 23, 25, 29, 6 ],
            "thursday": [ 27, 29, 2, 10 ],
            "saturday": [ 26, 28, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2290564515/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://steeltippeddove.bandcamp.com/album/cui-bono',
          a_string: 'cui bono by Steel Tipped Dove',
          rule: {
            "monday": [ 26, 28, 1, 9 ],
            "tuesday": [ 25, 27, 31, 8 ],
            "wednesday": [ 24, 25, 30, 7 ],
            "thursday": [ 23, 25, 29, 6 ],
            "saturday": [ 27, 29, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1258024063/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ganser.bandcamp.com/album/odd-talk',
          a_string: 'Odd Talk by Ganser',
          rule: {
            "monday": [ 27, 29, 2, 10 ],
            "tuesday": [ 26, 28, 1, 9 ],
            "wednesday": [ 25, 27, 31, 8 ],
            "thursday": [ 24, 25, 30, 7 ],
            "saturday": [ 23, 25, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1407941256/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://spillerband.bandcamp.com/album/reuben-cold-cut',
          a_string: 'Reuben+Cold Cut by Spiller',
          rule: {
            "monday": [ 23, 25, 29, 6 ],
            "tuesday": [ 27, 29, 2, 10 ],
            "wednesday": [ 26, 28, 1, 9 ],
            "thursday": [ 25, 27, 31, 8 ],
            "saturday": [ 24, 25, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2850117490/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eprom.bandcamp.com/album/pineapple-ep',
          a_string: 'Pineapple EP by EPROM',
          rule: {
            "monday": [ 24, 25, 30, 7 ],
            "tuesday": [ 23, 25, 29, 6 ],
            "wednesday": [ 27, 29, 2, 10 ],
            "thursday": [ 26, 28, 1, 9 ],
            "saturday": [ 25, 27, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1236987261/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://monikerrecordsss.bandcamp.com/album/channels',
          a_string: 'Channels by Gentle Leader XIV',
          rule: {
            "monday": [ 25, 27, 31, 8 ],
            "tuesday": [ 24, 25, 30, 7 ],
            "wednesday": [ 23, 25, 29, 6 ],
            "thursday": [ 27, 29, 2, 10 ],
            "saturday": [ 26, 28, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1103145199/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://glowmatic.bandcamp.com/album/time-trip',
          a_string: 'Time Trip by House of Blondes',
          rule: {
            "monday": [ 27, 29, 2, 10 ],
            "tuesday": [ 26, 28, 1, 9 ],
            "wednesday": [ 25, 26, 31, 8 ],
            "thursday": [ 24, 26, 30, 7 ],
            "saturday": [ 28, 30, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2559229717/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://poster90210.bandcamp.com/album/elias-is-a-nice-guy',
          a_string: 'Elias Is A Nice Guy by Poster',
          rule: {
            "monday": [ 28, 30, 3, 11 ],
            "tuesday": [ 27, 29, 2, 10 ],
            "wednesday": [ 26, 28, 1, 9 ],
            "thursday": [ 25, 26, 31, 8 ],
            "saturday": [ 24, 26, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1363899751/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://holymotorsband.bandcamp.com/album/slow-sundown-2',
          a_string: 'SLOW SUNDOWN by Holy Motors',
          rule: {
            "monday": [ 24, 26, 30, 7 ],
            "tuesday": [ 28, 30, 3, 11 ],
            "wednesday": [ 27, 29, 2, 10 ],
            "thursday": [ 26, 28, 1, 9 ],
            "saturday": [ 25, 26, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2343052776/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://poisoncityrecords.bandcamp.com/album/modern-convenience',
          a_string: 'Modern Convenience by MOD CON',
          rule: {
            "monday": [ 25, 26, 31, 8 ],
            "tuesday": [ 24, 26, 30, 7 ],
            "wednesday": [ 28, 30, 3, 11 ],
            "thursday": [ 27, 29, 2, 10 ],
            "saturday": [ 26, 28, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1129661843/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wharfcatrecords.bandcamp.com/album/stucco-thieves',
          a_string: 'Stucco Thieves by The Sediment Club',
          rule: {
            "monday": [ 26, 28, 1, 9 ],
            "tuesday": [ 25, 26, 31, 8 ],
            "wednesday": [ 24, 26, 30, 7 ],
            "thursday": [ 28, 30, 3, 11 ],
            "saturday": [ 27, 29, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=592165065/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anemonelovesyou.bandcamp.com/album/baby-only-you-i',
          a_string: 'Baby Only You &amp; I by Anemone',
          rule: {
            "monday": [ 27, 29, 2, 10 ],
            "tuesday": [ 26, 28, 1, 9 ],
            "wednesday": [ 25, 26, 31, 8 ],
            "thursday": [ 24, 26, 30, 7 ],
            "saturday": [ 28, 30, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2297409709/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emotional-response-recs.bandcamp.com/album/guess-work',
          a_string: 'Guess Work by BLUES LAWYER',
          rule: {
            "monday": [ 28, 30, 3, 11 ],
            "tuesday": [ 27, 29, 2, 10 ],
            "wednesday": [ 26, 28, 1, 9 ],
            "thursday": [ 25, 26, 31, 8 ],
            "saturday": [ 24, 26, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3098710388/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://porlolomusic.bandcamp.com/album/awards',
          a_string: 'Awards by Porlolo',
          rule: {
            "monday": [ 25, 27, 31, 8 ],
            "tuesday": [ 29, 31, 4, 12 ],
            "wednesday": [ 28, 30, 3, 11 ],
            "thursday": [ 27, 29, 2, 10 ],
            "saturday": [ 26, 27, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2754826868/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dva2.bandcamp.com/album/cherries-on-air-chuchel-ost',
          a_string: 'CHERRIES ON AIR - CHUCHEL OST by Dva',
          rule: {
            "monday": [ 26, 27, 1, 9 ],
            "tuesday": [ 25, 27, 31, 8 ],
            "wednesday": [ 29, 31, 4, 12 ],
            "thursday": [ 28, 30, 3, 11 ],
            "saturday": [ 27, 29, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=617950688/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://speedyortiz.bandcamp.com/album/twerp-verse',
          a_string: 'Twerp Verse by Speedy Ortiz',
          rule: {
            "monday": [ 27, 29, 2, 10 ],
            "tuesday": [ 26, 27, 1, 9 ],
            "wednesday": [ 25, 27, 31, 8 ],
            "thursday": [ 29, 31, 4, 12 ],
            "saturday": [ 28, 30, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=884656180/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://speedyortiz.bandcamp.com/album/foil-deer',
          a_string: 'Foil Deer by Speedy Ortiz',
          rule: {
            "monday": [ 28, 30, 3, 11 ],
            "tuesday": [ 27, 29, 2, 10 ],
            "wednesday": [ 26, 27, 1, 9 ],
            "thursday": [ 25, 27, 31, 8 ],
            "saturday": [ 29, 31, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2386636327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cutworms.bandcamp.com/album/hollow-ground',
          a_string: 'Hollow Ground by Cut Worms',
          rule: {
            "monday": [ 29, 31, 4, 12 ],
            "tuesday": [ 28, 30, 3, 11 ],
            "wednesday": [ 27, 29, 2, 10 ],
            "thursday": [ 26, 27, 1, 9 ],
            "saturday": [ 25, 27, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3380203305/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://justmustard.bandcamp.com/album/wednesday',
          a_string: 'Wednesday by Just Mustard',
          rule: {
            "monday": [ 25, 27, 31, 8 ],
            "tuesday": [ 29, 31, 4, 12 ],
            "wednesday": [ 28, 30, 3, 11 ],
            "thursday": [ 27, 29, 2, 10 ],
            "saturday": [ 26, 27, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=222235301/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thatwhichisnotsaid.bandcamp.com/album/that-which-is-not-said',
          a_string: 'That Which Is Not Said by TWINS',
          rule: {
            "monday": [ 26, 27, 1, 9 ],
            "tuesday": [ 25, 27, 31, 8 ],
            "wednesday": [ 29, 31, 4, 12 ],
            "thursday": [ 28, 30, 3, 11 ],
            "saturday": [ 27, 29, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1030921102/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beachhouse.bandcamp.com/album/7',
          a_string: '7 by Beach House',
          rule: {
            "monday": [ 28, 30, 3, 11 ],
            "tuesday": [ 27, 28, 2, 10 ],
            "wednesday": [ 26, 28, 1, 9 ],
            "thursday": [ 30, 1, 5, 13 ],
            "saturday": [ 29, 31, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1408804214/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laluz.bandcamp.com/album/floating-features',
          a_string: 'Floating Features by La Luz',
          rule: {
            "monday": [ 29, 31, 4, 12 ],
            "tuesday": [ 28, 30, 3, 11 ],
            "wednesday": [ 27, 28, 2, 10 ],
            "thursday": [ 26, 28, 1, 9 ],
            "saturday": [ 30, 1, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2338461462/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://earwiguk.bandcamp.com/album/under-my-skin-i-am-laughing',
          a_string: 'under my skin I am laughing by earwig uk',
          rule: {
            "monday": [ 30, 1, 5, 13 ],
            "tuesday": [ 29, 31, 4, 12 ],
            "wednesday": [ 28, 30, 3, 11 ],
            "thursday": [ 27, 28, 2, 10 ],
            "saturday": [ 26, 28, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1633164646/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maitrimusic.bandcamp.com/album/after-glow',
          a_string: 'AFTER GLOW by Maitri',
          rule: {
            "monday": [ 26, 28, 1, 9 ],
            "tuesday": [ 30, 1, 5, 13 ],
            "wednesday": [ 29, 31, 4, 12 ],
            "thursday": [ 28, 30, 3, 11 ],
            "saturday": [ 27, 28, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2619640816/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://necromonkey.bandcamp.com/album/a-glimpse-of-possible-endings',
          a_string: 'A Glimpse Of Possible Endings by Necromonkey',
          rule: {
            "monday": [ 27, 28, 2, 10 ],
            "tuesday": [ 26, 28, 1, 9 ],
            "wednesday": [ 30, 1, 5, 13 ],
            "thursday": [ 29, 31, 4, 12 ],
            "saturday": [ 28, 30, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3740133466/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cloudbecomesyourhand.bandcamp.com/album/cloud-becomes-your-hand',
          a_string: 'cloud becomes your hand by cloud becomes your hand',
          rule: {
            "monday": [ 28, 30, 3, 11 ],
            "tuesday": [ 27, 28, 2, 10 ],
            "wednesday": [ 26, 28, 1, 9 ],
            "thursday": [ 30, 1, 5, 13 ],
            "saturday": [ 29, 31, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1639912580/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://agentbla.bandcamp.com/album/medium-rare',
          a_string: 'Medium Rare by Agent Blå',
          rule: {
            "monday": [ 29, 31, 4, 12 ],
            "tuesday": [ 28, 30, 3, 11 ],
            "wednesday": [ 27, 28, 2, 10 ],
            "thursday": [ 26, 28, 1, 9 ],
            "saturday": [ 30, 1, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=967142206/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://evernever-records.bandcamp.com/album/proper-release',
          a_string: 'Proper Release by Patois Counselors',
          rule: {
            "monday": [ 31, 2, 6, 14 ],
            "tuesday": [ 30, 1, 5, 13 ],
            "wednesday": [ 29, 31, 4, 12 ],
            "thursday": [ 28, 29, 3, 11 ],
            "saturday": [ 27, 29, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=288507213/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://woodenshjips.bandcamp.com/album/v',
          a_string: 'V. by Wooden Shjips',
          rule: {
            "monday": [ 27, 29, 2, 10 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 30, 1, 5, 13 ],
            "thursday": [ 29, 31, 4, 12 ],
            "saturday": [ 28, 29, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2381170004/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://melodysechochamber.bandcamp.com/album/bon-voyage',
          a_string: 'Bon Voyage by Melody&#39;s Echo Chamber',
          rule: {
            "monday": [ 28, 29, 3, 11 ],
            "tuesday": [ 27, 29, 2, 10 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 30, 1, 5, 13 ],
            "saturday": [ 29, 31, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=32438955/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hilarywoodsmusic.bandcamp.com/album/colt',
          a_string: 'Colt by Hilary Woods',
          rule: {
            "monday": [ 29, 31, 4, 12 ],
            "tuesday": [ 28, 29, 3, 11 ],
            "wednesday": [ 27, 29, 2, 10 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 30, 1, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4031028685/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://baywitch.bandcamp.com/album/moonstoners',
          a_string: 'Moonstoners by Baywitch',
          rule: {
            "monday": [ 30, 1, 5, 13 ],
            "tuesday": [ 29, 31, 4, 12 ],
            "wednesday": [ 28, 29, 3, 11 ],
            "thursday": [ 27, 29, 2, 10 ],
            "saturday": [ 31, 2, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2645393030/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://letseatgrandma.bandcamp.com/album/im-all-ears',
          a_string: 'I&#39;m All Ears by Let&#39;s Eat Grandma',
          rule: {
            "monday": [ 31, 2, 6, 14 ],
            "tuesday": [ 30, 1, 5, 13 ],
            "wednesday": [ 29, 31, 4, 12 ],
            "thursday": [ 28, 29, 3, 11 ],
            "saturday": [ 27, 29, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1553292795/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theinnocencemission.bandcamp.com/album/sun-on-the-square',
          a_string: 'sun on the square by the innocence mission',
          rule: {
            "monday": [ 27, 29, 2, 10 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 30, 1, 5, 13 ],
            "thursday": [ 29, 31, 4, 12 ],
            "saturday": [ 28, 29, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2313705774/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://themareustoo.bandcamp.com/album/amends',
          a_string: 'Amends by Them Are Us Too',
          rule: {
            "monday": [ 29, 30, 4, 12 ],
            "tuesday": [ 28, 30, 3, 11 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 30, 1, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=933580018/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jayejayle.bandcamp.com/album/no-trail-and-other-unholy-paths',
          a_string: 'No Trail and Other Unholy Paths by Jaye Jayle',
          rule: {
            "monday": [ 30, 1, 5, 13 ],
            "tuesday": [ 29, 30, 4, 12 ],
            "wednesday": [ 28, 30, 3, 11 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 31, 2, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2458337656/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hanavu.bandcamp.com/album/how-many-times-have-you-driven-by',
          a_string: 'How Many Times Have You Driven By by hana vu',
          rule: {
            "monday": [ 31, 2, 6, 14 ],
            "tuesday": [ 30, 1, 5, 13 ],
            "wednesday": [ 29, 30, 4, 12 ],
            "thursday": [ 28, 30, 3, 11 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4083820156/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wharfcatrecords.bandcamp.com/album/roach-goin-down',
          a_string: 'Roach Goin&#39; Down by Palberta',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 30, 1, 5, 13 ],
            "thursday": [ 29, 30, 4, 12 ],
            "saturday": [ 28, 30, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1868343108/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kaelanmikla.bandcamp.com/album/m-nadans-2',
          a_string: 'Mánadans by Kælan Mikla',
          rule: {
            "monday": [ 28, 30, 3, 11 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 30, 1, 5, 13 ],
            "saturday": [ 29, 30, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2284387754/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hausumountain.bandcamp.com/album/ostinato',
          a_string: 'Ostinato by Potions',
          rule: {
            "monday": [ 29, 30, 4, 12 ],
            "tuesday": [ 28, 30, 3, 11 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 30, 1, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2914294731/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://spellling.bandcamp.com/album/hard-to-please',
          a_string: 'Hard to Please by SPELLLING',
          rule: {
            "monday": [ 30, 1, 5, 13 ],
            "tuesday": [ 29, 30, 4, 12 ],
            "wednesday": [ 28, 30, 3, 11 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 31, 2, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3863393374/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thebethsnz.bandcamp.com/album/future-me-hates-me',
          a_string: 'Future Me Hates Me by The Beths',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 30, 31, 5, 13 ],
            "thursday": [ 29, 31, 4, 12 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3147550827/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://batteryoperatedorchestra.bandcamp.com/album/snare',
          a_string: 'Snare by BOO',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 30, 31, 5, 13 ],
            "saturday": [ 29, 31, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3451101493/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dumdumgirls.bandcamp.com/album/i-will-be',
          a_string: 'I Will Be by Dum Dum Girls',
          rule: {
            "monday": [ 29, 31, 4, 12 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 30, 31, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=771795524/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://frokedal.bandcamp.com/album/how-we-made-it',
          a_string: 'How We Made It by Frøkedal',
          rule: {
            "monday": [ 30, 31, 5, 13 ],
            "tuesday": [ 29, 31, 4, 12 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 31, 2, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=913739924/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://flau.bandcamp.com/album/kwaidan',
          a_string: 'KWAIDAN by Teams + Noah + Repeat Pattern',
          rule: {
            "monday": [ 31, 2, 6, 14 ],
            "tuesday": [ 30, 31, 5, 13 ],
            "wednesday": [ 29, 31, 4, 12 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=143267309/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gulchca.bandcamp.com/album/burning-desire-to-draw-last-breath',
          a_string: 'Burning Desire to Draw Last Breath by Gulch',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 30, 31, 5, 13 ],
            "thursday": [ 29, 31, 4, 12 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1363883248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://steadyholiday.bandcamp.com/album/nobodys-watching',
          a_string: 'Nobody&#39;s Watching by Steady Holiday',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 30, 31, 5, 13 ],
            "saturday": [ 29, 31, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3003784461/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thisishellola.bandcamp.com/album/nibiru-tut',
          a_string: 'Nibiru Tut by Beans',
          rule: {
            "monday": [ 30, 1, 5, 13 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 31, 1, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=311549248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://etherschi.bandcamp.com/album/s-t',
          a_string: 's/t by Ethers',
          rule: {
            "monday": [ 31, 1, 6, 14 ],
            "tuesday": [ 30, 1, 5, 13 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3352412997/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hausumountain.bandcamp.com/album/fluid-world-building-101-with-shaman-bambu',
          a_string: 'Fluid World Building 101 With Shaman Bambu by Dustin Wong',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 1, 6, 14 ],
            "wednesday": [ 30, 1, 5, 13 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3829448665/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://finderskeepersrecords.bandcamp.com/album/les-esclaves',
          a_string: 'Les Esclaves by Popera Cosmic',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 31, 1, 6, 14 ],
            "thursday": [ 30, 1, 5, 13 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=527384096/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://richardswift.bandcamp.com/album/the-hex',
          a_string: 'The Hex by Richard Swift',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 31, 1, 6, 14 ],
            "saturday": [ 30, 1, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2337243200/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lowtheband.bandcamp.com/album/double-negative',
          a_string: 'Double Negative by Low',
          rule: {
            "monday": [ 30, 1, 5, 13 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 31, 1, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=14478376/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sadbaxter.bandcamp.com/album/so-happy',
          a_string: 'So Happy by Sad Baxter',
          rule: {
            "monday": [ 31, 1, 6, 14 ],
            "tuesday": [ 30, 1, 5, 13 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3771328696/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vitalidles.bandcamp.com/album/left-hand',
          a_string: 'Left Hand by Vital Idles',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 2, 7, 15 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2779766002/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thesewimps.bandcamp.com/album/garbage-people',
          a_string: 'Garbage People by wimps',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 2, 7, 15 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4068370712/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://woolenmen.bandcamp.com/album/post',
          a_string: 'Post by Woolen Men',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 2, 7, 15 ],
            "saturday": [ 31, 2, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4211276127/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://citruscityrecords.bandcamp.com/album/young-scum',
          a_string: 'Young Scum by Young Scum',
          rule: {
            "monday": [ 31, 2, 6, 14 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 2, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=118774042/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://slumberlandrecs.bandcamp.com/album/modern-meta-physic',
          a_string: 'Modern Meta Physic by Peel Dream Magazine',
          rule: {
            "monday": [ 1, 2, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=478610650/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thebuddysystemproject.com/album/tbs-008',
          a_string: 'TBS 008 by Puerto Rican Space Program',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 2, 7, 15 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3340782085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://roseette.bandcamp.com/album/ignore-the-feeling',
          a_string: 'Ignore the Feeling by Rose Ette',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 2, 7, 15 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=414327979/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://empressof.bandcamp.com/album/us',
          a_string: 'Us by Empress Of',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 3, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2126793544/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shalgamrecords.bandcamp.com/album/g-lgelerine',
          a_string: 'Gölgelerine by Tuğçe Şenoğul',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 3, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2850458725/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coughdrop.bandcamp.com/album/yell-heah',
          a_string: 'Yell Heah by Cough Drop',
          rule: {
            "monday": [ 2, 3, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=388968183/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://projektrecords.bandcamp.com/album/in-flickers',
          a_string: 'In Flickers by Lycia',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 3, 8, 16 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2539808219/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://handdrawndracula.bandcamp.com/album/another-side-of-the-seams',
          a_string: 'Another Side of The Seams by The Seams',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 3, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2471497688/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://racheltaylorbrown.bandcamp.com/album/run-tiny-human',
          a_string: 'run tiny human by Rachel Taylor Brown',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 3, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=513115081/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://missingfoundation.bandcamp.com/album/nature-is-watching-you',
          a_string: 'Nature Is Watching You by Missing Foundation',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 3, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3377234809/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sylvainemusic.bandcamp.com/album/atoms-aligned-coming-undone',
          a_string: 'Atoms Aligned, Coming Undone by Sylvaine',
          rule: {
            "monday": [ 3, 4, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2577198833/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tayloralxndr.bandcamp.com/album/hologram',
          a_string: 'Hologram by TAYLOR ALXNDR',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 4, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=856886061/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hotmule.bandcamp.com/album/cosmic-sounds',
          a_string: 'Cosmic Sounds by N&#39;Draman Blintch',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 4, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2889016530/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thepastelsmusic.bandcamp.com/album/up-for-a-bit-with-the-pastels',
          a_string: 'Up For A Bit With The Pastels by The Pastels',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 4, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1437665138/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://spinningcoin.bandcamp.com/album/permo',
          a_string: 'Permo by Spinning Coin',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 4, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1141845157/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mutantbeatdance.bandcamp.com/album/mutant-beat-dance',
          a_string: 'Mutant Beat Dance by Mutant Beat Dance',
          rule: {
            "monday": [ 3, 4, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1387105591/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vesseluk.bandcamp.com/album/queen-of-golden-dogs',
          a_string: 'Queen of Golden Dogs by Vessel',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 4, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2204232820/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://avantdalebowlingclub.bandcamp.com/album/avantdale-bowling-club',
          a_string: 'Avantdale Bowling Club by Avantdale Bowling Club',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 5, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1646324565/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kouroshyaghmaei.bandcamp.com/album/back-from-the-brink',
          a_string: 'Back From The Brink by Kourosh Yaghmaei',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 5, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3822467491/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://heladonegro.bandcamp.com/album/this-is-how-you-smile',
          a_string: 'This Is How You Smile by Helado Negro',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 5, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1118515103/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eeriewanda.bandcamp.com/album/pet-town',
          a_string: 'Pet Town by Eerie Wanda',
          rule: {
            "monday": [ 4, 5, 10, 18 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1434211584/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blackesteverblack.bandcamp.com/album/enter-silence',
          a_string: 'Enter Silence by BREMEN',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 5, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1890651160/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pearlcrush.bandcamp.com/album/coax-me-out',
          a_string: 'Coax Me Out by Pearl Crush',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 5, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2704103695/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/holdypaws',
          a_string: 'Holdypaws by Deerhoof',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 5, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=906393946/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://khruangbin.bandcamp.com/album/con-todo-el-mundo-n-s-america-edition',
          a_string: 'Con Todo El Mundo (N &amp; S America Edition) by Khruangbin',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 5, 6, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=879531568/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zealandardor.bandcamp.com/album/stranger-fruit',
          a_string: 'Stranger Fruit by Zeal and Ardor',
          rule: {
            "monday": [ 5, 6, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=830335486/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pinchpoints.bandcamp.com/album/mechanical-injury',
          a_string: 'MECHANICAL INJURY by PINCH POINTS',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 5, 6, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=454848065/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://flasherdc.bandcamp.com/album/constant-image',
          a_string: 'Constant Image by Flasher',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 6, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2965354313/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lesdisquesbongojoe.bandcamp.com/album/la-contra-ola',
          a_string: 'La Contra Ola by Various Artists',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 5, 6, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=655528634/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://saysueme.bandcamp.com/album/say-sue-me-where-we-were-together',
          a_string: 'Say Sue Me - Where We Were Together by Say Sue Me',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 5, 6, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=843590072/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://akuphone.bandcamp.com/album/rats-don-t-eat-synthesizers',
          a_string: 'Rats Don’t Eat Synthesizers by Dwarfs of East Agouza',
          rule: {
            "monday": [ 5, 6, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2053727309/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amendunes.bandcamp.com/album/freedom',
          a_string: 'Freedom by Amen Dunes',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 6, 7, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2561797139/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elenasetien.bandcamp.com/album/another-kind-of-revolution',
          a_string: 'Another Kind Of Revolution by Elena Setien',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 6, 7, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1216767339/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hausumountain.bandcamp.com/album/skinless-x-1',
          a_string: 'Skinless X-1 by Fire-Toolz',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 6, 7, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3606103705/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://childrenofzeus.bandcamp.com/album/travel-light',
          a_string: 'Travel Light by Children Of Zeus',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 7, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=61390474/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://veinband.bandcamp.com/album/errorzone',
          a_string: 'errorzone by Vein',
          rule: {
            "monday": [ 6, 7, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1738689416/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yarrowphl.bandcamp.com/album/a-mild-circus',
          a_string: 'A Mild Circus by Yarrow',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 6, 7, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1709586329/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://businessofdreams.bandcamp.com/album/ripe-for-anarchy',
          a_string: 'Ripe For Anarchy by Business Of Dreams',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 6, 7, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2453121308/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ratasenzelo.bandcamp.com/album/despertar-2',
          a_string: 'Despertar by Ratas En Zelo',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 7, 8, 13, 21 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1200430805/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fatamorganabarcelona.bandcamp.com/album/terra-alta',
          a_string: 'Terra Alta by FATAMORGANA',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 7, 8, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4089226496/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://suicidesqueeze.bandcamp.com/album/oh-man-cover-the-ground',
          a_string: 'Oh  Man, Cover The Ground by Shana Cleveland &amp; The Sandcastles',
          rule: {
            "monday": [ 7, 8, 13, 21 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3887543747/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desperatejournalist.bandcamp.com/album/in-search-of-the-miraculous-2',
          a_string: 'In Search of the Miraculous by Desperate Journalist',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 8, 13, 21 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3741523507/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mariasomerville.bandcamp.com/album/all-my-people',
          a_string: 'All My People by Maria Somerville',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 7, 8, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3992674316/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://handhabits.bandcamp.com/album/placeholder',
          a_string: 'placeholder by Hand Habits',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 7, 8, 13, 21 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1562466070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leggy.bandcamp.com/album/let-me-know-your-moon',
          a_string: 'Let Me Know Your Moon by Leggy',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 7, 8, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=715306918/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://warmhuman.bandcamp.com/album/ghastly',
          a_string: 'Ghastly by warm human',
          rule: {
            "monday": [ 8, 9, 14, 22 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1086107546/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://townesvanzandt.bandcamp.com/album/sky-blue',
          a_string: 'Sky Blue by Townes Van Zandt',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 8, 9, 14, 22 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1663299381/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://livinghourband.bandcamp.com/album/softer-faces',
          a_string: 'Softer Faces by Living Hour',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 8, 9, 14, 22 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1744348374/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skingraftrecords.bandcamp.com/album/post-now-round-one-chicago-vs-new-york',
          a_string: 'Post Now: Round One - Chicago vs New York by Various Artists (Cheer-Accident, Flying Luttenbachers, Bobby Conn, etc)',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 9, 14, 22 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1154598003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shinytimes.bandcamp.com/album/cant-be-depressed-2',
          a_string: 'Can&#39;t Be Depressed by Shiny Times',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 8, 9, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=443825303/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://niluferyanya.bandcamp.com/album/miss-universe',
          a_string: 'Miss Universe by Nilufer Yanya',
          rule: {
            "monday": [ 8, 9, 14, 22 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2804755282/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://melby.bandcamp.com/album/none-of-this-makes-me-worry-lp',
          a_string: 'None of this makes me worry [LP] by Melby',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 8, 9, 14, 22 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1053076085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oginalii.bandcamp.com/album/cause-affection',
          a_string: 'Cause &amp; Affection by Oginalii',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 9, 10, 15, 23 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3829280138/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pixelgrip.bandcamp.com/album/heavy-handed-2',
          a_string: 'Heavy Handed by Pixel Grip',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 9, 10, 15, 23 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=823027525/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theresonars1.bandcamp.com/album/no-exit',
          a_string: 'No Exit by The Resonars',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 12, 14, 18, 26 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 9, 10, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1788995354/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://viviennestyg.bandcamp.com/album/rose-of-texas-ep',
          a_string: 'ROSE OF TEXAS ep by Vivienne Styg',
          rule: {
            "monday": [ 9, 10, 15, 23 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1658051686/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://worldbrain.bandcamp.com/album/peer-2-peer',
          a_string: 'Peer 2 Peer by WORLD BRAIN',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 9, 10, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=843931662/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://otobokebeaver.bandcamp.com/album/itekoma-hits',
          a_string: 'ITEKOMA HITS by Otoboke Beaver',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 9, 10, 15, 23 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4277743560/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emilyreo.bandcamp.com/album/only-you-can-see-it',
          a_string: 'Only You Can See It by Emily Reo',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 9, 10, 15, 23 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=570460401/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anxiousmusic.bandcamp.com/album/not-passing',
          a_string: 'Not Passing by Comfort',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 10, 11, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3580126704/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://drahla.bandcamp.com/album/useless-coordinates',
          a_string: 'Useless Coordinates by Drahla',
          rule: {
            "monday": [ 10, 11, 16, 24 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2586957328/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://barrie.bandcamp.com/album/happy-to-be-here',
          a_string: 'Happy To Be Here by Barrie',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 10, 11, 16, 24 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 13, 15, 19, 27 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3930999548/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://snowghosts.bandcamp.com/album/a-quiet-ritual',
          a_string: 'A Quiet Ritual by Snow Ghosts',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 11, 16, 24 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 13, 15, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4280229468/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://olivianeutron-john.bandcamp.com/album/olivia-neutron-john',
          a_string: 'Olivia Neutron-John by Olivia Neutron-John',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 12, 14, 18, 26 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 10, 11, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2042391048/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deathandvanillamusic.bandcamp.com/album/are-you-a-dreamer',
          a_string: 'Are You A Dreamer? by Death &amp; Vanilla',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 10, 11, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2670993182/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://greys.bandcamp.com/album/age-hasnt-spoiled-you',
          a_string: 'Age Hasn&#39;t Spoiled You by Greys',
          rule: {
            "monday": [ 10, 11, 16, 24 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=149151091/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coldshowers.bandcamp.com/album/motionless',
          a_string: 'Motionless by Cold Showers',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 11, 12, 17, 25 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 14, 16, 20, 28 ],
            "saturday": [ 13, 15, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4260896377/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://twin-twin.bandcamp.com/album/crossing-the-great-water',
          a_string: 'Crossing The Great Water 利涉大川 by W. Y. Huang',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 12, 14, 18, 26 ],
            "wednesday": [ 11, 12, 17, 25 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 14, 16, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=287976591/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hidrogenesse.bandcamp.com/album/joter-as-bobas',
          a_string: 'Joterías bobas by Hidrogenesse',
          rule: {
            "monday": [ 14, 16, 20, 28 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 11, 12, 17, 25 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('july_musics_id_seq', (SELECT MAX(id) FROM july_musics));");
    });
};
