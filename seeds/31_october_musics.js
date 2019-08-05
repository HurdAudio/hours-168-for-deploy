'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('october_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('october_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=395425664/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/thunder-perfect-mind-deluxe',
          a_string: 'Thunder Perfect Mind Deluxe by Nurse With Wound',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 6, 16, 26, 29 ],
            "thursday": [ 5, 15, 25, 28 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1384487254/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carbomb.bandcamp.com/album/meta',
          a_string: 'Meta by Car Bomb',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 6, 16, 26, 29 ],
            "saturday": [ 5, 15, 25, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3706973039/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nomeansnomusic.bandcamp.com/album/the-worldhood-of-the-world-as-such',
          a_string: 'The Worldhood Of The World (As Such) by Nomeansno',
          rule: {
            "monday": [ 5, 15, 25, 28 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 6, 16, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1215305700/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/lofoten-deadhead',
          a_string: 'Lofoten Deadhead by Nurse With Wound',
          rule: {
            "monday": [ 6, 16, 26, 29 ],
            "tuesday": [ 5, 15, 25, 28 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3708541054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://locrian.bandcamp.com/album/infinite-dissolution',
          a_string: 'Infinite Dissolution by Locrian',
          rule: {
            "monday": [ 7, 17, 27, 30 ],
            "tuesday": [ 6, 16, 26, 29 ],
            "wednesday": [ 5, 15, 25, 28 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3338179255/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mamiffer.bandcamp.com/album/statu-nascendi-japanese-bonus-disc',
          a_string: 'Statu Nascendi (Japanese Bonus Disc) by Mamiffer',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 6, 16, 26, 29 ],
            "thursday": [ 5, 15, 25, 28 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3899828666/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/dark-fat',
          a_string: 'Dark Fat by Nurse With Wound',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 6, 16, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1395969956/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://expander.bandcamp.com/album/laws-of-power',
          a_string: 'Laws of Power by EXPANDER',
          rule: {
            "monday": [ 6, 16, 26, 29 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1680348550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cavemancult.bandcamp.com/album/rituals-of-savagery',
          a_string: 'RITUALS OF SAVAGERY by CAVEMAN CULT',
          rule: {
            "monday": [ 7, 17, 27, 30 ],
            "tuesday": [ 6, 16, 26, 29 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=423189070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/automating-volume-one',
          a_string: 'Automating Volume One by Nurse With Wound',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 6, 16, 26, 29 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4251755056/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://candlelightrecordsuk.bandcamp.com/album/reverence',
          a_string: 'Reverence by Emperor',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 6, 16, 26, 29 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2218492553/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://i-voidhangerrecords.bandcamp.com/album/infamata',
          a_string: 'Infamata by SHEIDIM',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 6, 16, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1384948701/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/a-sucked-orange',
          a_string: 'A Sucked Orange by Nurse With Wound',
          rule: {
            "monday": [ 6, 16, 26, 29 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2561425467/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://seriousbeak.bandcamp.com/album/huxwhukw-2',
          a_string: 'Huxwhukw by Serious Beak',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=506985205/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://viakurushimi.bandcamp.com/album/kurushimi',
          a_string: 'Kurushimi by Kurushimi',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1252178260/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/simple-headphone-mind',
          a_string: 'Simple Headphone Mind by Nurse With Wound',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=221334160/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://howlinggiant.bandcamp.com/album/black-hole-space-wizard-part-2',
          a_string: 'Black Hole Space Wizard: Part 2 by Howling Giant',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1330913740/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://spaceslug.bandcamp.com/album/time-travel-dilemma',
          a_string: 'Time Travel Dilemma by Spaceslug',
          rule: {
            "monday": [ 7, 17, 27, 30 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=120112218/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thrillingliving.bandcamp.com/album/12',
          a_string: '12&quot; by gSp',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3894989615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://massmediarecords.bandcamp.com/album/collection',
          a_string: 'Collection by Cemetery',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2251088645/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://internalautonomy.bandcamp.com/album/ferox',
          a_string: 'Ferox by Internal Autonomy',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1209444808/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://relapsealumni.bandcamp.com/album/a-deleted-symphony-for-the-beaten-down',
          a_string: 'A Deleted Symphony for the Beaten Down by Soilent Green',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4008720429/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cloakroom.bandcamp.com/album/time-well',
          a_string: 'Time Well by Cloakroom',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=795143880/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nothing.bandcamp.com/album/tired-of-tomorrow-deluxe-version',
          a_string: 'Tired of Tomorrow (Deluxe Version) by Nothing',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1752700917/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://comacozer.bandcamp.com/album/kalos-eidos-skopeo',
          a_string: 'KALOS EIDOS SKOPEO by COMACOZER',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3101404654/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theblackheartdeathcult.bandcamp.com/album/black-rainbow-ep',
          a_string: 'Black Rainbow - EP by The Black Heart Death Cult',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=749486697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mtmountain.bandcamp.com/album/cosmos-terros',
          a_string: 'Cosmos Terros by Mt. Mountain',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3966029014/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/bar-maldoror',
          a_string: 'Bar Maldoror by Nurse With Wound',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=343477112/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bellwitch.bandcamp.com/album/four-phantoms',
          a_string: 'Four Phantoms by BELL WITCH',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=302569069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://no-solace.bandcamp.com/album/exercises-in-futility-lp-2015',
          a_string: 'Exercises in futility LP 2015 by Mgła',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=989167209/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wrmlst.bandcamp.com/album/the-feral-wisdom',
          a_string: 'The Feral Wisdom by Wormlust',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4280095474/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amputatedveinrecords.bandcamp.com/album/propagation-of-the-foul',
          a_string: 'Propagation Of The Foul by Fatuous Rump',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=644408023/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theanaesthete.bandcamp.com/album/utopioid',
          a_string: 'Utopioid by Rosetta',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3339473640/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/the-surveillance-lounge',
          a_string: 'The Surveillance Lounge by Nurse With Wound',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3300944452/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://melkbelly.bandcamp.com/album/nothing-valley',
          a_string: 'Nothing Valley by Melkbelly',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1914812463/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ghostkillerentertainment.bandcamp.com/album/disney-goes-hardcore',
          a_string: 'Disney Goes Hardcore by Ghost Killer Entertainment',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2006216280/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pyrrhonband.bandcamp.com/album/what-passes-for-survival',
          a_string: 'What Passes For Survival by Pyrrhon',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1182895266/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://profoundlorerecords.bandcamp.com/album/infrared-horizon',
          a_string: 'Infrared Horizon by ARTIFICIAL BRAIN',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3897774988/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deathspellomega.bandcamp.com/album/the-synarchy-of-molten-bones',
          a_string: 'The Synarchy of Molten Bones by Deathspell Omega',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1712544940/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://employedtoserve.bandcamp.com/album/the-warmth-of-a-dying-sun-2',
          a_string: 'The Warmth Of A Dying Sun by Employed To Serve',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2104766731/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ohhms.bandcamp.com/album/cold-2',
          a_string: 'Cold by OHHMS',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1634325352/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://holyroarrecords.bandcamp.com/album/the-truth-in-our-bodies',
          a_string: 'The Truth in Our Bodies by Earth Moves',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3929061907/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darkdescentrecords.bandcamp.com/album/eroded-corridors-of-unbeing',
          a_string: 'Eroded Corridors of Unbeing by Spectral Voice',
          rule: {
            "monday": [ 11, 21, 1, 3 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2158092846/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://misthyrming.bandcamp.com/album/s-ngvar-elds-og-rei-u',
          a_string: 'Söngvar elds og óreiðu by Misþyrming',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 1, 3 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4165913683/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bellwitch.bandcamp.com/album/mirror-reaper',
          a_string: 'Mirror Reaper by Bell Witch',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 11, 21, 1, 3 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2418348675/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/shipwreck-radio-final-broadcasts',
          a_string: 'Shipwreck Radio: Final Broadcasts by Nurse With Wound',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 1, 3 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2660635769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gaywitchabortion.bandcamp.com/album/halo-of-flies-sessions',
          a_string: 'Halo of Flies Sessions by Gay Witch Abortion',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1351521571/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://krallice.bandcamp.com/album/lo-m',
          a_string: 'Loüm by Krallice with Dave Edwardson',
          rule: {
            "monday": [ 11, 21, 1, 3 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2258812329/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/creakiness',
          a_string: 'Creakiness by Nurse With Wound',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 2, 4 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2562196777/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ctts.bandcamp.com/album/as-the-roots-undo',
          a_string: 'As the Roots Undo by Circle Takes the Square',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 2, 4 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2298164209/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thickpisss.bandcamp.com/album/demo',
          a_string: 'Demo by Thick Piss',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 2, 4 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=765292961/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernbaseballpa.bandcamp.com/album/sports-2',
          a_string: 'Sports by Modern Baseball',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 2, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=845311748/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lame-orecords.bandcamp.com/album/lowercase-roses-ep',
          a_string: 'Lowercase Roses EP by Lowercase Roses',
          rule: {
            "monday": [ 12, 22, 2, 4 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1663129501/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whereismarietta.bandcamp.com/album/as-it-were',
          a_string: 'As It Were by Marietta',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 2, 4 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2136943119/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lumpythedumpers.bandcamp.com/album/those-pickled-fuckers"',
          a_string: 'Those Pickled Fuckers by Lumpy &amp; The Dumpers',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 2, 4 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2737163036/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://petitepdx.bandcamp.com/album/ii',
          a_string: 'II by Petite',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 3, 5 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2622430888/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://smokingroom-label.bandcamp.com/album/s-t-2',
          a_string: 'S/T by Ecstasy',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1351946248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cannibalcorpse.bandcamp.com/album/red-before-black',
          a_string: 'Red Before Black by Cannibal Corpse',
          rule: {
            "monday": [ 13, 23, 3, 5 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=482198708/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://legendry.bandcamp.com/album/dungeon-crawler',
          a_string: 'Dungeon Crawler by Legendry',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 3, 5 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3204709921/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://i-voidhangerrecords.bandcamp.com/album/the-crowning-quietus',
          a_string: 'The Crowning Quietus by INCONCESSUS LUX LUCIS',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 3, 5 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3792658459/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://abysmalsounds.bandcamp.com/album/crone',
          a_string: 'Crone by Crone',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 3, 5 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2518658681/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ritualmist.bandcamp.com/album/demo-2017',
          a_string: 'Demo 2017 by Ritual Mist',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2990469977/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ancientdoommetal.bandcamp.com/album/abraxas',
          a_string: 'Abraxas by Ancient',
          rule: {
            "monday": [ 13, 23, 3, 5 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1603210969/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/a-handjob-from-the-laughing-policeman',
          a_string: 'A handjob from the laughing policeman by Nurse With Wound',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 3, 5 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2893280889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/who-can-i-turn-to-stereo',
          a_string: 'Who Can I Turn To Stereo by Nurse With Wound',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 3, 5 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2244444763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/stereo-wastelands',
          a_string: 'Stereo Wastelands by Nurse With Wound',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 3, 5 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=586986555/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://omniatl.bandcamp.com/album/multi-task',
          a_string: 'Multi-task by Omni',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2240770784/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://protomartyr.bandcamp.com/album/relatives-in-descent',
          a_string: 'Relatives In Descent by Protomartyr',
          rule: {
            "monday": [ 13, 23, 3, 5 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2909394141/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carseatheadrest.bandcamp.com/album/starving-while-living',
          a_string: 'Starving While Living by Car Seat Headrest',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 3, 5 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2556597098/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://limpwrist.bandcamp.com/album/facades',
          a_string: 'Facades by Limp Wrist',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 4, 6 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4037673616/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://haramharam.bandcamp.com/album/when-you-have-won-you-have-lost',
          a_string: '>بس ربحت, خسرت &quot;When You Have Won, You Have Lost&quot; by HARAM',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 4, 6 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=919329377/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://listen.20buckspin.com/album/curse-of-conception',
          a_string: 'Curse Of Conception by Spirit Adrift',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4268244820/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://profoundlorerecords.bandcamp.com/album/heartless',
          a_string: 'Heartless by PALLBEARER',
          rule: {
            "monday": [ 14, 24, 4, 6 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1791932081/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://i-voidhangerrecords.bandcamp.com/album/a-subtler-kind-of-light',
          a_string: 'A Subtler Kind Of Light by LOCUST LEAVES',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 4, 6 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4120711825/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wildwing.bandcamp.com/album/doomed-ii-repeat',
          a_string: 'Doomed II Repeat by Wild Wing',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 4, 6 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1434612023/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://squalus.bandcamp.com/album/the-great-fish',
          a_string: 'The Great Fish by Squalus',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 4, 6 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2290990145/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://walpyrgus.bandcamp.com/album/walpyrgus-nights',
          a_string: 'Walpyrgus Nights by Walpyrgus',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3798671361/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://incantation666.bandcamp.com/album/profane-nexus',
          a_string: 'Profane Nexus by Incantation',
          rule: {
            "monday": [ 15, 25, 5, 7 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=279769716/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yelloweyes.bandcamp.com/album/immersion-trench-reverie',
          a_string: 'Immersion Trench Reverie by Yellow Eyes',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 5, 7 ],
            "wednesday": [ 19, 29, 8, 11 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1774896739/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://attic-vanrecords.bandcamp.com/album/sanctimonious',
          a_string: 'Sanctimonious by Attic',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 5, 7 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1464044653/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://powertripsl.bandcamp.com/album/nightmare-logic',
          a_string: 'Nightmare Logic by Power Trip',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 5, 7 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1139063092/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://palbertapalberta.bandcamp.com/album/bye-bye-berta',
          a_string: 'Bye Bye Berta by Palberta',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2391212504/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ironlungpv.bandcamp.com/album/bitter-bitter-lp-lungs-093',
          a_string: 'Bitter Bitter LP (LUNGS-093) by BEHAVIOR',
          rule: {
            "monday": [ 15, 25, 5, 7 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2730123572/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peterperrett.bandcamp.com/album/how-the-west-was-won',
          a_string: 'How The West Was Won by Peter Perrett',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 6, 8 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2730560919/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thrillingliving.bandcamp.com/album/is-toxic-to-pigs-ep',
          a_string: '&quot;...Is Toxic to Pigs??&quot; EP by Xylitol',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 6, 8 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3145862487/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://haramharam.bandcamp.com/album/what-do-you-see',
          a_string: 'شو بتشوف؟ &quot;What Do You See?&quot; by HARAM',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 6, 8 ],
            "saturday": [ 20, 30, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1082864402/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rankxerox.bandcamp.com/album/m-y-t-h-ep',
          a_string: 'M.Y.T.H. EP by Rank/Xerox',
          rule: {
            "monday": [ 20, 30, 9, 12 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 6, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=747829000/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lavidaesunmus.bandcamp.com/album/s-t-mlp-2',
          a_string: 'S/T MLP by Straightjacket Nation',
          rule: {
            "monday": [ 16, 26, 6, 8 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 8, 11 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3353914414/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://derangedrecords.bandcamp.com/album/machine-response',
          a_string: 'Machine Response by CAREER SUICIDE',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 6, 8 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=510235755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://institute.bandcamp.com/album/subordination',
          a_string: 'Subordination by Institute',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 6, 8 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4069180029/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wharfcatrecords.bandcamp.com/album/night-bully-ep',
          a_string: 'Night Bully EP by Urochromes',
          rule: {
            "monday": [ 20, 30, 9, 12 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 7, 9 ],
            "saturday": [ 21, 31, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1806423715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://powertripsl.bandcamp.com/album/manifest-decimation-2',
          a_string: 'Manifest Decimation by Power Trip',
          rule: {
            "monday": [ 21, 31, 10, 13 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 8, 11 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 7, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2354284763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/natal-moonies',
          a_string: 'Natal Moonies by Nurse With Wound',
          rule: {
            "monday": [ 17, 27, 7, 9 ],
            "tuesday": [ 21, 31, 10, 13 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4279901466/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alastordoom.bandcamp.com/album/black-magic-2',
          a_string: 'Black Magic by Alastor',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 7, 9 ],
            "wednesday": [ 21, 31, 10, 13 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=502658108/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://egypt1.bandcamp.com/album/cracks-and-lines',
          a_string: 'CRACKS AND LINES by EGYPT',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 7, 9 ],
            "thursday": [ 21, 31, 10, 13 ],
            "saturday": [ 20, 30, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2796246848/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beholdtheelder.bandcamp.com/album/reflections-of-a-floating-world',
          a_string: 'Reflections of a Floating World by Elder',
          rule: {
            "monday": [ 20, 30, 9, 12 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 7, 9 ],
            "saturday": [ 21, 31, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3881729205/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sabotagerecords.bandcamp.com/album/dead-hero-la-vida-continua-lp',
          a_string: 'Dead Hero - La Vida Continua LP by sabotagerecords',
          rule: {
            "monday": [ 21, 31, 10, 13 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 8, 11 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 7, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3707752074/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://christvswarhol.bandcamp.com/album/dissent-digital-download',
          a_string: 'Dissent [digital download] by Christ vs. Warhol',
          rule: {
            "monday": [ 18, 28, 8, 10 ],
            "tuesday": [ 22, 1, 11, 14 ],
            "wednesday": [ 21, 31, 10, 13 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1269939090/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://occultwhispersrecords.bandcamp.com/album/night-voices-volume-1',
          a_string: 'Night Voices: Volume 1 by Occult Whispers Records',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 8, 10 ],
            "wednesday": [ 22, 1, 11, 14 ],
            "thursday": [ 21, 31, 10, 13 ],
            "saturday": [ 20, 30, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=803644549/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blood-music.bandcamp.com/album/air',
          a_string: 'Air by Astronoid',
          rule: {
            "monday": [ 20, 30, 9, 12 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 8, 10 ],
            "thursday": [ 22, 1, 11, 14 ],
            "saturday": [ 21, 31, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3426839249/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blood-music.bandcamp.com/album/eschaton-m-moire',
          a_string: 'Eschaton Mémoire by Chaos Moon',
          rule: {
            "monday": [ 21, 31, 10, 13 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 8, 11 ],
            "thursday": [ 18, 28, 8, 10 ],
            "saturday": [ 22, 1, 11, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1542160429/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blood-music.bandcamp.com/album/polygondwanaland',
          a_string: 'Polygondwanaland by King Gizzard &amp; The Lizard Wizard',
          rule: {
            "monday": [ 22, 1, 11, 14 ],
            "tuesday": [ 21, 31, 10, 13 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 8, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4216975482/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lavidaesunmus.bandcamp.com/album/un-ltimo-ultrasonido-naci-y-muri-en-barcelona-mlp',
          a_string: 'Un Último Ultrasonido Nació Y Murió En Barcelona MLP by Barcelona',
          rule: {
            "monday": [ 18, 28, 8, 10 ],
            "tuesday": [ 22, 1, 11, 14 ],
            "wednesday": [ 21, 31, 10, 13 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3620062917/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://heterofobiamx.bandcamp.com/album/eres-tan-guapo-3',
          a_string: 'Eres Tan Guapo by Heterofobia',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 8, 10 ],
            "wednesday": [ 22, 1, 11, 14 ],
            "thursday": [ 21, 31, 10, 13 ],
            "saturday": [ 20, 30, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1459946767/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erstetheketontraeger.bandcamp.com/album/ett-039-dau-yflin-drepa-drepa-ep',
          a_string: 'ETT - 039 - DAUÐYFLIN - DREPA DREPA EP by DAUÐYFLIN',
          rule: {
            "monday": [ 21, 31, 10, 13 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 9, 11 ],
            "thursday": [ 23, 2, 12, 15 ],
            "saturday": [ 22, 1, 11, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2796432822/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hamferd.bandcamp.com/album/t-msins-likam',
          a_string: 'Támsins Likam by Hamferð',
          rule: {
            "monday": [ 22, 1, 11, 14 ],
            "tuesday": [ 21, 31, 10, 13 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 9, 11 ],
            "saturday": [ 23, 2, 12, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=682659331/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shoppingfc.bandcamp.com/album/the-official-body',
          a_string: 'The Official Body by Shopping',
          rule: {
            "monday": [ 23, 2, 12, 15 ],
            "tuesday": [ 22, 1, 11, 14 ],
            "wednesday": [ 21, 31, 10, 13 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 9, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1036201888/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://comus.bandcamp.com/album/out-of-the-coma',
          a_string: 'Out Of The Coma by Comus',
          rule: {
            "monday": [ 19, 29, 9, 11 ],
            "tuesday": [ 23, 2, 12, 15 ],
            "wednesday": [ 22, 1, 11, 14 ],
            "thursday": [ 21, 31, 10, 13 ],
            "saturday": [ 20, 30, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=7518368/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayearinthecountry.bandcamp.com/album/the-forest-the-wald-2',
          a_string: 'The Forest / The Wald by A Year In The Country',
          rule: {
            "monday": [ 20, 30, 9, 12 ],
            "tuesday": [ 19, 29, 9, 11 ],
            "wednesday": [ 23, 2, 12, 15 ],
            "thursday": [ 22, 1, 11, 14 ],
            "saturday": [ 21, 31, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3619179189/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://current931.bandcamp.com/album/all-the-pretty-little-horses',
          a_string: 'All The Pretty Little Horses by Current 93',
          rule: {
            "monday": [ 21, 31, 10, 13 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 9, 11 ],
            "thursday": [ 23, 2, 12, 15 ],
            "saturday": [ 22, 1, 11, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1506281696/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theheartwoodinstitute.bandcamp.com/album/witchcraft-70',
          a_string: 'Witchcraft &#39;70 by The Heartwood Institute',
          rule: {
            "monday": [ 22, 1, 11, 14 ],
            "tuesday": [ 21, 31, 10, 13 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 9, 11 ],
            "saturday": [ 23, 2, 12, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=368681962/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newcircle.bandcamp.com/album/memento',
          a_string: 'Memento by New Circle',
          rule: {
            "monday": [ 24, 3, 13, 16 ],
            "tuesday": [ 23, 2, 12, 15 ],
            "wednesday": [ 22, 1, 11, 14 ],
            "thursday": [ 21, 31, 10, 13 ],
            "saturday": [ 20, 30, 10, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1654600730/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://petitepdx.bandcamp.com/album/petite',
          a_string: 'Petite by Petite',
          rule: {
            "monday": [ 20, 30, 10, 12 ],
            "tuesday": [ 24, 3, 13, 16 ],
            "wednesday": [ 23, 2, 12, 15 ],
            "thursday": [ 22, 1, 11, 14 ],
            "saturday": [ 21, 31, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=197622367/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lumpythedumpers.bandcamp.com/album/huff-my-sack',
          a_string: 'Huff My Sack by Lumpy &amp; The Dumpers',
          rule: {
            "monday": [ 21, 31, 10, 13 ],
            "tuesday": [ 20, 30, 10, 12 ],
            "wednesday": [ 24, 3, 13, 16 ],
            "thursday": [ 23, 2, 12, 15 ],
            "saturday": [ 22, 1, 11, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2174839893/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/acts-of-senseless-beauty-santoor-lena-bicycle',
          a_string: 'Acts Of Senseless Beauty / Santoor Lena Bicycle by Nurse With Wound',
          rule: {
            "monday": [ 22, 1, 11, 14 ],
            "tuesday": [ 21, 31, 10, 13 ],
            "wednesday": [ 20, 30, 10, 12 ],
            "thursday": [ 24, 3, 13, 16 ],
            "saturday": [ 23, 2, 12, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4070610304/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/alice-the-goon',
          a_string: 'Alice The Goon by Nurse With Wound',
          rule: {
            "monday": [ 23, 2, 12, 15 ],
            "tuesday": [ 22, 1, 11, 14 ],
            "wednesday": [ 21, 31, 10, 13 ],
            "thursday": [ 20, 30, 10, 12 ],
            "saturday": [ 24, 3, 13, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=738927664/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/lumbs-sister',
          a_string: 'Lumb&#39;s Sister by Nurse With Wound',
          rule: {
            "monday": [ 24, 3, 13, 16 ],
            "tuesday": [ 23, 2, 12, 15 ],
            "wednesday": [ 22, 1, 11, 14 ],
            "thursday": [ 21, 31, 10, 13 ],
            "saturday": [ 20, 30, 10, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1860152868/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://keysoforthanc.bandcamp.com/album/dush-agh-golnauk',
          a_string: 'Dush agh Golnauk by Keys of Orthanc',
          rule: {
            "monday": [ 20, 30, 10, 12 ],
            "tuesday": [ 24, 3, 13, 16 ],
            "wednesday": [ 23, 2, 12, 15 ],
            "thursday": [ 22, 1, 11, 14 ],
            "saturday": [ 21, 31, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=38645880/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darkdescentrecords.bandcamp.com/album/where-all-hope-fades',
          a_string: 'Where All Hope Fades by Ataraxy',
          rule: {
            "monday": [ 22, 1, 11, 14 ],
            "tuesday": [ 21, 31, 11, 13 ],
            "wednesday": [ 25, 4, 14, 17 ],
            "thursday": [ 24, 3, 13, 16 ],
            "saturday": [ 23, 2, 12, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2094904391/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://visigothofficial.bandcamp.com/album/conquerors-oath',
          a_string: 'Conqueror&#39;s Oath by Visigoth',
          rule: {
            "monday": [ 23, 2, 12, 15 ],
            "tuesday": [ 22, 1, 11, 14 ],
            "wednesday": [ 21, 31, 11, 13 ],
            "thursday": [ 25, 4, 14, 17 ],
            "saturday": [ 24, 3, 13, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1243795483/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://agoniarecords.bandcamp.com/album/interregnum',
          a_string: 'Interregnum by Usurpress',
          rule: {
            "monday": [ 24, 3, 13, 16 ],
            "tuesday": [ 23, 2, 12, 15 ],
            "wednesday": [ 22, 1, 11, 14 ],
            "thursday": [ 21, 31, 11, 13 ],
            "saturday": [ 25, 4, 14, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=952348529/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://divideanddissolve.bandcamp.com/album/abomination',
          a_string: 'ABOMINATION by Divide and Dissolve',
          rule: {
            "monday": [ 25, 4, 14, 17 ],
            "tuesday": [ 24, 3, 13, 16 ],
            "wednesday": [ 23, 2, 12, 15 ],
            "thursday": [ 22, 1, 11, 14 ],
            "saturday": [ 21, 31, 11, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1519543028/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://keijihaino.bandcamp.com/album/watashi-dake',
          a_string: 'Watashi Dake? by Keiji Haino',
          rule: {
            "monday": [ 21, 31, 11, 13 ],
            "tuesday": [ 25, 4, 14, 17 ],
            "wednesday": [ 24, 3, 13, 16 ],
            "thursday": [ 23, 2, 12, 15 ],
            "saturday": [ 22, 1, 11, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=423769886/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://markrennerbaltimore.bandcamp.com/album/few-traces',
          a_string: 'Few Traces by Mark Renner',
          rule: {
            "monday": [ 22, 1, 11, 14 ],
            "tuesday": [ 21, 31, 11, 13 ],
            "wednesday": [ 25, 4, 14, 17 ],
            "thursday": [ 24, 3, 13, 16 ],
            "saturday": [ 23, 2, 12, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3032610198/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mastershammer.bandcamp.com/album/fascinator',
          a_string: 'Fascinator by Master&#39;s Hammer',
          rule: {
            "monday": [ 23, 2, 12, 15 ],
            "tuesday": [ 22, 1, 11, 14 ],
            "wednesday": [ 21, 31, 11, 13 ],
            "thursday": [ 25, 4, 14, 17 ],
            "saturday": [ 24, 3, 13, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2297447111/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chevalier.bandcamp.com/album/chapitre-ii-2',
          a_string: 'Chapitre II by Chevalier',
          rule: {
            "monday": [ 25, 4, 14, 17 ],
            "tuesday": [ 24, 3, 13, 16 ],
            "wednesday": [ 23, 2, 12, 15 ],
            "thursday": [ 22, 1, 12, 14 ],
            "saturday": [ 26, 5, 15, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2641990699/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sleepsl.bandcamp.com/album/dopesmoker',
          a_string: 'Dopesmoker by Sleep',
          rule: {
            "monday": [ 26, 5, 15, 18 ],
            "tuesday": [ 25, 4, 14, 17 ],
            "wednesday": [ 24, 3, 13, 16 ],
            "thursday": [ 23, 2, 12, 15 ],
            "saturday": [ 22, 1, 12, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1844741550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://earthsl.bandcamp.com/album/hex-or-printing-in-the-infernal-method',
          a_string: 'Hex; Or Printing In The Infernal Method by Earth',
          rule: {
            "monday": [ 22, 1, 12, 14 ],
            "tuesday": [ 26, 5, 15, 18 ],
            "wednesday": [ 25, 4, 14, 17 ],
            "thursday": [ 24, 3, 13, 16 ],
            "saturday": [ 23, 2, 12, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1306385433/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://circlesl.bandcamp.com/album/terminal',
          a_string: 'Terminal by Circle',
          rule: {
            "monday": [ 23, 2, 12, 15 ],
            "tuesday": [ 22, 1, 12, 14 ],
            "wednesday": [ 26, 5, 15, 18 ],
            "thursday": [ 25, 4, 14, 17 ],
            "saturday": [ 24, 3, 13, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3111444822/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://haloofflies.bandcamp.com/album/cast-of-static-and-smoke',
          a_string: 'Cast Of Static And Smoke by Vile Creature',
          rule: {
            "monday": [ 24, 3, 13, 16 ],
            "tuesday": [ 23, 2, 12, 15 ],
            "wednesday": [ 22, 1, 12, 14 ],
            "thursday": [ 26, 5, 15, 18 ],
            "saturday": [ 25, 4, 14, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2168473265/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://greber.bandcamp.com/album/cemetery-preston',
          a_string: 'Cemetery Preston by Greber',
          rule: {
            "monday": [ 25, 4, 14, 17 ],
            "tuesday": [ 24, 3, 13, 16 ],
            "wednesday": [ 23, 2, 12, 15 ],
            "thursday": [ 22, 1, 12, 14 ],
            "saturday": [ 26, 5, 15, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1646967902/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pinkmassnj.bandcamp.com/album/necrosexual',
          a_string: 'Necrosexual by Pink Mass',
          rule: {
            "monday": [ 26, 5, 15, 18 ],
            "tuesday": [ 25, 4, 14, 17 ],
            "wednesday": [ 24, 3, 13, 16 ],
            "thursday": [ 23, 2, 12, 15 ],
            "saturday": [ 22, 1, 12, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3476971655/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://selfmadegod.bandcamp.com/album/depressant',
          a_string: 'Depressant by ANTIGAMA',
          rule: {
            "monday": [ 23, 2, 13, 15 ],
            "tuesday": [ 27, 6, 16, 19 ],
            "wednesday": [ 26, 5, 15, 18 ],
            "thursday": [ 25, 4, 14, 17 ],
            "saturday": [ 24, 3, 13, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3073472727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fullofhell.bandcamp.com/album/trumpeting-ecstasy',
          a_string: 'Trumpeting Ecstasy by Full of Hell',
          rule: {
            "monday": [ 24, 3, 13, 16 ],
            "tuesday": [ 23, 2, 13, 15 ],
            "wednesday": [ 27, 6, 16, 19 ],
            "thursday": [ 26, 5, 15, 18 ],
            "saturday": [ 25, 4, 14, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4143330164/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ironlungpv.bandcamp.com/album/life-iron-lung-death-lp-cd-lungs-069',
          a_string: 'Life. Iron Lung. Death. LP/CD (LUNGS-069) by IRON LUNG',
          rule: {
            "monday": [ 25, 4, 14, 17 ],
            "tuesday": [ 24, 3, 13, 16 ],
            "wednesday": [ 23, 2, 13, 15 ],
            "thursday": [ 27, 6, 16, 19 ],
            "saturday": [ 26, 5, 15, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=4226651012/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://listen.20buckspin.com/album/the-incubus-of-karma',
          a_string: 'The Incubus Of Karma by Mournful Congregation',
          rule: {
            "monday": [ 26, 5, 15, 18 ],
            "tuesday": [ 25, 4, 14, 17 ],
            "wednesday": [ 24, 3, 13, 16 ],
            "thursday": [ 23, 2, 13, 15 ],
            "saturday": [ 27, 6, 16, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=55267270/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unyielding-love.bandcamp.com/album/the-sweat-of-augury-2',
          a_string: 'The Sweat of Augury by Unyielding Love',
          rule: {
            "monday": [ 27, 6, 16, 19 ],
            "tuesday": [ 26, 5, 15, 18 ],
            "wednesday": [ 25, 4, 14, 17 ],
            "thursday": [ 24, 3, 13, 16 ],
            "saturday": [ 23, 2, 13, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=63441355/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://endon.bandcamp.com/album/through-the-mirror',
          a_string: 'Through the Mirror by Endon',
          rule: {
            "monday": [ 23, 2, 13, 15 ],
            "tuesday": [ 27, 6, 16, 19 ],
            "wednesday": [ 26, 5, 15, 18 ],
            "thursday": [ 25, 4, 14, 17 ],
            "saturday": [ 24, 3, 13, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1417288821/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://americanhate.bandcamp.com/album/our-love-is-real-2',
          a_string: 'Our Love Is Real by American Hate',
          rule: {
            "monday": [ 24, 3, 13, 16 ],
            "tuesday": [ 23, 2, 13, 15 ],
            "wednesday": [ 27, 6, 16, 19 ],
            "thursday": [ 26, 5, 15, 18 ],
            "saturday": [ 25, 4, 14, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=153042344/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://itstrashrecords.bandcamp.com/album/neo-neos-the-hammer-of-civilization-ep-7',
          a_string: 'Neo Neos - The Hammer of Civilization EP 7&quot; by It&#39;s Trash! Records',
          rule: {
            "monday": [ 26, 5, 15, 18 ],
            "tuesday": [ 25, 4, 14, 17 ],
            "wednesday": [ 24, 3, 14, 16 ],
            "thursday": [ 28, 7, 17, 20 ],
            "saturday": [ 27, 6, 16, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1903351576/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cleanplate.bandcamp.com/album/mothercountry-motherfuckers-confidential-human-source',
          a_string: 'Mothercountry Motherfuckers - Confidential Human Source by Mothercountry Motherfuckers',
          rule: {
            "monday": [ 27, 6, 16, 19 ],
            "tuesday": [ 26, 5, 15, 18 ],
            "wednesday": [ 25, 4, 14, 17 ],
            "thursday": [ 24, 3, 14, 16 ],
            "saturday": [ 28, 7, 17, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3215962234/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pryss.bandcamp.com/album/alogia',
          a_string: 'Alogia by Pryss',
          rule: {
            "monday": [ 28, 7, 17, 20 ],
            "tuesday": [ 27, 6, 16, 19 ],
            "wednesday": [ 26, 5, 15, 18 ],
            "thursday": [ 25, 4, 14, 17 ],
            "saturday": [ 24, 3, 14, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=361302036/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://futura3030.bandcamp.com/album/spit-on-the-flag-2',
          a_string: 'Spit On The Flag by FUTURA',
          rule: {
            "monday": [ 24, 3, 14, 16 ],
            "tuesday": [ 28, 7, 17, 20 ],
            "wednesday": [ 27, 6, 16, 19 ],
            "thursday": [ 26, 5, 15, 18 ],
            "saturday": [ 25, 4, 14, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=385560403/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coreyflood.bandcamp.com/album/wish-you-hadnt-ep',
          a_string: 'Wish You Hadn&#39;t EP by corey flood',
          rule: {
            "monday": [ 25, 4, 14, 17 ],
            "tuesday": [ 24, 3, 14, 16 ],
            "wednesday": [ 28, 7, 17, 20 ],
            "thursday": [ 27, 6, 16, 19 ],
            "saturday": [ 26, 5, 15, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3896925743/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blystex.bandcamp.com/album/somos-salvajes',
          a_string: 'SOMOS SALVAJES by Blystex',
          rule: {
            "monday": [ 26, 5, 15, 18 ],
            "tuesday": [ 25, 4, 14, 17 ],
            "wednesday": [ 24, 3, 14, 16 ],
            "thursday": [ 28, 7, 17, 20 ],
            "saturday": [ 27, 6, 16, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=156314077/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sonidomuchacho.bandcamp.com/album/sm-043-desorden',
          a_string: 'SM-043 Desorden by La Plata',
          rule: {
            "monday": [ 27, 6, 16, 19 ],
            "tuesday": [ 26, 5, 15, 18 ],
            "wednesday": [ 25, 4, 14, 17 ],
            "thursday": [ 24, 3, 14, 16 ],
            "saturday": [ 28, 7, 17, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1441323377/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mujerespodridas.bandcamp.com/album/sobredosis',
          a_string: 'SOBREDOSIS by MUJERES PODRIDAS',
          rule: {
            "monday": [ 29, 8, 18, 21 ],
            "tuesday": [ 28, 7, 17, 20 ],
            "wednesday": [ 27, 6, 16, 19 ],
            "thursday": [ 26, 5, 15, 18 ],
            "saturday": [ 25, 4, 15, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=913726158/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://specialinterestno.bandcamp.com/album/spiraling',
          a_string: 'Spiraling by SPECIAL INTEREST',
          rule: {
            "monday": [ 25, 4, 15, 17 ],
            "tuesday": [ 29, 8, 18, 21 ],
            "wednesday": [ 28, 7, 17, 20 ],
            "thursday": [ 27, 6, 16, 19 ],
            "saturday": [ 26, 5, 15, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1338028899/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://graveupheaval.bandcamp.com/album/-',
          a_string: '-- by Grave Upheaval',
          rule: {
            "monday": [ 26, 5, 15, 18 ],
            "tuesday": [ 25, 4, 15, 17 ],
            "wednesday": [ 29, 8, 18, 21 ],
            "thursday": [ 28, 7, 17, 20 ],
            "saturday": [ 27, 6, 16, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=263923895/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://riversofnihil.bandcamp.com/album/where-owls-know-my-name',
          a_string: 'Where Owls Know My Name by Rivers of Nihil',
          rule: {
            "monday": [ 27, 6, 16, 19 ],
            "tuesday": [ 26, 5, 15, 18 ],
            "wednesday": [ 25, 4, 15, 17 ],
            "thursday": [ 29, 8, 18, 21 ],
            "saturday": [ 28, 7, 17, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1399153639/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://primordialofficial.bandcamp.com/album/exile-amongst-the-ruins',
          a_string: 'Exile Amongst the Ruins by Primordial',
          rule: {
            "monday": [ 28, 7, 17, 20 ],
            "tuesday": [ 27, 6, 16, 19 ],
            "wednesday": [ 26, 5, 15, 18 ],
            "thursday": [ 25, 4, 15, 17 ],
            "saturday": [ 29, 8, 18, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3558351474/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darkdescentrecords.bandcamp.com/album/split-ep',
          a_string: 'Split EP by Vastum/Spectral Voice',
          rule: {
            "monday": [ 29, 8, 18, 21 ],
            "tuesday": [ 28, 7, 17, 20 ],
            "wednesday": [ 27, 6, 16, 19 ],
            "thursday": [ 26, 5, 15, 18 ],
            "saturday": [ 25, 4, 15, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=801713348/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://offeatherandbone666.bandcamp.com/album/bestial-hymns-of-perversion',
          a_string: 'Bestial Hymns Of Perversion by OF FEATHER AND BONE',
          rule: {
            "monday": [ 25, 4, 15, 17 ],
            "tuesday": [ 29, 8, 18, 21 ],
            "wednesday": [ 28, 7, 17, 20 ],
            "thursday": [ 27, 6, 16, 19 ],
            "saturday": [ 26, 5, 15, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1520696292/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ironlungpv.bandcamp.com/album/punk-life-is-shit-mlp-lungs-117',
          a_string: 'Punk Life Is Shit MLP (LUNGS-117) by PHYSIQUE',
          rule: {
            "monday": [ 27, 6, 16, 19 ],
            "tuesday": [ 26, 5, 16, 18 ],
            "wednesday": [ 30, 9, 19, 22 ],
            "thursday": [ 29, 8, 18, 21 ],
            "saturday": [ 28, 7, 17, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1584927828/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erstetheketontraeger.bandcamp.com/album/ett-057-warm-bodies-s-t-lp',
          a_string: 'ETT - 057 - Warm Bodies - s/t LP by Warm Bodies',
          rule: {
            "monday": [ 28, 7, 17, 20 ],
            "tuesday": [ 27, 6, 16, 19 ],
            "wednesday": [ 26, 5, 16, 18 ],
            "thursday": [ 30, 9, 19, 22 ],
            "saturday": [ 29, 8, 18, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2631531170/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://otobokebeaver.bandcamp.com/album/okoshiyasu-otoboke-beaver-remastered-2018',
          a_string: 'Okoshiyasu!! Otoboke Beaver (Remastered 2018) by Otoboke Beaver',
          rule: {
            "monday": [ 29, 8, 18, 21 ],
            "tuesday": [ 28, 7, 17, 20 ],
            "wednesday": [ 27, 6, 16, 19 ],
            "thursday": [ 26, 5, 16, 18 ],
            "saturday": [ 30, 9, 19, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=817964522/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leilaabdulrauf.bandcamp.com/album/diminution',
          a_string: 'Diminution by Leila A. Rauf',
          rule: {
            "monday": [ 30, 9, 19, 22 ],
            "tuesday": [ 29, 8, 18, 21 ],
            "wednesday": [ 28, 7, 17, 20 ],
            "thursday": [ 27, 6, 16, 19 ],
            "saturday": [ 26, 5, 16, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1128206723/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leilaabdulrauf.bandcamp.com/album/insomnia',
          a_string: 'Insomnia by Leila A. Rauf',
          rule: {
            "monday": [ 27, 6, 17, 19 ],
            "tuesday": [ 31, 10, 20, 23 ],
            "wednesday": [ 30, 9, 19, 22 ],
            "thursday": [ 29, 8, 18, 21 ],
            "saturday": [ 28, 7, 17, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1710486800/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leilaabdulrauf.bandcamp.com/album/cold-and-cloud',
          a_string: 'Cold And Cloud by Leila A. Rauf',
          rule: {
            "monday": [ 28, 7, 17, 20 ],
            "tuesday": [ 27, 6, 17, 19 ],
            "wednesday": [ 31, 10, 20, 23 ],
            "thursday": [ 30, 9, 19, 22 ],
            "saturday": [ 29, 8, 18, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3363243878/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theex.bandcamp.com/album/27-passports',
          a_string: '27 passports by The Ex',
          rule: {
            "monday": [ 29, 8, 18, 21 ],
            "tuesday": [ 28, 7, 17, 20 ],
            "wednesday": [ 27, 6, 17, 19 ],
            "thursday": [ 31, 10, 20, 23 ],
            "saturday": [ 30, 9, 19, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3811922814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theex.bandcamp.com/album/dignity-of-labour',
          a_string: 'Dignity Of Labour by The Ex',
          rule: {
            "monday": [ 31, 10, 20, 23 ],
            "tuesday": [ 30, 9, 19, 22 ],
            "wednesday": [ 29, 8, 18, 21 ],
            "thursday": [ 28, 7, 18, 20 ],
            "saturday": [ 1, 11, 21, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1591629871/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theex.bandcamp.com/album/pokkeherrie',
          a_string: 'Pokkeherrie by The Ex',
          rule: {
            "monday": [ 1, 11, 21, 24 ],
            "tuesday": [ 31, 10, 20, 23 ],
            "wednesday": [ 30, 9, 19, 22 ],
            "thursday": [ 29, 8, 18, 21 ],
            "saturday": [ 28, 7, 18, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2256160548/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://avantgardemusic.bandcamp.com/album/stars-wept-to-the-sea',
          a_string: 'Stars Wept to the Sea by Unreqvited',
          rule: {
            "monday": [ 28, 7, 18, 20 ],
            "tuesday": [ 1, 11, 21, 24 ],
            "wednesday": [ 31, 10, 20, 23 ],
            "thursday": [ 30, 9, 19, 22 ],
            "saturday": [ 29, 8, 18, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=262063458/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bambara.bandcamp.com/album/shadow-on-everything',
          a_string: 'Shadow On Everything by Bambara',
          rule: {
            "monday": [ 29, 8, 18, 21 ],
            "tuesday": [ 28, 7, 18, 20 ],
            "wednesday": [ 1, 11, 21, 24 ],
            "thursday": [ 31, 10, 20, 23 ],
            "saturday": [ 30, 9, 19, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3504127221/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wildhunt.bandcamp.com/album/afterdream-of-the-reveller',
          a_string: 'Afterdream of the Reveller by WILD HUNT',
          rule: {
            "monday": [ 30, 9, 19, 22 ],
            "tuesday": [ 29, 8, 18, 21 ],
            "wednesday": [ 28, 7, 18, 20 ],
            "thursday": [ 1, 11, 21, 24 ],
            "saturday": [ 31, 10, 20, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=248364969/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sentientruin.bandcamp.com/album/hollow-of-the-void',
          a_string: 'Hollow of the Void by Petrification',
          rule: {
            "monday": [ 31, 10, 20, 23 ],
            "tuesday": [ 30, 9, 19, 22 ],
            "wednesday": [ 29, 8, 18, 21 ],
            "thursday": [ 28, 7, 18, 20 ],
            "saturday": [ 1, 11, 21, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3160158356/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://avantgardemusic.bandcamp.com/album/vent-fant-me',
          a_string: 'Vent Fantôme by Neige Et Noirceur',
          rule: {
            "monday": [ 1, 11, 21, 24 ],
            "tuesday": [ 31, 10, 20, 23 ],
            "wednesday": [ 30, 9, 19, 22 ],
            "thursday": [ 29, 8, 18, 21 ],
            "saturday": [ 28, 7, 18, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1464044653/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://powertripsl.bandcamp.com/album/nightmare-logic',
          a_string: 'Nightmare Logic by Power Trip',
          rule: {
            "monday": [ 29, 8, 19, 21 ],
            "tuesday": [ 2, 12, 22, 25 ],
            "wednesday": [ 1, 11, 21, 24 ],
            "thursday": [ 31, 10, 20, 23 ],
            "saturday": [ 30, 9, 19, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1755169736/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thrillingliving.bandcamp.com/album/aqu-no-eres-nadie-ep',
          a_string: '&quot;Aquí no eres nadie&quot; EP by Riña',
          rule: {
            "monday": [ 30, 9, 19, 22 ],
            "tuesday": [ 29, 8, 19, 21 ],
            "wednesday": [ 2, 12, 22, 25 ],
            "thursday": [ 1, 11, 21, 24 ],
            "saturday": [ 31, 10, 20, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3488827219/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gumming.bandcamp.com/album/human-values',
          a_string: 'HUMAN VALUES by Gumming',
          rule: {
            "monday": [ 31, 10, 20, 23 ],
            "tuesday": [ 30, 9, 19, 22 ],
            "wednesday": [ 29, 8, 19, 21 ],
            "thursday": [ 2, 12, 22, 25 ],
            "saturday": [ 1, 11, 21, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1160278118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://notnormaltapes.bandcamp.com/album/nnt-060-accela-demo-cs',
          a_string: 'NNT#060 Accela - Demo CS by Not Normal Tapes',
          rule: {
            "monday": [ 1, 11, 21, 24 ],
            "tuesday": [ 31, 10, 20, 23 ],
            "wednesday": [ 30, 9, 19, 22 ],
            "thursday": [ 29, 8, 19, 21 ],
            "saturday": [ 2, 12, 22, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3406012893/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://debbyfriday.bandcamp.com/album/bitchpunk',
          a_string: 'BITCHPUNK by DEBBY FRIDAY',
          rule: {
            "monday": [ 2, 12, 22, 25 ],
            "tuesday": [ 1, 11, 21, 24 ],
            "wednesday": [ 31, 10, 20, 23 ],
            "thursday": [ 30, 9, 19, 22 ],
            "saturday": [ 29, 8, 19, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3217797135/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deathtopuzzlehead.bandcamp.com/album/artless',
          a_string: 'ساده (artless) by Puzzlehead',
          rule: {
            "monday": [ 29, 8, 19, 21 ],
            "tuesday": [ 2, 12, 22, 25 ],
            "wednesday": [ 1, 11, 21, 24 ],
            "thursday": [ 31, 10, 20, 23 ],
            "saturday": [ 30, 9, 19, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3659096024/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soulglophl.bandcamp.com/album/tour-tape-2k18-for-the-homie',
          a_string: 'Tour Tape 2K18 (for the homie) by SOUL GLO',
          rule: {
            "monday": [ 30, 9, 19, 22 ],
            "tuesday": [ 29, 8, 19, 21 ],
            "wednesday": [ 2, 12, 22, 25 ],
            "thursday": [ 1, 11, 21, 24 ],
            "saturday": [ 31, 10, 20, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1457951735/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://breathinglight.bandcamp.com/album/cold-static-world',
          a_string: 'Cold Static World by Breathing Light',
          rule: {
            "monday": [ 1, 11, 21, 24 ],
            "tuesday": [ 31, 10, 20, 23 ],
            "wednesday": [ 30, 9, 20, 22 ],
            "thursday": [ 3, 13, 23, 26 ],
            "saturday": [ 2, 12, 22, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2397977898/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://krimewatch.bandcamp.com/album/krimewatch',
          a_string: 'Krimewatch by KRIMEWATCH',
          rule: {
            "monday": [ 2, 12, 22, 25 ],
            "tuesday": [ 1, 11, 21, 24 ],
            "wednesday": [ 31, 10, 20, 23 ],
            "thursday": [ 30, 9, 20, 22 ],
            "saturday": [ 3, 13, 23, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1156350708/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nikander.bandcamp.com/album/sekyra-prohnan-kolenem',
          a_string: 'Sekyra prohnaná kolenem by Nikander',
          rule: {
            "monday": [ 3, 13, 23, 26 ],
            "tuesday": [ 2, 12, 22, 25 ],
            "wednesday": [ 1, 11, 21, 24 ],
            "thursday": [ 31, 10, 20, 23 ],
            "saturday": [ 30, 9, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2706575371/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thebody.bandcamp.com/album/i-have-fought-against-it-but-i-can-t-any-longer',
          a_string: 'I Have Fought Against It, But I Can’t Any Longer. by the body',
          rule: {
            "monday": [ 30, 9, 20, 22 ],
            "tuesday": [ 3, 13, 23, 26 ],
            "wednesday": [ 2, 12, 22, 25 ],
            "thursday": [ 1, 11, 21, 24 ],
            "saturday": [ 31, 10, 20, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2779739662/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kinglychee.bandcamp.com/album/time-will-prove-2012',
          a_string: 'Time Will Prove (2012) by King Ly Chee',
          rule: {
            "monday": [ 31, 10, 20, 23 ],
            "tuesday": [ 30, 9, 20, 22 ],
            "wednesday": [ 3, 13, 23, 26 ],
            "thursday": [ 2, 12, 22, 25 ],
            "saturday": [ 1, 11, 21, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2452933156/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kinglychee.bandcamp.com/album/cnhc-2014',
          a_string: 'CNHC (2014) by King Ly Chee',
          rule: {
            "monday": [ 1, 11, 21, 24 ],
            "tuesday": [ 31, 10, 20, 23 ],
            "wednesday": [ 30, 9, 20, 22 ],
            "thursday": [ 3, 13, 23, 26 ],
            "saturday": [ 2, 12, 22, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4098179232/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://waxidols.bandcamp.com/album/happy-ending',
          a_string: 'Happy Ending by Wax Idols',
          rule: {
            "monday": [ 2, 12, 22, 25 ],
            "tuesday": [ 1, 11, 21, 24 ],
            "wednesday": [ 31, 10, 20, 23 ],
            "thursday": [ 30, 9, 20, 22 ],
            "saturday": [ 3, 13, 23, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1060728591/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skinless.bandcamp.com/album/savagery',
          a_string: 'Savagery by Skinless',
          rule: {
            "monday": [ 4, 14, 24, 27 ],
            "tuesday": [ 3, 13, 23, 26 ],
            "wednesday": [ 2, 12, 22, 25 ],
            "thursday": [ 1, 11, 22, 24 ],
            "saturday": [ 31, 10, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2026848533/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://remembersports.bandcamp.com/album/slow-buzz',
          a_string: 'Slow Buzz by Remember Sports',
          rule: {
            "monday": [ 31, 10, 21, 23 ],
            "tuesday": [ 4, 14, 24, 27 ],
            "wednesday": [ 3, 13, 23, 26 ],
            "thursday": [ 2, 12, 22, 25 ],
            "saturday": [ 1, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3982772932/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peachkellipop.bandcamp.com/album/gentle-leader-2',
          a_string: 'Gentle Leader by Peach Kelli Pop',
          rule: {
            "monday": [ 1, 11, 22, 24 ],
            "tuesday": [ 31, 10, 21, 23 ],
            "wednesday": [ 4, 14, 24, 27 ],
            "thursday": [ 3, 13, 23, 26 ],
            "saturday": [ 2, 12, 22, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3712237853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lavidaesunmus.bandcamp.com/album/what-do-you-stand-for-lp',
          a_string: 'What do you Stand for? LP by S.H.I.T.',
          rule: {
            "monday": [ 2, 12, 22, 25 ],
            "tuesday": [ 1, 11, 22, 24 ],
            "wednesday": [ 31, 10, 21, 23 ],
            "thursday": [ 4, 14, 24, 27 ],
            "saturday": [ 3, 13, 23, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3618923078/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wharfcatrecords.bandcamp.com/album/the-weight-of-the-world-leaves-a-broken-back',
          a_string: 'The Weight of the World Leaves a Broken Back by Decisions',
          rule: {
            "monday": [ 3, 13, 23, 26 ],
            "tuesday": [ 2, 12, 22, 25 ],
            "wednesday": [ 1, 11, 22, 24 ],
            "thursday": [ 31, 10, 21, 23 ],
            "saturday": [ 4, 14, 24, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=330393363/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maternalvoice.bandcamp.com/album/maraudeur-maraudeur-lp',
          a_string: 'Maraudeur + Maraudeur [LP] by Maraudeur',
          rule: {
            "monday": [ 4, 14, 24, 27 ],
            "tuesday": [ 3, 13, 23, 26 ],
            "wednesday": [ 2, 12, 22, 25 ],
            "thursday": [ 1, 11, 22, 24 ],
            "saturday": [ 31, 10, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=26636830/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hawkwind.bandcamp.com/album/space-rock-1969-1979',
          a_string: 'Space Rock - 1969-1979 by Hawkwind',
          rule: {
            "monday": [ 31, 10, 21, 23 ],
            "tuesday": [ 4, 14, 24, 27 ],
            "wednesday": [ 3, 13, 23, 26 ],
            "thursday": [ 2, 12, 22, 25 ],
            "saturday": [ 1, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3402468007/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sigh.bandcamp.com/album/scenes-from-hell',
          a_string: 'Scenes from Hell by Sigh',
          rule: {
            "monday": [ 2, 12, 23, 25 ],
            "tuesday": [ 1, 11, 22, 24 ],
            "wednesday": [ 5, 15, 25, 28 ],
            "thursday": [ 4, 14, 24, 27 ],
            "saturday": [ 3, 13, 23, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2238107708/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://i-voidhangerrecords.bandcamp.com/album/self-annihilating-consciousness',
          a_string: 'Self-Annihilating Consciousness by EIGENLICHT',
          rule: {
            "monday": [ 3, 13, 23, 26 ],
            "tuesday": [ 2, 12, 23, 25 ],
            "wednesday": [ 1, 11, 22, 24 ],
            "thursday": [ 5, 15, 25, 28 ],
            "saturday": [ 4, 14, 24, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2249211452/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://listen.20buckspin.com/album/desolation',
          a_string: 'Desolation by Khemmis',
          rule: {
            "monday": [ 4, 14, 24, 27 ],
            "tuesday": [ 3, 13, 23, 26 ],
            "wednesday": [ 2, 12, 23, 25 ],
            "thursday": [ 1, 11, 22, 24 ],
            "saturday": [ 5, 15, 25, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3765643685/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://regionaljusticecenter.bandcamp.com/album/world-of-inconvenience',
          a_string: 'World of Inconvenience by Regional Justice Center',
          rule: {
            "monday": [ 5, 15, 25, 28 ],
            "tuesday": [ 4, 14, 24, 27 ],
            "wednesday": [ 3, 13, 23, 26 ],
            "thursday": [ 2, 12, 23, 25 ],
            "saturday": [ 1, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4150705894/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whatwedoissecrete.bandcamp.com/album/what-do-you-stand-for',
          a_string: 'What Do You Stand For? by S.H.I.T.',
          rule: {
            "monday": [ 1, 11, 22, 24 ],
            "tuesday": [ 5, 15, 25, 28 ],
            "wednesday": [ 4, 14, 24, 27 ],
            "thursday": [ 3, 13, 23, 26 ],
            "saturday": [ 2, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=879531568/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zealandardor.bandcamp.com/album/stranger-fruit',
          a_string: 'Stranger Fruit by Zeal and Ardor',
          rule: {
            "monday": [ 2, 12, 23, 25 ],
            "tuesday": [ 1, 11, 22, 24 ],
            "wednesday": [ 5, 15, 25, 28 ],
            "thursday": [ 4, 14, 24, 27 ],
            "saturday": [ 3, 13, 23, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=454848065/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://flasherdc.bandcamp.com/album/constant-image',
          a_string: 'Constant Image by Flasher',
          rule: {
            "monday": [ 3, 13, 23, 26 ],
            "tuesday": [ 2, 12, 23, 25 ],
            "wednesday": [ 1, 11, 22, 24 ],
            "thursday": [ 5, 15, 25, 28 ],
            "saturday": [ 4, 14, 24, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1853134337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://riesgochi.bandcamp.com/album/demo-mmxviii',
          a_string: 'Demo MMXVIII by RIESGO',
          rule: {
            "monday": [ 5, 15, 25, 28 ],
            "tuesday": [ 4, 14, 24, 27 ],
            "wednesday": [ 3, 13, 24, 26 ],
            "thursday": [ 2, 12, 23, 25 ],
            "saturday": [ 6, 16, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=737696296/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://notnormaltapes.bandcamp.com/album/nnt-062-cb-radio-gorgeous-plays-cb-radio-gorgeous',
          a_string: 'NNT#062 CB Radio Gorgeous - Plays CB Radio Gorgeous by Not Normal Tapes',
          rule: {
            "monday": [ 6, 16, 26, 29 ],
            "tuesday": [ 5, 15, 25, 28 ],
            "wednesday": [ 4, 14, 24, 27 ],
            "thursday": [ 3, 13, 24, 26 ],
            "saturday": [ 2, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3629590149/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://perravida.bandcamp.com/album/ep',
          a_string: 'EP by PERRA VIDA',
          rule: {
            "monday": [ 2, 12, 23, 25 ],
            "tuesday": [ 6, 16, 26, 29 ],
            "wednesday": [ 5, 15, 25, 28 ],
            "thursday": [ 4, 14, 24, 27 ],
            "saturday": [ 3, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4060774432/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thecoolgreenhouse.bandcamp.com/album/london',
          a_string: 'London by The Cool Greenhouse',
          rule: {
            "monday": [ 3, 13, 24, 26 ],
            "tuesday": [ 2, 12, 23, 25 ],
            "wednesday": [ 6, 16, 26, 29 ],
            "thursday": [ 5, 15, 25, 28 ],
            "saturday": [ 4, 14, 24, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3222170659/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lavidaesunmus.bandcamp.com/album/hitos-y-derrotas-mlp',
          a_string: 'Hitos Y Derrotas MLP by Nueva Fuerza',
          rule: {
            "monday": [ 4, 14, 24, 27 ],
            "tuesday": [ 3, 13, 24, 26 ],
            "wednesday": [ 2, 12, 23, 25 ],
            "thursday": [ 6, 16, 26, 29 ],
            "saturday": [ 5, 15, 25, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2411420538/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://preening.bandcamp.com/album/nice-dice',
          a_string: 'Nice Dice by Preening',
          rule: {
            "monday": [ 5, 15, 25, 28 ],
            "tuesday": [ 4, 14, 24, 27 ],
            "wednesday": [ 3, 13, 24, 26 ],
            "thursday": [ 2, 12, 23, 25 ],
            "saturday": [ 6, 16, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1660216600/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://buzzrecordsto.bandcamp.com/album/fixed-ideals-lp',
          a_string: 'Fixed Ideals [LP] by Muncie Girls',
          rule: {
            "monday": [ 6, 16, 26, 29 ],
            "tuesday": [ 5, 15, 25, 28 ],
            "wednesday": [ 4, 14, 24, 27 ],
            "thursday": [ 3, 13, 24, 26 ],
            "saturday": [ 2, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3436968866/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idlesband.bandcamp.com/album/joy-as-an-act-of-resistance',
          a_string: 'Joy as an Act of Resistance. by IDLES',
          rule: {
            "monday": [ 3, 13, 24, 26 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 6, 16, 26, 29 ],
            "thursday": [ 5, 15, 25, 28 ],
            "saturday": [ 4, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=42142352/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://avantgardemusic.bandcamp.com/album/dark-space-iii-i',
          a_string: 'Dark Space III I by Darkspace',
          rule: {
            "monday": [ 4, 14, 25, 27 ],
            "tuesday": [ 3, 13, 24, 26 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 6, 16, 26, 29 ],
            "saturday": [ 5, 15, 25, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=744294917/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marecognitum.bandcamp.com/album/luminiferous-aether',
          a_string: 'Luminiferous Aether by Mare Cognitum',
          rule: {
            "monday": [ 5, 15, 25, 28 ],
            "tuesday": [ 4, 14, 25, 27 ],
            "wednesday": [ 3, 13, 24, 26 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 6, 16, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=855264640/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://selfmutilationservices.com/album/echoes-from-eta-carinae',
          a_string: 'Echoes From Eta Carinae by Alrakis',
          rule: {
            "monday": [ 6, 16, 26, 29 ],
            "tuesday": [ 5, 15, 25, 28 ],
            "wednesday": [ 4, 14, 25, 27 ],
            "thursday": [ 3, 13, 24, 26 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1828148304/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://i-voidhangerrecords.bandcamp.com/album/shards-of-silver-fade',
          a_string: 'Shards Of Silver Fade by MIDNIGHT ODYSSEY',
          rule: {
            "monday": [ 7, 17, 27, 30 ],
            "tuesday": [ 6, 16, 26, 29 ],
            "wednesday": [ 5, 15, 25, 28 ],
            "thursday": [ 4, 14, 25, 27 ],
            "saturday": [ 3, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2842598779/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lavidaesunmus.bandcamp.com/album/living-in-excellence',
          a_string: 'Living in Excellence by Constant Mongrel',
          rule: {
            "monday": [ 3, 13, 24, 26 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 6, 16, 26, 29 ],
            "thursday": [ 5, 15, 25, 28 ],
            "saturday": [ 4, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=860230252/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lavidaesunmus.bandcamp.com/album/binasa',
          a_string: 'Binasa by Sial',
          rule: {
            "monday": [ 4, 14, 25, 27 ],
            "tuesday": [ 3, 13, 24, 26 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 6, 16, 26, 29 ],
            "saturday": [ 5, 15, 25, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3866328804/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stickwiththebeat.bandcamp.com/album/meat-market',
          a_string: 'Meat Market by MEAT MARKET',
          rule: {
            "monday": [ 6, 16, 26, 29 ],
            "tuesday": [ 5, 15, 26, 28 ],
            "wednesday": [ 4, 14, 24, 27 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2305592401/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bosse-de-nage.bandcamp.com/album/further-still',
          a_string: 'Further Still by Bosse-de-Nage',
          rule: {
            "monday": [ 7, 17, 27, 30 ],
            "tuesday": [ 6, 16, 26, 29 ],
            "wednesday": [ 5, 15, 26, 28 ],
            "thursday": [ 4, 14, 24, 27 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=369013589/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sweatyandcramped.bandcamp.com/album/emotion-no',
          a_string: '&quot;Emotion, No&quot; by V/A',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 6, 16, 26, 29 ],
            "thursday": [ 5, 15, 26, 28 ],
            "saturday": [ 4, 14, 24, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1715383355/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sweatyandcramped.bandcamp.com/album/victims-7',
          a_string: 'VICTIMS [7&quot;] by DAVID BORING',
          rule: {
            "monday": [ 4, 14, 24, 27 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 6, 16, 26, 29 ],
            "saturday": [ 5, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=81057073/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://horrendoussom.bandcamp.com/album/idol',
          a_string: 'Idol by Horrendous',
          rule: {
            "monday": [ 5, 15, 26, 28 ],
            "tuesday": [ 4, 14, 24, 27 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 6, 16, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3887666805/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://non-serviam-records.bandcamp.com/album/end-of-the-circle',
          a_string: 'End Of The Circle by Ennui',
          rule: {
            "monday": [ 6, 16, 26, 29 ],
            "tuesday": [ 5, 15, 26, 28 ],
            "wednesday": [ 4, 14, 24, 27 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2139075094/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://satanuk.bandcamp.com/album/cruel-magic',
          a_string: 'Cruel Magic by Satan',
          rule: {
            "monday": [ 7, 17, 27, 30 ],
            "tuesday": [ 6, 16, 26, 29 ],
            "wednesday": [ 5, 15, 26, 28 ],
            "thursday": [ 4, 14, 24, 27 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4181361550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://witchripper.bandcamp.com/album/homestead',
          a_string: 'Homestead by Witch Ripper',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 6, 16, 27, 29 ],
            "saturday": [ 5, 15, 25, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2131497285/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pigdestroyer.bandcamp.com/album/head-cage',
          a_string: 'Head Cage by Pig Destroyer',
          rule: {
            "monday": [ 5, 15, 25, 28 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 6, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2618949784/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rideforrevenge.bandcamp.com/album/sinking-the-song',
          a_string: 'Sinking The Song by Ride For Revenge',
          rule: {
            "monday": [ 6, 16, 27, 29 ],
            "tuesday": [ 5, 15, 25, 28 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=152414414/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://horrendous.bandcamp.com/album/idol',
          a_string: 'Idol by Horrendous',
          rule: {
            "monday": [ 7, 17, 27, 30 ],
            "tuesday": [ 6, 16, 27, 29 ],
            "wednesday": [ 5, 15, 25, 28 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=69905044/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://negazione.bandcamp.com/album/lo-spirito-continua',
          a_string: 'Lo spirito continua by Negazione',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 6, 16, 27, 29 ],
            "thursday": [ 5, 15, 25, 28 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2760225019/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://negazione.bandcamp.com/album/tutti-pazzi',
          a_string: 'Tutti Pazzi by Negazione',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 6, 16, 27, 29 ],
            "saturday": [ 5, 15, 25, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=409654917/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rata-negra.bandcamp.com/album/justicia-c-smica',
          a_string: 'Justicia Cósmica by Rata Negra',
          rule: {
            "monday": [ 5, 15, 25, 28 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 6, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=563785673/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://notnormaltapes.bandcamp.com/album/nnt-067-ct-85-self-titled-cs',
          a_string: 'NNT#067 CT-85 - Self-Titled CS by Not Normal Tapes',
          rule: {
            "monday": [ 7, 17, 28, 30 ],
            "tuesday": [ 6, 16, 26, 29 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3537979781/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://verdugodiscos.bandcamp.com/album/sue-os-deceptivos',
          a_string: 'Sueños Deceptivos by Tozcos',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 7, 17, 28, 30 ],
            "wednesday": [ 6, 16, 26, 29 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3928468598/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://purenoise.bandcamp.com/album/cheer',
          a_string: 'Cheer by Drug Church',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 7, 17, 28, 30 ],
            "thursday": [ 6, 16, 26, 29 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2995935459/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://doomtownrecords.bandcamp.com/album/s-t',
          a_string: 'S/T by Jarada',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 7, 17, 28, 30 ],
            "saturday": [ 6, 16, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2148315379/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cirithungol.bandcamp.com/album/king-of-the-dead-ultimate-edition',
          a_string: 'King of the Dead (Ultimate Edition) by Cirith Ungol',
          rule: {
            "monday": [ 6, 16, 26, 29 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 7, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1416850829/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://windhand.bandcamp.com/album/eternal-return',
          a_string: 'Eternal Return by Windhand',
          rule: {
            "monday": [ 7, 17, 28, 30 ],
            "tuesday": [ 6, 16, 26, 29 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3866573919/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://highonfiresl.bandcamp.com/album/electric-messiah',
          a_string: 'Electric Messiah by High On Fire',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 7, 17, 28, 30 ],
            "wednesday": [ 6, 16, 26, 29 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2241673079/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://setandsetting.bandcamp.com/album/tabula-rasa',
          a_string: 'Tabula Rasa by set and setting',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 29, 31 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3099549596/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dirgeindia.bandcamp.com/album/ah-puch',
          a_string: 'Ah Puch by DIRGE',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 29, 31 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1685924939/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mothspr.bandcamp.com/album/moths',
          a_string: 'Moths by Moths',
          rule: {
            "monday": [ 7, 17, 27, 30 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 29, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1746528601/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/funeral-music-for-perez-prado',
          a_string: 'Funeral Music For Perez Prado by Nurse With Wound',
          rule: {
            "monday": [ 8, 18, 29, 31 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1110099553/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bauhaus.bandcamp.com/album/the-bela-session',
          a_string: 'The Bela Session by Bauhaus',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 29, 31 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2253179393/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://warhaus.bandcamp.com/album/warhaus',
          a_string: 'Warhaus by Warhaus',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 29, 31 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3426643449/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wearetheacid.bandcamp.com/album/the-acid-ep',
          a_string: 'The Acid EP by The Acid',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 29, 31 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1433902603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://profoundlorerecords.bandcamp.com/album/hypnagogia',
          a_string: 'Hypnagogia by EVOKEN',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 30, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3360662541/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cantiquelepreux.bandcamp.com/album/paysages-polaires',
          a_string: 'Paysages Polaires by CANTIQUE LÉPREUX',
          rule: {
            "monday": [ 9, 19, 30, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2277136561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://conventguilt.bandcamp.com/album/diamond-cut-diamond-2',
          a_string: 'Diamond Cut Diamond by CONVENT GUILT',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 30, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=414652898/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bufihimat.bandcamp.com/album/i',
          a_string: 'I by Bufihimat',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 30, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=520117013/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lethean-uk.bandcamp.com/album/the-waters-of-death',
          a_string: 'The Waters Of Death by LETHEAN',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 30, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2476782928/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darkdescentrecords.bandcamp.com/album/impetus-of-death',
          a_string: 'Impetus of Death by Corpsessed',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 30, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1540066997/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://templeofangels.bandcamp.com/album/foiled',
          a_string: 'Foiled by Temple of Angels',
          rule: {
            "monday": [ 9, 19, 30, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3479808134/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thrillingliving.bandcamp.com/album/unhappy-hardcore-ep',
          a_string: '&quot;Unhappy Hardcore&quot; EP by Scrap Brain',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 31, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4081803934/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hankwoodandthehammerheads.bandcamp.com/album/s-t',
          a_string: 'S/T by Hank Wood and the Hammerheads',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 31, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1186635239/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hankwoodandthehammerheads.bandcamp.com/album/stay-home',
          a_string: 'Stay Home!! by Hank Wood and the Hammerheads',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 31, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1657178450/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://explodinginsoundrecords.bandcamp.com/album/butterflies-drink-turtle-tears',
          a_string: 'Butterflies Drink Turtle Tears by Human People',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 31, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3764432241/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lavidaesunmus.bandcamp.com/album/alta-monta-a-lp',
          a_string: 'Alta Montaña LP by Ultra',
          rule: {
            "monday": [ 10, 20, 31, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3395064729/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://superunison.bandcamp.com/album/stella',
          a_string: 'Stella by Super Unison',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 31, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3369068531/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fullbush.bandcamp.com/album/full-bush',
          a_string: 'FULL BUSH by Full Bush',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 31, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4108671871/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ironlungpv.bandcamp.com/album/stop-pretending-7-lungs-122',
          a_string: 'Stop Pretending 7&quot; (LUNGS-122) by CONVENIENCE',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 1, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1990825489/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theflenser.bandcamp.com/album/the-unraveling',
          a_string: 'The Unraveling by Ails',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3844396507/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://listenable-records.bandcamp.com/album/no-spirit-within',
          a_string: 'No spirit within by FISTER',
          rule: {
            "monday": [ 11, 21, 1, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3243835348/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hauntthenation.bandcamp.com/album/burst-into-flame',
          a_string: 'Burst Into Flame by Haunt',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 1, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1924348247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darkdescentrecords.bandcamp.com/album/lost-paragraphs',
          a_string: 'Lost Paragraphs by Lantern',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 11, 21, 1, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1382790906/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://charnelaltar.bandcamp.com/album/demo',
          a_string: 'Demo by Charnel Altar',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 1, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1140798305/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://csejthe.bandcamp.com/album/lycanthropie-misanthropie',
          a_string: 'Lycanthropie Misanthropie by Csejthe',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=546358104/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://moynoq.bandcamp.com/album/dreaming-in-a-dead-language',
          a_string: 'Dreaming in a Dead Language by Mo&#39;ynoq',
          rule: {
            "monday": [ 12, 22, 2, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1528948524/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mountsaturn.bandcamp.com/album/kiss-the-ring-ep',
          a_string: 'Kiss the Ring EP by Mount Saturn',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 2, 4 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2351123432/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://krallice.bandcamp.com/album/wolf-ep',
          a_string: 'Wolf ep by Krallice',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 2, 4 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2080123767/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ironlungpv.bandcamp.com/album/vain-attempt-7-lungs-134',
          a_string: 'Vain Attempt 7&quot; (LUNGS-134) by SLANT',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 2, 4 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3541847242/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beachimpedimentrecords.bandcamp.com/album/ataque-hardcore-punk',
          a_string: 'Ataque Hardcore Punk by Muro',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 2, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1007485731/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bloodymasterrecords.bandcamp.com/album/subversive-rite-songs-for-the-end-times',
          a_string: 'SUBVERSIVE RITE-Songs For The End Times by Subversive Rite',
          rule: {
            "monday": [ 12, 22, 2, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1587652319/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://andyhumanthereptoids.bandcamp.com/album/psychic-sidekick',
          a_string: 'Psychic Sidekick by Andy Human &amp; The Reptoids',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 2, 4 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2462539562/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://drunkensailorrecords.bandcamp.com/album/company-man-7-ep',
          a_string: 'Company Man 7&quot; EP by Vintage Crop',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 3, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2952825019/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thecoolgreenhouse.bandcamp.com/album/crap-cardboard-pet',
          a_string: 'Crap Cardboard Pet by The Cool Greenhouse',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 3, 5 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2914459594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lavidaesunmus.bandcamp.com/album/terra-alta',
          a_string: 'Terra Alta by Fatamorgana',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1976738743/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://otzi.bandcamp.com/album/part-time-punks-sessions',
          a_string: 'Part Time Punks Sessions by Ötzi',
          rule: {
            "monday": [ 13, 23, 3, 5 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1945101536/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pottymouth.bandcamp.com/album/snafu',
          a_string: 'SNAFU by Potty Mouth',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 3, 5 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1869838510/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://notnormaltapes.bandcamp.com/album/nni-002-jocko-expression-cs',
          a_string: 'NNI#002 Jocko - Expression CS by Not Normal Tapes',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 3, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=922439087/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lavidaesunmus.bandcamp.com/album/san-felipe-es-punk',
          a_string: 'San Felipe es Punk by Polo Pepo',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 3, 5 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=331791637/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ironlungpv.bandcamp.com/album/positive-disintegration-lp-lungs-121',
          a_string: 'Positive Disintegration LP (LUNGS-121) by DIÄT',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1815829856/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chicagoresearch.bandcamp.com/album/cr002-natural-history',
          a_string: 'CR002 &quot;Natural History&quot; by UNDERSTUDY',
          rule: {
            "monday": [ 14, 24, 4, 6 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4055602129/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://staticshockrecords.bandcamp.com/album/the-cosmo-cleaners',
          a_string: 'The Cosmo Cleaners by Uranium Club',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 4, 6 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1856211378/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://smoulder.bandcamp.com/album/times-of-obscene-evil-and-wild-daring',
          a_string: 'Times of Obscene Evil and Wild Daring by Smoulder',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 4, 6 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=365065560/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://profoundlorerecords.bandcamp.com/album/slit-throat-requiem',
          a_string: 'Slit Throat Requiem by GARSDGHASTR',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 4, 6 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=360304690/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bloodharvestrecords.bandcamp.com/album/dwell',
          a_string: 'Dwell by SUFFERING HOUR',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3811702574/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://interarma.bandcamp.com/album/sulphur-english',
          a_string: 'Sulphur English by Inter Arma',
          rule: {
            "monday": [ 14, 24, 4, 6 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=356648659/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://griefcollector1.bandcamp.com/album/from-dissension-to-avowal',
          a_string: 'From Dissension To Avowal by Grief Collector',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 5, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1929791602/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wormwitch.bandcamp.com/album/heaven-that-dwells-within',
          a_string: 'Heaven That Dwells Within by Wormwitch',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 5, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3683490204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://i-voidhangerrecords.bandcamp.com/album/at-the-threshold-of-the-greatest-chasm',
          a_string: 'At the Threshold of the Greatest Chasm by COSMIC PUTREFACTION',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 5, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1634560375/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hypnoticdirgerecords.bandcamp.com/album/damp-chill-of-life',
          a_string: 'Damp Chill of Life by NONE',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2304815220/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://primitiveteeth.bandcamp.com/album/s-t-ep',
          a_string: 'S/T EP by Primitive Teeth',
          rule: {
            "monday": [ 15, 25, 5, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1601842304/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://urochromes.bandcamp.com/album/trope-house',
          a_string: 'Trope House by Urochromes',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 5, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1906447669/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thrillingliving.bandcamp.com/album/a-journey-into-madness',
          a_string: 'A Journey Into Madness by Scrap Brain',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 5, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=401439028/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chicagoresearch.bandcamp.com/album/cr006-rotten-codex',
          a_string: 'CR006 &quot;Rotten Codex&quot; by BRUISED',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 6, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3438264472/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ironlungpv.bandcamp.com/album/d7y-mlp-lungs-138',
          a_string: 'D7Y MLP (LUNGS-138) by D7Y',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 6, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1717992773/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lavidaesunmus.bandcamp.com/album/bezoar-lp',
          a_string: 'Bezoar LP by Khiis',
          rule: {
            "monday": [ 16, 26, 6, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 19, 29, 8, 11 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2860495568/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://drunkensailorrecords.bandcamp.com/album/the-last-offices-lp',
          a_string: 'The Last Offices LP by No Negative',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 6, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=569909356/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lospillos.bandcamp.com/album/los-pillos-en-vivo-en-obras-1986',
          a_string: 'Los Pillos en vivo en Obras 1986 by Los Pillos',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 6, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=185010313/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://frenchvanilla.bandcamp.com/album/how-am-i-not-myself',
          a_string: 'How Am I Not Myself? by French Vanilla',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 6, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2731939025/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://warmbodies100.bandcamp.com/album/ufo-extremos',
          a_string: 'UFO EXTREMO&#39;s by Warm Bodies',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 6, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1140482942/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mushband.bandcamp.com/album/induction-party',
          a_string: 'Induction Party by Mush',
          rule: {
            "monday": [ 17, 27, 7, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1298834784/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://reducidos.bandcamp.com/album/represi-n-opresi-n',
          a_string: 'Represión // Opresión by reducidos',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 7, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4226246338/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://drunkensailorrecords.bandcamp.com/album/queremos-ver-el-mundo-arder-lp',
          a_string: 'Queremos Ver El Mundo Arder LP by Heterofobia',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 7, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 20, 30, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4151757219/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://staticshockrecords.bandcamp.com/album/negative-gears',
          a_string: 'Negative Gears by Negative Gears',
          rule: {
            "monday": [ 20, 30, 9, 12 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 7, 9 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=472898828/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://g-a-u-c-h-e.bandcamp.com/album/a-peoples-history-of-gauche',
          a_string: 'A People&#39;s History of Gauche by Gauche',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 8, 11 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 7, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2152327692/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://godunknownrecords.bandcamp.com/album/no-you-lp',
          a_string: '&#39;No You&#39; LP by RAINBOW GRAVE',
          rule: {
            "monday": [ 17, 27, 7, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2257596786/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://redbait.bandcamp.com/album/cages',
          a_string: 'Cages by Redbait',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 7, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2539338538/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://antifaderecords.bandcamp.com/album/the-beginning-end-of-cereal-killer',
          a_string: 'The Beginning &amp; End Of Cereal Killer by Cereal Killer',
          rule: {
            "monday": [ 20, 30, 9, 12 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 8, 10 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 21, 31, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2639213931/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ironlungpv.bandcamp.com/album/el-reino-de-lo-falso-mlp-lungs-133',
          a_string: 'El Reino De Lo Falso MLP (LUNGS-133) by MALCRÍA',
          rule: {
            "monday": [ 21, 31, 10, 13 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 8, 11 ],
            "thursday": [ 18, 28, 8, 10 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=323729828/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mannequinpussy.bandcamp.com/album/patience',
          a_string: 'Patience by MANNEQUIN PUSSY',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 21, 31, 10, 13 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 8, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_musics_id_seq', (SELECT MAX(id) FROM october_musics));");
    });
};
