'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('august_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('august_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3891162338/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/no-hate',
          a_string: 'No Hate by Wolf Eyes',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 6, 14, 30, 29 ],
            "wednesday": [ 5, 13, 29, 28 ],
            "thursday": [ 4, 12, 28, 27 ],
            "saturday": [ 8, 16, 1, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=970917910/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elevatorbath.bandcamp.com/album/soundtrack-for-dislocation',
          a_string: 'soundtrack for dislocation by matt shoemaker',
          rule: {
            "monday": [ 8, 16, 1, 2 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 6, 14, 30, 29 ],
            "thursday": [ 5, 13, 29, 28 ],
            "saturday": [ 4, 12, 28, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1170682572/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elevatorbath.bandcamp.com/album/flammable-materials-from-foreign-lands',
          a_string: 'flammable materials from foreign lands by jim haynes',
          rule: {
            "monday": [ 4, 12, 28, 27 ],
            "tuesday": [ 8, 16, 1, 2 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 6, 14, 30, 29 ],
            "saturday": [ 5, 13, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=309991513/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chondriticsound.bandcamp.com/album/trojan-self-image',
          a_string: 'Trojan Self Image by Shredded Nerve',
          rule: {
            "monday": [ 5, 13, 29, 28 ],
            "tuesday": [ 4, 12, 28, 27 ],
            "wednesday": [ 8, 16, 1, 2 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 6, 14, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2992995276/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://redvenicerecords.bandcamp.com/album/rvr0156-torturing-nurse-live-dvd',
          a_string: '[RVR0156] Torturing Nurse Live DVD by Torturing Nurse',
          rule: {
            "monday": [ 6, 14, 30, 29 ],
            "tuesday": [ 5, 13, 29, 28 ],
            "wednesday": [ 4, 12, 28, 27 ],
            "thursday": [ 8, 16, 1, 2 ],
            "saturday": [ 7, 15, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1422793729/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://clppng.bandcamp.com/album/splendor-misery',
          a_string: 'Splendor &amp; Misery by clipping.',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 6, 14, 30, 29 ],
            "wednesday": [ 5, 13, 29, 28 ],
            "thursday": [ 4, 12, 28, 27 ],
            "saturday": [ 8, 16, 1, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2308093458/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/lave-worriers-intuitive-intonation-unquantifiable-rhythms-shamanistic-roygbiv',
          a_string: 'Lave Worriers: Intuitive Intonation, Unquantifiable Rhythms, &amp; Shamanistic ROYGBIV by Killick &amp; Monique',
          rule: {
            "monday": [ 9, 17, 2, 3 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 6, 14, 30, 29 ],
            "saturday": [ 5, 13, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1253735900/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idmtheftable.bandcamp.com/album/if-im-too-fat-for-you-why-dont-you-come-over-here-and-suck-out-all-the-fat',
          a_string: 'if I&#39;m too fat for you, why don&#39;t you come over here and suck out all the fat? by id m theft able',
          rule: {
            "monday": [ 5, 13, 29, 28 ],
            "tuesday": [ 9, 17, 2, 3 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 6, 14, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=648627486/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djll.bandcamp.com/album/skin-tightener',
          a_string: 'skin tightener by William Winant - Camille Emaille - Tom Djll',
          rule: {
            "monday": [ 6, 14, 30, 29 ],
            "tuesday": [ 5, 13, 29, 28 ],
            "wednesday": [ 9, 17, 2, 3 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 7, 15, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3137693925/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/burned-mind',
          a_string: 'Burned Mind by Wolf Eyes',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 6, 14, 30, 29 ],
            "wednesday": [ 5, 13, 29, 28 ],
            "thursday": [ 9, 17, 2, 3 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=341125608/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://samrog.bandcamp.com/album/neon-amazon',
          a_string: 'Neon Amazon by Sam Rog',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 6, 14, 30, 29 ],
            "thursday": [ 5, 13, 29, 28 ],
            "saturday": [ 9, 17, 2, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3298020341/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trippyabacus.bandcamp.com/album/t-ra-p',
          a_string: 't/ra/p by Abacus',
          rule: {
            "monday": [ 9, 17, 2, 3 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 6, 14, 30, 29 ],
            "saturday": [ 5, 13, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=482187387/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://black-dice.bandcamp.com/album/creature-comforts',
          a_string: 'Creature Comforts by Black Dice',
          rule: {
            "monday": [ 5, 13, 29, 28 ],
            "tuesday": [ 9, 17, 2, 3 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 6, 14, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=669718914/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://merzbow.bandcamp.com/album/dharma',
          a_string: 'Dharma by Merzbow',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 6, 14, 30, 29 ],
            "wednesday": [ 10, 18, 3, 4 ],
            "thursday": [ 9, 17, 2, 1 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2432690131/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/chronolyse',
          a_string: 'Chronolyse by Richard Pinhas',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 6, 14, 30, 29 ],
            "thursday": [ 10, 18, 3, 4 ],
            "saturday": [ 9, 17, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=824963388/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/saturn-returns-2004',
          a_string: 'Saturn Returns (2004) by Arrington de Dionyso and Thollem McDonas',
          rule: {
            "monday": [ 9, 17, 2, 1 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 6, 14, 30, 29 ],
            "saturday": [ 10, 18, 3, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1112452603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://instinctorecords.bandcamp.com/album/lumbobas-tube',
          a_string: 'Lumboba&#39;s Tube by Zom Zoms',
          rule: {
            "monday": [ 10, 18, 3, 4 ],
            "tuesday": [ 9, 17, 2, 1 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 6, 14, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2169340236/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coldcave.bandcamp.com/album/cremations',
          a_string: 'Cremations by Cold Cave',
          rule: {
            "monday": [ 6, 14, 30, 29 ],
            "tuesday": [ 10, 18, 3, 4 ],
            "wednesday": [ 9, 17, 2, 1 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 7, 15, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2286701044/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/wolf-eyes-burning-log-session-july-20th-2016',
          a_string: 'Wolf Eyes Burning Log session July 20th 2016 by Wolf Eyes',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 6, 14, 30, 29 ],
            "wednesday": [ 10, 18, 3, 4 ],
            "thursday": [ 9, 17, 2, 1 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=783684778/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kevindrumm.bandcamp.com/album/artificial-organ',
          a_string: 'Artificial Organ by Kevin Drumm',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 6, 14, 30, 29 ],
            "thursday": [ 10, 18, 3, 4 ],
            "saturday": [ 9, 17, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=72989750/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://glisteningexamples.bandcamp.com/album/dissolution',
          a_string: 'Dissolution by Olivia Block',
          rule: {
            "monday": [ 10, 18, 3, 4 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 11, 19, 4, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=920537162/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idmtheftable.bandcamp.com/album/hangin-flaccid-like-a-wet-lilac',
          a_string: 'Hangin&#39; Flaccid Like a Wet Lilac by i&#39;d m thfft able',
          rule: {
            "monday": [ 11, 19, 4, 5 ],
            "tuesday": [ 10, 18, 3, 4 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 7, 15, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=946995988/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sipulijaska.bandcamp.com/album/algoritmi',
          a_string: 'Algoritmi by Sipulijaska',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 11, 19, 4, 5 ],
            "wednesday": [ 10, 18, 3, 4 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=563982890/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ambifunk.bandcamp.com/album/live-at-akusmata-helsinki-02112016',
          a_string: 'Live at Akusmata, Helsinki 02.11.2016 by Robert Jürjendal, Kaido Kirikmäe, Petri Kuljuntausta',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 11, 19, 4, 5 ],
            "thursday": [ 10, 18, 3, 4 ],
            "saturday": [ 7, 15, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3025660758/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/unheard-indonesia-vol-7-pancak-silat-situbondo',
          a_string: 'UNHEARD INDONESIA Vol. 7 Pancak Silat Situbondo by Arrington de Dionyso with Lima Jari Sakti Rasyit',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 11, 19, 4, 5 ],
            "saturday": [ 10, 18, 3, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3318145375/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jaccrecords.bandcamp.com/album/timeless',
          a_string: 'Timeless by Marcelo dos Reis &amp; Eve Risser',
          rule: {
            "monday": [ 10, 18, 3, 4 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 11, 19, 4, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3146416018/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joemorrisritiglacialeratic.bandcamp.com/album/likewise',
          a_string: 'Likewise by Stone House',
          rule: {
            "monday": [ 11, 19, 4, 5 ],
            "tuesday": [ 10, 18, 3, 4 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 7, 15, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3173709007/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://caminanterecordings.bandcamp.com/album/merzdub',
          a_string: 'Merzdub by Jamie Saft / Merzbow',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 12, 20, 5, 6 ],
            "wednesday": [ 11, 19, 4, 5 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 9, 17, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=585814970/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bleibmodern.bandcamp.com/album/antagonism-lp',
          a_string: 'Antagonism LP by Bleib Modern',
          rule: {
            "monday": [ 9, 17, 2, 1 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 12, 20, 5, 6 ],
            "thursday": [ 11, 19, 4, 5 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4233208522/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://redvenicerecords.bandcamp.com/album/torturing-nurse-slave',
          a_string: 'Torturing Nurse - Slave by Torturing Nurse',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 9, 17, 2, 1 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 12, 20, 5, 6 ],
            "saturday": [ 11, 19, 4, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=430240605/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/time-of-clearing',
          a_string: 'Time Of Clearing by Wolf Eyes',
          rule: {
            "monday": [ 11, 19, 4, 5 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 9, 17, 2, 1 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 12, 20, 5, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1937172481/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kevindrumm.bandcamp.com/album/triangles',
          a_string: 'TRIANGLES by Kevin Drumm',
          rule: {
            "monday": [ 12, 20, 5, 6 ],
            "tuesday": [ 11, 19, 4, 5 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 9, 17, 2, 1 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1265430461/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://frozenreeds.bandcamp.com/album/joy-boy',
          a_string: 'Joy Boy by Julius Eastman',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 12, 20, 5, 6 ],
            "wednesday": [ 11, 19, 4, 5 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 9, 17, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=154027505/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djll.bandcamp.com/album/from-outhouse-to-icehouse',
          a_string: 'From Outhouse to Icehouse by Tom Djll/Ross Rabin',
          rule: {
            "monday": [ 9, 17, 2, 1 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 12, 20, 5, 6 ],
            "thursday": [ 11, 19, 4, 5 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2131501157/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timperkis.bandcamp.com/album/kinda-green',
          a_string: 'Kinda Green by Tim Perkis / Tom Djll',
          rule: {
            "monday": [ 9, 17, 2, 1 ],
            "tuesday": [ 10, 18, 3, 2 ],
            "wednesday": [ 14, 22, 4, 3 ],
            "thursday": [ 13, 21, 6, 7 ],
            "saturday": [ 12, 20, 5, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2498444657/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timperkis.bandcamp.com/album/applied-cryptography',
          a_string: 'Applied Cryptography by Tim Perkis &amp; Scott Walton',
          rule: {
            "monday": [ 12, 20, 5, 6 ],
            "tuesday": [ 9, 17, 2, 1 ],
            "wednesday": [ 10, 18, 3, 2 ],
            "thursday": [ 14, 22, 4, 3 ],
            "saturday": [ 13, 21, 6, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=687005163/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newcandys.bandcamp.com/album/bleeding-magenta',
          a_string: 'Bleeding Magenta by New Candys',
          rule: {
            "monday": [ 13, 21, 6, 7 ],
            "tuesday": [ 12, 20, 5, 6 ],
            "wednesday": [ 9, 17, 2, 1 ],
            "thursday": [ 10, 18, 3, 2 ],
            "saturday": [ 14, 22, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3538895410/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://damosuzukinetwork.bandcamp.com/album/the-swiftsure-session',
          a_string: 'The Swiftsure Session by Damo Suzuki&#39;s Network',
          rule: {
            "monday": [ 14, 22, 4, 3 ],
            "tuesday": [ 13, 21, 6, 7 ],
            "wednesday": [ 12, 20, 5, 6 ],
            "thursday": [ 9, 17, 2, 1 ],
            "saturday": [ 10, 18, 3, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2065289295/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/ten-thousand-tigers',
          a_string: 'Ten Thousand Tigers by Arrington de Dionyso and Thollem McDonas',
          rule: {
            "monday": [ 10, 18, 3, 2 ],
            "tuesday": [ 14, 22, 4, 3 ],
            "wednesday": [ 13, 21, 6, 7 ],
            "thursday": [ 12, 20, 5, 6 ],
            "saturday": [ 9, 17, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=222549677/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/always-wrong',
          a_string: 'Always Wrong by Wolf Eyes',
          rule: {
            "monday": [ 9, 17, 2, 1 ],
            "tuesday": [ 10, 18, 3, 2 ],
            "wednesday": [ 14, 22, 4, 3 ],
            "thursday": [ 13, 21, 6, 7 ],
            "saturday": [ 12, 20, 5, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3735682806/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/live-frying-chicago-may-28-2004',
          a_string: 'Live Frying: Chicago May 28 2004 by Wolf Eyes',
          rule: {
            "monday": [ 12, 20, 5, 6 ],
            "tuesday": [ 9, 17, 2, 1 ],
            "wednesday": [ 10, 18, 3, 2 ],
            "thursday": [ 14, 22, 4, 3 ],
            "saturday": [ 13, 21, 6, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=673550151/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fiffdimension.bandcamp.com/album/in-the-non-idiomatic-idiom-in-norway',
          a_string: 'in the non-idiomatic idiom in Norway by fiffdimension',
          rule: {
            "monday": [ 14, 22, 7, 8 ],
            "tuesday": [ 13, 21, 6, 7 ],
            "wednesday": [ 10, 18, 3, 2 ],
            "thursday": [ 11, 19, 4, 3 ],
            "saturday": [ 15, 23, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3081573552/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/trident',
          a_string: 'TriDenT by Farrell Lowe',
          rule: {
            "monday": [ 15, 23, 5, 4 ],
            "tuesday": [ 14, 22, 7, 8 ],
            "wednesday": [ 13, 21, 6, 7 ],
            "thursday": [ 10, 18, 3, 2 ],
            "saturday": [ 11, 19, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=638723614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/8-9',
          a_string: '8/9 by Ligeia Mare',
          rule: {
            "monday": [ 11, 19, 4, 3 ],
            "tuesday": [ 15, 23, 5, 4 ],
            "wednesday": [ 14, 22, 7, 8 ],
            "thursday": [ 13, 21, 6, 7 ],
            "saturday": [ 10, 18, 3, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3448762687/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/quill',
          a_string: 'Quill by BackChannel/Group',
          rule: {
            "monday": [ 10, 18, 3, 2 ],
            "tuesday": [ 11, 19, 4, 3 ],
            "wednesday": [ 15, 23, 5, 4 ],
            "thursday": [ 14, 22, 7, 8 ],
            "saturday": [ 13, 21, 6, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=997678320/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/fac-a-d-e',
          a_string: 'fac(a/d)e by Thunder O(h)m!',
          rule: {
            "monday": [ 13, 21, 6, 7 ],
            "tuesday": [ 10, 18, 3, 2 ],
            "wednesday": [ 11, 19, 4, 3 ],
            "thursday": [ 15, 23, 5, 4 ],
            "saturday": [ 14, 22, 7, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1492914464/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://missincinatti.bandcamp.com/album/remove-not-the-ancient-landmarks',
          a_string: 'remove not the ancient landmarks by Missincinatti',
          rule: {
            "monday": [ 14, 22, 7, 8 ],
            "tuesday": [ 13, 21, 6, 7 ],
            "wednesday": [ 10, 18, 3, 2 ],
            "thursday": [ 11, 19, 4, 3 ],
            "saturday": [ 15, 23, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2808496546/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jeffmcleod.bandcamp.com/album/under-dim-self',
          a_string: 'Under Dim Self by Jeff McLeod',
          rule: {
            "monday": [ 15, 23, 5, 4 ],
            "tuesday": [ 14, 22, 7, 8 ],
            "wednesday": [ 13, 21, 6, 7 ],
            "thursday": [ 10, 18, 3, 2 ],
            "saturday": [ 11, 19, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1232351721/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/undertakers-part-one',
          a_string: 'Undertakers Part One by Wolf Eyes',
          rule: {
            "monday": [ 12, 20, 5, 4 ],
            "tuesday": [ 16, 24, 6, 5 ],
            "wednesday": [ 15, 23, 8, 9 ],
            "thursday": [ 14, 22, 7, 8 ],
            "saturday": [ 11, 19, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1356612729/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://glisteningexamples.bandcamp.com/album/this-is-what-i-do-volume-one',
          a_string: 'THIS IS WHAT I DO - VOLUME ONE by Jason Lescalleet',
          rule: {
            "monday": [ 11, 19, 4, 3 ],
            "tuesday": [ 12, 20, 5, 4 ],
            "wednesday": [ 16, 24, 6, 5 ],
            "thursday": [ 15, 23, 8, 9 ],
            "saturday": [ 14, 22, 7, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=774652819/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hansonrecords.bandcamp.com/album/songs-about-jason',
          a_string: 'Songs About Jason by Aaron Dilloway',
          rule: {
            "monday": [ 14, 22, 7, 8 ],
            "tuesday": [ 11, 19, 4, 3 ],
            "wednesday": [ 12, 20, 5, 4 ],
            "thursday": [ 16, 24, 6, 5 ],
            "saturday": [ 15, 23, 8, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2639669908/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/songs-of-psychic-fire-vol-i',
          a_string: 'Songs of Psychic Fire vol. I by Arrington de Dionyso and Thollem McDonas',
          rule: {
            "monday": [ 15, 23, 8, 9 ],
            "tuesday": [ 14, 22, 7, 8 ],
            "wednesday": [ 11, 19, 4, 3 ],
            "thursday": [ 12, 20, 5, 4 ],
            "saturday": [ 16, 24, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3551969832/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tourdebras.bandcamp.com/album/chants-et-danses-vol-iii-with-strings',
          a_string: 'Chants et danses (Vol. III) ...with strings by René Lussier, Robert Marcel Lepage...et Quatuor Bozzini',
          rule: {
            "monday": [ 16, 24, 6, 5 ],
            "tuesday": [ 15, 23, 8, 9 ],
            "wednesday": [ 14, 22, 7, 8 ],
            "thursday": [ 11, 19, 4, 3 ],
            "saturday": [ 12, 20, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3836116562/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tourdebras.bandcamp.com/album/malcolm-goldstein-thomas-lehn-web',
          a_string: 'Malcolm Goldstein  / Thomas Lehn (web) by Tour de Bras (records)',
          rule: {
            "monday": [ 12, 20, 5, 4 ],
            "tuesday": [ 16, 24, 6, 5 ],
            "wednesday": [ 15, 23, 8, 9 ],
            "thursday": [ 14, 22, 7, 8 ],
            "saturday": [ 11, 19, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=487324111/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/burnt-out-vol-1',
          a_string: 'Burnt-Out Vol 1 by Wolf Eyes',
          rule: {
            "monday": [ 11, 19, 4, 3 ],
            "tuesday": [ 12, 20, 5, 4 ],
            "wednesday": [ 16, 24, 6, 5 ],
            "thursday": [ 15, 23, 8, 9 ],
            "saturday": [ 14, 22, 7, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2933784511/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://glisteningexamples.bandcamp.com/album/the-invisible-curse',
          a_string: 'The Invisible Curse by Kevin Drumm and Jason Lescalleet',
          rule: {
            "monday": [ 15, 23, 8, 9 ],
            "tuesday": [ 12, 20, 5, 4 ],
            "wednesday": [ 13, 21, 6, 5 ],
            "thursday": [ 17, 25, 7, 6 ],
            "saturday": [ 16, 24, 9, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=149762818/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nmperign.bandcamp.com/album/love-me-two-times',
          a_string: 'Love Me Two Times by Nmperign/Jason Lescalleet',
          rule: {
            "monday": [ 16, 24, 9, 10 ],
            "tuesday": [ 15, 23, 8, 9 ],
            "wednesday": [ 12, 20, 5, 4 ],
            "thursday": [ 13, 21, 6, 5 ],
            "saturday": [ 17, 25, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1739250324/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://endofthealphabetrecords.bandcamp.com/album/there-is-no-music-from-china',
          a_string: 'There Is No Music From China by Various (CHN)',
          rule: {
            "monday": [ 17, 25, 7, 6 ],
            "tuesday": [ 16, 24, 9, 10 ],
            "wednesday": [ 15, 23, 8, 9 ],
            "thursday": [ 12, 20, 5, 4 ],
            "saturday": [ 13, 21, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1151820027/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gbjd.bandcamp.com/album/black-sheep',
          a_string: 'Black Sheep by Xiao Hong &amp; Xiao Xiao Hong',
          rule: {
            "monday": [ 13, 21, 6, 5 ],
            "tuesday": [ 17, 25, 7, 6 ],
            "wednesday": [ 16, 24, 9, 10 ],
            "thursday": [ 15, 23, 8, 9 ],
            "saturday": [ 12, 20, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=955976567/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://notincatalog.bandcamp.com/album/not-in-catalog-debut-album',
          a_string: 'not in catalog debut album by 不在话下',
          rule: {
            "monday": [ 12, 20, 5, 4 ],
            "tuesday": [ 13, 21, 6, 5 ],
            "wednesday": [ 17, 25, 7, 6 ],
            "thursday": [ 16, 24, 9, 10 ],
            "saturday": [ 15, 23, 8, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2277502811/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/never-stop-lovin',
          a_string: 'never stop lovin by Killick',
          rule: {
            "monday": [ 15, 23, 8, 9 ],
            "tuesday": [ 12, 20, 5, 4 ],
            "wednesday": [ 13, 21, 6, 5 ],
            "thursday": [ 17, 25, 7, 6 ],
            "saturday": [ 16, 24, 9, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=495289191/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kyledawkins.bandcamp.com/album/conasauga',
          a_string: 'Conasauga by Kyle Dawkins',
          rule: {
            "monday": [ 16, 24, 9, 10 ],
            "tuesday": [ 15, 23, 8, 9 ],
            "wednesday": [ 12, 20, 5, 4 ],
            "thursday": [ 13, 21, 6, 5 ],
            "saturday": [ 17, 25, 7, 6]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1013983222/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nostalgiedelaboue.bandcamp.com/album/rien-ni-personne-volume-ii-iii',
          a_string: 'Rien Ni Personne ~volume II &amp; III by Various Artists',
          rule: {
            "monday": [ 18, 26, 8, 7 ],
            "tuesday": [ 17, 25, 10, 11 ],
            "wednesday": [ 16, 24, 9, 10 ],
            "thursday": [ 13, 21, 6, 5 ],
            "saturday": [ 14, 22, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2810799458/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/penumbra',
          a_string: 'Penumbra by J.A. Deane and Farrell Lowe',
          rule: {
            "monday": [ 14, 22, 7, 6 ],
            "tuesday": [ 18, 26, 8, 7 ],
            "wednesday": [ 17, 25, 10, 11 ],
            "thursday": [ 16, 24, 9, 10 ],
            "saturday": [ 13, 21, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1046147047/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/mirages',
          a_string: 'Mirages by J.A. Deane and Farrell Lowe',
          rule: {
            "monday": [ 13, 21, 6, 5 ],
            "tuesday": [ 14, 22, 7, 6 ],
            "wednesday": [ 18, 26, 8, 7 ],
            "thursday": [ 17, 25, 10, 11 ],
            "saturday": [ 16, 24, 9, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3302633823/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/broadcast-no-1',
          a_string: 'Broadcast No. 1 by Killick Hinds &amp; Scott Baxendale',
          rule: {
            "monday": [ 16, 24, 9, 10 ],
            "tuesday": [ 13, 21, 6, 5 ],
            "wednesday": [ 14, 22, 7, 6 ],
            "thursday": [ 18, 26, 8, 7 ],
            "saturday": [ 17, 25, 10, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4088072951/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mnoad.bandcamp.com/album/9-syllables',
          a_string: '(9) Syllables by Nate Wooley',
          rule: {
            "monday": [ 17, 25, 10, 11 ],
            "tuesday": [ 16, 24, 9, 10 ],
            "wednesday": [ 13, 21, 6, 5 ],
            "thursday": [ 14, 22, 7, 6 ],
            "saturday": [ 18, 26, 8, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3601429188/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mnoad.bandcamp.com/album/lyra',
          a_string: 'Lyra by Jean D.L. &amp; Karen Willems',
          rule: {
            "monday": [ 18, 26, 8, 7 ],
            "tuesday": [ 17, 25, 10, 11 ],
            "wednesday": [ 16, 24, 9, 10 ],
            "thursday": [ 13, 21, 6, 5 ],
            "saturday": [ 14, 22, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=314193732/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mnoad.bandcamp.com/album/polychoral',
          a_string: 'Polychoral by Nate Wooley',
          rule: {
            "monday": [ 14, 22, 7, 6 ],
            "tuesday": [ 18, 26, 8, 7 ],
            "wednesday": [ 17, 25, 10, 11 ],
            "thursday": [ 16, 24, 9, 10 ],
            "saturday": [ 13, 21, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=658114645/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coldspring.bandcamp.com/album/the-black-post-society',
          a_string: 'The Black Post Society by Prurient',
          rule: {
            "monday": [ 14, 22, 7, 6 ],
            "tuesday": [ 15, 23, 8, 7 ],
            "wednesday": [ 19, 27, 9, 8 ],
            "thursday": [ 18, 26, 11, 12 ],
            "saturday": [ 17, 25, 10, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=165420124/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bugscrawlingoutofpeople.bandcamp.com/album/computerus',
          a_string: 'compUterus by compUterus',
          rule: {
            "monday": [ 17, 25, 10, 11 ],
            "tuesday": [ 14, 22, 7, 6 ],
            "wednesday": [ 15, 23, 8, 7 ],
            "thursday": [ 19, 27, 9, 8 ],
            "saturday": [ 18, 26, 11, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=383619065/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://looselips123.bandcamp.com/album/ll012-masaki-uchida-xenolinguistics',
          a_string: 'LL012 - Masaki Uchida - Xenolinguistics by Masaki Uchida',
          rule: {
            "monday": [ 18, 26, 11, 12 ],
            "tuesday": [ 17, 25, 10, 11 ],
            "wednesday": [ 14, 22, 7, 6 ],
            "thursday": [ 15, 23, 8, 7 ],
            "saturday": [ 19, 27, 9, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3633008751/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/rust-svelte',
          a_string: 'Rust Svelte by Killick',
          rule: {
            "monday": [ 19, 27, 9, 8 ],
            "tuesday": [ 18, 26, 11, 12 ],
            "wednesday": [ 17, 25, 10, 11 ],
            "thursday": [ 14, 22, 7, 6 ],
            "saturday": [ 15, 23, 8, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=570722790/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/forte-over-forte',
          a_string: 'Forte Over Forte by Killick',
          rule: {
            "monday": [ 15, 23, 8, 7 ],
            "tuesday": [ 19, 27, 9, 8 ],
            "wednesday": [ 18, 26, 11, 12 ],
            "thursday": [ 17, 25, 10, 11 ],
            "saturday": [ 14, 22, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=275469629/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/sunrise-over-africa',
          a_string: 'Sunrise over Africa by Killick',
          rule: {
            "monday": [ 14, 22, 7, 6 ],
            "tuesday": [ 15, 23, 8, 7 ],
            "wednesday": [ 19, 27, 9, 8 ],
            "thursday": [ 18, 26, 11, 12 ],
            "saturday": [ 17, 25, 10, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2631446768/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intonema.bandcamp.com/album/axon',
          a_string: 'Axon by Myelin (Birgit Ulher &amp; Heddy Boubaker)',
          rule: {
            "monday": [ 17, 25, 10, 11 ],
            "tuesday": [ 14, 22, 7, 6 ],
            "wednesday": [ 15, 23, 8, 7 ],
            "thursday": [ 19, 27, 9, 8 ],
            "saturday": [ 18, 26, 11, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2235065992/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intonema.bandcamp.com/album/edged-timbre',
          a_string: 'Edged Timbre by Horst Quartet',
          rule: {
            "monday": [ 24, 1, 14, 13 ],
            "tuesday": [ 23, 31, 13, 12 ],
            "wednesday": [ 22, 30, 12, 11 ],
            "thursday": [ 21, 29, 11, 10 ],
            "saturday": [ 20, 28, 10, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1650882623/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intonema.bandcamp.com/album/there-back',
          a_string: 'There &amp; Back by KickGuitarSinRun',
          rule: {
            "monday": [ 20, 28, 10, 9 ],
            "tuesday": [ 24, 1, 14, 13 ],
            "wednesday": [ 23, 31, 13, 12 ],
            "thursday": [ 22, 30, 12, 11 ],
            "saturday": [ 21, 29, 11, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=396492404/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erstwhilerecords.bandcamp.com/album/l-me-est-sans-retenue-i',
          a_string: 'l’âme est sans retenue I by Jürg Frey',
          rule: {
            "monday": [ 21, 29, 11, 10 ],
            "tuesday": [ 20, 28, 10, 9 ],
            "wednesday": [ 24, 1, 14, 13 ],
            "thursday": [ 23, 31, 13, 12 ],
            "saturday": [ 22, 30, 12, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3058210/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erstwhilerecords.bandcamp.com/album/13-thirteen',
          a_string: '13 Thirteen by Keith Rowe/Michael Pisaro',
          rule: {
            "monday": [ 22, 30, 12, 11 ],
            "tuesday": [ 21, 29, 11, 10 ],
            "wednesday": [ 20, 28, 10, 9 ],
            "thursday": [ 24, 1, 14, 13 ],
            "saturday": [ 23, 31, 13, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=840883265/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erstwhilerecords.bandcamp.com/album/the-whistler',
          a_string: 'The Whistler by Graham Lambkin/Taku Unami',
          rule: {
            "monday": [ 23, 31, 13, 12 ],
            "tuesday": [ 22, 30, 12, 11 ],
            "wednesday": [ 21, 29, 11, 10 ],
            "thursday": [ 20, 28, 10, 9 ],
            "saturday": [ 24, 1, 14, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=639555287/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://p-mm.bandcamp.com/album/pmm-sun-city-grils-pelican92',
          a_string: 'PMM# Sun City Grils - Pelican&#39;92 by Sun City Girls',
          rule: {
            "monday": [ 24, 1, 14, 13 ],
            "tuesday": [ 23, 31, 13, 12 ],
            "wednesday": [ 22, 30, 12, 11 ],
            "thursday": [ 21, 29, 11, 10 ],
            "saturday": [ 20, 28, 10, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3341535147/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tashidorji-slr.bandcamp.com/album/fixed-entrance-derivatives',
          a_string: 'Fixed Entrance Derivatives by Tashi Dorji &amp; David Grubba',
          rule: {
            "monday": [ 20, 28, 10, 9 ],
            "tuesday": [ 24, 1, 14, 13 ],
            "wednesday": [ 23, 31, 13, 12 ],
            "thursday": [ 22, 30, 12, 11 ],
            "saturday": [ 21, 29, 11, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2627096366/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oralrecords.bandcamp.com/album/ma-ta-ta-bi',
          a_string: 'ma ta ta bi by Akio Suzuki, Aki Onda',
          rule: {
            "monday": [ 22, 30, 12, 11 ],
            "tuesday": [ 21, 29, 11, 10 ],
            "wednesday": [ 25, 2, 15, 14 ],
            "thursday": [ 24, 1, 14, 13 ],
            "saturday": [ 23, 31, 13, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4145342150/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/farewell-cassini',
          a_string: 'Farewell Cassini by BackChannel/Group',
          rule: {
            "monday": [ 23, 31, 13, 12 ],
            "tuesday": [ 22, 30, 12, 11 ],
            "wednesday": [ 21, 29, 11, 10 ],
            "thursday": [ 25, 2, 15, 14 ],
            "saturday": [ 24, 1, 14, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=750261788/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/the-green-fire-bull',
          a_string: 'The Green Fire Bull by Instrument Panel',
          rule: {
            "monday": [ 24, 1, 14, 13 ],
            "tuesday": [ 23, 31, 13, 12 ],
            "wednesday": [ 22, 30, 12, 11 ],
            "thursday": [ 21, 29, 11, 10 ],
            "saturday": [ 25, 2, 15, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1412147972/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/the-low-mids',
          a_string: 'The Low Mids by The Low Mids',
          rule: {
            "monday": [ 25, 2, 15, 14 ],
            "tuesday": [ 24, 1, 14, 13 ],
            "wednesday": [ 23, 31, 13, 12 ],
            "thursday": [ 22, 30, 12, 11 ],
            "saturday": [ 21, 29, 11, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=514392964/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://natewooley.bandcamp.com/album/argonautica',
          a_string: 'Argonautica by Nate Wooley',
          rule: {
            "monday": [ 21, 29, 11, 10 ],
            "tuesday": [ 25, 2, 15, 14 ],
            "wednesday": [ 24, 1, 14, 13 ],
            "thursday": [ 23, 31, 13, 12 ],
            "saturday": [ 22, 30, 12, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2770575154/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idmtheftable.bandcamp.com/album/errored-jellies-jellied-errors',
          a_string: 'errored jellies//jellied errors by id m theft able',
          rule: {
            "monday": [ 22, 30, 12, 11 ],
            "tuesday": [ 21, 29, 11, 10 ],
            "wednesday": [ 25, 2, 15, 14 ],
            "thursday": [ 24, 1, 14, 13 ],
            "saturday": [ 23, 31, 13, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3581082979/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jaapblonk.bandcamp.com/album/asemic-dialogues',
          a_string: 'Asemic Dialogues by Tomomi Adachi &amp; Jaap Blonk',
          rule: {
            "monday": [ 23, 31, 13, 12 ],
            "tuesday": [ 22, 30, 12, 11 ],
            "wednesday": [ 21, 29, 11, 10 ],
            "thursday": [ 25, 2, 15, 14 ],
            "saturday": [ 24, 1, 14, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1005801154/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://borismerzbow.bandcamp.com/album/gensho',
          a_string: 'Gensho by Boris &amp; Merzbow',
          rule: {
            "monday": [ 25, 2, 15, 14 ],
            "tuesday": [ 24, 1, 14, 13 ],
            "wednesday": [ 23, 31, 13, 12 ],
            "thursday": [ 22, 30, 12, 11 ],
            "saturday": [ 26, 3, 16, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3059073363/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elevatorbath.bandcamp.com/album/pulse-vegan',
          a_string: 'pulse vegan by merzbow',
          rule: {
            "monday": [ 26, 3, 16, 15 ],
            "tuesday": [ 25, 2, 15, 14 ],
            "wednesday": [ 24, 1, 14, 13 ],
            "thursday": [ 23, 31, 13, 12 ],
            "saturday": [ 22, 30, 12, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3604202255/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elevatorbath.bandcamp.com/album/essential-anatomies-3',
          a_string: 'essential anatomies by colin andrew sheffield &amp; james eck rippie',
          rule: {
            "monday": [ 22, 30, 12, 11 ],
            "tuesday": [ 26, 3, 16, 15 ],
            "wednesday": [ 25, 2, 15, 14 ],
            "thursday": [ 24, 1, 14, 13 ],
            "saturday": [ 23, 31, 13, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1121842553/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://von-neumann.bandcamp.com/album/norn',
          a_string: 'NorN by vonneumann',
          rule: {
            "monday": [ 23, 31, 13, 12 ],
            "tuesday": [ 22, 30, 12, 11 ],
            "wednesday": [ 26, 3, 16, 15 ],
            "thursday": [ 25, 2, 15, 14 ],
            "saturday": [ 24, 1, 14, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=287029275/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dathon.bandcamp.com/album/vacua',
          a_string: 'Vacua by Dathon',
          rule: {
            "monday": [ 24, 1, 14, 13 ],
            "tuesday": [ 23, 31, 13, 12 ],
            "wednesday": [ 22, 30, 12, 11 ],
            "thursday": [ 26, 3, 16, 15 ],
            "saturday": [ 25, 2, 15, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3156874954/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/a-night-walking-through-mirrors',
          a_string: 'A Night Walking Through Mirrors by Chicago / London Underground',
          rule: {
            "monday": [ 25, 2, 15, 14 ],
            "tuesday": [ 24, 1, 14, 13 ],
            "wednesday": [ 23, 31, 13, 12 ],
            "thursday": [ 22, 30, 12, 11 ],
            "saturday": [ 26, 3, 16, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3821356595/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jaapblonk.bandcamp.com/album/blonk-gustafsson-zerang',
          a_string: 'Blonk, Gustafsson &amp; Zerang by Jaap Blonk, Mats Gustafsson, Michael Zerang',
          rule: {
            "monday": [ 26, 3, 16, 15 ],
            "tuesday": [ 25, 2, 15, 14 ],
            "wednesday": [ 24, 1, 14, 13 ],
            "thursday": [ 23, 31, 13, 12 ],
            "saturday": [ 22, 30, 12, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2174936724/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://backwardmusic.bandcamp.com/album/wayward-sonology',
          a_string: 'Wayward Sonology by Isador',
          rule: {
            "monday": [ 23, 31, 13, 12 ],
            "tuesday": [ 27, 4, 17, 16 ],
            "wednesday": [ 26, 3, 16, 15 ],
            "thursday": [ 25, 2, 15, 14 ],
            "saturday": [ 24, 1, 14, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2176871443/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://badbadnotgoodil.bandcamp.com/album/iv',
          a_string: 'IV by BADBADNOTGOOD',
          rule: {
            "monday": [ 24, 1, 14, 13 ],
            "tuesday": [ 23, 31, 13, 12 ],
            "wednesday": [ 27, 4, 17, 16 ],
            "thursday": [ 26, 3, 16, 15 ],
            "saturday": [ 25, 2, 15, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1016358289/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://exeyeband.bandcamp.com/album/ex-eye',
          a_string: 'Ex Eye by Ex Eye',
          rule: {
            "monday": [ 25, 2, 15, 14 ],
            "tuesday": [ 24, 1, 14, 13 ],
            "wednesday": [ 23, 31, 13, 12 ],
            "thursday": [ 27, 4, 17, 16 ],
            "saturday": [ 26, 3, 16, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3572077177/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tendonlevey.bandcamp.com/album/winter-owner',
          a_string: 'Winter Owner by Tendon Levey',
          rule: {
            "monday": [ 26, 3, 16, 15 ],
            "tuesday": [ 25, 2, 15, 14 ],
            "wednesday": [ 24, 1, 14, 13 ],
            "thursday": [ 23, 31, 13, 12 ],
            "saturday": [ 27, 4, 17, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4103317405/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tendonlevey.bandcamp.com/album/countertorch',
          a_string: 'Countertorch by Tendon Levey',
          rule: {
            "monday": [ 27, 4, 17, 16 ],
            "tuesday": [ 26, 3, 16, 15 ],
            "wednesday": [ 25, 2, 15, 14 ],
            "thursday": [ 24, 1, 14, 13 ],
            "saturday": [ 23, 31, 13, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2933946697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ernestorodrigues.bandcamp.com/album/blue-rain',
          a_string: 'Blue Rain by Ernesto Rodrigues, Mazen Kerbaj, Guilherme Rodrigues, Carlos Santos &amp; Sharif Sehnaoui',
          rule: {
            "monday": [ 23, 31, 13, 12 ],
            "tuesday": [ 27, 4, 17, 16 ],
            "wednesday": [ 26, 3, 16, 15 ],
            "thursday": [ 25, 2, 15, 14 ],
            "saturday": [ 24, 1, 14, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2607476800/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ernestorodrigues.bandcamp.com/album/eterno-retorno',
          a_string: 'Eterno Retorno by Ernesto Rodrigues, Guilherme Rodrigues, Carlos Santos &amp; Andrew Drury',
          rule: {
            "monday": [ 24, 1, 14, 13 ],
            "tuesday": [ 23, 31, 13, 12 ],
            "wednesday": [ 27, 4, 17, 16 ],
            "thursday": [ 26, 3, 16, 15 ],
            "saturday": [ 25, 2, 15, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2501260898/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ernestorodrigues.bandcamp.com/album/drain',
          a_string: 'Drain by Ernesto Rodrigues, Mathieu Werchowski &amp; Guilherme Rodrigues',
          rule: {
            "monday": [ 26, 3, 16, 15 ],
            "tuesday": [ 25, 2, 15, 14 ],
            "wednesday": [ 24, 1, 14, 13 ],
            "thursday": [ 28, 5, 18, 17 ],
            "saturday": [ 27, 4, 17, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2548950240/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://planningforburial.bandcamp.com/album/below-the-house-2',
          a_string: 'Below the House by Planning For Burial',
          rule: {
            "monday": [ 27, 4, 17, 16 ],
            "tuesday": [ 26, 3, 16, 15 ],
            "wednesday": [ 25, 2, 15, 14 ],
            "thursday": [ 24, 1, 14, 13 ],
            "saturday": [ 28, 5, 18, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3166415647/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.kvitnu.com/album/ephemeral',
          a_string: 'Ephemeral by Mingle',
          rule: {
            "monday": [ 28, 5, 18, 17 ],
            "tuesday": [ 27, 4, 17, 16 ],
            "wednesday": [ 26, 3, 16, 15 ],
            "thursday": [ 25, 2, 15, 14 ],
            "saturday": [ 24, 1, 14, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2961934392/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cejero.bandcamp.com/album/switches',
          a_string: 'Switches by Aaron Dilloway',
          rule: {
            "monday": [ 24, 1, 14, 13 ],
            "tuesday": [ 28, 5, 18, 17 ],
            "wednesday": [ 27, 4, 17, 16 ],
            "thursday": [ 26, 3, 16, 15 ],
            "saturday": [ 25, 2, 15, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3153456536/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orbtapes.bandcamp.com/album/forging-hay',
          a_string: 'Forging Hay by Crank Sturgeon',
          rule: {
            "monday": [ 25, 2, 15, 14 ],
            "tuesday": [ 24, 1, 14, 13 ],
            "wednesday": [ 28, 5, 18, 17 ],
            "thursday": [ 27, 4, 17, 16 ],
            "saturday": [ 26, 3, 16, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2100127296/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://greywulf.bandcamp.com/album/walls-of-timeless-abundance-and-the-terms-of-shameful-loss',
          a_string: 'Walls of Timeless Abundance and The Terms of Shameful Loss by Grey Wulf',
          rule: {
            "monday": [ 26, 3, 16, 15 ],
            "tuesday": [ 25, 2, 15, 14 ],
            "wednesday": [ 24, 1, 14, 13 ],
            "thursday": [ 28, 5, 18, 17 ],
            "saturday": [ 27, 4, 17, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3847837544/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://puptheband.bandcamp.com/album/the-dream-is-over',
          a_string: 'The Dream Is Over by PUP',
          rule: {
            "monday": [ 27, 4, 17, 16 ],
            "tuesday": [ 26, 3, 16, 15 ],
            "wednesday": [ 25, 2, 15, 14 ],
            "thursday": [ 24, 1, 14, 13 ],
            "saturday": [ 28, 5, 18, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=890713925/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thevitaminb12.bandcamp.com/album/4-lp-box-set-extended-play',
          a_string: '4 LP Box Set Extended Play (上) by The Vitamin B12',
          rule: {
            "monday": [ 29, 6, 19, 18 ],
            "tuesday": [ 28, 5, 18, 17 ],
            "wednesday": [ 27, 4, 17, 16 ],
            "thursday": [ 26, 3, 16, 15 ],
            "saturday": [ 25, 2, 15, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1390840159/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thevitaminb12.bandcamp.com/album/heads-volume-one-blue-bag',
          a_string: 'Heads (Volume One) - Blue Bag by The Vitamin B12',
          rule: {
            "monday": [ 25, 2, 15, 14 ],
            "tuesday": [ 29, 6, 19, 18 ],
            "wednesday": [ 28, 5, 18, 17 ],
            "thursday": [ 27, 4, 17, 16 ],
            "saturday": [ 26, 3, 16, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3915313766/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thevitaminb12.bandcamp.com/album/nedits-1',
          a_string: 'nedits 1 by The Vitamin B12',
          rule: {
            "monday": [ 26, 3, 16, 15 ],
            "tuesday": [ 25, 2, 15, 14 ],
            "wednesday": [ 29, 6, 19, 18 ],
            "thursday": [ 28, 5, 18, 17 ],
            "saturday": [ 27, 4, 17, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1775342146/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pharmakon.bandcamp.com/album/contact',
          a_string: 'Contact by Pharmakon',
          rule: {
            "monday": [ 27, 4, 17, 16 ],
            "tuesday": [ 26, 3, 16, 15 ],
            "wednesday": [ 25, 2, 15, 14 ],
            "thursday": [ 29, 6, 19, 18 ],
            "saturday": [ 28, 5, 18, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2973414910/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://danielmenche.bandcamp.com/album/the-sky-below-and-the-earth-above',
          a_string: 'The Sky Below and the Earth Above by Daniel Menche',
          rule: {
            "monday": [ 28, 5, 18, 17 ],
            "tuesday": [ 27, 4, 17, 16 ],
            "wednesday": [ 26, 3, 16, 15 ],
            "thursday": [ 25, 2, 15, 14 ],
            "saturday": [ 29, 6, 19, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2862684008/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://danielmenche.bandcamp.com/album/cold-metals',
          a_string: 'Cold Metals by Daniel Menche',
          rule: {
            "monday": [ 29, 6, 19, 18 ],
            "tuesday": [ 28, 5, 18, 17 ],
            "wednesday": [ 27, 4, 17, 16 ],
            "thursday": [ 26, 3, 16, 15 ],
            "saturday": [ 25, 2, 15, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1781231103/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://not-applicable.bandcamp.com/album/we-are-astonishingly-lifelike',
          a_string: 'We Are Astonishingly Lifelike by Fiium Shaarrk',
          rule: {
            "monday": [ 25, 2, 15, 14 ],
            "tuesday": [ 29, 6, 19, 18 ],
            "wednesday": [ 28, 5, 18, 17 ],
            "thursday": [ 27, 4, 17, 16 ],
            "saturday": [ 26, 3, 16, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=119175336/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leavingrecords.bandcamp.com/album/live',
          a_string: 'LIVE by BANANA',
          rule: {
            "monday": [ 27, 4, 17, 16 ],
            "tuesday": [ 26, 3, 16, 15 ],
            "wednesday": [ 30, 7, 20, 19 ],
            "thursday": [ 29, 6, 19, 18 ],
            "saturday": [ 28, 5, 18, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=278622854/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://samgendel.bandcamp.com/album/double-expression',
          a_string: 'Double Expression by Sam Gendel',
          rule: {
            "monday": [ 28, 5, 18, 17 ],
            "tuesday": [ 27, 4, 17, 16 ],
            "wednesday": [ 26, 3, 16, 15 ],
            "thursday": [ 30, 7, 20, 19 ],
            "saturday": [ 29, 6, 19, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2624810082/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://okkyungleechristianmarclay.bandcamp.com/album/amalgam',
          a_string: 'Amalgam by Okkyung Lee &amp; Christian Marclay',
          rule: {
            "monday": [ 29, 6, 19, 18 ],
            "tuesday": [ 28, 5, 18, 17 ],
            "wednesday": [ 27, 4, 17, 16 ],
            "thursday": [ 26, 3, 16, 15 ],
            "saturday": [ 30, 7, 20, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1499343034/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tokyoflashback.bandcamp.com/album/tokyo-flashback',
          a_string: 'Tokyo Flashback by Tokyo Flashback',
          rule: {
            "monday": [ 30, 7, 20, 19 ],
            "tuesday": [ 29, 6, 19, 18 ],
            "wednesday": [ 28, 5, 18, 17 ],
            "thursday": [ 27, 4, 17, 16 ],
            "saturday": [ 26, 3, 16, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1519543028/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://keijihaino.bandcamp.com/album/watashi-dake',
          a_string: 'Watashi Dake? by Keiji Haino',
          rule: {
            "monday": [ 26, 3, 16, 15 ],
            "tuesday": [ 30, 7, 20, 19 ],
            "wednesday": [ 29, 6, 19, 18 ],
            "thursday": [ 28, 5, 18, 17 ],
            "saturday": [ 27, 4, 17, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=446417117/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://united-bible-studies.bandcamp.com/album/rosary-bleeds',
          a_string: 'Rosary Bleeds by United Bible Studies',
          rule: {
            "monday": [ 27, 4, 17, 16 ],
            "tuesday": [ 26, 3, 16, 15 ],
            "wednesday": [ 30, 7, 20, 19 ],
            "thursday": [ 29, 6, 19, 18 ],
            "saturday": [ 28, 5, 18, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1902478378/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://an-trinse.bandcamp.com/album/corpses-from-the-north',
          a_string: 'Corpses From The North by An Trinse',
          rule: {
            "monday": [ 28, 5, 18, 17 ],
            "tuesday": [ 27, 4, 17, 16 ],
            "wednesday": [ 26, 3, 16, 15 ],
            "thursday": [ 30, 7, 20, 19 ],
            "saturday": [ 29, 6, 19, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1261669868/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://an-trinse.bandcamp.com/album/deeds-of-shame',
          a_string: 'Deeds of Shame by An Trinse',
          rule: {
            "monday": [ 30, 7, 20, 19 ],
            "tuesday": [ 29, 6, 19, 18 ],
            "wednesday": [ 28, 5, 18, 17 ],
            "thursday": [ 27, 4, 17, 16 ],
            "saturday": [ 31, 8, 21, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1381504171/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://khalil-poshisolation.bandcamp.com/album/the-water-we-drink',
          a_string: 'The Water We Drink by Khalil',
          rule: {
            "monday": [ 31, 8, 21, 20 ],
            "tuesday": [ 30, 7, 20, 19 ],
            "wednesday": [ 29, 6, 19, 18 ],
            "thursday": [ 28, 5, 18, 17 ],
            "saturday": [ 27, 4, 17, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1862718433/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://damiendubrovnik-poshisolation.bandcamp.com/album/great-many-arrows',
          a_string: 'Great Many Arrows by Damien Dubrovnik',
          rule: {
            "monday": [ 27, 4, 17, 16 ],
            "tuesday": [ 31, 8, 21, 20 ],
            "wednesday": [ 30, 7, 20, 19 ],
            "thursday": [ 29, 6, 19, 18 ],
            "saturday": [ 28, 5, 18, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=217546442/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://croatianamorlustforyouth-poshisolation.bandcamp.com/album/pomegranate',
          a_string: 'Pomegranate by Croatian Amor &amp; Lust For Youth',
          rule: {
            "monday": [ 28, 5, 18, 17 ],
            "tuesday": [ 27, 4, 17, 16 ],
            "wednesday": [ 31, 8, 21, 20 ],
            "thursday": [ 30, 7, 20, 19 ],
            "saturday": [ 29, 6, 19, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2536526075/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/winter-grass',
          a_string: 'Winter Grass by BackChannel/Group',
          rule: {
            "monday": [ 29, 6, 19, 18 ],
            "tuesday": [ 28, 5, 18, 17 ],
            "wednesday": [ 27, 4, 17, 16 ],
            "thursday": [ 31, 8, 21, 20 ],
            "saturday": [ 30, 7, 20, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3954636331/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/umbrella',
          a_string: 'Umbrella by Farrell Lowe',
          rule: {
            "monday": [ 30, 7, 20, 19 ],
            "tuesday": [ 29, 6, 19, 18 ],
            "wednesday": [ 28, 5, 18, 17 ],
            "thursday": [ 27, 4, 17, 16 ],
            "saturday": [ 31, 8, 21, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2156168144/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/insectoid-benevolent-proximal-spurt',
          a_string: 'insectoid benevolent proximal spurt by Killick',
          rule: {
            "monday": [ 31, 8, 21, 20 ],
            "tuesday": [ 30, 7, 20, 19 ],
            "wednesday": [ 29, 6, 19, 18 ],
            "thursday": [ 28, 5, 18, 17 ],
            "saturday": [ 27, 4, 17, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2233459716/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/karl-und-karl',
          a_string: 'Karl Und Karl by J.A. Deane and Farrell Lowe',
          rule: {
            "monday": [ 28, 5, 18, 17 ],
            "tuesday": [ 1, 9, 22, 21 ],
            "wednesday": [ 31, 8, 21, 20 ],
            "thursday": [ 30, 7, 20, 19 ],
            "saturday": [ 29, 6, 19, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1313710677/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bashan.bandcamp.com/album/bashan-ep1',
          a_string: 'Bashan - EP1 by Bashan',
          rule: {
            "monday": [ 29, 6, 19, 18 ],
            "tuesday": [ 28, 5, 18, 17 ],
            "wednesday": [ 1, 9, 22, 21 ],
            "thursday": [ 31, 8, 21, 20 ],
            "saturday": [ 30, 7, 20, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=39900070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://phinery.bandcamp.com/album/voices',
          a_string: 'Voices by Lief Hall',
          rule: {
            "monday": [ 30, 7, 20, 19 ],
            "tuesday": [ 29, 6, 19, 18 ],
            "wednesday": [ 28, 5, 18, 17 ],
            "thursday": [ 1, 9, 22, 21 ],
            "saturday":  [ 31, 8, 21, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2900186348/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://davidgarland.bandcamp.com/album/verdancy',
          a_string: 'Verdancy by David Garland',
          rule: {
            "monday": [ 31, 8, 21, 20 ],
            "tuesday": [ 30, 7, 20, 19 ],
            "wednesday": [ 29, 6, 19, 18 ],
            "thursday": [ 28, 5, 18, 17 ],
            "saturday": [ 1, 9, 22, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3456861688/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'Time Out of Joint by David Garland',
          a_string: 'Time Out of Joint by David Garland',
          rule: {
            "monday": [ 1, 9, 22, 21 ],
            "tuesday": [ 31, 8, 21, 20 ],
            "wednesday": [ 30, 7, 20, 19 ],
            "thursday": [ 29, 6, 19, 18 ],
            "saturday": [ 28, 5, 18, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=206558673/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://davidgarland.bandcamp.com/album/conversations-with-the-cinnamon-skeleton',
          a_string: 'Conversations with the Cinnamon Skeleton by David Garland',
          rule: {
            "monday": [ 28, 5, 18, 17 ],
            "tuesday": [ 1, 9, 22, 21 ],
            "wednesday": [ 31, 8, 21, 20 ],
            "thursday": [ 30, 7, 20, 19 ],
            "saturday": [ 29, 6, 19, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2608437776/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://balancepointacoustics.bandcamp.com/album/bpa-4-hugo-ball-sechs-laut-und-klanggedichte-1916-six-sound-poems-1916',
          a_string: 'BPA -4 Hugo Ball: Sechs Laut-und Klanggedichte 1916 (Six Sound Poems, 1916) by Jaap Blonk / Damon Smith',
          rule: {
            "monday": [ 29, 6, 19, 18 ],
            "tuesday": [ 28, 5, 18, 17 ],
            "wednesday": [ 1, 9, 22, 21 ],
            "thursday": [ 31, 8, 21, 20 ],
            "saturday": [ 30, 7, 20, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3888126553/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ugexploderecords.bandcamp.com/album/untitled-2',
          a_string: 'untitled by Sandy Ewen / Damon Smith / Weasel Walter',
          rule: {
            "monday": [ 31, 8, 21, 20 ],
            "tuesday": [ 30, 7, 20, 19 ],
            "wednesday": [ 29, 6, 19, 18 ],
            "thursday": [ 2, 10, 23, 22 ],
            "saturday": [ 1, 9, 22, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2578160966/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://balancepointacoustics.bandcamp.com/album/bpaltd-808-live-in-texas',
          a_string: 'BPALTD 808 Live in Texas by Ewen/Smith/Walter',
          rule: {
            "monday": [ 1, 9, 22, 21 ],
            "tuesday": [ 31, 8, 21, 20 ],
            "wednesday": [ 30, 7, 20, 19 ],
            "thursday": [ 29, 6, 19, 18 ],
            "saturday": [ 2, 10, 23, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=890024027/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://contradictiontapes.bandcamp.com/album/title-ix',
          a_string: 'Title IX by Ritual Chair',
          rule: {
            "monday": [ 2, 10, 23, 22 ],
            "tuesday": [ 1, 9, 22, 21 ],
            "wednesday": [ 31, 8, 21, 20 ],
            "thursday": [ 30, 7, 20, 19 ],
            "saturday": [ 29, 6, 19, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3216622706/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://norentrecords.bandcamp.com/album/anal-lobotomy-nrr69',
          a_string: '&quot;Anal Lobotomy&quot; (NRR69) by Fecalove',
          rule: {
            "monday": [ 29, 6, 19, 18 ],
            "tuesday": [ 2, 10, 23, 22 ],
            "wednesday": [ 1, 9, 22, 21 ],
            "thursday": [ 31, 8, 21, 20 ],
            "saturday": [ 30, 7, 20, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1384470748/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://picadisk.bandcamp.com/album/dahl-tah-ghi',
          a_string: 'Dahl-Tah-Ghi by Okkyung Lee',
          rule: {
            "monday": [ 30, 7, 20, 19 ],
            "tuesday": [ 29, 6, 19, 18 ],
            "wednesday": [ 2, 10, 23, 22 ],
            "thursday": [ 1, 9, 22, 21 ],
            "saturday": [ 31, 8, 21, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1229270166/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gohleekwang.bandcamp.com/album/new-year-vol-14-dedicated-to-jason-kahn',
          a_string: 'New Year Vol.14 Dedicated to Jason Kahn by Goh Lee Kwang',
          rule: {
            "monday": [ 31, 8, 21, 20 ],
            "tuesday": [ 30, 7, 20, 19 ],
            "wednesday": [ 29, 6, 19, 18 ],
            "thursday": [ 2, 10, 23, 22 ],
            "saturday": [ 1, 9, 22, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3318747678/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yoshimiosusieibarrarobertaikiaubreylowe.bandcamp.com/album/flower-of-sulphur',
          a_string: 'Flower of Sulphur by YoshimiO / Susie Ibarra / Robert Aiki Aubrey Lowe',
          rule: {
            "monday": [ 1, 9, 22, 21 ],
            "tuesday": [ 31, 8, 21, 20 ],
            "wednesday": [ 30, 7, 20, 19 ],
            "thursday": [ 29, 6, 19, 18 ],
            "saturday": [ 2, 10, 23, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1069134634/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kknull1.bandcamp.com/album/colors-of-quantum-ghost',
          a_string: 'Colors of Quantum Ghost by KK NULL',
          rule: {
            "monday": [ 3, 11, 24, 23 ],
            "tuesday": [ 2, 10, 23, 22 ],
            "wednesday": [ 1, 9, 22, 21 ],
            "thursday": [ 31, 8, 21, 20 ],
            "saturday": [ 30, 7, 20, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1585767957/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.zavoloka.com/album/viter',
          a_string: 'Viter by Zavoloka',
          rule: {
            "monday": [ 30, 7, 20, 19 ],
            "tuesday": [ 3, 11, 24, 23 ],
            "wednesday": [ 2, 10, 23, 22 ],
            "thursday": [ 1, 9, 22, 21 ],
            "saturday": [ 31, 8, 21, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3448594348/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gamardahfungus.bandcamp.com/album/hidden-by-the-leaves',
          a_string: 'HIDDEN BY THE LEAVES by Gamardah Fungus',
          rule: {
            "monday": [ 31, 8, 21, 20 ],
            "tuesday": [ 30, 7, 20, 19 ],
            "wednesday": [ 3, 11, 24, 23 ],
            "thursday": [ 2, 10, 23, 22 ],
            "saturday": [ 1, 9, 22, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1271751663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.zavoloka.com/album/volya',
          a_string: 'Volya by Zavoloka',
          rule: {
            "monday": [ 1, 9, 22, 21 ],
            "tuesday": [ 31, 8, 21, 20 ],
            "wednesday": [ 30, 7, 20, 19 ],
            "thursday": [ 3, 11, 24, 23 ],
            "saturday": [ 2, 10, 23, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1843271896/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gerpfastkolektif.bandcamp.com/album/a-collaboration',
          a_string: 'A Collaboration by Junko Hiroshige &amp; Pandu',
          rule: {
            "monday": [ 2, 10, 23, 22 ],
            "tuesday": [ 1, 9, 22, 21 ],
            "wednesday": [ 31, 8, 21, 20 ],
            "thursday": [ 30, 7, 20, 19 ],
            "saturday": [ 3, 11, 24, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1021388601/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gerpfastkolektif.bandcamp.com/album/echo-round-the-intersection',
          a_string: 'Echo Round The Intersection by Yuko Araki // Bergegas Mati',
          rule: {
            "monday": [ 3, 11, 24, 23 ],
            "tuesday":[ 2, 10, 23, 22 ],
            "wednesday": [ 1, 9, 22, 21 ],
            "thursday": [ 31, 8, 21, 20 ],
            "saturday": [ 30, 7, 20, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2304591117/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gerpfastkolektif.bandcamp.com/album/j-u-n-k-o',
          a_string: 'J U N K O))) by Junko Hiroshige',
          rule: {
            "monday": [ 30, 7, 20, 19 ],
            "tuesday": [ 3, 11, 24, 23 ],
            "wednesday": [ 2, 10, 23, 22 ],
            "thursday": [ 1, 9, 22, 21 ],
            "saturday": [ 31, 8, 21, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3030294946/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gerpfastkolektif.bandcamp.com/album/lunatic-lovers',
          a_string: 'Lunatic Lovers by Tissa Mawartyassari',
          rule: {
            "monday": [ 1, 9, 22, 21 ],
            "tuesday": [ 31, 8, 21, 20 ],
            "wednesday": [ 4, 12, 25, 24 ],
            "thursday": [ 3, 11, 24, 23 ],
            "saturday": [ 2, 10, 23, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2447479057/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gerpfastkolektif.bandcamp.com/album/breath-of-insect',
          a_string: 'Breath Of Insect by Incapacitants',
          rule: {
            "monday": [ 2, 10, 23, 22 ],
            "tuesday": [ 1, 9, 22, 21 ],
            "wednesday": [ 31, 8, 21, 20 ],
            "thursday": [ 4, 12, 25, 24 ],
            "saturday": [ 3, 11, 24, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1866601856/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gerpfastkolektif.bandcamp.com/album/physical-barbaric-particles-ep',
          a_string: 'Physical barbaric particles (物理野蠻顆粒) EP by Detroak',
          rule: {
            "monday": [ 3, 11, 24, 23 ],
            "tuesday": [ 2, 10, 23, 22 ],
            "wednesday": [ 1, 9, 22, 21 ],
            "thursday": [ 31, 8, 21, 20 ],
            "saturday": [ 4, 12, 25, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3618978294/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gerpfastkolektif.bandcamp.com/album/tribute-to-my-bloody-valentine-26th-loveless-purple-loveless',
          a_string: '[Tribute To] My Bloody Valentine - 26th Loveless // PURPLE LOVELESS by Indonesian Noise',
          rule: {
            "monday": [ 4, 12, 25, 24 ],
            "tuesday": [ 3, 11, 24, 23 ],
            "wednesday": [ 2, 10, 23, 22 ],
            "thursday": [ 1, 9, 22, 21 ],
            "saturday": [ 31, 8, 21, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3139009821/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://richardramirez.bandcamp.com/album/love-hate-and-dishonor',
          a_string: 'Love, Hate, and Dishonor by An Innocent Young Throat-Cutter',
          rule: {
            "monday": [ 31, 8, 21, 20 ],
            "tuesday": [ 4, 12, 25, 24 ],
            "wednesday": [ 3, 11, 24, 23 ],
            "thursday": [ 2, 10, 23, 22 ],
            "saturday": [ 1, 9, 22, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1243994825/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peltusa.bandcamp.com/album/robs-choice',
          a_string: 'Rob&#39;s Choice by Pelt',
          rule: {
            "monday": [ 1, 9, 22, 21 ],
            "tuesday": [ 31, 8, 21, 20 ],
            "wednesday": [ 4, 12, 25, 24 ],
            "thursday": [ 3, 11, 24, 23 ],
            "saturday": [ 2, 10, 23, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2776475078/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/deranged',
          a_string: 'Deranged by Wolf Eyes',
          rule: {
            "monday": [ 2, 10, 23, 22 ],
            "tuesday": [ 1, 9, 22, 21 ],
            "wednesday": [ 31, 8, 21, 20 ],
            "thursday": [ 4, 12, 25, 24 ],
            "saturday": [ 3, 11, 24, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2522637749/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/rain-of-the-roof-on-my-sound',
          a_string: 'rain of the roof on my sound by Dale Inglett &amp; Killick Hinds',
          rule: {
            "monday": [ 4, 12, 25, 24 ],
            "tuesday": [ 3, 11, 24, 23 ],
            "wednesday": [ 2, 10, 23, 22 ],
            "thursday": [ 1, 9, 22, 21 ],
            "saturday": [ 5, 13, 26, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3883253373/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/recipe-for-raster',
          a_string: 'recipe for raster by Pre-Precipice',
          rule: {
            "monday": [ 5, 13, 26, 25 ],
            "tuesday": [ 4, 12, 25, 24 ],
            "wednesday": [ 3, 11, 24, 23 ],
            "thursday": [ 2, 10, 23, 22 ],
            "saturday": [ 1, 9, 22, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3388044770/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/trance-music-for-crows',
          a_string: 'Trance Music For Crows by Trance Music For Crows',
          rule: {
            "monday": [ 1, 9, 22, 21 ],
            "tuesday": [ 5, 13, 26, 25 ],
            "wednesday": [ 4, 12, 25, 24 ],
            "thursday": [ 3, 11, 24, 23 ],
            "saturday": [ 2, 10, 23, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2352224956/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/psicolomagicolo-2005',
          a_string: 'Psicolomagicolo (2005) by Arrington de Dionyso and Nusch Werchowska',
          rule: {
            "monday": [ 2, 10, 23, 22 ],
            "tuesday": [ 1, 9, 22, 21 ],
            "wednesday": [ 5, 13, 26, 25 ],
            "thursday": [ 4, 12, 25, 24 ],
            "saturday": [ 3, 11, 24, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3928673971/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/open-the-crown',
          a_string: 'Open the Crown by Arrington de Dionyso&#39;s Malaikat dan Singa',
          rule: {
            "monday": [ 3, 11, 24, 23 ],
            "tuesday": [ 2, 10, 23, 22 ],
            "wednesday": [ 1, 9, 22, 21 ],
            "thursday": [ 5, 13, 26, 25 ],
            "saturday": [ 4, 12, 25, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3590797509/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/aroma-kahayan',
          a_string: 'Aroma Kahayan by Arrington de Dionyso and Theo Nugraha',
          rule: {
            "monday": [ 4, 12, 25, 24 ],
            "tuesday": [ 3, 11, 24, 23 ],
            "wednesday": [ 2, 10, 23, 22 ],
            "thursday": [ 1, 9, 22, 21 ],
            "saturday": [ 5, 13, 26, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1746238602/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/unheard-indonesia-kolaborasi-sanggar-budaya-tunjung-nyaho',
          a_string: 'UNHEARD INDONESIA: Kolaborasi Sanggar Budaya Tunjung Nyaho by Arrington de Dionyso',
          rule: {
            "monday": [ 5, 13, 26, 25 ],
            "tuesday": [ 4, 12, 25, 24 ],
            "wednesday": [ 3, 11, 24, 23 ],
            "thursday": [ 2, 10, 23, 22 ],
            "saturday": [ 1, 9, 22, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1749521413/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/songs-of-psychic-fire-vol-3',
          a_string: 'Songs of Psychic Fire, Vol. 3 by Arrington de Dionyso',
          rule: {
            "monday": [ 2, 10, 23, 22 ],
            "tuesday": [ 6, 14, 27, 26 ],
            "wednesday": [ 5, 13, 26, 25 ],
            "thursday": [ 4, 12, 25, 24 ],
            "saturday": [ 3, 11, 24, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4226049073/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://turgidanimalrecordsitaliandivision.bandcamp.com/album/total-punishment-special',
          a_string: 'Total Punishment Special by Fecalove / Taeter',
          rule: {
            "monday": [ 3, 11, 24, 23 ],
            "tuesday": [ 2, 10, 23, 22 ],
            "wednesday": [ 6, 14, 27, 26 ],
            "thursday": [ 5, 13, 26, 25 ],
            "saturday": [ 4, 12, 25, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4105390417/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://turgidanimalrecordsitaliandivision.bandcamp.com/album/untitled',
          a_string: 'Untitled by Dead Body Love + Fecalove',
          rule: {
            "monday": [ 4, 12, 25, 24 ],
            "tuesday": [ 3, 11, 24, 23 ],
            "wednesday": [ 2, 10, 23, 22 ],
            "thursday": [ 6, 14, 27, 26 ],
            "saturday": [ 5, 13, 26, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3518618401/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://turgidanimalrecordsitaliandivision.bandcamp.com/album/c-n-t-i-9',
          a_string: 'C.N.T.I.9 by Maximillian I',
          rule: {
            "monday": [ 5, 13, 26, 25 ],
            "tuesday": [ 4, 12, 25, 24 ],
            "wednesday": [ 3, 11, 24, 23 ],
            "thursday": [ 2, 10, 23, 22 ],
            "saturday": [ 6, 14, 27, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2270536876/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://turgidanimalrecordsitaliandivision.bandcamp.com/album/odium',
          a_string: 'Odium by Bachir Gemayel &amp;  Terminal Erection',
          rule: {
            "monday": [ 6, 14, 27, 26 ],
            "tuesday": [ 5, 13, 26, 25 ],
            "wednesday": [ 4, 12, 25, 24 ],
            "thursday": [ 3, 11, 24, 23 ],
            "saturday": [ 2, 10, 23, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2249722881/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://turgidanimalrecordsitaliandivision.bandcamp.com/album/new-york-special',
          a_string: 'New York Special by Fecalove / Taeter',
          rule: {
            "monday": [ 2, 10, 23, 22 ],
            "tuesday": [ 6, 14, 27, 26 ],
            "wednesday": [ 5, 13, 26, 25 ],
            "thursday": [ 4, 12, 25, 24 ],
            "saturday": [ 3, 11, 24, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1548643723/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://turgidanimalrecordsitaliandivision.bandcamp.com/album/metal',
          a_string: 'Metal by Andreas Brandal &amp; Nicola Vinciguerra',
          rule: {
            "monday": [ 3, 11, 24, 23 ],
            "tuesday": [ 2, 10, 23, 22 ],
            "wednesday": [ 6, 14, 27, 26 ],
            "thursday": [ 5, 13, 26, 25 ],
            "saturday": [ 4, 12, 25, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1384344552/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://turgidanimalrecordsitaliandivision.bandcamp.com/album/elide',
          a_string: 'Elide by Splinter Vs Stalin',
          rule: {
            "monday": [ 5, 13, 26, 25 ],
            "tuesday": [ 4, 12, 25, 24 ],
            "wednesday": [ 3, 11, 24, 23 ],
            "thursday": [ 7, 15, 28, 27 ],
            "saturday": [ 6, 14, 27, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1232320343/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://turgidanimalrecordsitaliandivision.bandcamp.com/album/barbed-wire-burger',
          a_string: 'Barbed Wire Burger by Oleoresin Capsicum',
          rule: {
            "monday": [ 6, 14, 27, 26 ],
            "tuesday": [ 5, 13, 26, 25 ],
            "wednesday": [ 4, 12, 25, 24 ],
            "thursday": [ 3, 11, 24, 23 ],
            "saturday": [ 7, 15, 28, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=982879502/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://turgidanimalrecordsitaliandivision.bandcamp.com/album/diotrio',
          a_string: 'Diotrio by Battistelli/Pica/Vinciguerra',
          rule: {
            "monday": [ 7, 15, 28, 27 ],
            "tuesday": [ 6, 14, 27, 26 ],
            "wednesday": [ 5, 13, 26, 25 ],
            "thursday": [ 4, 12, 25, 24 ],
            "saturday": [ 3, 11, 24, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=728683031/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://turgidanimalrecordsitaliandivision.bandcamp.com/album/split',
          a_string: 'Split by Fecalove, Sexterminator 69',
          rule: {
            "monday": [ 3, 11, 24, 23 ],
            "tuesday": [ 7, 15, 28, 27 ],
            "wednesday": [ 6, 14, 27, 26 ],
            "thursday": [ 5, 13, 26, 25 ],
            "saturday": [ 4, 12, 25, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=515204596/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://turgidanimalrecordsitaliandivision.bandcamp.com/album/dyonisus-dyonisos',
          a_string: 'Dyonisus/Dyonisos by Hoor Paar Kraat + Fecalove',
          rule: {
            "monday": [ 4, 12, 25, 24 ],
            "tuesday": [ 3, 11, 24, 23 ],
            "wednesday": [ 7, 15, 28, 27 ],
            "thursday": [ 6, 14, 27, 26 ],
            "saturday": [ 5, 13, 26, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3476128123/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://muteantsoundsnetlabel.bandcamp.com/album/rupert-holmes',
          a_string: '&#39; Rupert Holmes &#39; by GRUDAKRIS',
          rule: {
            "monday": [ 5, 13, 26, 25 ],
            "tuesday": [ 4, 12, 25, 24 ],
            "wednesday": [ 3, 11, 24, 23 ],
            "thursday": [ 7, 15, 28, 27 ],
            "saturday": [ 6, 14, 27, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1195461427/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skatinjector.bandcamp.com/album/mescaline-massacre',
          a_string: 'Mescaline Massacre by Skat Injector',
          rule: {
            "monday": [ 6, 14, 27, 26 ],
            "tuesday": [ 5, 13, 26, 25 ],
            "wednesday": [ 4, 12, 25, 24 ],
            "thursday": [ 3, 11, 24, 23 ],
            "saturday": [ 7, 15, 28, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2687099287/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://legsakimborecords.bandcamp.com/album/legs-net-110-intact-hypervessel',
          a_string: 'LEGS-NET 110: Intact Hypervessel by Gridbug',
          rule: {
            "monday": [ 8, 16, 29, 28 ],
            "tuesday": [ 7, 15, 28, 27 ],
            "wednesday": [ 6, 14, 27, 26 ],
            "thursday": [ 5, 13, 26, 25 ],
            "saturday": [ 4, 12, 25, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2884053876/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://splitterstormrecords.bandcamp.com/album/splitterstorm-alpha',
          a_string: 'Splitterstorm Alpha by Various',
          rule: {
            "monday": [ 4, 12, 25, 24 ],
            "tuesday": [ 8, 16, 29, 28 ],
            "wednesday": [ 7, 15, 28, 27 ],
            "thursday": [ 6, 14, 27, 26 ],
            "saturday": [ 5, 13, 26, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3219329185/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/power-conditioner',
          a_string: 'Power Conditioner by J.A. Deane and Farrell Lowe',
          rule: {
            "monday": [ 5, 13, 26, 25 ],
            "tuesday": [ 4, 12, 25, 24 ],
            "wednesday": [ 8, 16, 29, 28 ],
            "thursday": [ 7, 15, 28, 27 ],
            "saturday": [ 6, 14, 27, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=884365374/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idmtheftable.bandcamp.com/album/and-the-smell-of-a-blown-out-candle',
          a_string: 'and the smell of a blown out candle. by id m theft able',
          rule: {
            "monday": [ 6, 14, 27, 26 ],
            "tuesday": [ 5, 13, 26, 25 ],
            "wednesday": [ 4, 12, 25, 24 ],
            "thursday": [ 8, 16, 29, 28 ],
            "saturday": [ 7, 15, 28, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3440741442/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bakedtapes.bandcamp.com/album/livin-the-die-high-bias-version',
          a_string: 'Livin&#39; The Die (HIGH BIAS version) by Wet Tuna',
          rule: {
            "monday": [ 7, 15, 28, 27 ],
            "tuesday": [ 6, 14, 27, 26 ],
            "wednesday": [ 5, 13, 26, 25 ],
            "thursday": [ 4, 12, 25, 24 ],
            "saturday": [ 8, 16, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3151943143/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jaapblonk.bandcamp.com/album/kurt-schwitters-ursonate',
          a_string: 'Kurt Schwitters&#39; Ursonate by Jaap Blonk',
          rule: {
            "monday": [ 8, 16, 29, 28 ],
            "tuesday": [ 7, 15, 28, 27 ],
            "wednesday": [ 6, 14, 27, 26 ],
            "thursday": [ 5, 13, 26, 25 ],
            "saturday": [ 4, 12, 25, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2245502658/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jaapblonk.bandcamp.com/album/de-grote-grebbegraai',
          a_string: 'De Grote Grebbegraai by Jaap Blonk',
          rule: {
            "monday": [ 4, 12, 25, 24 ],
            "tuesday": [ 8, 16, 29, 28 ],
            "wednesday": [ 7, 15, 28, 27 ],
            "thursday": [ 6, 14, 27, 26 ],
            "saturday": [ 5, 13, 26, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3025315180/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jaapblonk.bandcamp.com/album/blonk-nijdam-van-der-putten',
          a_string: 'Blonk, Nijdam &amp; Van der Putten by Jaap Blonk, Jan Nijdam en Bart van der Putten',
          rule: {
            "monday": [ 6, 14, 27, 26 ],
            "tuesday": [ 5, 13, 26, 25 ],
            "wednesday": [ 9, 17, 30, 29 ],
            "thursday": [ 8, 16, 29, 28 ],
            "saturday": [ 7, 15, 28, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2278952623/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coldspring.bandcamp.com/album/charnel-transmissions-csr256cd',
          a_string: 'Charnel Transmissions (CSR256CD) by Tunnels Of Ah',
          rule: {
            "monday": [ 7, 15, 28, 27 ],
            "tuesday": [ 6, 14, 27, 26 ],
            "wednesday": [ 5, 13, 26, 25 ],
            "thursday": [ 9, 17, 30, 29 ],
            "saturday": [ 8, 16, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2550726273/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://picadisk.bandcamp.com/album/dietrichs',
          a_string: 'Dietrichs by Don &amp; Camille Dietrich',
          rule: {
            "monday": [ 8, 16, 29, 28 ],
            "tuesday": [ 7, 15, 28, 27 ],
            "wednesday": [ 6, 14, 27, 26 ],
            "thursday": [ 5, 13, 26, 25 ],
            "saturday": [ 9, 17, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2361898125/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://linearobsessional.bandcamp.com/album/conurb',
          a_string: 'Conurb by Philip Sulidae',
          rule: {
            "monday": [ 9, 17, 30, 29 ],
            "tuesday": [ 8, 16, 29, 28 ],
            "wednesday": [ 7, 15, 28, 27 ],
            "thursday": [ 6, 14, 27, 26 ],
            "saturday": [ 5, 13, 26, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=203560107/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leavingrecords.bandcamp.com/album/m-geddes-gengras-ishi',
          a_string: 'M Geddes Gengras - Ishi by M Geddes Gengras',
          rule: {
            "monday": [ 5, 13, 26, 25 ],
            "tuesday": [ 9, 17, 30, 29 ],
            "wednesday": [ 8, 16, 29, 28 ],
            "thursday": [ 7, 15, 28, 27 ],
            "saturday": [ 6, 14, 27, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1967349624/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://keithfullertonwhitman.bandcamp.com/album/nadra-phalanx',
          a_string: 'Nadra Phalanx + by Keith Fullerton Whitman',
          rule: {
            "monday": [ 6, 14, 27, 26 ],
            "tuesday": [ 5, 13, 26, 25 ],
            "wednesday": [ 9, 17, 30, 29 ],
            "thursday": [ 8, 16, 29, 28 ],
            "saturday": [ 7, 15, 28, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2609324614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brettnaucke.bandcamp.com/album/seed-lp',
          a_string: 'Seed LP by Brett Naucke',
          rule: {
            "monday": [ 7, 15, 28, 27 ],
            "tuesday": [ 6, 14, 27, 26 ],
            "wednesday": [ 5, 13, 26, 25 ],
            "thursday": [ 9, 17, 30, 29 ],
            "saturday": [ 8, 16, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2707105826/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rsteviemoore.bandcamp.com/album/4-from-phonography',
          a_string: '4 from &quot;Phonography&quot; by R. STEVIE MOORE',
          rule: {
            "monday": [ 9, 17, 30, 29 ],
            "tuesday": [ 8, 16, 29, 28 ],
            "wednesday": [ 7, 15, 28, 27 ],
            "thursday": [ 6, 14, 27, 26 ],
            "saturday": [ 10, 18, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1380952966/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fraternityasvanity.bandcamp.com/album/in-the-eyes-of-violence-iris-lies-in-silks',
          a_string: 'In the Eyes of Violence Iris Lies in Silks by V/A',
          rule: {
            "monday": [ 10, 18, 31, 30 ],
            "tuesday": [ 9, 17, 30, 29 ],
            "wednesday": [ 8, 16, 29, 28 ],
            "thursday": [ 7, 15, 28, 27 ],
            "saturday": [ 6, 14, 27, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3483903408/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cgirecords.bandcamp.com/album/trench-foot',
          a_string: 'Trench Foot by Grey People',
          rule: {
            "monday": [ 6, 14, 27, 26 ],
            "tuesday": [ 10, 18, 31, 30 ],
            "wednesday": [ 9, 17, 30, 29 ],
            "thursday": [ 8, 16, 29, 28 ],
            "saturday": [ 7, 15, 28, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=863119222/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://harshnoisemovement.bandcamp.com/album/life-on-death-support-an-hnm-records-compilation',
          a_string: 'Life on Death Support: An HNM Records Compilation by Various Artists',
          rule: {
            "monday": [ 7, 15, 28, 27 ],
            "tuesday": [ 6, 14, 27, 26 ],
            "wednesday": [ 10, 18, 31, 30 ],
            "thursday": [ 9, 17, 30, 29 ],
            "saturday": [ 8, 16, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2878791477/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://harshnoisemovement.bandcamp.com/album/macrocanibalismo',
          a_string: 'Macrocanibalismo by Macronympha',
          rule: {
            "monday": [ 8, 16, 29, 28 ],
            "tuesday": [ 7, 15, 28, 27 ],
            "wednesday": [ 6, 14, 27, 26 ],
            "thursday": [ 10, 18, 31, 30 ],
            "saturday": [ 9, 17, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=260146210/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://harshnoisemovement.bandcamp.com/album/t-mikawa-harsh-noise-movement-split-album',
          a_string: 'T. Mikawa / Harsh Noise Movement Split Album by T. Mikawa / Harsh Noise Movement',
          rule: {
            "monday": [ 9, 17, 30, 29 ],
            "tuesday": [ 8, 16, 29, 28 ],
            "wednesday": [ 7, 15, 28, 27 ],
            "thursday": [ 6, 14, 27, 26 ],
            "saturday": [ 10, 18, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2377749480/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/k-k-shell',
          a_string: 'K+K Shell by J.A. Deane and Farrell Lowe',
          rule: {
            "monday": [ 10, 18, 31, 30 ],
            "tuesday": [ 9, 17, 30, 29 ],
            "wednesday": [ 8, 16, 29, 28 ],
            "thursday": [ 7, 15, 28, 27 ],
            "saturday": [ 6, 14, 27, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=977874523/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/the-7th-circle',
          a_string: 'The 7th Circle by 7th Circle Group',
          rule: {
            "monday": [ 7, 15, 28, 27 ],
            "tuesday": [ 11, 19, 1, 31 ],
            "wednesday": [ 10, 18, 31, 30 ],
            "thursday": [ 9, 17, 30, 29 ],
            "saturday": [ 8, 16, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2445799159/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/thought-leader',
          a_string: 'Thought Leader by J.A. Deane and Farrell Lowe',
          rule: {
            "monday": [ 8, 16, 29, 28 ],
            "tuesday": [ 7, 15, 28, 27 ],
            "wednesday": [ 11, 19, 1, 31 ],
            "thursday": [ 10, 18, 31, 30 ],
            "saturday": [ 9, 17, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2784610279/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mariamrezaei.bandcamp.com/album/the-war-of-the-worlds',
          a_string: 'The War Of The Worlds by Mariam Rezaei',
          rule: {
            "monday": [ 9, 17, 30, 29 ],
            "tuesday": [ 8, 16, 29, 28 ],
            "wednesday": [ 7, 15, 28, 27 ],
            "thursday": [ 11, 19, 1, 31 ],
            "saturday": [ 10, 18, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2426930105/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://harshnoisemovement.bandcamp.com/album/four-people-in-different-rooms',
          a_string: 'Four People in Different Rooms by Asmus Tietchens / Jetzmann / TBC / Harsh Noise Movement',
          rule: {
            "monday": [ 10, 18, 31, 30 ],
            "tuesday": [ 9, 17, 30, 29 ],
            "wednesday": [ 8, 16, 29, 28 ],
            "thursday": [ 7, 15, 28, 27 ],
            "saturday": [ 11, 19, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=394902706/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://harshnoisemovement.bandcamp.com/album/split-album-5',
          a_string: 'Split Album by Rudolf Eb.er / Harsh Noise Movement',
          rule: {
            "monday": [ 11, 19, 1, 31 ],
            "tuesday": [ 10, 18, 31, 30 ],
            "wednesday": [ 9, 17, 30, 29 ],
            "thursday": [ 8, 16, 29, 28 ],
            "saturday": [ 7, 15, 28, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=873176353/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/for-the-time-being',
          a_string: 'For the Time Being by J.A. Deane, Ron Miles, and Farrell Lowe',
          rule: {
            "monday": [ 7, 15, 28, 27 ],
            "tuesday": [ 11, 19, 1, 31 ],
            "wednesday": [ 10, 18, 31, 30 ],
            "thursday": [ 9, 17, 30, 29 ],
            "saturday": [ 8, 16, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=210519564/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unifactor.bandcamp.com/album/staceys-spacey',
          a_string: 'Stacey&#39;s Spacey by Marcia Custer',
          rule: {
            "monday": [ 8, 16, 29, 28 ],
            "tuesday": [ 7, 15, 28, 27 ],
            "wednesday": [ 11, 19, 1, 31 ],
            "thursday": [ 10, 18, 31, 30 ],
            "saturday": [ 9, 17, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2117826397/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dinzuartefacts.bandcamp.com/album/sial',
          a_string: 'SiAl by Matthias Urban',
          rule: {
            "monday": [ 10, 18, 31, 30 ],
            "tuesday": [ 9, 17, 30, 29 ],
            "wednesday": [ 8, 16, 29, 28 ],
            "thursday": [ 12, 20, 2, 1 ],
            "saturday": [ 11, 19, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4182450099/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tylerdamon.bandcamp.com/album/full-yum',
          a_string: 'Full Yum by Tyler Damon &amp; Dave Rempis',
          rule: {
            "monday": [ 11, 19, 1, 31 ],
            "tuesday": [ 10, 18, 31, 30 ],
            "wednesday": [ 9, 17, 30, 29 ],
            "thursday": [ 8, 16, 29, 28 ],
            "saturday": [ 12, 20, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3316323587/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://subrosalabel.bandcamp.com/album/four-parabolic-mixes',
          a_string: 'Four Parabolic Mixes by Henri Pousseur / Robert Hampson / Markus Popp - Oval',
          rule: {
            "monday": [ 12, 20, 2, 1 ],
            "tuesday": [ 11, 19, 1, 31 ],
            "wednesday": [ 10, 18, 31, 30 ],
            "thursday": [ 9, 17, 30, 29 ],
            "saturday": [ 8, 16, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=305681587/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://richardramirez.bandcamp.com/album/audio-negativism',
          a_string: 'Audio Negativism by Richard Ramirez',
          rule: {
            "monday": [ 8, 16, 29, 28 ],
            "tuesday": [ 12, 20, 2, 1 ],
            "wednesday": [ 11, 19, 1, 31 ],
            "thursday": [ 10, 18, 31, 30 ],
            "saturday": [ 9, 17, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4022764545/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/or-of-solo-harpeggione-on-wuogs-crisis-62605',
          a_string: 'Or Of: solo H&#39;arpeggione on WUOG&#39;s Crisis 6.26.05 by Killick',
          rule: {
            "monday": [ 9, 17, 30, 29 ],
            "tuesday": [ 8, 16, 29, 28 ],
            "wednesday": [ 12, 20, 2, 1 ],
            "thursday": [ 11, 19, 1, 31 ],
            "saturday": [ 10, 18, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3578418544/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/you-can-achieve-neurological-embodiment-where-the-designed-concept-the-bionic-limb-becomes-a-part-of-someone',
          a_string: 'You can achieve neurological embodiment where the designed concept [the bionic limb] becomes a part of [someone]. by Killick',
          rule: {
            "monday": [ 10, 18, 31, 30 ],
            "tuesday": [ 9, 17, 30, 29 ],
            "wednesday": [ 8, 16, 29, 28 ],
            "thursday": [ 12, 20, 2, 1 ],
            "saturday": [ 11, 19, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2650421915/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/outer-guitar-reaches-of-inner-space-duos',
          a_string: 'Outer Guitar Reaches of Inner Space Duos by Tom Eisenbraun &amp; Killick Hinds',
          rule: {
            "monday": [ 11, 19, 1, 31 ],
            "tuesday": [ 10, 18, 31, 30 ],
            "wednesday": [ 9, 17, 30, 29 ],
            "thursday": [ 8, 16, 29, 28 ],
            "saturday": [ 12, 20, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2223262309/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://torarecords.bandcamp.com/album/goya',
          a_string: 'GOYA by Giuseppe Doronzo',
          rule: {
            "monday": [ 13, 21, 3, 2 ],
            "tuesday": [ 12, 20, 2, 1 ],
            "wednesday": [ 11, 19, 1, 31 ],
            "thursday": [ 10, 18, 31, 30 ],
            "saturday": [ 9, 17, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2730712772/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://excitebiketapes.bandcamp.com/album/crystal-marvelous-fruit',
          a_string: 'Crystal Marvelous Fruit by Xiphiidae',
          rule: {
            "monday": [ 9, 17, 30, 29 ],
            "tuesday": [ 13, 21, 3, 2 ],
            "wednesday": [ 12, 20, 2, 1 ],
            "thursday": [ 11, 19, 1, 31 ],
            "saturday": [ 10, 18, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2095715924/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rawtonkrecords.bandcamp.com/album/static-garbled-dreams',
          a_string: 'Static Garbled Dreams by Colin Webster / Andrew Lisle / Otto Willberg',
          rule: {
            "monday": [ 10, 18, 31, 30 ],
            "tuesday": [ 9, 17, 30, 29 ],
            "wednesday": [ 13, 21, 3, 2 ],
            "thursday": [ 12, 20, 2, 1 ],
            "saturday": [ 11, 19, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3819555654/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/whitehouse',
          a_string: 'Whitehouse by zeitkratzer',
          rule: {
            "monday": [ 11, 19, 1, 31 ],
            "tuesday": [ 10, 18, 31, 30 ],
            "wednesday": [ 9, 17, 30, 29 ],
            "thursday": [ 13, 21, 3, 2 ],
            "saturday": [ 12, 20, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2174839893/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/acts-of-senseless-beauty-santoor-lena-bicycle',
          a_string: 'Acts Of Senseless Beauty / Santoor Lena Bicycle by Nurse With Wound',
          rule: {
            "monday": [ 12, 20, 2, 1 ],
            "tuesday": [ 11, 19, 1, 31 ],
            "wednesday": [ 10, 18, 31, 30 ],
            "thursday": [ 9, 17, 30, 29 ],
            "saturday": [ 13, 21, 3, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=395425664/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/thunder-perfect-mind-deluxe',
          a_string: 'Thunder Perfect Mind Deluxe by Nurse With Wound',
          rule: {
            "monday": [ 13, 21, 3, 2 ],
            "tuesday": [ 12, 20, 2, 1 ],
            "wednesday": [ 11, 19, 1, 31 ],
            "thursday": [ 10, 18, 31, 30 ],
            "saturday": [ 9, 17, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4002144338/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://regionalbears.bandcamp.com/album/benzedrine-bonanza-2',
          a_string: 'Benzedrine Bonanza by Schakalens Bror',
          rule: {
            "monday": [ 9, 17, 30, 29 ],
            "tuesday": [ 13, 21, 3, 2 ],
            "wednesday": [ 12, 20, 2, 1 ],
            "thursday": [ 11, 19, 1, 31 ],
            "saturday": [ 10, 18, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2088532421/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/33-tone-clusters-and-the-truth',
          a_string: '33 tone clusters and the truth by Killick',
          rule: {
            "monday": [ 11, 19, 1, 31 ],
            "tuesday": [ 10, 18, 31, 30 ],
            "wednesday": [ 14, 22, 4, 3 ],
            "thursday": [ 13, 21, 3, 2 ],
            "saturday": [ 12, 20, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=676500537/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/underprometheus-overdemeter',
          a_string: 'underPrometheus, overDemeter by Killick &amp; Monique',
          rule: {
            "monday": [ 12, 20, 2, 1 ],
            "tuesday": [ 11, 19, 1, 31 ],
            "wednesday": [ 10, 18, 31, 30 ],
            "thursday": [ 14, 22, 4, 3 ],
            "saturday": [ 13, 21, 3, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2574391143/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ernestorodrigues.bandcamp.com/album/3-phases-ii-grey',
          a_string: '3 Phases (II) GREY by Ernesto Rodrigues, Bruno Parrinha, Nuno Torres &amp; Paulo Galão',
          rule: {
            "monday": [ 13, 21, 3, 2 ],
            "tuesday": [ 12, 20, 2, 1 ],
            "wednesday": [ 11, 19, 1, 31 ],
            "thursday": [ 10, 18, 31, 30 ],
            "saturday": [ 14, 22, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2431769680/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ernestorodrigues.bandcamp.com/album/3-phases-i-white',
          a_string: '3 Phases (I) WHITE by Ernesto Rodrigues, Albert Cirera, Rodrigo Pinheiro &amp; Carlos Santos',
          rule: {
            "monday": [ 14, 22, 4, 3 ],
            "tuesday": [ 13, 21, 3, 2 ],
            "wednesday": [ 12, 20, 2, 1 ],
            "thursday": [ 11, 19, 1, 31 ],
            "saturday": [ 10, 18, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3454748420/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ernestorodrigues.bandcamp.com/album/penedo',
          a_string: 'Penedo by Ernesto Rodrigues, Guilherme Rodrigues, Miguel Mira &amp; Carlos Santos',
          rule: {
            "monday": [ 10, 18, 31, 30 ],
            "tuesday": [ 14, 22, 4, 3 ],
            "wednesday": [ 13, 21, 3, 2 ],
            "thursday": [ 12, 20, 2, 1 ],
            "saturday": [ 11, 19, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3929975378/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://advaitarecords.bandcamp.com/album/macronympha-guilty-c',
          a_string: 'Macronympha / GUILTY C. by Macronympha / GUILTY C.',
          rule: {
            "monday": [ 11, 19, 1, 31 ],
            "tuesday": [ 10, 18, 31, 30 ],
            "wednesday": [ 14, 22, 4, 3 ],
            "thursday": [ 13, 21, 3, 2 ],
            "saturday": [ 12, 20, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1844530422/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://splooshrecords.bandcamp.com/album/monkey-cop',
          a_string: 'Monkey Cop by Martín &amp; Teté',
          rule: {
            "monday": [ 12, 20, 2, 1 ],
            "tuesday": [ 11, 19, 1, 31 ],
            "wednesday": [ 10, 18, 31, 30 ],
            "thursday": [ 14, 22, 4, 3 ],
            "saturday": [ 13, 21, 3, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2950135151/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://paraphrasetimberne.bandcamp.com/album/pre-emptive-denial',
          a_string: 'Pre-Emptive Denial by Paraphrase &amp; Tim Berne',
          rule: {
            "monday": [ 14, 22, 4, 3 ],
            "tuesday": [ 13, 21, 3, 2 ],
            "wednesday": [ 12, 20, 2, 1 ],
            "thursday": [ 11, 19, 1, 31 ],
            "saturday": [ 15, 23, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=233334309/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pbksound.bandcamp.com/album/shifts-in-strategy',
          a_string: 'SHIFTS IN STRATEGY by AMK / PBK',
          rule: {
            "monday": [ 15, 23, 5, 4 ],
            "tuesday": [ 14, 22, 4, 3 ],
            "wednesday": [ 13, 21, 3, 2 ],
            "thursday": [ 12, 20, 2, 1 ],
            "saturday": [ 11, 19, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2666317245/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pbksound.bandcamp.com/album/life-sense-revoked',
          a_string: 'LIFE-SENSE REVOKED by PBK',
          rule: {
            "monday": [ 11, 19, 1, 31 ],
            "tuesday": [ 15, 23, 5, 4 ],
            "wednesday": [ 14, 22, 4, 3 ],
            "thursday": [ 13, 21, 3, 2 ],
            "saturday": [ 12, 20, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=652655309/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pbksound.bandcamp.com/album/listening-to-the-world-vibrate',
          a_string: 'LISTENING TO THE WORLD VIBRATE by PBK',
          rule: {
            "monday": [ 12, 20, 2, 1 ],
            "tuesday": [ 11, 19, 1, 31 ],
            "wednesday": [ 15, 23, 5, 4 ],
            "thursday": [ 14, 22, 4, 3 ],
            "saturday": [ 13, 21, 3, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=791264815/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nevernotagravedigger.bandcamp.com/album/the-nothings-sweetly',
          a_string: 'The Nothings, Sweetly by Brandon Lopez Trio',
          rule: {
            "monday": [ 13, 21, 3, 2 ],
            "tuesday": [ 12, 20, 2, 1 ],
            "wednesday": [ 11, 19, 1, 31 ],
            "thursday": [ 15, 23, 5, 4 ],
            "saturday": [ 14, 22, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3524400742/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nevernotagravedigger.bandcamp.com/album/the-industry-of-entropy',
          a_string: 'The Industry of Entropy by Brandon Lopez, Gerald Cleaver, Andria Nicodemou, Matt Nelson',
          rule: {
            "monday": [ 14, 22, 4, 3 ],
            "tuesday": [ 13, 21, 3, 2 ],
            "wednesday": [ 12, 20, 2, 1 ],
            "thursday": [ 11, 19, 1, 31 ],
            "saturday": [ 15, 23, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2653528630/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nevernotagravedigger.bandcamp.com/album/the-mess-holy-holy',
          a_string: 'The Mess - Holy Holy by Brandon Lopez, Chris Corsano, Sam Yulsman',
          rule: {
            "monday": [ 15, 23, 5, 4 ],
            "tuesday": [ 14, 22, 4, 3 ],
            "wednesday": [ 13, 21, 3, 2 ],
            "thursday": [ 12, 20, 2, 1 ],
            "saturday": [ 11, 19, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1643949366/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djll.bandcamp.com/album/mutootator',
          a_string: 'MUTOOTATOR by Tom Djll',
          rule: {
            "monday": [ 12, 20, 2, 1 ],
            "tuesday": [ 16, 24, 6, 5 ],
            "wednesday": [ 15, 23, 5, 4 ],
            "thursday": [ 14, 22, 4, 3 ],
            "saturday": [ 13, 21, 3, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3555298040/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://humanhoodrecordings.bandcamp.com/album/sum-otherthings-hhr13',
          a_string: 'SUM : otherthings (HHR13) by Z&#39;EV',
          rule: {
            "monday": [ 13, 21, 3, 2 ],
            "tuesday": [ 12, 20, 2, 1 ],
            "wednesday": [ 16, 24, 6, 5 ],
            "thursday": [ 15, 23, 5, 4 ],
            "saturday": [ 14, 22, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4078020219/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sampluta.bandcamp.com/album/broken-symmetries',
          a_string: 'Broken Symmetries by Sam Pluta',
          rule: {
            "monday": [ 14, 22, 4, 3 ],
            "tuesday": [ 13, 21, 3, 2 ],
            "wednesday": [ 12, 20, 2, 1 ],
            "thursday": [ 16, 24, 6, 5 ],
            "saturday": [ 15, 23, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=400041436/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zoharum.bandcamp.com/album/short-scenes',
          a_string: 'Short Scenes by Machinefabriek with Anne Bakker',
          rule: {
            "monday": [ 15, 23, 5, 4 ],
            "tuesday": [ 14, 22, 4, 3 ],
            "wednesday": [ 13, 21, 3, 2 ],
            "thursday": [ 12, 20, 2, 1 ],
            "saturday": [ 16, 24, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1168675539/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bdta.bandcamp.com/album/of-loops',
          a_string: 'Of Loops by Micromelancolié',
          rule: {
            "monday": [ 16, 24, 6, 5 ],
            "tuesday": [ 15, 23, 5, 4 ],
            "wednesday": [ 14, 22, 4, 3 ],
            "thursday": [ 13, 21, 3, 2 ],
            "saturday": [ 12, 20, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=316362309/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mozdok.bandcamp.com/album/nagawor',
          a_string: 'Nagawor by Urok',
          rule: {
            "monday": [ 12, 20, 2, 1 ],
            "tuesday": [ 16, 24, 6, 5 ],
            "wednesday": [ 15, 23, 5, 4 ],
            "thursday": [ 14, 22, 4, 3 ],
            "saturday": [ 13, 21, 3, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2383799292/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://capturethecobra.bandcamp.com/album/the-forest-hates-you',
          a_string: 'The Forest Hates You by Infirmary',
          rule: {
            "monday": [ 13, 21, 3, 2 ],
            "tuesday": [ 12, 20, 2, 1 ],
            "wednesday": [ 16, 24, 6, 5 ],
            "thursday": [ 15, 23, 5, 4 ],
            "saturday": [ 14, 22, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3263451295/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kevindrumm.bandcamp.com/album/the-gas-bill-ep',
          a_string: 'THE GAS BILL EP by Kevin Drumm',
          rule: {
            "monday": [ 15, 23, 5, 4 ],
            "tuesday": [ 14, 22, 4, 3 ],
            "wednesday": [ 13, 21, 3, 2 ],
            "thursday": [ 17, 25, 7, 6 ],
            "saturday": [ 16, 24, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1973631656/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ernestorodrigues.bandcamp.com/album/kuori',
          a_string: 'Kuori by Ernesto Rodrigues, Lauri Hyvärinen, Abdul Moimême &amp; Carlos Santos',
          rule: {
            "monday": [ 16, 24, 6, 5 ],
            "tuesday": [ 15, 23, 5, 4 ],
            "wednesday": [ 14, 22, 4, 3 ],
            "thursday": [ 13, 21, 3, 2 ],
            "saturday": [ 17, 25, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3310399512/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://supersilent.bandcamp.com/album/14',
          a_string: '14 by Supersilent',
          rule: {
            "monday": [ 17, 25, 7, 6 ],
            "tuesday": [ 16, 24, 6, 5 ],
            "wednesday": [ 15, 23, 5, 4 ],
            "thursday": [ 14, 22, 4, 3 ],
            "saturday": [ 13, 21, 3, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2463830832/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://supersilent.bandcamp.com/album/13',
          a_string: '13 by Supersilent',
          rule: {
            "monday": [ 13, 21, 3, 2 ],
            "tuesday": [ 17, 25, 7, 6 ],
            "wednesday": [ 16, 24, 6, 5 ],
            "thursday": [ 15, 23, 5, 4 ],
            "saturday": [ 14, 22, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2154091842/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coldspring.bandcamp.com/album/fimbulvinter-csr234cd',
          a_string: 'Fimbulvinter (CSR234CD) by Nytt Land',
          rule: {
            "monday": [ 14, 22, 4, 3 ],
            "tuesday": [ 13, 21, 3, 2 ],
            "wednesday": [ 17, 25, 7, 6 ],
            "thursday": [ 16, 24, 6, 5 ],
            "saturday": [ 15, 23, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2130861968/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joemorrisritiglacialeratic.bandcamp.com/album/macrocosm',
          a_string: 'Macrocosm by Joe Morris and Do Yeon Kim',
          rule: {
            "monday": [ 15, 23, 5, 4 ],
            "tuesday": [ 14, 22, 4, 3 ],
            "wednesday": [ 13, 21, 3, 2 ],
            "thursday": [ 17, 25, 7, 6 ],
            "saturday": [ 16, 24, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3009371679/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://humanhoodrecordings.bandcamp.com/album/silence-test-tones-and-noise',
          a_string: 'Silence, Test Tones, And Noise by AARL',
          rule: {
            "monday": [ 16, 24, 6, 5 ],
            "tuesday": [ 15, 23, 5, 4 ],
            "wednesday": [ 14, 22, 4, 3 ],
            "thursday": [ 13, 21, 3, 2 ],
            "saturday": [ 17, 25, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2619057415/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://natewooley.bandcamp.com/album/columbia-icefield',
          a_string: 'Columbia Icefield by Nate Wooley',
          rule: {
            "monday": [ 18, 26, 8, 7 ],
            "tuesday": [ 17, 25, 7, 6 ],
            "wednesday": [ 16, 24, 6, 5 ],
            "thursday": [ 15, 23, 5, 4 ],
            "saturday": [ 14, 22, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2555071617/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/low-clarinet-duos-2009',
          a_string: 'Low Clarinet Duos 2009 by Paul Hoskin and Arrington de Dionyso',
          rule: {
            "monday": [ 14, 22, 4, 3 ],
            "tuesday": [ 18, 26, 8, 7 ],
            "wednesday": [ 17, 25, 7, 6 ],
            "thursday": [ 16, 24, 6, 5 ],
            "saturday": [ 15, 23, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=332560603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tonguedepressor.bandcamp.com/album/broad-is-the-road-that-leads-to-death',
          a_string: 'Broad Is The Road That Leads To Death by TONGUE DEPRESSOR',
          rule: {
            "monday": [ 15, 23, 5, 4 ],
            "tuesday": [ 14, 22, 4, 3 ],
            "wednesday": [ 18, 26, 8, 7 ],
            "thursday": [ 17, 25, 7, 6 ],
            "saturday": [ 16, 24, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2871248153/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/volume-one-dilemmas-of-identity',
          a_string: 'Volume One: Dilemmas Of Identity by Nate Young',
          rule: {
            "monday": [ 16, 24, 6, 5 ],
            "tuesday": [ 15, 23, 5, 4 ],
            "wednesday": [ 14, 22, 4, 3 ],
            "thursday": [ 18, 26, 8, 7 ],
            "saturday": [ 17, 25, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=7981587/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ex-nihilorecords.bandcamp.com/album/anilina',
          a_string: 'Anilina by Alfredo Costa Monteiro, Tomás Gris &amp; David Area',
          rule: {
            "monday": [ 17, 25, 7, 6 ],
            "tuesday": [ 16, 24, 6, 5 ],
            "wednesday": [ 15, 23, 5, 4 ],
            "thursday": [ 14, 22, 4, 3 ],
            "saturday": [ 18, 26, 8, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3409077892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://steveolsonmusic.bandcamp.com/album/sunday-dust',
          a_string: 'Sunday Dust by The X Trio',
          rule: {
            "monday": [ 18, 26, 8, 7 ],
            "tuesday": [ 17, 25, 7, 6 ],
            "wednesday": [ 16, 24, 6, 5 ],
            "thursday": [ 15, 23, 5, 4 ],
            "saturday": [ 14, 22, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=310190898/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://store.badluckband.net/album/two',
          a_string: 'Two by Bad Luck',
          rule: {
            "monday": [ 14, 22, 4, 3 ],
            "tuesday": [ 18, 26, 8, 7 ],
            "wednesday": [ 17, 25, 7, 6 ],
            "thursday": [ 16, 24, 6, 5 ],
            "saturday": [ 15, 23, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=431562691/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://merzbow.bandcamp.com/album/venereology-remaster-reissue',
          a_string: 'Venereology (Remaster Reissue) by Merzbow',
          rule: {
            "monday": [ 16, 24, 6, 5 ],
            "tuesday": [ 15, 23, 5, 4 ],
            "wednesday": [ 19, 27, 9, 8 ],
            "thursday": [ 18, 26, 8, 7 ],
            "saturday": [ 17, 25, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1185594273/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/im-bezel',
          a_string: 'I&#39;m: Bezel by Se&#39;nam Palmer &amp; Killick Hinds',
          rule: {
            "monday": [ 17, 25, 7, 6 ],
            "tuesday": [ 16, 24, 6, 5 ],
            "wednesday": [ 15, 23, 5, 4 ],
            "thursday": [ 19, 27, 9, 8 ],
            "saturday": [ 18, 26, 8, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2882627008/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/q-d-uality',
          a_string: '(q)(d)uality by Scott Bazar Sahada Buckley Killick Hinds Charles Pagano',
          rule: {
            "monday": [ 18, 26, 8, 7 ],
            "tuesday": [ 17, 25, 7, 6 ],
            "wednesday": [ 16, 24, 6, 5 ],
            "thursday": [ 15, 23, 5, 4 ],
            "saturday": [ 19, 27, 9, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3600870382/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rodrigopinheiro.bandcamp.com/album/wsch-d',
          a_string: 'Wschód by Rodrigo Pinheiro + Zbigniew Kozera + Kuba Suchar',
          rule: {
            "monday": [ 19, 27, 9, 8 ],
            "tuesday": [ 18, 26, 8, 7 ],
            "wednesday": [ 17, 25, 7, 6 ],
            "thursday": [ 16, 24, 6, 5 ],
            "saturday": [ 15, 23, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=83725922/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gerpfastkolektif.bandcamp.com/album/--5',
          a_string: 'Ⅰ by Yuko Araki',
          rule: {
            "monday": [ 15, 23, 5, 4 ],
            "tuesday": [ 19, 27, 9, 8 ],
            "wednesday": [ 18, 26, 8, 7 ],
            "thursday": [ 17, 25, 7, 6 ],
            "saturday": [ 16, 24, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2254381764/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sluchaj.bandcamp.com/album/illuminated-silence',
          a_string: 'Illuminated Silence by Izumi Kimura / Barry Guy / Gerry Hemingway',
          rule: {
            "monday": [ 16, 24, 6, 5 ],
            "tuesday": [ 15, 23, 5, 4 ],
            "wednesday": [ 19, 27, 9, 8 ],
            "thursday": [ 18, 26, 8, 7 ],
            "saturday": [ 17, 25, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3393989356/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://linearobsessional.bandcamp.com/album/shining-days',
          a_string: 'Shining Days by Eun-Jung Kim &amp; Charlie Collins',
          rule: {
            "monday": [ 17, 25, 7, 6 ],
            "tuesday": [ 16, 24, 6, 5 ],
            "wednesday": [ 15, 23, 5, 4 ],
            "thursday": [ 19, 27, 9, 8 ],
            "saturday": [ 18, 26, 8, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1834472172/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://natewooleypleasureofthetextsoundamerican.bandcamp.com/album/9-syllables',
          a_string: '[9] Syllables by Nate Wooley',
          rule: {
            "monday": [ 19, 27, 9, 8 ],
            "tuesday": [ 18, 26, 8, 7 ],
            "wednesday": [ 17, 25, 7, 6 ],
            "thursday": [ 16, 24, 6, 5 ],
            "saturday": [ 20, 28, 10, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3236350668/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thissaxophonekillsfascists.bandcamp.com/album/live-at-turn-turn-turn-w-special-guest-david-watson-on-1312019',
          a_string: 'Live at Turn! Turn! Turn! w special guest David Watson on 1.31.2019 by THIS SAXOPHONE KILLS FASCISTS',
          rule: {
            "monday": [ 20, 28, 10, 9 ],
            "tuesday": [ 19, 27, 9, 8 ],
            "wednesday": [ 18, 26, 8, 7 ],
            "thursday": [ 17, 25, 7, 6 ],
            "saturday": [ 16, 24, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3593202277/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deathbedtapes.bandcamp.com/album/beyond-the-grave',
          a_string: 'BEYOND THE GRAVE by Various',
          rule: {
            "monday": [ 16, 24, 6, 5 ],
            "tuesday": [ 20, 28, 10, 9 ],
            "wednesday": [ 19, 27, 9, 8 ],
            "thursday": [ 18, 26, 8, 7 ],
            "saturday": [ 17, 25, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3580031390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://metalchaosensemble.bandcamp.com/album/beyond-the-holy-mountain',
          a_string: 'Beyond the Holy Mountain by Metal Chaos Ensemble',
          rule: {
            "monday": [ 17, 25, 7, 6 ],
            "tuesday": [ 16, 24, 6, 5 ],
            "wednesday": [ 20, 28, 10, 9 ],
            "thursday": [ 19, 27, 9, 8 ],
            "saturday": [ 18, 26, 8, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4241404378/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://harshnoisemovement.bandcamp.com/album/splodge',
          a_string: 'Splodge by Harsh Noise Movement',
          rule: {
            "monday": [ 18, 26, 8, 7 ],
            "tuesday": [ 17, 25, 7, 6 ],
            "wednesday": [ 16, 24, 6, 5 ],
            "thursday": [ 20, 28, 10, 9 ],
            "saturday": [ 19, 27, 9, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=575122340/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sirulita.bandcamp.com/album/magma',
          a_string: 'MAGMA by Agustí Fernández - Joe Morris - Charmaine Lee',
          rule: {
            "monday": [ 19, 27, 9, 8 ],
            "tuesday": [ 18, 26, 8, 7 ],
            "wednesday": [ 17, 25, 7, 6 ],
            "thursday": [ 16, 24, 6, 5 ],
            "saturday": [ 20, 28, 10, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3019029858/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erratum.bandcamp.com/album/le-vray-remede-damour',
          a_string: 'LE VRAY REMEDE D&#39;AMOUR by JOACHIM MONTESSUIS',
          rule: {
            "monday": [ 20, 28, 10, 9 ],
            "tuesday": [ 19, 27, 9, 8 ],
            "wednesday": [ 18, 26, 8, 7 ],
            "thursday": [ 17, 25, 7, 6 ],
            "saturday": [ 16, 24, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2756133962/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carrierrecords.com/album/two-live-sets',
          a_string: 'Two Live Sets by Peter Evans and Sam Pluta',
          rule: {
            "monday": [ 16, 24, 6, 5 ],
            "tuesday": [ 20, 28, 10, 9 ],
            "wednesday": [ 19, 27, 9, 8 ],
            "thursday": [ 18, 26, 8, 7 ],
            "saturday": [ 17, 25, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3506196202/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://steamroom.bandcamp.com/album/steamroom-44',
          a_string: 'steamroom 44 by jim o&#39;rourke',
          rule: {
            "monday": [ 17, 25, 7, 6 ],
            "tuesday": [ 16, 24, 6, 5 ],
            "wednesday": [ 20, 28, 10, 9 ],
            "thursday": [ 19, 27, 9, 8 ],
            "saturday": [ 18, 26, 8, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4026024439/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gottaletitout.bandcamp.com/album/egin',
          a_string: 'Egin by Mia Dyberg / Elo Masing / Ernesto Rodrigues / Guilherme Rodrigues / Tomo Jacobson',
          rule: {
            "monday": [ 18, 26, 8, 7 ],
            "tuesday": [ 17, 25, 7, 6 ],
            "wednesday": [ 16, 24, 6, 5 ],
            "thursday": [ 20, 28, 10, 9 ],
            "saturday": [ 19, 27, 9, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3424866585/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cylinderecordings.bandcamp.com/album/cr014-buku-santos-silva-stadhouders-almeida-costa',
          a_string: '(CR014) BUKU /// SANTOS SILVA/ STADHOUDERS/ ALMEIDA/ COSTA by Susana Santos Silva (trp.) / Jasper Stadhouders (g.) / Gonçalo Almeida (db.) / Gustavo Costa (dr.)',
          rule: {
            "monday": [ 19, 27, 9, 8 ],
            "tuesday": [ 18, 26, 8, 7 ],
            "wednesday": [ 17, 25, 7, 6 ],
            "thursday": [ 16, 24, 6, 5 ],
            "saturday": [ 20, 28, 10, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1496220440/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leapoffaith1.bandcamp.com/album/probability-clouds-double-live-2',
          a_string: 'Probability Clouds (Double Live) by Leap of Faith Orchestra &amp; Sub-Units',
          rule: {
            "monday": [ 20, 28, 10, 9 ],
            "tuesday": [ 19, 27, 9, 8 ],
            "wednesday": [ 18, 26, 8, 7 ],
            "thursday": [ 17, 25, 7, 6 ],
            "saturday": [ 16, 24, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1602728872/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whirrboom.bandcamp.com/album/live-iklectik',
          a_string: 'Live@IKLECTIK by John Butcher &amp; Dylan van der Schyff',
          rule: {
            "monday": [ 16, 24, 6, 5 ],
            "tuesday": [ 20, 28, 10, 9 ],
            "wednesday": [ 19, 27, 9, 8 ],
            "thursday": [ 18, 26, 8, 7 ],
            "saturday": [ 17, 25, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1235519799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rawtonkrecords.bandcamp.com/album/bestemmia',
          a_string: 'Bestemmia by Marco Serrato / Francesco Covarino',
          rule: {
            "monday": [ 17, 25, 7, 6 ],
            "tuesday": [ 16, 24, 6, 5 ],
            "wednesday": [ 20, 28, 10, 9 ],
            "thursday": [ 19, 27, 9, 8 ],
            "saturday": [ 18, 26, 8, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2532994431/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nobusinessrecords.bandcamp.com/album/baza',
          a_string: 'Baza by Martin Kuchen / Rafal Mazur',
          rule: {
            "monday": [ 19, 27, 9, 8 ],
            "tuesday": [ 18, 26, 8, 7 ],
            "wednesday": [ 17, 25, 7, 6 ],
            "thursday": [ 21, 29, 11, 10 ],
            "saturday": [ 20, 28, 10, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=571507663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ocadium.bandcamp.com/album/belief-systems',
          a_string: 'Belief Systems by Ocadium',
          rule: {
            "monday": [ 20, 28, 10, 9 ],
            "tuesday": [ 19, 27, 9, 8 ],
            "wednesday": [ 18, 26, 8, 7 ],
            "thursday": [ 17, 25, 7, 6 ],
            "saturday": [ 21, 29, 11, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3973114847/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nihilistrecordings.bandcamp.com/album/kommissar-hjuler-und-frau-panicsville-split-lp-nihil-85',
          a_string: 'KOMMISSAR HJULER UND FRAU / PANICSVILLE &quot;Split LP&quot; (Nihil 85) by NIHILIST',
          rule: {
            "monday": [ 21, 29, 11, 10 ],
            "tuesday": [ 20, 28, 10, 9 ],
            "wednesday": [ 19, 27, 9, 8 ],
            "thursday": [ 18, 26, 8, 7 ],
            "saturday": [ 17, 25, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2346848369/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://murielgrossmann.bandcamp.com/album/awakening',
          a_string: 'AWAKENING by Muriel Grossmann',
          rule: {
            "monday": [ 17, 25, 7, 6 ],
            "tuesday": [ 21, 29, 11, 10 ],
            "wednesday": [ 20, 28, 10, 9 ],
            "thursday": [ 19, 27, 9, 8 ],
            "saturday": [ 18, 26, 8, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1804722299/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://murielgrossmann.bandcamp.com/album/sudden-impact',
          a_string: 'SUDDEN IMPACT by Muriel Grossmann',
          rule: {
            "monday": [ 18, 26, 8, 7 ],
            "tuesday": [ 17, 25, 7, 6 ],
            "wednesday": [ 21, 29, 11, 10 ],
            "thursday": [ 20, 28, 10, 9 ],
            "saturday": [ 19, 27, 9, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=338303874/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://murielgrossmann.bandcamp.com/album/momentum',
          a_string: 'MOMENTUM by Muriel Grossmann',
          rule: {
            "monday": [ 19, 27, 9, 8 ],
            "tuesday": [ 18, 26, 8, 7 ],
            "wednesday": [ 17, 25, 7, 6 ],
            "thursday": [ 21, 29, 11, 10 ],
            "saturday": [ 20, 28, 10, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3384766438/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://outnowrecordings.bandcamp.com/album/open-circuit',
          a_string: 'Open Circuit by Rick Parker / Eyal Maoz / Yonadav Halevy / Tim Berne',
          rule: {
            "monday": [ 20, 28, 10, 9 ],
            "tuesday": [ 19, 27, 9, 8 ],
            "wednesday": [ 18, 26, 8, 7 ],
            "thursday": [ 17, 25, 7, 6 ],
            "saturday": [ 21, 29, 11, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3664789898/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://balancepointacoustics.bandcamp.com/album/winter-solos-bpa-7-for-robert-ryman',
          a_string: 'Winter Solos BPA -7 for Robert Ryman by Damon Smith',
          rule: {
            "monday": [ 22, 30, 12, 11 ],
            "tuesday": [ 21, 29, 11, 10 ],
            "wednesday": [ 20, 28, 10, 9 ],
            "thursday": [ 19, 27, 9, 8 ],
            "saturday": [ 18, 26, 8, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3228603007/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://harshnoisemovement.bandcamp.com/album/swimming-through-carnal-waters',
          a_string: 'Swimming Through Carnal Waters by Koi Karp',
          rule: {
            "monday": [ 18, 26, 8, 7 ],
            "tuesday": [ 22, 30, 12, 11 ],
            "wednesday": [ 21, 29, 11, 10 ],
            "thursday": [ 20, 28, 10, 9 ],
            "saturday": [ 19, 27, 9, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2601393401/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://robnoyes.bandcamp.com/album/greg-kelley-rob-noyes-split',
          a_string: 'Greg Kelley/Rob Noyes Split by Rob Noyes',
          rule: {
            "monday": [ 19, 27, 9, 8 ],
            "tuesday": [ 18, 26, 8, 7 ],
            "wednesday": [ 22, 30, 12, 11 ],
            "thursday": [ 21, 29, 11, 10 ],
            "saturday": [ 20, 28, 10, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2280450672/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://p-mm.bandcamp.com/album/pmm-blurt-special-russian-tour-record',
          a_string: 'PMM# Blurt - Special Russian Tour Record by Blurt',
          rule: {
            "monday": [ 20, 28, 10, 9 ],
            "tuesday": [ 19, 27, 9, 8 ],
            "wednesday": [ 18, 26, 8, 7 ],
            "thursday": [ 22, 30, 12, 11 ],
            "saturday": [ 21, 29, 11, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=892122042/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://harshnoisemovement.bandcamp.com/album/vaginal-elvis',
          a_string: 'Vaginal Elvis by Elvis Guts / Vaginal Pentagram',
          rule: {
            "monday": [ 21, 29, 11, 10 ],
            "tuesday": [ 20, 28, 10, 9 ],
            "wednesday": [ 19, 27, 9, 8 ],
            "thursday": [ 18, 26, 8, 7 ],
            "saturday": [ 22, 30, 12, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=276148849/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/resavoir',
          a_string: 'Resavoir by Resavoir',
          rule: {
            "monday": [ 22, 30, 12, 11 ],
            "tuesday": [ 21, 29, 11, 10 ],
            "wednesday": [ 20, 28, 10, 9 ],
            "thursday": [ 19, 27, 9, 8 ],
            "saturday": [ 18, 26, 8, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2164937719/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mapawi.bandcamp.com/album/richard-ramirez-lolipoop-split',
          a_string: 'Richard Ramirez / Lolipoop Split by Richard Ramirez / Lolipoop',
          rule: {
            "monday": [ 18, 26, 8, 7 ],
            "tuesday": [ 22, 30, 12, 11 ],
            "wednesday": [ 21, 29, 11, 10 ],
            "thursday": [ 20, 28, 10, 9 ],
            "saturday": [ 19, 27, 9, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1129979010/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intaktrec.bandcamp.com/album/time-gone-out-24bit-96khz',
          a_string: 'Time Gone Out (24bit 96khz) by Sylvie Courvoisier, Mark Feldman',
          rule: {
            "monday": [ 20, 28, 10, 9 ],
            "tuesday": [ 19, 27, 9, 8 ],
            "wednesday": [ 23, 31, 13, 12 ],
            "thursday": [ 22, 30, 12, 11 ],
            "saturday": [ 21, 29, 11, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1450433990/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://metalchaosensemble.bandcamp.com/album/basilisk',
          a_string: 'Basilisk by Metal Chaos Ensemble',
          rule: {
            "monday": [ 21, 29, 11, 10 ],
            "tuesday": [ 20, 28, 10, 9 ],
            "wednesday": [ 19, 27, 9, 8 ],
            "thursday": [ 23, 31, 13, 12 ],
            "saturday": [ 22, 30, 12, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=647882106/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oldtimerelijun.bandcamp.com/album/see-now-and-know',
          a_string: 'SEE NOW AND KNOW by Old Time Relijun',
          rule: {
            "monday": [ 22, 30, 12, 11 ],
            "tuesday": [ 21, 29, 11, 10 ],
            "wednesday": [ 20, 28, 10, 9 ],
            "thursday": [ 19, 27, 9, 8 ],
            "saturday": [ 23, 31, 13, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=861838208/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://richardramirez.bandcamp.com/album/bloodrushes',
          a_string: 'Bloodrushes by Seven Murders',
          rule: {
            "monday": [ 23, 31, 13, 12 ],
            "tuesday": [ 22, 30, 12, 11 ],
            "wednesday": [ 21, 29, 11, 10 ],
            "thursday": [ 20, 28, 10, 9 ],
            "saturday": [ 19, 27, 9, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3782971847/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://insub.bandcamp.com/album/assembl-e-rel-che-r-jouissance-parade',
          a_string: 'Assemblée, Relâche, Réjouissance, Parade by d&#39;incise',
          rule: {
            "monday": [ 19, 27, 9, 8 ],
            "tuesday": [ 23, 31, 13, 12 ],
            "wednesday": [ 22, 30, 12, 11 ],
            "thursday": [ 21, 29, 11, 10 ],
            "saturday": [ 20, 28, 10, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3244818030/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stevebaczkowskiravipadmanabhaduo.bandcamp.com/album/wooden-ocean',
          a_string: 'Wooden Ocean by steve baczkowski / ravi padmanabha duo',
          rule: {
            "monday": [ 20, 28, 10, 9 ],
            "tuesday": [ 19, 27, 9, 8 ],
            "wednesday": [ 23, 31, 13, 12 ],
            "thursday": [ 22, 30, 12, 11 ],
            "saturday": [ 21, 29, 11, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Noise Music & Non-idiomatic Improvisation',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1815737136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://weekertoft.bandcamp.com/album/psychic-armour',
          a_string: 'Psychic Armour by Paul G. Smyth / Chris Corsano',
          rule: {
            "monday": [ 21, 29, 11, 10 ],
            "tuesday": [ 20, 28, 10, 9 ],
            "wednesday": [ 19, 27, 9, 8 ],
            "thursday": [ 23, 31, 13, 12 ],
            "saturday": [ 22, 30, 12, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('august_musics_id_seq', (SELECT MAX(id) FROM august_musics));");
    });
};
