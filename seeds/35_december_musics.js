'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('december_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('december_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3057480238/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hhaabb.bandcamp.com/album/hab',
          a_string: 'HAB by HAB',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 4, 10, 16, 22 ],
            "thursday": [ 3, 9, 15, 21 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3742352136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hermetopascoal.bandcamp.com/album/viajando-com-o-som-the-lost-76-vice-versa-studio-session',
          a_string: 'Viajando Com O Som (The Lost &#39;76 Vice-Versa Studio Session) by Hermeto Pascoal',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 4, 10, 16, 22 ],
            "saturday": [ 3, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3080218267/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://selomundomelhor.bandcamp.com/album/projeto-cru',
          a_string: 'Projeto Cru by Projeto Cru',
          rule: {
            "monday": [ 3, 9, 15, 21 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 4, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1775467947/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/conta',
          a_string: '&quot;conta&quot; by M.TAKARA',
          rule: {
            "monday": [ 4, 10, 16, 22 ],
            "tuesday": [ 3, 9, 15, 21 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2940843005/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://graxa.bandcamp.com/album/a-concorr-ncia-demais',
          a_string: 'A concorrência é demais! by Graxa',
          rule: {
            "monday": [ 5, 11, 17, 23 ],
            "tuesday": [ 4, 10, 16, 22 ],
            "wednesday": [ 3, 9, 15, 21 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=535551876/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ubiquitycompilations.bandcamp.com/album/brasil-do-brazil',
          a_string: 'Brasil do Brazil by Various Artists',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 4, 10, 16, 22 ],
            "thursday": [ 3, 9, 15, 21 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1384877798/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sinewave1.bandcamp.com/album/para-uso-recreativo',
          a_string: 'Para Uso Recreativo by Sick',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 4, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2370054641/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/tom-z',
          a_string: 'Tom Zé by Tom Ze',
          rule: {
            "monday": [ 4, 10, 16, 22 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2340267301/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theblogthatcelebratesitself.bandcamp.com/album/va-the-sea',
          a_string: 'VA - The Sea by TBTCI',
          rule: {
            "monday": [ 5, 11, 17, 23 ],
            "tuesday": [ 4, 10, 16, 22 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=808439901/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coaxodosapo.bandcamp.com/album/oquadro',
          a_string: 'OQuadro by OQuadro',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 4, 10, 16, 22 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1811681915/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coaxodosapo.bandcamp.com/album/piano-solos',
          a_string: 'Piano Solos by Guilherme Arantes',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 4, 10, 16, 22 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1742007145/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coaxodosapo.bandcamp.com/album/as-ganhadeiras-de-itapu',
          a_string: 'As Ganhadeiras de Itapuã by As Ganhadeiras de Itapuã',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 4, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2962010502/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/grande-liquida-o',
          a_string: 'Grande Liquidação by Tom Ze',
          rule: {
            "monday": [ 4, 10, 16, 22 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3738045895/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vvaaschemarecords.bandcamp.com/album/freedom-jazz-dance',
          a_string: 'Freedom Jazz Dance by VVAA',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1526212277/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djcaptainplanet.bandcamp.com/album/esperanto-slang',
          a_string: 'Esperanto Slang by Captain Planet',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3108741675/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/rain-music',
          a_string: '&quot;rain music&quot; by NATHAN BELL',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=808439901/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coaxodosapo.bandcamp.com/album/oquadro',
          a_string: 'OQuadro by OQuadro',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3433381281/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anthonywilson.bandcamp.com/album/campo-belo',
          a_string: 'Campo Belo by Anthony Wilson',
          rule: {
            "monday": [ 5, 11, 17, 23 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3926834623/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tropicaltwistarecords.bandcamp.com/album/ibu-selva-ngo-bo-sontg-pa-ttr019',
          a_string: 'Ibu Selva - Ngo-bo Sontg-pa (TTR019) by Tropical Twista Records',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=219486560/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/na-boca-dos-outros',
          a_string: '&quot;na boca dos outros&quot; by KIKO DINUCCI',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=49193070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/m-takara-h-diaz-vs-leila',
          a_string: 'M.TAKARA &amp; H.DIAZ vs LEILA by DESMONTA',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 6, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1478386499/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://godsandpunks.bandcamp.com/album/into-the-dunes-of-doom',
          a_string: 'Into the Dunes of Doom by Gods &amp; Punks',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 6, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3177769465/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://voodoohop.bandcamp.com/album/voodoohop-entropia-coletiva-i',
          a_string: 'Voodoohop: Entropia Coletiva I by voodoohop',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 6, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3859908011/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theblogthatcelebratesitself.bandcamp.com/album/highwire-days-the-psychedelic-furs-reverence',
          a_string: 'Highwire Days, The Psychedelic Furs´ Reverence by TBTCI',
          rule: {
            "monday": [ 6, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3292168400/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://frentebolivarista.bandcamp.com/album/yeahman-transborda',
          a_string: 'YEAHMAN - Transborda by YEAHMAN',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 6, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3395021422/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chicodub.bandcamp.com/album/hy-brazil-vol-10-new-music-from-brazil-2016',
          a_string: 'Hy Brazil Vol 10: New Music From Brazil 2016 by Chico Dub',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 6, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=305968330/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lealmeida.bandcamp.com/album/paraleloplasmos',
          a_string: 'Paraleloplasmos by Lê Almeida',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 6, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3665504977/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayarecords.bandcamp.com/album/el-viejo-hombre-de-los-andes',
          a_string: 'El Viejo Hombre de los Andes by EVHA',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 7, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=324600694/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://frentebolivarista.bandcamp.com/album/el-b-ho-cumbias-de-oro',
          a_string: 'El Búho - Cumbias de Oro by Frente Edits III',
          rule: {
            "monday": [ 7, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1918340155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayarecords.bandcamp.com/album/marimba-del-pacifico',
          a_string: 'Marimba Del Pacifico by Rio Mira',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 7, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1707231046/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tiredofpeople.bandcamp.com/album/we-can-get-along-zzz02',
          a_string: 'We Can Get Along [ZZZ02] by SonoTWS',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 7, 14, 20, 26 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3601625332/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deafkidspunx.bandcamp.com/album/over-the-days-somewhat-damaged-ep',
          a_string: 'Over The Days... Somewhat Damaged EP by DEAFKIDS',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 7, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=604321203/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yantrayantra.bandcamp.com/album/drones-e-excurs-es-de-guitarras-rumo-ao-desconhecido',
          a_string: 'Drones e Excursões de Guitarras Rumo ao Desconhecido by YANTRA',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 7, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1050637797/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://artolindsay.bandcamp.com/album/encyclopedia-of-arto-2',
          a_string: 'Encyclopedia Of Arto by Arto lindsay',
          rule: {
            "monday": [ 7, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=974602156/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fusca.bandcamp.com/album/fusca',
          a_string: 'Fusca by Fusca',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 8, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=964486644/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomn.bandcamp.com/album/t-mn',
          a_string: 'TŌMN by Tōmn',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 8, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1157765245/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sonidotrpico.bandcamp.com/album/sonido-tr-pico-vol-i',
          a_string: 'Sonido Trópico Vol. I by Sonido Trópico',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 8, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1176199692/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tropicaltwistarecords.bandcamp.com/album/kurup-maca-ba-ttr003',
          a_string: 'Kurup - Macaúba (TTR003) by Kurup',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 8, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=598875439/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tropicaltwistarecords.bandcamp.com/album/v-a-hystereof-nica-vol-1-ttr021',
          a_string: 'V/A - Hystereofônica Vol. 1 (TTR021) by Tropical Twista Records',
          rule: {
            "monday": [ 8, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1581814353/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/pessoas-n-o-2',
          a_string: 'pessoas não by HAB',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 8, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1162580739/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/gua-pedra',
          a_string: 'água pedra by VALÉRIO',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 8, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1224343038/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/m-takara-3-1',
          a_string: 'M.TAKARA 3 + 1 by DESMONTA',
          rule: {
            "monday": [ 13, 19, 25, 31 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 9, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2759140048/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rkzrecs.bandcamp.com/album/undergraduated-music',
          a_string: 'Undergraduated Music by Aquiles Guimarães',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 9, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1748905093/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/split-10-hab-m-takara',
          a_string: 'split 10&quot; [hab​/​m​.​takara] by DESMONTA',
          rule: {
            "monday": [ 9, 16, 22, 28 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 13, 19, 25, 31 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=594839715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/rec-loop',
          a_string: 'rec/loop by PSILOSAMPLES',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 9, 16, 22, 28 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 13, 19, 25, 31 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4027940168/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tigersmilkrecords.bandcamp.com/album/andina-huayno-carnaval-and-cumbia-the-sound-of-the-peruvian-andes-1968-1978-5',
          a_string: 'ANDINA: Huayno, Carnaval and Cumbia - The Sound of the Peruvian Andes 1968​-​1978 by Tigers Milk Records',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 9, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 13, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=518360247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatitxdiscos.bandcamp.com/album/uno',
          a_string: 'UNO by Varios',
          rule: {
            "monday": [ 13, 19, 25, 31 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 9, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=4248090408/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuallimusic.com/album/birds-of-bliss',
          a_string: 'Birds of Bliss by Cualli',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 9, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2572456482/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://riotseasonrecords.bandcamp.com/album/familia-de-lobos',
          a_string: 'Familia De Lobos by FAMILIA DE LOBOS',
          rule: {
            "monday": [ 10, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 14, 20, 26, 1 ],
            "thursday": [ 13, 19, 25, 31 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2621324398/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fuzzkrank.bandcamp.com/album/fuzzkrank',
          a_string: 'Fuzzkrank by Fuzzkrank',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 10, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 14, 20, 26, 1 ],
            "saturday": [ 13, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2202146747/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fuzzclub.bandcamp.com/album/temporal',
          a_string: 'Temporal by Las Cobras',
          rule: {
            "monday": [ 13, 19, 25, 31 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 10, 17, 23, 29 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 14, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3539298468/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://novomundo-france.bandcamp.com/album/glue-trip-2',
          a_string: 'Glue trip by NOVOMUNDO',
          rule: {
            "monday": [ 14, 20, 26, 1 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 10, 17, 23, 29 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1136062252/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://raphaelracor.bandcamp.com/album/raphael-racor-today',
          a_string: 'Raphael Racor - Today by Raphael Racor',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 14, 20, 26, 1 ],
            "wednesday": [ 13, 19, 25, 31 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 10, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1671738285/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://radiojuicy.bandcamp.com/album/rio',
          a_string: 'rio by wun two',
          rule: {
            "monday": [ 10, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 14, 20, 26, 1 ],
            "thursday": [ 13, 19, 25, 31 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2273252392/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatitxdiscos.bandcamp.com/album/poder-fantasma-poder-fantasma-ep',
          a_string: 'Poder Fantasma - Poder Fantasma ep by Poder Fantasma',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 10, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 14, 20, 26, 1 ],
            "saturday": [ 13, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1385786064/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatitxdiscos.bandcamp.com/album/las-olas-canciones-para-mis-amigxs',
          a_string: 'Las Olas - Canciones para mis amigxs by Las Olas',
          rule: {
            "monday": [ 14, 20, 26, 1 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 11, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 15, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3803632707/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatitxdiscos.bandcamp.com/album/paracaidistas-paracaidistas-ep',
          a_string: 'Paracaidistas  - Paracaidistas ep by Paracaidistas',
          rule: {
            "monday": [ 15, 21, 27, 2 ],
            "tuesday": [ 14, 20, 26, 1 ],
            "wednesday": [ 13, 19, 25, 31 ],
            "thursday": [ 11, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3794687900/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juanamolina.bandcamp.com/album/halo',
          a_string: 'Halo by Juana Molina',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 15, 21, 27, 2 ],
            "wednesday": [ 14, 20, 26, 1 ],
            "thursday": [ 13, 19, 25, 31 ],
            "saturday": [ 11, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2992457317/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://edmoonrec.bandcamp.com/album/latin-american-tech',
          a_string: 'Latin American Tech by Lascive Dopamine',
          rule: {
            "monday": [ 11, 18, 24, 30 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 15, 21, 27, 2 ],
            "thursday": [ 14, 20, 26, 1 ],
            "saturday": [ 13, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=329788858/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quixosis.bandcamp.com/album/de-fi-cher',
          a_string: 'De Fiúcher by Quixosis',
          rule: {
            "monday": [ 13, 19, 25, 31 ],
            "tuesday": [ 11, 18, 24, 30 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 15, 21, 27, 2 ],
            "saturday": [ 14, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2609284185/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eruditestoner.bandcamp.com/album/erudite-stoner',
          a_string: 'Erudite Stoner by Erudite Stoner',
          rule: {
            "monday": [ 14, 20, 26, 1 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 11, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 15, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2327432102/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dirtygrave.bandcamp.com/album/evil-desire',
          a_string: 'Evil Desire by Dirty Grave',
          rule: {
            "monday": [ 15, 21, 27, 2 ],
            "tuesday": [ 14, 20, 26, 1 ],
            "wednesday": [ 13, 19, 25, 31 ],
            "thursday": [ 11, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2966963653/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://uroborosrecords.bandcamp.com/album/dystopic-future',
          a_string: 'Dystopic Future by Uroboros Records',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 16, 22, 28, 3 ],
            "wednesday": [ 15, 21, 27, 2 ],
            "thursday": [ 14, 20, 26, 1 ],
            "saturday": [ 12, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2684299125/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://supressor666.bandcamp.com/album/supressor',
          a_string: 'Supressor by Supressor',
          rule: {
            "monday": [ 12, 19, 25, 31 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 16, 22, 28, 3 ],
            "thursday": [ 15, 21, 27, 2 ],
            "saturday": [ 14, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3585167401/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://andeantriberecords.bandcamp.com/album/v-a-andean-spirits-cd-1',
          a_string: 'V.A. ANDEAN SPIRITS - cd 1 by ANDEAN TRIBE RECORDS',
          rule: {
            "monday": [ 14, 20, 26, 1 ],
            "tuesday": [ 12, 19, 25, 31 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 16, 22, 28, 3 ],
            "saturday": [ 15, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=190178628/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://snumusic.bandcamp.com/album/post-vida',
          a_string: 'Post-Vida by snu',
          rule: {
            "monday": [ 15, 21, 27, 2 ],
            "tuesday": [ 14, 20, 26, 1 ],
            "wednesday": [ 12, 19, 25, 31 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 16, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3955389533/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://selomundomelhor.bandcamp.com/album/percuss-o-experimental-brasileira',
          a_string: 'Percussão Experimental Brasileira by Batucajé',
          rule: {
            "monday": [ 16, 22, 28, 3 ],
            "tuesday": [ 15, 21, 27, 2 ],
            "wednesday": [ 14, 20, 26, 1 ],
            "thursday": [ 12, 19, 25, 31 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1692594616/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://selomundomelhor.bandcamp.com/album/nos-quintais-do-mundo-2010',
          a_string: 'Nos quintais do Mundo - 2010 by DJ Tudo e  sua gente de todo lugar',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 16, 22, 28, 3 ],
            "wednesday": [ 15, 21, 27, 2 ],
            "thursday": [ 14, 20, 26, 1 ],
            "saturday": [ 12, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2263023513/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://selomundomelhor.bandcamp.com/album/pra-iemanj',
          a_string: 'Pra Iemanjá by DJ Tudo e sua gente de todo lugar',
          rule: {
            "monday": [ 12, 19, 25, 31 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 16, 22, 28, 3 ],
            "thursday": [ 15, 21, 27, 2 ],
            "saturday": [ 14, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=969446742/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ceumusic.bandcamp.com/album/tropix',
          a_string: 'Tropix by Céu',
          rule: {
            "monday": [ 15, 21, 27, 2 ],
            "tuesday": [ 13, 20, 26, 1 ],
            "wednesday": [ 13, 19, 25, 31 ],
            "thursday": [ 17, 23, 29, 4 ],
            "saturday": [ 16, 22, 28, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3301125778/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://victoire-oberkampf.bandcamp.com/album/spiritual',
          a_string: 'Spiritual by Victoire Oberkampf',
          rule: {
            "monday": [ 16, 22, 28, 2 ],
            "tuesday": [ 15, 21, 27, 2 ],
            "wednesday": [ 13, 20, 26, 1 ],
            "thursday": [ 13, 19, 25, 31 ],
            "saturday": [ 17, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2253018215/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blasthrash.bandcamp.com/album/violence-just-for-fun',
          a_string: 'Violence Just For Fun by Blasthrash',
          rule: {
            "monday": [ 17, 23, 29, 4 ],
            "tuesday": [ 16, 22, 28, 2 ],
            "wednesday": [ 15, 21, 27, 2 ],
            "thursday": [ 13, 20, 26, 1 ],
            "saturday": [ 13, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1381661475/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pakapirecords.bandcamp.com/album/la-psicotropia',
          a_string: 'La Psicotropia by Various Artists',
          rule: {
            "monday": [ 13, 19, 25, 31 ],
            "tuesday": [ 17, 23, 29, 4 ],
            "wednesday": [ 16, 22, 28, 2 ],
            "thursday": [ 15, 21, 27, 2 ],
            "saturday": [ 13, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2208855485/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pakapirecords.bandcamp.com/album/german-army-bloque-del-sur',
          a_string: 'German Army &amp; Bloque del Sur by Pakapi Records',
          rule: {
            "monday": [ 13, 20, 26, 1 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 17, 23, 29, 4 ],
            "thursday": [ 16, 22, 28, 2 ],
            "saturday": [ 15, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2153211590/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pakapirecords.bandcamp.com/album/popolus-ajeno-yn-gmc',
          a_string: 'Popolus Ajeno (Ø+yn &amp; GMC) by Ø+yn &amp; GMC',
          rule: {
            "monday": [ 15, 21, 27, 2 ],
            "tuesday": [ 13, 20, 26, 1 ],
            "wednesday": [ 13, 19, 25, 31 ],
            "thursday": [ 17, 23, 29, 4 ],
            "saturday": [ 16, 22, 28, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3201825692/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://domlanenamusic.bandcamp.com/album/cantando-ep',
          a_string: 'Cantando EP by Dom La Nena',
          rule: {
            "monday": [ 16, 22, 28, 2 ],
            "tuesday": [ 15, 21, 27, 2 ],
            "wednesday": [ 13, 20, 26, 1 ],
            "thursday": [ 13, 19, 25, 31 ],
            "saturday": [ 17, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2057778744/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-5-afro-brazilian-roots-and-wires',
          a_string: 'Kafundó Vol. 5;  Afro-Brazilian Roots and Wires by Kafundó Records',
          rule: {
            "monday": [ 18, 24, 30, 5 ],
            "tuesday": [ 17, 23, 29, 3 ],
            "wednesday": [ 16, 22, 28, 3 ],
            "thursday": [ 13, 21, 27, 2 ],
            "saturday": [ 14, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1774175615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sibu.bandcamp.com/album/nosy-be',
          a_string: 'Nosy Be by Sibu',
          rule: {
            "monday": [ 14, 20, 26, 1 ],
            "tuesday": [ 18, 24, 30, 5 ],
            "wednesday": [ 17, 23, 29, 3 ],
            "thursday": [ 16, 22, 28, 3 ],
            "saturday": [ 13, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1379604130/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/com-defeito-de-fabrica-o-fabrication-defect',
          a_string: 'Com Defeito de Fabricação: Fabrication Defect by Tom Ze',
          rule: {
            "monday": [ 13, 21, 27, 2 ],
            "tuesday": [ 14, 20, 26, 1 ],
            "wednesday": [ 18, 24, 30, 5 ],
            "thursday": [ 17, 23, 29, 3 ],
            "saturday": [ 16, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=51595156/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://luakabop.bandcamp.com/album/brazil-classics-7-what-s-happening-in-pernambuco-new-sounds-of-the-brazilian-northeast',
          a_string: 'Brazil Classics 7: What’s Happening In Pernambuco: New Sounds of the Brazilian Northeast by Luaka Bop',
          rule: {
            "monday": [ 16, 22, 28, 3 ],
            "tuesday": [ 13, 21, 27, 2 ],
            "wednesday": [ 14, 20, 26, 1 ],
            "thursday": [ 18, 24, 30, 5 ],
            "saturday": [ 17, 23, 29, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3614230905/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://luakabop.bandcamp.com/album/brazil-classics-1-beleza-tropical',
          a_string: 'Brazil Classics 1: Beleza Tropical by Luaka Bop',
          rule: {
            "monday": [ 17, 23, 29, 3 ],
            "tuesday": [ 16, 22, 28, 3 ],
            "wednesday": [ 13, 21, 27, 2 ],
            "thursday": [ 14, 20, 26, 1 ],
            "saturday": [ 18, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3585145624/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theevildm.bandcamp.com/album/the-evil',
          a_string: 'THE EVIL by The Evil',
          rule: {
            "monday": [ 18, 24, 30, 5 ],
            "tuesday": [ 17, 23, 29, 3 ],
            "wednesday": [ 16, 22, 28, 3 ],
            "thursday": [ 13, 21, 27, 2 ],
            "saturday": [ 14, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4234132083/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/siria',
          a_string: 'Siriá by Mestre Cupijó e Seu Ritmo (The mythical sound of northern Brasil)',
          rule: {
            "monday": [ 14, 20, 26, 1 ],
            "tuesday": [ 18, 24, 30, 5 ],
            "wednesday": [ 17, 23, 29, 3 ],
            "thursday": [ 16, 22, 28, 3 ],
            "saturday": [ 13, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=461963248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/hamad-kalkaba-and-the-golden-sounds-1974-1975',
          a_string: 'Hamad Kalkaba and The Golden Sounds 1974-1975 by Hamad Kalkaba',
          rule: {
            "monday": [ 14, 22, 28, 3 ],
            "tuesday": [ 15, 21, 27, 2 ],
            "wednesday": [ 19, 25, 31, 6 ],
            "thursday": [ 18, 24, 30, 4 ],
            "saturday": [ 17, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2737887252/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music-from-memory.bandcamp.com/album/outro-tempo-electronic-and-contemporary-music-from-brazil-1978-1992',
          a_string: 'Outro Tempo: Electronic And Contemporary Music From Brazil 1978-1992 by Music From Memory',
          rule: {
            "monday": [ 17, 23, 29, 4 ],
            "tuesday": [ 14, 22, 28, 3 ],
            "wednesday": [ 15, 21, 27, 2 ],
            "thursday": [ 19, 25, 31, 6 ],
            "saturday": [ 18, 24, 30, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1856667815/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joycemoreno.bandcamp.com/album/tardes-cariocas',
          a_string: 'Tardes Cariocas by Joyce Moreno',
          rule: {
            "monday": [ 18, 24, 30, 4 ],
            "tuesday": [ 17, 23, 29, 4 ],
            "wednesday": [ 14, 22, 28, 3 ],
            "thursday": [ 15, 21, 27, 2 ],
            "saturday": [ 19, 25, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2512859284/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joycemoreno.bandcamp.com/album/cool',
          a_string: 'Cool by Joyce Moreno',
          rule: {
            "monday": [ 19, 25, 31, 6 ],
            "tuesday": [ 18, 24, 30, 4 ],
            "wednesday": [ 17, 23, 29, 4 ],
            "thursday": [ 14, 22, 28, 3 ],
            "saturday": [ 15, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=877748168/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/cantos-invisiveis',
          a_string: 'Cantos Invisiveis by Sao Paulo Underground',
          rule: {
            "monday": [ 15, 21, 27, 2 ],
            "tuesday": [ 19, 25, 31, 6 ],
            "wednesday": [ 18, 24, 30, 4 ],
            "thursday": [ 17, 23, 29, 4 ],
            "saturday": [ 14, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1033402898/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://babeterror.bandcamp.com/album/ancient-mocean-2017',
          a_string: 'Ancient M&#39;ocean (2017) by Babe, Terror',
          rule: {
            "monday": [ 14, 22, 28, 3 ],
            "tuesday": [ 15, 21, 27, 2 ],
            "wednesday": [ 19, 25, 31, 6 ],
            "thursday": [ 18, 24, 30, 4 ],
            "saturday": [ 17, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2844917765/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ironlungpv.bandcamp.com/album/iii-lp-lungs-086',
          a_string: 'III LP (LUNGS-086) by RAKTA',
          rule: {
            "monday": [ 17, 23, 29, 4 ],
            "tuesday": [ 14, 22, 28, 3 ],
            "wednesday": [ 15, 21, 27, 2 ],
            "thursday": [ 19, 25, 31, 6 ],
            "saturday": [ 18, 24, 30, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3496206896/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vagosagrado.bandcamp.com/album/vol-ii',
          a_string: 'Vol. II by Vago Sagrado',
          rule: {
            "monday": [ 19, 25, 31, 5 ],
            "tuesday": [ 18, 24, 30, 5 ],
            "wednesday": [ 15, 23, 29, 4 ],
            "thursday": [ 16, 22, 28, 3 ],
            "saturday": [ 20, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2079704059/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vagosagrado.bandcamp.com/album/alea-iacta-est',
          a_string: 'Alea Iacta Est by Vago Sagrado',
          rule: {
            "monday": [ 20, 26, 1, 7 ],
            "tuesday": [ 19, 25, 31, 5 ],
            "wednesday": [ 18, 24, 30, 5 ],
            "thursday": [ 15, 23, 29, 4 ],
            "saturday": [ 16, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1183433253/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vagosagrado.bandcamp.com/album/vago-sagrado',
          a_string: 'Vago Sagrado by Vago Sagrado',
          rule: {
            "monday": [ 16, 22, 28, 3 ],
            "tuesday": [ 20, 26, 1, 7 ],
            "wednesday": [ 19, 25, 31, 5 ],
            "thursday": [ 18, 24, 30, 5 ],
            "saturday": [ 15, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1977208599/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://crookedtreerecords.bandcamp.com/album/softspoken',
          a_string: 'Softspoken by The Sorry Shop',
          rule: {
            "monday": [ 15, 23, 29, 4 ],
            "tuesday": [ 16, 22, 28, 3 ],
            "wednesday": [ 20, 26, 1, 7 ],
            "thursday": [ 19, 25, 31, 5 ],
            "saturday": [ 18, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1496544705/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deathraybam.bandcamp.com/album/blackk-mirror',
          a_string: 'Blackk Mirror by Deathray Bam!',
          rule: {
            "monday": [ 18, 24, 30, 5 ],
            "tuesday": [ 15, 23, 29, 4 ],
            "wednesday": [ 16, 22, 28, 3 ],
            "thursday": [ 20, 26, 1, 7 ],
            "saturday": [ 19, 25, 31, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1470380704/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wanderwildner.bandcamp.com/album/wanclub-3',
          a_string: 'Wanclub by Wander Wildner y sus Comancheros',
          rule: {
            "monday": [ 19, 25, 31, 5 ],
            "tuesday": [ 18, 24, 30, 5 ],
            "wednesday": [ 15, 23, 29, 4 ],
            "thursday": [ 16, 22, 28, 3 ],
            "saturday": [ 20, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=292221390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://luakabop.bandcamp.com/album/brazil-classics-2-o-samba',
          a_string: 'Brazil Classics 2: O Samba by Luaka Bop',
          rule: {
            "monday": [ 20, 26, 1, 7 ],
            "tuesday": [ 19, 25, 31, 5 ],
            "wednesday": [ 18, 24, 30, 5 ],
            "thursday": [ 15, 23, 29, 4 ],
            "saturday": [ 16, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4281459110/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://luakabop.bandcamp.com/album/brazil-classics-3-forr-etc-music-of-the-brazilian-northeast',
          a_string: 'Brazil Classics 3: Forró etc.: Music of the Brazilian Northeast by Luaka Bop',
          rule: {
            "monday": [ 17, 23, 29, 4 ],
            "tuesday": [ 21, 27, 2, 8 ],
            "wednesday": [ 20, 26, 1, 6 ],
            "thursday": [ 19, 25, 31, 6 ],
            "saturday": [ 16, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=454619853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/brazil-classics-4-the-best-of-tom-z',
          a_string: 'Brazil Classics 4: The Best of Tom Zé by Tom Ze',
          rule: {
            "monday": [ 16, 24, 30, 5 ],
            "tuesday": [ 17, 23, 29, 4 ],
            "wednesday": [ 21, 27, 2, 8 ],
            "thursday": [ 20, 26, 1, 6 ],
            "saturday": [ 19, 25, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2504248903/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://somosconvoy.bandcamp.com/album/convoy',
          a_string: 'Convoy by Convoy',
          rule: {
            "monday": [ 19, 25, 31, 6 ],
            "tuesday": [ 16, 24, 30, 5 ],
            "wednesday": [ 17, 23, 29, 4 ],
            "thursday": [ 21, 27, 2, 8 ],
            "saturday": [ 20, 26, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3349957760/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maskedsynthwave.bandcamp.com/album/the-dying-cult',
          a_string: 'The Dying Cult by Masked',
          rule: {
            "monday": [ 20, 26, 1, 6 ],
            "tuesday": [ 19, 25, 31, 6 ],
            "wednesday": [ 16, 24, 30, 5 ],
            "thursday": [ 17, 23, 29, 4 ],
            "saturday": [ 21, 27, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2621167700/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://willowispmusic.bandcamp.com/album/puzzle-symphony',
          a_string: 'Puzzle Symphony by Will O Wisp',
          rule: {
            "monday": [ 21, 27, 2, 8 ],
            "tuesday": [ 20, 26, 1, 6 ],
            "wednesday": [ 19, 25, 31, 6 ],
            "thursday": [ 16, 24, 30, 5 ],
            "saturday": [ 17, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=673453486/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://andeantriberecords.bandcamp.com/album/naga-baba-forbidden-fruit',
          a_string: 'NAGA BABA - Forbidden Fruit by ANDEAN TRIBE RECORDS',
          rule: {
            "monday": [ 17, 23, 29, 4 ],
            "tuesday": [ 21, 27, 2, 8 ],
            "wednesday": [ 20, 26, 1, 6 ],
            "thursday": [ 19, 25, 31, 6 ],
            "saturday": [ 16, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=677932872/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://museumofpastartifacts.bandcamp.com/album/melancholy-city',
          a_string: 'Melancholy City by Museum Of Past Artifacts',
          rule: {
            "monday": [ 16, 24, 30, 5 ],
            "tuesday": [ 17, 23, 29, 4 ],
            "wednesday": [ 21, 27, 2, 8 ],
            "thursday": [ 20, 26, 1, 6 ],
            "saturday": [ 19, 25, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3550845600/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laperseguidora.bandcamp.com/album/ponyfever',
          a_string: 'PonyFever by LA PERSEGUIDORA',
          rule: {
            "monday": [ 20, 26, 1, 7 ],
            "tuesday": [ 17, 25, 31, 6 ],
            "wednesday": [ 18, 24, 30, 5 ],
            "thursday": [ 22, 28, 3, 9 ],
            "saturday": [ 21, 27, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1774588430/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://redsuncult.bandcamp.com/album/red-sun-cult',
          a_string: 'Red Sun Cult by Red Sun Cult',
          rule: {
            "monday": [ 21, 27, 2, 7 ],
            "tuesday": [ 20, 26, 1, 7 ],
            "wednesday": [ 17, 25, 31, 6 ],
            "thursday": [ 18, 24, 30, 5 ],
            "saturday": [ 22, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3689425113/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://redsuncult.bandcamp.com/album/void-traveler',
          a_string: 'Void Traveler by Red Sun Cult',
          rule: {
            "monday": [ 22, 28, 3, 9 ],
            "tuesday": [ 21, 27, 2, 7 ],
            "wednesday": [ 20, 26, 1, 7 ],
            "thursday": [ 17, 25, 31, 6 ],
            "saturday": [ 18, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4132066929/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://necronomicon.bandcamp.com/album/adiante',
          a_string: 'Adiante by Necro',
          rule: {
            "monday": [ 18, 24, 30, 5 ],
            "tuesday": [ 22, 28, 3, 9 ],
            "wednesday": [ 21, 27, 2, 7 ],
            "thursday": [ 20, 26, 1, 7 ],
            "saturday": [ 17, 25, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=518899257/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zzkrecords.bandcamp.com/album/selva',
          a_string: 'Selva by El Remolon',
          rule: {
            "monday": [ 17, 25, 31, 6 ],
            "tuesday": [ 18, 24, 30, 5 ],
            "wednesday": [ 22, 28, 3, 9 ],
            "thursday": [ 21, 27, 2, 7 ],
            "saturday": [ 20, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=874343302/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zzkrecords.bandcamp.com/album/en-son-de-paz',
          a_string: 'En Son de Paz by Frikstailers',
          rule: {
            "monday": [ 20, 26, 1, 7 ],
            "tuesday": [ 17, 25, 31, 6 ],
            "wednesday": [ 18, 24, 30, 5 ],
            "thursday": [ 22, 28, 3, 9 ],
            "saturday": [ 21, 27, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=381872142/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zzkrecords.bandcamp.com/album/cosmus',
          a_string: 'Cosmus by MITÚ',
          rule: {
            "monday": [ 21, 27, 2, 7 ],
            "tuesday": [ 20, 26, 1, 7 ],
            "wednesday": [ 17, 25, 31, 6 ],
            "thursday": [ 18, 24, 30, 5 ],
            "saturday": [ 22, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=899788126/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tropicaltwistarecords.bandcamp.com/album/v-a-mvndivagante-vol-1-ttr035',
          a_string: 'V/A - MVNDIVAGANTE Vol.1 (TTR035) by Tropical Twista Records',
          rule: {
            "monday": [ 23, 29, 4, 10 ],
            "tuesday": [ 22, 28, 3, 8 ],
            "wednesday": [ 21, 27, 2, 8 ],
            "thursday": [ 18, 26, 1, 7 ],
            "saturday": [ 19, 25, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3723800367/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://testgrind.bandcamp.com/album/arabe-macabre',
          a_string: 'Arabe Macabre by Test',
          rule: {
            "monday": [ 19, 25, 31, 6 ],
            "tuesday": [ 23, 29, 4, 10 ],
            "wednesday": [ 22, 28, 3, 8 ],
            "thursday": [ 21, 27, 2, 8 ],
            "saturday": [ 18, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4220303382/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dillonzky.bandcamp.com/album/kind',
          a_string: 'Kind by Dillon',
          rule: {
            "monday": [ 18, 26, 1, 7 ],
            "tuesday": [ 19, 25, 31, 6 ],
            "wednesday": [ 23, 29, 4, 10 ],
            "thursday": [ 22, 28, 3, 8 ],
            "saturday": [ 21, 27, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1596054815/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://suertecampeon.bandcamp.com/album/este-es-el-comienzo-de-todo-lo-que-no-quieres-ep',
          a_string: 'Este es el comienzo de todo lo que no quieres (EP) by Suerte Campeón',
          rule: {
            "monday": [ 21, 27, 2, 8 ],
            "tuesday": [ 18, 26, 1, 7 ],
            "wednesday": [ 19, 25, 31, 6 ],
            "thursday": [ 23, 29, 4, 10 ],
            "saturday": [ 22, 28, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4043186328/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maneeshdemoor.bandcamp.com/album/songs-from-the-tree-of-light',
          a_string: 'SONGS FROM THE TREE OF LIGHT by Maneesh de Moor',
          rule: {
            "monday": [ 22, 28, 3, 8 ],
            "tuesday": [ 21, 27, 2, 8 ],
            "wednesday": [ 18, 26, 1, 7 ],
            "thursday": [ 19, 25, 31, 6 ],
            "saturday": [ 23, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2088685879/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://comitepokoflo.bandcamp.com/album/dedos-estamos-hartos',
          a_string: 'Dedos - Estamos Hartos by Comité Pokofló',
          rule: {
            "monday": [ 23, 29, 4, 10 ],
            "tuesday": [ 22, 28, 3, 8 ],
            "wednesday": [ 21, 27, 2, 8 ],
            "thursday": [ 18, 26, 1, 7 ],
            "saturday": [ 19, 25, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1126519492/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arthuri.bandcamp.com/album/coelho-branco',
          a_string: 'Coelho Branco by Arthuri',
          rule: {
            "monday": [ 19, 25, 31, 6 ],
            "tuesday": [ 23, 29, 4, 10 ],
            "wednesday": [ 22, 28, 3, 8 ],
            "thursday": [ 21, 27, 2, 8 ],
            "saturday": [ 18, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3077687890/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arthuri.bandcamp.com/album/coelho-branco-vol-2',
          a_string: 'Coelho Branco Vol 2 by Arthuri',
          rule: {
            "monday": [ 19, 27, 2, 8 ],
            "tuesday": [ 20, 26, 1, 7 ],
            "wednesday": [ 24, 30, 5, 11 ],
            "thursday": [ 23, 29, 4, 9 ],
            "saturday": [ 22, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2497221679/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://camaronesorquestraguitarristica.bandcamp.com/album/feeexta',
          a_string: 'Feeexta by Camarones Orquestra Guitarrística',
          rule: {
            "monday": [ 22, 28, 3, 9 ],
            "tuesday": [ 19, 27, 2, 8 ],
            "wednesday": [ 20, 26, 1, 7 ],
            "thursday": [ 24, 30, 5, 11 ],
            "saturday": [ 23, 29, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=196147334/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orangemilkrecords.bandcamp.com/album/breakeadito',
          a_string: 'Breakeadito by El Murki',
          rule: {
            "monday": [ 23, 29, 4, 9 ],
            "tuesday": [ 22, 28, 3, 9 ],
            "wednesday": [ 19, 27, 2, 8 ],
            "thursday": [ 20, 26, 1, 7 ],
            "saturday": [ 24, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3964698224/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jvlian.bandcamp.com/album/crisis',
          a_string: 'CRISIS by JVLIAN',
          rule: {
            "monday": [ 24, 30, 5, 11 ],
            "tuesday": [ 23, 29, 4, 9 ],
            "wednesday": [ 22, 28, 3, 9 ],
            "thursday": [ 19, 27, 2, 8 ],
            "saturday": [ 20, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=59501599/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juanamolina.bandcamp.com/album/wed-21',
          a_string: 'Wed 21 by Juana Molina',
          rule: {
            "monday": [ 20, 26, 1, 7 ],
            "tuesday": [ 24, 30, 5, 11 ],
            "wednesday": [ 23, 29, 4, 9 ],
            "thursday": [ 22, 28, 3, 9 ],
            "saturday": [ 19, 27, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3660299472/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juanamolina.bandcamp.com/album/un-d-a',
          a_string: 'Un Día by Juana Molina',
          rule: {
            "monday": [ 19, 27, 2, 8 ],
            "tuesday": [ 20, 26, 1, 7 ],
            "wednesday": [ 24, 30, 5, 11 ],
            "thursday": [ 23, 29, 4, 9 ],
            "saturday": [ 22, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=534324451/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juanamolina.bandcamp.com/album/son',
          a_string: 'Son by Juana Molina',
          rule: {
            "monday": [ 22, 28, 3, 9 ],
            "tuesday": [ 19, 27, 2, 8 ],
            "wednesday": [ 20, 26, 1, 7 ],
            "thursday": [ 24, 30, 5, 11 ],
            "saturday": [ 23, 29, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3007114881/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juanamolina.bandcamp.com/album/tres-cosas',
          a_string: 'Tres Cosas by Juana Molina',
          rule: {
            "monday": [ 24, 30, 5, 10 ],
            "tuesday": [ 23, 29, 4, 10 ],
            "wednesday": [ 20, 28, 3, 9 ],
            "thursday": [ 21, 27, 2, 8 ],
            "saturday": [ 25, 31, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2454936573/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/cogumelo-panda',
          a_string: '&quot;cogumelo panda&quot; by COGUMELO PANDA',
          rule: {
            "monday": [ 25, 31, 6, 12 ],
            "tuesday": [ 24, 30, 5, 10 ],
            "wednesday": [ 23, 29, 4, 10 ],
            "thursday": [ 20, 28, 3, 9 ],
            "saturday": [ 21, 27, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=595881051/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/metal-metal',
          a_string: '&quot;metal metal&quot; by METÁ METÁ',
          rule: {
            "monday": [ 21, 27, 2, 8 ],
            "tuesday": [ 25, 31, 6, 12 ],
            "wednesday": [ 24, 30, 5, 10 ],
            "thursday": [ 23, 29, 4, 10 ],
            "saturday": [ 20, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3609443598/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://responsepirituba.bandcamp.com/album/response-pirituba',
          a_string: 'response pirituba by DESMONTA',
          rule: {
            "monday": [ 20, 28, 3, 9 ],
            "tuesday": [ 21, 27, 2, 8 ],
            "wednesday": [ 25, 31, 6, 12 ],
            "thursday": [ 24, 30, 5, 10 ],
            "saturday": [ 23, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2933140707/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://noproblematapes.bandcamp.com/album/crystalline-city',
          a_string: 'Crystalline City by Vagrant',
          rule: {
            "monday": [ 23, 29, 4, 10 ],
            "tuesday": [ 20, 28, 3, 9 ],
            "wednesday": [ 21, 27, 2, 8 ],
            "thursday": [ 25, 31, 6, 12 ],
            "saturday": [ 24, 30, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1406714306/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://infinitoaudio.bandcamp.com/album/black-ring-tunes',
          a_string: 'Black Ring Tunes by Alejandro Palacios',
          rule: {
            "monday": [ 24, 30, 5, 10 ],
            "tuesday": [ 23, 29, 4, 10 ],
            "wednesday": [ 20, 28, 3, 9 ],
            "thursday": [ 21, 27, 2, 8 ],
            "saturday": [ 25, 31, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4241321842/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lunartapes.bandcamp.com/album/lunar-tapes-compilado-1',
          a_string: 'Lunar Tapes Compilado 1 by Various Artists',
          rule: {
            "monday": [ 25, 31, 6, 12 ],
            "tuesday": [ 24, 30, 5, 10 ],
            "wednesday": [ 23, 29, 4, 10 ],
            "thursday": [ 20, 28, 3, 9 ],
            "saturday": [ 21, 27, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2663500550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://artesyoficios.bandcamp.com/album/leidan-ep',
          a_string: 'Leidan EP by Leidan',
          rule: {
            "monday": [ 22, 28, 3, 9 ],
            "tuesday": [ 26, 1, 7, 13 ],
            "wednesday": [ 25, 31, 6, 11 ],
            "thursday": [ 24, 30, 5, 11 ],
            "saturday": [ 21, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2309034914/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xqrsns.bandcamp.com/album/lo-fi-beats-un-collage-impresionista',
          a_string: 'Lo-Fi Beats: Un Collage Impresionista by Flakodiablo',
          rule: {
            "monday": [ 21, 29, 4, 10 ],
            "tuesday": [ 22, 28, 3, 9 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 25, 31, 6, 11 ],
            "saturday": [ 24, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3100280079/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://panalrecords.bandcamp.com/album/kamila-govorcin-vibraciones-ep-pnl03',
          a_string: 'Kamila Govorcin - Vibraciones EP #PNL03 by Kamila Govorcin',
          rule: {
            "monday": [ 24, 30, 5, 11 ],
            "tuesday": [ 21, 29, 4, 10 ],
            "wednesday": [ 22, 28, 3, 9 ],
            "thursday": [ 26, 1, 7, 13 ],
            "saturday": [ 25, 31, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1595616171/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://uroborosrecords.bandcamp.com/album/oscillation-frequency',
          a_string: 'Oscillation Frequency by Uroboros Records',
          rule: {
            "monday": [ 25, 31, 6, 11 ],
            "tuesday": [ 24, 30, 5, 11 ],
            "wednesday": [ 21, 29, 4, 10 ],
            "thursday": [ 22, 28, 3, 9 ],
            "saturday": [ 26, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3689999342/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theblogthatcelebratesitself.bandcamp.com/album/u-f-o-stories-a-tribute-to-the-flaming-lips',
          a_string: 'U.F.O. Stories, A Tribute To The Flaming Lips by TBTCI',
          rule: {
            "monday": [ 26, 1, 7, 13 ],
            "tuesday": [ 25, 31, 6, 11 ],
            "wednesday": [ 24, 30, 5, 11 ],
            "thursday": [ 21, 29, 4, 10 ],
            "saturday": [ 22, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=36313533/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theblogthatcelebratesitself.bandcamp.com/album/a-tribute-to-cocteau-twins',
          a_string: 'A Tribute To Cocteau Twins by The Blog That Celebrates Itself Records',
          rule: {
            "monday": [ 22, 28, 3, 9 ],
            "tuesday": [ 26, 1, 7, 13 ],
            "wednesday": [ 25, 31, 6, 11 ],
            "thursday": [ 24, 30, 5, 11 ],
            "saturday": [ 21, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3341103596/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/o-retrato-do-artista-quando-pede',
          a_string: '&quot;o retrato do artista quando pede&quot; by DUO MOVIOLA',
          rule: {
            "monday": [ 21, 29, 4, 10 ],
            "tuesday": [ 22, 28, 3, 9 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 25, 31, 6, 11 ],
            "saturday": [ 24, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1509591694/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/pastiche-nag',
          a_string: '&quot;pastiche nagô&quot; by KIKO DINUCCI e BANDO AFROMACARRÔNICO',
          rule: {
            "monday": [ 25, 31, 6, 12 ],
            "tuesday": [ 22, 30, 5, 11 ],
            "wednesday": [ 23, 29, 4, 10 ],
            "thursday": [ 27, 2, 8, 14 ],
            "saturday": [ 26, 1, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2059871308/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bruno-fleming.bandcamp.com/album/bruno-fleming-cama-mole',
          a_string: 'bruno fleming &quot;cama mole&quot; by DESMONTA',
          rule: {
            "monday": [ 26, 1, 7, 12 ],
            "tuesday": [ 25, 31, 6, 12 ],
            "wednesday": [ 22, 30, 5, 11 ],
            "thursday": [ 23, 29, 4, 10 ],
            "saturday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=312535481/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/postmodern-platos',
          a_string: 'Postmodern Platos by Tom Ze',
          rule: {
            "monday": [ 27, 2, 8, 14 ],
            "tuesday": [ 26, 1, 7, 12 ],
            "wednesday": [ 25, 31, 6, 12 ],
            "thursday": [ 22, 30, 5, 11 ],
            "saturday": [ 23, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=420687349/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/estudando-a-bossa-nordeste-plaza',
          a_string: 'Estudando a Bossa (Nordeste Plaza) by Tom Ze',
          rule: {
            "monday": [ 23, 29, 4, 10 ],
            "tuesday": [ 27, 2, 8, 14 ],
            "wednesday": [ 26, 1, 7, 12 ],
            "thursday": [ 25, 31, 6, 12 ],
            "saturday": [ 22, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4249545143/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/estudando-o-pagode',
          a_string: 'Estudando o Pagode by Tom Ze',
          rule: {
            "monday": [ 22, 30, 5, 11 ],
            "tuesday": [ 23, 29, 4, 10 ],
            "wednesday": [ 27, 2, 8, 14 ],
            "thursday": [ 26, 1, 7, 12 ],
            "saturday": [ 25, 31, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3890871436/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sonido-gallo-negro.bandcamp.com/album/mambo-c-smico',
          a_string: 'Mambo Cósmico by Sonido Gallo Negro',
          rule: {
            "monday": [ 25, 31, 6, 12 ],
            "tuesday": [ 22, 30, 5, 11 ],
            "wednesday": [ 23, 29, 4, 10 ],
            "thursday": [ 27, 2, 8, 14 ],
            "saturday": [ 26, 1, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3129067531/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sonido-gallo-negro.bandcamp.com/album/sendero-mistico',
          a_string: 'Sendero Mistico by Sonido Gallo Negro',
          rule: {
            "monday": [ 26, 1, 7, 12 ],
            "tuesday": [ 25, 31, 6, 12 ],
            "wednesday": [ 22, 30, 5, 11 ],
            "thursday": [ 23, 29, 4, 10 ],
            "saturday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1413287566/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/brazil-classics-5-the-return-of-tom-z-the-hips-of-tradition',
          a_string: 'Brazil Classics 5: The Return of Tom Zé: The Hips of Tradition by Tom Ze',
          rule: {
            "monday": [ 28, 3, 9, 15 ],
            "tuesday": [ 27, 2, 8, 13 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 23, 31, 6, 12 ],
            "saturday": [ 24, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=881052363/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firefriend.bandcamp.com/album/sulfur',
          a_string: 'Sulfur by Firefriend',
          rule: {
            "monday": [ 24, 30, 5, 11 ],
            "tuesday": [ 28, 3, 9, 15 ],
            "wednesday": [ 27, 2, 8, 13 ],
            "thursday": [ 26, 1, 7, 13 ],
            "saturday": [ 23, 31, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1408749183/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://windows96.bandcamp.com/album/nostalgi-gaius',
          a_string: 'Nostalgi Gaius by Gudang',
          rule: {
            "monday": [ 23, 31, 6, 12 ],
            "tuesday": [ 24, 30, 5, 11 ],
            "wednesday": [ 28, 3, 9, 15 ],
            "thursday": [ 27, 2, 8, 13 ],
            "saturday": [ 26, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3651987928/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nomadeorquestra.bandcamp.com/album/entremundos',
          a_string: 'EntreMundos by Nomade Orquestra',
          rule: {
            "monday": [ 26, 1, 7, 13 ],
            "tuesday": [ 23, 31, 6, 12 ],
            "wednesday": [ 24, 30, 5, 11 ],
            "thursday": [ 28, 3, 9, 15 ],
            "saturday": [ 27, 2, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1586188723/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-6-afrobeat-brazil',
          a_string: 'Kafundó Vol. 6;  Afrobeat Brazil by Kafundó Records',
          rule: {
            "monday": [ 27, 2, 8, 13 ],
            "tuesday": [ 26, 1, 7, 13 ],
            "wednesday": [ 23, 31, 6, 12 ],
            "thursday": [ 24, 30, 5, 11 ],
            "saturday": [ 28, 3, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1632714789/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/maga-bo-apresenta-samba-de-coco-ra-zes-de-arcoverde',
          a_string: 'Maga Bo Apresenta Samba de Coco Raízes de Arcoverde by Samba de Coco Raízes de Arcoverde',
          rule: {
            "monday": [ 28, 3, 9, 15 ],
            "tuesday": [ 27, 2, 8, 13 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 23, 31, 6, 12 ],
            "saturday": [ 24, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2057778744/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-5-afro-brazilian-roots-and-wires',
          a_string: 'Kafundó Vol. 5;  Afro-Brazilian Roots and Wires by Kafundó Records',
          rule: {
            "monday": [ 24, 30, 5, 11 ],
            "tuesday": [ 28, 3, 9, 15 ],
            "wednesday": [ 27, 2, 8, 13 ],
            "thursday": [ 26, 1, 7, 13 ],
            "saturday": [ 23, 31, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1353651176/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-4-carimb-bai-o-and-beyond',
          a_string: 'Kafundó Vol. 4;  Carimbó, Baião and Beyond by Kafundó Records',
          rule: {
            "monday": [ 24, 1, 7, 13 ],
            "tuesday": [ 25, 31, 6, 12 ],
            "wednesday": [ 29, 4, 10, 16 ],
            "thursday": [ 28, 3, 9, 14 ],
            "saturday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3645994535/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-3-electronic-roots-from-n-e-brazil',
          a_string: 'Kafundó Vol. 3;  Electronic Roots from N/E Brazil by Various Artists',
          rule: {
            "monday":  [ 27, 2, 8, 14 ],
            "tuesday": [ 24, 1, 7, 13 ],
            "wednesday": [ 25, 31, 6, 12 ],
            "thursday": [ 29, 4, 10, 16 ],
            "saturday": [ 28, 3, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1868713184/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-2-roots-and-bass-music-from-brazil',
          a_string: 'Kafundó Vol. 2;  Roots and Bass Music from Brazil by Various Artists',
          rule: {
            "monday": [ 28, 3, 9, 14 ],
            "tuesday":  [ 27, 2, 8, 14 ],
            "wednesday": [ 24, 1, 7, 13 ],
            "thursday": [ 25, 31, 6, 12 ],
            "saturday": [ 29, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3852214307/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-1-digital-roots-music-from-brazil',
          a_string: 'Kafundó Vol. 1;  Digital Roots Music from Brazil by Various Artists',
          rule: {
            "monday": [ 29, 4, 10, 16 ],
            "tuesday": [ 28, 3, 9, 14 ],
            "wednesday": [ 27, 2, 8, 14 ],
            "thursday": [ 24, 1, 7, 13 ],
            "saturday": [ 25, 31, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1980957318/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oituyo.bandcamp.com/album/pra-doer',
          a_string: 'Pra Doer by Tuyo',
          rule: {
            "monday": [ 25, 31, 6, 12 ],
            "tuesday": [ 29, 4, 10, 16 ],
            "wednesday": [ 28, 3, 9, 14 ],
            "thursday": [ 27, 2, 8, 14 ],
            "saturday": [ 24, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2213952639/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arcazas.bandcamp.com/album/felipe-arcazas-vintage-cucumber-split',
          a_string: 'Felipe Arcazas &amp; Vintage Cucumber Split by Felipe Arcazas &amp; Vintage Cucumber',
          rule: {
            "monday": [ 24, 1, 7, 13 ],
            "tuesday": [ 25, 31, 6, 12 ],
            "wednesday": [ 29, 4, 10, 16 ],
            "thursday": [ 28, 3, 9, 14 ],
            "saturday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2686633782/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://luakabop.bandcamp.com/album/cuba-classics-2-dancing-with-the-enemy',
          a_string: 'Cuba Classics 2: Dancing With the Enemy by Luaka Bop',
          rule: {
            "monday": [ 27, 2, 8, 14 ],
            "tuesday": [ 24, 1, 7, 13 ],
            "wednesday": [ 25, 31, 6, 12 ],
            "thursday": [ 29, 4, 10, 16 ],
            "saturday": [ 28, 3, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1103010905/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orquestaakokan.bandcamp.com/album/orquesta-akok-n',
          a_string: 'Orquesta Akokán by Orquesta Akokán',
          rule: {
            "monday": [ 29, 4, 10, 15 ],
            "tuesday": [ 26, 3, 9, 15 ],
            "wednesday": [ 25, 2, 8, 14 ],
            "thursday": [ 26, 1, 7, 13 ],
            "saturday": [ 30, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2305932870/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://obbatuke.bandcamp.com/album/obbatuk',
          a_string: 'Obbatuké by Obbatuké',
          rule: {
            "monday": [ 30, 5, 11, 17 ],
            "tuesday": [ 29, 4, 10, 15 ],
            "wednesday": [ 26, 3, 9, 15 ],
            "thursday": [ 25, 2, 8, 14 ],
            "saturday": [ 26, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=201660388/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://domenico2.bandcamp.com/album/the-good-is-a-big-god',
          a_string: 'The Good is a Big God by Domenico Lancellotti',
          rule: {
            "monday": [ 26, 1, 7, 13 ],
            "tuesday": [ 30, 5, 11, 17 ],
            "wednesday": [ 29, 4, 10, 15 ],
            "thursday": [ 26, 3, 9, 15 ],
            "saturday": [ 25, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1985016392/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://domenico2.bandcamp.com/album/sincerely-hot',
          a_string: 'sincerely hot by Domenico Lancellotti',
          rule: {
            "monday": [ 25, 2, 8, 14 ],
            "tuesday": [ 26, 1, 7, 13 ],
            "wednesday": [ 30, 5, 11, 17 ],
            "thursday": [ 29, 4, 10, 15 ],
            "saturday": [ 26, 3, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2995255316/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timmaia.bandcamp.com/album/world-psychedelic-classics-4-nobody-can-live-forever-the-existential-soul-of-tim-maia',
          a_string: 'World Psychedelic Classics 4: Nobody Can Live Forever – The Existential Soul of Tim Maia by Tim Maia',
          rule: {
            "monday": [ 26, 3, 9, 15 ],
            "tuesday": [ 25, 2, 8, 14 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 30, 5, 11, 17 ],
            "saturday": [ 29, 4, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1857962217/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://losamigosinvisibles.bandcamp.com/album/the-venezuelan-zinga-son-vol-1',
          a_string: 'The Venezuelan Zinga Son Vol. 1 by Los Amigos Invisibles',
          rule: {
            "monday": [ 29, 4, 10, 15 ],
            "tuesday": [ 26, 3, 9, 15 ],
            "wednesday": [ 25, 2, 8, 14 ],
            "thursday": [ 26, 1, 7, 13 ],
            "saturday": [ 30, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'http://osmutantes.bandcamp.com/album/world-psychedelic-classics-1-everything-is-possible-the-best-of-os-mutantes',
          href_string: 'http://osmutantes.bandcamp.com/album/world-psychedelic-classics-1-everything-is-possible-the-best-of-os-mutantes',
          a_string: 'World Psychedelic Classics 1: Everything is Possible: The Best of Os Mutantes by Os Mutantes',
          rule: {
            "monday": [ 30, 5, 11, 17 ],
            "tuesday": [ 29, 4, 10, 15 ],
            "wednesday": [ 26, 3, 9, 15 ],
            "thursday": [ 25, 2, 8, 14 ],
            "saturday": [ 26, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=245005884/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://luakabop.bandcamp.com/album/brazil-classics-6-beleza-tropical-2-novo-mais-melhor',
          a_string: 'Brazil Classics 6: Beleza Tropical 2: Novo! Mais! Melhor! by Luaka Bop',
          rule: {
            "monday": [ 27, 2, 8, 14 ],
            "tuesday": [ 31, 6, 12, 18 ],
            "wednesday": [ 30, 5, 11, 16 ],
            "thursday": [ 27, 4, 10, 16 ],
            "saturday": [ 26, 3, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1806774964/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zomvrilla.bandcamp.com/album/lullaby-for-a-mirror',
          a_string: 'Lullaby For A Mirror by Zomvrilla',
          rule: {
            "monday": [ 26, 3, 9, 15 ],
            "tuesday": [ 27, 2, 8, 14 ],
            "wednesday": [ 31, 6, 12, 18 ],
            "thursday": [ 30, 5, 11, 16 ],
            "saturday": [ 27, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1839852229/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zomvrilla.bandcamp.com/album/ilha-do-limbo',
          a_string: 'Ilha do Limbo by Zomvrilla',
          rule: {
            "monday": [ 27, 4, 10, 16 ],
            "tuesday": [ 26, 3, 9, 15 ],
            "wednesday": [ 27, 2, 8, 14 ],
            "thursday": [ 31, 6, 12, 18 ],
            "saturday": [ 30, 5, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2296640708/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zomvrilla.bandcamp.com/album/6-leos-de-flores-preciosas',
          a_string: '6 Óleos de flores preciosas by Zomvrilla',
          rule: {
            "monday": [ 30, 5, 11, 16 ],
            "tuesday": [ 27, 4, 10, 16 ],
            "wednesday": [ 26, 3, 9, 15 ],
            "thursday": [ 27, 2, 8, 14 ],
            "saturday": [ 31, 6, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2603368333/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://madaboutrecordslabel.bandcamp.com/album/erlon-chaves-procura-se-uma-virgem-for-sale-in-august',
          a_string: 'Erlon Chaves &quot;Procura-se uma Virgem&quot; (for sale in August) by Erlon Chaves',
          rule: {
            "monday": [ 31, 6, 12, 18 ],
            "tuesday": [ 30, 5, 11, 16 ],
            "wednesday": [ 27, 4, 10, 16 ],
            "thursday": [ 26, 3, 9, 15 ],
            "saturday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=83326288/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nervosa-brazil.bandcamp.com/album/downfall-of-mankind',
          a_string: 'Downfall Of Mankind by Nervosa',
          rule: {
            "monday": [ 27, 2, 8, 14 ],
            "tuesday": [ 31, 6, 12, 18 ],
            "wednesday": [ 30, 5, 11, 16 ],
            "thursday": [ 27, 4, 10, 16 ],
            "saturday": [ 26, 3, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2337727748/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firefriend.bandcamp.com/album/yellow-spider',
          a_string: 'Yellow Spider by Firefriend',
          rule: {
            "monday": [ 26, 3, 9, 15 ],
            "tuesday": [ 27, 2, 8, 14 ],
            "wednesday": [ 31, 6, 12, 18 ],
            "thursday": [ 30, 5, 11, 16 ],
            "saturday": [ 27, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1884971035/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://neciorecords.bandcamp.com/album/rapa-nui-rigel-kentaur-nr-001',
          a_string: 'Rapa Nui - Rigel Kentaur [NR - 001] by Necio Records',
          rule: {
            "monday": [ 28, 5, 11, 17 ],
            "tuesday": [ 27, 4, 10, 16 ],
            "wednesday": [ 28, 3, 9, 15 ],
            "thursday": [ 1, 7, 13, 19 ],
            "saturday": [ 31, 6, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3575139770/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://neciorecords.bandcamp.com/album/cuadrado-negro-true-haters-nr-c-001',
          a_string: 'Cuadrado Negro - True Haters [NR-C/001] by Necio Records',
          rule: {
            "monday": [ 31, 6, 12, 17 ],
            "tuesday": [ 28, 5, 11, 17 ],
            "wednesday": [ 27, 4, 10, 16 ],
            "thursday": [ 28, 3, 9, 15 ],
            "saturday": [ 1, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1700410833/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://neciorecords.bandcamp.com/album/perpetuo-transcurrir-de-las-cosas-cintas-nr-c-002',
          a_string: 'Perpetuo transcurrir de las cosas - Cintas [NR - C/002] by Necio Records',
          rule: {
            "monday": [ 1, 7, 13, 19 ],
            "tuesday": [ 31, 6, 12, 17 ],
            "wednesday": [ 28, 5, 11, 17 ],
            "thursday": [ 27, 4, 10, 16 ],
            "saturday": [ 28, 3, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2268106322/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://satanicosmarihuanos.bandcamp.com/album/sat-nicos-marihuanos-i',
          a_string: 'Satánicos Marihuanos I by Satánicos Marihuanos',
          rule: {
            "monday": [ 28, 3, 9, 15 ],
            "tuesday": [ 1, 7, 13, 19 ],
            "wednesday": [ 31, 6, 12, 17 ],
            "thursday": [ 28, 5, 11, 17 ],
            "saturday": [ 27, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1156962889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fredclarke.bandcamp.com/album/nasca',
          a_string: 'Nasca by Ronald Sanchez &amp; Fred Clarke',
          rule: {
            "monday": [ 27, 4, 10, 16 ],
            "tuesday": [ 28, 3, 9, 15 ],
            "wednesday": [ 1, 7, 13, 19 ],
            "thursday": [ 31, 6, 12, 17 ],
            "saturday": [ 28, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1359562215/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kill-amigo.bandcamp.com/album/el-filin-ha-muerto',
          a_string: 'EL FILIN HA MUERTO by KILL AMIGO',
          rule: {
            "monday": [ 28, 5, 11, 17 ],
            "tuesday": [ 27, 4, 10, 16 ],
            "wednesday": [ 28, 3, 9, 15 ],
            "thursday": [ 1, 7, 13, 19 ],
            "saturday": [ 31, 6, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3997040447/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ansiedaed.bandcamp.com/album/ansiedaed',
          a_string: 'ANSIEDAED by ANSIEDAED',
          rule: {
            "monday": [ 31, 6, 12, 17 ],
            "tuesday": [ 28, 5, 11, 17 ],
            "wednesday": [ 27, 4, 10, 16 ],
            "thursday": [ 28, 3, 9, 15 ],
            "saturday": [ 1, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2013281606/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vhslogos.bandcamp.com/album/mantra',
          a_string: 'Mantra by VHS LOGOS',
          rule: {
            "monday": [ 2, 8, 14, 20 ],
            "tuesday": [ 1, 7, 13, 18 ],
            "wednesday": [ 29, 6, 12, 18 ],
            "thursday": [ 28, 5, 11, 17 ],
            "saturday": [ 29, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=468808540/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://loomerband.bandcamp.com/album/coward-soul',
          a_string: 'Coward Soul by Loomer',
          rule: {
            "monday": [ 29, 4, 10, 16 ],
            "tuesday": [ 2, 8, 14, 20 ],
            "wednesday": [ 1, 7, 13, 18 ],
            "thursday": [ 29, 6, 12, 18 ],
            "saturday": [ 28, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3439862810/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maisumdiscos.bandcamp.com/album/real-rio-rock-pop-noise-and-electronic-music-from-rio-de-janeiro-2cd-30-tracks-5',
          a_string: 'Real Rio: rock, pop, noise and electronic music from Rio de Janeiro (2CD - 30 tracks - £5) by Various Artists',
          rule: {
            "monday": [ 28, 5, 11, 17 ],
            "tuesday": [ 29, 4, 10, 16 ],
            "wednesday": [ 2, 8, 14, 20 ],
            "thursday": [ 1, 7, 13, 18 ],
            "saturday": [ 29, 6, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3227089762/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chinesecookiepoets.bandcamp.com/album/chinese-cookie-poets-ep',
          a_string: 'Chinese Cookie Poets EP by Chinese Cookie Poets',
          rule: {
            "monday": [ 29, 6, 12, 18 ],
            "tuesday": [ 28, 5, 11, 17 ],
            "wednesday": [ 29, 4, 10, 16 ],
            "thursday": [ 2, 8, 14, 20 ],
            "saturday": [ 1, 7, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2130893271/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bemonio.bandcamp.com/album/opus-dei-live',
          a_string: 'OPUS DEI (live) by OPUS DEI',
          rule: {
            "monday": [ 1, 7, 13, 18 ],
            "tuesday": [ 29, 6, 12, 18 ],
            "wednesday": [ 28, 5, 11, 17 ],
            "thursday": [ 29, 4, 10, 16 ],
            "saturday": [ 2, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3608705339/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quintavant.bandcamp.com/album/qtv-001-hey-babe',
          a_string: 'QTV 001 – Hey Babe by Baby Hitler',
          rule: {
            "monday": [ 2, 8, 14, 20 ],
            "tuesday": [ 1, 7, 13, 18 ],
            "wednesday": [ 29, 6, 12, 18 ],
            "thursday": [ 28, 5, 11, 17 ],
            "saturday": [ 29, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3897001071/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quintavant.bandcamp.com/album/qtv-013-anganga',
          a_string: 'QTV 013 – Anganga by Juçara Marçal &amp; Cadu Tenório',
          rule: {
            "monday": [ 29, 4, 10, 16 ],
            "tuesday": [ 2, 8, 14, 20 ],
            "wednesday": [ 1, 7, 13, 18 ],
            "thursday": [ 29, 6, 12, 18 ],
            "saturday": [ 28, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=960816160/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quintavant.bandcamp.com/album/qtv023-espectro',
          a_string: 'QTV023 – Espectro by Tantão e os Fita',
          rule: {
            "monday": [ 29, 6, 12, 18 ],
            "tuesday": [ 30, 5, 11, 17 ],
            "wednesday": [ 3, 9, 15, 21 ],
            "thursday": [ 2, 8, 14, 19 ],
            "saturday": [ 30, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3226077073/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/traffic-sound-virgin-peru-psych-rock-masterpiece-1970',
          a_string: 'Traffic Sound - Virgin (Peru Psych Rock Masterpiece) (1970) by Traffic Sound',
          rule: {
            "monday": [ 30, 7, 13, 19 ],
            "tuesday": [ 29, 6, 12, 18 ],
            "wednesday": [ 30, 5, 11, 17 ],
            "thursday": [ 3, 9, 15, 21 ],
            "saturday": [ 2, 8, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2348428476/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/tarkus-peru-argentina-psych-heavy-rock-masterpiece-this-is-a-blast-1972',
          a_string: 'Tarkus (Peru Argentina Psych Heavy Rock Masterpiece) This is a blast ! (1972) by Tarkus',
          rule: {
            "monday": [ 2, 8, 14, 19 ],
            "tuesday": [ 30, 7, 13, 19 ],
            "wednesday": [ 29, 6, 12, 18 ],
            "thursday": [ 30, 5, 11, 17 ],
            "saturday": [ 3, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4250216082/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/kim-jung-mi-now-1973-korean-female-psych-folk',
          a_string: 'Kim Jung Mi &quot;Now&quot; (1973 Korean Female Psych Folk) by Kim Jung Mi (w/. Shin Joong Hyun)',
          rule: {
            "monday": [ 3, 9, 15, 21 ],
            "tuesday": [ 2, 8, 14, 19 ],
            "wednesday": [ 30, 7, 13, 19 ],
            "thursday": [ 29, 6, 12, 18 ],
            "saturday": [ 30, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1761194515/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/nils-jazz-ensemble-latin-jazz-funk-soul-killer-album-1976',
          a_string: 'Nils Jazz Ensemble (Latin Jazz - Funk Soul) Killer album (1976) by Nil&#39;s Jazz Ensemble',
          rule: {
            "monday": [ 30, 5, 11, 17 ],
            "tuesday": [ 3, 9, 15, 21 ],
            "wednesday": [ 2, 8, 14, 19 ],
            "thursday": [ 30, 7, 13, 19 ],
            "saturday": [ 29, 6, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1311532989/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/laurence-vanay-galaxies-1974-female-french-folk-jazz-rock-experimental',
          a_string: 'Laurence Vanay - Galaxies (1974 Female French Folk Jazz Rock Experimental) by Laurence Vanay',
          rule: {
            "monday": [ 29, 6, 12, 18 ],
            "tuesday": [ 30, 5, 11, 17 ],
            "wednesday": [ 3, 9, 15, 21 ],
            "thursday": [ 2, 8, 14, 19 ],
            "saturday": [ 30, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3075855525/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/mag-all-stars-mambo-descarga-guaracha-cumbias-50s-y-60s-vol-1',
          a_string: 'Mag All Stars (Mambo Descarga Guaracha Cumbias 50&#39;s y 60&#39;s) Vol 1. by Mag All Stars',
          rule: {
            "monday": [ 30, 7, 13, 19 ],
            "tuesday": [ 29, 6, 12, 18 ],
            "wednesday": [ 30, 5, 11, 17 ],
            "thursday": [ 3, 9, 15, 21 ],
            "saturday": [ 2, 8, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1744243940/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/mazo-mentenegra-doom-heavy-rock-lima-peru-1987',
          a_string: 'MAZO: Mentenegra (Doom Heavy Rock Lima Peru 1987) by MAZO',
          rule: {
            "monday": [ 3, 9, 15, 20 ],
            "tuesday": [ 31, 8, 14, 20 ],
            "wednesday": [ 30, 7, 13, 19 ],
            "thursday": [ 31, 6, 12, 18 ],
            "saturday": [ 4, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4209997604/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/los-diamantes-de-llacta-single-folkways-folk-huayno-carnaval-cusco-peru-1971',
          a_string: 'Los Diamantes de Llacta single (Folkways * Folk Huayno * Carnaval Cusco Peru 1971) by Los Diamantes de Llacta (Cusco)',
          rule: {
            "monday": [ 4, 10, 16, 22 ],
            "tuesday": [ 3, 9, 15, 20 ],
            "wednesday": [ 31, 8, 14, 20 ],
            "thursday": [ 30, 7, 13, 19 ],
            "saturday": [ 31, 6, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2610071884/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/beto-villena-singles-suavecito-monica-latin-soul-guajira-descarga-peru-72',
          a_string: 'Beto Villena singles: Suavecito / Monica (Latin Soul * Guajira Descarga Peru &#39;72) by Beto Villena y su mensaje',
          rule: {
            "monday": [ 31, 6, 12, 18 ],
            "tuesday": [ 4, 10, 16, 22 ],
            "wednesday": [ 3, 9, 15, 20 ],
            "thursday": [ 31, 8, 14, 20 ],
            "saturday": [ 30, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1740268148/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/al-valdes-jr-single-oye-como-va-latin-descarga-boogaloo-guaguanco-peru-65-killer',
          a_string: 'Al Valdes Jr. single: Oye como va (Latin Descarga * Boogaloo Guaguanco Peru &#39;65) KILLER !!! by Al Valdes Jr. y su conjunto',
          rule: {
            "monday": [ 30, 7, 13, 19 ],
            "tuesday": [ 31, 6, 12, 18 ],
            "wednesday": [ 4, 10, 16, 22 ],
            "thursday": [ 3, 9, 15, 20 ],
            "saturday": [ 31, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2577618082/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/los-yorks-single-peruvian-garage-wild-killer-psych-rock-1968',
          a_string: 'Los York&#39;s single: Peruvian Garage Wild * Killer Psych Rock 1968 by Los York&#39;s',
          rule: {
            "monday": [ 31, 8, 14, 20 ],
            "tuesday": [ 30, 7, 13, 19 ],
            "wednesday": [ 31, 6, 12, 18 ],
            "thursday": [ 4, 10, 16, 22 ],
            "saturday": [ 3, 9, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4080612337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/smog-single-peruvian-heavy-psych-wild-dangerous-space-rock-1972',
          a_string: 'SMOG single: Peruvian heavy psych * wild dangerous * space rock 1972 by SMOG',
          rule: {
            "monday": [ 3, 9, 15, 20 ],
            "tuesday": [ 31, 8, 14, 20 ],
            "wednesday": [ 30, 7, 13, 19 ],
            "thursday": [ 31, 6, 12, 18 ],
            "saturday": [ 4, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1085471559/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/laghonia-single-world-full-of-nuts-psych-rock-1972-non-lp-tracks-killer',
          a_string: 'Laghonia single: World full of nuts (Psych Rock) (1972) NON LP TRACKS KILLER by Laghonia',
          rule: {
            "monday": [ 4, 10, 16, 22 ],
            "tuesday": [ 3, 9, 15, 20 ],
            "wednesday": [ 31, 8, 14, 20 ],
            "thursday": [ 30, 7, 13, 19 ],
            "saturday": [ 31, 6, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1473087841/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/mag-all-stars-latin-jazz-blues-boogaloo-peru-60s-vol-4',
          a_string: 'MAG ALL STARS (Latin Jazz Blues Boogaloo PERU 60&#39;s) - Vol 4 by MAG ALL STARS',
          rule: {
            "monday": [ 1, 7, 13, 19 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 4, 10, 16, 21 ],
            "thursday": [ 1, 9, 15, 21 ],
            "saturday": [ 31, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1348766996/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/ptarmigan-canada-1972-acoustic-folk-psych-rock',
          a_string: 'Ptarmigan (Canada 1972 * Acoustic Folk Psych Rock) by Ptarmigan (Glen Dias and Monte Nordstrom)',
          rule: {
            "monday": [ 31, 8, 14, 20 ],
            "tuesday": [ 1, 7, 13, 19 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 4, 10, 16, 21 ],
            "saturday": [ 1, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3076197901/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/the-search-party-st-pius-x-seminary-choir-each-one-heard-us-1968-west-coast-xtian-folk',
          a_string: 'The Search Party * St. Pius X Seminary Choir &quot;Each One Heard...&quot; (US 1968 West Coast Xtian Folk) by The Search Party',
          rule: {
            "monday": [ 1, 9, 15, 21 ],
            "tuesday": [ 31, 8, 14, 20 ],
            "wednesday": [ 1, 7, 13, 19 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 4, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3663769440/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/bonus-1969-us-west-coast-psych-xtian-folk-female-rock',
          a_string: 'Bonus 1969 (US West Coast Psych * Xtian Folk * Female Rock) by The Search Party',
          rule: {
            "monday": [ 4, 10, 16, 21 ],
            "tuesday": [ 1, 9, 15, 21 ],
            "wednesday": [ 31, 8, 14, 20 ],
            "thursday": [ 1, 7, 13, 19 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1366857996/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/cold-waves-of-color-vol-4-uk-new-wave-post-punk-electronic-1981-1985',
          a_string: 'Cold Waves of Color * Vol 4 (UK new wave post punk electronic 1981​-​1985) by Various Artists: Cold Waves of Color',
          rule: {
            "monday": [ 5, 11, 17, 23 ],
            "tuesday": [ 4, 10, 16, 21 ],
            "wednesday": [ 1, 9, 15, 21 ],
            "thursday": [ 31, 8, 14, 20 ],
            "saturday": [ 1, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1386205957/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/the-search-party-montgomery-chapel-1969-us-west-coast-psych-female-xtian-folk-rock',
          a_string: 'The Search Party * Montgomery Chapel (1969 US West Coast Psych * Female Xtian Folk Rock) by The Search Party',
          rule: {
            "monday": [ 1, 7, 13, 19 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 4, 10, 16, 21 ],
            "thursday": [ 1, 9, 15, 21 ],
            "saturday": [ 31, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=853530802/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/recordando-la-nueva-ola-garage-psych-rock-peru-1967-1974-traffic-sound-telegraph-avenue-los-yorks-we-all-together-others-masterpiece',
          a_string: 'Recordando La Nueva Ola (Garage Psych Rock Peru 1967-1974) - Traffic Sound * Telegraph Avenue * Los York&#39;s * We all together + others MASTERPIECE by Various Artists (Recordando la nueva ola)',
          rule: {
            "monday": [ 31, 8, 14, 20 ],
            "tuesday": [ 1, 7, 13, 19 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 4, 10, 16, 21 ],
            "saturday": [ 1, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1454100427/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/boogaloo-sabroso-ep-peru-boogaloo-guaracha-cumbia-latin-60s',
          a_string: 'Boogaloo Sabroso EP (PERU Boogaloo Guaracha Cumbia Latin 60&#39;s) by Ñico Estrada y su Sonora',
          rule: {
            "monday": [ 2, 10, 16, 22 ],
            "tuesday": [ 1, 9, 15, 21 ],
            "wednesday": [ 2, 8, 14, 20 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=737220887/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/camaleon-ep-peru-latin-guaracha-hard-salsa-60shttp://repsych.bandcamp.com/album/camaleon-ep-peru-latin-guaracha-hard-salsa-60s',
          a_string: 'Camaleon EP (PERU Latin Guaracha Hard Salsa 60&#39;s) by Tito Chicoma y su Orquesta',
          rule: {
            "monday": [ 5, 11, 17, 22 ],
            "tuesday": [ 2, 10, 16, 22 ],
            "wednesday": [ 1, 9, 15, 21 ],
            "thursday": [ 2, 8, 14, 20 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4050647740/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/introducing-the-pompo-sound-peru-pompo-latin-guaracha-60s',
          a_string: 'Introducing the Pompo Sound (PERU Pompo Latin Guaracha 60&#39;s) by Mario Allison y su Combo',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 22 ],
            "wednesday": [ 2, 10, 16, 22 ],
            "thursday": [ 1, 9, 15, 21 ],
            "saturday": [ 2, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=530323485/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/los-silvertons-la-vuelta-peru-garage-surf-beat-rock-60s',
          a_string: 'Los Silverton&#39;s - La Vuelta (Peru Garage Surf Beat Rock 60&#39;s) by Los Silverton&#39;s',
          rule: {
            "monday": [ 2, 8, 14, 20 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 22 ],
            "thursday": [ 2, 10, 16, 22 ],
            "saturday": [ 1, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2518965220/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/isaiah-unreleased-demos-austria-psych-rock-prog-killer-tracks-1973-1977-master-piece',
          a_string: 'Isaiah - Unreleased demos (Austria Psych Rock Prog) KILLER TRACKS 1973 - 1977 * MASTER PIECE !!! by Isaiah',
          rule: {
            "monday": [ 1, 9, 15, 21 ],
            "tuesday": [ 2, 8, 14, 20 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 22 ],
            "saturday": [ 2, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1378068656/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/isaiah-s-t-austria-psych-rock-prog-lp-killer-1975-lp-master-piece',
          a_string: 'Isaiah S/T (Austria Psych Rock Prog LP) KILLER 1975 LP - MASTER PIECE !!! by Isaiah',
          rule: {
            "monday": [ 2, 10, 16, 22 ],
            "tuesday": [ 1, 9, 15, 21 ],
            "wednesday": [ 2, 8, 14, 20 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2965698237/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/gerhard-heinz-schamlos-soundtrack-soul-jazz-funk-psych-rock-austria-1968',
          a_string: 'Gerhard Heinz - Schamlos Soundtrack (Soul Jazz Funk - Psych Rock - Austria 1968 ) by Gerhard Heinz',
          rule: {
            "monday": [ 5, 11, 17, 22 ],
            "tuesday": [ 2, 10, 16, 22 ],
            "wednesday": [ 1, 9, 15, 21 ],
            "thursday": [ 2, 8, 14, 20 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1209161622/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/gerhard-heinz-geissel-des-fleisches-soundtrack-scat-vocal-jazz-exotica-library-austria-1965-draft',
          a_string: 'Gerhard Heinz ‎- Geissel Des Fleisches Soundtrack (Scat Vocal Jazz - Exotica Library - Austria 1965) (draft) by Gerhard Heinz',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 23 ],
            "wednesday": [ 3, 11, 17, 23 ],
            "thursday": [ 2, 10, 16, 22 ],
            "saturday": [ 3, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=44899947/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/mamblues-peru-latin-descarga-mambo-boogaloo-jala-jala-60s-killer',
          a_string: 'Mamblues (PERU Latin Descarga Mambo Boogaloo Jala Jala 60&#39;s) KILLER !! by Coco Lagos y sus Orates',
          rule: {
            "monday": [ 3, 9, 15, 21 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 23 ],
            "thursday": [ 3, 11, 17, 23 ],
            "saturday": [ 2, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=255130136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/tito-chicomas-boogaloo-peru-boogaloo-descarga-sax-latin-killer-ep',
          a_string: 'Tito Chicoma&#39;s Boogaloo (PERU Boogaloo Descarga Sax Latin) KILLER EP ! by Tito Chicoma y su Orquesta',
          rule: {
            "monday": [ 2, 10, 16, 22 ],
            "tuesday": [ 3, 9, 15, 21 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 23 ],
            "saturday": [ 3, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2587400384/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/fiesta-en-el-barrio-ep-peru-descarga-jala-jala-boogaloo-latin-60s',
          a_string: 'Fiesta en el barrio EP (PERU Descarga Jala Jala Boogaloo Latin 60&#39;s) by Carlos Muñoz y su Orquesta',
          rule: {
            "monday": [ 3, 11, 17, 23 ],
            "tuesday": [ 2, 10, 16, 22 ],
            "wednesday": [ 3, 9, 15, 21 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2249569107/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/silbando-ep-peru-latin-guaracha-guajira-descarga-60s',
          a_string: 'Silbando EP (PERU Latin Guaracha Guajira Descarga 60&#39;s) by Silvestre Montes y sus Guantanameros',
          rule: {
            "monday": [ 6, 12, 18, 23 ],
            "tuesday": [ 3, 11, 17, 23 ],
            "wednesday": [ 2, 10, 16, 22 ],
            "thursday": [ 3, 9, 15, 21 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2260147828/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/astoria-jazz-club-ep-peru-50s-jazz-blues-acid-cabaret-style-orchestra',
          a_string: 'Astoria Jazz Club EP (Peru 50&#39;s Jazz Blues Acid Cabaret Style Orchestra) by Astoria Jazz Club',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 23 ],
            "wednesday": [ 3, 11, 17, 23 ],
            "thursday": [ 2, 10, 16, 22 ],
            "saturday": [ 3, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3189468635/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/peruvian-psychedelic-rock-vol-3-1965-1971',
          a_string: 'Peruvian Psychedelic Rock - Vol 3 (1965-1971) by Various Artists',
          rule: {
            "monday": [ 3, 9, 15, 21 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 23 ],
            "thursday": [ 3, 11, 17, 23 ],
            "saturday": [ 2, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3311226516/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/los-yorks-67-peru-garage-rock-wild-beat-1967',
          a_string: 'Los York&#39;s &#39;67 (Peru Garage Rock Wild Beat) 1967 by Los York&#39;s',
          rule: {
            "monday": [ 3, 11, 17, 23 ],
            "tuesday": [ 4, 10, 16, 22 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 4, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1822686084/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/los-yorks-69-peru-garage-rock-fuzz-wild-crazy-melcochita-1969',
          a_string: 'Los York&#39;s &#39;69 (Peru Garage Rock Fuzz Wild Crazy Melcochita) 1969 by Los York&#39;s',
          rule: {
            "monday": [ 4, 12, 18, 24 ],
            "tuesday": [ 3, 11, 17, 23 ],
            "wednesday": [ 4, 10, 16, 22 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3378209747/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/laghonia-the-new-juggler-sound-rock-beat-garage-fuzz-60s-peru-1965-1969',
          a_string: 'Laghonia - The New Juggler Sound (Rock Beat Garage Fuzz 60&#39;s PERU) (1965-1969) by Laghonia - The New Juggler Sound',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 4, 12, 18, 24 ],
            "wednesday": [ 3, 11, 17, 23 ],
            "thursday": [ 4, 10, 16, 22 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2665303563/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/the-mads-en-concierto-peru-psych-rock-wild-live-1969',
          a_string: 'The Mad&#39;s - En concierto (Peru Psych Rock Wild - LIVE !) (1969) by The Mad&#39;s',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 4, 12, 18, 24 ],
            "thursday": [ 3, 11, 17, 23 ],
            "saturday": [ 4, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1807348043/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/ecuacion-purpura-70s-peru-latin-funk-soul-rock',
          a_string: 'Ecuacion Purpura (70&#39;s Peru Latin Funk - Soul Rock) by Ecuacion Purpura',
          rule: {
            "monday": [ 4, 10, 16, 22 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 4, 12, 18, 24 ],
            "saturday": [ 3, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1948892528/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/freddy-roland-la-danza-de-la-chiva-cumbia-peru-60s-afro-roots-latin-sax-descarga',
          a_string: 'Freddy Roland &quot;La danza de la chiva&quot; (Cumbia Peru 60&#39;s Afro Roots * Latin Sax Descarga) by Freddy Roland',
          rule: {
            "monday": [ 3, 11, 17, 23 ],
            "tuesday": [ 4, 10, 16, 22 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 4, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3976533638/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/guaranguito-peru-70s-afro-andean-cumbia-roots-breaks-sax-percussions-dj-samples',
          a_string: 'Guaranguito (Peru 70&#39;s Afro Andean Cumbia Roots Breaks - Sax &amp; Percussions - DJ Samples) by Los Ases de Huarochiri',
          rule: {
            "monday": [ 4, 12, 18, 24 ],
            "tuesday": [ 3, 11, 17, 23 ],
            "wednesday": [ 4, 10, 16, 22 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2231993916/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/ritmo-veregua-peru-60s-afro-boogaloo-descarga-latin-mambo-roots-guaracha',
          a_string: 'Ritmo Veregua (Peru 60s Afro Boogaloo Descarga Latin Mambo Roots Guaracha) by Tito Chicoma y orquesta',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 5, 13, 19, 25 ],
            "wednesday": [ 4, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2793565097/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/la-super-onda-vol-2-peru-latin-funk-soul-jazz-70s',
          a_string: 'La Super Onda - Vol. 2 (Peru Latin Funk - Soul Jazz 70&#39;s) by Various Artists - La Onda',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 5, 13, 19, 25 ],
            "thursday": [ 4, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=508122555/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/la-super-onda-vol-1-peru-latin-psych-rock-tropical-70s',
          a_string: 'La Super Onda - Vol. 1 (Peru Latin Psych - Rock Tropical 70&#39;s) by Various Artists - La Onda',
          rule: {
            "monday": [ 5, 11, 17, 23 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 5, 13, 19, 25 ],
            "saturday": [ 4, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3231574387/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/el-pito-descarga-latin-jazz-salsa-70s-ep',
          a_string: 'El Pito (Descarga Latin Jazz Salsa 70&#39;s EP) by Nilo Espinosa y su Orquesta',
          rule: {
            "monday": [ 4, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 5, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=766102338/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/la-sonaramica-de-mario-allison-peru-latin-hard-salsa-boogaloo-descarga-70s',
          a_string: 'La Sonaramica de Mario Allison (Peru Latin Hard Salsa - Boogaloo Descarga 70&#39;s) by La Sonaramica de Mario Allison',
          rule: {
            "monday": [ 5, 13, 19, 25 ],
            "tuesday": [ 4, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1850805014/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/otto-de-rojas-bump-bump-peru-latin-funk-soul-1976-groovy-jazz-disco-dj-dancefloor-non-lp-tracks',
          a_string: 'Otto de Rojas - Bump bump (Peru Latin Funk Soul 1976 Groovy Jazz Disco DJ Dancefloor) NON LP TRACKS ! by Otto de Rojas y Los Ultra &#39;76',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 5, 13, 19, 25 ],
            "wednesday": [ 4, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3645752227/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/los-ases-de-huarochiri-peru-70s-afro-cumbia-roots-breaks-sax-percussions-dj-samples',
          a_string: 'Los Ases de Huarochiri (Peru 70&#39;s Afro Cumbia Roots Breaks - Sax &amp; Percussions - DJ Samples) by Los Ases de Huarochiri',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 5, 13, 19, 25 ],
            "thursday": [ 4, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2990243365/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/la-mermelada-desesperado-cumbia-fuzz-peru-early-80s',
          a_string: 'La Mermelada - Desesperado (Cumbia Fuzz Peru Early 80&#39;s) by La Mermelada',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 6, 14, 20, 26 ],
            "saturday": [ 5, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3485141576/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/el-cuarteto-universal-luna-de-miel-cumbia-peru-early-80s',
          a_string: 'El Cuarteto Universal - Luna de miel (Cumbia Peru Early 80&#39;s) by El Cuarteto Universal',
          rule: {
            "monday": [ 5, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 6, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=278202744/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/la-mermelada-fatalidad-cumbia-peru-early-80s',
          a_string: 'La Mermelada - Fatalidad (Cumbia Peru Early 80&#39;s) by La Mermelada',
          rule: {
            "monday": [ 6, 14, 20, 26 ],
            "tuesday": [ 5, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4084165230/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/los-shapis-el-aguajal-cumbia-peru-early-80s-masterpiece',
          a_string: 'Los Shapis - El Aguajal (Cumbia Peru Early 80&#39;s MASTERPIECE) by Los Shapis',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 6, 14, 20, 26 ],
            "wednesday": [ 5, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=139428827/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/bugalu-boogaloo-ep',
          a_string: 'BUGALU (Boogaloo EP) by Nilo Espinosa y Orquesta',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 6, 14, 20, 26 ],
            "thursday": [ 5, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1057214631/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/an-mala-peruvian-female-experimental-indie-electronic-avante-garde-psych-rock-instrumental-theremin',
          a_string: 'Anómala (Peruvian Female * Experimental Indie * Electronic Avante Garde * Psych Rock * Instrumental Theremin) by Veronik',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 6, 14, 20, 26 ],
            "saturday": [ 5, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1053573764/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/somebody-groovy-vol-3-soft-rock-france-canada-argentina-korea-60s-70s',
          a_string: 'Somebody Groovy - Vol 3 (Soft Rock France, Canada, Argentina, Korea 60&#39;s &amp; 70&#39;s) by Various Artists',
          rule: {
            "monday": [ 5, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 6, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2859670779/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/somebody-groovy-vol-1-garage-rock-canada-france-korea-argentina-60s-70s',
          a_string: 'Somebody Groovy - Vol 1 (Garage Rock Canada, France, Korea, Argentina - 60&#39;s &amp; 70&#39;s) by Various Artists',
          rule: {
            "monday": [ 7, 15, 21, 27 ],
            "tuesday": [ 6, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1167131662/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/somebody-groovy-vol-2-psych-rock-canada-france-argentina-korea-usa-60s-70s',
          a_string: 'Somebody Groovy - Vol 2 (Psych Rock Canada, France, Argentina, Korea, USA, 60&#39;s &amp; 70&#39;s) by Various artists',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 7, 15, 21, 27 ],
            "wednesday": [ 6, 14, 20, 26 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2796527984/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/laurence-vanay-glaciers-interdits-70s-soundtrack-instrumental-experimental-rock-female-french-beautiful-ballad',
          a_string: 'Laurence Vanay - Glaciers interdits (70s soundtrack instrumental experimental rock female french + beautiful ballad) by Laurence Vanay',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 7, 15, 21, 27 ],
            "thursday": [ 6, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2116574588/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/laurence-vanay-petit-prince-female-french-experimental-pop-80s',
          a_string: 'Laurence Vanay - Petit Prince (Female French Experimental Pop 80&#39;s) by Laurence Vanay',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 7, 15, 21, 27 ],
            "saturday": [ 6, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4123030944/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/mystery-plane-graveyard-ep-80s-uk-new-wave-electro-beat-post-punk',
          a_string: 'Mystery Plane - Graveyard EP (80&#39;s UK New Wave - Electro Beat - Post Punk) by Mystery Plane',
          rule: {
            "monday": [ 6, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 7, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3016275840/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/laurence-vanay-la-petite-fenetre-70s-female-french-jazz-rock-experimental-instrumental',
          a_string: 'Laurence Vanay - La petite fenetre (70&#39;s Female French Jazz Rock Experimental Instrumental) by Laurence Vanay',
          rule: {
            "monday": [ 7, 15, 21, 27 ],
            "tuesday": [ 6, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=675487511/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/laurence-vanay-les-soleils-de-la-vie-70s-female-french-jazz-rock-experimental-instrumental',
          a_string: 'Laurence Vanay - Les Soleils de la Vie (70&#39;s Female French Jazz Rock Experimental Instrumental) by Laurence Vanay',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 7, 15, 21, 27 ],
            "wednesday": [ 6, 14, 20, 26 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=76674843/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/cold-waves-of-color-vol-3-uk-new-wave-post-punk-electronic-1981-1985',
          a_string: 'Cold Waves of Color * Vol 3 (UK new wave post punk electronic 1981​-​1985) by Various Artists: Cold Waves of Color',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 8, 16, 22, 28 ],
            "thursday": [ 7, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2455310735/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/mystery-plane-still-life-1981-uk-new-wave-electro-beat-post-punk',
          a_string: 'Mystery Plane - Still Life (1981 UK New Wave - Electro Beat - Post Punk) by Mystery Plane',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 8, 16, 22, 28 ],
            "saturday": [ 7, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2632322669/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/innovations-seabird-peruvian-1977-new-wave-synth-pop-soft-pop-rock-we-all-together-related',
          a_string: 'Innovations: Seabird (Peruvian 1977 New Wave * Synth Pop * Soft Pop Rock - We all together related) by Innovations',
          rule: {
            "monday": [ 7, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 8, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3178656393/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://repsych.bandcamp.com/album/nrg-canada-garage-rhythm-blues-psych-gaiety-recs-60s',
          a_string: 'NRG (Canada Garage Rhythm &amp; Blues Psych Gaiety Recs) 60&#39;s by NRG',
          rule: {
            "monday": [ 8, 16, 22, 28 ],
            "tuesday": [ 7, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('december_musics_id_seq', (SELECT MAX(id) FROM december_musics));");
    });
};
