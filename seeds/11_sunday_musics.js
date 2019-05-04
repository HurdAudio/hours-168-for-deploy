'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sunday_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('sunday_musics').insert([
        {
          id: 1,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2433643483/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/singles',
          a_string: 'Singles by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2295729343/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/discipline-27-ii-remastered',
          a_string: 'Discipline 27-II (Remastered) by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=924944746/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/in-some-far-place-roma-1977',
          a_string: 'In Some Far Place: Roma 1977 by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3437772679/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/-',
          a_string: 'НЕЖИТЬ: живьём в России by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2176417243/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/kannon-japanese-bonus-tracks',
          a_string: 'Kannon (Japanese bonus tracks) by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1334381257/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/kannon',
          a_string: 'Kannon by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1275911817/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/antwerp',
          a_string: 'ANTWERP by S. ARAW TRIO XIII',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=196676969/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/live-in-oslo',
          a_string: 'LIVE IN OSLO by SUN ARAW BAND XII',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=967234204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/live-in-oto',
          a_string: 'LIVE IN OTO by SUN ARAW BAND XII',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=665089067/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-magic-city-stereo-remastered-cd-lp-digital',
          a_string: 'The Magic City [Stereo, Remastered—CD, LP, digital] by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=251281127/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/my-brother-the-wind-vol-1-expanded-remastered-cd-lp-digital',
          a_string: 'My Brother the Wind Vol. 1 [Expanded, Remastered—CD, LP, digital] by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3006057000/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/nuclear-war-ep',
          a_string: 'Nuclear War (EP) by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4170689308/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/terrestrials',
          a_string: 'Terrestrials by SUNN O))) &amp; ULVER',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3545221048/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/la-reh-012',
          a_string: 'LA REH 012 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3481636908/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/rehearsal-demo-nov-11-2011',
          a_string: 'REHEARSAL DEMO NOV 11 2011 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=77309917/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/live-roma',
          a_string: 'Live ROMA by SUN ARAW BAND X',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2943071476/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/two-from-the-desert-yucca-valley-2012',
          a_string: 'TWO FROM THE DESERT: YUCCA VALLEY 2012 by SUN ARAW BAND IX',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1816768686/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/formatting-formants-adelaide-2012',
          a_string: 'FORMATTING FORMANTS: ADELAIDE 2012 by SUN ARAW BAND V',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1771393784/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/thunder-of-the-gods',
          a_string: 'Thunder of the Gods by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2785484414/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/angels-and-demons-at-play',
          a_string: 'Angels and Demons at Play by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2650606444/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/jazz-in-silhouette',
          a_string: 'Jazz in Silhouette by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2960431742/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/the-iron-soul-of-nothing',
          a_string: 'The Iron Soul Of Nothing by SUNN O))) meets NURSE WITH WOUND',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3791288013/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/agharti-live-09-10',
          a_string: 'Agharti Live 09-10 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=877475247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/che',
          a_string: 'Che by SUNN O))) &amp; PAN SONIC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3155153960/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/formatting-formants-brisbane-2012',
          a_string: 'FORMATTING FORMANTS: BRISBANE 2012 by SUN ARAW BAND V',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4126284411/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/belomancie',
          a_string: 'Belomancie by SUN ARAW',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3622239538/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/the-inner-treaty',
          a_string: 'The Inner Treaty by SUN ARAW',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3993577660/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/lanquidity',
          a_string: 'Lanquidity by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2314548278/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/cosmos-remastered',
          a_string: 'Cosmos (Remastered) by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=832284821/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/transitions-3-chicago-to-ny',
          a_string: 'Transitions 3: Chicago to NY by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=673845886/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/monoliths-dimensions',
          a_string: 'Monoliths &amp; Dimensions by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=725640763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/grimmrobes-live-101008',
          a_string: '(初心) GrimmRobes Live 101008 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2490312327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/d-mkirke',
          a_string: 'Dømkirke by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2350225072/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/ancient-romans',
          a_string: 'Ancient Romans by SUN ARAW',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1350047369/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunarawmonofonus.bandcamp.com/album/houston-abstros',
          a_string: 'Houston Abstros by Sun Araw',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=458873983/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.mentalgroove.ch/album/geneva-hits',
          a_string: 'Geneva Hits by Sun Araw',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3591774769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/paris-1983',
          a_string: 'Paris 1983 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1416636650/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/supersonic-jazz',
          a_string: 'Supersonic Jazz by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2475374163/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/transitions-1-spaceship-bop-1955-57',
          a_string: 'Transitions 1: Spaceship Bop (1955-57) by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1222464894/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/oracle',
          a_string: 'Oracle by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3746528457/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/altar-3',
          a_string: 'Altar by SUNN O))) &amp; BORIS',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2436911937/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/la-mort-noir-dans-esch-alzette',
          a_string: 'La Mort Noir Dans Esch / Alzette by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=404307415/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leavingrecords.bandcamp.com/album/livephreaxxx',
          a_string: 'LIVEPHREAXXX!!!! by Sun Araw &amp; Matthewdavid',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1000095990/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rvng.bandcamp.com/album/frkwys-vol-9-icon-give-thank',
          a_string: 'FRKWYS Vol. 9: ICON GIVE THANK by Sun Araw, M. Geddes Gengras &amp; The Congos',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2782890406/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hanginggardens.bandcamp.com/album/sun-araw-adam-willetts-hsp-13th-oct-10',
          a_string: 'Sun Araw / Adam Willetts (HSP 13th Oct &#39;10) by Hanging Gardens Live Recording',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1238054464/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sun-ra-at-inter-media-arts-1991',
          a_string: 'Sun Ra at Inter-Media Arts, 1991 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3383058051/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/we-travel-the-spaceways',
          a_string: 'We Travel the Spaceways by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=998280022/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-antique-blacks',
          a_string: 'The Antique Blacks by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3338347705/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/angel-coma',
          a_string: 'Angel Coma by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3809344285/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/solstitium-fulminate',
          a_string: 'Solstitium Fulminate by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2641531432/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/black-one',
          a_string: 'Black One by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2096114417/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/cosmic-tones-for-mental-therapy',
          a_string: 'Cosmic Tones for Mental Therapy by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4129311744/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/strange-strings',
          a_string: 'Strange Strings by Sun Ra &amp; His Astro Infinity Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2137446957/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-nubians-of-plutonia',
          a_string: 'The Nubians of Plutonia by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2457032671/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/candlewolff-ov-thee-golden-chalice',
          a_string: 'Candlewolff ov Thee Golden Chalice by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=964036161/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/livewhite',
          a_string: 'LiveWhite by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2221113608/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/cromonolithic-remixes-for-an-iron-age',
          a_string: 'CroMonolithic remixes for an Iron Age by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3701421356/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sun-ra-visits-planet-earth',
          a_string: 'Sun Ra Visits Planet Earth by Sun Ra &amp; His Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1742618903/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-soul-vibrations-of-man',
          a_string: 'The Soul Vibrations of Man by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2135743045/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-sun-myth-african-chant',
          a_string: 'The Sun Myth (African Chant) by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3643903167/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/white2-2',
          a_string: 'White2 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4040815164/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/lxndxn-subcamden-underworld-halloween-2003',
          a_string: 'LXNDXN Subcamden Underworld Hallo&#39;Ween 2003 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3059679270/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/veils-it-white',
          a_string: 'Veils It White by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4106117897/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/atlantis',
          a_string: 'Atlantis by Sun Ra &amp; His Astro Infinity Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1054678028/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunra-mh.bandcamp.com/album/saturn-mystery-mr-ra',
          a_string: 'Saturn / Mystery, Mr. Ra by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3107037590/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/when-angels-speak-of-love-1',
          a_string: 'When Angels Speak of Love by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=416404446/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/white1',
          a_string: 'White1 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1942556646/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/3-flight-of-the-behemoth',
          a_string: '3: Flight Of The Behemoth by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1909764967/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/void',
          a_string: 'ØØVOID by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1646063315/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/fate-in-a-pleasant-mood',
          a_string: 'Fate in a Pleasant Mood by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1676995911/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/space-is-the-place',
          a_string: 'Space is the Place by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1988996577/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/god-is-more-than-love-can-ever-be',
          a_string: 'God Is More Than Love Can Ever Be by Sun Ra Trio',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2590283681/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/the-grimmrobe-demos-extended',
          a_string: 'The Grimmrobe Demos // extended by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1007055328/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/the-grimmrobe-demos',
          a_string: 'The Grimmrobe Demos by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3684598771/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/v-a-jukebox-buddha',
          a_string: 'v/a Jukebox Buddha by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1377191613/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/secrets-of-the-sun',
          a_string: 'Secrets of the Sun by Sun Ra &amp; His Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3114909576/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/aurora-borealis',
          a_string: 'Aurora Borealis by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1696546492/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/interstellar-low-ways',
          a_string: 'Interstellar Low Ways by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=792995710/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/v-a-does-your-cat-know-my-dog',
          a_string: 'v/a Does Your Cat Know My Dog? by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2926634934/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/astro-black',
          a_string: 'Astro Black by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1871811375/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/oblique-parallax',
          a_string: 'Oblique Parallax by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1615419447/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/dance-of-innocent-passion',
          a_string: 'Dance of Innocent Passion by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3375427058/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/ra-to-the-rescue',
          a_string: 'Ra to the Rescue by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2180361353/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/some-blues-but-not-the-kind-thats-blue',
          a_string: 'Some Blues But Not the Kind That&#39;s Blue by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2193298540/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-pit-inn-8-8-88',
          a_string: 'The Pit Inn 8-8-88 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3186659650/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/omniverse',
          a_string: 'Omniverse by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=853939478/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/celestial-love',
          a_string: 'Celestial Love by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1520310624/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-night-of-the-purple-moon',
          a_string: 'The Night of the Purple Moon by Sun Ra &amp; His Intergalactic Infinity Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1645364615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/universe-in-blue',
          a_string: 'Universe in Blue by Sun Ra &amp; His Blue Universe Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2571634935/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/a-fireside-chat-with-lucifer',
          a_string: 'A Fireside Chat with Lucifer by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1998133748/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sunrise-in-different-dimensions',
          a_string: 'Sunrise in Different Dimensions by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1334536868/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/art-forms-of-dimensions-tomorrow',
          a_string: 'Art Forms of Dimensions Tomorrow by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3124006692/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/continuation-vol-1',
          a_string: 'Continuation, Vol. 1 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=170117722/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/continuation-vol-2',
          a_string: 'Continuation, Vol. 2 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3025274311/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/jazz-by-sun-ra',
          a_string: 'Jazz by Sun Ra by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4083741467/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/solo-piano-venice-1977',
          a_string: 'Solo Piano Venice 1977 by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2383747411/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/holiday-for-soul-dance',
          a_string: 'Holiday for Soul Dance by Sun Ra &amp; His Astro Infinity Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2237449915/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/monorails-and-satellites-vol-1-2',
          a_string: 'Monorails and Satellites, Vol. 1 by Sun Ra (solo piano)',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1830657043/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/monorails-and-satellites-vol-2',
          a_string: 'Monorails and Satellites, Vol. 2 by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=339750118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/beyond-the-purple-star-zone',
          a_string: 'Beyond the Purple Star Zone by Sun Ra &amp; His Omniverse Jet-Set Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=385566395/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/bad-and-beautiful',
          a_string: 'Bad and Beautiful by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2393368939/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sound-sun-pleasure',
          a_string: 'Sound Sun Pleasure by Sun Ra &amp; His Astro Infinity Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=403882420/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/my-brother-the-wind-vol-2',
          a_string: 'My Brother the Wind, Vol. 2 by Sun Ra &amp; His Astro Infinity Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1465178228/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/when-sun-comes-out',
          a_string: 'When Sun Comes Out by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=2676839104/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/track/i-roam-the-cosmos-premiere-release-1',
          a_string: 'I Roam the Cosmos (Premiere Release) by Sun Ra &amp; His Arkestra ft. June Tyson',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=990290852/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/other-planes-of-there',
          a_string: 'Other Planes of There by Sun Ra &amp; His Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=199084412/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sub-underground-1',
          a_string: 'Sub Underground #1 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1065341575/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/voice-of-the-eternal-tomorrow',
          a_string: 'Voice of the Eternal Tomorrow by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2041491134/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/somewhere-else',
          a_string: 'Somewhere Else by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2867691408/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/purple-night',
          a_string: 'Purple Night by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=960535632/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/blue-delight',
          a_string: 'Blue Delight by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=406113001/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/st-lawrence-university-1966',
          a_string: 'St. Lawrence University, 1966 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1032060848/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sound-of-joy',
          a_string: 'Sound of Joy by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3304462233/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/new-steps',
          a_string: 'New Steps by Sun Ra Quartet ft. John Gilmore',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4211963194/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/kosmos-in-blue-a-john-gilmore-anthology-vol-1',
          a_string: 'Kosmos In Blue: A John Gilmore Anthology, Vol. 1 by The Sun Ra Arkestra ft. John Gilmore',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1868051994/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/blues-at-midnight-a-john-gilmore-anthology-vol-2',
          a_string: 'Blues at Midnight: A John Gilmore Anthology, Vol. 2 by The Sun Ra Arkestra ft. John Gilmore',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2226266054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sun-ra-exotica',
          a_string: 'Sun Ra Exotica by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3595797542/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-invisible-shield',
          a_string: 'The Invisible Shield by Sun Ra &amp; His Intergalactic Research Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2948277091/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/disco-3000-complete-milan-concert-1978',
          a_string: 'Disco 3000 Complete Milan Concert 1978 by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=172434852/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/horizon-live-in-cairo-egypt',
          a_string: 'Horizon - Live In Cairo Egypt by Sun Ra And His Intergalactic Myth Science Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4011718519/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/nidhamu-dark-myth-equation-visitation-live-in-cairo-egypt',
          a_string: 'Nidhamu &amp; Dark Myth Equation Visitation - Live in Cairo Egypt by Sun Ra And His Intergalactic Myth Science Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=564815314/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/media-dreams-complete-concert-milan-1978',
          a_string: 'Media Dreams Complete Concert  Milan 1978 by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1043906859/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/on-jupiter',
          a_string: 'On Jupiter by Sun Ra And His Intergalactic Myth Science Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=253336704/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/sleeping-beauty',
          a_string: 'Sleeping Beauty. by Sun Ra And His Intergalactic Myth Science Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3149899187/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/space-aura',
          a_string: 'Space Aura by Sun Ra and His Band from Outer Space',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3477943547/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/the-paris-tapes-live-at-le-th-tre-du-ch-telet-1971',
          a_string: 'The Paris Tapes - Live At Le Théâtre Du Châtelet 1971 by Sun Ra And His Mythic Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=446461934/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/wake-up-angels',
          a_string: 'Wake Up Angels by Sun Ra And His Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2595493057/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/gilles-peterson-presents-sun-ra-and-his-arkestra-to-those-of-earth-and-other-worlds-2',
          a_string: 'Gilles Peterson Presents Sun Ra And His Arkestra: To Those Of Earth... And Other Worlds by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2583795695/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/planets-of-life-or-death-amiens-73',
          a_string: 'Planets Of Life Or Death: Amiens &#39;73 by Sun Ra &amp; His Intergalactic Research Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2663593403/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/marshall-allen-presents-sun-ra-and-his-arkestra-in-the-orbit-of-ra',
          a_string: 'Marshall Allen presents Sun Ra And His Arkestra: In The Orbit Of Ra by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3630776180/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/hot-tub-in-tallinn',
          a_string: 'HOT TUB IN TALLINN! by S. ARAW TRIO XV',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2046709403/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/egypt-strut-dawn-ep',
          a_string: 'Egypt Strut / Dawn (EP) by Sun Ra &amp; His Arkestra with Salah Ragab',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=106592085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/taking-a-chance-on-chances',
          a_string: 'Taking a Chance on Chances by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1233061145/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/strange-celestial-road',
          a_string: 'Strange Celestial Road by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=573203958/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/somewhere-over-the-rainbow',
          a_string: 'Somewhere Over the Rainbow by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2396109755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sun-ra-plays-gershwin',
          a_string: 'Sun Ra Plays Gershwin by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3215143997/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/of-abstract-dreams',
          a_string: 'Of Abstract Dreams by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2674956895/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/of-mythic-worlds',
          a_string: 'Of Mythic Worlds by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3918388682/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://p-mm.bandcamp.com/album/pmm-le-sun-ra-and-his-cosmo-discipline-arkestra-night-in-east-berlin-1986',
          a_string: 'PMM# Le Sun Ra And His Cosmo Discipline Arkestra - Night In East Berlin 1986 by Le Sun Ra And His Cosmo Discipline Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1465038577/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/discipline-99-out-beyond-the-kingdom-of',
          a_string: 'Discipline 99 (Out Beyond the Kingdom Of) by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2122904726/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-cymbals-symbols-sessions-new-york-1973',
          a_string: 'The Cymbals/Symbols Sessions (New York, 1973) by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2652567313/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/pleiades-a-jazz-symphonique',
          a_string: 'Pleiades: A Jazz Symphonique by Sun Ra &amp; His Arkestra with Chamber Orchestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4264938093/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/space-age-rhythm-bop-the-1950s',
          a_string: 'Space Age Rhythm &amp; Bop (The 1950s) by Sun Ra, Nu Sounds, Yochanan, Cosmic Rays',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2746280952/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunra-mh.bandcamp.com/album/the-complete-concert',
          a_string: 'The Complete Concert by John Cage Meets Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2686409150/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunra-mh.bandcamp.com/album/the-space-age-is-here-to-stay',
          a_string: 'The Space Age Is Here To Stay by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=577235174/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/downtown-la-rehearsal-rifftape-march-1998',
          a_string: 'Downtown LA Rehearsal/Rifftape March 1998 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1406116403/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20170720-concorde-2-brighton-uk-2',
          a_string: 'SUNN O))) - 2017.07.20, Concorde 2, Brighton, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3091625633/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20170720-concorde-2-brighton-uk',
          a_string: 'SUNN O))) - 2017.07.20, Concorde 2, Brighton, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3192083774/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20170719-leeds-university-stylus-leeds-uk',
          a_string: 'SUNN O))) - 2017.07.19, Leeds University Stylus, Leeds, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1032810669/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20170715-the-ritz-manchester-uk',
          a_string: 'SUNN O))) - 2017.07.15, The Ritz, Manchester, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3565609800/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20170713-swx-bristol-uk-mono',
          a_string: 'SUNN O))) - 2017.07.13, SWX, Bristol, UK (MONO) by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=511944017/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20170321-barbican-centre-london-uk',
          a_string: 'SUNN O))) - 2017.03.21, Barbican Centre, London, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1724949886/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20170321-barbican-centre-london-uk-mono',
          a_string: 'SUNN O))) - 2017.03.21, Barbican Centre, London, UK (MONO) by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=395421996/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-2017-03-21-barbican-centre-london-uk',
          a_string: 'SUNN O​)​)​) - 2017​.​03​.​21, Barbican Centre, London, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3900987771/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20170318-union-transfer-philadelphia-pa-usa',
          a_string: 'SUNN O))) - 2017.03.18, Union Transfer, Philadelphia, PA, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4088603733/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20170317-knockdown-center-maspeth-ny-usa',
          a_string: 'SUNN O))) - 2017.03.17, Knockdown Center, Maspeth, NY, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1533893763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20170313-rex-theater-pittsburgh-pa-usa',
          a_string: 'SUNN O))) - 2017.03.13, Rex Theater, Pittsburgh, PA, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3999268166/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20160910-rocking-chair-vevey-ch',
          a_string: 'SUNN O))) - 2016.09.10, Rocking Chair, Vevey, CH by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2237730321/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20160903-ruhrtrienalle-turbinenhalle-bochum-de',
          a_string: 'SUNN O))) - 2016.09.03, RuhrTrienalle Turbinenhalle, Bochum, DE by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3078320297/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-2016-09-02-schlachthof-wiesbaden-de',
          a_string: 'SUNN O​)​)​) - 2016​.​09.​02, Schlachthof, Wiesbaden, DE by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2562307434/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20160827-tavastia-helsinki-fin',
          a_string: 'SUNN O))) - 2016.08.27, Tavastia, Helsinki, FIN by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3480854408/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20160615-theaterzaal-vooruit-gent-be',
          a_string: 'SUNN O))) - 2016.06.15, Theaterzaal Vooruit, Gent, BE by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=309387220/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20160614-paradiso-amsterdam-nl',
          a_string: 'SUNN O))) - 2016.06.14, Paradiso, Amsterdam, NL by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=388067783/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20160610-hearn-generating-station-toronto-can',
          a_string: 'SUNN O))) - 2016.06.10, Hearn Generating Station, Toronto, CAN by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3257251743/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20160608-grog-shop-cleveland-oh-usa',
          a_string: 'SUNN O))) - 2016.06.08, Grog Shop, Cleveland, OH, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1447881615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20160405-georgia-theatre-athens-ga-usa',
          a_string: 'SUNN O))) - 2016.04.05, Georgia Theatre, Athens, GA, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2502995136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-2016-04-02-tennessee-state-theatre-knoxville-tn-usa',
          a_string: 'SUNN O​)​)​) - 2016​.​04​.​02, Tennessee State Theatre, Knoxville, TN USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2857208987/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-2016-04-02-tennessee-state-theatre-knoxville-tn-usa-2',
          a_string: 'SUNN O​​)​​​)​​) - 2016​​.​​04​​.​​02, Tennessee State Theatre, Knoxville, TN USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3261133669/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-2016-03-15-manning-bar-sydney-aus',
          a_string: 'SUNN O​)​)​) - 2016.​03.​15, Manning Bar, Sydney, AUS by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3727085567/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20150818-royal-festival-hall-london-uk-3',
          a_string: 'SUNN O))) - 2015.08.18, Royal Festival Hall, London, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1144018608/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20150818-royal-festival-hall-london-uk-2',
          a_string: 'SUNN O))) - 2015.08.18, Royal Festival Hall, London, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2834647880/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20150818-royal-festival-hall-london-uk',
          a_string: 'SUNN O))) - 2015.08.18, Royal Festival Hall, London, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3156155025/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20150818-royal-festival-hall-london-uk-4',
          a_string: 'SUNN O))) - 2015.08.18, Royal Festival Hall, London, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=934615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20150815-dr-dk-koncerthuset-2-copenhagen-dk',
          a_string: 'SUNN O))) - 2015.08.15, DR\\DK Koncerthuset \\2, Copenhagen, DK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2782522257/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20150809-heimathafen-neuk-lln-berlin-de',
          a_string: 'SUNN O))) - 2015.08.09, Heimathafen Neukölln, Berlin, DE by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=802204366/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20150717-dour-be',
          a_string: 'SUNN O))) - 2015.07.17, Dour, BE by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=866795543/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20150530-motion-bristol-uk',
          a_string: 'SUNN O))) - 2015.05.30, Motion, Bristol, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1405928576/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20150528-parc-del-forum-barcelona-sp',
          a_string: 'SUNN O))) - 2015.05.28, Parc del Forum, Barcelona, SP by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3265094960/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-2015-05-28-parc-del-forum-barcelona-sp',
          a_string: 'SUNN O​)​)​) - 2015​.​05​.​28, Parc del Forum, Barcelona, SP by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2170046957/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20141019-rialto-theater-tuscon-az-usa',
          a_string: 'SUNN O))) - 2014.10.19, Rialto Theater, Tuscon, AZ, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=325874176/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20131212-de-kreun-kortrijk-be',
          a_string: 'SUNN O))) - 2013.12.12, De Kreun, Kortrijk, BE by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2881537100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20130203-astra-kulturhaus-berlin-de',
          a_string: 'SUNN O))) - 2013.02.03, Astra Kulturhaus, Berlin, DE by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2283684456/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20121220-the-fonda-theater-los-angeles-ca-usa',
          a_string: 'SUNN O))) - 2012.12.20, The Fonda Theater, Los Angeles, CA, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2794699661/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20121214-roseland-theater-portland-or-usa',
          a_string: 'SUNN O))) - 2012.12.14, Roseland Theater, Portland, OR, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4128884508/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20120908-memorial-hall-raleigh-nc-usa',
          a_string: 'SUNN O))) - 2012.09.08, Memorial Hall, Raleigh, NC, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2047945520/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20120902-warsaw-brooklyn-ny-usa',
          a_string: 'SUNN O))) - 2012.09.02, Warsaw, Brooklyn, NY, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3919091217/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20120811-the-echoplex-los-angeles-ca-usa',
          a_string: 'SUNN O))) - 2012.08.11, The Echoplex, Los Angeles, CA, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3067546368/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20120811-the-echoplex-los-angeles-ca-usa-2',
          a_string: 'SUNN O))) - 2012.08.11, The Echoplex, Los Angeles, CA, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1068513154/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20120616-ga-t-lyrique-paris-fr',
          a_string: 'SUNN O))) - 2012.06.16, Gaîté Lyrique, Paris, FR by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3620241560/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20120614-melkweg-amsterdam-nl',
          a_string: 'SUNN O))) - 2012.06.14, Melkweg, Amsterdam, NL by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=655438334/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20120612-koko-theatre-london-uk',
          a_string: 'SUNN O))) - 2012.06.12, Koko Theatre, London, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2714834365/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20110411-roadburn-013-tilburg-nl',
          a_string: 'SUNN O))) - 2011.04.11 Roadburn, 013, Tilburg, NL by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=33511394/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20100126-paradiso-grote-zaal-amsterdam-nl',
          a_string: 'SUNN O))) - 2010.01.26, Paradiso, Grote Zaal, Amsterdam, NL by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2338479426/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20091214-koko-theatre-london-uk',
          a_string: 'SUNN O))) - 2009.12.14, Koko Theatre, London UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3243436744/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20091212-grimmrobes-presentation-butlins-minehead-uk',
          a_string: 'SUNN O))) - 2009.12.12, &quot;GrimmRobes&quot; Presentation, Butlins, Minehead, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=487263382/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20091210-the-asylum-birmingham-uk',
          a_string: 'SUNN O))) - 2009.12.10, The Asylum, Birmingham, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1222829328/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20091023-berghain-panoramabar-berlin-de',
          a_string: 'SUNN O))) - 2009.10.23, Berghain/Panoramabar, Berlin, DE by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1441613793/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20091022-club-manufaktur-schorndorf-de',
          a_string: 'SUNN O))) - 2009.10.22, Club Manufaktur, Schorndorf, DE by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1292982008/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20091017-casino-de-montbenon-lausanne-ch',
          a_string: 'SUNN O))) - 2009.10.17, Casino de Montbenon, Lausanne, CH by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1789088218/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20090928-seney-stovall-chapel-athens-ga-usa',
          a_string: 'SUNN O))) - 2009.09.28, Seney-Stovall Chapel, Athens, GA, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2118201002/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20090927-seney-stovall-chapel-athens-ga-usa',
          a_string: 'SUNN O))) - 2009.09.27, Seney-Stovall Chapel, Athens, GA, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3733703709/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20090926-legends-183-atlanta-ga-usa',
          a_string: 'SUNN O))) - 2009.09.26, Legends 183, Atlanta, GA, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=678010357/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20090924-the-bijou-theatre-knoxville-tn-usa',
          a_string: 'SUNN O))) - 2009.09.24, The Bijou Theatre, Knoxville, TN, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2824234969/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20090917-mr-smalls-pittsburgh-pa-usa',
          a_string: 'SUNN O))) - 2009.09.17, Mr Smalls, Pittsburgh, PA, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=304825732/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20090813-bluebird-theater-denver-co-usa',
          a_string: 'SUNN O))) - 2009.08.13, Bluebird Theater, Denver, CO, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1211570516/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20090808-the-independent-san-francisco-ca-usa',
          a_string: 'SUNN O))) - 2009.08.08, The Independent, San Francisco, CA, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1103346586/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20090724-grimmrobes-presentation-custard-factory-birmingham-uk',
          a_string: 'SUNN O))) - 2009.07.24, &quot;GrimmRobes&quot; Presentation, Custard Factory, Birmingham, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2094655015/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-2009-07-24-grimmrobes-presentation-custard-factory-birmingham-uk',
          a_string: 'SUNN O​)​)​) - 2009​.​07​.​24, &quot;GrimmRobes&quot; Presentation, Custard Factory, Birmingham, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=281689371/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20090528-grimmrobes-presentation-parc-del-forum-barcelona-es',
          a_string: 'SUNN O))) - 2009.05.28, &quot;GrimmRobes&quot; Presentation, Parc del Forum, Barcelona, ES by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=240781803/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20090419-liquidroom-tokyo-jp',
          a_string: 'SUNN O))) - 2009.04.19, Liquidroom, Tokyo, JP by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2784615870/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20090222-grimmrobes-presentation-corsica-studios-london-uk',
          a_string: 'SUNN O))) - 2009.02.22, &quot;GrimmRobes&quot; Presentation, Corsica Studios, London, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=178600395/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20071215-paard-van-troje-den-haag-nl',
          a_string: 'SUNN O))) - 2007.12.15, Paard van Troje, Den Haag, NL by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3584896948/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20071212-caves-le-chapelais-paris-fr',
          a_string: 'SUNN O))) - 2007.12.12, Caves le Chapelais, Paris, FR by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=534479778/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20071210-altar-presentation-with-boris-kentish-town-forum-london-uk',
          a_string: 'SUNN O))) - 2007.12.10, &quot;Altar&quot; Presentation with BORIS, Kentish Town Forum, London, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=522751223/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20071210-kentish-town-forum-london-uk',
          a_string: 'SUNN O))) - 2007.12.10, Kentish Town Forum, London, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3966491895/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20070714-custard-factory-birmingham-uk',
          a_string: 'SUNN O))) - 2007.07.14, Custard Factory, Birmingham, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=85660125/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20070706-mount-tabor-portland-or-usa',
          a_string: 'SUNN O))) - 2007.07.06, Mount Tabor, Portland, OR, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=891236721/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20070422-tilburg-nl',
          a_string: 'SUNN O))) - 2007.04.22, Tilburg, NL by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3077905939/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-2007-04-20-klangraum-krems-minority-church-donaufestival-krems-au',
          a_string: 'SUNN O​)​)​) - 2007.​04​.​20, Klangraum Krems Minority Church, Donaufestival, Krems, AU by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2301956059/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20070318-bergen-cathedral-bergen-no',
          a_string: 'SUNN O))) - 2007.03.18, Bergen Cathedral, Bergen, NO by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4116726771/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20061017-crawdaddy-dublin-r-o-irl',
          a_string: 'SUNN O))) - 2006.10.17, Crawdaddy, Dublin, R/o IRL by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=803354136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20061016-black-box-belfast-n-irl',
          a_string: 'SUNN O))) - 2006.10.16, Black Box, Belfast, N. IRL by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1712798695/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20061013-hippodrome-london-uk',
          a_string: 'SUNN O))) - 2006.10.13, Hippodrome, London, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3277785945/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20060528-nyabinghi-youngstown-oh-usa',
          a_string: 'SUNN O))) - 2006.05.28, Nyabinghi, Youngstown, OH, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3309668740/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20060527-wexner-center-columbus-oh-usa',
          a_string: 'SUNN O))) - 2006.05.27, Wexner Center, Columbus, OH, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2457412853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20060526-logan-square-auditorium-chicago-il-usa',
          a_string: 'SUNN O))) - 2006.05.26, Logan Square Auditorium, Chicago, IL, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=774624692/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20060314-casa-de-musica-porto-pt',
          a_string: 'SUNN O))) - 2006.03.14, Casa de Musica, Porto, PT by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1495995506/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-2006-03-14-casa-de-musica-porto-pt',
          a_string: 'SUNN O​)​)​) - 2006​.​03​.​14, Casa de Musica, Porto, PT by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2149707645/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20060303-paradiso-amsterdam-nl-2',
          a_string: 'SUNN O))) - 2006.03.03, Paradiso, Amsterdam, NL by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3779282655/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20060303-paradiso-amsterdam-nl',
          a_string: 'SUNN O))) - 2006.03.03, Paradiso, Amsterdam, NL by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2684131966/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20060217-point-eph-m-re-paris-fr-2',
          a_string: 'SUNN O))) - 2006.02.17, Point Ephémère, Paris, FR by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4071037893/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20060215-custard-factory-birmingham-uk',
          a_string: 'SUNN O))) - 2006.02.15, Custard Factory, Birmingham, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=894175093/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20060215-custard-factory-birmingham-uk-2',
          a_string: 'SUNN O))) - 2006.02.15, Custard Factory, Birmingham, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1720362955/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20060211-cockpit-leeds-uk',
          a_string: 'SUNN O))) - 2006.02.11, Cockpit, Leeds, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3049406294/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20060210-islington-academy-london-uk',
          a_string: 'SUNN O))) - 2006.02.10, Islington Academy, London, UK by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=322860981/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20051216-o-first-unitarian-church-philadelphia-pa-usa',
          a_string: 'SUNN O))) - 2005.12.16, O))) First Unitarian Church, Philadelphia, PA, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3815341047/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20051029-berbatis-pan-portland-or-usa',
          a_string: 'SUNN O))) - 2005.10.29, Berbati&#39;s Pan, Portland, OR, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1053543384/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20051027-neumos-seattle-wa-usa',
          a_string: 'SUNN O))) - 2005.10.27, Neumos, Seattle, WA, USA by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2790626667/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20050409-tilburg-nl',
          a_string: 'SUNN O))) - 2005.04.09, Tilburg, NL by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3122482924/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn-live.bandcamp.com/album/sunn-o-20050407-nouveau-casino-paris-fr',
          a_string: 'SUNN O))) - 2005.04.07, Nouveau Casino, Paris, FR by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('sunday_musics_id_seq', (SELECT MAX(id) FROM sunday_musics));");
    });
};
