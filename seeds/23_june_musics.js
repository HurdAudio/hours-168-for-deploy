'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('june_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('june_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2576718619/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lowpoint.bandcamp.com/album/bring-me-the-head-of-kyle-bobby-dunn',
          a_string: 'Bring Me The Head of Kyle Bobby Dunn by Kyle Bobby Dunn',
          rule: {
            "monday": [ 30, 4, 10, 21 ],
            "tuesday": [ 29, 3, 9, 20 ],
            "wednesday": [ 28, 2, 8, 19 ],
            "thursday": [ 27, 1, 7, 18 ],
            "saturday": [ 1, 5, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=399680356/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ruralcolours.bandcamp.com/album/peace',
          a_string: 'Peace by Guenter Schlienz',
          rule: {
            "monday": [ 1, 5, 11, 22 ],
            "tuesday": [ 30, 4, 10, 21 ],
            "wednesday": [ 29, 3, 9, 20 ],
            "thursday": [ 28, 2, 8, 19 ],
            "saturday": [ 27, 1, 7, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=782987008/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bingsatellites.bandcamp.com/album/song-of-the-hummingbird',
          a_string: 'Song of the Hummingbird by Bing Satellites',
          rule: {
            "monday": [ 27, 1, 7, 18 ],
            "tuesday": [ 1, 5, 11, 22 ],
            "wednesday": [ 30, 4, 10, 21 ],
            "thursday": [ 29, 3, 9, 20 ],
            "saturday": [ 28, 2, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3514634362/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timhecker.bandcamp.com/album/love-streams',
          a_string: 'Love Streams by Tim Hecker',
          rule: {
            "monday": [ 28, 2, 8, 19 ],
            "tuesday": [ 27, 1, 7, 18 ],
            "wednesday": [ 1, 5, 11, 22 ],
            "thursday": [ 30, 4, 10, 21 ],
            "saturday": [ 29, 3, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1112581834/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sonicmeditations.bandcamp.com/album/exquisite-lust',
          a_string: 'Exquisite Lust by Expo 70',
          rule: {
            "monday": [ 29, 3, 9, 20 ],
            "tuesday": [ 28, 2, 8, 19 ],
            "wednesday": [ 27, 1, 7, 18 ],
            "thursday": [ 1, 5, 11, 22 ],
            "saturday": [ 30, 4, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3966425461/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://omahara.bandcamp.com/album/omahara-3',
          a_string: 'Omahara by Omahara',
          rule: {
            "monday": [ 30, 4, 10, 21 ],
            "tuesday": [ 29, 3, 9, 20 ],
            "wednesday": [ 28, 2, 8, 19 ],
            "thursday": [ 27, 1, 7, 18 ],
            "saturday": [ 1, 5, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1246693833/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://phillniblock.bandcamp.com/album/touch-five',
          a_string: 'Touch Five by Phill Niblock',
          rule: {
            "monday": [ 2, 6, 12, 23 ],
            "tuesday": [ 1, 5, 11, 22 ],
            "wednesday": [ 30, 4, 9, 21 ],
            "thursday": [ 29, 3, 9, 20 ],
            "saturday": [ 28, 2, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3218298308/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://helenscarsdale.bandcamp.com/album/spots-in-the-sun',
          a_string: 'spots in the sun by matt shoemaker',
          rule: {
            "monday": [ 28, 2, 8, 19 ],
            "tuesday": [ 2, 6, 12, 23 ],
            "wednesday": [ 1, 5, 11, 22 ],
            "thursday": [ 30, 4, 9, 21 ],
            "saturday": [ 29, 3, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=475957477/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://helenscarsdale.bandcamp.com/album/surrender-render-end',
          a_string: 'surrender, render, end by francisco meirino',
          rule: {
            "monday": [ 29, 3, 9, 20 ],
            "tuesday": [ 28, 2, 8, 19 ],
            "wednesday": [ 2, 6, 12, 23 ],
            "thursday": [ 1, 5, 11, 22 ],
            "saturday": [ 30, 4, 9, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1254767643/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kylebobbydunn.bandcamp.com/album/in-miserum-stercus',
          a_string: 'In Miserum Stercus by Kyle Bobby Dunn',
          rule: {
            "monday": [ 30, 4, 9, 21 ],
            "tuesday": [ 29, 3, 9, 20 ],
            "wednesday": [ 28, 2, 8, 19 ],
            "thursday": [ 2, 6, 12, 23 ],
            "saturday": [ 1, 5, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2347154279/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eileanrec.bandcamp.com/album/stay-sea',
          a_string: 'Stay / Sea by HolyKindOf',
          rule: {
            "monday": [ 1, 5, 11, 22 ],
            "tuesday": [ 30, 4, 9, 21 ],
            "wednesday": [ 29, 3, 9, 20 ],
            "thursday": [ 28, 2, 8, 19 ],
            "saturday": [ 2, 6, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2922557334/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lowpoint.bandcamp.com/album/glisten',
          a_string: 'Glisten by Tim Catlin &amp; Machinefabriek',
          rule: {
            "monday": [ 2, 6, 12, 23 ],
            "tuesday": [ 1, 5, 11, 22 ],
            "wednesday": [ 30, 4, 9, 21 ],
            "thursday": [ 29, 3, 9, 20 ],
            "saturday": [ 28, 2, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=315244532/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://itsnotyouitsme.bandcamp.com/album/this-i-featuring-theo-bleckmann-sk-li-sverrisson',
          a_string: 'This I (featuring Theo Bleckmann &amp; Skúli Sverrisson) by itsnotyouitsme',
          rule: {
            "monday": [ 28, 2, 8, 19 ],
            "tuesday": [ 2, 6, 12, 23 ],
            "wednesday": [ 1, 5, 11, 22 ],
            "thursday": [ 30, 4, 9, 21 ],
            "saturday": [ 29, 3, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2093749474/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timhecker.bandcamp.com/album/virgins-paper-bag-edition',
          a_string: 'Virgins (Paper Bag edition) by Tim Hecker',
          rule: {
            "monday": [ 30, 4, 10, 21 ],
            "tuesday": [ 29, 3, 9, 20 ],
            "wednesday": [ 3, 7, 13, 24 ],
            "thursday": [ 2, 6, 12, 23 ],
            "saturday": [ 1, 5, 10, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3270291878/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dronarivm.bandcamp.com/album/open-to-the-sea',
          a_string: 'Open To The Sea by Enrico Coniglio &amp; Matteo Uggeri',
          rule: {
            "monday": [ 1, 5, 10, 22 ],
            "tuesday": [ 30, 4, 10, 21 ],
            "wednesday": [ 29, 3, 9, 20 ],
            "thursday": [ 3, 7, 13, 24 ],
            "saturday": [ 2, 6, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1040093344/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://phillniblock.bandcamp.com/album/touch-works-for-hurdy-gurdy-and-voice',
          a_string: 'Touch Works, for Hurdy Gurdy and Voice by Phill Niblock',
          rule: {
            "monday": [ 2, 6, 12, 23 ],
            "tuesday": [ 1, 5, 10, 22 ],
            "wednesday": [ 30, 4, 10, 21 ],
            "thursday": [ 29, 3, 9, 20 ],
            "saturday": [ 3, 7, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2056492879/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orphax.bandcamp.com/album/dream-sequence-4',
          a_string: 'Dream Sequence #4 by Orphax',
          rule: {
            "monday": [ 3, 7, 13, 24 ],
            "tuesday": [ 2, 6, 12, 23 ],
            "wednesday": [ 1, 5, 10, 22 ],
            "thursday": [ 30, 4, 10, 21 ],
            "saturday": [ 29, 7, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1381228377/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://assemblyfield.bandcamp.com/album/solarism',
          a_string: 'Solarism by Projektions',
          rule: {
            "monday": [ 29, 7, 9, 20 ],
            "tuesday": [ 3, 7, 13, 24 ],
            "wednesday": [ 2, 6, 12, 23 ],
            "thursday": [ 1, 5, 10, 22 ],
            "saturday": [ 30, 4, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1094705682/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://touch333.bandcamp.com/album/figueroa-terrace',
          a_string: 'Figueroa Terrace by Thomas Ankersmit',
          rule: {
            "monday": [ 30, 4, 10, 21 ],
            "tuesday": [ 29, 7, 9, 20 ],
            "wednesday": [ 3, 7, 13, 24 ],
            "thursday": [ 2, 6, 12, 23 ],
            "saturday": [ 1, 5, 10, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=644271494/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orenambarchi.bandcamp.com/album/live-knots',
          a_string: 'Live Knots by Oren Ambarchi',
          rule: {
            "monday": [ 1, 5, 10, 22 ],
            "tuesday": [ 30, 4, 10, 21 ],
            "wednesday": [ 29, 7, 9, 20 ],
            "thursday": [ 3, 7, 13, 24 ],
            "saturday": [ 2, 6, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3406973740/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emmanuelholterbach.bandcamp.com/album/trois-disques-p-les-pour-eliane-radigue',
          a_string: 'Trois Disques Pâles (pour Eliane Radigue) by Emmanuel Holterbach',
          rule: {
            "monday": [ 3, 7, 13, 23 ],
            "tuesday": [ 2, 6, 11, 23 ],
            "wednesday": [ 1, 5, 11, 22 ],
            "thursday": [ 30, 8, 10, 21 ],
            "saturday": [ 4, 8, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1703488108/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pioulard.bandcamp.com/album/lignin-poise',
          a_string: 'Lignin Poise by Benoît Pioulard',
          rule: {
            "monday": [ 4, 8, 14, 25 ],
            "tuesday": [ 3, 7, 13, 23 ],
            "wednesday": [ 2, 6, 11, 23 ],
            "thursday": [ 1, 5, 11, 22 ],
            "saturday": [ 30, 8, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=605498052/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://starsofthelid.bandcamp.com/album/and-their-refinement-of-the-decline',
          a_string: 'and their Refinement of the Decline by Stars of the Lid',
          rule: {
            "monday": [ 30, 8, 10, 21 ],
            "tuesday": [ 4, 8, 14, 25 ],
            "wednesday": [ 3, 7, 13, 23 ],
            "thursday": [ 2, 6, 11, 23 ],
            "saturday": [ 1, 5, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2983148247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://irisarri.bandcamp.com/album/seventeen-words',
          a_string: 'Seventeen Words by Gailes',
          rule: {
            "monday": [ 1, 5, 11, 22 ],
            "tuesday": [ 30, 8, 10, 21 ],
            "wednesday": [ 4, 8, 14, 25 ],
            "thursday": [ 3, 7, 13, 23 ],
            "saturday": [ 2, 6, 11, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1545097450/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oneohtrixpointnever1.bandcamp.com/album/rifts',
          a_string: 'Rifts by Oneohtrix Point Never',
          rule: {
            "monday": [ 2, 6, 11, 23 ],
            "tuesday": [ 1, 5, 11, 22 ],
            "wednesday": [ 30, 8, 10, 21 ],
            "thursday": [ 4, 8, 14, 25 ],
            "saturday": [ 3, 7, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=941299459/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://benfrost.bandcamp.com/album/black-marrow',
          a_string: 'Black Marrow by Ben Frost',
          rule: {
            "monday": [ 3, 7, 13, 23 ],
            "tuesday": [ 2, 6, 11, 23 ],
            "wednesday": [ 1, 5, 11, 22 ],
            "thursday": [ 30, 8, 10, 21 ],
            "saturday": [ 4, 8, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=547528775/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fennesz.bandcamp.com/album/mahler-remixed',
          a_string: 'Mahler Remixed by fennesz',
          rule: {
            "monday": [ 4, 8, 14, 25 ],
            "tuesday": [ 3, 7, 13, 23 ],
            "wednesday": [ 2, 6, 11, 23 ],
            "thursday": [ 1, 5, 11, 22 ],
            "saturday": [ 30, 8, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1616218889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kylebobbydunn.bandcamp.com/album/a-young-persons-guide-to-kyle-bobby-dunn',
          a_string: 'A Young Person&#39;s Guide To Kyle Bobby Dunn by Kyle Bobby Dunn',
          rule: {
            "monday": [ 1, 9, 11, 22 ],
            "tuesday": [ 5, 9, 15, 26 ],
            "wednesday": [ 4, 8, 14, 24 ],
            "thursday": [ 3, 7, 12, 24 ],
            "saturday": [ 2, 6, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3922067933/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://airtexture.bandcamp.com/album/air-texture-volume-i',
          a_string: 'Air Texture Volume I by Air Texture',
          rule: {
            "monday": [ 2, 6, 12, 23 ],
            "tuesday": [ 1, 9, 11, 22 ],
            "wednesday": [ 5, 9, 15, 26 ],
            "thursday": [ 4, 8, 14, 24 ],
            "saturday": [ 3, 7, 12, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1748224388/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://adambryanbaumwiltzie.bandcamp.com/album/travels-in-constants-vol-24',
          a_string: 'Travels in Constants Vol 24 by Adam Bryanbaum Wiltzie',
          rule: {
            "monday": [ 3, 7, 12, 24 ],
            "tuesday": [ 2, 6, 12, 23 ],
            "wednesday": [ 1, 9, 11, 22 ],
            "thursday": [ 5, 9, 15, 26 ],
            "saturday": [ 4, 8, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2315096369/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/four-full-flutes',
          a_string: 'Four Full Flutes by Phill Niblock',
          rule: {
            "monday": [ 4, 8, 14, 24 ],
            "tuesday": [ 3, 7, 12, 24 ],
            "wednesday": [ 2, 6, 12, 23 ],
            "thursday": [ 1, 9, 11, 22 ],
            "saturday": [ 5, 9, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1138670248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://slaapwel.bandcamp.com/album/silenne',
          a_string: 'Silenne by Simon Scott',
          rule: {
            "monday": [ 5, 9, 15, 26 ],
            "tuesday": [ 4, 8, 14, 24 ],
            "wednesday": [ 3, 7, 12, 24 ],
            "thursday": [ 2, 6, 12, 23 ],
            "saturday": [ 1, 9, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3024537233/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sonmi451.bandcamp.com/album/alice',
          a_string: 'Alice by Sonmi451',
          rule: {
            "monday": [ 1, 9, 11, 22 ],
            "tuesday": [ 5, 9, 15, 26 ],
            "wednesday": [ 4, 8, 14, 24 ],
            "thursday": [ 3, 7, 12, 24 ],
            "saturday": [ 2, 6, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1904128458/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brianconniffe.bandcamp.com/album/bornless-ep',
          a_string: 'Bornless EP by Brian Conniffe',
          rule: {
            "monday": [ 2, 6, 12, 23 ],
            "tuesday": [ 1, 9, 11, 22 ],
            "wednesday": [ 5, 9, 15, 26 ],
            "thursday": [ 4, 8, 14, 24 ],
            "saturday": [ 3, 7, 12, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=911509297/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timhecker.bandcamp.com/album/harmony-in-ultraviolet',
          a_string: 'Harmony In Ultraviolet by Tim Hecker',
          rule: {
            "monday": [ 4, 8, 13, 25 ],
            "tuesday": [ 3, 7, 13, 24 ],
            "wednesday": [ 2, 10, 12, 23 ],
            "thursday": [ 6, 10, 16, 27 ],
            "saturday": [ 5, 9, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2967472899/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kaitlynaureliasmith.bandcamp.com/album/frkwys-vol-13-sunergy',
          a_string: 'FRKWYS Vol. 13: Sunergy by Kaitlyn Aurelia Smith &amp; Suzanne Ciani',
          rule: {
            "monday": [ 5, 9, 15, 25 ],
            "tuesday": [ 4, 8, 13, 25 ],
            "wednesday": [ 3, 7, 13, 24 ],
            "thursday": [ 2, 10, 12, 23 ],
            "saturday": [ 6, 10, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=185406926/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://loscil.bandcamp.com/album/suns',
          a_string: 'Suns by loscil',
          rule: {
            "monday": [ 6, 10, 16, 27 ],
            "tuesday": [ 5, 9, 15, 25 ],
            "wednesday": [ 4, 8, 13, 25 ],
            "thursday": [ 3, 7, 13, 24 ],
            "saturday": [ 2, 10, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2018875982/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://huron.bandcamp.com/album/the-red-tape',
          a_string: 'the red tape by Huron',
          rule: {
            "monday": [ 2, 10, 12, 23 ],
            "tuesday": [ 6, 10, 16, 27 ],
            "wednesday": [ 5, 9, 15, 25 ],
            "thursday": [ 4, 8, 13, 25 ],
            "saturday": [ 3, 7, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2502611751/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xxchamxx.bandcamp.com/album/land-1',
          a_string: 'LAND #1 by CHAM',
          rule: {
            "monday": [ 3, 7, 13, 24 ],
            "tuesday": [ 2, 10, 12, 23 ],
            "wednesday": [ 6, 10, 16, 27 ],
            "thursday": [ 5, 9, 15, 25 ],
            "saturday": [ 4, 8, 13, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4286426371/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eileanrec.bandcamp.com/album/excavation',
          a_string: 'Excavation by Cicely Irvine',
          rule: {
            "monday": [ 4, 8, 13, 25 ],
            "tuesday": [ 3, 7, 13, 24 ],
            "wednesday": [ 2, 10, 12, 23 ],
            "thursday": [ 6, 10, 16, 27 ],
            "saturday": [ 5, 9, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=873660777/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dronarivm.bandcamp.com/album/branches',
          a_string: 'Branches by Cyril Secq / Orla Wren',
          rule: {
            "monday": [ 5, 9, 15, 25 ],
            "tuesday": [ 4, 8, 13, 25 ],
            "wednesday": [ 3, 7, 13, 24 ],
            "thursday": [ 2, 10, 12, 23 ],
            "saturday": [ 6, 10, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=382220642/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dronarivm.bandcamp.com/album/sinfonietta',
          a_string: 'Sinfonietta by Marsen Jules',
          rule: {
            "monday": [ 7, 11, 17, 28 ],
            "tuesday": [ 6, 10, 16, 26 ],
            "wednesday": [ 5, 9, 14, 26 ],
            "thursday": [ 4, 8, 14, 25 ],
            "saturday": [ 3, 11, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1445261392/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://forestswords.bandcamp.com/album/compassion',
          a_string: 'Compassion by Forest Swords',
          rule: {
            "monday": [ 3, 11, 13, 24 ],
            "tuesday": [ 7, 11, 17, 28 ],
            "wednesday": [ 6, 10, 16, 26 ],
            "thursday": [ 5, 9, 14, 26 ],
            "saturday": [ 4, 8, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=565792550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dreamcatalogue.bandcamp.com/album/--18',
          a_string: '新しい日の誕生 by 2814',
          rule: {
            "monday": [ 4, 8, 14, 25 ],
            "tuesday": [ 3, 11, 13, 24 ],
            "wednesday": [ 7, 11, 17, 28 ],
            "thursday": [ 6, 10, 16, 26 ],
            "saturday": [ 5, 9, 14, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1719169483/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://telepathtelepath.bandcamp.com/album/--42',
          a_string: '仮想夢女の子 by 仮想夢プラザ',
          rule: {
            "monday": [ 5, 9, 14, 26 ],
            "tuesday": [ 4, 8, 14, 25 ],
            "wednesday": [ 3, 11, 13, 24 ],
            "thursday": [ 7, 11, 17, 28 ],
            "saturday": [ 6, 10, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=867883367/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timhecker.bandcamp.com/album/ravedeath-1972',
          a_string: 'Ravedeath, 1972 by Tim Hecker',
          rule: {
            "monday": [ 6, 10, 16, 26 ],
            "tuesday": [ 5, 9, 14, 26 ],
            "wednesday": [ 4, 8, 14, 25 ],
            "thursday": [ 3, 11, 13, 24 ],
            "saturday": [ 7, 11, 17, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1248245268/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://necrodeathmort.bandcamp.com/album/overland',
          a_string: 'Overland by Necro Deathmort',
          rule: {
            "monday": [ 7, 11, 17, 28 ],
            "tuesday": [ 6, 10, 16, 26 ],
            "wednesday": [ 5, 9, 14, 26 ],
            "thursday": [ 4, 8, 14, 25 ],
            "saturday": [ 3, 11, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3828099932/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orphax.bandcamp.com/album/studies-in-dissonance',
          a_string: 'Studies in dissonance by Orphax',
          rule: {
            "monday": [ 3, 11, 13, 24 ],
            "tuesday": [ 7, 11, 17, 28 ],
            "wednesday": [ 6, 10, 16, 26 ],
            "thursday": [ 5, 9, 14, 26 ],
            "saturday": [ 4, 8, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2253300390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oceanographicrecords.bandcamp.com/album/modular',
          a_string: 'MODULAR by Matt Chamberlain, Viktor Krauss, and Dan Phelps',
          rule: {
            "monday": [ 5, 9, 15, 26 ],
            "tuesday": [ 4, 12, 14, 25 ],
            "wednesday": [ 8, 12, 18, 29 ],
            "thursday": [ 7, 11, 17, 27 ],
            "saturday": [ 6, 10, 15, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1073464636/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mysterybear.bandcamp.com/album/complex-silence-4',
          a_string: 'Complex Silence 4 by Dave Seidel',
          rule: {
            "monday": [ 6, 10, 15, 27 ],
            "tuesday": [ 5, 9, 15, 26 ],
            "wednesday": [ 4, 12, 14, 25 ],
            "thursday": [ 8, 12, 18, 29 ],
            "saturday": [ 7, 11, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=64449763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://recordings.irritablehedgehog.com/album/dave-seidel-60-hz',
          a_string: 'Dave Seidel: ~60 Hz by Dave Seidel',
          rule: {
            "monday": [ 7, 11, 17, 27 ],
            "tuesday": [ 6, 10, 15, 27 ],
            "wednesday": [ 5, 9, 15, 26 ],
            "thursday": [ 4, 12, 14, 25 ],
            "saturday": [ 8, 12, 18, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2847866671/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://archivesdubmusic.bandcamp.com/album/the-grey-ghost-of-morning',
          a_string: 'The Grey Ghost Of Morning by Chris Weeks',
          rule: {
            "monday": [ 8, 12, 18, 29 ],
            "tuesday": [ 7, 11, 17, 27 ],
            "wednesday": [ 6, 10, 15, 27 ],
            "thursday": [ 5, 9, 15, 26 ],
            "saturday": [ 4, 12, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4102448981/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://n5md.bandcamp.com/album/heartless',
          a_string: 'Heartless by bvdub',
          rule: {
            "monday": [ 4, 12, 14, 25 ],
            "tuesday": [ 8, 12, 18, 29 ],
            "wednesday": [ 7, 11, 17, 27 ],
            "thursday": [ 6, 10, 15, 27 ],
            "saturday": [ 5, 9, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2777478826/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oyukiconjugate.bandcamp.com/album/the-euphoria-of-disobedience',
          a_string: 'The Euphoria of Disobedience by O Yuki Conjugate',
          rule: {
            "monday": [ 5, 9, 15, 26 ],
            "tuesday": [ 4, 12, 14, 25 ],
            "wednesday": [ 8, 12, 18, 29 ],
            "thursday": [ 7, 11, 17, 27 ],
            "saturday": [ 6, 10, 15, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3868833881/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orphax1.bandcamp.com/album/warschauer-stra-e',
          a_string: 'Warschauer Straße by Orphax',
          rule: {
            "monday": [ 6, 10, 15, 27 ],
            "tuesday": [ 5, 9, 15, 26 ],
            "wednesday": [ 4, 12, 14, 25 ],
            "thursday": [ 8, 12, 18, 29 ],
            "saturday": [ 7, 11, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2514789193/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://astralandshit.bandcamp.com/album/--99',
          a_string: 'состояния - тление цвета by Astral &amp; Shit',
          rule: {
            "monday": [ 8, 12, 18, 28 ],
            "tuesday": [ 7, 11, 16, 28 ],
            "wednesday": [ 7, 10, 16, 27 ],
            "thursday": [ 5, 13, 15, 26 ],
            "saturday": [ 9, 13, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4011494198/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://paulminesweeper.bandcamp.com/album/northreach',
          a_string: 'Northreach by Paul Minesweeper',
          rule: {
            "monday": [ 9, 13, 19, 30 ],
            "tuesday": [ 8, 12, 18, 28 ],
            "wednesday": [ 7, 11, 16, 28 ],
            "thursday": [ 7, 10, 16, 27 ],
            "saturday": [ 5, 13, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3957509238/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://genot.bandcamp.com/album/paralysis-live-at-silent-night-8',
          a_string: 'Paralysis: Live at Silent Night #8 by The House in the Woods',
          rule: {
            "monday": [ 5, 13, 15, 26 ],
            "tuesday": [ 9, 13, 19, 30 ],
            "wednesday": [ 8, 12, 18, 28 ],
            "thursday": [ 7, 11, 16, 28 ],
            "saturday": [ 7, 10, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3271790009/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://themyrrorsbbib.bandcamp.com/album/hasta-la-victoria',
          a_string: 'Hasta La Victoria by The Myrrors',
          rule: {
            "monday": [ 7, 10, 16, 27 ],
            "tuesday": [ 5, 13, 15, 26 ],
            "wednesday": [ 9, 13, 19, 30 ],
            "thursday": [ 8, 12, 18, 28 ],
            "saturday": [ 7, 11, 16, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1709653459/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mathiasgrassow.bandcamp.com/album/2017-divinations',
          a_string: '(2017) Divinations by Mathias Grassow',
          rule: {
            "monday": [ 7, 11, 16, 28 ],
            "tuesday": [ 7, 10, 16, 27 ],
            "wednesday": [ 5, 13, 15, 26 ],
            "thursday": [ 9, 13, 19, 30 ],
            "saturday": [ 8, 12, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1359018864/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darrenmcclure.bandcamp.com/album/nature-mirror',
          a_string: 'Nature Mirror by Darren McClure',
          rule: {
            "monday": [ 8, 12, 18, 28 ],
            "tuesday": [ 7, 11, 16, 28 ],
            "wednesday": [ 7, 10, 16, 27 ],
            "thursday": [ 5, 13, 15, 26 ],
            "saturday": [ 9, 13, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2286899085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://davidnewlyn.bandcamp.com/album/transparencies',
          a_string: 'Transparencies by David Newlyn',
          rule: {
            "monday": [ 9, 13, 19, 30 ],
            "tuesday": [ 8, 12, 18, 28 ],
            "wednesday": [ 7, 11, 16, 28 ],
            "thursday": [ 7, 10, 16, 27 ],
            "saturday": [ 5, 13, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2361958115/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://antonymes.bandcamp.com/album/for-now-we-see-through-a-glass-dimly',
          a_string: '(For Now We See) Through A Glass Dimly by Antonymes',
          rule: {
            "monday": [ 6, 14, 16, 27 ],
            "tuesday": [ 10, 14, 20, 1 ],
            "wednesday": [ 9, 13, 19, 29 ],
            "thursday": [ 8, 12, 17, 29 ],
            "saturday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1698224919/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/music-by-phill-niblock',
          a_string: 'Music by Phill Niblock by Phill Niblock',
          rule: {
            "monday": [ 8, 11, 17, 28 ],
            "tuesday": [ 6, 14, 16, 27 ],
            "wednesday": [ 10, 14, 20, 1 ],
            "thursday": [ 9, 13, 19, 29 ],
            "saturday": [ 8, 12, 17, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1857300793/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/body-music',
          a_string: 'Body Music by Ellen Fullman',
          rule: {
            "monday": [ 8, 12, 17, 29 ],
            "tuesday": [ 8, 11, 17, 28 ],
            "wednesday": [ 6, 14, 16, 27 ],
            "thursday": [ 10, 14, 20, 1 ],
            "saturday": [ 9, 13, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3087503069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/logos-works',
          a_string: 'Logos Works by Logos Duo (Moniek Darge / Godfried-Willem Raes )',
          rule: {
            "monday": [ 9, 13, 19, 29 ],
            "tuesday": [ 8, 12, 17, 29 ],
            "wednesday": [ 8, 11, 17, 28 ],
            "thursday": [ 6, 14, 16, 27 ],
            "saturday": [ 10, 14, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2971626337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://noght.bandcamp.com/album/a-letter',
          a_string: 'A Letter by NoGht',
          rule: {
            "monday": [ 10, 14, 20, 1 ],
            "tuesday": [ 9, 13, 19, 29 ],
            "wednesday": [ 8, 12, 17, 29 ],
            "thursday": [ 8, 11, 17, 28 ],
            "saturday": [ 6, 14, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3748396525/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oejerum.bandcamp.com/album/tr-erne-intetheden',
          a_string: 'Træerne &amp; Intetheden by øjeRum',
          rule: {
            "monday": [ 6, 14, 16, 27 ],
            "tuesday": [ 10, 14, 20, 1 ],
            "wednesday": [ 9, 13, 19, 29 ],
            "thursday": [ 8, 12, 17, 29 ],
            "saturday": [ 8, 11, 17, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3484145994/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://offland.bandcamp.com/album/pathways',
          a_string: 'Pathways by Off Land',
          rule: {
            "monday": [ 8, 11, 17, 28 ],
            "tuesday": [ 6, 14, 16, 27 ],
            "wednesday": [ 10, 14, 20, 1 ],
            "thursday": [ 9, 13, 19, 29 ],
            "saturday": [ 8, 12, 17, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3252752347/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/security-vehicles-only',
          a_string: 'Security Vehicles Only by Amnon Wolman',
          rule: {
            "monday": [ 9, 13, 18, 30 ],
            "tuesday": [ 9, 12, 18, 29 ],
            "wednesday": [ 7, 15, 17, 28 ],
            "thursday": [ 11, 15, 21, 2 ],
            "saturday": [ 10, 14, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1046372200/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gurugurubrain.bandcamp.com/album/sua-hiam-zun',
          a_string: '山險峻/Sua-Hiam-Zun by 破地獄/Scattered Purgatory',
          rule: {
            "monday": [ 10, 14, 20, 30 ],
            "tuesday": [ 9, 13, 18, 30 ],
            "wednesday": [ 9, 12, 18, 29 ],
            "thursday": [ 7, 15, 17, 28 ],
            "saturday": [ 11, 15, 21, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1439306838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tinyleaves.bandcamp.com/album/notes-on-belonging-2',
          a_string: 'Notes On Belonging by Tiny Leaves',
          rule: {
            "monday": [ 11, 15, 21, 2 ],
            "tuesday": [ 10, 14, 20, 30 ],
            "wednesday": [ 9, 13, 18, 30 ],
            "thursday": [ 9, 12, 18, 29 ],
            "saturday": [ 7, 15, 17, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1650358930/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.lowercasenoises.com/album/passage',
          a_string: 'Passage by Lowercase Noises',
          rule: {
            "monday": [ 7, 15, 17, 28 ],
            "tuesday": [ 11, 15, 21, 2 ],
            "wednesday": [ 10, 14, 20, 30 ],
            "thursday": [ 9, 13, 18, 30 ],
            "saturday": [ 9, 12, 18, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=400208076/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.lowercasenoises.com/album/the-swiss-illness',
          a_string: 'The Swiss Illness by Lowercase Noises',
          rule: {
            "monday": [ 9, 12, 18, 29 ],
            "tuesday": [ 7, 15, 17, 28 ],
            "wednesday": [ 11, 15, 21, 2 ],
            "thursday": [ 10, 14, 20, 30 ],
            "saturday": [ 9, 13, 18, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=650819023/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.lowercasenoises.com/album/james',
          a_string: 'James by Lowercase Noises',
          rule: {
            "monday": [ 9, 13, 18, 30 ],
            "tuesday": [ 9, 12, 18, 29 ],
            "wednesday": [ 7, 15, 17, 28 ],
            "thursday": [ 11, 15, 21, 2 ],
            "saturday": [ 10, 14, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3992946822/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unknowntonerecords.bandcamp.com/album/wounded-knee',
          a_string: 'Wounded Knee by Piotr Cisak',
          rule: {
            "monday": [ 10, 14, 20, 30 ],
            "tuesday": [ 9, 13, 18, 30 ],
            "wednesday": [ 9, 12, 18, 29 ],
            "thursday": [ 7, 15, 17, 28 ],
            "saturday": [ 11, 15, 21, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1907379065/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://handstitched.bandcamp.com/album/the-cloud-chorus',
          a_string: 'The Cloud Chorus by Maps and Diagrams',
          rule: {
            "monday": [ 12, 16, 22, 3 ],
            "tuesday": [ 11, 15, 21, 1 ],
            "wednesday": [ 10, 14, 19, 1 ],
            "thursday": [ 10, 13, 19, 30 ],
            "saturday": [ 8, 16, 18, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=277244698/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eileanrec.bandcamp.com/album/medicina',
          a_string: 'Medicina by Sustainer',
          rule: {
            "monday": [ 8, 16, 18, 29 ],
            "tuesday": [ 12, 16, 22, 3 ],
            "wednesday": [ 11, 15, 21, 1 ],
            "thursday": [ 10, 14, 19, 1 ],
            "saturday": [ 10, 13, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1868644267/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/drift-stations-ep',
          a_string: 'Drift Stations EP by Glåsbird',
          rule: {
            "monday": [ 10, 13, 19, 30 ],
            "tuesday": [ 8, 16, 18, 29 ],
            "wednesday": [ 12, 16, 22, 3 ],
            "thursday": [ 11, 15, 21, 1 ],
            "saturday": [ 10, 14, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4022394178/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deafheavens.bandcamp.com/album/sunbather',
          a_string: 'Sunbather by deafheaven',
          rule: {
            "monday": [ 10, 14, 19, 1 ],
            "tuesday": [ 10, 13, 19, 30 ],
            "wednesday": [ 8, 16, 18, 29 ],
            "thursday": [ 12, 16, 22, 3 ],
            "saturday": [ 11, 15, 21, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3693191614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amulets.bandcamp.com/album/twin-symmetry',
          a_string: 'TWIN SYMMETRY by AMULETS',
          rule: {
            "monday": [ 11, 15, 21, 1 ],
            "tuesday": [ 10, 14, 19, 1 ],
            "wednesday": [ 10, 13, 19, 30 ],
            "thursday": [ 8, 16, 18, 29 ],
            "saturday": [ 12, 16, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1445226504/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firstterracerecords.bandcamp.com/album/fts001',
          a_string: 'FTS001 by K. Leimer / Like A Villain',
          rule: {
            "monday": [ 12, 16, 22, 3 ],
            "tuesday": [ 11, 15, 21, 1 ],
            "wednesday": [ 10, 14, 19, 1 ],
            "thursday": [ 10, 13, 19, 30 ],
            "saturday": [ 8, 16, 18, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1069671556/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soundinsilencerecords.bandcamp.com/album/yours-are-stories-of-sadness',
          a_string: 'Yours Are Stories Of Sadness by bvdub',
          rule: {
            "monday": [ 8, 16, 18, 29 ],
            "tuesday": [ 12, 16, 22, 3 ],
            "wednesday": [ 11, 15, 21, 1 ],
            "thursday": [ 10, 14, 19, 1 ],
            "saturday": [ 10, 13, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=427507248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://store.broken20.com/album/li-series-05-jack-on-piano',
          a_string: 'li_series 05: Jack On Piano by TVO',
          rule: {
            "monday": [ 11, 14, 20, 1 ],
            "tuesday": [ 9, 17, 19, 30 ],
            "wednesday": [ 13, 17, 23, 4 ],
            "thursday": [ 12, 16, 22, 2 ],
            "saturday": [ 11, 15, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=283318884/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://adarcahianku.bandcamp.com/album/the-lost-beggars-of-sahara',
          a_string: 'the lost beggars of sahara by adarkah ianqu',
          rule: {
            "monday": [ 11, 15, 20, 2 ],
            "tuesday": [ 11, 14, 20, 1 ],
            "wednesday": [ 9, 17, 19, 30 ],
            "thursday": [ 13, 17, 23, 4 ],
            "saturday": [ 12, 16, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3144344340/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blankembrace.bandcamp.com/album/pure',
          a_string: 'Pure by Blank Embrace',
          rule: {
            "monday": [ 12, 16, 22, 2 ],
            "tuesday": [ 11, 15, 20, 2 ],
            "wednesday": [ 11, 14, 20, 1 ],
            "thursday": [ 9, 17, 19, 30 ],
            "saturday": [ 13, 17, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1505950645/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fabersan.bandcamp.com/album/selected-ambients-2017-collection',
          a_string: 'Selected Ambients 2017 (Collection) by Fabersan',
          rule: {
            "monday": [ 13, 17, 23, 4 ],
            "tuesday": [ 12, 16, 22, 2 ],
            "wednesday": [ 11, 15, 20, 2 ],
            "thursday": [ 11, 14, 20, 1 ],
            "saturday": [ 9, 17, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3921803894/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://irrappext.bandcamp.com/album/celestial-laminate',
          a_string: 'Celestial Laminate by irr. app. (ext.)',
          rule: {
            "monday": [ 9, 17, 19, 30 ],
            "tuesday": [ 13, 17, 23, 4 ],
            "wednesday": [ 12, 16, 22, 2 ],
            "thursday": [ 11, 15, 20, 2 ],
            "saturday": [ 11, 14, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=149042100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/purification-verses',
          a_string: 'Purification Verses by Tsone',
          rule: {
            "monday": [ 11, 14, 20, 1 ],
            "tuesday": [ 9, 17, 19, 30 ],
            "wednesday": [ 13, 17, 23, 4 ],
            "thursday": [ 12, 16, 22, 2 ],
            "saturday": [ 11, 15, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2105411563/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/eyes-down-slowdown',
          a_string: 'eyes down slowdown by the prairie lines',
          rule: {
            "monday": [ 11, 15, 20, 2 ],
            "tuesday": [ 11, 14, 20, 1 ],
            "wednesday": [ 9, 17, 19, 30 ],
            "thursday": [ 13, 17, 23, 4 ],
            "saturday": [ 12, 16, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=727838500/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newatlantismusic.bandcamp.com/album/inner-work',
          a_string: 'Inner Work by JV Lightbody',
          rule: {
            "monday": [ 13, 17, 23, 3 ],
            "tuesday": [ 12, 16, 21, 3 ],
            "wednesday": [ 12, 15, 21, 2 ],
            "thursday": [ 10, 18, 20, 1 ],
            "saturday": [ 14, 18, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2425378851/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thecaretaker.bandcamp.com/album/everywhere-at-the-end-of-time',
          a_string: 'Everywhere at the end of time by The Caretaker',
          rule: {
            "monday": [ 14, 18, 24, 5 ],
            "tuesday": [ 13, 17, 23, 3 ],
            "wednesday": [ 12, 16, 21, 3 ],
            "thursday": [ 12, 15, 21, 2 ],
            "saturday": [ 10, 18, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=794123225/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://loscil.bandcamp.com/album/monument-builders',
          a_string: 'Monument Builders by loscil',
          rule: {
            "monday": [ 10, 18, 20, 1 ],
            "tuesday": [ 14, 18, 24, 5 ],
            "wednesday": [ 13, 17, 23, 3 ],
            "thursday": [ 12, 16, 21, 3 ],
            "saturday": [ 12, 15, 21, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3777901001/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/of-light-and-shade',
          a_string: 'Of Light and Shade by Overshift',
          rule: {
            "monday": [ 12, 15, 21, 2 ],
            "tuesday": [ 10, 18, 20, 1 ],
            "wednesday": [ 14, 18, 24, 5 ],
            "thursday": [ 13, 17, 23, 3 ],
            "saturday": [ 12, 16, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2146271663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/unsung-memories',
          a_string: 'Unsung Memories by Polaroid Notes',
          rule: {
            "monday": [ 12, 16, 21, 3 ],
            "tuesday": [ 12, 15, 21, 2 ],
            "wednesday": [ 10, 18, 20, 1 ],
            "thursday": [ 14, 18, 24, 5 ],
            "saturday": [ 13, 17, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1325522365/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/sixteen-frames',
          a_string: 'sixteen frames by teleferick',
          rule: {
            "monday": [ 13, 17, 23, 3 ],
            "tuesday": [ 12, 16, 21, 3 ],
            "wednesday": [ 12, 15, 21, 2 ],
            "thursday": [ 10, 18, 20, 1 ],
            "saturday": [ 14, 18, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=228542707/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dragonseyerecordings.bandcamp.com/album/steel-dragons-eye-twelfth-anniversary',
          a_string: 'Steel: Dragon&#39;s Eye Twelfth Anniversary by Various Artists',
          rule: {
            "monday": [ 14, 18, 24, 5 ],
            "tuesday": [ 13, 17, 23, 3 ],
            "wednesday": [ 12, 16, 21, 3 ],
            "thursday": [ 12, 15, 21, 2 ],
            "saturday": [ 10, 18, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2089019764/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dragonseyerecordings.bandcamp.com/album/as-if-we-were-never-here',
          a_string: 'As If We Were Never Here by Marc Kate',
          rule: {
            "monday": [ 11, 19, 21, 2 ],
            "tuesday": [ 15, 19, 25, 6 ],
            "wednesday": [ 14, 17, 24, 4 ],
            "thursday": [ 13, 17, 22, 4 ],
            "saturday": [ 13, 16, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=982255756/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dragonseyerecordings.bandcamp.com/album/acclimation',
          a_string: 'Acclimation by Jake Muir',
          rule: {
            "monday": [ 13, 16, 22, 3 ],
            "tuesday": [ 11, 19, 21, 2 ],
            "wednesday": [ 15, 19, 25, 6 ],
            "thursday": [ 14, 17, 24, 4 ],
            "saturday": [ 13, 17, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3451854041/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kylebobbydunn.bandcamp.com/album/music-for-medication',
          a_string: 'Music for Medication by Kyle Bobby Dunn',
          rule: {
            "monday": [ 13, 17, 22, 4 ],
            "tuesday": [ 13, 16, 22, 3 ],
            "wednesday": [ 11, 19, 21, 2 ],
            "thursday": [ 15, 19, 25, 6 ],
            "saturday": [ 14, 17, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2831529311/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kylebobbydunn.bandcamp.com/album/six-cognitive-works',
          a_string: 'Six Cognitive Works by Kyle Bobby Dunn',
          rule: {
            "monday": [ 14, 17, 24, 4 ],
            "tuesday": [ 13, 17, 22, 4 ],
            "wednesday": [ 13, 16, 22, 3 ],
            "thursday": [ 11, 19, 21, 2 ],
            "saturday": [ 15, 19, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1536680056/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://greggkowalsky.bandcamp.com/album/lorange-lorange',
          a_string: 'L&#39;Orange, L&#39;Orange by Gregg Kowalsky',
          rule: {
            "monday": [ 15, 19, 25, 6 ],
            "tuesday": [ 14, 17, 24, 4 ],
            "wednesday": [ 13, 17, 22, 4 ],
            "thursday": [ 13, 16, 22, 3 ],
            "saturday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3300788636/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rhucle.bandcamp.com/album/flavor-of-water',
          a_string: 'Flavor Of Water by Rhucle / Mike Nigro',
          rule: {
            "monday": [ 11, 19, 21, 2 ],
            "tuesday": [ 15, 19, 25, 6 ],
            "wednesday": [ 14, 17, 24, 4 ],
            "thursday": [ 13, 17, 22, 4 ],
            "saturday": [ 13, 16, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2915664514/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://heart.bandcamp.com/album/new-tab',
          a_string: 'New Tab by Khotin',
          rule: {
            "monday": [ 13, 16, 22, 3 ],
            "tuesday": [ 11, 19, 21, 2 ],
            "wednesday": [ 15, 19, 25, 6 ],
            "thursday": [ 14, 17, 24, 4 ],
            "saturday": [ 13, 17, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2479038235/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newatlantismusic.bandcamp.com/album/new-atlantis-volume-1',
          a_string: 'New Atlantis Volume 1 by New Atlantis',
          rule: {
            "monday": [ 14, 18, 23, 5 ],
            "tuesday": [ 14, 17, 23, 4 ],
            "wednesday": [ 12, 20, 22, 3 ],
            "thursday": [ 16, 20, 26, 7 ],
            "saturday": [ 15, 18, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3335578837/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chiheihatakeyama.bandcamp.com/album/sora',
          a_string: 'Sora by Chihei Hatakeyama + Federico Durand',
          rule: {
            "monday": [ 15, 18, 25, 5 ],
            "tuesday": [ 14, 18, 23, 5 ],
            "wednesday": [ 14, 17, 23, 4 ],
            "thursday": [ 12, 20, 22, 3 ],
            "saturday": [ 16, 20, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2550586637/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chiheihatakeyama.bandcamp.com/album/heavy-snow',
          a_string: 'Heavy Snow by Chihei Hatakeyama',
          rule: {
            "monday": [ 16, 20, 26, 7 ],
            "tuesday": [ 15, 18, 25, 5 ],
            "wednesday": [ 14, 18, 23, 5 ],
            "thursday": [ 14, 17, 23, 4 ],
            "saturday": [ 12, 20, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1537311490/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chiheihatakeyama.bandcamp.com/album/fluorescent-monochrome',
          a_string: 'Fluorescent Monochrome by Straytone',
          rule: {
            "monday": [ 12, 20, 22, 3 ],
            "tuesday": [ 16, 20, 26, 7 ],
            "wednesday": [ 15, 18, 25, 5 ],
            "thursday": [ 14, 18, 23, 5 ],
            "saturday": [ 14, 17, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2596997395/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://huron.bandcamp.com/album/infinity-plus-forever',
          a_string: 'Infinity Plus Forever by Huron',
          rule: {
            "monday": [ 14, 17, 23, 4 ],
            "tuesday": [ 12, 20, 22, 3 ],
            "wednesday": [ 16, 20, 26, 7 ],
            "thursday": [ 15, 18, 25, 5 ],
            "saturday": [ 14, 18, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=676881688/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oyukiconjugate.bandcamp.com/album/tropic',
          a_string: 'TROPIC by O Yuki Conjugate',
          rule: {
            "monday": [ 14, 18, 23, 5 ],
            "tuesday": [ 14, 17, 23, 4 ],
            "wednesday": [ 12, 20, 22, 3 ],
            "thursday": [ 16, 20, 26, 7 ],
            "saturday": [ 15, 18, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3201498376/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://murkok.bandcamp.com/album/coast',
          a_string: 'coast by murkok',
          rule: {
            "monday": [ 15, 18, 25, 5 ],
            "tuesday": [ 14, 18, 23, 5 ],
            "wednesday": [ 14, 17, 23, 4 ],
            "thursday": [ 12, 20, 22, 3 ],
            "saturday": [ 16, 20, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=174233431/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://adarcahianku.bandcamp.com/album/badart',
          a_string: 'badart by adarkahianqu',
          rule: {
            "monday": [ 17, 21, 27, 8 ],
            "tuesday": [ 16, 19, 26, 6 ],
            "wednesday": [ 15, 19, 24, 6 ],
            "thursday": [ 15, 18, 24, 5 ],
            "saturday": [ 13, 21, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2754202102/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blankembrace.bandcamp.com/album/promises',
          a_string: 'Promises by Blank Embrace',
          rule: {
            "monday": [ 13, 21, 23, 4 ],
            "tuesday": [ 17, 21, 27, 8 ],
            "wednesday": [ 16, 19, 26, 6 ],
            "thursday": [ 15, 19, 24, 6 ],
            "saturday": [ 15, 18, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=907489737/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fabersan.bandcamp.com/album/sunday-afternoon-music-inspired-by-the-cosmology-of-alfred-north-whitehead',
          a_string: 'Sunday Afternoon                                     [music inspired by the cosmology of Alfred North Whitehead.] by Fabersan',
          rule: {
            "monday": [ 15, 18, 24, 5 ],
            "tuesday": [ 13, 21, 23, 4 ],
            "wednesday": [ 17, 21, 27, 8 ],
            "thursday": [ 16, 19, 26, 6 ],
            "saturday": [ 15, 19, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2720701071/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soundinsilencerecords.bandcamp.com/album/faded-photographs',
          a_string: 'Faded Photographs by Absent Without Leave',
          rule: {
            "monday": [ 15, 19, 24, 6 ],
            "tuesday": [ 15, 18, 24, 5 ],
            "wednesday": [ 13, 21, 23, 4 ],
            "thursday": [ 17, 21, 27, 8 ],
            "saturday": [ 16, 19, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2905790012/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://store.broken20.com/album/li-series-09-materia-prima-lapidis-philosophorum',
          a_string: 'li_series 09: Materia Prima Lapidis Philosophorum by Valanx',
          rule: {
            "monday": [ 16, 19, 26, 6 ],
            "tuesday": [ 15, 19, 24, 6 ],
            "wednesday": [ 15, 18, 24, 5 ],
            "thursday": [ 13, 21, 23, 4 ],
            "saturday": [ 17, 21, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2264359719/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stevehauschildt.bandcamp.com/album/strands',
          a_string: 'Strands by Steve Hauschildt',
          rule: {
            "monday": [ 17, 21, 27, 8 ],
            "tuesday": [ 16, 19, 26, 6 ],
            "wednesday": [ 15, 19, 24, 6 ],
            "thursday": [ 15, 18, 24, 5 ],
            "saturday": [ 13, 21, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=560207272/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://polarseasrecordings.bandcamp.com/album/lowered-expectations',
          a_string: 'Lowered Expectations by Bradley Sean Alexander',
          rule: {
            "monday": [ 13, 21, 23, 4 ],
            "tuesday": [ 17, 21, 27, 8 ],
            "wednesday": [ 16, 19, 26, 6 ],
            "thursday": [ 15, 19, 24, 6 ],
            "saturday": [ 15, 18, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3320035111/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://archivesdubmusic.bandcamp.com/album/home',
          a_string: 'Home by Warmth',
          rule: {
            "monday": [ 16, 19, 25, 6 ],
            "tuesday": [ 14, 22, 24, 5 ],
            "wednesday": [ 18, 22, 28, 9 ],
            "thursday": [ 17, 20, 27, 7 ],
            "saturday": [ 16, 20, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1355051069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theattemptedtheftofmillions.bandcamp.com/album/loam',
          a_string: 'Loam by Trevor Vincent Edmonds &amp; Sean Curtis Patrick',
          rule: {
            "monday": [ 16, 20, 25, 7 ],
            "tuesday": [ 16, 19, 25, 6 ],
            "wednesday": [ 14, 22, 24, 5 ],
            "thursday": [ 18, 22, 28, 9 ],
            "saturday": [ 17, 20, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3629491121/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eleh.bandcamp.com/album/circle-three-full-moon-at-35hz',
          a_string: 'Circle Three: Full Moon At 35Hz by eleh',
          rule: {
            "monday": [ 17, 20, 27, 7 ],
            "tuesday": [ 16, 20, 25, 7 ],
            "wednesday": [ 16, 19, 25, 6 ],
            "thursday": [ 14, 22, 24, 5 ],
            "saturday": [ 18, 22, 28, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3505795299/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eleh.bandcamp.com/album/home-age-i',
          a_string: 'Home Age I by eleh',
          rule: {
            "monday": [ 18, 22, 28, 9 ],
            "tuesday": [ 17, 20, 27, 7 ],
            "wednesday": [ 16, 20, 25, 7 ],
            "thursday": [ 16, 19, 25, 6 ],
            "saturday": [ 14, 22, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3542683785/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eleh.bandcamp.com/album/ohmage-resistor',
          a_string: 'Ohmage/Resistor by eleh',
          rule: {
            "monday": [ 14, 22, 24, 5 ],
            "tuesday": [ 18, 22, 28, 9 ],
            "wednesday": [ 17, 20, 27, 7 ],
            "thursday": [ 16, 20, 25, 7 ],
            "saturday": [ 16, 19, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3552224053/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://phillniblock.bandcamp.com/album/touch-strings',
          a_string: 'Touch Strings by Phill Niblock',
          rule: {
            "monday": [ 16, 19, 25, 6 ],
            "tuesday": [ 14, 22, 24, 5 ],
            "wednesday": [ 18, 22, 28, 9 ],
            "thursday": [ 17, 20, 27, 7 ],
            "saturday": [ 16, 20, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4258213455/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://phillniblock.bandcamp.com/album/touch-three',
          a_string: 'Touch Three by Phill Niblock',
          rule: {
            "monday": [ 16, 20, 25, 7 ],
            "tuesday": [ 16, 19, 25, 6 ],
            "wednesday": [ 14, 22, 24, 5 ],
            "thursday": [ 18, 22, 28, 9 ],
            "saturday": [ 17, 20, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2701969926/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://phillniblock.bandcamp.com/album/touch-food',
          a_string: 'Touch Food by Phill Niblock',
          rule: {
            "monday": [ 18, 21, 26, 8 ],
            "tuesday": [ 17, 21, 26, 8 ],
            "wednesday": [ 17, 20, 26, 7 ],
            "thursday": [ 15, 23, 25, 6 ],
            "saturday": [ 19, 23, 29, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1997461071/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quietestrecords.bandcamp.com/album/the-tape-works-pt1',
          a_string: 'The Tape Works Pt1 by Red on maroon',
          rule: {
            "monday": [ 19, 23, 29, 10 ],
            "tuesday": [ 18, 21, 26, 8 ],
            "wednesday": [ 17, 21, 26, 8 ],
            "thursday": [ 17, 20, 26, 7 ],
            "saturday": [ 15, 23, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3030048139/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quietestrecords.bandcamp.com/album/the-keeper-of-lost-souls',
          a_string: 'The keeper of lost souls. by Quietest Records',
          rule: {
            "monday": [ 15, 23, 25, 6 ],
            "tuesday": [ 19, 23, 29, 10 ],
            "wednesday": [ 18, 21, 26, 8 ],
            "thursday": [ 17, 21, 26, 8 ],
            "saturday": [ 17, 20, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3424011459/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quietestrecords.bandcamp.com/album/a-life-reinvented',
          a_string: 'A life reinvented by Quietest Records',
          rule: {
            "monday": [ 17, 20, 26, 7 ],
            "tuesday": [ 15, 23, 25, 6 ],
            "wednesday": [ 19, 23, 29, 10 ],
            "thursday": [ 18, 21, 26, 8 ],
            "saturday": [ 17, 21, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2097781097/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliannabarwick.bandcamp.com/album/nepenthe',
          a_string: 'Nepenthe by Julianna Barwick',
          rule: {
            "monday": [ 17, 21, 26, 8 ],
            "tuesday": [ 17, 20, 26, 7 ],
            "wednesday": [ 15, 23, 25, 6 ],
            "thursday": [ 19, 23, 29, 10 ],
            "saturday": [ 18, 21, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2238000015/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliannabarwick.bandcamp.com/album/will',
          a_string: 'Will by Julianna Barwick',
          rule: {
            "monday": [ 18, 21, 26, 8 ],
            "tuesday": [ 17, 21, 26, 8 ],
            "wednesday": [ 17, 20, 26, 7 ],
            "thursday": [ 15, 23, 25, 6 ],
            "saturday": [ 19, 23, 29, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4097428080/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliannabarwick.bandcamp.com/album/rosabi-ep',
          a_string: 'Rosabi EP by Julianna Barwick',
          rule: {
            "monday": [ 19, 23, 29, 10 ],
            "tuesday": [ 18, 21, 26, 8 ],
            "wednesday": [ 17, 21, 26, 8 ],
            "thursday": [ 17, 20, 26, 7 ],
            "saturday": [ 15, 23, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2327071401/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://celer.bandcamp.com/album/landmarks',
          a_string: 'Landmarks by Celer + Forest Management',
          rule: {
            "monday": [ 16, 24, 26, 7 ],
            "tuesday": [ 20, 24, 30, 11 ],
            "wednesday": [ 19, 22, 27, 9 ],
            "thursday": [ 18, 22, 27, 9 ],
            "saturday": [ 18, 21, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1348975170/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://celer.bandcamp.com/album/in-the-end-youll-just-disappear',
          a_string: 'In the End You&#39;ll Just Disappear by Celer',
          rule: {
            "monday": [ 18, 21, 27, 8 ],
            "tuesday": [ 16, 24, 26, 7 ],
            "wednesday": [ 20, 24, 30, 11 ],
            "thursday": [ 19, 22, 27, 9 ],
            "saturday": [ 18, 22, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=263019383/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://celer.bandcamp.com/album/alcoves',
          a_string: 'Alcoves by Celer',
          rule: {
            "monday": [ 18, 22, 27, 9 ],
            "tuesday": [ 18, 21, 27, 8 ],
            "wednesday": [ 16, 24, 26, 7 ],
            "thursday": [ 20, 24, 30, 11 ],
            "saturday": [ 19, 22, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3643562070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deanmcphee.bandcamp.com/album/four-stones',
          a_string: 'Four Stones by Dean McPhee',
          rule: {
            "monday": [ 19, 22, 27, 9 ],
            "tuesday": [ 18, 22, 27, 9 ],
            "wednesday": [ 18, 21, 27, 8 ],
            "thursday": [ 16, 24, 26, 7 ],
            "saturday": [ 20, 24, 30, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3749575597/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://scottlawlor.bandcamp.com/album/the-year-of-the-snake-the-2013-compilation-set',
          a_string: 'The Year of The Snake (The 2013 Compilation Set) by Scott Lawlor',
          rule: {
            "monday": [ 20, 24, 30, 11 ],
            "tuesday": [ 19, 22, 27, 9 ],
            "wednesday": [ 18, 22, 27, 9 ],
            "thursday": [ 18, 21, 27, 8 ],
            "saturday": [ 16, 24, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=258041068/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://januszjurga.bandcamp.com/album/duchy-rogowca',
          a_string: 'Duchy Rogowca by Janusz Jurga',
          rule: {
            "monday": [ 16, 24, 26, 7 ],
            "tuesday": [ 20, 24, 30, 11 ],
            "wednesday": [ 19, 22, 27, 9 ],
            "thursday": [ 18, 22, 27, 9 ],
            "saturday": [ 18, 21, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2672424612/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://messa666.bandcamp.com/album/belfry',
          a_string: 'Belfry by Messa',
          rule: {
            "monday": [ 18, 21, 27, 8 ],
            "tuesday": [ 16, 24, 26, 7 ],
            "wednesday": [ 20, 24, 30, 11 ],
            "thursday": [ 19, 22, 27, 9 ],
            "saturday": [ 18, 22, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=231620390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rbeny.bandcamp.com/album/cascade-symmetry',
          a_string: 'cascade symmetry by r beny',
          rule: {
            "monday": [ 19, 23, 28, 10 ],
            "tuesday": [ 19, 22, 28, 9 ],
            "wednesday": [ 17, 25, 27, 8 ],
            "thursday": [ 21, 25, 1, 12 ],
            "saturday": [ 20, 23, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3750285773/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cycliclaw.bandcamp.com/album/alchymeia',
          a_string: 'Alchymeia by raison d&#39;être',
          rule: {
            "monday": [ 20, 23, 28, 10 ],
            "tuesday": [ 19, 23, 28, 10 ],
            "wednesday": [ 19, 22, 28, 9 ],
            "thursday": [ 17, 25, 27, 8 ],
            "saturday": [ 21, 25, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3956813243/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aairria.bandcamp.com/album/automatic-listening-i',
          a_string: 'Automatic Listening I by Aairria',
          rule: {
            "monday": [ 21, 25, 1, 12 ],
            "tuesday": [ 20, 23, 28, 10 ],
            "wednesday": [ 19, 23, 28, 10 ],
            "thursday": [ 19, 22, 28, 9 ],
            "saturday": [ 17, 25, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3863520136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ashotdanielyan.bandcamp.com/album/utopia-2304',
          a_string: 'Utopia 2304 by Ashot Danielyan',
          rule: {
            "monday": [ 17, 25, 27, 8 ],
            "tuesday": [ 21, 25, 1, 12 ],
            "wednesday": [ 20, 23, 28, 10 ],
            "thursday": [ 19, 23, 28, 10 ],
            "saturday": [ 19, 22, 28, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3643612398/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://meitei.bandcamp.com/album/kwaidan',
          a_string: 'Kwaidan / 怪談 by Meitei / 冥丁',
          rule: {
            "monday": [ 19, 22, 28, 9 ],
            "tuesday": [ 17, 25, 27, 8 ],
            "wednesday": [ 21, 25, 1, 12 ],
            "thursday": [ 20, 23, 28, 10 ],
            "saturday": [ 19, 23, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1818678450/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leebannon.bandcamp.com/album/tahoe',
          a_string: 'Tahoe by Dedekind Cut',
          rule: {
            "monday": [ 19, 23, 28, 10 ],
            "tuesday": [ 19, 22, 28, 9 ],
            "wednesday": [ 17, 25, 27, 8 ],
            "thursday": [ 21, 25, 1, 12 ],
            "saturday": [ 20, 23, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1544015561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://12kmusic.bandcamp.com/album/field',
          a_string: 'Field by SHUTTLE358',
          rule: {
            "monday": [ 20, 23, 28, 10 ],
            "tuesday": [ 19, 23, 28, 10 ],
            "wednesday": [ 19, 22, 28, 9 ],
            "thursday": [ 17, 25, 27, 8 ],
            "saturday": [ 21, 25, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1955768260/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://archivesdubmusic.bandcamp.com/album/snow-light',
          a_string: 'Snow Light by Gallery Six',
          rule: {
            "monday": [ 22, 26, 2, 13 ],
            "tuesday": [ 21, 24, 29, 11 ],
            "wednesday": [ 20, 24, 29, 11 ],
            "thursday": [ 20, 23, 29, 10 ],
            "saturday": [ 18, 26, 28, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=857075846/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carolinemckenzie.bandcamp.com/album/interior-exterior',
          a_string: 'interior/exterior by Caroline McKenzie',
          rule: {
            "monday": [ 18, 26, 28, 9 ],
            "tuesday": [ 22, 26, 2, 13 ],
            "wednesday": [ 21, 24, 29, 11 ],
            "thursday": [ 20, 24, 29, 11 ],
            "saturday": [ 20, 23, 29, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2102278697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carolinemckenzie.bandcamp.com/album/the-drowning-of-ophelia',
          a_string: 'the drowning of ophelia by Caroline McKenzie',
          rule: {
            "monday": [ 20, 23, 29, 10 ],
            "tuesday": [ 18, 26, 28, 9 ],
            "wednesday": [ 22, 26, 2, 13 ],
            "thursday": [ 21, 24, 29, 11 ],
            "saturday": [ 20, 24, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3267038252/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carolinemckenzie.bandcamp.com/album/red-snow',
          a_string: 'red snow by Caroline McKenzie',
          rule: {
            "monday": [ 20, 24, 29, 11 ],
            "tuesday": [ 20, 23, 29, 10 ],
            "wednesday": [ 18, 26, 28, 9 ],
            "thursday": [ 22, 26, 2, 13 ],
            "saturday": [ 21, 24, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3111895252/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/organism',
          a_string: 'Organism by AROVANE &amp; PORYA HATAMI',
          rule: {
            "monday": [ 22, 25, 30, 12 ],
            "tuesday": [ 21, 25, 30, 12 ],
            "wednesday": [ 21, 24, 30, 11 ],
            "thursday": [ 19, 27, 29, 10 ],
            "saturday": [ 23, 27, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2065394610/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/creta',
          a_string: 'Creta by CRETA (LAMANNA / PUPILLO / ZANISI)',
          rule: {
            "monday": [ 23, 27, 3, 14 ],
            "tuesday": [ 22, 25, 30, 12 ],
            "wednesday": [ 21, 25, 30, 12 ],
            "thursday": [ 21, 24, 30, 11 ],
            "saturday": [ 19, 27, 29, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2303698957/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/persepolis',
          a_string: 'Persepolis by Iannis Xenakis',
          rule: {
            "monday": [ 19, 27, 29, 10 ],
            "tuesday": [ 23, 27, 3, 14 ],
            "wednesday": [ 22, 25, 30, 12 ],
            "thursday": [ 21, 25, 30, 12 ],
            "saturday": [ 21, 24, 30, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2476434641/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kammarheit.bandcamp.com/album/the-starwheel',
          a_string: 'The Starwheel by Kammarheit',
          rule: {
            "monday": [ 22, 25, 1, 12 ],
            "tuesday": [ 20, 28, 30, 11 ],
            "wednesday": [ 24, 28, 4, 15 ],
            "thursday": [ 23, 26, 1, 13 ],
            "saturday": [ 22, 26, 1, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3086856873/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kammarheit.bandcamp.com/album/kollektionen',
          a_string: 'Kollektionen by Kammarheit',
          rule: {
            "monday": [ 22, 26, 1, 13 ],
            "tuesday": [ 22, 25, 1, 12 ],
            "wednesday": [ 20, 28, 30, 11 ],
            "thursday": [ 24, 28, 4, 15 ],
            "saturday": [ 23, 26, 1, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2291309435/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kammarheit.bandcamp.com/album/the-nest',
          a_string: 'The Nest by Kammarheit',
          rule: {
            "monday": [ 23, 26, 1, 13 ],
            "tuesday": [ 22, 26, 1, 13 ],
            "wednesday": [ 22, 25, 1, 12 ],
            "thursday": [ 20, 28, 30, 11 ],
            "saturday": [ 24, 28, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=674845891/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://celer.bandcamp.com/album/nacreous-clouds-remastered',
          a_string: 'Nacreous Clouds (Remastered) by Celer',
          rule: {
            "monday": [ 24, 28, 4, 15 ],
            "tuesday": [ 23, 26, 1, 13 ],
            "wednesday": [ 22, 26, 1, 13 ],
            "thursday": [ 22, 25, 1, 12 ],
            "saturday": [ 20, 28, 30, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3858240513/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dronarivm.bandcamp.com/album/a-different-definition-of-love',
          a_string: 'A Different Definition of Love by bvdub',
          rule: {
            "monday": [ 20, 28, 30, 11 ],
            "tuesday": [ 24, 28, 4, 15 ],
            "wednesday": [ 23, 26, 1, 13 ],
            "thursday": [ 22, 26, 1, 13 ],
            "saturday": [ 22, 25, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2217972433/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://steveroach.bandcamp.com/album/possible-planet',
          a_string: 'Possible Planet by Steve Roach',
          rule: {
            "monday": [ 22, 25, 1, 12 ],
            "tuesday": [ 20, 28, 30, 11 ],
            "wednesday": [ 24, 28, 4, 15 ],
            "thursday": [ 23, 26, 1, 13 ],
            "saturday": [ 22, 26, 1, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=851893713/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lowpoint.bandcamp.com/album/summers-end',
          a_string: 'Summer&#39;s End by Orphax',
          rule: {
            "monday": [ 22, 26, 1, 13 ],
            "tuesday": [ 22, 25, 1, 12 ],
            "wednesday": [ 20, 28, 30, 11 ],
            "thursday": [ 24, 28, 4, 15 ],
            "saturday": [ 23, 26, 1, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1664533383/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lowpoint.bandcamp.com/album/experiment-3',
          a_string: 'Experiment.3 by Gareth Hardwick',
          rule: {
            "monday": [ 24, 27, 2, 14 ],
            "tuesday": [ 23, 27, 2, 14 ],
            "wednesday": [ 23, 26, 2, 13 ],
            "thursday": [ 21, 29, 1, 12 ],
            "saturday": [ 25, 29, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=529443982/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lowpoint.bandcamp.com/album/a-late-spring-never-lies',
          a_string: 'A Late Spring Never Lies by Stereocilia',
          rule: {
            "monday": [ 25, 29, 5, 16 ],
            "tuesday": [ 24, 27, 2, 14 ],
            "wednesday": [ 23, 27, 2, 14 ],
            "thursday": [ 23, 26, 2, 13 ],
            "saturday": [ 21, 29, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3153565274/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jacobnewman.bandcamp.com/album/transitions',
          a_string: 'Transitions by Darwin Raymond and Jacob Newman',
          rule: {
            "monday": [ 21, 29, 1, 12 ],
            "tuesday": [ 25, 29, 5, 16 ],
            "wednesday": [ 24, 27, 2, 14 ],
            "thursday": [ 23, 27, 2, 14 ],
            "saturday": [ 23, 26, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1148584713/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jacobnewman.bandcamp.com/album/biospherica',
          a_string: 'Biospherica by Jacob Newman',
          rule: {
            "monday": [ 23, 26, 2, 13 ],
            "tuesday": [ 21, 29, 1, 12 ],
            "wednesday": [ 25, 29, 5, 16 ],
            "thursday": [ 24, 27, 2, 14 ],
            "saturday": [ 23, 27, 2, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3957777380/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jacobnewman.bandcamp.com/album/summer',
          a_string: 'Summer by Jacob Newman',
          rule: {
            "monday": [ 23, 27, 2, 14 ],
            "tuesday": [ 23, 26, 2, 13 ],
            "wednesday": [ 21, 29, 1, 12 ],
            "thursday": [ 25, 29, 5, 16 ],
            "saturday": [ 24, 27, 2, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=966168502/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://weareacr.bandcamp.com/album/12-elegies-for-pierre-boulez-st-ost',
          a_string: '12 Elegies For Pierre Boulez / Ústí OST by Wim Dehaen',
          rule: {
            "monday": [ 24, 27, 2, 14 ],
            "tuesday": [ 23, 27, 2, 14 ],
            "wednesday": [ 23, 26, 2, 13 ],
            "thursday": [ 21, 29, 1, 12 ],
            "saturday": [ 25, 29, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1466775653/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://somta.bandcamp.com/album/aarde',
          a_string: 'Aarde by somta',
          rule: {
            "monday": [ 25, 29, 5, 16 ],
            "tuesday": [ 24, 27, 2, 14 ],
            "wednesday": [ 23, 27, 2, 14 ],
            "thursday": [ 23, 26, 2, 13 ],
            "saturday": [ 21, 29, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=454040844/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://damecook.bandcamp.com/album/music-for-snow-days',
          a_string: 'music for snow days by Dame Cook',
          rule: {
            "monday": [ 22, 30, 2, 13 ],
            "tuesday": [ 26, 30, 6, 17 ],
            "wednesday": [ 25, 28, 3, 15 ],
            "thursday": [ 24, 28, 3, 15 ],
            "saturday": [ 24, 27, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3834281211/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hiroshiyoshimura.bandcamp.com/album/music-for-nine-post-cards',
          a_string: 'Music for Nine Post Cards by Hiroshi Yoshimura',
          rule: {
            "monday": [ 24, 27, 3, 14 ],
            "tuesday": [ 22, 30, 2, 13 ],
            "wednesday": [ 26, 30, 6, 17 ],
            "thursday": [ 25, 28, 3, 15 ],
            "saturday": [ 24, 28, 3, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=612750820/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ilurecords.bandcamp.com/album/the-greys',
          a_string: 'The Greys by Tape Sounds',
          rule: {
            "monday": [ 24, 28, 3, 15 ],
            "tuesday": [ 24, 27, 3, 14 ],
            "wednesday": [ 22, 30, 2, 13 ],
            "thursday": [ 26, 30, 6, 17 ],
            "saturday": [ 25, 28, 3, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1999040861/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://meitei.bandcamp.com/album/jan-svankmajer',
          a_string: '江戸川乱歩 × Jan Svankmajer by Kisha / 奇舎',
          rule: {
            "monday": [ 25, 28, 3, 15 ],
            "tuesday": [ 24, 28, 3, 15 ],
            "wednesday": [ 24, 27, 3, 14 ],
            "thursday": [ 22, 30, 2, 13 ],
            "saturday": [ 26, 30, 6, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=42342034/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lahautdanslocean.bandcamp.com/album/cold-ubiquity',
          a_string: 'Cold Ubiquity by Denis Morin',
          rule: {
            "monday": [ 26, 30, 6, 17 ],
            "tuesday": [ 25, 28, 3, 15 ],
            "wednesday": [ 24, 28, 3, 15 ],
            "thursday": [ 24, 27, 3, 14 ],
            "saturday": [ 22, 30, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1559273782/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lahautdanslocean.bandcamp.com/album/clavans-field-recording',
          a_string: 'Clavans Field Recording by World&#39;s Blowings',
          rule: {
            "monday": [ 22, 30, 2, 13 ],
            "tuesday": [ 26, 30, 6, 17 ],
            "wednesday": [ 25, 28, 3, 15 ],
            "thursday": [ 24, 28, 3, 15 ],
            "saturday": [ 24, 27, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2693586790/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lahautdanslocean.bandcamp.com/album/reaching-time',
          a_string: 'Reaching Time by Denis',
          rule: {
            "monday": [ 24, 27, 3, 14 ],
            "tuesday": [ 22, 30, 2, 13 ],
            "wednesday": [ 26, 30, 6, 17 ],
            "thursday": [ 25, 28, 3, 15 ],
            "saturday": [ 24, 28, 3, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=58336510/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jonhassell.bandcamp.com/album/maarifa-street',
          a_string: 'Maarifa Street by Jon Hassell',
          rule: {
            "monday": [ 24, 28, 3, 15 ],
            "tuesday": [ 24, 27, 3, 14 ],
            "wednesday": [ 22, 30, 2, 13 ],
            "thursday": [ 26, 30, 6, 17 ],
            "saturday": [ 25, 28, 3, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2423573174/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'https://bandcamp.com/EmbeddedPlayer/album=2423573174/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          a_string: 'City: Works Of Fiction (Expanded Edition) by Jon Hassell',
          rule: {
            "monday": [ 25, 28, 3, 15 ],
            "tuesday": [ 24, 28, 3, 15 ],
            "wednesday": [ 24, 27, 3, 14 ],
            "thursday": [ 22, 30, 2, 13 ],
            "saturday": [ 26, 30, 6, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2737996611/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jonhassell.bandcamp.com/album/remixes',
          a_string: 'Remixes by Jon Hassell',
          rule: {
            "monday": [ 26, 30, 6, 17 ],
            "tuesday": [ 25, 28, 3, 15 ],
            "wednesday": [ 24, 28, 3, 15 ],
            "thursday": [ 24, 27, 3, 14 ],
            "saturday": [ 22, 30, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3296574152/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mickchillage.bandcamp.com/album/between-the-endless-silence',
          a_string: 'Between the Endless Silence by Mick Chillage',
          rule: {
            "monday": [ 22, 30, 2, 13 ],
            "tuesday": [ 26, 30, 6, 17 ],
            "wednesday": [ 25, 28, 3, 15 ],
            "thursday": [ 24, 28, 3, 15 ],
            "saturday": [ 24, 27, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3074000037/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mickchillage.bandcamp.com/album/harmonic-connections',
          a_string: 'Harmonic Connections by Mick Chillage',
          rule: {
            "monday": [ 24, 27, 3, 14 ],
            "tuesday": [ 22, 30, 2, 13 ],
            "wednesday": [ 26, 30, 6, 17 ],
            "thursday": [ 25, 28, 3, 15 ],
            "saturday": [ 24, 28, 3, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3468505756/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mickchillage.bandcamp.com/album/skua-atlantic-atlantic-fusion',
          a_string: 'Skua Atlantic: Atlantic Fusion by Mick Chillage',
          rule: {
            "monday": [ 24, 28, 3, 15 ],
            "tuesday": [ 24, 27, 3, 14 ],
            "wednesday": [ 22, 30, 2, 13 ],
            "thursday": [ 26, 30, 6, 17 ],
            "saturday": [ 25, 28, 3, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2255513558/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://christinavantzou.bandcamp.com/album/no-4',
          a_string: 'No. 4 by christina vantzou',
          rule: {
            "monday": [ 25, 28, 3, 15 ],
            "tuesday": [ 24, 28, 3, 15 ],
            "wednesday": [ 24, 27, 3, 14 ],
            "thursday": [ 22, 30, 2, 13 ],
            "saturday": [ 26, 30, 6, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4182429613/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williamselman.bandcamp.com/album/musica-enterrada',
          a_string: 'Musica Enterrada by William Selman',
          rule: {
            "monday": [ 27, 1, 7, 18 ],
            "tuesday": [ 26, 29, 4, 16 ],
            "wednesday": [ 25, 29, 4, 16 ],
            "thursday": [ 25, 28, 4, 15 ],
            "saturday": [ 23, 1, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1937315283/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williamselman.bandcamp.com/album/urbanism-and-ecology',
          a_string: 'Urbanism and Ecology by William Selman',
          rule: {
            "monday": [ 23, 1, 3, 14 ],
            "tuesday": [ 27, 1, 7, 18 ],
            "wednesday": [ 26, 29, 4, 16 ],
            "thursday": [ 25, 29, 4, 16 ],
            "saturday": [ 25, 28, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3985436603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hiddenvibes.bandcamp.com/album/journey-to-the-end-of-august',
          a_string: 'Journey To The End Of August by Chihei Hatakeyama',
          rule: {
            "monday": [ 25, 28, 4, 15 ],
            "tuesday": [ 23, 1, 3, 14 ],
            "wednesday": [ 27, 1, 7, 18 ],
            "thursday": [ 26, 29, 4, 16 ],
            "saturday": [ 25, 29, 4, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1081083562/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hiddenvibes.bandcamp.com/album/betelgeuse',
          a_string: 'Betelgeuse by Hakobune',
          rule: {
            "monday": [ 25, 29, 4, 16 ],
            "tuesday": [ 25, 28, 4, 15 ],
            "wednesday": [ 23, 1, 3, 14 ],
            "thursday": [ 27, 1, 7, 18 ],
            "saturday": [ 26, 29, 4, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1717427471/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hiddenvibes.bandcamp.com/album/orient',
          a_string: 'Orient by Olan Mill',
          rule: {
            "monday": [ 26, 29, 4, 16 ],
            "tuesday": [ 25, 29, 4, 16 ],
            "wednesday": [ 25, 28, 4, 15 ],
            "thursday": [ 23, 1, 3, 14 ],
            "saturday": [ 27, 1, 7, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2960999910/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://senufoeditions.bandcamp.com/album/geelriandre-arthesis',
          a_string: 'Geelriandre / Arthesis by Eliane Radigue',
          rule: {
            "monday": [ 27, 1, 7, 18 ],
            "tuesday": [ 26, 29, 4, 16 ],
            "wednesday": [ 25, 29, 4, 16 ],
            "thursday": [ 25, 28, 4, 15 ],
            "saturday": [ 23, 1, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1359358707/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://senufoeditions.bandcamp.com/album/luftl-cher',
          a_string: 'Luftlöcher by Jennifer Veillerobe',
          rule: {
            "monday": [ 23, 1, 3, 14 ],
            "tuesday": [ 27, 1, 7, 18 ],
            "wednesday": [ 26, 29, 4, 16 ],
            "thursday": [ 25, 29, 4, 16 ],
            "saturday": [ 25, 28, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1346276534/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://senufoeditions.bandcamp.com/album/rhetorical-islands',
          a_string: 'Rhetorical Islands by Giuseppe Ielasi',
          rule: {
            "monday": [ 26, 29, 5, 16 ],
            "tuesday": [ 24, 2, 4, 15 ],
            "wednesday": [ 28, 2, 8, 19 ],
            "thursday": [ 27, 30, 5, 17 ],
            "saturday": [ 26, 30, 5, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2257094086/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://muzaneditions.bandcamp.com/album/ashenden',
          a_string: 'Ashenden by Lee Noble',
          rule: {
            "monday": [ 26, 30, 5, 17 ],
            "tuesday": [ 26, 29, 5, 16 ],
            "wednesday": [ 24, 2, 4, 15 ],
            "thursday": [ 28, 2, 8, 19 ],
            "saturday": [ 27, 30, 5, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2849802117/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://artisanduson.bandcamp.com/album/polarities-2',
          a_string: 'Polarities by ArtisanDuSon',
          rule: {
            "monday": [ 27, 30, 5, 17 ],
            "tuesday": [ 26, 30, 5, 17 ],
            "wednesday": [ 26, 29, 5, 16 ],
            "thursday": [ 24, 2, 4, 15 ],
            "saturday": [ 28, 2, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=720184106/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thomaswalsh.bandcamp.com/album/mechanics-of-deference',
          a_string: 'Mechanics of Deference by Thomas Walsh',
          rule: {
            "monday": [ 28, 2, 8, 19 ],
            "tuesday": [ 27, 30, 5, 17 ],
            "wednesday": [ 26, 30, 5, 17 ],
            "thursday": [ 26, 29, 5, 16 ],
            "saturday": [ 24, 2, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3110761447/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tsone.bandcamp.com/album/the-topography-of-vibrating-bodies-tracks-for-nagual-4',
          a_string: 'The Topography of Vibrating Bodies (tracks for Nagual 4) by tsone',
          rule: {
            "monday": [ 24, 2, 4, 15 ],
            "tuesday": [ 28, 2, 8, 19 ],
            "wednesday": [ 27, 30, 5, 17 ],
            "thursday": [ 26, 30, 5, 17 ],
            "saturday": [ 26, 29, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2848898848/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://odysmod.bandcamp.com/album/i-dreamt-of-forest',
          a_string: 'I dreamt of forest by odysmod',
          rule: {
            "monday": [ 26, 29, 5, 16 ],
            "tuesday": [ 24, 2, 4, 15 ],
            "wednesday": [ 28, 2, 8, 19 ],
            "thursday": [ 27, 30, 5, 17 ],
            "saturday": [ 26, 30, 5, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3109580302/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alaskantapes.bandcamp.com/album/signals-tell',
          a_string: 'Signals/Tell by Alaskan Tapes',
          rule: {
            "monday": [ 26, 30, 5, 17 ],
            "tuesday": [ 26, 29, 5, 16 ],
            "wednesday": [ 24, 2, 4, 15 ],
            "thursday": [ 28, 2, 8, 19 ],
            "saturday": [ 27, 30, 5, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=420111763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chiheihatakeyama.bandcamp.com/album/tears',
          a_string: 'Tears by Rhucle',
          rule: {
            "monday": [ 28, 1, 6, 18 ],
            "tuesday": [ 27, 1, 6, 18 ],
            "wednesday": [ 27, 30, 6, 17 ],
            "thursday": [ 25, 3, 5, 16 ],
            "saturday": [ 29, 3, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2895830833/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deathbybokeh.bandcamp.com/album/yawning-sky',
          a_string: 'Yawning Sky by BOKEH',
          rule: {
            "monday": [ 29, 3, 9, 20 ],
            "tuesday": [ 28, 1, 6, 18 ],
            "wednesday": [ 27, 1, 6, 18 ],
            "thursday": [ 27, 30, 6, 17 ],
            "saturday": [ 25, 3, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3705980354/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deathbybokeh.bandcamp.com/album/entropics',
          a_string: 'Entropics by BOKEH',
          rule: {
            "monday": [ 25, 3, 5, 16 ],
            "tuesday": [ 29, 3, 9, 20 ],
            "wednesday": [ 28, 1, 6, 18 ],
            "thursday": [ 27, 1, 6, 18 ],
            "saturday": [ 27, 30, 6, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3929264978/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://irisarri.bandcamp.com/album/sirimiri',
          a_string: 'Sirimiri by rafael anton irisarri',
          rule: {
            "monday": [ 27, 30, 6, 17 ],
            "tuesday": [ 25, 3, 5, 16 ],
            "wednesday": [ 29, 3, 9, 20 ],
            "thursday": [ 28, 1, 6, 18 ],
            "saturday": [ 27, 1, 6, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2555543799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emerge.bandcamp.com/album/admin',
          a_string: 'admin by FezayaFirar',
          rule: {
            "monday": [ 27, 1, 6, 18 ],
            "tuesday": [ 27, 30, 6, 17 ],
            "wednesday": [ 25, 3, 5, 16 ],
            "thursday": [ 29, 3, 9, 20 ],
            "saturday": [ 28, 1, 6, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3924268770/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pascalsavy.bandcamp.com/album/dislocations',
          a_string: 'Dislocations by pascal savy',
          rule: {
            "monday": [ 28, 1, 6, 18 ],
            "tuesday": [ 27, 1, 6, 18 ],
            "wednesday": [ 27, 30, 6, 17 ],
            "thursday": [ 25, 3, 5, 16 ],
            "saturday": [ 29, 3, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3110502580/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chiheihatakeyama.bandcamp.com/album/butterflys-summer-and-vanished',
          a_string: 'Butterfly&#39;s Summer And Vanished by Chihei Hatakeyama',
          rule: {
            "monday": [ 29, 3, 9, 20 ],
            "tuesday": [ 28, 1, 6, 18 ],
            "wednesday": [ 27, 1, 6, 18 ],
            "thursday": [ 27, 30, 6, 17 ],
            "saturday": [ 25, 3, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=792489759/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chiheihatakeyama.bandcamp.com/album/scene',
          a_string: 'Scene by Chihei Hatakeyama',
          rule: {
            "monday": [ 26, 4, 6, 17 ],
            "tuesday": [ 30, 4, 10, 21 ],
            "wednesday": [ 29, 2, 7, 19 ],
            "thursday": [ 28, 2, 7, 19 ],
            "saturday": [ 28, 1, 7, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=608320894/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chiheihatakeyama.bandcamp.com/album/olreilion',
          a_string: 'Olreilion by Marty Hicks',
          rule: {
            "monday": [ 28, 1, 7, 18 ],
            "tuesday": [ 26, 4, 6, 17 ],
            "wednesday": [ 30, 4, 10, 21 ],
            "thursday": [ 29, 2, 7, 19 ],
            "saturday": [ 28, 2, 7, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1093677203/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://muzaneditions.bandcamp.com/album/liederbuch',
          a_string: 'Liederbuch by Günter Schlienz',
          rule: {
            "monday": [ 28, 2, 7, 19 ],
            "tuesday": [ 28, 1, 7, 18 ],
            "wednesday": [ 26, 4, 6, 17 ],
            "thursday": [ 30, 4, 10, 21 ],
            "saturday": [ 29, 2, 7, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3396160897/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://muzaneditions.bandcamp.com/album/elegy',
          a_string: 'Elegy by H. Takahashi',
          rule: {
            "monday": [ 29, 2, 7, 19 ],
            "tuesday": [ 28, 2, 7, 19 ],
            "wednesday": [ 28, 1, 7, 18 ],
            "thursday": [ 26, 4, 6, 17 ],
            "saturday": [ 30, 4, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1309080454/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://muzaneditions.bandcamp.com/album/the-are-no-endings',
          a_string: 'There Are No Endings by April Larson',
          rule: {
            "monday": [ 30, 4, 10, 21 ],
            "tuesday": [ 29, 2, 7, 19 ],
            "wednesday": [ 28, 2, 7, 19 ],
            "thursday": [ 28, 1, 7, 18 ],
            "saturday": [ 26, 4, 6, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=784018938/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shimmeringmoodsrecords.bandcamp.com/album/the-turn-of-the-screw',
          a_string: 'The turn of the screw by Boban Ristevski',
          rule: {
            "monday": [ 26, 4, 6, 17 ],
            "tuesday": [ 30, 4, 10, 21 ],
            "wednesday": [ 29, 2, 7, 19 ],
            "thursday": [ 28, 2, 7, 19 ],
            "saturday": [ 28, 1, 7, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1360884465/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lichens-are-alive.bandcamp.com/album/the-psychic-nature-of-being',
          a_string: 'The Psychic Nature Of Being by Lichens',
          rule: {
            "monday": [ 28, 1, 7, 18 ],
            "tuesday": [ 26, 4, 6, 17 ],
            "wednesday": [ 30, 4, 10, 21 ],
            "thursday": [ 29, 2, 7, 19 ],
            "saturday": [ 28, 2, 7, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1880505340/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hallowground.bandcamp.com/album/kali-malone-cast-of-mind',
          a_string: 'KALI MALONE - Cast of Mind by Kali Malone',
          rule: {
            "monday": [ 29, 3, 8, 20 ],
            "tuesday": [ 29, 2, 8, 19 ],
            "wednesday": [ 27, 5, 7, 18 ],
            "thursday": [ 1, 5, 11, 22 ],
            "saturday": [ 30, 3, 8, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4035040445/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newatlantismusic.bandcamp.com/album/jq-invisible',
          a_string: 'JQ - INVISIBLE by New Atlantis',
          rule: {
            "monday": [ 30, 3, 8, 20 ],
            "tuesday": [ 29, 3, 8, 20 ],
            "wednesday": [ 29, 2, 8, 19 ],
            "thursday": [ 27, 5, 7, 18 ],
            "saturday": [ 1, 5, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1188515852/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://humanhoodrecordings.bandcamp.com/album/five-ghosts',
          a_string: 'five ghosts by Thaniel Ion Lee',
          rule: {
            "monday": [ 1, 5, 11, 22 ],
            "tuesday": [ 30, 3, 8, 20 ],
            "wednesday": [ 29, 3, 8, 20 ],
            "thursday": [ 29, 2, 8, 19 ],
            "saturday": [ 27, 5, 7, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3774818434/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bloompunch.bandcamp.com/album/dawn-on-bridge-277',
          a_string: 'Dawn on Bridge 277 by Wolfarena',
          rule: {
            "monday": [ 27, 5, 7, 18 ],
            "tuesday": [ 1, 5, 11, 22 ],
            "wednesday": [ 30, 3, 8, 20 ],
            "thursday": [ 29, 3, 8, 20 ],
            "saturday": [ 29, 2, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4081210137/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yialmelicfrequencies.bandcamp.com/album/yililok',
          a_string: 'Yililok by Yialmelic Frequencies',
          rule: {
            "monday": [ 29, 2, 8, 19 ],
            "tuesday": [ 27, 5, 7, 18 ],
            "wednesday": [ 1, 5, 11, 22 ],
            "thursday": [ 30, 3, 8, 20 ],
            "saturday": [ 29, 3, 8, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3639965039/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://auralsonification.bandcamp.com/album/sonic-metamorphosis-arl001',
          a_string: 'Sonic Metamorphosis - [ARL001] by AURAL',
          rule: {
            "monday": [ 29, 3, 8, 20 ],
            "tuesday": [ 29, 2, 8, 19 ],
            "wednesday": [ 27, 5, 7, 18 ],
            "thursday": [ 1, 5, 11, 22 ],
            "saturday": [ 30, 3, 8, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3112761787/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bruinebeer.bandcamp.com/album/non-particular-dream-keno-uitslag',
          a_string: 'Non-particular dream/keno uitslag by Bruine Beer',
          rule: {
            "monday": [ 30, 3, 8, 20 ],
            "tuesday": [ 29, 3, 8, 20 ],
            "wednesday": [ 29, 2, 8, 19 ],
            "thursday": [ 27, 5, 7, 18 ],
            "saturday": [ 1, 5, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=349351652/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alexzhanghungtai.bandcamp.com/album/divine-weight-2',
          a_string: 'Divine Weight by Alex Zhang Hungtai',
          rule: {
            "monday": [ 2, 6, 12, 23 ],
            "tuesday": [ 1, 4, 9, 21 ],
            "wednesday": [ 30, 4, 9, 21 ],
            "thursday": [ 30, 3, 9, 20 ],
            "saturday": [ 28, 6, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1682048125/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rhucle.bandcamp.com/album/a-little-long-day',
          a_string: 'A Little Long Day by Rhucle',
          rule: {
            "monday": [ 28, 6, 8, 19 ],
            "tuesday": [ 2, 6, 12, 23 ],
            "wednesday": [ 1, 4, 9, 21 ],
            "thursday": [ 30, 4, 9, 21 ],
            "saturday": [ 30, 3, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3730046507/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dandelion111.bandcamp.com/album/endless-descent-ep',
          a_string: 'endless descent EP by dandelion',
          rule: {
            "monday": [ 30, 3, 9, 20 ],
            "tuesday": [ 28, 6, 8, 19 ],
            "wednesday": [ 2, 6, 12, 23 ],
            "thursday": [ 1, 4, 9, 21 ],
            "saturday": [ 30, 4, 9, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1734420541/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newatlantismusic.bandcamp.com/album/wild-adoration-ep1',
          a_string: 'Wild Adoration - EP1 by Wild Adoration',
          rule: {
            "monday": [ 30, 4, 9, 21 ],
            "tuesday": [ 30, 3, 9, 20 ],
            "wednesday": [ 28, 6, 8, 19 ],
            "thursday": [ 2, 6, 12, 23 ],
            "saturday": [ 1, 4, 9, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3894302610/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deeplearning.bandcamp.com/album/soft-confidence',
          a_string: 'Soft Confidence by D E E P  L E A R N I N G',
          rule: {
            "monday": [ 1, 4, 9, 21 ],
            "tuesday": [ 30, 4, 9, 21 ],
            "wednesday": [ 30, 3, 9, 20 ],
            "thursday": [ 28, 6, 8, 19 ],
            "saturday": [ 2, 6, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3976001204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://metronrecords.bandcamp.com/album/moment-selected-works-2012-2017',
          a_string: 'Moment (Selected Works 2012-2017) by 7FO',
          rule: {
            "monday": [ 2, 6, 12, 23 ],
            "tuesday": [ 1, 4, 9, 21 ],
            "wednesday": [ 30, 4, 9, 21 ],
            "thursday": [ 30, 3, 9, 20 ],
            "saturday": [ 28, 6, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1358508695/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'https://bandcamp.com/EmbeddedPlayer/album=1358508695/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          a_string: 'Hollow Siren by Clara Warnaar',
          rule: {
            "monday": [ 28, 6, 8, 19 ],
            "tuesday": [ 2, 6, 12, 23 ],
            "wednesday": [ 1, 4, 9, 21 ],
            "thursday": [ 30, 4, 9, 21 ],
            "saturday": [ 30, 3, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=434031615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://111sound.bandcamp.com/album/absolute',
          a_string: '⊙ (Absolute) by 111',
          rule: {
            "monday": [ 1, 4, 10, 21 ],
            "tuesday": [ 29, 7, 9, 20 ],
            "wednesday": [ 3, 7, 13, 24 ],
            "thursday": [ 2, 5, 10, 22 ],
            "saturday": [ 1, 5, 10, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=98421795/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mlnkym.bandcamp.com/album/floating-to-kill-time',
          a_string: 'FLOATING TO KILL TIME by Nakayama Munetoshi',
          rule: {
            "monday": [ 1, 5, 10, 22 ],
            "tuesday": [ 1, 4, 10, 21 ],
            "wednesday": [ 29, 7, 9, 20 ],
            "thursday": [ 3, 7, 13, 24 ],
            "saturday": [ 2, 5, 10, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2061323533/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://polarseasrecordings.bandcamp.com/album/obsolescence-programm-e',
          a_string: 'Obsolescence Programmée by Mathieu Lamontagne',
          rule: {
            "monday": [ 2, 5, 10, 22 ],
            "tuesday": [ 1, 5, 10, 22 ],
            "wednesday": [ 1, 4, 10, 21 ],
            "thursday": [ 29, 7, 9, 20 ],
            "saturday": [ 3, 7, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2502707117/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://polarseasrecordings.bandcamp.com/album/strings-and-clusters',
          a_string: 'Strings and Clusters by Mikael Lind',
          rule: {
            "monday": [ 3, 7, 13, 24 ],
            "tuesday": [ 2, 5, 10, 22 ],
            "wednesday": [ 1, 5, 10, 22 ],
            "thursday": [ 1, 4, 10, 21 ],
            "saturday": [ 29, 7, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2894965600/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://primitiveair.bandcamp.com/album/creation-hymn-pre-order',
          a_string: 'Creation Hymn (PRE-ORDER) by Primitive Air',
          rule: {
            "monday": [ 29, 7, 9, 20 ],
            "tuesday": [ 3, 7, 13, 24 ],
            "wednesday": [ 2, 5, 10, 22 ],
            "thursday": [ 1, 5, 10, 22 ],
            "saturday": [ 1, 4, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3478549820/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aguirrerecords.bandcamp.com/album/pass-hidingly-seek',
          a_string: 'Pass Hidingly Seek by Xiphiidae',
          rule: {
            "monday": [ 1, 4, 10, 21 ],
            "tuesday": [ 29, 7, 9, 20 ],
            "wednesday": [ 3, 7, 13, 24 ],
            "thursday": [ 2, 5, 10, 22 ],
            "saturday": [ 1, 5, 10, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3241180374/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aguirrerecords.bandcamp.com/album/quaking-myth',
          a_string: 'Quaking Myth by Xiphiidae',
          rule: {
            "monday": [ 1, 5, 10, 22 ],
            "tuesday": [ 1, 4, 10, 21 ],
            "wednesday": [ 29, 7, 9, 20 ],
            "thursday": [ 3, 7, 13, 24 ],
            "saturday": [ 2, 5, 10, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1822968555/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/mirage-reworks',
          a_string: 'mirage (reworks) by dziadosz/mreńca',
          rule: {
            "monday": [ 3, 6, 11, 23 ],
            "tuesday": [ 2, 6, 11, 23 ],
            "wednesday": [ 2, 5, 11, 22 ],
            "thursday": [ 30, 8, 10, 21 ],
            "saturday": [ 4, 8, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2921453655/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'ttp://olivercoates.bandcamp.com/album/shelleys-on-zenn-la',
          a_string: 'Shelley&#39;s on Zenn-La by Oliver Coates',
          rule: {
            "monday": [ 4, 8, 14, 25 ],
            "tuesday": [ 3, 6, 11, 23 ],
            "wednesday": [ 2, 6, 11, 23 ],
            "thursday": [ 2, 5, 11, 22 ],
            "saturday": [ 30, 8, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2731154045/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://olivercoates.bandcamp.com/album/upstepping',
          a_string: 'Upstepping by Oliver Coates',
          rule: {
            "monday": [ 30, 8, 10, 21 ],
            "tuesday": [ 4, 8, 14, 25 ],
            "wednesday": [ 3, 6, 11, 23 ],
            "thursday": [ 2, 6, 11, 23 ],
            "saturday": [ 2, 5, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=259905057/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://muzaneditions.bandcamp.com/album/idea-region',
          a_string: 'Idea Region by N. Chambers',
          rule: {
            "monday": [ 2, 5, 11, 22 ],
            "tuesday": [ 30, 8, 10, 21 ],
            "wednesday": [ 4, 8, 14, 25 ],
            "thursday": [ 3, 6, 11, 23 ],
            "saturday": [ 2, 6, 11, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4042999787/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://billygomberg.bandcamp.com/album/quiet-barrier',
          a_string: 'quiet barrier by Billy Gomberg',
          rule: {
            "monday": [ 2, 6, 11, 23 ],
            "tuesday": [ 2, 5, 11, 22 ],
            "wednesday": [ 30, 8, 10, 21 ],
            "thursday": [ 4, 8, 14, 25 ],
            "saturday": [ 3, 6, 11, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=174282234/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://billygomberg.bandcamp.com/album/beginners',
          a_string: 'Beginners by Billy Gomberg',
          rule: {
            "monday": [ 3, 6, 11, 23 ],
            "tuesday": [ 2, 6, 11, 23 ],
            "wednesday": [ 2, 5, 11, 22 ],
            "thursday": [ 30, 8, 10, 21 ],
            "saturday": [ 4, 8, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=760632817/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://billygomberg.bandcamp.com/album/a-changed-meaning',
          a_string: 'A Changed Meaning by Billy Gomberg',
          rule: {
            "monday": [ 4, 8, 14, 25 ],
            "tuesday": [ 3, 6, 11, 23 ],
            "wednesday": [ 2, 6, 11, 23 ],
            "thursday": [ 2, 5, 11, 22 ],
            "saturday": [ 30, 8, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3298343998/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://muzaneditions.bandcamp.com/album/reflections-in-dust',
          a_string: 'Reflections in Dust by Anthéne',
          rule: {
            "monday": [ 1, 9, 11, 22 ],
            "tuesday": [ 5, 9, 15, 26 ],
            "wednesday": [ 4, 7, 12, 24 ],
            "thursday": [ 3, 7, 12, 24 ],
            "saturday": [ 3, 6, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1788200600/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blankembrace.bandcamp.com/album/ledice',
          a_string: 'ledice by Blank Embrace',
          rule: {
            "monday": [ 3, 6, 12, 23 ],
            "tuesday": [ 1, 9, 11, 22 ],
            "wednesday": [ 5, 9, 15, 26 ],
            "thursday": [ 4, 7, 12, 24 ],
            "saturday": [ 3, 7, 12, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3312029543/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eiderdownrecords.bandcamp.com/album/somesurprises-serious-dreams',
          a_string: 'somesurprises &quot;serious dreams&quot; by somesurprises',
          rule: {
            "monday": [ 3, 7, 12, 24 ],
            "tuesday": [ 3, 6, 12, 23 ],
            "wednesday": [ 1, 9, 11, 22 ],
            "thursday": [ 5, 9, 15, 26 ],
            "saturday": [ 4, 7, 12, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2904319098/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bubble9.bandcamp.com/album/--6',
          a_string: 'म by Bubble',
          rule: {
            "monday": [ 4, 7, 12, 24 ],
            "tuesday": [ 3, 7, 12, 24 ],
            "wednesday": [ 3, 6, 12, 23 ],
            "thursday": [ 1, 9, 11, 22 ],
            "saturday": [ 5, 9, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2736589653/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://slowtide89.bandcamp.com/album/without-you',
          a_string: 'Without You by Slow Tide',
          rule: {
            "monday": [ 5, 9, 15, 26 ],
            "tuesday": [ 4, 7, 12, 24 ],
            "wednesday": [ 3, 7, 12, 24 ],
            "thursday": [ 3, 6, 12, 23 ],
            "saturday": [ 1, 9, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4196900354/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yamaneko.bandcamp.com/album/afterglow',
          a_string: 'Afterglow by Yamaneko',
          rule: {
            "monday": [ 1, 9, 11, 22 ],
            "tuesday": [ 5, 9, 15, 26 ],
            "wednesday": [ 4, 7, 12, 24 ],
            "thursday": [ 3, 7, 12, 24 ],
            "saturday": [ 3, 6, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=214417448/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://danieldorobantu.bandcamp.com/album/cartea-de-piatra',
          a_string: 'Cartea De Piatra by Petre Ionutescu &amp; Daniel Dorobantu',
          rule: {
            "monday": [ 3, 6, 12, 23 ],
            "tuesday": [ 1, 9, 11, 22 ],
            "wednesday": [ 5, 9, 15, 26 ],
            "thursday": [ 4, 7, 12, 24 ],
            "saturday": [ 3, 7, 12, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1122323130/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://danielfine.bandcamp.com/album/still-life',
          a_string: 'still life by still life',
          rule: {
            "monday": [ 4, 8, 13, 25 ],
            "tuesday": [ 4, 7, 13, 24 ],
            "wednesday": [ 2, 10, 12, 27 ],
            "thursday": [ 6, 10, 16, 27 ],
            "saturday": [ 5, 8, 13, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4022061967/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mlesprg.bandcamp.com/album/mount-vision',
          a_string: 'Mount Vision by Emily A. Sprague',
          rule: {
            "monday": [ 5, 8, 13, 25 ],
            "tuesday": [ 4, 8, 13, 25 ],
            "wednesday": [ 4, 7, 13, 24 ],
            "thursday": [ 2, 10, 12, 27 ],
            "saturday": [ 6, 10, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1574299415/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://endurance010010.bandcamp.com/album/celestial-governors',
          a_string: 'Celestial Governors by Endurance',
          rule: {
            "monday": [ 6, 10, 16, 27 ],
            "tuesday": [ 5, 8, 13, 25 ],
            "wednesday": [ 4, 8, 13, 25 ],
            "thursday": [ 4, 7, 13, 24 ],
            "saturday": [ 2, 10, 12, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3692626582/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intergalacticresearchinstituteforsound.bandcamp.com/album/the-moment-just',
          a_string: 'The Moment Just by Irakli &amp; Zesknel',
          rule: {
            "monday": [ 2, 10, 12, 27 ],
            "tuesday": [ 6, 10, 16, 27 ],
            "wednesday": [ 5, 8, 13, 25 ],
            "thursday": [ 4, 8, 13, 25 ],
            "saturday": [ 4, 7, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=18581670/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://handsinthedarkrecords.bandcamp.com/album/roche',
          a_string: 'Roche by Mayerling',
          rule: {
            "monday": [ 4, 7, 13, 24 ],
            "tuesday": [ 2, 10, 12, 27 ],
            "wednesday": [ 6, 10, 16, 27 ],
            "thursday": [ 5, 8, 13, 25 ],
            "saturday": [ 4, 8, 13, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2560569141/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quiettimetapes.bandcamp.com/album/love-discipline-qtt11',
          a_string: 'Love Discipline (QTT11) by Debit',
          rule: {
            "monday": [ 4, 8, 13, 25 ],
            "tuesday": [ 4, 7, 13, 24 ],
            "wednesday": [ 2, 10, 12, 27 ],
            "thursday": [ 6, 10, 16, 27 ],
            "saturday": [ 5, 8, 13, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3965364011/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://touch333.bandcamp.com/album/ecce-homo',
          a_string: 'ECCE HOMO by Ipek Gorgun',
          rule: {
            "monday": [ 5, 8, 13, 25 ],
            "tuesday": [ 4, 8, 13, 25 ],
            "wednesday": [ 4, 7, 13, 24 ],
            "thursday": [ 2, 10, 12, 27 ],
            "saturday": [ 6, 10, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1907411715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lunariamusic.bandcamp.com/album/water-mind',
          a_string: 'Water Mind by Lunaria',
          rule: {
            "monday": [ 7, 11, 17, 28 ],
            "tuesday": [ 6, 9, 14, 26 ],
            "wednesday": [ 5, 8, 14, 26 ],
            "thursday": [ 5, 8, 14, 25 ],
            "saturday": [ 3, 11, 13, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3644717018/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orphax.bandcamp.com/album/saxophone-studies',
          a_string: 'Saxophone Studies by Orphax',
          rule: {
            "monday": [ 3, 11, 13, 28 ],
            "tuesday": [ 7, 11, 17, 28 ],
            "wednesday": [ 6, 9, 14, 26 ],
            "thursday": [ 5, 8, 14, 26 ],
            "saturday": [ 5, 8, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3674765725/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orphax.bandcamp.com/album/circles',
          a_string: 'Circles by Orphax',
          rule: {
            "monday": [ 5, 8, 14, 25 ],
            "tuesday": [ 3, 11, 13, 28 ],
            "wednesday": [ 7, 11, 17, 28 ],
            "thursday": [ 6, 9, 14, 26 ],
            "saturday": [ 5, 8, 14, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4159491793/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orphax.bandcamp.com/album/a-summers-end',
          a_string: 'A Summer&#39;s End by Orphax',
          rule: {
            "monday": [ 5, 8, 14, 26 ],
            "tuesday": [ 5, 8, 14, 25 ],
            "wednesday": [ 3, 11, 13, 28 ],
            "thursday": [ 7, 11, 17, 28 ],
            "saturday": [ 6, 9, 14, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3141208454/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://handsinthedarkrecords.bandcamp.com/album/alpestres',
          a_string: 'Alpestres by Matthias Puech',
          rule: {
            "monday": [ 6, 9, 14, 26 ],
            "tuesday": [ 5, 8, 14, 26 ],
            "wednesday": [ 5, 8, 14, 25 ],
            "thursday": [ 3, 11, 13, 28 ],
            "saturday": [ 7, 11, 17, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=327223299/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/ways-of-stillness',
          a_string: 'ways of stillness by vau',
          rule: {
            "monday": [ 7, 11, 17, 28 ],
            "tuesday": [ 6, 9, 14, 26 ],
            "wednesday": [ 5, 8, 14, 26 ],
            "thursday": [ 5, 8, 14, 25 ],
            "saturday": [ 3, 11, 13, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3440966334/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://celer.bandcamp.com/album/the-everything-and-the-nothing',
          a_string: 'The Everything and the Nothing by Celer',
          rule: {
            "monday": [ 3, 11, 13, 28 ],
            "tuesday": [ 7, 11, 17, 28 ],
            "wednesday": [ 6, 9, 14, 26 ],
            "thursday": [ 5, 8, 14, 26 ],
            "saturday": [ 5, 8, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=4071517596/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://longformeditions.bandcamp.com/track/improvisation-for-piano-in-summer-2018',
          a_string: 'Improvisation for Piano in Summer 2018 by Midori Hirano',
          rule: {
            "monday": [ 6, 9, 15, 26 ],
            "tuesday": [ 4, 12, 14, 29 ],
            "wednesday": [ 8, 12, 18, 29 ],
            "thursday": [ 7, 10, 15, 27 ],
            "saturday": [ 6, 9, 15, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=1762135904/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://longformeditions.bandcamp.com/track/monolithic-nuance',
          a_string: 'Monolithic Nuance by Cruel Diagonals',
          rule: {
            "monday": [ 6, 9, 15, 27 ],
            "tuesday": [ 6, 9, 15, 26 ],
            "wednesday": [ 4, 12, 14, 29 ],
            "thursday": [ 8, 12, 18, 29 ],
            "saturday": [ 7, 10, 15, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=689288959/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://penelopetrappes.bandcamp.com/album/penelope-two',
          a_string: 'Penelope Two by Penelope Trappes',
          rule: {
            "monday": [ 7, 10, 15, 27 ],
            "tuesday": [ 6, 9, 15, 27 ],
            "wednesday": [ 6, 9, 15, 26 ],
            "thursday": [ 4, 12, 14, 29 ],
            "saturday": [ 8, 12, 18, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3856124138/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://allsaintscompilations.bandcamp.com/album/music-for-films-iii',
          a_string: 'Music For Films III by Various Artists',
          rule: {
            "monday": [ 8, 12, 18, 29 ],
            "tuesday": [ 7, 10, 15, 27 ],
            "wednesday": [ 6, 9, 15, 27 ],
            "thursday": [ 6, 9, 15, 26 ],
            "saturday": [ 4, 12, 14, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2973834649/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rogereno.bandcamp.com/album/damage',
          a_string: 'Damage by Roger Eno &amp; Lol Hammond',
          rule: {
            "monday": [ 4, 12, 14, 29 ],
            "tuesday": [ 8, 12, 18, 29 ],
            "wednesday": [ 7, 10, 15, 27 ],
            "thursday": [ 6, 9, 15, 27 ],
            "saturday": [ 6, 9, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1131155234/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rogereno.bandcamp.com/album/swimming',
          a_string: 'Swimming by Roger Eno',
          rule: {
            "monday": [ 6, 9, 15, 26 ],
            "tuesday": [ 4, 12, 14, 29 ],
            "wednesday": [ 8, 12, 18, 29 ],
            "thursday": [ 7, 10, 15, 27 ],
            "saturday": [ 6, 9, 15, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3812261206/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/disappearing-in-a-mirror',
          a_string: 'Disappearing In A Mirror by GIULIO ALDINUCCI',
          rule: {
            "monday": [ 6, 9, 15, 27 ],
            "tuesday": [ 6, 9, 15, 26 ],
            "wednesday": [ 4, 12, 14, 29 ],
            "thursday": [ 8, 12, 18, 29 ],
            "saturday": [ 7, 10, 15, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=403598925/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hallowground.bandcamp.com/album/siavash-amini-foras',
          a_string: 'SIAVASH AMINI - FORAS by Siavash Amini',
          rule: {
            "monday": [ 8, 11, 16, 28 ],
            "tuesday": [ 7, 10, 16, 28 ],
            "wednesday": [ 7, 10, 16, 27 ],
            "thursday": [ 5, 13, 15, 30 ],
            "saturday": [ 9, 13, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3553511796/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ebauche.bandcamp.com/album/mutable',
          a_string: 'Mutable by Ebauche',
          rule: {
            "monday": [ 9, 13, 19, 30 ],
            "tuesday": [ 8, 11, 16, 28 ],
            "wednesday": [ 7, 10, 16, 28 ],
            "thursday": [ 7, 10, 16, 27 ],
            "saturday": [ 5, 13, 15, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3477181664/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timhecker.bandcamp.com/album/konoyo',
          a_string: 'Konoyo by Tim Hecker',
          rule: {
            "monday": [ 5, 13, 15, 30 ],
            "tuesday": [ 9, 13, 19, 30 ],
            "wednesday": [ 8, 11, 16, 28 ],
            "thursday": [ 7, 10, 16, 28 ],
            "saturday": [ 7, 10, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3850167267/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://geographicnorth.bandcamp.com/album/midnight-colours',
          a_string: 'Midnight Colours by Rafael Anton Irisarri',
          rule: {
            "monday": [ 7, 10, 16, 27 ],
            "tuesday": [ 5, 13, 15, 30 ],
            "wednesday": [ 9, 13, 19, 30 ],
            "thursday": [ 8, 11, 16, 28 ],
            "saturday": [ 7, 10, 16, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2356068528/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://harnes-kretzer.bandcamp.com/album/black-noise',
          a_string: 'Black Noise by Harnes Kretzer',
          rule: {
            "monday": [ 7, 10, 16, 28 ],
            "tuesday": [ 7, 10, 16, 27 ],
            "wednesday": [ 5, 13, 15, 30 ],
            "thursday": [ 9, 13, 19, 30 ],
            "saturday": [ 8, 11, 16, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2494733084/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://umorrex.bandcamp.com/album/sirimiri',
          a_string: 'Sirimiri by Rafael Anton Irisarri',
          rule: {
            "monday": [ 8, 11, 16, 28 ],
            "tuesday": [ 7, 10, 16, 28 ],
            "wednesday": [ 7, 10, 16, 27 ],
            "thursday": [ 5, 13, 15, 30 ],
            "saturday": [ 9, 13, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1437754861/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://umorrex.bandcamp.com/album/still-waves-to-a-whisper',
          a_string: 'Still Waves To A Whisper by James Place',
          rule: {
            "monday": [ 9, 13, 19, 30 ],
            "tuesday": [ 8, 11, 16, 28 ],
            "wednesday": [ 7, 10, 16, 28 ],
            "thursday": [ 7, 10, 16, 27 ],
            "saturday": [ 5, 13, 15, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2525052679/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://umorrex.bandcamp.com/album/enormous-pause',
          a_string: 'Enormous Pause by Slows',
          rule: {
            "monday": [ 6, 14, 16, 1 ],
            "tuesday": [ 10, 14, 20, 1 ],
            "wednesday": [ 9, 12, 17, 29 ],
            "thursday": [ 8, 11, 17, 29 ],
            "saturday": [ 8, 11, 17, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1004226220/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://touch333.bandcamp.com/album/the-future-is-a-forward-escape-into-the-past',
          a_string: 'The Future is a Forward Escape Into the Past by Yann Novak',
          rule: {
            "monday": [ 8, 11, 17, 28 ],
            "tuesday": [ 6, 14, 16, 1 ],
            "wednesday": [ 10, 14, 20, 1 ],
            "thursday": [ 9, 12, 17, 29 ],
            "saturday": [ 8, 11, 17, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1648632116/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://grounddemons.bandcamp.com/album/sekar-dmn',
          a_string: 'Sekar DMN by Sekar DMN',
          rule: {
            "monday": [ 8, 11, 17, 29 ],
            "tuesday": [ 8, 11, 17, 28 ],
            "wednesday": [ 6, 14, 16, 1 ],
            "thursday": [ 10, 14, 20, 1 ],
            "saturday": [ 9, 12, 17, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=719334974/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unexplainedsoundsgroup.bandcamp.com/album/anthology-of-electroacoustic-lebanese-music',
          a_string: 'Anthology of Electroacoustic Lebanese music by Various Artists',
          rule: {
            "monday": [ 9, 12, 17, 29 ],
            "tuesday": [ 8, 11, 17, 29 ],
            "wednesday": [ 8, 11, 17, 28 ],
            "thursday": [ 6, 14, 16, 1 ],
            "saturday": [ 10, 14, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1388729084/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://midirarecords.bandcamp.com/album/fragmented-lives',
          a_string: 'Fragmented Lives by Zenjungle',
          rule: {
            "monday": [ 10, 14, 20, 1 ],
            "tuesday": [ 9, 12, 17, 29 ],
            "wednesday": [ 8, 11, 17, 29 ],
            "thursday": [ 8, 11, 17, 28 ],
            "saturday": [ 6, 14, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1512816474/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thevolumesettingsfolder.bandcamp.com/album/always-the-same-never-alike',
          a_string: 'Always The Same, Never Alike by the volume settings folder',
          rule: {
            "monday": [ 6, 14, 16, 1 ],
            "tuesday": [ 10, 14, 20, 1 ],
            "wednesday": [ 9, 12, 17, 29 ],
            "thursday": [ 8, 11, 17, 29 ],
            "saturday": [ 8, 11, 17, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1999772136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dauw.bandcamp.com/album/110317',
          a_string: '11.03.17 by Benoît Pioulard',
          rule: {
            "monday": [ 8, 11, 17, 28 ],
            "tuesday": [ 6, 14, 16, 1 ],
            "wednesday": [ 10, 14, 20, 1 ],
            "thursday": [ 9, 12, 17, 29 ],
            "saturday": [ 8, 11, 17, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2338118920/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://definitelymiami.bandcamp.com/album/definitely-miami',
          a_string: 'Definitely Miami by Definitely Miami',
          rule: {
            "monday": [ 9, 12, 18, 30 ],
            "tuesday": [ 9, 12, 18, 29 ],
            "wednesday": [ 7, 15, 17, 2 ],
            "thursday": [ 11, 15, 21, 2 ],
            "saturday": [ 10, 13, 18, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1921742848/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://flowerroomrecords.bandcamp.com/album/matt-lajoie-the-center-and-the-fringe',
          a_string: 'MATT LAJOIE - The Center and the Fringe by Matt LaJoie',
          rule: {
            "monday": [ 10, 13, 18, 30 ],
            "tuesday": [ 9, 12, 18, 30 ],
            "wednesday": [ 9, 12, 18, 29 ],
            "thursday": [ 7, 15, 17, 2 ],
            "saturday": [ 11, 15, 21, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=811149253/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://guildoflore.bandcamp.com/album/winterstead',
          a_string: 'Winterstead by Guild Of Lore',
          rule: {
            "monday": [ 11, 15, 21, 2 ],
            "tuesday": [ 10, 13, 18, 30 ],
            "wednesday": [ 9, 12, 18, 30 ],
            "thursday": [ 9, 12, 18, 29 ],
            "saturday": [ 7, 15, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3577592787/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alicks14.bandcamp.com/album/unwritten',
          a_string: 'Unwritten by Alicks',
          rule: {
            "monday": [ 7, 15, 17, 2 ],
            "tuesday": [ 11, 15, 21, 2 ],
            "wednesday": [ 10, 13, 18, 30 ],
            "thursday": [ 9, 12, 18, 30 ],
            "saturday": [ 9, 12, 18, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1156791887/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cryochamber.bandcamp.com/album/primal-destination',
          a_string: 'Primal Destination by Dead Melodies',
          rule: {
            "monday": [ 9, 12, 18, 29 ],
            "tuesday": [ 7, 15, 17, 2 ],
            "wednesday": [ 11, 15, 21, 2 ],
            "thursday": [ 10, 13, 18, 30 ],
            "saturday": [ 9, 12, 18, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=824500566/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://surfshop.bandcamp.com/album/ron-jons-surf-shop-sampler-18',
          a_string: 'Ron Jons Surf Shop Sampler &#39;18 by Ron Jons Surf Shop',
          rule: {
            "monday": [ 9, 12, 18, 30 ],
            "tuesday": [ 9, 12, 18, 29 ],
            "wednesday": [ 7, 15, 17, 2 ],
            "thursday": [ 11, 15, 21, 2 ],
            "saturday": [ 10, 13, 18, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2316471282/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://astrangelyisolatedplace.bandcamp.com/album/fade-to-grey',
          a_string: 'Fade To Grey by 36',
          rule: {
            "monday": [ 10, 13, 18, 30 ],
            "tuesday": [ 9, 12, 18, 30 ],
            "wednesday": [ 9, 12, 18, 29 ],
            "thursday": [ 7, 15, 17, 2 ],
            "saturday": [ 11, 15, 21, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=60877583/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://scottthorough.bandcamp.com/album/bird',
          a_string: 'Bird by Scott Thorough',
          rule: {
            "monday": [ 12, 16, 22, 3 ],
            "tuesday": [ 11, 14, 19, 1 ],
            "wednesday": [ 10, 13, 19, 1 ],
            "thursday": [ 10, 13, 19, 30 ],
            "saturday": [ 8, 16, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3690510085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blacktocomm.bandcamp.com/album/seven-horses-for-seven-kings',
          a_string: 'Seven Horses For Seven Kings by BLACK TO COMM',
          rule: {
            "monday": [ 8, 16, 18, 3 ],
            "tuesday": [ 12, 16, 22, 3 ],
            "wednesday": [ 11, 14, 19, 1 ],
            "thursday": [ 10, 13, 19, 1 ],
            "saturday": [ 10, 13, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1588782550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://opaltapes.com/album/second-shift',
          a_string: 'Second Shift by Siavash Amini &amp; Matt Finney',
          rule: {
            "monday": [ 10, 13, 19, 30 ],
            "tuesday": [ 8, 16, 18, 3 ],
            "wednesday": [ 12, 16, 22, 3 ],
            "thursday": [ 11, 14, 19, 1 ],
            "saturday": [ 10, 13, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=587089514/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://robertrich.bandcamp.com/album/tactile-ground',
          a_string: 'Tactile Ground by Robert Rich',
          rule: {
            "monday": [ 10, 13, 19, 1 ],
            "tuesday": [ 10, 13, 19, 30 ],
            "wednesday": [ 8, 16, 18, 3 ],
            "thursday": [ 12, 16, 22, 3 ],
            "saturday": [ 11, 14, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=817376095/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://12kmusic.bandcamp.com/album/break',
          a_string: 'Break by COREY FULLER',
          rule: {
            "monday": [ 11, 14, 19, 1 ],
            "tuesday": [ 10, 13, 19, 1 ],
            "wednesday": [ 10, 13, 19, 30 ],
            "thursday": [ 8, 16, 18, 3 ],
            "saturday": [ 12, 16, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3723768546/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://steveroach.bandcamp.com/album/bloodmoon-rising-complete-5-hour-set',
          a_string: 'Bloodmoon Rising Complete 5 hour set by Steve Roach',
          rule: {
            "monday": [ 11, 14, 19, 1 ],
            "tuesday": [ 10, 13, 19, 1 ],
            "wednesday": [ 10, 13, 19, 30 ],
            "thursday": [ 8, 16, 18, 3 ],
            "saturday": [ 12, 16, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4004534232/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coldwombdescent.bandcamp.com/album/ldaovh-trilogy',
          a_string: 'Ldaovh Trilogy by Cold Womb Descent',
          rule: {
            "monday": [ 12, 16, 22, 3 ],
            "tuesday": [ 11, 14, 19, 1 ],
            "wednesday": [ 10, 13, 19, 1 ],
            "thursday": [ 10, 13, 19, 30 ],
            "saturday": [ 8, 16, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1436126147/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stellardrone.bandcamp.com/album/between-the-rings',
          a_string: 'Between The Rings by Stellardrone',
          rule: {
            "monday": [ 9, 17, 19, 4 ],
            "tuesday": [ 13, 17, 23, 4 ],
            "wednesday": [ 12, 15, 20, 2 ],
            "thursday": [ 11, 14, 20, 1 ],
            "saturday": [ 11, 14, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=55753488/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williambasinski.bandcamp.com/album/on-time-out-of-time',
          a_string: 'On Time Out of Time by William Basinski',
          rule: {
            "monday": [ 11, 14, 20, 30 ],
            "tuesday": [ 9, 17, 19, 4 ],
            "wednesday": [ 13, 17, 23, 4 ],
            "thursday": [ 12, 15, 20, 2 ],
            "saturday": [ 11, 14, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3804346100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://melanohelios.bandcamp.com/album/steps',
          a_string: 'Steps. by Melanohelios',
          rule: {
            "monday": [ 11, 14, 20, 1 ],
            "tuesday": [ 11, 14, 20, 30 ],
            "wednesday": [ 9, 17, 19, 4 ],
            "thursday": [ 13, 17, 23, 4 ],
            "saturday": [ 12, 15, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1394247736/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://robert-scott-thompson.bandcamp.com/album/pale-blue-dot',
          a_string: 'Pale Blue Dot by Robert Scott Thompson',
          rule: {
            "monday": [ 12, 15, 20, 2 ],
            "tuesday": [ 11, 14, 20, 1 ],
            "wednesday": [ 11, 14, 20, 30 ],
            "thursday": [ 9, 17, 19, 4 ],
            "saturday": [ 13, 17, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3835034858/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://synphaera.bandcamp.com/album/particle-horizon',
          a_string: 'Particle Horizon by Ascendant',
          rule: {
            "monday": [ 13, 17, 23, 4 ],
            "tuesday": [ 12, 15, 20, 2 ],
            "wednesday": [ 11, 14, 20, 1 ],
            "thursday": [ 11, 14, 20, 30 ],
            "saturday": [ 9, 17, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1497608324/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://steveroden.bandcamp.com/album/sometime-in-the-late-80s',
          a_string: 'sometime in the late 80s by steve roden',
          rule: {
            "monday": [ 9, 17, 19, 4 ],
            "tuesday": [ 13, 17, 23, 4 ],
            "wednesday": [ 12, 15, 20, 2 ],
            "thursday": [ 11, 14, 20, 1 ],
            "saturday": [ 11, 14, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2864436322/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://richardchartier.bandcamp.com/album/spec',
          a_string: 'spec. by RICHARD CHARTIER + TAYLOR DEUPREE',
          rule: {
            "monday": [ 11, 14, 20, 30 ],
            "tuesday": [ 9, 17, 19, 4 ],
            "wednesday": [ 13, 17, 23, 4 ],
            "thursday": [ 12, 15, 20, 2 ],
            "saturday": [ 11, 14, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2982400654/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trenteoiseaux.bandcamp.com/album/buddha-with-the-sun-face-buddha-with-the-moon-face',
          a_string: 'Buddha with the Sun Face / Buddha with the Moon Face by Bernhard Günter w/Jeph Jerman',
          rule: {
            "monday": [ 12, 15, 21, 2 ],
            "tuesday": [ 12, 15, 21, 1 ],
            "wednesday": [ 10, 18, 20, 5 ],
            "thursday": [ 14, 18, 24, 5 ],
            "saturday": [ 13, 16, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2628575533/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://michaelnortham.bandcamp.com/album/coyot',
          a_string: ':coyot: by mnortham',
          rule: {
            "monday": [ 13, 16, 21, 3 ],
            "tuesday": [ 12, 15, 21, 2 ],
            "wednesday": [ 12, 15, 21, 1 ],
            "thursday": [ 10, 18, 20, 5 ],
            "saturday": [ 14, 18, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3254605162/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trenteoiseaux.bandcamp.com/album/then-silence',
          a_string: 'Then, Silence by Bernhard Günter',
          rule: {
            "monday": [ 14, 18, 24, 5 ],
            "tuesday": [ 13, 16, 21, 3 ],
            "wednesday": [ 12, 15, 21, 2 ],
            "thursday": [ 12, 15, 21, 1 ],
            "saturday": [ 10, 18, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=137877233/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lineimprint.bandcamp.com/album/forms-of-paper-remastered',
          a_string: 'Forms of Paper (remastered) by STEVE RODEN',
          rule: {
            "monday": [ 10, 18, 20, 5 ],
            "tuesday": [ 14, 18, 24, 5 ],
            "wednesday": [ 13, 16, 21, 3 ],
            "thursday": [ 12, 15, 21, 2 ],
            "saturday": [ 12, 15, 21, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2239583996/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lineimprint.bandcamp.com/album/lupe-luep-peul-epul',
          a_string: 'Lupe Luep Peul Epul by MIKI YUI',
          rule: {
            "monday": [ 12, 15, 21, 1 ],
            "tuesday": [ 10, 18, 20, 5 ],
            "wednesday": [ 14, 18, 24, 5 ],
            "thursday": [ 13, 16, 21, 3 ],
            "saturday": [ 12, 15, 21, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3528250070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://roelmeelkop.bandcamp.com/album/momentum',
          a_string: '&lt;Momentum&gt; by Roel Meelkop',
          rule: {
            "monday": [ 12, 15, 21, 2 ],
            "tuesday": [ 12, 15, 21, 1 ],
            "wednesday": [ 10, 18, 20, 5 ],
            "thursday": [ 14, 18, 24, 5 ],
            "saturday": [ 13, 16, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3319271981/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cronica.bandcamp.com/album/further-consequences-of-reinterpretation',
          a_string: 'Further Consequences of Reinterpretation by Paulo Raposo &amp; Marc Behrens',
          rule: {
            "monday": [ 13, 16, 21, 3 ],
            "tuesday": [ 12, 15, 21, 2 ],
            "wednesday": [ 12, 15, 21, 1 ],
            "thursday": [ 10, 18, 20, 5 ],
            "saturday": [ 14, 18, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=288832450/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://12kmusic.bandcamp.com/album/hum',
          a_string: 'Hum by SAWAKO',
          rule: {
            "monday": [ 15, 19, 25, 6 ],
            "tuesday": [ 14, 17, 22, 4 ],
            "wednesday": [ 13, 16, 22, 3 ],
            "thursday": [ 13, 16, 22, 2 ],
            "saturday": [ 11, 19, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=254976655/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://room40.bandcamp.com/album/10-33cm',
          a_string: '10-33CM by I8U',
          rule: {
            "monday": [ 11, 19, 21, 6 ],
            "tuesday": [ 15, 19, 25, 6 ],
            "wednesday": [ 14, 17, 22, 4 ],
            "thursday": [ 13, 16, 22, 3 ],
            "saturday": [ 13, 16, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4086794706/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timhecker.bandcamp.com/album/anoyo',
          a_string: 'Anoyo by Tim Hecker',
          rule: {
            "monday": [ 13, 16, 22, 2 ],
            "tuesday": [ 11, 19, 21, 6 ],
            "wednesday": [ 15, 19, 25, 6 ],
            "thursday": [ 14, 17, 22, 4 ],
            "saturday": [ 13, 16, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 311,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2723188357/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hotelneon.bandcamp.com/album/vanishing-forms',
          a_string: 'Vanishing Forms by Hotel Neon',
          rule: {
            "monday": [ 13, 16, 22, 3 ],
            "tuesday": [ 13, 16, 22, 2 ],
            "wednesday": [ 11, 19, 21, 6 ],
            "thursday": [ 15, 19, 25, 6 ],
            "saturday": [ 14, 17, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 312,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=451693121/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://n5md.bandcamp.com/album/until-here-for-years',
          a_string: 'Until Here For Years by Proem',
          rule: {
            "monday": [ 14, 17, 22, 4 ],
            "tuesday": [ 13, 16, 22, 3 ],
            "wednesday": [ 13, 16, 22, 2 ],
            "thursday": [ 11, 19, 21, 6 ],
            "saturday": [ 15, 19, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 313,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=470081069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://seilrecords.bandcamp.com/album/planetes',
          a_string: 'Planetes by Sofie Birch',
          rule: {
            "monday": [ 15, 19, 25, 6 ],
            "tuesday": [ 14, 17, 22, 4 ],
            "wednesday": [ 13, 16, 22, 3 ],
            "thursday": [ 13, 16, 22, 2 ],
            "saturday": [ 11, 19, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 314,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2847565201/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cosmicleaf.bandcamp.com/album/entitas',
          a_string: 'Entitas by Dense &amp; Translippers',
          rule: {
            "monday": [ 11, 19, 21, 6 ],
            "tuesday": [ 15, 19, 25, 6 ],
            "wednesday": [ 14, 17, 22, 4 ],
            "thursday": [ 13, 16, 22, 3 ],
            "saturday": [ 13, 16, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 315,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=156097262/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://archivesdubmusic.bandcamp.com/album/lost-channel',
          a_string: 'Lost Channel by anthéne',
          rule: {
            "monday": [ 14, 17, 23, 3 ],
            "tuesday": [ 12, 20, 22, 7 ],
            "wednesday": [ 16, 20, 26, 7 ],
            "thursday": [ 15, 18, 23, 5 ],
            "saturday": [ 14, 17, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 316,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3694370509/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://symbolgroup.bandcamp.com/album/breaks',
          a_string: 'breaks by alphabets',
          rule: {
            "monday": [ 14, 17, 23, 4 ],
            "tuesday": [ 14, 17, 23, 3 ],
            "wednesday": [ 12, 20, 22, 7 ],
            "thursday": [ 16, 20, 26, 7 ],
            "saturday": [ 15, 18, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 317,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1194441628/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://urbanwavesrecords.bandcamp.com/album/organized',
          a_string: 'Organized by Jesse Koolhaas',
          rule: {
            "monday": [ 15, 18, 23, 5 ],
            "tuesday": [ 14, 17, 23, 4 ],
            "wednesday": [ 14, 17, 23, 3 ],
            "thursday": [ 12, 20, 22, 7 ],
            "saturday": [ 16, 20, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 318,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3764144017/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://annannie.bandcamp.com/album/wander-into',
          a_string: 'wander into by ann annie',
          rule: {
            "monday": [ 16, 20, 26, 7 ],
            "tuesday": [ 15, 18, 23, 5 ],
            "wednesday": [ 14, 17, 23, 4 ],
            "thursday": [ 14, 17, 23, 3 ],
            "saturday": [ 12, 20, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 319,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2436273230/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://biosphere.bandcamp.com/album/the-senja-recordings',
          a_string: 'The Senja Recordings by Biosphere',
          rule: {
            "monday": [ 12, 20, 22, 7 ],
            "tuesday": [ 16, 20, 26, 7 ],
            "wednesday": [ 15, 18, 23, 5 ],
            "thursday": [ 14, 17, 23, 4 ],
            "saturday": [ 14, 17, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 320,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2819716286/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://josephinewiggs.bandcamp.com/album/we-fall',
          a_string: 'We Fall by Josephine Wiggs',
          rule: {
            "monday": [ 14, 17, 23, 3 ],
            "tuesday": [ 12, 20, 22, 7 ],
            "wednesday": [ 16, 20, 26, 7 ],
            "thursday": [ 15, 18, 23, 5 ],
            "saturday": [ 14, 17, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 321,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3111169015/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://danielwohl.bandcamp.com/album/tat',
          a_string: 'État by Daniel Wohl',
          rule: {
            "monday": [ 14, 17, 23, 4 ],
            "tuesday": [ 14, 17, 23, 3 ],
            "wednesday": [ 12, 20, 22, 7 ],
            "thursday": [ 16, 20, 26, 7 ],
            "saturday": [ 15, 18, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 322,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=635691115/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://solarfields.bandcamp.com/album/origin-03',
          a_string: 'Origin # 03 by Solar Fields',
          rule: {
            "monday": [ 16, 19, 24, 6 ],
            "tuesday": [ 15, 18, 24, 5 ],
            "wednesday": [ 15, 18, 24, 4 ],
            "thursday": [ 13, 21, 23, 8 ],
            "saturday": [ 17, 21, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 323,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3021798759/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://innerislands.bandcamp.com/album/vale-stone',
          a_string: 'Vale &amp; Stone by Soda Lite',
          rule: {
            "monday": [ 17, 21, 27, 8 ],
            "tuesday": [ 16, 19, 24, 6 ],
            "wednesday": [ 15, 18, 24, 5 ],
            "thursday": [ 15, 18, 24, 4 ],
            "saturday": [ 13, 21, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 324,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3170683357/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernarecords.bandcamp.com/album/particles',
          a_string: 'Particles by Tom Adams',
          rule: {
            "monday": [ 13, 21, 23, 8 ],
            "tuesday": [ 17, 21, 27, 8 ],
            "wednesday": [ 16, 19, 24, 6 ],
            "thursday": [ 15, 18, 24, 5 ],
            "saturday": [ 15, 18, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 325,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2035638436/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eluvium.bandcamp.com/album/pianoworks',
          a_string: 'Pianoworks by Eluvium',
          rule: {
            "monday": [ 15, 18, 24, 4 ],
            "tuesday": [ 13, 21, 23, 8 ],
            "wednesday": [ 17, 21, 27, 8 ],
            "thursday": [ 16, 19, 24, 6 ],
            "saturday": [ 15, 18, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 326,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1028611826/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://room40.bandcamp.com/album/solastalgia',
          a_string: 'Solastalgia by Rafael Anton Irisarri',
          rule: {
            "monday": [ 15, 18, 24, 5 ],
            "tuesday": [ 15, 18, 24, 4 ],
            "wednesday": [ 13, 21, 23, 8 ],
            "thursday": [ 17, 21, 27, 8 ],
            "saturday": [ 16, 19, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 327,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=881961881/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erictaxxon.bandcamp.com/album/photo-4',
          a_string: 'Photo 4 by Eric Taxxon',
          rule: {
            "monday": [ 16, 19, 24, 6 ],
            "tuesday": [ 15, 18, 24, 5 ],
            "wednesday": [ 15, 18, 24, 4 ],
            "thursday": [ 13, 21, 23, 8 ],
            "saturday": [ 17, 21, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 328,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=92107445/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whities.bandcamp.com/album/loom-dream',
          a_string: 'Loom Dream by Leif',
          rule: {
            "monday": [ 17, 21, 27, 8 ],
            "tuesday": [ 16, 19, 24, 6 ],
            "wednesday": [ 15, 18, 24, 5 ],
            "thursday": [ 15, 18, 24, 4 ],
            "saturday": [ 13, 21, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 329,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2578169546/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pitp.bandcamp.com/album/liminal',
          a_string: 'Liminal by Jordan Christoff',
          rule: {
            "monday": [ 14, 22, 24, 9 ],
            "tuesday": [ 18, 22, 28, 9 ],
            "wednesday": [ 17, 20, 25, 7 ],
            "thursday": [ 16, 19, 25, 6 ],
            "saturday": [ 16, 19, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 330,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1602650790/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/taiga',
          a_string: 'Taiga by Old Amica',
          rule: {
            "monday": [ 14, 22, 24, 9 ],
            "tuesday": [ 18, 22, 28, 9 ],
            "wednesday": [ 17, 20, 25, 7 ],
            "thursday": [ 16, 19, 25, 6 ],
            "saturday": [ 16, 19, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 331,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2125571059/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hiraeth-records.bandcamp.com/album/building-a-better-world',
          a_string: 'Building a Better World by 猫 シ Corp. &amp; t e l e p a t h',
          rule: {
            "monday": [ 16, 19, 25, 5 ],
            "tuesday": [ 14, 22, 24, 9 ],
            "wednesday": [ 18, 22, 28, 9 ],
            "thursday": [ 17, 20, 25, 7 ],
            "saturday": [ 16, 19, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 332,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1685644575/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://noise.offthesky.com/album/all-other-voices-gone-only-yours-remains',
          a_string: 'all other voices gone, only yours remains by offthesky &amp; the humble bee',
          rule: {
            "monday": [ 16, 19, 25, 6 ],
            "tuesday": [ 16, 19, 25, 5 ],
            "wednesday": [ 14, 22, 24, 9 ],
            "thursday": [ 18, 22, 28, 9 ],
            "saturday": [ 17, 20, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 333,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2327617860/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/svalbar',
          a_string: 'Svalbarð by Glåsbird',
          rule: {
            "monday": [ 17, 20, 25, 7 ],
            "tuesday": [ 16, 19, 25, 6 ],
            "wednesday": [ 16, 19, 25, 5 ],
            "thursday": [ 14, 22, 24, 9 ],
            "saturday": [ 18, 22, 28, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 334,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2084042803/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://constantshapes.bandcamp.com/album/rainbow-rituals',
          a_string: 'Rainbow Rituals by Constant Shapes',
          rule: {
            "monday": [ 18, 22, 28, 9 ],
            "tuesday": [ 17, 20, 25, 7 ],
            "wednesday": [ 16, 19, 25, 6 ],
            "thursday": [ 16, 19, 25, 5 ],
            "saturday": [ 14, 22, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 335,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2551709422/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sumatranblack.bandcamp.com/album/elegy-for-a-lost-cosmonaut-e-p',
          a_string: 'Elegy for a Lost Cosmonaut E.P by Sumatran Black',
          rule: {
            "monday": [ 14, 22, 24, 9 ],
            "tuesday": [ 18, 22, 28, 9 ],
            "wednesday": [ 17, 20, 25, 7 ],
            "thursday": [ 16, 19, 25, 6 ],
            "saturday": [ 16, 19, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 336,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4243233056/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://astralindustries.bandcamp.com/album/ai-15-bamboo-music',
          a_string: 'AI-15: Bamboo Music by J.Derwort',
          rule: {
            "monday": [ 17, 20, 26, 6 ],
            "tuesday": [ 15, 23, 25, 10 ],
            "wednesday": [ 19, 23, 29, 10 ],
            "thursday": [ 18, 21, 26, 8 ],
            "saturday": [ 17, 20, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 337,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4186675338/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://room40.bandcamp.com/album/serus',
          a_string: 'Serus by Siavash Amini',
          rule: {
            "monday": [ 17, 20, 26, 7 ],
            "tuesday": [ 17, 20, 26, 6 ],
            "wednesday": [ 15, 23, 25, 10 ],
            "thursday": [ 19, 23, 29, 10 ],
            "saturday": [ 18, 21, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 338,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3398061901/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://handstitched.bandcamp.com/album/ottava',
          a_string: 'Ottava by Maps and Diagrams',
          rule: {
            "monday": [ 18, 21, 26, 8 ],
            "tuesday": [ 17, 20, 26, 7 ],
            "wednesday": [ 17, 20, 26, 6 ],
            "thursday": [ 15, 23, 25, 10 ],
            "saturday": [ 19, 23, 29, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 339,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3709006116/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darkroomtheband.bandcamp.com/album/the-noise-is-unrest',
          a_string: 'The Noise Is Unrest by Darkroom',
          rule: {
            "monday": [ 19, 23, 29, 10 ],
            "tuesday": [ 18, 21, 26, 8 ],
            "wednesday": [ 17, 20, 26, 7 ],
            "thursday": [ 17, 20, 26, 6 ],
            "saturday": [ 15, 23, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('june_musics_id_seq', (SELECT MAX(id) FROM june_musics));");
    });
};
