'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('november_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('november_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=843813690/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/ethiopiques-box7',
          a_string: 'ETHIOPIQUES BOX7&quot; by VARIOUS ARTIST',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 29, 10, 21, 23 ],
            "wednesday": [ 28, 9, 20, 22 ],
            "thursday": [ 27, 8, 19, 21 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3841544019/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/ethiopian-hit-parade-volume-1',
          a_string: 'Ethiopian Hit Parade Volume 1 by Various Artists',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 30, 11, 22, 24 ],
            "wednesday": [ 29, 10, 21, 23 ],
            "thursday": [ 28, 9, 20, 22 ],
            "saturday": [ 27, 8, 19, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2829339155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/almeyehu-esh-t-ethiopian-urban-modern-music-vol-2',
          a_string: 'ALMEYEHU ESHÉTÉ - ETHIOPIAN URBAN MODERN MUSIC VOL.2 by ALMEYEHU ESHÉTÉ',
          rule: {
            "monday": [ 27, 8, 19, 21 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 29, 10, 21, 23 ],
            "saturday": [ 28, 9, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=734007773/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/getatchew-mekurya-ethiopian-urban-modern-music-vol-5',
          a_string: 'GETATCHEW MEKURYA - ETHIOPIAN URBAN MODERN MUSIC VOL. 5 by GETATCHEW MEKURYA',
          rule: {
            "monday": [ 28, 9, 20, 22 ],
            "tuesday": [ 27, 8, 19, 21 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 29, 10, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3478976100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/mulatu-astatke-ethio-jazz',
          a_string: 'MULATU ASTATKE - ETHIO JAZZ by MULATU ASTATKE',
          rule: {
            "monday": [ 29, 10, 21, 23 ],
            "tuesday": [ 28, 9, 20, 22 ],
            "wednesday": [ 27, 8, 19, 21 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 30, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3946190093/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/tlahoun-g-ss-ss-ethiopian-urban-modern-music-vol-4',
          a_string: 'TLAHOUN GÉSSÉSSÉ - ETHIOPIAN URBAN MODERN MUSIC VOL. 4 by TLAHOUN GÉSSÉSSÉ',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 29, 10, 21, 23 ],
            "wednesday": [ 28, 9, 20, 22 ],
            "thursday": [ 27, 8, 19, 21 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1576491176/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/various-artists-ethiopian-modern-instrumentals-hits',
          a_string: 'VARIOUS ARTISTS - ETHIOPIAN MODERN INSTRUMENTALS HITS by VARIOUS ARTISTS',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 29, 10, 21, 23 ],
            "saturday": [ 28, 9, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1900915377/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/various-artists-ethiopian-soul-and-groove-vol-1',
          a_string: 'VARIOUS ARTISTS - ETHIOPIAN SOUL AND GROOVE VOL.1 by Various Artists',
          rule: {
            "monday": [ 28, 9, 20, 22 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 29, 10, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4217537268/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/various-artists-heavenly-ethiopiques',
          a_string: 'VARIOUS ARTISTS - HEAVENLY ETHIOPIQUES by VARIOUS ARTISTS',
          rule: {
            "monday": [ 29, 10, 21, 23 ],
            "tuesday": [ 28, 9, 20, 22 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 30, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=315745298/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/various-artists-more-ethiopian-soul-and-groove',
          a_string: 'VARIOUS ARTISTS - MORE ETHIOPIAN SOUL AND GROOVE by Various Artists',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 29, 10, 21, 23 ],
            "wednesday": [ 28, 9, 20, 22 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2223744/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hoodnaorchestra.bandcamp.com/album/alem-single-feat-demisu-belete-adyabo-ensemble',
          a_string: 'ALEM single feat. Demisu Belete &amp; ADYABO Ensemble by Hoodna Orchestra',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 30, 11, 22, 24 ],
            "wednesday": [ 29, 10, 21, 23 ],
            "thursday": [ 28, 9, 20, 22 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1465697662/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://korruptflozferti.bandcamp.com/album/southern-roads',
          a_string: 'SOUTHERN ROADS by Ozferti',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 29, 10, 21, 23 ],
            "saturday": [ 28, 9, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1684187707/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://akalewube.bandcamp.com/album/akal-wub',
          a_string: 'Akalé Wubé by Akalé Wubé',
          rule: {
            "monday": [ 28, 9, 20, 22 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 29, 10, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1788037664/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://akalewube.bandcamp.com/album/mata',
          a_string: 'Mata by Akalé Wubé',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 29, 10, 21, 23 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1294737427/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://akalewube.bandcamp.com/album/sost',
          a_string: 'Sost by Akalé Wubé',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 30, 11, 22, 24 ],
            "wednesday": [ 29, 10, 21, 23 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=183419789/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://afrosocialclub.bandcamp.com/album/sittin-on-a-bomb-2',
          a_string: 'Sittin&#39; On A Bomb by AFRO SOCIAL CLUB',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 29, 10, 21, 23 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1783154732/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ifafrobeat.bandcamp.com/album/if-ijex-funk-fr-be-t',
          a_string: 'IFÁ- IJEX∆ FUNK ∆FRØBE∆T by IFÁ',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 29, 10, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3085119662/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mbamina.bandcamp.com/album/experimental',
          a_string: 'Experimental by M&#39;Bamina',
          rule: {
            "monday": [ 29, 10, 21, 23 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 30, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3565525565/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hailumergia.bandcamp.com/album/tche-belew',
          a_string: 'Tche Belew by Hailu Mergia',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 29, 10, 21, 23 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1110063954/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/space-echo-the-mystery-behind-the-cosmic-sound-of-cabo-verde-finally-revealed',
          a_string: 'Space Echo - The Mystery Behind the Cosmic Sound of Cabo Verde Finally Revealed! by Various',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 30, 11, 22, 24 ],
            "wednesday": [ 29, 10, 21, 23 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4282536159/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ostinatorecords.bandcamp.com/album/sweet-as-broken-dates-lost-somali-tapes-from-the-horn-of-africa',
          a_string: 'Sweet As Broken Dates: Lost Somali Tapes from the Horn of Africa by Various Artists',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1785825889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mikaelseifu.bandcamp.com/album/yarada-lij-ep',
          a_string: 'Yarada Lij EP by Mikael Seifu',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 30, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2396887058/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopianrecords.bandcamp.com/album/in-my-sleep-ep-12-vinyl',
          a_string: 'In My Sleep EP 12&quot; Vinyl by E.R.',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=349085208/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kemiandyamlu.bandcamp.com/album/addis-radio-5',
          a_string: 'ADDIS RADIO by Kemi + Yamlu',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 30, 11, 22, 24 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3198595199/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tramprecords.bandcamp.com/album/the-best-of-tramp-45s-vol-1',
          a_string: 'The Best of Tramp 45s - Vol.1 by Tramp Rec.',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1114446073/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hotcasarecords.bandcamp.com/album/itadi-k-bonney',
          a_string: 'ITADI K.BONNEY by Itadi  K.Bonney',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4239780782/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hotcasarecords.bandcamp.com/album/love-peace-happiness',
          a_string: 'Love Peace &amp; Happiness by Orlando Julius &amp; Ashiko',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 30, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3075585632/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blackflower1.bandcamp.com/album/artifacts',
          a_string: 'Artifacts by Black Flower',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2800805288/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://andrewkleinmusic.bandcamp.com/album/new-dirty',
          a_string: 'New Dirty by Dirty Money Music',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3061013425/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/best-woman-limited-edition',
          a_string: 'Best Woman (Limited Edition) by Vincent Ahehehinnou',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2967572183/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jahbarimiller.bandcamp.com/album/black-empire-state-of-mind',
          a_string: 'Black Empire State of Mind by Jabari Miller',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3695819054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://builtforslow.bandcamp.com/album/daegu-to-addis',
          a_string: 'Daegu to Addis by Built For Slow',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1655954080/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://petitesplanetes.bandcamp.com/album/gamo-gamo-tribal-songs-from-the-south-now-ethiopia-series',
          a_string: 'GAMO GAMO - tribal songs from the south (Now Ethiopia series) by Collection Petites Planètes',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3411352510/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unseenworlds.bandcamp.com/album/love-and-peace',
          a_string: 'Love and Peace by Girma Yifrashewa',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2650405408/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ukandanz.bandcamp.com/album/lantchi-biy-end-y-rusalem',
          a_string: 'Lantchi Biyé / Endè Yèrusalem by ukandanz',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4271251597/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://korruptflozferti.bandcamp.com/album/ozferti-addis-aboumbap',
          a_string: 'OZFERTI - Addis Aboumbap by OZFERTI',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4080868344/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nicolasbachet.bandcamp.com/album/la-machine',
          a_string: 'La Machine by Georges',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2324241850/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theex.bandcamp.com/album/moa-anbessa',
          a_string: 'Moa Anbessa by Getatchew Mekuria &amp; The Ex',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=53661427/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theex.bandcamp.com/album/yanbessaw-tezeta',
          a_string: 'Y&#39;Anbessaw Tezeta by Getatchew Mekuria &amp; The Ex &amp; Friends',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=176442819/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hailumergia.bandcamp.com/album/hailu-mergia-his-classical-instrument-shemonmuanaye',
          a_string: 'Hailu Mergia &amp; His Classical Instrument: Shemonmuanaye by Hailu Mergia',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4183200316/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dur-durband.bandcamp.com/album/volume-5',
          a_string: 'Volume 5 by Dur-Dur Band',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=352960671/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://atakak.bandcamp.com/album/obaa-sima',
          a_string: 'Obaa Sima by Ata Kak',
          rule: {
            "monday": [ 7, 18, 29, 1 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3288639573/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soundwayrecords.bandcamp.com/album/doing-it-in-lagos',
          a_string: 'Doing It In Lagos by Various Artists',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3724293024/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williamonyeabor.bandcamp.com/album/world-psychedelic-classics-5-who-is-william-onyeabor',
          a_string: 'World Psychedelic Classics 5: Who is William Onyeabor? by William Onyeabor',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 7, 18, 29, 1 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1173588631/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williamonyeabor.bandcamp.com/album/atomic-bomb',
          a_string: 'Atomic Bomb by William Onyeabor',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 7, 18, 29, 1 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2615103004/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ebotaylor.bandcamp.com/album/my-love-and-music',
          a_string: 'My Love And Music by Ebo Taylor',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 7, 18, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=312515085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://patthomasstrut.bandcamp.com/album/pat-thomas-kwashibu-area-band',
          a_string: 'Pat Thomas &amp; Kwashibu Area Band by Pat Thomas &amp; Kwashibu Area Band',
          rule: {
            "monday": [ 7, 18, 29, 1 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1448801674/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/congolese-funk-afrobeat-psychedelic-rumba-1969-1978',
          a_string: 'Congolese Funk, Afrobeat &amp; Psychedelic Rumba 1969-1978 by Verckys et l´Orchestre Vévé',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1850315784/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trengarecords.bandcamp.com/album/survivor',
          a_string: 'Survivor by KINSHASA',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 8, 19, 30, 2 ],
            "thursday": [ 7, 18, 29, 1 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3589615262/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://generalrestinpeace.bandcamp.com/album/general-rest-in-peace',
          a_string: 'General Rest In Peace by General Rest In Peace',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 8, 19, 30, 2 ],
            "saturday": [ 7, 18, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2862333556/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://billlaswell.bandcamp.com/album/baptism-of-solitude',
          a_string: 'Baptism of Solitude by Paul Bowles',
          rule: {
            "monday": [ 7, 18, 29, 1 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 8, 19, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2785465227/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blackjesusexperience.bandcamp.com/album/cradle-of-humanity',
          a_string: 'Cradle Of Humanity by Mulatu Astatke and Black Jesus Experience',
          rule: {
            "monday": [ 8, 19, 30, 2 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2264294519/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nyegenyegetapes.bandcamp.com/album/nihiloxica',
          a_string: 'Nihiloxica by Nihiloxica',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 8, 19, 30, 2 ],
            "wednesday": [ 7, 18, 29, 1 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3065842028/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nyegenyegetapes.bandcamp.com/album/boutiq-electroniq',
          a_string: 'Boutiq Electroniq by Disco Vumbi',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 8, 19, 30, 2 ],
            "thursday": [ 7, 18, 29, 1 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=561865359/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thedwarfsofeastagouza.bandcamp.com/album/bes',
          a_string: 'Bes by The Dwarfs of East Agouza',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 8, 19, 30, 2 ],
            "saturday": [ 7, 18, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2391212862/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nadahelshazly.bandcamp.com/album/ahwar',
          a_string: 'Ahwar by Nadah El Shazly',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 9, 20, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=650672193/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://salahragab.bandcamp.com/album/egyptian-jazz',
          a_string: 'Egyptian Jazz by Salah Ragab and The Cairo Jazz Band',
          rule: {
            "monday": [ 9, 20, 1, 3 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 7, 18, 29, 1 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4255676975/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://radats.bandcamp.com/album/are-you-fine',
          a_string: 'Are You Fine? by The Radats',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 9, 20, 1, 3 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 7, 18, 29, 1 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2125753369/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sorcerers.bandcamp.com/album/the-sorcerers',
          a_string: 'The Sorcerers by The Sorcerers',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 9, 20, 1, 3 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 7, 18, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=551674705/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mulatuastatke.bandcamp.com/album/inspiration-information-3',
          a_string: 'Inspiration Information 3 by Mulatu Astatke &amp; The Heliocentrics',
          rule: {
            "monday": [ 7, 18, 29, 1 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 9, 20, 1, 3 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=631756506/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://delesosimi.bandcamp.com/album/you-no-fit-touch-am',
          a_string: 'You No Fit Touch Am by Dele Sosimi',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 9, 20, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2425242751/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/amara-toure-1973-1980',
          a_string: 'Amara Touré 1973-1980 by Amara Touré',
          rule: {
            "monday": [ 9, 20, 1, 3 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 7, 18, 29, 1 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=113320682/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://radiocobiana.org/album/music-of-guinea-bissau',
          a_string: 'Music of Guinea-Bissau by cobiana.org',
          rule: {
            "monday": [ 11, 22, 3, 7 ],
            "tuesday": [ 10, 21, 2, 6 ],
            "wednesday": [ 9, 20, 1, 5 ],
            "thursday": [ 8, 19, 30, 2 ],
            "saturday": [ 7, 18, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2588959421/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://demonspawnblackcauldron.bandcamp.com/album/deep-cave',
          a_string: 'Deep Cave by DemonSpawnBlackCauldron',
          rule: {
            "monday": [ 7, 18, 29, 1 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 6 ],
            "thursday": [ 9, 20, 1, 5 ],
            "saturday": [ 8, 19, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1978678839/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://demonspawnblackcauldron.bandcamp.com/album/ancient-spell',
          a_string: 'Ancient Spell by DemonSpawnBlackCauldron',
          rule: {
            "monday": [ 8, 19, 30, 2 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 11, 22, 3, 7 ],
            "thursday": [ 10, 21, 2, 6 ],
            "saturday": [ 9, 20, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=116760391/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shellachead.bandcamp.com/album/the-lost-45s-of-sudan-shellachead-annual-2015',
          a_string: 'The Lost 45s of Sudan (ShellacHead Annual 2015) by ShellacHead',
          rule: {
            "monday": [ 9, 20, 1, 5 ],
            "tuesday": [ 8, 19, 30, 2 ],
            "wednesday": [ 7, 18, 29, 1 ],
            "thursday": [ 11, 22, 3, 7 ],
            "saturday": [ 10, 21, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4244495855/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lukaproductions.bandcamp.com/album/fasokan',
          a_string: 'Fasokan by Luka Productions',
          rule: {
            "monday": [ 10, 21, 2, 6 ],
            "tuesday": [ 9, 20, 1, 5 ],
            "wednesday": [ 8, 19, 30, 2 ],
            "thursday": [ 7, 18, 29, 1 ],
            "saturday": [ 11, 22, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3800859858/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sahelsounds.bandcamp.com/album/music-from-saharan-cellphones',
          a_string: 'Music from Saharan Cellphones by sahelsounds',
          rule: {
            "monday": [ 11, 22, 3, 7 ],
            "tuesday": [ 10, 21, 2, 6 ],
            "wednesday": [ 9, 20, 1, 5 ],
            "thursday": [ 8, 19, 30, 2 ],
            "saturday": [ 7, 18, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1860561171/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://matasunarecords.bandcamp.com/album/liberated-thoughts',
          a_string: 'Liberated Thoughts by Dem Juju Poets',
          rule: {
            "monday": [ 7, 18, 29, 1 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 6 ],
            "thursday": [ 9, 20, 1, 5 ],
            "saturday": [ 8, 19, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2425963612/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yemialade.bandcamp.com/album/black-magic',
          a_string: 'Black Magic by Yemi Alade',
          rule: {
            "monday": [ 9, 20, 1, 3 ],
            "tuesday": [ 8, 19, 30, 2 ],
            "wednesday": [ 12, 23, 4, 8 ],
            "thursday": [ 11, 22, 3, 7 ],
            "saturday": [ 10, 21, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3674292384/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://talnational.bandcamp.com/album/zoy-zoy',
          a_string: 'Zoy Zoy by Tal National',
          rule: {
            "monday": [ 10, 21, 2, 6 ],
            "tuesday": [ 9, 20, 1, 3 ],
            "wednesday": [ 8, 19, 30, 2 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2636845978/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocafloja.bandcamp.com/album/cumb',
          a_string: 'Cumbé by Bocafloja',
          rule: {
            "monday": [ 11, 22, 3, 7 ],
            "tuesday": [ 10, 21, 2, 6 ],
            "wednesday": [ 9, 20, 1, 3 ],
            "thursday": [ 8, 19, 30, 2 ],
            "saturday": [ 12, 23, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=663657428/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anbessaorchestra.bandcamp.com/album/ep',
          a_string: 'EP by Anbessa Orchestra',
          rule: {
            "monday": [ 12, 23, 4, 8 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 6 ],
            "thursday": [ 9, 20, 1, 3 ],
            "saturday": [ 8, 19, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1734701675/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blackjesusexperience.bandcamp.com/album/migration',
          a_string: 'Migration by Black Jesus Experience',
          rule: {
            "monday": [ 8, 19, 30, 2 ],
            "tuesday": [ 12, 23, 4, 8 ],
            "wednesday": [ 11, 22, 3, 7 ],
            "thursday": [ 10, 21, 2, 6 ],
            "saturday": [ 9, 20, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4001451639/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://terriehesselsterprecords.bandcamp.com/album/birabiro',
          a_string: 'Birabiro by Fendika',
          rule: {
            "monday": [ 9, 20, 1, 3 ],
            "tuesday": [ 8, 19, 30, 2 ],
            "wednesday": [ 12, 23, 4, 8 ],
            "thursday": [ 11, 22, 3, 7 ],
            "saturday": [ 10, 21, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=446475182/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tonyallenafrica70.bandcamp.com/album/afrodiscobeat-disco-afro-reedit',
          a_string: 'AFRODISCOBEAT DISCO AFRO REEDIT by Tony Allen &amp; Africa 70',
          rule: {
            "monday": [ 10, 21, 2, 6 ],
            "tuesday": [ 9, 20, 1, 3 ],
            "wednesday": [ 8, 19, 30, 2 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2605573170/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://strut.bandcamp.com/album/black-times-2',
          a_string: 'Black Times by Seun Kuti &amp; Egypt 80',
          rule: {
            "monday": [ 12, 23, 4, 8 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 4 ],
            "thursday": [ 9, 20, 1, 3 ],
            "saturday": [ 13, 24, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=367449847/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://airafriquerecords.bandcamp.com/album/its-a-worldwide-thing',
          a_string: 'It&#39;s A Worldwide Thing by Air Afrique Records Presents',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 8 ],
            "wednesday": [ 11, 22, 3, 7 ],
            "thursday": [ 10, 21, 2, 4 ],
            "saturday": [ 9, 20, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2495786626/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jonovancooper.bandcamp.com/album/suite-abyssinia',
          a_string: 'Suite Abyssinia by Jonovan Cooper',
          rule: {
            "monday": [ 9, 20, 1, 3 ],
            "tuesday": [ 13, 24, 5, 9 ],
            "wednesday": [ 12, 23, 4, 8 ],
            "thursday": [ 11, 22, 3, 7 ],
            "saturday": [ 10, 21, 2, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=207919215/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hailumergia.bandcamp.com/album/lala-belu',
          a_string: 'Lala Belu by Hailu Mergia',
          rule: {
            "monday": [ 10, 21, 2, 4 ],
            "tuesday": [ 9, 20, 1, 3 ],
            "wednesday": [ 13, 24, 5, 9 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=492184070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiocali.bandcamp.com/album/ethio-cali-live-at-the-blue-whale',
          a_string: 'ETHIO CALI - LIVE AT THE BLUE WHALE by ETHIO CALI',
          rule: {
            "monday": [ 11, 22, 3, 7 ],
            "tuesday": [ 10, 21, 2, 4 ],
            "wednesday": [ 9, 20, 1, 3 ],
            "thursday": [ 13, 24, 5, 9 ],
            "saturday": [ 12, 23, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=187392738/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pasteurlappe.bandcamp.com/album/we-the-people',
          a_string: 'We, The People by Pasteur Lappe',
          rule: {
            "monday": [ 12, 23, 4, 8 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 4 ],
            "thursday": [ 9, 20, 1, 3 ],
            "saturday": [ 13, 24, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3298491083/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://preschmedia.bandcamp.com/album/aktion-celebration-lp-cd-1977-2017',
          a_string: 'AKTION - Celebration LP/CD (1977) 2017 by Aktion',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 8 ],
            "wednesday": [ 11, 22, 3, 7 ],
            "thursday": [ 10, 21, 2, 4 ],
            "saturday": [ 9, 20, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2776328381/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lesfillesdeillighadad.bandcamp.com/album/les-filles-de-illighadad',
          a_string: 'Les Filles de Illighadad by Les Filles de Illighadad',
          rule: {
            "monday": [ 10, 21, 2, 4 ],
            "tuesday": [ 14, 25, 6, 10 ],
            "wednesday": [ 13, 24, 5, 9 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2034543457/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://triodakali-kronosquartet.bandcamp.com/album/ladilikan',
          a_string: 'Ladilikan by Trio Da Kali and Kronos Quartet',
          rule: {
            "monday": [ 11, 22, 3, 5 ],
            "tuesday": [ 10, 21, 2, 4 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 9 ],
            "saturday": [ 12, 23, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2571275524/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africaseven.bandcamp.com/album/africa-airways-four-disco-funk-touchdown-1976-1983',
          a_string: 'Africa Airways Four (Disco Funk Touchdown 1976 - 1983) by Various Artists',
          rule: {
            "monday": [ 12, 23, 4, 8 ],
            "tuesday": [ 11, 22, 3, 5 ],
            "wednesday": [ 10, 21, 2, 4 ],
            "thursday": [ 14, 25, 6, 10 ],
            "saturday": [ 13, 24, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1625314783/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ekambibrillant.bandcamp.com/album/african-funk-experimentals-1975-1982',
          a_string: 'African Funk Experimentals (1975-1982) by Ekambi Brillant',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 8 ],
            "wednesday": [ 11, 22, 3, 5 ],
            "thursday": [ 10, 21, 2, 4 ],
            "saturday": [ 14, 25, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=865898643/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kinnara-desila--afrovisionary-creations.bandcamp.com/album/afronoise',
          a_string: 'AFRONOISE by 緊那羅：DESI LA     (formerly la  bruha desi la)',
          rule: {
            "monday": [ 14, 25, 6, 10 ],
            "tuesday": [ 13, 24, 5, 9 ],
            "wednesday": [ 12, 23, 4, 8 ],
            "thursday": [ 11, 22, 3, 5 ],
            "saturday": [ 10, 21, 2, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4253929906/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://markbarrott.bandcamp.com/album/ifeel-060-mark-barrott-music-for-presence',
          a_string: 'IFEEL 060: Mark Barrott - Music For Presence by Mark Barrott',
          rule: {
            "monday": [ 10, 21, 2, 4 ],
            "tuesday": [ 14, 25, 6, 10 ],
            "wednesday": [ 13, 24, 5, 9 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3804425697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hobotruffles.bandcamp.com/album/ode-to-ghana-2',
          a_string: 'Ode To Ghana by Various Artists',
          rule: {
            "monday": [ 11, 22, 3, 5 ],
            "tuesday": [ 10, 21, 2, 4 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 9 ],
            "saturday": [ 12, 23, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'ttps://bandcamp.com/EmbeddedPlayer/album=2997763874/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://awapoulo.bandcamp.com/album/poulo-warali',
          a_string: 'Poulo Warali by Awa Poulo',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 6 ],
            "wednesday": [ 11, 22, 3, 5 ],
            "thursday": [ 15, 26, 7, 11 ],
            "saturday": [ 14, 25, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3276720701/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skkakraba.bandcamp.com/album/songs-of-paapieye',
          a_string: 'Songs of Paapieye by SK Kakraba',
          rule: {
            "monday": [ 14, 25, 6, 10 ],
            "tuesday": [ 13, 24, 5, 9 ],
            "wednesday": [ 12, 23, 4, 6 ],
            "thursday": [ 11, 22, 3, 5 ],
            "saturday": [ 15, 26, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1152424761/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djkatapila.bandcamp.com/album/trotro',
          a_string: 'Trotro by DJ Katapila',
          rule: {
            "monday": [ 15, 26, 7, 11 ],
            "tuesday": [ 14, 25, 6, 10 ],
            "wednesday": [ 13, 24, 5, 9 ],
            "thursday": [ 12, 23, 4, 6 ],
            "saturday": [ 11, 22, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4159491463/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sufyvn.bandcamp.com/album/ascension-ep',
          a_string: 'Ascension EP by Sufyvn',
          rule: {
            "monday": [ 11, 22, 3, 5 ],
            "tuesday": [ 15, 26, 7, 11 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 9 ],
            "saturday": [ 12, 23, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4257423428/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sufyvn.bandcamp.com/album/pseudarhythm-vol-2',
          a_string: 'Pseudarhythm, Vol. 2 by Sufyvn',
          rule: {
            "monday": [ 12, 23, 4, 6 ],
            "tuesday": [ 11, 22, 3, 5 ],
            "wednesday": [ 15, 26, 7, 11 ],
            "thursday": [ 14, 25, 6, 10 ],
            "saturday": [ 13, 24, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1992463230/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sufyvn.bandcamp.com/album/m-e-r-o-e',
          a_string: 'M E R O E by Sufyvn',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 6 ],
            "wednesday": [ 11, 22, 3, 5 ],
            "thursday": [ 15, 26, 7, 11 ],
            "saturday": [ 14, 25, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3174009808/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joekingkologbo.bandcamp.com/album/sugar-daddy',
          a_string: 'Sugar Daddy by Joe King Kologbo &amp; The High Grace',
          rule: {
            "monday": [ 14, 25, 6, 10 ],
            "tuesday": [ 13, 24, 5, 9 ],
            "wednesday": [ 12, 23, 4, 6 ],
            "thursday": [ 11, 22, 3, 5 ],
            "saturday": [ 15, 26, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1426588846/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soundwayrecords.bandcamp.com/album/nigeria-rock-special-psychedelic-afro-rock-jazz-funk-in-1970s-nigeria',
          a_string: 'Nigeria Rock Special: Psychedelic Afro-Rock &amp; Jazz Funk in 1970s Nigeria by Various Artists',
          rule: {
            "monday": [ 16, 27, 8, 12 ],
            "tuesday": [ 15, 26, 7, 11 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 7 ],
            "saturday": [ 12, 23, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=642050011/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://antibalas.bandcamp.com/album/where-the-gods-are-in-peace',
          a_string: 'Where the Gods are in Peace by Antibalas',
          rule: {
            "monday": [ 12, 23, 4, 6 ],
            "tuesday": [ 16, 27, 8, 12 ],
            "wednesday": [ 15, 26, 7, 11 ],
            "thursday": [ 14, 25, 6, 10 ],
            "saturday": [ 13, 24, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=41582321/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://olvidorecords.bandcamp.com/album/furaha-wenye-gita',
          a_string: 'Furaha Wenye Gita by George Mukabi',
          rule: {
            "monday": [ 13, 24, 5, 7 ],
            "tuesday": [ 12, 23, 4, 6 ],
            "wednesday": [ 16, 27, 8, 12 ],
            "thursday": [ 15, 26, 7, 11 ],
            "saturday": [ 14, 25, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2087877827/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://olvidorecords.bandcamp.com/album/usiende-ukalale-omutibo-from-rural-kenya',
          a_string: 'Usiende Ukalale: Omutibo From Rural Kenya by Various Artists',
          rule: {
            "monday": [ 14, 25, 6, 10 ],
            "tuesday": [ 13, 24, 5, 7 ],
            "wednesday": [ 12, 23, 4, 6 ],
            "thursday": [ 16, 27, 8, 12 ],
            "saturday": [ 15, 26, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2389863539/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://olvidorecords.bandcamp.com/album/country-music-of-western-kenya-45s-from-the-archive-of-shem-tupe',
          a_string: 'Country Music of Western Kenya: 45s from the archive of Shem Tupe by Shem Tupe, Justo Osala, Enos Okola',
          rule: {
            "monday": [ 15, 26, 7, 11 ],
            "tuesday": [ 14, 25, 6, 10 ],
            "wednesday": [ 13, 24, 5, 7 ],
            "thursday": [ 12, 23, 4, 6 ],
            "saturday": [ 16, 27, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1504707769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djkatapila.bandcamp.com/album/aroo-ep',
          a_string: 'Aroo EP by DJ Katapila',
          rule: {
            "monday": [ 16, 27, 8, 12 ],
            "tuesday": [ 15, 26, 7, 11 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 7 ],
            "saturday": [ 12, 23, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4095482276/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djkatapila.bandcamp.com/album/trotro-12',
          a_string: 'Trotro 12&quot; by DJ Katapila',
          rule: {
            "monday": [ 12, 23, 4, 6 ],
            "tuesday": [ 16, 27, 8, 12 ],
            "wednesday": [ 15, 26, 7, 11 ],
            "thursday": [ 14, 25, 6, 10 ],
            "saturday": [ 13, 24, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1966281918/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://professorrhythm.bandcamp.com/album/bafana-bafana',
          a_string: 'Bafana Bafana by Professor Rhythm',
          rule: {
            "monday": [ 14, 25, 6, 8 ],
            "tuesday": [ 13, 24, 5, 7 ],
            "wednesday": [ 17, 28, 9, 13 ],
            "thursday": [ 16, 27, 8, 12 ],
            "saturday": [ 15, 26, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2784148788/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://basabasa.bandcamp.com/album/homowo',
          a_string: 'Homowo by Basa Basa',
          rule: {
            "monday": [ 15, 26, 7, 11 ],
            "tuesday": [ 14, 25, 6, 8 ],
            "wednesday": [ 13, 24, 5, 7 ],
            "thursday": [ 17, 28, 9, 13 ],
            "saturday": [ 16, 27, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=246458167/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sahelsounds.bandcamp.com/album/music-from-saharan-cellphones-volume-2',
          a_string: 'Music from Saharan Cellphones: Volume 2 by sahelsounds',
          rule: {
            "monday": [ 16, 27, 8, 12 ],
            "tuesday": [ 15, 26, 7, 11 ],
            "wednesday": [ 14, 25, 6, 8 ],
            "thursday": [ 13, 24, 5, 7 ],
            "saturday": [ 17, 28, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1882782082/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mammansani.bandcamp.com/album/unreleased-tapes-1981-1984',
          a_string: 'Unreleased Tapes 1981-1984 by Mamman Sani',
          rule: {
            "monday": [ 17, 28, 9, 13 ],
            "tuesday": [ 16, 27, 8, 12 ],
            "wednesday": [ 15, 26, 7, 11 ],
            "thursday": [ 14, 25, 6, 8 ],
            "saturday": [ 13, 24, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3845062399/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://strut.bandcamp.com/album/last-band-standing',
          a_string: 'Last Band Standing by Orchestre Les Mangelepa',
          rule: {
            "monday": [ 13, 24, 5, 7 ],
            "tuesday": [ 17, 28, 9, 13 ],
            "wednesday": [ 16, 27, 8, 12 ],
            "thursday": [ 15, 26, 7, 11 ],
            "saturday": [ 14, 25, 6, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2624113698/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nyegenyegetapes.bandcamp.com/album/gulu-city-anthems',
          a_string: 'Gulu City Anthems by Otim Alpha',
          rule: {
            "monday": [ 14, 25, 6, 8 ],
            "tuesday": [ 13, 24, 5, 7 ],
            "wednesday": [ 17, 28, 9, 13 ],
            "thursday": [ 16, 27, 8, 12 ],
            "saturday": [ 15, 26, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2306200836/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nyegenyegetapes.bandcamp.com/album/afromutations',
          a_string: 'Afromutations by Riddlore',
          rule: {
            "monday": [ 15, 26, 7, 11 ],
            "tuesday": [ 14, 25, 6, 8 ],
            "wednesday": [ 13, 24, 5, 7 ],
            "thursday": [ 17, 28, 9, 13 ],
            "saturday": [ 16, 27, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3519940361/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://livyekemezie.bandcamp.com/album/friday-night',
          a_string: 'Friday Night by Livy Ekemezie',
          rule: {
            "monday": [ 17, 28, 9, 13 ],
            "tuesday": [ 16, 27, 8, 12 ],
            "wednesday": [ 15, 26, 7, 9 ],
            "thursday": [ 14, 25, 6, 8 ],
            "saturday": [ 18, 29, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3176947686/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://odionlivingstone.bandcamp.com/album/at-last',
          a_string: 'At Last by Grotto',
          rule: {
            "monday": [ 18, 29, 10, 14 ],
            "tuesday": [ 17, 28, 9, 13 ],
            "wednesday": [ 16, 27, 8, 12 ],
            "thursday": [ 15, 26, 7, 9 ],
            "saturday": [ 14, 25, 6, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2471447217/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://odionlivingstone.bandcamp.com/album/mind-twister',
          a_string: 'Mind Twister by Apples',
          rule: {
            "monday": [ 14, 25, 6, 8 ],
            "tuesday": [ 18, 29, 10, 14 ],
            "wednesday": [ 17, 28, 9, 13 ],
            "thursday": [ 16, 27, 8, 12 ],
            "saturday": [ 15, 26, 7, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2997763874/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://awapoulo.bandcamp.com/album/poulo-warali',
          a_string: 'Poulo Warali by Awa Poulo',
          rule: {
            "monday": [ 15, 26, 7, 9 ],
            "tuesday": [ 14, 25, 6, 8 ],
            "wednesday": [ 18, 29, 10, 14 ],
            "thursday": [ 17, 28, 9, 13 ],
            "saturday": [ 16, 27, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=248795200/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skkakraba.bandcamp.com/album/yonye',
          a_string: 'Yonye by SK Kakraba',
          rule: {
            "monday": [ 16, 27, 8, 12 ],
            "tuesday": [ 15, 26, 7, 9 ],
            "wednesday": [ 14, 25, 6, 8 ],
            "thursday": [ 18, 29, 10, 14 ],
            "saturday": [ 17, 28, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1014427941/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://omaleckhaoli.bandcamp.com/album/say-you-love-me',
          a_string: 'Say You Love Me by Om Alec Khaoli',
          rule: {
            "monday": [ 17, 28, 9, 13 ],
            "tuesday": [ 16, 27, 8, 12 ],
            "wednesday": [ 15, 26, 7, 9 ],
            "thursday": [ 14, 25, 6, 8 ],
            "saturday": [ 18, 29, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2830434610/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://therealpierrekwenders.bandcamp.com/album/makanda-at-the-end-of-space-the-beginning-of-time',
          a_string: 'MAKANDA at the End of Space, the Beginning of Time by Pierre Kwenders',
          rule: {
            "monday": [ 18, 29, 10, 14 ],
            "tuesday": [ 17, 28, 9, 13 ],
            "wednesday": [ 16, 27, 8, 12 ],
            "thursday": [ 15, 26, 7, 9 ],
            "saturday": [ 14, 25, 6, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3128963681/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://therealpierrekwenders.bandcamp.com/album/le-dernier-empereur-bantou',
          a_string: 'Le Dernier Empereur Bantou by Pierre Kwenders',
          rule: {
            "monday": [ 15, 26, 7, 9 ],
            "tuesday": [ 19, 30, 11, 15 ],
            "wednesday": [ 18, 29, 10, 14 ],
            "thursday": [ 17, 28, 9, 13 ],
            "saturday": [ 16, 27, 8, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1946257271/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://therealpierrekwenders.bandcamp.com/album/african-dream',
          a_string: 'African Dream by Pierre Kwenders',
          rule: {
            "monday": [ 16, 27, 8, 10 ],
            "tuesday": [ 15, 26, 7, 9 ],
            "wednesday": [ 19, 30, 11, 15 ],
            "thursday": [ 18, 29, 10, 14 ],
            "saturday": [ 17, 28, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3913178844/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soundwayrecords.bandcamp.com/album/gumba-fire-bubblegum-soul-synth-boogie-in-1980s-south-africa',
          a_string: 'Gumba Fire: Bubblegum Soul &amp; Synth-Boogie in 1980s South Africa by Various Artists',
          rule: {
            "monday": [ 17, 28, 9, 13 ],
            "tuesday": [ 16, 27, 8, 10 ],
            "wednesday": [ 15, 26, 7, 9 ],
            "thursday": [ 19, 30, 11, 15 ],
            "saturday": [ 18, 29, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1636056864/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatopreto.bandcamp.com/album/tempo',
          a_string: 'Tempo by Gato Preto',
          rule: {
            "monday": [ 18, 29, 10, 14 ],
            "tuesday": [ 17, 28, 9, 13 ],
            "wednesday": [ 16, 27, 8, 10 ],
            "thursday": [ 15, 26, 7, 9 ],
            "saturday": [ 19, 30, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=3496312354/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eawave.bandcamp.com/track/upeo-ft-huru',
          a_string: 'Upeo ft. HURU by Jinku',
          rule: {
            "monday": [ 19, 30, 11, 15 ],
            "tuesday": [ 18, 29, 10, 14 ],
            "wednesday": [ 17, 28, 9, 13 ],
            "thursday": [ 16, 27, 8, 10 ],
            "saturday": [ 15, 26, 7, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2971762109/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rushhourmusic.bandcamp.com/album/pantsula-the-rise-of-electronic-dance-music-in-south-africa-1988-90',
          a_string: 'Pantsula! - The Rise Of Electronic Dance Music In South Africa, 1988-90 by Various Artists',
          rule: {
            "monday": [ 15, 26, 7, 9 ],
            "tuesday": [ 19, 30, 11, 15 ],
            "wednesday": [ 18, 29, 10, 14 ],
            "thursday": [ 17, 28, 9, 13 ],
            "saturday": [ 16, 27, 8, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2741123866/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://onthecornerrecords.bandcamp.com/album/zaire-e-p',
          a_string: 'Zaire E.P. by DJ Khalab',
          rule: {
            "monday": [ 16, 27, 8, 10 ],
            "tuesday": [ 15, 26, 7, 9 ],
            "wednesday": [ 19, 30, 11, 15 ],
            "thursday": [ 18, 29, 10, 14 ],
            "saturday": [ 17, 28, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1016409469/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://onthecornerrecords.bandcamp.com/album/collocutor-black-satin',
          a_string: 'Collocutor - Black Satin by Collocutor',
          rule: {
            "monday": [ 18, 29, 10, 14 ],
            "tuesday": [ 17, 28, 9, 11 ],
            "wednesday": [ 16, 27, 8, 10 ],
            "thursday": [ 20, 1, 12, 16 ],
            "saturday": [ 19, 30, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=339385865/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://helloworldchoir.bandcamp.com/album/shagara',
          a_string: 'SHAGARA by Hello World Choir',
          rule: {
            "monday": [ 19, 30, 11, 15 ],
            "tuesday": [ 18, 29, 10, 14 ],
            "wednesday": [ 17, 28, 9, 11 ],
            "thursday": [ 16, 27, 8, 10 ],
            "saturday": [ 20, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3615705061/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://youssraelhawary.bandcamp.com/album/nooum-nasyeen',
          a_string: 'No&#39;oum Nasyeen by Youssra El Hawary',
          rule: {
            "monday": [ 20, 1, 12, 16 ],
            "tuesday": [ 19, 30, 11, 15 ],
            "wednesday": [ 18, 29, 10, 14 ],
            "thursday": [ 17, 28, 9, 11 ],
            "saturday": [ 16, 27, 8, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4250522401/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://odiousband.bandcamp.com/album/skin-age',
          a_string: 'SKIN AGE by ODIOUS',
          rule: {
            "monday": [ 16, 27, 8, 10 ],
            "tuesday": [ 20, 1, 12, 16 ],
            "wednesday": [ 19, 30, 11, 15 ],
            "thursday": [ 18, 29, 10, 14 ],
            "saturday": [ 17, 28, 9, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=699087070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://onthecornerrecords.bandcamp.com/album/super-liminal',
          a_string: 'Super Liminal by Penya',
          rule: {
            "monday": [ 17, 28, 9, 11 ],
            "tuesday": [ 16, 27, 8, 10 ],
            "wednesday": [ 20, 1, 12, 16 ],
            "thursday": [ 19, 30, 11, 15 ],
            "saturday": [ 18, 29, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=38283473/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://onthecornerrecords.bandcamp.com/album/mugwisa-international-xylophone-group-ii-iganga-embaire-12',
          a_string: 'Mugwisa International Xylophone Group II - Iganga Embaire 12 by On The Corner',
          rule: {
            "monday": [ 18, 29, 10, 14 ],
            "tuesday": [ 17, 28, 9, 11 ],
            "wednesday": [ 16, 27, 8, 10 ],
            "thursday": [ 20, 1, 12, 16 ],
            "saturday": [ 19, 30, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4291739362/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://onthecornerrecords.bandcamp.com/album/versus-ii',
          a_string: 'Versus II by Various',
          rule: {
            "monday": [ 19, 30, 11, 15 ],
            "tuesday": [ 18, 29, 10, 14 ],
            "wednesday": [ 17, 28, 9, 11 ],
            "thursday": [ 16, 27, 8, 10 ],
            "saturday": [ 20, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4290707738/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africaseven.bandcamp.com/album/african-funk-experimentals-1977-1979',
          a_string: 'African Funk Experimentals (1977-1979) by J. M. Tim And Foty',
          rule: {
            "monday": [ 21, 2, 13, 17 ],
            "tuesday": [ 20, 1, 12, 16 ],
            "wednesday": [ 19, 30, 11, 15 ],
            "thursday": [ 18, 29, 10, 12 ],
            "saturday": [ 17, 28, 9, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1791534101/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africaseven.bandcamp.com/album/mothers-garden-the-funky-sounds-of-female-africa-1975-1984',
          a_string: 'Mothers Garden (The Funky Sounds Of Female Africa 1975 - 1984) by Various Artists',
          rule: {
            "monday": [ 17, 28, 9, 11 ],
            "tuesday": [ 21, 2, 13, 17 ],
            "wednesday": [ 20, 1, 12, 16 ],
            "thursday": [ 19, 30, 11, 15 ],
            "saturday": [ 18, 29, 10, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4145648681/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africaseven.bandcamp.com/album/du-mali',
          a_string: 'Du Mali by Sory Bamba',
          rule: {
            "monday": [ 18, 29, 10, 12 ],
            "tuesday":  [ 17, 28, 9, 11 ],
            "wednesday": [ 21, 2, 13, 17 ],
            "thursday": [ 20, 1, 12, 16 ],
            "saturday": [ 19, 30, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2762412636/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://matsulimusic.bandcamp.com/album/genes-and-spirits',
          a_string: 'Genes and Spirits by Moses Taiwa Molelekwa',
          rule: {
            "monday": [ 19, 30, 11, 15 ],
            "tuesday": [ 18, 29, 10, 12 ],
            "wednesday": [ 17, 28, 9, 11 ],
            "thursday": [ 21, 2, 13, 17 ],
            "saturday": [ 20, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=533968175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://matsulimusic.bandcamp.com/album/witchdoctors-son',
          a_string: 'Witchdoctor&#39;s Son by Okay Temiz / Johnny Dyani',
          rule: {
            "monday": [ 20, 1, 12, 16 ],
            "tuesday": [ 19, 30, 11, 15 ],
            "wednesday": [ 18, 29, 10, 12 ],
            "thursday": [ 17, 28, 9, 11 ],
            "saturday": [ 21, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3165775887/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://matsulimusic.bandcamp.com/album/mzanzi-afro-jazz-sounds-matsuli-label-sampler',
          a_string: 'Mzanzi Afro Jazz Sounds - Matsuli Label Sampler by Various Artists',
          rule: {
            "monday": [ 21, 2, 13, 17 ],
            "tuesday": [ 20, 1, 12, 16 ],
            "wednesday": [ 19, 30, 11, 15 ],
            "thursday": [ 18, 29, 10, 12 ],
            "saturday": [ 17, 28, 9, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1549916631/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blipdiscs.bandcamp.com/album/mubashira-mataali-group',
          a_string: 'Mubashira Mataali Group by Mubashira Mataali Group',
          rule: {
            "monday": [ 17, 28, 9, 11 ],
            "tuesday": [ 21, 2, 13, 17 ],
            "wednesday": [ 20, 1, 12, 16 ],
            "thursday": [ 19, 30, 11, 15 ],
            "saturday": [ 18, 29, 10, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=617363688/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://matsulimusic.bandcamp.com/album/one-night-on-earth-music-from-the-strings-of-mali',
          a_string: 'One Night on Earth: Music from the Strings of Mali by Derek Gripper',
          rule: {
            "monday": [ 19, 30, 11, 13 ],
            "tuesday": [ 18, 29, 10, 12 ],
            "wednesday": [ 22, 3, 14, 18 ],
            "thursday": [ 21, 2, 13, 17 ],
            "saturday": [ 20, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2428709027/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://matsulimusic.bandcamp.com/album/ndikho-xaba-and-the-natives',
          a_string: 'Ndikho Xaba and the Natives by Ndikho Xaba',
          rule: {
            "monday": [ 20, 1, 12, 16 ],
            "tuesday": [ 19, 30, 11, 13 ],
            "wednesday": [ 18, 29, 10, 12 ],
            "thursday": [ 22, 3, 14, 18 ],
            "saturday": [ 21, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4028634021/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://super11.bandcamp.com/album/super-onze-1st-worldwide-cd-release',
          a_string: 'Super Onze - 1st Worldwide CD release by Super Onze, The Takamba champions of the Niger bend.',
          rule: {
            "monday": [ 21, 2, 13, 17 ],
            "tuesday": [ 20, 1, 12, 16 ],
            "wednesday": [ 19, 30, 11, 13 ],
            "thursday": [ 18, 29, 10, 12 ],
            "saturday": [ 22, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3098108820/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://super11.bandcamp.com/album/jo-kanga-djiribi',
          a_string: 'Jo Kanga Djiribi by Super Onze, The Takamba champions of the Niger bend.',
          rule: {
            "monday": [ 22, 3, 14, 18 ],
            "tuesday": [ 21, 2, 13, 17 ],
            "wednesday": [ 20, 1, 12, 16 ],
            "thursday": [ 19, 30, 11, 13 ],
            "saturday": [ 18, 29, 10, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2438854733/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://super11.bandcamp.com/album/session-pour-yehia-le-marabout',
          a_string: 'Session pour Yehia le Marabout by Super Onze, The Takamba champions of the Niger bend.',
          rule: {
            "monday": [ 18, 29, 10, 12 ],
            "tuesday": [ 22, 3, 14, 18 ],
            "wednesday": [ 21, 2, 13, 17 ],
            "thursday": [ 20, 1, 12, 16 ],
            "saturday": [ 19, 30, 11, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2040424877/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://topwzn.bandcamp.com/album/top-wzn',
          a_string: 'Top WZN by Jeich Ould Badu and Ahmedou Ahmed Lewla',
          rule: {
            "monday": [ 19, 30, 11, 13 ],
            "tuesday": [ 18, 29, 10, 12 ],
            "wednesday": [ 22, 3, 14, 18 ],
            "thursday": [ 21, 2, 13, 17 ],
            "saturday": [ 20, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=37971376/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sahelsounds.bandcamp.com/album/waande-kadde',
          a_string: 'Waande Kadde by Amadou Binta Konté and Tidiane Thiam',
          rule: {
            "monday": [ 20, 1, 12, 16 ],
            "tuesday": [ 19, 30, 11, 13 ],
            "wednesday": [ 18, 29, 10, 12 ],
            "thursday": [ 22, 3, 14, 18 ],
            "saturday": [ 21, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3731050177/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sahelsounds.bandcamp.com/album/field-recordings-from-the-sahel',
          a_string: 'Field Recordings from the Sahel by sahelsounds',
          rule: {
            "monday": [ 22, 3, 14, 18 ],
            "tuesday": [ 21, 2, 13, 17 ],
            "wednesday": [ 20, 1, 12, 14 ],
            "thursday": [ 19, 30, 11, 13 ],
            "saturday": [ 23, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1780373484/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ukandanz.bandcamp.com/album/awo',
          a_string: 'Awo by ukandanz',
          rule: {
            "monday": [ 23, 4, 15, 19 ],
            "tuesday": [ 22, 3, 14, 18 ],
            "wednesday": [ 21, 2, 13, 17 ],
            "thursday": [ 20, 1, 12, 14 ],
            "saturday": [ 19, 30, 11, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=470140445/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ukandanz.bandcamp.com/album/yetchalal',
          a_string: 'Yetchalal by ukandanz',
          rule: {
            "monday": [ 19, 30, 11, 13 ],
            "tuesday": [ 23, 4, 15, 19 ],
            "wednesday": [ 22, 3, 14, 18 ],
            "thursday": [ 21, 2, 13, 17 ],
            "saturday": [ 20, 1, 12, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=500743045/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blackflower1.bandcamp.com/album/intermediate-state',
          a_string: 'Intermediate State by Black Flower',
          rule: {
            "monday": [ 20, 1, 12, 14 ],
            "tuesday": [ 19, 30, 11, 13 ],
            "wednesday": [ 23, 4, 15, 19 ],
            "thursday": [ 22, 3, 14, 18 ],
            "saturday": [ 21, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=442969849/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://preschmedia.bandcamp.com/album/ronald-snijders-a-safe-return-1980-2018',
          a_string: 'RONALD SNIJDERS - A Safe Return (1980) 2018 by Ronald Snijders',
          rule: {
            "monday": [ 21, 2, 13, 17 ],
            "tuesday": [ 20, 1, 12, 14 ],
            "wednesday": [ 19, 30, 11, 13 ],
            "thursday": [ 23, 4, 15, 19 ],
            "saturday": [ 22, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=286440587/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://preschmedia.bandcamp.com/album/alva-ja-tik-b-tu-cd-lp-1978-2015',
          a_string: 'ALVA - Ja Tik Būtu CD/LP (1978) 2015 by Alva',
          rule: {
            "monday": [ 22, 3, 14, 18 ],
            "tuesday": [ 21, 2, 13, 17 ],
            "wednesday": [ 20, 1, 12, 14 ],
            "thursday": [ 19, 30, 11, 13 ],
            "saturday": [ 23, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=295213109/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://preschmedia.bandcamp.com/album/starvue-upward-bound-1980-2018',
          a_string: 'STARVUE - Upward Bound (1980) 2018 by Starvue',
          rule: {
            "monday": [ 23, 4, 15, 19 ],
            "tuesday": [ 22, 3, 14, 18 ],
            "wednesday": [ 21, 2, 13, 17 ],
            "thursday": [ 20, 1, 12, 14 ],
            "saturday": [ 19, 30, 11, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2528841103/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africali.bandcamp.com/album/taught-of-a-culture',
          a_string: 'Taught Of A Culture by AfriCali',
          rule: {
            "monday": [ 20, 1, 12, 14 ],
            "tuesday": [ 24, 5, 16, 20 ],
            "wednesday": [ 23, 4, 15, 19 ],
            "thursday": [ 22, 3, 14, 18 ],
            "saturday": [ 21, 2, 13, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2769423631/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sinkane.bandcamp.com/album/life-livin-it',
          a_string: 'Life &amp; Livin&#39; It by SINKANE',
          rule: {
            "monday": [ 21, 2, 13, 15 ],
            "tuesday": [ 20, 1, 12, 14 ],
            "wednesday": [ 24, 5, 16, 20 ],
            "thursday": [ 23, 4, 15, 19 ],
            "saturday": [ 22, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1165302320/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://guarandinga.bandcamp.com/album/merendola-vol-1',
          a_string: 'Merendola Vol. 1 by Guarandinga',
          rule: {
            "monday": [ 22, 3, 14, 18 ],
            "tuesday": [ 21, 2, 13, 15 ],
            "wednesday": [ 20, 1, 12, 14 ],
            "thursday": [ 24, 5, 16, 20 ],
            "saturday": [ 23, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3586901551/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://guyone.bandcamp.com/album/1',
          a_string: '#1 by Guy One',
          rule: {
            "monday": [ 23, 4, 15, 19 ],
            "tuesday": [ 22, 3, 14, 18 ],
            "wednesday": [ 21, 2, 13, 15 ],
            "thursday": [ 20, 1, 12, 14 ],
            "saturday": [ 24, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1159572063/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ebotaylor.bandcamp.com/album/life-stories',
          a_string: 'Life Stories by Ebo Taylor',
          rule: {
            "monday": [ 24, 5, 16, 20 ],
            "tuesday": [ 23, 4, 15, 19 ],
            "wednesday": [ 22, 3, 14, 18 ],
            "thursday": [ 21, 2, 13, 15 ],
            "saturday": [ 20, 1, 12, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3724197582/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayuunesule.bandcamp.com/album/we-have-one-destiny',
          a_string: 'We Have One Destiny by Ayuune Sule',
          rule: {
            "monday": [ 20, 1, 12, 14 ],
            "tuesday": [ 24, 5, 16, 20 ],
            "wednesday": [ 23, 4, 15, 19 ],
            "thursday": [ 22, 3, 14, 18 ],
            "saturday": [ 21, 2, 13, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=292577576/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/ethiopiques-box7-2',
          a_string: 'ETHIOPIQUES BOX7&quot; by ETHIOPIQUES SERIES',
          rule: {
            "monday": [ 21, 2, 13, 15 ],
            "tuesday": [ 20, 1, 12, 14 ],
            "wednesday": [ 24, 5, 16, 20 ],
            "thursday": [ 23, 4, 15, 19 ],
            "saturday": [ 22, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1486479560/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anbessaorchestra.bandcamp.com/album/negestat',
          a_string: 'Negestat by Anbessa Orchestra',
          rule: {
            "monday": [ 23, 4, 15, 19 ],
            "tuesday": [ 22, 3, 14, 16 ],
            "wednesday": [ 21, 2, 13, 25 ],
            "thursday": [ 25, 6, 17, 21 ],
            "saturday": [ 24, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1160806144/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://safarrepublique.bandcamp.com/album/safar-republique',
          a_string: 'Safar Republique by Safar Republique',
          rule: {
            "monday": [ 24, 5, 16, 20 ],
            "tuesday": [ 23, 4, 15, 19 ],
            "wednesday": [ 22, 3, 14, 16 ],
            "thursday": [ 21, 2, 13, 25 ],
            "saturday": [ 25, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=828453224/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theholyforest.bandcamp.com/album/holy-forest',
          a_string: 'Holy Forest by Holy Forest',
          rule: {
            "monday": [ 25, 6, 17, 21 ],
            "tuesday": [ 24, 5, 16, 20 ],
            "wednesday": [ 23, 4, 15, 19 ],
            "thursday": [ 22, 3, 14, 16 ],
            "saturday": [ 21, 2, 13, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2153268527/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amerigo.bandcamp.com/album/fela-soul-deluxe-edition',
          a_string: 'Fela Soul [Deluxe Edition] by Amerigo Gazaway',
          rule: {
            "monday": [ 21, 2, 13, 25 ],
            "tuesday": [ 25, 6, 17, 21 ],
            "wednesday": [ 24, 5, 16, 20 ],
            "thursday": [ 23, 4, 15, 19 ],
            "saturday": [ 22, 3, 14, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=370222511/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hereliesman.bandcamp.com/album/here-lies-man',
          a_string: 'Here Lies Man by Here Lies Man',
          rule: {
            "monday": [ 22, 3, 14, 16 ],
            "tuesday": [ 21, 2, 13, 25 ],
            "wednesday": [ 25, 6, 17, 21 ],
            "thursday": [ 24, 5, 16, 20 ],
            "saturday": [ 23, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=843590072/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://akuphone.bandcamp.com/album/rats-don-t-eat-synthesizers',
          a_string: 'Rats Don’t Eat Synthesizers by Dwarfs of East Agouza',
          rule: {
            "monday": [ 23, 4, 15, 19 ],
            "tuesday": [ 22, 3, 14, 16 ],
            "wednesday": [ 21, 2, 13, 25 ],
            "thursday": [ 25, 6, 17, 21 ],
            "saturday": [ 24, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=8920850/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://akuphone.bandcamp.com/album/saba-saba-fighting',
          a_string: 'Saba-Saba Fighting by Mushapata',
          rule: {
            "monday": [ 24, 5, 16, 20 ],
            "tuesday": [ 23, 4, 15, 19 ],
            "wednesday": [ 22, 3, 14, 16 ],
            "thursday": [ 21, 2, 13, 25 ],
            "saturday": [ 25, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3780079413/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ablayecissoko.bandcamp.com/album/diam',
          a_string: 'Diam by Ablaye Cissoko',
          rule: {
            "monday": [ 26, 7, 18, 22 ],
            "tuesday": [ 25, 6, 17, 21 ],
            "wednesday": [ 24, 5, 16, 20 ],
            "thursday": [ 23, 4, 15, 17 ],
            "saturday": [ 22, 3, 14, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2896243937/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://parisdjs.bandcamp.com/album/grant-phabao-afrofunk-arkestra',
          a_string: 'Grant Phabao Afrofunk Arkestra by Grant Phabao Afrofunk Arkestra',
          rule: {
            "monday": [ 22, 3, 14, 26 ],
            "tuesday": [ 26, 7, 18, 22 ],
            "wednesday": [ 25, 6, 17, 21 ],
            "thursday": [ 24, 5, 16, 20 ],
            "saturday": [ 23, 4, 15, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2338045655/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://paralele.bandcamp.com/album/para-lele',
          a_string: 'Para Lele by Para Lele',
          rule: {
            "monday": [ 23, 4, 15, 17 ],
            "tuesday": [ 22, 3, 14, 26 ],
            "wednesday": [ 26, 7, 18, 22 ],
            "thursday": [ 25, 6, 17, 21 ],
            "saturday": [ 24, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2899067869/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mrbongo.bandcamp.com/album/shango',
          a_string: 'Shango by Peter King',
          rule: {
            "monday": [ 24, 5, 16, 20 ],
            "tuesday": [ 23, 4, 15, 17 ],
            "wednesday": [ 22, 3, 14, 26 ],
            "thursday": [ 26, 7, 18, 22 ],
            "saturday": [ 25, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=238733733/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://luakabop.bandcamp.com/album/world-psychedelic-classics-vol-3-love-s-a-real-thing-the-funky-fuzzy-sounds-of-west-africa',
          a_string: 'World Psychedelic Classics, Vol. 3: Love’s A Real Thing: The Funky Fuzzy Sounds of West Africa by Luaka Bop',
          rule: {
            "monday": [ 25, 6, 17, 21 ],
            "tuesday": [ 24, 5, 16, 20 ],
            "wednesday": [ 23, 4, 15, 17 ],
            "thursday": [ 22, 3, 14, 26 ],
            "saturday": [ 26, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4191899623/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zapmama.bandcamp.com/album/adventures-in-afropea',
          a_string: 'Adventures in Afropea by Zap Mama',
          rule: {
            "monday": [ 26, 7, 18, 22 ],
            "tuesday": [ 25, 6, 17, 21 ],
            "wednesday": [ 24, 5, 16, 20 ],
            "thursday": [ 23, 4, 15, 17 ],
            "saturday": [ 22, 3, 14, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=390686560/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zapmama.bandcamp.com/album/ancestry-in-progress',
          a_string: 'Ancestry in Progress by Zap Mama',
          rule: {
            "monday": [ 22, 3, 14, 26 ],
            "tuesday": [ 26, 7, 18, 22 ],
            "wednesday": [ 25, 6, 17, 21 ],
            "thursday": [ 24, 5, 16, 20 ],
            "saturday": [ 23, 4, 15, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=580948882/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://youngmontana.bandcamp.com/album/-',
          a_string: '💐  🌷  🌸  🌹  🌺  🌻  🌼  🥀 by Young Montana?',
          rule: {
            "monday": [ 24, 5, 16, 18 ],
            "tuesday": [ 23, 4, 15, 27 ],
            "wednesday": [ 27, 8, 19, 23 ],
            "thursday": [ 26, 7, 18, 22 ],
            "saturday": [ 25, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1761486499/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ostinatorecords.bandcamp.com/album/abu-obaida-hassan-his-tambour-the-shaigiya-sound-of-sudan',
          a_string: 'Abu Obaida Hassan &amp; His Tambour: The Shaigiya Sound of Sudan by Abu Obaida Hassan',
          rule: {
            "monday": [ 25, 6, 17, 21 ],
            "tuesday": [ 24, 5, 16, 18 ],
            "wednesday": [ 23, 4, 15, 27 ],
            "thursday": [ 27, 8, 19, 23 ],
            "saturday": [ 26, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1514440964/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bashiralgamar.bandcamp.com/album/bashir-al-gamar',
          a_string: 'Bashir Al Gamar by Bashir Al Gamar',
          rule: {
            "monday": [ 26, 7, 18, 22 ],
            "tuesday": [ 25, 6, 17, 21 ],
            "wednesday": [ 24, 5, 16, 18 ],
            "thursday": [ 23, 4, 15, 27 ],
            "saturday": [ 27, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=643718792/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://professorrhythm.bandcamp.com/album/professor-3',
          a_string: 'Professor 3 by Professor Rhythm',
          rule: {
            "monday": [ 27, 8, 19, 23 ],
            "tuesday": [ 26, 7, 18, 22 ],
            "wednesday": [ 25, 6, 17, 21 ],
            "thursday": [ 24, 5, 16, 18 ],
            "saturday": [ 23, 4, 15, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3765249079/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maalemmahmoudgania.bandcamp.com/album/colours-of-the-night',
          a_string: 'Colours of the Night by Maalem Mahmoud Gania',
          rule: {
            "monday": [ 23, 4, 15, 27 ],
            "tuesday": [ 27, 8, 19, 23 ],
            "wednesday": [ 26, 7, 18, 22 ],
            "thursday": [ 25, 6, 17, 21 ],
            "saturday": [ 24, 5, 16, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4259399763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://majidbekkas.bandcamp.com/album/african-gnaoua-blues',
          a_string: 'African Gnaoua Blues by MAJID BEKKAS',
          rule: {
            "monday": [ 24, 5, 16, 18 ],
            "tuesday": [ 23, 4, 15, 27 ],
            "wednesday": [ 27, 8, 19, 23 ],
            "thursday": [ 26, 7, 18, 22 ],
            "saturday": [ 25, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=436003912/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sitiandtheband.bandcamp.com/album/fusing-the-roots',
          a_string: 'Fusing the Roots by Siti &amp; The Band',
          rule: {
            "monday": [ 25, 6, 17, 21 ],
            "tuesday": [ 24, 5, 16, 18 ],
            "wednesday": [ 23, 4, 15, 27 ],
            "thursday": [ 27, 8, 19, 23 ],
            "saturday": [ 26, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2477978841/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ammar808.bandcamp.com/album/maghreb-united',
          a_string: 'Maghreb United by AMMAR 808',
          rule: {
            "monday": [ 27, 8, 19, 23 ],
            "tuesday": [ 26, 7, 18, 22 ],
            "wednesday": [ 25, 6, 17, 19 ],
            "thursday": [ 24, 5, 16, 28 ],
            "saturday": [ 28, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1143115327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kwesitumtum.bandcamp.com/album/kwesi-tumtum',
          a_string: 'Kwesi TumTum by Kwesi TumTum',
          rule: {
            "monday": [ 28, 9, 20, 24 ],
            "tuesday": [ 27, 8, 19, 23 ],
            "wednesday": [ 26, 7, 18, 22 ],
            "thursday": [ 25, 6, 17, 19 ],
            "saturday": [ 24, 5, 16, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3849705144/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yossifine.bandcamp.com/album/blue-desert',
          a_string: 'http://yossifine.bandcamp.com/album/blue-desert',
          rule: {
            "monday": [ 24, 5, 16, 28 ],
            "tuesday": [ 28, 9, 20, 24 ],
            "wednesday": [ 27, 8, 19, 23 ],
            "thursday": [ 26, 7, 18, 22 ],
            "saturday": [ 25, 6, 17, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=703304363/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://azizabrahim.bandcamp.com/album/abbar-el-hamada',
          a_string: 'Abbar el Hamada by Aziza Brahim',
          rule: {
            "monday": [ 25, 6, 17, 19 ],
            "tuesday": [ 24, 5, 16, 28 ],
            "wednesday": [ 28, 9, 20, 24 ],
            "thursday": [ 27, 8, 19, 23 ],
            "saturday": [ 26, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3839399932/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nouramintseymali.bandcamp.com/album/azawan-ii',
          a_string: 'Azawan II by Noura Mint Seymali',
          rule: {
            "monday": [ 26, 7, 18, 22 ],
            "tuesday": [ 25, 6, 17, 19 ],
            "wednesday": [ 24, 5, 16, 28 ],
            "thursday": [ 28, 9, 20, 24 ],
            "saturday": [ 27, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2526125338/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://habibifunkrecords.bandcamp.com/album/habibi-funk-008-muslims-and-christians',
          a_string: 'Habibi Funk 008: Muslims and Christians by Kamal Keila',
          rule: {
            "monday": [ 27, 8, 19, 23 ],
            "tuesday": [ 26, 7, 18, 22 ],
            "wednesday": [ 25, 6, 17, 19 ],
            "thursday": [ 24, 5, 16, 28 ],
            "saturday": [ 28, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1464668603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mamanthereal249.bandcamp.com/album/eyes-of-a-gemini',
          a_string: 'http://mamanthereal249.bandcamp.com/album/eyes-of-a-gemini',
          rule: {
            "monday": [ 28, 9, 20, 24 ],
            "tuesday": [ 27, 8, 19, 23 ],
            "wednesday": [ 26, 7, 18, 22 ],
            "thursday": [ 25, 6, 17, 19 ],
            "saturday": [ 24, 5, 16, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=646846745/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://youngmontana.bandcamp.com/album/young-montana',
          a_string: 'Young Montana? by RIP',
          rule: {
            "monday": [ 25, 6, 17, 29 ],
            "tuesday": [ 29, 10, 21, 25 ],
            "wednesday": [ 28, 9, 20, 24 ],
            "thursday": [ 27, 8, 19, 23 ],
            "saturday": [ 26, 7, 18, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1250977659/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mulatuastatke.bandcamp.com/album/afro-latin-soul',
          a_string: 'Afro Latin Soul by Mulatu Astatke',
          rule: {
            "monday": [ 26, 7, 18, 20 ],
            "tuesday": [ 25, 6, 17, 29 ],
            "wednesday": [ 29, 10, 21, 25 ],
            "thursday": [ 28, 9, 20, 24 ],
            "saturday": [ 27, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4028593955/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rvdicalthekid.bandcamp.com/album/carte-blanche',
          a_string: 'Carte Blanche by Rvdical The Kid',
          rule: {
            "monday": [ 27, 8, 19, 23 ],
            "tuesday": [ 26, 7, 18, 20 ],
            "wednesday": [ 25, 6, 17, 29 ],
            "thursday": [ 29, 10, 21, 25 ],
            "saturday": [ 28, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3721060560/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://riaboss.bandcamp.com/album/find-your-free',
          a_string: 'Find Your Free by Ria Boss',
          rule: {
            "monday": [ 28, 9, 20, 24 ],
            "tuesday": [ 27, 8, 19, 23 ],
            "wednesday": [ 26, 7, 18, 20 ],
            "thursday": [ 25, 6, 17, 29 ],
            "saturday": [ 29, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=382935178/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ebotaylor.bandcamp.com/album/love-death',
          a_string: 'Love &amp; Death by Ebo Taylor',
          rule: {
            "monday": [ 29, 10, 21, 25 ],
            "tuesday": [ 28, 9, 20, 24 ],
            "wednesday": [ 27, 8, 19, 23 ],
            "thursday": [ 26, 7, 18, 20 ],
            "saturday": [ 25, 6, 17, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3837302998/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gafacci.bandcamp.com/album/ahunda-ep',
          a_string: 'Ahunda EP by Gafacci',
          rule: {
            "monday": [ 25, 6, 17, 29 ],
            "tuesday": [ 29, 10, 21, 25 ],
            "wednesday": [ 28, 9, 20, 24 ],
            "thursday": [ 27, 8, 19, 23 ],
            "saturday": [ 26, 7, 18, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1190584333/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alexwondergem.bandcamp.com/album/buying-our-freedom',
          a_string: 'Buying Our Freedom by Eli &amp; Alex Wondergem',
          rule: {
            "monday": [ 26, 7, 18, 20 ],
            "tuesday": [ 25, 6, 17, 29 ],
            "wednesday": [ 29, 10, 21, 25 ],
            "thursday": [ 28, 9, 20, 24 ],
            "saturday": [ 27, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3919098799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jojoabot.bandcamp.com/album/ngiwunkulunkulu',
          a_string: 'NGIWUNKULUNKULU by Jojo Abot',
          rule: {
            "monday": [ 28, 9, 20, 24 ],
            "tuesday": [ 27, 8, 19, 21 ],
            "wednesday": [ 26, 7, 18, 30 ],
            "thursday": [ 30, 11, 22, 26 ],
            "saturday": [ 29, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3926583073/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jojoabot.bandcamp.com/album/fyfya-woto',
          a_string: 'Fyfya Woto by Jojo Abot',
          rule: {
            "monday": [ 29, 10, 21, 25 ],
            "tuesday": [ 28, 9, 20, 24 ],
            "wednesday": [ 27, 8, 19, 21 ],
            "thursday": [ 26, 7, 18, 30 ],
            "saturday": [ 30, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2959055025/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jesssahbipeterone.bandcamp.com/album/our-garden-needs-its-flowers',
          a_string: 'Our Garden Needs Its Flowers by Jess Sah Bi &amp; Peter One',
          rule: {
            "monday": [ 30, 11, 22, 26 ],
            "tuesday": [ 29, 10, 21, 25 ],
            "wednesday": [ 28, 9, 20, 24 ],
            "thursday": [ 27, 8, 19, 21 ],
            "saturday": [ 26, 7, 18, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1428360488/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://asnakechworku.bandcamp.com/album/asnakech',
          a_string: 'Asnakech by Asnakech Worku',
          rule: {
            "monday": [ 26, 7, 18, 30 ],
            "tuesday": [ 30, 11, 22, 26 ],
            "wednesday": [ 29, 10, 21, 25 ],
            "thursday": [ 28, 9, 20, 24 ],
            "saturday": [ 27, 8, 19, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=339067473/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nahawadoumbia.bandcamp.com/album/la-grande-cantatrice-malienne-vol-3',
          a_string: 'La Grande Cantatrice Malienne Vol 3 by Na Hawa Doumbia',
          rule: {
            "monday": [ 27, 8, 19, 21 ],
            "tuesday": [ 26, 7, 18, 30 ],
            "wednesday": [ 30, 11, 22, 26 ],
            "thursday": [ 29, 10, 21, 25 ],
            "saturday": [ 28, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2446604127/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bolamusic.bandcamp.com/album/volume-7',
          a_string: 'Volume 7 by Bola',
          rule: {
            "monday": [ 28, 9, 20, 24 ],
            "tuesday": [ 27, 8, 19, 21 ],
            "wednesday": [ 26, 7, 18, 30 ],
            "thursday": [ 30, 11, 22, 26 ],
            "saturday": [ 29, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1836407496/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hailumergia.bandcamp.com/album/wede-harer-guzo',
          a_string: 'Wede Harer Guzo by Hailu Mergia',
          rule: {
            "monday": [ 29, 10, 21, 25 ],
            "tuesday": [ 28, 9, 20, 24 ],
            "wednesday": [ 27, 8, 19, 21 ],
            "thursday": [ 26, 7, 18, 30 ],
            "saturday": [ 30, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=707266281/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hailumergia.bandcamp.com/album/yegle-nesh-hailu',
          a_string: 'Yegle Nesh / Hailu by Hailu Mergia',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 30, 11, 22, 26 ],
            "wednesday": [ 29, 10, 21, 25 ],
            "thursday": [ 28, 9, 20, 22 ],
            "saturday": [ 27, 8, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3227102425/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pennypenny.bandcamp.com/album/shaka-bundu',
          a_string: 'Shaka Bundu by Penny Penny',
          rule: {
            "monday": [ 27, 8, 19, 1 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 30, 11, 22, 26 ],
            "thursday": [ 29, 10, 21, 25 ],
            "saturday": [ 28, 9, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2220074960/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://onenessofjuju.bandcamp.com/album/african-rhythms',
          a_string: 'African Rhythms by Oneness of Juju',
          rule: {
            "monday": [ 28, 9, 20, 22 ],
            "tuesday": [ 27, 8, 19, 1 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 30, 11, 22, 26 ],
            "saturday": [ 29, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3598762176/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ibaaku.bandcamp.com/album/alien-cartoon-2',
          a_string: 'Alien Cartoon by Ibaaku',
          rule: {
            "monday": [ 29, 10, 21, 25 ],
            "tuesday": [ 28, 9, 20, 22 ],
            "wednesday": [ 27, 8, 19, 1 ],
            "thursday": [ 1, 12, 23, 27 ],
            "saturday": [ 30, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2023254203/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oseikorankye.bandcamp.com/album/seperewa-of-ghana-3mmer3-nhyina-ns3',
          a_string: 'Seperewa of Ghana: 3mmer3 Nhyina Ns3 by Osei Korankye',
          rule: {
            "monday": [ 30, 11, 22, 26 ],
            "tuesday": [ 29, 10, 21, 25 ],
            "wednesday": [ 28, 9, 20, 22 ],
            "thursday": [ 27, 8, 19, 1 ],
            "saturday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3717332757/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ostinatorecords.bandcamp.com/album/two-niles-to-sing-a-melody-the-violins-synths-of-sudan',
          a_string: 'Two Niles to Sing a Melody: The Violins &amp; Synths of Sudan by Various Artists',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 30, 11, 22, 26 ],
            "wednesday": [ 29, 10, 21, 25 ],
            "thursday": [ 28, 9, 20, 22 ],
            "saturday": [ 27, 8, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3679496837/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ostinatorecords.bandcamp.com/album/ost45002-nhu-djon-volta-pa-terra',
          a_string: 'OST45002 Nhu Djon / Volta Pa Terra by Conjunto Jovens Africanos',
          rule: {
            "monday": [ 27, 8, 19, 1 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 30, 11, 22, 26 ],
            "thursday": [ 29, 10, 21, 25 ],
            "saturday": [ 28, 9, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2497963513/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://youngmontana.bandcamp.com/album/limerence',
          a_string: 'Limerence by Young Montana?',
          rule: {
            "monday": [ 29, 10, 21, 23 ],
            "tuesday": [ 28, 9, 20, 2 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "saturday": [ 30, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2834942753/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://manudibango.bandcamp.com/album/manu-76',
          a_string: 'Manu 76 by Manu Dibango',
          rule: {
            "monday": [ 30, 11, 22, 26 ],
            "tuesday": [ 29, 10, 21, 23 ],
            "wednesday": [ 28, 9, 20, 2 ],
            "thursday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1969518197/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://manudibango.bandcamp.com/album/ceddo-bande-originale-du-film',
          a_string: 'Ceddo (Bande originale du film) by Manu Dibango',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 30, 11, 22, 26 ],
            "wednesday": [ 29, 10, 21, 23 ],
            "thursday": [ 28, 9, 20, 2 ],
            "saturday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3593571827/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africaseven.bandcamp.com/album/african-experimentals-1972-1979',
          a_string: 'African Experimentals (1972-1979) by Afro National',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 30, 11, 22, 26 ],
            "thursday": [ 29, 10, 21, 23 ],
            "saturday": [ 28, 9, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=943647176/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africaseven.bandcamp.com/album/africa-airways-03-the-afro-psych-excursion-1972-1984',
          a_string: 'Africa Airways 03 (The Afro-Psych Excursion 1972 - 1984) by Various Artists',
          rule: {
            "monday": [ 28, 9, 20, 2 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 30, 11, 22, 26 ],
            "saturday": [ 29, 10, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4145648681/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africaseven.bandcamp.com/album/du-mali',
          a_string: 'Du Mali by Sory Bamba',
          rule: {
            "monday": [ 29, 10, 21, 23 ],
            "tuesday": [ 28, 9, 20, 2 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "saturday": [ 30, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1861636519/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ekambibrillant.bandcamp.com/album/africa-oumba',
          a_string: 'Africa Oumba by Ekambi Brillant',
          rule: {
            "monday": [ 30, 11, 22, 26 ],
            "tuesday": [ 29, 10, 21, 23 ],
            "wednesday": [ 28, 9, 20, 2 ],
            "thursday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2158923454/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://collocutor.bandcamp.com/album/instead',
          a_string: 'Instead by Collocutor',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 29, 10, 21, 3 ],
            "saturday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1213338299/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/dur-dur-of-somalia-volume-1-volume-2-previously-unreleased-tracks',
          a_string: 'Dur Dur of Somalia - Volume 1, Volume 2 &amp; Previously Unreleased Tracks by Dur-Dur Band',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 29, 10, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3946406059/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://super11.bandcamp.com/album/super-onze-gao',
          a_string: 'Super Onze - Gao by Super Onze, The Takamba champions of the Niger bend.',
          rule: {
            "monday": [ 29, 10, 21, 3 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "saturday": [ 30, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1119630624/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://caligolarecords.bandcamp.com/album/mediterranean-blues',
          a_string: 'Mediterranean Blues by Baba Sissoko',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 29, 10, 21, 3 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4126538767/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tallawit.bandcamp.com/album/hali-diallo',
          a_string: 'Hali Diallo by Tallawit Timbouctou',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 30, 11, 22, 24 ],
            "wednesday": [ 29, 10, 21, 3 ],
            "thursday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=698406138/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tofu-kozo.bandcamp.com/album/anogal',
          a_string: 'Anogal by Lowqua',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 29, 10, 21, 3 ],
            "saturday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4066333948/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mrbongo.bandcamp.com/album/simigwa',
          a_string: 'Simigwa by Gyedu-Blay Ambolley',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 29, 10, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=570097741/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/asnake-gebreyes-ahadu',
          a_string: 'Asnake Gebreyes - Ahadu by Asnake Gebreyes',
          rule: {
            "monday": [ 30, 11, 22, 4 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3136582805/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zerfiekebede.bandcamp.com/album/selene-yemimaldew',
          a_string: 'ስለእኔ የሚማልደው ኢዩሱስ ነው Selene Yemimaldew by Zerfie Kebede',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 30, 11, 22, 4 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1928936924/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tonyallensecretagent.bandcamp.com/album/secret-agent',
          a_string: 'Secret Agent by Tony Allen',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 30, 11, 22, 4 ],
            "thursday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1008421274/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cheikhlo.bandcamp.com/album/n-la-thiass-remastered',
          a_string: 'Né La Thiass (Remastered) by Cheikh Lo',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 4 ],
            "saturday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3383519536/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cheikhlo.bandcamp.com/album/jamm',
          a_string: 'Jamm by Cheikh Lo',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 30, 11, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2206969211/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cheikhlo.bandcamp.com/album/lamp-fall',
          a_string: 'Lamp Fall by Cheikh Lo',
          rule: {
            "monday": [ 30, 11, 22, 4 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2099982909/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cheikhlo.bandcamp.com/album/bambay-gueej',
          a_string: 'Bambay Gueej by Cheikh Lo',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 30, 11, 22, 4 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=572366773/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cheikhlo.bandcamp.com/album/n-la-thiass',
          a_string: 'Né La Thiass by Cheikh Lo',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 5 ],
            "thursday": [ 5, 16, 27, 1 ],
            "saturday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2217298594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alifarkatoure.bandcamp.com/album/the-source',
          a_string: 'The Source by Ali Farka Touré',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 1, 12, 23, 5 ],
            "saturday": [ 5, 16, 27, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3251310331/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alifarkatoure.bandcamp.com/album/savane',
          a_string: 'Savane by Ali Farka Touré',
          rule: {
            "monday": [ 5, 16, 27, 1 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 1, 12, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3436276893/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alifarkatoure.bandcamp.com/album/red-green',
          a_string: 'Red &amp; Green by Ali Farka Touré',
          rule: {
            "monday": [ 1, 12, 23, 5 ],
            "tuesday": [ 5, 16, 27, 1 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=454214762/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alifarkatoure.bandcamp.com/album/niafunk',
          a_string: 'Niafunké by Ali Farka Touré',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 1, 12, 23, 5 ],
            "wednesday": [ 5, 16, 27, 1 ],
            "thursday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2430714363/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alifarkatoure.bandcamp.com/album/radio-mali',
          a_string: 'Radio Mali by Ali Farka Touré',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 5 ],
            "thursday": [ 5, 16, 27, 1 ],
            "saturday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1991559850/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alifarkatoure.bandcamp.com/album/talking-timbuktu',
          a_string: 'Talking Timbuktu by Ali Farka Toure with Ry Cooder',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 1, 12, 23, 5 ],
            "saturday": [ 5, 16, 27, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2800288937/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alifarkatoure.bandcamp.com/album/the-river',
          a_string: 'The River by Ali Farka Touré',
          rule: {
            "monday": [ 6, 17, 28, 2 ],
            "tuesday": [ 5, 16, 27, 1 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 2, 13, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=664082924/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alifarkatoure.bandcamp.com/album/ali-farka-toure',
          a_string: 'Ali Farka Toure by Ali Farka Touré',
          rule: {
            "monday": [ 2, 13, 24, 6 ],
            "tuesday": [ 6, 17, 28, 2 ],
            "wednesday": [ 5, 16, 27, 1 ],
            "thursday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2250187814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mbongwanastar.bandcamp.com/album/from-kinshasa',
          a_string: 'From Kinshasa by Mbongwana Star',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 2, 13, 24, 6 ],
            "wednesday": [ 6, 17, 28, 2 ],
            "thursday": [ 5, 16, 27, 1 ],
            "saturday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1396061544/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oumousangare.bandcamp.com/album/moussolou',
          a_string: 'Moussolou by Oumou Sangare',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 2, 13, 24, 6 ],
            "thursday": [ 6, 17, 28, 2 ],
            "saturday": [ 5, 16, 27, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2772766630/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oumousangare.bandcamp.com/album/seya',
          a_string: 'Seya by Oumou Sangare',
          rule: {
            "monday": [ 5, 16, 27, 1 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 2, 13, 24, 6 ],
            "saturday": [ 6, 17, 28, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2198951471/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oumousangare.bandcamp.com/album/oumou',
          a_string: 'Oumou by Oumou Sangare',
          rule: {
            "monday": [ 6, 17, 28, 2 ],
            "tuesday": [ 5, 16, 27, 1 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 2, 13, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1812425818/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oumousangare.bandcamp.com/album/worotan',
          a_string: 'Worotan by Oumou Sangare',
          rule: {
            "monday": [ 2, 13, 24, 6 ],
            "tuesday": [ 6, 17, 28, 2 ],
            "wednesday": [ 5, 16, 27, 1 ],
            "thursday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1979443737/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oumousangare.bandcamp.com/album/ko-sira',
          a_string: 'Ko Sira by Oumou Sangare',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 7 ],
            "wednesday": [ 7, 18, 29, 3 ],
            "thursday": [ 6, 17, 28, 2 ],
            "saturday": [ 5, 16, 27, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3259458749/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://toumanidiabate.bandcamp.com/album/toumani-sidiki',
          a_string: 'Toumani &amp; Sidiki by Toumani Diabaté and Sidiki Diabaté',
          rule: {
            "monday": [ 5, 16, 27, 1 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 3, 14, 25, 7 ],
            "thursday": [ 7, 18, 29, 3 ],
            "saturday": [ 6, 17, 28, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1862346822/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://toumanidiabate.bandcamp.com/album/the-mande-variations',
          a_string: 'The Mande Variations by Toumani Diabaté',
          rule: {
            "monday": [ 6, 17, 28, 2 ],
            "tuesday": [ 5, 16, 27, 1 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 3, 14, 25, 7 ],
            "saturday": [ 7, 18, 29, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2733296487/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://toumanidiabate.bandcamp.com/album/boulevard-de-lindependance',
          a_string: 'Boulevard de l&#39;Independance by Toumani Diabaté',
          rule: {
            "monday": [ 7, 18, 29, 3 ],
            "tuesday": [ 6, 17, 28, 2 ],
            "wednesday": [ 5, 16, 27, 1 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 3, 14, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1881996899/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fatoumatadiawara.bandcamp.com/album/fatou',
          a_string: 'Fatou by Fatoumata Diawara',
          rule: {
            "monday": [ 3, 14, 25, 7 ],
            "tuesday": [ 7, 18, 29, 3 ],
            "wednesday": [ 6, 17, 28, 2 ],
            "thursday": [ 5, 16, 27, 1 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1899900139/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aliandtoumani.bandcamp.com/album/ali-toumani',
          a_string: 'Ali &amp; Toumani by Ali Farka Touré and Toumani Diabaté',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 7 ],
            "wednesday": [ 7, 18, 29, 3 ],
            "thursday": [ 6, 17, 28, 2 ],
            "saturday": [ 5, 16, 27, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3386233327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aliandtoumani.bandcamp.com/album/in-the-heart-of-the-moon',
          a_string: 'In The Heart Of The Moon by Ali Farka Touré and Toumani Diabaté',
          rule: {
            "monday": [ 5, 16, 27, 1 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 3, 14, 25, 7 ],
            "thursday": [ 7, 18, 29, 3 ],
            "saturday": [ 6, 17, 28, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3803453218/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://secousse.bandcamp.com/album/max-rambhojan',
          a_string: 'Max Rambhojan by Max Rambhojan',
          rule: {
            "monday": [ 7, 18, 29, 3 ],
            "tuesday": [ 6, 17, 28, 2 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 4, 15, 26, 8 ],
            "saturday": [ 8, 19, 30, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2571139378/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://secousse.bandcamp.com/album/cosmic-sounds',
          a_string: 'Cosmic Sounds by N&#39;Draman Blintch',
          rule: {
            "monday": [ 8, 19, 30, 4 ],
            "tuesday": [ 7, 18, 29, 3 ],
            "wednesday": [ 6, 17, 28, 2 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 4, 15, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3383471577/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://secousse.bandcamp.com/album/makiyaj',
          a_string: 'Makiyaj by Jules-Henry Malaki',
          rule: {
            "monday": [ 4, 15, 26, 8 ],
            "tuesday": [ 8, 19, 30, 4 ],
            "wednesday": [ 7, 18, 29, 3 ],
            "thursday": [ 6, 17, 28, 2 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2818412036/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wearemawimbi.bandcamp.com/album/radio-mawimbi-volume-1',
          a_string: 'Radio Mawimbi • Volume 1 by Various Artists',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 4, 15, 26, 8 ],
            "wednesday": [ 8, 19, 30, 4 ],
            "thursday": [ 7, 18, 29, 3 ],
            "saturday": [ 6, 17, 28, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3359933186/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://caveofadullam.bandcamp.com/album/the-bamboo-effect',
          a_string: 'THE BAMBOO EFFECT by Uzee The Bovvaking',
          rule: {
            "monday": [ 6, 17, 28, 2 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 4, 15, 26, 8 ],
            "thursday": [ 8, 19, 30, 4 ],
            "saturday": [ 7, 18, 29, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=261572253/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://caveofadullam.bandcamp.com/album/the-drunken-monk-ep',
          a_string: 'The Drunken Monk EP by Uzee The Bovvaking',
          rule: {
            "monday": [ 7, 18, 29, 3 ],
            "tuesday": [ 6, 17, 28, 2 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 4, 15, 26, 8 ],
            "saturday": [ 8, 19, 30, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3289471561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://goldendawnarkestra.bandcamp.com/album/stargazer',
          a_string: 'Stargazer by GOLDEN DAWN ARKESTRA',
          rule: {
            "monday": [ 8, 19, 30, 4 ],
            "tuesday": [ 7, 18, 29, 3 ],
            "wednesday": [ 6, 17, 28, 2 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 4, 15, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3108828822/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kalitarecords.bandcamp.com/album/sabi',
          a_string: 'Sabi by Okyerema Asante',
          rule: {
            "monday": [ 5, 16, 27, 9 ],
            "tuesday": [ 9, 20, 1, 5 ],
            "wednesday": [ 8, 19, 30, 4 ],
            "thursday": [ 7, 18, 29, 3 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=574564547/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayuunesule.bandcamp.com/album/what-a-man-can-do-a-woman-can-do-more-better',
          a_string: 'What A Man Can Do A Woman Can Do More Better by Ayuune Sule',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 5, 16, 27, 9 ],
            "wednesday": [ 9, 20, 1, 5 ],
            "thursday": [ 8, 19, 30, 4 ],
            "saturday": [ 7, 18, 29, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3128428143/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://galtfaculty.bandcamp.com/album/e-b-o-w',
          a_string: 'E B O W by GALTFaculty',
          rule: {
            "monday": [ 7, 18, 29, 3 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 5, 16, 27, 9 ],
            "thursday": [ 9, 20, 1, 5 ],
            "saturday": [ 8, 19, 30, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=853250342/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://toumastine.bandcamp.com/album/tahnafet',
          a_string: 'Tahnafet by Toumastine',
          rule: {
            "monday": [ 8, 19, 30, 4 ],
            "tuesday": [ 7, 18, 29, 3 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 5, 16, 27, 9 ],
            "saturday": [ 9, 20, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3621870491/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://farflownfalcon.bandcamp.com/album/concrete-valleys-manmade-canyons-ep',
          a_string: 'Concrete Valleys &amp; Manmade Canyons EP by Far Flown Falcon',
          rule: {
            "monday": [ 9, 20, 1, 5 ],
            "tuesday": [ 8, 19, 30, 4 ],
            "wednesday": [ 7, 18, 29, 3 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 5, 16, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2180589566/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://farflownfalcon.bandcamp.com/album/the-apocalypse-lullaby-ep',
          a_string: 'The Apocalypse Lullaby EP by Far Flown Falcon',
          rule: {
            "monday": [ 5, 16, 27, 9 ],
            "tuesday": [ 9, 20, 1, 5 ],
            "wednesday": [ 8, 19, 30, 4 ],
            "thursday": [ 7, 18, 29, 3 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1948868375/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://farflownfalcon.bandcamp.com/album/backyard-animals-ep',
          a_string: 'Backyard Animals EP by Far Flown Falcon',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 5, 16, 27, 9 ],
            "wednesday": [ 9, 20, 1, 5 ],
            "thursday": [ 8, 19, 30, 4 ],
            "saturday": [ 7, 18, 29, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4176790627/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://farflownfalcon.bandcamp.com/album/a-crown-on-a-chain-ep',
          a_string: 'A Crown on a Chain EP by Far Flown Falcon',
          rule: {
            "monday": [ 8, 19, 30, 4 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 6, 17, 28, 10 ],
            "thursday": [ 10, 21, 2, 6 ],
            "saturday": [ 9, 20, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1456238624/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/4-track-recording-session',
          a_string: '4-Track Recording Session by The Green Arrows',
          rule: {
            "monday": [ 9, 20, 1, 5 ],
            "tuesday": [ 8, 19, 30, 4 ],
            "wednesday": [ 7, 18, 29, 1 ],
            "thursday": [ 6, 17, 28, 10 ],
            "saturday": [ 10, 21, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1016836622/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/jamb-e-os-m-ticos-sons-da-amaz-nia',
          a_string: 'Jambú e Os Míticos Sons Da Amazônia by Various',
          rule: {
            "monday": [ 10, 21, 2, 6 ],
            "tuesday": [ 9, 20, 1, 5 ],
            "wednesday": [ 8, 19, 30, 4 ],
            "thursday": [ 7, 18, 29, 1 ],
            "saturday": [ 6, 17, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1449091927/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/take-one-1974-79',
          a_string: 'Take One (1974-79) by Hallelujah Chicken Run Band',
          rule: {
            "monday": [ 6, 17, 28, 10 ],
            "tuesday": [ 10, 21, 2, 6 ],
            "wednesday": [ 9, 20, 1, 5 ],
            "thursday": [ 8, 19, 30, 4 ],
            "saturday": [ 7, 18, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1297314138/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/african-scream-contest-raw-psychedelic-afro-sounds-from-benin-togo-70s',
          a_string: 'African Scream Contest - Raw &amp; Psychedelic Afro Sounds from Benin &amp; Togo 70s by Various',
          rule: {
            "monday": [ 7, 18, 29, 1 ],
            "tuesday": [ 6, 17, 28, 10 ],
            "wednesday": [ 10, 21, 2, 6 ],
            "thursday": [ 9, 20, 1, 5 ],
            "saturday": [ 8, 19, 30, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4181811290/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/the-vodoun-effect-funk-sato-from-benins-obscure-labels-1972-1975',
          a_string: 'The Vodoun Effect - Funk &amp; Sato from Benin&#39;s Obscure Labels 1972-1975 by Orchestre Poly-Rythmo de Cotonou',
          rule: {
            "monday": [ 8, 19, 30, 4 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 6, 17, 28, 10 ],
            "thursday": [ 10, 21, 2, 6 ],
            "saturday": [ 9, 20, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2019152471/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/legends-of-benin-afro-funk-cavacha-agbadja-afro-beat',
          a_string: 'Legends Of Benin - Afro Funk, Cavacha, Agbadja, Afro-Beat by Various',
          rule: {
            "monday": [ 9, 20, 1, 5 ],
            "tuesday": [ 8, 19, 30, 4 ],
            "wednesday": [ 7, 18, 29, 1 ],
            "thursday": [ 6, 17, 28, 10 ],
            "saturday": [ 10, 21, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4135078282/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/echos-hypnotiques-from-the-vaults-of-albarika-store-1969-1979',
          a_string: 'Echos Hypnotiques - From the Vaults of Albarika Store 1969-1979 by Orchestre Poly Rythmo de Cotonou',
          rule: {
            "monday": [ 11, 22, 3, 7 ],
            "tuesday": [ 10, 21, 2, 6 ],
            "wednesday": [ 9, 20, 1, 5 ],
            "thursday": [ 8, 19, 30, 2 ],
            "saturday": [ 7, 18, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1928142075/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/mambo-loco',
          a_string: 'Mambo Loco by Anibal VelasQuez Y Su Conjunto',
          rule: {
            "monday": [ 7, 18, 29, 11 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 6 ],
            "thursday": [ 9, 20, 1, 5 ],
            "saturday": [ 8, 19, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=23583683/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/afro-beat-airways-west-african-shock-waves-ghana-togo-1972-1978',
          a_string: 'Afro-Beat Airways - West African Shock Waves - Ghana &amp; Togo 1972-1978 by Various',
          rule: {
            "monday": [ 8, 19, 30, 2 ],
            "tuesday": [ 7, 18, 29, 11 ],
            "wednesday": [ 11, 22, 3, 7 ],
            "thursday": [ 10, 21, 2, 6 ],
            "saturday": [ 9, 20, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4215932827/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/angola-soundtrack-the-unique-sound-of-luanda-1968-1976',
          a_string: 'Angola Soundtrack - The Unique Sound Of Luanda 1968-1976 by Various',
          rule: {
            "monday": [ 9, 20, 1, 5 ],
            "tuesday": [ 8, 19, 30, 2 ],
            "wednesday": [ 7, 18, 29, 11 ],
            "thursday": [ 11, 22, 3, 7 ],
            "saturday": [ 10, 21, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1378410386/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/the-1st-album-1973',
          a_string: 'The 1st Album (1973) by Orchestre Poly-Rythmo',
          rule: {
            "monday": [ 10, 21, 2, 6 ],
            "tuesday": [ 9, 20, 1, 5 ],
            "wednesday": [ 8, 19, 30, 2 ],
            "thursday": [ 7, 18, 29, 11 ],
            "saturday": [ 11, 22, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=677321271/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/bambara-mystic-soul-the-raw-sound-of-burkina-faso-1974-1979',
          a_string: 'Bambara Mystic Soul - The Raw Sound Of Burkina Faso 1974-1979 by Various',
          rule: {
            "monday": [ 11, 22, 3, 7 ],
            "tuesday": [ 10, 21, 2, 6 ],
            "wednesday": [ 9, 20, 1, 5 ],
            "thursday": [ 8, 19, 30, 2 ],
            "saturday": [ 7, 18, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3683161407/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/the-bariba-sound-1970-1976',
          a_string: 'The Bariba Sound 1970-1976 by Orchestre Super Borgou De Parakou',
          rule: {
            "monday": [ 7, 18, 29, 11 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 6 ],
            "thursday": [ 9, 20, 1, 5 ],
            "saturday": [ 8, 19, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4126612645/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/diablos-del-ritmo-the-colombian-melting-pot-1960-1985',
          a_string: 'Diablos Del Ritmo: The Colombian Melting Pot 1960-1985 by Various',
          rule: {
            "monday": [ 9, 20, 1, 3 ],
            "tuesday": [ 8, 19, 30, 12 ],
            "wednesday": [ 12, 23, 4, 8 ],
            "thursday": [ 11, 22, 3, 7 ],
            "saturday": [ 10, 21, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2097309496/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/side-1-imoikeme-side-2-ododo',
          a_string: 'Side 1: Imoikeme / Side 2: Ododo by Solo Hit',
          rule: {
            "monday": [ 10, 21, 2, 6 ],
            "tuesday": [ 9, 20, 1, 3 ],
            "wednesday": [ 8, 19, 30, 12 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=479410326/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/the-skeletal-essences-of-afro-funk-1969-1980',
          a_string: 'The Skeletal Essences Of Afro Funk 1969-1980 by Orchestre Poly-Rythmo De Cotonou',
          rule: {
            "monday": [ 11, 22, 3, 7 ],
            "tuesday": [ 10, 21, 2, 6 ],
            "wednesday": [ 9, 20, 1, 3 ],
            "thursday": [ 8, 19, 30, 12 ],
            "saturday": [ 12, 23, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1599153575/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/afrobeat-airways-2-return-flight-to-ghana-1974-1983',
          a_string: 'Afrobeat Airways 2 - Return Flight To Ghana 1974-1983 by Various',
          rule: {
            "monday": [ 12, 23, 4, 8 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 6 ],
            "thursday": [ 9, 20, 1, 3 ],
            "saturday": [ 8, 19, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2575364468/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/rebita-1st-long-play-recorded-and-pressed-in-angola-1973',
          a_string: 'Rebita - 1st Long Play recorded and pressed in Angola - 1973 by Various',
          rule: {
            "monday": [ 8, 19, 30, 12 ],
            "tuesday": [ 12, 23, 4, 8 ],
            "wednesday": [ 11, 22, 3, 7 ],
            "thursday": [ 10, 21, 2, 6 ],
            "saturday": [ 9, 20, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1299547294/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/angola-soundtrack-2-hypnosis-distorsions-other-sonic-innovations-1969-1978',
          a_string: 'Angola Soundtrack 2 - Hypnosis, Distorsions &amp; Other Sonic Innovations 1969-1978 by Various',
          rule: {
            "monday": [ 9, 20, 1, 3 ],
            "tuesday": [ 8, 19, 30, 12 ],
            "wednesday": [ 12, 23, 4, 8 ],
            "thursday": [ 11, 22, 3, 7 ],
            "saturday": [ 10, 21, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4234132083/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/siria',
          a_string: 'Siriá by Mestre Cupijó e Seu Ritmo (The mythical sound of northern Brasil)',
          rule: {
            "monday": [ 10, 21, 2, 6 ],
            "tuesday": [ 9, 20, 1, 3 ],
            "wednesday": [ 8, 19, 30, 12 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2909032497/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/senegal-70-sonic-gems-previously-unreleased-recordings-from-the-70s',
          a_string: 'Senegal 70 - Sonic Gems &amp; Previously Unreleased Recordings from the 70s by Various',
          rule: {
            "monday": [ 12, 23, 4, 8 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 4 ],
            "thursday": [ 9, 20, 1, 13 ],
            "saturday": [ 13, 24, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1123281549/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/legend-of-funana-the-forbidden-music-of-the-cape-verde-islands',
          a_string: 'Legend Of Funaná (The Forbidden Music of The Cape Verde Islands) by Bitori',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 8 ],
            "wednesday": [ 11, 22, 3, 7 ],
            "thursday": [ 10, 21, 2, 4 ],
            "saturday": [ 9, 20, 1, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3265876055/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/sweet-sweet-dreams',
          a_string: 'Sweet Sweet Dreams by Shadow',
          rule: {
            "monday": [ 9, 20, 1, 13 ],
            "tuesday": [ 13, 24, 5, 9 ],
            "wednesday": [ 12, 23, 4, 8 ],
            "thursday": [ 11, 22, 3, 7 ],
            "saturday": [ 10, 21, 2, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=177198044/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/stay-up-zimbabwe-limited-edition',
          a_string: 'Stay Up Zimbabwe (Limited Edition) by Bro. Valentino',
          rule: {
            "monday": [ 10, 21, 2, 4 ],
            "tuesday": [ 9, 20, 1, 13 ],
            "wednesday": [ 13, 24, 5, 9 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2078307647/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/resurrection-los-limited-edition',
          a_string: 'Resurrection Los (Limited Edition) by Los Camaroes',
          rule: {
            "monday": [ 11, 22, 3, 7 ],
            "tuesday": [ 10, 21, 2, 4 ],
            "wednesday": [ 9, 20, 1, 13 ],
            "thursday": [ 13, 24, 5, 9 ],
            "saturday": [ 12, 23, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=461963248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/hamad-kalkaba-and-the-golden-sounds-1974-1975',
          a_string: 'Hamad Kalkaba and The Golden Sounds 1974-1975 by Hamad Kalkaba',
          rule: {
            "monday": [ 12, 23, 4, 8 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 4 ],
            "thursday": [ 9, 20, 1, 13 ],
            "saturday": [ 13, 24, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3900784588/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/the-imaginary-soundtrack-to-a-brazilian-western-movie-1964-1974',
          a_string: 'The imaginary Soundtrack to a Brazilian Western Movie 1964 - 1974 by Camarão',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 8 ],
            "wednesday": [ 11, 22, 3, 7 ],
            "thursday": [ 10, 21, 2, 4 ],
            "saturday": [ 9, 20, 1, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1682336574/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/buli-povo-limited-edition',
          a_string: 'Buli Povo ! (Limited Edition) by António Sanches',
          rule: {
            "monday": [ 10, 21, 2, 14 ],
            "tuesday": [ 14, 25, 6, 10 ],
            "wednesday": [ 13, 24, 5, 9 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2334973202/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/african-scream-contest-vol-2-benin-1963-1980',
          a_string: 'African Scream Contest Vol.2 - Benin 1963-1980 by Various',
          rule: {
            "monday": [ 11, 22, 3, 5 ],
            "tuesday": [ 10, 21, 2, 14 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 9 ],
            "saturday": [ 12, 23, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=658813915/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/the-message-limited-edition',
          a_string: 'The Message (Limited Edition) by Gyedu-Blay Ambolley',
          rule: {
            "monday": [ 12, 23, 4, 8 ],
            "tuesday": [ 11, 22, 3, 5 ],
            "wednesday": [ 10, 21, 2, 14 ],
            "thursday": [ 14, 25, 6, 10 ],
            "saturday": [ 13, 24, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4149640893/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/de-bassari-togo-limited-edition',
          a_string: 'De Bassari Togo (Limited Edition) by Orchestre Abass',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 8 ],
            "wednesday": [ 11, 22, 3, 5 ],
            "thursday": [ 10, 21, 2, 14 ],
            "saturday": [ 14, 25, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3355149395/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/funky-rob-way-2',
          a_string: 'Funky Rob Way by Rob',
          rule: {
            "monday": [ 14, 25, 6, 10 ],
            "tuesday": [ 13, 24, 5, 9 ],
            "wednesday": [ 12, 23, 4, 8 ],
            "thursday": [ 11, 22, 3, 5 ],
            "saturday": [ 10, 21, 2, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1636954879/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wutamayi.bandcamp.com/album/la-face-cach-e',
          a_string: 'La Face Cachée by Wuta Mayi',
          rule: {
            "monday": [ 10, 21, 2, 14 ],
            "tuesday": [ 14, 25, 6, 10 ],
            "wednesday": [ 13, 24, 5, 9 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3388599277/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africaseven.bandcamp.com/album/return-to-the-mothers-garden-more-funky-sounds-of-female-africa-1971-1982',
          a_string: 'Return To The Mothers&#39; Garden (More Funky Sounds Of Female Africa 1971 - 1982) by Various Artists',
          rule: {
            "monday": [ 11, 22, 3, 5 ],
            "tuesday": [ 10, 21, 2, 14 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 9 ],
            "saturday": [ 12, 23, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1168888451/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://autonomousafrica.bandcamp.com/album/autonomous-africa-vol-iii',
          a_string: 'Autonomous Africa Vol. III by Autonomous Africa',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 15 ],
            "wednesday": [ 11, 22, 3, 15 ],
            "thursday": [ 15, 26, 7, 11 ],
            "saturday": [ 14, 25, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1360782052/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://autonomousafrica.bandcamp.com/album/autonomous-africa-vol-i',
          a_string: 'Autonomous Africa Vol. I by Autonomous Africa',
          rule: {
            "monday": [ 14, 25, 6, 10 ],
            "tuesday": [ 13, 24, 5, 9 ],
            "wednesday": [ 12, 23, 4, 15 ],
            "thursday": [ 11, 22, 3, 15 ],
            "saturday": [ 15, 26, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4246476012/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://autonomousafrica.bandcamp.com/album/autonomous-africa-vol-ii',
          a_string: 'Autonomous Africa Vol. II by Autonomous Africa',
          rule: {
            "monday": [ 15, 26, 7, 11 ],
            "tuesday": [ 14, 25, 6, 10 ],
            "wednesday": [ 13, 24, 5, 9 ],
            "thursday": [ 12, 23, 4, 15 ],
            "saturday": [ 11, 22, 3, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3280779077/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tinariwenmusic.bandcamp.com/album/amadjar',
          a_string: 'Amadjar by Tinariwen',
          rule: {
            "monday": [ 11, 22, 3, 15 ],
            "tuesday": [ 15, 26, 7, 11 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 9 ],
            "saturday": [ 12, 23, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2581492316/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tinariwenmusic.bandcamp.com/album/emmaar',
          a_string: 'Emmaar by Tinariwen',
          rule: {
            "monday": [ 12, 23, 4, 15 ],
            "tuesday": [ 11, 22, 3, 15 ],
            "wednesday": [ 15, 26, 7, 11 ],
            "thursday": [ 14, 25, 6, 10 ],
            "saturday": [ 13, 24, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3681570634/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mdoumoctar.bandcamp.com/album/ilana-the-creator',
          a_string: 'Ilana: The Creator by Mdou Moctar',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 15 ],
            "wednesday": [ 11, 22, 3, 15 ],
            "thursday": [ 15, 26, 7, 11 ],
            "saturday": [ 14, 25, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=336023747/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mdoumoctar.bandcamp.com/album/mdou-moctar-blue-stage-session',
          a_string: 'Mdou Moctar: Blue Stage Session by Mdou Moctar',
          rule: {
            "monday": [ 14, 25, 6, 10 ],
            "tuesday": [ 13, 24, 5, 9 ],
            "wednesday": [ 12, 23, 4, 15 ],
            "thursday": [ 11, 22, 3, 15 ],
            "saturday": [ 15, 26, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=141892888/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mdoumoctar.bandcamp.com/album/sousoume-tamachek',
          a_string: 'Sousoume Tamachek by Mdou Moctar',
          rule: {
            "monday": [ 16, 27, 8, 12 ],
            "tuesday": [ 15, 26, 7, 11 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 16 ],
            "saturday": [ 12, 23, 4, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=257703293/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mdoumoctar.bandcamp.com/album/akounak-tedalat-taha-tazoughai-ost',
          a_string: 'Akounak Tedalat Taha Tazoughai OST by Mdou Moctar',
          rule: {
            "monday": [ 12, 23, 4, 16 ],
            "tuesday": [ 16, 27, 8, 12 ],
            "wednesday": [ 15, 26, 7, 11 ],
            "thursday": [ 14, 25, 6, 10 ],
            "saturday": [ 13, 24, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3189176120/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://forwarduk.bandcamp.com/album/these-are-our-friends-too',
          a_string: 'These Are Our Friends Too by Various',
          rule: {
            "monday": [ 13, 24, 5, 16 ],
            "tuesday": [ 12, 23, 4, 16 ],
            "wednesday": [ 16, 27, 8, 12 ],
            "thursday": [ 15, 26, 7, 11 ],
            "saturday": [ 14, 25, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 311,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3028562138/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beatingheart.bandcamp.com/album/beating-heart-tanzania-originals-recorded-by-hugh-tracey',
          a_string: 'Beating Heart - Tanzania (Originals) Recorded by Hugh Tracey by Various Artists',
          rule: {
            "monday": [ 14, 25, 6, 10 ],
            "tuesday": [ 13, 24, 5, 16 ],
            "wednesday": [ 12, 23, 4, 16 ],
            "thursday": [ 16, 27, 8, 12 ],
            "saturday": [ 15, 26, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 312,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3097898040/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://reynatropical.bandcamp.com/album/sol-y-lluvia',
          a_string: 'Sol y Lluvia by Reyna Tropical',
          rule: {
            "monday": [ 15, 26, 7, 11 ],
            "tuesday": [ 14, 25, 6, 10 ],
            "wednesday": [ 13, 24, 5, 16 ],
            "thursday": [ 12, 23, 4, 16 ],
            "saturday": [ 16, 27, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('november_musics_id_seq', (SELECT MAX(id) FROM november_musics));");
    });
};
